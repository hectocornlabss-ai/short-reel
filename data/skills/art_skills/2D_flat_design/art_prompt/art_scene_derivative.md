# Scene Derivative Asset Generation · Flat Style Constraint Manual

---

## 1. Derivative Principles

1. **Spatial consistency** — architectural structure/layout/material must remain consistent across all variants
2. **Shot-size driven** — the same scene shows different narrative functions through different shot sizes
3. **Time-of-day switching** — the same space presents different color-block tones at different times of day
4. **Weather variation** — the same space presents different color moods under different weather
5. **Flat as the anchor** — all variants must maintain a flat vector illustration texture, rejecting 3D rendering/CG animation feel; keep clean lines and solid color fill

---

## 2. Shot-Size Variants

### Shot-size definitions

| Shot size | Scope | Narrative function | Prompt |
|---|---|---|---|
| Extreme wide shot | Full scene + surrounding environment | Establishes sense of space, orientation | extreme wide shot, extreme wide, flat extreme wide |
| Wide shot | Complete scene presentation | Shows spatial structure | wide shot, wide, flat wide |
| Medium shot | Partial area of the scene | Focuses on a functional area | medium shot, medium, flat medium |
| Close shot | Scene detail | Color block/mood prop closeup | close shot, close, flat close |
| Extreme closeup | Extremely localized detail | Color block texture/key prop | extreme closeup, extreme close, flat extreme close |

### Shot-size derivation rules

| Deriving from base image | Kept unchanged | Allowed to change |
|---|---|---|
| Extreme wide → wide | Building exterior, overall layout | Narrower angle, added foreground color blocks |
| Wide → medium | Material, tone, lighting | Cropped focus, solid color changes |
| Medium → close | Material, tone | Solid color focus, background color blocks |
| Close → extreme close | Color block texture | Solid color focus, macro color blocks |

---

## 3. Time-of-Day Variants

### Time-of-day definitions

| Time of day | Visual characteristics | Prompt |
|---|---|---|
| Early morning | Flat tone, light-colored blocks | flat early morning, light morning color |
| Midday | Flat bright, solid color blocks | flat midday, solid color bright |
| Dusk | Flat gold, warm color blocks | flat dusk, warm golden glow |
| Night (moonlight) | Flat cool blue, dark color blocks | flat moonlight, cool blue moon color |
| Night (lamplight) | Flat warm yellow, dark background | flat lamplight, warm yellow dark base |

### Time-of-day derivation rules

| Deriving from base time | Kept unchanged | Change item |
|---|---|---|
| Daytime → dusk | Building/layout/material | Sky color block warmed, shadow color block |
| Daytime → nighttime | Building/layout/material | Overall color block darkened, add lamplight/moonlight color block |
| Indoor daytime → indoor nighttime | Spatial structure, furniture | Overall color block warmed, add candlelight/lantern color block |

---

## 4. Weather Variants

### Weather definitions

| Weather | Visual characteristics | Prompt |
|---|---|---|
| Sunny | Flat bright, solid color blocks | flat sunny, solid color sunny day |
| Overcast | Flat even, gray color blocks | flat overcast, gray soft light |
| Light mist | Flat hazy, low-saturation color blocks | flat light mist, hazy color blocks |
| Light rain | Flat rain streaks, damp color blocks | flat light rain, damp color blocks |
| Falling snow | Flat white, covering color blocks | flat falling snow, white coverage |

### Weather derivation rules

| Deriving from base weather | Kept unchanged | Change item |
|---|---|---|
| Sunny → light mist | Building/layout | Add flat mist layer, background color block blurred, saturation lowered |
| Sunny → light rain | Building/layout | Add flat rain streaks, ground color block, tone shifted cooler |
| Sunny → falling snow | Building/layout | Add flat snow accumulation, snowflake color block, tone shifted whiter |
| Vegetation must adapt to weather logic | — | flat rain color, flat snow color |

---

## 5. Angle Variants

### Angle definitions

