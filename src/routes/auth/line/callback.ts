import express from "express";
import axios from "axios";
import u from "@/utils";
import { getSupabaseAdmin, mintSessionForEmail, lineSyntheticEmail } from "@/utils/supabaseAuth";
import { v4 as uuid } from "uuid";

const router = express.Router();

function readCookie(req: express.Request, name: string): string | null {
  const raw = req.headers.cookie || "";
  const match = raw.split(";").map((s) => s.trim()).find((s) => s.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
}

// รับ callback จาก LINE Login: แลก code เป็น token, ดึงโปรไฟล์, ผูก/สร้างบัญชีใน Supabase Auth, แจกเครดิตต้อนรับถ้าเป็นสมาชิกใหม่
export default router.get("/", async (req, res) => {
  const frontendRedirect = (params: Record<string, string>) => {
    const url = new URL("/", `${req.protocol}://${req.get("host")}`);
    for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
    return res.redirect(url.toString());
  };

  try {
    const { code, state, error: lineError } = req.query as Record<string, string>;
    if (lineError) return frontendRedirect({ lineError });

    const expectedState = readCookie(req, "line_oauth_state");
    if (!code || !state || !expectedState || state !== expectedState) {
      return frontendRedirect({ lineError: "state_mismatch" });
    }
    res.clearCookie("line_oauth_state");

    const channelId = process.env.LINE_LOGIN_CHANNEL_ID!;
    const channelSecret = process.env.LINE_LOGIN_CHANNEL_SECRET!;
    const callbackUrl = process.env.LINE_LOGIN_CALLBACK_URL!;

    const tokenRes = await axios.post(
      "https://api.line.me/oauth2/v2.1/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: callbackUrl,
        client_id: channelId,
        client_secret: channelSecret,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } },
    );
    const lineAccessToken = tokenRes.data.access_token;

    const profileRes = await axios.get("https://api.line.me/v2/profile", {
      headers: { Authorization: `Bearer ${lineAccessToken}` },
    });
    const { userId: lineUserId, displayName, pictureUrl } = profileRes.data;
    const email = lineSyntheticEmail(lineUserId);

    let user = await u.db("o_user").where("lineUserId", lineUserId).first();
    let isNewUser = false;

    if (!user) {
      isNewUser = true;
      const admin = getSupabaseAdmin();
      const { data: created, error: createError } = await admin.auth.admin.createUser({
        email,
        password: uuid(), // สุ่มไว้ ไม่มีใครใช้จริง เพราะ LINE user ล็อกอินผ่าน magic link เท่านั้น ไม่ผ่านรหัสผ่าน
        email_confirm: true,
        user_metadata: { lineUserId, displayName },
      });
      if (createError || !created?.user) throw new Error(createError?.message ?? "สร้างบัญชี Supabase Auth ไม่สำเร็จ");

      await u.db("o_user").insert({
        name: `line_${lineUserId.slice(0, 10)}`,
        supabaseUserId: created.user.id,
        lineUserId,
        displayName,
        avatar: pictureUrl ?? null,
        credits: 0,
        isAdmin: false,
        createTime: Date.now(),
      });
      // ไม่ใช้ .returning("id") เพราะ SQLite dialect ที่ยังรองรับอยู่ไม่รับประกันพฤติกรรมเหมือน Postgres
      user = await u.db("o_user").where("supabaseUserId", created.user.id).first();
    }

    if (isNewUser) {
      const bonusSetting = await u.db("o_setting").where("key", "signupBonusCredits").first();
      const bonus = parseInt(bonusSetting?.value ?? "100", 10);
      if (bonus > 0) await u.credits.grantSignupBonus(user!.id!, bonus);
    }

    const session = await mintSessionForEmail(email);

    return frontendRedirect({
      lineToken: "Bearer " + session.accessToken,
      lineRefreshToken: session.refreshToken,
      lineId: String(user!.id),
    });
  } catch (e) {
    console.error("[LINE Login] callback error:", u.error(e).message);
    return frontendRedirect({ lineError: "login_failed" });
  }
});
