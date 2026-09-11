/**
 * Toonflow AI Vendor Adapter - OpenRouter
 * @version 2.0
 *
 * OpenRouter is a true 1-stop aggregator: one API key covers text, image,
 * video, and TTS models from many providers under one billing account.
 * Docs: https://openrouter.ai/docs
 */

// ============================================================
// Type definitions
// ============================================================

type VideoMode =
  | "singleImage"
  | "startEndRequired"
  | "endFrameOptional"
  | "startFrameOptional"
  | "text"
  | (`videoReference:${number}` | `imageReference:${number}` | `audioReference:${number}`)[];

interface TextModel {
  name: string;
  modelName: string;
  type: "text";
  think: boolean;
}

interface ImageModel {
  name: string;
  modelName: string;
  type: "image";
  mode: ("text" | "singleImage" | "multiReference")[];
  associationSkills?: string;
}

interface VideoModel {
  name: string;
  modelName: string;
  type: "video";
  mode: VideoMode[];
  associationSkills?: string;
  audio: "optional" | false | true;
  durationResolutionMap: { duration: number[]; resolution: string[] }[];
}

interface TTSModel {
  name: string;
  modelName: string;
  type: "tts";
  voices: { title: string; voice: string }[];
}

interface VendorConfig {
  id: string;
  version: string;
  name: string;
  author: string;
  description?: string;
  icon?: string;
  inputs: { key: string; label: string; type: "text" | "password" | "url"; required: boolean; placeholder?: string }[];
  inputValues: Record<string, string>;
  models: (TextModel | ImageModel | VideoModel | TTSModel)[];
}

type ReferenceList =
  | { type: "image"; sourceType: "base64"; base64: string }
  | { type: "audio"; sourceType: "base64"; base64: string }
  | { type: "video"; sourceType: "base64"; base64: string };

interface ImageConfig {
  prompt: string;
  referenceList?: Extract<ReferenceList, { type: "image" }>[];
  size: "1K" | "2K" | "4K";
  aspectRatio: `${number}:${number}`;
}

interface VideoConfig {
  duration: number;
  resolution: string;
  aspectRatio: "16:9" | "9:16";
  prompt: string;
  referenceList?: ReferenceList[];
  audio?: boolean;
  mode: VideoMode[];
}

interface TTSConfig {
  text: string;
  voice: string;
  speechRate: number;
  pitchRate: number;
  volume: number;
  referenceList?: Extract<ReferenceList, { type: "audio" }>[];
}

interface PollResult {
  completed: boolean;
  data?: string;
  error?: string;
}

// ============================================================
// Global declarations
// ============================================================

declare const axios: any;
declare const logger: (msg: string) => void;
declare const jsonwebtoken: any;
declare const zipImage: (base64: string, size: number) => Promise<string>;
declare const zipImageResolution: (base64: string, w: number, h: number) => Promise<string>;
declare const mergeImages: (base64Arr: string[], maxSize?: string) => Promise<string>;
declare const urlToBase64: (url: string) => Promise<string>;
declare const pollTask: (fn: () => Promise<PollResult>, interval?: number, timeout?: number) => Promise<PollResult>;
declare const createOpenAI: any;
declare const createDeepSeek: any;
declare const createZhipu: any;
declare const createQwen: any;
declare const createAnthropic: any;
declare const createOpenAICompatible: any;
declare const createXai: any;
declare const createMinimax: any;
declare const createGoogleGenerativeAI: any;
declare const exports: {
  vendor: VendorConfig;
  textRequest: (m: TextModel, t: boolean, tl: 0 | 1 | 2 | 3) => any;
  imageRequest: (c: ImageConfig, m: ImageModel) => Promise<string>;
  videoRequest: (c: VideoConfig, m: VideoModel) => Promise<string>;
  ttsRequest: (c: TTSConfig, m: TTSModel) => Promise<string>;
  checkForUpdates?: () => Promise<{ hasUpdate: boolean; latestVersion: string; notice: string }>;
  updateVendor?: () => Promise<string>;
};

// ============================================================
// Vendor configuration
// ============================================================

