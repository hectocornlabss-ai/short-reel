---
name: art_scene
description: Scene image generation · Constraint manual
metaData: art_skills
---

# Scene Image Generation · Constraint Manual

---

## 1. Scene Aesthetic Principles

1. **Spatial Narrative** — Scenes carry emotional and narrative function; they are not mere backdrops
2. **Layered Depth** — All scenes must have foreground/midground/background layers; flatness is forbidden
3. **Texture Above All** — Wood/stone/fabric/water-surface and other material textures must be ultra-clear
4. **3D as the Anchor** — Every frame is held to the 3D-rendering standard; flat texture-map/CG-animation feel is rejected; pursue cinematic rendering effects such as volumetric lighting, ambient occlusion, and depth-of-field blur

---

## 2. Seasonal Color Mapping

| Season | Primary Tone | Secondary Tone | Prompt |
|---|---|---|---|
| Spring | Jade green + vermilion | Moon white, gamboge yellow | vivid spring green, blazing peach blossoms |
| Summer | Jade green + indigo | Moon white, jade green | jade-green summer lotus, dense shade |
| Autumn | Ochre + golden yellow | Vermilion, ochre | crimson autumn maple, falling golden leaves |
| Winter | Moon white + indigo | Ink black, jade green | pristine winter snow, frost-laced bare branches |

---

## 3. Interior Scenes

### Spatial Specification

| Dimension | Constraint | Prompt |
|---|---|---|
| Style | Ancient residence/palace/study/boudoir, Ming-Qing to Tang-Song styling | ancient {dynasty}-style |
| Material | Predominantly wood, with stone/jade/silk/gauze as accents | sandalwood furniture, jade screen, silk gauze curtains |
| Tone | Traditional Chinese color palette + moon-white gauze drapes + vermilion lacquered wood | warm wood tones, elegant plain furnishings |
| Depth | Foreground/midground/background layering | foreground {element}, midground {element}, background {element} |
| Texture | Discernible wood grain/fabric drape/porcelain sheen | clear texture, refined material detail |
| Lighting | Predominantly natural light sources (window light/candlelight), volumetric lighting, ambient occlusion | diffused natural light, flickering candlelight, volumetric lighting |
| Lens Feel | Depth-of-field blur on foreground/background, lens vignette, subtle chromatic aberration | depth of field, lens vignette, chromatic aberration |
| Imperfection | Wear marks on wood surfaces, weathering on stone surfaces, natural creasing on fabric | traces of time, natural wear, naturally draping fabric folds |

### Interior Type Quick Reference

| Type | Core Elements | Mood Words |
|---|---|---|
| Boudoir/Bedroom | Gauze canopy, dressing table, bronze mirror, vase | warm and intimate, gently draping gauze |
| Study | Bookshelf, scroll, ink and brush, chessboard | quiet and refined, lingering ink fragrance |
| Great Hall/Main Hall | Tall pillars, plaque, curtains, candle stand | solemn and magnificent, grand atmosphere |
| Courtyard Corridor | Corridor pillars, stone railing, flowers and trees, lanterns | winding secluded path, swaying lantern shadows |
| Kitchen/Dining Hall | Stove, steamer, tableware | homely warmth, everyday coziness |

---

## 4. Exterior Scenes

### Spatial Specification

| Dimension | Constraint | Prompt |
|---|---|---|
| Type | Courtyard/mountain forest/streamside/ancient bridge/marketplace | {scene}, {season}, {time} |
| Weather | Clear/overcast/light mist/light rain/falling snow | mist drifting, fine rain like silk threads |
| Vegetation | Plum/bamboo/pine/peach blossom/willow/lotus (must match the season) | blazing peach blossoms, dense green bamboo grove |
| Water Bodies | Streams/lakes/waterfalls need light and shadow reflection | babbling stream, mirror-like lake surface |
| Architecture | Upturned eaves and brackets, gray tile and white walls, stone bridges and wooden pavilions | upturned flying eaves, stone arch bridge |
| Air Quality | Must include aerial perspective, volumetric lighting, blurred distant view | distant mountains hazy blue, aerial perspective, volumetric lighting |
| Lighting | Natural light as the sole light source; sunlight/moonlight must include volumetric light and scattering | natural lighting, volumetric lighting, depth-of-field blur |
| Lens Feel | Depth-of-field blur, lens vignette, chromatic aberration, bokeh | depth of field, bokeh, lens flare, vignette |
| Imperfection | Moss/weathering on stone surfaces, cracking/patina on wood surfaces, chipped tiles/moss traces | mottled moss, weathering marks, patina of time |

