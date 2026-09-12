import express from "express";
import { success, error } from "@/lib/responseFormat";
import { db, listUserTables, setForeignKeyChecks } from "@/utils/db";
import initDB from "@/lib/initDB";

const router = express.Router();

export default router.post("/", async (req, res) => {
  try {
    const { tables: importTables } = req.body;
    if (!importTables || typeof importTables !== "object") {
      return res.status(400).send(error("รูปแบบข้อมูลนำเข้าไม่ถูกต้อง"));
    }

    // 删除所有现有表
    const existingTables = await listUserTables();

    await setForeignKeyChecks(false);
    for (const name of existingTables) {
      await db.schema.dropTableIfExists(name);
    }
    await setForeignKeyChecks(true);

    // 重新初始化表结构
    await initDB(db as any);

    // 导入数据
    await setForeignKeyChecks(false);
    for (const [tableName, rows] of Object.entries(importTables)) {
      if (!Array.isArray(rows) || rows.length === 0) continue;

      // 验证表名合法性（防止SQL注入）
      if (!(await db.schema.hasTable(tableName))) continue;

      // 清空表数据后插入导入数据
      await db(tableName).del();
      // 分批插入，每批100条
      for (let i = 0; i < rows.length; i += 100) {
        const batch = rows.slice(i, i + 100);
        await db(tableName).insert(batch);
      }
    }
    await setForeignKeyChecks(true);

    res.status(200).send(success("นำเข้าฐานข้อมูลสำเร็จ"));
  } catch (err: any) {
    res.status(500).send(error(err?.message || "นำเข้าไม่สำเร็จ"));
  }
});
