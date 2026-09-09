---
name: liveaction_urban_storyboard_table
description: Storyboard table Live-Action Urban constraints — defines Live-Action Urban's conventions for lighting and mood, photographic texture, action pacing, environmental motion, camera-movement and transition taboos within the storyboard table, with deep adaptation for Seedance 2.0. Applicable to any urban narrative type.
metaData: director_skills, seedance2.0_adapted
---

# Storyboard Table Live-Action Urban Constraints · Live-Action Urban Cinematography · Technique Reference

---

## 1. Purpose of the Storyboard Table

The storyboard table is the director's core tool for translating the script into shot language. This constraint set is oriented toward Seedance 2.0 video generation — all lighting, action, and spatial descriptions use concrete language the model can execute. Do not write abstract emotional summaries, and do not write render parameters the model can't understand.

---

## 2. Seedance 2.0 Description Ironclad Rules

> All descriptions in a Live-Action Urban storyboard table must follow this translation principle — translating "directorial intent" into "AI-executable physical instructions."

| Prohibited Abstract Phrasing | Seedance 2.0 Concrete Replacement |
|---|---|
| She's very sad | Brow and eyes lowered, an unfocused gaze looking at the ground, the corners of the mouth naturally drooping, the right hand unconsciously rubbing the left wrist |
| The sunlight is nice | Afternoon sunlight enters at a 45° angle from the left window (about 4500K warm white), casting a rectangular window-frame light patch on the floor |
| The street is lively | Roadside shopfronts fully lit with warm-yellow light (about 3000K), five pedestrians walking slowly along the pedestrian street, one of them pushing a stroller |
| He turns and leaves | Slowly rotates about 90 degrees to the right, facing right in the frame, the right foot stepping forward about 0.6 meters first, the left foot following, the whole motion taking about 2 seconds |
| The atmosphere is oppressive | A single hard side window light (cool white, about 5000K) striking at an angle, the rest of the room dark but with faint outlines visible, a lighting ratio of about 1:8 |
| The wind blows the curtain | The white sheer curtain billows about 15cm from a breeze outside the window, then settles back, repeating in a roughly 2-second cycle |

---

## 3. Lighting and Mood — Seedance 2.0 Physical Light-Source Description

### 3.1 Unified Lighting Within a Scene

A single scene should not contain more than one core lighting scheme, unless there is a narrative-driven light-source change (such as someone turning on a table lamp, sky light overtaking indoor lighting after sunrise, or moving from indoors to outdoors). Light-source changes must be marked in the storyboard table along with the triggering event.

### 3.2 Light-Source Statement Syntax (Required for Every Shot)
```
[Light Source] Key light: {light source type}, {direction}, {color temperature K}, {soft/hard}
[Light Source] Fill/ambient light: {light source type}, {direction}, {color temperature K}
[Lighting Ratio] About 1:{X}
```

### 3.3 Emotion → Light Source Matrix

| Emotion | Light Recipe (Directly Fillable into Seedance 2.0) | Visual Keywords |
|---|---|---|
| Workplace Restraint | Cool-white window light as the key (5000-5500K) entering from the floor-to-ceiling window direction, cool screen light (6500K) as fill. Lighting ratio about 1:3 | Neutral-leaning-cool, clear materials |
| Everyday Relaxation | Large-area diffused window light (5000K), curtain-softened. Lighting ratio about 1:1.5 low contrast | Luminous, low contrast, healing |
| Warm Intimacy | Warm table-lamp key light (2800-3200K), shadows retaining object outlines. Lighting ratio about 1:4 | A warm-toned wrap, intimate |
| Street-Life Bustle | Mixed light sources — warm-yellow sodium streetlights (2000-2200K) dominant, cool-white shopfronts (4000K) as a local counterpoint. Lighting ratio about 1:5 | Warm-tone dominant, lively |
| Lonely Rainy Night | Streetlights reflected in warm-yellow light pools on wet pavement (2800K), a cool ambient tone (6000K sky diffusion), scattered light through rain-marked window glass. Lighting ratio about 1:6 | Cool and warm coexisting, poetic loneliness |
| Suspenseful Tension | A single hard side window light (cool white 5000K), a high lighting ratio of about 1:8, shadows deep but with faint outlines. Lighting ratio about 1:8 | Oppressive, uncertain |
| Healing Renewal | Ample natural-light diffusion (5000-5500K), sky light + ground-reflection fill. Lighting ratio about 1:1.5 | High-key, luminous, hopeful |
| Late-Night Vulnerability | A single warm light source — a table lamp/streetlight outside the window (2800-3200K) forming island-style lighting, one side of the face lit, the other dark. Lighting ratio about 1:8 | A minimal light source, intimate and vulnerable |

