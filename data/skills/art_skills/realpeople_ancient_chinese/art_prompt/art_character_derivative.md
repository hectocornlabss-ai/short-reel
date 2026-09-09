# Character Derivative Asset Generation · Constraint Manual

---

## 1. Layering Principles

1. **Face unchanged** — After layering, facial features must remain fully consistent with the base model; face drift is prohibited
2. **Pose unchanged** — Maintain the base model's natural standing pose; any pose/action/posture change is prohibited
3. **Layer-by-layer control** — Each layer is described independently, making it easy to swap by layer (change outfit without changing makeup)
4. **Unified style** — All costume/makeup elements follow the same aesthetic system
5. **No texture degradation** — The texture standard after layering must not be lower than the base model
6. **Pure costume/makeup scope** — Only makeup/hairstyle/clothing/accessories may be layered; introducing props, scenes, environments, or actions is prohibited

---

## 2. Layer Hierarchy

| Layer | Content | Description |
|---|---|---|
| L0 | Base model | Base character model, not modified |
| L1 | Makeup (decision layer) | First analyze user cues, then decide the intensity of "basic makeup / light makeup / formal makeup" |
| L2 | Hairstyle | Hair bun/tied hair/braided hair + hair accessories |
| L3 | Inner robe/undergarment | Replaces the plain white base inner robe |
| L4 | Outer robe/main garment | Wide-sleeve robe/straight-hem robe/cloak, etc. |
| L5 | Accessories | Headwear/earrings/necklace/waist accessories/hand accessories |

> **Scope boundary**: Character derivative assets only include layers L0–L5 (costume/makeup/hairstyle/styling); props (umbrella/sword/fan/book/lantern or other hand-held items), scene environments (indoor/outdoor/weather, etc.), and poses/actions (walking/glancing back/raising a hand, etc.) are not included. Those belong to other asset types.

---

## 3. Makeup Constraints (L1)

### Base-to-Derivative Makeup Strategy (Key)

> The character base model has a bare face, but derivative assets enter the makeup/styling pipeline by default. The system should analyze makeup needs based on user-provided cues and decide the intensity among basic makeup, light makeup, and formal makeup, rather than keeping the bare face.

### L1 Cue Analysis and Makeup Decision

| Step | Processing | Decision Result |
|---|---|---|
| S1 | Extract user cues: facial-state words, emotion words, intensity words | Form a makeup requirement summary |
| S2 | Filter out non-makeup cues: prop/scene/action/pose words are not used as grounds for makeup | Prevent misjudgment |
| S3 | Match the makeup style matrix and assign an intensity level | Basic makeup / Light makeup / Formal makeup |
| S4 | Generate the final L1 prompt | Output only the conclusion, not the analysis process |

### Cue-to-Makeup Mapping (Execution Standard)

| Cue Type | Typical Cue | L1 Decision |
|---|---|---|
| No obvious facial-emphasis cue | Only clothing/hairstyle changes, no emotion or state emphasized | Basic makeup |
| Slight facial cue | Gentle, smiling, lashes trembling slightly, complexion slightly brightened | Light makeup (very subtle) |
| Clear frail/sickly cue | Pale complexion, very faint lip color, slight redness under the eyes | Frail pear-blossom makeup (light makeup) |
| Clear formal/ceremonial cue | Formal attire, ceremony, grand appearance | Formal makeup (controlled) |

> Judgment principle: all derivative assets must have makeup/styling applied; facial cues are examined first to determine intensity and style — props, scenes, and pose changes must not independently raise the makeup intensity.

### Female Makeup Style Matrix

| Style | Applicable Scene | Core Prompt |
|---|---|---|
| Elegant plain makeup | Everyday, first meeting, boudoir | elegant refined makeup, faintly brushed moth eyebrows, plain clear complexion |
| Cool frosty makeup | Formal, confrontation, power | cool striking makeup, sharp brows and eyes, cold thin lips |
| Soft peach makeup | Sweet romance, ambiguous tension, heartbeat | peach blossom makeup, faintly red eye corners, dewy lip color |
| Frail pear-blossom makeup | Injured, weak | pale complexion, very faint lip color, slight redness under the eyes |
| Regal phoenix makeup | Grand wedding, formal attire | rich lavish makeup, vermilion lips, phoenix eyes |

