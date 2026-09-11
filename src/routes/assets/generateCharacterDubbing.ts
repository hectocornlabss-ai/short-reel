import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { generateCharacterDubbing } from "@/utils/dubbing";
const router = express.Router();

// สร้างเสียงพากย์ให้ตัวละคร: แปลงข้อความเป็นคำอ่านไทยก่อน (G2P) แล้วใช้เสียงที่ล็อกไว้กับตัวละครนั้นเสมอ
export default router.post(
  "/",
  validateFields({
    projectId: z.number(),
    assetsRoleId: z.number(),
    text: z.string().min(1),
  }),
  async (req, res) => {
    const { projectId, assetsRoleId, text } = req.body;
    try {
      const result = await generateCharacterDubbing(assetsRoleId, text, {
        taskClass: "dubbing",
        describe: "สร้างเสียงพากย์ตัวละคร",
        relatedObjects: text.slice(0, 100),
        projectId,
      });

      const savePath = `/${projectId}/assets/dubbing/${u.uuid()}.mp3`;
      const base64Data = result.audioBase64.replace(/^data:[^;]+;base64,/, "");
      await u.oss.writeFile(savePath, base64Data);
      const src = await u.oss.getFileUrl(savePath);

      res.status(200).send(
        success({
          src,
          phoneticText: result.phoneticText,
          voiceId: result.voiceId,
        }),
      );
    } catch (e) {
      res.status(400).send(error(u.error(e).message));
    }
  },
);
