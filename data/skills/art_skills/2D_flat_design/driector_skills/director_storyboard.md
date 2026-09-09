---
name: director_storyboard
description: Storyboard prompt technique · 2D Flat Design
metaData: director_skills
---

# Storyboard Prompts · 2D Flat Design · Style-Specific Technique

---

## Scope

This Skill is dedicated to generating storyboard prompts for the **2D Flat Design** style.

---

## Emotion → Face/Eye-Word Mapping

| Emotion input | Face words | Eye words | Micro-expression addition |
|----------|--------|--------|-----------|
| Heartbeat / delight | Clean lines, orange color block | Round eyes, bright gaze | Simple smile, flattened |
| Sadness / dejection | Clean lines, cool color tone | Oval eyes, soft gaze | Corners of mouth down, flattened |
| Surprise / curiosity | Round eyes, enlarged expression | Focused gaze, curious look | O-shaped mouth, flattened |
| Tenderness / affection | Soft lines, warm color tone | Focused gaze, soft look | Corners of mouth up, flattened |
| Resolve / courage | Straight lines, cool color tone | Firm gaze, focused look | Clear expression, flattened |
| Shyness / bashfulness | Pink color block, rounded lines | Eyes lowered, avoiding direct gaze | Blushing cheeks, flattened |
| Warmth / being moved | Warm-toned lines, soft expression | Warm gaze, soft look | Corners of mouth raised, flattened |
| Loneliness / nostalgia | Cool-toned lines, plain expression | Distant gaze, pensive look | Calm expression, flattened |
| Happiness / elation | Round lines, bright expression | Crescent-shaped eyes, lively expression | Light movements, flattened |
| Tension / unease | Thinner lines, furrowed-brow symbol | Narrowed eyes, uncertain look | Tense hand position, flattened |

---

## Color Mood Word Bank (Flat Style)

### Hue usage

| Scene type | Primary color words | Secondary color words | Mood words |
|--------|--------|--------|---------|
| Everyday life | Bright blue + cream white | Warm orange accent | Clean feel, modern feel |
| Office space | Cool gray + cool blue | White + light gray | Rational, efficient feel |
| Leisure space | Warm orange + warm pink | Cream white + light yellow | Relaxed, comfortable feel |
| Romantic scene | Warm pink + warm orange | Cream white + light purple | Cozy, sweet feel |
| Night scene | Deep blue + purple | Warm yellow accent | Quiet, mysterious feel |
| Memory scene | Light yellow + light gray | Warm pink accent | Nostalgic, soft feel |

### Emotion color blocks

| Emotional tone | Color-block type | Additional constraint |
|----------|----------|---------|
| Heartbeat/tenderness | Warm contrast color blocks | More negative space, primary color emphasized |
| Sadness/dejection | Cool single color block | Lower saturation, more negative space |
| Happiness/energy | Multi-color contrast blocks | High saturation, rich colors |
| Nostalgia/memory | Low-saturation single color block | Unified tone, more negative space |
| Everyday/warmth | Warm primary color block | Soft contrast, moderate negative space |
| Night/quiet | Cool primary color block | Warm accent, clear layering |

---

## Scene Texture Constraint Words (by Scene Type)

| Scene type | Required constraint words |
|----------|-----------|
| Flat character | Geometric form, clean lines, no shadow/no gradient, solid color block fill |
| Flat scene | Solid-color background, geometric shapes, simple structure, no texture/no detail |
| Office space | Simple furniture, geometric shapes, cool tone, modern design feel |
| Home space | Minimalist furniture, warm tone, geometric lines, cozy atmosphere |
| Cityscape | Simplified buildings, geometric shapes, cool tone, modern urban feel |
| Natural environment | Geometric trees, solid-color grass, simple shapes, flattened nature |
| Traffic scene | Simplified vehicles, geometric shapes, cool tone, modern traffic feel |
| Indoor space | Simple partitions, solid-color walls, geometric doors/windows, modern minimalist |

---

## Fixed Style Anchor Words (Required in All Output)

**Flat style anchor (required):**

2D flat design, Flat Design, no shadow no gradient, solid color blocks, clean lines

**Color-block texture (required in all output):**

solid color fill, no texture no gradient, geometric form, flattened design

**Outline lines (required in all output):**

clear outline, uniform consistent lines, no broken lines, no rough edges

**Color layering (required in all output):**

moderate color saturation, clear color-block contrast, no complex lighting layers

**Mood anchor (required):**

minimalist modern atmosphere, flat design aesthetic, clear emotional expression, modern visual feel

**Image-quality lock words (required in all output, placed after the style closing):**

Mode A (Chinese) — default:
高清画质，线条清晰，色彩纯净，画面无杂色无噪点，无阴影无渐变

Mode A (Chinese) — scene with in-frame text (when the frame description includes prop text such as signs/labels):
高清画质，线条清晰，色彩纯净，画面无杂色无噪点，无阴影无渐变，招牌/标识等道具文字清晰可读

