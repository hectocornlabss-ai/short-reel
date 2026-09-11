import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success, error } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { autoAssignVoicesForProject } from "@/utils/dubbing";
const router = express.Router();

// ให้ AI จับคู่เสียงพากย์ที่เหมาะสมกับตัวละครทุกตัวในโปรเจกต์ที่ยังไม่มีเสียงผูกไว้ อัตโนมัติ
export default router.post(
  "/",
  validateFields({
    projectId: z.number(),
  }),
  async (req, res) => {
    const { projectId } = req.body;
    try {
      const results = await autoAssignVoicesForProject(projectId);
      res.status(200).send(success({ assigned: results }));
    } catch (e) {
      res.status(400).send(error(u.error(e).message));
    }
  },
);
