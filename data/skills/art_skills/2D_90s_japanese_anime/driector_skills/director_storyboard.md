---
name: director_storyboard
description: Director storyboard prompt technique · 90s Japanese anime texture
metaData: director_skills
---

# Storyboard Prompt · 90s Japanese Anime · Style-Specific Technique

---

## Scope

This Skill is dedicated to generating storyboard prompts for the **90s Japanese anime texture** style.

---

## Emotion → Facial Expression/Eyes Word Mapping

| Emotion Input | Facial Words | Eye Words | Micro-expression Supplement |
|----------|--------|--------|-----------|
| Infatuation / Delight | corners of the mouth slightly raised, cheeks faintly flushed | bright eyes, gentle gaze | crescent-shaped eyes, subtle expression |
| Sadness / Dejection | downcast expression, eyes slightly reddened | dim gaze, wandering eyes | brow slightly furrowed, restrained expression |
| Surprise / Shock | stunned expression, eyes widened | surprised gaze, focused eyes | eyebrows raised, vivid expression |
| Tenderness / Deep affection | soft expression, gentle brow and eyes | focused gaze, affectionate eyes | corners of mouth slightly raised, restrained warm expression |
| Determination / Resolve | serious expression, resolute eyes | clear gaze, focused eyes | firm expression, bright bearing |
| Shyness / Bashfulness | flushed cheeks, evasive eyes | downcast gaze, avoiding eye contact | fingers lightly touching cheek, natural expression |
| Warmth / Being moved | soft expression, smiling eye corners | warm gaze, gentle eyes | corners of mouth raised, sincere expression |
| Loneliness / Nostalgia | quiet expression, distant gaze | vacant gaze, lost in thought | calm expression, quiet bearing |
| Happiness / Joy | radiant smile, crescent-shaped eyes | bright eyes, vivid expression | arms spread open, light movements |
| Nervousness / Unease | slightly stiff expression, brow slightly furrowed | wandering gaze, uncertain eyes | fingers lightly pinching hem of clothing, natural movement |

---

## Lighting Mood Word Library (90s Japanese Anime)

### Time-of-Day Lighting

| Time of Day | Key Light Words | Tone Words | Mood Words |
|--------|--------|--------|---------|
| Early morning | soft morning light, diffused light | warm yellow tone + pale blue accents | fresh feel, light filtering through leaves |
| Afternoon | soft oblique side light, diffused light | predominantly warm tone | dappled light, warm feel |
| Dusk/sunset | warm backlight, orange afterglow | amber warmth + pink accents | elongated shadows, nostalgic feel |
| Night | cool moonlight, local warm light | pale blue main tone + warm accents | quiet feel, layered lighting |
| Rainy day | diffused cool light, evenly soft | gray-blue tone + local warm accents | damp feel, fresh feel |
| Memory/flashback | soft-focus warm light, hazy effect | predominantly warm yellow, slightly faded | nostalgic feel, blurred edges |

### Emotional Lighting

| Emotional Tone | Light Type | Supplementary Constraint |
|----------|----------|---------|
| Infatuation/tenderness | soft side light, warm diffusion | shallow depth of field, slightly blurred background |
| Sadness/dejection | cool side light, low-key lighting | localized dark areas retained on the face |
| Nostalgia/memory | soft-focus warm light, hazy effect | slightly blurred edges, overall softness |
| Romance/sweetness | warm backlight, rim light | warm light bloom, slightly overexposed background |
| Everyday/warmth | even diffuse light, neutral warm tone | soft light, no obvious shadows |
| Night/quiet | cool moonlight, local warm light | light/dark contrast, clear layering |

---

## Scene Texture Constraint Words (by Scene Type)

| Scene Type | Required Constraint Words |
|----------|-----------|
| Japanese school | wooden floor texture, chalk writing on blackboard, green trees outside window, classroom window grid |
| Japanese residence | tatami texture, wooden-framed sliding doors, warm-colored lighting, Japanese-style room layout |
| Street/plaza | stone-paved road, utility poles, convenience store signage, parked bicycles |
| Cafe/restaurant | wooden tables and chairs, warm-colored pendant lights, street view through the window, coffee cup detail |
| Park/green space | grass texture, tree shadows, bench, distant buildings |
| Train/train car | seat fabric, window reflections, scenery outside the window, handstrap detail |
| Bedroom/private space | rumpled bedding, warm desk-lamp light, desk stationery, lived-in feel |
| Shrine/temple | torii wooden pillars, stone path, maple leaves/cherry blossoms, incense-burner smoke |

---

## Fixed Style Anchor Words (must be included in all outputs)

**90s anime anchor (required):**

90s Japanese anime style, hand-drawn texture, flat coloring, clear fluid lines, soft warm tones

**Line texture (required for all outputs):**

fine flowing linework, clear outlines, uniform consistent lines, no broken lines or rough edges

**Coloring texture (required when characters are in frame):**

flat coloring, even color, no obvious gradients, moderate color saturation

**Lighting layers (required for scenes with lighting):**

cinematic lighting layers, clear light/dark contrast, soft natural light effects

**Mood anchor (required):**

nostalgic healing atmosphere, Japanese anime aesthetic, warm emotional expression

**Image-quality lock words (required in all outputs, placed after the style closing):**

Mode A (Chinese — required for the Seedream model, do not translate) — default:
高清画质，线条清晰，上色均匀，色彩柔和，画面无杂色无噪点

Mode A (Chinese — required for the Seedream model, do not translate) — scene with in-image text (when the visual description includes prop text such as signs/labels):
高清画质，线条清晰，上色均匀，色彩柔和，画面无杂色无噪点，招牌/标识等道具文字清晰可读