Mode B (English) — default:
high-quality 2D flat design, clean lines, pure colors, no shadows, no gradients, no noise, no artifacts

Mode B (English) — scene with in-frame text:
high-quality 2D flat design, clean lines, pure colors, no shadows, no gradients, no noise, no artifacts, legible text on signs and props

**Negative-prompt template (required in Mode B, placed at the end of the prompt):**

> ⚠️ Seedream (Mode A) **does not support negative prompts** — negative prompts apply to Mode B only. Mode A relies on texture anchors and image-quality lock words within the positive prompt to ensure image quality.

Mode B (English):
no 3D rendering, no photorealism, no shadows, no gradients, no textures, no realistic lighting, no realistic materials, no complex details, no detailed backgrounds, no realistic faces, no realistic hair, no realistic clothing

---

## Aesthetic Prohibitions (Strictly Avoid When Generating)

The following words/styles must not appear in the output prompt:

- Photorealistic rendering/photorealistic style
- Shadow/gradient/texture-related words
- High-saturation fluorescent colors/overly contrasting color schemes
- Complex detail/fine texture description
- 3D perspective/depth description
- Photorealistic characters/photorealistic clothing/photorealistic architecture
- Overlaid on-screen text outside the story world (subtitles, watermarks, title cards, narration captions, or any other UI-layer text — the frame must be pure visual content)

> **Exception**: prop text that exists within the story world itself (signs, road signs, labels, books, or other text naturally present in the scene) is **not** subject to this prohibition. When the storyboard frame description includes such content, describe its presence accurately and require that the text be legible.

---

## Full Generation Example

> The following shows the same input rendered in Mode A and Mode B for comparison; in actual use, **output only one of the two**.

### Input (storyboard table row data)

| No. | Frame description | Scene | Linked asset name | Duration | Shot size | Camera move | Character action | Emotion | Lighting mood |
|------|---------|------|-------------|------|------|------|---------|------|----------|
| 1 | Flat-style two people meeting, orange and blue color-block contrast, simple background | City | Character A/B | 5s | Medium shot | Static | Looking at each other and smiling, clean lines | Heartbeat / warmth | Warm contrast + negative space |

### Example output A (Mode A · Seedream)

[Prompt]
2D扁平风，Flat Design，无阴影无渐变，纯色色块，简洁线条，中景构图，两个扁平角色半身入镜，纯色填充，无纹理无渐变，几何造型，扁平化设计，清晰轮廓线，线条均匀一致，无断线无粗糙边缘，色彩饱和适中，色块对比清晰，无复杂光影层次，扁平风格两人相遇，橙色与蓝色色块对比，简洁背景，对视微笑，线条简洁，眼神明亮，暖色对比，留白较多，简约现代氛围，扁平设计美学，清晰情感表达，现代感视觉，高清画质，线条清晰，色彩纯净，画面无杂色无噪点，无阴影无渐变。
Based on the reference image of Character A/B, maintain consistent: face features, hairstyle, costume details. Generate a new scene: two flat characters meeting in city, orange and blue color block contrast, simple background, smiling and looking at each other. Keep character appearance identical to reference.

### Example output B (Mode B · Nanobanana)

```xml
<role>
You are a 2D flat design storyboard artist.
Maintain strict visual continuity across all shots.
</role>
<character_reference>
Image [1]: Character A/B — flat design characters, geometric shapes, simple lines, pure colors
</character_reference>
<continuity_rules>
- Same color palette, face features, hairstyle across ALL shots
- Same environment, background color, geometric style
- Only framing, angle, action, expression may change
- Do NOT introduce new characters not in reference images
</continuity_rules>
<shot>
Medium shot, two flat characters meeting in city, orange and blue color block contrast, simple background, smiling and looking at each other, geometric shapes, simple lines, pure colors, no shadows, no gradients, clean lines, high-quality 2D flat design, no noise, no artifacts.
</shot>
<negative>
no 3D rendering, no photorealism, no shadows, no gradients, no textures, no realistic lighting, no realistic materials, no complex details, no detailed backgrounds, no realistic faces, no realistic hair, no realistic clothing
</negative>
```

## Quick Reference Card

### Emotion → Frame-Word Quick Reference

| Emotion | Face keywords | Color match |
|------|-----------|---------|
| Heartbeat | Rounded lines, orange color block | Warm pink + warm orange contrast |
| Sadness | Straight lines, cool color tone | Cool blue + gray solid color |
| Tenderness | Soft lines, warm color tone | Warm yellow + cream white, soft |
| Romance | Curved lines, pink tone | Warm pink + warm orange contrast |
| Being moved | Upturned lines, warm color tone | Warm orange + warm yellow primary |
| Loneliness | Cool-toned lines, plain expression | Cool blue + purple solid color |
| Happiness | Round lines, bright expression | Warm orange + yellow contrast |
