---
name: art_character
description: Character base image generation · Constraint manual
metaData: art_skills
---

# Character Base Image Generation · Constraint Manual

---

## 1. Base Image Principles

1. **Design is the soul** — Character design is the core anchor: Chinese Traditional 3D styling with flowing lines
2. **Base model is the foundation** — Basic underlying clothing + bare face; all subsequent costume/makeup are additive layers
3. **Four-view consistency** — Face/body/hairstyle/base clothing must be highly consistent across all views
4. **Classical temperament** — Even without makeup, the character's temperament (elegant/gentle/heroic) must still come through

---

## 2. Facial Constraints

> Facial feature parameters are no longer fixed; instead, the AI freely generates facial features driven by the character description (gender/age/personality/temperament), ensuring visual differentiation between characters.

### General Requirements

| Item | Constraint |
|---|---|
| Facial Features | Naturally derived from the character description; no preset face shape/eye shape/eyebrow shape/nose shape/lip shape |
| Style Baseline | Chinese Traditional 3D rendering, high-precision modeling, PBR materials, cinematic-grade lighting |
| Temperament | Overall temperament keywords must be distilled from the character description (e.g. elegant and gentle / refined and heroic / chivalrous and tender) and written into the prompt |
| Expression | Neutral, subtle expression matching the character's temperament |

---

## 3. Skin Texture Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Pinkish-white base tone, uniform overall, fair and radiant | pinkish-white base tone, fair and radiant, 3D-modeled skin tone |
| Sheen | PBR material rendering, natural sheen, non-matte | PBR material rendering, natural sheen, soft texture |
| Texture | High-precision modeling, clear texture, soft edges | high-precision modeling, clear texture, soft edges |
| Exposed Skin | Face/neck/hands | delicate hands, soft neck lines |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Skin Tone | Fair base tone, uniform overall, healthy texture | fair base tone, healthy texture, 3D-modeled skin tone |
| Sheen | PBR material rendering, natural sheen | PBR material rendering, natural sheen, soft texture |
| Texture | High-precision modeling, clean and crisp | high-precision modeling, 3D rendering, soft |

---

## 4. Body Type Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 160-170cm | {height}cm tall, {height description e.g. tall elegant woman} |
| Head-to-Body Ratio | 7 to 7.5 heads tall, classical proportions | 7 heads tall proportion, classical proportions |
| Shoulder/Neck | Swan neck, graceful shoulder-neck line | swan neck, graceful shoulder-neck line |
| Hands | Slender and fair, natural fingers | slender fair hands, natural fingers |
| Posture | Classical temperament, elegant and upright | elegant posture, upright bearing |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 175-185cm | {height}cm tall, {height description e.g. tall imposing man} |
| Head-to-Body Ratio | 7 to 7.5 heads tall, classical proportions | 7 heads tall proportion, classical proportions |
| Shoulder/Neck | Broad shoulders, strong neck | broad shoulders, strong neck |
| Hands | Well-defined knuckles, natural fingers | well-defined knuckles, natural fingers |
| Posture | Refined and heroic, upright bearing | heroic posture, upright bearing |

---

## 5. Base Hairstyle Constraints

> Only natural hairstyles are defined here; hair accessories are added in the costume/makeup derivative stage.

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Ink black, no other colors allowed | ink-black long hair, hair like a black waterfall |
| Hair Length | Long hair reaching the waist | long hair to the waist, long hair |
| Hair Texture | High-precision modeling, clear hair strands | high-precision modeling, clear hair strands |
| Style | Natural loose hair, no hair accessories | natural flowing long hair, no hair accessories |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Hair Color | Ink black, no other colors allowed | ink-black long hair, hair like black ink |
| Hair Length | Long hair to the shoulders or tied up | long hair to the shoulders, tied-up hair |
| Hair Texture | High-precision modeling, clear hair strands | high-precision modeling, clear hair strands |
| Style | Natural loose or half-tied, no hair crown | natural flowing long hair, half-tied long hair |

---

## 6. Base Clothing Constraints

> Base clothing has no special constraints — a plain-colored ancient-style long dress for female characters, a plain-colored ancient-style long robe for male characters. Formal attire is added in the costume/makeup derivative stage.

### Female Base Clothing

Plain-colored ancient-style long dress, predominantly base colors, no patterned decoration.

### Male Base Clothing

Plain-colored ancient-style long robe, predominantly base colors, no patterned decoration.

### Clothing Consistency Rules

