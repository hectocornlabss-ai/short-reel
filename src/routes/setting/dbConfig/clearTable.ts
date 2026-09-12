import express from "express";
import { success, error } from "@/lib/responseFormat";
import { db } from "@/utils/db";

const router = express.Router();

export default router.post("/", async (req, res) => {
  try {
    const { tableName } = req.body;
    if (!tableName || typeof tableName !== "string") {
      return res.status(400).send(error("กรุณาระบุชื่อตารางที่ถูกต้อง"));
    }

    // 验证表名存在（防止SQL注入）
    if (!(await db.schema.hasTable(tableName))) {
      return res.status(400).send(error("ไม่พบตารางนี้"));
    }

    await db(tableName).del();

    res.status(200).send(success(`ล้างตาราง ${tableName} เรียบร้อยแล้ว`));
  } catch (err: any) {
    res.status(500).send(error(err?.message || "ล้างตารางไม่สำเร็จ"));
  }
});
