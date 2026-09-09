# Scene Image Generation · Constraint Manual

---

## 1. Scene Aesthetic Principles

1. **Spatial storytelling** — The scene carries emotion and narrative function; it is not a plain backdrop
2. **Layered depth** — Every scene must have foreground/midground/background layers; flatness is not allowed
3. **Texture above all** — Material textures such as wood grain/stone/fabric/water surface must be rendered ultra-clear
4. **Real photography as the anchor** — Every frame follows a real-photography standard, rejecting 3D-render/CG-animation texture; pursue camera-optic characteristics (depth-of-field blur, lens vignette, subtle chromatic aberration) and physically accurate lighting (natural light diffusion, caustics, volumetric light)

---

## 2. Seasonal Color Mapping

| Season | Main Tone | Accent Tone | Prompt |
|---|---|---|---|
| Spring | Verdant green + peach pink | Moon white, goose yellow | verdant spring color, peach blossoms in full bloom |
| Summer | Jade green + lotus pink | Sky blue, lotus white | jade-green summer lotus, dense shade blocking the sun |
| Autumn | Crimson red + golden yellow | Amber, dusk gray | crimson autumn maple, golden leaves drifting down |
| Winter | Plain white + frost silver | Ink jade black, ice blue | plain white winter snow, frost hanging on bare branches |

---

## 3. Indoor Scenes

### Spatial Specification

| Dimension | Constraint | Prompt |
|---|---|---|
| Style | Ancient residence/palace/study/boudoir, Wei-Jin through Tang-Song style | ancient {dynasty} style |
| Material | Primarily wood, with stone/jade/silk/gauze as secondary materials | sandalwood furniture, jade screen, silk gauze curtains |
| Tone | Low-saturation warm wood tones + moon-white gauze curtains + celadon | warm wood tones, elegant plain decor |
| Depth | Foreground/midground/background layers | foreground {element}, midground {element}, background {element} |
| Texture | Wood grain/fabric drape/porcelain sheen must be distinguishable | clear texture, realistic material feel |
| Lighting | Primarily natural light sources (window light/candlelight), softly diffused, with visible light-beam particles and caustic projections | diffused natural light, flickering candlelight, light beams through windows, Tyndall effect |
| Camera feel | Shallow depth of field blurring foreground/background, subtle lens vignette, natural color-temperature shift | shallow depth of field, lens vignette, natural color cast |
| Imperfection | Wood surfaces show signs of use, stone surfaces show weathering, fabric has natural creases | traces of time, natural wear, naturally draped fabric creases |

### Indoor Type Quick Reference

| Type | Core Elements | Mood Words |
|---|---|---|
| Boudoir/bedroom | Gauze curtains, dressing table, bronze mirror, vase | warm and intimate, gauze curtains lightly hanging |
| Study/library | Bookshelf, scroll, ink and brush, chessboard | tranquil and refined, ink fragrance lingering |
| Grand hall/main hall | Tall pillars, plaque, drapery, candlestick | solemn and lavish, grand and imposing |
| Courtyard corridor | Corridor pillars, stone railing, flowers and trees, lantern | winding path leading to seclusion, swaying lantern light |
| Kitchen/dining hall | Stove, steamer, tableware | warm domestic smoke and everyday life |

---

## 4. Outdoor Scenes

### Spatial Specification

| Dimension | Constraint | Prompt |
|---|---|---|
| Type | Courtyard/mountain forest/streamside/ancient bridge/marketplace | {scene}, {season}, {time} |
| Weather | Clear/overcast/light mist/drizzle/falling snow | mist lingering, drizzling rain like fine silk |
| Vegetation | Plum/bamboo/pine/peach blossom/willow/lotus (must match the season) | peach blossoms in full bloom, lush bamboo forest |
| Water | Streams/lakes/waterfalls need light and shadow reflections | murmuring stream, lake surface like a mirror |
| Architecture | Upturned eaves and brackets, gray tiles and white walls, stone bridges and wooden pavilions | upturned flying eaves, stone arch bridge |
| Air quality | Must have aerial perspective, distance turns grayish blue | distant mountains like ink, aerial perspective |
| Lighting | Natural light as the sole light source; sunlight/moonlight must have volumetric light and scattering | natural lighting, volumetric light, god rays, Tyndall effect |
| Camera feel | Shallow depth of field blur, lens vignette, subtle chromatic aberration, bokeh | shallow depth of field, bokeh, lens flare, vignette |
| Imperfection | Moss/weathering on stone surfaces, cracking/patina on wood surfaces, chipped tiles/moss traces | mottled moss, weathering marks, patina of age |

