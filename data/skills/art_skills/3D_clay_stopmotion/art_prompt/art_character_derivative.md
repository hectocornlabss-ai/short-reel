# Claymation Stop-Motion Character Derivative Asset Generation · Constraint Handbook

---

## 1. Overlay Principles

1. **Face unchanged** — After overlay, facial features must exactly match the base model
2. **Pose unchanged** — Maintain the base model's natural standing pose
3. **Layer-by-layer control** — Each layer is described independently, for easy layer-by-layer replacement
4. **Unified style** — All costume/makeup elements follow the same claymation aesthetic system
5. **No texture degradation** — The clay texture standard after overlay must not be lower than the base model
6. **Pure costume/makeup scope** — Only makeup/hairstyle/clothing/accessories may be overlaid; introducing props, scenery, or environment is prohibited

---

## 2. Overlay Layers

| Layer | Content | Description |
|---|---|---|
| L0 | Base model | Base character model, not modified |
| L1 | Makeup | Basic decorative color accents |
| L2 | Hairstyle | Hair bun/tied hair + simple hair accessories |
| L3 | Underlayer/inner garment | Replaces the white base underlayer |
| L4 | Outer garment/main outfit | Coat/robe/outer garment |
| L5 | Accessories | Headwear/earrings/necklace/waist accessories |

> **Scope boundary**: Character derivative assets include only layers L0–L5 (costume, makeup, and styling) — props, scene environment, and pose/action are not included.

---

## 3. Makeup Constraints (L1)

### L1 Decision Principles

| Cue Type | Typical Cue | L1 Decision |
|---|---|---|
| No clear facial emphasis | Only clothing/hairstyle changes | Basic decorative makeup |
| Slight facial cue | Soft, smiling, brightened complexion | Light decorative makeup |
| Clear scene cue | Wedding, celebration, formal occasion | Formal decorative makeup |

### Female Makeup Style Matrix

| Style | Applicable Scene | Core Prompt Fragment |
|---|---|---|
| Fresh bare-faced look | Everyday, first meeting | natural makeup, clear and understated |
| Sweet warm peach makeup | Sweet romance, dating | pink blush, warm-toned lip color |
| Festival full makeup | Celebration, wedding | bold, gorgeous makeup, rich colors |
| Evening banquet makeup | Night, gathering | warm-toned eyeshadow, shimmering lip color |

### General Base Skin (Shared Across All Makeup Styles)

| Item | Constraint | Prompt Fragment |
|---|---|---|
| Texture | Matte clay texture | matte clay, matte clay |
| Tone | Warm cream tone | warm cream skin, cream warm tone |
| Prohibited | Highlights/oily sheen/mirror-like effect | — |

### By Feature (Using Sweet Warm Peach Makeup as an Example)

| Feature | Constraint | Prompt Fragment |
|---|---|---|
| Blush | Warm pink, light sweep on the cheeks | warm pink blush, soft cheek color |
| Eyeshadow | Warm brown/orange tones, very subtle | warm brown eyeshadow, very subtle eye makeup |
| Lip makeup | Warm pink/coral, matte | warm pink lip color, matte lip makeup |
| Eyebrows | Naturally arched, color matching hair color | natural arched brows, soft brow shape |

### Male Makeup

| Item | Constraint | Prompt Fragment |
|---|---|---|
| Base skin | Matte clay texture, warm beige tone | matte clay, warm beige tone |
| Principle | "No-makeup makeup" — looks natural but with even skin tone | natural skin tone, no-makeup makeup |
| Blush | Very subtle color, must not be visibly built up | very subtle color, natural complexion |
| Lip color | Natural blood color, matte | natural lip color, matte lips |

---

## 4. Hairstyle Constraints (L2)

### Female Styling Types

| Style | Description | Applicable | Prompt Fragment |
|---|---|---|---|
| Half-up bun | Bun at the crown + hair hanging behind | Everyday, travel | half-up bun, hair half gathered |
| High bun | High bun, elegant | Formal, celebration | high bun, elegant bun |
| Low loose bun | Low side bun, languid | Private, casual | low loose bun, languid hairstyle |
| Twin buns | Symmetrical twin buns, youthful | Young characters | twin buns, youthful hairstyle |
| Fully loose hair | Long hair fully let down | Injured, dejected | loose flowing hair, smooth hair |

### Female Hair Accessories

