# Anime Character Derivative Asset Generation · Constraint Manual

---

## 1. Overlay Principles

1. **Face unchanged** — after overlaying, facial features must exactly match the base model; no facial drift is allowed
2. **Pose unchanged** — maintain the base model's natural standing pose; no changes to pose/action/posture are allowed
3. **Layer-by-layer control** — each layer is described independently, so it can be swapped layer by layer (change the outfit without changing the makeup)
4. **Unified style** — all costume/styling elements follow the same aesthetic system
5. **No loss of quality** — texture quality after overlay must not fall below the base model
6. **Costume/styling scope only** — only makeup/hairstyle/clothing/accessories/footwear may be layered on; introducing props, scenes, environments, or actions is forbidden

---

## 2. Overlay Layers

| Layer | Content | Description |
|---|---|---|
| L0 | Base model | Base character model, not modified |
| L1 | Makeup (decision layer) | First analyze user cues, then decide the strength: "base makeup / light makeup / formal makeup" |
| L2 | Hairstyle | Bun/tied hair/braid + hair accessories |
| L3 | Undergarment/inner layer | Replaces the white base inner layer |
| L4 | Outerwear/main outfit | Modern urban differentiated clothing (shirt/coat/dress/suit, etc.) |
| L5 | Accessories | Jewelry/watch/glasses/bags, etc. |
| L6 | Footwear | High heels/ankle boots/loafers/sneakers, etc., fully matched to the overall outfit |

> **Scope boundary**: character derivative assets include only layers L0–L6 (costume, makeup, and styling); they do not include props (hand-held items like phones/books/umbrellas/coffee cups), scene environments (indoor/outdoor/weather, etc.), or pose/action (walking/looking back/raising a hand, etc.). These belong to other asset types.

---

## 3. Makeup Constraints (L1)

### Base Model to Derivative Makeup Strategy (Key)

> Although the character base model is bare-faced, derivative assets by default go through a makeup/styling process. The system should analyze the makeup needs based on cues provided by the user, and decide on a strength level among base makeup, light makeup, and formal makeup — rather than staying bare-faced.

### L1 Cue Analysis and Makeup Decision

| Step | Processing content | Decision outcome |
|---|---|---|
| S1 | Extract user cues: facial-state words, emotion words, intensity words | Form a makeup-requirement summary |
| S2 | Filter out non-makeup cues: props/scene/action/pose words are not used as a basis for applying makeup | Prevent misjudgment |
| S3 | Match against the makeup-style matrix and assign an intensity tier | Base makeup / light makeup / formal makeup |
| S4 | Generate the final L1 prompt | Output only the conclusion, not the analysis process |

### Cue-to-Makeup Mapping (Execution Standard)

| Cue type | Typical cues | L1 decision |
|---|---|---|
| No obvious facial-emphasis cue | Only clothing/hairstyle changes, no emotion or state emphasized | Base makeup |
| Slight facial cue | Soft, smiling, slightly fluttering lashes, a hint more color in the face | Light makeup (very subtle) |
| Clear sickly/weak cue | Pale complexion, very faint lip color, slight redness under the eyes | Sickly pear-blossom makeup (light makeup) |
| Clear formal ceremony cue | Formal attire, ceremony, formal occasion | Formal makeup (restrained) |

> Judgment principle: all derivative assets should have some makeup/styling applied; first look at facial cues to determine intensity and style — props, scene, and pose changes must not independently raise the makeup intensity.

### Female Makeup Style Matrix

| Style | Applicable scenes | Core prompt |
|---|---|---|
| Elegant natural makeup | Everyday, first meeting, workplace | elegant natural makeup, softly swept brows, clean natural-looking makeup |
| Cool glamorous makeup | Formal, confrontation, business | cool glamorous makeup, sharp brows and eyes, cool thin lips |
| Soft peach makeup | Sweet romance, ambiguous tension, dates | peach-blossom makeup, subtly reddened outer eye corners, dewy lip color |
| Sickly pear-blossom makeup | Injured, weak | pale complexion, very faint lip color, slight redness under the eyes |
| Opulent evening makeup | Party, banquet | bold glamorous makeup, vivid red lips, bright eyes |

