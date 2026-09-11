import { db } from "@/utils/db";

export type SkillPrefix = "art_skills" | "story_skills";

function keyOf(prefix: SkillPrefix, folder: string): string {
  return `${prefix}/${folder}`;
}

// เจ้าของเทมเพลต: null = ของระบบ (แอดมินแก้/ลบได้เท่านั้น), มี id = ผู้ใช้คนนั้นสร้างเอง
export async function getOwnerUserId(prefix: SkillPrefix, folder: string): Promise<number | null> {
  const row = await db("o_skillOwnership").where("path", keyOf(prefix, folder)).first();
  if (!row) return null; // ไม่เจอแถวเลย ถือว่าเป็นของระบบ (ปลอดภัยไว้ก่อน)
  return row.createdByUserId ?? null;
}

export async function recordOwnership(prefix: SkillPrefix, folder: string, userId: number): Promise<void> {
  const path = keyOf(prefix, folder);
  const existing = await db("o_skillOwnership").where("path", path).first();
  if (existing) await db("o_skillOwnership").where("path", path).update({ createdByUserId: userId });
  else await db("o_skillOwnership").insert({ path, createdByUserId: userId, createTime: Date.now() });
}

export async function removeOwnership(prefix: SkillPrefix, folder: string): Promise<void> {
  await db("o_skillOwnership").where("path", keyOf(prefix, folder)).del();
}

// แก้ไข: แอดมินเท่านั้น (ไม่ว่าเทมเพลตนั้นจะเป็นของใคร)
export function canEditSkill(isAdmin: boolean): boolean {
  return isAdmin;
}

// ลบ: แอดมินลบได้ทุกอัน / ผู้ใช้ทั่วไปลบได้เฉพาะของตัวเอง (ของระบบหรือของคนอื่นลบไม่ได้)
export async function canDeleteSkill(prefix: SkillPrefix, folder: string, userId: number, isAdmin: boolean): Promise<boolean> {
  if (isAdmin) return true;
  const ownerId = await getOwnerUserId(prefix, folder);
  return ownerId !== null && ownerId === userId;
}
