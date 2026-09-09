import express from "express";
import u from "@/utils";
import { success } from "@/lib/responseFormat";
const router = express.Router();

// ประวัติการหัก/เติมเครดิตของผู้ใช้ปัจจุบัน (ใหม่สุดก่อน)
export default router.get("/", async (req, res) => {
  const userId = (req as any).user?.id;
  const page = Math.max(1, parseInt((req.query.page as string) ?? "1", 10));
  const pageSize = Math.min(100, Math.max(1, parseInt((req.query.pageSize as string) ?? "20", 10)));

  const total = await u.db("o_creditLedger").where("userId", userId).count<{ count: number }[]>("id as count").first();
  const list = await u
    .db("o_creditLedger")
    .where("userId", userId)
    .orderBy("createTime", "desc")
    .limit(pageSize)
    .offset((page - 1) * pageSize);

  return res.status(200).send(success({ list, total: Number((total as any)?.count ?? 0), page, pageSize }));
});