### 3.4 Cool/Warm Tone and Narrative Stage

- **Cool Light Dominant** (5000K+): workplace restraint, suspenseful tension, cool solitude, rainy nights
- **Warm Light Dominant** (2000-3500K): warm intimacy, street-life bustle, everyday at home, golden hour
- **Cool and Warm Coexisting**: transitional moments (blue hour + newly lit warm lamps), rainy nights (cool ambient + warm light pools)
- **A Light-Source Change = a Narrative Signal**: the sky outside the window gradually shifting from daytime cool-white to evening warm-gold = the passage of time; walking from an office's cool white into warm-yellow streetlights on the street = a shift in scene and mood

### 3.5 Seedance 2.0 Lighting Adaptation Points

- Color-temperature numbers help the model calibrate white-balance tendency: "color temperature about 3200K" is better than "warm light"
- Lighting-ratio numbers help the model build a sense of light/dark: "lighting ratio about 1:4" is better than "soft shadows"
- The light source must have a clear origin: "entering at a 45° angle from the window on the left side of the frame" is better than "side light"
- Describe the reflection path of ambient light: "streetlights reflected in warm-yellow light pools on wet pavement" is better than "the ground has a warm reflection"

---

## 4. Environmental Motion — Letting the Frame Breathe

### 4.1 Motion Density

Arrange at least one shot with environmental motion every 3-4 shots. Static dialogue scenes are no exception — at least one shot should show leaves moving outside the window, steam rising from a coffee cup, or curtains stirred by a breeze.

### 4.2 Urban Environmental Motion Elements (Seedance 2.0 Executable)

| Scene | Describable Environmental Motion |
|---|---|
| Interior | Curtains gently billow about 10cm from a breeze then settle back (about a 2-second cycle), steam slowly rising from a coffee cup's rim, a small insect drifting through a table lamp's light, passing traffic lights outside occasionally sweeping across the ceiling |
| Street | Street-tree leaves rustling, a distant pedestrian waiting at a crosswalk then walking across, a bicycle slowly riding through the midground, a puddle by the roadside rippling as a car wheel passes through it |
| Cafe/Restaurant | Steam rising from the coffee machine, the light and shadow at a window-side seat shifting as clouds move outside, the repeated motion of bar staff wiping glasses, a door chime ringing as a breeze enters with the opening door |
| Office | Blinds' striped shadows slowly shifting as the outdoor light angle changes, a computer screensaver switching, a water dispenser occasionally making a bubbling sound, a printer ejecting paper |
| Late-Night Location | A convenience store's automatic door repeatedly opening and closing, traffic lights casting alternating red/green shadows on the sidewalk, a distant passing car's headlights sweeping a band of light across the ceiling |
| Rooftop | Laundry on a clothesline stirred by the wind, a light in the distant city skyline occasionally turning on or off, clouds slowly drifting across the sky |

### 4.3 Seedance 2.0 Environmental Motion Description Standard

- Motion must have a concrete trajectory and speed: "leaves stirred by the wind, a slight sway about 2-3 times per second" is better than "the tree is moving"
- Light-source motion must be consistent with the spatial light-source logic: "when a cloud blocks the sun, the indoor window-light area shrinks by about 40%, lasting about 3 seconds before recovering"
- Sourceless motion is prohibited: no wind = curtains don't move. No open window indoors = no breeze

---

## 5. Character Action Pacing — Seedance 2.0 Physical Logic Made Concrete

### 5.1 Action Description Ironclad Rules

Every character action must describe: **trajectory + speed/duration + coordination of body parts + effect on surrounding objects**.

### 5.2 Everyday Action Concrete Library

