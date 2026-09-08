# 90s Retro Japanese Anime Style - Character Base Model Generation · Constraint Manual

---

## 1. Base Model Principles

1. **Line is the soul** — Hand-drawn fluid lines are the core of the character; avoid digital sharp edges
2. **Character-driven** — The base outfit is determined by the character description (identity/occupation/gender/scene) as their regular clothing; specific costume/makeup details are layered on afterward
3. **Four-view consistency** — Face/body type/hairstyle/base clothing must be highly consistent across all views
4. **Restrained, calm emotion** — The no-makeup state must convey the character's temperament (gentle/melancholic/detached)

---

## 2. Facial Constraints

> Facial feature parameters are not fixed; instead, the character description (gender/age/personality/temperament) drives the AI to freely generate facial features, ensuring visual differentiation between characters.

### General Requirements

| Item | Constraint |
|---|---|
| Facial features | Naturally derived from the character description; face shape/eye shape/eyebrow shape/nose shape/lip shape are not preset |
| Style base | 90s retro Japanese anime hand-drawn texture (soft warm tones, fluid lines, block shading) |
| Temperament | Overall temperament keywords (e.g., gentle/melancholic/detached/sunny) must be extracted from the character description and written into the prompt |
| Expression | Neutral micro-expression matching the character's temperament |

---

## 3. Skin Texture Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Skin tone | Cool white skin, warm-toned off-white | cool white skin, warm-toned off-white |
| Sheen | Flat-shaded coloring, soft sheen | flat-shaded coloring, soft sheen |
| Texture | Hand-drawn texture, no digital traces | hand-drawn texture, no digital traces |
| Exposed skin | Face/neck/hands | visible collarbone, clean neckline |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Skin tone | Healthy skin tone, natural warmth | healthy skin tone, natural warmth |
| Sheen | Flat-shaded coloring, natural sheen | flat-shaded coloring, natural sheen |
| Texture | Hand-drawn texture, simple texture detail | hand-drawn texture, simple texture detail |

---

## 4. Body Type Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default 155-165cm | {height}cm, {height description} |
| Head-to-body ratio | 6 to 6.5 heads tall, common 90s proportion | 6-6.5 heads tall, 90s proportion |
| Shoulders/neck | Slender, soft shoulder line | slender shoulders, graceful neckline |
| Hands | Slender, defined knuckles | slender delicate hands, long fingers |
| Posture | Elegant/gentle, light posture | light posture, graceful bearing |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default 170-180cm | {height}cm, {height description} |
| Head-to-body ratio | 6.5 to 7.5 heads tall | 6.5-7.5 heads tall, 90s proportion |
| Shoulders/neck | Broad shoulders, strong neckline | broad shoulders, strong neck |
| Hands | Defined knuckles, well-proportioned palms | knuckles clearly defined |
| Posture | Upright/sturdy, natural posture | upright bearing, sturdy build |

---

## 5. Base Hairstyle Constraints

> Only natural loose hair/simple tied hair is defined here; hair accessories are layered on in the derivative asset stage.

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Hair color | Natural hair color (black/brown/blonde) | black hair, brown hair, blonde hair |
| Hair length | Shoulder-length or longer | long hair, shoulder-length hair |
| Hair texture | Hand-drawn texture, fluid lines | flowing hair strands, hand-drawn texture |
| Style | Natural loose hair, no accessories | long hair naturally flowing, no hair accessories |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Hair color | Natural hair color (black/brown/gray) | black hair, brown hair, silver hair |
| Hair length | Medium-long to long | medium-long hair, long hair |
| Hair texture | Hand-drawn texture, fluid lines | flowing hair strands, hand-drawn texture |
| Style | Natural loose hair or half-tied, no crown accessories | long hair naturally flowing, half-tied hair |

---

## 6. Base Clothing Constraints

> The base outfit is determined by the character description (identity/occupation/gender/scene) as the most natural regular clothing, serving as the character's "everyday default state"; formal wear/special derivative outfits are layered on during the costume derivative stage. **Underwear-only base is prohibited.**

### Clothing Selection Principles

| Character Identity | Default Clothing Direction |
|---|---|
| Student | 90s school uniform / academy uniform |
| Office worker | Professional casual wear (shirt + pants/skirt) |
| Home/casual | 90s retro casual wear (knit sweater/dress/T-shirt) |
| Athletic/lively | Sportswear / modified school uniform |
| Special occupation | Corresponding identity clothing (doctor/police/teacher, etc.) |
| Unspecified character description | 90s retro everyday wear |

### Clothing Consistency Rules