> Derivative images shift along the following angle dimensions relative to the reference image. The caller supplies the reference image + target angle description; this document only defines the angle vocabulary and consistency constraints.

| Angle | Description | Prompt |
|---|---|---|
| Front view | Compared to the reference image, the viewpoint faces the front of the scene | front view, eye level |
| Side (left/right) | Facing the scene's left/right side at 90°, eye level | left side view / right side view |
| Back/rear view | Facing the rear of the scene at 180° | back view |
| High angle | Elevated viewpoint, showing overall layout | high angle, bird's eye view |
| Low angle | Low viewpoint looking up, emphasizing a tall subject | low angle, worm's eye view |
| Push-in closeup | Same direction but lens pushed in, focused on a detail | push-in, closer angle |
| Free angle | Any custom angle description supplied by the caller | injected as `{target angle}` |

### Angle derivation rules

| Item | Constraint |
|---|---|
| Reference consistency | Architectural structure/layout/material/tone/season/weather must match the reference image |
| Viewpoint | Same scene center point, only the angle changes; eye-level height may adjust with the angle |
| Lighting logic | Keep the flat, no-lighting logic, consistent with the reference image |
| Layout | Single frame (not a collage, not multi-view, not split-screen) |
| People | **No person, human silhouette, or human outline of any kind may appear** |
| Aspect ratio | Default 1:1 (or as set by the caller) |

---

## 6. Prompt Template

```
flat ancient-style derivative scene image, based on the reference image,
2d flat design, vector art, flat illustration,
minimalist, clean lines, solid colors,
flat scene derivative, environment concept art, no people, no characters, no human figures,
keep the scene's spatial structure consistent,
{target angle (if any)}, {shot-size viewpoint (if any)}, {time-of-day description (if any)}, {weather description (if any)},
{foreground color block}, {midground color block}, {background color block},
{tone description}, {color block change (if any)}, {sky color block change (if any)}, {mood adjustment (if any)},
{weather visual characteristics (if any)}, {material color block change (if any)}, {vegetation adaptation description (if any)},
no signs of age, no wear, flat perfect,
no lighting, no shadows, flat solid color,
no perspective, solid color fill,
single-frame composition, keep architectural structure/material/tone consistent with the reference image, only shift viewpoint per the target angle,
no people of any kind in the frame
no text of any kind in the image
```

> **Usage note**: Based on the information the user provides, judge for yourself which dimensions of change to apply (angle/shot size/time of day/weather); leave the field for any unmentioned dimension blank/omitted. No need to generate a separate template for every variant.

---

## 7. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The scene's spatial structure must remain consistent across all variants |
| R2 | Time-of-day variants must adjust the color block tone and mood |
| R3 | Weather variants must adapt the color block/material surface |
| R4 | The derivative image must be a "single frame" — no collaging of multi-view/grid/split-screen |
| R5 | The derivative image must keep architectural structure/material/tone consistent with the reference image, shifting viewpoint only per the specified angle |
| R6 | **No person may appear** in the scene image |
| R7 | Judge for yourself which dimensions to change (angle/shot size/time of day/weather) based on the information provided; leave unmentioned dimensions blank/omitted |
| R8 | Must specify "flat style" keywords (2d flat design, vector art) |
| R9 | Must specify "no lighting, no gradients" |
| R10 | Materials must be solid color fill; complex texture/sense of age is prohibited |

### Strictly Prohibited

| No. | Prohibited |
|---|---|
| X1 | Inconsistent architectural structure/layout between variants |
| X2 | Weather contradicting the season (e.g., snow falling in summer) |
| X3 | Abrupt material/style shifts between variants |
| X4 | Any person, human silhouette, or human outline appearing |
| X5 | The frame being collaged into multi-view/grid/split-screen layout |
| X6 | 3D rendering/CG animation/cartoon/game-engine texture (words like 3D render, CGI, Unreal Engine, Unity are prohibited) |
| X7 | Material that is overly complex or color blocks that are not clearly differentiated |
| X8 | Adding lighting/shadow/gradient/3D effects |
