import db from "@/utils/db";

const taskStateMap = {
  "0": "กำลังดำเนินการ",
  "1": "เสร็จสมบูรณ์",
  "-1": "สร้างล้มเหลว",
};
/**
 * 记录任务并返回结束函数
 * @param projectId  项目 ID
 * @param taskClass  任务分类
 * @param modelName   模型名称
 * @param opts       可选项：关联对象、任务描
 */
export default async function taskRecord(
  projectId: number,
  taskClass: string,
  modelName: string,
  opts: {
    describe?: string;
    content?: any;
  } = {},
) {
  const { content, describe = "" } = opts;

  let opteorContent: string | undefined;
  if (content === undefined || content === null) {
    opteorContent = undefined;
  } else if (typeof content === "string") {
    opteorContent = content;
  } else if (typeof content === "function") {
    throw new Error("ประเภทที่ไม่รองรับ");
  } else {
    try {
      opteorContent = JSON.stringify(content);
    } catch (e) {
      opteorContent = content.toString();
    }
  }

  // ไม่ใช้ .returning("id")/destructure ตรงๆ เพราะ Postgres ไม่รับประกันพฤติกรรมเดียวกับ SQLite
  // (บั๊กนี้เคยทำให้ทุกงาน generation ที่ผ่าน withTaskRecord พังตั้งแต่ก่อนเรียก AI จริงด้วยซ้ำ)
  const startTime = Date.now();
  await db("o_tasks").insert({
    projectId,
    taskClass,
    relatedObjects: opteorContent,
    model: modelName,
    describe,
    state: taskStateMap[0],
    startTime,
  });
  const created = await db("o_tasks").where({ projectId, taskClass, model: modelName, startTime }).orderBy("id", "desc").first();
  const id = created!.id!;

  /** 任务成功时调用 done(1)，失败时调用 done(-1, '原因') */
  return async function done(state: 1 | -1, reason?: string) {
    await db("o_tasks")
      .where("id", id)
      .update({
        state: taskStateMap[state],
        reason: state === -1 ? (reason ?? "") : null,
      });
  };
}
