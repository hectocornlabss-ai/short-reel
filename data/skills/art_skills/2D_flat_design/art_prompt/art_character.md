# Character Base Model Generation · Flat Style Constraint Manual

---

## 1. Base Model Principles

1. **Silhouette is the soul** — lines are the character's only anchor point; flat color blocks build up the layers
2. **Character-driven** — the base outfit is determined by the character description (identity/occupation/gender/scene), which dictates their default everyday wear; later specific costume changes are layered on top
3. **Four-view consistency** — silhouette/body type/hairstyle/base clothing must be highly consistent across all views
4. **Color block expression** — no shadow gradients; layering is expressed through color block contrast

---

## 2. Facial Constraints

> Facial feature parameters are no longer fixed; the AI is driven by the character description (gender/age/personality/temperament) to freely generate facial features, ensuring visual differentiation between characters.

### General requirements

| Item | Constraint |
|---|---|
| Facial features | Naturally derived from the character description; no preset face shape/eye shape/eyebrow shape/nose shape/lip shape |
| Base style | Flat vector illustration, solid color blocks, clean lines, no gradients, no lighting effects |
| Temperament | The overall temperament keywords must be extracted from the character description and included in the prompt |
| Expression | Neutral, subtle expression matching the character's temperament |

---

## 3. Skin Texture Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Skin tone | Solid color fill, no gradient | solid-color skin, flat skin tone, solid skin color |
| Sheen | No highlights, no reflections | no gloss, matte flat, matte finish |
| Texture | Color block fill, no texture | color block fill, flat texture, no texture |
| Exposed skin | Face/neck/collarbone/hands | flat skin-tone color block, flat skin surface |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Skin tone | Solid color fill, no gradient | solid-color skin, flat skin tone, solid skin color |
| Sheen | No highlights, no reflections | no gloss, matte flat, matte finish |
| Texture | Color block fill, no texture | color block fill, flat texture, no texture |

---

## 4. Body Type Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by the character setting, default range 160-170cm, expressed via head-to-body ratio | {height}cm tall, tall slender woman |
| Head-to-body ratio | 7 to 8 heads tall, strictly constraining the full-body proportions | 7-8 heads tall proportion, slender figure |
| Shoulders/neck | Clean lines, color block expression | clean lines, flat shoulders and neck |
| Hands | Simplified hand outlines | simplified hands, color block hands |
| Posture | Simple posture, no dynamic motion | simple posture, front-facing standing pose |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by the character setting, default range 175-185cm, expressed via head-to-body ratio | {height}cm tall, tall imposing man |
| Head-to-body ratio | 7.5 to 8.5 heads tall, strictly constraining the full-body proportions | 7.5-8.5 heads tall proportion, tall statured figure |
| Shoulders/neck | Clean lines, color block expression | clean lines, flat shoulders and neck |
| Hands | Simplified hand outlines | simplified hands, color block hands |
| Posture | Simple posture, no dynamic motion | simple posture, front-facing standing pose |

---

## 5. Base Hairstyle Constraints

> Only natural loose hair/simple tied hair is defined here; hair accessories are layered on during the costume derivative stage.

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Hair color | Solid pure black, no gradient | black hair, solid hair color |
| Hair length | Waist-length or longer | long hair, waist-length hair |
| Hair texture | Outlined with lines, no strand detail | lined hairstyle, flat hair color, no hair strands |
| Style | Natural loose hair, center/side part, no hair accessories | long hair naturally flowing, simple hair color |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Hair color | Solid pure black or ink black | black hair, ink-black hair color |
| Hair length | Medium-long to long | long hair, shoulder-length hair |
| Hair texture | Outlined with lines, no strand detail | lined hairstyle, flat hair color, no hair strands |
| Style | Natural loose hair or half-tied, no crown | long hair naturally flowing, simple hairstyle |

---

## 6. Base Clothing Constraints

> Base clothing is determined by the character description (identity/occupation/gender/scene) to reflect the most natural everyday outfit for that character, serving as their "default daily state"; formal wear/special derivatives are layered on during the costume derivative stage. **Underwear-only base layers are prohibited.**

### Outfit selection principles

| Character identity | Default clothing direction |
|---|---|
| Student | School uniform / academic wear |
| Office worker | Professional casual wear (shirt + pants/skirt) |
| Home/casual | Casual everyday wear (T-shirt + pants/dress) |
| Sporty/lively | Sportswear set |
| Special occupation | Corresponding uniform (doctor/police officer/teacher, etc.) |
| Character description unclear | Simple everyday casual wear |

### Clothing consistency rules

