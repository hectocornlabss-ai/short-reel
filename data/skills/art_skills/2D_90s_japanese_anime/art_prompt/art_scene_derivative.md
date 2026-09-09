# 90s Retro Japanese Anime Style - Scene Derivative Asset Generation · Constraint Handbook

---

## 1. Derivative Principles

1. **Spatial Consistency** — architectural structure/layout/materials must remain consistent across all variants
2. **Shot-Scale Driven** — the same scene serves different narrative functions through different shot scales
3. **Time-of-Day Switching** — the same space presents different lighting moods at different times of day
4. **Weather Variation** — the same space presents different emotional tones under different weather
5. **90s as Anchor** — all variants must preserve the 90s retro style, rejecting modern CG/3D rendering

---

## 2. Shot-Scale Variants

### Shot-Scale Definitions

| Shot Scale | Range | Narrative Function | Prompt |
|---|---|---|---|
| Extreme wide shot | full scene + surrounding environment | establish spatial sense, location | extreme wide shot |
| Wide shot | full scene presentation | show spatial structure | wide shot |
| Medium shot | a partial area of the scene | focus on a functional area | medium shot |
| Close shot | scene detail | material/atmosphere prop close-up | close shot |
| Extreme close-up | extremely localized detail | material texture/key prop | extreme closeup |

### Shot-Scale Derivation Rules

| Derived From Base Image | Stays the Same | Allowed to Change |
|---|---|---|
| Extreme wide → Wide | building exterior, overall layout | narrower angle, added foreground |
| Wide → Medium | material, tone, lighting | cropped focus, depth-of-field change |
| Medium → Close | material, tone | shallow depth of field, blurred background |
| Close → Extreme close-up | material texture | extremely shallow depth of field, macro feel |

---

## 3. Time-of-Day Variants

### Time-of-Day Definitions

| Time of Day | Visual Features | Prompt |
|---|---|---|
| Early morning | thin mist, soft light, cooler tone | morning light, morning mist |
| Midday | bright, short shadows, vivid color | midday sun, bright light |
| Dusk | golden tone, long shadows, gradient sky | dusk, golden hour |
| Night (moonlit) | cool blue tone, quiet and cold | moonlight, moonlit night |
| Night (lit) | warm yellow accents, light/dark contrast | night, city lights |

### Time-of-Day Derivation Rules

| Derived From Base Time | Stays the Same | Change Item |
|---|---|---|
| Day → Dusk | building/layout/material | sky tone warms, shadows lengthen |
| Day → Night | building/layout/material | overall darkening, add lights/moonlight |
| Indoor day → Indoor night | spatial structure, furniture | overall tone warms, add light sources |

---

## 4. Weather Variants

### Weather Definitions

| Weather | Visual Features | Prompt |
|---|---|---|
| Sunny | bright, sharp shadows | sunny day, bright sunshine |
| Overcast | even light, no hard shadows | overcast, soft light |
| Mist | reduced visibility, hazy air | mist, misty haze |
| Light rain | water droplets, wet reflections | light rain, rain streaks |
| Snowfall | white coverage, falling snowflakes | snowfall, snowflakes |

### Weather Derivation Rules

| Derived From Base Weather | Stays the Same | Change Item |
|---|---|---|
| Sunny → Mist | building/layout | add mist layer, blurred distance |
| Sunny → Light rain | building/layout | add rain streaks, ground reflections |
| Sunny → Snowfall | building/layout | add snow accumulation, snowflakes |
| Vegetation must adapt to weather logic | — | plants wet in rain, frosted in snow |

---

## 5. Angle Variants

### Angle Definitions

> Derivative images are switched across the following angle dimensions relative to the reference image. The caller supplies the reference image plus a target-angle description; this document only defines the angle vocabulary and consistency constraints.

