import express from "express";
import u from "@/utils";
import { success, error } from "@/lib/responseFormat";
import { validateFields, requireAdmin } from "@/middleware/middleware";
import { getSupabaseAdmin } from "@/utils/supabaseAuth";
import { z } from "zod";

const router = express.Router();

// แอดมินแก้ไขอีเมล/รีเซ็ตรหัสผ่านให้ผู้ใช้คนอื่น (กรณีลูกค้าลืมรหัสผ่าน/พิมพ์อีเมลผิดตอนสมัคร)
export default router.post(
  "/",
  requireAdmin,
  validateFields({
    userId: z.number(),
    email: z.string().email().optional(),
    password: z.string().min(6).optional(),
  }),
  async (req, res) => {
    const { userId, email, password } = req.body;
    if (!email && !password) return res.status(400).send(error("กรุณาระบุอีเมลหรือรหัสผ่านใหม่อย่างน้อยหนึ่งอย่าง"));

    const user = await u.db("o_user").where("id", userId).first();
    if (!user) return res.status(404).send(error("ไม่พบผู้ใช้"));
    if (!user.supabaseUserId) return res.status(400).send(error("บัญชีนี้ยังไม่ได้ผูกกับระบบยืนยันตัวตน แก้ไขไม่ได้"));

    const patch: { email?: string; password?: string } = {};
    if (email) patch.email = email;
    if (password) patch.password = password;

    const { error: authError } = await getSupabaseAdmin().auth.admin.updateUserById(user.supabaseUserId, patch);
    if (authError) return res.status(400).send(error(authError.message));

    if (email) await u.db("o_user").where("id", userId).update({ name: email });

    return res.status(200).send(success(null, "อัปเดตข้อมูลผู้ใช้สำเร็จ"));
  },
);
