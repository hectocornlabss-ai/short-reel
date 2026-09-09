---
name: director_storyboard
description: Storyboard prompt technique · stop-motion claymation texture
metaData: director_skills
---

# Storyboard Prompts · Stop-Motion Claymation · Style-Specific Technique

---

## Scope

This Skill is dedicated to generating storyboard prompts for the **stop-motion claymation texture** style.

---

## Emotion → Face/Eyes Word Mapping

| Emotion Input | Face Words | Eyes Words | Micro-Expression Addition |
|----------|--------|--------|-----------|
| Infatuation / delight | Slightly flushed cheeks, subtle expression | Bright eyes, gentle gaze | Corners of mouth lifted, clay imprint |
| Sadness / dejection | Downcast expression, soft look | Dim eyes, wandering gaze | Slightly furrowed brow, reserved expression |
| Surprise / curiosity | Widened eyes, animated expression | Focused eyes, curious gaze | Slightly parted mouth, natural motion |
| Tenderness / deep affection | Soft expression, warm brow and eyes | Focused eyes, loving gaze | Corners of mouth slightly raised, restrained warm expression |
| Resolve / courage | Serious expression, determined eyes | Clear gaze, focused eyes | Firm expression, bright bearing |
| Shyness / bashfulness | Flushed cheeks, natural expression | Lowered gaze, avoiding eye contact | Pinching the hem of clay garment, gentle motion |
| Warmth / being moved | Soft expression, smiling eyes | Warm eyes, gentle gaze | Corners of mouth raised, sincere expression |
| Loneliness / nostalgia | Quiet expression, distant gaze | Vacant gaze, lost in thought | Calm expression, quiet bearing |
| Joy / elation | Radiant smile, bright eyes | Lively eyes, animated expression | Body leaning forward, brisk motion |
| Tension / unease | Slightly stiff expression, furrowed brow | Wandering eyes, uncertain gaze | Clenched fingers, tense motion |

---

## Lighting Mood Vocabulary (Stop-Motion Claymation)

### Time-of-Day Lighting

| Time of Day | Key Light Words | Tone Words | Mood Words |
|--------|--------|--------|---------|
| Early morning | Soft morning light, diffused light | Warm yellow tone + pale blue accents | Fresh feel, light streaming through windows |
| Afternoon | Soft slanted side light, diffused light | Warm tone dominant | Dappled light and shadow, warm feel |
| Dusk/sunset | Warm-toned backlight, orange afterglow | Amber warmth + pink accents | Elongated shadows, nostalgic feel |
| Night | Cool moonlight, local warm light | Pale blue dominant + warm accents | Quiet feel, layered light and shadow |
| Indoor daily | Warm side light, even and soft | Warm yellow dominant | Cozy feel, homely atmosphere |
| Fantasy/magic | Fantasy light effects, magical light spots | Colored light spots, soft-focus effect | Dreamy feel, magical atmosphere |

### Emotional Lighting

| Emotional Tone | Light Type | Additional Constraint |
|----------|----------|---------|
| Infatuation/tenderness | Soft side light, warm diffused light | Shallow depth of field, slightly blurred background |
| Sadness/dejection | Cool-toned side light, low-key lighting | Retain some dark areas on the face |
| Fantasy/dreamlike | Magical light effects, colored light spots | Controlled glow, soft edge light |
| Nostalgia/memory | Soft-focus warm light, haze effect | Slightly blurred edges, overall softness |
| Everyday/warmth | Even diffused light, neutral warm tone | Soft light, no obvious shadows |
| Night/quiet | Cool moonlight, local warm light | Clear light/dark contrast, distinct layering |

---

## Scene Texture Constraint Words (by Scene Type)

| Scene Type | Required Constraint Words |
|----------|-----------|
| Vintage wooden cabin | Clear wood grain texture, clay brick wall, warm lamp light, vintage furniture |
| Fantasy forest | Clay-textured trees, bokeh effect, magical light spots, natural ground |
| Indoor daily | Clay-textured walls, furniture detail, warm lamp light, everyday clutter |
| Street plaza | Clay-textured cobblestone road, vintage architecture, warm streetlamp light, clay-textured crowd |
| Cafe/restaurant | Clay-textured wooden tables and chairs, warm lamp light, blurred street view outside the window |
| Garden/courtyard | Clay-shaped flowers and plants, soil texture, dappled sunlight, bench detail |
| Cave/underground | Clay-textured rock, cave lighting, layered shadows, mysterious atmosphere |
| Castle/palace | Clay-textured stone brick, ornate decoration, warm lamp light, grand space |

---

## Fixed Style Anchor Words (Required in All Output)

**Stop-motion animation anchor (required):**

Stop-motion animation style, clay texture, visible finger imprints, clay-grain material, warm-toned lighting

**Clay texture (required in all output):**

Clear clay grain, visible finger imprints, pronounced material texture, handcrafted marks retained

**Character material (required when a character shot is included):**

3D cartoon character, fantasy style, soft shallow depth of field, clay material detail clearly visible

**Lighting layers (required when a lighting scene is included):**

Cinematic lighting layers, clear light/dark contrast, soft natural light effects, warm tone dominant

**Atmosphere anchor (required):**

Healing nostalgic atmosphere, stop-motion animation aesthetic, warm emotional expression, handcrafted texture

**Image-quality lock words (required in all output, placed after the style closing words):**

Mode A (Chinese — required for the Seedream model) — default:
高清画质，黏土肌理清晰，色彩柔和，画面无杂色无噪点，浅景深效果

