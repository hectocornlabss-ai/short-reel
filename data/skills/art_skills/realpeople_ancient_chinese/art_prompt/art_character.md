# Character Base Model Generation · Constraint Manual


---

## 1. Base Model Principles

1. **The face is the soul** — Facial features are the character's only anchor point, rendered at pore-level detail
2. **Character-driven** — The base outfit is determined by the character description (identity/occupation/gender/scene) as their regular clothing; specific costume/makeup details are layered on afterward
3. **Four-view consistency** — Face/body type/hairstyle/base clothing must be highly consistent across all views
4. **Cool and reserved, yet expressive** — Even in the no-makeup state, the character's temperament (cool/gentle/alluring) must come through

---

## 2. Facial Constraints

> Facial feature parameters are not fixed; instead, the character description (gender/age/personality/temperament) drives the AI to freely generate facial features, ensuring visual differentiation between characters.

### General Requirements

| Item | Constraint |
|---|---|
| Facial features | Naturally derived from the character description; face shape/eye shape/eyebrow shape/nose shape/lip shape are not preset |
| Style base | Photorealistic ancient-style photography, pore-level fine rendering, natural lighting, physically accurate light and shadow |
| Temperament | Overall temperament keywords must be extracted from the character description (e.g. cool/gentle/alluring/heroic) and written into the prompt |
| Expression | Neutral micro-expression matching the character's temperament |

---

## 3. Skin Texture Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Skin tone | Cool white skin, uniform all over, translucently pale | cool white skin, milky skin, milky white skin |
| Sheen | Dewy glass skin, inner luminosity, neither matte nor oily | dewy glossy skin, luminous skin, dewy skin |
| Texture | Fine and delicate, subtle visible pores retained | fine delicate skin, subtly visible pores |
| Exposed skin | Face/neck/collarbone/hands | graceful neck and shoulder line, fair luminous skin |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Skin tone | Fair and luminous, with a healthy tone, uniform all over | fair luminous skin tone, creamy skin |
| Sheen | Fresh dewy glow, natural sheen | dewy glossy skin, fresh luminous skin |
| Texture | Clean and crisp, visible pores | fine delicate skin texture, crisp clean features |

---

## 4. Body Type Constraints

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 160-170cm, expressed via head-to-body ratio | {height}cm tall, {height description, e.g. tall slender woman} |
| Head-to-body ratio | 7 to 8 heads tall, head-to-body ratio = height ÷ head length; strictly constrains full-body proportions | 7-8 heads tall proportion, slender figure |
| Height conversion | Head length = height ÷ head-to-body ratio (e.g. 165cm ÷ 7.5 = 22cm head length), used to constrain the proportions of the head and each body segment | well-proportioned figure, harmonious head-to-body ratio |
| Shoulders/neck | Swan neck, graceful neck and shoulder line | swan neck, graceful neck and shoulders |
| Hands | Slender and fair, well-defined knuckles, five normal fingers | slender jade-like hands, well-defined knuckles |
| Posture | Classical lady-like bearing, demure and dignified | dignified bearing, elegant posture |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Height | Specified by character setting, default range 175-185cm, expressed via head-to-body ratio | {height}cm tall, {height description, e.g. tall imposing man} |
| Head-to-body ratio | 7.5 to 8.5 heads tall, head-to-body ratio = height ÷ head length; strictly constrains full-body proportions | 7.5-8.5 heads tall proportion, tall figure |
| Height conversion | Head length = height ÷ head-to-body ratio (e.g. 180cm ÷ 8 = 22.5cm head length), used to constrain the proportions of the head and each body segment | well-proportioned figure, harmonious head-to-body ratio, broad shoulders narrow waist |
| Shoulders/neck | Broad shoulders, strong neck | broad shoulders, narrow waist |
| Hands | Well-defined knuckles, broad palms, five normal fingers | well-defined knuckle joints |
| Posture | Warrior/scholar bearing (per character) | upright posture, composed bearing |

### Height-to-Head-Ratio Conversion Reference

| Height (cm) | Head-to-body ratio | Head length (cm) | Applicable description |
|---|---|---|---|
| 155-160 | 7.0 | ~22cm | Petite and delicate |
| 160-165 | 7.0-7.5 | ~22cm | Slim and slender |
| 165-170 | 7.5 | ~22cm | Tall and elegant (female default) |
| 170-175 | 7.5-8.0 | ~22cm | Slender and upright |
| 175-180 | 8.0 | ~22.5cm | Tall and handsome (male default) |
| 180-185 | 8.0-8.5 | ~22cm | Imposing and upright |
| 185-190 | 8.5 | ~22cm | Tall and mighty |

---

## 5. Base Hairstyle Constraints

> Only natural loose hair/simple tied-up hair is defined here; hair accessories are layered on during the costume derivative stage.

### Female

| Item | Constraint | Prompt |
|---|---|---|
| Hair color | Pure black, no brown/highlights | long black hair, ink-black hair like a waterfall |
| Hair length | Waist-length or longer | waist-length long hair |
| Hair texture | Every strand distinct, clear individual strands | hair strands clearly defined, finely rendered hair strands |
| Style | Natural loose hair, center/side part, no hair accessories | long hair falling naturally, raven hair like a waterfall |

### Male

| Item | Constraint | Prompt |
|---|---|---|
| Hair color | Pure black or ink-black | ink-black hair, hair black as ink |
| Hair length | Medium-long to long | long hair, shoulder-length hair |
| Hair texture | Every strand distinct, clear texture | hair strands clearly defined, finely rendered hair strands |
| Style | Natural loose hair or half tied-up, no hair crown | long hair falling naturally, half tied-up long hair |

---

## 6. Base Clothing Constraints