const vendor: VendorConfig = {
  id: "openrouter",
  version: "2.0",
  author: "Toonflow",
  name: "OpenRouter",
  description:
    "แพลตฟอร์มรวมโมเดล AI แบบ 1-stop: คีย์เดียวใช้ได้ทั้งข้อความ (GPT/Claude/Gemini/DeepSeek ฯลฯ), สร้างภาพ, สร้างวิดีโอ, และสังเคราะห์เสียง (TTS) จากผู้ให้บริการหลายเจ้าภายใต้บิลเดียว\n\n⚠️ รายชื่อโมเดลด้านล่างเป็นค่าเริ่มต้นที่คัดมา ณ ตอนเขียนปลั๊กอินนี้ ราคา/ความสามารถของแต่ละโมเดลเปลี่ยนเร็ว ตรวจสอบรายชื่อและ slug ล่าสุดได้ที่ openrouter.ai/models แล้วแก้ไขเพิ่มเองได้ผ่านปุ่ม \"แก้ไขโค้ด\"\n\n[ไปที่ OpenRouter](https://openrouter.ai/)",
  inputs: [
    { key: "apiKey", label: "API Key", type: "password", required: true, placeholder: "sk-or-v1-..." },
    { key: "baseUrl", label: "ที่อยู่คำขอ (Base URL)", type: "url", required: true, placeholder: "https://openrouter.ai/api/v1" },
  ],
  inputValues: { apiKey: "", baseUrl: "https://openrouter.ai/api/v1" },
  models: [
    // ===================== Text models =====================
    { name: "Typhoon2 70B (OpenRouter, ไทยแท้ 🇹🇭)", modelName: "scb10x/llama3.1-typhoon2-70b-instruct", type: "text", think: false },
    { name: "Typhoon2 8B (OpenRouter, ไทยแท้ ประหยัด)", modelName: "scb10x/llama3.1-typhoon2-8b-instruct", type: "text", think: false },
    { name: "Gemini 3.7 Flash (OpenRouter)", modelName: "google/gemini-3.7-flash", type: "text", think: true },
    { name: "Qwen3 VL 32B (OpenRouter)", modelName: "qwen/qwen3-vl-32b", type: "text", think: true },
    { name: "GPT-6 Astra (OpenRouter)", modelName: "openai/gpt-6-astra", type: "text", think: true },
    { name: "Gemini 3.8 Flash (OpenRouter)", modelName: "google/gemini-3.8-flash", type: "text", think: true },
    { name: "Claude Sonnet 5 (OpenRouter)", modelName: "anthropic/claude-sonnet-5", type: "text", think: true },
    { name: "Claude Opus 5 (OpenRouter)", modelName: "anthropic/claude-opus-5", type: "text", think: true },
    { name: "Qwen3.8 Max (OpenRouter)", modelName: "qwen/qwen3.8-max-0902", type: "text", think: true },
    { name: "DeepSeek V3.2 (OpenRouter)", modelName: "deepseek/deepseek-v3.2", type: "text", think: true },
    // ===================== Image models =====================
    {
      name: "Nano Banana 2 Lite (OpenRouter, ประหยัด)",
      modelName: "google/gemini-3.1-flash-lite-image",
      type: "image",
      mode: ["text", "singleImage", "multiReference"],
    },
    {
      name: "Nano Banana Pro (OpenRouter)",
      modelName: "google/gemini-3-pro-image",
      type: "image",
      mode: ["text", "singleImage", "multiReference"],
    },
    {
      name: "Nano Banana 2 (OpenRouter)",
      modelName: "google/gemini-3.1-flash-image",
      type: "image",
      mode: ["text", "singleImage", "multiReference"],
    },
    {
      name: "Seedream 4.5 (OpenRouter)",
      modelName: "bytedance-seed/seedream-4.5",
      type: "image",
      mode: ["text", "singleImage", "multiReference"],
    },
    {
      name: "GPT Image 2 (OpenRouter)",
      modelName: "openai/gpt-image-2",
      type: "image",
      mode: ["text", "singleImage", "multiReference"],
    },
    {
      name: "GPT-5 Image Mini (OpenRouter, ประหยัดที่สุด)",
      modelName: "openai/gpt-5-image-mini",
      type: "image",
      mode: ["text", "singleImage", "multiReference"],
    },
    // ===================== Video models =====================
    {
      name: "Seedance 2.0 Mini (OpenRouter)",
      modelName: "bytedance/seedance-2.0-mini",
      type: "video",
      mode: ["text", "singleImage", "startEndRequired"],
      audio: "optional",
      durationResolutionMap: [{ duration: [4, 5, 6, 8, 10], resolution: ["720p", "1080p"] }],
    },
    {
      name: "Seedance 2.5 (OpenRouter)",
      modelName: "bytedance/seedance-2.5",
      type: "video",
      mode: ["text", "singleImage", "startEndRequired"],
      audio: "optional",
      durationResolutionMap: [{ duration: [4, 5, 6, 8, 10], resolution: ["720p", "1080p"] }],
    },
    {
      name: "Veo 3.1 Lite (OpenRouter)",
      modelName: "google/veo-3.1-lite",
      type: "video",
      mode: ["text", "singleImage"],
      audio: true,
      durationResolutionMap: [{ duration: [4, 6, 8], resolution: ["720p", "1080p"] }],
    },
    {
      name: "Wan 3.0 (OpenRouter, ประหยัด)",
      modelName: "alibaba/wan-3.0",
      type: "video",
      mode: ["text", "singleImage"],
      audio: false,
      durationResolutionMap: [{ duration: [2, 3, 4, 5, 6, 8, 10], resolution: ["480p", "720p", "1080p"] }],
    },
    {
      name: "HeyGen Avatar IV (OpenRouter, ปากตรงบท)",
      modelName: "heygen/avatar-iv",
      type: "video",
      mode: ["singleImage"],
      audio: true,
      durationResolutionMap: [{ duration: [5, 10, 15, 20, 30], resolution: ["720p", "1080p"] }],
    },
    // ===================== TTS models =====================
    {
      name: "Gemini 3.1 Flash TTS (OpenRouter)",
      modelName: "google/gemini-3.1-flash-tts-preview",
      type: "tts",
      voices: [
        { title: "เสียงที่ 1 (Speaker 1)", voice: "speaker-1" },
        { title: "เสียงที่ 2 (Speaker 2)", voice: "speaker-2" },
      ],
    },
    {
      name: "MiniMax Speech 2.8 HD (OpenRouter)",
      modelName: "minimax/speech-2.8-hd",
      type: "tts",
      // รายชื่อเสียงสำเร็จรูป verified จากเอกสาร MiniMax Speech-02/2.8 จริง (รองรับภาษาไทย)
      // เก็บ 2 ตัวเดิมไว้เผื่อยังใช้งานได้ พร้อมเพิ่มชุดใหม่ให้เลือกเสียงตรงกับบุคลิกตัวละครได้หลากหลายขึ้น
      voices: [
        { title: "เสียงชายอบอุ่น (เดิม)", voice: "male-qn-qingse" },
        { title: "เสียงหญิงนุ่มนวล (เดิม)", voice: "female-tianmei" },
        { title: "หญิงสุขุมมีเหตุผล (Wise Woman)", voice: "Wise_Woman" },
        { title: "หญิงสงบนิ่ง (Calm Woman)", voice: "Calm_Woman" },
        { title: "หญิงร่าเริงสดใส (Lively Girl)", voice: "Lively_Girl" },
        { title: "หญิงน่ารักอ่อนหวาน (Lovely Girl)", voice: "Lovely_Girl" },
        { title: "ชายเสียงทุ้มลึก (Deep Voice Man)", voice: "Deep_Voice_Man" },
        { title: "ชายหนุ่มอัศวิน (Young Knight)", voice: "Young_Knight" },
        { title: "ชายสง่างาม (Elegant Man)", voice: "Elegant_Man" },
        { title: "ชายมุ่งมั่นแน่วแน่ (Determined Man)", voice: "Determined_Man" },
        { title: "ชายอาวุโสใจเย็น (Patient Man)", voice: "Patient_Man" },
      ],
    },
  ],
};

