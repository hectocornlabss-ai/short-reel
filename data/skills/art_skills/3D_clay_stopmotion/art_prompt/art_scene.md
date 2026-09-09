# Claymation Stop-Motion Scene Image Generation · Constraint Handbook

---

## 1. Scene Aesthetic Principles

1. **Spatial storytelling** — Scenes carry emotional and narrative function
2. **Layered depth** — Every scene must have foreground/midground/background layers; flatness is prohibited
3. **Clay texture above all** — Material texture must be clearly distinguishable (wood/stone/fabric/water)
4. **Stop-motion as anchor** — Every frame follows the stop-motion claymation style standard, rejecting live-action realism; pursue stop-motion photography traits (shallow depth of field, lens bokeh, stop-motion grain) with warm-toned lighting

---

## 2. Seasonal Color Mapping

| Season | Primary Tone | Secondary Tone | Prompt Fragment |
|---|---|---|---|
| Spring | Warm green + peach pink | Cream white, pale yellow | spring warm green, peach blossom pink |
| Summer | Emerald green + lotus pink | Sky blue, lotus white | summer lotus emerald, lush warm shade |
| Autumn | Warm red + golden yellow | Orange yellow, warm gray | autumn maple warm red, golden leaves warm sun |
| Winter | Soft white + frost gray | Warm wood tone, ice blue | soft winter snow, bare branches warm tone |

---

## 3. Indoor Scenes

### Spatial Specification

| Dimension | Constraint | Prompt Fragment |
|---|---|---|
| Style | Ancient-style residence/palace/study/boudoir, warm and vintage | Ancient-style {dynasty}, warm and vintage |
| Material | Clay-sculpted wood-dominant, stone/jade/silk/gauze as accents | clay wooden furniture, jade screen |
| Tone | Low-saturation warm wood + cream gauze + celadon | warm wood tone, warm furnishings |
| Depth | Foreground/midground/background layering | foreground {element}, midground {element}, background {element} |
| Texture | Wood grain/fabric drape/porcelain sheen must be distinguishable | clear texture, clay material feel |
| Lighting | Warm soft light dominant (window light/candlelight), diffused light | warm diffused light, cozy candlelight |
| Lens feel | Soft shallow depth of field, natural bokeh, stop-motion grain | shallow depth of field, bokeh, stop-motion feel |
| Imperfections | Wear marks on wood surfaces, weathering on stone, natural fabric creases | traces of time, natural wear, natural fabric drape |

### Indoor Type Quick Reference

| Type | Core Elements | Mood Words |
|---|---|---|
| Boudoir/bedroom | Gauze curtains, dressing table, bronze mirror, vase | Warm and intimate, gauze draping softly |
| Study/library | Bookshelf, scrolls, ink and brush, chessboard | Quiet and elegant, filled with ink fragrance |
| Great hall/main hall | Tall pillars, plaque, drapery, candlestick | Solemn and magnificent, grand atmosphere |
| Courtyard corridor | Corridor pillars, stone railing, flowers and trees, lanterns | Winding path leading to seclusion, swaying lantern light |
| Kitchen/dining hall | Stove, steamer, tableware | Homely warmth, everyday coziness |

---

## 4. Outdoor Scenes

### Spatial Specification

| Dimension | Constraint | Prompt Fragment |
|---|---|---|
| Type | Courtyard/mountain forest/streamside/ancient bridge/market | {scene}, {season}, {time} |
| Weather | Clear/overcast/light mist/light rain/snowfall | mist drifting, fine rain like threads |
| Vegetation | Plum/bamboo/pine/peach blossom/willow/lotus (must match season) | peach blossoms in bloom, lush bamboo grove |
| Water | Streams/lakes/waterfalls need light reflections | babbling stream, mirror-like lake surface |
| Architecture | Upturned eaves and brackets, gray tiles and white walls, stone bridges and wooden pavilions | upturned eaves, stone arch bridge |
| Atmosphere | Must have aerial perspective, distant areas skew warm gray | distant hills like ink, aerial perspective |
| Lighting | Warm natural light as the sole light source, sunlight/moonlight need volumetric light | warm diffused light, volumetric light, warm light flares |
| Lens feel | Soft shallow depth of field, bokeh, stop-motion feel | shallow depth of field, bokeh, stop-motion feel |
| Imperfections | Moss/weathering on stone, cracking/patina on wood, chipped tiles | mottled moss, weathering traces, aged patina |

