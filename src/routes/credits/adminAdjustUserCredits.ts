import express from "express";
import u from "@/utils";
import { success, error } from "@/lib/responseFormat";
import { validateFields, requireAdmin } from "@/middleware/middleware";
import { z } from "zod";

const router = express.Router();

// แอดมินปรับเครดิตผู้ใช้ด้วยมือ (บวก/ลบ) พร้อมบันทึกเหตุผลลง ledger เสมอ
export default router.post(
  "/",
  requireAdmin,
  validateFields({ userId: z.number(), delta: z.number(), note: z.string().optional() }),
  async (req, res) => {
    const { userId, delta, note } = req.body;
    if (delta === 0) return res.status(400).send(error("กรุณาระบุจำนวนที่ไม่เป็นศูนย์"));
    try {
      const balanceAfter = await u.credits.adjustCredits(userId, delta, "adminAdjust", undefined, note || `แอดมินปรับเครดิต ${delta > 0 ? "+" : ""}${delta}`);
      return res.status(200).send(success({ balanceAfter }));
    } catch (e) {
      return res.status(400).send(error(u.error(e).message));
    }
  },
);
