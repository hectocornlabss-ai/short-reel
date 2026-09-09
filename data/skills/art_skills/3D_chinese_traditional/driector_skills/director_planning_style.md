---
name: director_planning_style
description: Chinese Traditional 3D constraints — defines the global constraints for the Chinese Traditional 3D style across color-tone systems, lighting schemes, texture direction, scene spatial elements, instrument selection, and ambient sound. Applicable to any narrative genre.
metaData: director_skills
---

# Chinese Traditional 3D Constraints · Chinese Traditional 3D · Technique Reference

---

## 1. Color-Tone System and Overall Mood

- **Base Tone** — The entire piece is grounded in moon white (C1), jade green (C2), and indigo (C4) as base colors, with an overall neutral-leaning color temperature (4800-5500K) and medium-high saturation (55-75%), presenting the elegant and grand color tone of traditional Eastern aesthetics
- **Emotional Palette Driven** — Six emotional palettes (palace splendor / landscape mood / boudoir tenderness / martial-arts severity / festive celebration / moonlit night serenity) correspond to different narrative passages; palette switches should sync with the story arc
- **Cool-Warm Narrative Contrast** — Warm colors (vermilion C3, golden yellow C5, rouge C7, gamboge yellow C9) serve as the visual signal for narrative turning points, used for emotional warming and festive passages; cool colors (indigo C4, ink black C6) are used for severe, melancholic, or serene passages
- **Palette-First Principle** — Passage planning should first bind the emotional scene (palace splendor / landscape mood / boudoir tenderness / martial-arts severity / festive celebration / moonlit night serenity, etc.), then determine the primary + secondary colors and lighting scheme, avoiding "the plot is right but the emotional color is wrong"
- **Prohibited Color Gamut** — Highly saturated fluorescent colors, neon colors, and modern digital color systems are all incompatible with this style

---

## 2. Lighting Scheme System

- **Lighting as Narrative** — 7 lighting schemes correspond to different emotional passages; the director's planning stage should determine the lighting mood direction at the passage level, rather than shot by shot
- **3D Rendering Lighting Traits** — Volumetric lighting, ambient occlusion (AO), and depth-of-field blur are the core lighting techniques of the Chinese Traditional 3D style; all lighting schemes must reflect PBR physically-based material rendering texture

| Scheme | Name | Tone Tendency | Applicable Emotion |
|---|---|---|---|
| A | Warm Radiant Splendor | Vermilion + golden-yellow highlights + moon-white base | Palace splendor, solemn grandeur, grand festivity |
| B | Jade-Green Landscape Mood | Jade green + moon-white mist + diffused volumetric light | Landscape mood, poetic and distant, ethereal and light |
| C | Soft Warm Glow | Rouge warm tone + golden-yellow accents + soft shadows | Boudoir tenderness, soft and delicate, everyday warmth |
| D | Cool Severity | Ink black + indigo + hard-light contrast | Martial-arts severity, stern and sharp, oppressive mood |
| E | Gauze-Diffused Window Light | Moon-white base + natural side light + ambient occlusion | Interior daytime, everyday living, quiet elegance |
| F | Moonlit Clarity | Indigo + moon-white cool light + golden-yellow warm accents | Moonlit night serenity, tranquil and beautiful, solitary longing |
| G | Festive Warm Light | Vermilion + gamboge yellow + high-saturation warm light | Festival celebration, lively and joyful, richly colored |

- **Cool/Warm Light Allocation** — Warm light (vermilion/golden-yellow/gamboge yellow) applies to splendor, tenderness, and festive passages; cool light (indigo/ink black) applies to severity, melancholy, and serene passages. The director may adjust the cool-warm switch points as the narrative requires
- **Mood-to-Scheme Mapping** — Every scene's mood direction should be mappable to one of the lighting schemes (A-G) above, ensuring visual consistency

---

## 3. Texture Direction

