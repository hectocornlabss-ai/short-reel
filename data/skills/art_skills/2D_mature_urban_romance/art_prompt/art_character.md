# Anime Character Base Model Generation · Constraint Manual

---

## 1. Base Model Principles

1. **The face is the soul** — facial features are the character's only anchor point, with detail level matched to the anime style
2. **Character-driven** — the base outfit is determined by the character description (identity/occupation/gender/scene) to reflect their everyday wear; specific costume/styling variations are added as overlay layers afterward
3. **Four-view consistency** — face/body type/hairstyle/base clothing must be highly consistent across all views
4. **Emotional conveyance** — even in a bare-faced state, the character's temperament (cool / gentle / alluring / stern) must still come through

---

## 2. Facial Constraints

> Facial feature parameters are no longer fixed; the AI freely generates facial features driven by the character description (gender/age/personality/temperament), ensuring visual differentiation between characters.

### General Requirements

| Item | Constraint |
|---|---|
| Facial features | Naturally derived from the character description; no preset face shape/eye shape/eyebrow shape/nose shape/lip shape |
| Style baseline | Anime style, cel shading, low-saturation cool tones, cinematic composition |
| Temperament | Must extract an overall temperament keyword from the character description (e.g. cool / gentle / alluring) and include it in the prompt |
| Expression | Neutral, subtle expression consistent with the character's temperament |

---

## 3. Skin Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Skin tone | Cool white skin, uniform overall, translucently pale | cool white skin, fair complexion |
| Sheen | Soft luminous look, neither matte nor oily | soft-glow skin, delicate skin |
| Texture | Fine and smooth, cel-shaded texture | fine skin texture, skin texture |
| Exposed skin | Face/neck/collarbone/hands | graceful shoulder-neck line, fair skin |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Skin tone | Fair and radiant, with a healthy look, uniform overall | fair complexion, healthy skin tone |
| Sheen | Fresh luminous look, natural sheen | fresh-looking skin, radiant skin |
| Texture | Clean and crisp, cel-shaded sheen | fine skin texture, cool crisp face |

---

## 4. Body Type Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 160-170cm, reflected in full-body proportions via head-to-body ratio | `{height}cm tall`, `{height description, e.g.: tall slender woman}` |
| Head-to-body ratio | 6.5 to 7.5 heads tall; ratio = height ÷ head length, strictly constrains overall body proportions | `6.5-7.5 heads tall proportion`, slender figure |
| Shoulders/neck | Slender shoulder line, clearly visible collarbone | slender shoulder line, clear collarbone |
| Hands | Slender and fair, well-defined knuckles, five normal fingers | delicate slender hands, well-defined knuckles |
| Posture | Modern urban woman, natural posture | natural posture, graceful bearing |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 175-185cm, reflected in full-body proportions via head-to-body ratio | `{height}cm tall`, `{height description, e.g.: tall imposing man}` |
| Head-to-body ratio | 7 to 8 heads tall; ratio = height ÷ head length, strictly constrains overall body proportions | `7-8 heads tall proportion`, tall build |
| Shoulders/neck | Broad shoulders, strong neck | broad shoulders, narrow waist |
| Hands | Well-defined knuckles, broad palms, five normal fingers | well-defined knuckles |
| Posture | Modern urban man, natural posture | upright bearing, composed posture |

### Height-to-Head-Ratio Conversion Reference

| Height (cm) | Head-to-body ratio | Head length (cm) | Applicable description |
|---|---|---|---|
| 155-160 | 6.5-7.0 | ~22cm | Petite and dainty |
| 160-165 | 7.0-7.5 | ~22cm | Slim and slender |
| 165-170 | 7.0-7.5 | ~22cm | Tall and elegant (female default) |
| 170-175 | 7.5-8.0 | ~22cm | Slender and upright |
| 175-180 | 7.5-8.0 | ~22cm | Tall and handsome (male default) |
| 180-185 | 8.0 | ~22.5cm | Statuesque and upright |
| 185-190 | 8.0-8.5 | ~22cm | Tall and imposing |

---

## 5. Base Hairstyle Constraints

> Only natural loose hair / simple tied hair is defined here; hair accessories are layered on during the costume/styling derivative stage.

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Hair color | Pure black, dark blue, or dark brown; no highlights allowed | black long hair, dark long hair |
| Hair length | Shoulder-length, waist-length, or longer | shoulder-length hair, waist-length hair |
| Hair quality | Clearly layered, clean lines | clearly layered hair strands, finely rendered hair strands |
| Style | Natural loose hair, center/side part, no hair accessories | naturally flowing long hair, smooth long hair |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Hair color | Pure black or dark brown | black hair, dark short/medium hair |
| Hair length | Short to medium-length | short hair, medium-length hair |
| Hair quality | Clearly layered, clean texture | clearly layered hair strands, finely rendered hair strands |
| Style | Natural loose hair or simple side part, no headpiece | naturally tousled hair, side-part hairstyle |

---

## 6. Base Clothing Constraints

> Base clothing is determined by the character description (identity/occupation/gender/scene) as the most natural everyday wear, serving as the character's "default daily state"; formal attire/special variations are layered on during the costume/styling derivative stage. **Underwear-only base layers are forbidden.**

### Outfit Selection Principles

