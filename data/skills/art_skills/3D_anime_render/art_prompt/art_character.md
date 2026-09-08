# art_character_3d.md
# 3D Animation Character Base Design Generation · Constraint Manual

---

## 1. Base Design Principles

1. **The face is the soul** — the facial features are the character's sole anchor, rendered with cel-shaded precision
2. **Character-driven** — the base outfit is determined by the character description (identity/occupation/gender/scene) as their standard everyday wear; specific styling is layered on afterward
3. **Consistency across the four views** — face/body type/hairstyle/base clothing must be highly consistent across all views
4. **Warm and cute, healing** — even bare-faced, the character's temperament (cheerful/gentle/spirited) must still come through

---

## 2. Facial Constraints

> Facial feature parameters are no longer fixed; instead, the AI freely generates facial features driven by the character description (gender/age/personality/temperament), ensuring visual differentiation between characters.

### General Requirements

| Item | Constraint |
|---|---|
| Facial features | Naturally derived from the character description; face shape/eye shape/eyebrow shape/nose shape/lip shape are not preset |
| Base style | 3D cel-shaded animation rendering, warm color palette, cartoon proportions, joyful and healing atmosphere |
| Temperament | Overall temperament keywords must be distilled from the character description (e.g. warm/spirited/healing/sunny) and included in the prompt |
| Expression | Neutral, subtle expression matching the character's temperament |

---

## 3. Skin Texture Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Skin tone | Warm fair skin, even all over, luminous | warm fair skin, peach skin |
| Sheen | Soft-glow skin, inner glow, non-matte | soft glowing skin, inner glow, soft glow |
| Texture | Fine and smooth, cel-shaded rendering texture | fine skin texture, cel-shaded texture |
| Exposed skin | Face/neck/collarbone/hands | beautiful shoulder-neck line, warm fair glowing skin |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Skin tone | Warm beige, healthy-looking, even all over | warm beige tone, healthy skin tone |
| Sheen | Fresh soft glow, natural sheen | soft glowing skin, fresh luminous skin |
| Texture | Clean and refined, cel-shaded sheen | fine skin texture, fresh clean face |

---

## 4. Body Type Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Height | Set by the character profile, default range 155-165cm | {height}cm tall, {height description e.g. petite girl} |
| Head-to-body ratio | 6 to 7 heads tall, ratio = height ÷ head length | 6-7 heads tall proportion, petite figure |
| Height conversion | Head length = height ÷ head-to-body ratio (e.g. 160cm ÷ 6.5 = 24.6cm head length) | cute proportions, well-balanced head-to-body ratio |
| Shoulders/neck | Smooth shoulders and neck, flowing lines | smooth shoulder line, graceful neck |
| Hands | Small and rounded, soft knuckles | rounded small hands, defined knuckles |
| Posture | Spirited girl, light posture | light posture, lively stance |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Height | Set by the character profile, default range 170-180cm | {height}cm tall, {height description e.g. tall cute boy} |
| Head-to-body ratio | 6.5 to 7.5 heads tall, ratio = height ÷ head length | 6.5-7.5 heads tall proportion, well-proportioned build |
| Height conversion | Head length = height ÷ head-to-body ratio (e.g. 175cm ÷ 7 = 25cm head length) | cute proportions, well-balanced head-to-body ratio |
| Shoulders/neck | Rounded shoulders, natural neck | rounded shoulders, natural neckline |
| Hands | Rounded palms, soft knuckles | rounded palms, defined knuckles |
| Posture | Sunny youth/gentle senior (per character) | upright posture, sunny bearing |

### Height-to-Head-Ratio Conversion Reference

| Height (cm) | Head-to-body ratio | Head length (cm) | Applicable description |
|---|---|---|---|
| 150-155 | 6.0 | ~25cm | petite and cute |
| 155-160 | 6.0-6.5 | ~25cm | sweet and petite |
| 160-165 | 6.5 | ~24.6cm | fresh girl (female default) |
| 165-170 | 6.5-7.0 | ~25cm | tall slender girl |
| 170-175 | 7.0 | ~25cm | delicate boy |
| 175-180 | 7.0-7.5 | ~25cm | sunny boy (male default) |
| 180-185 | 7.5 | ~25cm | handsome and tall |

---

## 5. Base Hairstyle Constraints

> Only defines natural loose hair/simple tied hair; hair accessories are layered on during the styling derivative stage.

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Hair color | Warm brown/light chestnut/chocolate brown | warm brown long hair, golden chestnut hair |
| Hair length | Shoulder-length or long | long hair to the shoulders |
| Hair texture | Strand-by-strand definition, clear locks, cel-shaded texture | strand-by-strand hair definition, finely rendered hair strands |
| Style | Naturally loose, center/side part, no accessories | long hair falling naturally, smooth as a waterfall |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Hair color | Warm brown/dark coffee brown | dark brown short hair, coffee-colored hair |
| Hair length | Short to medium-long | short hair, ear-length short hair |
| Hair texture | Strand-by-strand definition, clear texture | strand-by-strand hair definition, finely rendered hair strands |
| Style | Naturally loose or side part, no accessories | short hair falling naturally, side-parted hairstyle |

---

## 6. Base Clothing Constraints

> The base outfit is determined by the character description (identity/occupation/gender/scene) as the most natural everyday wear for that character — the character's "default daily state"; formal wear/special derivatives are layered on during the styling derivative stage. **Underwear as base layer is prohibited**.

### Outfit Selection Principles

