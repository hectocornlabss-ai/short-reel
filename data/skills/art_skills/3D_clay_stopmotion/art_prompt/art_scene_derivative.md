# Claymation Stop-Motion Scene Derivative Asset Generation · Constraint Handbook

---

## 1. Derivative Principles

1. **Spatial consistency** — Architectural structure/layout/material must remain consistent across all variants
2. **Shot-size driven** — The same scene shown through different shot sizes serves different narrative functions
3. **Time-of-day switching** — The same space presents different warm-toned lighting moods across different times of day
4. **Weather variation** — The same space presents different moods under different weather conditions
5. **Stop-motion as anchor** — All variants must retain the stop-motion claymation style

---

## 2. Shot-Size Variants

### Shot-Size Definitions

| Shot Size | Scope | Narrative Function | Prompt Fragment |
|---|---|---|---|
| Extreme wide shot | Full scene + surrounding environment | Establish sense of space, orientation | extreme wide shot |
| Wide shot | Complete presentation of the scene | Show spatial structure | wide shot |
| Medium shot | A local area of the scene | Focus on a functional zone | medium shot |
| Close shot | Scene details | Material/atmosphere prop close-up | close shot |
| Extreme closeup | Extremely local detail | Material texture/key prop | extreme closeup |

### Shot-Size Derivation Specification

| Derived From Base Image | Kept Unchanged | Allowed to Change |
|---|---|---|
| Extreme wide → Wide | Building exterior, overall layout | Narrower angle, added foreground |
| Wide → Medium | Material, tone, lighting | Cropped focus, depth-of-field change |
| Medium → Close | Material, tone | Shallow depth of field, blurred background |
| Close → Extreme closeup | Material texture | Extremely shallow depth of field, macro feel |

---

## 3. Time-of-Day Variants

### Time-of-Day Definitions

| Time of Day | Visual Traits | Prompt Fragment |
|---|---|---|
| Early morning | Warm soft light, tone skews warm gold | first light of dawn, warm morning tone |
| Midday | Bright, short shadows, vivid colors | midday sunlight, bright light |
| Dusk | Warm golden tone, long shadows, gradient sky | dusk warm gold, golden hour |
| Night (moonlight) | Cool blue tone, quiet and cold | moonlit glow, moonlight |
| Night (lamplight) | Warm yellow accents, light/dark contrast | scattered lantern lights, flickering candlelight |

### Time-of-Day Derivation Specification

| Derived From Base Time | Kept Unchanged | Changed Elements |
|---|---|---|
| Day → Dusk | Building/layout/material | Sky tone warms, shadows lengthen |
| Day → Night | Building/layout/material | Overall darkening, added lamplight/moonlight mood |
| Indoor day → Indoor night | Spatial structure, furniture | Overall tone warms, added candlelight/lantern elements |

---

## 4. Weather Variants

### Weather Definitions

| Weather | Visual Traits | Prompt Fragment |
|---|---|---|
| Clear | Bright, clear shadows | clear blue sky, bright sunshine |
| Overcast | Even lighting, no hard shadows | overcast soft light, overcast |
| Light mist | Reduced visibility, hazy air | mist drifting, fog lingering |
| Light rain | Water droplets, wet reflections, rain streaks | fine rain like threads, gentle rain curtain |
| Snowfall | White coverage, falling snowflakes | snow falling gently, silver-clad world |

### Weather Derivation Specification

| Derived From Base Weather | Kept Unchanged | Changed Elements |
|---|---|---|
| Clear → Light mist | Building/layout | Added mist layer, blurred distance, lower saturation |
| Clear → Light rain | Building/layout | Added rain streaks, ground reflections, tone skews cool |
| Clear → Snowfall | Building/layout | Added snow accumulation, snowflakes, tone skews white |
| Vegetation must adapt to weather logic | — | Wet petals in the rain, frost on bare branches in the snow |

---

## 5. Angle Variants

### Angle Definitions

> Derivative images shift along the following angle dimensions relative to the reference image. The caller supplies the reference image plus a target-angle description; this file only defines angle terminology and consistency constraints.