- Clothing style must align with the 90s retro Japanese anime aesthetic (soft warm tones, low saturation, hand-drawn texture)
- Colors are low-saturation, with no complex patterns/decorations, to make later layering easier
- Clothing style must be completely consistent across all four views
- Base clothing is the "everyday default state"; the focus remains on the face and posture
- Underwear/exposure/sexualized base clothing is strictly prohibited

---

## 7. Four-View Reference Sheet Specification

### View Definitions

| Position | View | Angle | Shot Type | Requirement | Prompt |
|---|---|---|---|---|---|
| Far left | Portrait close-up | Front, eye-level | Top of head to collarbone | Fully shown from top of head to collarbone, face occupies 60%+ | portrait closeup, face detail |
| Second left | Front view | Front 0° | Full body standing | Facing camera, arms natural, fully shown head to toe | front view, full body head to toe |
| Second right | Side view | Right 90° | Full body standing | Pure profile silhouette clear, fully shown head to toe | side view, profile, full body head to toe |
| Far right | Back view | Rear 180° | Full body standing | Back of head/back/hair ends/feet clearly shown | back view, rear view, full body head to toe |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side by side left to right in the same frame |
| Background | Warm off-white #F8F4E8 |
| Stance | Natural standing, feet parallel with slight gap, arms hanging naturally |
| Full body display | Fully shown from head to toe, cropping the top of the head or feet is strictly prohibited |
| Close-up display | Fully shown from top of head to collarbone, cropping the top of the head is strictly prohibited |
| Expression | Neutral micro-expression matching the character's temperament |
| Lighting | Soft cinematic lighting, front key light + dual side fill lights |
| Consistency | Skin tone/body type/hairstyle/face/base clothing fully consistent across all four views |
| Aspect ratio | Recommended 4:1 or 3:1 |

---

## 8. Prompt Template

```
{gender} character four-view reference sheet, 90s anime style, retro Japanese anime style, hand-drawn flat-shaded coloring, soft warm tones, fine fluid lines, cinematic lighting,
character design sheet, character turnaround,
{facial features derived from character description - naturally inferred from character description}, {overall temperament}, no makeup, bare face,
{skin tone}, flat-shaded coloring, hand-drawn texture, delicate skin,
{height description, e.g.: 165cm tall, slender woman}, {head-to-body ratio, e.g.: 6.5 heads tall proportion}, {body description}, {posture description},
{hair color}{hair length}, flowing hair strands, {base style}, no hair accessories,
{regular clothing corresponding to character identity, e.g.: 90s school uniform/professional casual wear/retro dress}, soft low-saturation tones, no complex patterns,
same frame arranged left to right: portrait closeup + front view + side view + back view,
portrait closeup fully shown from top of head to collarbone, head to collarbone complete,
full body standing figure fully shown from top of head to soles of feet, full body head to toe, not cropping the top of the head or feet,
standing naturally, clean neutral gray background, soft cinematic lighting, no harsh shadows,
four-view consistency, delicately rendered face, delicately rendered hair strands
no text of any kind should appear in the image
```

---

## 9. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Must be in a "bare face, no makeup" state |
| R2 | Must declare appropriate regular clothing as the base outfit according to the character description (e.g., student → school uniform, office worker → professional casual wear, home → retro casual wear); underwear-only base is prohibited |
| R3 | Must declare "no hair accessories, no accessories" |
| R4 | Must specify "warm off-white background #F8F4E8" |
| R5 | Must specify "four-view consistency" |
| R6 | The full-body standing figure must be fully shown from head to toe; cropping is strictly prohibited |
| R7 | Must specify the character's height and constrain full-body proportions via the head-to-body ratio conversion (female default 155-165cm/6-6.5 heads, male default 170-180cm/6.5-7.5 heads) |
| R8 | The portrait close-up must be fully shown from the top of the head to the collarbone; cropping the top of the head is strictly prohibited |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Underwear/exposure/sexualized base clothing; clothing clearly inconsistent with the character description; overly complex patterns/decorations that interfere with later costume layering |
| X2 | Digital sharp edges, oversaturated colors |
| X3 | Excessive whitening to the point of looking bloodless |
| X4 | Complex scene backgrounds (background must be warm-toned) |
| X5 | Exaggerated expressions/dynamic poses |
| X6 | Cropping the top of the head or soles of the feet in the full-body standing figure; must be fully shown from head to toe |
| X7 | Cropping the top of the head in the portrait close-up; must be fully shown from the top of the head to the collarbone |
| X8 | Ignoring height and head-to-body ratio constraints |