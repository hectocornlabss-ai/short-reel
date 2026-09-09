# Scene Derivative Asset Generation · Urban Realistic Constraint Manual

---

## 1. Derivative Principles

1. **Spatial consistency** — The architectural structure/layout/materials remain consistent across all variants
2. **Shot-type driven** — The same scene shows different narrative functions through different shot types
3. **Time-of-day switching** — The same space presents different light and mood atmospheres at different times of day
4. **Weather variation** — The same space presents different moods under different weather conditions
5. **Live-action as the anchor** — All variants must maintain a realistic photographic texture, rejecting a 3D render/CG animation feel; preserve lens optical characteristics and physical lighting

---

## 2. Shot-Type Variants

### Shot-Type Definitions

| Shot Type | Range | Narrative Function | Prompt |
|---|---|---|---|
| Extreme wide shot | Full scene + surrounding environment | Establish spatial sense, locate the setting | extreme wide shot |
| Wide shot | Complete presentation of the scene | Show the spatial structure | wide shot |
| Medium shot | A local area of the scene | Focus on a functional zone | medium shot |
| Close shot | Scene detail | Close-up of material/mood props | close shot |
| Extreme close-up | Extreme local detail | Material texture/key prop | extreme closeup |

### Shot-Type Derivation Rules

| Derived From Base Image | Kept Unchanged | Allowed to Change |
|---|---|---|
| Extreme wide → Wide | Building exterior, overall layout | Narrower angle, added foreground |
| Wide → Medium | Material, tone, lighting | Cropped focus, depth-of-field change |
| Medium → Close | Material, tone | Shallow depth of field, blurred background |
| Close → Extreme close-up | Material texture | Extremely shallow depth of field, macro feel |

---

## 3. Time-of-Day Variants

### Time-of-Day Definitions

| Time of Day | Visual Characteristics | Prompt |
|---|---|---|
| Early morning | Thin mist, soft light, tones blending cool and warm | faint dawn light, morning mist |
| Midday | Bright, short shadows, vivid colors | midday sunlight, bright light |
| Dusk | Golden tones, long shadows, gradient sky | golden dusk glow, golden hour |
| Night (moonlight) | Cool blue tones, quiet and cold | clear moonlight, moonlight |
| Night (city lights) | Warm yellow accents, light-dark contrast | glittering city lights, urban night scene |

### Time-of-Day Derivation Rules

| Derived From Base Time | Kept Unchanged | Change Items |
|---|---|---|
| Day → Dusk | Building/layout/material | Sky tone warms, shadows lengthen |
| Day → Night | Building/layout/material | Overall darkening, added lights/moonlight atmosphere |
| Indoor day → Indoor night | Spatial structure, furniture | Overall tone warms, added desk lamp/floor lamp elements |

---

## 4. Weather Variants

### Weather Definitions

| Weather | Visual Characteristics | Prompt |
|---|---|---|
| Clear | Bright, sharp shadows | clear blue sky, brilliant sunshine |
| Overcast | Even lighting, no hard shadows | overcast soft light, overcast |
| Light mist | Reduced visibility, hazy air | thin mist lingering, misty haze |
| Light rain | Water droplets, damp reflections, rain streaks | fine drizzle, light rain veil |
| Snowfall | White coverage, falling snowflakes | falling snow, silver-white landscape |

### Weather Derivation Rules

| Derived From Base Weather | Kept Unchanged | Change Items |
|---|---|---|
| Clear → Light mist | Building/layout | Added mist layer, blurred distance, reduced saturation |
| Clear → Light rain | Building/layout | Added rain streaks, ground reflections, cooler tones |
| Clear → Snowfall | Building/layout | Added snow accumulation, snowflakes, whiter tones |
| Vegetation must adapt to weather logic | — | Wet flower petals in rain, frost-covered bare branches in snow |

---

## 5. Angle Variants

### Angle Definitions

> Derivative images can switch along the following angle dimensions relative to the reference image. The caller supplies the reference image + target angle description; this file only defines the angle vocabulary and consistency constraints.