- Clothing style must be consistent to ensure subsequent costume layering has no color interference
- Coverage should be essentially full except for face/hands/neck
- Clothing style must be completely identical across all four views
- Base clothing is only a safe foundation layer — the focus is on the face and posture

---

## 7. Four-View Reference Sheet Specification

### View Definitions

| Position | View | Angle | Shot Type | Requirement | Prompt |
|---|---|---|---|---|---|
| Leftmost | Portrait Close-up | Front, eye-level | Top of head to collarbone | Full display from top of head to collarbone, face occupying 60%+, clear facial features | portrait closeup, face detail |
| Second from Left | Front View | Front 0° | Full-body standing | Facing camera, arms natural, complete display from top of head to soles of feet | front view, full body |
| Second from Right | Side View | Right 90° | Full-body standing | Pure profile silhouette, complete display from top of head to soles of feet | side view, profile, full body |
| Rightmost | Back View | Rear 180° | Full-body standing | Back of head/back/hair ends/feet clear, complete display from top of head to soles of feet | back view, rear view, full body |

### Composition Specification

| Item | Constraint |
|---|---|
| Layout | Four views arranged side by side left to right in the same frame |
| Background | Plain gray solid color #B8B8B8 |
| Stance | Natural standing, feet parallel and slightly apart, arms hanging naturally |
| Full-Body Display | Full-body standing views must show completely from top of head to soles of feet, no cropping allowed |
| Close-up Display | Portrait close-up must show completely from top of head to collarbone, no cropping allowed |
| Expression | Neutral, subtle expression matching the character's temperament |
| Lighting | Even soft light, front key light + dual side fill light, no hard shadows |
| Consistency | Skin tone/body type/hairstyle/face/base clothing must be completely consistent across all four views |
| Aspect Ratio | 4:1 or 3:1 recommended |

---

## 8. Prompt Template

{gender} character four-view reference sheet, 3D rendering style, high-precision modeling, PBR materials, Chinese Traditional 3D, cinematic-grade lighting,
character design sheet, character turnaround,
{facial features corresponding to character description - naturally derived from character description}, {overall temperament}, bare-faced state,
{skin tone}, PBR material rendering, translucent 3D-render texture, high-precision modeling, rich lighting layers,
{height description, e.g. 165cm tall, tall elegant woman}, {head-to-body ratio, e.g. 7 heads tall proportion}, {body description}, {posture description},
{hair color}{hair length}, high-precision clear hair strands, {base style}, no hair accessories,
(Female: plain-colored ancient-style long dress / Male: plain-colored ancient-style long robe), base color, no patterned decoration,
same frame, left to right side by side: portrait closeup + front view + side view + back view,
portrait closeup shown completely from top of head to collarbone, do not crop the top of the head, head to collarbone complete,
full-body standing view shown completely from top of head to soles of feet, full body head to toe, do not crop the top of the head or the feet,
natural standing pose, plain gray solid color background, even soft light, no hard shadows,
four-view consistency, clear Chinese Traditional 3D modeling, clear high-precision modeling,
no text of any kind in the image


---

## 9. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Must be in "bare-faced state" |
| R2 | Must declare base clothing (Female: plain-colored ancient-style long dress; Male: plain-colored ancient-style long robe) |
| R3 | Must declare "no hair accessories, no accessories" |
| R4 | Must specify "plain gray solid color background" |
| R5 | Must specify "four-view consistency" |
| R6 | Full-body standing views must be shown completely from top of head to soles of feet, no cropping allowed |
| R7 | Must declare the character's height and constrain the full-body proportions via the head-to-body ratio conversion (Female default 160-170cm / 7 heads tall, Male default 175-185cm / 7 heads tall) |
| R8 | Portrait close-up must be shown completely from top of head to collarbone, cropping the top of the head is prohibited |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Any clothing/accessories/makeup beyond the base clothing |
| X2 | Direct overhead hard light / direct underlighting / cool-toned light |
| X3 | Over-whitened skin to the point of looking bloodless / grayish skin tone |
| X4 | Complex scene backgrounds (must be solid color) |
| X5 | Exaggerated expressions/dynamic poses |
| X6 | Cropping the top of the head or feet in full-body standing views — must be shown completely from head to toe |
| X7 | Cropping the top of the head in portrait close-ups — must be shown completely from top of head to collarbone |
| X8 | Ignoring the height and head-to-body ratio constraints — height must be explicitly declared and reflected in the full-body proportions via the head-to-body ratio conversion |
