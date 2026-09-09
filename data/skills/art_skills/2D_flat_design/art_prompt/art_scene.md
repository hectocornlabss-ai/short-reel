# Scene Image Generation · Flat Style Constraint Manual

---

## 1. Scene Aesthetic Principles

1. **Spatial narrative** — the scene carries emotional and narrative function; it is not a pure backdrop
2. **Flattened layering** — foreground/midground/background are differentiated through color blocks, with no depth perspective
3. **Color blocks above all** — every scene must be expressed through color blocks; gradients/lighting are rejected
4. **Flat as the anchor** — every frame is held to the standard of flat vector illustration, rejecting 3D rendering/CG animation texture; pursue clean lines and solid color fill

---

## 2. Seasonal Color Mapping

| Season | Primary tone | Secondary tone | Prompt |
|---|---|---|---|
| Spring | Verdant green + peach pink | Moonlight white, goose yellow | flat spring color, verdant peach pink |
| Summer | Jade green + lotus pink | Sky cyan, lotus white | flat summer lotus, jade green lotus pink |
| Autumn | Crimson red + golden yellow | Amber, dusk gray | flat autumn maple, crimson gold |
| Winter | Plain white + frost silver | Ink jade black, ice blue | flat winter snow, plain white frost silver |

---

## 3. Indoor Scenes

### Spatial specifications

| Dimension | Constraint | Prompt |
|---|---|---|
| Style | Ancient residence/palace/study/boudoir, Wei-Jin to Tang-Song period | ancient {dynasty} style, flat ancient style |
| Material | Solid color blocks, outlined with lines | flat sandalwood, flat jade, flat gauze silk |
| Tone | Low-saturation solid color blocks | flat warm tone, flat plain elegance |
| Depth | Foreground/midground/background color block differentiation | foreground {color block}, midground {color block}, background {color block} |
| Texture | No texture, solid color fill | no texture, flat texture, flat texture |
| Lighting | No lighting, purely flat-colored blocks | no lighting effects, flat lighting, no lighting |
| Lens feel | No depth-of-field blur, purely flat | no depth of field, flat perspective, no depth |
| Imperfection | No imperfections, perfectly solid color | no wear, flat perfect, no wear |

### Indoor type quick reference

| Type | Core elements | Mood words |
|---|---|---|
| Boudoir/bedroom | Gauze curtain, dressing table, bronze mirror, vase | flat cozy, simple and private |
| Study | Bookshelf, scroll, ink and brush, chessboard | flat tranquil, simple and elegant |
| Great hall/main hall | Tall pillars, plaque, curtain, candlestick | flat solemn, simple and grand |
| Courtyard corridor | Corridor pillars, stone railing, flowers and trees, lantern | flat winding path, simple lantern glow |
| Kitchen/dining hall | Stove, steamer, tableware | flat hearth life, simple everyday |

---

## 4. Outdoor Scenes

### Spatial specifications

| Dimension | Constraint | Prompt |
|---|---|---|
| Type | Courtyard/mountain forest/streamside/ancient bridge/market | {scene}, {season}, {time}, flat ancient style |
| Weather | Clear/overcast/light mist/light rain/falling snow | flat light mist, flat light rain |
| Vegetation | Plum blossom/bamboo/pine/peach blossom/willow/lotus (must match the season) | flat peach blossom, flat green bamboo |
| Water | Stream/lake/waterfall must be rendered as solid color | flat stream, flat lake surface |
| Architecture | Upturned eaves and brackets, gray tile and white wall, stone bridge and wooden pavilion | flat upturned eaves, flat stone bridge |
| Atmosphere | No aerial perspective, purely flat | no perspective, flat distant view, flat far |
| Lighting | No lighting, purely flat-colored blocks | no lighting, flat daylight, no light |
| Lens feel | No depth-of-field blur, purely flat | no depth of field, flat perspective, no depth |
| Imperfection | No imperfections, perfectly solid color | no weathering, flat perfect, no weathering |

