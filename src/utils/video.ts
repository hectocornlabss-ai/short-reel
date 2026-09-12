import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import ffprobeInstaller from "@ffprobe-installer/ffprobe";
import ffmpeg from "fluent-ffmpeg";
import path from "node:path";
import fs from "node:fs/promises";
import os from "node:os";
import { randomUUID } from "node:crypto";

ffmpeg.setFfmpegPath(ffmpegInstaller.path);
ffmpeg.setFfprobePath(ffprobeInstaller.path);

async function makeTempDir(): Promise<string> {
  const dir = path.join(os.tmpdir(), "toonflow-video-" + randomUUID());
  await fs.mkdir(dir, { recursive: true });
  return dir;
}

/**
 * มิกซ์เสียงพากย์ตัวละคร (dubbing) เข้ากับวิดีโอ 1 คลิป
 * เสียงต้นฉบับของวิดีโอ (ถ้ามี) จะถูกผสมรวมกับเสียงพากย์ (ไม่ตัดทิ้ง) เพื่อให้ยังได้ยินเสียงประกอบ/บรรยากาศอยู่
 * @param videoPath เส้นทางไฟล์วิดีโอต้นฉบับ (absolute path)
 * @param dubbingClips รายการไฟล์เสียงพากย์ที่จะเรียงต่อกันตามลำดับบทพูดในช็อตนี้ (absolute path แต่ละไฟล์)
 * @param outputPath เส้นทางไฟล์ผลลัพธ์ (absolute path)
 */
export async function mixDubbingIntoVideo(videoPath: string, dubbingClips: string[], outputPath: string): Promise<void> {
  if (dubbingClips.length === 0) {
    // ไม่มีบทพูดในช็อตนี้ แค่คัดลอกไฟล์ต้นฉบับไปตำแหน่งผลลัพธ์
    await fs.copyFile(videoPath, outputPath);
    return;
  }
  const tempDir = await makeTempDir();
  try {
    // 1) ต่อไฟล์เสียงพากย์ทั้งหมดของช็อตนี้เป็นไฟล์เดียวก่อน (เรียงตามลำดับบทพูด)
    const concatAudioPath = path.join(tempDir, "dubbing.mp3");
    await new Promise<void>((resolve, reject) => {
      const cmd = ffmpeg();
      dubbingClips.forEach((clip) => cmd.input(clip));
      cmd
        .on("error", reject)
        .on("end", () => resolve())
        .mergeToFile(concatAudioPath, tempDir);
    });

    // 2) ผสมเสียงพากย์ (concatAudioPath) เข้ากับเสียงต้นฉบับของวิดีโอ แล้วเขียนวิดีโอผลลัพธ์
    await new Promise<void>((resolve, reject) => {
      ffmpeg(videoPath)
        .input(concatAudioPath)
        .complexFilter(["[0:a]volume=0.6[bg]", "[1:a]volume=1.5[dub]", "[bg][dub]amix=inputs=2:duration=first:dropout_transition=0[aout]"])
        .outputOptions(["-map", "0:v", "-map", "[aout]", "-c:v", "copy", "-shortest"])
        .on("error", reject)
        .on("end", () => resolve())
        .save(outputPath);
    });
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true }).catch(() => {});
  }
}

/**
 * ต่อวิดีโอหลายคลิปเข้าด้วยกันเป็นไฟล์เดียว (เรียงตามลำดับที่ส่งมาใน videoPaths)
 * ใช้ concat demuxer ของ ffmpeg — คลิปทั้งหมดควรมี codec/ความละเอียดใกล้เคียงกัน (มาจากโมเดลเดียวกัน จึงมักจะตรงกันอยู่แล้ว)
 * ถ้า codec ไม่ตรงกันจริงๆ จะ fallback ไปใช้ re-encode concat แทนอัตโนมัติ
 */
export async function concatVideos(videoPaths: string[], outputPath: string): Promise<void> {
  if (videoPaths.length === 0) throw new Error("ไม่มีไฟล์วิดีโอให้ต่อ");
  if (videoPaths.length === 1) {
    await fs.copyFile(videoPaths[0], outputPath);
    return;
  }
  const tempDir = await makeTempDir();
  try {
    const listFile = path.join(tempDir, "concat.txt");
    const listContent = videoPaths.map((p) => `file '${p.replace(/'/g, "'\\''")}'`).join("\n");
    await fs.writeFile(listFile, listContent, "utf-8");

    const tryConcat = (reencode: boolean) =>
      new Promise<void>((resolve, reject) => {
        const cmd = ffmpeg().input(listFile).inputOptions(["-f", "concat", "-safe", "0"]);
        if (reencode) {
          cmd.outputOptions(["-c:v", "libx264", "-c:a", "aac", "-pix_fmt", "yuv420p"]);
        } else {
          cmd.outputOptions(["-c", "copy"]);
        }
        cmd
          .on("error", reject)
          .on("end", () => resolve())
          .save(outputPath);
      });

    try {
      await tryConcat(false);
    } catch (e) {
      // codec/พารามิเตอร์ของแต่ละคลิปไม่ตรงกันพอที่จะต่อแบบ copy ตรงๆ ได้ ให้ re-encode ใหม่แทน (ช้ากว่าแต่ชัวร์กว่า)
      await tryConcat(true);
    }
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true }).catch(() => {});
  }
}
