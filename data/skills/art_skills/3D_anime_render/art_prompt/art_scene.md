# 3D Animation Rendering Urban Scene Image Generation · Constraint Manual

---

## 1. Scene Aesthetic Principles

1. **Spatial narrative** — the scene carries emotion and narrative function, not just a plain backdrop
2. **Layered depth** — every scene must have foreground/midground/background layers; flatness is prohibited
3. **Texture above all** — wood grain/stone/fabric/water surface and other material textures must be clear, though cel-shaded rendering simplifies them
4. **Cel-shading as anchor** — every frame must be standardized on 3D animation rendering + cel-shading, rejecting photorealistic photography/CG animation texture; maintain animation style consistency and lens characteristics
5. **Urban atmosphere** — modern urban scenery, architectural style, and unified color tone

---

## 2. Seasonal Color Tone Mapping

| Season | Primary tone | Secondary tone | Prompt |
|---|---|---|---|
| Spring | verdant green + peach pink | light blue, pale yellow | verdant spring color, flowers in full bloom |
| Summer | jade green + lotus pink | sky blue, white | lush summer feel, shady green trees |
| Autumn | crimson red + golden yellow | amber, pale gray | deep autumn feel, falling red leaves |
| Winter | plain white + frost silver | deep blue, pale gray | winter snow cover, quiet winter day |

---

## 3. City Architecture

### Spatial Specifications

| Dimension | Constraint | Prompt |
|---|---|---|
| Style | Modern urban, office towers/residential/commercial district | modern urban architecture |
| Material | Mainly glass/concrete/metal (cel-shaded) | modern material, cel-shaded rendering |
| Tone | Mainly warm tones, dusk glow atmosphere | warm tones, dusk atmosphere |
| Depth | Foreground/midground/background layers (cel-shaded depth) | foreground {element}, midground {element}, background {element} |
| Texture | Clear architectural texture (cel-shaded) | clear texture, cel-shaded texture |
| Lighting | Mainly natural light (window light/streetlight), soft light | natural light, soft lighting |
| Lens feel | Shallow depth of field blurring foreground/background, cel-shaded lens effect | shallow depth of field, cel-shaded lens |
| Imperfection | Buildings show signs of use, natural wear (cel-shaded) | natural wear, cel-shaded treatment |

### City Type Quick Reference

| Type | Core elements | Atmosphere words |
|---|---|---|
| Commercial district | high-rises/shops/billboards | bustling and lively, modern urban |
| Residential area | apartment buildings/gardens/streets | warm living feel, quiet community |
| Office district | office towers/parking lot/coffee area | workplace atmosphere, business feel |
| Park/green space | trees/paths/benches | relaxed and leisurely, lush greenery |
| Transit hub | subway station/bus stop/pedestrian overpass | busy traffic, urban pulse |
| Riverside/lakeside | water/paths/lighting | romantic atmosphere, beautiful waterscape |

---

## 4. Indoor and Outdoor Scenes

### Indoor Space Specifications

| Dimension | Constraint | Prompt |
|---|---|---|
| Style | Office/cafe/apartment/convenience store | modern indoor style |
| Material | Flooring/walls/furniture (cel-shaded) | modern material, cel-shaded rendering |
| Tone | Mainly warm tones, dusk atmosphere | warm tones, cozy atmosphere |
| Depth | Foreground/midground/background layers | foreground {element}, midground {element}, background {element} |
| Texture | Clear material texture (cel-shaded) | clear texture, cel-shaded texture |
| Lighting | Natural light + indoor lighting, soft light | natural light, indoor lighting, soft |
| Lens feel | Shallow depth of field blurring foreground/background | shallow depth of field, indoor lens |
| Imperfection | Furniture shows signs of use, natural wear | natural wear, cel-shaded treatment |

### Indoor Type Quick Reference

| Type | Core elements | Atmosphere words |
|---|---|---|
| Office | desk/computer/documents/chair | workplace atmosphere, business feel |
| Cafe | coffee table/seating/bar counter/decor | cozy and relaxed, casual atmosphere |
| Apartment | sofa/bed/bookshelf/decor | homey warmth, comfortable space |
| Convenience store | shelves/checkout counter/drinks | everyday convenience, daily life feel |
| Restaurant | dining table/chairs/kitchen | dining atmosphere, warm mealtime |
| Gym | treadmill/equipment/mirror | athletic atmosphere, energetic space |

