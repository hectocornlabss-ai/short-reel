---
name: art_character_derivative
description: Character derivative asset generation · Constraint manual
metaData: art_skills
---

# Character Derivative Asset Generation · Constraint Manual

---

## 1. Layering Principles

1. **Face unchanged** — After layering, facial features must be completely consistent with the base model; no facial drift allowed
2. **Pose unchanged** — Maintain the base model's natural standing pose; no pose/action/posture changes allowed
3. **Layer-by-layer control** — Each layer is described independently, enabling per-layer replacement (change costume without changing makeup)
4. **Unified style** — All costume/makeup elements follow the same aesthetic system
5. **No quality degradation** — Post-layering texture quality must not be lower than the base model
6. **Costume/makeup scope only** — Only makeup/hairstyle/costume/accessories may be layered on; introducing props, scenes, environments, or actions is prohibited

---

## 2. Layering Tiers

| Tier | Content | Description |
|---|---|---|
| L0 | Base Model | Basic character base image, not modified |
| L1 | Makeup (Decision Layer) | First analyze user cues, then decide the intensity: "basic makeup / light makeup / formal makeup" |
| L2 | Hairstyle | Bun/tied hair/braid + hair accessories |
| L3 | Inner Layer/Undergarment | Replaces the white base inner garment |
| L4 | Outer Garment/Main Costume | Ancient-style formal wear/gown/everyday wear, etc. |
| L5 | Accessories | Headwear/earrings/necklace/waist accessories/hand accessories |

> **Scope Boundary**: Character derivative assets only include layers L0-L5 (costume, makeup, and hairstyling); they do NOT include props (handheld items such as umbrellas/swords/fans/books/lanterns), scene environments (indoor/outdoor/weather, etc.), or pose/actions (walking/looking back/raising a hand, etc.). These belong to other asset types.

---

## 3. Makeup Constraints (L1)

### Base-Model-to-Derivative Makeup Strategy (Key)

> Although the character base model is bare-faced, derivative assets by default enter the makeup process. The system should analyze makeup needs based on cues provided by the user and decide the intensity among basic makeup, light makeup, and formal makeup — rather than remaining bare-faced.

### L1 Cue Analysis and Makeup Decision

| Step | Processing Content | Decision Outcome |
|---|---|---|
| S1 | Extract user cues: facial-state words, emotion words, intensity words | Form a makeup requirement summary |
| S2 | Filter out non-makeup cues: props/scene/action/pose words are not used as a basis for makeup | Prevent misjudgment |
| S3 | Match against the makeup style matrix and assign an intensity tier | Basic makeup / Light makeup / Formal makeup |
| S4 | Generate the final L1 prompt | Output only the conclusion, not the analysis process |

### Cue-to-Makeup Mapping (Execution Standard)

| Cue Type | Typical Cues | L1 Decision |
|---|---|---|
| No obvious facial-emphasis cue | Only costume/hairstyle changes, no emphasis on emotion or state | Basic makeup |
| Slight facial cue | Gentle, smiling, fluttering lashes, slightly brightened complexion | Light makeup (very subtle) |
| Clear everyday cue | Everyday, going out, casual | Basic makeup (natural and fresh) |
| Clear formal-ceremony cue | Wedding, ceremony, important occasion | Formal makeup (exquisite and lavish) |

> Decision principle: All derivative assets must have makeup applied; first look at facial cues to decide intensity and style — props, scenes, and pose changes must not independently raise the makeup intensity.

### Female Makeup Style Matrix

| Style | Applicable Scene | Core Prompt |
|---|---|---|
| Elegant Plain Makeup | Everyday, first meeting, boudoir | elegant plain makeup, softly swept moth eyebrows, fresh plain complexion |
| Palace Noble Makeup | Palace, formal, power | exquisite makeup, sharp eyebrow shape, rosy lip color |
| Romantic Peach-Blossom Makeup | Dating, heartbeat moments, sweetness | peach-blossom makeup, slightly reddened outer eye corners, dewy lip color |
| Grand Wedding Makeup | Wedding, ceremony | lavish bold makeup, vermilion lips, phoenix eyes |
| Festival Celebration | Celebration, gathering | bright colors, pastel makeup |

### Common Base Skin (Shared Across All Makeup Styles)

| Item | Constraint | Prompt |
|---|---|---|
| Texture | PBR material rendering, naturally radiant | PBR material, natural sheen, soft texture |
| Fairness | Pinkish-white base tone, translucent not pale | pinkish-white base tone, fair and radiant |
| Inner Glow | Soft glow from within | inner glowing radiance, translucent glowing skin |
| Prohibited | Matte/deathly pale/waxy/oily/overexposed | — |

### Basic Makeup Detail (Default Tier)

