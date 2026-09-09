---
name: art_scene_derivative
description: Scene derivative asset generation · Constraint manual
metaData: art_skills
---

# Scene Derivative Asset Generation · Constraint Manual

---

## 1. Derivative Principles

1. **Spatial Consistency** — Architectural structure/layout/materials must remain consistent across all variants
2. **Shot-Size Driven** — The same scene shows different narrative functions through different shot sizes
3. **Time-of-Day Switching** — The same space presents different lighting moods at different times of day
4. **Weather Variation** — The same space presents different moods under different weather
5. **3D as the Anchor** — All variants must retain 3D-rendered texture; flat texture-map/CG-animation feel is rejected; retain volumetric lighting, ambient occlusion, and depth-of-field blur

---

## 2. Shot-Size Variants

### Shot-Size Definitions

| Shot Size | Scope | Narrative Function | Prompt |
|---|---|---|---|
| Extreme Wide Shot | Full scene + surrounding environment | Establish spatial sense, orientation | extreme wide shot |
| Wide Shot | Complete presentation of the scene | Show spatial structure | wide shot |
| Medium Shot | A local area of the scene | Focus on a functional zone | medium shot |
| Close Shot | Scene detail | Material/atmosphere-prop closeup | close shot |
| Extreme Closeup | Extremely localized detail | Material texture/key prop | extreme closeup |

### Shot-Size Derivation Specification

| Derived From Base Image | Kept Unchanged | Allowed to Change |
|---|---|---|
| Extreme Wide → Wide | Building exterior, overall layout | Narrower angle, added foreground |
| Wide → Medium | Material, tone, lighting | Cropped focus, depth-of-field change |
| Medium → Close | Material, tone | Shallow depth of field, blurred background |
| Close → Extreme Closeup | Material texture | Extremely shallow depth of field, macro feel |

---

## 3. Time-of-Day Variants

### Time-of-Day Definitions

| Time of Day | Visual Traits | Prompt |
|---|---|---|
| Early Morning | Light mist and soft light, tone interweaving cool and warm | faint morning glow, morning mist |
| Midday | Bright, short shadows, vivid colors | midday sunlight, bright light |
| Dusk | Golden tone, long shadows, gradient sky | golden dusk glow, golden hour |
| Night (Moonlight) | Cool blue tone, quiet and cold | clear moonlight, moonlight |
| Night (Lamplight) | Warm yellow accents, high contrast | glimmering lamplight, scattered candlelight |

### Time-of-Day Derivation Specification

| Derived From Base Time | Kept Unchanged | Change Items |
|---|---|---|
| Day → Dusk | Architecture/layout/materials | Sky tone warms, shadows lengthen |
| Day → Night | Architecture/layout/materials | Overall darkening, added lamplight/moonlight atmosphere |
| Interior Day → Interior Night | Spatial structure, furniture | Overall tone warms, added candlelight/lantern elements |

---

## 4. Weather Variants

### Weather Definitions

| Weather | Visual Traits | Prompt |
|---|---|---|
| Clear | Bright, crisp shadows | clear skies, bright sunshine |
| Overcast | Even light, no hard shadows | overcast soft light, overcast |
| Light Mist | Reduced visibility, hazy air | drifting mist, misty haze |
| Light Rain | Water droplets, wet reflections, rain streaks | fine rain like silk, gauzy rain curtain |
| Falling Snow | White coverage, falling snowflakes | falling snow, silver-clad world |

### Weather Derivation Specification

| Derived From Base Weather | Kept Unchanged | Change Items |
|---|---|---|
| Clear → Light Mist | Architecture/layout | Added mist layer, blurred distant view, reduced saturation |
| Clear → Light Rain | Architecture/layout | Added rain streaks, wet ground reflections, cooler tone |
| Clear → Falling Snow | Architecture/layout | Added accumulated snow, snowflakes, whiter tone |
| Vegetation must adapt to weather logic | — | Wet petals in rain, frost-laced bare branches in snow |

---

## 5. Angle Variants

### Angle Definitions

> A derivative image can switch along the following angle dimensions relative to the reference image. The caller supplies a reference image plus a target-angle description; this file only defines the angle vocabulary and consistency constraints.

