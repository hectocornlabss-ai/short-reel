---
name: director_storyboard
description: Director storyboard prompt technique · 3D animation rendering
metaData: director_skills
---

# Storyboard Prompts · 3D Animation Rendering · Style-Specific Technique

---

## Scope

This skill is dedicated to generating storyboard prompts for the **3D animation rendering** style.

---

## Emotion → Face/Eyes Word Mapping

| Emotion input | Facial words | Eye words | Micro-expression supplement |
|----------|--------|--------|-----------|
| Infatuation / delight | Corners of the mouth slightly raised, cheeks slightly flushed | Bright eyes, gentle gaze | Eyes crescent-shaped, lively expression |
| Sadness / loss | Downcast expression, eyes slightly reddened | Dim gaze, eyes wandering | Brow slightly furrowed, reserved expression |
| Surprise / curiosity | Eyes widened, lively expression | Focused gaze, curious eyes | Mouth slightly open, natural movement |
| Tenderness / deep affection | Soft expression, gentle brow and eyes | Focused gaze, affectionate eyes | Corners of the mouth slightly raised, restrained warm expression |
| Resolve / courage | Serious expression, determined eyes | Clear gaze, focused eyes | Firm expression, bright bearing |
| Shy / bashful | Flushed cheeks, natural expression | Downcast gaze, avoiding direct eye contact | Fingers lightly touching the cheek, gentle movement |
| Warmth / being moved | Soft expression, smiling eyes | Warm gaze, gentle eyes | Corners of the mouth raised, sincere expression |
| Loneliness / nostalgia | Quiet expression, distant gaze | Gaze unfocused, lost in thought | Calm expression, quiet bearing |
| Happiness / excitement | Bright smile, sparkling eyes | Lively gaze, vivid expression | Body leaning forward, brisk movement |
| Nervousness / unease | Slightly stiff expression, brow slightly furrowed | Wandering gaze, uncertain eyes | Fingers clenched, tense movement |

---

## Lighting Atmosphere Word Bank (3D Animation Rendering)

### Time-of-Day Lighting

| Time of day | Key light words | Tone words | Mood words |
|--------|--------|--------|---------|
| Morning | Soft morning light, diffused light | Warm yellow tone + pale blue accents | Fresh feel, light through windows |
| Afternoon | Soft side light, diffused light | Mainly warm tone | Dappled light, warm feel |
| Dusk/sunset | Backlit glow, orange afterglow | Warm orange + pink accents | Elongated shadows, romantic feel |
| Night | Neon glow, local warm light | Warm orange dominant + cool accents | Urban feel, layered lighting |
| Indoor everyday | Warm side light, even and soft | Mainly warm yellow | Cozy feel, homey atmosphere |
| Urban establishing shot | Diffused glow, soft light haze | Warm orange dominant | Open feel, urban aesthetic |

### Emotional Lighting

| Emotional tone | Lighting type | Supplementary constraint |
|----------|----------|---------|
| Infatuation/tenderness | Soft side light, warm diffusion | Shallow depth of field, background slightly blurred |
| Sadness/loss | Cool side light, low-key lighting | Partial dark areas retained on the face |
| Romance/sweetness | Backlit glow, rim light | Warm light glow, background slightly overexposed |
| Nostalgia/memory | Soft-focus warm light, hazy effect | Edges slightly blurred, overall soft |
| Everyday/warmth | Even diffused light, neutral warm tone | Soft light, no obvious shadows |
| Night/urban | Neon glow, warm-cool contrast | Clear light-dark contrast, distinct layering |

---

## Scene Texture Constraint Words (by Scene Type)

| Scene type | Required constraint words |
|----------|-----------|
| Modern urban | fine architectural structure, high-rise buildings, glass curtain walls, city skyline |
| Cafe/restaurant | wooden tables and chairs, warm lighting, street view outside window, coffee cup detail |
| Home space | modern furniture, warm table lamp, everyday clutter detail, cozy atmosphere |
| Office | glass partitions, desk, computer screen, modern office chair |
| Street/plaza | asphalt road surface, streetlights, pedestrians, modern buildings |
| Mall/indoor | marble flooring, glass display windows, commercial space, lighting fixtures |
| Park/green space | grass texture, tree shadows, benches, distant buildings |
| Car interior/public transit | seat fabric, window reflections, dashboard light, blurred street view outside window |

---

## Fixed Style Anchor Words (must be included in all outputs)

**3D animation anchor (required):**

3D animation rendering, cel-shaded texture, cinema-grade lighting, high-detail materials

**Outline/lines (required in all outputs):**

clear outlines, bright cartoon rendering, uniform and consistent outlines, no broken lines or rough edges

**Material texture (required when the shot includes material):**

high-detail materials, realistic material combined with cartoon proportions, clear material texture, fine surface texture

**Lighting layers (required when the shot includes lighting scenes):**

soft lighting layers, clear light-dark contrast, soft natural lighting effects, warm tone dominant

**Atmosphere anchor (required):**

joyful healing atmosphere, 3D animation aesthetic, warm emotional expression, modern urban feel

**Image quality lock words (must be included in all outputs, placed after the style closing):**

Mode A (Chinese — required for the Seedream model, do not translate) — default:
8K 超高清，线条清晰，材质细腻，色彩饱满，画面无杂色无噪点

Mode A (Chinese — required for the Seedream model, do not translate) — scene with in-frame text (when the description includes signage/labels or other prop text):
8K 超高清，线条清晰，材质细腻，色彩饱满，画面无杂色无噪点，招牌/标识等道具文字清晰可读