| Item | Constraint | Prompt Fragment |
|---|---|---|
| Style | Retro and warm, not overly complex | retro hair accessory, warm decoration |
| Material | Clay material, simple metal | clay hair accessory, simple metal |
| Decoration | Flowers/beaded strings/ribbons | floral hair accessory, beaded string accent |

### Male Styling Types

| Style | Applicable | Prompt Fragment |
|---|---|---|
| Half-tied with headpiece | Everyday, simple | half-tied hair with headpiece, natural tied hair |
| Full crown high tie | Formal, ceremony | high tied hair with crown, formal hairstyle |
| Loose hair over shoulders | Private, casual | loose hair over shoulders, natural long hair |
| Tied ponytail | Action, activity | tied ponytail, sharp hairstyle |

---

## 5. Clothing Constraints (L3+L4)

### Female Clothing Matrix

| Style | Design | Applicable | Prompt Fragment |
|---|---|---|---|
| Everyday long dress | Simple long dress | Everyday, casual | simple long dress, everyday outfit |
| Formal gown | Layered long dress | Formal, celebration | layered long dress, gorgeous gown |
| Light casual wear | Short top + skirt | Action, activity | light casual wear, short top and skirt |
| Sleepwear | Loose long dress | Indoor, night | loose sleepwear, comfortable long dress |
| Wedding attire | Red layered long dress | Wedding | red wedding attire, layered red garment |

### Female Clothing General Constraints

| Item | Constraint | Prompt Fragment |
|---|---|---|
| Primary color | Predominantly warm tones, low saturation | warm-toned clothing, soft colors |
| Material | Clay-sculpted, simple texture | clay material, simple texture |
| Texture | Clearly visible texture | clearly textured clothing |
| Layering | Simple layering, distinct layers | simple layering, distinct layers |

### Male Clothing Matrix

| Style | Applicable | Prompt Fragment |
|---|---|---|
| Retro everyday wear | Everyday, at home | retro long robe, everyday wear |
| Combat attire | Adventure, action | combat attire, adventure outfit |
| Outer robe/cloak | Entrance, night travel | outer robe, dark cloak |
| Casual wear | Casual, private | casual wear, plain clothes |
| Formal wear | Celebration, ceremony | formal wear, formal attire |

---

## 6. Accessory Constraints (L5)

### Female Accessories

| Type | Constraint | Prompt Fragment |
|---|---|---|
| Headwear | Not overly complex, warm style | simple headwear, warm decoration |
| Earrings | Small drop earrings/studs | small drop earrings, delicate earrings |
| Necklace | Simple necklace/choker | simple necklace, delicate choker |
| Waist accessory | Simple belt/jade pendant | simple belt, small jade pendant |
| Hand accessory | Simple bracelet | simple bracelet, small bracelet |

### Male Accessories

| Type | Constraint | Prompt Fragment |
|---|---|---|
| Hair crown | Simple crown/jade hairpin | simple crown, jade hairpin securing hair |
| Waist sash | Simple waist sash/leather belt | simple waist sash, distinct texture |
| Jade pendant | Translucent and smooth | waist jade pendant, smooth jade pendant |
| Ornament | Simple hanging ornament/sword (optional) | simple hanging ornament, small sword |

---

## 7. Costume/Makeup Combination Quick Reference

| Scene | Makeup | Hairstyle | Clothing | Accessories |
|---|---|---|---|---|
| Everyday at home | Fresh bare-faced look | Half-up bun | Everyday long dress | Simple |
| First meeting | Fresh bare-faced look | Half-up/high bun | Everyday long dress | Moderate |
| Sweet romantic interaction | Sweet warm peach makeup | Half-up/low loose | Everyday long dress | Moderate |
| Formal appearance | Festival full makeup | High bun | Formal gown | Elaborate |
| Nighttime private conversation | Fresh/peach makeup | Fully loose/low loose | Sleepwear | Minimal |
| Wedding ceremony | Festival full makeup | High bun | Wedding attire | Elaborate |

---

> **🔍 Rule for Inferring Uncovered Scenarios**
>
> When a scene/situation described by the user is not in the table above, infer it based on this style's core genes:
>
> | Inference Dimension | Claymation Stop-Motion Genes |
> |---|---|
> | Makeup intensity | Default fresh bare-faced look (matte clay texture); sweet romance/everyday → sweet warm peach makeup; celebration/wedding → festival full makeup; night/indoor → evening banquet makeup |
> | Hairstyle | Everyday → half-up bun; formal/celebration → high bun; private/casual → low loose bun or fully loose hair; all hairstyles retain a clay-sculpted feel |
> | Clothing | Retro fantasy tone; everyday → simple long dress; formal → layered formal gown; action → light casual wear; material always uses clay-sculpting + simple texture |
> | Accessory elaborateness | Keep it warm and not overly elaborate; celebration → elaborate (flowers + beaded strings); everyday → simple; action → minimal |
> | Texture baseline | Matte clay texture always locked; highlights/metallic reflections prohibited; warm cream-toned skin feel preferred |