| Angle | Description | Prompt Fragment |
|---|---|---|
| Front view | Facing the front of the scene, compared to the reference image | front view, eye level |
| Side (left/right) | Facing the scene's left/right side at 90° eye level | left side view / right side view |
| Back view | Facing the back of the scene at 180° | back view |
| High angle | Elevated bird's-eye view, showing the overall layout | high angle, bird's eye view |
| Low angle | Low upward view, emphasizing a tall subject | low angle, worm's eye view |
| Push-in | Same direction but the lens pushes in, focusing on a local area | push-in, closer angle |
| Free angle | Any custom angle description supplied by the caller | injected via `{target angle}` |

### Angle Derivation Specification

| Item | Constraint |
|---|---|
| Reference consistency | Architectural structure/layout/material/tone/lighting/season/weather must match the reference image |
| Viewpoint | Same scene center point, only the angle changes; viewpoint height may adjust with the angle |
| Lighting logic | The reference image's light-source direction stays fixed; after the angle change, shadow-cast direction must be recalculated accordingly (keeping warm soft light) |
| Layout | Single frame (not a collage, not multi-view, not split-screen) |
| Characters | **Strictly no people, human shadows, or human silhouettes may appear** |
| Aspect ratio | Default 16:9 (or as set by the caller) |

---

## 6. Prompt Template

```
Claymation stop-motion derivative scene image, based on a reference image, stop-motion animation style, 3D cartoon rendering, warm-toned lighting, soft shallow depth of field,
claymation style, stop-motion aesthetic, warm lighting, shallow depth of field, bokeh,
scene derivative design sheet, environment concept art, no people, no characters, no human figures,
keep the scene's spatial structure consistent,
{target angle (if any)}, {shot-size viewpoint (if any)}, {time-of-day description (if any)}, {weather description (if any)},
{foreground}, {midground}, {background},
{tone description}, {depth-of-field description (if any)}, {sky tone change (if any)}, {atmosphere adjustment (if any)},
{weather visual traits (if any)}, {material surface change (if any)}, {vegetation adaptation description (if any)},
natural material wear marks, aged patina, mossy weathering, natural fabric drape,
warm soft diffused light, volumetric light, warm light flares, shallow depth of field blur,
aerial perspective, ultra-clear texture detail,
single-frame composition, keep architectural structure/material/tone/lighting consistent with the reference image, shift only the viewpoint per the target angle,
no people of any kind in the frame
no text of any kind should appear in the image
```

---

## 7. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The scene's spatial structure must remain consistent across all variants |
| R2 | Time-of-day variants must adjust the sky tone and atmosphere |
| R3 | Weather variants must adapt vegetation/material surfaces accordingly |
| R4 | The derivative image must be "single-frame"; multi-view collage/grid/split-screen is not allowed |
| R5 | The derivative image must keep architectural structure/material/tone/lighting consistent with the reference image, shifting only the viewpoint per the specified angle |
| R6 | **Strictly no people may appear** in the scene image |
| R7 | Determine the dimension of change (angle/shot size/time of day/weather) based on the information the user provides; leave unmentioned dimensions blank/omitted |
| R8 | Must include stop-motion animation keywords (claymation / stop-motion) |
| R9 | Must include shallow-depth-of-field keywords (shallow depth of field / bokeh) |
| R10 | Must specify "warm soft light" |
| R11 | Materials must carry natural wear/traces of time |

### Prohibited

| No. | Prohibited |
|---|---|
| X1 | Architectural structure/layout inconsistent between variants |
| X2 | Weather contradicting the season |
| X3 | Abrupt material/style shifts between variants |
| X4 | Any person, human shadow, or human silhouette appearing |
| X5 | The frame being collaged into a multi-view/grid/split-screen layout |
| X6 | Live-action realistic photography/3D rendering/CG animation feel |
| X7 | Materials being overly clean and perfect, with no wear traces at all |
| X8 | Cold hard lighting/strong contrast/hard shadows |
