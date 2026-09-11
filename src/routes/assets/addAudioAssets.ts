import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
const router = express.Router();

// 新增资产
export default router.post(
  "/",
  validateFields({
    name: z.string(),
    describe: z.string(),
    projectId: z.number(),
    assetsItem: z.array(
      z.object({
        base64: z.string(),
        prompt: z.string(),
        describe: z.string(),
        name: z.string(),
      }),
    ),
  }),
  async (req, res) => {
    const { name, describe, projectId, assetsItem } = req.body;
    await Promise.all(
      assetsItem.map(async (i: { src?: string; base64: string; prompt: string }) => {
        if (i.base64) {
          const mimeMatch = i.base64.match(/^data:audio\/([^;]+);base64,/);
          const mimeExt = mimeMatch ? mimeMatch[1] : "mp3";
          const mimeToExt: Record<string, string> = {
            mpeg: "mp3",
            "x-wav": "wav",
            "x-aiff": "aiff",
            "x-m4a": "m4a",
            "x-flac": "flac",
          };
          const ext = mimeToExt[mimeExt] ?? mimeExt;
          const savePath = `/${projectId}/assets/audio/${u.uuid()}.${ext}`;
          const base64Data = i.base64.replace(/^data:[^;]+;base64,/, "");
          await u.oss.writeFile(savePath, base64Data);
          i.src = savePath;
        }
      }),
    );

    // ไม่ใช้ .returning("id")/destructure ตรงๆ เพราะ Postgres ไม่รับประกันพฤติกรรมเดียวกับ SQLite
    const rootStartTime = Date.now();
    await u.db("o_assets").insert({
      name,
      describe,
      type: "audio",
      projectId,
      startTime: rootStartTime,
    });
    const rootAsset = await u.db("o_assets").where({ name, describe, type: "audio", projectId, startTime: rootStartTime }).orderBy("id", "desc").first();
    const id = rootAsset!.id!;
    for (let i = 0; i < assetsItem.length; i++) {
      const item = assetsItem[i];
      const startTime = Date.now() + i;
      await u.db("o_assets").insert({
        prompt: item.prompt,
        assetsId: id,
        type: "audio",
        describe: item.describe,
        name: item.name,
        projectId,
        startTime,
      });
      const assetsRow = await u.db("o_assets").where({ assetsId: id, name: item.name, projectId, startTime }).orderBy("id", "desc").first();
      const assetsId = assetsRow!.id!;
      await u.db("o_image").insert({
        filePath: item.src,
        type: "audio",
        assetsId,
        state: "已完成",
      });
      const imageRow = await u.db("o_image").where({ assetsId, type: "audio", state: "已完成" }).orderBy("id", "desc").first();
      const imageId = imageRow!.id!;
      await u.db("o_assets").where("id", assetsId).update({
        imageId,
      });
    }

    res.status(200).send(success({ message: "新增资产成功" }));
  },
);