| Item | Constraint | Prompt |
|---|---|---|
| Eyebrows | Lightly groomed following the base model's eyebrow shape, shape unchanged | natural groomed eyebrows, clean eyebrow shape |
| Eyes | Extremely subtle eye makeup, emphasizing clarity and brightness | clear bright eyes, extremely subtle eyeshadow |
| Cheeks | Extremely subtle complexion brightening, pastel blush | natural rosy cheeks, pastel blush |
| Lips | Light pink or vermilion tint, kept restrained | natural moist lip color, light pink lips |
| Overall | Makeup is discernible but very subtle | basic makeup, natural makeup look, soft texture |

### Male Makeup

| Item | Constraint | Prompt |
|---|---|---|
| Base Skin | PBR material rendering, fair and radiant, fresh and natural | PBR material, fair and radiant, natural sheen |
| Principle | "Fake bare face" — looks unmade-up but skin is excellent | fake bare face, naturally flawless skin |
| Eyebrows | Naturally thick eyebrows, not drawn on | naturally sword-shaped eyebrows, dashing eyebrow shape |
| Lip Color | Natural healthy tone, slightly moist | natural lip color, healthy tone |

---

## 4. Hairstyle Constraints (L2)

### Female Style Types

| Style | Description | Applicable | Prompt |
|---|---|---|---|
| High Bun with Cloud-Like Temples | High coiled bun + hair accessories | Palace, formal | high cloud bun, exquisite coiled hair |
| Double-Ring Buns | Symmetrical double rings, youthful | Young characters | double-ring buns, youthful style |
| Low Side Bun ("Fallen from Horse") | Low bun tilted to the side, languid | Everyday, casual | low side bun, languid tilted bun |
| Loose Flowing Hair | Fully loose long hair, natural | Boudoir, private | flowing loose hair, naturally cascading |
| High Tied Ponytail | High, brisk tied hair | Martial arts, action | high tied ponytail, crisp and brisk |
| Half-Tied Hair | Top half tied + hair hanging behind | Everyday, travel | half-tied cloud bun, natural hanging hair |

### Female Hair Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Style | Ornate and refined, matching the costume | ornate hair accessories, exquisite craftsmanship |
| Material | Gold and silver + pearls and jade + tassels | gold and silver hairpins, pearls and jade adorning the hair |
| Craftsmanship | High-precision modeling, clear detail | high-precision craftsmanship, fine carving |

### Male Style Types

| Style | Applicable | Prompt |
|---|---|---|
| Half-Crowned Tied Hair | Everyday, scholarly | half-crown tied hair, jade hairpin holding hair |
| Full Crown, High Tied | Formal, court | full crown high tied hair, jade crown holding hair |
| Loose Hair Over Shoulders | Private, injured | loose hair over shoulders, hair like black ink |
| High Tied Ponytail | Combat, martial arts | high tied combat hair, crisp ponytail |

---

## 5. Costume Constraints (L3+L4)

### Female Costume Matrix

| Style | Silhouette | Applicable | Prompt |
|---|---|---|---|
| Ancient-Style Long Dress | Long dress, flowing | Everyday, boudoir | ancient-style long dress, flowing robes |
| Palace Formal Gown | Formal gown, ornate | Palace, formal | palace formal gown, luxurious dress |
| Light Casual Wear | Short jacket, lightweight | Action, martial arts | light casual wear, short jacket |
| Sleepwear | Sheer inner garment, plain color | Indoor, night | sleepwear, loose and comfortable |
| Wedding Attire | Phoenix crown and red cape, layered red dress | Wedding | phoenix crown and red cape, layered red robes |

### Female Costume General Constraints

| Item | Constraint | Prompt |
|---|---|---|
| Primary Color | Traditional Chinese tones by default | traditional Chinese-toned clothing, exquisite costume |
| Material | Silk + embroidery + pearlescent fabric | silk texture, embroidery detail |
| Texture | Texture must be ultra-clear | clear clothing texture, ultra-clear texture |
| Shoulders | Shawl/cloud-shoulder cape/decoration | ornate cloud-shoulder cape, decorated shoulders |
| Layering | Multiple layers, clearly delineated | multi-layered garments, clear layering |

### Male Costume Matrix

| Style | Applicable | Prompt |
|---|---|---|
| Scholar's Attire | Everyday, study | scholar's attire, long robe |
| General's Battle Garb | Combat, training | general's battle garb, war robe |
| Court Robes | Court, ceremony | court robes, formal ceremonial dress |
| Casual Everyday Wear | Leisure, private | casual everyday wear, simple style |
| Formal Gown | Formal, celebration | formal gown, ornate and refined |

---

## 6. Accessory Constraints (L5)

