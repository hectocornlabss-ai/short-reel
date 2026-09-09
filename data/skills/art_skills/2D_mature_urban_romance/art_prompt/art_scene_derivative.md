# Scene Derivative Asset Generation · Constraint Manual

---

## 1. Derivative Principles

1. **Spatial consistency** — architectural structure/layout/materials must remain consistent across all variants
2. **Shot-scale driven** — the same scene shows different narrative functions through different shot scales
3. **Time-of-day switching** — the same space shows different light-and-shadow moods at different times of day
4. **Weather variation** — the same space shows different moods under different weather
5. **Cel shading as the anchor** — all variants must preserve the anime style, with clean lines and cel-shaded coloring

---

## 2. Shot-Scale Variants

### Shot-Scale Definitions

| Shot scale | Range | Narrative function | Prompt |
|---|---|---|---|
| Extreme wide shot | The full scene + surrounding environment | Establish spatial sense, orientation | `extreme wide shot` |
| Wide shot | The scene shown in full | Show spatial structure | `wide shot` |
| Medium shot | A local area of the scene | Focus on a functional zone | `medium shot` |
| Close shot | Fine details of the scene | Material/atmosphere prop close-up | `close shot` |
| Extreme close-up | Extremely localized detail | Material texture/key prop | `extreme closeup` |

### Shot-Scale Derivation Specification

| Derived from baseline | Kept unchanged | Allowed to change |
|---|---|---|
| Extreme wide shot → wide shot | Building exterior, overall layout | Narrower framing, added foreground |
| Wide shot → medium shot | Material, tone, lighting | Focused cropping, depth-of-field change |
| Medium shot → close shot | Material, tone | Shallow depth of field, blurred background |
| Close shot → extreme close-up | Material texture | Extremely shallow depth of field, macro feel |

---

## 3. Time-of-Day Variants

### Time-of-Day Definitions

| Time of day | Visual trait | Prompt |
|---|---|---|
| Early morning | Cool white light, misty feel | faint morning glow, morning mist |
| Midday | Bright, short shadows, vivid color | midday sunlight, bright light |
| Dusk | Golden tone, long shadows, gradient sky | golden dusk glow, golden hour |
| Night (moonlight) | Cool blue tone, quiet and cold | clear moonlight, moonlight |
| Night (lit) | Warm yellow accents, strong contrast | scattered city lights, lit ambiance |

### Time-of-Day Derivation Specification

| Derived from baseline time | Kept unchanged | Change item |
|---|---|---|
| Day → dusk | Building/layout/material | Sky tone warms, shadows lengthen |
| Day → night | Building/layout/material | Overall darkening, added lights/moonlight ambiance |
| Indoor day → indoor night | Spatial structure, furniture | Overall tone warms, added interior lighting |

---

## 4. Weather Variants

### Weather Definitions

| Weather | Visual trait | Prompt |
|---|---|---|
| Clear | Bright, sharp shadows | clear sky, bright sunshine |
| Overcast | Even light, no hard shadows | soft overcast light, overcast |
| Light mist | Reduced visibility, hazy air | drifting mist, misty haze |
| Light rain | Water droplets, damp reflection, rain streaks | fine threads of rain, gentle rain curtain |
| Snowfall | White coverage, falling snowflakes | falling snow, silver-clad landscape |

### Weather Derivation Specification

| Derived from baseline weather | Kept unchanged | Change item |
|---|---|---|
| Clear → light mist | Building/layout | Added mist layer, blurred distance, lower saturation |
| Clear → light rain | Building/layout | Added rain streaks, ground reflection, cooler tone |
| Clear → snowfall | Building/layout | Added snow accumulation, snowflakes, whiter tone |
| Vegetation must adapt to weather logic | — | Damp petals in rain, frost-tipped bare branches in snow |

---

## 5. Angle Variants

### Angle Definitions

> Derivative images can shift along the following angle dimensions relative to a reference image. The caller supplies the reference image plus the target angle description; this document only defines the angle vocabulary and consistency constraints.