- **3D Rendering as the Anchor** — The core of Chinese Traditional 3D: high-precision modeling, PBR material rendering, volumetric lighting, ambient occlusion, depth-of-field blur, presenting a cinematic-grade 3D rendered image
- **PBR Materials Above All** — All costumes, makeup, and props must be credible through PBR physical rendering: the sheen and drape of silk, the grain and patina of wood, the reflection and texture of metal, the translucence and warmth of jade, the glossy glaze of porcelain
- **Volumetric Light and Depth of Field** — Volumetric light is the soul of the Chinese Traditional 3D image: exterior scenes must have aerial perspective and volumetric light scattering; interior scenes create volumetric light effects via window light/candlelight; depth-of-field blur reinforces spatial depth
- **Texture of Time** — Materials must not be overly clean and perfect: wood surfaces show usage marks, stone surfaces show weathering and moss, fabric shows natural creasing, roof tiles show moss traces and chipping. A "plastic feel" and a pristine, flawless "CG look" are prohibited
- **3D Does Not Mean Cold** — Chinese Traditional 3D emphasizes the warmth of Eastern aesthetics, conveying emotion through material texture, lighting layers, and color pairing rather than relying on spectacle effects

---

## 4. Ancient-Style Scene Spatial Elements

Scene elements unique to the ancient-style world setting and their visual narrative function:

- **Gauze Curtains/Screens/Door Frames** — A natural framing-composition prop, creating a layered sense of "not being able to see through" and spatial depth. In 3D rendering, the semi-translucent material of gauze curtains and its light-transmission effect are a visual highlight
- **Courtyard/Flowering Trees/Rain Curtain** — A natural vehicle for negative-space composition, where the scene is the emotion: a courtyard full of blossoms = release, sitting alone in the rain = solitude, falling leaves = parting sorrow. In 3D scenes, the volumetric sense of vegetation and its light interaction are especially important
- **Candlelight/Moonlight/Window Light** — The light-source vehicle of the ancient-style world: candlelight = warm/intimate (Scheme C), moonlight = cool/serene (Scheme F), window light = everyday/quiet (Scheme E). In 3D rendering, the volumetric light effect of the light source and its PBR material reflection are key
- **Flying Eaves/Bracket Sets/Gray Tiles** — Iconic elements of ancient-style architecture; 3D modeling must reflect the exquisite detail of painted beams and carved rafters, and the materials must carry a sense of age
- **Use Scene Cutaways Between Passages for Transitions** — This style has a rich library of scene assets (variants across time of day/weather/season); passage transitions should use scene cutaways as an emotional buffer rather than hard cuts
- **Use Visuals, Not Dialogue, for Turning Points** — Prefer visual means (sudden lighting shifts, shot-size jump cuts, metaphorical cutaways) over dialogue explanation

---

## 5. Ancient-Style Instruments and Ambient Sound

Sound-element constraints under the ancient-style world setting:

### Instrument Selection

- **Xiao (vertical flute)** — The core instrument for desolate, lonely, sorrowful passages; best conveys a cold, mournful quality
- **Erhu** — For passages of emotional turbulence, grief, and longing; its weeping, string-drawn quality suits emotional outbursts
- **Suona** — For passages with intense emotional swings (great sorrow and joy, fateful turning points, climaxes); use sparingly, but it lands like a bombshell when used
- **Guqin** — For setting the tone at the opening / calm passages, paired with the xiao to convey landscape mood
- **Pipa** — An accent for tense, urgent passages; suits martial-arts severity scenes
- **Guzheng** — The atmosphere instrument for palace splendor and festive celebration passages; gorgeous and elegant
- String-instrument beds can add cinematic feel but should not overpower

### Instrument Combination Strategy

| Emotional Stage | Instrument Combination |
|---|---|
| Calm/Opening/Closing | Solo guqin, or guqin + xiao |
| Landscape mood/Ethereal | Xiao + guqin + dizi (flute) |
| Palace splendor/Festivity | Guzheng + bianzhong (chime bells) + strings |
| Deepening sorrow | Xiao + erhu |
| Emotional outburst/Fateful turning point | Solo suona, or suona + erhu |
| Martial-arts severity/Tension | Pipa accents + string-bed underlay |
| Gentle everyday life | Guqin + dizi + light strings |

### Ancient-Style Ambient Sound

- **Typical Ambient Sound Layers** — Cicadas and insects chirping / babbling stream / wind through bamboo / marketplace hawking / night rain on the eaves / rustling fabric / soft wind-chime rings / birdsong / falling petals rustling
- **Mark 1-2 core ambient sounds per scene** to aid subsequent sound design. The richer the ambient sound layers, the more immersive the ancient-style scene
