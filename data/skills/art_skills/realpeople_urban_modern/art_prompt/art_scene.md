# Scene Image Generation · Urban Realistic Constraint Manual

---

## 1. Scene Aesthetic Principles

1. **Spatial narrative** — The scene carries emotional and narrative function; it is not a pure backdrop
2. **Layered depth** — All scenes must have foreground/midground/background; flatness is forbidden
3. **Texture above all** — Material textures such as concrete/glass/wood/metal/fabric must be ultra-clear
4. **Live-action as the anchor** — Every frame is held to the standard of real photography, rejecting a 3D render/CG animation feel; pursue optical lens characteristics (depth-of-field blur, lens vignetting, subtle chromatic aberration) and physical lighting (natural light diffusion, caustics, volumetric light)

---

## 2. Seasonal Color Mapping

| Season | Primary Tones | Secondary Tones | Prompt |
|---|---|---|---|
| Spring | Tender green + light pink | Sky blue, pale yellow | spring tender green, light pink blossoms |
| Summer | Emerald green + deep blue | Ocean blue, white | summer emerald green, deep blue sky |
| Autumn | Golden yellow + orange-red | Amber, brown | autumn golden yellow, orange-red fallen leaves |
| Winter | Gray-white + cool blue | Silver gray, ink blue | winter gray-white, cool blue sky |

---

## 3. Indoor Scenes

### Space Specifications

| Dimension | Constraint | Prompt |
|---|---|---|
| Style | Modern apartment/office building/cafe/hotel/shopping mall, modern minimalist/Scandinavian/industrial | modern {style} style |
| Material | Primarily concrete/glass/wood/metal/fabric | concrete wall, glass curtain wall, wood flooring |
| Tone | Low-saturation neutral colors + natural wood tone + accent colors | neutral tones, natural wood tone, accent colors |
| Depth | Foreground/midground/background layering | foreground {element}, midground {element}, background {element} |
| Texture | Wood grain/brushed metal/fabric texture distinguishable | clear texture, realistic texture |
| Lighting | Primarily natural light sources (window light/desk lamp/chandelier), soft diffused light, visible light beam particles and caustic projections | natural light diffusion, warm desk lamp light, light beams through window |
| Lens feel | Shallow depth of field blurring foreground/background, subtle lens vignette, natural color temperature shift | shallow depth of field, lens vignette, natural color cast |
| Imperfection feel | Walls show usage marks, floors show wear, fabric has natural creasing | usage marks, natural wear, natural fabric draping |

### Indoor Type Quick Reference

| Type | Core Elements | Mood Words |
|---|---|---|
| Modern apartment | Sofa, coffee table, floor-to-ceiling windows, plants | warm and cozy, modern minimalist |
| Office space | Desk, computer, documents, plants | professional and tidy, efficient atmosphere |
| Cafe | Bar counter, coffee machine, tables and chairs, decor | relaxed and comfortable, artistic atmosphere |
| Hotel room | Bed, nightstand, floor-to-ceiling windows, TV | comfortable and luxurious, tranquil atmosphere |
| Living room | Sofa, TV cabinet, rug, wall art | warm everyday, family atmosphere |

---

## 4. Outdoor Scenes

### Space Specifications

| Dimension | Constraint | Prompt |
|---|---|---|
| Type | Street/plaza/park/rooftop/parking lot | {scene}, {season}, {time} |
| Weather | Clear/overcast/light mist/light rain/light snow | thin mist lingering, fine drizzle |
| Vegetation | Street trees/flower beds/lawns/potted plants (must match the season) | street trees, flower bed greenery |
| Water bodies | Fountains/pools must show light and reflections | reflective water surface, flowing fountain |
| Architecture | Modern architecture, glass curtain walls, metal structures | modern architecture, glass curtain wall |
| Air feel | Must have aerial perspective, distant areas skewing gray-blue | distant gray-blue haze, aerial perspective |
| Lighting | Natural light as the sole source, sunlight/streetlights must show volumetric light and scattering | natural lighting, volumetric light, warm streetlight glow |
| Lens feel | Shallow depth of field blur, lens vignetting, subtle chromatic aberration, bokeh light spots | shallow depth of field, bokeh, lens flare, vignette |
| Imperfection feel | Ground cracks/wall peeling/metal oxidation/glass scratches | usage marks, natural wear |

