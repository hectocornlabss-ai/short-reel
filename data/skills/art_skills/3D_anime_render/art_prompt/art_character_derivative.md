# 3D Animation Rendering Urban Character Derivative Asset Generation · Constraint Manual

---

## 1. Layering Principles

1. **Face unchanged** — after layering, facial features must exactly match the base model; no facial drift is allowed
2. **Pose unchanged** — maintain the base model's natural standing pose; no pose/action/posture changes of any kind are allowed
3. **Layer-by-layer control** — each layer is described independently, allowing replacement layer by layer (change outfit without changing makeup)
4. **Unified style** — all styling elements follow the same urban animation aesthetic system
5. **No loss of texture quality** — texture quality after layering must not fall below that of the base model
6. **Styling-only scope** — only makeup/hairstyle/clothing/accessories may be layered; introducing props, scenes, environments, or actions is prohibited

---

## 2. Layering Tiers

| Tier | Content | Description |
|---|---|---|
| L0 | Base model | The base design model, not modified |
| L1 | Makeup (decision layer) | First analyze user cues, then decide the intensity: "base makeup / light makeup / formal makeup" |
| L2 | Hairstyle | loose hair/ponytail/updo/half-up + hair accessories |
| L3 | Inner layer/undergarment | replaces the plain white base inner layer |
| L4 | Outerwear/main outfit | modern urban clothing |
| L5 | Accessories | headwear/earrings/necklace/waist accessories/hand accessories |

> **Scope boundary**: character derivative assets include only tiers L0-L5 (styling/makeup/costume), and do not include props (handheld items such as umbrellas/phones/laptops/coffee), scene environments (indoor/outdoor/weather, etc.), or pose/actions (walking/looking back/raising a hand, etc.). Those belong to other asset types.

---

## 3. Makeup Constraints (L1)

### Base Model to Derivative Styling Strategy (key)

> Although the character base model is bare-faced, derivative assets by default go through a styling process. The system should analyze styling needs based on cues provided by the user, and decide the intensity among base makeup, light makeup, and formal makeup — rather than keeping the face bare.

### L1 Cue Analysis and Makeup Decision

| Step | Processing content | Decision outcome |
|---|---|---|
| S1 | Extract user cues: facial state words, emotion words, intensity words | Form a makeup requirement summary |
| S2 | Filter out non-makeup cues: prop/scene/action/pose words are not used as a basis for makeup | Prevent misjudgment |
| S3 | Match against the makeup style matrix and assign an intensity tier | Base makeup / light makeup / formal makeup |
| S4 | Generate the final L1 prompt | Output only the conclusion, not the analysis process |

### Cue-to-Makeup Mapping (execution guideline)

| Cue type | Typical cues | L1 decision |
|---|---|---|
| No obvious facial-emphasis cues | Only clothing/hairstyle changes, no emphasis on emotion or state | Base makeup |
| Slight facial cues | Gentle, smiling, lashes fluttering slightly, complexion slightly brightened | Light makeup (very subtle) |
| Clear frailty/illness cues | Pale complexion, very faint lip color, slight redness under the eyes | Frail/pear-blossom makeup (light makeup) |
| Clear formal-ceremony cues | Formal attire, ceremony, gorgeous appearance | Formal makeup (restrained) |

> Determination principle: all derivative assets must have some styling; facial cues are examined first to determine intensity and style — props, scenes, and pose changes must not independently raise the makeup intensity.

### Female Makeup Style Matrix

| Style | Applicable scene | Core prompt |
|---|---|---|
| Fresh natural makeup | everyday, first meeting, work | fresh elegant makeup, softly swept brows, natural bare-faced-looking makeup |
| Cool glamorous makeup | formal, confrontation, power | cool glamorous makeup, sharp brows and eyes, cold thin lips |
| Soft peach makeup | sweet romance, ambiguity, heartfelt moment | peach blossom makeup, slightly reddened outer corners of eyes, dewy lip color |
| Frail pear-blossom makeup | injured, weak | pale complexion, very faint lip color, slight redness under the eyes |
| Luxurious evening makeup | formal evening event, gala attire | rich refined makeup, striking lip color |