### Female Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Headwear | Ornate and refined, not sparse | ornate headwear, pearls and jade adorning the hair |
| Earrings | Dangling tassels/jade earrings | tasseled earrings, dangling jade earrings |
| Necklace | Beaded pendant/choker | ornate beaded pendant, exquisite choker |
| Waist Accessories | Court sash/jade pendant | flowing court sash, jade pendant at the waist |
| Hand Accessories | Jade bracelet/armlet | translucent jade bracelet, exquisite armlet |

### Male Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Hair Crown | Jade crown/gold crown, refined | jade crown holding hair |
| Waist Belt | Wide waist belt/leather belt | wide waist belt, clearly defined texture |
| Jade Pendant | Translucent and warm | jade pendant at the waist |
| Weapon | Sword/fan/flute (optional) | long sword at the side, folded fan half-open |

---

## 7. Costume/Makeup Combination Quick Reference

| Scene | Makeup | Hairstyle | Costume | Accessories |
|---|---|---|---|---|
| Everyday Boudoir | Elegant plain makeup | Loose hair/half-tied hair | Ancient-style long dress | Medium |
| First Meeting | Elegant plain makeup | Half-tied hair/low side bun | Ancient-style long dress | Medium-high |
| Romantic Interaction | Romantic peach-blossom makeup | Half-tied hair/low side bun | Ancient-style long dress/light casual wear | Medium |
| Formal Appearance | Palace noble makeup | High cloud bun | Palace formal gown | Extremely elaborate |
| Private Night Scene | Elegant/peach-blossom makeup | Loose hair/low side bun | Sleepwear | Minimal |
| Wedding Ceremony | Grand wedding makeup | High cloud bun | Wedding attire | Extremely elaborate |
| Martial Arts Action | Plain makeup (very subtle) | High tied ponytail | Light casual wear | Simple |

---

> **Rule for Inferring Uncovered Scenes**
>
> When a scene/situation described by the user is not in the table above, infer based on this style's core genes:
>
> | Inference Dimension | Chinese Traditional 3D Rendering Genes |
> |---|---|
> | Makeup Intensity | Default elegant plain makeup; palace/power/formal → palace noble makeup; heartbeat/sweet romance → romantic peach-blossom makeup; wedding/ceremony → grand wedding makeup; festival gathering → festival celebration makeup |
> | Hairstyle | Everyday/boudoir → half-tied hair or low side bun; palace/formal → high cloud bun; private/night → loose hair; martial arts/action → tied ponytail |
> | Costume | Ancient style as the base tone; emotional scenes → flowing long dress; power/formal → palace formal gown; action → light casual wear; PBR materials always maintained |
> | Accessory Density | Everyday → medium; formal/palace → extremely elaborate (gold and silver hair accessories + beaded pendants + jade pendants); private → minimal; action → simple |
> | Texture Baseline | PBR materials + cinematic-grade lighting always locked in; volume and sheen take priority over flat decorative feel |

## 8. Four-View Reference Sheet Specification

> After derivative costume/makeup layering, a four-view reference sheet must still be produced, ensuring costume/makeup consistency across all angles.

### View Definitions

| Position | View | Angle | Shot Type | Requirement | Prompt |
|---|---|---|---|---|---|
| Leftmost | Portrait Close-up | Front, eye-level | Face to collarbone | Face occupying 60%+, clear facial features/makeup | portrait closeup, face detail, makeup detail |
| Second from Left | Front View | Front 0° | Full-body standing | Facing camera, full front view of costume | front view, height mark |
| Second from Right | Side View | Right 90° | Full-body standing | Pure profile silhouette, side-view costume layering | side view, profile, height mark |
| Rightmost | Back View | Rear 180° | Full-body standing | Back-of-head accessories/back costume/hair ends clear | back view, rear view, height mark |

### Composition Specification

| Item | Constraint |
|---|---|
| Layout | Four views arranged side by side left to right in the same frame |
| Background | Plain gray solid color #B8B8B8 |
| Stance | Natural standing, feet parallel and slightly apart, arms hanging naturally or slightly open (**no pose changes of any kind allowed**) |
| Expression | Subtle expression matching the makeup style (e.g. elegant plain makeup → composed, peach-blossom makeup → smiling), limited to facial micro-expression only, no body actions involved |
| Lighting | Even soft light, front key light + dual side fill light, no hard shadows |
| Consistency | Face/makeup/hairstyle/hair accessories/costume/accessories must be completely consistent across all four views |
| Aspect Ratio | 4:1 or 3:1 recommended |

---

## 9. Prompt Template

### Output Format Constraints

