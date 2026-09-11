import express from "express";
import u from "@/utils";
import { success } from "@/lib/responseFormat";
import { requireAdmin } from "@/middleware/middleware";

const router = express.Router();

const KEYS = [
  "creditUsdPerCredit",
  "creditMarginMultiplier",
  "creditPriceThb",
  "signupBonusCredits",
  "estimateImagesPerEpisode",
  "estimateVideoSecondsPerEpisode",
];

// แอดมินดูค่าตั้งต้นทุน/กำไร/อัตราแลกเปลี่ยนเครดิตทั้งหมดในที่เดียว
export default router.get("/", requireAdmin, async (req, res) => {
  const rows = await u.db("o_setting").whereIn("key", KEYS);
  const result: Record<string, string> = {};
  for (const key of KEYS) result[key] = rows.find((r) => r.key === key)?.value ?? "";
  return res.status(200).send(success(result));
});
