# Character Derivative Asset Generation · Flat Style Constraint Manual

---

## 1. Layering Principles

1. **Silhouette unchanged** — after layering, the outline/silhouette must exactly match the base model; silhouette drift is prohibited
2. **Pose unchanged** — keep the base model's natural standing pose; any change to pose/action/posture is prohibited
3. **Layer-by-layer control** — each layer is described independently, making it easy to swap by layer (change costume without changing makeup)
4. **Unified style** — all costume/makeup elements follow the same flat aesthetic system
5. **Color block quality not reduced** — after layering, color block quality must not be lower than the base model
6. **Costume/makeup scope only** — only makeup/hairstyle/clothing/accessories may be layered on; introducing props, scenery, environment, or actions is prohibited

---

## 2. Layering Hierarchy

| Layer | Content | Description |
|---|---|---|
| L0 | Base model | The base character model, not modified |
| L1 | Makeup (decision layer) | First analyze user cues, then decide the makeup intensity: "base makeup / light makeup / formal makeup" |
| L2 | Hairstyle | Bun/tied hair/braided hair + hair accessories |
| L3 | Underlayer/inner garment | Replaces the white base underlayer |
| L4 | Outer garment/main robe | Wide-sleeve robe/straight-hem robe/cloak, etc. |
| L5 | Accessories | Headpiece/earrings/necklace/waist ornament/hand jewelry |

---

## 3. Makeup Constraints (L1)

### Base-model-to-derivative makeup strategy (key point)

> Although the character base model has a bare face, derivative assets by default enter the makeup process. The system should analyze the makeup requirements based on the cues provided by the user, and decide the intensity between base makeup, light makeup, and formal makeup, rather than keeping the face bare.

### L1 cue analysis and makeup decision

| Step | Processing content | Decision outcome |
|---|---|---|
| S1 | Extract user cues: facial-state words, emotion words, intensity words | Form a makeup requirement summary |
| S2 | Filter out non-makeup cues: prop/scene/action/pose words are not used as a basis for applying makeup | Prevent misjudgment |
| S3 | Match against the makeup style matrix and assign an intensity tier | Base makeup / light makeup / formal makeup |
| S4 | Generate the final L1 prompt | Output only the conclusion, not the analysis process |

### Cue-to-makeup mapping (execution standard)

| Cue type | Typical cue | L1 decision |
|---|---|---|
| No clear facial-emphasis cue | Only clothing/hairstyle change, no emphasis on emotion or condition | Base makeup |
| Slight facial cue | Gentle, smiling, slightly brighter complexion | Light makeup (very subtle) |
| Clear frail/ill cue | Pale complexion, very faint lip color | Frail/pear-blossom makeup (light makeup) |
| Clear formal-ceremony cue | Formal attire, ceremony, resplendent appearance | Formal makeup (controlled) |

### Female makeup style matrix

| Style | Applicable scenes | Core prompt |
|---|---|---|
| Elegant plain makeup | Everyday, first meeting, boudoir | flat makeup, soft elegant color blocks, minimalist makeup |
| Cool frosty makeup | Formal, confrontation, power | flat cool makeup, clean lines, color block makeup |
| Soft peach-blossom makeup | Sweet romance, ambiguity, heartbeat | flat peach-blossom makeup, pink tones, color block expression |
| Frail pear-blossom makeup | Injured, weak | flat frail makeup, pale skin tone, faint lip color |
| Resplendent phoenix makeup | Grand wedding, formal attire | flat bold makeup, rich color blocks, refined lines |

### Common base skin (shared by all makeup styles)

| Item | Constraint | Prompt |
|---|---|---|
| Texture | Solid color fill, no gradient | solid-color skin, flat skin, solid skin |
| Fairness | Light solid color, even | light skin tone, solid-color skin tone |
| Inner glow | No inner glow, purely flat | no gloss, no glow |
| Prohibited | Gradient/shadow/3D effect | — |

### Base makeup detail (default tier)

| Item | Constraint | Prompt |
|---|---|---|
| Eyebrows | Outlined with lines, solid color fill | lined eyebrows, flat eyebrow shape |
| Eyes | Simplified color block, no pupil detail | flat eyes, color block eyes |
| Cheeks | Very faint color block, must not be visibly heavy | very faint blush, color block glow |
| Lips | Solid-color tint, kept restrained | solid-color lips, flat lips |
| Overall | Makeup is visible but the color blocks are very light | base flat makeup, faux-bare-face flat look |

