import express from "express";
import { success, error } from "@/lib/responseFormat";
import { db, listUserTables } from "@/utils/db";

const router = express.Router();

export default router.get("/", async (req, res) => {
  try {
    const tables = await listUserTables();

    const tableInfo = [];
    for (const name of tables) {
      const [{ count }] = await (db(name as any) as any).count("* as count");
      tableInfo.push({
        name,
        rowCount: count ?? 0,
      });
    }

    res.status(200).send(success(tableInfo));
  } catch (err: any) {
    res.status(500).send(error(err?.message || "获取数据库信息失败"));
  }
});
