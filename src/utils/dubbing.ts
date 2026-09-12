import u from "@/utils";

/**
 * แปลงข้อความไทยเป็น "คำอ่าน" (แจกแจงพยางค์) ก่อนส่งเข้า TTS
 * เหตุผล: ภาษาไทยมีคำที่สะกดกับคำอ่านไม่ตรงกันบ่อย (คำควบกล้ำ, การันต์, คำยืม, คำอ่านเฉพาะ)
 * ถ้าไม่แปลงก่อน โมเดล TTS บางตัวอาจอ่านผิดเพี้ยน
 *
 * ไม่มีไลบรารี G2P ภาษาไทยสำเร็จรูปสำหรับ Node.js จึงใช้ LLM (universalAi, ราคาถูก) ทำหน้าที่นี้แทน
 */
export async function convertToPhonetic(text: string): Promise<string> {
  if (!text?.trim()) return text;
  const system = [
    "คุณคือผู้เชี่ยวชาญด้านการอ่านออกเสียงภาษาไทย (Thai Grapheme-to-Phoneme)",
    "หน้าที่ของคุณ: แปลงข้อความภาษาไทยที่ได้รับ ให้เป็น 'คำอ่านที่ถูกต้องตามหลักการอ่านออกเสียงจริง' โดยแยกพยางค์ด้วยเครื่องหมายขีดกลาง (-)",
    "ตัวอย่าง: 'สวัสดีครับ' -> 'สะ-หวัด-ดี-ครับ', 'ขอบคุณ' -> 'ขอบ-คุน', 'จันทรา' -> 'จัน-ทรา'",
    "กฎสำคัญ:",
    "1. คงเครื่องหมายวรรคตอน (, . ! ? ...) และการเว้นวรรคระหว่างคำไว้เหมือนเดิม เปลี่ยนแค่คำอ่านภายในแต่ละคำ",
    "2. ตัวเลข อักษรย่อ คำทับศัพท์ภาษาอังกฤษ ให้แปลงเป็นคำอ่านไทยที่ถูกต้องด้วย",
    "3. ห้ามเปลี่ยนความหมายหรือเพิ่ม/ลดเนื้อหา แปลงแค่รูปแบบการอ่านเท่านั้น",
    "4. ตอบกลับด้วยข้อความคำอ่านล้วนๆ เท่านั้น ห้ามมีคำอธิบาย คำนำ หรือข้อความอื่นใดปนมา",
  ].join("\n");

  try {
    const res = await u.Ai.Text("universalAi").invoke({
      system,
      messages: [{ role: "user", content: text }],
    });
    const phonetic = res.text?.trim();
    return phonetic || text;
  } catch (e) {
    console.error("[dubbing] convertToPhonetic ล้มเหลว ใช้ข้อความต้นฉบับแทน:", u.error(e).message);
    return text;
  }
}

/**
 * แคตตาล็อกเสียงมาตรฐาน — MiniMax Speech 2.8 HD (verified ชื่อจริงจากเอกสาร MiniMax)
 * แต่ละเสียงมีแท็กบุคลิก ใช้ให้ AI จับคู่กับคำบรรยายตัวละครอัตโนมัติ
 * `isDefault` = เสียงกลางๆ สำหรับทดสอบ/ใช้เมื่อจับคู่ไม่ได้ (fallback)
 */
export const VOICE_CATALOG = [
  { voice: "Calm_Woman", gender: "female", tags: "หญิงวัยกลางคน น้ำเสียงสงบนิ่ง สุขุม เป็นผู้ใหญ่ น่าเชื่อถือ", isDefault: true },
  { voice: "Wise_Woman", gender: "female", tags: "หญิงมีเหตุผล ฉลาด เป็นที่ปรึกษา อาจารย์ ผู้อาวุโส", isDefault: false },
  { voice: "Lively_Girl", gender: "female", tags: "หญิงสาวร่าเริง สดใส กระตือรือร้น พลังบวก วัยรุ่น", isDefault: false },
  { voice: "Lovely_Girl", gender: "female", tags: "หญิงสาวน่ารัก อ่อนหวาน อ่อนโยน ตัวเอกสายใส", isDefault: false },
  { voice: "Elegant_Man", gender: "male", tags: "ชายวัยกลางคน สง่างาม สุภาพ มีระดับ ผู้นำ ขุนนาง", isDefault: true },
  { voice: "Deep_Voice_Man", gender: "male", tags: "ชายเสียงทุ้มลึก น่าเกรงขาม ตัวร้าย ผู้มีอำนาจ ลึกลับ", isDefault: false },
  { voice: "Young_Knight", gender: "male", tags: "ชายหนุ่มกล้าหาญ อัศวิน นักรบ ตัวเอกวัยรุ่น-วัยหนุ่ม", isDefault: false },
  { voice: "Determined_Man", gender: "male", tags: "ชายมุ่งมั่นแน่วแน่ จริงจัง ไม่ย่อท้อ ตัวเอกสายฮีโร่", isDefault: false },
  { voice: "Patient_Man", gender: "male", tags: "ชายอาวุโส ใจเย็น อบอุ่น ผู้เฒ่า ปราชญ์ พ่อ ปู่", isDefault: false },
] as const;

