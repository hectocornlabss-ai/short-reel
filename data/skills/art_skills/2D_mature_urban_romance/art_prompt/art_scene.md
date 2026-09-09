# Anime Scene Image Generation · Constraint Manual

---

## 1. Scene Aesthetic Principles

1. **Spatial narrative** — the scene carries emotional and narrative function; it is never a plain backdrop
2. **Layered depth** — every scene must have a foreground/midground/background; flatness is forbidden
3. **Texture above all** — modern material textures must be ultra-clear (glass/metal/wood/fabric/wall surfaces)
4. **Cel shading as the anchor** — every image is held to the anime style standard, emphasizing clean lines and cel-shaded coloring
5. **Dramatic low-key lighting** — light and shadow serve the emotion, maintaining a low-saturation cool-tone baseline

---

## 2. Seasonal Color Mapping

| Season | Primary tone | Secondary tone | Prompt |
|---|---|---|---|
| Spring | Green-teal + soft pink | Light blue, pale yellow | fresh spring green, delicate cherry blossom pink |
| Summer | Emerald green + azure blue | Sky blue, snow white | lush summer foliage, clear blue sky |
| Autumn | Orange-yellow + russet | Ochre, golden yellow | golden autumn leaves, fiery maple red |
| Winter | Plain white + cool blue | Grayish white, pale blue | crisp winter chill, pristine snowfall |

---

## 3. Indoor Scenes

### Spatial Specification

| Dimension | Constraint | Prompt |
|---|---|---|
| Style | Modern urban home/office/cafe/apartment | modern {scene type} style |
| Material | Predominantly modern materials, with glass/metal/wood/fabric as accents | modern materials, glass reflection, wood grain texture |
| Tone | Predominantly low-saturation cool tones, with warm accents | predominantly cool tones, warm light accents |
| Depth | Foreground/midground/background layering | foreground {element}, midground {element}, background {element} |
| Texture | Clear glass/metal/wood/fabric texture | clear material, refined texture |
| Lighting | Natural light/artificial light, distinct light-and-shadow layering | natural light, light-and-shadow layering, interior light |
| Cinematic feel | Cinematic-grade composition, shallow depth-of-field blur, lens optical traits | `shallow depth of field`, `film grain` |
| Lived-in feel | Modern signs of use, a sense of everyday life | lived-in atmosphere, signs of use |

### Indoor Type Quick Reference

| Type | Core elements | Mood words |
|---|---|---|
| Modern apartment | Sofa/TV/bed/kitchen | Cozy and homey, everyday atmosphere |
| Business office | Desk/computer/documents/bookshelf | Professional and crisp, workplace atmosphere |
| Cafe | Tables and chairs/coffee cup/counter/window | Relaxed and easy, urban leisure |
| School classroom | Desks/blackboard/bookshelf/blackboard | Youthful campus, studious atmosphere |
| Hotel room | Bed/bathroom/TV/nightstand | Comfortable and modern, hotel atmosphere |

---

## 4. Outdoor Scenes

### Spatial Specification

| Dimension | Constraint | Prompt |
|---|---|---|
| Type | City street/park/campus/commercial district | {scene}, {season}, {time of day} |
| Weather | Clear/overcast/light mist/light rain/snowfall | drifting mist, fine threads of rain |
| Vegetation | Trees/flowers/lawn (must match the season) | lush green trees, flowers in full bloom |
| Water | Ponds/fountains/rivers must show light-and-shadow reflection | shimmering water surface, clear reflection |
| Architecture | Modern buildings/glass curtain walls/brick walls | modern urban style, architectural lines |
| Atmospheric depth | Must include aerial perspective; distant elements skew grayish-blue | distant hills fading to blue-gray, aerial perspective |
| Lighting | Natural light/artificial light, dramatic low-key lighting | natural lighting, volumetric light, dramatic lighting |
| Cinematic feel | Cinematic-grade composition, shallow depth-of-field blur, anime lens traits | `shallow depth of field`, `vignette`, `anime cinematic` |
| Lived-in feel | Urban signs of use, marks of time | urban wear marks, lived-in atmosphere |

