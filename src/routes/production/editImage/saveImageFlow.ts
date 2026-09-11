import express from "express";
import u from "@/utils";
import { z } from "zod";
import { success } from "@/lib/responseFormat";
import { validateFields } from "@/middleware/middleware";
const router = express.Router();

export default router.post(
  "/",
  validateFields({
    edges: z.any(),
    nodes: z.any(),
  }),
  async (req, res) => {
    const { edges, nodes } = req.body;
    nodes.forEach((node: any) => {
      if (node.type == "upload") {
        node.data.image = node.data.image ? u.replaceUrl(node.data.image) : "";
      }

      if (node.type == "generated") {
        node.data.generatedImage = node.data.generatedImage ? u.replaceUrl(node.data.generatedImage) : "";
        node.data.references.forEach((item: { image: string }) => {
          item.image = item.image ? u.replaceUrl(item.image) : "";
        });
      }
    });
    // ไม่ใช้ .returning("id")/destructure ตรงๆ เพราะ Postgres ไม่รับประกันพฤติกรรมเดียวกับ SQLite
    const flowData = JSON.stringify({ edges, nodes });
    await u.db("o_imageFlow").insert({ flowData });
    const inserted = await u.db("o_imageFlow").where({ flowData }).orderBy("id", "desc").first();
    return res.status(200).send(success({ id: inserted!.id! }));
  },
);
