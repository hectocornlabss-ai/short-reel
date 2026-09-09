# 90s Retro Japanese Anime Style - Scene Image Generation · Constraint Handbook

---

## 1. Scene Aesthetic Principles

1. **Spatial Storytelling** — the scene carries emotion and narrative function, not just a plain backdrop
2. **Layered Depth** — every scene must have foreground/midground/background layers; no flatness allowed
3. **Texture First** — line, color, and lighting texture must be clearly rendered
4. **90s as Anchor** — every frame follows the 90s retro Japanese anime standard, rejecting modern CG/3D rendering; pursue hand-drawn line qualities (fluid lines, flat-shaded shadows) and cinematic lighting (soft warm light, volumetric light)

---

## 2. Seasonal Color Mapping

| Season | Main Tone | Accent Tone | Prompt |
|---|---|---|---|
| Spring | pink + tender green | light yellow, pale purple | spring pink, cherry blossoms in bloom |
| Summer | jade green + blue | light blue, white | summer jade green, blue sky and white clouds |
| Autumn | golden + amber-red | brown, deep green | autumn gold, red maple leaves |
| Winter | white + gray | deep blue, light blue | winter white, falling snow |

---

## 3. Indoor Scenes

### Spatial Specification

| Dimension | Constraint | Prompt |
|---|---|---|
| Style | 90s Japanese-style room / Western-style room | {style} style |
| Material | primarily wood/stone/fabric/glass | wooden furniture, fabric decor |
| Tone | low-saturation warm tone / soft cool tone | warm tone / cool tone |
| Depth | foreground/midground/background layers | foreground {element}, midground {element}, background {element} |
| Texture | fluid lines, soft coloring | fluid lines, soft coloring |
| Lighting | natural light / lamp light, soft cinematic light | natural lighting, soft cinematic light |
| Line quality | clear outlines, flat-shaded shadows | clear lines, flat-shaded shadows |
| Imperfection | walls show signs of use, furniture naturally worn | signs of use, natural wear |

### Indoor Type Quick Reference

| Type | Core Elements | Mood Words |
|---|---|---|
| Bedroom/boudoir | bed/wardrobe/dressing table | cozy, intimate, comfortable |
| Study/library | bookshelf/desk/chair | quiet, scholarly |
| Living room/main hall | sofa/coffee table/decor | comfortable, cozy |
| Corridor/balcony | railing/plants/decor | airy, open |
| Kitchen/dining room | dining table/kitchenware | warm, homely |

---

## 4. Outdoor Scenes

### Spatial Specification

| Dimension | Constraint | Prompt |
|---|---|---|
| Type | courtyard/mountain forest/street/plaza | {scene}, {season}, {time} |
| Weather | sunny/overcast/rainy/snowy | sunny day, rainy day, snowy day |
| Vegetation | trees/flowers/grass (must match season) | trees, flowers and grass |
| Architecture | 90s architecture / Japanese-style architecture | 90s architecture / Japanese-style architecture |
| Air quality | must have aerial perspective, distance turns gray | aerial perspective, blurred distance |
| Lighting | natural light as the sole light source, soft cinematic light | natural lighting, soft cinematic light |
| Line quality | clear outlines, flat-shaded shadows | clear lines, flat-shaded shadows |
| Imperfection | walls show signs of use, ground shows wear | signs of use, wear marks |

### Outdoor Type Quick Reference

| Type | Core Elements | Mood Words |
|---|---|---|
| Courtyard garden | plants/small bridge/pond | tranquil, elegant |
| Mountain forest/park | trees/rocks/path | natural, open |
| Street/market | buildings/stalls/pedestrians | lively, full of life |
| Riverside/lakeside | water surface/bridge/trees | tranquil, elegant |
| Rooftop/terrace | railing/sky/distant view | open, free |

---

## 5. Hero Shot Specification

### View Definition

> A single hero shot, captured from the scene's most representative angle, carrying the spatial narrative and compositional focus.

| Item | Constraint | Prompt |
|---|---|---|
| Perspective | natural observational viewpoint, composition that best conveys the scene's subject and depth | hero shot, representative angle |
| Eye height | default human eye level; special scenes may use high/low angle | eye level (default) |
| Composition | subject centered or following rule of thirds, clear foreground/midground/background layers | balanced composition |

### Frame Specification

| Item | Constraint |
|---|---|
| Layout | single image (not a collage, not multi-view, not split-screen) |
| People | **strictly no people, silhouettes, or human figures may appear** |
| Consistency | unified style/material/tone/lighting |
| Lighting | single light-source logic, consistent shadow direction |
| Aspect ratio | 16:9 by default (or as set by the caller) |

---

## 6. Prompt Template
```
90s retro Japanese anime style scene hero shot concept art,
90s anime style, hand-drawn flat coloring, soft warm tones, fine flowing linework, cinematic lighting,
scene design sheet, environment concept art, no people, no characters, no human figures,
90s retro style, nostalgic healing atmosphere,
{indoor/outdoor}, {scene type}, {season + time},
foreground: {element}, midground: {element}, background: {element},
{tone description}, {weather/atmosphere elements},
{material description}, aerial perspective, ultra-clear line detail,
fluid lines, flat-shaded shadows, signs of use,
soft cinematic light, background light bloom, natural lighting,
single-frame composition, natural observational viewpoint, composition representing the scene's subject and showing foreground/midground/background layers,
no people appear anywhere in the frame
no text of any kind in the image
```

---

## 7. Constraint Rules

### Must Follow

| ID | Rule |
|---|---|
| R1 | scene must have "foreground/midground/background layers" |
| R2 | outdoor scenes must include "aerial perspective" |
| R3 | the scene image must be a "single hero shot," never a collage of multiple views/split-screen/grid |
| R4 | the composition must represent the scene's subject and show foreground/midground/background layers |
| R5 | **strictly no people may appear** in the scene image |
| R6 | must include 90s keywords (90s anime style / hand-drawn / warm tone) |
| R7 | must include line-quality features (fluid lines, flat-shaded shadows — at least one) |
| R8 | materials must show signs of use; a pristine, flawless "CG feel" is forbidden |

### Strictly Forbidden

| ID | Forbidden |
|---|---|
| X1 | pure white/pure black background, or no scene at all |
| X2 | extreme weather (storms/lightning/blizzards, unless required by the story) |
| X3 | scene lacking depth/layering |
| X4 | vegetation/weather contradicting the season |
| X5 | any person, silhouette, or human figure appearing |
| X6 | the frame being composited into a multi-view/grid/split-screen layout |
| X7 | 3D rendering/CG animation/modern-style texture |
| X8 | materials that are overly clean and perfect, with no signs of use whatsoever |
| X9 | lighting that is overly flat and even, lacking soft cinematic light |