---

## 4. Hairstyle Constraints (L2)

### Female hairstyle types

| Style | Description | Applicable to | Prompt |
|---|---|---|---|
| Half-up cloud bun | Bun at the crown + hair hanging behind | Everyday, outings | flat cloud bun, simple updo |
| Flying-immortal high bun | Tall, upward-swept bun, clean lines | Fantasy realm, grand entrance | flat flying-immortal bun, lined high bun |
| Falling-horse low bun | Low bun to one side, languid lines | Private, intimate | flat falling-horse bun, lined side bun |
| Double-loop buns | Symmetrical double buns, youthful lines | Young characters | flat double buns, simple twin loops |
| Fully loose hair | Long hair fully let down, with simple hair accessories | Injured, down on luck | flat loose hair, lined long hair |
| Tied ponytail | High, neat, businesslike, clean lines | Martial arts, in action | flat ponytail, lined tied hair |

### Female hair accessories

| Item | Constraint | Prompt |
|---|---|---|
| Style | Flat decoration, geometric shapes | flat hair accessory, geometric ornament |
| Material | Outlined with lines, solid color fill | lined ornament, color block hair accessory |
| Craftsmanship | Clean lines, minimalist craftsmanship | clean lines, flat craftsmanship |

### Male hairstyle types

| Style | Applicable to | Prompt |
|---|---|---|
| Half-tied hair with half-crown | Everyday, scholarly | flat half-tied hair, lined crown |
| Full crown, fully tied up | Formal, court | flat full crown, lined tied hair |
| Loose hair over the shoulders | Private, injured | flat loose hair, lined long hair |
| Battle ponytail | Combat, martial arts | flat battle hair, lined ponytail |

---

## 5. Clothing Constraints (L3+L4)

### Female clothing matrix

| Style | Cut | Applicable to | Prompt |
|---|---|---|---|
| Simple flowing robe | Multi-layered wide-sleeve robe, flat lines | Everyday, fantasy realm | flat wide sleeves, lined robe |
| Dignified formal gown | Wrap-front deep robe/tunic-and-skirt set, geometric lines | Court, banquet | flat wrap-front robe, simple deep robe |
| Light everyday wear | Narrow-sleeve tunic-and-skirt/short jacket, clean lines | Action, martial arts | flat narrow sleeves, simple short jacket |
| Sleepwear | Thin inner robe, plain solid flat color | Indoors, nighttime | flat sleepwear, plain-colored garment |
| Wedding attire | Phoenix coronet and formal cape, layered color blocks | Wedding | flat wedding attire, layered color blocks |

### General female clothing constraints

| Item | Constraint | Prompt |
|---|---|---|
| Main color | White/moonlight white/silver gray as default | white flat clothing, simple garment |
| Material | Solid color blocks, no texture | solid-color garment, no texture |
| Texture | Lines must be clear | clear lines, distinct color blocks |
| Shoulders | Shoulder ornament/shawl sash/cloud-collar lines | lined shoulder ornament, flat cloud collar |
| Layering | Multiple layers worn together, distinct color blocks | multiple layers, flat layering |

### Male clothing matrix

| Style | Applicable to | Prompt |
|---|---|---|
| Scholarly refined attire | Everyday, study | flat long robe, simple garment |
| Warrior's fitted attire | Combat, training | flat fitted attire, simple battle gear |
| Dark robe and cloak | Grand entrance, night travel | flat cloak, lined cape |
| Casual everyday wear | Leisure, private | flat casual wear, simple everyday clothes |
| Formal court robe | Court, ceremony | flat court robe, simple ceremonial gown |

---

## 6. Accessory Constraints (L5)

### Female accessories

| Type | Constraint | Prompt |
|---|---|---|
| Headpiece | Flat design, geometric shapes | flat headpiece, geometric hair ornament |
| Earrings | Lined tassels/jade drop earrings | lined earrings, flat jade drops |
| Necklace | Lined beaded necklace/collar | lined beaded necklace, flat collar |
| Waist ornament | Lined court sash/jade pendant | lined court sash, flat jade pendant |
| Hand jewelry | Lined jade bracelet/armlet | lined bracelet, flat armlet |

### Male accessories

| Type | Constraint | Prompt |
|---|---|---|
| Crown | Flat crown, clean lines | flat crown, lined crown |
| Waist sash | Lined waist sash, flat color block | lined waist sash, flat belt |
| Jade pendant | Flat jade pendant, simple shape | flat jade pendant, lined pendant |
| Weapon | Sword/fan/flute (optional) | flat sword, lined fan |