### Outdoor Type Quick Reference

| Type | Core Elements | Mood Words |
|---|---|---|
| Courtyard garden | Rockery, pond, flowers and trees, stone path | Flower shadows swaying, winding path leading to seclusion |
| Mountain bamboo forest | Ancient trees, bamboo grove, mountain rocks, mist | Ranges upon ranges, drifting mist |
| Streamside/lakeside | Stream, pebbles, weeping willows, lotus flowers | Babbling stream, swaying willow shadows |
| Ancient bridge and pavilion | Stone arch bridge, roadside pavilion, willow trees | Ancient road pavilion, swaying willows |
| Market street | Tavern banners, vendor stalls, lanterns | Bustling marketplace, worldly warmth |
| Rooftop terrace | Tiles, upturned eaves, night sky | Drinking alone under the moon, gentle breeze |

---

## 5. Hero Shot Specification

### View Definition

> A single hero shot, captured from the scene's most representative angle, carrying the spatial narrative and compositional focus.

| Item | Constraint | Prompt Fragment |
|---|---|---|
| Angle | Natural observation angle, composition best expresses the scene's subject and depth | hero shot, representative angle |
| Viewpoint height | Default eye-level height, low/high angle allowed for special scenes | eye level (default) |
| Composition | Subject centered or following the rule of thirds, clear foreground/midground/background layering | balanced composition |

### Frame Specification

| Item | Constraint |
|---|---|
| Layout | Single frame (not a collage, not multi-view, not split-screen) |
| Characters | **Strictly no people, human shadows, or human silhouettes may appear** |
| Consistency | Unified style/material/tone/lighting |
| Lighting | Single light-source logic, consistent shadow direction |
| Aspect ratio | Default 16:9 (or as set by the caller) |

---

## 6. Prompt Template

```
Claymation stop-motion ancient-style scene hero shot concept art, stop-motion animation style, 3D cartoon rendering, warm-toned lighting, soft shallow depth of field,
claymation style, stop-motion aesthetic, warm lighting,
scene design sheet, environment concept art, no people, no characters, no human figures,
{indoor/outdoor}, {scene type}, {dynasty style}, {season + time},
foreground: {element}, midground: {element}, background: {element},
{tone description}, {weather/atmosphere elements},
{material description}, aerial perspective, ultra-clear texture detail,
natural material wear marks, aged patina, mossy weathering, natural fabric drape,
warm soft diffused light, volumetric light, warm light flares, shallow depth of field blur,
single-frame composition, natural observation angle, composition represents the scene's subject and shows foreground/midground/background layering,
no people of any kind in the frame
no text of any kind should appear in the image
```


---

## 7. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The scene must have "foreground/midground/background layering" |
| R2 | Outdoor scenes must include "aerial perspective" |
| R3 | The scene image must be a "single hero shot"; multi-view collage/split-screen/grid is not allowed |
| R4 | The composition must represent the scene's subject and show foreground/midground/background layering |
| R5 | **Strictly no people may appear** in the scene image |
| R6 | Must include stop-motion animation keywords (claymation / stop-motion) |
| R7 | Must include shallow-depth-of-field keywords (shallow depth of field / bokeh) |
| R8 | Must specify "warm soft light," no hard shadows |
| R9 | Materials must carry natural wear/traces of time |

### Prohibited

| No. | Prohibited |
|---|---|
| X1 | Pure white/pure black background, or no scene at all |
| X2 | Extreme weather (storms/thunder and lightning/blizzard) |
| X3 | Scene lacking depth/layering |
| X4 | Vegetation/weather contradicting the season |
| X5 | Any person, human shadow, or human silhouette appearing |
| X6 | The frame being collaged into a multi-view/grid/split-screen layout |
| X7 | Live-action realistic photography/3D rendering/CG animation feel |
| X8 | Materials being overly clean and perfect, with no wear traces at all |
| X9 | Cold hard lighting/strong contrast/hard shadows |