Mode B (English) — default:
8K ultra HD, clear cel-shading, detailed materials, warm tones, no digital artifacts, no grain, no noise

Mode B (English) — scene with in-frame text:

8K ultra HD, clear cel-shading, detailed materials, warm tones, no digital artifacts, no grain, no noise

Mode B (English) — scene with in-frame text:

8K ultra HD, clear cel-shading, detailed materials, warm tones, no digital artifacts, no grain, no noise, legible text on signs and props

**Negative prompt template (required for Mode B, placed at the end of the prompt):**

> Note: Seedream (Mode A) **does not support negative prompts**; negative words apply only to Mode B. Mode A ensures image quality through the texture anchors and image-quality lock words in the positive prompt.

Mode B (English):
no photorealism, no realistic rendering, no CG realism, no dark tones, no heavy shading, no oversaturated colors, no neon colors, no cyberpunk, no sci-fi elements, no futuristic design, no plastic look, no cartoon flat coloring without depth

---

## Aesthetic Prohibitions (strictly avoid when generating)

The following words/styles must not appear in the output prompt:

- Photorealistic rendering/photo-real style
- Dark tone/heavy shadow/overly high-contrast style
- Highly saturated fluorescent colors/neon color schemes
- Missing modern elements (the scene must be explicitly modern)
- Cartoon-proportion, big-eyes, chibi, or other deformation descriptions
- Cyberpunk/steampunk/fantasy-world elements
- Overlaid on-screen text (subtitles, watermarks, title cards, narration overlay text, or other UI-layer text; the image must be pure visual content)

> **Exception**: in-world prop text (signage, road signs, labels, books, or other text naturally present in the scene) **is not subject to this prohibition**. When the storyboard description includes such content, it should be described faithfully and the text requested to be clearly legible.

---

## Full Generation Example

> The following shows a side-by-side comparison of Mode A and Mode B outputs for the same input; in actual use, **only one mode's output should be produced**.

### Input (storyboard table row data)

| No. | Shot description | Scene | Linked asset name | Duration | Shot size | Camera move | Character action | Emotion | Lighting atmosphere |
|------|---------|------|-------------|------|------|------|---------|------|----------|
| 1 | On a dusk street, a girl stands at the intersection, sunset glow falling on her hair | Street | Girl | 5s | Medium shot | Slow push-in | Holding a shopping bag, turning sideways with a gentle smile looking into the distance | Anticipation / warmth | Dusk glow + warm side light |

### Example Output A (Mode A · Seedream, Chinese — required for this model's quality, do not translate)

[Prompt]
3D 动画渲染，赛璐珞质感，电影级打光，高细节材质，中景构图，人物半身入镜，清晰轮廓线，明快卡通渲染，轮廓线均匀一致，无断线无粗糙边缘，高细节材质，写实材质与卡通比例结合，材质纹理清晰，表面质感细腻，黄昏街道上，女孩站在路口，手提购物袋，侧身微笑望向远方，眼神期待又温暖，晚霞洒在发丝上，逆光霞光，暖橙主调，粉色点缀，柔和光影层次，明暗对比清晰，光效柔和自然，愉悦治愈氛围，3D 动画美学，温馨情感表达，现代都市风情，8K 超高清，线条清晰，材质细腻，色彩饱满，画面无杂色无噪点。
Based on the reference image of the girl, maintain consistent: face features, hairstyle, costume details. Generate a new scene: standing on a street corner at sunset, holding a shopping bag, smiling gently at the distance. Keep character appearance identical to reference.

### Example Output B (Mode B · Nanobanana)

```xml
<role>
You are a 3D animation storyboard artist.
Maintain strict visual continuity across all shots.
</role>
<character_reference>
Image [1]: girl — long brown hair, gentle eyes, modern casual outfit, slim body shape
</character_reference>
<continuity_rules>
- Same wardrobe, hairstyle, face features across ALL shots
- Same environment, lighting style, color grade
- Only framing, angle, action, expression may change
- Do NOT introduce new characters not in reference images
</continuity_rules>
<shot>
Medium shot, character standing on a street corner at sunset, holding a shopping bag with one hand, smiling gently at the distance, eyes filled with expectation and warmth, sunset backlight on hair, warm cel-shading, detailed materials, clear outline lines, cinematic lighting, warm tones, soft shallow depth of field, modern urban aesthetic, healing atmosphere, high-quality 3D animation, 8K ultra HD, clear line art, detailed materials, no digital artifacts, no grain.
</shot>
<negative>
no photorealism, no realistic rendering, no CG realism, no dark tones, no heavy shading, no oversaturated colors, no neon colors, no cyberpunk, no sci-fi elements, no futuristic design, no plastic look, no cartoon flat coloring without depth
</negative>
```

## Quick Reference Card

### Emotion → Visual Word Quick Lookup

| Emotion | Facial keywords | Lighting match |
|------|-----------|---------|
| Infatuation | Corners of the mouth slightly raised, cheeks slightly flushed | Warm backlit glow |
| Sadness | Downcast expression, eyes slightly reddened | Cool low-key side light |
| Tenderness | Soft expression, gentle brow and eyes | Even warm diffused light |
| Romance | Focused gaze, affectionate eyes | Warm backlit glow |
| Being moved | Smiling eyes, sincere expression | Soft warm side light |
| Loneliness | Quiet expression, gaze unfocused | Cool side light, dark areas |
| Happiness | Bright smile, sparkling eyes | Warm diffused light |
| Sweetness | Bright eyes, lively expression | Backlit rim light |