| Character identity | Default outfit direction |
|---|---|
| Student | school uniform / academic wear |
| Office worker | professional casual wear (shirt + pants/skirt, light suit) |
| Home/leisure | urban casual wear (hoodie/T-shirt + pants/dress) |
| Spirited/lively | sportswear / modified school uniform |
| Special occupation | corresponding professional attire (doctor/police/teacher, etc.) |
| Unspecified character description | urban everyday wear, warm color palette |

### Outfit Consistency Rules

- Clothing style must align with the 3D animation cel-shaded rendering aesthetic (warm color palette, cartoon proportions)
- Primarily warm-toned colors, no complex patterns/decoration, to facilitate later layering
- Clothing style must be fully consistent across the four views
- The base outfit is the "default daily state" — the focus remains on the face and posture
- Underwear/exposure/sexualized base layers are strictly prohibited

---

## 7. Four-View Design Sheet Specification

### View Definitions

| Position | View | Angle | Framing | Requirement | Prompt |
|---|---|---|---|---|---|
| Leftmost | Portrait close-up | Front, eye level | Top of head to collarbone | Fully shown from top of head to collarbone, not cropped, face occupies 60%+, clear facial features | portrait closeup, face detail, head to collarbone complete, no crop |
| Second from left | Front view | Front 0° | Full-body standing | Facing the camera, arms natural, fully shown from top of head to soles of feet | front view, full body head to toe, height mark |
| Second from right | Side view | Right 90° | Full-body standing | Clean, clear pure profile silhouette, fully shown from top of head to soles of feet | side view, profile, full body head to toe, height mark |
| Rightmost | Back view | Rear 180° | Full-body standing | Back of head/back/hair ends/feet clear, fully shown from top of head to soles of feet | back view, rear view, full body head to toe, height mark |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | All four views side by side in a single frame, left to right |
| Background | Clean neutral gray #E8E8E8 |
| Stance | Natural standing, feet parallel and slightly apart, arms naturally down or slightly extended |
| Full-body display | Full-body standing views must be completely shown from top of head to soles of feet; cropping the top of head or feet is strictly prohibited |
| Close-up display | The portrait close-up must be completely shown from top of head to collarbone; cropping the top of head is strictly prohibited, and hair, forehead, and chin must all be fully visible |
| Expression | Neutral, subtle expression matching the character's temperament |
| Lighting | Even soft lighting, frontal key light + fill light from both sides, no hard shadows |
| Consistency | Skin tone/body type/hairstyle/face/base clothing must be fully consistent across the four views |
| Frame ratio | Recommended 4:1 or 3:1 |

---

## 8. Prompt Template

```
{gender} character four-view design sheet, 3D animation rendering, cinema-grade lighting, vibrant cel-shaded texture, high-detail materials, joyful healing atmosphere, cartoon urban style, high-detail cartoon materials, moderate cartoon proportions, warm color palette, 8K ultra-high-definition, cinema-grade composition, soft lighting layers, bright cartoon rendering style, warm and healing,
character design sheet, character turnaround,
{facial features corresponding to the character description - naturally derived from the character description}, {overall temperament}, bare face, no makeup,
{skin tone}, soft glowing skin, translucent glowing skin, fine skin texture, cel-shaded texture,
{height description, e.g. 165cm tall, petite cute girl}, {head-to-body ratio, e.g. 6.5 heads tall proportion}, {body description}, {posture description},
{hair color}{hair length}, strand-by-strand hair definition, {base style}, no hair accessories,
{everyday outfit corresponding to the character's identity, e.g. school uniform/professional casual wear/urban casual wear}, warm color tone, no complex patterns,
side by side in one frame, left to right: portrait closeup + front view + side view + back view,
portrait closeup fully shown from top of head to collarbone, no cropping of the top of head, head to collarbone complete,
full-body standing view fully shown from top of head to soles of feet, full body head to toe, no cropping of top of head or feet,
natural standing pose, clean neutral gray background, even soft lighting, no hard shadows,
four-view consistency, finely rendered face, finely rendered hair strands
no text of any kind in the image
```


---

## 9. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Must be in a "bare face, no makeup" state |
| R2 | Must declare an appropriate everyday outfit as the base clothing according to the character description (e.g. student → school uniform, office worker → professional casual wear, home → urban casual wear); underwear as base layer is prohibited |
| R3 | Must declare "no hair accessories, no accessories" |
| R4 | Must specify a "clean neutral gray background" |
| R5 | Must specify "four-view consistency" |
| R6 | The full-body standing view must be completely shown from top of head to soles of feet; cropping is strictly prohibited |
| R7 | Must specify the character's height and constrain full-body proportions via the head-to-body ratio conversion (female default 155-165cm/6-7 heads, male default 170-180cm/6.5-7.5 heads) |
| R8 | The portrait close-up must be completely shown from top of head to collarbone; cropping the top of head is strictly prohibited |

### Prohibited

| No. | Prohibited item |
|---|---|
| X1 | Underwear/exposure/sexualized base layers; clothing clearly inconsistent with the character description; overly complex patterns/decoration that interfere with later styling layers |
| X2 | Direct overhead hard light/direct underlighting/colored light |
| X3 | Over-whitened to a bloodless look / grayish skin tone |
| X4 | Complex scene backgrounds (must be a plain gray background) |
| X5 | Exaggerated expressions/dynamic poses |
| X6 | Cropping the top of head or soles of feet in the full-body standing view; must be fully shown from head to toe |
| X7 | Cropping the top of head in the portrait close-up; must be fully shown from top of head to collarbone |
| X8 | Ignoring the height and head-to-body ratio constraints; height must be explicitly stated and full-body proportions expressed via the head-to-body ratio conversion |