| Character identity | Default outfit direction |
|---|---|
| Student | Modern school uniform / campus wear |
| Office worker | Professional smart-casual (shirt + pants/skirt, light blazer) |
| At home/casual | Urban casual wear (hoodie/T-shirt + jeans/dress) |
| Fashion/dating | Urban trendy outfit |
| Special occupation | Corresponding uniform (doctor/police officer/teacher, etc.) |
| Character description unclear | Urban everyday wear, low-saturation cool tones |

### Outfit Consistency Rules

- Clothing style must align with the modern urban anime aesthetic (cel shading, low-saturation cool tones)
- Colors should be low-saturation, with no complex patterns/decorations, to make later overlays easier
- Clothing style must be exactly consistent across all four views
- Base clothing is the "default daily state"; the focus remains on the face and posture
- Underwear/exposure/sexualized base layers are strictly forbidden

---

## 7. Four-View Turnaround Sheet Specification

### View Definitions

| Position | View | Angle | Framing | Requirement | Prompt |
|---|---|---|---|---|---|
| Far left | Portrait close-up | Front, eye level | Top of head to collarbone | Fully shown from top of head to collarbone, no cropping, face occupies 60%+, features clear | `portrait closeup`, `face detail`, `head to collarbone complete`, `no crop` |
| Second from left | Front view | Front 0° | Full-body standing | Facing the camera, arms natural, fully shown from top of head to soles of feet | `front view`, `full body head to toe`, `height mark` |
| Second from right | Side view | Right side 90° | Full-body standing | Clear pure-profile silhouette, fully shown from top of head to soles of feet | `side view`, `profile`, `full body head to toe`, `height mark` |
| Far right | Back view | Rear 180° | Full-body standing | Back of head/back/hair ends/feet clearly shown, fully shown from top of head to soles of feet | `back view`, `rear view`, `full body head to toe`, `height mark` |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views placed side by side, left to right, in one frame |
| Background | Pure neutral gray `#E8E8E8` |
| Pose | Standing naturally, feet parallel and slightly apart, arms hanging naturally or slightly extended |
| Full-body display | Full-body standing views must be fully shown from top of head to soles of feet; cropping the head or feet is strictly forbidden |
| Close-up display | Portrait close-up must be fully shown from top of head to collarbone; cropping the top of the head is strictly forbidden, and hair, forehead, and chin must all be complete |
| Expression | Neutral, subtle expression consistent with the character's temperament |
| Lighting | Even soft light, frontal key light + fill light on both sides, no hard shadows |
| Consistency | Skin tone/body type/hairstyle/face/base clothing must be exactly consistent across the four views |
| Aspect ratio | 4:1 or 3:1 recommended |

---

## 8. Prompt Template

{gender} character four-view turnaround sheet, anime style, cel shading, modern urban style, strong contrast, extreme detail,
character design sheet, character turnaround,
{facial features derived naturally from the character description}, {overall temperament}, bare-faced with no makeup,
{skin tone}, soft-glow skin, delicate skin texture, cel-shaded texture,
{height description, e.g.: 170cm tall}, {head-to-body ratio, e.g.: 7 heads tall proportion}, {body description}, {posture description},
{hair color}{hair length}, clearly layered hair strands, {basic style}, no hair accessories,
{everyday outfit matching the character's identity, e.g.: modern school uniform / professional smart-casual / urban casual wear}, low-saturation cool tones, no complex patterns,
side by side in one frame, left to right: portrait close-up + front view + side view + back view,
portrait close-up fully shown from top of head to collarbone, no cropping of the top of the head, head to collarbone complete,
full-body standing views fully shown from top of head to soles of feet, full body head to toe, no cropping of the head or feet,
standing naturally, pure neutral gray background, even soft light, no hard shadows,
four-view consistency, delicately rendered face, finely rendered hair strands
no text anywhere in the image

---

## 9. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Must be in a "bare-faced, no makeup" state |
| R2 | Must declare a suitable everyday outfit as the base clothing according to the character description (e.g. student → school uniform, office worker → professional smart-casual, at home → urban casual wear); underwear-only base layers are forbidden |
| R3 | Must declare "no hair accessories, no jewelry" |
| R4 | Must specify a "pure neutral gray background" |
| R5 | Must specify "four-view consistency" |
| R6 | Full-body standing views must be fully shown from top of head to soles of feet; cropping is strictly forbidden |
| R7 | Must declare the character's height and constrain full-body proportions via the head-to-body ratio conversion (female default 160-170cm/6.5-7.5 heads, male default 175-185cm/7-8 heads) |
| R8 | Portrait close-up must be fully shown from top of head to collarbone; cropping the top of the head is strictly forbidden |

### Strictly Prohibited

| No. | Prohibited |
|---|---|
| X1 | Underwear/exposure/sexualized base layers; clothing clearly inconsistent with the character description; overly complex patterns/decorations that would interfere with later costume overlays |
| X2 | Direct hard top light / direct bottom light / colored light |
| X3 | Over-whitened skin with no natural color / grayish skin tone |
| X4 | Complex scene backgrounds (must be pure gray) |
| X5 | Exaggerated expressions/dynamic poses |
| X6 | Full-body standing views cropping the top of the head or soles of feet; must be fully shown from head to toe |
| X7 | Portrait close-up cropping the top of the head; must be fully shown from top of head to collarbone |
| X8 | Ignoring the height and head-to-body ratio constraints; height must be explicitly declared and reflected in full-body proportions via the head-to-body ratio conversion |