---
name: art_scene
description: Scene image generation · Constraint manual
metaData: art_skills
---

# Scene Image Generation · Constraint Manual

---

## 1. Scene Aesthetic Principles

1. **Spatial narrative** — The scene carries emotional and narrative function; it is not a plain backdrop
2. **Depth of layering** — Every scene must have foreground/midground/background; flatness is forbidden
3. **Texture above all** — Material texture such as wood/stone/fabric/water surfaces must be ultra-clear
4. **Anime as the anchor** — Every frame is held to the guofeng anime standard; 3D-realistic/CG-animation texture is rejected. Aim for delicate lines, cel-shaded flat color, and Japanese-style rendering

---

## 2. Seasonal Color-Tone Mapping

| Season | Primary Tone | Secondary Tone | Prompt |
|---|---|---|---|
| Spring | Jade green + vermilion | Moon white, gamboge | vivid spring green, blazing peach blossoms |
| Summer | Jade green + indigo blue | Moon white, jade green | jade-green summer lotus, dense cool shade |
| Autumn | Ochre + golden yellow | Vermilion, ochre | red autumn maples, drifting golden leaves |
| Winter | Moon white + indigo blue | Ink black, jade green | plain white winter snow, frost-laced bare branches |

---

## 3. Indoor Scenes

### Spatial Specification

| Dimension | Constraint | Prompt |
|---|---|---|
| Style | Classical residence/palace/study/boudoir, Ming-Qing to Tang-Song eras | ancient {dynasty} style |
| Material | Primarily wood, with stone/jade/silk/gauze as secondary | sandalwood furniture, jade screen, silk gauze curtains |
| Tone | Traditional Chinese color tones + moon-white gauze curtains + vermilion lacquered wood | warm wood tones, understated elegant furnishings |
| Depth | Foreground/midground/background layering | foreground {element}, midground {element}, background {element} |
| Texture | Distinguishable wood grain/fabric drape/porcelain sheen | clear texture, delicate feel |
| Lighting | Primarily natural light sources (window light/candlelight), soft light and shadow | diffused natural light, flickering candlelight, soft light and shadow |
| Lens feel | Cel-shaded blur for foreground/background, clean lines | cel shading wash, clear lines |
| Imperfection | Wear marks on wood surfaces, weathering on stone surfaces, natural creases in fabric | marks of time, natural wear, naturally draping fabric folds |

### Indoor Type Quick Reference

| Type | Core Elements | Mood Words |
|---|---|---|
| Boudoir/bedroom | Gauze canopy, dressing table, bronze mirror, vase | warm and intimate, lightly hanging gauze curtains |
| Study | Bookshelf, scrolls, ink and brush, chessboard | quiet and refined, ink fragrance lingering |
| Great hall/main hall | Tall pillars, plaque, curtains, candlestands | solemn and magnificent, grand atmosphere |
| Courtyard corridor | Corridor pillars, stone railings, flowers and trees, lanterns | a winding path to a secluded place, swaying lantern light |
| Kitchen/dining hall | Stove, steamer, tableware | homely and lived-in, warm daily life |

---

## 4. Outdoor Scenes

### Spatial Specification

| Dimension | Constraint | Prompt |
|---|---|---|
| Type | Courtyard/mountain forest/streamside/ancient bridge/market | {scene}, {season}, {time} |
| Weather | Clear/overcast/light mist/light rain/falling snow | mist lingering, light rain like silk threads |
| Vegetation | Plum/bamboo/pine/peach blossom/willow/lotus (must match the season) | blazing peach blossoms, lush bamboo groves |
| Water bodies | Streams/lakes/waterfalls need light-and-shadow reflection | babbling stream, mirror-like lake surface |
| Architecture | Upturned eaves and brackets, gray tiles and white walls, stone bridges and wooden pavilions | upturned flying eaves, stone arch bridge |
| Atmosphere | Must have aerial perspective, blurred distant scenery | distant mountains hazy blue-gray, aerial perspective |
| Lighting | Natural light as the sole light source; sunlight/moonlight must have a Japanese-style rendering effect | natural lighting, Japanese-style rendering, soft light and shadow |
| Lens feel | Cel-shaded blur, clean lines | cel shading wash, clear lines |
| Imperfection | Moss/weathering on stone surfaces, patina on wood surfaces, chipped tiles | mottled moss, weathering marks, patina of time |

