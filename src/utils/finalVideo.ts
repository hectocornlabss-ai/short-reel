import u from "@/utils";
import path from "node:path";
import fs from "node:fs/promises";
import os from "node:os";
import { randomUUID } from "node:crypto";
import { generateCharacterDubbing } from "@/utils/dubbing";
import { mixDubbingIntoVideo, concatVideos } from "@/utils/video";

async function writeBase64ToFile(dataUrlOrBase64: string, filePath: string): Promise<void> {
  const base64 = dataUrlOrBase64.replace(/^data:[^;]+;base64,/, "");
  await fs.writeFile(filePath, Buffer.from(base64, "base64"));
}

/**
 * ดึงบทพูด "ที่แม่นยำ" จาก prompt วิดีโอที่ AI สร้างไว้แล้ว (o_videoTrack.prompt)
 * แม่นยำกว่าการแยกจาก videoDesc ดิบด้วย AI ซ้ำ เพราะ prompt ที่สร้างไว้ยึดฟอร์แมตตายตัวเสมอ
 * (เทมเพลตกำหนดให้ย่อหน้าแรกประกาศ <ตัวละครN>(ชื่อจริง) และเนื้อหาใช้ "<ตัวละครN> พูดว่า {บทพูด}" เท่านั้น)
 */
function extractDialogueFromGeneratedPrompt(prompt: string): { characterName: string; line: string }[] {
  if (!prompt?.trim()) return [];
  const labelToName = new Map<string, string>();
  const defRe = /<ตัวละคร(\d+)>\s*\(\s*([^,)]+)/g;
  let m: RegExpExecArray | null;
  while ((m = defRe.exec(prompt))) {
    labelToName.set(m[1], m[2].trim());
  }
  const lines: { characterName: string; line: string }[] = [];
  const lineRe = /<ตัวละคร(\d+)>\s*(?:@รูปภาพ\d+\s*)?พูดว่า\s*\{([^}]+)\}/g;
  while ((m = lineRe.exec(prompt))) {
    const name = labelToName.get(m[1]);
    if (name) lines.push({ characterName: name, line: m[2].trim() });
  }
  return lines;
}

/**
 * สร้าง "วิดีโอฉบับรวม" ของบทหนึ่งบท — ต่อทุกช็อตที่สร้างวิดีโอสำเร็จแล้วเรียงตามลำดับสตอรี่บอร์ด
 * พร้อมมิกซ์เสียงพากย์ตัวละคร (ถ้ามีบทพูดในช็อตนั้น) เข้าไปด้วย แล้วบันทึกผลลงตาราง o_finalVideo
 * ทำงานเบื้องหลังทั้งหมด ไม่ throw ออกไปนอกฟังก์ชัน (เก็บ error ไว้ใน state/errorReason ของแถวแทน)
 */
export async function generateFinalMergedVideo(projectId: number, scriptId: number): Promise<void> {
  const startTime = Date.now();
  await u.db("o_finalVideo").insert({ projectId, scriptId, state: "generating", createTime: startTime, updateTime: startTime });
  const row = await u.db("o_finalVideo").where({ projectId, scriptId, createTime: startTime }).orderBy("id", "desc").first();
  const finalVideoId = row!.id!;

  const tempDir = path.join(os.tmpdir(), "toonflow-final-" + randomUUID());
  await fs.mkdir(tempDir, { recursive: true });

  try {
    const storyboardList = await u.db("o_storyboard").where({ scriptId, projectId }).orderBy("index", "asc");
    if (!storyboardList.length) throw new Error("ยังไม่มีสตอรี่บอร์ดในบทนี้");

    // เรียง trackId ตามลำดับที่ปรากฏครั้งแรกใน storyboard (= ลำดับที่ถูกต้องของเนื้อเรื่อง)
    const trackOrder: number[] = [];
    for (const sb of storyboardList) {
      const tid = sb.trackId as number | null;
      if (tid && !trackOrder.includes(tid)) trackOrder.push(tid);
    }
    if (!trackOrder.length) throw new Error("ยังไม่มีแทร็กวิดีโอในบทนี้");

    const characterRows = await u.db("o_assets").where({ projectId, type: "role" }).select("id", "name");
    const nameToRoleId = new Map<string, number>();
    for (const c of characterRows) if (c.name) nameToRoleId.set(c.name, c.id!);

    const segmentPaths: string[] = [];
    let skippedTracks = 0;

    for (let i = 0; i < trackOrder.length; i++) {
      const trackId = trackOrder[i];
      const track = await u.db("o_videoTrack").where({ id: trackId }).first();
      if (!track) {
        skippedTracks++;
        continue;
      }
      let video = track.selectVideoId ? await u.db("o_video").where({ id: track.selectVideoId }).first() : undefined;
      if (!video || video.state !== "生成成功") {
        video = await u.db("o_video").where({ videoTrackId: trackId, state: "生成成功" }).orderBy("id", "desc").first();
      }
      if (!video?.filePath) {
        skippedTracks++;
        continue;
      }

      const videoAbsPath = u.oss.getAbsolutePath(video.filePath);
      const dialogueLines = extractDialogueFromGeneratedPrompt(track.prompt ?? "");

      const dubbingClipPaths: string[] = [];
      for (let j = 0; j < dialogueLines.length; j++) {
        const { characterName, line } = dialogueLines[j];
        const roleId = nameToRoleId.get(characterName);
        if (!roleId) continue;
        try {
          const dubbed = await generateCharacterDubbing(roleId, line);
          const clipPath = path.join(tempDir, `dub_${i}_${j}.mp3`);
          await writeBase64ToFile(dubbed.audioBase64, clipPath);
          dubbingClipPaths.push(clipPath);
        } catch (e) {
          console.error(`[finalVideo] สร้างเสียงพากย์ล้มเหลว (track ${trackId}, บท "${line}"):`, u.error(e).message);
        }
      }

      const segmentOutPath = path.join(tempDir, `segment_${i}.mp4`);
      await mixDubbingIntoVideo(videoAbsPath, dubbingClipPaths, segmentOutPath);
      segmentPaths.push(segmentOutPath);
    }

    if (!segmentPaths.length) throw new Error(`ไม่มีช็อตไหนสร้างวิดีโอสำเร็จเลย (ข้ามไป ${skippedTracks} แทร็ก)`);

    const finalRelPath = `/${projectId}/video/final_${scriptId}_${randomUUID()}.mp4`;
    const finalAbsPath = u.oss.getAbsolutePath(finalRelPath);
    await fs.mkdir(path.dirname(finalAbsPath), { recursive: true });
    await concatVideos(segmentPaths, finalAbsPath);

    await u.db("o_finalVideo").where({ id: finalVideoId }).update({
      state: "success",
      filePath: finalRelPath,
      updateTime: Date.now(),
    });
  } catch (e) {
    await u.db("o_finalVideo").where({ id: finalVideoId }).update({
      state: "failed",
      errorReason: u.error(e).message,
      updateTime: Date.now(),
    });
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true }).catch(() => {});
  }
}
