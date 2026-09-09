---
name: director_storyboard
description: Director storyboard prompt technique · Guofeng anime new Chinese-chic
metaData: director_skills
---

# Storyboard Prompt · Guofeng Anime New Chinese-Chic · Style-Specific Technique

---

## Scope

This Skill is dedicated to storyboard prompt generation for the **guofeng anime new Chinese-chic** style.

---

## Emotion → Facial/Gaze Word Mapping

| Emotion Input | Facial Words | Gaze Words | Micro-Expression Addition |
|----------|--------|--------|-----------|
| Tender / affectionate | Gentle expression, eyes brimming with feeling | Focused and soft gaze, warm eyes | Corners of the mouth slightly raised, a healing expression |
| Resolute / brave | Serious expression, bright clear eyes | Firm gaze, looking forward | Chin slightly raised, a determined expression |
| Shy / bashful | Flushed cheeks, an evasive gaze | Shy eyes, gaze lowered | Lips pressed lightly together, a cute expression |
| Sharp / severe | Cold, stern expression, eyes like blades | Piercing gaze, a resolute look | Jaw tightened, a stern expression |
| Joyful / cheerful | A radiant expression, crescent-moon eyes | Bright eyes, a lively gaze | Cheeks slightly flushed, a lively expression |
| Sorrowful / mournful | A mournful expression, dim eyes | Tearful eyes, gaze lowered | Corners of the mouth drooping, a sorrowful expression |
| Surprised / delighted | Eyes slightly widened, a lively expression | Bright eyes, a focused gaze | Mouth slightly open, an astonished expression |
| Pensive / introspective | A faint expression, a distant gaze | Vacant eyes, gaze unfocused | A calm expression, a reserved bearing |
| Weary / listless | Hazy eyes, a soft expression | A slightly tired gaze, soft eyes | A faint yawn, a languid expression |
| Hopeful / expectant | Shining eyes, a vivid expression | Expectant gaze, glimmering eyes | Corners of the mouth raised, a lively expression |

---

## Light-and-Shadow Mood Word Bank (Guofeng Anime New Chinese-Chic)

### Time-of-Day Lighting

| Time of Day | Key Light Words | Tone Words | Mood Words |
|--------|--------|--------|--------|
| Early morning | Soft morning light, warm side-lighting | Moon white + jade green | Thin mist lingering, fresh air |
| Midday | Bright sunlight, direct soft light | Vermilion + golden-yellow highlights | Clear light and shadow, vivid colors |
| Evening/dusk | Backlit silhouette, warm-color gradient | Vermilion + indigo-blue gradient | Sunset afterglow, rim light |
| Night | Cool-toned background + warm light accents | Indigo-blue dominant + warm-yellow light points | Peaceful and cozy, soft lamplight |
| Rainy day | Diffused cool light, no key light source | Jade green + moon white | Damp air, low contrast |

### Emotional Lighting

| Emotional Tone | Light Type | Supplementary Constraint |
|----------|----------|----------|
| Xianxia ethereal | Diffused soft light, ethereal motion | Jade-green tone, depth-of-field blur, cel-shaded flat color |
| Court luxury | Warm lighting, localized highlights | Vermilion tone, emphasized highlights, layered depth of field |
| Girlish everyday | Localized soft light, soft shadows | Rouge tone, close-up shots, a fresh mood |
| Wuxia severity | Cold-toned shadows, hard-light contrast | Indigo blue + ink black, low saturation, tense mood |
| Moonlit poetic | Moonlight illumination, cool-warm contrast | Indigo-blue background, warm-light accents, a poetic mood |

---

## Scene Texture Constraint Words (by Scene Type)

| Scene Type | Required Constraint Words |
|----------|-----------|
| Xianxia scene | Swirling mist, upturned eave pavilions, flowing robes, blue-green landscape, cel-shaded flat color |
| Court scene | Vermilion palace walls, golden glazed rooftops, carved beams and painted rafters, white marble railings, new Chinese-chic decoration |
| Boudoir interior | Screen panels, carved window lattices, gauze curtains, classical furniture, delicate brushwork |
| Wuxia scene | Bamboo forest/snowfield/cliff, cool tones, oppressive mood, sharp lines, new Chinese-chic style |
| Festival celebration | Lanterns/ribbons/fireworks, high-saturation warm colors, a lively mood, bustling crowds |
| Night street scene | Lanterns/street lamps/shopfronts, warm-light accents, cool-toned background, reflections | 

---

## Fixed Style Anchor Words (Required in All Output)

**Guofeng anime anchor (required):**

Guofeng anime, new Chinese-chic aesthetics, Japanese-style anime rendering, cel-shaded flat color, delicate brushwork

**Character texture (required for shots with characters):**

Anime guofeng styling, clean lines, cel-shaded coloring, finely detailed costume, rich light-and-shadow layering

**Scene texture (required for shots with scenery):**

Guofeng anime scene, richly detailed traditional architecture, Japanese-style rendering technique, delicate light-and-shadow texture

**Consistency anchor (required in reference-image mode):**

Keep the character design consistent with the reference image, keep the scene style consistent with the reference image, keep the light-and-color tonal base unified

**Style closing (fixed):**

Guofeng anime cinematic texture, Eastern classical charm, new Chinese-chic style, Japanese-style anime rendering technique

**Image-quality lock words (required in all output, placed after the style closing):**

Mode A (Chinese) — default (when no in-frame text is needed):
国风二次元高清渲染，高细节，细腻线条，赛璐璐平涂感，电影质感，画面无字幕、无水印、无标题叠字

