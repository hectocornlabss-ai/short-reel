# Scene Derivative Asset Generation · Constraint Manual

---

## 1. Derivative Principles

1. **Spatial consistency** — Architectural structure/layout/materials must remain consistent across all variants
2. **Shot-scale driven** — The same scene serves different narrative functions through different shot scales
3. **Time-of-day switching** — The same space presents different lighting moods at different times of day
4. **Weather variation** — The same space presents different emotional tones under different weather
5. **Real photography as the anchor** — All variants must preserve a real-photography texture, rejecting 3D-render/CG-animation feel; camera-optic characteristics and physically accurate lighting must be preserved

---

## 2. Shot-Scale Variants

### Shot-Scale Definitions

| Shot Scale | Range | Narrative Function | Prompt |
|---|---|---|---|
| Extreme wide shot | Full scene + surrounding environment | Establish spatial sense, location | extreme wide shot |
| Wide shot | Full scene presentation | Show spatial structure | wide shot |
| Medium shot | A partial area of the scene | Focus on a functional area | medium shot |
| Close shot | Scene detail | Material/atmosphere prop close-up | close shot |
| Extreme close-up | Extremely localized detail | Material texture/key prop | extreme closeup |

### Shot-Scale Derivation Rules

| Derived From Base Image | Stays the Same | Allowed to Change |
|---|---|---|
| Extreme wide → Wide | Building exterior, overall layout | Narrower angle, added foreground |
| Wide → Medium | Material, tone, lighting | Cropped focus, depth-of-field change |
| Medium → Close | Material, tone | Shallow depth of field, blurred background |
| Close → Extreme close-up | Material texture | Extremely shallow depth of field, macro feel |

---

## 3. Time-of-Day Variants

### Time-of-Day Definitions

| Time of Day | Visual Features | Prompt |
|---|---|---|
| Early morning | Thin mist, soft light, cool-warm interwoven tone | faint morning glow, thin morning mist |
| Midday | Bright, short shadows, vivid color | midday sunlight, bright light |
| Dusk | Golden tone, long shadows, gradient sky | golden dusk glow, golden hour |
| Night (moonlit) | Cool blue tone, quiet and cold | clear moonlight, moonlight |
| Night (lit) | Warm yellow accents, light/dark contrast | scattered lantern lights, flickering candlelight |

### Time-of-Day Derivation Rules

| Derived From Base Time | Stays the Same | Change Item |
|---|---|---|
| Day → Dusk | Building/layout/material | Sky tone warms, shadows lengthen |
| Day → Night | Building/layout/material | Overall darkening, add lantern/moonlight atmosphere |
| Indoor day → Indoor night | Spatial structure, furniture | Overall tone warms, add candlelight/lantern elements |

---

## 4. Weather Variants

### Weather Definitions

| Weather | Visual Features | Prompt |
|---|---|---|
| Sunny | Bright, sharp shadows | clear sky for miles, bright sunshine |
| Overcast | Even light, no hard shadows | overcast soft light, overcast |
| Thin mist | Reduced visibility, hazy air | mist lingering, mist swirling |
| Light rain | Water droplets, wet reflections, rain streaks | drizzling rain like fine silk, gauze-like rain curtain |
| Falling snow | White coverage, snowflakes drifting down | snow falling thick, silver-clad in snow |

### Weather Derivation Rules

| Derived From Base Weather | Stays the Same | Change Item |
|---|---|---|
| Sunny → Thin mist | Building/layout | Add mist layer, blurred distance, reduced saturation |
| Sunny → Light rain | Building/layout | Add rain streaks, ground reflections, cooler tone |
| Sunny → Falling snow | Building/layout | Add snow accumulation, snowflakes, whiter tone |
| Vegetation must adapt to weather logic | — | Petals wet in rain, bare branches frosted in snow |

---

## 5. Angle Variants

### Angle Definitions

> Derivative images are switched across the following angle dimensions relative to the reference image. The caller supplies the reference image plus a target-angle description; this document only defines the angle vocabulary and consistency constraints.

