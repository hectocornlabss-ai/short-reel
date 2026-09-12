import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { id } from "zod/locales";
const router = express.Router();

export default router.post(
  "/",
  validateFields({
    id: z.number(),
    url: z.string(),
    flowId: z.number(),
  }),
  async (req, res) => {
    const { id, url, flowId } = req.body;
    // ไม่ใช้ .returning("id")/destructure ตรงๆ เพราะ Postgres ไม่รับประกันพฤติกรรมเดียวกับ SQLite
    const filePath = u.replaceUrl(url);
    await u.db("o_image").insert({
      filePath,
      state: "已完成",
      assetsId: id,
    });
    const inserted = await u.db("o_image").where({ filePath, assetsId: id, state: "已完成" }).orderBy("id", "desc").first();
    const imageId = inserted!.id!;
    await u.db("o_assets").where({ id }).update({ flowId, imageId });
    res.status(200).send(success({ message: "อัปเดตพรอมต์สำเร็จ" }));
  },
);