| Angle | Description | Prompt |
|---|---|---|
| Front view | facing the scene's front compared to the reference image | front view, eye level |
| Side (left/right) | 90° eye-level view toward the scene's left/right side | left side view / right side view |
| Back view | 180° toward the scene's back | back view |
| High angle | elevated view looking down, showing the overall layout | high angle, bird's eye view |
| Low angle | low viewpoint looking up, emphasizing a tall subject | low angle, worm's eye view |
| Push-in | same direction but the camera pushes in, focusing on a local area | push-in, closer angle |
| Free angle | any angle description custom-defined by the caller | injected as `{target angle}` |

### Angle Derivation Rules

| Item | Constraint |
|---|---|
| Reference consistency | architectural structure/layout/material/tone/lighting/season/weather must match the reference image |
| Viewpoint | same scene center point, only the angle switches; eye height may adjust with the angle |
| Lighting logic | the reference image's light-source direction stays fixed; after switching angle, shadow-casting direction must be recalculated accordingly (staying physically plausible) |
| Layout | single image (not a collage, not multi-view, not split-screen) |
| People | **strictly no people, silhouettes, or human figures may appear** |
| Aspect ratio | 16:9 by default (or as set by the caller) |

---

## 6. Prompt Template
```
90s retro Japanese anime style derivative scene image, based on the reference image,
90s anime style, hand-drawn flat coloring, soft warm tones, fine flowing linework, cinematic lighting,
scene derivative design sheet, environment concept art, no people, no characters, no human figures,
maintain consistent scene spatial structure,
{target angle (if any)}, {shot-scale viewpoint (if any)}, {time-of-day description (if any)}, {weather description (if any)},
{foreground}, {midground}, {background},
{tone description}, {depth-of-field description (if any)}, {sky-tone change (if any)}, {atmosphere adjustment (if any)},
{weather visual features (if any)}, {material surface change (if any)}, {vegetation adaptation description (if any)},
fluid lines, flat-shaded shadows, signs of use,
soft cinematic light, background light bloom, natural lighting,
single-frame composition, keep architectural structure/material/tone/lighting consistent with the reference image, only switch the viewpoint per the target angle,
no people appear anywhere in the frame
no text of any kind in the image
```

> **Usage note**: judge for yourself which change dimensions (angle/shot-scale/time-of-day/weather) apply based on the information the user provides; leave unmentioned dimensions' fields blank/omitted. No need to generate a separate template for every variant type.

---

## 7. Constraint Rules

### Must Follow

| ID | Rule |
|---|---|
| R1 | the scene's spatial structure must stay consistent across all variants |
| R2 | time-of-day variants must adjust the sky tone and mood |
| R3 | weather variants must adapt vegetation/material surfaces |
| R4 | the derivative image must be a "single frame," never a collage of multi-view/grid/split-screen |
| R5 | the derivative image must keep architectural structure/material/tone/lighting consistent with the reference image, only switching the viewpoint per the specified angle |
| R6 | **strictly no people may appear** in the scene image |
| R7 | judge for yourself which change dimensions (angle/shot-scale/time-of-day/weather) apply based on the information provided; leave unmentioned dimensions blank/omitted |
| R8 | must include 90s keywords (90s anime style / hand-drawn / warm tone) |
| R9 | must include line-quality features (fluid lines, flat-shaded shadows — at least one) |
| R10 | materials must show signs of use; a pristine, flawless "CG feel" is forbidden |

### Strictly Forbidden

| ID | Forbidden |
|---|---|
| X1 | inconsistent architectural structure/layout between variants |
| X2 | weather contradicting the season |
| X3 | abrupt material/style shifts between variants |
| X4 | any person, silhouette, or human figure appearing |
| X5 | the frame being composited into a multi-view/grid/split-screen layout |
| X6 | 3D rendering/CG animation/modern-style texture |
| X7 | materials that are overly clean and perfect, with no signs of use whatsoever |
| X8 | lighting that is overly flat and even, lacking soft cinematic light |
