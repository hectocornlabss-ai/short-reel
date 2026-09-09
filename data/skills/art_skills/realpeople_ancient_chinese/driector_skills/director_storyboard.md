---
name: director_storyboard
description: Director storyboard prompt technique · photorealistic ancient Chinese
metaData: director_skills
---

# Storyboard Prompt · Photorealistic Ancient Chinese · Style-Specific Technique

---

## Scope

This Skill is dedicated to generating storyboard prompts for the **photorealistic ancient Chinese** style.

---

## Emotion → Facial Expression/Eyes Word Mapping

| Emotion Input | Facial Words | Eye Words | Micro-expression Supplement |
|----------|--------|--------|-----------|
| Heartbeat / Infatuation | complexion faintly flushed, expression slightly dazed | eyes full of feeling, gaze lingering | corners of mouth slightly raised, restrained expression |
| Sadness / Oppression | calm expression, sorrowful demeanor | eyes faintly reddened, gaze lowered | brow lightly furrowed, reserved expression |
| Anger / Intimidation | sharp brows and eyes, cold stern expression | gaze like a blade, forceful eyes | lips pressed tight, oppressive presence |
| Tenderness / Deep affection | gentle expression, brow and eyes full of feeling | focused soft gaze, deeply affectionate eyes | corners of mouth lightly raised, restrained warm expression |
| Resolve / Determination | solemn expression, composed demeanor | firm gaze, clear sharp eyes | calm brow and eyes, dignified bearing |
| Surprise / Shock | momentarily stunned expression, complexion slightly changed | eyes widened, gaze suddenly focused | brow lightly raised, lips slightly parted |
| Coldness / Detachment | cool distant expression, indifferent demeanor | vacant gaze, cold eyes | expression almost frozen, aloof bearing |
| Joy / Elation | vivid expression, brimming smile | bright lively eyes, crescent-shaped eye corners | corners of mouth raised, natural vivid expression |
| Nervousness / Panic | slightly dazed expression, flustered demeanor | wandering gaze, eyes darting about | brow slightly knit, natural vivid expression |
| Restraint / Suppression | reserved expression, calm demeanor | deep gaze, suppressed emotion behind the eyes | lips pressed tight, throat moving slightly |

---

## Lighting Mood Word Library (Photorealistic Ancient Chinese)

> **Design principle**: on-screen lighting is divided into two layers — **ambient light (primary)** and **equipment light (secondary)**. Ambient light is determined by the scene's time of day, weather, and space, and forms the absolute base tone of the image's lighting; equipment light is used only for character shaping and emotional reinforcement, must follow the direction and color temperature of the ambient light, and must not create the impression of an independent light source.

### 1. Ambient Light (Primary Light Source · Natural Scene Light)

> Each shot **must first establish the ambient light** before deciding whether to layer on equipment light.

#### Time-of-Day Ambient Light

| Time of Day | Natural Light Source | Tone Tendency | Ambient Mood |
|--------|---------|---------|----------|
| Early morning | Diffused morning light, soft skylight | Cool white light tone, pale blue tint | Thin mist lingering, airy feel, morning-dew texture |
| Afternoon | Oblique sunlight, diffused soft light | Neutral tone, slight warmth | Dappled light and shadow, clearly layered |
| Evening/dusk | Oblique afterglow, sky alternating cool and warm | Predominantly cool, localized warm light at the horizon | Elongated shadows, poetic light quality |
| Night | Cool blue moonlight, warm points of candlelight/lanterns | Predominantly cool blue | Deep, layered shadows, strong light/dark contrast |
| Overcast/rain | Diffused cool light, clouds blocking any primary light source | Gray-cool tone | Damp air feel, low saturation |

#### Scene Spatial Ambient Light

