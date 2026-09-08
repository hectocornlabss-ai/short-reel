# 90s Retro Japanese Anime Style - Character Derivative Asset Generation · Constraint Manual

---

## 1. Layering Principles

1. **Face unchanged** — After layering, facial features must remain fully consistent with the base model; face drift is prohibited
2. **Pose unchanged** — Maintain the base model's natural standing pose; any pose/action/posture change is prohibited
3. **Layer-by-layer control** — Each layer is described independently, making it easy to swap by layer (change outfit without changing makeup)
4. **Unified style** — All costume/makeup elements follow the 90s retro hand-drawn flat-shading aesthetic system, but should not be templated/duplicated identically
5. **Preserve character differences** — Different characters should retain clothing differences based on age, identity, personality, and occasion, avoiding "everyone wearing the same outfit"
6. **No texture degradation** — The hand-drawn texture standard after layering must not be lower than the base model
7. **Pure costume/makeup scope** — Only makeup/hairstyle/clothing/footwear/accessories may be layered; introducing props, scenes, environments, or actions is prohibited

---

## 2. Layer Hierarchy

| Layer | Content | Description |
|---|---|---|
| L0 | Base model | Base character model, not modified |
| L1 | Makeup (decision layer) | Analyze makeup/styling intensity based on user cues |
| L2 | Hairstyle | Hair bun/tied hair/braided hair + hair accessories |
| L3 | Undergarment/inner layer | Replaces the plain white base inner layer |
| L4 | Outerwear/main garment | Kimono/modern outfit/retro outfit, etc. |
| L5 | Footwear | Shoe type/socks/shoe surface material/color |
| L6 | Accessories | Headwear/earrings/necklaces/waist accessories/hand accessories |

> **Scope boundary**: Character derivative assets only include layers L0–L6; props, scene environments, and poses/actions are not included.

---

## 3. Makeup Constraints (L1)

### Base-to-Derivative Makeup Strategy (Key)

> The character base model has a bare face, but derivative assets enter the makeup/styling pipeline by default. The system should analyze makeup needs based on user cues and decide the intensity among basic makeup/light makeup/formal makeup.

### Cue-to-Makeup Mapping

| Cue Type | Typical Cue | L1 Decision |
|---|---|---|
| No obvious facial-emphasis cue | Only clothing/hairstyle changes | Basic makeup |
| Slight facial cue | Smiling, slightly improved complexion | Light makeup |
| Clear frail/sickly cue | Pale complexion, very faint lip color | Frail/sickly makeup |
| Clear formal/ceremonial cue | Formal attire, ceremony | Formal makeup |

### Female Makeup Style Matrix

| Style | Applicable Scene | Core Prompt |
|---|---|---|
| Everyday light makeup | Daily life, first meeting | light makeup, natural makeup, nostalgic feel |
| Date makeup | Date, romantic outing | sweet makeup, warm pink tones, healthy glow |
| Formal makeup | Banquet, ceremony | refined makeup, defined eye makeup |
| Frail/sickly makeup | Injured, weak | pale complexion, faint lip color, light eye makeup |
| Retro makeup | Nostalgic scene, classic | retro makeup, 90s style |

### General Base Skin

| Item | Constraint | Prompt |
|---|---|---|
| Texture | Flat-shaded coloring, even tone | flat-shaded coloring, even skin tone |
| Whiteness | Warm off-white skin, soft not glaring | warm off-white skin, soft fairness |
| Inner glow | Retain a soft-light feel within the flat shading | translucent skin, soft sheen |
| Prohibited | Overly digital/oily shine/heavy makeup feel | — |

### Male Makeup

| Item | Constraint | Prompt |
|---|---|---|
| Base skin | Healthy skin tone, flat-shaded coloring | healthy skin tone, flat-shaded coloring |
| Principle | "Fake bare-faced" — looks like no makeup but skin looks great | fake bare-faced look, naturally great skin |
| Eyebrows | Naturally thick eyebrows, not drawn on | natural sword eyebrows, sharp eyebrow shape |
| Lip color | Natural healthy tone, slightly moist | natural lip color, healthy tone |

---

## 4. Hairstyle Constraints (L2)

### Female Style Types

