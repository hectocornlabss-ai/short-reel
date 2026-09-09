---
name: art_scene_derivative
description: 3D Guofeng Cyber Scene Derivative Asset Generation - Constraint Manual
metaData: art_skills
---
# 3D Guofeng Cyber Scene Derivative Asset Generation - Constraint Manual
(Full bidirectional adaptation: Ancient-Style Scenes + Modern Urban Scenes)

---

## 1. Derivative Principles
(Core constraint: shared by both ancient-style and urban scenes — all variants strictly follow "unified style fusion, consistent spatial logic")

1. **Spatial consistency** — Building structure/layout/material and the core guofeng-cyber fusion elements remain fully consistent across all variants
    - Ancient-style scenes: a fixed cyber-retrofit logic for ancient building forms/flying eaves and dougong brackets/mortise-and-tenon structure/courtyard layout/traditional motifs
    - Urban scenes: a fixed fusion logic for building structure/street network/urban functional-zone layout/guofeng retrofit elements (Chinese eaves/dougong brackets/motifs)
    - Element misalignment, structural alteration, or stylistic disconnect between variants is strictly forbidden
2. **Framing-driven** — The same scene shows different narrative functions through different shot framings, precisely matching the spatial narrative logic of ancient-style/urban scenes
3. **Time-of-day switching** — The same space presents different lighting moods at different times of day, synchronously adapting the brightness, color temperature, and on/off logic of each scene's exclusive light sources
    - Ancient-style scenes: traditional lanterns/rune lamps/holographic guofeng projections/neon tubing
    - Urban scenes: building megascreens/street lamps/car lights/guofeng neon signage/holographic ink-wash advertisements
4. **Weather variation** — The same space conveys different moods under different weather, synchronously adapting the physical response of materials and elements in each scene type
    - Ancient-style scenes: rain-and-mist neon Tyndall effect, snow-covered flying eaves, dripping eave tiles, damp wood-structure texture
    - Urban scenes: rain-streaked reflections on glass curtain walls, neon reflections in road puddles, snow-covered building eaves, frost on metal structures
5. **3D as the anchor** — All variants must maintain a 3D rendered texture, rejecting flat texture maps/CG-animation feel/anime flat-coloring style; PBR physical materials, ray-traced global illumination, volumetric light, ambient occlusion, and depth-of-field blur must be strictly preserved, reinforcing the exclusive material textures of each scene type
    - Ancient-style exclusive: weathered wood structure, aged metal, brick-and-tile texture, fabric draping, worn lacquer finish, weathered moss
    - Urban exclusive: ultra-clear glass curtain walls, anodized aluminum, fair-faced concrete, asphalt road surface, brushed metal, LED self-glow screens

---

## 2. Framing Variants

### Framing Definitions
(Full coverage for both ancient-style/urban scenes, adapted to the narrative needs of different spaces)

| Framing | Range | Narrative function | Prompt |
|---|---|---|---|
| Extreme wide shot | Full scene + surrounding environment | Establish sense of space, global orientation | extreme wide shot, full guofeng cyber scene view, ancient-style scene: ancient building cluster against a cyber-retrofitted skyline; urban scene: guofeng cyber urban skyline, city-wide layout |
| Wide shot | Complete scene presentation | Show the overall spatial structure and fusion logic | wide shot, complete guofeng cyber scene structure, ancient-style scene: complete courtyard/ancient-building form with cyber retrofit; urban scene: complete building/block layout with guofeng fusion |
| Medium shot | A local area of the scene | Focus on core functional zones | medium shot, guofeng cyber functional zone, ancient-style scene: a section of a hall/street depth/garden node; urban scene: a building facade/street depth/commercial-district node |
| Close shot | Scene detail | Material/atmosphere-prop close-up | close shot, guofeng cyber material close-up, ancient-style scene: mortise-and-tenon mechanical structure/motif with neon light effect/eave component; urban scene: guofeng-motif curtain wall/eave-shaped building structure/neon signage detail |
| Extreme closeup | Extreme local detail | Material texture/key prop | extreme closeup, guofeng cyber texture detail, ancient-style scene: etched traditional motif/circuit interface/glowing rune; urban scene: worn metal paint/LED-screen pixel texture/glass curtain-wall reflection detail |

### Framing Derivation Specification
(Shared by both ancient-style/urban scenes, with strict variant-consistency control)