### Common Base Skin (shared across all makeup styles)

| Item | Constraint | Prompt |
|---|---|---|
| Texture | Cel-shaded texture, smooth and fine | cel-shaded skin texture, smooth skin |
| Fairness | Cool white skin, translucent without looking pale/sickly | cool white skin, fair skin |
| Inner glow | A soft glow from within | inner-glow radiance, translucent skin |
| Forbidden | Matte/deathly pale/waxy/oily/overexposed look | — |

### Base Makeup Details (default tier)

| Item | Constraint | Prompt |
|---|---|---|
| Brows | Lightly groomed following the base model's brow shape, without changing the shape | naturally groomed brows, clean brow shape |
| Eyes | Very subtle eye enhancement, emphasizing clarity and brightness | clear bright eyes, very subtle inner eyeliner |
| Cheeks | Very subtle color brightening, no visibly heavy blush | naturally flushed cheeks, faint added color |
| Lips | Nude pink or light pink tint, kept restrained | naturally moist lip color, light pink lips |
| Overall | Makeup should be noticeable but very light | base makeup, natural "no-makeup" makeup look |

### Male Makeup

| Item | Constraint | Prompt |
|---|---|---|
| Base skin | Cel-shaded texture, fresh and natural | cel-shaded skin texture, fresh-looking skin |
| Principle | "No-makeup" makeup — looks unmade-up but with excellent skin | natural "no-makeup" look, naturally flawless skin |
| Brows | Naturally thick brows, not drawn on | natural brow shape, sharp handsome brows |
| Lip color | Natural healthy color, slightly moist | natural lip color, healthy-looking lips |

---

## 4. Hairstyle Constraints (L2)

### Female Style Types

| Style | Description | Applicable | Prompt |
|---|---|---|---|
| Natural loose hair | Long hair falling naturally | Everyday, workplace | naturally flowing hair, smooth long hair |
| Half-up hairstyle | Half tied up on top, loose below | Everyday, commute | half-up hairstyle, half-tied hair |
| Ponytail | High ponytail/low ponytail | Sport, casual | high ponytail, low ponytail |
| Updo | Elegant updo | Formal occasions | elegant updo, upswept hair |
| Twin tails | Youthful twin tails | Lively scenes | twin tails, youthful hairstyle |
| Fully tied hair | Bun/space buns | At home, casual | bun, hair bun |

### Female Hair Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Style | Simple and refined, matching the outfit | simple hair accessory, delicate hairpin |
| Material | Metal/pearlescent/fabric | metal hairpin, pearlescent hair accessory |
| Craftsmanship | Fine craftsmanship, clear detail | fine craftsmanship, clear detail |

### Male Style Types

| Style | Applicable | Prompt |
|---|---|---|
| Side-part short hair | Everyday, business | side-part short hair, business hairstyle |
| Tousled medium hair | Casual, artistic | tousled medium-length hair, artistic hairstyle |
| Crisp short hair | Sport, sharp-looking | crisp short hair, fresh-looking hairstyle |
| Medium-length hair | Formal, artistic | medium-length hair, artistic hairstyle |

---

## 5. Clothing Constraints (L3+L4)

### Female Clothing Matrix

| Style | Design | Applicable | Prompt |
|---|---|---|---|
| Business formal | Suit skirt/shirt + suit pants | Workplace, formal | business formal wear, professional suit |
| Casual everyday | T-shirt + jeans/dress | Everyday, casual | casual wear, everyday clothing |
| Date outfit | Dress/skirt | Dates, romantic occasions | date outfit, pretty dress |
| Athletic casual | Sportswear/hoodie/sweatpants | Sport, casual | athletic wear, casual sportswear |
| Evening gown | Formal evening gown | Party, evening banquet | evening gown, formal gown |

### Differentiated Outfit Principles

| Item | Constraint | Description |
|---|---|---|
| Character distinction | Outfit refinement and tailoring determined by age, occupation, personality, and financial status | All characters wearing the identical outfit and color is forbidden |
| Variation within the same style | Even within the same workplace style, differentiate skirt/pants, jacket cut, and inner-layering | Maintain a unified aesthetic without making it uniform-like |
| Scene adaptation | Switch outfit schemes separately for commuting, dating, at-home, and banquet scenes | Clothing should change along with the situation |

