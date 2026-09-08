# Claymation Stop-Motion Character Base Model Generation · Constraint Handbook

---

## 1. Base Model Principles

1. **Clay texture is the soul** — Visible handcrafted sculpting marks on the surface, fingerprint indentations/clay grain must be clearly distinguishable
2. **3D cartoon base** — The foundational base is a simplified-form clay character, with all subsequent costume/makeup as overlay layers
3. **Four-view consistency** — Face/build/hairstyle/base clothing must be highly consistent across views
4. **Healing atmosphere** — Even without makeup, the character's personality (gentle/soft/approachable) must still come through

---

## 2. Facial Constraints

> Facial feature parameters are no longer fixed; they are driven by the character description (gender/age/personality/temperament), letting the AI freely generate features while ensuring visual differentiation between characters.

### General Requirements

| Item | Constraint |
|---|---|
| Facial features | Naturally derived from the character description; no preset face shape/eye shape/eyebrow shape/nose shape/lip shape; overall must retain a rounded clay feel (no sharp edges) |
| Style base | Claymation stop-motion, 3D cartoon rendering, matte clay texture, warm-toned lighting |
| Temperament | Overall temperament keywords must be distilled from the character description (e.g., warm and healing / steady and reliable / lively and approachable) and included in the prompt |
| Expression | Neutral micro-expression, consistent with the character's temperament |

---

## 3. Skin Constraints

### Female

| Item | Constraint | Prompt Fragment |
|---|---|---|
| Skin tone | Warm cream tone, soft and even | warm cream-colored skin, soft skin tone |
| Sheen | Matte clay texture, no highlights | matte clay texture, matte clay texture |
| Texture | Clear clay grain, visible sculpting marks | clay surface, handcrafted sculpting marks |
| Exposed skin | Face/neck/hands | warm smooth skin, clay texture |

### Male

| Item | Constraint | Prompt Fragment |
|---|---|---|
| Skin tone | Warm beige tone, soft and even | warm beige skin, soft skin tone |
| Sheen | Matte clay texture, no highlights | matte clay texture, matte clay texture |
| Texture | Clear clay grain, visible fingerprint indentations | clay surface, clear handcrafted marks |

---

## 4. Build Constraints

### Female

| Item | Constraint | Prompt Fragment |
|---|---|---|
| Height | Default 155-165cm, reflected in head-to-body ratio | {height}cm tall |
| Head-to-body ratio | 6 to 7 heads tall, large head small body | 6-7 heads tall, rounded proportions |
| Shoulders/neck | Rounded shoulder line, no sharp edges | rounded shoulders and neck, soft lines |
| Hands | Rounded fingers, simplified joints | small rounded hands, simplified hand detail |
| Posture | Soft curves, no aggressive poses | soft posture, rounded curves |

### Male

| Item | Constraint | Prompt Fragment |
|---|---|---|
| Height | Default 170-180cm, reflected in head-to-body ratio | {height}cm tall |
| Head-to-body ratio | 6.5 to 7.5 heads tall | 6.5-7.5 heads tall, rounded proportions |
| Shoulders/neck | Rounded broad shoulders, soft shoulder area | rounded shoulders, gentle shoulder line |
| Hands | Rounded palms, simplified knuckles | rounded palms, simplified knuckles |
| Posture | Steady and dignified, soft lines | steady posture, rounded lines |

---

## 5. Base Hairstyle Constraints

### Female

| Item | Constraint | Prompt Fragment |
|---|---|---|
| Hair color | Warm brown, chestnut, deep brown, and other natural tones | warm brown long hair, chestnut hair |
| Hair length | Shoulder-length or waist-length | shoulder-length hair |
| Hair texture | Clay-sculpted, blocky hair strands | clay hairstyle, blocky hair strands |
| Styling | Naturally loose, simple tied styles, no complex hair accessories | natural hair strands, simple tied hair |

### Male

| Item | Constraint | Prompt Fragment |
|---|---|---|
| Hair color | Warm brown, deep brown, black | warm brown short hair, dark hairstyle |
| Hair length | Short or medium-length | short hair, medium-length hair |
| Hair texture | Clay-sculpted, blocky hair strands | clay hairstyle, blocky hair strands |
| Styling | Naturally loose, simple tied hair | natural hair strands, simple hairstyle |

