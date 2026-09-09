# Character Base Model Generation · Urban Realistic Constraint Manual

---

## 1. Base Model Principles

1. **Face is the soul** — The facial features are the character's only anchor point, rendered with pore-level detail
2. **Character-driven** — The base outfit is determined by the character description (identity/occupation/gender/scene) as their regular clothing; specific costume/makeup details are layered on afterward
3. **Four-view consistency** — Face/body type/hairstyle/base clothing must be highly consistent across all views
4. **Natural realism** — The no-makeup state must still convey the character's temperament (capable/gentle/detached/approachable)
5. **Live-action photography** — Anchored in real photography, preserving authentic skin texture (pores/minor blemishes)

---

## 2. Facial Constraints

> Facial feature parameters are not fixed; instead, the character description (gender/age/personality/temperament) drives the AI to freely generate facial features, ensuring visual differentiation between characters.

### General Requirements

| Item | Constraint |
|---|---|
| Facial features | Naturally derived from the character description; face shape/eye shape/eyebrow shape/nose shape/lip shape are not preset |
| Style base | Live-action realistic photography, pore-level fine rendering, realistic material texture, natural lighting |
| Temperament | Overall temperament keywords (e.g., capable/gentle/detached/approachable) must be extracted from the character description and written into the prompt |
| Expression | Neutral micro-expression matching the character's temperament |

---

## 3. Skin Texture Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Skin tone | Natural skin tone, even overall, can lean fair/olive | natural skin tone, even skin tone |
| Sheen | Natural sheen, neither matte nor oily | natural skin, healthy glow |
| Texture | Fine and delicate, retains subtle pore texture, may have minor blemishes | delicate skin, faintly visible pores |
| Exposed skin | Face/neck/collarbone/hands/part of the arms | natural shoulder-neck lines, healthy skin |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Skin tone | Natural skin tone, can lean wheat-toned, even overall | natural skin tone, healthy skin tone |
| Sheen | Natural sheen, fresh feel | natural skin, fresh texture |
| Texture | Clean and neat, visible pores, may have minor blemishes | realistic skin texture, clear pores |

---

## 4. Body Type Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 155-175cm | {height}cm tall |
| Head-to-body ratio | 7 to 8 heads tall, strictly constrain overall body proportions | 7-8 heads tall proportion |
| Shoulders/neck | Natural shoulder-neck line, collarbone visible | natural shoulder-neck line |
| Hands | Natural hand shape, normal knuckles, neat nails | natural hands, slender fingers |
| Posture | Naturally standing, relaxed posture | natural posture, relaxed bearing |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 170-185cm | {height}cm tall |
| Head-to-body ratio | 7.5 to 8.5 heads tall, strictly constrain overall body proportions | 7.5-8.5 heads tall proportion |
| Shoulders/neck | Natural shoulders, strong neck | natural shoulders, shoulder-neck lines |
| Hands | Natural hand shape, moderate palm size, normal knuckles | natural hands, slender fingers |
| Posture | Naturally standing, upright posture | upright bearing, natural posture |

---

## 5. Base Hairstyle Constraints

> Only natural loose hair/simple tied hair is defined here; hair accessories are layered on in the costume derivative stage.

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Hair color | Natural hair color (black/dark brown), no bleaching/dyeing | natural hair color, dark brown |
| Hair length | Shoulder-length/waist-length or longer, per character setting | natural long hair, shoulder-length hair |
| Hair texture | Clearly defined strands, realistic texture | strand-by-strand defined hair |
| Style | Natural loose hair, simple ponytail/half-up, no accessories | natural hairstyle, no hair accessories |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Hair color | Natural hair color (black/dark brown), no bleaching | natural hair color, black/dark brown |
| Hair length | Short hair/medium-long hair, per character setting | short hair, shoulder-length medium hair |
| Hair texture | Clearly defined strands, realistic texture | strand-by-strand defined hair |
| Style | Natural loose hair/simple tied hair, no accessories | natural hairstyle, no hair accessories |

---

## 6. Base Clothing Constraints

> The base outfit is determined by the character description (identity/occupation/gender/scene) as the most natural regular clothing, serving as the character's "everyday default state"; formal wear/special derivative outfits are layered on during the costume derivative stage. **Underwear-only base is prohibited.**

### Clothing Selection Principles

| Character Identity | Default Clothing Direction |
|---|---|
| Student | Modern school uniform / academy wear |
| Office worker | Professional casual wear (shirt + pants/skirt, suit) |
| Home/casual | Urban casual wear (hoodie/T-shirt + jeans/dress) |
| Fashion/date | Urban fashionable attire |
| Special occupation | Corresponding identity clothing (doctor/police officer/teacher, etc.) |
| Unspecified character description | Urban everyday wear, low-saturation neutral tones |