| Action | Seedance 2.0 Executable Description |
|---|---|
| Standing Up | Both hands press on the chair's armrests, the knees move forward, after 0.5 seconds the body's weight shifts forward onto both feet, then after another 1 second the body stands fully upright — the whole motion taking about 2 seconds, pausing for about 0.5 seconds after standing |
| Turning the Head | The head slowly rotates about 30 degrees to the right, the gaze shifting from documents on the table to outside the window, the rotation taking about 1 second, the gaze resting in the distance for about 1 second once in position |
| Drinking Coffee | The right hand holds the cup handle, the cup's rim approaching the lips, the cup tilted about 15 degrees, the liquid touching the upper lip, a small sip taking about 1 second, the cup lowering back to its original position over about 1 second |
| Walking to the Window | Rising from the office chair (about 2 seconds), walking at a steady pace toward the floor-to-ceiling window on the right side of the frame for about 4 steps (about 3 meters, taking about 3 seconds), stopping about 0.5 meters from the window |
| Sitting Down | The body leans forward with a slight knee bend, the hips make contact with the seat, compressing it about 2cm (spring/cushion deformation), the back naturally leaning against the chair back — the whole motion taking about 1.5 seconds |
| Setting Down an Object | The right hand lowers the coffee cup from chest height to the table, the base of the cup making a slight impact sound as it touches the wooden tabletop, the fingers releasing the cup handle — the whole motion taking about 1 second |
| Pushing Open a Door and Entering | The right hand grips the door handle and turns it down about 30 degrees, pushing the door inward about 70 degrees, the body following through the doorway, the right foot crossing the threshold first — the whole motion taking about 2 seconds |
| Looking at a Phone | The right hand picks up the phone (about 15cm long) from the table, the thumb tapping the bottom of the screen to wake it, the screen's cool light reflecting on the right side of the face, the eyes narrowing slightly to focus on the screen — the whole motion taking about 3 seconds |
| Putting On/Draping a Coat | The right hand reaches into the right sleeve, the left hand reaches back into the left sleeve, both shoulders drawing back slightly so the coat settles onto the shoulders, the collar naturally flipping out — the whole motion taking about 4 seconds |
| Embracing | A steps forward about 0.5 meters, both arms wrapping around B's shoulders and back, both hands lightly overlapping on B's back, the face resting near B's ear, held for about 3 seconds |

### 5.3 Action Pacing and Narrative Scene

- **Everyday Narrative/Dramatic Scenes**: actions steady and restrained, each micro-movement marked with duration and trajectory. A gentle pace — not slow, but "unhurried"
- **Emotionally Turbulent Scenes**: action scale and speed slightly increased. A character might unconsciously tap their fingers on the table faster during dialogue, or their shoulders rise and fall more visibly with breathing
- **Conflict Scenes**: actions crisp and decisive, but still with a physical trajectory. A strike/shove must be specific: "the right hand pushes against the other person's left shoulder from the front, the other person's weight shifting back about 20cm"
- Prohibited: piling up fast actions with no narrative reason, teleportation with no physical logic, vague descriptions like "made a gesture"

### 5.4 Clothing Motion

The motion of real-life clothing is a natural asset of the frame — not "fabric-simulation parameters," but "the hem of a trench coat lifted about 20 degrees by the wind," "one end of a scarf sliding off the shoulder," "a skirt hem swaying left and right about 10cm with each stride." Mark clothing motion detail in the storyboard's visual description.

---

## 6. Spatial Logic Made Concrete — the Seedance 2.0 Spatial Coordinate System

### 6.1 Spatial Information Required for Every Shot
```
Horizontal Position: left/center/right of the frame, or the left third of the frame
Depth Position: {value} meters from the camera, foreground/midground/background
Character-to-Scene Relationship: {value} meters from {fixed object}
(If more than one person) The relative distance and orientation between character A and B
```

### 6.2 Stance Continuity Example
```
[End of Segment A]
A stands in front of the floor-to-ceiling window, about 0.5 meters from the window, facing outward, positioned slightly right of center in the frame, about 4 meters from the camera.
Outside the window is the afternoon city skyline, sunlight entering at an angle from the window on the right side of the frame.
A's right hand holds a coffee cup at chest height, the cup about 15cm from the lips.

[Start of Segment B]
A's coffee cup has just lowered about 10cm from the lips, the cup still at chest height. A is still standing in front of the floor-to-ceiling window (position unchanged).
The sky outside the window has shifted to blue hour — deep blue-violet, the city's building outline lights and streetlights now on.
The indoor table lamp is now on (side table on the left of the frame), warm-yellow light (about 3000K) falling on the left side of A's face.
```

### 6.3 Spatial Changes Must Be Concrete

