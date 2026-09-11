import express from "express";
import u from "@/utils";
import { error, success } from "@/lib/responseFormat";
import { getOwnerUserId } from "@/utils/skillOwnership";
import fs from "fs";
import path from "path";
const router = express.Router();

// 字段映射表
const DATA_MAP: { label: string; value: string; subDir?: string }[] = [
  { label: "README", value: "README" },
  { label: "พรีฟิกซ์", value: "prefix" },
  { label: "ตัวละคร", value: "art_character", subDir: "art_prompt" },
  { label: "ตัวละคร (ต่อยอด)", value: "art_character_derivative", subDir: "art_prompt" },
  { label: "อุปกรณ์", value: "art_prop", subDir: "art_prompt" },
  { label: "อุปกรณ์ (ต่อยอด)", value: "art_prop_derivative", subDir: "art_prompt" },
  { label: "ฉาก", value: "art_scene", subDir: "art_prompt" },
  { label: "ฉาก (ต่อยอด)", value: "art_scene_derivative", subDir: "art_prompt" },
  { label: "สตอรี่บอร์ด", value: "director_storyboard", subDir: "driector_skills" },
  { label: "สตอรี่บอร์ดวิดีโอ", value: "art_storyboard_video", subDir: "art_prompt" },
  { label: "เทคนิค-วางแผนกำกับ", value: "director_planning_style", subDir: "driector_skills" },
  { label: "เทคนิค-ออกแบบตารางสตอรี่บอร์ด", value: "director_storyboard_table_style", subDir: "driector_skills" },
];

// 读取 md 文件内容，文件不存在时返回空字符串
function readMd(filePath: string): string {
  try {
    return fs.readFileSync(filePath, "utf-8");
  } catch {
    return "";
  }
}

// 获取 images 文件夹下所有图片文件路径列表
async function readAllImages(imagesDir: string) {
  try {
    const ossPath = u.getPath(path.join("skills", "art_skills", imagesDir, "images"));
    const files = fs.readdirSync(ossPath);
    const images = files.filter((f) => /\.(png|jpe?g|gif|webp|svg)$/i.test(f)).map((f) => path.join("art_skills", imagesDir, "images", f));
    if (images.length) {
      return Promise.all(images.map(async (i) => await u.oss.getFileUrl(i, "skills")));
    } else {
      return [];
    }
  } catch {
    return [];
  }
}

// 获取视觉手册
export default router.post("/", async (req, res) => {
  try {
    const currentUser = (req as any).user;
    const artPromptsDir = u.getPath(["skills", "art_skills"]);

    // 读取所有风格文件夹
    const styleDirs = fs
      .readdirSync(artPromptsDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    const result = await Promise.all(
      styleDirs.map(async (styleName) => {
        const styleDir = path.join(artPromptsDir, styleName);
        const images = await readAllImages(styleName);
        const readmePath = path.join(styleDir, "README.md");
        const readmeContent = fs.readFileSync(readmePath, "utf-8");
        const firstLine = readmeContent.split("\n")[0].replace(/--/g, "");
        const data = DATA_MAP.map(({ label, value, subDir }) => {
          let mdPath: string;
          if (subDir) {
            mdPath = path.join(styleDir, subDir, `${value}.md`);
          } else {
            mdPath = path.join(styleDir, `${value}.md`);
          }
          return {
            label,
            value,
            data: readMd(mdPath),
          };
        });

        const ownerUserId = await getOwnerUserId("art_skills", styleName);
        const isSystem = ownerUserId === null;
        const isOwner = ownerUserId !== null && ownerUserId === currentUser?.id;

        return {
          name: firstLine,
          image: images,
          stylePath: styleName,
          data,
          isSystem,
          canEdit: !!currentUser?.isAdmin,
          canDelete: !!currentUser?.isAdmin || isOwner,
        };
      }),
    );
    res.status(200).send(success(result));
  } catch (err) {
    res.status(500).send(error(u.error(err).message));
  }
});