| Angle | Description | Prompt |
|---|---|---|
| Front view | Compared to the reference image, the line of sight faces the front of the scene | front view, eye level |
| Side (left/right) | Facing the scene's left/right side at 90° eye-level | left side view / right side view |
| Back/rear view | Facing the back of the scene at 180° | back view |
| Top-down view | High-position overview, showing the overall layout | high angle, bird's eye view |
| Low angle | Low-position upward view, emphasizing a tall subject | low angle, worm's eye view |
| Close push-in | Same direction but the lens pushes in, focusing on a local area | push-in, closer angle |
| Free angle | Any custom angle description supplied by the caller | injected as `{target angle}` |

### Angle Derivation Rules

| Item | Constraint |
|---|---|
| Reference consistency | Architectural structure/layout/material/tone/lighting/season/weather must match the reference image |
| Viewpoint | Same scene center point, only the angle switches; the line-of-sight height may adjust with the angle |
| Lighting logic | The reference image's light source direction stays fixed; after the angle switch, the light and shadow projection direction must be recalculated accordingly (maintaining physical plausibility) |
| Layout | Single frame (not a collage, not multi-view, not split-screen) |
| People | **Strictly prohibited from showing any person, human silhouette, or human outline** |
| Aspect ratio | Default 16:9 (or as set by the caller) |

---

## 6. Prompt Template

```
modern urban derivative scene image, based on the reference image,
real photography, photorealistic, shot on ARRI Alexa, 35mm film grain,
RAW photo, ultra realistic, hyper detailed,
shallow depth of field, natural lens vignette, subtle chromatic aberration, bokeh,
realistic photographic texture, film grain feel, natural lighting, physical light and shadow,
scene derivative design sheet, environment concept art, no people, no characters, no human figures,
keep the scene's spatial structure consistent,
{target angle (if any)}, {shot-type perspective (if any)}, {time-of-day description (if any)}, {weather description (if any)},
{foreground}, {midground}, {background},
{tone description}, {depth-of-field description (if any)}, {sky tone change (if any)}, {mood adjustment (if any)},
{weather visual characteristics (if any)}, {material surface change (if any)}, {vegetation adaptation description (if any)},
natural material wear marks, usage marks, wall peeling, metal oxidation,
natural light diffusion, volumetric light, Tyndall effect, caustic projections,
aerial perspective, ultra-clear texture detail,
single-frame composition, keep architectural structure/material/tone/lighting consistent with the reference image, only switch the viewpoint according to the target angle,
no people of any kind in the frame
no text of any kind should appear in the image
```


> **Usage note**: Based on the information provided by the user, determine for yourself which dimensions of change need to be applied (angle/shot-type/time-of-day/weather); fields for dimensions not mentioned can simply be left blank and omitted. There is no need to generate a separate template for each variant type.

---

## 7. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The scene's spatial structure remains consistent across all variants |
| R2 | Time-of-day variants must adjust the sky tone and mood |
| R3 | Weather variants must adapt the vegetation/material surfaces |
| R4 | The derivative image must be a "single frame," not a collage of multiple views/grid/split-screen |
| R5 | The derivative image must keep architectural structure/material/tone/lighting consistent with the reference image, only switching the viewpoint per the specified angle |
| R6 | **Strictly no people may appear** in the scene image |
| R7 | Determine the change dimensions (angle/shot-type/time-of-day/weather) based on the information provided by the user; dimensions not mentioned are left blank and omitted |
| R8 | Must include live-action photography keywords (real photography / photorealistic / RAW photo) |
| R9 | Must include lens optical characteristics (at least one of shallow depth of field / lens vignette / bokeh) |
| R10 | Materials must show natural wear/usage marks; a pristine, flawless "CG feel" is prohibited |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Inconsistent architectural structure/layout between variants |
| X2 | Weather contradicting the season (e.g., snowfall in summer) |
| X3 | Abrupt material/style shifts between variants |
| X4 | Any person, human shadow, human silhouette, or human outline appearing |
| X5 | The frame being assembled into a multi-view/grid/split-screen layout |
| X6 | A 3D render/CG animation/cartoon/game engine feel (do not use terms like 3D render, CGI, Unreal Engine, Unity) |
| X7 | Materials that are overly clean and perfect, with no usage marks or sense of age (avoid a "plastic feel") |
| X8 | Lighting that is overly even and flat, with no depth-of-field blur or lens optical characteristics |
