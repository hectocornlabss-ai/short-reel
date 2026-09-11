import { tool, jsonSchema, Tool } from "ai";
import { z } from "zod";
import _ from "lodash";
import ResTool from "@/socket/resTool";
import u from "@/utils";

const deriveAssetSchema = z.object({
  id: z.number().describe("ID สินทรัพย์ต่อยอด ถ้าเพิ่มใหม่ให้เว้นว่าง"),
  assetsId: z.number().describe("ID สินทรัพย์ที่เชื่อมโยง"),
  prompt: z.string().describe("พรอมต์สำหรับสร้าง"),
  name: z.string().describe("ชื่อสินทรัพย์ต่อยอด"),
  desc: z.string().describe("คำบรรยายสินทรัพย์ต่อยอด"),
  src: z.string().nullable().describe("เส้นทางไฟล์สินทรัพย์ต่อยอด"),
  state: z.enum(["未生成", "生成中", "已完成", "生成失败"]).describe("สถานะการสร้างสินทรัพย์ต่อยอด"),
  type: z.enum(["role", "tool", "scene", "clip"]).describe("ประเภทสินทรัพย์ต่อยอด"),
});
export const assetItemSchema = z.object({
  id: z.number().describe("รหัสเฉพาะของสินทรัพย์"),
  name: z.string().describe("ชื่อสินทรัพย์"),
  type: z.enum(["role", "tool", "scene", "clip"]).describe("ประเภทสินทรัพย์"),
  prompt: z.string().describe("พรอมต์สำหรับสร้าง"),
  desc: z.string().describe("คำบรรยายสินทรัพย์"),
  derive: z.array(deriveAssetSchema).describe("รายการสินทรัพย์ต่อยอด"),
});
const storyboardSchema = z.object({
  id: z.number().describe("ID สตอรี่บอร์ด ต้องเป็น id จริง"),
  duration: z.number().describe("ความยาว (วินาที)"),
  prompt: z.string().describe("พรอมต์สำหรับสร้าง"),
  associateAssetsIds: z.array(z.number()).describe("รายการ ID สินทรัพย์ที่เชื่อมโยง"),
  src: z.string().nullable().describe("เส้นทางไฟล์สตอรี่บอร์ด"),
  index: z.number().nullable().optional().describe("ฟิลด์ลำดับของสตอรี่บอร์ด"),
});
const workbenchDataSchema = z.object({
  name: z.string().describe("ชื่อโปรเจกต์"),
  duration: z.string().describe("ความยาววิดีโอ"),
  resolution: z.string().describe("ความละเอียด"),
  fps: z.string().describe("เฟรมเรต"),
  cover: z.string().optional().describe("เส้นทางไฟล์ภาพปก"),
  gradient: z.string().optional().describe("การตั้งค่าไล่สี"),
});
const posterItemSchema = z.object({
  id: z.number().describe("ID โปสเตอร์"),
  image: z.string().describe("เส้นทางไฟล์ภาพโปสเตอร์"),
});
export const flowDataSchema = z.object({
  script: z.string().describe("เนื้อหาบทภาพยนตร์"),
  scriptPlan: z.string().describe("แผนการถ่ายทำ"),
  assets: z.array(assetItemSchema).describe("สินทรัพย์ต่อยอด"),
  storyboardTable: z.string().describe("ตารางสตอรี่บอร์ด"),
  storyboard: z.array(storyboardSchema).describe("แผงสตอรี่บอร์ด"),
});

export type FlowData = z.infer<typeof flowDataSchema>;

const keySchema = z.enum(Object.keys(flowDataSchema.shape) as [keyof FlowData, ...Array<keyof FlowData>]);
const flowDataKeyLabels = Object.fromEntries(
  Object.entries(flowDataSchema.shape).map(([key, schema]) => [key, (schema as z.ZodTypeAny).description ?? key]),
) as Record<keyof FlowData, string>;

interface ToolConfig {
  resTool: ResTool;
  toolsNames?: string[];
  msg: ReturnType<ResTool["newMessage"]>;
}