| Angle | Description | Prompt |
|---|---|---|
| Front View | Facing the scene's front, compared to the reference image | front view, eye level |
| Side View (Left/Right) | Facing 90° to the scene's left/right, eye level | left side view / right side view |
| Back View | Facing the scene's rear at 180° | back view |
| High Angle | Elevated overview, showing the overall layout | high angle, bird's eye view |
| Low Angle | Looking up from a low position, emphasizing a tall subject | low angle, worm's eye view |
| Push-In | Same direction but with the lens pushed in, focusing on a detail | push-in, closer angle |
| Free Angle | Any custom angle description supplied by the caller | injected as `{target angle}` |

### Angle Derivation Specification

| Item | Constraint |
|---|---|
| Reference Consistency | Architectural structure/layout/materials/tone/lighting/season/weather must match the reference image |
| Viewpoint | Same scene center point, only the angle switches; viewpoint height may adjust with the angle |
| Lighting Logic | The reference image's light-source direction stays fixed; after switching angles, the shadow-casting direction must be recalculated accordingly (keeping it physically plausible) |
| Layout | Single frame (not a collage, not multi-view, not split-screen) |
| People | **No person, human silhouette, or human figure outline may appear** |
| Aspect Ratio | 16:9 by default (or as set by the caller) |

---

## 6. Prompt Template

Ancient-style derivative scene image, based on the reference image,
3D rendering style, high-precision modeling, PBR materials, Chinese Traditional 3D, cinematic-grade lighting,
3D rendered, volumetric lighting,
depth of field, natural lens vignette, subtle chromatic aberration, bokeh,
3D-rendered texture, volumetric lighting, natural lighting, physically based light and shadow,
scene derivative design sheet, environment concept art, no people, no characters, no human figures,
keep the scene's spatial structure consistent,
{target angle (if any)}, {shot-size viewpoint (if any)}, {time-of-day description (if any)}, {weather description (if any)},
{foreground}, {midground}, {background},
{tone description}, {depth-of-field description (if any)}, {sky tone change (if any)}, {atmosphere adjustment (if any)},
{weather visual traits (if any)}, {material surface change (if any)}, {vegetation adaptation description (if any)},
natural material wear marks, patina of time, weathered moss, naturally draping fabric folds,
volumetric lighting, ambient occlusion, diffused natural light, soft light and shadow,
aerial perspective, ultra-clear texture detail,
single-frame composition, keep architectural structure/materials/tone/lighting consistent with the reference image, only switch the viewpoint according to the target angle,
no people of any kind in the frame,
no text of any kind in the image

> **Usage note**: Judge for yourself, based on the information the user provides, which change dimensions apply (angle/shot size/time of day/weather); leave the fields for unmentioned dimensions blank and omit them. There is no need to generate a separate template for every variant.

---

## 7. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The scene's spatial structure must remain consistent across all variants |
| R2 | Time-of-day variants must adjust the sky tone and atmosphere |
| R3 | Weather variants must adapt vegetation/material surfaces accordingly |
| R4 | The derivative image must be a "single frame" — no collaging multi-view/grid/split-screen layouts |
| R5 | The derivative image must keep architectural structure/materials/tone/lighting consistent with the reference image, only switching the viewpoint per the specified angle |
| R6 | **No person may appear** in the scene image |
| R7 | Judge the change dimensions (angle/shot size/time of day/weather) based on the information the user provides; leave unmentioned dimensions blank and omit them |
| R8 | Must include 3D-rendering keywords (3D rendered / volumetric lighting / PBR materials) |
| R9 | Must include lens optical characteristics (at least one of depth of field / lens vignette / bokeh) |
| R10 | Materials must show natural wear/traces of time; a pristine, flawless "CG look" is prohibited |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Inconsistent architectural structure/layout between variants |
| X2 | Weather contradicting the season (e.g. snow in summer) |
| X3 | Abrupt material/style shifts between variants |
| X4 | Any appearance of a person, human silhouette, human shadow, or human figure outline |
| X5 | The frame collaged into a multi-view/grid/split-screen layout |
| X6 | Low-precision modeling/rough textures/plastic texture (words like low-poly, rough modeling are forbidden) |
| X7 | Materials that are overly clean and perfect, with no trace of use or age (avoid a "plastic feel") |
| X8 | Lighting that is overly flat and even, with no depth-of-field blur or lens optical characteristics |
