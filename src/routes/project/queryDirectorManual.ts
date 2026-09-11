import express from "express";
import u from "@/utils";
import { success } from "@/lib/responseFormat";
import { getOwnerUserId } from "@/utils/skillOwnership";
import fs from "fs";
import path from "path";
const router = express.Router();

// จำนวนตอนที่แนะนำต่อแนวเรื่อง (ข้อมูลแนะนำคร่าวๆ เท่านั้น ไม่ผูกกับจำนวนตอนจริงของโปรเจกต์)
const RECOMMENDED_EPISODES: Record<string, string> = {
  Comedy_humor: "8-12",
  Coming_of_age: "12-20",
  Family_warmth: "15-24",
  Historical_epic: "24-40",
  Horror_supernatural: "8-15",
  Hot_blooded_action: "12-20",
  Mystery_thriller: "10-16",
  Psychological_drama: "10-18",
  Scifi_post_apocalypse: "12-20",
  Sweet_romance_novel: "15-24",
  Urban_workplace_drama: "15-24",
  Xianxia_fantasy: "24-40",
};

// 字段映射表
const DATA_MAP: { label: string; value: string; subDir?: string }[] = [
  { label: "README", value: "README" },
  { label: "วางแผนกำกับ", value: "director_planning_narrative", subDir: "driector_skills" },
  { label: "ตารางสตอรี่บอร์ด", value: "director_storyboard_table_narrative", subDir: "driector_skills" },
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
    const ossPath = u.getPath(path.join("skills", "story_skills", imagesDir, "images"));
    const files = fs.readdirSync(ossPath);
    const images = files.filter((f) => /\.(png|jpe?g|gif|webp|svg)$/i.test(f)).map((f) => path.join("story_skills", imagesDir, "images", f));
    if (images.length) {
      return Promise.all(images.map(async (i) => await u.oss.getFileUrl(i, "skills")));
    } else {
      return [];
    }
  } catch {
    return [];
  }
}

// 获取导演手册
export default router.post("/", async (req, res) => {
  try {
    const currentUser = (req as any).user;
    const artPromptsDir = u.getPath(["skills", "story_skills"]);

    // 读取所有风格文件夹
    const styleDirs = fs
      .readdirSync(artPromptsDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    const result = await Promise.all(
      styleDirs.map(async (directorManual) => {
        const styleDir = path.join(artPromptsDir, directorManual);
        const images = await readAllImages(directorManual);
        const readmePath = path.join(styleDir, "README.md");
        const readmeContent = fs.readFileSync(readmePath, "utf-8");
        let firstLine = readmeContent.split("\n")[0].replace(/--/g, "");
        const recommendedEpisodes = RECOMMENDED_EPISODES[directorManual];
        if (recommendedEpisodes) firstLine += ` · แนะนำ ${recommendedEpisodes} ตอน`;
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

        const ownerUserId = await getOwnerUserId("story_skills", directorManual);
        const isSystem = ownerUserId === null;
        const isOwner = ownerUserId !== null && ownerUserId === currentUser?.id;

        return {
          name: firstLine,
          image: images,
          directorManual: directorManual,
          data,
          isSystem,
          canEdit: !!currentUser?.isAdmin,
          canDelete: !!currentUser?.isAdmin || isOwner,
        };
      }),
    );
    res.status(200).send(success(result));
  } catch (err) {
    res.status(500).send({ error: String(err) });
  }
});