| Item | Constraint |
|---|---|
| Output Content | **Output the prompt text only**, no other content |
| Prohibited Output | Quick-reference tables, layered-construction plans, visual-constraint tables, prohibition tables, derivative plans, output recommendations, core-element tables, or any other non-prompt content |
| Prohibited Scene Content | Character derivative assets **do not include scene/environment descriptions** — no scene/environment/weather/background narrative content of any kind (scenes belong to the scene asset category) |
| Prohibited Props | **No prop interaction of any kind** — no handheld or interactive items such as umbrellas/swords/fans/books/lanterns/wine cups (props belong to the prop asset category) |
| Prohibited Pose Changes | **Do not alter the base model's pose** — no output of walking/looking back/raising a hand/turning sideways/running or any other action or posture change; maintain natural standing |
| Format | Output the usable prompt code block directly, with no titles, tables, explanations, or plan comparisons needed |

### Full Costume/Makeup Layering (Four-View)

Using the character's base image as the base layer, apply img2img costume/makeup/hairstyle layering,
3D rendering style, high-precision modeling, PBR materials, Chinese Traditional 3D, cinematic-grade lighting,
ancient-style {gender} character four-view reference sheet, 3D rendering, high-precision modeling, 8K, ultra-fidelity
character design sheet, character turnaround,
keep the base image's face unchanged, {overall temperament},
[L1 · Makeup] decided based on user cues: {basic makeup/light makeup/formal makeup}; using {makeup style}, PBR material rendering, {eyebrow makeup}, {eye makeup}, {lip makeup},
[L2 · Hairstyle] {style type}, high-precision clear hair strands, {hair accessory description},
[L3+L4 · Costume] {primary color}{silhouette}, {material}, {decorative craftsmanship}, clear clothing texture, PBR material rendering,
[L5 · Accessories] {headwear}, {earrings}, {necklace}, {waist accessories},
same frame, left to right side by side: portrait closeup + front view + side view + back view,
natural standing pose, plain gray solid color background, even soft light, no hard shadows,
four-view consistency, clear Chinese Traditional 3D modeling, clear high-precision modeling,
no text of any kind in the image

---

## 10. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | After layering, the face must be consistent with the base model |
| R2 | Costume must use "clear clothing texture + PBR material rendering" |
| R3 | Female accessories must be "ornate and refined + finely crafted" |
| R4 | Makeup/hairstyle/costume/accessory styles must be unified |
| R5 | Must output a four-view reference sheet (portrait closeup + front view + side view + back view) |
| R6 | Must specify "plain gray solid color background" |
| R7 | Must specify "four-view consistency" |
| R8 | **Output the prompt only** — prohibit output of quick-reference tables/layered plans/visual constraints/prohibition tables/derivative plans/output recommendations, or any other non-prompt content |
| R9 | **No scene descriptions allowed** — character derivative assets do not involve scene/environment/weather/background narrative; scenes are an independent asset type |
| R10 | **No prop interaction allowed** — no handheld/interactive items (umbrella/sword/fan/book, etc.); props are an independent asset type |
| R11 | **Pose must remain unchanged** — must maintain the base model's natural standing pose; no action/posture/stance changes of any kind |
| R12 | **L1 must analyze before deciding** — first parse the user's facial cues, then determine basic/light/formal makeup |
| R13 | **All derivative assets require makeup** — do not remain bare-faced under normal circumstances; at minimum use basic makeup |
| R14 | **Makeup intensity must be controlled** — even when applying makeup, restraint is required; no modern heavy makeup/exaggerated cosmetic effects |
| R15 | **Props/scenes/actions must not be used as grounds for intensity escalation** — props, environment, action information alone must not raise basic makeup to a stronger level |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Facial drift after layering |
| X2 | Accessories that are too simple/modern (female) |
| X3 | Makeup/costume styles conflicting with each other |
| X4 | Complex scene backgrounds (must be solid color) |
| X5 | Inconsistent costume/makeup/hairstyling between the four views |
| X6 | Output of anything other than the prompt (tables/plans/recommendations/explanations/variants, etc.) |
| X7 | Adding scene descriptions to character derivative assets (street scenes/rain scenes/interior/street/weather or other environmental elements) |
| X8 | Output of sections such as "core element quick reference," "layered construction plan," "visual constraints," "prohibitions," "derivative plans" |
| X9 | Adding any prop interaction (holding an umbrella/sword/fan/book/lantern/wine cup or other items) |
| X10 | Changing the base model's pose (action descriptions such as walking/looking back/raising a hand/turning sideways/running/lowering the head/looking up) |
| X11 | Adding expression-and-pose combination descriptions (such as narrative descriptions like "turning 45 degrees while walking with a slight smile") |
| X12 | Applying a fixed makeup style directly without analyzing user cues |
| X13 | Incorrectly remaining bare-faced, causing the derivative asset to lack the makeup it should have |
| X14 | Mistakenly escalating makeup intensity based solely on prop/scene/action words, resulting in an incorrect makeup-intensity decision |
