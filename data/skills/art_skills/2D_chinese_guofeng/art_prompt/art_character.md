---
name: art_character
description: Character base image generation · Constraint manual
metaData: art_skills
---

# Character Base Image Generation · Constraint Manual

---

## 1. Base Image Principles

1. **Design is the soul** — The character design is the core anchor: Guofeng anime style, flowing lines
2. **Base model is the foundation** — Base underlying clothing + bare face, with all subsequent costume/makeup as overlay layers
3. **Four-view consistency** — Face/body type/hairstyle/base clothing must be highly consistent across all views
4. **Classical temperament** — Even without makeup, the character's temperament (elegant / gentle / heroic) must still come through

---

## 2. Facial Constraints

> Facial feature parameters are no longer fixed; the AI freely generates facial features driven by the character description (gender/age/personality/temperament), ensuring differentiated appearance between characters.

### General Requirements

| Item | Constraint |
|---|---|
| Facial features | Naturally derived from the character description; do not preset face shape/eye shape/eyebrow shape/nose shape/lip shape |
| Style baseline | Guofeng anime, New Chinese-Chic aesthetics, Japanese-style anime rendering, cel-shading, delicate brushwork |
| Temperament | Must extract an overall temperament keyword from the character description (e.g. elegant and gentle / refined and heroic / chivalrous yet tender), and include it in the prompt |
| Expression | Neutral, subtle expression matching the character's temperament |

---

## 3. Skin Texture Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Skin tone | Pinkish-white base tone, uniform overall, fair and radiant | pinkish-white base tone, fair and radiant, anime skin tone |
| Sheen | Cel-shaded flat color, natural sheen, non-matte | cel-shaded flat color, natural sheen, soft texture |
| Texture | Delicate lines, uniform color, soft edges | delicate lines, uniform color, soft edges |
| Exposed skin | Face/neck/hands | delicate hands, soft neckline |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Skin tone | Fair base tone, uniform overall, healthy texture | fair base tone, healthy texture, anime skin tone |
| Sheen | Cel-shaded flat color, natural sheen | cel-shaded flat color, natural sheen, soft texture |
| Texture | Delicate lines, clean and crisp | delicate lines, cel-shaded flat color, soft |

---

## 4. Body Type Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character settings, default range 160-170cm | {height}cm tall, {height description, e.g.: tall elegant woman} |
| Head-to-body ratio | Six to seven heads tall, classical anime proportions | 6-7 heads tall proportion, classical anime proportions |
| Shoulders/neck | Swan neck, graceful shoulder-neck line | swan neck, graceful shoulder-neck line |
| Hands | Slender and fair, natural fingers | slender and fair, natural fingers |
| Posture | Classical temperament, elegant and upright | elegant posture, upright bearing |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character settings, default range 175-185cm | {height}cm tall, {height description, e.g.: tall imposing man} |
| Head-to-body ratio | Six to seven heads tall, classical anime proportions | 6-7 heads tall proportion, classical anime proportions |
| Shoulders/neck | Broad shoulders, strong neck | broad shoulders, strong neck |
| Hands | Well-defined knuckles, natural fingers | well-defined knuckles, natural fingers |
| Posture | Refined and heroic, upright and dignified | heroic bearing, upright posture |

---

## 5. Base Hairstyle Constraints

> Only natural hairstyles are defined here; hair ornaments are added during the costume/makeup derivative stage.

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Hair color | Ink black, all other colors forbidden | ink-black long hair, hair like a waterfall |
| Hair length | Long hair down to the waist | long hair down to the waist, long hair |
| Hair texture | Delicate lines, clearly defined strands | delicate lines, clearly defined strands |
| Style | Naturally worn loose, no hair ornaments | long hair naturally flowing loose, no hair ornaments |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Hair color | Ink black, all other colors forbidden | ink-black long hair, hair like dark ink |
| Hair length | Long hair to the shoulders, or tied up | long hair to the shoulders, tied-up hair |
| Hair texture | Delicate lines, clearly defined strands | delicate lines, clearly defined strands |
| Style | Naturally worn loose or half-tied, no hair crown | long hair naturally flowing loose, half-tied long hair |

---

## 6. Base Clothing Constraints

> The base clothing has no special constraints: a plain-colored traditional long dress for female characters, a plain-colored traditional long robe for male characters. Formal attire is added during the costume/makeup derivative stage.

### Female Base Clothing

Plain-colored traditional long dress, primarily in base colors, with no patterned decoration.

### Male Base Clothing

Plain-colored traditional long robe, primarily in base colors, with no patterned decoration.

