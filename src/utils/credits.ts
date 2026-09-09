import db from "@/utils/db";
import { v4 as uuid } from "uuid";

export type CreditReason = "topup" | "generation" | "signupBonus" | "adminAdjust" | "refund";

async function getBalance(userId: number): Promise<number> {
  const user = await db("o_user").where("id", userId).first();
  return user?.credits ?? 0;
}

// เพิ่ม/หักเครดิต แบบ atomic พร้อมบันทึกลง ledger เสมอ (delta ติดลบ = หัก, บวก = เติม)
async function adjustCredits(userId: number, delta: number, reason: CreditReason, refId?: string, note?: string): Promise<number> {
  return db.transaction(async (trx) => {
    const user = await trx("o_user").where("id", userId).first();
    if (!user) throw new Error(`ไม่พบผู้ใช้ id=${userId}`);
    const current = user.credits ?? 0;
    const balanceAfter = current + delta;
    if (balanceAfter < 0) throw new Error("เครดิตไม่เพียงพอ");
    await trx("o_user").where("id", userId).update({ credits: balanceAfter });
    await trx("o_creditLedger").insert({
      id: uuid(),
      userId,
      delta,
      balanceAfter,
      reason,
      refId: refId ?? null,
      note: note ?? null,
      createTime: Date.now(),
    });
    return balanceAfter;
  });
}

async function hasEnoughCredits(userId: number, amount: number): Promise<boolean> {
  const balance = await getBalance(userId);
  return balance >= amount;
}

async function grantSignupBonus(userId: number, amount: number): Promise<number> {
  return adjustCredits(userId, amount, "signupBonus", undefined, `เครดิตต้อนรับสมาชิกใหม่ ${amount} เครดิต`);
}

export default {
  getBalance,
  adjustCredits,
  hasEnoughCredits,
  grantSignupBonus,
};
