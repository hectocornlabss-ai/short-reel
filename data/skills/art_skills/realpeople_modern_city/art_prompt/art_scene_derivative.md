---
name: liveaction_urban_scene_derivative
description: Live-Action Urban scene derivative asset generation · Constraint manual
metaData: liveaction_urban_art_skills
---

# Live-Action Urban Scene Derivative Asset Generation · Constraint Manual

---

## 1. Derivation Principles

> A Live-Action Urban scene derivative is not "re-cutting camera angles on a rendered scene," but "the same genuine location, photographed again by the camera from a different position, at a different time, or in different weather."

1. **Spatial Anchoring** — The core spatial structure of the same scene must remain recognizable across all variants. The angle changed, the light changed, the weather changed — but it must still be clearly recognizable as "the same place"
2. **Focal-Length Narrative** — Shooting the same scene at different focal lengths tells different things. A wide angle speaks to "this person's lonely relationship with the city"; a mid-range focal length says "look at this corner"; a telephoto says "what's out there in the distance"
3. **Time of Day as Mood** — An office in the morning light and the same office late at night are the same space with two different moods. As the time of day changes, so does the light, and so does the scene's narrative function — it's not as simple as swapping a sky texture
4. **Weather as Story** — The same street is ordinary on a sunny day, melancholic in the rain, romantic or lonely in the snow. Weather is the scene's emotional filter, but it's not a filter in the digital sense — it's a genuine optical and environmental change
5. **Single-View Photography** — Every derivative variant is one independent, single panoramic photograph. Same space as the original scene's design image, but can use a different focal length, time of day, or weather

---

## 2. Focal-Length and Composition Variants — Different Gazes at the Same Space

### Composition Variant Definitions

| Variant | Focal Length | Scope | Narrative Function | Prompt |
|---|---|---|---|---|
| Wide Full View | 24-28mm | The scene's full scope + surrounding urban environment | Establishing spatial placement, presenting the relationship between the space and the city, making a person appear small if present here | A 24mm wide-angle full view, complete space + environmental relationship, full depth of field f/8-f/11 |
| Standard Panorama | 35mm | The scene presented in full | An eye-level equivalent viewpoint, an objective record of this location, the most "honest" composition | A 35mm standard panorama, an eye-level viewpoint, the location's complete appearance |
| Midground Focus | 50mm | The scene's core functional area/most recognizable portion | Focusing on the space's "heart" — an office's workstation area, a cafe's bar counter, a street intersection | A 50mm midground focus, the space's core narrative area |
| Close-up Detail | 85mm | One localized part of the space — a window, a lamp, a table | Drawing the eye to a narrative detail within the space — that unfinished cup of coffee, that blanket tossed on the sofa | An 85mm close-up, the space's narrative detail, shallow depth of field emphasizing the subject |
| Same Angle, Different Height | — | A change in viewpoint height | High angle — the gaze of fate; eye level — a human viewpoint; low angle — oppression or grandeur | A low-angle upward shot/a high-angle downward shot, maintaining the original spatial structure |

### Focal-Length Derivation Rules

| Deriving From Wide Full View | Kept Unchanged | Changed Elements |
|---|---|---|
| Wide → Standard Panorama | Spatial structure, lighting logic, time/weather, use marks | Focal length narrowed to 35mm, frame scope reduced without changing the space, perspective closer to the human eye |
| Standard Panorama → Midground Focus | Material texture, light direction, color tone, use marks | Focal length narrowed to 50mm, cropped to focus on the core area, depth of field moderately shallower |
| Midground → Close-up Detail | Material texture, prop placement, light direction | 85mm focal length, extremely shallow depth of field, naturally blurred background, emphasizing the narrative detail within the space |

---

## 3. Time-of-Day Variants — the Makeup Time Applies to a Space

> The same space, lit at different times of day, becomes an entirely different place. Below is the behavior of real light sources at key times.

