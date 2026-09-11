import express from "express";
import u from "@/utils";
import { success, error } from "@/lib/responseFormat";
import { validateFields, requireAdmin } from "@/middleware/middleware";
import { z } from "zod";

const router = express.Router();

const ALLOWED_KEYS = [
  "creditUsdPerCredit",
  "creditMarginMultiplier",
  "creditPriceThb",
  "signupBonusCredits",
  "estimateImagesPerEpisode",
  "estimateVideoSecondsPerEpisode",
];

// แอดมินปรับต้นทุน/กำไร/อัตราแลกเปลี่ยนเครดิตได้เอง ไม่ต้องแก้ตรง DB
export default router.post(
  "/",
  requireAdmin,
  validateFields({ settings: z.record(z.string(), z.string()) }),
  async (req, res) => {
    const { settings } = req.body;
    const entries = Object.entries(settings).filter(([key]) => ALLOWED_KEYS.includes(key));
    if (!entries.length) return res.status(400).send(error("ไม่มีค่าตั้งค่าที่รู้จัก"));

    for (const [key, rawValue] of entries) {
      const value = String(rawValue);
      if (isNaN(parseFloat(value))) return res.status(400).send(error(`ค่า ${key} ต้องเป็นตัวเลข`));
      const exists = await u.db("o_setting").where("key", key).first();
      if (exists) await u.db("o_setting").where("key", key).update({ value });
      else await u.db("o_setting").insert({ key, value });
    }
    return res.status(200).send(success(null, "บันทึกสำเร็จ"));
  },
);