### Common Base Skin (shared across all makeup styles)

| Item | Constraint | Prompt |
|---|---|---|
| Texture | Cel-shaded rendering, soft sheen | cartoon skin, soft skin texture |
| Fairness | Cool fair skin, translucent not pallid | milk skin, milky white skin |
| Inner glow | Soft glow radiating from within | inner glow, translucent glowing skin |
| Prohibited | Matte/deathly pale/waxy/oily sheen/overexposed | — |

### Base Makeup Refinement (default tier)

| Item | Constraint | Prompt |
|---|---|---|
| Brows | Lightly groomed following the base model's brow shape, brow shape unchanged | natural groomed brows, clean brow shape |
| Eyes | Very subtle eye enhancement, emphasizing clarity and brightness | clear bright eyes, very subtle inner eyeliner |
| Cheeks | Very subtle complexion brightening, no visible color buildup | natural cheek glow, faint complexion boost |
| Lips | Nude pink or light pink tint, kept restrained | naturally moist lip color, light pink lips |
| Overall | Visibly styled, but very light makeup feel | base makeup, natural bare-face-look makeup, natural fine retouch |

### By Feature (using fresh natural makeup as an example)

| Feature | Constraint | Prompt |
|---|---|---|
| Base makeup | Light and translucent, dewy subtle sheen | lightweight base makeup, dewy cream skin |
| Brow makeup | Distant-mountain brows/willow-leaf brows, soft gray-brown | soft distant-mountain brows, softly swept brows |
| Eye makeup | Very subtle eyeshadow, inner eyeliner, long lashes | clear subtle eye makeup, long lashes |
| Blush | Very light powder, faint sweep on the apples of the cheeks | very subtle blush, faint rosy flush |
| Lip makeup | Dewy light pink, subtle sheen | dewy light pink lip color |

### Male Makeup

| Item | Constraint | Prompt |
|---|---|---|
| Base skin | Cel-shaded rendering, fair and radiant, fresh and natural | cartoon skin, cream skin, luminous skin |
| Principle | Bare-face-look — appears unmade-up but with excellent skin | natural bare-face look, naturally great skin |
| Eyebrows | Naturally thick brows, not drawn on | naturally sharp brows, defined brow shape |
| Lip color | Natural healthy color, slightly moist | natural lip color, healthy flush |

---

## 4. Hairstyle Constraints (L2)

### Female Style Types

| Style | Description | Applicable | Prompt |
|---|---|---|---|
| Natural loose hair | Long hair falling naturally, smooth and glossy | everyday, casual | natural loose hair, smooth long hair |
| High ponytail | High-tied ponytail, energetic and crisp | sports, commuting | high ponytail, energetic ponytail |
| Low ponytail | Low-tied ponytail, elegant and simple | everyday, business | low ponytail, elegant ponytail |
| Half-up hairstyle | Half tied up on top + naturally flowing below | everyday, date | half-up hairstyle, half-tied style |
| Twin ponytails | Ponytails on both sides, youthful and lively | lively scenes | twin ponytails, lively hairstyle |
| Elegant updo | Updo/bun, formal feel | formal occasions | elegant updo, low bun |

### Female Hair Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Style | Modern urban style, simple and refined, matching the outfit | modern hair accessory, urban style |
| Material | Metal/fabric/acrylic | metal hairpin, fabric hair accessory |
| Craftsmanship | Refined craftsmanship, cartoon-styled presentation | fine craftsmanship, refined decoration |

### Male Style Types

| Style | Applicable | Prompt |
|---|---|---|
| Neat short hair | everyday, business | neat short hair, tidy hairstyle |
| Side/center part | formal, commuting | side-parted hairstyle, center-parted hairstyle |
| Tousled and messy | casual, artistic | tousled hairstyle, casually messy |
| Natural medium-long | casual, artistic | medium-long hair, falling naturally |

