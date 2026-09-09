# Character Derivative Asset Generation · Urban Realistic Constraint Manual

---

## 1. Layering Principles

1. **Face unchanged** — After layering, the facial features must be completely consistent with the base model; no facial drift is allowed
2. **Pose unchanged** — Maintain the base model's natural standing pose; no pose/action/posture changes are allowed
3. **Layer-by-layer controllable** — Each layer is described independently, making it easy to swap by layer (change outfit without changing makeup)
4. **Unified style** — All costume/makeup elements follow the same aesthetic system
5. **No quality degradation** — After layering, the quality standard must not be lower than the base model
6. **Pure costume/makeup scope** — Only makeup/hairstyle/clothing/accessories are layered on; introducing props, scenes, environments, or actions is prohibited

---

## 2. Layer Hierarchy

| Layer | Content | Description |
|---|---|---|
| L0 | Base model | Base character model, not modified |
| L1 | Makeup (decision layer) | First analyze user cues, then decide the intensity of "base makeup/light makeup/formal makeup" |
| L2 | Hairstyle | Hairstyle design + hair accessories |
| L3 | Undergarment/inner layer | Replaces the white base inner layer |
| L4 | Outerwear/main outfit | T-shirt/shirt/suit/coat/dress, etc. |
| L5 | Accessories | Watch/glasses/earrings/necklace/belt/hand jewelry |

> **Scope boundary**: Character derivative assets only cover layers L0–L5 (costume, makeup, and hairstyling), not props (handheld items such as phones/keys/bags/pens), scene environments (indoor/outdoor/weather, etc.), or pose/action (walking/glancing back/raising a hand, etc.). Those belong to other asset types.

---

## 3. Makeup Constraints (L1)

### Base Model to Derivative Styling Strategy (Key)

> Although the character base model is in a natural state, derivative assets by default enter the styling process. The system should analyze styling needs based on cues provided by the user and decide on the intensity between base makeup, light makeup, and formal makeup.

### L1 Cue Analysis and Makeup Decision

| Step | Processing Content | Decision Result |
|---|---|---|
| S1 | Extract user cues: facial state words, emotion words, intensity words | Form a makeup requirement summary |
| S2 | Filter out non-makeup cues: props/scene/action/pose words are not used as a basis for makeup | Prevent misjudgment |
| S3 | Match the makeup style matrix and assign an intensity tier | Base makeup / light makeup / formal makeup |
| S4 | Generate the final L1 prompt | Output only the conclusion, not the analysis process |

### Cue-to-Makeup Mapping (Execution Standard)

| Cue Type | Typical Cues | L1 Decision |
|---|---|---|
| No obvious facial emphasis cues | Only clothing/hairstyle changes, no emphasis on emotion or state | Base makeup |
| Slight facial cues | Brightened complexion, energetic, natural smile | Light makeup (very subtle) |
| Clear workplace cues | Formal meeting, business occasion, important event | Formal makeup (controlled) |
| Clear casual cues | Everyday outings, casual dates, weekend activities | Light makeup/base makeup |

### Female Makeup Style Matrix

| Style | Applicable Scene | Core Prompt |
|---|---|---|
| Bare-look makeup | Everyday, commuting, casual | bare-look makeup, natural base makeup, dewy clear skin |
| Workplace makeup | Meetings, business, formal | polished professional makeup, capable |
| Date makeup | Dates, dinners, gatherings | polished makeup, rosy complexion |
| Party makeup | Parties, performances, events | polished makeup, striking presence |

### General Base Skin (Shared Across All Makeup Styles)

| Item | Constraint | Prompt |
|---|---|---|
| Texture | Natural skin, texture preserved | natural skin, texture preserved |
| Whiteness | Natural skin tone, not overly pale | natural skin tone, healthy skin tone |
| Inner glow | Natural luminous glow | healthy glowing skin |
| Prohibited | Over-smoothing/mask-like/plastic look | — |

### Base Makeup Details (Default Tier)

