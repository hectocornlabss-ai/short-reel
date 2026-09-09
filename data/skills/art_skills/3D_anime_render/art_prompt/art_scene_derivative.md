# 3D Animation Rendering Urban Scene Derivative Asset Generation · Constraint Manual

---

## 1. Derivative Principles

1. **Spatial consistency** — the architectural structure/layout/material must remain consistent across all variants
2. **Shot-size driven** — the same scene shows different narrative functions through different shot sizes
3. **Time-of-day switching** — the same space presents different lighting atmospheres at different times of day
4. **Weather variation** — the same space presents different moods under different weather
5. **Cel-shading as anchor** — all variants must maintain the 3D animation rendering + cel-shaded style, rejecting photorealistic photography/CG animation feel; maintain lens characteristics and lighting consistency
6. **Unified urban atmosphere** — all variants must maintain a modern urban style and warm color palette

---

## 2. Shot-Size Variants

### Shot-Size Definitions

| Shot size | Range | Narrative function | Prompt |
|---|---|---|---|
| Extreme wide shot | Full scene + surrounding environment | Establish spatial sense, orientation | extreme wide shot, establishing shot |
| Wide shot | Full scene presentation | Show spatial structure | wide shot, full scene |
| Medium shot | A local area of the scene | Focus on a functional area | medium shot |
| Close shot | Scene detail | Material/atmosphere prop closeup | close shot |
| Extreme closeup | Extreme local detail | Material texture/key prop | extreme closeup |

### Shot-Size Derivative Specification

| Deriving from base image | Keep unchanged | Allowed to change |
|---|---|---|
| Extreme wide → Wide | building exterior, overall layout | narrower angle, added foreground |
| Wide → Medium | material, tone, lighting | crop/focus, depth-of-field change |
| Medium → Close | material, tone | shallow depth of field, blurred background |
| Close → Extreme closeup | material texture | extremely shallow depth of field, macro feel |

---

## 3. Time-of-Day Variants

### Time-of-Day Definitions

| Time of day | Visual characteristics | Prompt |
|---|---|---|
| Early morning | Light mist, soft light, tone mixing cool and warm (cel-shaded) | faint morning light, early morning mist |
| Midday | Bright, short shadows, vivid colors (cel-shaded) | midday sun, bright light |
| Dusk | Golden tone, long shadows, gradient sky (cel-shaded) | golden dusk glow, golden hour |
| Night (moonlight) | Cool blue tone, quiet and cool (cel-shaded) | clear moonlight, moonlight |
| Night (city lights) | Warm yellow accents, light-dark contrast (cel-shaded) | scattered city lights, flickering candlelight |

### Time-of-Day Derivative Specification

| Deriving from base time | Keep unchanged | Change items |
|---|---|---|
| Day → Dusk | building/layout/material | sky tone warms, shadows lengthen (cel-shaded) |
| Day → Night | building/layout/material | overall darkens, adds city-light/moonlight atmosphere (cel-shaded) |
| Indoor day → Indoor night | spatial structure, furniture | overall tone warms, adds candlelight/lantern elements (cel-shaded) |

---

## 4. Weather Variants

### Weather Definitions

| Weather | Visual characteristics | Prompt |
|---|---|---|
| Sunny | Bright, clear shadows (cel-shaded) | clear sunny sky, bright sunshine |
| Overcast | Even light, no hard shadows (cel-shaded) | overcast soft light, overcast |
| Light mist | Reduced visibility, hazy air (cel-shaded) | drifting mist, hazy fog |
| Light rain | Water droplets, wet reflections, rain streaks (cel-shaded) | fine silky rain, light rain veil |
| Falling snow | White covering, falling snowflakes (cel-shaded) | falling snow, silver-clad landscape |

### Weather Derivative Specification

| Deriving from base weather | Keep unchanged | Change items |
|---|---|---|
| Sunny → Light mist | building/layout | add mist layer, blurred distance, reduced saturation (cel-shaded) |
| Sunny → Light rain | building/layout | add rain streaks, wet ground reflections, cooler tone (cel-shaded) |
| Sunny → Falling snow | building/layout | add snow accumulation, snowflakes, whiter tone (cel-shaded) |
| Vegetation must adapt to weather logic | — | rain-wet petals, frost-covered bare branches in snow (cel-shaded) |

---

## 5. Angle Variants

### Angle Definitions

> Derivative images can switch along the following angle dimensions relative to a reference image. The caller supplies the reference image + target angle description; this document only defines the angle vocabulary and consistency constraints.

| Angle | Description | Prompt |
|---|---|---|
| Front view | Facing the front of the scene compared to the reference image | front view, eye level |
| Side (left/right) | 90° eye-level toward the scene's left/right | left side view / right side view |
| Back view | 180° toward the back of the scene | back view |
| High angle | High vantage point, showing overall layout | high angle, bird's eye view |
| Low angle | Low vantage point, emphasizing a tall subject | low angle, worm's eye view |
| Push-in | Same direction but the camera pushes in, focusing on a local area | push-in, closer angle |
| Free angle | Any angle description custom-defined by the caller | injected as `{target angle}` |