| Time of Day | Light Recipe | The Space's Emotional Shift | Prompt |
|---|---|---|---|
| Early Morning | Low-angle warm-white morning light, hazy diffusion in the air, the space slightly cool, not fully awake | Quiet, held in anticipation, not yet filled with the day's order — "nothing has started yet" | An early-morning scene, low-angle morning light entering at a slant, the space slightly cool and not yet warmed, a quiet stillness with no one yet present |
| Morning | Daylight risen higher, cool, clear white, sharp shadows, clear materials | The establishment of order — the "default" state of a daytime scene | Morning daylight, the space bright and clear, a location in the midst of its daily operation |
| Midday | Overhead light dominant, short, dense shadows, strong material reflection if outdoors | A sense of pause — the gap of a midday break, the peak of the day repeated | Midday overhead light, the space entering its daytime pause, the quiet or brief relaxation of noon |
| Afternoon | Daylight leaning westward, warm tones intensifying, slanted light through a window or trees forming long shadows and light patches | Languid, time slowing down, everything softened in the afternoon — "the longest stretch of the day" | Slanted afternoon light, long shadows crossing the space, scattered light patches, a languid, warm afternoon |
| Golden Hour | Extremely warm, low-angle golden-orange light, shadows stretched to their longest, every surface gilded | Cherished — the most precious light of the day, fleeting warmth | Golden hour, warm golden light overflowing the space, every surface gilded, a fleeting warmth |
| Blue Hour | The sky deep blue-violet, natural light extremely dim and cool, artificial light sources just turning on, cool and warm coexisting | Transition — the day has ended, the night has not fully taken over, the briefest poetic moment | Blue hour, a deep blue-violet sky through doors and windows, artificial light sources just switching on, cool and warm light coexisting |
| Late Night | Only artificial light sources — a table lamp, a streetlight outside the window, a screen's cool glow | Loneliness or intimacy — the world has gone quiet, the space belongs to one person (or to no one) | A late-night scene, a single warm light source only (table lamp/streetlight outside the window), most of the area sunk into darkness, extremely quiet |

### Time-of-Day Derivation Rules

| Deriving From a Baseline Time | Kept Unchanged | Changed Elements |
|---|---|---|
| Daytime → Dusk (Golden Hour) | Spatial structure, furniture/object placement, building exterior | Light source color temperature warmed to 2800-3500K, shadows lengthened, bright surfaces gilded, artificial light sources gradually turning on |
| Daytime → Nighttime | Spatial structure, furniture/object placement, building exterior | Overall exposure lowered, artificial light sources fully on, neon/streetlights/indoor lights become the main light source, the view outside the window shifting from daytime to a night scene |
| Interior Daytime → Interior Late Night | Spatial structure, furnishing placement | Only minimal light sources remain (a table lamp/a streetlight outside the window), most of the area sunk into darkness, a sense of intimacy or loneliness |

---

## 4. Weather Variants — the Mood Weather Gives a Space

> The same street, the same window, becomes a different story in different weather.

| Weather | Spatial Change | Mood | Prompt |
|---|---|---|---|
| Sunny | Sharp light and shadow, clear materials, saturated colors | Everyday, bright, open | A sunny scene, ample sunlight, clearly defined light and shadow, clear material texture |
| Cloudy/Overcast | Soft light with no hard shadows, an overall cool-gray tone, even light | Restrained, calm, or a foreboding of oppression | Soft overcast light, no hard shadows, evenly diffused light, an overall cool-gray tone |
| Light Mist | Natural blur in the distance, sharpness up close, visible humidity in the air | Hazy, uncertain, poetic | A scene in light mist, the distance gradually fading into the fog, sharpness up close, visible humidity in the air |
| Light Rain | Rain streaks on window glass, reflections on wet ground, water droplets clinging to outdoor metal/leaves | Melancholic, contemplative, romantic, or a story's turning point | A scene in light rain, rain streaks on the window glass, natural reflections on wet ground, cool, damp air |
| Heavy Rain | A thick curtain of rain, reduced outdoor visibility, puddles and splashing on the ground, the visualization of the sound of rain | Isolation — indoors as a refuge, outdoors as nowhere to escape | A heavy-rain scene, a thick curtain of rain outside the window, splashing puddles on the ground, a sense of isolation between indoors and outdoors |
| Post-Rain | Everything damp, puddles still on the ground, clear air, sharp reflections, sunlight possibly breaking through the clouds | Renewal, clarity, an emotional cleansing | A post-rain scene, damp air, ground puddles reflecting the sky, the clarity of everything freshly washed |
| Light Snow | Falling snowflakes, a thin white dusting, warm light through the falling snow, the visible trajectory of drifting snow in the air | Quiet, gentle, romantic | A light-snow scene, sparse falling snowflakes, a thin white dusting on the ground, warm light through the falling snow, quiet and gentle |
| Heavy Snow | Snow covering surfaces, white dominating, the visualization of sound being absorbed | Solitude or romance — the world reduced to black and white | A heavy-snow scene, snow covering the ground and building edges, the world reduced to white, solitude or romance |