| Derived from base image | Kept unchanged | Allowed to change |
|---|---|---|
| Extreme wide shot -> Wide shot | Building exterior, overall layout, core guofeng-cyber fusion elements, spatial road network/courtyard structure | Narrower angle, foreground addition of scene-exclusive elements (ancient-style: floating lanterns/holographic projections; urban: floating guofeng advertisements/street lamps/roadside trees) |
| Wide shot -> Medium shot | Material, tone, lighting, guofeng-cyber element placement and fusion logic | Cropped focus, depth-of-field change, focus on core functional zones |
| Medium shot -> Close shot | Material, tone, core guofeng-cyber material properties | Shallow depth of field, blurred background, focus on material and prop detail |
| Close shot -> Extreme closeup | Material texture, guofeng-cyber texture detail | Extremely shallow depth of field, macro feel, focus on microscopic texture and light-effect detail |

---

## 3. Time-of-Day Variants

### Time-of-Day Definitions
(Full coverage of light-source logic for both ancient-style/urban scenes, with self-consistent, non-conflicting lighting)

| Time of day | Visual characteristics | Prompt |
|---|---|---|
| Early morning | Soft mist, warm-cool interwoven tones, cool-toned neon afterglow not yet extinguished, morning light penetrating mist and holographic projections to form a Tyndall light effect<br>Ancient-style: flying eaves gilded with morning-light edges, lantern afterglow<br>Urban: building megascreens on standby with faint glow, street-lamp afterglow, morning light penetrating skyscraper clusters | first light of dawn, morning mist, guofeng cyber morning, neon afterglow, morning light through mist |
| Noon | Bright and highly saturated, short and clear shadows, true color reproduction<br>Ancient-style: clear ancient-building shadows, natural highlights on metal and stone<br>Urban: strong reflections on glass curtain walls, clear building shadow edges, neon in low-power standby | midday sunlight, bright lighting, guofeng cyber noon, hard-light texture, physically accurate material reflection |
| Dusk | Golden warm tones, long shadows, sky gradient from orange to purple, golden glow and neon lighting up in succession<br>Ancient-style: long shadows from ancient-building silhouettes, lanterns beginning to light up<br>Urban: golden edges on the building skyline, megascreens and neon signs lighting up in succession, car-light trails | golden dusk glow, golden hour, guofeng cyber dusk, neon beginning to glow, gradient skyline |
| Night (moonlight) | Cool blue tones, quiet and serene, low illumination with high contrast<br>Ancient-style: cool blue moonlight, cool-toned neon, cool reflections off wood structure and metal<br>Urban: moonlight covering the building cluster, cool-toned building outline light, cool-toned neon, empty street shots | moonlight clarity, moonlight, guofeng cyber moonlit night, cool-toned neon, faint holographic light |
| Night (lit up) | Strong light-dark contrast, warm-cool light interwoven, high dynamic range lighting<br>Ancient-style: warm-yellow lanterns interwoven with cyber neon, warm light through lattice windows, holographic-projection light effects<br>Urban: warm inner glow from buildings, guofeng neon signage, megascreen advertisements, street lamps and car lights, alley lights | lights in the gathering dusk, flickering candlelight, guofeng cyber night scene, neon lights, warm lantern glow, holographic light effects |

### Time-of-Day Derivation Specification
(Shared by both ancient-style/urban scenes, fixing the core structure while only changing the lighting mood)

| Derived from base time | Kept unchanged | Change items |
|---|---|---|
| Daytime -> Dusk | Building/layout/material, core guofeng-cyber element position and structure | Sky tone warms, shadows lengthen, neon light sources turn on in succession, holographic-projection brightness increases, each scene's exclusive light source adapts synchronously |
| Daytime -> Night | Building/layout/material, core guofeng-cyber element position and structure | Overall darkening, addition of lantern-light/moonlight mood, turning on each scene's exclusive self-glow light source — ancient-style: lanterns/rune lamps; urban: megascreens/street lamps/car lights |
| Indoor daytime -> Indoor night | Spatial structure, furniture, guofeng-cyber retrofit structure | Overall tone warms, addition of each scene's exclusive light source — ancient-style: candlelight/lanterns; urban: console light source/LED screen/guofeng wall lamp |

---

## 4. Weather Variants