export const DEFAULT_TTS_MODEL_KEY: `${string}:${string}` = "openrouter:minimax/speech-2.8-hd";
export const DEFAULT_FEMALE_VOICE = "Calm_Woman";
export const DEFAULT_MALE_VOICE = "Elegant_Man";

/**
 * ให้ AI จับคู่เสียงที่เหมาะสมกับตัวละครโดยอัตโนมัติ จากคำบรรยายตัวละคร (name + desc)
 * ใช้แคตตาล็อกเสียงด้านบนเป็นตัวเลือก ถ้าจับคู่ไม่ได้ชัดเจนจะ fallback ไปที่เสียงกลางๆ ตามเพศที่เดาได้
 */
export async function selectVoiceForCharacter(name: string, desc: string): Promise<string> {
  const catalogText = VOICE_CATALOG.map((v) => `- ${v.voice}: ${v.tags}`).join("\n");
  const system = [
    "คุณคือผู้กำกับเสียงพากย์ มีหน้าที่เลือกเสียงพากย์ที่เหมาะกับตัวละครที่สุดจากรายการที่กำหนดให้เท่านั้น",
    "รายการเสียงที่เลือกได้:",
    catalogText,
    "",
    "กฎ:",
    "1. เลือกได้แค่ 1 ชื่อเสียงจากรายการข้างต้นเท่านั้น ห้ามคิดชื่อเสียงขึ้นเอง",
    "2. พิจารณาจากเพศ, อายุ, บุคลิก, บทบาท (ตัวเอก/ตัวร้าย/ตัวประกอบ) ของตัวละคร",
    "3. ตอบกลับด้วยชื่อเสียง (เช่น Calm_Woman) เพียงคำเดียวเท่านั้น ห้ามมีคำอธิบายอื่นปนมา",
  ].join("\n");

  try {
    const res = await u.Ai.Text("universalAi").invoke({
      system,
      messages: [{ role: "user", content: `ชื่อตัวละคร: ${name}\nคำบรรยาย: ${desc}` }],
    });
    const picked = res.text?.trim().split(/\s+/)[0];
    if (picked && VOICE_CATALOG.some((v) => v.voice === picked)) return picked;
  } catch (e) {
    console.error("[dubbing] selectVoiceForCharacter ล้มเหลว ใช้เสียงกลางแทน:", u.error(e).message);
  }
  // fallback แบบง่าย: เดาเพศจากคำในคำบรรยาย ถ้าเดาไม่ได้ใช้เสียงชายกลางๆ
  const isFemale = /หญิง|สาว|นาง|เธอ|แม่|ย่า|ยาย|น้อง(?!ชาย)/.test(desc);
  return isFemale ? DEFAULT_FEMALE_VOICE : DEFAULT_MALE_VOICE;
}

interface CharacterVoice {
  voiceId: string;
  modelKey: `${string}:${string}`;
}

/**
 * ดึงเสียงที่ "ล็อกไว้" กับตัวละคร (assetsRoleId) จาก o_assetsRole2Audio
 * เสียงที่ผูกไว้คือสินทรัพย์ type=audio ที่ field `prompt` เก็บ voice_id (เช่น "Young_Knight")
 * และ field `describe` เก็บชื่อโมเดล TTS ที่ voice_id นี้ใช้ได้ (เช่น "openrouter:minimax/speech-2.8-hd")
 * การผูกแบบนี้ใช้กลไกเดิมที่มีอยู่แล้ว (updateAssetsAudio.ts บังคับผูกได้แค่ 1 เสียงต่อตัวละครเสมอ)
 * จึงรับประกันว่าตัวละครเดียวกันจะได้เสียงเดิมทุกครั้ง ไม่มีการสุ่มเปลี่ยน
 */