| Space Type | Typical Ambient Light | Lighting Characteristics |
|----------|-----------|----------|
| Open outdoors | Predominantly skylight, sunlight direction determines light/dark | Distant aerial perspective naturally forms layering |
| Courtyard/garden | Skylight filtered through branches and leaves, mottled diffusion | Shadow under the corridor contrasts with the lit courtyard area |
| Indoors (window light) | Single-direction natural light from a window, interior gradually darkening | Side-lit light naturally forms a light/dark transition |
| Sealed room/dark room | Localized warm light from candle/oil lamp, overall dark tone | Single light source, limited light range, heavy shadows |
| Bamboo forest/wilderness | Light filtering through gaps, scattered light patches | Light filtering through the canopy above, crisscrossing shadows on the ground |
| Water surface/lakeside | Skylight + reflected light off the water | Shimmering ripples, reflection fill light, hazy feel |

### 2. Equipment Light (Secondary Light · Character Shaping)

> ⚠️ Equipment light **must follow the ambient light's tone**: its direction must match the ambient light source, its color temperature must not conflict with the ambient light, and its intensity must not exceed the ambient light.

#### Equipment Light Types

| Light Type | Function | Applicable Scene | Usage Constraint |
|----------|------|---------|----------|
| Rim light (edge light) | Outlines the character's edge, enhances separation from the background | Backlit/side-backlit environments | Intensity lower than the ambient light, color temperature matching the ambient light |
| Eye light (catchlight) | Adds sparkle and life to the eyes | Close-ups/medium shots including a character | Extremely subtle, only a highlight accent, must not form an obvious light spot |
| Fill light (reflected light) | Brightens dark-area detail, avoids a dead-black face | When strong side light/backlight causes overly heavy shadow | Simulates ambient reflection, must not create the impression of an independent light source |
| Overhead pressure light | Creates facial shadow, enhances oppressive feel | Interrogation, confrontation, solemn scenes | Must have a plausible in-scene light source (lantern, skylight, hall ceiling light) |

#### Emotion → Ambient Light + Equipment Light Pairing

| Emotional Tone | Ambient Light (Primary) | Equipment Light (Secondary) | Pairing Principle |
|----------|-------------|-------------|----------|
| Heartbeat/tenderness | Soft side-backlit natural light, diffused warm-toned ambience | Rim light lightly outlining | Ambient light sets the side-backlit tone, equipment light only supplements the outline, shallow depth of field softens the background |
| Confrontation/oppression | Harsh natural side light, high-contrast light/dark environment | May add overhead light (requires a plausible source) | Ambient light sets the main direction and hardness, equipment light only enhances contrast, shadows remain hard-edged |
| Oppression/sadness | Diffused cool light, overcast/dark-room environment | Very minimal fill light, dark facial areas retained | Predominantly cool ambient light, deliberately withholding fill light to preserve shadow layering |
| Mystery/solemnity | Cool blue ambient light, backlit silhouette | Rim light precisely controlled, glow kept restrained | Ambient light sets the cool blue tone, equipment light only separates the edge |
| Ethereal/atmospheric | Diffused soft light, natural light slightly overexposed | Equipment light generally unnecessary | Predominantly diffused ambient light, distant view faded and soft, aerial perspective feel |

### 3. Lighting Conflict Avoidance Rules

> When generating storyboard prompts, strictly follow these principles to keep the on-screen lighting natural and believable:

1. **Establish ambient light first, then layer equipment light**: each shot first determines the ambient-light tone based on "time of day + scene space," then decides whether equipment light is needed to assist character shaping.
2. **Color-temperature consistency**: equipment light's color temperature must harmonize with the ambient light (e.g. a cool-blue night ambience must not be layered with warm yellow fill light, unless there is a plausible in-scene warm light source such as a candle).
3. **Directional plausibility**: equipment light direction must be supported by an in-scene light source (window-light direction, candle position, moonlight angle); it must not appear out of nowhere.
4. **Intensity subordination**: equipment light intensity **must not exceed the ambient light**, avoiding the studio-lit feel of "the character lit separately from the scene."
5. **Better absent than excessive**: when the ambient light already sufficiently shapes the character and conveys the emotion, **do not add equipment light**.

---

## Scene Texture Constraint Words (by Scene Type)