---

## 7. Costume/Makeup Combination Quick Reference

| Scene | Makeup | Hairstyle | Clothing | Accessories |
|---|---|---|---|---|
| Everyday at home | Elegant plain makeup | Half-up cloud bun | Simple flowing robe | Flat, medium amount |
| First meeting | Elegant plain makeup | Half-up/flying-immortal bun | Simple flowing robe | Flat, medium-to-many |
| Sweet romantic interaction | Soft peach-blossom makeup | Half-up/falling-horse bun | Simple/light everyday wear | Flat, medium amount |
| Formal appearance | Cool frosty makeup | Flying-immortal high bun | Dignified formal gown | Flat, very elaborate |
| Private night conversation | Elegant/peach-blossom makeup | Fully loose/falling-horse bun | Sleepwear | Flat, very minimal |
| Injured and down on luck | Frail pear-blossom makeup | Fully loose (disheveled) | Damaged everyday wear | Flat, very minimal/none |
| Grand wedding ceremony | Resplendent phoenix makeup | Flying-immortal high bun | Wedding attire | Flat, very elaborate |
| Martial arts in action | Plain makeup (very subtle) | Tied ponytail | Light everyday wear | Flat, simple |

---

> **Rule for inferring uncovered scenes**
>
> When a scene/situation described by the user is not in the table above, infer it based on the style's core genes:
>
> | Inference dimension | Flat ancient-style genes |
> |---|---|
> | Makeup intensity | Default to elegant plain makeup (extremely minimal color blocks); formal/grand appearance → cool frosty makeup; sweet romance/date → soft peach-blossom makeup; weakened/frail → frail pear-blossom makeup |
> | Hairstyle | Everyday → half-up cloud bun or falling-horse bun; formal → flying-immortal high bun; private/night → fully loose hair; in action → tied ponytail |
> | Clothing | All clothing must be converted into flat color block expression; patterns extremely simplified; multiple layers only need to preserve a sense of silhouette |
> | Accessory complexity | Flat treatment takes priority; formal → very elaborate flat treatment (simplified into color-block headpiece + waist-ornament silhouette); everyday → medium flat treatment |
> | Color tendency | Low-saturation ancient-style color palette (tea white/bamboo green/lotus pink/brick red); no gradients; clear boundary lines |

## 8. Four-View Reference Sheet Specifications

### View definitions

| Position | View | Angle | Shot type | Requirement | Prompt |
|---|---|---|---|---|---|
| Far left | Portrait close-up | Front, eye-level | Face to collarbone | Face occupies 60%+, facial features/makeup clear | portrait closeup, face detail, makeup detail |
| Second from left | Front view | Front 0° | Full-body standing | Facing the camera, full front view of the outfit | front view, height mark |
| Second from right | Side view | Right side 90° | Full-body standing | Pure profile silhouette, side layering of the outfit | side view, profile, height mark |
| Far right | Back view | Rear 180° | Full-body standing | Back-of-head accessories/back of garment/hair ends clear | back view, rear view, height mark |

### Frame specifications

| Item | Constraint |
|---|---|
| Layout | All four views arranged side by side, left to right, in one frame |
| Background | Clean neutral gray #E8E8E8 |
| Stance | Natural standing, feet parallel and slightly apart, arms hanging naturally or slightly spread (**any change of pose is prohibited**) |
| Expression | A subtle expression matching the makeup style (e.g., elegant plain makeup → serene, peach-blossom makeup → smiling); facial expression only, no body-action involvement |
| Lighting | No lighting effects, purely flat-colored blocks |
| Consistency | Face/makeup/hairstyle/hair accessories/clothing/accessories must be completely consistent across all four views |
| Aspect ratio | 4:1 or 3:1 recommended |

---

## 9. Prompt Template

### Output format constraints

| Item | Constraint |
|---|---|
| Output content | **Output only the prompt text**, nothing else |
| Prohibited output | Quick-reference tables, layer-construction plans, visual constraint tables, prohibition tables, derivative plans, output suggestions, core-element tables, or any other non-prompt content |
| Prohibited scenes | Character derivative assets **must not include scene/environment descriptions**; do not output any scene/environment/weather/background narrative content (scenes belong to the scene asset category) |
| Prohibited props | **Must not include any prop interaction**; do not output hand-held or interactive objects such as umbrellas/swords/fans/books/lanterns/wine cups, etc. (props belong to the prop asset category) |
| Prohibited pose changes | **Must not change the base model's pose**; do not output any action or posture changes such as walking/looking back/raising a hand/turning sideways/running; keep the natural standing pose |
| Format | Output the usable prompt code block directly, with no headings, tables, explanations, or plan comparisons |