| Item | Constraint | Prompt |
|---|---|---|
| Base makeup | Light and sheer, natural sheen | light sheer base makeup, natural sheen |
| Eyebrow makeup | Lightly groomed following the base model's eyebrow shape | natural groomed eyebrows, clean eyebrow shape |
| Eyes | Very subtle eye makeup, emphasizing clarity | clear eyes, very subtle eyeliner |
| Cheeks | Very subtle complexion brightening | natural cheek glow |
| Lips | Natural lip color or light pink tint | natural moisturized lip color |
| Overall | Visibly wearing makeup, but very light makeup feel | base makeup, no-makeup makeup look |

### Male Makeup

| Item | Constraint | Prompt |
|---|---|---|
| Base skin | Natural skin, fresh and clean | natural skin, fresh and clean |
| Principle | No-makeup look — appears unmade-up but with excellent skin | no-makeup look, naturally great skin |
| Eyebrows | Natural eyebrow shape, not drawn on | natural eyebrow shape |
| Lip color | Natural healthy tone, slightly moist | natural lip color |

---

## 4. Hairstyle Constraints (L2)

### Female Style Types

| Style | Description | Applicable | Prompt |
|---|---|---|---|
| Natural long hair | Long hair falling naturally | Everyday, casual | natural long hair, flowing long hair |
| Ponytail | High ponytail/low ponytail/half ponytail | Sports, commuting | high ponytail, sleek ponytail |
| Updo | Bun/updo | Formal, dinner | elegant updo, low bun |
| Short hair | Shoulder-length bob/chin-length bob | Fashion, capable | shoulder-length bob, bob hairstyle |
| Wavy curls | Natural slight waves/big waves | Dates, parties | natural curly hair, wavy hairstyle |
| Half-up hair | Half up half down, simple accessory | Everyday, commuting | half-up hair, half-up half-down |

### Female Hair Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Style | Minimalist modern, matched with outfit | minimalist hair accessory, modern hair accessory |
| Material | Metal/leather/acrylic | metal hair clip, leather hairband |
| Craftsmanship | Refined craftsmanship, clear details | refined hair accessory, clear details |

### Male Style Types

| Style | Applicable | Prompt |
|---|---|---|
| Short hair | Everyday, business, casual | short hair, neat short hair |
| Medium-long hair | Casual, artistic | medium-long hair, shoulder-length hair |
| Side-parted hairstyle | Business, formal | side-parted hairstyle, business hairstyle |
| Slightly wavy hairstyle | Casual, fashion | slightly wavy hairstyle, fashionable hairstyle |

---

## 5. Clothing Constraints (L3+L4)

### Female Clothing Matrix

| Style | Look | Applicable | Prompt |
|---|---|---|---|
| Business formal | Suit/shirt/skirt | Workplace, meetings | professional suit, business formalwear |
| Casual fashion | T-shirt/jeans/casual pants | Everyday, casual | casual outfit, everyday fashion |
| Date outfit | Dress/shirt/skirt | Dates, gatherings | dress, date outfit |
| Athletic casual | Sportswear/hoodie/yoga pants | Sports, casual | athletic wear, sporty casual |
| Evening gown | Gown/evening wear | Dinners, events | evening gown, elegant gown |

### Female Clothing General Constraints

| Item | Constraint | Prompt |
|---|---|---|
| Main color | Matched by scene, natural color | natural color, coordinated tones |
| Material | Realistic, clear fabric texture | clear fabric texture |
| Texture | Texture must be ultra-clear | clear clothing texture, ultra-clear detail |
| Layering | Well-defined layering, not over-layered | well-defined layering, natural pairing |

### Male Clothing Matrix

| Style | Applicable | Prompt |
|---|---|---|
| Business formal | Suit/shirt/dress pants | Workplace, meetings | business suit, formalwear |
| Casual fashion | Shirt/T-shirt/jeans | Everyday, casual | casual outfit, everyday fashion |
| Athletic casual | Sportswear/hoodie/sweatpants | Sports, casual | athletic wear, sporty casual |
| Minimalist everyday | Simple shirt/casual pants | Everyday, commuting | minimalist outfit, everyday casual |

---

## 6. Accessory Constraints (L5)

