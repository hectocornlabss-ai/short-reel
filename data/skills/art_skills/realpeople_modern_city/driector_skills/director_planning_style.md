---
name: director_planning_liveaction_urban
description: Live-Action Urban constraints — defines global constraints for the Live-Action Urban style in color palette system, lighting scheme, texture direction, scene spatial elements, score choice, and ambient sound, with deep adaptation for Seedance 2.0. Applicable to any narrative type.
metaData: director_skills, seedance2.0_adapted
---

# Live-Action Urban Constraints · Live-Action Urban Cinematography · Technique Reference

---

## 1. Color Palette System & Overall Tone

- **Palette Base** — the entire piece is grounded in urban white (#F5F2EC), fog gray (#9EA2A8), and navy (#2D3A4A). Overall color temperature: daytime neutral-leaning-warm (5000-5800K), nighttime cool and warm coexisting (warm streetlight 2800-3200K + cool ambient 6000-8000K). Mid-to-low saturation (35-55%), presenting a "cinematic but not filtered" restrained urban color tone — color comes from actual light sources, not from post-production grading
- **Light Source as Palette** — rather than pairing "primary/accent colors," the image's color is driven by the light source's color temperature and direction. Morning light 3500-4500K (warm white), midday 5500-6500K (cool, clear white), golden hour 2800-3500K (warm gold), blue hour 8000-10000K (deep blue-violet), sodium streetlights 2000-2200K (warm orange-yellow), convenience-store fluorescent light 4000-5000K (cool white)
- **Warm/Cool Narrative Contrast** — warm light (morning light/sunset/table lamps/sodium streetlights) is used for warmth, healing, intimacy, and street-life passages; cool light (midday sky light/overcast diffusion/blue hour/fluorescent light) is used for restraint, detachment, loneliness, and suspense passages. Key transitions can hint at an emotional shift through a switch in light-source color temperature
- **Light-Source-First Principle** — sequence planning should first determine "where the light comes from, what color temperature," then determine the image's color tone. Avoid "this shot's color looks nice but the light source doesn't make sense"
- **Forbidden Color Gamut** — highly saturated fluorescent colors, cheap filter grading (such as teal-and-orange presets/sepia presets), CG neon oversaturation, abnormal color casts produced by non-real light sources

---

## 2. Lighting Scheme System

- **Lighting is Narrative** — 7 lighting schemes correspond to different emotional passages. The director's planning stage determines the lighting-tone direction at the sequence level, not shot by shot. Each scheme must specify "the light's source + color temperature + lighting ratio," ensuring it can be physically simulated by Seedance 2.0
- **Live-Action Photography Lighting Characteristics** — natural-light window scheduling, practical light sources (table lamps/streetlights/screens/neon/car lights), ambient reflection (wet ground/glass curtain walls/water surfaces), the slight sway and breathing quality of handheld camerawork, depth-of-field changes guiding attention — the core lighting techniques of the Live-Action Urban style

| Scheme | Scheme Name | Light Recipe | Lighting Ratio | Applicable Mood |
|---|---|---|---|---|
| A | Urban Gilded | Sunset window light entering at 45° (3000-3500K) + ambient fill (sky reflection 5500K) | 1:3 medium contrast | Highlight moments, elite occasions, warm memories, important meetings |
| B | Daytime Clarity | Large-area window light/sky-light diffusion (5000-5500K), no hard shadows, curtain-softened | 1:1.5 low contrast | Everyday relaxation, urban wandering, healing freshness, daytime office scenes |
| C | Street-Life Warmth | Table lamp/pendant light/sodium streetlight warm main light (2800-3200K), shadows retain detail | 1:4 warm-toned wrap | Everyday at home, street-life bustle, warm beats, late-night intimacy |
| D | Cool Sharp Shadow | Hard side light (cool-white window light 5000K or cool-toned streetlight) + deep shadow | 1:8 high contrast | Urban suspense, confrontation, cold oppression, high-pressure moments |
| E | Interior Diffusion | Natural window-light diffusion (4500-5500K) + indoor overhead light/screen cool-light fill, soft shadows | 1:2 soft transition | Interior daytime, office work, solitary reflection, quiet healing |
| F | Rainy-Night Glow | Streetlights reflected on wet ground (warm 2800K light pools + cool 6000K ambient), scattered light through rain-marked window glass | 1:6 cool-warm coexistence | Walking alone in the rain, longing in solitude, literary melancholy, suspense buildup |
| G | Blue-Hour Verse | Sky diffusion 20 minutes after sunset (8000-10000K deep blue-violet) + newly lit warm artificial points | 1:5 cool base with warm points | Transitional moments, inner monologue, poetic negative space, closing passages |

- **Warm/Cool Light Allocation** — warm-toned light (morning light/sunset/table lamps/sodium streetlights) applies to warm healing, elite highlight, and street-life passages; cool-toned light (midday sky light/overcast diffusion/blue hour/fluorescent light) applies to restrained detachment, suspenseful confrontation, and cold solitude passages. A cool/warm switch point is a narrative turning point
- **Mood-Direction Mapping** — each scene's mood direction should map to one of the lighting schemes (A-G) above. If a scene needs a mixed scheme (e.g. F+G), the dominant light source must be made clear
- **Seedance 2.0 Lighting Adaptation Points**: light-source names should be understandable to the AI ("sunset window light" is better than "warm volumetric light"). Lighting-ratio numbers help the model build a sense of light/dark. Multi-light-source scenes must clearly state the hierarchy of main light + fill light + ambient light

---

## 3. Texture Direction — the Real World in Front of the Camera

> The single yardstick for Live-Action Urban texture: the material behavior captured by the camera, not material parameters generated by a render engine.

- **Skin Texture** — visible pores, natural oily reflection in the T-zone, natural redness at the cheekbones, slight darkness around the eyes — evidence that real skin is "alive." In Seedance 2.0 prompts, use "visible skin pores, natural skin texture, not airbrushed, genuine skin texture" in place of a 3D project's "subsurface scattering/SSS"
- **Hair Texture** — loose strands naturally scattered on the forehead and behind the neck, strands naturally clumping and separating, a translucent, warm-toned rim at the hair's edge in backlight, the natural state of being blown by wind or wetted by rain. In Seedance 2.0, use "flyaway hair strands, natural hair movement, backlit hair rim light" in place of "physics-based hair simulation"
- **Fabric Texture** — the soft creasing of cotton, the twill texture and fading of denim, the loop texture of knitwear, the use patina and bend marks of leather. Clothes carry evidence of "having been worn" — naturally slightly wrinkled hems, wear marks at the cuffs from being put on and taken off. In Seedance 2.0, use "fabric texture with subtle wear, natural fabric drape, lived-in clothing"
- **Architectural Materials** — water stains and fine cracks on concrete walls, reflections and handprints on glass curtain walls, wear patina on metal handrails, fine scratches on tile flooring, use marks on wood surfaces. In Seedance 2.0, use "weathered building materials, real urban surfaces, not showroom clean"
- **The Primacy of a Sense of Age** — materials must not be too clean and perfect. Signs of life (everyday clutter on a table, sticker residue on a wall, floor wear) are not defects, but the foundation of a space's narrative. "Brand-new showroom" and "traceless rendering" looks are prohibited
- **Seedance 2.0 Texture Adaptation Points**: avoid CG terms like "PBR material," "physically based rendering," "8K texture map." Use instead "real texture, natural material surface, visible wear and use marks, not CGI." When describing minor imperfections, use "subtle" rather than modeling terms like "micro-detail"

---

## 4. Live-Action Urban Scene Spatial Elements

Scene elements unique to contemporary Chinese cities and their visual narrative function in Seedance 2.0 video:

- **Windows/floor-to-ceiling windows/glass partitions** — the most central composition and lighting device in Live-Action Urban. A window is a light-source entry point — the window light's direction and color temperature determine the entire interior's lighting logic. Glass partitions create a multi-layered space of "separation and transparency" (foreground → glass → midground → glass → background). In Seedance 2.0, emphasize describing "light entering through window at specific angle" to help the model understand the light-source direction
- **Streets/street trees/crosswalks/traffic** — the spatial skeleton of outdoor scenes. An empty, long street = solitude; heavy traffic = urban detachment; wet post-rain pavement reflecting streetlights = emotional intensity. In Seedance 2.0, street scenes must specify optical descriptions the model can execute, such as "wet road surface reflecting streetlights" or "dry pavement with long afternoon shadows"
- **Streetlights/window light/screen light/car lights** — the core light-source narrative carriers of the urban world. Warm-yellow streetlights (2000-2200K sodium lamps or 3000K LED) = the body heat of the night; a convenience store's cool-white fluorescent light (4000-5000K) = an isolated safe haven in the late-night city; a phone screen's cool blue light on a face = the lonely companionship of a moment alone
- **Old-town alleys/high-rise apartments/office towers/subway stations** — four narrative vessels of urban architecture. An old town's mottled walls and overhead wires = the memory of street-life bustle; a high-rise floor-to-ceiling window overlooking the city = an elite's solitude or sense of control; the layered reflections of an office tower's glass partitions = workplace order and detachment; a subway station's cold fluorescent light + tunnel darkness = a pause within the city's flow
- **Use scenic cutaways to transition between sequences** — cutaways serve as an emotional buffer, not a hard cut. Cutaways of the same space at different times of day/weather (e.g. a rainy street → a sunny street) can hint at the passage of time. In Seedance 2.0, cutaways must specify the lighting logic — a cutaway carries mood too
- **Use visuals rather than dialogue at turning points** — a sudden lighting change (window light blocked by clouds → the space suddenly darkens), a jump cut in shot scale (midground → extreme close-up), a spatial transition (interior → the street view outside the window), a focus shift — let the camera complete the narrative

---

## 5. Live-Action Urban Score and Ambient Sound

### 5.1 Score Instrument Choice

The Live-Action Urban score is primarily acoustic instruments with restrained electronic elements, aiming for "a presence that doesn't upstage the scene":

- **Piano** — the core instrument for cool, solitary, and tender/delicate passages. Best expressed through repeated single notes or sparse chords — the silence between notes matters as much as the notes themselves
- **String Section** — the driving force for passages of emotional buildup and release. Mid-to-low register as a bed (warm but not overwhelming), high register used for a light touch-and-release at emotional peaks
- **Acoustic Guitar** — the base tone for relaxed everyday, healing, and urban-wandering passages. The texture of fingerpicking or light strumming, carrying the natural warmth of "afternoon sunlight"
- **Electric Guitar (clean tone/light overdrive)** — an emotional amplifier for urban nightlife, walking alone on the street, and mild-melancholy passages. A single-note melody line or ambient arpeggios, used sparingly with distortion
- **Electronic Ambient Pad** — a low-frequency bed for urban suspense, nightlife transitions, and passages depicting the passage of time. A "presence that can be overlooked but wrong if removed"
- **Harmonica/Accordion** — a finishing touch for street-life and nostalgic-memory passages. Should not be used throughout — a local appearance itself becomes a narrative signal
- **Light Electronic Beat** — the rhythmic base for passages with an urban sense of rhythm (commute montages, quick cuts of city nightscapes). Broken beats or minimal electronic drums, not exceeding 80 BPM
- Use with caution: a full orchestral tutti, heavy-metal distortion, high-energy electronic dance music — these turn Live-Action Urban into "the score doing the acting"

### 5.2 Score Combination Strategy

| Emotional Stage | Instrument Combination |
|---|---|
| Calm opening/everyday narrative | Solo piano, or piano + an extremely light electronic pad |
| Warm healing/relaxed everyday | Acoustic guitar + piano + a light string bed |
| Workplace elite/highlight moment | Piano + mid-to-high register strings + a light electronic beat |
| Solitude/longing | Sparse single-note piano, or piano + touches of harmonica |
| Emotional turning point/moment of fate | A crescendoing string section + a piano resolution |
| Suspense buildup/urban night | Electronic ambient pad + a light electronic beat + single-note clean electric guitar |
| Street-life bustle/nostalgia | Acoustic guitar + touches of accordion/harmonica + very light strings |
| Ending/afterglow | Piano single notes gradually thinning → a solo ambient sound |

### 5.3 Live-Action Urban Ambient Sound

> Ambient sound is the "auditory texture" of a Live-Action Urban scene, determining the space's sense of immersion. Mark 1-2 core ambient sounds for each scene.

**Core Ambient Sound Layers:**
- **Indoor Ambient Sound**: the low hum of air conditioning / keyboard clacking / an elevator chime / a dripping faucet / a refrigerator compressor running / curtains gently blown by wind / a ticking clock
- **Outdoor Ambient Sound**: tire noise from traffic / distant voices / wind through buildings / the rustle of street-tree leaves / birdsong / rain hitting car windows and the pavement / a muffled construction thud / the click of a bike-share lock
- **Transitional Ambient Sound**: subway station-arrival announcements and braking sounds / mall background music and crowd noise / an elevator running and a door-open chime / footsteps in a hallway approaching from a distance
- **Silence is Also an Ambient Sound**: a late-night apartment with only the low hum of the refrigerator, a 5 a.m. street with not even traffic noise — this "absence of sound" is itself a narrative device

Sound Design Philosophy:
- Ambient sound isn't pasted on — it's the sound the scene naturally carries
- At a key moment, "pulling out" the ambient sound creates more emotional impact than "adding" a sound effect
- A change in ambient sound can hint at a spatial transition — walking from a noisy street into a quiet convenience store, the sound suddenly "turns clean"

---

## 6. Seedance 2.0 Specific Adaptation

### 6.1 Core Adaptation Principle

> Seedance 2.0 is a video model that prioritizes realistic physical simulation. The Live-Action Urban style has a natural affinity with Seedance 2.0 — but "cinematography terminology" must be translated into "physical instructions" the model can execute.

| Adaptation Dimension | General Prompt Phrasing | Seedance 2.0 Optimized Phrasing |
|---|---|---|
| Light source description | Warm window light | Afternoon sunlight enters at a 45° angle from the window on the right side of the frame, at a color temperature of about 4500K warm white, casting an elongated window-frame shadow on the floor |
| Expression | A gentle expression | The corners of the mouth naturally lift slightly, fine smile lines appear at the outer eye corners, a natural catchlight in the eyes while looking at the other person |
| Action | Turning around | Slowly rotating about 90 degrees to the right, weight shifting from the left foot to the right foot, the whole motion taking about 1.5 seconds, the hem of the clothing swaying naturally during the turn |
| Material | Genuine skin texture | Pores faintly visible on the cheeks, a natural slight oily reflection in the T-zone, not smoothed, not silicone-like |
| Weather | A rainy street | Light rain, wet road surface reflecting warm-yellow light pools from streetlights, rain marks on the window glass slightly blurring the street view outside |

### 6.2 Image Quality Baseline (Seedance 2.0 Live-Action Urban Specific)
1080p, live-action cinematic quality, genuine skin texture, natural light and shadow, 24fps cinematic frame rate, handheld breathing or gimbal flow, genuine grain structure, not CG, not rendered

### 6.3 Lighting Effect Instructions (Seedance 2.0 Live-Action Urban Specific, Selected by Lighting Scheme)

| Lighting Scheme | Seedance 2.0 Lighting Instruction |
|---|---|
| A Urban Gilded | Natural sunset light entering at 45°, color temperature about 3000-3500K warm gold, sky ambient light at 5500K as shadow fill, lighting ratio about 1:3 |
| B Daytime Clarity | Large-area diffused window light, color temperature about 5000-5500K neutral cool white, curtains softening the light, no hard shadows, lighting ratio about 1:1.5 low contrast |
| C Street-Life Warmth | Table-lamp warm light as the main source, color temperature 2800-3200K, shadows retaining object-outline detail, lighting ratio about 1:4 warm-toned wrap |
| D Cool Sharp Shadow | Hard side window light, cool-white 5000K main light, deep but detailed shadows, lighting ratio about 1:8 high contrast |
| E Interior Diffusion | Natural window-light diffusion 4500-5500K as the main light, neutral indoor overhead-light fill, a soft shadow transition, lighting ratio about 1:2 |
| F Rainy-Night Glow | Streetlights reflected in warm-toned light pools on wet ground at 2800K, cool ambient at 6000K, scattered light through rain-marked window glass, lighting ratio about 1:6 cool-warm coexistence |
| G Blue-Hour Verse | Deep blue-violet sky diffusion after sunset at about 8000-10000K, newly lit warm artificial points on the ground at 2800K, lighting ratio about 1:5 cool base with warm points |

### 6.4 Physical Logic Made Concrete (Live-Action Urban Specific)

> Seedance 2.0 can understand real-world physical laws. All actions must be described with specific values and physical detail — words like "then," "afterward," or "appropriately" are prohibited.

| Scene | Abstract Phrasing (Prohibited) | Seedance 2.0 Concrete Phrasing |
|---|---|---|
| Getting up and leaving | Then stands up | Both hands press on the chair's armrests, the knees move forward, after 0.5 seconds the body's weight shifts forward onto both feet, then after another 1 second the body stands fully upright — the whole motion taking about 2 seconds, pausing for 0.5 seconds after standing |
| Turning the head | Turns to look out the window | The head slowly rotates about 45 degrees to the right, the gaze shifting from the coffee cup on the table to the city skyline outside the window, the rotation taking about 1 second, the gaze resting in the distance once in position |
| Pouring coffee | Poured a cup of coffee | The right hand holds the coffee pot's handle, the spout tilted about 30 degrees, dark-brown coffee pouring into a white ceramic cup, the liquid level rising from the bottom of the cup to two-thirds of the way up, the whole motion taking about 3 seconds, steam slowly rising from the cup's mouth |
| Walking in the rain | Walking alone in the rain | Walking slowly on the wet road surface at a pace of about one step per second, each footfall creating a fine ripple where the sole meets the water, warm-yellow streetlight forming an elongated reflection on the wet road, visible rain streaks under the streetlight |

### 6.5 Spatial Logic Made Concrete (Live-Action Urban Specific)

**Spatial Coordinate Definition Standard:**
- **Horizontal Position**: the left third of the frame / the center of the frame / the right side of the frame, or relative to a fixed object in the scene ("1 meter from the floor-to-ceiling window")
- **Depth Position**: foreground (1-2 meters from the camera) / midground (3-5 meters from the camera) / background / a distant view outside the window
- **Between Characters**: relative distance and orientation ("A and B face each other, about 0.8 meters apart, A slightly to the left, B slightly to the right")
- **Person-to-Space Relationship**: distance and direction relative to a fixed object in the scene

**Stance Continuity Example:**
```
[End of Segment A]
A stands in front of the floor-to-ceiling window, about 0.5 meters from the window, facing outward, positioned slightly right of center in the frame.
The body turns slightly right by about 20 degrees, the right hand lifting to set the coffee cup down on the side table to the right.

[Start of Segment B]
A's right hand has just moved away from the cup; the cup is on the side table. A is still standing in front of the floor-to-ceiling window, position unchanged.
The sky outside the window has shifted from dusk to blue hour; the indoor table lamp is now lit.
```

### 6.6 @reference Mandatory Anchoring Syntax

> Character/scene/prop consistency in Seedance 2.0 relies on @reference syntax.
Character anchoring: must reference @ImageX, specifying its purpose
Example: @Image1_office_woman_commute_suit as the character appearance reference, @Image2_office_tower_floor-to-ceiling-window_office as the scene environment reference

Scene anchoring: must reference the corresponding scene asset's @ImageX
Prop anchoring: if there is a handheld or key prop, reference the corresponding @ImageX

### 6.7 Multi-Shot Sequence Best Practices (Seedance 2.0 Live-Action Urban)

> Seedance 2.0 recommends 2-3 shots per segment, with a total duration of 4-12 seconds.
```
[Shot 1: Midground · Locked-off] In front of an office floor-to-ceiling window, A stands sideways holding a coffee cup, looking outside.
Afternoon window light enters from the right at 45° (about 4500K), casting a long window-frame shadow on the floor.
A is positioned slightly right of center in the frame, about 3 meters from the camera. Duration about 4 seconds.

[Cut to]
[Shot 2: Close-up · Slow push-in] A's face slowly turns from a 45° side angle toward the camera.
The corners of the mouth lift slightly, the gaze pulling back from outside the window, a natural highlight from the window light in the eyes.
Facial pores and skin texture visible, not smoothed. Duration about 3 seconds.

[Cut to]
[Shot 3: Extreme close-up · Locked-off] A's hand sets the coffee cup down on the side table, the base of the cup making a soft sound as it touches the wooden tabletop.
The window light gilds the rim of the cup with a warm-gold rim light. Duration about 2 seconds.
```

### 6.8 Live-Action Urban Seedance 2.0 Negative Terms (No More Than 7)
3D rendering, CG animation, plastic mask look, smoothed skin, non-photorealistic texture, floating objects, image flicker

---

## 7. Global Narrative Constraints

- **A Cutaway Is a Mood** — a scenic cutaway (the same space under different light) is recommended as an emotional buffer between narrative sequences. A cutaway isn't "nothing to shoot" — it's "letting the audience catch their breath"
- **Continuity and Change of Light** — within the same space, the window-light angle in a daytime sequence should change continuously over time. If a dialogue scene spans half an hour, the window light's position should have shifted somewhat — Seedance 2.0 can understand this kind of "reasonable partial inconsistency"
- **Character Light-Source Consistency** — the direction of facial lighting for all characters within the same shot must be unified. If the main light comes from the left, everyone's left side of the face should be the lit side
- **Avoid "Over-directing"** — Live-Action Urban pursues "life captured by the camera," not "plot arranged by the screenwriter." Allow uncontrolled everyday details in the frame (wind stirring the curtains, a passing cat, a slight ripple in a coffee cup)
- **The Value of Silence** — not every shot needs to be filled with action and dialogue. A 3-second static close-up — a character simply breathing, blinking, existing — is often more powerful than any line of dialogue

---

## 8. Quick Decision Card

### Mood → Lighting Scheme + Score Quick Reference

| Mood | Lighting Scheme | Score Direction |
|---|---|---|
| Warm everyday | C Street-Life Warmth or E Interior Diffusion | Acoustic guitar + piano |
| Workplace restraint | E Interior Diffusion or B Daytime Clarity | Piano + light strings |
| Lonely longing | F Rainy-Night Glow or G Blue-Hour Verse | Sparse single-note piano |
| Highlight moment | A Urban Gilded | Piano + string section |
| Suspenseful tension | D Cool Sharp Shadow | Electronic pad + light beat |
| Healing renewal | B Daytime Clarity | Acoustic guitar + piano |
| Street-life bustle | C Street-Life Warmth | Acoustic guitar + accordion |
| Poetic negative space | G Blue-Hour Verse | Piano fading into a solo ambient sound |
