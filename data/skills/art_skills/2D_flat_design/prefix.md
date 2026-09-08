# Global Aesthetic Foundation · 2D Flat Design

---
You must strictly and fully follow all the style constraints and global rules below, and generate the prompt strictly according to the prompt template format; output only the prompt text itself, with no explanations, notes, titles, or other extra text.
## 1. Style Genes

| Dimension | Definition |
|---|---|
| **Primary style** | 2D Flat Design |
| **Secondary style** | Geometric shapes · Solid color blocks · No shadows, no gradients |
| **Emotional tone** | Minimalist, modern · Bright and fresh |
| **Texture anchor words** | Clean lines, solid color fills, color block contrast |

---

## 2. Global Color Palette (style baseline, not a hard lock)

> Goal: unify the aesthetic rather than restrict creativity. Except for "hard-constraint colors," other colors should be used preferentially by default, with reasonable deviation allowed.

### Color usage tiers

| Tier | Constraint strength | Description |
|---|---|---|
| L1 Hard constraint | High | Locks only the core identity elements: the aesthetic direction of skin tone, hair color, and main costume base color |
| L2 Soft constraint | Medium | Scene colors, accessory colors, and accent colors should preferentially reference the palette, adjustable within reason per shot and story |
| L3 Exception mechanism | Low | Romantic/climactic/special scenes may temporarily break local color rules, but must preserve the overall flat logic |

| No. | Color name | Hex value | Usage |
|---|---|---|---|
| C1 | Bright Blue | #3B82F6 | Background, clothing, cool-toned subjects |
| C2 | Vibrant Orange | #F59E0B | Warm accents, emotional climax |
| C3 | Pure White | #FFFFFF | Background, negative space, clean feel |
| C4 | Deep Brown Hair | #4A3728 | Hair color, eye color |
| C5 | Premium Gray | #8A8A8A | Neutral color, secondary elements |
| C6 | Soft Purple | #C084FC | Night, dreamlike, accents |
| C7 | Warm Pink | #FB7185 | Romance, heartbeat moments, accents |
| C8 | Light Yellow | #FDE047 | Warmth, sunlight, background |
| C9 | Cream White | #FEF3C7 | Background, negative space, warm feel |
| C10 | Mint Green | #5EEAD4 | Nature, freshness, environment |

### Hard-constraint colors (locked by default)

| Color item | Corresponding color | Rule |
|---|---|---|
| Skin tone baseline | C3 Pure White + C9 Cream White | Preferred by default, minor brightness adjustment allowed |
| Hair/eye color baseline | C4 Deep Brown Hair | Preferred by default, deep brown/dark brown deviation allowed |

### Soft-constraint colors (recommended priority)

> C1/C2/C5/C6/C7/C8/C10 are the recommended color range, used for clothing, decoration, background, warm light, environment, etc. Adjacent-hue adjustments may be made based on shot mood.

### Emotion palette (director-aligned version)

| Emotional scene | Main color | Secondary color | Color contrast suggestion | Key visual words |
|---|---|---|---|---|
| Everyday warmth | C9 Cream White | C3 Pure White + C5 Premium Gray | Low contrast, soft | Homely feel, warmth, calm |
| Heartbeat moment | C7 Warm Pink | C2 Vibrant Orange + C9 Cream White | Medium contrast, main color emphasized | Shyness, closeness, ambiguity |
| Office/study | C1 Bright Blue | C3 Pure White + C5 Premium Gray | High contrast, rational | Efficiency, calmness, professionalism |
| Romantic scene | C7 Warm Pink | C2 Vibrant Orange + C8 Light Yellow | High contrast, romantic | Sweetness, warmth, emotion |
| Night scene | C6 Soft Purple | C1 Bright Blue + C2 Vibrant Orange | Cool-dominant, warm accents | Quiet, mysterious, contemplative |
| Memory/flashback | C8 Light Yellow | C5 Premium Gray + C7 Warm Pink | Low contrast, soft | Nostalgia, old memories, dreamlike |
| Sorrowful farewell | C5 Premium Gray | C1 Bright Blue + C6 Soft Purple | High contrast, cool tones | Distance, restraint, quiet pressure |
| Reunion/relief | C9 Cream White | C7 Warm Pink + C2 Vibrant Orange | Cool-to-warm progression | Warming up, relief, healing |

### Emotion palette usage rules

| No. | Rule |
|---|---|
| E1 | Each prompt must specify at least 1 "emotional scene" and bind a main color + secondary color combination |
| E2 | No more than 2 main colors per shot, to avoid losing focus through color storytelling |
| E3 | When switching emotions, adjust hue/color temperature before adjusting saturation |
| E4 | Healing-type scenes default to "warm base + cool-warm contrast": warm colors as the base, cool colors for background/secondary elements |
| E5 | If in conflict with the story, the emotion palette takes priority over general recommended colors, but must not violate the prohibited items |

### Color temperature constraints

| Parameter | Value | Description |
|---|---|---|
| Overall color temperature | Neutral 5500-6500K (recommended) | Minimalist modern base tone |
| Skin tone temperature | Slightly warm 5800-6200K (recommended) | Cream white but with a sense of life |
| Contrast | Medium-high (recommended to maintain) | Clear color block contrast, but not overly strong |
| Saturation | Medium-high 70-90% (recommended range) | Premium flat-style tones |

### Tolerance and exceptions

| Item | Recommended tolerance |
|---|---|
| Hue shift | ±8° |
| Saturation shift | ±10% |
| Brightness shift | ±12% |

> Exception scenes: romantic, climactic, or emotional-transition shots may use warmer or higher-saturation local color blocks; however, high-saturation fluorescent colors and overly modern color language are prohibited from appearing on screen.

---

## 3. Global Constraint Rules

### Mandatory rules (inherited by all skills)

| No. | Rule |
|---|---|
| R1 | Must include the "2D Flat Design" style anchor phrase |
| R2 | Must declare "no shadows, no gradients + solid color blocks" |
| R3 | Faces must use "geometric shapes + clean lines" |
| R4 | Outlines must use "clear lines + uniform consistency" |
| R5 | Colors must declare "solid color fill + clear color block contrast" |

### Prohibited items (inherited by all skills)

| No. | Prohibited content |
|---|---|
| X1 | "3D rendering / photorealistic rendering / photo-level realism" strictly prohibited |
| X2 | "Shadows / gradients / textures / lighting effects" strictly prohibited |
| X3 | "High-saturation fluorescent colors / neon colors" strictly prohibited |
| X4 | Tendency words such as "facial distortion / disproportion / abnormal limbs" strictly prohibited |
| X5 | "Complex details / fine textures / realistic backgrounds" strictly prohibited |
| X6 | "3D perspective / depth-of-field description" strictly prohibited |