// ============================================================
// Helpers
// ============================================================

const getApiKey = (): string => {
  const apiKey = vendor.inputValues.apiKey;
  if (!apiKey) throw new Error("ไม่พบ API Key");
  return apiKey.replace(/^Bearer\s+/i, "");
};

const getBaseUrl = (): string => (vendor.inputValues.baseUrl || "https://openrouter.ai/api/v1").replace(/\/+$/, "");

const getHeaders = () => ({
  Authorization: `Bearer ${getApiKey()}`,
  "Content-Type": "application/json",
  "HTTP-Referer": "https://toonflow.net",
  "X-Title": "Toonflow",
});

const extractImageDataUrl = (base64: string): string => (base64.startsWith("data:") ? base64 : `data:image/png;base64,${base64}`);

// บีบอัด base64 -> ไบต์ดิบเป็น base64 ด้วยมือ (sandbox นี้ไม่มี Buffer/btoa ให้ใช้)
const bytesToBase64 = (bytes: Uint8Array): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let result = "";
  for (let i = 0; i < bytes.length; i += 3) {
    const b1 = bytes[i];
    const b2 = i + 1 < bytes.length ? bytes[i + 1] : 0;
    const b3 = i + 2 < bytes.length ? bytes[i + 2] : 0;
    const triplet = (b1 << 16) | (b2 << 8) | b3;
    result += chars[(triplet >> 18) & 0x3f];
    result += chars[(triplet >> 12) & 0x3f];
    result += i + 1 < bytes.length ? chars[(triplet >> 6) & 0x3f] : "=";
    result += i + 2 < bytes.length ? chars[triplet & 0x3f] : "=";
  }
  return result;
};

