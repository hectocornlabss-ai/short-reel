import express from "express";
import crypto from "crypto";
const router = express.Router();

// เริ่มขั้นตอน LINE Login: สร้าง state กัน CSRF แล้วพาไปหน้ายืนยันตัวตนของ LINE
export default router.get("/", async (req, res) => {
  const channelId = process.env.LINE_LOGIN_CHANNEL_ID;
  const callbackUrl = process.env.LINE_LOGIN_CALLBACK_URL;
  if (!channelId || !callbackUrl) {
    return res.status(500).send({ message: "ยังไม่ได้ตั้งค่า LINE Login (LINE_LOGIN_CHANNEL_ID / LINE_LOGIN_CALLBACK_URL) ที่ .env" });
  }

  const state = crypto.randomBytes(16).toString("hex");
  res.cookie("line_oauth_state", state, { httpOnly: true, maxAge: 5 * 60 * 1000, sameSite: "lax" });

  const authorizeUrl = new URL("https://access.line.me/oauth2/v2.1/authorize");
  authorizeUrl.searchParams.set("response_type", "code");
  authorizeUrl.searchParams.set("client_id", channelId);
  authorizeUrl.searchParams.set("redirect_uri", callbackUrl);
  authorizeUrl.searchParams.set("state", state);
  authorizeUrl.searchParams.set("scope", "profile openid");

  res.redirect(authorizeUrl.toString());
});
