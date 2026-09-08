# Global Aesthetic Foundation · Real-People Ancient-Chinese Photorealistic

---
You must strictly and fully follow all style constraints and global rules below, and generate the prompt strictly according to the prompt template format; output only the prompt text itself, with no explanations, notes, titles, or other extra text.
## 1. Style Genes

| Dimension | Definition |
|---|---|
| **Primary style** | Real-people ancient-Chinese photorealism (Ancient-Chinese Photorealism) |
| **Secondary style** | Photorealistic photography of real people · cinematic documentary texture |
| **Emotional tone** | Sweet romance — cool with touches of warmth, sparse yet layered |
| **Texture anchor words** | Strong contrast, extreme detail, ancient-style photorealistic documentary feel |

---

## 2. Global Color Palette (style baseline, not a hard lock)

> Goal: unify the aesthetic rather than restrict creativity. Except for "hard-constraint colors," other colors are used preferentially by default and may be shifted within a reasonable range.

### Color Usage Tiers

| Tier | Constraint strength | Description |
|---|---|---|
| L1 Hard constraint | High | Locks only the core of character recognition: the aesthetic direction of skin tone, hair color, and the base color of the main costume |
| L2 Soft constraint | Medium | Scene colors, accessory colors, and accent colors preferentially reference the palette, and may be fine-tuned by shot and plot |
| L3 Exception mechanism | Low | Festival/flashback/climax scenes may temporarily break local color rules, but must preserve the overall cool/warm logic |

| No. | Color name | Hex | Usage |
|---|---|---|---|
| C1 | Moon White | #D6E4EC | Main costume base color, mist, gauze curtains |
| C2 | Cool White Skin | #F5EDE8 | Female skin tone baseline |
| C2b | Warm White Skin | #F5E6D8 | Male skin tone baseline |
| C3 | Pearl Gold | #E8D5B0 | Embroidery, accessory highlights, headpieces |
| C4 | Obsidian Black | #1A1A2E | Hair color, eye color, outlines |
| C5 | Rosy Mist Pink | #F2D7D5 | Lip color, blush, flower petals |
| C6 | Indigo Blue-Grey | #4A6670 | Distant landscapes, shadow fill color |
| C7 | Amber Warmth | #C9A96E | Warm light, candlelight, sunset glow |
| C8 | Frost Silver | #C0C7CE | Weapons, water reflections, silver ornaments |
| C9 | Neutral Grey | #E8E8E8 | Reference-sheet backgrounds |
| C10 | Plain White | #F8F6F0 | Base inner-garment color |

### Hard-Constraint Colors (locked by default)

| Item | Corresponding color | Rule |
|---|---|---|
| Female skin tone baseline | C2 Cool White Skin | Preferred by default; small adjustments to brightness/warmth allowed |
| Male skin tone baseline | C2b Warm White Skin | Preferred by default; avoid leaning yellow or overly grey |
| Hair/eye color baseline | C4 Obsidian Black | Preferred by default; slight shift toward dark blue/cool brown allowed |

### Soft-Constraint Colors (recommended priority)

> C3/C5/C6/C7/C8/C9/C10 are the recommended color range, used for embroidery, flower petals, distant views, warm light, silver ornaments, backgrounds, inner garments, etc. May be adjusted to adjacent hues based on shot mood.

### Emotion Palette (director-aligned version)

