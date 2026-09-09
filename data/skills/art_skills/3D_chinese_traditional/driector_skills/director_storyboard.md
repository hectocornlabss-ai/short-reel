---
name: director_storyboard
description: Director storyboard prompt technique · Chinese Traditional 3D
metaData: director_skills
---

# Storyboard Prompt · Chinese Traditional 3D · Style-Specific Technique

---

## Scope

This Skill is dedicated to storyboard prompt generation for the **Chinese Traditional 3D** style.

---

## Emotion → Facial/Gaze Word Mapping

| Emotion Input | Facial Words | Gaze Words | Micro-Expression Addendum |
|----------|--------|--------|-----------|
| Dignified / Elegant | Dignified expression, calm gaze | Clear bright eyes, composed gaze | Corners of the mouth slightly raised, elegant expression |
| Sorrowful / Mournful | Mournful expression, dim gaze | Tearful eyes, downcast gaze | Corners of the mouth drooping, sorrowful expression |
| Gentle / Deeply Affectionate | Gentle expression, tender brows and eyes | Focused, soft gaze, warm eyes | Corners of the mouth slightly raised, comforting expression |
| Sharp / Severe | Cold, stern expression, gaze like a blade | Piercing eyes, resolute gaze | Jaw clenched, stern expression |
| Startled / Delighted | Eyes slightly widened, vivid expression | Bright eyes, focused gaze | Corners of the mouth raised, surprised and delighted expression |
| Pensive / Introspective | Faint expression, distant gaze | Unfocused eyes, gaze drifting into space | Calm expression, reserved bearing |
| Joyful / Cheerful | Radiant expression, crescent-shaped eyes | Bright eyes, lively gaze | Slightly flushed cheeks, vivid expression |
| Weary / Listless | Hazy eyes, gentle expression | Slightly tired eyes, soft gaze | Faint yawn, languid expression |
| Anticipation / Longing | Eyes shining, vivid expression | Expectant eyes, flickering gaze | Corners of the mouth raised, vivid expression |
| Resolute / Firm | Serious expression, clear bright gaze | Firm eyes, gaze fixed ahead | Chin slightly raised, decisive expression |

---

## Lighting Mood Word Bank (Chinese Traditional 3D)

### Time-of-Day Lighting

| Time of Day | Key-Light Words | Tone Words | Mood Words |
|--------|--------|--------|--------|
| Early Morning | Soft morning light, warm side light | Moon white + jade green | Mist drifting, fresh air |
| Midday | Bright sunlight, direct soft light | Vermilion + golden-yellow highlights | Crisp light and shadow, vivid colors |
| Evening/Dusk | Backlit silhouette, warm gradient | Vermilion + indigo gradient | Sunset glow, rim light |
| Night | Cool background + warm light accents | Indigo primary tone + warm yellow light spots | Quiet and warm, soft lighting |
| Rainy Day | Diffused cool light, no key light source | Jade green + moon white | Damp air, low contrast |

### Emotional Lighting

| Emotional Tone | Light Type | Additional Constraint |
|----------|----------|----------|
| Palace Splendor | Warm-light illumination, localized highlights | PBR material reflection, depth-of-field layering |
| Landscape Mood | Diffused volumetric light, misty atmosphere | Jade-green tone, depth-of-field blur |
| Boudoir Tenderness | Localized soft light, gentle shadows | Rouge tone, close-up shots |
| Martial-Arts Severity | Cool-toned shadow, hard-light contrast | Indigo + ink black, low saturation |
| Moonlit Night Serenity | Moonlight illumination, cool-warm contrast | Indigo background, warm light accents |

---

## Scene Texture Constraint Words (by Scene Type)

| Scene Type | Required Constraint Words |
|----------|-----------|
| Palace Architecture | Vermilion palace walls, gilded glazed-tile roof, painted beams and carved rafters, white marble railings |
| Landscape Garden | Jade-green landscape, upturned-eave pavilions, winding secluded paths, rockery and ponds |
| Boudoir Interior | Folding screens and lattice doors, carved window frames, gauze curtains and drapes, classical furniture |
| Martial-Arts Scene | Bamboo grove/snowfield/cliff, cool tone, oppressive mood, sharp lines |
| Festival Celebration | Lanterns/streamers/fireworks, high-saturation warm colors, lively mood, bustling crowds |
| Night Street Scene | Lanterns/street lamps/shopfronts, warm light accents, cool background, reflected glare |

---

## Fixed Style Anchor Words (Required in Every Output)

**3D Rendering Anchor (Required):**

3D rendering style, high-precision modeling, PBR materials, Chinese Traditional 3D, cinematic-grade lighting

**Character Texture (Required Whenever a Character Shot Is Included):**

3D ancient-style modeling, high-precision texture maps, clear costume texture, finely rendered hair strands, rich lighting layers

**Scene Texture (Required Whenever a Scene Shot Is Included):**

3D scene rendering, richly detailed architecture, realistic material texture, depth-of-field blur, volumetric lighting

**Consistency Anchor (Required in Reference-Image Mode):**

keep the character design consistent with the reference image, keep the scene style consistent with the reference image, keep the lighting and color tone unified

**Style Closer (Fixed):**

Chinese Traditional 3D rendering, Eastern aesthetics, PBR materials, cinematic-grade rendering

**Quality-Lock Words (Required in Every Output, Placed After the Style Closer):**

Mode A (Chinese) — Default (when the image has no need for in-frame text):
3D高清渲染，高细节，高精度建模，PBR材质，画面无字幕、无水印、无标题叠字