### General Base Skin (Shared Across All Makeup Styles)

| Item | Constraint | Prompt |
|---|---|---|
| Texture | Dewy glossy skin, naturally luminous | dewy glossy skin, cream porcelain skin, luminous skin |
| Whiteness | Cool white skin, translucent not deathly pale | milky skin, milky white skin |
| Inner glow | Soft glow radiating from within | inner luminosity, skin translucently glowing |
| Prohibited | Matte/deathly white/waxy/oily/overexposed | — |

### Basic Makeup Detail (Default Level)

| Item | Constraint | Prompt |
|---|---|---|
| Eyebrows | Lightly groomed following the base model's brow shape, brow shape unchanged | natural groomed eyebrows, clean eyebrow shape |
| Eyes | Extremely subtle eye enhancement, emphasizing clarity and brightness | clear bright eyes, extremely faint inner eyeliner |
| Cheeks | Extremely faint complexion brightening, no visible buildup of color | natural cheek glow, subtle color brightening |
| Lips | Nude pink or light pink tint, kept restrained | natural moist lip color, light pink lips |
| Overall | Makeup is discernible but very subtle | basic makeup, faux-bare-face makeup look, natural fine retouching |

### By Facial Area (Using Elegant Plain Makeup as an Example)

| Area | Constraint | Prompt |
|---|---|---|
| Base makeup | Light and translucent, dewy subtle sheen | light thin base makeup, dewy cream skin |
| Brow makeup | Distant-mountain brows/willow-leaf brows, faint gray-brown sweep | distant misty brows, faintly brushed moth eyebrows |
| Eye makeup | Very faint eyeshadow, inner eyeliner, long slender lashes | clear translucent eye makeup, long slender lashes |
| Blush | Very faint powder, lightly swept on the apples of the cheeks | very faint blush, subtle rosy flush |
| Lip makeup | Dewy light pink, slight sheen | dewy light pink lip color |

### Male Makeup

| Item | Constraint | Prompt |
|---|---|---|
| Base skin | Dewy creamy skin, fair and luminous, fresh and natural | dewy glossy skin, creamy skin, luminous skin |
| Principle | Faux-bare-face — looks like no makeup but the skin looks excellent | faux-bare-face look, naturally great skin |
| Eyebrows | Naturally thick eyebrows, not drawn on | natural sword eyebrows, sharp handsome eyebrow shape |
| Lip color | Natural healthy tone, slightly moist | natural lip color, healthy glow |

---

## 4. Hairstyle Constraints (L2)

### Female Style Types

| Style | Description | Applicable | Prompt |
|---|---|---|---|
| Half-updo cloud bun | Bun on top with hair trailing down the back | Everyday, outings | half-updo cloud bun, hair half gathered |
| Flying immortal bun | Tall bun swept upward, flowing | Ethereal settings, grand appearance | flying immortal bun, tall upswept bun |
| Tumbling-horse bun | Low bun tilted to one side, languid | Intimate, ambiguous tension | tumbling-horse bun, languid side bun |
| Twin-ring buns | Symmetrical twin buns, girlish | Younger characters | twin-ring buns, girlish twin buns |
| Fully loose hair | Long hair entirely let down, simple hair accessory | Injured, downtrodden | long hair let down, raven hair like a waterfall |
| Tied-up ponytail | Tied high, brisk and capable | Martial arts, action | high tied-up ponytail, brisk and capable |

### Female Hair Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Style | Maximalist, matched with the outfit | maximalist hair accessories, lavish and exquisite |
| Material | Metal + pearls and jade + tassels | gold-thread tassels, pearls and jade adorning the hair |
| Craftsmanship | Masterwork craftsmanship, extremely fine detail | masterwork craftsmanship, intricately carved detail |

### Male Style Types