### Outdoor Type Quick Reference

| Type | Core Elements | Mood Words |
|---|---|---|
| Courtyard garden | Rockery, pond, flowers and trees, stone path | dappled flower shadows, a winding path to seclusion |
| Mountain bamboo sea | Ancient trees, bamboo forest, mountain rocks, clouds and mist | peak upon peak, misty clouds drifting |
| Streamside/lakeside | Stream, pebbles, weeping willow, lotus flowers | babbling stream, swaying willow shadows |
| Ancient bridge and pavilion | Stone arch bridge, roadside pavilion, willow trees | ancient road pavilion, swaying willow branches |
| Market street | Wine banners, street vendors, lanterns | bustling marketplace, lively everyday atmosphere |
| Rooftop terrace | Roof tiles, flying eaves, night sky | drinking alone under the moon, a gentle breeze passing |

---

## 5. Hero Shot Specification

### View Definition

> A single hero shot, captured from the scene's most representative angle, carrying the spatial narrative and compositional focal point.

| Item | Constraint | Prompt |
|---|---|---|
| Viewpoint | Natural observational angle; composition best conveys the scene's subject and depth | hero shot, representative angle |
| Viewpoint height | Default eye-level height; special scenes may use a high or low angle | eye level (default) |
| Composition | Subject centered or following the rule of thirds, with clear foreground/midground/background layering | balanced composition |

### Composition Specification

| Item | Constraint |
|---|---|
| Layout | Single frame (not a collage, not multi-view, not a split screen) |
| Characters | **Strictly no person, human silhouette, or human figure outline of any kind** |
| Consistency | Unified style/material/tone/lighting |
| Lighting | Single-light-source logic, consistent shadow direction |
| Aspect ratio | Default 16:9 (or as set by the caller) |

---

## 6. Prompt Template

Guofeng anime scene hero-shot concept art,
guofeng anime, new Chinese-chic aesthetics, Japanese-style anime rendering, cel-shaded flat color, delicate brushwork,
Japanese anime style, cel shading, fine brushstrokes,
cel-shaded flat color, delicate lines, natural lighting, Japanese-style rendering,
scene design sheet, environment concept art, no people, no characters, no human figures,
{indoor/outdoor}, {scene type}, {dynasty style}, {season + time},
foreground: {element}, midground: {element}, background: {element},
{tone description}, {weather/mood elements},
{material description}, aerial perspective, ultra-clear texture detail,
natural material wear marks, patina of time, naturally draping fabric folds,
soft light and shadow, Japanese-style rendering, diffused natural light, delicate texture,
single-frame composition, natural observational angle, composition represents the scene's subject and shows foreground/midground/background layering,
no person of any kind in the frame
no text of any kind in the image

---

## 7. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The scene must have "foreground/midground/background layering" |
| R2 | Outdoor scenes must include "aerial perspective" |
| R3 | The scene image must be a "single-frame hero shot"; multi-view collages/split screens/grids are forbidden |
| R4 | The composition must represent the scene's subject and show foreground/midground/background layering |
| R5 | **Strictly no person of any kind** may appear in the scene image |
| R6 | Must include guofeng anime keywords (Chinese style anime / cel shading / fine brushstrokes) |
| R7 | Must include lens/optical characteristics (cel-shaded flat color / delicate lines / Japanese-style rendering) |
| R8 | Materials must carry natural wear/marks of time; a pristine, flawless "CG feel" is forbidden |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Plain white/plain black background, or no scene at all |
| X2 | Extreme weather (storms/thunder/blizzards, unless the story requires it) |
| X3 | A scene lacking depth/layering |
| X4 | Vegetation/weather that contradicts the season |
| X5 | Any person, human silhouette, human figure shadow, or human outline appearing |
| X6 | The frame being assembled into a multi-view/grid/split-screen layout |
| X7 | 3D-realistic/CG-animation/cartoon/game-engine texture (forbidden terms: 3D render, CGI, Unreal Engine, Unity, etc.) |
| X8 | Materials that are too clean and perfect, with no wear or sense of age (avoid a "plastic feel") |
| X9 | Lighting that is too flat and even, with no depth-of-field blur or lens/optical characteristics |