### Exterior Type Quick Reference

| Type | Core Elements | Mood Words |
|---|---|---|
| Courtyard Garden | Rockery, pond, flowers and trees, stone path | dappled flower shadows, winding secluded path |
| Mountain Forest & Bamboo Sea | Ancient trees, bamboo grove, mountain rocks, clouds and mist | layered peaks, drifting mist |
| Streamside/Lakeside | Stream, pebbles, weeping willow, lotus flowers | babbling stream, swaying willow shadows |
| Ancient Bridge & Long Pavilion | Stone arch bridge, long pavilion, willow trees | ancient road by the long pavilion, swaying willows |
| Marketplace Street | Wine-shop banners, street stalls, lanterns | bustling market, lively everyday scene |
| Rooftop Terrace | Roof tiles, flying eaves, night sky | drinking alone under the moon, gentle breeze |

---

## 5. Hero Shot Specification

### View Definition

> A single-frame hero shot captured from the scene's most representative angle, carrying the spatial narrative and compositional focus.

| Item | Constraint | Prompt |
|---|---|---|
| Viewpoint | A natural observation angle whose composition best conveys the scene's subject and depth | hero shot, representative angle |
| Viewpoint Height | Default eye-level height for the human eye; special scenes may use a high or low angle | eye level (default) |
| Composition | Subject centered or following the rule of thirds; clear foreground/midground/background layering | balanced composition |

### Composition Specification

| Item | Constraint |
|---|---|
| Layout | Single frame (not a collage, not multi-view, not split-screen) |
| People | **No person, human silhouette, or human figure outline may appear** |
| Consistency | Unified style/material/tone/lighting |
| Lighting | Single light-source logic, consistent light-and-shadow direction |
| Aspect Ratio | 16:9 by default (or as set by the caller) |

---

## 6. Prompt Template

Ancient-style scene hero-shot concept art,
3D rendering style, high-precision modeling, PBR materials, Chinese Traditional 3D, cinematic-grade lighting,
3D rendered, volumetric lighting,
depth of field, natural lens vignette, subtle chromatic aberration, bokeh,
3D-rendered texture, volumetric lighting, natural lighting, physically based light and shadow,
scene design sheet, environment concept art, no people, no characters, no human figures,
{interior/exterior}, {scene type}, {dynasty style}, {season + time},
foreground: {element}, midground: {element}, background: {element},
{tone description}, {weather/atmosphere elements},
{material description}, aerial perspective, ultra-clear texture detail,
natural material wear marks, patina of time, weathered moss, naturally draping fabric folds,
volumetric lighting, ambient occlusion, diffused natural light, soft light and shadow,
single-frame composition, natural observation angle, composition that represents the scene's subject and shows foreground/midground/background layering,
no people of any kind in the frame,
no text of any kind in the image

---

## 7. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The scene must have "foreground/midground/background layering" |
| R2 | Exteriors must include "aerial perspective" |
| R3 | The scene image must be a "single-frame hero shot" — no collaging multi-view/split-screen/grid layouts |
| R4 | The composition must represent the scene's subject and show foreground/midground/background layering |
| R5 | **No person may appear** in the scene image |
| R6 | Must include 3D-rendering keywords (3D rendered / volumetric lighting / PBR materials) |
| R7 | Must include lens optical characteristics (at least one of depth of field / lens vignette / bokeh) |
| R8 | Materials must show natural wear/traces of time; a pristine, flawless "CG look" is prohibited |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Pure white/pure black background, or no scene at all |
| X2 | Extreme weather (storm/thunder/blizzard, unless required by the story) |
| X3 | A scene with no depth/no layering |
| X4 | Vegetation/weather contradicting the season |
| X5 | Any appearance of a person, human silhouette, human shadow, or human figure outline |
| X6 | The frame collaged into a multi-view/grid/split-screen layout |
| X7 | Low-precision modeling/rough textures/plastic texture (words like low-poly, rough modeling are forbidden) |
| X8 | Materials that are overly clean and perfect, with no trace of use or age (avoid a "plastic feel") |
| X9 | Lighting that is overly flat and even, with no depth-of-field blur or lens optical characteristics |