### Female Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Jewelry | Minimalist and refined, not excessive | minimalist earrings, refined necklace |
| Watch | Minimalist/fashionable, matched with style | minimalist watch, fashionable wristwatch |
| Glasses | Plain lenses/decorative frames, clean | glasses, clear frame |
| Belt | Minimalist/fashionable, matched with outfit | belt, waist belt |

### Male Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Watch | Minimalist/business, matched with style | minimalist watch, business wristwatch |
| Glasses | Plain lenses/decorative frames, clean | glasses, clear frame |
| Belt | Minimalist/fashionable, matched with outfit | belt, leather belt |
| Accessories | Minimalist and refined, not excessive | minimalist accessories, refined details |

---

## 7. Costume/Makeup Combination Quick Reference

| Scene | Makeup | Hairstyle | Clothing | Accessories |
|---|---|---|---|---|
| Daily commute | Bare-look makeup | Natural long hair/ponytail | Business formal/casual fashion | Watch/minimalist |
| Business meeting | Workplace makeup | Updo/ponytail | Business formal | Watch/minimalist jewelry |
| Weekend casual | Light makeup | Natural long hair | Casual fashion/athletic casual | Minimalist |
| Date/gathering | Date makeup | Wavy curls/updo | Date outfit | Refined jewelry |
| Dinner/event | Formal makeup | Elegant updo/waves | Evening gown | Refined jewelry |
| Sports/fitness | Bare-look makeup | High ponytail/bun | Athletic casual | Minimalist |

---

> **Inference rule for uncovered scenes**
>
> When the scene/context described by the user is not in the table above, infer based on this style's core genetic traits:
>
> | Inference Dimension | Live-Action Realistic Urban Genes |
> |---|---|
> | Makeup intensity | Default bare-look makeup (natural skin); business/formal → workplace makeup (capable, polished); date/gathering → date makeup (rosy complexion); party/performance → party makeup; sports/outdoor → bare-look or light makeup |
> | Hairstyle | Commuting/workplace → ponytail or half-up hair; casual/dates → natural long hair or wavy curls; sports → high ponytail or bun; formal → elegant updo; fashion occasions → short hair |
> | Clothing | The occasion determines refinement; workplace → business formal; casual → everyday fashion; dates → dress/skirt; sports → athletic casual; dinner → evening gown; realistic fabric texture is always maintained |
> | Accessory density | Sports → minimal or none; everyday → watch + minimalist; dates → refined jewelry; dinner → refined full set |
> | Texture baseline | Anchored in live-action realistic photography; natural skin texture + hair strand detail always maintained; over-smoothing/plastic look/3D rendering is prohibited |

## 8. Four-View Reference Sheet Specification

### View Definitions

| Position | View | Angle | Shot Type | Requirement | Prompt |
|---|---|---|---|---|---|
| Far left | Portrait close-up | Front, eye-level | Face to collarbone | Face occupies 60%+, facial features/makeup clear | portrait closeup, face detail, makeup detail |
| Second left | Front view | Front 0° | Full body standing | Facing camera, full frontal view of the outfit | front view, height mark |
| Second right | Side view | Right 90° | Full body standing | Pure profile silhouette, side layering of the outfit | side view, profile, height mark |
| Far right | Back view | Rear 180° | Full body standing | Back-of-head hairstyle/back of outfit clearly shown | back view, rear view, height mark |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side by side left to right in the same frame |
| Background | Clean neutral gray #E8E8E8 |
| Stance | Natural standing, feet parallel with slight gap, arms hanging naturally |
| Expression | Micro-expression matching the makeup style, facial micro-expression only |
| Lighting | Even soft light, front key light + dual side fill lights, no hard shadows |
| Consistency | Face/makeup/hairstyle/hairstyle/clothing/accessories fully consistent across all four views |
| Aspect ratio | Recommended 4:1 or 3:1 |

---

## 9. Prompt Template

### Output Format Constraints

