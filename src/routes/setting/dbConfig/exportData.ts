import express from "express";
import { success, error } from "@/lib/responseFormat";
import { db, listUserTables } from "@/utils/db";

const router = express.Router();

export default router.get("/", async (req, res) => {
  try {
    const tables = await listUserTables();

    const data: Record<string, any[]> = {};
    for (const name of tables) {
      data[name] = await db(name).select("*");
    }

    const exportData = {
      exportTime: Date.now(),
      tables: data,
    };

    res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Disposition", `attachment; filename=toonflow-backup-${Date.now()}.json`);
    res.status(200).send(JSON.stringify(exportData, null, 2));
  } catch (err: any) {
    res.status(500).send(error(err?.message || "ส่งออกไม่สำเร็จ"));
  }
});
