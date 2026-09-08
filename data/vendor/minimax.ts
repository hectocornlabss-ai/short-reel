/**
 * Toonflow AI供应商模板 - MiniMax(海螺AI)
 * @version 2.0
 */

// ============================================================
// 类型定义
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
// 全局声明
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
  uploadReference: (base64: string, fileType: "image" | "audio" | "video") => Promise<ReferenceList>;
  imageRequest: (c: ImageConfig, m: ImageModel) => Promise<string>;
  videoRequest: (c: VideoConfig, m: VideoModel) => Promise<string>;
  ttsRequest: (c: TTSConfig, m: TTSModel) => Promise<string>;
  checkForUpdates?: () => Promise<{ hasUpdate: boolean; latestVersion: string; notice: string }>;
  updateVendor?: () => Promise<string>;
};

// ============================================================
// 供应商配置
// ============================================================

const vendor: VendorConfig = {
  id: "minimax",
  version: "2.1",
  author: "Toonflow",
  name: "MiniMax (Hailuo AI)",
  description: "รองรับ API ทางการของ MiniMax: โมเดลข้อความตระกูล M แบบคิดวิเคราะห์, สร้างภาพจากข้อความ/ภาพ, สร้างวิดีโอ (จากข้อความ, จากภาพ, จากเฟรมแรก-สุดท้าย) \n [ไปที่แพลตฟอร์ม](https://minimaxi.com/)",
  inputs: [
    { key: "apiKey", label: "API Key", type: "password", required: true },
    { key: "baseUrl", label: "ที่อยู่คำขอ (Base URL)", type: "url", required: true, placeholder: "ตัวอย่าง: https://api.minimaxi.com" },
  ],
  inputValues: { apiKey: "", baseUrl: "https://api.minimaxi.com" },
  models: [
    // Text models
    { name: "MiniMax-M2.7 (Reasoning)", modelName: "MiniMax-M2.7", type: "text", think: true },
    { name: "MiniMax-M2.7 Fast (Reasoning)", modelName: "MiniMax-M2.7-highspeed", type: "text", think: true },
    { name: "MiniMax-M2.5 (Reasoning)", modelName: "MiniMax-M2.5", type: "text", think: true },
    { name: "MiniMax-M2.5 Fast (Reasoning)", modelName: "MiniMax-M2.5-highspeed", type: "text", think: true },
    { name: "MiniMax-M2.1 (Coding)", modelName: "MiniMax-M2.1", type: "text", think: true },
    { name: "MiniMax-M2.1 Fast (Coding)", modelName: "MiniMax-M2.1-highspeed", type: "text", think: true },
    { name: "MiniMax-M2 (Agent)", modelName: "MiniMax-M2", type: "text", think: false },
    // Image models
    { name: "Hailuo Image V1", modelName: "image-01", type: "image", mode: ["text", "singleImage"] },
    { name: "Hailuo Image V1 Live", modelName: "image-01-live", type: "image", mode: ["text", "singleImage"], associationSkills: "รองรับสไตล์ภาพที่กำหนดเอง" },
    // Video models
    {
      name: "Hailuo 2.3",
      modelName: "MiniMax-Hailuo-2.3",
      type: "video",
      mode: ["text", "singleImage"],
      audio: false,
      durationResolutionMap: [
        { duration: [6], resolution: ["768P", "1080P"] },
        { duration: [10], resolution: ["768P"] },
      ],
    },
    {
      name: "Hailuo 2.3 Fast",
      modelName: "MiniMax-Hailuo-2.3-Fast",
      type: "video",
      mode: ["text", "singleImage"],
      audio: false,
      durationResolutionMap: [
        { duration: [6], resolution: ["768P", "1080P"] },
        { duration: [10], resolution: ["768P"] },
      ],
    },
    {
      name: "Hailuo 02",
      modelName: "MiniMax-Hailuo-02",
      type: "video",
      mode: ["text", "singleImage", "startEndRequired"],
      audio: false,
      durationResolutionMap: [
        { duration: [6], resolution: ["512P", "768P", "1080P"] },
        { duration: [10], resolution: ["512P", "768P"] },
      ],
    },
  ],
};