| Item | Constraint |
|---|---|
| Output content | **Output the prompt text only**, no other content |
| Prohibited output | Quick reference tables, layered build plans, visual constraint tables, prohibition tables, derivative plans, output recommendations, core element tables, or any other non-prompt content |
| Prohibited scenes | Character derivative assets **do not include scene/environment descriptions**; do not output any scene/environment/weather/background narrative content |
| Prohibited props | **Do not include any prop interaction**; do not output handheld or interactive items such as phones/keys/bags/pens/wine glasses |
| Prohibited pose changes | **Do not change the base model's pose**; do not output any action such as walking/glancing back/raising a hand/turning sideways/running |
| Format | Output the usable prompt code block directly, with no headings, tables, explanations, or plan comparisons |

### Full Costume/Makeup Layering (Four Views)

```
Using the character's base model image as the base, img2img-layer the costume/makeup/hairstyling,
urban {gender} character four-view reference sheet, live-action realistic photography, urban realistic documentary style, high contrast, extreme detail, 8K, ultra-fidelity,
character design sheet, character turnaround,
keep the base model's face unchanged, {overall temperament},
【L1 · Makeup】decide based on user cues: {base makeup/light makeup/formal makeup}; use {makeup style}, natural skin, {eyebrow makeup}, {eye makeup}, {lip makeup},
【L2 · Hairstyle】{style type}, strand-by-strand defined hair, {hair accessory description},
【L3+L4 · Clothing】{main color}{style}, {material}, {decorative craftsmanship}, clear clothing texture, ultra-clear texture detail,
【L5 · Accessories】{headwear}, {earrings}, {necklace}, {watch},
same frame arranged left to right: portrait closeup + front view + side view + back view,
standing naturally, clean neutral gray background, even soft light, no harsh shadows,
four-view consistency, delicately rendered face, delicately rendered hair strands, ultra-clear texture detail
no text of any kind should appear in the image
```


---

## 10. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The face after layering must match the base model |
| R2 | Clothing must use "clear clothing texture + ultra-clear texture detail" |
| R3 | Makeup/hairstyle/clothing/accessories style must be unified |
| R4 | Must output a four-view reference sheet (portrait closeup + front view + side view + back view) |
| R5 | Must specify "clean neutral gray background" |
| R6 | Must specify "four-view consistency" |
| R7 | **Output the prompt only** — prohibited from outputting quick reference tables/layered plans/visual constraints/prohibition lists/derivative plans/output recommendations or any other non-prompt content |
| R8 | **Prohibited from including scene descriptions** — character derivative assets do not involve scene/environment/weather/background narrative |
| R9 | **Prohibited from prop interaction** — do not include any handheld/interactive items (phones/bags/keys/pens, etc.) |
| R10 | **Pose must remain unchanged** — must maintain the base model's natural standing pose |
| R11 | **L1 must analyze before deciding** — first parse the user's facial cues, then determine base makeup/light makeup/formal makeup |
| R12 | **All derivative assets require styling** — do not default to bare-face under normal circumstances; use at least base makeup |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Facial drift after layering |
| X2 | Makeup that is overly exaggerated/heavy modern makeup |
| X3 | Makeup/clothing styles conflicting with each other |
| X4 | Complex scene backgrounds (must be a pure gray background) |
| X5 | Inconsistent costume/makeup/styling between the four views |
| X6 | Outputting anything beyond the prompt (tables/plans/recommendations/explanations/variants, etc.) |
| X7 | Adding scene descriptions to character derivative assets (indoor/outdoor/street/weather, etc.) |
| X8 | Outputting sections such as "core element quick reference," "layered build plan," "visual constraints," "prohibitions," or "derivative plan" |
| X9 | Adding any prop interaction (handheld items such as phones/bags/keys/pens/wine glasses) |
| X10 | Changing the base model's pose (action descriptions such as walking/glancing back/raising a hand/turning sideways/running/lowering the head) |
| X11 | Adding expression-and-pose linked descriptions (such as narrative depictions like "walking at a 45° angle with a slight smile") |
| X12 | Applying a fixed makeup style directly without analyzing user cues |
| X13 | Incorrectly keeping a bare face, resulting in derivative assets lacking the styling they should have |