/**
 * 串行队列：确保 socket 操作排队执行，避免并发过高导致假死
 * @param delayMs 每个操作之间的最小间隔(ms)
 */
function createSocketQueue(delayMs = 800) {
  let lastPromise: Promise<any> = Promise.resolve();
  return <T>(fn: () => Promise<T>): Promise<T> => {
    lastPromise = lastPromise.then(
      () =>
        new Promise<T>((resolve, reject) => {
          setTimeout(() => fn().then(resolve, reject), delayMs);
        }),
    );
    return lastPromise;
  };
}

export default (toolCpnfig: ToolConfig) => {
  const { resTool, toolsNames, msg } = toolCpnfig;
  const { socket } = resTool;
  const socketQueue = createSocketQueue(800);
  const workMap: Record<any, any> = {};
  const tools: Record<string, Tool> = {
    get_flowData: tool({
      description: "ดึงข้อมูลพื้นที่ทำงาน",
      inputSchema: jsonSchema<{ key: keyof FlowData }>(
        z
          .object({
            key: keySchema.describe("คีย์ข้อมูล"),
          })
          .toJSONSchema(),
      ),
      execute: async ({ key }) => {
        const thinking = msg.thinking(`กำลังดึงข้อมูลพื้นที่ทำงาน${flowDataKeyLabels[key]}...`);

        const flowData: FlowData = await new Promise((resolve) => socket.emit("getFlowData", { key }, (res: any) => resolve(res)));
        thinking.appendText(`ดึง${flowDataKeyLabels[key]}ได้แล้ว:\n` + JSON.stringify(flowData[key], null, 2));
        thinking.updateTitle(`ดึง${flowDataKeyLabels[key]}เสร็จแล้ว`);
        thinking.complete();
        if (workMap[key] && JSON.stringify(workMap[key]) === JSON.stringify(flowData[key])) {
          console.info(`[tools] get_flowData: ข้อมูล${flowDataKeyLabels[key]}ไม่มีการเปลี่ยนแปลง ไม่ต้องอัปเดต`);
          return `ข้อมูล${flowDataKeyLabels[key]}ไม่มีการเปลี่ยนแปลง ไม่ต้องอัปเดต`;
        }
        workMap[key] = flowData[key];
        return flowData[key];
      },
    }),
    add_deriveAsset: tool({
      description: "เพิ่มหรืออัปเดตสินทรัพย์ต่อยอด",
      inputSchema: jsonSchema<{ assetsId: number; id: number | null; name: string; desc: string }>(
        z
          .object({
            assetsId: z.number().describe("ID สินทรัพย์ที่เชื่อมโยง"),
            id: z.number().nullable().describe("ID สินทรัพย์ต่อยอด ถ้าเพิ่มใหม่ให้เว้นว่าง"),
            name: z.string().describe("ชื่อสินทรัพย์ต่อยอด"),
            desc: z.string().describe("คำบรรยายสินทรัพย์ต่อยอด"),
          })
          .toJSONSchema(),
      ),
      execute: async (raw) => {
        // ป้องกันข้อผิดพลาด: LLM บางครั้งส่งสตริง "null" หรือค่าว่าง ให้ปรับเป็น null ให้ตรงกัน
        const idRaw = raw.id as unknown;
        const normalizedId = idRaw === "null" || idRaw === "" || idRaw === undefined ? null : (idRaw as number | null);
        const deriveAsset = { ...raw, id: normalizedId };

        const thinking = msg.thinking("กำลังจัดการสินทรัพย์...");
        const { projectId, scriptId } = resTool.data;
        const startTime = Date.now();
        const parentAssets = await u.db("o_assets").where("id", deriveAsset.assetsId).select("id", "type").first();
        if (!parentAssets) return "ไม่พบสินทรัพย์ที่เชื่อมโยง";

        const data = {
          id: deriveAsset.id ?? undefined,
          assetsId: deriveAsset.assetsId,
          projectId,
          name: deriveAsset.name,
          type: parentAssets.type,
          describe: deriveAsset.desc,
          startTime,
        };
        if (deriveAsset.id) {
          await u.db("o_assets").where("id", deriveAsset.id).update(data);
          thinking.appendText(`อัปเดตสินทรัพย์ต่อยอดแล้ว ID: ${deriveAsset.id}\n`);
        } else {
          // ไม่ใช้ .returning("id")/destructure ตรงๆ เพราะ Postgres ไม่รับประกันพฤติกรรมเดียวกับ SQLite
          await u.db("o_assets").insert(data);
          const inserted = await u.db("o_assets").where({ assetsId: deriveAsset.assetsId, projectId, startTime }).orderBy("id", "desc").first();
          const insertedId = inserted!.id!;
          data.id = insertedId;
          await u.db("o_scriptAssets").insert({ scriptId, assetId: insertedId });
          thinking.appendText(`เพิ่มสินทรัพย์ต่อยอดแล้ว ID: ${insertedId}\n`);
        }
        const res = await new Promise((resolve) => socket.emit("addDeriveAsset", data, (res: any) => resolve(res)));
        thinking.updateTitle("จัดการสินทรัพย์เสร็จแล้ว");
        thinking.complete();
        return res ?? "ดำเนินการสำเร็จ";
      },
    }),
    del_deriveAsset: tool({
      description: "ลบสินทรัพย์ต่อยอด",
      inputSchema: jsonSchema<{ assetsId: number; id: number }>(
        z
          .object({
            assetsId: z.number().describe("ID สินทรัพย์ที่เชื่อมโยง"),
            id: z.number().describe("ID สินทรัพย์ต่อยอด"),
          })
          .toJSONSchema(),
      ),
      execute: async ({ assetsId, id }) => {
        const thinking = msg.thinking("กำลังจัดการสินทรัพย์...");
        const { scriptId } = resTool.data;
        await u.db("o_assets").where("id", id).del();
        await u.db("o_scriptAssets").where({ scriptId, assetId: id }).del();
        thinking.appendText(`ลบสินทรัพย์ต่อยอดแล้ว ID: ${id}\n`);
        const res = await new Promise((resolve) => socket.emit("delDeriveAsset", { assetsId, id }, (res: any) => resolve(res)));
        thinking.updateTitle("จัดการสินทรัพย์เสร็จแล้ว");
        thinking.complete();
        return res ?? "ลบสำเร็จ";
      },
    }),
    generate_deriveAsset: tool({
      description: "สร้างภาพสินทรัพย์ต่อยอด",
      inputSchema: jsonSchema<{ ids: number[] }>(
        z
          .object({
            ids: z.array(z.number()).describe("ID สินทรัพย์ต่อยอดที่ต้องการสร้าง"),
          })
          .toJSONSchema(),
      ),
      execute: async ({ ids }) => {
        const thinking = msg.thinking("กำลังสร้างสินทรัพย์ต่อยอด...");
        new Promise((resolve) => socket.emit("generateDeriveAsset", { ids }, (res: any) => resolve(res)))
          .then((res) => {
            thinking.appendText(`สร้างสินทรัพย์ต่อยอดแล้ว ID: ${JSON.stringify(res, null, 2)}\n`);
            thinking.updateTitle("เริ่มสร้างสินทรัพย์ต่อยอดแล้ว");
            thinking.complete();
          })
          .catch((e) => {
            thinking.appendText("สร้างสินทรัพย์ต่อยอดล้มเหลว:\n" + u.error(e).message);
            thinking.updateTitle("สร้างสินทรัพย์ต่อยอดล้มเหลว");
            thinking.complete();
          });

        return "เริ่มสร้างสินทรัพย์ต่อยอด";
      },
    }),
    generate_storyboard: tool({
      description: "สร้างภาพสตอรี่บอร์ด",
      inputSchema: jsonSchema<{ ids: number[] }>(
        z
          .object({
            ids: z.array(z.number()).describe("ต้องใช้ ID สตอรี่บอร์ดจริง รองรับการสร้างเป็นชุด"),
          })
          .toJSONSchema(),
      ),
      execute: async ({ ids }) => {
        const thinking = msg.thinking("กำลังสร้างสตอรี่บอร์ด...");
        socketQueue(
          () =>
            new Promise((resolve, reject) =>
              socket.emit("generateStoryboard", { ids }, (res: any) => {
                if (res?.error) return reject(new Error(res.error));
                resolve(res);
              }),
            ),
        )
          .then((res) => {
            thinking.appendText("ข้อมูลสตอรี่บอร์ดที่สร้าง:\n" + JSON.stringify(res, null, 2));
            thinking.updateTitle("สร้างสตอรี่บอร์ดเสร็จแล้ว");
            thinking.complete();
          })
          .catch((e) => {
            thinking.appendText("สร้างสตอรี่บอร์ดล้มเหลว:\n" + u.error(e).message);
            thinking.updateTitle("สร้างสตอรี่บอร์ดล้มเหลว");
            thinking.complete();
          });

        return "เริ่มสร้างสตอรี่บอร์ด";
      },
    }),
    add_flowData_storyboard: tool({
      description: "เพิ่มแผงสตอรี่บอร์ดลงพื้นที่ทำงาน",
      inputSchema: jsonSchema<{
        videoDesc: string;
        prompt: string | null;
        track: string;
        duration: number;
        associateAssetsIds: number[] | null;
        shouldGenerateImage: string;
      }>(
        z
          .object({
            videoDesc: z
              .string()
              .describe("คำบรรยายภาพ, ฉาก, ชื่อสินทรัพย์ที่เชื่อมโยง, ความยาว, ขนาดภาพ, การเคลื่อนกล้อง, การกระทำตัวละคร, อารมณ์, บรรยากาศแสงเงา, บทพูด, เสียงประกอบ, ID สินทรัพย์ที่เชื่อมโยง"),
            prompt: z.string().nullable().describe("พรอมต์ภาพสตอรี่บอร์ด"),
            track: z.string().describe("กลุ่ม"),
            duration: z.number().describe("ความยาววิดีโอที่แนะนำ"),
            associateAssetsIds: z.array(z.number()).nullable().describe("รายการ ID สินทรัพย์ที่สตอรี่บอร์ดนี้ต้องใช้"),
            shouldGenerateImage: z.enum(["true", "false"]).describe("จะสร้างภาพสตอรี่บอร์ดหรือไม่"),
          })
          .toJSONSchema(),
      ),
      execute: async (raw) => {
        const thinking = msg.thinking("กำลังเพิ่มข้อมูลแผงสตอรี่บอร์ด...");
        const data = {
          videoDesc: raw.videoDesc,
          prompt: raw.prompt,
          track: raw.track,
          duration: raw.duration,
          associateAssetsIds: raw.associateAssetsIds ?? [],
          shouldGenerateImage: raw.shouldGenerateImage,
        };
        socketQueue(
          () =>
            new Promise((resolve, reject) =>
              socket.emit("addStoryboard", { ...data }, (res: any) => {
                if (res?.error) return reject(new Error(res.error));
                resolve(res);
              }),
            ),
        )
          .then((res) => {
            thinking.appendText("ข้อมูลสตอรี่บอร์ดที่เพิ่ม:\n" + JSON.stringify(data, null, 2));
            thinking.updateTitle("เพิ่มสตอรี่บอร์ดสำเร็จแล้ว");
            thinking.complete();
          })
          .catch((e) => {
            thinking.appendText("ข้อมูลสตอรี่บอร์ดที่เพิ่ม:\n" + JSON.stringify(data, null, 2));
            thinking.updateTitle("เพิ่มสตอรี่บอร์ดล้มเหลว");
            thinking.complete();
          });
        return true;
      },
    }),
  };

  return toolsNames ? Object.fromEntries(Object.entries(tools).filter(([n]) => toolsNames.includes(n))) : tools;
};
