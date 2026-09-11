import express from "express";
import axios from "axios";
import u from "@/utils";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { z } from "zod";

const router = express.Router();

// อัปโหลดสลิปโอนเงินสำหรับคำสั่งเติมเครดิต แล้วพยายามตรวจสอบอัตโนมัติผ่าน SlipOK (ถ้าตั้งค่า API key ไว้)
// ถ้ายังไม่ได้ตั้งค่าผู้ให้บริการตรวจสลิป จะบันทึกเป็น "รอตรวจสอบ" ให้แอดมินอนุมัติเองก่อน
export default router.post(
  "/",
  validateFields({ slipImageBase64: z.string() }),
  async (req, res) => {
    const userId = (req as any).user?.id;
    const id = req.params.id as string;
    const { slipImageBase64 } = req.body;

    const order = await u.db("o_topupOrder").where("id", id).andWhere("userId", userId).first();
    if (!order) return res.status(404).send(error("ไม่พบคำสั่งเติมเครดิต"));
    if (order.status !== "pending") return res.status(400).send(error("คำสั่งนี้ถูกดำเนินการไปแล้ว"));

    // ล็อกออเดอร์แบบ atomic (กันยิงอัปโหลดสลิปซ้ำๆ พร้อมกันหลายครั้งจนได้เครดิตซ้ำ)
    const claimed = await u.db("o_topupOrder").where("id", id).andWhere("status", "pending").update({ status: "processing" });
    if (claimed !== 1) return res.status(400).send(error("คำสั่งนี้กำลังถูกดำเนินการอยู่ กรุณารอสักครู่"));

    const slipPath = `slips/${id}.jpg`;
    await u.oss.writeFile(slipPath, slipImageBase64);
    const slipImageUrl = await u.oss.getFileUrl(slipPath);

    const apiKey = process.env.SLIP_VERIFY_API_KEY;
    const apiUrl = process.env.SLIP_VERIFY_API_URL;

    if (!apiKey || !apiUrl) {
      await u.db("o_topupOrder").where("id", id).update({ status: "pending", slipImageUrl });
      return res.status(200).send(success({ status: "pending" }, "อัปโหลดสลิปแล้ว รอแอดมินตรวจสอบและอนุมัติ"));
    }

    try {
      const verifyRes = await axios.post(
        apiUrl,
        { data: slipImageBase64.replace(/^data:[^;]+;base64,/, "") },
        { headers: { "x-authorization": apiKey, "Content-Type": "application/json" } },
      );
      const verified = verifyRes.data?.success === true;
      const amountFromSlip = verifyRes.data?.data?.amount;
      const transRef = verifyRes.data?.data?.transRef ?? null;

      // กันสลิปใบเดียวถูกเอาไปใช้ซ้ำหลายออเดอร์ (ทั้งของตัวเองและของคนอื่น)
      const slipAlreadyUsed = transRef ? await u.db("o_topupOrder").where("slipRef", transRef).whereNot("id", id).first() : null;

      if (verified && !slipAlreadyUsed && amountFromSlip >= (order.amountThb ?? 0)) {
        await u.db("o_topupOrder").where("id", id).update({
          status: "paid",
          slipImageUrl,
          slipRef: transRef,
          providerResponse: JSON.stringify(verifyRes.data),
          verifiedTime: Date.now(),
        });
        await u.credits.adjustCredits(userId, order.credits!, "topup", id, `เติมเครดิต ${order.credits} จากยอดโอน ${order.amountThb} บาท`);
        return res.status(200).send(success({ status: "paid", credits: order.credits }, "ตรวจสอบสลิปสำเร็จ เติมเครดิตให้แล้ว"));
      }

      await u.db("o_topupOrder").where("id", id).update({
        status: "pending",
        slipImageUrl,
        slipRef: transRef,
        providerResponse: JSON.stringify(verifyRes.data) + (slipAlreadyUsed ? " [slip ซ้ำกับออเดอร์อื่น]" : ""),
      });
      return res.status(200).send(success({ status: "pending" }, "ตรวจสอบสลิปอัตโนมัติไม่สำเร็จ รอแอดมินตรวจสอบ"));
    } catch (e) {
      await u.db("o_topupOrder").where("id", id).update({ status: "pending", slipImageUrl });
      return res.status(200).send(success({ status: "pending" }, "ตรวจสอบสลิปอัตโนมัติล้มเหลว รอแอดมินตรวจสอบ"));
    }
  },
);