| Scene Type | Required Constraint Words |
|----------|-----------|
| Palace interior | Carved beams and painted rafters, clearly textured pillars, reflective floor tiles, flowing curtains, warm points of candlelight |
| Courtyard/garden | Blue flagstone path, mottled corridor pillars, lush flowers and trees, water reflections, aerial perspective |
| Bamboo forest/wilderness | Swaying bamboo shadows, light filtering through gaps, bamboo-leaf texture on the ground, distant mountains like ink, airy feel |
| City tower/city wall | Clearly textured gray brick, weathered texture, layered distant view, aerial perspective |
| Waterside pavilion/lakeside | Shimmering water surface, layered reflections, hazy mist, lotus-leaf texture |
| Sealed room/dark room | Single light source, candlelight texture, wall texture, heavy shadows |
| Marketplace/street | Bustling marketplace atmosphere, blurred crowd, architectural depth, fabric texture of shop banners |

---

## Fixed Style Anchor Words (Must Be Included in All Outputs)

**Photorealistic anchor (required):**
```
Photorealistic photography, cinematic-grade image quality, hyperrealistic documentary style, strong contrast, extreme detail, ultra-clear texture
```

**Character texture (required when characters are in frame):**
```
Fine delicate skin, delicately rendered face, well-defined facial features, hair strands clearly defined, delicately rendered hair strands
```

**Clothing texture (required when characters are in frame):**
```
Clear clothing fabric texture, ultra-clear texture detail, realistic fabric creases, clothing flowing naturally with movement
```

**Consistency anchor (required in reference-image mode):**
```
Keep the character's face consistent with the reference image, keep the clothing colors consistent with the reference image, keep the scene lighting style unified
```

**Style closing (fixed):**
```
Photorealistic ancient-style aesthetic, Eastern classical elegance, cinematic-grade shot composition
```

**Image-quality lock words (must be included in all outputs, placed after the style closing):**

Mode A (Chinese — required for the Seedream model, do not translate) — default (when the frame has no in-image text requirement):
```
超清4K画质，高细节，自然锐度，写实清晰感，画面无字幕、无水印、无标题叠字
```

Mode A (Chinese — required for the Seedream model, do not translate) — scene with in-image text (when the visual description includes prop text such as writing/scrolls/plaques):
```
超清4K画质，高细节，自然锐度，写实清晰感，画面无字幕、无水印、无标题叠字，书卷/匾额等场景道具上的文字清晰可辨
```

Mode B (English) — default:
```
ultra-sharp 4K, high detail, crisp textures, naturalistic sharpness, photorealistic clarity, no subtitles, no captions, no watermark, no title overlay
```

Mode B (English) — scene with in-image text:
```
ultra-sharp 4K, high detail, crisp textures, naturalistic sharpness, photorealistic clarity, no subtitles, no captions, no watermark, no title overlay, legible text on in-scene props such as scrolls and plaques
```

**Negative prompt template (required for Mode B, placed at the end of the prompt):**

> ⚠️ Seedream (Mode A) **does not support negative prompts** — negative words apply only to Mode B. Mode A relies on the texture anchors and image-quality lock words in the positive prompt to guarantee image quality.

Mode B (English):
```
no plastic skin, no beauty filter, no studio lighting, no centered composition, no oversaturation, no AI generated look, no motion blur, no noise, no blurry, no out of focus, no subtitles, no captions, no watermark, no title overlay, no UI text
```

---

## Aesthetic Prohibitions (Strictly Avoid When Generating)

The following words/styles must not appear in generated prompts:

- ❌ Japanese/Korean fresh-filter style words (e.g. fresh, dreamy pastel, Japanese-style feel)
- ❌ Anime/2D/illustration/CG-rendering-related terms
- ❌ Modern clothing/modern scene elements
- ❌ Predominantly warm-yellow tone words (a "localized warm candlelight accent" is acceptable)
- ❌ Soft-focus/hazy/low-contrast filter words
- ❌ Clashing colors/mixed styles/neon or fluorescent color schemes
- ❌ Cartoonish proportions, big eyes, chibi, or other deformation descriptions
- ❌ Cyberpunk/steampunk/alternate-world fantasy elements
- ❌ Text overlaid on the image (subtitles, watermarks, title cards, narration overlay text, opening-credit text, or any other UI-layer text — the image must be purely visual)