export async function getLockedVoiceForCharacter(assetsRoleId: number): Promise<CharacterVoice | null> {
  const binding = await u.db("o_assetsRole2Audio").where("assetsRoleId", assetsRoleId).first();
  if (!binding?.assetsAudioId) return null;
  const voiceAsset = await u.db("o_assets").where("id", binding.assetsAudioId).where("type", "audio").first();
  if (!voiceAsset?.prompt) return null;
  const modelKey = (voiceAsset.describe || DEFAULT_TTS_MODEL_KEY) as `${string}:${string}`;
  return { voiceId: voiceAsset.prompt, modelKey };
}

/**
 * สร้าง "สินทรัพย์เสียง" แบบพรีเซ็ต (ไม่มีไฟล์อัปโหลดจริง) แล้วผูกให้ตัวละครทันที
 * ใช้เมื่อยังไม่เคยตั้งเสียงให้ตัวละครนี้มาก่อน — เรียกซ้ำได้ปลอดภัย (ผูกทับของเดิมเสมอ ตามกฎ 1 เสียง/ตัวละคร)
 */
export async function assignVoiceToCharacter(
  projectId: number,
  assetsRoleId: number,
  voiceId: string,
  modelKey: `${string}:${string}` = DEFAULT_TTS_MODEL_KEY,
): Promise<void> {
  const startTime = Date.now();
  await u.db("o_assets").insert({
    name: `เสียง: ${voiceId}`,
    prompt: voiceId,
    describe: modelKey,
    type: "audio",
    projectId,
    startTime,
  });
  // ไม่ใช้ .returning("id") เพราะ Postgres/SQLite dialect ที่รองรับอยู่ไม่รับประกันพฤติกรรมเหมือนกัน
  // จึง query ย้อนกลับด้วยฟิลด์ที่เพิ่ง insert แทน (startTime ระดับ ms เพียงพอต่อ path นี้ที่ไม่ใช่งาน concurrent สูง)
  const created = await u
    .db("o_assets")
    .where({ projectId, type: "audio", prompt: voiceId, startTime })
    .orderBy("id", "desc")
    .first();
  if (!created?.id) throw new Error("สร้างสินทรัพย์เสียงไม่สำเร็จ");
  await u.db("o_assetsRole2Audio").where("assetsRoleId", assetsRoleId).delete();
  await u.db("o_assetsRole2Audio").insert({ assetsRoleId, assetsAudioId: created.id });
}

/**
 * ตั้งเสียงอัตโนมัติให้ตัวละครที่ยังไม่มีเสียงผูกไว้ในโปรเจกต์นี้ทั้งหมด โดยให้ AI จับคู่บุคลิกให้เอง
 * คืนค่ารายการที่ตั้งเสียงสำเร็จ
 */
export async function autoAssignVoicesForProject(projectId: number): Promise<{ assetsId: number; name: string; voice: string }[]> {
  const roles = await u.db("o_assets").where("projectId", projectId).where("type", "role").whereNull("assetsId");
  const results: { assetsId: number; name: string; voice: string }[] = [];
  for (const role of roles) {
    const existing = await u.db("o_assetsRole2Audio").where("assetsRoleId", role.id).first();
    if (existing) continue;
    const voice = await selectVoiceForCharacter(role.name ?? "", role.describe ?? "");
    await assignVoiceToCharacter(projectId, role.id!, voice);
    results.push({ assetsId: role.id!, name: role.name ?? "", voice });
  }
  return results;
}

interface DubbingResult {
  audioBase64: string;
  phoneticText: string;
  voiceId: string;
}

interface TaskRecord {
  taskClass: string;
  describe: string;
  relatedObjects: string;
  projectId: number;
}

/**
 * สร้างเสียงพากย์สำหรับบทพูดหนึ่งบรรทัดของตัวละครหนึ่งตัว
 * ทำ G2P ก่อนเสมอ แล้วใช้เสียงที่ล็อกไว้กับตัวละครนั้น (ไม่รับ voice จากภายนอกเพื่อกันเสียงเพี้ยน/ไม่ตรงตัวละคร)
 */