| Style | Description | Applicable | Prompt |
|---|---|---|---|
| Twin tails | Ponytails on both sides, common in the 90s | Young girl, everyday | twin tails, 90s style |
| High ponytail | Ponytail on top of head, brisk | Athletic, action | high ponytail, brisk |
| Long flowing hair | Long hair fully loose, gentle | Gentle, everyday | long flowing hair, smooth |
| Side ponytail | Ponytail on one side, asymmetric | Playful, distinctive | side ponytail, playful |
| Braided hair | Braid style, refined | Formal, occasion | braided hair, refined hairstyle |
| Bun | Bun on top of head, cute | Cute, everyday | hair bun, cute |

### Female Hair Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Style | Common in the 90s, matched with clothing | 90s hair accessories, retro style |
| Material | Ribbon/beads and jade/metal | ribbon hair accessory, beaded jade hair accessory |
| Craftsmanship | Hand-drawn texture, consistent with the 90s | hand-drawn hair accessory, 90s style |

### Male Style Types

| Style | Applicable | Prompt |
|---|---|---|
| Short hair | Everyday, brisk | short hair, brisk |
| Medium-long hair | Everyday, refined | medium-long hair, refined |
| Long hair tied up | Formal, battle | long hair tied up, handsome |
| Loose hair over shoulders | Casual, gentle | loose hair over shoulders, gentle |

---

## 5. Clothing and Footwear Constraints (L3+L4+L5)

> **Note**: The styles below are style references, not rigid uniform templates. Priority should be given to freely combining based on character identity, age, occupation, personality, and occasion, as long as the overall look retains the 90s retro Japanese anime temperament.

### Female Clothing Matrix

| Style | Design | Applicable | Prompt |
|---|---|---|---|
| Everyday casual wear | T-shirt/jeans/dress | Daily life, campus | casual wear, comfortable |
| Kimono/Hanfu | Traditional clothing | Occasion, themed | kimono, hanfu |
| Sportswear | Athletic wear, hoodie | Sports, casual | sportswear, energetic |
| Formal dress | Evening gown, 90s style | Banquet, formal | formal dress, elegant |
| Uniform | School uniform, 90s uniform | Campus, workplace | uniform, neat |

### Female Clothing General Constraints

| Item | Constraint | Prompt |
|---|---|---|
| Primary color | May choose warm, neutral, or low-saturation cool tones per character setting, avoiding uniformity | nostalgic color palette, character-specific color palette |
| Material | Clear fabric texture; may choose cotton/knit/uniform wool/silk, etc. based on identity | clear fabric texture, flat-shaded coloring |
| Texture | Fluid lines, soft colors, retaining the 90s hand-drawn feel | fluid lines, soft colors |
| Layering | Clear layering, rich detail, but complexity should match the character's identity | clear layering, crisp detail |

### Male Clothing Matrix

| Style | Applicable | Prompt |
|---|---|---|
| Everyday casual wear | T-shirt/jeans | Daily life, casual | casual wear, everyday |
| Uniform | School uniform, 90s uniform | uniform, neat |
| Suit | Formal wear, formal occasions | suit, formal |
| Sportswear | Athletic wear, hoodie | sportswear, energetic |
| Kimono/Hanfu | Traditional, occasion | kimono, hanfu |

### Footwear Design Matrix (L5)

| Style | Common Female Shoe Type | Common Male Shoe Type | Prompt |
|---|---|---|---|
| Everyday campus | Loafers, Mary Janes, short socks with leather shoes | Loafers, sneakers | campus shoes, retro Japanese style, simple shoe shape |
| Everyday casual | Canvas shoes, low-top sneakers, ankle boots | Canvas shoes, casual shoes, low-top sneakers | casual shoes, comfortable, nostalgic color palette |
| Formal occasion | Low-heeled shoes, thin-strap leather shoes, ankle boots | Leather shoes, ankle boots | formal footwear, refined, clean lines |
| Traditional clothing | Wooden geta, embroidered slip-on shoes, cloth shoes | Wooden geta, cloth shoes, traditional ankle boots | traditional footwear, matched with clothing |
| Active/sports | Lightweight sneakers, lace-up ankle boots | Sneakers, functional ankle boots | lightweight footwear, easy to move in |

### Footwear General Constraints