| Style | Applicable | Prompt |
|---|---|---|
| Half-crown tied hair | Everyday, scholarly | half-crown tied hair, jade hairpin securing hair |
| Full crown, high tied | Formal, court | full crown high tied hair, jade crown securing hair |
| Loose hair over shoulders | Intimate, injured | loose hair over shoulders, hair black as ink |
| Battle ponytail | Combat, martial arts | high battle ponytail, brisk tied-up hair |

---

## 5. Clothing Constraints (L3+L4)

### Female Clothing Matrix

| Style | Design | Applicable | Prompt |
|---|---|---|---|
| Ethereal flowing attire | Multi-layer wide-sleeve robe, Wei-Jin style | Everyday, ethereal settings | wide-sleeve robe, multi-layered robes, flowing fabric |
| Dignified formal attire | Curved-hem deep robe / ruqun | Court, banquet | curved-hem deep robe, dignified and lavish |
| Light everyday wear | Narrow-sleeve ruqun / short jacket | Action, martial arts | narrow-sleeve short jacket, light and brisk |
| Sleepwear | Thin gauze inner robe, plain color | Indoors, at night | plain-colored sleepwear, loose and comfortable |
| Wedding attire | Phoenix crown and red cape, layered red garments | Wedding | phoenix crown and red cape, layered red robes |

### Female Clothing General Constraints

| Item | Constraint | Prompt |
|---|---|---|
| Primary color | White/moon white/silver gray as default | fine white garments, plain robes white as snow |
| Material | Substantial and flowing + embroidery + pearlescent fabric | substantial flowing fabric, pearlescent embroidery |
| Texture | Weave detail must be extremely clear | clear clothing texture, extremely sharp fabric weave |
| Shoulders | Shoulder ornament/silk shawl/cloud collar | lavish cloud collar, shoulder ornamentation |
| Layering | Multiple layers worn together, clearly defined layering | multiple layers worn together, clearly defined layering |

### Male Clothing Matrix

| Style | Applicable | Prompt |
|---|---|---|
| Scholarly refined attire | Everyday, study | wide-sleeve long robe, moon-white robe |
| Warrior's fitted attire | Combat, training | narrow-sleeve fitted attire, dark-colored battle garb |
| Dark robe and cloak | Grand entrance, night travel | ink-black cloak, cloak billowing in the wind |
| Casual everyday wear | Leisure, private | plain-colored everyday wear, simple casual attire |
| Formal court robes | Court, ceremony | formal court robes, lavish ceremonial robe |

---

## 6. Accessory Constraints (L5)

### Female Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Headwear | Maximalist, not sparse | maximalist headwear, pearls and jade adorning the hair |
| Earrings | Dangling tassels/jade earrings | tasseled earrings, dangling jade earrings |
| Necklace | Beaded chain/choker | lavish beaded chain, exquisite choker |
| Waist accessories | Palace sash/jade pendant | flowing palace sash, jade pendant at the waist |
| Hand accessories | Jade bracelet/arm bangle | translucent jade bracelet, exquisite arm bangle |

### Male Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Hair crown | Jade crown/gold crown, exquisite | jade crown securing hair |
| Waist sash | Wide waist sash/leather belt | wide waist sash, well-defined texture |
| Jade pendant | Translucent and warm | jade pendant at the waist |
| Weapon | Sword/fan/flute (optional) | long sword at the hip, folding fan half-open |

---

## 7. Costume Combination Quick Reference

| Scene | Makeup | Hairstyle | Clothing | Accessories |
|---|---|---|---|---|
| Everyday boudoir | Elegant plain makeup | Half-updo cloud bun | Ethereal flowing attire | Moderate |
| First encounter | Elegant plain makeup | Half-updo/flying immortal | Ethereal flowing attire | Moderate-to-more |
| Sweet romantic interaction | Soft peach makeup | Half-updo/tumbling-horse | Ethereal/light everyday | Moderate |
| Formal appearance | Cool frosty makeup | Flying immortal bun | Dignified formal attire | Maximalist |
| Private night conversation | Elegant/peach makeup | Fully loose/tumbling-horse | Sleepwear | Minimal |
| Injured and downtrodden | Frail pear-blossom makeup | Fully loose (disheveled) | Damaged everyday wear | Minimal/none |
| Grand wedding ceremony | Regal phoenix makeup | Flying immortal bun | Wedding attire | Maximalist |
| Martial arts action | Plain makeup (very subtle) | Tied-up ponytail | Light everyday wear | Minimal |