### Weather Derivation Rules

| Deriving From a Sunny Baseline | Kept Unchanged | Changed Elements |
|---|---|---|
| Sunny → Light Mist | Spatial structure, building exterior, object placement | Add layered fog, blur the distance, reduce saturation, the light source producing visible light rays (a genuine Tyndall effect, not a special effect) |
| Sunny → Light Rain | Spatial structure, building exterior, object placement | Add rain streaks outdoors, add genuine rain marks to glass, wet, reflective ground, a cooler color tone, water droplets clinging to vegetation |
| Sunny → Snow | Spatial structure, building exterior, object placement | Add falling/accumulated snow, a cooler white color tone, increased contrast against warm light sources, snow on tree branches/windowsills |
| Interior Sunny → Interior Rainy | Spatial structure, furnishing placement | The view outside the window shifts to a rain scene, rain marks on the window glass, interior light dimmer and cooler, the mood shifting from bright to melancholic |

---

## 5. Single-View Photography Specification — Shared by All Derivative Variants

> Every derivative variant is one independent, **single** panoramic photograph. Not a 2x2 four-view grid, not a multi-angle collage.

| Item | Photographic Requirement |
|---|---|
| Spatial Structure | The **same space** as the original scene's design image. The building structure/furnishing placement/object positions remain unchanged in principle — what changes is the focal length/time of day/weather |
| Focal Length | Depending on the variant type (wide full view → close-up detail), use 24mm/35mm/50mm/85mm |
| Depth of Field | Wide full view → full depth of field f/8-f/11; midground → moderately shallow depth of field f/4-f/5.6; close-up detail → shallow depth of field f/2.8 |
| Light Source | Sourced from genuine light — the time of day corresponding to the sun's height and color temperature, the weather corresponding to atmospheric scattering and occlusion, interiors corresponding to window light and artificial lamps |
| People | **All variants strictly prohibit the appearance of any person, human silhouette, or human-shaped outline** |
| Aspect Ratio | 16:9 or 3:2 widescreen, consistent with the original scene's design image |
| Color | Driven by the actual light source's color temperature, no filter applied |

---

## 6. Prompt Template

### Focal-Length Variant

```
Live-Action Urban scene derivative photography, based on the same space as the original scene {scene name}, a single still spatial photograph, not 3D rendered, not CG,
{wide full view/standard panorama/midground focus/close-up detail}, {24mm/35mm/50mm/85mm},
maintain the original scene's spatial structure, furnishing placement, and lighting logic unchanged,
{focal-length description}, {depth-of-field description}, {composition focus-area description},
{time of day + weather}, {light behavior description},
the space is unpopulated — strictly no person, human silhouette, or human-shaped outline of any kind,
genuine photographic quality, 35mm full-frame photographic texture, single spatial photography
```

### Time-of-Day Variant

```
Live-Action Urban scene derivative photography, based on the same space as the original scene {scene name},
the same camera position, the same focal length, only the time of day changes — from the original time to {new time of day},
maintain the spatial structure and object placement completely unchanged,
{the new time of day's light: direction, color temperature, intensity},
{the new time of day's spatial mood: quiet/warm/lonely/poetic},
{the on/off state and brightness change of artificial light sources},
the space is unpopulated — strictly no person, human silhouette, or human-shaped outline of any kind,
genuine photographic quality, single spatial photography
```

### Weather Variant