| Item | Constraint | Prompt |
|---|---|---|
| Style consistency | Footwear must harmonize with the era feel of the main outfit, but the shoe type may vary freely by character identity | consistent with clothing, retro Japanese style |
| Clear structure | Shoe opening/heel/laces/sock layering clearly defined | clear shoe shape, defined structure |
| Color | May echo the primary/secondary clothing color or the character's personal signature color; not required to follow one fixed color logic | low-saturation color palette, nostalgic colors |
| Texture | Hand-drawn flat shading, fluid lines, avoiding exaggerated modern trendy shoe designs | hand-drawn footwear, flat-shaded coloring |
| Prohibited | No bare feet, no missing footwear design, no exaggerated modern tech-style sneakers | — |

---

## 6. Accessory Constraints (L6)

### Female Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Headwear | Headband/hairpin/bow | hair accessory, delicate |
| Earrings | Earrings/studs | earrings, small and delicate |
| Necklace | Necklace/pendant | necklace, delicate |
| Hand accessories | Bracelet/bangle | bracelet, slender |
| Bag accessories | Bag, shoulder bag | bag, stylish |

### Male Accessories

| Type | Constraint | Prompt |
|---|---|---|
| Glasses | Glasses/sunglasses | glasses, stylish |
| Watch | Watch | watch, refined |
| Ring | Ring | ring, minimalist |
| Scarf | Scarf | scarf, warm |

---

## 7. Costume Combination Quick Reference

| Scene | Makeup | Hairstyle | Clothing | Footwear | Accessories |
|---|---|---|---|---|---|
| Everyday campus | Everyday light makeup | Twin tails/long flowing hair | Uniform/everyday casual wear | Loafers/Mary Janes/sneakers | Minimal |
| First encounter | Everyday light makeup | Long flowing hair/side ponytail | Everyday casual wear | Canvas shoes/low-heeled shoes | Moderate |
| Sweet date | Date makeup | Side ponytail/bun | Casual/kimono | Low-heeled shoes/wooden geta | Moderate-to-more |
| Formal occasion | Formal makeup | Braided hair/high ponytail | Formal dress/formal wear | Low-heeled leather shoes/ankle boots | More elaborate |
| Gentle intimacy | Everyday light makeup | Long flowing hair | Everyday casual wear | Soft-soled shoes/canvas shoes | Minimal |
| Intense action | Everyday light makeup (very light) | High ponytail | Sportswear | Sneakers/functional ankle boots | Minimal |
| Retro scene | Retro makeup | Braided hair/twin tails | Kimono/retro outfit | Wooden geta/cloth shoes | Moderate |

> **Inference Rules for Uncovered Scenes**
>
> When the scene/situation described by the user is not in the table above, infer based on the core genes of this style:
>
> | Inference Dimension | 90s Retro Japanese Anime Genes |
> |---|---|
> | Makeup intensity | Default everyday light makeup (flat-shaded coloring, nostalgic feel); formal/ceremony → formal makeup; date/heartbeat → date makeup; retro theme → retro makeup |
> | Hairstyle | Everyday/young girl → twin tails or long flowing hair; sports/action → high ponytail; formal → braided hair; playful/distinctive → side ponytail; cute → bun |
> | Clothing | Freely varied anchored to the 90s style: choose from school uniforms, uniforms, casual wear, kimono, knitwear, jackets, dresses, etc. based on character setting, avoiding high homogeneity between characters |
> | Footwear | Pair loafers, canvas shoes, leather shoes, ankle boots, wooden geta, etc. based on clothing and identity; not a fixed single answer |
> | Accessory complexity | Everyday → minimal (90s-style hair accessories + basic accessories); formal → moderate-to-elaborate; action/sports → minimal or none |
> | Texture baseline | Hand-drawn flat-shaded coloring always locked; fluid lines, soft warm colors; digital feel/3D rendering/modern CG texture prohibited |

---

## 8. Four-View Reference Sheet Specification

### View Definitions