// ============================================================
// Adapter functions
// ============================================================

const textRequest = (model: TextModel, think: boolean, thinkLevel: 0 | 1 | 2 | 3) => {
  const apiKey = getApiKey();
  return createOpenAICompatible({
    name: "openrouter",
    baseURL: getBaseUrl(),
    apiKey,
    headers: {
      "HTTP-Referer": "https://toonflow.net",
      "X-Title": "Toonflow",
    },
  }).chatModel(model.modelName);
};

const imageRequest = async (config: ImageConfig, model: ImageModel): Promise<string> => {
  const baseUrl = getBaseUrl();
  const imageRefs = (config.referenceList || []).map((ref) => ref.base64).filter(Boolean);

  const body: any = {
    model: model.modelName,
    prompt: config.prompt || "",
    resolution: config.size || "2K",
    aspect_ratio: config.aspectRatio || "16:9",
    n: 1,
  };
  if (imageRefs.length > 0) {
    body.input_references = imageRefs.map((ref) => ({ type: "image_url", image_url: { url: extractImageDataUrl(ref) } }));
  }

  logger(`[OpenRouter รูปภาพ] เรียกโมเดล: ${model.modelName}, refs=${imageRefs.length}`);
  const resp = await fetch(`${baseUrl}/images`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    const errorText = await resp.text();
    throw new Error(`คำขอสร้างภาพล้มเหลว: ${errorText}`);
  }

  const data = await resp.json();
  const item = data?.data?.[0];
  if (item?.b64_json) {
    const mediaType = item.media_type || "image/png";
    return `data:${mediaType};base64,${item.b64_json}`;
  }
  if (item?.url) {
    return await urlToBase64(item.url);
  }

  throw new Error(`ไม่สามารถดึงภาพจากการตอบกลับได้: ${JSON.stringify(data).slice(0, 300)}`);
};