---

## 5. Clothing Constraints (L3+L4)

### Female Clothing Matrix

| Style | Type | Applicable | Prompt |
|---|---|---|---|
| Urban commuter outfit | shirt/suit/skirt | work, everyday | commuter outfit, urban professional wear |
| Casual everyday wear | T-shirt/jeans/hoodie | everyday, casual | casual clothing, comfortable outfit |
| Evening gown | dress/gown | banquet, date | evening gown, elegant dress |
| Sportswear | sports set/sports tank | sports, fitness | sportswear, energetic athletic outfit |
| Formal gown | high-end custom gown | formal occasions | formal gown, luxurious dress |

### Female Clothing General Constraints

| Item | Constraint | Prompt |
|---|---|---|
| Primary color | Mainly warm tones, fitting the urban feel | warm-toned clothing, urban color palette |
| Material | Realistic material feel + cel-shaded rendering | clear clothing texture, cel-shaded material |
| Texture | Clear texture without being overly realistic | clear clothing texture, cartoon-styled material |
| Shoulders | Natural shoulder line, moderate decoration | natural shoulder line, moderate decoration |
| Layering | Moderate layering, not overly elaborate | moderate layering, clean and distinct |

### Male Clothing Matrix

| Style | Applicable | Prompt |
|---|---|---|
| Urban casual wear | shirt/jeans/casual jacket | everyday, casual | casual clothing, urban style |
| Business formalwear | suit/shirt/tie | work, formal | business formalwear, professional look |
| Sportswear set | sportswear/sports set | sports, fitness | sportswear, energetic athletic outfit |
| Everyday casual wear | T-shirt/jeans/hoodie | casual, private | everyday casual wear, comfortable outfit |
| Formal gown | high-end custom suit/formal wear | formal occasions | formal wear, luxurious styling |

---

## 6. Accessory Constraints (L5)

### Female Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Headwear | Modern urban style, not sparse-looking | modern hair accessory, refined headwear |
| Earrings | Refined studs/dangling earrings | refined earrings, urban style |
| Necklace | Refined necklace/choker | refined necklace, minimalist design |
| Waist accessory | Simple belt/decorative sash | simple belt, urban accessory |
| Hand accessory | Refined bracelet/watch | refined watch, urban accessory |

### Male Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Glasses | Modern glasses/sunglasses | modern glasses, fashionable accessory |
| Belt | Simple belt/leather belt | simple belt, urban style |
| Watch | Refined watch/sports watch | refined watch, urban accessory |
| Bag | Urban backpack/briefcase | urban backpack, practical accessory |
| Keychain | Simple keychain | simple keychain, urban detail |

---

## 7. Styling Combination Quick Reference

| Scene | Makeup | Hairstyle | Clothing | Accessories |
|---|---|---|---|---|
| Everyday commute | Fresh natural makeup | half-up/ponytail | urban commuter outfit | minimal |
| Casual date | Soft peach makeup | half-up/loose hair | casual everyday wear | moderate |
| Business meeting | Cool glamorous makeup | half-up/tied hair | business formalwear | refined |
| Sports/fitness | Light makeup | ponytail/tied hair | sportswear | minimal |
| Formal evening event | Luxurious evening makeup | updo/half-up | evening gown | elaborate |
| Weekend outing | Light makeup | loose hair/half-up | casual everyday wear | moderate |
| Sports competition | Light makeup | ponytail/tied hair | sportswear | minimal |

---