| Abstract (Prohibited) | Seedance 2.0 Concrete |
|---|---|
| She walks closer | A walks at a steady pace from the frame's background (about 5 meters from the camera, at the doorway) toward the camera for 4 steps (about 3 meters), stopping about 2 meters from the camera — taking about 4 seconds |
| The two face each other | A is positioned slightly left of center in the frame (about 3 meters from the camera), B is positioned slightly right of center in the frame (about 3 meters from the camera), the two facing each other, about 0.8 meters apart |
| From indoors to outdoors | A walks from indoors (about 3 meters from the camera) toward the doorway, pushes open the door (the door rotating inward about 80 degrees), the right foot crossing the threshold, entering the outdoor street — the outdoor warm-yellow streetlight instantly replacing the indoor cool-white fluorescent light |

---

## 7. Camera Movement Specification — Seedance 2.0 Camera Motion

### 7.1 Allowed Camera Movements

| Movement | Seedance 2.0 Description | Applicable Scene |
|---|---|---|
| Locked-off | The camera stays fixed, the frame static | Dialogue, everyday scenes, empty-frame pauses, emotional gazes |
| Slight Handheld Sway | The camera has a slight, irregular sway (amplitude about ±2cm), simulating the breathing quality of handheld shooting | Emotional turbulence, walking on the street, intimate following, a subjective viewpoint |
| Gimbal Flow | The camera moves smoothly at a steady speed, no shake | Urban wandering, character entrances, revealing space, transitions |
| Slow Push-in | The camera slowly advances toward the subject, at a rate of about 0.3 meters per second | An emotion heating up, the truth closing in, attention focusing |
| Slow Pull-out | The camera slowly retreats, at a rate of about 0.3 meters per second | A farewell, closing a scene, revealing the full scope |
| Tracking Shot | The camera moves in sync with the character, maintaining a distance of about 2 meters | Walking alongside, an urban chase |
| Pan | The camera rotates horizontally/vertically in place | A shift in gaze, establishing a spatial relationship |

### 7.2 Prohibited Camera Movements

- Fast whip pans or abrupt push-ins/pull-outs with no narrative purpose (a push/pull rate exceeding 1 meter per second)
- Violent handheld shake lasting more than 3 seconds (unless narratively depicting a subjective blow or dizziness)
- Illogical flashy transitions — wipes, spins, venetian blinds, page turns, or other effect-based transitions
- A camera doing a 360-degree rotation with no reason

### 7.3 Live-Action Urban Camera Movement Philosophy

- A locked-off shot is the first choice — letting the audience see a real person naturally existing in a real space
- Slight handheld sway is used in emotional passages — but the sway amplitude must not exceed the normal range of a cinematic documentary style
- The start and end of a moving shot must be smooth, the movement steady throughout — sudden acceleration or an abrupt stop is prohibited

---

## 8. Transition Specification

### 8.1 Allowed Transition Methods

| Transition | Visual Execution | Narrative Function |
|---|---|---|
| Hard Cut | A direct switch | Shot changes within the same scene (default) |
| Lighting-Match Transition | Two scenes switched under similar lighting logic | The passage of time, parallel narrative. Example: morning light outside a window at location A → morning light outside a window at location B |
| Spatial-Match Transition | Two spaces echoing each other in composition or elements | A scene jump. Example: the moment an office door closes → the moment an apartment door opens |
| Cutaway Transition | Inserting a scenic cutaway (3-5 seconds) | An emotional buffer, a chapter division, hinting at the passage of time |
| Focus-Shift Transition | The outgoing shot's focus shifts from the subject to the background, the incoming shot gradually focusing on the subject out of a blurred background | A scene switch, a shift in attention |

### 8.2 Prohibited Transitions

- Purely visual-effect transitions (page turns, wipes, venetian blinds, mosaic dissolves)
- Rotation/zoom transitions with no narrative logic
- Using more than two transition methods within the same scene

---

## 9. Audio-Visual Sync Planning (Seedance 2.0 Specific)

### 9.1 Ambient Sound Annotation Standard

Mark 1-2 core ambient sounds per scene, written in the storyboard table's ambient-sound column:

| Scene | Suggested Ambient Sound |
|---|---|
| Office | Light keyboard clacking / the low hum of air conditioning / a distant printer |
| Cafe | Steam from the coffee machine / cups lightly clinking / faint background voices |
| Street, Daytime | Tire noise from traffic / distant voices / wind rustling street-tree leaves |
| Street, Rainy Night | Rain hitting car windows and the pavement / the splash of an occasional passing car |
| Home, Nighttime | The low-frequency hum of the refrigerator / an occasional car sound outside the window / a ticking clock |
| Rooftop | Wind / a faint distant hum of the city |
| Subway Station | Station-arrival announcements and braking sounds / crowd footsteps |

