---
name: art_character_derivative
description: Character derivative asset generation · Constraint manual
metaData: art_skills
---

# Character Derivative Asset Generation · Constraint Manual

---

## 1. Overlay Principles

1. **Face unchanged** — After overlay, the facial features must exactly match the base model; no facial drift allowed
2. **Pose unchanged** — Keep the base model's natural standing pose; no change of pose/action/posture allowed
3. **Layer-by-layer control** — Each layer is described independently, to allow per-layer replacement (change the outfit without changing the makeup)
4. **Unified style** — All costume/makeup elements must follow the same aesthetic system
5. **No texture degradation** — Texture quality after overlay must not fall below that of the base model
6. **Costume/makeup scope only** — Only overlay makeup/hairstyle/clothing/accessories; introducing props, scenes, environments, or actions is forbidden

---

## 2. Overlay Layers

| Layer | Content | Description |
|---|---|---|
| L0 | Base model | Base image, not modified |
| L1 | Makeup (decision layer) | First analyze user cues, then decide the intensity: "base makeup / light makeup / formal makeup" |
| L2 | Hairstyle | Bun/tied hair/braid + hair ornaments |
| L3 | Undergarment/inner layer | Replaces the white base undergarment |
| L4 | Outer garment/main outfit | Traditional formal wear/gown/everyday wear, etc. |
| L5 | Accessories | Headwear/earrings/necklace/waist ornament/hand jewelry |

> **Scope boundary**: Character derivative assets only cover layers L0-L5 (costume, makeup, and styling) and do NOT include props (handheld items such as umbrellas/swords/fans/books/lanterns), scene environment (indoor/outdoor/weather, etc.), or pose/action (walking/glancing back/raising a hand, etc.). Those belong to other asset types.

---

## 3. Makeup Constraints (L1)

### Base-Model-to-Derivative Makeup Strategy (Key)

> Although the character base model is bare-faced, derivative assets by default enter a makeup/styling process. The system should analyze makeup needs based on cues provided by the user, and decide on an intensity among base makeup, light makeup, and formal makeup — rather than staying bare-faced.

### L1 Cue Analysis and Makeup Decision

| Step | Processing | Decision Outcome |
|---|---|---|
| S1 | Extract user cues: facial-state words, emotion words, intensity words | Form a makeup-requirement summary |
| S2 | Filter out non-makeup cues: prop/scene/action/pose words are not used as a basis for makeup | Prevents misjudgment |
| S3 | Match against the makeup style matrix and assign an intensity level | Base makeup / light makeup / formal makeup |
| S4 | Generate the final L1 prompt | Output only the conclusion, not the analysis process |

### Cue-to-Makeup Mapping (Execution Standard)

| Cue Type | Typical Cue | L1 Decision |
|---|---|---|
| No clear facial-emphasis cue | Only clothing/hairstyle change, no emphasis on emotion or state | Base makeup |
| Slight facial cue | Gentle, smiling, lashes fluttering slightly, complexion slightly brightened | Light makeup (very subtle) |
| Clear everyday cue | Everyday, going out, casual | Base makeup (natural and fresh) |
| Clear formal/ceremonial cue | Wedding, ceremony, important occasion | Formal makeup (exquisite and lavish) |

> Determination principle: All derivative assets must have makeup applied; facial cues are examined first to decide intensity and style — props, scenes, and pose changes must not independently raise the makeup intensity.

### Female Makeup Style Matrix

| Style | Applicable Scene | Core Prompt |
|---|---|---|
| Elegant plain makeup | Everyday, first meeting, in the boudoir | elegant plain makeup, lightly brushed moth eyebrows, natural fresh complexion |
| Court noble makeup | Court, formal, power | exquisite makeup, sharp eyebrow shape, rosy lip color |
| Romantic peach-blossom makeup | Date, heartthrob moment, sweetness | peach-blossom makeup, slightly reddened outer corners of the eyes, moist lip color |
| Grand wedding makeup | Wedding, ceremony | lavish full makeup, vermilion lips and phoenix eyes |
| Festival celebration | Celebration, gathering | bright colors, pastel makeup |

### Common Base Skin (Shared Across All Makeup Styles)

| Item | Constraint | Prompt |
|---|---|---|
| Texture | Cel-shaded flat color, naturally radiant | cel-shaded texture, natural sheen, soft texture |
| Whiteness | Pinkish-white base tone, translucent, not deathly pale | pinkish-white base tone, fair and radiant |
| Inner glow | Soft light glowing from within | inner glow, radiant translucent skin |
| Forbidden | Matte / deathly pale / waxy / oily sheen / overexposed | — |

### Base Makeup Detail (Default Level)

