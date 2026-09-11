import express from "express";
import u from "@/utils";
import { success, error } from "@/lib/responseFormat";
import { validateFields, requireAdmin } from "@/middleware/middleware";
import { getSupabaseAdmin } from "@/utils/supabaseAuth";
import { z } from "zod";

const router = express.Router();

// แอดมินสร้างบัญชีผู้ใช้ใหม่โดยตรง (ไม่ต้องผ่าน LINE Login) — สร้างทั้งใน Supabase Auth และ o_user
export default router.post(
  "/",
  requireAdmin,
  validateFields({
    email: z.string().email(),
    password: z.string().min(6),
    displayName: z.string().optional(),
    credits: z.number().optional(),
    isAdmin: z.boolean().optional(),
  }),
  async (req, res) => {
    const { email, password, displayName, credits, isAdmin } = req.body;

    const existing = await u.db("o_user").where("name", email).first();
    if (existing) return res.status(400).send(error("มีบัญชีอีเมลนี้อยู่แล้ว"));

    const admin = getSupabaseAdmin();
    const { data: created, error: authError } = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });
    if (authError || !created?.user) return res.status(400).send(error(authError?.message ?? "สร้างบัญชี Supabase Auth ไม่สำเร็จ"));

    await u.db("o_user").insert({
      name: email,
      supabaseUserId: created.user.id,
      displayName: displayName || null,
      credits: credits ?? 0,
      isAdmin: !!isAdmin,
      createTime: Date.now(),
    });

    const user = await u.db("o_user").where("supabaseUserId", created.user.id).first();
    return res.status(200).send(success(user, "สร้างผู้ใช้สำเร็จ"));
  },
);