| Angle | Description | Prompt |
|---|---|---|
| Front view | Facing the scene's front compared to the reference image | front view, eye level |
| Side (left/right) | 90° eye-level view toward the scene's left/right side | left side view / right side view |
| Back view | 180° toward the scene's back | back view |
| High angle | Elevated view looking down, showing the overall layout | high angle, bird's eye view |
| Low angle | Low viewpoint looking up, emphasizing a tall subject | low angle, worm's eye view |
| Push-in | Same direction but the camera pushes in, focusing on a local area | push-in, closer angle |
| Free angle | Any angle description custom-defined by the caller | injected as `{target angle}` |

### Angle Derivation Rules

| Item | Constraint |
|---|---|
| Reference consistency | Architectural structure/layout/material/tone/lighting/season/weather must match the reference image |
| Viewpoint | Same scene center point, only the angle switches; eye height may adjust with the angle |
| Lighting logic | The reference image's light-source direction stays fixed; after switching angle, shadow-casting direction must be recalculated accordingly (staying physically plausible) |
| Layout | Single image (not a collage, not multi-view, not split-screen) |
| People | **Strictly no people, silhouettes, or human figures may appear** |
| Aspect ratio | Default 16:9 (or as set by the caller) |

---

## 6. Prompt Template

```
ancient-style derivative scene image, based on the reference image,
real photography, photorealistic, shot on ARRI Alexa, 35mm film grain,
RAW photo, ultra realistic, hyper detailed,
shallow depth of field, natural lens vignette, subtle chromatic aberration, bokeh,
realistic photography texture, film grain feel, natural lighting, physically accurate light and shadow,
scene derivative design sheet, environment concept art, no people, no characters, no human figures,
maintain consistent scene spatial structure,
{target angle (if any)}, {shot-scale viewpoint (if any)}, {time-of-day description (if any)}, {weather description (if any)},
{foreground}, {midground}, {background},
{tone description}, {depth-of-field description (if any)}, {sky-tone change (if any)}, {atmosphere adjustment (if any)},
{weather visual features (if any)}, {material surface change (if any)}, {vegetation adaptation description (if any)},
natural material wear marks, patina of age, mossy weathering, naturally draped fabric creases,
diffused natural light, volumetric light, Tyndall effect, caustic projections,
aerial perspective, ultra-clear texture detail,
single-frame composition, keep architectural structure/material/tone/lighting consistent with the reference image, only switch the viewpoint per the target angle,
no people appear anywhere in the frame
no text of any kind should appear in the image
```

> **Usage note**: judge for yourself which change dimensions (angle/shot-scale/time-of-day/weather) apply based on the information the user provides; leave unmentioned dimensions' fields blank/omitted. No need to generate a separate template for every variant type.

---

## 7. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The scene's spatial structure must stay consistent across all variants |
| R2 | Time-of-day variants must adjust the sky tone and mood |
| R3 | Weather variants must adapt vegetation/material surfaces |
| R4 | The derivative image must be a "single frame," never a collage of multi-view/grid/split-screen |
| R5 | The derivative image must keep architectural structure/material/tone/lighting consistent with the reference image, only switching the viewpoint per the specified angle |
| R6 | **Strictly no people may appear** in the scene image |
| R7 | Judge for yourself which change dimensions (angle/shot-scale/time-of-day/weather) apply based on the information provided; leave unmentioned dimensions blank/omitted |
| R8 | Must include real-photography keywords (real photography / photorealistic / RAW photo) |
| R9 | Must include camera-optic characteristics (at least one of shallow depth of field / lens vignette / bokeh) |
| R10 | Materials must carry natural wear/traces of time; a pristine, flawless "CG feel" is prohibited |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Inconsistent architectural structure/layout between variants |
| X2 | Weather contradicting the season (e.g. snowfall in summer) |
| X3 | Abrupt material/style shifts between variants |
| X4 | Any person, silhouette, or human figure appearing |
| X5 | The frame being composited into a multi-view/grid/split-screen layout |
| X6 | 3D-render/CG-animation/cartoon/game-engine texture (words like 3D render, CGI, Unreal Engine, Unity are prohibited) |
| X7 | Materials that are overly clean and perfect, with no signs of use or age at all (avoid a "plastic" feel) |
| X8 | Lighting that is overly flat and even, lacking depth-of-field blur or camera-optic characteristics |

