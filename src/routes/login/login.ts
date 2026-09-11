import express from "express";
import u from "@/utils";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { getSupabaseAnon } from "@/utils/supabaseAuth";
import { z } from "zod";
const router = express.Router();

// เข้าสู่ระบบด้วย email/รหัสผ่าน (สำหรับแอดมิน) — ยืนยันตัวตนผ่าน Supabase Auth จริง
export default router.post(
  "/",
  validateFields({
    email: z.string().email(),
    password: z.string(),
  }),
  async (req, res) => {
    const { email, password } = req.body;

    const { data, error: authError } = await getSupabaseAnon().auth.signInWithPassword({ email, password });
    if (authError || !data?.session) return res.status(400).send(error("อีเมลหรือรหัสผ่านไม่ถูกต้อง"));

    const user = await u.db("o_user").where("supabaseUserId", data.user!.id).first();
    if (!user) return res.status(403).send(error("บัญชีนี้ยังไม่ได้เชื่อมกับระบบสมาชิก กรุณาติดต่อแอดมิน"));

    return res.status(200).send(
      success(
        {
          token: "Bearer " + data.session.access_token,
          refreshToken: data.session.refresh_token,
          name: user.name,
          id: user.id,
        },
        "เข้าสู่ระบบสำเร็จ",
      ),
    );
  },
);
