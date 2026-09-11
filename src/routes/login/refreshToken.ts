import express from "express";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { getSupabaseAnon } from "@/utils/supabaseAuth";
import { z } from "zod";
const router = express.Router();

// ต่ออายุ session ด้วย refresh token แทนการบังคับ logout เมื่อ access token หมดอายุ
export default router.post(
  "/",
  validateFields({
    refreshToken: z.string(),
  }),
  async (req, res) => {
    const { refreshToken } = req.body;

    const { data, error: authError } = await getSupabaseAnon().auth.refreshSession({ refresh_token: refreshToken });
    if (authError || !data?.session) return res.status(401).send(error("session หมดอายุ กรุณาเข้าสู่ระบบใหม่"));

    return res.status(200).send(
      success({
        token: "Bearer " + data.session.access_token,
        refreshToken: data.session.refresh_token,
      }),
    );
  },
);