| Angle | Description | Prompt |
|---|---|---|
| Front view | Facing the front of the scene compared to the reference image | `front view`, `eye level` |
| Side view (left/right) | Facing 90° toward the scene's left/right side | `left side view` / `right side view` |
| Back view | Facing 180° toward the back of the scene | `back view` |
| High angle | An elevated overhead view, showing the overall layout | `high angle`, `bird's eye view` |
| Low angle | A low upward view, emphasizing a tall subject | `low angle`, `worm's eye view` |
| Push-in | Same direction but the lens moves closer, focusing on a local area | `push-in`, `closer angle` |
| Free angle | Any custom angle description supplied by the caller | inject as `{target angle}` |

### Angle Derivation Specification

| Item | Constraint |
|---|---|
| Reference consistency | Building structure/layout/material/tone/lighting/season/weather must match the reference image |
| Viewpoint | Same scene center point, only the angle changes; eye height may adjust with the angle |
| Lighting logic | The reference image's light-source direction stays fixed; after the angle change, shadow direction must be recalculated accordingly (keeping it physically plausible) |
| Layout | Single frame (not a collage, not multi-view, not a split screen) |
| People | **Any person, human silhouette, or human outline is strictly forbidden** |
| Aspect ratio | 16:9 by default (or as specified by the caller) |

---

## 6. Prompt Template

anime derivative scene image, based on the reference image,
anime style, cel shading, modern urban style,
cinematic composition, dramatic low-key lighting,
ultra detailed, 8K, high quality,
shallow depth of field, film grain, lens vignette,
cel-shaded anime style, cinematic-grade composition, dramatic low-key lighting,
scene derivative design sheet, environment concept art, no people, no characters, no human figures,
keep the scene's spatial structure consistent,
{target angle (if any)}, {shot-scale viewpoint (if any)}, {time-of-day description (if any)}, {weather description (if any)},
{foreground}, {midground}, {background},
{tone description}, {depth-of-field description (if any)}, {sky tone change (if any)}, {atmosphere adjustment (if any)},
{weather visual trait (if any)}, {material surface change (if any)}, {vegetation adaptation description (if any)},
modern signs of use on materials, lived-in atmosphere, natural wear,
natural light/artificial light, dramatic lighting, low-saturation cool tones,
aerial perspective, ultra-clear texture detail,
single-frame composition, keeping building structure/material/tone/lighting consistent with the reference image, only the viewpoint shifts per the target angle,
no person anywhere in the frame
no text anywhere in the image

> **Usage note**: Based on the information the user provides, determine for yourself which change dimensions apply (angle/shot scale/time of day/weather); leave the fields for any unmentioned dimension blank/omitted. There is no need to generate a separate template for every variant type.

---

## 7. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The scene's spatial structure must remain consistent across all variants |
| R2 | Time-of-day variants must adjust the sky tone and atmosphere |
| R3 | Weather variants must adapt vegetation/material surfaces accordingly |
| R4 | Derivative images must be "single frame" — collages of multiple views/grids/split screens are forbidden |
| R5 | Derivative images must keep building structure/material/tone/lighting consistent with the reference image, shifting the viewpoint only per the specified angle |
| R6 | **Any person is strictly forbidden** in scene images |
| R7 | Determine the change dimensions (angle/shot scale/time of day/weather) from the information the user provides; leave unmentioned dimensions blank/omitted |
| R8 | Must include an "anime style" keyword (anime style / cel shading) |
| R9 | Must include a depth-of-field trait (at least one of shallow depth of field / vignette), preserving the cel-shaded anime look |
| R10 | Materials must carry modern signs of use/a lived-in atmosphere; a pristine, flawless "3D-render feel" is forbidden |

### Strictly Prohibited

| No. | Prohibited |
|---|---|
| X1 | Inconsistent building structure/layout between variants |
| X2 | Weather contradicting the season (e.g. snowfall in summer) |
| X3 | Abrupt material/style shifts between variants |
| X4 | Any person, human silhouette, or human outline |
| X5 | The frame being composited into a multi-view/grid/split-screen layout |
| X6 | 3D-render/CG-animation/game-engine feel (forbidden terms: 3D render, CGI, Unreal Engine, Unity, etc.) |
| X7 | Materials that are too clean and perfect, with no sign of use or age (avoid a "plastic" feel) |
| X8 | Lighting that is too even and flat, with no depth-of-field blur or lens optical traits |
