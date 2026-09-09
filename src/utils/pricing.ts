import axios from "axios";
import db from "@/utils/db";

// ราคาต้นทุนจริงต่อโมเดล ดึงจาก OpenRouter GET /api/v1/models (cache ในหน่วยความจำ กัน hit บ่อยเกิน)
// โครงสร้าง pricing ของ OpenRouter เป็น USD ต่อหน่วย เช่น prompt/completion (ต่อ token),
// image/request (ต่อภาพ/ต่อคำขอ) — โมเดลวิดีโอ/เสียงบางตัวอาจไม่ส่ง field ราคามาครบ
// จึงมี fallback แบบตั้งค่าเองผ่าน o_setting ให้แอดมินปรับได้เสมอ

interface OpenRouterPricing {
  prompt?: string;
  completion?: string;
  image?: string;
  request?: string;
  [key: string]: string | undefined;
}

let cache: { data: Record<string, OpenRouterPricing>; fetchedAt: number } | null = null;
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 นาที

async function getOpenRouterApiKey(): Promise<string | null> {
  const row = await db("o_vendorConfig").where("id", "openrouter").first();
  if (!row?.inputValues) return null;
  try {
    return JSON.parse(row.inputValues)?.apiKey ?? null;
  } catch {
    return null;
  }
}

async function fetchAllModelPricing(): Promise<Record<string, OpenRouterPricing>> {
  if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) return cache.data;
  const apiKey = await getOpenRouterApiKey();
  if (!apiKey) return cache?.data ?? {};
  try {
    const res = await axios.get("https://openrouter.ai/api/v1/models", {
      headers: { Authorization: `Bearer ${apiKey}` },
      timeout: 10000,
    });
    const map: Record<string, OpenRouterPricing> = {};
    for (const m of res.data?.data ?? []) {
      if (m?.id) map[m.id] = m.pricing ?? {};
    }
    cache = { data: map, fetchedAt: Date.now() };
    return map;
  } catch (e) {
    return cache?.data ?? {};
  }
}

async function getSetting(key: string, fallback: string): Promise<string> {
  const row = await db("o_setting").where("key", key).first();
  return row?.value ?? fallback;
}

// อัตราแลกเปลี่ยน: 1 เครดิต = กี่ USD ต้นทุน (ก่อนคูณ margin) — แอดมินปรับได้ที่ o_setting
async function usdToCredits(usd: number): Promise<number> {
  const usdPerCredit = parseFloat(await getSetting("creditUsdPerCredit", "0.01")); // ค่าเริ่มต้น 1 เครดิต = $0.01 ต้นทุน
  const margin = parseFloat(await getSetting("creditMarginMultiplier", "1.5")); // ค่าเริ่มต้น กำไร 50%
  if (!usdPerCredit || usdPerCredit <= 0) return 0;
  return Math.max(1, Math.ceil((usd * margin) / usdPerCredit));
}

async function creditsForText(modelSlug: string, promptTokens: number, completionTokens: number): Promise<number> {
  const pricing = (await fetchAllModelPricing())[modelSlug];
  if (!pricing) return 0;
  const usd = (parseFloat(pricing.prompt ?? "0") || 0) * promptTokens + (parseFloat(pricing.completion ?? "0") || 0) * completionTokens;
  return usdToCredits(usd);
}

// ราคาต่อภาพ/วิดีโอ/เสียง: ใช้ field "image" หรือ "request" จาก OpenRouter ถ้ามี
// ถ้าไม่มี (โมเดลวิดีโอ/TTS จำนวนมากยังไม่ส่งราคามาตรงๆ) ใช้ราคา fallback ที่ตั้งเองผ่าน o_setting
async function creditsForUnit(modelSlug: string, fallbackSettingKey: string, fallbackUsd: number, units = 1): Promise<number> {
  const pricing = (await fetchAllModelPricing())[modelSlug];
  const perUnitUsd = parseFloat(pricing?.image ?? pricing?.request ?? "") || parseFloat(await getSetting(fallbackSettingKey, String(fallbackUsd)));
  return usdToCredits(perUnitUsd * units);
}

async function creditsForImage(modelSlug: string, count = 1): Promise<number> {
  return creditsForUnit(modelSlug, `fallbackUsd:image:${modelSlug}`, 0.04, count);
}

async function creditsForVideo(modelSlug: string, durationSeconds = 5): Promise<number> {
  // ราคาวิดีโอมักคิดต่อวินาที ถ้า field ราคาจาก API ไม่มี ใช้ fallback ต่อวินาทีที่ตั้งเอง
  const pricing = (await fetchAllModelPricing())[modelSlug];
  const perSecondUsd = parseFloat(pricing?.request ?? "") || parseFloat(await getSetting(`fallbackUsd:video:${modelSlug}`, "0.10"));
  return usdToCredits(perSecondUsd * durationSeconds);
}

async function creditsForTts(modelSlug: string, characters: number): Promise<number> {
  const pricing = (await fetchAllModelPricing())[modelSlug];
  const perCharUsd = parseFloat(pricing?.completion ?? pricing?.request ?? "") || parseFloat(await getSetting(`fallbackUsd:tts:${modelSlug}`, "0.00002"));
  return usdToCredits(perCharUsd * characters);
}

export default {
  fetchAllModelPricing,
  creditsForText,
  creditsForImage,
  creditsForVideo,
  creditsForTts,
  usdToCredits,
};