Mode B (English) — default:
high-quality 90s anime style, clear line art, even flat coloring, soft warm tones, no noise, no grain, no digital artifacts

Mode B (English) — scene with in-image text:
high-quality 90s anime style, clear line art, even flat coloring, soft warm tones, no noise, no grain, no digital artifacts, legible text on signs and props

**Negative prompt template (required for Mode B, placed at the end of the prompt):**

> ⚠️ Seedream (Mode A) **does not support negative prompts** — negative words apply only to Mode B. Mode A relies on the texture anchors and image-quality lock words in the positive prompt to guarantee image quality.

Mode B (English):
no modern anime style, no digital 3D rendering, no CG animation, no cel-shading, no heavy shading, no gradient fills, no plastic look, no oversaturated colors, no neon colors, no cyberpunk, no sci-fi elements, no futuristic design

---

## Aesthetic Prohibitions (strictly avoid when generating)

The following words/styles must not appear in generated prompts:

- ❌ modern Japanese anime style (e.g., late-period Shinkai style, MAPPA style)
- ❌ 3D rendering/CG animation/digital-painting-related terms
- ❌ highly saturated fluorescent colors/neon color schemes
- ❌ modern clothing/modern architectural elements
- ❌ heavy shadows/excessive contrast/dark-tone style
- ❌ cartoonish proportions, big eyes, chibi, or other deformation descriptions
- ❌ cyberpunk/steampunk/fantasy-world elements
- ❌ text overlaid on the image (subtitles, watermarks, title cards, narration overlay text, or any UI-layer text — the image must be purely visual)

> 💡 **Exception**: in-world prop text (signs, street signs, labels, book text, or other text naturally present in the scene) **is not covered by this prohibition**. When the shot description includes such content, depict its presence faithfully and require the text to be clear.

---

## Full Generation Example

> The following shows the same input generated with Mode A and Mode B side by side for comparison; in actual use, **output only one of the two**.

### Input (storyboard row data)

| # | Visual Description | Scene | Linked Asset Name | Duration | Shot Scale | Camera Move | Character Action | Emotion | Lighting Mood |
|------|---------|------|-------------|------|------|------|---------|------|----------|
| 1 | On the platform at Asakusa Station, the glow of sunset falls on the girl | Station | Asakusa Station | 5s | Medium shot | slow push-in | carrying a school bag, turned slightly, smiling into the distance | anticipation / warmth | warm dusk backlight |

### Example Output A (Mode A · Seedream, Chinese — required for this model's quality, do not translate)

[Prompt]
90年代日式动画风格，手绘质感，平涂上色，清晰流畅线条，柔和暖色调，中景构图，人物半身入镜，精细流畅线条，轮廓线清晰，线条均匀一致，无断线无粗糙边缘，平涂上色，色彩均匀，无明显渐变，色彩饱和适中，女孩立于浅草站台上，手提书包，侧身微笑望向远方，眼神期待又温暖，黄昏逆光暖调，长影拉伸，怀旧氛围，木质站台纹理清晰，电线杆在背景中，电影感光影层次，明暗对比清晰，光效柔和自然，怀旧治愈氛围，日式动画美学，温馨情感表达，高清画质，线条清晰，上色均匀，色彩柔和，画面无杂色无噪点。
Based on the reference image of 女孩, maintain consistent: face features, hairstyle, costume details. Generate a new scene: standing on a train station platform at sunset, holding a school bag, smiling at the distance. Keep character appearance identical to reference.

### Example Output B (Mode B · Nanobanana)

```xml
<role>
You are a 90s anime storyboard artist.
Maintain strict visual continuity across all shots.
</role>
<character_reference>
Image [1]: girl — black long hair in twin tails, gentle eyes, school uniform, slim body shape
</character_reference>
<continuity_rules>
- Same wardrobe, hairstyle, face features across ALL shots
- Same environment, lighting style, color grade
- Only framing, angle, action, expression may change
- Do NOT introduce new characters not in reference images
</continuity_rules>
<shot>
Medium shot, character standing on a train station platform at sunset, holding a school bag with one hand, smiling gently at the distance, eyes filled with expectation and warmth, warm sunset backlight, long shadows, nostalgic atmosphere, wooden platform texture visible, electric poles in background, cinematic lighting layers, clear contrast between light and dark, soft natural light effects, healing anime aesthetic, high-quality 90s anime style, clear line art, even flat coloring, soft warm tones, no noise, no grain, no digital artifacts.
</shot>
<negative>
no modern anime style, no digital 3D rendering, no CG animation, no cel-shading, no heavy shading, no gradient fills, no plastic look, no oversaturated colors, no neon colors, no cyberpunk, no sci-fi elements, no futuristic design
</negative>
```

## Quick Reference Card

### Emotion → Visual Word Quick Reference

| Emotion | Facial Keywords | Lighting Match |
|------|-----------|---------|
| Infatuation | cheeks faintly flushed, crescent-shaped eyes | soft side light, warm tone |
| Sadness | downcast expression, eyes slightly reddened | cool side light, low-key |
| Tenderness | soft expression, gentle brow and eyes | even diffuse warm light |
| Nostalgia | calm expression, distant gaze | soft-focus warm light, hazy |
| Being moved | smiling eye corners, sincere expression | warm backlight glow |
| Loneliness | quiet expression, vacant gaze | cool side light, dark areas |
| Happiness | radiant smile, bright eyes | even diffuse warm light |
