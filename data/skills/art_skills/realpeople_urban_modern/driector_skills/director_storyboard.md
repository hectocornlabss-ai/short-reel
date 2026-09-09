---
name: director_storyboard
description: Director storyboard prompt technique · Live-action urban realism
metaData: director_skills
---

# Storyboard Prompt · Live-Action Urban Realism · Style-Specific Technique

---

## Scope

This Skill is dedicated to generating storyboard prompts for the **live-action urban realism** style.

---

## Emotion → Facial Expression/Eyes Word Mapping

| Emotion Input | Facial Words | Eye Words | Micro-expression Supplement |
|----------|--------|--------|-----------|
| Attraction / Delight | corners of mouth slightly raised, a smile in the eyes | bright eyes, focused gaze | faintly flushed cheeks, natural expression |
| Sadness / Dejection | calm but downcast expression | dim gaze, wandering eyes | brow slightly furrowed, restrained expression |
| Anger / Intensity | sharp brow and eyes, stern expression | blazing gaze, forceful eyes | tight lip line, oppressive presence |
| Tenderness / Deep affection | soft expression, gentle brow and eyes | focused gaze, affectionate eyes | corners of mouth slightly raised, restrained warm expression |
| Determination / Resolve | serious expression, composed face | firm gaze, clear eyes | calm brow and eyes, capable bearing |
| Surprise / Shock | momentarily stunned expression, subtle change in complexion | widened eyes, sudden focus | eyebrows raised, lips slightly parted |
| Coldness / Detachment | indifferent expression, aloof face | distant gaze, still eyes | almost frozen expression, detached bearing |
| Joy / Elation | vivid expression, radiant smile | bright sparkling eyes, crescent-shaped smiling eyes | corners of mouth raised, lively natural expression |
| Nervousness / Panic | slightly dazed expression, flustered demeanor | wandering gaze, eyes darting around | brow slightly furrowed, vivid realistic expression |
| Restraint / Suppression | reserved expression, calm face | deep gaze, suppressed emotion in the eyes | tight lip line, subtle movement of the throat |

---

## Lighting Mood Word Library (Live-Action Urban Realism)

### Time-of-Day Lighting

| Time of Day | Key Light Words | Tone Words | Mood Words |
|--------|--------|--------|---------|
| Early morning | scattered morning light, diffused soft light | cool white/neutral tone | a sense of the city waking up, fresh air |
| Afternoon | soft oblique side light, diffused scattered light | predominantly warm, light warm tone | dappled light and shadow, clear layering |
| Evening/dusk | warm-toned side backlight, oblique afterglow | predominantly warm, local warm-light accents | elongated shadows, cozy light feel |
| Night | cool blue window light, warm indoor point sources | warm/cool contrast | deep light and shadow, strong light-dark contrast |
| Rainy/overcast | diffused cool light, no dominant light source | gray-blue main tone | damp-air feel, low saturation |
| Office/indoor | overhead light + ambient light | neutral gray tone | soft and even, professional feel |

### Emotional Lighting

| Emotional Tone | Light Type | Supplementary Constraint |
|----------|----------|---------|
| Attraction/tenderness | soft side backlight, local diffused warm light | rim light outlining, shallow depth of field softening the background |
| Confrontation/pressure | hard side light, high-contrast strong lighting | hard shadows, sharp light-dark division |
| Suppression/sadness | diffused cool light, overhead or cool side light | low-key lighting, partial dark areas retained on the face |
| Mystery/solemnity | cool blue side light, backlit silhouette | controlled glow, precisely placed rim light |
| Ethereal/atmospheric | diffused soft light, subtly overexposed backlight | aerial perspective feel, softened distant background |

---

## Scene Texture Constraint Words (by Scene Type)

| Scene Type | Required Constraint Words |
|----------|-----------|
| Office | glass partition reflections, tidy desk surface, computer screen glow, modern office chairs |
| Cafe/restaurant | wooden table and chair texture, coffee cup detail, warm pendant lights, blurred street view through the window |
| Home space | sofa fabric texture, rug texture, warm desk-lamp light, everyday household detail |
| Street/plaza | reflective asphalt road surface, building facade detail, neon signage, blurred crowd |
| Mall/indoor space | reflective marble flooring, glass display windows, modern lighting, sense of depth in the commercial space |
| Car interior | leather seat texture, window reflections, dashboard glow, blurred street view through the window |
| Bedroom/private space | rumpled bedsheets, warm bedside-lamp light, casually placed clothing, lived-in feel |

---

## Fixed Style Anchor Words (must be included in all outputs)

**Live-action realism anchor (required):**

live-action realistic photography, cinema-grade image quality, hyperrealistic documentary feel, high contrast, extreme detail, ultra-clear texture

**Character texture (required when characters are in frame):**

delicate skin, delicately rendered face, well-defined facial features, strand-by-strand defined hair, delicately rendered hair strands

**Clothing texture (required when characters are in frame):**

clear modern-fabric clothing texture, ultra-clear texture detail, clothing draping naturally with movement, modern tailoring, well-fitted

**Consistency anchor (required in reference-image mode):**

keep the character's face consistent with the reference image, keep the clothing color scheme consistent with the reference image, keep the scene lighting style unified

**Style closing (fixed):**

urban realistic aesthetic, modern East Asian temperament, cinema-grade shot composition

**Image-quality lock words (required in all outputs, placed after the style closing):**

Mode A (Chinese — required for the Seedream model, do not translate) — default (when the frame has no need for in-image text):
超清4K画质，高细节，自然锐度，写实清晰感，画面无字幕、无水印、无标题叠字

