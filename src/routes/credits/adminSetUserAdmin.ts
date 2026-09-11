import express from "express";
import u from "@/utils";
import { success, error } from "@/lib/responseFormat";
import { validateFields, requireAdmin } from "@/middleware/middleware";
import { z } from "zod";

const router = express.Router();

// แอดมินตั้ง/ถอดสิทธิ์แอดมินให้ผู้ใช้คนอื่น
export default router.post(
  "/",
  requireAdmin,
  validateFields({ userId: z.number(), isAdmin: z.boolean() }),
  async (req, res) => {
    const { userId, isAdmin } = req.body;
    const currentUserId = (req as any).user?.id;
    if (userId === currentUserId && !isAdmin) return res.status(400).send(error("ไม่สามารถถอดสิทธิ์แอดมินของตัวเองได้"));
    await u.db("o_user").where("id", userId).update({ isAdmin });
    return res.status(200).send(success({ userId, isAdmin }));
  },
);