| Item | Constraint | Prompt |
|---|---|---|
| Eyebrows | Lightly groomed following the base model's eyebrow shape, shape unchanged | naturally groomed eyebrows, clean eyebrow shape |
| Eyes | Very subtle eye enhancement, emphasizing clarity and brightness | clear bright eyes, very subtle eyeshadow |
| Cheeks | Very subtle complexion brightening, pastel blush | naturally healthy-looking cheeks, pastel blush |
| Lips | Light pink or vermilion tint, kept restrained | naturally moist lip color, light pink lips |
| Overall | Makeup should be noticeable but very light | base makeup, natural makeup look, soft texture |

### Male Makeup

| Item | Constraint | Prompt |
|---|---|---|
| Base skin | Cel-shaded flat color, fair and radiant, fresh and natural | cel-shaded texture, fair and radiant, natural sheen |
| Principle | "Fake bare-faced" — looks like no makeup but skin is excellent | fake bare-faced look, naturally flawless skin |
| Eyebrows | Naturally thick eyebrows, not drawn on | naturally sword-shaped eyebrows, heroic eyebrow shape |
| Lip color | Naturally healthy color, slightly moist | naturally healthy lip color, blood-color tint |

---

## 4. Hairstyle Constraints (L2)

### Female Style Types

| Style | Description | Applicable To | Prompt |
|---|---|---|---|
| High cloud-bun | High bun + hair ornaments | Court, formal | high cloud-bun, exquisite updo |
| Double-loop bun | Symmetrical double loops, youthful | Younger characters | double-loop bun, youthful style |
| Falling-horse bun | Low side bun, languid | Everyday, casual | falling-horse bun, languid side bun |
| Loose hair | All hair let down, natural | Boudoir, private moments | loose flowing hair, naturally cascading |
| High tied ponytail | High and neat | Martial arts practice, action | high tied ponytail, neat and crisp |
| Half-up hairstyle | Top half tied + hair hanging behind | Everyday, travel | half-up cloud bun, naturally hanging hair |

### Female Hair Ornaments

| Item | Constraint | Prompt |
|---|---|---|
| Style | Ornate and exquisite, matching the outfit | ornate hair ornaments, exquisite craftsmanship |
| Material | Gold and silver + pearls and jade + tassels | gold and silver hairpins, pearls and jade adornments |
| Craftsmanship | Delicate lines, clear detail | fine craftsmanship, delicate carving |

### Male Style Types

| Style | Applicable To | Prompt |
|---|---|---|
| Half-crowned tied hair | Everyday, scholarly | half-crowned tied hair, jade hairpin holding hair |
| Full-crowned high tie | Formal, court | full-crowned high tie, jade crown holding hair |
| Loose hair over the shoulders | Private, injured | loose hair over the shoulders, hair like ink |
| High tied ponytail | Combat, martial arts practice | high combat ponytail, neat ponytail |

---

## 5. Clothing Constraints (L3+L4)

### Female Clothing Matrix

| Style | Silhouette | Applicable To | Prompt |
|---|---|---|---|
| Traditional long dress | Long dress, flowing | Everyday, boudoir | traditional long dress, flowing robes |
| Court gown | Gown, ornate | Court, formal | court gown, luxurious dress |
| Light everyday wear | Short jacket, lightweight | Action, martial arts practice | light everyday wear, short jacket |
| Sleepwear | Sheer inner garment, plain-colored | Indoor, nighttime | sleepwear, loose and comfortable |
| Grand wedding attire | Phoenix coronet and cape, layered red garments | Wedding | phoenix coronet and cape, layered red robes |

### Female Clothing General Constraints

| Item | Constraint | Prompt |
|---|---|---|
| Primary color | Traditional Chinese color tones by default | traditional Chinese-toned clothing, exquisite attire |
| Material | Silk + embroidery + pearlescent fabric | silk texture, embroidery detail |
| Texture | Fabric texture must be ultra-clear | clear clothing texture, ultra-clear fabric detail |
| Shoulders | Shawl/cloud-collar/decoration | ornate cloud-collar, shoulder decoration |
| Layering | Multiple layers, clearly defined layering | multiple layers, clearly defined layering |

### Male Clothing Matrix

| Style | Applicable To | Prompt |
|---|---|---|
| Scholar's attire | Everyday, study | scholar's attire, long robe |
| Warrior's fighting garb | Combat, martial arts training | warrior's fighting garb, battle robe |
| Court attire | Court, ceremony | court attire, formal ceremonial robe |
| Everyday casual wear | Leisure, private moments | everyday casual wear, simple style |
| Formal gown | Formal, celebration | formal gown, luxurious and exquisite |

---

## 6. Accessory Constraints (L5)

