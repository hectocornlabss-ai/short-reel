import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
const router = express.Router();

// ดึงสถานะ/ผลลัพธ์วิดีโอฉบับรวมล่าสุดของบทนี้ (ต่อทุกช็อต + มิกซ์เสียงพากย์แล้ว)
export default router.post(
  "/",
  validateFields({
    projectId: z.number(),
    scriptId: z.number(),
  }),
  async (req, res) => {
    const { projectId, scriptId } = req.body;
    const row = await u.db("o_finalVideo").where({ projectId, scriptId }).orderBy("id", "desc").first();
    if (!row) return res.status(200).send(success(null));
    res.status(200).send(
      success({
        id: row.id,
        state: row.state,
        errorReason: row.errorReason,
        url: row.filePath ? await u.oss.getFileUrl(row.filePath) : null,
        updateTime: row.updateTime,
      }),
    );
  },
);