```
Live-Action Urban scene derivative photography, based on the same space as the original scene {scene name},
the same camera position, the same focal length, the same time of day — only the weather changes to {new weather},
maintain the spatial structure and object placement completely unchanged,
{the new weather's visual characteristics: rain streaks/snow/fog/wet ground/rain marks},
{the genuine change in material surfaces caused by the weather: a water film on metal/rain marks on glass/reflective puddles on the ground/water droplets on vegetation/accumulated snow},
{the mood shift brought by the weather},
the space is unpopulated — strictly no person, human silhouette, or human-shaped outline of any kind,
genuine photographic quality, single spatial photography
```

> **Usage Note**: The focal-length variant, time-of-day variant, and weather variant can be used individually or combined (e.g. "afternoon + light rain + midground"). Omit the fields for any dimension not involved in a given prompt.

### Negative Prompt

```
3D render, 3D modeling, CGI, Unreal Engine, Blender, PBR material, volumetric lighting, ambient occlusion, ray tracing, game engine, cartoon, anime, 2D, illustration, hand drawn, painting,
four views, grid layout, 2x2, turnaround, orthographic view, blueprint, multiple angles,
showroom, brand new, pristine, perfect, unrealistically clean, sterile, empty without reason,
people, person, human figure, silhouette, shadow figure, body, crowd,
dramatic sky replacement, unrealistic sky, composite, fake weather, Photoshop effect, filter effect,
period costume, ancient, xianxia, wuxia, Republic era, cyberpunk, sci-fi, Western fantasy, medieval, alternate world, non-Chinese city,
text, watermark, signature, logo, border, frame, UI element, HUD
```

---

## 7. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The scene's spatial structure must remain recognizable across all derivative variants — the same place must not become another place |
| R2 | The light source in a time-of-day variant must follow genuine physics — the sun's elevation angle determines color temperature and shadow length, artificial light sources switch on/off logically |
| R3 | A weather variant must correspondingly adapt the genuine physical changes on material surfaces — rain marks on glass/reflective puddles on the ground/water droplets on vegetation/accumulated snow |
| R4 | Must be a **single** panoramic photograph — a single view, not a 2x2 four-view grid, not multiple angles, not a turnaround |
| R5 | Must declare the light source — where the light comes from, its color temperature, what kind of source — it cannot be sourceless global illumination |
| R6 | Must retain the original space's use marks — time-of-day and weather variation must not "wash away" the space's wear and sense of age |
| R7 | **All variants strictly prohibit the appearance of any person, human silhouette, or human-shaped outline** |
| R8 | Must declare the core anchor of "live-action photography + not 3D rendered, not CG" |

### Strictly Prohibited

| No. | Prohibited |
|---|---|
| X1 | Strictly prohibit unrecognizable changes to the spatial structure — changing the time/weather/focal length must not "change the location" |
| X2 | Strictly prohibit all CG terminology such as "3D rendering / 3D modeling / CG / UE engine / Blender / PBR materials / volumetric light / AO" |
| X3 | Strictly prohibit non-photographic media such as "2D hand-drawn / illustration / animation / anime" |
| X4 | Strictly prohibit "four views / 2x2 grid / multiple angles / turnaround / orthographic view / blueprint" — single image only |
| X5 | Strictly prohibit non-contemporary-urban scenes such as "ancient style / period / xianxia / wuxia / Republic-era / cyberpunk / sci-fi / Western fantasy / alternate world" |
| X6 | Strictly prohibit "the appearance of any person/human silhouette/human-shaped outline/shadow figure/limbs" |
| X7 | Strictly prohibit "a sky-texture-swap-style sky change / a Photoshop-composited feel / an applied filter" — weather changes must be genuine optical and environmental changes |
| X8 | Strictly prohibit "an unclear light source / undirected global uniform lighting" |
| X9 | Strictly prohibit "a time-of-day variant that doesn't adjust the on/off state and brightness of artificial light sources" — evening must have lights turned on, late night must not be fully bright |
| X10 | Strictly prohibit "a weather variant erasing the space's everyday use marks" — a wall must still be mottled after rain, the ground beneath snow must still show wear |
| X11 | Strictly prohibit "blown-out highlights / crushed black shadows / no tonal layering" |
| X12 | Strictly prohibit "watermarks / text / logos / signatures / borders / traces of AI generation" |
