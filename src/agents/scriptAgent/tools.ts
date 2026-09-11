import { tool, jsonSchema, Tool } from "ai";
import u from "@/utils";
import { z } from "zod";
import _ from "lodash";
import ResTool from "@/socket/resTool";

export const ScriptSchema = z.object({
  name: z.string().describe("ชื่อบทภาพยนตร์"),
  content: z.string().describe("เนื้อหาบทภาพยนตร์"),
});
export const planData = z.object({
  storySkeleton: z.string().describe("โครงเรื่อง"),
  adaptationStrategy: z.string().describe("กลยุทธ์การดัดแปลง"),
  script: z.string().describe("เนื้อหาบทภาพยนตร์"),
});

export type planData = z.infer<typeof planData>;

const keySchema = z.enum(Object.keys(planData.shape) as [keyof planData, ...Array<keyof planData>]);
const planDataKeyLabels = Object.fromEntries(
  Object.entries(planData.shape).map(([key, schema]) => [key, (schema as z.ZodTypeAny).description ?? key]),
) as Record<keyof planData, string>;

interface ToolConfig {
  resTool: ResTool;
  toolsNames?: string[];
  msg: ReturnType<ResTool["newMessage"]>;
}

export default (toolCpnfig: ToolConfig) => {
  const { resTool, toolsNames, msg } = toolCpnfig;
  const { socket } = resTool;
  const tools: Record<string, Tool> = {
    get_novel_events: tool({
      description: "ดึงเหตุการณ์ของบท",
      inputSchema: jsonSchema<{ chapterIndexs: number[] }>(
        z
          .object({
            chapterIndexs: z.array(z.number()).describe("หมายเลขบท"),
          })
          .toJSONSchema(),
      ),
      execute: async ({ chapterIndexs }) => {
        console.log("[tools] get_novel_events", chapterIndexs);
        const thinking = msg.thinking("กำลังค้นหาเหตุการณ์ของบท...");
        const data = await u
          .db("o_novel")
          .where("projectId", resTool.data.projectId)
          .select("id", "chapterIndex as index", "reel", "chapter", "chapterData", "event", "eventState")
          .whereIn("chapterIndex", chapterIndexs);
        thinking.appendText("กำลังค้นหาบทที่: " + chapterIndexs.join(","));
        const eventString = data.map((i: any) => [`บทที่${i.index}, ชื่อบท:${i.chapter}, เหตุการณ์:${i.event}`].join("\n")).join("\n");
        thinking.appendText("ผลการค้นหา:\n" + eventString);
        thinking.updateTitle("ค้นหาเหตุการณ์ของบทเสร็จแล้ว");
        thinking.complete();
        return eventString ?? "ไม่มีข้อมูล";
      },
    }),
    get_planData: tool({
      description: "ดึงข้อมูลพื้นที่ทำงาน",
      inputSchema: jsonSchema<{ key: keyof planData }>(
        z
          .object({
            key: keySchema.describe("คีย์ข้อมูล"),
          })
          .toJSONSchema(),
      ),
      execute: async ({ key }) => {
        console.log("[tools] get_planData", key);
        const thinking = msg.thinking(`กำลังดึงข้อมูลพื้นที่ทำงาน${planDataKeyLabels[key]}...`);
        const planData: planData = await new Promise((resolve) => socket.emit("getPlanData", { key }, (res: any) => resolve(res)));
        thinking.appendText(`ดึง${planDataKeyLabels[key]}ได้แล้ว:\n` + planData[key]);
        thinking.updateTitle(`ดึง${planDataKeyLabels[key]}เสร็จแล้ว`);
        thinking.complete();
        return planData[key] ?? "ไม่มีข้อมูล";
      },
    }),
    get_novel_text: tool({
      description: "ดึงเนื้อหาต้นฉบับของบทนิยาย",
      inputSchema: jsonSchema<{ chapterIndex: string }>(
        z
          .object({
            chapterIndex: z.string().describe("หมายเลขบท"),
          })
          .toJSONSchema(),
      ),
      execute: async ({ chapterIndex }) => {
        console.log("[tools] get_novel_text", "[tools] get_novel_text", chapterIndex);
        const thinking = msg.thinking(`กำลังดึงต้นฉบับบทนิยาย...`);
        const data = await u.db("o_novel").where("projectId", resTool.data.projectId).where({ chapterIndex }).select("chapterData").first();
        const text = data && data?.chapterData ? data.chapterData : "";
        thinking.appendText(`ดึงต้นฉบับได้แล้ว:\n` + text);
        thinking.updateTitle(`ดึงต้นฉบับบทนิยายเสร็จแล้ว`);
        thinking.complete();
        return text ?? "ไม่มีข้อมูล";
      },
    }),
    get_script_content: tool({
      description: "ดึงเนื้อหาบทภาพยนตร์",
      inputSchema: jsonSchema<{ ids: string[] }>(
        z
          .object({
            ids: z.array(z.string()).describe("id ของสคริปต์"),
          })
          .toJSONSchema(),
      ),
      execute: async ({ ids }) => {
        console.log("[tools] get_script_content", "[tools] get_script_content", ids);
        const thinking = msg.thinking(`กำลังดึงเนื้อหาบทภาพยนตร์...`);
        const data = await u.db("o_script").whereIn("id", ids).select("content", "name");
        const text = data && data.length ? data.map((d) => `<scriptItem name="${d.name}">${d.content}</scriptItem>`).join("\n") : "";
        thinking.appendText(`ดึงเนื้อหาบทภาพยนตร์ได้แล้ว:\n` + JSON.stringify(data, null, 2));
        thinking.updateTitle(`ดึงเนื้อหาบทภาพยนตร์เสร็จแล้ว`);
        thinking.complete();
        return text ?? "ไม่มีข้อมูล";
      },
    }),
  };
  return toolsNames ? Object.fromEntries(Object.entries(tools).filter(([n]) => toolsNames.includes(n))) : tools;
};