### Angle Derivative Specification

| Item | Constraint |
|---|---|
| Reference consistency | Architectural structure/layout/material/tone/lighting/season/weather must match the reference image (cel-shaded treatment) |
| Viewpoint | Same scene center point, only the angle switches; viewing height may adjust with the angle |
| Lighting logic | The reference image's light-source direction stays fixed; after switching angles the light-and-shadow projection direction must be recalculated accordingly (cel-shaded treatment) |
| Layout | Single frame (not a collage, not multi-view, not split-screen) |
| People | **Strictly prohibit any person, human shadow, or human silhouette** |
| Frame ratio | Default 16:9 (or as set by the caller) |

---

## 6. Prompt Template
```
3D animation rendering, cinema-grade lighting, vibrant cel-shaded texture, high-detail materials, joyful healing atmosphere, cartoon urban style, high-detail cartoon materials, moderate cartoon proportions, warm color palette, 8K ultra-high-definition, cinema-grade composition, soft lighting layers, bright cartoon rendering style, warm and healing, derivative scene image, based on the reference image,
anime style, cel-shaded, 3D animation render,
film lighting, warm sunset lighting,
scene derivative design sheet, environment concept art, no people, no characters, no human figures,
maintain consistent spatial structure of the scene,
{target angle (if any)}, {shot-size viewpoint (if any)}, {time-of-day description (if any)}, {weather description (if any)},
{foreground}, {midground}, {background},
{tone description}, {depth-of-field description (if any)}, {sky tone change (if any)}, {atmosphere adjustment (if any)},
{weather visual characteristics (if any)}, {material surface change (if any)}, {vegetation adaptation description (if any)},
natural wear on materials, lived-in wear, natural fabric draping (cel-shaded),
diffused natural light, volumetric light, cel-shaded lighting effects, cel-shaded shadows,
aerial perspective, clear texture, cel-shaded treatment,
single-frame composition, matching the reference image's architectural structure/material/tone/lighting, switching viewpoint only by the target angle,
no people appear in the frame,
cel-shaded rendering style, soft lighting, moderate cartoon proportions, high-detail cartoon materials,
warm color palette, dusk glow atmosphere, joyful healing atmosphere,
8K ultra-high-definition, cinema-grade composition,
no text of any kind in the image
```

> **Usage note**: judge which dimensions of variation (angle/shot-size/time-of-day/weather) apply based on the information provided by the user; leave the corresponding field blank/omitted for any dimension not mentioned. There is no need to generate a separate template for every variant.

---

## 7. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The scene's spatial structure must remain consistent across all variants |
| R2 | Time-of-day variants must adjust the sky tone and atmosphere (cel-shaded) |
| R3 | Weather variants must adapt vegetation/material surfaces (cel-shaded) |
| R4 | The derivative image must be "single-frame"; multi-view/grid/split-screen collages are prohibited |
| R5 | The derivative image must match the reference image's architectural structure/material/tone/lighting, switching viewpoint only by the specified angle |
| R6 | **Strictly prohibit any person** appearing in the scene image |
| R7 | Judge the dimension(s) of variation (angle/shot-size/time-of-day/weather) based on user-provided information; leave unmentioned dimensions blank/omitted |
| R8 | Must include 3D animation rendering keywords (cel-shaded, 3D animation render, anime style) |
| R9 | Must include a lens optical characteristic (at least one of shallow depth of field / lens vignette / bokeh, cel-shaded treatment) |
| R10 | Materials must carry natural wear/signs of age; a pristine flawless "CG feel" is prohibited, but must be presented in cel-shaded form |
| R11 | Must maintain cel-shaded rendering style consistency; mixing in photorealistic elements is prohibited |
| R12 | Must include warm color palette, dusk glow atmosphere keywords |
| R13 | Must include 8K ultra-high-definition, cinema-grade composition keywords |
| R14 | Must include cinema-grade lighting, joyful healing atmosphere keywords |

### Prohibited

| No. | Prohibited item |
|---|---|
| X1 | Inconsistent architectural structure/layout between variants |
| X2 | Weather contradicting the season (e.g. snow in summer, within cel-shaded limits) |
| X3 | Abrupt material/style shifts between variants |
| X4 | Any person, human shadow, human silhouette, or human outline appearing |
| X5 | The image collaged into multi-view/grid/split-screen layout |
| X6 | 3D rendering/CG animation/cartoon/game engine texture (terms such as 3D render, CGI, Unreal Engine, Unity are prohibited); must clearly read as cel-shaded animation rendering |
| X7 | Material that is overly clean and perfect, with no signs of use or age (avoid a "plasticky feel"); must be cel-shaded |
| X8 | Lighting that is overly flat and even, with no depth-of-field blur or lens optical characteristics |
| X9 | Using photorealistic photography terms (such as real photography, photorealistic, RAW photo, etc.) |
| X10 | Ancient/futuristic elements, non-modern urban style |
| X11 | Cool-toned/night-dominant color palette, not a warm-toned/dusk atmosphere |
| X12 | Missing the joyful healing atmosphere keywords |