---

## 6. Base Clothing Constraints

> Base clothing has a simplified form with no complex detail.

### Female Base Clothing

Simplified dress or top + skirt, in low-saturation warm tones, with no patterned decoration.

### Male Base Clothing

Simplified shirt + pants, in low-saturation warm tones, with no patterned decoration.

### Outfit Consistency Rules

- Clothing style must be unified so that later costume overlays introduce no color interference
- Coverage is essentially complete except for the face/hands/neck
- Clothing style must be completely identical across all four views
- Base clothing is only a safe foundation layer; the focus is on the face and build

---

## 7. Four-View Reference Sheet Specification

### View Definitions

| Position | View | Angle | Framing | Requirement | Prompt Fragment |
|---|---|---|---|---|---|
| Far left | Portrait closeup | Front-facing, eye level | Top of head to collarbone | Face occupies 60%+, features clear | portrait closeup, face detail |
| Second from left | Front view | Front 0° | Full-body standing | Facing camera, complete from top of head to soles of feet | front view, full body |
| Second from right | Side view | Right side 90° | Full-body standing | Clear side profile, complete from head to toe | side view, profile, full body |
| Far right | Back view | Rear 180° | Full-body standing | Back of head/back/hair ends/feet all clear | back view, rear view, full body |

### Composition Specification

| Item | Constraint |
|---|---|
| Layout | Four views arranged side by side left to right in the same image |
| Background | Clean neutral gray #E8E8E8 |
| Pose | Standing naturally, feet parallel and slightly apart, arms hanging naturally |
| Full-body display | Full-body standing views must be completely shown from head to toe, no cropping allowed |
| Closeup display | Portrait closeups must be completely shown from top of head to collarbone, no cropping allowed |
| Expression | Neutral micro-expression, consistent with the character's personality |
| Lighting | Warm soft light, front key light + dual side fill, no hard shadows |
| Consistency | Skin tone/build/hairstyle/face/base clothing fully consistent across the four views |
| Aspect ratio | Recommended 4:1 or 3:1 |

---

## 8. Prompt Template

```
Claymation stop-motion {gender} character four-view reference sheet, stop-motion animation style, 3D cartoon rendering, warm-toned lighting,
character design sheet, character turnaround,
{facial features corresponding to the character description - naturally derived from the character description, overall retaining a rounded clay feel}, {overall temperament},
{skin tone}, matte clay texture, clear clay grain, handcrafted sculpting marks,
{height description}, {head-to-body ratio, e.g.: 7 heads tall proportion}, {body description}, {posture description},
{hair color}{hair length}, clay hairstyle, {basic styling}, no complex hair accessories,
(Female: simplified dress / Male: simplified shirt + pants), low-saturation warm tone, no patterns,
same image arranged left to right: portrait closeup + front view + side view + back view,
portrait closeup complete from top of head to collarbone, head to collarbone complete,
full-body standing view complete from top of head to soles of feet, full body head to toe,
standing naturally, clean neutral gray background, warm soft light, no hard shadows,
four-view consistency, finely rendered clay grain, soft healing expression
no text of any kind should appear in the image
```

---

## 9. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Must be in a "matte clay texture" state |
| R2 | Must specify base clothing (Female: simplified dress; Male: simplified shirt + pants) |
| R3 | Must state "no complex hair accessories, no modern accessories" |
| R4 | Must specify a "clean neutral gray background" |
| R5 | Must specify "four-view consistency" |
| R6 | Full-body standing views must be completely shown from head to toe, no cropping allowed |
| R7 | Must specify the character's height and constrain the full-body proportion via head-to-body ratio (default 6-7 heads tall) |
| R8 | Portrait closeups must be completely shown from top of head to collarbone, no cropping of the top of the head |

### Prohibited

| No. | Prohibited |
|---|---|
| X1 | Realistic live-action photography texture/photorealistic quality |
| X2 | Cold hard lighting/hard shadows/high contrast |
| X3 | Sharp edges/aggressive poses |
| X4 | Complex scene backgrounds (must be pure gray base) |
| X5 | Exaggerated expressions/dynamic poses |
| X6 | Full-body standing views cropping the top of the head or the soles of the feet |
| X7 | Portrait closeups cropping the top of the head |
| X8 | Ignoring the height and head-to-body ratio constraints |