## 8. Four-View Reference Sheet Specification

### View Definitions

| Position | View | Angle | Framing | Requirement | Prompt Fragment |
|---|---|---|---|---|---|
| Far left | Portrait closeup | Front-facing, eye level | Face to collarbone | Face occupies 60%+, features/makeup clear | portrait closeup, face detail |
| Second from left | Front view | Front 0° | Full-body standing | Facing camera, full frontal view of clothing | front view, full body |
| Second from right | Side view | Right side 90° | Full-body standing | Pure side profile, side layering of clothing | side view, profile, full body |
| Far right | Back view | Rear 180° | Full-body standing | Back-of-head hair accessories/back clothing/hair ends all clear | back view, rear view, full body |

### Composition Specification

| Item | Constraint |
|---|---|
| Layout | Four views arranged side by side left to right in the same image |
| Background | Clean neutral gray #E8E8E8 |
| Pose | Standing naturally, feet parallel and slightly apart, arms hanging naturally |
| Expression | Micro-expression matching the makeup style, facial micro-expression only |
| Lighting | Warm soft light, front key light + dual side fill, no hard shadows |
| Consistency | Face/makeup/hairstyle/hair accessories/clothing/accessories fully consistent across the four views |
| Aspect ratio | Recommended 4:1 or 3:1 |

---

## 9. Prompt Template

```
Using the character base model image as the base, claymation stop-motion {gender} character four-view reference sheet, stop-motion animation style, 3D cartoon rendering, warm-toned lighting,
character design sheet, character turnaround,
keep the base model's face unchanged, {overall temperament},
[L1 · Makeup] decided based on user cues: {basic decorative makeup / light decorative makeup / formal decorative makeup}; use {makeup style}, matte clay texture, {eyebrow makeup}, {eye makeup}, {lip makeup},
[L2 · Hairstyle] {styling type}, clay hairstyle, {hair accessory description},
[L3+L4 · Clothing] {primary color}{design}, {material}, {decoration/craftsmanship}, clearly textured clothing,
[L5 · Accessories] {headwear}, {earrings}, {necklace}, {waist accessory},
same image arranged left to right: portrait closeup + front view + side view + back view,
standing naturally, clean neutral gray background, warm soft light, no hard shadows,
four-view consistency, finely rendered clay grain, soft healing expression
no text of any kind should appear in the image
```

---

## 10. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Face after overlay must match the base model |
| R2 | Clothing must use "clearly textured clothing" |
| R3 | Female accessories must be "not overly complex, warm style" |
| R4 | Makeup/hairstyle/clothing/accessories must share a unified style |
| R5 | Must output a four-view reference sheet |
| R6 | Must specify a "clean neutral gray background" |
| R7 | Must specify "four-view consistency" |
| R8 | **Output only the prompt** — outputting non-prompt content is prohibited |
| R9 | **Scene descriptions are prohibited** |
| R10 | **Prop interaction is prohibited** |
| R11 | **Pose must remain unchanged** |
| R12 | **L1 must be analyzed before deciding** |
| R13 | **All derivative assets require costume/makeup styling** |
| R14 | **Makeup intensity must be restrained** |
| R15 | **Props/scene/action must not be used as grounds for escalating intensity** |

### Prohibited

| No. | Prohibited |
|---|---|
| X1 | Face shifting after overlay |
| X2 | Accessories too simple/modernized |
| X3 | Makeup/clothing styles conflicting with each other |
| X4 | Complex scene backgrounds (must be pure gray base) |
| X5 | Inconsistent costume/makeup/styling between the four views |
| X6 | Outputting anything other than the prompt |
| X7 | Adding any prop interaction |
| X8 | Changing the base model's pose |
| X9 | Adding descriptions linking expression to pose |
| X10 | Directly applying a fixed makeup style without analyzing user cues |
| X11 | Incorrectly keeping the face bare |
| X12 | Mistakenly escalating makeup solely due to prop/scene/action words |
