---
name: art_scene_derivative
description: Scene derivative asset generation · Constraint manual
metaData: art_skills
---

# Scene Derivative Asset Generation · Constraint Manual

---

## 1. Derivative Principles

1. **Spatial consistency** — Architectural structure/layout/material must stay consistent across all variants
2. **Shot-size driven** — The same scene shows different narrative functions through different shot sizes
3. **Time-of-day switching** — The same space presents different light-and-shadow moods at different times of day
4. **Weather variation** — The same space presents different moods under different weather
5. **Anime as the anchor** — All variants must retain the guofeng anime texture; 3D-realistic/CG-animation feel is rejected, preserving delicate lines, cel-shaded flat color, and Japanese-style rendering

---

## 2. Shot-Size Variants

### Shot-Size Definitions

| Shot Size | Scope | Narrative Function | Prompt |
|---|---|---|---|
| Extreme wide shot | Full scene + surrounding environment | Establish spatial sense, orientation | extreme wide shot |
| Wide shot | Full presentation of the scene | Show the spatial structure | wide shot |
| Medium shot | A local area of the scene | Focus on a functional zone | medium shot |
| Close shot | Scene details | Material/mood-prop closeup | close shot |
| Extreme closeup | Extremely localized detail | Material texture/key prop | extreme closeup |

### Shot-Size Derivation Specification

| Derived From Base Image | Kept Unchanged | Allowed to Change |
|---|---|---|
| Extreme wide → wide shot | Building exterior, overall layout | Narrower angle, added foreground |
| Wide → medium shot | Material, tone, lighting | Framing/focus, depth-of-field change |
| Medium → close shot | Material, tone | Shallower depth of field, blurred background |
| Close → extreme closeup | Material texture | Extremely shallow depth of field, macro feel |

---

## 3. Time-of-Day Variants

### Time-of-Day Definitions

| Time of Day | Visual Characteristics | Prompt |
|---|---|---|
| Early morning | Thin mist, soft light, tone mixing cool and warm | faint morning glow, thin morning mist |
| Midday | Bright, short shadows, vivid colors | midday sun, bright light |
| Dusk | Golden tones, long shadows, gradient sky | golden dusk glow, golden hour |
| Night (moonlight) | Cool blue tones, tranquil and cold | clear moonlight, moonlight |
| Night (lamplight) | Warm yellow accents, light-dark contrast | scattered lantern lights, flickering candlelight |

### Time-of-Day Derivation Specification

| Derived From Base Time | Kept Unchanged | Change Items |
|---|---|---|
| Daytime → dusk | Architecture/layout/material | Sky tone warms, shadows lengthen |
| Daytime → night | Architecture/layout/material | Overall darkens, added lamplight/moonlight mood |
| Indoor day → indoor night | Spatial structure, furniture | Overall tone warms, added candlelight/lantern elements |

---

## 4. Weather Variants

### Weather Definitions

| Weather | Visual Characteristics | Prompt |
|---|---|---|
| Clear | Bright, clearly defined shadows | clear sky, bright sunshine |
| Overcast | Even lighting, no hard shadows | overcast soft light, overcast |
| Light mist | Reduced visibility, hazy air | mist lingering, mist swirling |
| Light rain | Water droplets, damp reflections, rain streaks | light rain like silk threads, thin curtain of rain |
| Falling snow | White coverage, drifting snowflakes | drifting snow, silver-clad in snow |

### Weather Derivation Specification

| Derived From Base Weather | Kept Unchanged | Change Items |
|---|---|---|
| Clear → light mist | Architecture/layout | Added mist layer, blurred distance, reduced saturation |
| Clear → light rain | Architecture/layout | Added rain streaks, ground reflections, cooler tone |
| Clear → falling snow | Architecture/layout | Added accumulated snow, snowflakes, whiter tone |
| Vegetation must adapt to weather logic | — | Petals damp in the rain, frost-laced bare branches in the snow |

---

## 5. Angle Variants

### Angle Definitions

> Derivative images can switch along the following angle dimensions relative to the reference image. The caller supplies the reference image plus the target-angle description; this file only defines the angle vocabulary and consistency constraints.