### General Female Clothing Constraints

| Item | Constraint | Prompt |
|---|---|---|
| Primary color | Mostly soft tones, low saturation, but each character needs their own color focus | soft color tones, low-saturation color, character-specific color scheme |
| Material | Modern fabric texture, clear texture detail | modern fabric, clear texture |
| Texture | Clear fabric texture | clear fabric texture, cloth texture |
| Layering | Clear clothing layers, well-matched, avoiding cookie-cutter templated outfits | clear clothing layers, well-coordinated outfit |

### Male Clothing Matrix

| Style | Applicable | Prompt |
|---|---|---|
| Business formal | Shirt/suit/casual blazer | business formal wear, suit |
| Casual everyday | Casual shirt/T-shirt + casual pants | casual wear, everyday clothing |
| Athletic casual | Sportswear/hoodie/sweatpants | athletic wear, casual sportswear |
| Formal attire | Formal suit, tuxedo | formal attire, formal suit |
| At-home casual | Loungewear, casual clothes | loungewear, casual clothing |

### Footwear Design (L6)

| Category | Applicable | Prompt |
|---|---|---|
| Women's commuting shoes | Workplace, formal | pointed-toe high heels, kitten heels, loafers, fine leather texture |
| Women's everyday shoes | Casual, dating | low-cut flats, ankle boots, white sneakers, refined shoe shape |
| Men's commuting shoes | Business, formal | dress shoes, derby shoes, loafers, clean crisp shoe upper |
| Unisex casual shoes | Everyday, sport | sneakers, canvas shoes, minimalist casual shoes, matched to the outfit |

> Footwear must clearly specify style, material, and color, and must match the clothing style; omitting footwear design or defaulting all characters to the same shoes is forbidden.

---

## 6. Accessory Constraints (L5)

### Female Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Jewelry | Simple and refined, not overly flashy | simple jewelry, delicate earrings |
| Watch | Elegant watch, fashionable wristwatch | fashionable watch, elegant wristwatch |
| Bags | Shoulder bag/handbag, clear texture | handbag, textured bag |
| Glasses | Fashionable glasses/sunglasses (optional) | fashionable glasses, elegant sunglasses |
| Belt | Elegant belt, clear detail | elegant belt, fashionable belt |

### Male Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Watch | Fashionable watch, clear texture | fashionable watch, elegant wristwatch |
| Glasses | Fashionable glasses/sunglasses (optional) | fashionable glasses, elegant sunglasses |
| Belt | Elegant belt, clear detail | elegant belt, fashionable belt |
| Tie | Tie/bow tie (formal occasions) | fashionable tie, elegant bow tie |

---

## 7. Costume/Styling Combination Quick Reference

| Scene | Makeup | Hairstyle | Clothing | Accessories | Footwear |
|---|---|---|---|---|---|
| Workplace commute | Elegant natural makeup | Half-up hairstyle/updo | Business formal (skirt suit/suit pants/trench coat layering, differentiated) | Simple jewelry/watch | High heels/loafers/dress shoes |
| First date | Soft peach makeup | Natural loose hair | Date outfit (dress/knit set/skirt) | Elegant jewelry/bag | Flats/ankle boots |
| Everyday casual | Base makeup | Ponytail/natural loose hair | Casual everyday (T-shirt and jeans/layered shirt/hoodie) | Simple accessories | White sneakers/canvas shoes |
| Formal occasion | Cool glamorous makeup | Updo/half-up | Business formal/evening gown | Elegant jewelry/watch | High heels/formal shoes/dress shoes |
| Athletic casual | Base makeup (very subtle) | High ponytail/crisp short hair | Athletic casual | Sports watch/sports accessories | Sneakers |
| Party gathering | Formal makeup | Elegant updo/loose hair | Evening gown/fashionable outfit | Elegant jewelry/elegant accessories | Stiletto heels/ankle boots/formal shoes |
| At-home casual | Bare-faced/base makeup | Bun/natural loose hair | At-home casual | None or minimal accessories | Soft-sole slippers/simple house shoes |

---

