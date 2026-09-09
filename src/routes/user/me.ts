import express from "express";
import u from "@/utils";
import { success, error } from "@/lib/responseFormat";
const router = express.Router();

// ข้อมูลผู้ใช้ปัจจุบัน (เครดิตคงเหลือ, สิทธิ์แอดมิน, โปรไฟล์)
export default router.get("/", async (req, res) => {
  const userId = (req as any).user?.id;
  const user = await u.db("o_user").where("id", userId).first();
  if (!user) return res.status(404).send(error("ไม่พบผู้ใช้"));
  return res.status(200).send(
    success({
      id: user.id,
      name: user.name,
      displayName: user.displayName ?? user.name,
      avatar: user.avatar ?? null,
      credits: user.credits ?? 0,
      isAdmin: !!user.isAdmin,
    }),
  );
});