---

## 5. Hero View Specification

### View Definition

> A single hero view, shot from the scene's most representative angle, carrying the spatial narrative and compositional focus.

| Item | Constraint | Prompt |
|---|---|---|
| Viewpoint | Natural observation angle, composition that best conveys the scene's subject and depth | hero shot, representative angle |
| Viewpoint height | Default eye-level height, high/low angle allowed for special scenes | eye level (default) |
| Composition | Subject centered or following the rule of thirds, foreground/midground/background layers clear | balanced composition |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Single frame (not a collage, not multi-view, not split-screen) |
| People | **Strictly prohibit any person, human shadow, or human silhouette** |
| Consistency | Unified style/material/tone/lighting (cel-shaded treatment) |
| Lighting | Single light-source logic, consistent light-and-shadow direction (cel-shaded treatment) |
| Frame ratio | Default 16:9 (or as set by the caller) |

---

## 6. Prompt Template
```
3D animation rendering, cinema-grade lighting, vibrant cel-shaded texture, high-detail materials, joyful healing atmosphere, cartoon urban style, high-detail cartoon materials, moderate cartoon proportions, warm color palette, 8K ultra-high-definition, cinema-grade composition, soft lighting layers, bright cartoon rendering style, warm and healing, urban scene hero-view concept art,
anime style, cel-shaded, 3D animation render,
film lighting, warm sunset lighting,
scene design sheet, environment concept art, no people, no characters, no human figures,
{indoor/outdoor}, {scene type}, {architectural style}, {season + time},
foreground: {element}, midground: {element}, background: {element},
{tone description}, {weather/atmosphere elements},
{material description}, aerial perspective, clear texture, cel-shaded treatment,
natural wear on materials, lived-in wear, natural fabric draping (cel-shaded),
diffused natural light, volumetric light, cel-shaded lighting effects, cel-shaded shadows,
single-frame composition, natural observation angle, composition representative of the scene's subject showing foreground/midground/background layers,
no people appear in the frame,
cel-shaded rendering style, soft lighting, moderate cartoon proportions, high-detail cartoon materials,
warm color palette, dusk glow atmosphere, joyful healing atmosphere,
8K ultra-high-definition, cinema-grade composition,
no text of any kind in the image
```

---

## 7. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The scene must have "foreground/midground/background layers" |
| R2 | Outdoor scenes must include "aerial perspective" |
| R3 | The scene image must be a "single hero view"; multi-view/split-screen/grid collages are prohibited |
| R4 | The composition must represent the scene's subject and show foreground/midground/background layers |
| R5 | **Strictly prohibit any person** appearing in the scene image |
| R6 | Must include 3D animation rendering keywords (cel-shaded, 3D animation render, anime style) |
| R7 | Must include a lens optical characteristic (at least one of shallow depth of field / lens vignette / bokeh, cel-shaded treatment) |
| R8 | Materials must carry natural wear/signs of age; a pristine flawless "CG feel" is prohibited, but must be presented in cel-shaded form |
| R9 | Must maintain cel-shaded rendering style consistency; mixing in photorealistic elements is prohibited |
| R10 | Must include warm color palette, dusk glow atmosphere keywords |
| R11 | Must include 8K ultra-high-definition, cinema-grade composition keywords |

### Prohibited

| No. | Prohibited item |
|---|---|
| X1 | Pure white/pure black background, or no scene at all |
| X2 | Extreme weather (storm/thunder/blizzard, unless narratively required, and must be cel-shaded) |
| X3 | Scene lacking depth/layers |
| X4 | Vegetation/weather contradicting the season |
| X5 | Any person, human shadow, human silhouette, or human outline appearing |
| X6 | The image collaged into multi-view/grid/split-screen layout |
| X7 | 3D rendering/CG animation/game engine texture (terms such as 3D render, CGI, Unreal Engine, Unity are prohibited); must clearly read as cel-shaded animation rendering |
| X8 | Material that is overly clean and perfect, with no signs of use or age (avoid a "plasticky feel"); must be cel-shaded |
| X9 | Lighting that is overly flat and even, with no depth-of-field blur or lens optical characteristics |
| X10 | Using photorealistic photography terms (such as real photography, photorealistic, RAW photo, etc.) |
| X11 | Ancient/futuristic elements, non-modern urban style |
| X12 | Cool-toned/night-dominant color palette, not a warm-toned/dusk atmosphere |