> **Inference Rule for Uncovered Scenes**
>
> When a scene/situation described by the user is not in the table above, infer it based on this style's core DNA:
>
> | Inference dimension | 3D animation rendering urban DNA |
> |---|---|
> | Makeup intensity | Default fresh natural makeup; formal/business → cool glamorous makeup; sweet/date → soft peach makeup; weak/injured → frail pear-blossom makeup; evening/gala → luxurious evening makeup |
> | Hairstyle | Everyday/commute → half-up or ponytail; casual/date → natural loose hair; formal → updo; sports → high ponytail; twin ponytails for youthful, lively scenes |
> | Clothing | Full coverage for urban scenes; the formality of the occasion determines the refinement of the outfit (commute < everyday < date < evening event); 3D cel-shaded material is always maintained |
> | Accessory elaborateness | sports → minimal; everyday/commute → simple; date → moderately refined; formal evening event → elaborate |
> | Texture baseline | Cel-shaded rendering + soft lighting is always locked; sliding toward photorealistic photography or flat 2D anime texture is prohibited |

## 8. Four-View Design Sheet Specification

> Even after derivative styling is layered on, a four-view design sheet must still be output, ensuring consistency of the styling across all angles.

### View Definitions

| Position | View | Angle | Framing | Requirement | Prompt |
|---|---|---|---|---|---|
| Leftmost | Portrait close-up | Front, eye level | Face to collarbone | Face occupies 60%+, facial features/makeup clear | portrait closeup, face detail, makeup detail |
| Second from left | Front view | Front 0° | Full-body standing | Facing the camera, full front view of the outfit | front view, height mark |
| Second from right | Side view | Right 90° | Full-body standing | Pure profile silhouette, side layering of the outfit | side view, profile, height mark |
| Rightmost | Back view | Rear 180° | Full-body standing | Back-of-head hair accessories/back-of-outfit/hair ends clear | back view, rear view, height mark |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | All four views side by side in a single frame, left to right |
| Background | Clean neutral gray #E8E8E8 |
| Stance | Natural standing, feet parallel and slightly apart, arms naturally down or slightly extended (**any pose change is prohibited**) |
| Expression | A subtle expression matching the makeup style (e.g. fresh natural makeup → composed, peach makeup → smiling), limited to facial micro-expression only, no body movement |
| Lighting | Even soft lighting, frontal key light + fill light from both sides, no hard shadows |
| Consistency | Face/makeup/hairstyle/hair accessories/clothing/accessories must be fully consistent across the four views |
| Frame ratio | Recommended 4:1 or 3:1 |

---

## 9. Prompt Template

### Output Format Constraints

| Item | Constraint |
|---|---|
| Output content | **Output the prompt text only**, no other content |
| Prohibited output | Quick-reference tables, layered construction plans, visual constraint tables, prohibition tables, derivative plans, output recommendations, core-element tables, or any other non-prompt content |
| Prohibited scene content | Character derivative assets **do not include scene/environment descriptions**; do not output any scene/environment/weather/background narrative content (scenes belong to the scene asset category) |
| Prohibited props | **No prop interaction of any kind**; do not output handheld or interactive items such as umbrellas/phones/laptops/coffee (props belong to the prop asset category) |
| Prohibited pose changes | **The base model's pose must not change**; do not output any action or posture changes such as walking/looking back/raising a hand/turning sideways/running; maintain the natural standing pose |
| Format | Output the usable prompt code block directly, with no title, table, explanation, or plan comparison |

### Full Styling Layer (Four Views)

```
Using the character base design image as the base, img2img layer on styling/makeup,
3D animation rendering, cinema-grade lighting, vibrant cel-shaded texture, high-detail materials, joyful healing atmosphere, cartoon urban style, high-detail cartoon materials, moderate cartoon proportions, warm color palette, 8K ultra-high-definition, cinema-grade composition, soft lighting layers, bright cartoon rendering style, warm and healing, {gender} character four-view design sheet,
anime style, cel-shaded, 3D animation render, film lighting,
character design sheet, character turnaround,
keep the base design's face unchanged, {overall temperament},
[L1 · Makeup] decided based on user cues: {base makeup/light makeup/formal makeup}; use {makeup style}, cel-shaded skin, {brow makeup}, {eye makeup}, {lip makeup},
[L2 · Hairstyle] {style type}, smoothly rendered hair strands, {hair accessory description},
[L3+L4 · Clothing] {primary color}{type}, {material}, {decorative craftsmanship}, clear clothing texture, cel-shaded material,
[L5 · Accessories] {headwear}, {earrings}, {necklace}, {waist accessory},
side by side in one frame, left to right: portrait closeup + front view + side view + back view,
natural standing pose, clean neutral gray background, even soft lighting, no hard shadows,
four-view consistency, finely rendered face, finely rendered hair strands, clear texture detail,
cel-shaded rendering style, soft lighting, moderate cartoon proportions, combined with realistic material,
8K ultra-high-definition, cinema-grade composition,
no text of any kind in the image
```