> The base outfit is determined by the character description (identity/dynasty/occupation/scene) as the most natural regular clothing for that character's "everyday default state"; formal attire/special derivative outfits are layered on during the costume derivative stage. **Underwear-only base is prohibited.**

### Clothing Selection Principles

| Character Identity | Default Clothing Direction |
|---|---|
| Noble maiden/young lady | Plain-colored hanfu long skirt (light and flowing) |
| Young master/scholar | Plain-colored hanfu long robe |
| Warrior/swordsman | Light martial attire / informal battle robe |
| Commoner/townsfolk | Plain short jacket / coarse-cloth outfit |
| Palace maid/servant girl | Simple palace attire / maidservant's dress |
| Character description unspecified | Plain-colored everyday hanfu (long skirt/long robe matched by gender) |

### Clothing Consistency Rules

- Clothing style must align with the photorealistic ancient-style aesthetic (traditional Chinese color tones, realistic materials)
- Colors are low-saturation, with no complex patterns/decorations, to make later layering easier
- Clothing style must be completely consistent across all four views
- The base outfit is the "everyday default state"; the focus remains on the face and posture
- Underwear/exposure/sexualized base clothing is strictly prohibited

---

## 7. Four-View Reference Sheet Specification

### View Definitions

| Position | View | Angle | Shot Type | Requirement | Prompt |
|---|---|---|---|---|---|
| Far left | Portrait close-up | Front, eye-level | Top of head to collarbone | Fully shown from top of head to collarbone with no cropping, face occupies 60%+, facial features clear | portrait closeup, face detail, head to collarbone complete, no crop |
| Second left | Front view | Front 0° | Full body standing | Facing camera, arms natural, fully shown from head to toe | front view, full body head to toe, height mark |
| Second right | Side view | Right 90° | Full body standing | Pure profile silhouette clear, fully shown from head to toe | side view, profile, full body head to toe, height mark |
| Far right | Back view | Rear 180° | Full body standing | Back of head/back/hair ends/feet clearly shown, fully shown from head to toe | back view, rear view, full body head to toe, height mark |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four views arranged side by side left to right in the same frame |
| Background | Clean neutral gray #E8E8E8 |
| Stance | Natural standing, feet parallel with slight gap, arms hanging naturally or slightly spread |
| Full body display | Full-body standing figure must be fully shown from top of head to soles of feet; cropping the top of the head or feet is strictly prohibited |
| Close-up display | Portrait close-up must be fully shown from top of head to collarbone; cropping the top of the head is prohibited, hair, forehead, and chin must all be complete |
| Expression | Neutral micro-expression matching the character's temperament |
| Lighting | Even soft light, front key light + dual side fill lights, no hard shadows |
| Consistency | Skin tone/body type/hairstyle/face/base clothing fully consistent across all four views |
| Aspect ratio | Recommended 4:1 or 3:1 |

---

## 8. Prompt Template

```
{gender} character four-view reference sheet, photorealistic photography, photorealistic ancient-style documentary look, strong contrast, extreme detail,
character design sheet, character turnaround,
{facial features corresponding to character description - naturally derived from character description}, {overall temperament}, bare face no makeup,
{skin tone}, dewy glossy skin, skin translucently glowing, fine delicate skin, subtly visible pores,
{height description, e.g.: 170cm tall, tall slender woman}, {head-to-body ratio, e.g.: 7.5 heads tall proportion}, {body description}, {posture description},
{hair color}{hair length}, hair strands clearly defined, {base style}, no hair accessories,
{regular hanfu outfit corresponding to character identity, e.g.: plain-colored long skirt/plain-colored long robe/light martial attire/coarse-cloth short jacket}, traditional Chinese low-saturation color tones, no complex patterns,
same frame arranged left to right: portrait closeup + front view + side view + back view,
portrait closeup fully shown from top of head to collarbone, not cropping the top of the head, head to collarbone complete,
full body standing figure fully shown from top of head to soles of feet, full body head to toe, not cropping the top of the head or feet,
standing naturally, clean neutral gray background, even soft lighting, no harsh shadows,
four-view consistency, delicately rendered face, delicately rendered hair strands
no text of any kind should appear in the image
```

---

## 9. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Must be in a "bare face, no makeup" state |
| R2 | Must declare an appropriate regular hanfu outfit as the base clothing according to the character description (e.g. noble maiden → plain-colored long skirt, scholar → plain-colored long robe, warrior → light martial attire); underwear-only base is prohibited |
| R3 | Must declare "no hair accessories, no accessories" |
| R4 | Must specify "clean neutral gray background" |
| R5 | Must specify "four-view consistency" |
| R6 | The full-body standing figure must be fully shown from head to toe; cropping is strictly prohibited |
| R7 | Must declare the character's height and constrain full-body proportions via the head-to-body ratio conversion (female default 160-170cm/7-8 heads, male default 175-185cm/7.5-8.5 heads) |
| R8 | The portrait close-up must be fully shown from the top of the head to the collarbone; cropping the top of the head is strictly prohibited |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Underwear/exposure/sexualized base clothing; clothing clearly inconsistent with the character description; overly complex patterns/decorations that interfere with later costume layering |
| X2 | Harsh overhead light/harsh underlighting/colored light |
| X3 | Excessive whitening to the point of looking bloodless / grayish skin tone |
| X4 | Complex scene backgrounds (must be pure gray background) |
| X5 | Exaggerated expressions/dynamic poses |
| X6 | Cropping the top of the head or soles of the feet in the full-body standing figure; must be fully shown from head to toe |
| X7 | Cropping the top of the head in the portrait close-up; must be fully shown from top of head to collarbone |
| X8 | Ignoring height and head-to-body ratio constraints; height must be explicitly declared and full-body proportions expressed via the head-to-body ratio conversion |

