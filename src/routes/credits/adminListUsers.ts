import express from "express";
import u from "@/utils";
import { success } from "@/lib/responseFormat";
import { requireAdmin } from "@/middleware/middleware";

const router = express.Router();

// รายชื่อผู้ใช้ทั้งหมด สำหรับแอดมินดูภาพรวม/จัดการเครดิต
export default router.get("/", requireAdmin, async (req, res) => {
  const users = await u
    .db("o_user")
    .select("id", "name", "displayName", "avatar", "credits", "isAdmin", "lineUserId", "createTime")
    .orderBy("createTime", "desc");
  return res.status(200).send(success(users.map((row) => ({ ...row, credits: row.credits ?? 0 }))));
});