> **Inference Rule for Uncovered Scenes**
>
> When the scene/situation described by the user is not in the table above, infer it from the core genes of this style:
>
> | Inference dimension | Anime urban romance genes |
> |---|---|
> | Makeup intensity | Default elegant natural makeup; tension/confrontation/authority words → cool glamorous makeup; sweet romance/ambiguous tension/heartbeat → soft peach makeup; weak/injured → sickly pear-blossom makeup; evening banquet/party → opulent evening makeup |
> | Hairstyle | Workplace/commute → half-up hairstyle or updo; everyday/romance → natural loose hair; sport/action → high ponytail; formal occasion → elegant updo |
> | Clothing | Prioritize modern urban settings; higher emotional intensity → more refined clothing; tense scenes → business formal/cool color palette |
> | Accessory complexity | Everyday → simple; dating → elegant jewelry + bag; formal/banquet → elegant jewelry + watch; sport → minimal or none |
> | Color tendency | Cool white skin + low-saturation urban color palette; ambiguous scenes → warm pink tones; confrontation/tension → cool gray + black-and-white contrast |

## 8. Four-View Turnaround Sheet Specification

> After overlaying derivative costume/styling, a four-view turnaround sheet must still be output, ensuring costume/styling consistency across all angles.

### View Definitions

| Position | View | Angle | Framing | Requirement | Prompt |
|---|---|---|---|---|---|
| Far left | Portrait close-up | Front, eye level | Face to collarbone | Face occupies 60%+, features/makeup clear | `portrait closeup`, `face detail`, `makeup detail` |
| Second from left | Front view | Front 0° | Full-body standing | Facing the camera, full frontal view of the outfit | `front view`, `height mark` |
| Second from right | Side view | Right side 90° | Full-body standing | Pure profile silhouette, side layering of the outfit | `side view`, `profile`, `height mark` |
| Far right | Back view | Rear 180° | Full-body standing | Back-of-head hair accessories/back of outfit/hair ends clearly shown | `back view`, `rear view`, `height mark` |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views placed side by side, left to right, in one frame |
| Background | Pure neutral gray `#E8E8E8` |
| Pose | Standing naturally, feet parallel and slightly apart, arms hanging naturally or slightly extended (**no pose changes of any kind allowed**) |
| Expression | Subtle expression matching the makeup style (e.g. elegant natural makeup → serene, peach makeup → smiling), limited to facial micro-expression only, no body movement involved |
| Lighting | Even soft light, frontal key light + fill light on both sides, no hard shadows |
| Consistency | Face/makeup/hairstyle/hair accessories/clothing/accessories/footwear must be exactly consistent across the four views |
| Aspect ratio | 4:1 or 3:1 recommended |

---

## 9. Prompt Template

### Output Format Constraints

| Item | Constraint |
|---|---|
| Output content | **Output the prompt text only**, no other content |
| Forbidden output | Quick-reference tables, layered construction plans, visual constraint tables, prohibition tables, derivative plans, output recommendations, core-element tables, or any other non-prompt content |
| Forbidden scene content | Character derivative assets **do not include scene/environment description**; do not output any scene/environment/weather/background narrative content (scenes belong to the scene-asset category) |
| Forbidden props | **No prop interaction of any kind**; do not output hand-held or interactive items such as phones/books/umbrellas/coffee cups (props belong to the prop-asset category) |
| Forbidden pose changes | **Do not change the base model's pose**; do not output any action or posture changes such as walking/looking back/raising a hand/turning sideways/running; keep the natural standing pose |
| Format | Output the usable prompt code block directly, with no titles, tables, explanations, or plan comparisons |

### Full Costume/Styling Overlay (Four-View)