// ============================================================
// 辅助工具
// ============================================================

/**
 * 获取请求头
 */
const getHeaders = (): Record<string, string> => {
  const apiKey = vendor.inputValues.apiKey.replace(/^Bearer\s+/i, "");
  return {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
};

/**
 * 获取基础请求地址
 */
const getBaseUrl = (): string => {
  return vendor.inputValues.baseUrl.replace(/\/$/, "");
};

/**
 * 从 ReferenceList 条目中提取有头 base64 字符串
 */
const extractBase64WithHead = (ref: ReferenceList): string => {
  return ref.base64.startsWith("data:") ? ref.base64 : `data:image/png;base64,${ref.base64}`;
};

// ============================================================
// 适配器函数
// ============================================================

const textRequest = (model: TextModel, think: boolean, thinkLevel: 0 | 1 | 2 | 3) => {
  if (!vendor.inputValues.apiKey) throw new Error("ไม่พบ API Key");
  const apiKey = vendor.inputValues.apiKey.replace(/^Bearer\s+/i, "");
  const baseUrl = getBaseUrl();

  const openaiBaseUrl = `${baseUrl}/v1`;
  const extraBody = model.think ? { reasoning_split: true } : {};
  return createOpenAI({ baseURL: openaiBaseUrl, apiKey, extraBody }).chat(model.modelName);
};

const uploadReference = async (base64: string, fileType: "image" | "audio" | "video"): Promise<ReferenceList> => {
  // MiniMax的图片接口直接接受 base64，压缩后原样返回
  if (fileType === "image") {
    const compressed = await zipImage(base64, 10 * 1024);
    return { type: "image", sourceType: "base64", base64: compressed };
  }
  // 视频接口的图片参数也是 base64，压缩到20MB
  return { type: fileType, sourceType: "base64", base64 } as ReferenceList;
};

const imageRequest = async (config: ImageConfig, model: ImageModel): Promise<string> => {
  if (!vendor.inputValues.apiKey) throw new Error("ไม่พบ API Key");
  const baseUrl = getBaseUrl();
  const headers = getHeaders();

  const reqBody: any = {
    model: model.modelName,
    prompt: config.prompt,
    aspect_ratio: config.aspectRatio,
    response_format: "base64",
    n: 1,
    prompt_optimizer: true,
    aigc_watermark: false,
  };

  // 处理图生图参考
  const imageRefs = config.referenceList || [];
  if (imageRefs.length > 0) {
    const refBase64 = extractBase64WithHead(imageRefs[0]);
    reqBody.subject_reference = [{ type: "character", image_file: refBase64 }];
  }

  logger("เริ่มส่งงานสร้างภาพ MiniMax");
  const resp = await axios.post(`${baseUrl}/v1/image_generation`, reqBody, { headers });
  if (resp.data.base_resp.status_code !== 0) {
    throw new Error(`สร้างภาพล้มเหลว: ${resp.data.base_resp.status_msg}`);
  }
  if (resp.data.metadata.success_count === 0) {
    throw new Error("การสร้างภาพถูกบล็อกโดยนโยบายความปลอดภัย กรุณาปรับพรอมต์หรือภาพอ้างอิง");
  }

  const imgBase64 = resp.data.data.image_base64[0];
  return imgBase64.startsWith("data:") ? imgBase64 : `data:image/png;base64,${imgBase64}`;
};

const videoRequest = async (config: VideoConfig, model: VideoModel): Promise<string> => {
  if (!vendor.inputValues.apiKey) throw new Error("ไม่พบ API Key");
  const baseUrl = getBaseUrl();
  const headers = getHeaders();

  const reqBody: any = {
    model: model.modelName,
    prompt: config.prompt,
    duration: config.duration,
    resolution: config.resolution,
    aigc_watermark: false,
    prompt_optimizer: true,
  };

  // 提取图片类型的引用
  const imageRefs = (config.referenceList || []).filter((r) => r.type === "image");

  if (imageRefs.length > 0) {
    // 压缩图片到20MB以内
    const compressedImages: string[] = [];
    for (const ref of imageRefs) {
      const base64 = extractBase64WithHead(ref);
      const compressed = await zipImage(base64, 20 * 1024);
      compressedImages.push(compressed);
    }

    if (config.mode.includes("startEndRequired")) {
      if (compressedImages.length < 2) throw new Error("โหมดเฟรมแรก-สุดท้ายต้องอัปโหลด 2 ภาพ");
      reqBody.first_frame_image = compressedImages[0];
      reqBody.last_frame_image = compressedImages[1];
    } else if (config.mode.includes("singleImage")) {
      reqBody.first_frame_image = compressedImages[0];
    }
  }

  logger("เริ่มส่งงานสร้างวิดีโอ MiniMax");
  const submitResp = await axios.post(`${baseUrl}/v1/video_generation`, reqBody, { headers });
  if (submitResp.data.base_resp.status_code !== 0) {
    throw new Error(`ส่งงานล้มเหลว: ${submitResp.data.base_resp.status_msg}`);
  }
  const taskId = submitResp.data.task_id;
  logger(`ส่งงานสร้างวิดีโอสำเร็จ, Task ID: ${taskId}`);

  // 轮询任务状态
  const pollResult = await pollTask(
    async () => {
      const queryResp = await axios.get(`${baseUrl}/v1/query/video_generation`, {
        headers: getHeaders(),
        params: { task_id: taskId },
      });
      if (queryResp.data.base_resp.status_code !== 0) {
        return { completed: true, error: queryResp.data.base_resp.status_msg };
      }
      const status = queryResp.data.status;
      if (status === "Success") {
        return { completed: true, data: queryResp.data.file_id };
      }
      if (status === "Fail") {
        return { completed: true, error: "สร้างวิดีโอล้มเหลว" };
      }
      logger(`กำลังสร้างวิดีโอ, สถานะปัจจุบัน: ${status}`);
      return { completed: false };
    },
    5000,
    600000,
  );

  if (pollResult.error) throw new Error(pollResult.error);
  const fileId = pollResult.data!;
  logger(`สร้างวิดีโอสำเร็จ, File ID: ${fileId}`);

  // 获取下载地址
  const fileResp = await axios.get(`${baseUrl}/v1/files/retrieve`, {
    headers: getHeaders(),
    params: { file_id: fileId },
  });
  if (fileResp.data.base_resp.status_code !== 0) {
    throw new Error(`ดึงที่อยู่ไฟล์ล้มเหลว: ${fileResp.data.base_resp.status_msg}`);
  }
  const downloadUrl = fileResp.data.file.download_url;
  logger(`ได้ที่อยู่ดาวน์โหลดวิดีโอแล้ว, กำลังแปลงเป็น Base64`);

  return await urlToBase64(downloadUrl);
};

const ttsRequest = async (config: TTSConfig, model: TTSModel): Promise<string> => {
  return "";
};

const checkForUpdates = async (): Promise<{ hasUpdate: boolean; latestVersion: string; notice: string }> => {
  return {
    hasUpdate: false,
    latestVersion: "2.0",
    notice:
      "## ประกาศอัปเดตเวอร์ชันใหม่\n1. รองรับโครงสร้างเทมเพลตใหม่ ใช้ ReferenceList เป็นชนิดอ้างอิงแบบรวม\n2. เพิ่มตัวประมวลผลก่อน uploadReference\n3. ปรับปรุงการบีบอัดภาพและตรรกะดึงข้อมูลอ้างอิง",
  };
};

const updateVendor = async (): Promise<string> => {
  return "";
};

// ============================================================
// 导出
// ============================================================

exports.vendor = vendor;
exports.textRequest = textRequest;
exports.uploadReference = uploadReference;
exports.imageRequest = imageRequest;
exports.videoRequest = videoRequest;
exports.ttsRequest = ttsRequest;
exports.checkForUpdates = checkForUpdates;
exports.updateVendor = updateVendor;

// 这行代码用于确保当前文件被识别为模块，避免全局变量冲突
export {};