### Clothing Consistency Rules

- Clothing style must be consistent to ensure no color interference when later layers are added
- Coverage is essentially full except for face/hands/neck
- The clothing style must be exactly identical across all four views
- Base clothing exists only as a safe foundation layer; the focus is on the face and posture

---

## 7. Four-View Reference Sheet Specification

### View Definitions

| Position | View | Angle | Shot Type | Requirement | Prompt |
|---|---|---|---|---|---|
| Far left | Portrait close-up | Front, eye level | Top of head to collarbone | Fully shown from top of head to collarbone, face occupies 60%+, facial features clear | portrait closeup, face detail |
| Second from left | Front view | Front 0° | Full-body standing pose | Facing the camera, arms natural, fully shown from top of head to soles of feet | front view, full body |
| Second from right | Side view | Right side 90° | Full-body standing pose | Clear pure profile silhouette, fully shown from top of head to soles of feet | side view, profile, full body |
| Far right | Back view | Rear 180° | Full-body standing pose | Back of head/back/hair ends/feet clearly shown, fully shown from top of head to soles of feet | back view, rear view, full body |

### Composition Specification

| Item | Constraint |
|---|---|
| Layout | Four views arranged side by side, left to right, in one frame |
| Background | Plain moon-white color #E8EAF5 |
| Stance | Standing naturally, feet parallel and slightly apart, arms hanging naturally |
| Full-body display | Full-body standing pose must be fully shown from top of head to soles of feet, no cropping allowed |
| Close-up display | Portrait close-up must be fully shown from top of head to collarbone, no cropping allowed |
| Expression | Neutral, subtle expression matching the character's temperament |
| Lighting | Even soft light, key light from the front + fill light from both sides, no hard shadows |
| Consistency | Skin tone/body type/hairstyle/face/base clothing must be fully consistent across all four views |
| Aspect ratio | 4:1 or 3:1 recommended |

---

## 8. Prompt Template

{gender} character four-view reference sheet, guofeng anime, new Chinese-chic aesthetics, Japanese-style anime rendering, cel-shaded flat color, delicate brushwork,
character design sheet, character turnaround,
{facial features derived from the character description - naturally inferred from the character description}, {overall temperament}, bare-faced state,
{skin tone}, cel-shaded flat color, radiant translucent skin, delicate lines, rich layered lighting,
{height description, e.g.: 165cm tall, tall elegant woman}, {head-to-body ratio, e.g.: 6.5 heads tall proportion}, {body description}, {posture description},
{hair color}{hair length}, delicate clearly-defined hair strands, {base style}, no hair ornaments,
(Female: plain-colored traditional long dress / Male: plain-colored traditional long robe), base color, no patterned decoration,
in one frame, side by side left to right: portrait close-up + front view + side view + back view,
portrait close-up fully shown from top of head to collarbone, do not crop the top of the head, head to collarbone complete,
full-body standing pose fully shown from top of head to soles of feet, full body head to toe, do not crop the top of the head or the feet,
standing naturally, plain moon-white background, even soft light, no hard shadows,
four-view consistency, clear guofeng anime design, clear delicate lines,
no text of any kind in the image

---

## 9. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Must be in a "bare-faced state" |
| R2 | Must declare the base clothing (Female: plain-colored traditional long dress; Male: plain-colored traditional long robe) |
| R3 | Must declare "no hair ornaments, no accessories" |
| R4 | Must specify a "plain moon-white background" |
| R5 | Must specify "four-view consistency" |
| R6 | The full-body standing pose must be fully shown from top of head to soles of feet, no cropping allowed |
| R7 | Must specify the character's height and constrain the overall body proportions via the head-to-body ratio (Female default 160-170cm / 6-7 heads tall, Male default 175-185cm / 6-7 heads tall) |
| R8 | The portrait close-up must be fully shown from top of head to collarbone, cropping the top of the head is forbidden |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Any clothing/accessories/makeup beyond the base clothing |
| X2 | Direct overhead hard light / direct underlighting / cold-toned light |
| X3 | Over-whitened skin with no blood color / grayish skin tone |
| X4 | Complex scene backgrounds (must be a plain color) |
| X5 | Exaggerated expressions/dynamic poses |
| X6 | Cropping the top of the head or feet in the full-body standing pose; it must be fully shown from head to toe |
| X7 | Cropping the top of the head in the portrait close-up; it must be fully shown from top of head to collarbone |
| X8 | Ignoring the height and head-to-body ratio constraints; height must be explicitly stated and the full-body proportions must be reflected via the head-to-body ratio conversion |