Using the character base image as the base layer, img2img overlay of costume/makeup/styling,
anime {gender} character four-view turnaround sheet, cel shading, modern urban style, strong contrast, extreme detail, 8K, ultra-fidelity
character design sheet, character turnaround,
keep the base model's face unchanged, {overall temperament},
[L1 · Makeup] decided based on user cues: {base makeup/light makeup/formal makeup}; use {makeup style}, soft-glow skin, {brow makeup}, {eye makeup}, {lip makeup},
[L2 · Hairstyle] {style type}, clearly layered hair strands, {hair accessory description},
[L3+L4 · Clothing] {primary color}{design}, {material}, {decorative craftsmanship}, differentiated to match the character's identity and scene, avoiding identical outfit and color across all characters, clear clothing texture, ultra-clear texture detail,
[L5 · Accessories] {headpiece}, {earrings}, {watch}, {bag},
[L6 · Footwear] {shoe type}, {upper material}, {heel/sole description}, consistent with the clothing style,
side by side in one frame, left to right: portrait close-up + front view + side view + back view,
standing naturally, pure neutral gray background, even soft light, no hard shadows,
four-view consistency, delicately rendered face, finely rendered hair strands, ultra-clear texture detail
no text anywhere in the image

---

## 10. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Face after overlay must match the base model |
| R2 | Clothing must use "clear clothing texture + ultra-clear texture detail" |
| R3 | Female accessories must be "simple and refined + clear craftsmanship" |
| R4 | Makeup/hairstyle/clothing/accessories/footwear must share a unified style |
| R5 | Must output a four-view turnaround sheet (portrait close-up + front view + side view + back view) |
| R6 | Must specify a "pure neutral gray background" |
| R7 | Must specify "four-view consistency" |
| R8 | **Output only the prompt** — outputting quick-reference tables/layered plans/visual constraints/prohibitions/derivative plans/output recommendations, or any other non-prompt content is forbidden |
| R9 | **No scene description allowed** — character derivative assets do not involve scene/environment/weather/background narrative; scenes are a separate asset type |
| R10 | **No prop interaction allowed** — no hand-held/interactive items (phones/books/umbrellas/coffee cups, etc.); props are a separate asset type |
| R11 | **Pose must remain unchanged** — must maintain the base model's natural standing pose; no action/posture/pose changes of any kind allowed |
| R12 | **L1 must analyze before deciding** — first parse the user's facial cues, then determine base makeup/light makeup/formal makeup |
| R13 | **All derivative assets require makeup/styling** — do not stay bare-faced under normal circumstances; use at least base makeup |
| R14 | **Makeup intensity must be controlled** — even when makeup is applied it should remain restrained, with no exaggerated cosmetic effects |
| R15 | **Props/scene/action must not be used to escalate intensity** — props, environment, action information alone must not raise base makeup to a stronger makeup level |
| R16 | **Footwear design must be explicit** — at least two of shoe type, material, and color must be specified; footwear must not be omitted |
| R17 | **Clothing must be differentiated** — outfits should vary by character identity, age, personality, and scene; applying the same clothing template to all characters is forbidden |

### Strictly Prohibited

| No. | Prohibited |
|---|---|
| X1 | Face drift after overlay |
| X2 | Accessories too simple/too exaggerated |
| X3 | Makeup/clothing/footwear styles conflicting with each other |
| X4 | Complex scene backgrounds (must be pure gray) |
| X5 | Inconsistent costume/makeup/styling between the four views |
| X6 | Outputting anything other than the prompt (tables/plans/recommendations/explanations/variants, etc.) |
| X7 | Adding scene description to character derivative assets (modern indoor/outdoor/weather or other environmental elements) |
| X8 | Omitting footwear design, leaving the feet with only the default base model or no clear outfit |
| X9 | All characters using the identical clothing style, color, and cut, lacking character differentiation |
| X10 | Outputting sections such as "core element quick reference," "layered construction plan," "visual constraints," "prohibitions," or "derivative plans" |
| X11 | Adding any prop interaction (holding a phone/book/umbrella/coffee cup or other items) |
| X12 | Changing the base model's pose (action descriptions such as walking/looking back/raising a hand/turning sideways/running/lowering the head/looking up) |
| X13 | Adding expression-and-pose combination descriptions (narrative descriptions such as "walking at a 45° angle with a slight smile") |
| X14 | Applying a fixed makeup style directly without analyzing the user's cues |
| X15 | Incorrectly staying bare-faced, causing the derivative asset to lack the makeup/styling it should have |
| X16 | Mistakenly escalating the makeup level based solely on props/scene/action words, resulting in an incorrect makeup-intensity decision |