- Clothing style must match the flat vector illustration aesthetic (solid color blocks, no gradients, no lighting effects)
- Colors are low-saturation solid fills, with no complex patterns/decorations, to make later derivative layering easier
- Clothing style must be completely consistent across the four views
- Base clothing is the "default daily state"; the focus remains on the face and body
- Underwear/exposure/sexualized base layers are strictly prohibited

---

## 7. Four-View Reference Sheet Specifications

### View definitions

| Position | View | Angle | Shot type | Requirement | Prompt |
|---|---|---|---|---|---|
| Far left | Portrait close-up | Front, eye-level | Top of head to collarbone | Fully shown from top of head to collarbone with no cropping, face occupies 60%+, facial features clear | portrait closeup, face detail, head to collarbone complete, no crop |
| Second from left | Front view | Front 0° | Full-body standing | Facing the camera, arms relaxed, fully shown from top of head to soles of feet | front view, full body head to toe, height mark |
| Second from right | Side view | Right side 90° | Full-body standing | Pure profile silhouette clear, fully shown from top of head to soles of feet | side view, profile, full body head to toe, height mark |
| Far right | Back view | Rear 180° | Full-body standing | Back of head/back/hair ends/feet clear, fully shown from top of head to soles of feet | back view, rear view, full body head to toe, height mark |

### Frame specifications

| Item | Constraint |
|---|---|
| Layout | All four views arranged side by side, left to right, in one frame |
| Background | Clean neutral gray #E8E8E8 |
| Stance | Natural standing, feet parallel and slightly apart, arms hanging naturally or slightly spread |
| Full-body display | Full-body standing views must be fully shown from top of head to soles of feet, with no cropping of head or feet |
| Close-up display | The portrait close-up must be fully shown from top of head to collarbone, with no cropping of the top of the head; hair, forehead, and chin must all be complete |
| Expression | Neutral, subtle expression matching the character's temperament |
| Lighting | No lighting effects, purely flat-colored blocks |
| Consistency | Skin tone/body type/hairstyle/face/base clothing must be completely consistent across all four views |
| Aspect ratio | 4:1 or 3:1 recommended |

---

## 8. Prompt Template

```
{gender} character four-view flat-style reference sheet,
2d flat design, vector art, flat illustration,
minimalist, clean lines, solid colors,
{facial features corresponding to the character description - naturally derived from the character description}, {overall temperament}, bare face with no makeup,
{skin tone}, solid-color skin, flat skin tone, solid skin color,
{height description, e.g.: 170cm tall, tall slender woman}, {head-to-body ratio, e.g.: 7.5 heads tall proportion}, {body description}, {posture description},
{hair color}{hair length}, lined hairstyle, {base style}, no hair accessories,
{everyday clothing corresponding to the character's identity, e.g.: school uniform/professional casual wear/casual everyday wear}, solid color fill for base colors, no complex patterns,
side by side in one frame, left to right: portrait closeup + front view + side view + back view,
portrait closeup fully shown from top of head to collarbone, no cropping of the top of the head, head to collarbone complete,
full-body standing views fully shown from top of head to soles of feet, full body head to toe, no cropping of head or feet,
standing naturally, clean neutral gray background, no lighting effects, no gradients,
four-view consistency, clean lines, color block fill,
no text of any kind in the image
```

---

## 9. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Must be in a "bare face, no makeup" state |
| R2 | Must declare an appropriate everyday outfit as the base clothing according to the character description (e.g., student → school uniform, office worker → professional casual wear, home → casual everyday wear); underwear-only base layers are prohibited |
| R3 | Must declare "no hair accessories, no accessories" |
| R4 | Must specify a "clean neutral gray background" |
| R5 | Must specify "four-view consistency" |
| R6 | Full-body standing views must be fully shown from top of head to soles of feet, with no cropping |
| R7 | Must specify the character's height and constrain the full-body proportions via head-to-body ratio conversion (female default 160-170cm/7-8 heads, male default 175-185cm/7.5-8.5 heads) |
| R8 | The portrait close-up must be fully shown from top of head to collarbone, with no cropping of the top of the head |

### Strictly Prohibited

| No. | Prohibited |
|---|---|
| X1 | Underwear/exposure/sexualized base layers; clothing that clearly does not match the character description; overly complex patterns/decorations that interfere with later costume layering |
| X2 | Lighting/shadow/gradient effects |
| X3 | 3D rendering/CG texture |
| X4 | Complex scene backgrounds (must be a pure gray background) |
| X5 | Exaggerated expressions/dynamic poses |
| X6 | Full-body standing views cropping the top of the head or soles of the feet; must be fully shown from head to toe |
| X7 | Portrait close-up cropping the top of the head; must be fully shown from top of head to collarbone |
| X8 | Ignoring the height and head-to-body ratio constraints; height must be explicitly declared and the full-body proportions expressed via head-to-body ratio conversion |