Mode B (English) — default:
ultra-sharp 4K, high detail, crisp textures, naturalistic sharpness, photorealistic clarity, no subtitles, no captions, no watermark, no title overlay

Mode B (English) — scene with in-image text:
ultra-sharp 4K, high detail, crisp textures, naturalistic sharpness, photorealistic clarity, no subtitles, no captions, no watermark, no title overlay, legible text on in-scene props such as screens, posters, and signage

**Negative prompt template (required for Mode B, placed at the end of the prompt):**

> ⚠️ Seedream (Mode A) **does not support negative prompts** — negative words apply only to Mode B. Mode A relies on the texture anchors and image-quality lock words in the positive prompt to guarantee image quality.

Mode B (English):
no plastic skin, no beauty filter, no studio lighting, no centered composition, no oversaturation, no AI generated look, no motion blur, no noise, no blurry, no out of focus, no subtitles, no captions, no watermark, no title overlay, no UI text, no ancient costume, no hanfu, no traditional Chinese architecture

---

## Aesthetic Prohibitions (strictly avoid when generating)

The following words/styles must not appear in generated prompts:

- ❌ terms related to ancient style/antiquity/hanfu/traditional architecture
- ❌ terms related to anime/2D illustration/CG rendering
- ❌ missing modern elements (the scene must clearly be modern)
- ❌ predominantly warm-yellow tone words (local "warm-light accents" may be used instead)
- ❌ soft-focus/hazy/low-contrast filter terms
- ❌ clashing colors/eclectic mixing/neon/fluorescent color schemes
- ❌ cartoon proportions, big eyes, chibi, or other deformation descriptions
- ❌ cyberpunk/steampunk/fictional-fantasy elements
- ❌ text overlaid on the image (subtitles, watermarks, title cards, narration overlay text, or any other UI-layer text — the image must be purely visual)

> 💡 **Exception**: in-world prop text (text a character reads on a phone/computer screen, posters, street signs, storefront signage, or other text naturally present in the scene) **is not covered by this prohibition**. When the shot description includes such content, depict its presence faithfully and require the text to be clear.

---

## Full Generation Example

> The following shows the same input generated with Mode A and Mode B side by side for comparison; in actual use, **output only one of the two**.

### Input (storyboard row data)

| # | Visual Description | Scene | Linked Asset Name | Duration | Shot Scale | Camera Move | Character Action | Emotion | Lighting Mood |
|------|---------|------|-------------|------|------|------|---------|------|----------|
| 1 | Lin Wan stands alone by the cafe window, raindrops sliding down the glass outside | Cafe | Lin Wan | 4s | Medium shot | slow push-in | holding a coffee cup, gazing outside | longing / anticipation | warm side light + cool blue window light |

### Example Output A (Mode A · Seedream, Chinese — required for this model's quality, do not translate)

[Prompt]
真人写实摄影，电影级画质，超现实主义纪实，强对比度，极致细节，纹理超清晰，中景构图，人物半身入镜，皮肤细腻，面容细腻渲染，五官立体，发丝根根分明，发丝细腻渲染，女性主角立于咖啡厅窗边，双手自然捧着一杯咖啡，目光望向窗外，眼神期待又略带思念，咖啡厅暖调侧光，窗外冷蓝雨光勾勒人物边缘，木质桌椅纹理清晰，玻璃窗上的雨滴细节，现代东方气质，电影级分镜构图，超清4K画质，自然锐度，写实清晰感，画面无字幕、无水印、无标题叠字。
Based on the reference image of Lin Wan, maintain consistent: face features, hairstyle, costume details. Generate a new scene: standing by the cafe window on a rainy day, holding a coffee cup, gazing outside. Keep character appearance identical to reference.

### Example Output B (Mode B · Nanobanana)

```xml
<role>
You are a cinematographer and storyboard artist.
Maintain strict visual continuity across all shots.
</role>
<character_reference>
Image [1]: Lin Wan — black long hair tied in a half ponytail, gentle eyes, modern casual outfit, slim body shape
</character_reference>
<continuity_rules>
- Same wardrobe, hairstyle, face features across ALL shots
- Same environment, lighting style, color grade
- Only framing, angle, action, expression may change
- Do NOT introduce new characters not in reference images
</continuity_rules>
<shot>
Medium shot, character standing by a cafe window on a rainy day, holding a coffee cup with both hands, gazing outside with an expression of expectation and longing, warm side light, cold blue window light creating rim light effect, wooden table texture, raindrops on glass visible, modern cinematic realism, ultra-sharp 4K, high detail, crisp textures, photorealistic clarity, no subtitles, no captions, no watermark, no title overlay.
</shot>
<negative>
no plastic skin, no beauty filter, no studio lighting, no centered composition, no oversaturation, no AI generated look, no motion blur, no noise, no blurry, no out of focus, no subtitles, no captions, no watermark, no title overlay, no UI text, no ancient costume, no hanfu, no traditional Chinese architecture
</negative>
```

## Quick Reference Card

### Emotion → Visual Word Quick Reference

| Emotion | Facial Keywords | Lighting Match |
|------|-----------|---------|
| Attraction | corners of mouth slightly raised, a smile in the eyes | warm-toned side light |
| Sadness | calm but downcast expression, dim gaze | diffused cool light |
| Anger | sharp brow and eyes, blazing gaze | hard side light, high contrast |
| Tenderness | soft expression, focused gaze | local diffused warm light |
| Determination | serious expression, firm gaze | neutral gray tone |
| Coldness | indifferent expression, distant gaze | cool blue side light |
| Restraint | calm face, suppressed emotion in the eyes | low-key cool light, dark areas retained |