### Full costume/makeup layering (four views)


```
Using the character base model image as the base, img2img layering of costume and makeup,
flat ancient-style {gender} character four-view reference sheet,
2d flat design, vector art, flat illustration,
minimalist, clean lines, solid colors,
keep the base model's silhouette unchanged, {overall temperament},
[L1 · Makeup] decided based on user cues: {base makeup/light makeup/formal makeup}; using {makeup style}, solid-color skin, flat skin tone, {eyebrow makeup}, {eye makeup}, {lip makeup},
[L2 · Hairstyle] {style type}, lined hairstyle, {hair accessory description},
[L3+L4 · Clothing] {main color}{cut}, {material}, {decorative craftsmanship}, clean lines, distinct color blocks,
[L5 · Accessories] {headpiece}, {earrings}, {necklace}, {waist ornament},
side by side in one frame, left to right: portrait closeup + front view + side view + back view,
standing naturally, clean neutral gray background, no lighting effects, no gradients,
four-view consistency, clean lines, color block fill,
no text of any kind in the image
```


---

## 10. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | After layering, the silhouette must match the base model |
| R2 | Clothing must use "clean lines + distinct color blocks" |
| R3 | Female accessories must be "flat + geometric" |
| R4 | Makeup/hairstyle/clothing/accessory styles must be unified |
| R5 | Must output a four-view reference sheet (portrait closeup + front view + side view + back view) |
| R6 | Must specify a "clean neutral gray background" |
| R7 | Must specify "four-view consistency" |
| R8 | **Output only the prompt** — outputting quick-reference tables/layering plans/visual constraints/prohibition lists/derivative plans/output suggestions or any other non-prompt content is prohibited |
| R9 | **Scene descriptions are prohibited** — character derivative assets do not involve scene/environment/weather/background narrative; scenes are a separate asset type |
| R10 | **Prop interaction is prohibited** — must not include any hand-held/interactive objects (umbrellas/swords/fans/books, etc.); props are a separate asset type |
| R11 | **Pose must remain unchanged** — must keep the base model's natural standing pose; any change of action/posture/pose is prohibited |
| R12 | **L1 must analyze before deciding** — first parse the user's facial cues, then determine base makeup/light makeup/formal makeup |
| R13 | **All derivative assets require makeup** — do not keep a bare face under normal circumstances; at least base makeup must be used |
| R14 | **Makeup intensity is controlled** — even when applying makeup, it must remain restrained; modern heavy flat-style makeup or exaggerated cosmetic effects must not appear |
| R15 | **Props/scene/action must not be used to escalate intensity** — props, environment, action, or similar information alone must not raise base makeup to a stronger makeup tier |

### Strictly Prohibited

| No. | Prohibited |
|---|---|
| X1 | Silhouette drift after layering |
| X2 | Accessories that are too simple/modern (female) |
| X3 | Makeup/clothing styles conflicting with each other |
| X4 | Complex scene backgrounds (must be a pure gray background) |
| X5 | Inconsistent costume/makeup across the four views |
| X6 | Outputting anything other than the prompt (tables/plans/suggestions/explanations/variants, etc.) |
| X7 | Adding scene descriptions to character derivative assets (mountain path/rain scene/indoors/street/weather or other environmental elements) |
| X8 | Outputting sections such as "core element quick reference," "layer construction plan," "visual constraints," "prohibitions," or "derivative plan" |
| X9 | Adding any prop interaction (holding an umbrella/sword/fan/book/lantern/wine cup, etc.) |
| X10 | Changing the base model's pose (action descriptions such as walking/looking back/raising a hand/turning sideways/running/lowering the head/looking up) |
| X11 | Adding descriptions that link expression with pose (such as narrative descriptions like "turning 45° while walking with a slight smile") |
| X12 | Applying a fixed makeup style directly without analyzing the user's cues |
| X13 | Incorrectly keeping a bare face, causing the derivative asset to lack the makeup it should have |
| X14 | Mistakenly escalating the makeup tier based only on prop/scene/action words, resulting in an incorrect makeup-intensity decision |
| X15 | Adding gradient/shadow/highlight/3D effects |