Mode A (Chinese — required for the Seedream model) — in-frame text scene (when the frame description includes prop text such as signs/labels):
高清画质，黏土肌理清晰，色彩柔和，画面无杂色无噪点，浅景深效果，招牌/标识等道具文字清晰可读

Mode B — default:
high-quality stop-motion animation, clear clay texture, warm lighting, soft shallow depth of field, no digital artifacts, no plastic look

Mode B — in-frame text scene:
high-quality stop-motion animation, clear clay texture, warm lighting, soft shallow depth of field, no digital artifacts, no plastic look, legible text on props and signs

**Negative-prompt template (required for Mode B, placed at the end of the prompt):**

> ⚠️ Seedream (Mode A) **does not support negative prompts** — negative prompts apply only to Mode B. Mode A relies on texture-anchoring and image-quality-lock positive words to ensure image quality.

Mode B:
no modern digital 3D, no CGI rendering, no smooth plastic, no oversaturated colors, no neon colors, no cyberpunk, no sci-fi elements, no sharp edges, no clean lines, no vector art, no cartoon flat coloring, no cel-shading

---

## Aesthetic Prohibitions (Strictly Avoid When Generating)

The following words/styles must not appear in the output prompt:

- Modern 3D animation style (Pixar/Disney-later-era style)
- Smooth plastic/modern CG rendering related terms
- Highly saturated fluorescent colors/neon color palettes
- Modern scenes/modern architectural elements
- Heavy shadows/excessive contrast/dark-toned style
- Cartoon proportions, oversized eyes, chibi-style deformation descriptions
- Cyberpunk/steampunk/alternate-history Western fantasy elements
- Superimposed on-screen text (subtitles, watermarks, title cards, narration overlay text, or any UI-layer text — the frame must be a pure visual frame)

> **Exception**: in-world prop text (signs, road signs, labels, books, or other text that naturally exists in the scene) **is not subject to this prohibition**. When the storyboard frame description includes such content, describe its presence faithfully and require the text to be legible.

---

## Complete Generation Example

> The following shows the same input rendered in Mode A and Mode B side by side for comparison; in actual use **only one mode's output is produced**.

### Input (Storyboard Table Row Data)

| No. | Frame Description | Scene | Linked Asset Name | Duration | Shot Size | Camera Move | Character Action | Emotion | Lighting Mood |
|------|---------|------|-------------|------|------|------|---------|------|----------|
| 1 | Inside a vintage wooden cabin, two clay figures gaze at each other and smile under warm light | Wooden cabin | Lead A/B | 5s | Medium shot | Slow push-in | Sitting across from each other, hands gently touching, smiling tenderly | Infatuation / sweetness | Warm side light + soft shallow depth of field |

### Example Output A (Mode A · Seedream, Chinese — required for this model's quality, do not translate)

[Prompt]
定格动画风格，黏土质感，手指压痕可见，黏土肌理材质，暖调光影，中景构图，两个黏土小人半身入镜，黏土肌理清晰，手指压痕可见，材质颗粒感明显，手工痕迹保留，3D卡通角色，奇幻风格，柔和浅景深，黏土材质细节清晰，复古木屋内，暖光下两个黏土小人相对而坐，双手轻触，温柔微笑，眼神心动又甜蜜，暖调侧光，柔和浅景深，木质纹理清晰，黏土砖墙质感，电影感光影层次，明暗对比清晰，光效柔和自然，治愈怀旧氛围，定格动画美学，温馨情感表达，高清画质，黏土肌理清晰，色彩柔和，画面无杂色无噪点，浅景深效果。
Based on the reference image of Lead A/B, maintain consistent: face features, hairstyle, costume details. Generate a new scene: two clay characters sitting across from each other inside a retro wooden room at warm light, touching hands gently, smiling tenderly. Keep character appearance identical to reference.

### Example Output B (Mode B · Nanobanana)

```xml
<role>
You are a stop-motion claymation director.
Maintain strict visual continuity across all shots.
</role>
<character_reference>
Image [1]: Lead A/B — clay figurines, soft rounded features, warm earthy tones, small cute proportions
</character_reference>
<continuity_rules>
- Same clay texture, color palette, face features across ALL shots
- Same environment, lighting style, color grade
- Only framing, angle, action, expression may change
- Do NOT introduce new characters not in reference images
</continuity_rules>
<shot>
Medium shot, two clay characters sitting across from each other inside a retro wooden room at warm light, hands gently touching, smiling tenderly, eyes filled with warmth and affection, warm side light, soft shallow depth of field, wooden texture visible, clay brick wall texture, cinematic lighting layers, clear contrast between light and dark, soft natural light effects, healing nostalgic atmosphere, stop-motion animation aesthetic, high-quality stop-motion, clear clay texture, warm lighting, no digital artifacts, no plastic look.
</shot>
<negative>
no modern digital 3D, no CGI rendering, no smooth plastic, no oversaturated colors, no neon colors, no cyberpunk, no sci-fi elements, no sharp edges, no clean lines, no vector art, no cartoon flat coloring, no cel-shading
</negative>
```

## Quick Reference Card

### Emotion → Frame Word Quick Reference

| Emotion | Face Keywords | Lighting Match |
|------|-----------|---------|
| Infatuation | Slightly flushed cheeks, clay imprint | Soft warm side light |
| Sadness | Downcast expression, soft look | Cool low-key side light |
| Tenderness | Soft expression, warm brow and eyes | Even diffused warm light |
| Fantasy | Widened eyes, colored light spots | Fantasy light effects and glow |
| Being moved | Smiling eyes, sincere expression | Soft warm side light |
| Loneliness | Quiet expression, vacant gaze | Cool-toned side light, dark areas |
| Joy | Radiant smile, bright eyes | Warm diffused light |