Mode A (Chinese) — in-frame text scenes (when the frame description includes props with text, such as a plaque/couplet/book):
国风二次元高清渲染，高细节，细腻线条，赛璐璐平涂感，电影质感，画面无字幕、无水印、无标题叠字，牌匾/对联等场景道具上的文字清晰可辨

Mode B (English) — default:
Chinese style anime, neo-chic aesthetic, Japanese animation rendering technique, cel shading, fine brushstrokes, cinematic quality, high detail, no subtitles, no captions, no watermark, no title overlay

Mode B (English) — in-frame text scenes:
Chinese style anime, neo-chic aesthetic, Japanese animation rendering technique, cel shading, fine brushstrokes, cinematic quality, high detail, no subtitles, no captions, no watermark, no title overlay, legible text on in-scene props such as plaques and couplets

**Negative-prompt template (required for Mode B, placed at the end of the prompt):**

> Warning: Seedream (Mode A) does **not** support negative prompts; negative words apply only to Mode B. Mode A relies on the texture anchors and image-quality lock words in the positive prompt to guarantee image quality.

Mode B (English):
no photorealistic, no realistic photography, no 3D render, no low-poly, no rough modeling, no plastic texture, no harsh lines, no western fantasy, no cyberpunk, no sci-fi, no modern elements, no cartoon style without anime quality, no subtitles, no captions, no watermark, no title overlay, no UI text

---

## Aesthetic Prohibitions (Strictly Avoid When Generating)

The following terms/styles must not appear in the output prompt:

- Realistic photography/3D-realistic rendering/photorealistic-quality words
- High-saturation fluorescent colors/neon colors/strongly digital-looking colors
- Western fantasy/cyberpunk/excessive modern elements
- Crude lines/blurry image quality/low-precision modeling
- Cartoon/anime style lacking refinement
- Flat design/no anime sense of depth
- Chaotic color/incorrect light and shadow/incorrect perspective
- Modern architecture/modern costume elements

> Note — Exception: certain modern rendering techniques (such as volumetric light, depth-of-field blur) may be used appropriately, provided the guofeng anime aesthetic tone is preserved.

---

## Full Generation Example

> The following shows the same input rendered in Mode A and Mode B side by side for comparison; in actual use, **output only one of the two**.

### Input (Storyboard Row Data)

| No. | Frame Description | Scene | Linked Asset Name | Duration | Shot Size | Camera Move | Character Action | Emotion | Light-and-Shadow Mood |
|------|---------|------|-------------|------|------|------|---------|------|----------|
| 1 | A girl in classical dress stands before a palace, holding a flower branch, with a tender gaze | Palace | Girl in classical dress | 6s | Medium shot | Slow push-in | Standing sideways holding a flower, tender gaze | Gentle / elegant | Warm illumination |

### Example Output A (Mode A · Seedream, Chinese — required for this model's quality, do not translate)

[Prompt]
国风二次元，新国潮美学，日式动画渲染，赛璐璐平涂，细腻笔触，二次元国风造型，线条清晰，赛璐璐上色，服饰细节精致，光影层次丰富，中景构图，古装少女站在宫殿前，手持花枝侧身而立，神情温柔，眼神温柔，朱红宫墙背景，金黄高光点缀，体积光氛围，景深虚化，国风二次元电影质感，东方古韵，新国潮风格，日式动画渲染技法，国风二次元高清渲染，高细节，细腻线条，赛璐璐平涂感，电影质感，画面无字幕、无水印、无标题叠字。
Based on the reference image of 古装少女，maintain consistent: face features, hairstyle, costume details. Generate a new scene: standing in front of palace at dusk, holding flower branch. Keep visual style identical to reference.


### Example Output B (Mode B · Nanobanana)

```xml
<role>
You are an anime storyboard artist.
Maintain strict visual continuity across all shots.
</role>
<character_reference>
Image [1]: Girl in classical dress — anime guofeng styling, elegant attire, new Chinese-chic aesthetics
</character_reference>
<continuity_rules>
- Same outfit, hairstyle, face features across ALL shots
- Same cel shading style, Japanese animation rendering
- Same scene lighting, Chinese anime aesthetic
- Do NOT introduce photorealistic or western fantasy elements
</continuity_rules>
<shot>
Medium shot, ancient Chinese girl in elegant traditional attire standing before palace, holding flower branch, gentle expression, soft gaze, cinematic lighting, volumetric fog, depth of field blur, cel shading with fine brushstrokes, Chinese style anime, neo-chic aesthetic, Japanese animation rendering technique, high detail, no subtitles, no captions, no watermark, no title overlay.
</shot>
<negative>
no photorealistic, no realistic photography, no 3D render, no low-poly, no rough modeling, no plastic texture, no harsh lines, no western fantasy, no cyberpunk, no sci-fi, no modern elements, no cartoon style without anime quality, no subtitles, no captions, no watermark, no title overlay, no UI text
</negative>
```

## Quick Reference Card

### Emotion → Frame Word Quick Reference

| Emotion | Facial Keywords | Lighting Match |
|------|-----------|---------|
| Tender | Gentle expression, focused gaze | Diffused soft light + warm light |
| Resolute | Serious expression, bright clear eyes | Warm side-lighting + clear silhouette |
| Shy | Flushed cheeks, an evasive gaze | Warm side-lighting + blush |
| Sharp | Cold, stern expression, eyes like blades | Cold-toned shadow + hard light |
| Joyful | A radiant expression, crescent-moon eyes | Warm illumination + high saturation |
| Sorrowful | A mournful expression, dim eyes | Cold-toned shadow + low contrast |
| Weary | Hazy eyes, a soft expression | Soft light + low contrast |
| Pensive | A faint expression, a distant gaze | Volumetric light + mist |
| Hopeful | Shining eyes, a vivid expression | Warm side-lighting + high brightness |
