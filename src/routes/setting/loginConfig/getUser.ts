import express from "express";
import u from "@/utils";
import { success } from "@/lib/responseFormat";
const router = express.Router();

export default router.get("/", async (req, res) => {
  const userId = (req as any).user?.id;
  const data = await u.db("o_user").where("id", userId).select("id", "name", "displayName", "isAdmin").first();
  res.status(200).send(success(data));
});
