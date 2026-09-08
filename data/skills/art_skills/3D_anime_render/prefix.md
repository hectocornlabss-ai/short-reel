# Global Aesthetic Foundation · 3D Animation Rendering

---
You must strictly and fully follow all the style constraints and global rules below, and strictly generate prompts in the prompt template format; output only the prompt body — do not append any explanation, description, comments, title, or other extra text.
## 1. Style DNA

| Dimension | Definition |
|---|---|
| **Primary style** | 3D Animation Rendering |
| **Secondary style** | Cel-shaded texture · cinema-grade lighting layers |
| **Emotional tone** | Healing · upbeat and warm |
| **Texture anchor words** | Crisp outlines, high-detail materials, soft warm tones |

---

## 2. Global Color Palette (style baseline, not a hard lock)

> Goal: unify the aesthetic rather than restrict creativity. Aside from "hard-constrained colors," other colors are used preferentially by default and may shift within a reasonable range.

### Color Usage Tiers

| Tier | Constraint strength | Description |
|---|---|---|
| L1 Hard constraint | High | Locks only the core identity elements: the aesthetic direction of skin tone, hair color, and main costume base color |
| L2 Soft constraint | Medium | Scene colors, accessory colors, and accent colors preferentially reference the palette, adjustable per shot and story |
| L3 Exception mechanism | Low | Romantic/climactic/special scenes may temporarily break local color rules, but must retain the overall warm-tone logic |

| No. | Color name | Hex | Usage |
|---|---|---|---|
| C1 | Warm orange | #F5A673 | Skin tone base, dusk, sunset glow |
| C2 | Sakura pink | #F4D5D5 | Blush, romance, accents |
| C3 | Sky blue | #87AEC9 | Sky, clothing, cool-tone accents |
| C4 | Deep brown hair | #4A3728 | Hair color, eye color |
| C5 | Premium gray | #8A8A8A | Architecture, shadow, neutral color |
| C6 | Pale purple | #D0C4D6 | Night, dreamlike, memory |
| C7 | Warm amber | #C9A96E | Dusk, lighting, warmth |
| C8 | Mint green | #9DC2A5 | Plants, nature, environment |
| C9 | Off-white | #F5F0E8 | Walls, clothing, background |
| C10 | Warm yellow | #F5E6D0 | Interiors, warm lighting, coziness |

### Hard-Constrained Colors (locked by default)

| Item | Corresponding color | Rule |
|---|---|---|
| Skin tone baseline | C1 warm orange | Preferred by default; small brightness/warmth adjustments allowed |
| Hair/eye color baseline | C4 deep brown hair | Preferred by default; slight shifts toward deep brown/dark brown allowed |

### Soft-Constrained Colors (recommended preference)

> C2/C3/C5/C6/C7/C8/C9/C10 form the recommended color range, used for clothing, decoration, background, warm lighting, environment, etc. May be adjusted within neighboring hues based on shot mood.

### Emotion Palette (director-aligned version)

| Emotional scene | Primary color | Secondary color | Lighting & contrast suggestion | Key visual words |
|---|---|---|---|---|
| Everyday warmth | C10 warm yellow | C9 off-white + C5 premium gray | Even warm tone, soft contrast | Lived-in feel, warmth, calm |
| Heartfelt moment | C2 sakura pink | C1 warm orange + C10 warm yellow | Warm boost in medium close-up, slight flush on skin | Bashful, closeness, ambiguity |
| Urban scenery | C9 off-white | C5 premium gray + C3 sky blue | Clear light/dark layering, mostly neutral | Urban, open, natural |
| Romantic dusk | C7 warm amber | C1 warm orange + C2 sakura pink | Backlit sunset glow, rim light | Romance, warmth, emotion |
| Night street scene | C3 sky blue | C6 pale purple + C1 warm orange | Mostly cool tones, warm accents | Urban, tranquil, vibrant |
| Indoor everyday | C10 warm yellow | C9 off-white + C5 premium gray | Warm soft focus, cozy feel | Home, comfort, safety |
| Memory/flashback | C1 warm orange | C5 premium gray + C7 warm amber | Soft-focus haze, slight fading | Nostalgia, old memories, dreamlike |
| Bittersweet farewell | C5 premium gray | C3 sky blue + C1 warm orange | Reduced saturation, widened warm/cool contrast | Sense of distance, restraint, quiet tension |

### Emotion Palette Usage Rules

| No. | Rule |
|---|---|
| E1 | Each prompt must specify at least 1 "emotional scene" bound to a primary + secondary color combination |
| E2 | No more than 2 primary colors per shot, to avoid unfocused color narrative |
| E3 | When shifting emotion, adjust lighting ratio and color temperature first, then adjust saturation |
| E4 | Healing style defaults to "warm base + warm/cool contrast": warm colors as the base, cool colors used for background/shadow |
| E5 | If in conflict with the story, the emotion palette takes priority over general recommended colors, but must not break the prohibited items |

### Color Temperature Constraints

| Parameter | Value | Description |
|---|---|---|
| Overall color temperature | Warm-leaning 4800-5200K (recommended) | Warm, healing base tone |
| Skin tone temperature | Slightly warm 5000-5400K (recommended) | Warm orange but with a sense of life |
| Contrast | Medium (recommended to maintain) | Clear light/dark layering without being overly strong |
| Saturation | Medium-high 65-80% (recommended range) | Premium 3D animation color tone |

### Tolerance & Exceptions

| Item | Recommended tolerance |
|---|---|
| Hue shift | ±8° |
| Saturation shift | ±10% |
| Brightness shift | ±12% |

> Exception scenes: romantic, dusk, and emotional-climax shots may use warmer or more highly saturated local color blocks; however, highly saturated fluorescent colors and modern/contemporary color language are prohibited from appearing.

---

## 3. Global Constraint Rules

### Mandatory Rules (inherited by all skills)

| No. | Rule |
|---|---|
| R1 | Must include the style anchor terms "3D animation rendering + cel-shaded texture" |
| R2 | Must declare "crisp outlines + high-detail materials" |
| R3 | Faces must use "a combination of realistic materials and cartoon proportions + soft lighting" |
| R4 | Hair strands must use "crisp outlines + natural lighting layers" |
| R5 | Lighting must declare "cinema-grade lighting + soft lighting layers" |

### Prohibited Items (inherited by all skills)

| No. | Prohibited content |
|---|---|
| X1 | "Photorealistic rendering/photographic realism" is strictly prohibited |
| X2 | "Dark tones/heavy shadows/excessive contrast" are strictly prohibited |
| X3 | "Highly saturated fluorescent colors/neon colors" are strictly prohibited |
| X4 | Terms suggesting "facial deformity/disproportion/abnormal limbs" are strictly prohibited |
| X5 | "Absence of modern elements" is strictly prohibited (the modern setting must be made explicit) |
| X6 | "Cyberpunk/steampunk/fictional Western fantasy elements" are strictly prohibited |