Mode A (Chinese) — In-Frame Text Scene (when the frame description includes text props such as a plaque/couplet/book):
3D高清渲染，高细节，高精度建模，PBR材质，画面无字幕、无水印、无标题叠字，牌匾/对联等场景道具上的文字清晰可辨

Mode B (English) — Default:
3D rendered style, high-poly modeling, PBR materials, Chinese style, cinematic lighting, high detail, no subtitles, no captions, no watermark, no title overlay

Mode B (English) — In-Frame Text Scene:
3D rendered style, high-poly modeling, PBR materials, Chinese style, cinematic lighting, high detail, no subtitles, no captions, no watermark, no title overlay, legible text on in-scene props such as plaques and couplets

**Negative Prompt Template (Required for Mode B, Placed at the End of the Prompt):**

> Note: Seedream (Mode A) **does not support negative prompts** — negative words apply to Mode B only. Mode A ensures image quality through the texture anchors and quality-lock words in the positive prompt.

Mode B (English):
no photorealistic, no realistic photography, no low-poly, no rough modeling, no plastic texture, no harsh lines, no cartoon style, no anime style, no western fantasy, no cyberpunk, no sci-fi, no modern elements, no subtitles, no captions, no watermark, no title overlay, no UI text

---

## Aesthetic Prohibitions (Strictly Avoid When Generating)

The following words/styles must not appear in the output prompt:

- Photorealistic/photo-realism words (e.g. photorealistic, realistic photography)
- Highly saturated fluorescent colors/neon colors/strong digital feel
- Western fantasy/cyberpunk/modern elements
- Low-precision modeling/rough textures/plastic texture
- Cartoon/anime/2D style
- Flat design/lacking 3D depth
- Chaotic colors/incorrect lighting/incorrect perspective
- Modern architecture/modern costume elements

> **Exception**: Certain modern 3D rendering techniques (e.g. ray tracing, volumetric lighting) may reasonably be used, but the Chinese-traditional aesthetic baseline must be maintained.

---

## Full Generation Example

> Below, the same input is shown using Mode A and Mode B side by side for comparison; in actual use, **output only one of the two**.

### Input (Storyboard Table Row Data)

| No. | Frame Description | Scene | Linked Asset Name | Duration | Shot Size | Camera Move | Character Action | Emotion | Lighting Mood |
|------|---------|------|-------------|------|------|------|---------|------|----------|
| 1 | A woman in formal attire stands before the palace, holding a palace lantern | Palace | Woman | 6s | Medium shot | Slow push-in | Standing sideways holding the lantern, tender gaze | Tender / elegant | Warm-light illumination |

### Sample Output A (Mode A · Seedream)

[Prompt]
3D渲染风格，高精度建模，PBR材质，国风3D，电影级光影，3D古风建模，高精贴图，服饰纹理清晰，发丝细腻渲染，光影层次丰富，中景构图，女子身着华服站在宫殿前，手持宫灯侧身而立，神情温婉，眼神温柔，朱红宫墙背景，金黄高光点缀，体积光氛围，景深虚化，国风3D渲染，东方美学，PBR材质，3D高清渲染，高细节，高精度建模，PBR材质，画面无字幕、无水印、无标题叠字。
Based on the reference image of the woman, maintain consistent: face features, hairstyle, costume details. Generate a new scene: standing in front of palace at dusk, holding lantern. Keep visual style identical to reference.

### Sample Output B (Mode B · Nanobanana)

```xml
<role>
You are a 3D storyboard artist.
Maintain strict visual continuity across all shots.
</role>
<character_reference>
Image [1]: Woman — 3D ancient-style design, elegant attire, Chinese Traditional 3D style
</character_reference>
<continuity_rules>
- Same outfit, hairstyle, face features across ALL shots
- Same 3D rendered style, PBR materials
- Same scene lighting, Chinese aesthetic
- Do NOT introduce photorealistic or western fantasy elements
</continuity_rules>
<shot>
Medium shot, woman in elegant traditional Chinese attire standing before palace, holding lantern, gentle expression, soft gaze, cinematic lighting, volumetric fog, depth of field blur, PBR material rendering, high-poly modeling, Chinese palace architecture, warm lighting, golden highlights, Chinese style 3D render, Eastern aesthetics, high detail, no subtitles, no captions, no watermark, no title overlay.
</shot>
<negative>
no photorealistic, no realistic photography, no low-poly, no rough modeling, no plastic texture, no harsh lines, no cartoon style, no anime style, no western fantasy, no cyberpunk, no sci-fi, no modern elements, no subtitles, no captions, no watermark, no title overlay, no UI text
</negative>


## Quick Reference Card

### Emotion → Frame Word Quick Reference

| Emotion | Facial Keywords | Lighting Match |
|------|-----------|---------|
| Dignified | Dignified expression, composed gaze | Warm-light illumination + highlights |
| Sorrowful | Mournful expression, dim gaze | Cool-toned shadow + low contrast |
| Gentle | Gentle expression, focused gaze | Localized soft light + soft focus |
| Sharp | Cold, stern expression, gaze like a blade | Cool-toned shadow + hard light |
| Joyful | Radiant expression, crescent-shaped eyes | Warm-light illumination + high saturation |
| Pensive | Faint expression, distant gaze | Volumetric light + mist |
| Weary | Hazy eyes, gentle expression | Soft lighting + low contrast |
| Firm | Serious expression, clear bright gaze | Warm side light + clear outline |