---

> **Inference Rules for Uncovered Scenes**
>
> When the scene/situation described by the user is not in the table above, infer based on the core genes of this style:
>
> | Inference Dimension | Photorealistic Ancient-Style Genes |
> |---|---|
> | Makeup intensity | Default elegant plain makeup (dewy skin + realistic hair strands); power/confrontation → cool frosty makeup; heartbeat/ambiguous tension → soft peach makeup; injured/weak → frail pear-blossom makeup; wedding/ceremony → regal phoenix makeup |
> | Hairstyle | Everyday/boudoir → half-updo cloud bun; ethereal settings/grand appearance → flying immortal bun; intimate/ambiguous tension → tumbling-horse bun; injured and downtrodden → fully loose hair; action → tied-up ponytail; hair strands must be individually distinct |
> | Clothing | Photorealistic texture takes priority; everyday → wide-sleeve robe/light and flowing; formal → curved-hem deep robe; action → narrow-sleeve everyday wear; default primary color white/moon white; weave detail must be extremely clear |
> | Accessory elaborateness | Realistic maximalist craftsmanship (masterwork, intricately carved); everyday → moderate; formal → maximalist (pearls and jade adorning the hair + beaded chain + palace sash); action → minimal; injured → minimal/none |
> | Texture baseline | Anchored to photorealistic photography; dewy cream-porcelain skin + hair strand detail always maintained; 3D-render/CG feel prohibited |

## 8. Four-View Reference Sheet Specification

> After the derivative costume/makeup layering, a four-view reference sheet must still be produced to ensure the costume/makeup/styling is consistent across all angles.

### View Definitions

| Position | View | Angle | Shot Type | Requirement | Prompt |
|---|---|---|---|---|---|
| Far left | Portrait close-up | Front, eye-level | Face to collarbone | Face occupies 60%+, facial features/makeup clear | portrait closeup, face detail, makeup detail |
| Second left | Front view | Front 0° | Full body standing | Facing camera, full frontal view of clothing | front view, height mark |
| Second right | Side view | Right 90° | Full body standing | Pure profile silhouette, side layering of clothing | side view, profile, height mark |
| Far right | Back view | Rear 180° | Full body standing | Back-of-head hair accessories/back clothing/hair ends clearly shown | back view, rear view, height mark |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side by side left to right in the same frame |
| Background | Clean neutral gray #E8E8E8 |
| Stance | Natural standing, feet parallel with slight gap, arms hanging naturally or slightly spread (**no pose changes of any kind allowed**) |
| Expression | Micro-expression matching the makeup style (e.g. elegant plain makeup → composed, peach makeup → smiling), facial micro-expression only, no body-language involved |
| Lighting | Even soft light, front key light + dual side fill lights, no hard shadows |
| Consistency | Face/makeup/hairstyle/hair accessories/clothing/accessories fully consistent across all four views |
| Aspect ratio | Recommended 4:1 or 3:1 |

---

## 9. Prompt Template

### Output Format Constraints

| Item | Constraint |
|---|---|
| Output content | **Output the prompt text only**, no other content |
| Prohibited output | Quick reference tables, layer-build plans, visual constraint tables, prohibition tables, derivative plans, output suggestions, core-element tables, or any other non-prompt content |
| Prohibited scenes | Character derivative assets **do not include scene/environment descriptions**; do not output any scene/environment/weather/background narrative content (scenes belong to the scene asset category) |
| Prohibited props | **No prop interaction of any kind**; do not output hand-held or interactive items such as umbrellas/swords/fans/books/lanterns/wine cups (props belong to the prop asset category) |
| Prohibited pose changes | **Do not change the base model's pose**; do not output any action or posture change such as walking/glancing back/raising a hand/turning sideways/running; maintain the natural standing pose |
| Format | Output the usable prompt code block directly, with no heading, table, explanation, or plan comparison |

### Full Costume/Makeup Layering (Four Views)

