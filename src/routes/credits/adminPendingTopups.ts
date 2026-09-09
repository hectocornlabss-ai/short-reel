import express from "express";
import u from "@/utils";
import { success } from "@/lib/responseFormat";
import { requireAdmin } from "@/middleware/middleware";

const router = express.Router();

// รายการคำสั่งเติมเครดิตที่รอแอดมินตรวจสอบ (มีสลิปแนบแล้วแต่ยังไม่ผ่านการตรวจอัตโนมัติ)
export default router.get("/", requireAdmin, async (req, res) => {
  const list = await u
    .db("o_topupOrder")
    .join("o_user", "o_user.id", "o_topupOrder.userId")
    .where("o_topupOrder.status", "pending")
    .whereNotNull("o_topupOrder.slipImageUrl")
    .select("o_topupOrder.*", "o_user.name as userName", "o_user.displayName as userDisplayName")
    .orderBy("o_topupOrder.createTime", "asc");
  return res.status(200).send(success(list));
});
