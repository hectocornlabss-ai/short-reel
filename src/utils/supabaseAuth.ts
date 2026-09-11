import { createClient, SupabaseClient } from "@supabase/supabase-js";

let adminClient: SupabaseClient | null = null;
let anonClient: SupabaseClient | null = null;

// service role key: มีสิทธิ์เต็ม (สร้าง/ลบ user, ออก magic link แทนใครก็ได้) — ใช้ฝั่ง server เท่านั้น ห้ามหลุดไป frontend
export function getSupabaseAdmin(): SupabaseClient {
  if (!adminClient) {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) throw new Error("ยังไม่ได้ตั้งค่า SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY ใน .env");
    adminClient = createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
  }
  return adminClient;
}

// anon key: ใช้ตรวจสอบ access token ของผู้ใช้ทั่วไป (signInWithPassword, getUser, verifyOtp)
export function getSupabaseAnon(): SupabaseClient {
  if (!anonClient) {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_ANON_KEY;
    if (!url || !key) throw new Error("ยังไม่ได้ตั้งค่า SUPABASE_URL / SUPABASE_ANON_KEY ใน .env");
    anonClient = createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
  }
  return anonClient;
}

// ออก session (access_token) จริงให้ user ที่ระบุด้วย email แบบไม่ต้องมีรหัสผ่าน (ใช้ผูก LINE Login เข้ากับ Supabase Auth)
export async function mintSessionForEmail(email: string): Promise<{ accessToken: string; refreshToken: string }> {
  const admin = getSupabaseAdmin();
  const { data: linkData, error: linkError } = await admin.auth.admin.generateLink({ type: "magiclink", email });
  if (linkError || !linkData?.properties?.hashed_token) {
    throw new Error(linkError?.message ?? "ออก magic link ไม่สำเร็จ");
  }
  const anon = getSupabaseAnon();
  const { data: otpData, error: otpError } = await anon.auth.verifyOtp({
    type: "magiclink",
    token_hash: linkData.properties.hashed_token,
  });
  if (otpError || !otpData?.session) {
    throw new Error(otpError?.message ?? "ยืนยัน magic link ไม่สำเร็จ");
  }
  return { accessToken: otpData.session.access_token, refreshToken: otpData.session.refresh_token };
}

export function lineSyntheticEmail(lineUserId: string): string {
  return `line-${lineUserId}@users.sekclip.internal`;
}