### Outdoor Type Quick Reference

| Type | Core elements | Mood words |
|---|---|---|
| City street | Streetlights/crosswalk/buildings/vehicles | Urban life, street atmosphere |
| Park green space | Trees/benches/lawn/path | Relaxed leisure, natural atmosphere |
| Commercial district | Shops/billboards/pedestrians/street | Bustling city, commercial atmosphere |
| Campus scene | Academic buildings/sports field/trees/benches | Youthful campus, studious atmosphere |
| Rooftop/balcony | Railing/city view/plants | Open vista, urban vantage point |
| Subway/bus stop | Platform/train/pedestrians/signage | Commuting life, urban rhythm |

---

## 5. Hero Shot Specification

### View Definition

> A single hero shot, captured from the scene's most representative angle, carrying the spatial narrative and compositional focus.

| Item | Constraint | Prompt |
|---|---|---|
| Viewpoint | Natural observational angle, composition best conveying the scene's subject and depth | `hero shot`, `representative angle` |
| Eye level | Default eye-level height; high/low angles allowed for special scenes | `eye level` (default) |
| Composition | Subject centered or following the rule of thirds, with clear foreground/midground/background layering | `balanced composition` |

### Frame Specification

| Item | Constraint |
|---|---|
| Layout | Single frame (not a collage, not multi-view, not a split screen) |
| People | **Any person, human silhouette, or human outline is strictly forbidden** |
| Consistency | Style/material/tone/lighting must be unified |
| Lighting | Single-light-source logic, consistent light direction |
| Aspect ratio | 16:9 by default (or as specified by the caller) |

---

## 6. Prompt Template

anime scene hero-shot concept art,
anime style, cel shading, modern urban style,
cinematic composition, dramatic low-key lighting,
ultra detailed, 8K, high quality,
shallow depth of field, film grain, lens vignette,
cel-shaded anime style, cinematic-grade composition, dramatic low-key lighting,
scene design sheet, environment concept art, no people, no characters, no human figures,
{indoor/outdoor}, {scene type}, {modern style}, {season + time of day},
foreground: {element}, midground: {element}, background: {element},
{tone description}, {weather/atmosphere element},
{material description}, aerial perspective, ultra-clear texture detail,
modern signs of use on materials, lived-in atmosphere, natural wear,
natural light/artificial light, dramatic lighting, low-saturation cool tones,
single-frame composition, natural observational angle, composition representative of the scene's subject with clear foreground/midground/background layering,
no person anywhere in the frame
no text anywhere in the image

---

## 7. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The scene must have "foreground/midground/background layering" |
| R2 | Outdoor scenes must include "aerial perspective" |
| R3 | Scene images must be a "single hero shot" — collages of multiple views/split screens/grids are forbidden |
| R4 | The composition must represent the scene's subject and show foreground/midground/background layering |
| R5 | **Any person is strictly forbidden** in scene images |
| R6 | Must include an "anime style" keyword (anime style / cel shading) |
| R7 | Must include a depth-of-field trait (at least one of shallow depth of field / vignette), preserving the cel-shaded anime look |
| R8 | Materials must carry modern signs of use/a lived-in atmosphere; a pristine, flawless "3D-render feel" is forbidden |

### Strictly Prohibited

| No. | Prohibited |
|---|---|
| X1 | A pure white/pure black background, or no scene at all |
| X2 | Extreme weather (storms/lightning/blizzards, unless required by the story) |
| X3 | A scene with no depth/no layering |
| X4 | Vegetation/weather contradicting the season |
| X5 | Any person, human silhouette, or human outline |
| X6 | The frame being composited into a multi-view/grid/split-screen layout |
| X7 | 3D-render/CG-animation/game-engine feel (forbidden terms: 3D render, CGI, Unreal Engine, Unity, etc.) |
| X8 | Materials that are too clean and perfect, with no sign of use or age (avoid a "plastic" feel) |
| X9 | Lighting that is too even and flat, with no depth-of-field blur or lens optical traits |