> 💡 **Exception**: in-world prop text (a character's own writing, scroll text, plaques, signboards, letters, prescriptions, or other text naturally present in the scene) **is not covered by this prohibition**. When the shot description includes such content, depict its presence faithfully and require the text to be clear.

---

## Full Generation Example

> The following shows the same input generated with Mode A and Mode B side by side for comparison; in actual use, **output only one of the two**.

### Input (Storyboard Row Data)

| # | Visual Description | Scene | Linked Asset Name | Duration | Shot Scale | Camera Move | Character Action | Emotion | Lighting Mood |
|------|---------|------|-------------|------|------|------|---------|------|----------|
| 1 | Shen Ci stands alone atop the city tower, gazing out over the vast land | City tower | Shen Ci | 4s | Wide shot | Static | Standing with hands behind his back, robe sleeves fluttering in the wind | Resolve / Determination | Cold dusk side-backlight |

### Example Output A (Mode A · Seedream, Chinese — required for this model's quality, do not translate)

```
[Prompt]
真人写实摄影，电影级画质，超现实主义纪实，强对比度，极致细节，纹理超清晰，全景构图，人物全身入镜，皮肤细腻，面容细腻渲染，五官立体，发丝根根分明，发丝细腻渲染，男性主角立于城楼之上，双臂自然垂于身侧，衣袂初被风拂动，微微扬起，衣物布料质感清晰，布料折痕真实，衣物随动态飘逸，神情沉毅，目光即将投向远方，眼神坚定清冽，城楼青砖纹理清晰，风化质感，远景层叠，大气透视，黄昏冷调侧逆光，轮廓光勾勒人物边缘，古风写实美学，东方古典气韵，电影级分镜构图，超清4K画质，自然锐度，写实清晰感，画面无字幕、无水印、无标题叠字。
Based on the reference image of 沈辞, maintain consistent: face features, hairstyle, costume details. Generate a new scene: standing on the ancient city wall at dusk, overlooking vast land. Keep character appearance identical to reference.
```

### Example Output B (Mode B · Nanobanana)

```xml
<role>
You are a cinematographer and storyboard artist.
Maintain strict visual continuity across all shots.
</role>
<character_reference>
Image [1]: Shen Ci — black long hair tied up, calm sharp eyes, dark ancient hanfu robe, tall slim body shape
</character_reference>
<continuity_rules>
- Same wardrobe, hairstyle, face features across ALL shots
- Same environment, lighting style, color grade
- Only framing, angle, action, expression may change
- Do NOT introduce new characters not in reference images
</continuity_rules>
<shot>
Full shot, character standing atop an ancient city wall, arms resting naturally at his sides, robe hem just beginning to catch the wind with a slight lift, gaze about to turn toward the vast horizon, resolute and composed expression, cold dusk backlight, rim light silhouette, vast landscape below, atmospheric perspective, ancient chinese cinematic realism, ultra-sharp 4K, high detail, crisp textures, photorealistic clarity, no subtitles, no captions, no watermark, no title overlay.
</shot>
<negative>
no plastic skin, no beauty filter, no studio lighting, no centered composition, no oversaturation, no AI generated look, no motion blur, no noise, no blurry, no out of focus, no subtitles, no captions, no watermark, no title overlay, no UI text
</negative>
```

---

## Quick Reference Card

### Emotion → Visual Word Quick Reference

| Emotion | Facial Keywords | Ambient Light (Primary) | Equipment Light (Secondary) |
|------|-----------|-------------|-------------|
| Heartbeat | Complexion faintly flushed, eyes full of feeling | Soft side-backlit natural light | Rim light lightly outlining |
| Sadness | Calm expression, eyes faintly reddened | Diffused cool light | Very minimal fill light |
| Anger | Sharp brows and eyes, gaze like a blade | Harsh natural side light, high contrast | May add overhead light (requires plausible source) |
| Tenderness | Brow and eyes full of feeling, soft gaze | Diffused warm-toned ambient light | Rim light lightly supplementing |
| Resolve | Solemn expression, clear sharp eyes | Cool-toned natural side light | Generally unnecessary |
| Coldness | Cool distant expression, vacant gaze | Cool blue ambient light | Precisely controlled edge separation light |
| Restraint | Calm expression, suppressed emotion in the eyes | Low-key cool light environment | No fill light, shadows preserved |