### Outdoor Type Quick Reference

| Type | Core Elements | Mood Words |
|---|---|---|
| Courtyard garden | Rockery, pond, flowers and trees, stone path | flower shadows swaying, winding path leading to seclusion |
| Mountain forest/bamboo sea | Ancient trees, bamboo grove, mountain rocks, clouds and mist | layered peaks, drifting clouds and mist |
| Streamside/lakeside | Stream, pebbles, weeping willow, lotus flowers | murmuring stream, swaying willow shadows |
| Ancient bridge/roadside pavilion | Stone arch bridge, roadside pavilion, willow trees | ancient road with roadside pavilion, swaying willows |
| Marketplace street | Tavern banners, vendor stalls, lanterns | bustling marketplace, everyday human warmth |
| Rooftop terrace | Roof tiles, flying eaves, night sky | drinking alone under the moon, gentle breeze drifting by |

---

## 5. Hero Shot Specification

### View Definition

> A single hero shot, captured from the scene's most representative angle, carrying the spatial narrative and compositional focus.

| Item | Constraint | Prompt |
|---|---|---|
| Perspective | Natural observational viewpoint, composition that best conveys the scene's subject and depth | hero shot, representative angle |
| Eye height | Default human eye level; special scenes may use high/low angle | eye level (default) |
| Composition | Subject centered or following rule of thirds, clear foreground/midground/background layers | balanced composition |

### Frame Specification

| Item | Constraint |
|---|---|
| Layout | Single image (not a collage, not multi-view, not split-screen) |
| People | **Strictly no people, silhouettes, or human figures may appear** |
| Consistency | Unified style/material/tone/lighting |
| Lighting | Single light-source logic, consistent shadow direction |
| Aspect ratio | Default 16:9 (or as set by the caller) |

---

## 6. Prompt Template

```
ancient-style scene hero shot concept art,
real photography, photorealistic, shot on ARRI Alexa, 35mm film grain,
RAW photo, ultra realistic, hyper detailed,
shallow depth of field, natural lens vignette, subtle chromatic aberration, bokeh,
realistic photography texture, film grain feel, natural lighting, physically accurate light and shadow,
scene design sheet, environment concept art, no people, no characters, no human figures,
{indoor/outdoor}, {scene type}, {dynasty style}, {season + time},
foreground: {element}, midground: {element}, background: {element},
{tone description}, {weather/atmosphere elements},
{material description}, aerial perspective, ultra-clear texture detail,
natural material wear marks, patina of age, mossy weathering, naturally draped fabric creases,
diffused natural light, volumetric light, Tyndall effect, caustic projections,
single-frame composition, natural observational viewpoint, composition representing the scene's subject and showing foreground/midground/background layers,
no people appear anywhere in the frame
no text of any kind should appear in the image
```

---

## 7. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The scene must have "foreground/midground/background layers" |
| R2 | Outdoor scenes must include "aerial perspective" |
| R3 | The scene image must be a "single hero shot"; multi-view collage/split-screen/grid is not allowed |
| R4 | The composition must represent the scene's subject and show foreground/midground/background layers |
| R5 | **Strictly no people may appear** in the scene image |
| R6 | Must include real-photography keywords (real photography / photorealistic / RAW photo) |
| R7 | Must include camera-optic characteristics (at least one of shallow depth of field / lens vignette / bokeh) |
| R8 | Materials must carry natural wear/traces of time; a pristine, flawless "CG feel" is prohibited |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Pure white/pure black background, or no scene at all |
| X2 | Extreme weather (storms/lightning/blizzards, unless required by the story) |
| X3 | Scene lacking depth/layering |
| X4 | Vegetation/weather contradicting the season |
| X5 | Any person, silhouette, or human figure appearing |
| X6 | The frame being composited into a multi-view/grid/split-screen layout |
| X7 | 3D-render/CG-animation/cartoon/game-engine texture (words like 3D render, CGI, Unreal Engine, Unity are prohibited) |
| X8 | Materials that are overly clean and perfect, with no signs of use or age at all (avoid a "plastic" feel) |
| X9 | Lighting that is overly flat and even, lacking depth-of-field blur or camera-optic characteristics |

