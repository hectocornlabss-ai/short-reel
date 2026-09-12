import express from "express";
import u from "@/utils";
import fs from "node:fs/promises";
import { z } from "zod";
import { error, success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
import { canDeleteSkill, removeOwnership } from "@/utils/skillOwnership";
const router = express.Router();

// 删除视觉手册 — แอดมินลบได้ทุกอัน ผู้ใช้ทั่วไปลบได้เฉพาะเทมเพลตที่ตัวเองสร้าง
export default router.post(
  "/",
  validateFields({
    name: z.string(),
  }),
  async (req, res) => {
    try {
      const { name } = req.body as { name: string };
      const currentUser = (req as any).user;

      // 安全校验：不允许包含路径分隔符、纯数字，防止越级删除或误删项目目录
      if (name.includes("/") || name.includes("\\") || name === "." || name === ".." || /^\d+$/.test(name)) {
        res.status(400).send(error("ชื่อต้องไม่มีตัวคั่นเส้นทางหรือเป็นตัวเลขล้วน"));
        return;
      }

      if (!(await canDeleteSkill("art_skills", name, currentUser.id, currentUser.isAdmin))) {
        return res.status(403).send(error("ลบได้เฉพาะเทมเพลตของตัวเอง หรือแอดมินเท่านั้น"));
      }

      const artPromptsDir = u.getPath(["skills", "art_skills", name]);

      try {
        const stat = await fs.stat(artPromptsDir);
        if (!stat.isDirectory()) {
          throw new Error(`${artPromptsDir} ไม่ใช่โฟลเดอร์`);
        }
        await fs.rm(artPromptsDir, { recursive: true, force: true });
      } catch (e) {
        console.error("[删除视觉手册] 删除失败:", artPromptsDir, e);
      }
      await removeOwnership("art_skills", name);
      res.status(200).send(success({ message: "ลบสำเร็จ" }));
    } catch (err) {
      res.status(500).send(error(u.error(err).message || "ลบไม่สำเร็จ"));
    }
  },
);
