import express from "express";
import u from "@/utils";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { z } from "zod";
import generatePayload from "promptpay-qr";
import QRCode from "qrcode";

const router = express.Router();

// สร้างคำสั่งเติมเครดิต: คำนวณจำนวนเครดิตจากยอดโอน (บาท) แล้วออก QR PromptPay ให้จ่าย
export default router.post(
  "/",
  validateFields({ amountThb: z.number().positive() }),
  async (req, res) => {
    const userId = (req as any).user?.id;
    const { amountThb } = req.body;

    const promptpayId = process.env.PROMPTPAY_ID;
    if (!promptpayId) return res.status(500).send(error("ยังไม่ได้ตั้งค่า PROMPTPAY_ID ที่ .env กรุณาติดต่อแอดมิน"));

    const priceRow = await u.db("o_setting").where("key", "creditPriceThb").first();
    const creditPriceThb = parseFloat(priceRow?.value ?? "0.5"); // ราคาต่อ 1 เครดิต (บาท) — ยังไม่ได้คำนวณต้นทุน/กำไรจริง ปรับได้ที่ o_setting
    const credits = Math.floor(amountThb / creditPriceThb);

    const id = u.uuid();
    await u.db("o_topupOrder").insert({
      id,
      userId,
      amountThb,
      credits,
      status: "pending",
      createTime: Date.now(),
    });

    const payload = generatePayload(promptpayId, { amount: amountThb });
    const qrDataUrl = await QRCode.toDataURL(payload);

    return res.status(200).send(success({ orderId: id, amountThb, credits, qrDataUrl }));
  },
);