### Outdoor Type Quick Reference

| Type | Core Elements | Mood Words |
|---|---|---|
| City street | Streetlights, street trees, crosswalk | urban everyday, busy street |
| Commercial plaza | Buildings, fountain, billboards | bustling and lively, commercial atmosphere |
| Park/green space | Lawn, trees, benches, walking paths | natural and peaceful, leisurely atmosphere |
| Rooftop terrace | Railing, city view, seating | open view, cityscape |
| Underground parking lot | Parking spaces, lane markings, indicator lights | cold industrial, quiet space |

---

## 5. Hero Shot Specification

### View Definition

> A single-frame hero shot, captured from the scene's most representative angle, carrying the spatial narrative and compositional focus.

| Item | Constraint | Prompt |
|---|---|---|
| Perspective | Natural observational viewpoint, composition best expressing the scene's subject and depth | hero shot, representative angle |
| Viewpoint height | Default eye-level height, special scenes may be high/low angle | eye level (default) |
| Composition | Subject centered or following the rule of thirds, clear foreground/midground/background layering | balanced composition |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Single frame (not a collage, not multi-view, not split-screen) |
| People | **Strictly prohibited from showing any person, human silhouette, or human outline** |
| Consistency | Style/material/tone/lighting unified |
| Lighting | Single light source logic, consistent light and shadow direction |
| Aspect ratio | Default 16:9 (or as set by the caller) |

---

## 6. Prompt Template

```
modern urban scene hero shot concept art,
real photography, photorealistic, shot on ARRI Alexa, 35mm film grain,
RAW photo, ultra realistic, hyper detailed,
shallow depth of field, natural lens vignette, subtle chromatic aberration, bokeh,
realistic photographic texture, film grain feel, natural lighting, physical light and shadow,
scene design sheet, environment concept art, no people, no characters, no human figures,
{indoor/outdoor}, {scene type}, {style}, {season + time},
foreground: {element}, midground: {element}, background: {element},
{tone description}, {weather/mood elements},
{material description}, aerial perspective, ultra-clear texture detail,
natural material wear marks, usage marks, wall peeling, metal oxidation,
natural light diffusion, volumetric light, Tyndall effect, caustic projections,
single-frame composition, natural observational viewpoint, composition representative of the scene's subject and showing foreground/midground/background layering,
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
| R3 | The scene image must be a "single-frame hero shot," not a collage of multiple views/split-screen/grid |
| R4 | The composition must be representative of the scene's subject and show foreground/midground/background layering |
| R5 | **Strictly no people may appear** in the scene image |
| R6 | Must include live-action photography keywords (real photography / photorealistic / RAW photo) |
| R7 | Must include lens optical characteristics (at least one of shallow depth of field / lens vignette / bokeh) |
| R8 | Materials must show natural wear/usage marks; a pristine, flawless "CG feel" is prohibited |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Pure white/pure black background/no scene |
| X2 | Extreme weather (storms/lightning/blizzards, unless required by the story) |
| X3 | A scene with no depth/no layering |
| X4 | Vegetation/weather contradicting the season |
| X5 | Any person, human shadow, human silhouette, or human outline appearing |
| X6 | The frame being assembled into a multi-view/grid/split-screen layout |
| X7 | A 3D render/CG animation/cartoon/game engine feel (do not use terms like 3D render, CGI, Unreal Engine, Unity) |
| X8 | Materials that are overly clean and perfect, with no usage marks or sense of age (avoid a "plastic feel") |
| X9 | Lighting that is overly even and flat, with no depth-of-field blur or lens optical characteristics |