| Emotional scene | Primary color | Secondary color | Lighting & contrast suggestion | Screen keywords |
|---|---|---|---|---|
| First love flutter (restrained sweetness) | C1 Moon White | C5 Rosy Mist Pink + C8 Frost Silver | Cool base + localized soft warm highlights, strong contrast without overexposure | Cool, breathable, faintly sweet |
| Rising ambiguity (growing intimacy) | C5 Rosy Mist Pink | C7 Amber Warmth + C10 Plain White | Warm up in medium/close shots, skin tone slightly warmer, background stays low-saturation | Soft focus, whispering feel, closeness |
| Vow of protection (stable and safe) | C10 Plain White | C3 Pearl Gold + C4 Obsidian Black | Clear light/dark layering, gold used only as edge accents | Stability, ritual feel, trust |
| Separation and misunderstanding (cold, distant, oppressive) | C6 Indigo Blue-Grey | C1 Moon White + C9 Neutral Grey | Overall desaturation, widened cool/warm contrast, deepened shadows | Distance, restraint, quiet pressure |
| Reunion and relief (tearful warmth) | C1 Moon White | C7 Amber Warmth + C5 Rosy Mist Pink | Cold first then warm, warm light progressively rising on the face | Warming, relief, moist air |
| Grand wedding joy (classical highlight) | C3 Pearl Gold | C7 Amber Warmth + C5 Rosy Mist Pink | Saturation may rise locally, avoid fluorescent red; gold emphasizes ceremonial patterns | Opulence, solemnity, sweet joy |
| Night banquet lantern festival (romantic flowing light) | C7 Amber Warmth | C6 Indigo Blue-Grey + C8 Frost Silver | Warm light source dominant, cool background supports it, retain shadow detail | Flowing light, lantern glow, eyes meeting in the crowd |
| Dream/memory (realistic treatment) | C1 Moon White | C6 Indigo Blue-Grey + C3 Pearl Gold | Low-saturation haze coexists with realistic light placement; slight color cast allowed but no neon | Ethereal, nostalgic, believably photographable |

### Emotion Palette Usage Rules

| No. | Rule |
|---|---|
| E1 | Each prompt must specify at least 1 "emotional scene" and bind it to a primary + secondary color combination |
| E2 | A single shot should use no more than 2 primary colors, to avoid losing color-narrative focus |
| E3 | When switching emotions, adjust light ratio and color temperature first, then adjust saturation |
| E4 | Sweet romance defaults to "cool base + warm accent": cool colors lay the base, warm colors land on the focal point of the characters' relationship |
| E5 | If it conflicts with the plot, the emotion palette takes priority over the general recommended colors, but must not violate the strictly forbidden items |

### Color Temperature Constraints

| Parameter | Value | Description |
|---|---|---|
| Overall color temperature | Leaning cool, 5800-7000K (recommended) | Cool, ethereal base tone |
| Skin tone temperature | Slightly warm, 5200-5600K (recommended) | Cool white but with a sense of life |
| Contrast | Strong (recommended to maintain) | Pronounced light/dark contrast |
| Saturation | Medium-low, 30-50% (recommended range) | Refined grey tone |

### Tolerance and Exceptions

| Item | Recommended tolerance |
|---|---|
| Hue shift | ±8° |
| Saturation shift | ±10% |
| Brightness shift | ±12% |

> Exception scenes: weddings, lantern festivals, flashbacks, and emotional-climax shots may use warmer or higher-saturation local color patches; however, neon/fluorescent colors and modern color language are forbidden.

---

## 3. Global Constraint Rules

### Mandatory Rules (inherited by all skills)

| No. | Rule |
|---|---|
| R1 | Must include the "photorealistic photography of real people" style anchor phrase |
| R2 | Must declare "strong contrast + extreme detail" |
| R3 | Faces must use "finely rendered facial features + fine skin detail" |
| R4 | Hair must use "strand-by-strand definition + finely rendered hair" |
| R5 | Textures must declare "ultra-clear texture detail" |

### Strictly Forbidden (inherited by all skills)

| No. | Forbidden content |
|---|---|
| X1 | "Cartoon/anime/2D-ACG/illustration style" strictly forbidden |
| X2 | "Highly saturated fluorescent colors/neon colors" strictly forbidden |
| X3 | "Modern elements in frame" strictly forbidden |
| X4 | Words tending toward "facial distortion/extra fingers/anatomical abnormalities" strictly forbidden |
| X5 | "Nudity/exposure/see-through/suggestive descriptions" strictly forbidden |