### Outdoor type quick reference

| Type | Core elements | Mood words |
|---|---|---|
| Courtyard garden | Rockery, pond, flowers and trees, stone path | flat flower shadow, simple winding path |
| Mountain forest/bamboo sea | Ancient trees, bamboo forest, mountain rocks, mist and clouds | flat layered peaks, simple mist and clouds |
| Streamside/lakeside | Stream, pebbles, weeping willow, lotus flowers | flat stream water, simple weeping willow |
| Ancient bridge/long pavilion | Stone arch bridge, long pavilion, willow trees | flat ancient bridge, simple long pavilion |
| Market street | Wine-shop banner, street vendors, lanterns | flat marketplace, simple bustle |
| Rooftop terrace | Roof tiles, upturned eaves, night sky | flat roof tiles, simple night sky |

---

## 5. Hero-Shot Specifications

### View definition

> A single-frame hero shot, captured from the most representative angle of the scene, carrying the spatial narrative and compositional focus.

| Item | Constraint | Prompt |
|---|---|---|
| Viewpoint | Natural observation angle, composed to best express the scene's subject and color block layering | hero shot, representative angle |
| Viewpoint height | Default eye-level height; special scenes may use high or low angle | eye level (default) |
| Composition | Subject centered or following the rule of thirds; foreground/midground/background color block layering clear | balanced composition |

### Frame specifications

| Item | Constraint |
|---|---|
| Layout | Single frame (not a collage, not multi-view, not split-screen) |
| People | **No person, human silhouette, or human outline of any kind may appear** |
| Consistency | Style/material/tone unified |
| Lighting | No lighting, solid color fill, no lighting logic |
| Aspect ratio | Default 1:1 (or as set by the caller) |

---

## 6. Prompt Template

```
flat ancient-style scene hero-shot concept art,
2d flat design, vector art, flat illustration,
minimalist, clean lines, solid colors,
flat scene, environment design, no people, no characters, no human figures,
{indoor/outdoor}, {scene type}, {dynasty style}, {season + time},
foreground: {color block elements}, midground: {color block elements}, background: {color block elements},
{tone description}, {weather/atmosphere elements},
{material description}, no perspective, solid color fill,
no signs of age, no wear, flat perfect,
no lighting, no shadows, flat solid color,
single-frame composition, natural observation angle, composition representative of the scene's subject and showing foreground/midground/background color block layering,
no people of any kind in the frame
no text of any kind in the image
```

---

## 7. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The scene must have "foreground/midground/background color block layering" |
| R2 | Outdoor scenes must have a "flat distant view" with no aerial perspective |
| R3 | The scene image must be a "single-frame hero shot" — no collaging of multiple views/split-screen/grid |
| R4 | The composition must represent the scene's subject and show foreground/midground/background color block layering |
| R5 | **No person may appear** in the scene image |
| R6 | Must specify "flat style" keywords (2d flat design, vector art) |
| R7 | Must specify "no lighting, no gradients" |
| R8 | Materials must be solid color fill; complex texture/sense of age is prohibited |

### Strictly Prohibited

| No. | Prohibited |
|---|---|
| X1 | Pure white/pure black background, or no scene at all |
| X2 | Extreme weather (storm/lightning/blizzard, unless required by the story) |
| X3 | A scene with no layering/no color block differentiation |
| X4 | Vegetation/weather that contradicts the season |
| X5 | Any person, human silhouette, or human outline appearing |
| X6 | The frame being collaged into multi-view/grid/split-screen layout |
| X7 | 3D rendering/CG animation/cartoon/game-engine texture (words like 3D render, CGI, Unreal Engine, Unity are prohibited) |
| X8 | Material that is overly complex or color blocks that are not clearly differentiated |
| X9 | Adding lighting/shadow/gradient/3D effects |