### Weather Definitions
(Full coverage of physical response for both ancient-style/urban scenes, with material behavior conforming to logic)

| Weather | Visual characteristics | Prompt |
|---|---|---|
| Clear | Bright and transparent, clear shadows, high contrast<br>Ancient-style: sunlight and neon equally bright, clear wood-structure and brick-tile texture<br>Urban: strong highlight reflections on glass curtain walls, clear building shadows, distinct asphalt-road texture | clear sky, bright sunshine, guofeng cyber clear day, sunlight and neon coexisting |
| Overcast | Soft diffuse light, no hard shadows, low contrast, soft colors<br>Ancient-style: neon light effects stand out, natural wood-structure texture<br>Urban: matte texture on metal and concrete, soft building outlines, increased neon saturation | overcast soft light, overcast, guofeng cyber overcast day, soft diffusion, neon standing out |
| Light mist | Layered fog, gradient visibility decrease, hazy air<br>Ancient-style: distant ancient buildings hazy, neon Tyndall light effect, holographic projections scattering in the mist<br>Urban: distant buildings hazy, street lamps and neon forming a light haze, volumetric light penetrating the mist | drifting light mist, lingering fog, guofeng cyber light mist, Tyndall volumetric light, neon light haze |
| Light rain | Rain-streak light trails, damp reflections, puddle reflections<br>Ancient-style: dripping eave tiles, damp wood-structure texture, rain streaks reflecting neon light effects<br>Urban: rain streaks on glass curtain walls, road puddles reflecting neon and buildings, water droplets clinging to metal surfaces | fine rain like silk, light rain curtain, guofeng cyber light rain, rain-streak light trails, neon reflection on water |
| Snowfall | Snow cover, falling snowflakes, cold-white tone, frost texture<br>Ancient-style: snow on flying eaves and dougong brackets, frost on wood and metal surfaces, snowflakes tinted by neon<br>Urban: snow on guofeng eaves atop buildings, snow on roadside-tree branches, thin snow on the road, frost on metal structures | falling snow, silver-clad world, guofeng cyber snowfall, neon-tinted snow, frost texture |