const videoRequest = async (config: VideoConfig, model: VideoModel): Promise<string> => {
  const baseUrl = getBaseUrl();
  const headers = getHeaders();

  const imageRefs = (config.referenceList || []).filter((r) => r.type === "image");
  const audioRefs = (config.referenceList || []).filter((r) => r.type === "audio");
  const currentMode = config.mode as string | string[];

  const body: any = {
    model: model.modelName,
    prompt: config.prompt || "",
    duration: config.duration,
    resolution: config.resolution,
    aspect_ratio: config.aspectRatio,
    generate_audio: config.audio !== false,
  };

  // สำหรับโมเดล lip-sync เช่น heygen/avatar-iv: หากมีไฟล์เสียงที่สร้างจากโมเดล TTS ของ OpenRouter เอง ให้แนบไปด้วย
  // เพื่อให้ปากตรงกับเสียงพากย์จริง — ชื่อฟิลด์ "audio_url" ยังไม่ได้ยืนยัน 100% กับเอกสารทางการ
  // ของ OpenRouter ณ ตอนเขียน แนะนำทดสอบยิงจริงก่อนใช้งานเต็มรูปแบบ
  if (audioRefs.length > 0) {
    body.audio_url = audioRefs[0].base64.startsWith("data:") ? audioRefs[0].base64 : `data:audio/mpeg;base64,${audioRefs[0].base64}`;
  }

  if (currentMode === "singleImage" && imageRefs.length > 0) {
    body.frame_images = [{ type: "image_url", image_url: { url: extractImageDataUrl(imageRefs[0].base64) }, frame_type: "first_frame" }];
  } else if ((currentMode === "startEndRequired" || currentMode === "endFrameOptional" || currentMode === "startFrameOptional") && imageRefs.length > 0) {
    body.frame_images = [{ type: "image_url", image_url: { url: extractImageDataUrl(imageRefs[0].base64) }, frame_type: "first_frame" }];
    if (imageRefs.length > 1) {
      body.frame_images.push({ type: "image_url", image_url: { url: extractImageDataUrl(imageRefs[1].base64) }, frame_type: "last_frame" });
    }
  } else if (Array.isArray(currentMode) && imageRefs.length > 0) {
    body.input_references = imageRefs.map((ref) => ({ type: "image_url", image_url: { url: extractImageDataUrl(ref.base64) } }));
  }

  logger(`[OpenRouter วิดีโอ] ส่งงาน: ${model.modelName}, ความยาว: ${config.duration}s, ความละเอียด: ${config.resolution}`);
  const submitResp = await fetch(`${baseUrl}/videos`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  if (!submitResp.ok) {
    const errorText = await submitResp.text();
    throw new Error(`ส่งงานสร้างวิดีโอล้มเหลว: ${errorText}`);
  }

  const submitData = await submitResp.json();
  const jobId = submitData?.id;
  if (!jobId) throw new Error(`ส่งงานสร้างวิดีโอล้มเหลว: ไม่พบ Job ID ในการตอบกลับ: ${JSON.stringify(submitData).slice(0, 300)}`);

  logger(`[OpenRouter วิดีโอ] สร้างงานแล้ว, Job ID: ${jobId}`);

  const pollResult = await pollTask(
    async (): Promise<PollResult> => {
      const pollResp = await fetch(`${baseUrl}/videos/${jobId}`, { method: "GET", headers });
      if (!pollResp.ok) {
        const errorText = await pollResp.text();
        return { completed: true, error: `ตรวจสอบสถานะงานล้มเหลว: ${errorText}` };
      }
      const pollData = await pollResp.json();
      logger(`[OpenRouter วิดีโอ] สถานะงาน: ${pollData.status}`);

      if (pollData.status === "completed") {
        const url = pollData?.unsigned_urls?.[0];
        if (url) return { completed: true, data: url };
        return { completed: true, error: "งานสำเร็จแต่ไม่พบ URL ของวิดีโอ" };
      }
      if (pollData.status === "failed") {
        return { completed: true, error: pollData.error || "สร้างวิดีโอล้มเหลว" };
      }
      return { completed: false };
    },
    10000,
    1800000,
  );

  if (pollResult.error) throw new Error(pollResult.error);
  if (!pollResult.data) throw new Error("สร้างวิดีโอล้มเหลว: การตรวจสอบสถานะไม่พบข้อมูล");
  return await urlToBase64(pollResult.data);
};

const ttsRequest = async (config: TTSConfig, model: TTSModel): Promise<string> => {
  const baseUrl = getBaseUrl();
  const headers = getHeaders();

  const body: any = {
    model: model.modelName,
    input: config.text,
    voice: config.voice,
    response_format: "mp3",
    speed: config.speechRate || 1,
  };

  logger(`[OpenRouter เสียงพากย์] เรียกโมเดล: ${model.modelName}, เสียง: ${config.voice}`);
  const resp = await fetch(`${baseUrl}/audio/speech`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    const errorText = await resp.text();
    throw new Error(`คำขอสังเคราะห์เสียงล้มเหลว: ${errorText}`);
  }

  const arrayBuffer = await resp.arrayBuffer();
  const base64 = bytesToBase64(new Uint8Array(arrayBuffer));
  return `data:audio/mpeg;base64,${base64}`;
};

const checkForUpdates = async (): Promise<{ hasUpdate: boolean; latestVersion: string; notice: string }> => {
  return { hasUpdate: false, latestVersion: "2.0", notice: "" };
};

const updateVendor = async (): Promise<string> => {
  return "";
};

// ============================================================
// Exports
// ============================================================

exports.vendor = vendor;
exports.textRequest = textRequest;
exports.imageRequest = imageRequest;
exports.videoRequest = videoRequest;
exports.ttsRequest = ttsRequest;
exports.checkForUpdates = checkForUpdates;
exports.updateVendor = updateVendor;

export {};