### Female Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Headwear | Ornate and exquisite, not sparse | ornate headwear, pearls and jade adornments |
| Earrings | Drooping tassels/jade earrings | tasseled earrings, drooping jade earrings |
| Necklace | Beaded pendant/collar necklace | ornate beaded pendant, exquisite collar necklace |
| Waist ornament | Court sash/jade pendant | flowing court sash, jade pendant at the waist |
| Hand jewelry | Jade bracelet/armlet | translucent jade bracelet, exquisite armlet |

### Male Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Hair crown | Jade crown/gold crown, exquisite | jade crown holding hair |
| Waist belt | Wide waist belt/leather belt | wide waist belt, distinct texture |
| Jade pendant | Translucent and warm | jade pendant at the waist |
| Weapon | Sword/fan/flute (optional) | long sword at the side, folded fan half-open |

---

## 7. Costume/Makeup Combination Quick Reference

| Scene | Makeup | Hairstyle | Clothing | Accessories |
|---|---|---|---|---|
| Everyday boudoir | Elegant plain makeup | Loose hair / half-up hairstyle | Traditional long dress | Moderate |
| First meeting | Elegant plain makeup | Half-up hairstyle / falling-horse bun | Traditional long dress | Moderate to slightly heavy |
| Romantic interaction | Romantic peach-blossom makeup | Half-up hairstyle / falling-horse bun | Traditional long dress / light everyday wear | Moderate |
| Formal appearance | Court noble makeup | High cloud-bun | Court gown | Very ornate |
| Private nighttime moment | Elegant / peach-blossom makeup | Loose hair / falling-horse bun | Sleepwear | Minimal |
| Wedding ceremony | Grand wedding makeup | High cloud-bun | Wedding attire | Very ornate |
| Martial arts practice/action | Plain makeup (very subtle) | Tied ponytail | Light everyday wear | Simple |

---

> **Rule for inferring uncovered scenes**
>
> When the scene/situation described by the user is not in the table above, infer based on this style's core genes:
>
> | Inference Dimension | Guofeng Anime Genes |
> |---|---|
> | Makeup intensity | Default: elegant plain makeup; festival/ceremonial/formal keywords → court noble makeup; sweet/romantic/heartthrob words → peach-blossom makeup |
> | Hairstyle | Everyday/boudoir → half-up hairstyle or falling-horse bun; formal/appearance → high cloud-bun; private/nighttime → loose hair; action → tied ponytail |
> | Clothing | Emotional scenes/everyday → traditional long dress (soft and flowing); power/formal → court gown; action/combat → light everyday wear |
> | Accessory density | Everyday → moderate; formal → very ornate (pearl/jade hair ornaments + beaded pendant + waist ornament); private/casual → simple; action → simple |
> | Color tendency | Anchored to traditional Chinese colors (frost white/moon white/cinnabar red/indigo blue); night scenes/private → lower saturation; festive → warm red + gold |

## 8. Four-View Reference Sheet Specification

> After the derivative costume/makeup overlay, a four-view reference sheet must still be produced, ensuring consistency of the costume/makeup/styling across all angles.

### View Definitions

| Position | View | Angle | Shot Type | Requirement | Prompt |
|---|---|---|---|---|---|
| Far left | Portrait close-up | Front, eye level | Face to collarbone | Face occupies 60%+, facial features/makeup clear | portrait closeup, face detail, makeup detail |
| Second from left | Front view | Front 0° | Full-body standing pose | Facing the camera, full front view of the outfit | front view, height mark |
| Second from right | Side view | Right side 90° | Full-body standing pose | Pure profile silhouette, side-view layering of the outfit | side view, profile, height mark |
| Far right | Back view | Rear 180° | Full-body standing pose | Back hair ornaments/back of the outfit/hair ends clearly shown | back view, rear view, height mark |

### Composition Specification

| Item | Constraint |
|---|---|
| Layout | Four views arranged side by side, left to right, in one frame |
| Background | Plain moon-white color #E8EAF5 |
| Stance | Standing naturally, feet parallel and slightly apart, arms hanging naturally or slightly extended (**any change of pose is forbidden**) |
| Expression | A subtle expression matching the makeup style (e.g. elegant plain makeup → composed, peach-blossom makeup → smiling); facial micro-expression only, no body movement involved |
| Lighting | Even soft light, key light from the front + fill light from both sides, no hard shadows |
| Consistency | Face/makeup/hairstyle/hair ornaments/clothing/accessories must be fully consistent across all four views |
| Aspect ratio | 4:1 or 3:1 recommended |

---

## 9. Prompt Template

### Output Format Constraints