```
Using the character's base model image as the base, apply costume/makeup layering via img2img,
ancient-style {gender} character four-view reference sheet, photorealistic photography, photorealistic ancient-style documentary look, strong contrast, extreme detail, 8K, ultra-fidelity,
character design sheet, character turnaround,
keep the base model's face unchanged, {overall temperament},
[L1 · Makeup] decided from user cues: {basic makeup/light makeup/formal makeup}; using {makeup style}, dewy cream-porcelain skin, {eyebrow makeup}, {eye makeup}, {lip makeup},
[L2 · Hairstyle] {style type}, hair strands clearly defined, {hair accessory description},
[L3+L4 · Clothing] {primary color}{design}, {material}, {decorative craftsmanship}, clear clothing texture, extremely sharp fabric weave,
[L5 · Accessories] {headwear}, {earrings}, {necklace}, {waist accessory},
same frame arranged left to right: portrait closeup + front view + side view + back view,
standing naturally, clean neutral gray background, even soft lighting, no harsh shadows,
four-view consistency, delicately rendered face, delicately rendered hair strands, extremely sharp texture detail
no text of any kind should appear in the image
```

---

## 10. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | After layering, the face must remain consistent with the base model |
| R2 | Clothing must use "clear clothing texture + extremely sharp fabric weave" |
| R3 | Female accessories must be "maximalist + masterwork craftsmanship" |
| R4 | Makeup/hairstyle/clothing/accessories must be stylistically unified |
| R5 | Must output a four-view reference sheet (portrait closeup + front view + side view + back view) |
| R6 | Must specify "clean neutral gray background" |
| R7 | Must specify "four-view consistency" |
| R8 | **Output the prompt only** — outputting quick reference tables/layer-build plans/visual constraints/prohibitions/derivative plans/output suggestions or any other non-prompt content is prohibited |
| R9 | **Scene descriptions are prohibited** — character derivative assets do not involve scene/environment/weather/background narrative; scenes are a separate asset type |
| R10 | **Prop interaction is prohibited** — no hand-held/interactive items (umbrella/sword/fan/book, etc.) included; props are a separate asset type |
| R11 | **Pose must remain unchanged** — must maintain the base model's natural standing pose; any action/posture/pose change is prohibited |
| R12 | **L1 must analyze before deciding** — first parse the user's facial cues, then determine basic/light/formal makeup |
| R13 | **All derivative assets require makeup/styling** — the bare face is not kept under normal circumstances; at minimum basic makeup is used |
| R14 | **Makeup intensity is controlled** — even when makeup is applied it must remain restrained; no modern heavy-makeup or exaggerated cosmetic effects |
| R15 | **Props/scenes/actions are not grounds for escalating intensity** — basic makeup must not be elevated to a stronger makeup style based solely on prop, environment, or action information |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Face drift after layering |
| X2 | Accessories that are too simple/modernized (female) |
| X3 | Makeup/clothing styles conflicting with each other |
| X4 | Complex scene backgrounds (must be pure gray background) |
| X5 | Inconsistent costume/makeup/styling between the four views |
| X6 | Outputting anything other than the prompt (tables/plans/suggestions/explanations/variants, etc.) |
| X7 | Including scene descriptions in character derivative assets (mountain path/rain scene/indoors/street/weather or other environmental elements) |
| X8 | Outputting sections such as "core element quick reference," "layer-build plan," "visual constraints," "prohibitions," "derivative plan," etc. |
| X9 | Including any prop interaction (holding an umbrella/sword/fan/book/lantern/wine cup or other object) |
| X10 | Changing the base model's pose (action descriptions such as walking/glancing back/raising a hand/turning sideways/running/lowering the head/looking up) |
| X11 | Including expression-and-pose linkage descriptions (narrative writing such as "turning 45° while walking with a faint smile") |
| X12 | Directly applying a fixed makeup style without analyzing user cues |
| X13 | Incorrectly keeping the bare face, resulting in the derivative asset lacking the required makeup/styling |
| X14 | Mistakenly escalating makeup intensity based solely on prop/scene/action words, resulting in an incorrect intensity decision |

