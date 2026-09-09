---
name: director_storyboard
description: Directorial storyboard prompt technique · Mature urban romance anime
metaData: director_skills
---

# Anime Directorial Storyboard Prompt Technique · Mature Urban Romance Anime

---

## 1. Emotion → Face/Eyes Word Mapping

| Emotion input | Face words | Eye words | Micro-expression addition |
|----------|--------|--------|-----------|
| Heartbeat / flutter | Face slightly flushed, expression faintly dazed | Eyes full of feeling, gaze lingering | Corners of the mouth slightly raised, restrained expression |
| Sadness / repression | Composed expression, sorrowful look | Eyes faintly red-rimmed, gaze lowered | Brows lightly knit, inward-turned expression |
| Anger / oppression | Sharp brows and eyes, stern expression | Gaze like a blade, forceful stare | Lips pressed tight, oppressive presence |
| Tenderness / deep affection | Gentle expression, eyes full of feeling | Focused, soft gaze, deep affection in the eyes | Corners of the mouth lightly raised, restrained warm expression |
| Resolve / determination | Solemn expression, composed face | Firm gaze, clear resolute eyes | Calm brows and eyes, dignified bearing |
| Surprise / shock | Momentarily stunned expression, face slightly changed | Eyes widened, gaze suddenly focused | Eyebrow raised, lips slightly parted |
| Coldness / detachment | Cool distant face, indifferent expression | Distant gaze, cold eyes | Expression almost frozen, an aloof aura |
| Joy / elation | Lively expression, beaming smile | Bright, sparkling eyes, crescent-shaped eye corners | Corners of the mouth raised, natural lively expression |
| Nervousness / flustered | Slightly dazed expression, flustered demeanor | Gaze wandering, eyes darting around | Brow center slightly furrowed, vividly realistic expression |
| Restraint / self-control | Inward-turned expression, composed face | Deep gaze, suppressed emotion in the eyes | Lips pressed tight, throat subtly moving |

---

## 2. Lighting Mood Vocabulary (Mature Urban Romance Anime)

### Time-of-Day Lighting

| Time of day | Key-light words | Tone words | Mood words |
|--------|--------|--------|--------|
| Early morning | Scattered morning light, diffuse soft light | Cool white tone, pale blue tone | Drifting mist, sense of air, morning-dew texture |
| Afternoon | Soft slanted side light, diffuse scattered light | Neutral tone, faint warm tone | Dappled light and shadow, distinct layering |
| Evening/dusk | Cool-toned side backlight, slanting afterglow | Predominantly cool, local warm-light accents | Elongated shadows, poetic light quality, rim light |
| Night | Cold blue moonlight, local warm candlelight points | Predominantly cool blue | Deep light and shadow, strong light/dark contrast |
| Overcast/rain | Diffuse cool light, no dominant light source | Gray, cool tone | Damp air feel, low saturation |

### Emotional Lighting

| Emotional tone | Light type | Additional constraint |
|----------|----------|----------|
| Heartbeat/tenderness | Soft side-backlight, local scattered warm light | Rim-light contouring, shallow depth of field softening the background |
| Confrontation/oppression | Hard side light, high-contrast strong lighting | Hard-edged shadows, clear light/dark division |
| Repression/sadness | Diffuse cool light, top light or cool side light | Low-key lighting, dark areas retained locally on the face |
| Mystery/solemnity | Cold blue side light, backlit silhouette | Controlled glow, precise rim light |
| Ethereal/atmospheric | Diffuse soft light, subtly overexposed backlight | Aerial-perspective feel, faded distant background |

---

## 3. Scene Texture Constraint Words (by Scene Type)

| Scene type | Required constraint words |
|----------|-----------|
| Modern apartment | Sofa/TV/bed/kitchen, clear modern furniture texture, floor reflection, curtain drape |
| Business office | Desk/computer/documents/bookshelf, modern office material, glass-partition reflection |
| Cafe | Tables and chairs/coffee cup/counter/window, wood grain texture, glass-cup texture, warm lamp light |
| City street | Streetlights/crosswalk/buildings/vehicles, modern urban material, night lighting, aerial perspective |
| Park green space | Trees/benches/lawn/path, natural material, dappled light and shadow, sense of air |
| Campus scene | Academic buildings/sports field/trees/benches, campus material, youthful atmosphere, natural light |
| Hotel room | Bed/bathroom/TV/nightstand, hotel material, comfortable and modern, warm-light ambiance |

---

## 4. Fixed Style Anchor Words (Required in All Output)

**Anime style anchor (required):**

anime style, cel-shaded coloring, clean lines, cinematic-grade composition, dramatic low-key lighting,

**Character texture (required whenever a character shot is included):**

finely rendered face, delicate skin, refined features, clearly layered hair strands, finely rendered hair strands

**Clothing texture (required whenever a character shot is included):**

clear fabric texture, ultra-clear texture detail, realistic fabric creases, clothing flowing naturally with movement

**Scene texture (required whenever a scene shot is included):**

clear scene material texture, aerial perspective, modern signs of use, lived-in atmosphere, depth-of-field blur

**Consistency anchor (required in reference-image mode):**

keep the character's face consistent with the reference image, keep the clothing colors consistent with the reference image, keep the scene's lighting style unified

**Style closing tag (fixed):**

mature urban romance anime style, modern novel-adapted animation, cinematic-grade storyboard composition

**Image-quality lock words (required in all output, placed after the style closing tag):**

### Mode A (Chinese)

Default (when the frame has no need for in-scene text):
超清4K画质，高细节，自然锐度，写实清晰感，画面无字幕、无水印、无标题叠字

