import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
const router = express.Router();

// 新增原文数据
export default router.post(
  "/",
  validateFields({
    projectId: z.number(),
    data: z.array(
      z.object({
        index: z.number(),
        reel: z.string(),
        chapter: z.string(),
        chapterData: z.string(),
      }),
    ),
  }),
  async (req, res) => {
    const { projectId, data } = req.body;
    const totalNovelId = [];
    const getLastChapterIndex = await u.db("o_novel").where("projectId", projectId).select("chapterIndex").orderBy("chapterIndex", "desc").first();
    let lastChapterIndex = 0;
    if (getLastChapterIndex) {
      lastChapterIndex = getLastChapterIndex.chapterIndex!;
    }
    // ไม่ใช้ .returning("id")/destructure ตรงๆ เพราะ Postgres ไม่รับประกันพฤติกรรมเดียวกับ SQLite
    // (บั๊กนี้เคยทำให้แทรกได้แค่บทแรกแล้ว request พังทั้งหมด บทที่เหลือหายไปเงียบๆ)
    for (const item of data) {
      const chapterIndex = ++lastChapterIndex;
      await u.db("o_novel").insert({
        projectId,
        chapterIndex,
        reel: item.reel,
        chapter: item.chapter,
        chapterData: item.chapterData,
        createTime: Date.now(),
        eventState: 0,
      });
      const inserted = await u.db("o_novel").where({ projectId, chapterIndex }).orderBy("id", "desc").first();
      totalNovelId.push(inserted!.id!);
    }
    const chapterAllList = await u.db("o_novel").where("projectId", projectId).whereIn("id", totalNovelId);
    const novelClass = new u.cleanNovel();
    novelClass.emitter.on("item", async (item) => {
      await u
        .db("o_novel")
        .where("id", item.id)
        .update({ event: item.event, eventState: item.event ? 1 : -1, errorReason: item?.errReason ?? null });
    });
    novelClass.start(chapterAllList, projectId);

    res.status(200).send(success({ message: "เพิ่มต้นฉบับสำเร็จ" }));
  },
);
