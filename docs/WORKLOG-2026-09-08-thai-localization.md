# บันทึกงาน / Worklog — 2026-09-08 (Thai-first localization + dev port)

> ไฟล์นี้บันทึกรายละเอียดของ commit ที่ทำเสร็จและสถานะปัจจุบันของโปรเจกต์
> เผื่อนำไปใช้ต่อที่บ้าน (continue at home)

## สรุปงานใน commit นี้ (Thai-first localization + dev port config)

แก้ไขทั้งหมด **56 ไฟล์** (+5403 / -4111) หัวข้อหลัก ๆ คือ:

### 1. กำหนดพอร์ต dev ใหม่ (15980)
- `src/app.ts` — เปลี่ยนพอร์ตจาก hardcode `10588` เป็น `Number(process.env.PORT) || 15980`
- `src/utils/oss.ts` — URL ของ dev เปลี่ยนจาก `http://localhost:10588/` เป็น `http://localhost:${Number(process.env.PORT) || 15980}/`
- เซิร์ฟเวอร์ตอนนี้รันที่ `http://localhost:15980`

### 2. จัดลำดับ router ใหม่ (`src/router.ts`)
- จัดกลุ่ม import ที่เป็นหมวดเดียวกันใหม่ (assets, assetsGenerate, novel, script, scriptAgent, vendorConfig, modelTest ฯลฯ)
- ปรับลำดับการลงทะเบียน route ให้ตรงกับ import
- อัปเดต comment `@routes-hash`

### 3. แปลง vendor configs เป็นภาษาไทย (`data/vendor/*.ts`)
- แปล `name` / `description` / `inputs` / placeholder / log messages ของ vendor ต่อไปนี้:
  `klingai` (KlingAI), `minimax`, `toonflow`, `atlascloud`, `grsai`, `vidu`, `volcengine`, `volcengineSd2`, `deepseek`, `openai`, `null`
- เปลี่ยนชื่อโมเดลจาก "มาตรฐาน/โปร" (จีน) เป็น "Standard/Pro" (อังกฤษ) เช่น `kling-video-o1 Standard / Pro`

### 4. แปลง art skills เป็นภาษาไทย (`data/skills/art_skills/*`)
- แปล `README.md`, `art_prompt/art_character.md`, `art_prompt/art_character_derivative.md`, `art_prompt/art_prop.md`, `prefix.md` เป็นภาษาไทยของสไตล์:
  - `2D_90s_japanese_anime`, `2D_chinese_guofeng`, `2D_flat_design`, `2D_mature_urban_romance`
  - `3D_anime_render`, `3D_chinese_traditional`, `3D_clay_stopmotion`, `3D_guofeng_cyber`
  - `realpeople_ancient_chinese`, `realpeople_modern_city`, `realpeople_urban_modern`

### 5. เพิ่มเทมเพลต agent ใหม่ใน initDB / fixDB (`src/lib/initDB.ts`, `src/lib/fixDB.ts`)
- เพิ่ม/อัปเดตเนื้อหาทักษะการทำ video generation (แปลไทย) สำหรับโมเดล:
  - **KlingOmni**
  - **Seedance 1.5 Pro**
  - **Seedance 2.0** (⚠️ ต้องส่ง prompt เป็นภาษาจีนเท่านั้น)
  - **Wan 2.6**
- เพิ่มกฎการแยกวิเคราะห์ `videoDesc` (12 ฟิลด์), รูปแบบ `storyboardItem` XML, โหมดจับคู่ single/multi reference

### 6. Rebuild web bundle (`data/web/index.html`, `data/serve/app.js`)
- Rebuild frontend ที่ serve ให้ `data/serve/app.js`

---

## สถานะที่ตรวจสอบแล้ว (Verified)

- ✅ `npx tsc --noEmit` ผ่าน ไม่มี error
- ✅ เซิร์ฟเวอร์รันได้ที่ `http://localhost:15980` (`/` ตอบ 200)
- ✅ API ต้องใช้ token (ปกติ)

## หมายเหตุสำคัญ (เมื่อรันในเบราว์เซอร์ปกติ)

- error `toonflow://getAppUrl not supported` และ `ดึงข้อมูลโมเดลล้มเหลว` / 404 ที่เห็นในเบราว์เซอร์ธรรมดา
  เกิดจาก **Electron protocol handler ไม่มีในเบราว์เซอร์** — ไม่ได้ผิดปกติที่เซิร์ฟเวอร์
- ถ้าต้องใช้งานเต็มรูปแบบให้เปิดผ่าน Electron: `yarn dev:gui`

---

## ขั้นตอน/หัวข้อที่อาจทำต่อ (ที่บ้าน)

1. ทดสอบรันเทมเพลต agent ใหม่ (KlingOmni / Seedance / Wan 2.6) แบบ end-to-end ว่าสร้างวิดีโอได้จริง
2. ตรวจสอบความครบถ้วนของการแปลไทยในทักษะที่ยังเหลือ
3. สืบหา error "ดึงข้อมูลโมเดลล้มเหลว" ตอนรันด้วย Electron ว่าหายหรือไม่
4. ทบทวนว่า `@routes-hash` ใน `src/router.ts` ต้อง sync กับ build script หรือไม่

---

## วิธีรัน

- Dev server: `yarn dev` (หรือ set `PORT=15980`)
- GUI (Electron): `yarn dev:gui`
- ตรวจ type: `yarn lint`
