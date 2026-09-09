import express from "express";
import u from "@/utils";
import { success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { z } from "zod";

const router = express.Router();

// ประเมินเครดิตที่จะใช้คร่าวๆ สำหรับ 1 ตอน จากโมเดลภาพ/วิดีโอที่เลือกตอนสร้างโปรเจกต์
// เป็นการประมาณการเท่านั้น (ยังไม่รู้จำนวนฉากจริงจนกว่าจะตัดบท) ใช้ค่ามาตรฐานที่ปรับได้ที่ o_setting
export default router.post(
  "/",
  validateFields({ imageModel: z.string().optional(), videoModel: z.string().optional() }),
  async (req, res) => {
    const { imageModel, videoModel } = req.body;

    const getSetting = async (key: string, fallback: string) => {
      const row = await u.db("o_setting").where("key", key).first();
      return parseFloat(row?.value ?? fallback);
    };
    const images = await getSetting("estimateImagesPerEpisode", "15");
    const videoSeconds = await getSetting("estimateVideoSecondsPerEpisode", "40");

    const imageCredits = imageModel ? await u.pricing.creditsForImage(imageModel.split(/:(.+)/)[1] ?? imageModel, images) : 0;
    const videoCredits = videoModel ? await u.pricing.creditsForVideo(videoModel.split(/:(.+)/)[1] ?? videoModel, videoSeconds) : 0;

    return res.status(200).send(
      success({
        imageCredits,
        videoCredits,
        total: imageCredits + videoCredits,
        assumptions: { images, videoSeconds },
      }),
    );
  },
);