### Clothing Consistency Rules

- Clothing style must align with the urban realistic photography aesthetic (natural tones, realistic materials)
- Colors are low-saturation neutral tones, with no complex patterns/decorations, to make later layering easier
- Clothing style must be completely consistent across all four views
- Base clothing is the "everyday default state"; the focus remains on the face and posture
- Underwear/exposure/sexualized base clothing is strictly prohibited

---

## 7. Four-View Reference Sheet Specification

### View Definitions

| Position | View | Angle | Shot Type | Requirement | Prompt |
|---|---|---|---|---|---|
| Far left | Portrait close-up | Front, eye-level | Top of head to collarbone | Fully shown from top of head to collarbone, face occupies 60%+, facial features clear | portrait closeup, face detail, head to collarbone complete |
| Second left | Front view | Front 0° | Full body standing | Facing camera, arms natural, fully shown head to toe | front view, full body head to toe |
| Second right | Side view | Right 90° | Full body standing | Pure profile silhouette clear, fully shown head to toe | side view, profile, full body head to toe |
| Far right | Back view | Rear 180° | Full body standing | Back of head/back/hair ends/feet clearly shown, fully shown head to toe | back view, rear view, full body head to toe |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side by side left to right in the same frame |
| Background | Clean neutral gray #E8E8E8 |
| Stance | Natural standing, feet parallel with slight gap, arms hanging naturally |
| Full body display | Full-body standing figure must be fully shown from head to toe, cropping is strictly prohibited |
| Close-up display | Portrait close-up must be fully shown from top of head to collarbone, cropping the top of the head is strictly prohibited |
| Expression | Neutral micro-expression matching the character's temperament |
| Lighting | Even soft light, front key light + dual side fill lights, no hard shadows |
| Consistency | Skin tone/body type/hairstyle/face/base clothing fully consistent across all four views |
| Aspect ratio | Recommended 4:1 or 3:1 |

---

## 8. Prompt Template

```
{gender} character four-view reference sheet, live-action realistic photography, urban realistic documentary style, high contrast, extreme detail,
character design sheet, character turnaround,
{facial features corresponding to character description - naturally derived from character description}, {overall temperament}, natural state,
{skin tone}, natural skin, healthy skin, delicate skin, faintly visible pores,
{height description, e.g.: 170cm tall, tall slender woman}, {head-to-body ratio, e.g.: 7.5 heads tall proportion}, {body description}, {posture description},
{hair color}{hair length}, strand-by-strand defined hair, {base style}, no hair accessories,
{regular clothing corresponding to character identity, e.g.: modern school uniform/professional casual wear/urban casual wear}, low-saturation neutral tones, no complex patterns,
same frame arranged left to right: portrait closeup + front view + side view + back view,
portrait closeup fully shown from top of head to collarbone, not cropping the top of the head,
full body standing figure fully shown from top of head to soles of feet, not cropping the top of the head or feet,
standing naturally, clean neutral gray background, even soft light, no harsh shadows,
four-view consistency, delicately rendered face, delicately rendered hair strands, realistic skin texture
no text of any kind should appear in the image
```


---

## 9. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Must be in a "natural state" |
| R2 | Must declare appropriate regular clothing as the base outfit according to the character description (e.g., student → school uniform, office worker → professional casual wear, home → urban casual wear); underwear-only base is prohibited |
| R3 | Must declare "no hair accessories, no accessories" |
| R4 | Must specify "clean neutral gray background" |
| R5 | Must specify "four-view consistency" |
| R6 | The full-body standing figure must be fully shown from head to toe, cropping is strictly prohibited |
| R7 | Must declare the character's height and constrain full-body proportions via the head-to-body ratio conversion |
| R8 | The portrait close-up must be fully shown from the top of the head to the collarbone, cropping the top of the head is strictly prohibited |
| R9 | Skin must retain authentic texture, must not be over-smoothed |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Underwear/exposure/sexualized base clothing; clothing clearly inconsistent with the character description; overly complex patterns/decorations that interfere with later costume layering |
| X2 | Direct overhead hard light/direct underlighting/colored lighting |
| X3 | Excessive whitening/over-smoothing to the point of losing texture |
| X4 | Complex scene backgrounds (must be a pure gray background) |
| X5 | Exaggerated expressions/dynamic poses |
| X6 | Cropping the top of the head or soles of the feet in the full-body standing figure; must be fully shown from head to toe |
| X7 | Cropping the top of the head in the portrait close-up; must be fully shown from the top of the head to the collarbone |
| X8 | Ignoring height and head-to-body ratio constraints |
