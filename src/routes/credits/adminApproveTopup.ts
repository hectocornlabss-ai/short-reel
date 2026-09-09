import express from "express";
import u from "@/utils";
import { success, error } from "@/lib/responseFormat";
import { validateFields, requireAdmin } from "@/middleware/middleware";
import { z } from "zod";

const router = express.Router();

// แอดมินอนุมัติคำสั่งเติมเครดิตด้วยตนเอง (ใช้ตอนยังไม่ได้ต่อระบบตรวจสลิปอัตโนมัติ หรือกรณีตรวจอัตโนมัติไม่ผ่าน)
export default router.post(
  "/",
  requireAdmin,
  validateFields({ orderId: z.string(), approve: z.boolean() }),
  async (req, res) => {
    const { orderId, approve } = req.body;
    const order = await u.db("o_topupOrder").where("id", orderId).first();
    if (!order) return res.status(404).send(error("ไม่พบคำสั่งเติมเครดิต"));
    if (order.status !== "pending") return res.status(400).send(error("คำสั่งนี้ถูกดำเนินการไปแล้ว"));

    if (approve) {
      await u.db("o_topupOrder").where("id", orderId).update({ status: "paid", verifiedTime: Date.now() });
      await u.credits.adjustCredits(order.userId!, order.credits!, "topup", orderId, "อนุมัติโดยแอดมิน");
    } else {
      await u.db("o_topupOrder").where("id", orderId).update({ status: "rejected", verifiedTime: Date.now() });
    }

    return res.status(200).send(success({ status: approve ? "paid" : "rejected" }));
  },
);