| Angle | Description | Prompt |
|---|---|---|
| Front view | Line of sight faces the scene's front, compared to the reference | front view, eye level |
| Side (left/right) | 90° eye-level view toward the scene's left/right side | left side view / right side view |
| Back/rear view | 180° toward the back of the scene | back view |
| High angle | High vantage point, showing the overall layout | high angle, bird's eye view |
| Low angle | Low vantage point, emphasizing a tall subject | low angle, worm's eye view |
| Push-in | Same direction but the lens pushes in, focusing on a detail | push-in, closer angle |
| Free angle | Any angle description customized by the caller | injected via `{target angle}` |

### Angle Derivation Specification

| Item | Constraint |
|---|---|
| Reference consistency | Architectural structure/layout/material/tone/lighting/season/weather must match the reference image |
| Viewpoint | Same scene center point, only the angle switches; viewing height may adjust with the angle |
| Lighting logic | The reference image's light-source direction stays fixed; after the angle switch, the shadow-cast direction must be recalculated accordingly (keeping it physically plausible) |
| Layout | Single frame (not a collage, not multi-view, not a split screen) |
| Characters | **Strictly no person, human silhouette, or human figure outline of any kind** |
| Aspect ratio | Default 16:9 (or as set by the caller) |

---

## 6. Prompt Template

Guofeng anime derivative scene image, based on the reference image,
guofeng anime, new Chinese-chic aesthetics, Japanese-style anime rendering, cel-shaded flat color, delicate brushwork,
Japanese anime style, cel shading, fine brushstrokes,
keep the scene's spatial structure consistent,
{target angle (if any)}, {shot-size viewpoint (if any)}, {time-of-day description (if any)}, {weather description (if any)},
{foreground}, {midground}, {background},
{tone description}, {depth-of-field description (if any)}, {sky-tone change (if any)}, {mood adjustment (if any)},
{weather visual characteristics (if any)}, {material surface change (if any)}, {vegetation adaptation description (if any)},
natural material wear marks, patina of time, naturally draping fabric folds,
soft light and shadow, Japanese-style rendering, diffused natural light, delicate texture,
guofeng anime HD rendering, high detail, delicate lines, cel-shaded flat-color feel,
single-frame composition, keep architectural structure/material/tone/lighting consistent with the reference image, only switch the viewpoint per the target angle,
no person of any kind in the frame
no text of any kind in the image

> **Usage note**: Decide which change dimensions to apply (angle/shot size/time of day/weather) based on the information the user provides; leave the corresponding field blank and omit it for any dimension not mentioned. No need to generate a separate template for every variant.

---

## 7. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The scene's spatial structure must stay consistent across all variants |
| R2 | Time-of-day variants must adjust the sky tone and mood |
| R3 | Weather variants must adapt the vegetation/material surface |
| R4 | The derivative image must be a "single frame"; multi-view/grid/split-screen collages are forbidden |
| R5 | The derivative image must keep architectural structure/material/tone/lighting consistent with the reference image, switching the viewpoint only per the specified angle |
| R6 | **Strictly no person of any kind** may appear in the scene image |
| R7 | Decide the change dimensions (angle/shot size/time of day/weather) based on the information the user provides; leave unmentioned dimensions blank and omit them |
| R8 | Must include guofeng anime keywords (Chinese style anime / cel shading / fine brushstrokes) |
| R9 | Must include lens/optical characteristics (cel-shaded flat color / delicate lines / Japanese-style rendering) |
| R10 | Materials must carry natural wear/marks of time; a pristine, flawless "CG feel" is forbidden |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Inconsistent architectural structure/layout between variants |
| X2 | Weather contradicting the season (e.g. snow falling in summer) |
| X3 | Abrupt material/style shifts between variants |
| X4 | Any person, human silhouette, human figure shadow, or human outline appearing |
| X5 | The frame being assembled into a multi-view/grid/split-screen layout |
| X6 | 3D-realistic/CG-animation/cartoon/game-engine texture (forbidden terms: 3D render, CGI, Unreal Engine, Unity, etc.) |
| X7 | Materials that are too clean and perfect, with no wear or sense of age (avoid a "plastic feel") |
| X8 | Lighting that is too flat and even, with no depth-of-field blur or lens/optical characteristics |
