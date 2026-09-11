import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { getSupabaseAdmin } from "@/utils/supabaseAuth";
const router = express.Router();

// เปลี่ยนชื่อที่แสดง + รหัสผ่านของบัญชีตัวเอง — รหัสผ่านอัปเดตจริงที่ Supabase Auth (ไม่ใช่แค่ในตาราง o_user local อีกต่อไป)
export default router.post(
  "/",
  validateFields({
    name: z.string(),
    password: z.string(),
    id: z.number(),
  }),
  async (req, res) => {
    const { name, password, id } = req.body;
    const requesterId = (req as any).user?.id;
    if (id !== requesterId) return res.status(403).send(error("แก้ไขได้เฉพาะบัญชีของตัวเองเท่านั้น"));

    const user = await u.db("o_user").where("id", id).first();
    if (!user) return res.status(404).send(error("ไม่พบผู้ใช้"));

    if (user.supabaseUserId) {
      const { error: authError } = await getSupabaseAdmin().auth.admin.updateUserById(user.supabaseUserId, { password });
      if (authError) return res.status(400).send(error(authError.message));
    }

    await u.db("o_user").where("id", id).update({ name });
    res.status(200).send(success("保存设置成功"));
  },
);