---

## 10. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | After layering, the face must match the base model exactly |
| R2 | Clothing must use "clear clothing texture + cel-shaded material" |
| R3 | Female accessories must be "modern urban style + refined craftsmanship" |
| R4 | Makeup/hairstyle/clothing/accessory styles must be unified |
| R5 | A four-view design sheet must be output (portrait closeup + front view + side view + back view) |
| R6 | A "clean neutral gray background" must be specified |
| R7 | "Four-view consistency" must be specified |
| R8 | **Output the prompt only** — quick-reference tables/layered plans/visual constraints/prohibition lists/derivative plans/output recommendations, or any other non-prompt content is prohibited |
| R9 | **Scene descriptions are prohibited** — character derivative assets do not involve scene/environment/weather/background narrative; scenes belong to a separate asset type |
| R10 | **Prop interaction is prohibited** — no handheld/interactive items (umbrella/phone/laptop, etc.); props belong to a separate asset type |
| R11 | **Pose must remain unchanged** — the base model's natural standing pose must be maintained; any action/posture/pose change is prohibited |
| R12 | **L1 must analyze before deciding** — first parse the user's facial cues, then determine base makeup/light makeup/formal makeup |
| R13 | **All derivative assets require styling** — normally do not remain bare-faced; at minimum use base makeup |
| R14 | **Makeup intensity must be controlled** — even when applying makeup, keep it restrained; modern heavy makeup/exaggerated cosmetic effects must not appear |
| R15 | **Props/scene/action are not grounds for raising intensity** — props, environment, action information alone must not raise base makeup to a stronger level |
| R16 | Must include 3D animation rendering keywords (cel-shaded, 3D animation render, anime style) |
| R17 | Must include 8K ultra-high-definition, cinema-grade composition keywords |
| R18 | Must include a cinema-grade lighting keyword (film lighting) |

### Prohibited

| No. | Prohibited item |
|---|---|
| X1 | Facial drift after layering |
| X2 | Accessories that are too plain/too modern (female) |
| X3 | Makeup/clothing styles conflicting with each other |
| X4 | Complex scene backgrounds (must be a plain gray background) |
| X5 | Inconsistent styling across the four views |
| X6 | Outputting anything besides the prompt (tables/plans/recommendations/explanations/variants, etc.) |
| X7 | Adding scene descriptions to character derivative assets (mountain road/rain scene/indoor/street/weather or other environmental elements) |
| X8 | Outputting sections such as "core element quick reference," "layered construction plan," "visual constraints," "prohibitions," "derivative plan," etc. |
| X9 | Adding any prop interaction (holding a phone/laptop/coffee/bag, etc.) |
| X10 | Changing the base model's pose (action descriptions such as walking/looking back/raising a hand/turning sideways/running/lowering the head/looking up) |
| X11 | Adding expression-and-pose combined descriptions (such as narrative writing like "walking at a 45° angle with corners of the mouth slightly curved") |
| X12 | Applying a fixed makeup style directly without analyzing the user's cues |
| X13 | Incorrectly keeping the face bare, causing the derivative asset to lack the styling it should have |
| X14 | Mistakenly escalating the makeup solely due to prop/scene/action words, resulting in an incorrect intensity decision |
| X15 | Using photorealistic photography terms (such as real photography, photorealistic, RAW photo, etc.) |
| X16 | Cel-shaded texture that is excessive or insufficient — it must be kept moderate |