| Item | Constraint |
|---|---|
| Output content | **Output only the prompt text**, nothing else |
| Forbidden output | Quick-reference tables, layered construction plans, visual constraint tables, prohibition tables, derivative plans, output suggestions, core-element tables, or any other non-prompt content |
| Forbidden scenes | Character derivative assets **do not include scene/environment descriptions** — do not output any scene/environment/weather/background narrative content (scenes belong to the scene asset category) |
| Forbidden props | **No prop interaction of any kind** — do not output handheld or interactive items such as umbrellas/swords/fans/books/lanterns/wine cups (props belong to the prop asset category) |
| Forbidden pose changes | **Do not change the base model's pose** — do not output any action or posture change such as walking/glancing back/raising a hand/turning sideways/running; keep the natural standing pose |
| Format | Output the usable prompt code block directly, with no title, table, explanation, or plan comparison |

### Full Costume/Makeup Overlay (Four Views)

Using the character base image as the base, img2img overlay of costume, makeup, and styling,
guofeng anime, new Chinese-chic aesthetics, Japanese-style anime rendering, cel-shaded flat color, delicate brushwork,
traditional {gender} character four-view reference sheet, guofeng anime, cel-shaded coloring, 8K, ultra-high fidelity
character design sheet, character turnaround,
keep the base model's face unchanged, {overall temperament},
[L1 · Makeup] decided based on user cues: {base makeup / light makeup / formal makeup}; use {makeup style}, cel-shaded flat color, {eyebrow makeup}, {eye makeup}, {lip makeup},
[L2 · Hairstyle] {style type}, delicate clearly-defined hair strands, {hair ornament description},
[L3+L4 · Clothing] {primary color}{silhouette}, {material}, {decorative craftsmanship}, clear clothing texture, cel-shaded flat color,
[L5 · Accessories] {headwear}, {earrings}, {necklace}, {waist ornament},
in one frame, side by side left to right: portrait close-up + front view + side view + back view,
standing naturally, plain moon-white background, even soft light, no hard shadows,
four-view consistency, clear guofeng anime design, clear delicate lines,
no text of any kind in the image

---

## 10. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The face after overlay must match the base model |
| R2 | Clothing must use "clear clothing texture + cel-shaded flat color" |
| R3 | Female accessories must be "ornate and exquisite + finely crafted" |
| R4 | Makeup/hairstyle/clothing/accessories must share a unified style |
| R5 | A four-view reference sheet must be output (portrait close-up + front view + side view + back view) |
| R6 | Must specify a "plain moon-white background" |
| R7 | Must specify "four-view consistency" |
| R8 | **Output only the prompt** — outputting quick-reference tables/layered plans/visual constraints/prohibitions/derivative plans/output suggestions or any other non-prompt content is forbidden |
| R9 | **No scene description allowed** — character derivative assets do not involve scene/environment/weather/background narrative; scenes are a separate asset type |
| R10 | **No prop interaction allowed** — do not include any handheld/interactive items (umbrella/sword/fan/book, etc.); props are a separate asset type |
| R11 | **Pose must remain unchanged** — the base model's natural standing pose must be kept; any change of action/posture/pose is forbidden |
| R12 | **L1 must analyze before deciding** — first parse the user's facial cues, then determine base makeup/light makeup/formal makeup |
| R13 | **All derivative assets require makeup/styling** — normally do not remain bare-faced; at minimum use base makeup |
| R14 | **Makeup intensity must be controlled** — even when applying makeup, keep it restrained; modern heavy makeup or exaggerated cosmetic effects must not appear |
| R15 | **Props/scenes/actions must not be used to escalate intensity** — props, environment, action information alone must not raise base makeup to a stronger makeup level |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Facial drift after overlay |
| X2 | Accessories that are too simple/modernized (female) |
| X3 | Makeup/clothing styles that conflict with each other |
| X4 | Complex scene backgrounds (must be a plain color) |
| X5 | Inconsistent costume/makeup/styling between the four views |
| X6 | Outputting anything besides the prompt (tables/plans/suggestions/explanations/variants, etc.) |
| X7 | Including scene descriptions in character derivative assets (street scenes/rain scenes/interiors/streets/weather or other environmental elements) |
| X8 | Outputting sections such as "core element quick reference," "layered construction plan," "visual constraints," "prohibitions," or "derivative plans" |
| X9 | Including any prop interaction (holding an umbrella/sword/fan/book/lantern/wine cup, etc.) |
| X10 | Changing the base model's pose (action descriptions such as walking/glancing back/raising a hand/turning sideways/running/lowering the head/looking up) |
| X11 | Including descriptions that link expression with pose (narrative descriptions such as "walking at a 45° angle with a slight smile") |
| X12 | Applying a fixed makeup style directly without first analyzing the user's cues |
| X13 | Incorrectly remaining bare-faced, causing the derivative asset to lack the makeup/styling it should have |
| X14 | Mistakenly escalating the makeup level purely because of prop/scene/action words, resulting in an incorrect makeup-intensity decision |