| Position | View | Angle | Shot Type | Requirement | Prompt |
|---|---|---|---|---|---|
| Far left | Portrait close-up | Front, eye-level | Face to collarbone | Face occupies 60%+, facial features/makeup clear | portrait closeup, face detail |
| Second left | Front view | Front 0° | Full body standing | Facing camera, full frontal view of clothing | front view, full body |
| Second right | Side view | Right 90° | Full body standing | Pure profile silhouette, side layering of clothing | side view, profile |
| Far right | Back view | Rear 180° | Full body standing | Back-of-head hair accessories/back clothing clearly shown | back view, rear view |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side by side left to right in the same frame |
| Background | Warm off-white #F8F4E8 |
| Stance | Natural standing, feet parallel with slight gap (**no pose changes of any kind allowed**) |
| Expression | Micro-expression matching the makeup style (e.g., light makeup → natural, formal makeup → smiling) |
| Lighting | Soft cinematic lighting, evenly soft, no harsh shadows |
| Consistency | Face/makeup/hairstyle/hair accessories/clothing/footwear/accessories fully consistent across all four views |
| Aspect ratio | Recommended 4:1 or 3:1 |

---

## 8. Prompt Template

```
Using the character's base model image as the base, apply costume/makeup layering via img2img,
90s anime style, retro Japanese anime style, {gender} character four-view reference sheet, hand-drawn flat-shaded coloring, soft warm tones, cinematic lighting,
character design sheet, character turnaround,
keep the base model's face unchanged, {overall temperament},
[L1 · Makeup] {basic makeup/light makeup/formal makeup}; using {makeup style}, even skin tone, {eyebrow makeup}, {eye makeup}, {lip makeup},
[L2 · Hairstyle] {style type}, flowing hair strands, {hair accessory description},
[L3+L4 · Clothing] {primary color}{design}, {material}, {decorative craftsmanship}, fluid clothing lines, clear texture,
[L5 · Footwear] {shoe style}, {shoe surface material}, {sock/shoe-opening design}, matched with clothing,
[L6 · Accessories] {headwear}, {earrings}, {necklace}, {waist accessory},
same frame arranged left to right: portrait closeup + front view + side view + back view,
standing naturally, clean neutral gray background, soft cinematic lighting, no harsh shadows,
four-view consistency, delicately rendered face, delicately rendered hair strands, clear texture detail
no text of any kind should appear in the image
```

---

## 9. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | After layering, the face must remain consistent with the base model |
| R2 | Clothing must have the 90s hand-drawn quality of "fluid lines + clear structure," but the design should be allowed to vary by character |
| R3 | Female accessories must maintain a 90s style and be matched with the clothing, without being forced into one fixed combination |
| R4 | Makeup/hairstyle/clothing/footwear/accessories must be stylistically unified, but must not be templated to the point of losing character differentiation |
| R5 | Must output a four-view reference sheet (portrait closeup + front view + side view + back view) |
| R6 | Must specify "warm off-white background #F8F4E8" |
| R7 | Must specify "four-view consistency" |
| R8 | **Output the prompt only** — outputting tables/plans/explanations/variants, etc. is prohibited |
| R9 | **Scene descriptions are prohibited** — no scene/environment/weather description included |
| R10 | **Prop interaction is prohibited** — no hand-held items/interactive items included |
| R11 | **Pose must remain unchanged** — must maintain the base model's natural standing pose |
| R12 | **L1 must analyze before deciding** — first parse the user's facial cues, then determine the makeup intensity |
| R13 | **All derivative assets require makeup/styling** — at least basic makeup must be used |
| R14 | **Makeup intensity is controlled** — overly exaggerated makeup must not appear |
| R15 | **Props/scenes/actions are not grounds for escalating intensity** — basic makeup must not be elevated based solely on this information |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Face drift after layering |
| X2 | Accessories that are too simple/modernized (female) |
| X3 | Makeup/clothing/footwear styles conflicting with each other |
| X4 | Complex scene backgrounds (background must be warm-toned) |
| X5 | Inconsistent costume/makeup/styling between the four views |
| X6 | Outputting anything other than the prompt |
| X7 | Including scene descriptions in character derivative assets |
| X8 | Outputting sections such as "quick reference," "plan," "suggestion," etc. |
| X9 | Including any prop interaction |
| X10 | Changing the base model's pose |
| X11 | Including expression-and-pose linkage descriptions |
| X12 | Directly applying a fixed makeup style without analyzing user cues |
| X13 | Incorrectly keeping a bare face, resulting in missing required makeup/styling |
| X14 | Mistakenly escalating makeup intensity based solely on prop/scene/action words |