export async function generateCharacterDubbing(
  assetsRoleId: number,
  text: string,
  taskRecord?: TaskRecord,
): Promise<DubbingResult> {
  const voice = await getLockedVoiceForCharacter(assetsRoleId);
  if (!voice) {
    throw new Error(`ตัวละคร id=${assetsRoleId} ยังไม่ได้ผูกเสียงไว้ กรุณาไปตั้งค่าเสียงให้ตัวละครนี้ก่อนที่หน้าจัดการสินทรัพย์`);
  }
  const phoneticText = await convertToPhonetic(text);

  const audio = await u.Ai.Audio(voice.modelKey).run(
    {
      text: phoneticText,
      voice: voice.voiceId,
    },
    taskRecord,
  );
  if (!audio) throw new Error("สร้างเสียงพากย์ล้มเหลว");

  return {
    audioBase64: (audio as any).result ?? "",
    phoneticText,
    voiceId: voice.voiceId,
  };
}

interface ShotDialogueLine {
  characterName: string;
  line: string;
}

/**
 * ดึงบทพูดจริงของแต่ละช็อต จาก videoDesc (ข้อความดิบของสตอรี่บอร์ด) โดยให้ AI ช่วยแยกออกมาเป็นรายการ
 * (แยกด้วย AI แทน regex เพราะรูปแบบข้อความ videoDesc ไม่ตายตัว 100% ความยืดหยุ่นของ AI แม่นยำกว่า)
 * คืนค่าเป็น array ว่างถ้าช็อตนั้นไม่มีบทพูดเลย
 */
export async function extractDialogueFromShot(videoDesc: string, knownCharacterNames: string[]): Promise<ShotDialogueLine[]> {
  if (!videoDesc?.trim() || knownCharacterNames.length === 0) return [];
  const system = [
    "คุณคือผู้ช่วยแยกบทพูดจากข้อมูลสตอรี่บอร์ดดิบ",
    "หน้าที่: อ่านข้อความที่ได้รับ (บรรยายฉาก/การกระทำ/บทพูด/เสียงประกอบของช็อตวิดีโอ ปนกันอยู่) แล้วดึงเฉพาะ 'บทพูดจริงที่ตัวละครพูดออกมา' เท่านั้น",
    `รายชื่อตัวละครที่มีอยู่จริง: ${knownCharacterNames.join(", ")}`,
    "กฎ:",
    "1. ดึงเฉพาะบทพูด (คำพูดที่ตัวละครพูดออกเสียง) ไม่เอาคำบรรยายฉาก, การกระทำ, เสียงประกอบ, หรือความคิดในใจที่ไม่ได้พูดออกมา",
    "2. ต้องระบุชื่อตัวละครที่พูดให้ตรงกับรายชื่อที่ให้มาเป๊ะๆ เท่านั้น ถ้าระบุไม่ได้ชัดเจนว่าใครพูด ให้ข้ามบรรทัดนั้นไป",
    "3. ถ้าไม่มีบทพูดเลยในข้อความ ให้ตอบกลับคำว่า 'ไม่มี' คำเดียวเท่านั้น",
    "4. ถ้ามีบทพูด ให้ตอบกลับทีละบรรทัด รูปแบบ: ชื่อตัวละคร|เนื้อหาบทพูด (ห้ามมีคำอธิบายอื่นปนมา ห้ามมีเลขลำดับนำหน้า)",
  ].join("\n");

  try {
    const res = await u.Ai.Text("universalAi").invoke({
      system,
      messages: [{ role: "user", content: videoDesc }],
    });
    const text = res.text?.trim() ?? "";
    if (!text || text === "ไม่มี") return [];
    const lines: ShotDialogueLine[] = [];
    for (const raw of text.split("\n")) {
      const line = raw.trim();
      if (!line) continue;
      const sepIdx = line.indexOf("|");
      if (sepIdx === -1) continue;
      const characterName = line.slice(0, sepIdx).trim();
      const content = line.slice(sepIdx + 1).trim();
      if (!characterName || !content) continue;
      if (!knownCharacterNames.includes(characterName)) continue;
      lines.push({ characterName, line: content });
    }
    return lines;
  } catch (e) {
    console.error("[dubbing] extractDialogueFromShot ล้มเหลว ข้ามช็อตนี้:", u.error(e).message);
    return [];
  }
}
