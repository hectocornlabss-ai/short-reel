import express from "express";
import u from "@/utils";
import { success } from "@/lib/responseFormat";
const router = express.Router();

// รายการคำสั่งเติมเครดิตของผู้ใช้ปัจจุบัน
export default router.get("/", async (req, res) => {
  const userId = (req as any).user?.id;
  const list = await u.db("o_topupOrder").where("userId", userId).orderBy("createTime", "desc").limit(50);
  return res.status(200).send(success(list));
});