### Weather Derivation Specification
(Shared by both ancient-style/urban scenes, fixing the spatial structure while only changing the weather's physical response)

| Derived from base weather | Kept unchanged | Change items |
|---|---|---|
| Clear -> Light mist | Building/layout, core guofeng-cyber element structure and position | Added fog layer, blurred distant view, reduced saturation, neon light effect forming Tyndall volumetric light, holographic-projection scattering effect |
| Clear -> Light rain | Building/layout, core guofeng-cyber element structure and position | Added rain streaks, ground reflection, cooler tone, each scene's exclusive material gains damp texture, puddle reflections synchronously adapting the scene elements |
| Clear -> Snowfall | Building/layout, core guofeng-cyber element structure and position | Added snow cover, snowflakes, whiter tone, each scene's exclusive structure gains snow cover, frost on metal surfaces, snowflakes tinted by the light source |
| Vegetation must adapt to weather logic | — | Ancient-style: damp flower petals in the rain, snow-hung pine branches in the snow; urban: damp glowing leaves in the rain, frost-hung roadside trees in the snow — weather changes synchronously adapt the vegetation's physical state and light-effect response |

---

## 5. Four-View Reference Sheet Specification

### View Definitions
(Shared by both ancient-style/urban scenes, with fully self-consistent 360-degree spatial logic)

> The camera is fixed at the scene's center point, shooting level toward the front/back/left/right in four directions to form a full 360-degree view, applicable to both ancient-style courtyards and urban blocks.

| Position | View | View direction | Requirement | Prompt |
|---|---|---|---|---|
| Top-left | Front view | Level, facing forward from the center point (0°) | Show the scene's main frontal structure and depth layers, fully presenting the guofeng-cyber fusion logic<br>Ancient-style: front form of ancient buildings with cyber retrofit tiers<br>Urban: front structure of buildings/blocks with guofeng retrofit tiers | front view, eye level, looking forward, guofeng cyber scene front structure, ancient-building/urban fusion front presentation |
| Top-right | Right view | Level, facing right from the center point (90°) | Show the scene's right-side spatial extension and side structure, fully presenting the side form and pipe-network/street layout<br>Ancient-style: right-side structure of ancient buildings and depth of the courtyard<br>Urban: right-side facade of buildings and depth of the street | right side view, eye level, looking right, guofeng cyber scene right-side structure, ancient-building/urban fusion side presentation |
| Bottom-left | Back view | Level, facing backward from the center point (180°) | Show the scene's back structure and spatial depth, fully presenting the back form and equipment/pipe arrangement<br>Ancient-style: back-eave structure and rear-courtyard layout of ancient buildings<br>Urban: back structure of buildings and layout of the back street | back view, eye level, looking backward, guofeng cyber scene back structure, ancient-building/urban fusion back presentation |
| Bottom-right | Left view | Level, facing left from the center point (270°) | Show the scene's left-side spatial extension and side structure, fully presenting the side form and street/element layout<br>Ancient-style: left-side structure of ancient buildings and side-courtyard layout<br>Urban: left-side facade of buildings and side-street layout | left view, eye level, looking left, guofeng cyber scene left-side structure, ancient-building/urban fusion side presentation |

### Frame Specification
(Shared by both ancient-style/urban scenes, with strict consistency control to prevent AI-generated misalignment)

| Item | Constraint |
|---|---|
| Layout | Same frame, four-panel grid (2x2), top-left front view + top-right right view + bottom-left back view + bottom-right left view, forming a complete four-direction view circling the center point |
| People | **Strictly no appearance of any person, human shadow, human outline, or animal outline** |
| Viewpoint | All four views originate from the same center point at a consistent eye height (standard eye-level height of 1.6m), with no height offset |
| Consistency | The building structure/material/tone/lighting/season/weather must be fully consistent across the four views; the position, structure, and light-effect logic of the core guofeng-cyber fusion elements must be fully unified, with no misalignment or omission |
| Lighting | The light-source direction must be fully unified across the four views, with 100% self-consistent lighting logic (the positional relationship and shadow direction of the key light/ambient light/self-glow light source at each viewing angle must be fully correct) |
| Frame ratio | Fixed 1:1 square format (evenly distributed 2x2 grid) |

---

## 6. Prompt Template
(Shared by both ancient-style/urban scenes, with flexible placeholders, ready to copy and use directly)

3D guofeng cyber scene derivative four-view reference sheet, based on the {scene name} concept image,
{scene type: choose one of ancient-style scene/modern urban scene}, chinoiserie cyberpunk, guofeng cyberpunk,
{ancient-style scene exclusive: fusion of traditional ancient architecture and cyber technology, flying eaves and dougong brackets paired with neon tubing, mortise-and-tenon structure combined with mechanical modules, traditional motif etching with neon light effects, holographic guofeng projection, cyberized traditional plaque}
{urban scene exclusive: fusion of modern urban and Chinese culture, Chinese-eave-shaped skyscraper, dougong-structured building facade, traditional-motif glass curtain wall, guofeng neon signage, holographic ink-wash advertisement, cyberized Chinese-style alley}
3D render style, high-precision hard-surface modeling, PBR physical materials, guofeng 3D, cinematic lighting, HDR high dynamic range, ray-traced global illumination,
3D rendered, volumetric lighting,
depth of field, natural lens vignette, subtle chromatic aberration, bokeh,
3D rendered texture, Tyndall volumetric light, natural lighting, physically accurate lighting, neon self-glow lighting,
scene derivative design sheet, environment concept art, no people, no characters, no human figures,
keep the scene's spatial structure and core guofeng-cyber elements fully consistent,
{framing angle (if any)}, {time-of-day description (if any)}, {weather description (if any)},
{core guofeng-cyber element (if any)}, {cyber light-source description (if any)},
{foreground}, {midground}, {background},
{tone description}, {depth-of-field description (if any)}, {sky-tone change (if any)}, {mood adjustment (if any)},
{weather visual characteristics (if any)}, {material surface change (if any)}, {vegetation adaptation description (if any)},
natural material wear marks, age patina, weathered moss, natural fabric drape creases, aged metal texture, weathered wood-structure texture, worn lacquer detail, corroded metal texture,
volumetric light, ambient occlusion, natural light diffusion, soft lighting, neon light haze,
aerial perspective, ultra-clear texture detail, 8K ultra HD, ultra-fine detail,
same frame, four-panel grid (2x2): 360-degree view from the scene's center point, front view + right view + back view + left view,
all four views shot level from the same center point, consistent building structure, consistent material tone, consistent lighting logic, fully unified guofeng-cyber elements,
no person of any kind in the image
no text in the image

> **Usage note**: Judge for yourself, based on the information the user provides, which dimensions of change (framing/time-of-day/weather) to apply — for dimensions not mentioned, simply leave the corresponding field blank and omit it. No need to generate a separate template for every variant. Choose one of ancient-style/urban scene, and delete the exclusive fields for the unselected scene type directly.

---

## 7. Constraint Rules

### Mandatory Rules
(Shared by both ancient-style/urban scenes, mandatory AI-generation triggers)

| No. | Rule |
|---|---|
| R1 | The scene's spatial structure and road-network/courtyard layout must remain fully consistent across all variants |
| R2 | Time-of-day variants must adjust the sky tone and mood, synchronously adapting the on/off logic, brightness, and color temperature of each scene's exclusive light source |
| R3 | Weather variants must adapt the vegetation/material surface, synchronously adapting the physical and lighting response of each scene's exclusive elements |
| R4 | Must be a "four-view reference sheet" (a view circling the center point: front view + right view + back view + left view), strictly following the 2x2 four-panel grid layout |
| R5 | The building structure/material/tone/lighting/season/weather must be fully consistent across the four views, with no misalignment or omission in the guofeng-cyber fusion elements |
| R6 | Scene images must **strictly forbid the appearance of any person, human shadow, human outline, or animal outline** |
| R7 | Judge the change dimensions for yourself based on the information the user provides — no need to split into separate templates |
| R8 | Must include core 3D rendering keywords (at least 2 of: 3D rendered / volumetric lighting / PBR materials) |
| R9 | Must include cinematic lens optical characteristics (at least one of: depth of field / lens vignette / bokeh) |
| R10 | Materials must show natural wear/age marks — a brand-new, flawless "plastic feel"/"CG feel" is forbidden |
| R11 | All variants must preserve the core guofeng-cyber fusion logic — ancient-style scenes: traditional Eastern form as the core with cyber technology as the expression; urban scenes: modern urban space as the core with guofeng culture as the soul; element disconnect is forbidden |
| R12 | Must include guofeng-cyber-exclusive keywords (at least 2 of: chinoiserie cyberpunk, guofeng cyber, ancient-building cyber retrofit, urban guofeng fusion) |
| R13 | All self-glow elements (neon/holographic/megascreen/lanterns) must have lighting logic that conforms to physical rules, perfectly adapting to the ambient light, time of day, and weather, with no light-effect spill or shadow misalignment |

### Strictly Forbidden Rules
(Shared by both ancient-style/urban scenes, mandatory AI-generation avoidance)

| No. | Strictly forbidden |
|---|---|
| X1 | Inconsistent building structure/layout/road network/courtyard between variants |
| X2 | Weather contradicting the season (snowfall in summer, snow accumulation in the rainy season, etc.) |
| X3 | Sudden material/tone/style shifts or inconsistent fusion logic between variants |
| X4 | Any appearance of a person, human shadow, human silhouette, human outline, or animal outline |
| X5 | Inconsistent building structure/material/tone between the four views, or an inconsistent viewpoint center/height |
| X6 | Low-precision modeling/rough texture maps/plastic texture/flat-shading style (terms such as low-poly, rough modeling, and flat color are forbidden) |
| X7 | Materials that are too clean and perfect, with no usage marks or sense of age (avoid a "plastic feel" or "toy feel") |
| X8 | Lighting that is too flat and even, with no depth-of-field blur, no lens optical characteristics, and no volumetric light/ambient occlusion |
| X9 | Rigid splicing or illogical piling-on of guofeng and cyber elements (forbidding unfused, mismatched combinations of ancient buildings and urban towers, or illogical placement of traditional and cyber elements) |
| X10 | Cyber light-effect spill or chaotic lighting logic, self-glow light sources with no reasonable physical support, or incorrect shadow direction |
| X11 | Loss of the scene's core characteristics: an ancient-style scene losing its traditional Eastern architectural/cultural core, or an urban scene losing its modern city spatial logic |
| X12 | Single-scene stylistic imbalance: an ancient-style scene over-cyberized and losing its guofeng core, or an urban scene over-guofeng-ized and losing its cyber futurism |