Scenes with in-scene text (when the frame description includes writing/scrolls/plaques or other text-bearing props):
超清4K画质，高细节，自然锐度，写实清晰感，画面无字幕、无水印、无标题叠字，书卷/匾额等场景道具上的文字清晰可辨

### Mode B (English)

Default:
ultra-sharp 4K, high detail, crisp textures, naturalistic sharpness, photorealistic clarity, no subtitles, no captions, no watermark, no title overlay

Scenes with in-scene text:
ultra-sharp 4K, high detail, crisp textures, naturalistic sharpness, photorealistic clarity, no subtitles, no captions, no watermark, no title overlay, legible text on in-scene props such as scrolls and plaques

**Negative-prompt template (required for Mode B, placed at the end of the prompt):**

> ⚠️ Seedream (Mode A) **does not support negative prompts**; negative words apply to Mode B only. Mode A relies on texture anchors and image-quality lock words within the positive prompt to ensure image quality.

Mode B (English):
no plastic skin, no beauty filter, no studio lighting, no centered composition, no oversaturation, no AI generated look, no motion blur, no noise, no blurry, no out of focus, no subtitles, no captions, no watermark, no title overlay, no UI text

---

## 5. Aesthetic Prohibitions (Strictly Avoid When Generating)

The following words/styles must not appear in the output prompt:

- Photorealistic/photography/3D-render-related terms (e.g. photorealistic, real photography, CGI)
- Ancient-style/fantasy/sci-fi or other styles outside the modern setting
- High-saturation fluorescent colors/neon colors
- Cartoonish proportions, oversized eyes, chibi-style, or other deformation descriptions (unless specifically required by the style)
- Modern tech elements appearing in frame (phone screens, computer UI, modern logos, etc.)
- On-screen overlay text (subtitles, watermarks, title cards, overlaid narration text, opening-title text, or other UI-layer text; the image must be purely visual)

> **Exception**: in-story prop text (a character's handwriting, scroll text, plaques, signboards, letters, prescriptions, or other text that naturally exists within the scene) **is not covered by this prohibition**. When a storyboard frame description includes such content, it should be depicted faithfully and its text kept legible.

---

## 6. Complete Generation Example

> The following shows the same input rendered in Mode A and Mode B side by side for comparison; in actual use, output **only one** mode.

### Input (Storyboard Row Data)

| # | Frame description | Scene | Linked asset name | Duration | Shot scale | Camera move | Character action | Emotion | Lighting mood |
|------|---------|------|-------------|------|------|------|---------|------|----------|
| 1 | Shen Ci stands alone by the apartment window, gazing out at the city night view | Apartment | Shen Ci | 4s | Wide shot | Static | Standing with hands clasped behind his back, gaze fixed out the window | Tenderness / deep affection | Cool-toned side backlight at night |

### Sample Output A (Mode A · Seedream)

[Prompt]
二次元动画风格，赛璐璐上色，清晰线条，电影级构图，戏剧化低调光影，全景构图，人物全身入镜，面容细腻渲染，皮肤细腻，五官精致，发丝层次分明，发丝细腻渲染，男性主角立于公寓窗前，双臂自然垂于身侧，目光凝视窗外，神情温和，眼神专注柔和，目光深情，现代公寓材质清晰，沙发/电视/床/厨房，现代家具质感清晰，地板反光，窗帘垂感，夜间冷调侧逆光，月光冷蓝，光影幽深，明暗强对比，成熟都市言情动画风格，现代小说改编动画，电影级分镜构图，超清4K画质，自然锐度，写实清晰感，画面无字幕、无水印、无标题叠字。
Based on the reference image of Shen Ci, maintain consistent: face features, hairstyle, costume details. Generate a new scene: standing by the apartment window at night, gazing out at the city view. Keep character appearance identical to reference.

### Sample Output B (Mode B · Nanobanana)

```xml
<role>
You are a cinematographer and storyboard artist.
Maintain strict visual continuity across all shots.
</role>
<character_reference>
Image [1]: Shen Ci — black long hair, calm gentle eyes, modern casual clothing, tall slim body shape
</character_reference>
<continuity_rules>
- Same wardrobe, hairstyle, face features across ALL shots
- Same environment, lighting style, color grade
- Only framing, angle, action, expression may change
- Do NOT introduce new characters not in reference images
</continuity_rules>
<shot>
Full shot, character standing by the apartment window at night, gazing out at the city view, gentle and composed expression, focused eyes with deep emotion, cold dusk backlight, moonlight ambiance, dark interior with subtle light from outside, mature urban romance anime style, cel shading, ultra-sharp 4K, high detail, crisp textures, photorealistic clarity, no subtitles, no captions, no watermark, no title overlay.
</shot>
<negative>
no plastic skin, no beauty filter, no studio lighting, no centered composition, no oversaturation, no AI generated look, no motion blur, no noise, no blurry, no out of focus, no subtitles, no captions, no watermark, no title overlay, no UI text
</negative>
```

## Quick Reference Card

### Emotion → Frame Word Quick Reference

| Emotion | Face keywords | Matching light |
|------|-----------|----------|
| Heartbeat | Face slightly flushed, eyes full of feeling | Soft side-backlight |
| Sadness | Composed face, eyes faintly red-rimmed | Diffuse cool light |
| Anger | Sharp brows and eyes, gaze like a blade | Hard side light, high contrast |
| Tenderness | Eyes full of feeling, soft gaze | Local scattered warm light |
| Resolve | Solemn expression, clear resolute eyes | Cool-toned side light |
| Coldness | Cool distant face, distant gaze | Cold blue side light |
| Restraint | Composed face, suppressed emotion in the eyes | Low-key cool light, dark areas retained |