### 9.2 Audio-Visual Sync Annotation

Mark key audio-visual sync points in the storyboard table:
- `t=2s` A soft sound as the base of the coffee cup touches the table when set down
- `t=5s` The faint creak of a door hinge as it's pushed open — the character enters the room, the outdoor street noise instantly muffled by the door
- `t=8s` A distant ambulance siren from outside the window — the character looks up toward the window for about 1 second

---

## 10. Seedance 2.0 Storyboard Card Template

Use the following card format for each shot, filled in shot by shot within the storyboard table:
```
[Shot X] Duration: {value}s | Shot Scale: {extreme close-up/close-up/medium close-up/medium shot/full shot/wide shot/cutaway}

Visual Description:
{Character motion — including specific action trajectory, duration, body-part coordination}
{Character expression — including gaze direction, micro-expression detail}
{Lighting logic — key light type + direction + color temperature K + lighting ratio}
{Environmental detail — including specific props, material surfaces, use marks}
{Clothing motion — such as wind-blown or action-linked clothing behavior}

Spatial Coordinates:
Horizontal {left/center/right of frame, specific distance from the edge} | Depth {value meters from the camera}
{Distance relationship to a fixed object in the scene}
{If more than one person, the relative distance and orientation between characters}

Camera Movement: {locked-off/slight handheld sway/slow push-in/slow pull-out/tracking shot/pan}
{The specific rate and start/end positions of the camera movement}

Transition: {hard cut/cutaway transition/lighting-match/spatial-match — mark the connection point with the adjacent shot}

Ambient Sound: {1-2 core ambient sounds}

Seedance 2.0 Key Anchoring:
Character anchor: @ImageX_{character name} {styling description}
Scene anchor: @ImageX {scene name} {spatial description}
{Prop anchor: @ImageX {prop name} — if there is a core handheld/interactive prop}
```

---

## 11. Cutaway Usage Specification

### 11.1 A Cutaway Is Not "Nothing to Shoot"

A cutaway is an emotional vessel. Every cutaway must have a narrative purpose and specific visual content:

| Cutaway Type | Narrative Purpose | Example |
|---|---|---|
| Scene Establishment | The first appearance of a new space — letting the audience clearly see what this place is | An office wide shot: rows of workstations, floor-to-ceiling windows, the city outside the window |
| Emotional Buffer | A breather after a highly emotional passage | Raindrops sliding down the window glass outside, at a speed of about 2cm per second |
| Passage of Time | Hinting that time has passed | The sky outside the same window gradually shifting from afternoon blue to deep blue-violet at blue hour |
| Metaphorical Negative Space | Using an object to stand in for an emotion | A half-finished cup of coffee on the table, with a lipstick mark on the rim |
| Transition Bridge | A natural transition between two spaces | Fluorescent tubes in a stairwell — the previous scene was an office, the next is a rooftop |

### 11.2 Cutaway Seedance 2.0 Description Standard

A cutaway must also follow the ironclad rule of light source + texture + motion:
```
Afternoon window light enters at an angle from the right side (about 4500K), casting the striped pattern of blinds onto an empty conference table,
the light pattern slowly shifting in width and position as clouds move outside, going completely dark after about 5 seconds — a cloud has blocked the sun.
The tabletop has fine scratches and water-cup ring stains left over from a meeting.
```

---

## 12. Storyboard Table Quality Self-Check List

Once the storyboard table for a scene is complete, the director should self-check item by item:

| Check Item | Pass Standard |
|---|---|
| Light Source Traceable | Every shot can answer "where does the light come from, what color temperature" |
| Action Executable | Every action has a trajectory, duration, and body part specified |
| Space Locatable | Every shot marks the character's horizontal and depth position |
| Stance Continuity | The same person's position/posture connects smoothly between adjacent shots |
| Environment Has Motion | At least 1 shot with environmental motion every 3-4 shots |
| Tone Not Vague | No unexecutable descriptions like "she's beautiful" or "the mood is nice" |
| CG Terminology Eliminated | No CG vocabulary such as PBR/SSR/AO/volumetric light/next-gen |
| @reference Complete | Character/scene/core props are all marked with anchoring references |
