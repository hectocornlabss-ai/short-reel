---
name: liveaction_urban_character_derivative
description: Live-Action Urban character derivative asset generation · Constraint manual
metaData: liveaction_urban_art_skills
---

# Live-Action Urban Character Derivative Asset Generation · Constraint Manual

---

## 1. Styling Logic — Styling a Real Person

> Live-Action Urban does not discuss "material layering," "PBR rendering," or "modeling precision." What's discussed here is: a makeup artist working on a real face, a hairstylist handling real hair with real tools, a stylist taking a worn garment off a hanger — and then the camera capturing all of it.

1. **Makeup is a "second layer of skin," not a "facial texture map"** — Foundation blends with the skin's natural oil, eyeliner shifts slightly with the eye shape, lipstick shows uneven texture due to lip lines — makeup must feel real, as if it was "just applied"
2. **Hair is alive** — Even after styling, hair still has loose stray strands, natural volume at the roots rather than a wig-like helmet, and a natural pull mark on the scalp where a ponytail is tied tight
3. **Clothes are "worn on the body," not "worn on a mannequin"** — The shoulder line isn't necessarily perfectly symmetrical (a real stance is asymmetrical), the fabric creases naturally with body movement, the collar shows slight deformation from being put on and taken off
4. **Styling serves the face, rather than obscuring it** — The most failed styling is one where the base model becomes unrecognizable. Derivative styling should reinforce, not mask, the character's core essence

---

## 2. Styling Layers

| Layer | Content | The Live-Action Urban Understanding |
|---|---|---|
| L0 | Base Model | The base image — bare face, base hairstyle, base everyday clothing. Not modified |
| L1 | Makeup | The makeup artist's work on a real face — base makeup → brows/eyes → cheeks → lips. Intensity decided by scene |
| L2 | Hairstyling | A hairstyle done by a hairstylist with real tools — blow-dried/tied up/braided/curled + hair accessories |
| L3 | Inner Layer | The layer against the skin — T-shirt/shirt/knitwear/camisole/base layer, replacing the base outfit |
| L4 | Outer Layer/Main Outfit | The outer layer — suit/trench coat/hoodie/dress/coat/workwear, determining the overall outfit style |
| L5 | Accessories | Jewelry/headwear/glasses/scarf/bag/watch — the final step of an everyday outfit |

> **Scope boundary**: Styling layers only (makeup + hair + clothing + accessories). Does not include props (phones/coffee cups/umbrellas/books, or other handheld items), scene environment, or pose/action.

---

## 3. Makeup — the Makeup Artist's Work on a Real Face (L1)

### Core Principle

> Makeup is a "second layer of skin." The camera must be able to see the real skin underneath the makeup — pores not filled in, fine lines not smoothed away, foundation not sitting on the surface like a mask.

### Cue Analysis and Makeup Decision-Making

| Step | Processing Content |
|---|---|
| S1 | Extract user cues: scene context, emotional atmosphere, facial-state description |
| S2 | Filter out non-makeup cues: prop/scene/action words are not applied as makeup |
| S3 | Match scene → makeup intensity: bare-skin level / everyday level / occasion level / gala level |
| S4 | Generate the L1 prompt — output only the conclusion |

### Scene → Makeup Intensity Mapping

| Scene | Makeup Intensity | Core Intent |
|---|---|---|
| At home/just woken up/bare face | Bare-skin level — no makeup traces, only the skin itself | Genuine skin texture, an unretouched face |
| Everyday commute/supermarket/walking | Everyday level — light makeup that looks like "no makeup but good complexion" | Appropriate polish for work/life, unobtrusive refinement |
| Date/gathering/shopping | Occasion level — makeup that's noticeable but not excessive | Makeup with presence, but still within the "everyday life" range |
| Evening banquet/wedding/gala | Gala level — a full, polished makeup look | Makeup designed for camera and lighting, but the base makeup still shows real skin |

### Female Makeup — Matched to Face Type

#### Cool and Reserved

| Intensity | Makeup Intent | Prompt |
|---|---|---|
| Bare-skin Level | No makeup — clean, cool-white skin, naturally unshaped brows, lip color is the natural blood color of the lips | No makeup traces, natural cool-white skin texture, unshaped natural brows, lip color as the skin's natural tone |
| Everyday Level | "I may have put on a little lip balm" — extremely light nude lips, a light brow brush, no eye makeup traces | Extremely light nude lip balm, naturally brushed brow shape, no visible eye makeup, the skin's own sheen |
| Occasion Level | Red lips as the sole focal point — matte brick-red or brown-toned lipstick, restrained brows and eyes, emphasizing cool detachment | Matte brick-red lip makeup (sole focal point), a very fine eyeliner at the outer corner, a clean, crisp brow shape, near-bare makeup elsewhere |
| Gala Level | Cool smoky but not heavy — a small gray-brown smoky eye, contoured features, a matte dark-red lip, retaining bone structure | Small gray-brown smoky eye makeup, light contouring beneath the cheekbones, a matte dark-red lip, retained facial bone structure |

#### Gentle and Healing

| Intensity | Makeup Intent | Prompt |
|---|---|---|
| Bare-skin Level | Warm, luminous white skin, naturally pinkish cheeks, soft brows | Warm, luminous bare skin, naturally rosy cheeks, soft brow shape, no makeup look |
| Everyday Level | A dewy, glossy look — a luminous base, a light pink blush, a balm-like lip texture | Luminous base makeup, naturally blended pink blush, a sheer, glossy lip balm, a soft gaze |
| Occasion Level | Warm and soft — apricot-toned eyeshadow, cream blush, a mirror-glossy lip tint, an overall warm, gentle look | Naturally blended warm apricot eyeshadow, cream-textured blush, a mirror-glossy lip tint, warm and gentle |
| Gala Level | A polished warm look — champagne shimmer eye makeup, a luminous base, a rose-taupe lip, refined yet still gentle | Champagne shimmer eye makeup, a luminous highlight, a rose-taupe lip color, a refined and gentle complete makeup look |

#### Urban Sharp

| Intensity | Makeup Intent | Prompt |
|---|---|---|
| Bare-skin Level | Neutral, clean skin, crisp but unpainted brows | Neutral, clean bare skin, a crisp, unshaped brow, a natural lip color, an unretouched face |
| Everyday Level | "Office-appropriate light makeup" — a matte base, a crisp brow shape, an MLBB lip color (my lips but better) | Matte, natural base makeup, a crisply drawn brow shape, an MLBB lip color, an unobtrusive polish |
| Occasion Level | Sharp but not fierce — clearly defined eyeliner, contoured features, a low-saturation rose lip | Sharp, clearly defined eyeliner, contoured facial structure, a low-saturation rose lip, sharp and forceful |
| Gala Level | A full, polished makeup look — a matte base, structural contouring, a true-red or plum-colored lip, full presence | Matte, polished base makeup, structural contouring, a true-red/plum-colored lip, a complete look with facial structure still discernible |

#### Youthful and Energetic

| Intensity | Makeup Intent | Prompt |
|---|---|---|
| Bare-skin Level | Collagen fullness as the makeup itself — skin that's bright on its own without needing makeup | Full, collagen-rich bare skin, naturally rosy cheeks, a bright gaze, no need for makeup |
| Everyday Level | "Just perked up the complexion a bit" — a tinted lip balm, clear brow gel, an extremely light cream blush | A tinted lip balm, clear brow gel grooming, a lightly patted cream blush, an undetectable makeup look |
| Occasion Level | Bright and lively — an orange/coral-toned blush, a glossy lip tint, a light shimmer eyeshadow | An energetic orange-toned blush, a glossy lip tint, a light shimmer eyeshadow, a bright, youthful look |
| Gala Level | Polished but not aging — a sheer, luminous base, a juicy lip gloss, a slight shimmer eyeshadow, retaining a youthful quality | A sheer base retaining skin texture, a juicy lip gloss, a subtly shimmering eyeshadow, polished without masking youth |

#### Streetwise and Down-to-Earth

| Intensity | Makeup Intent | Prompt |
|---|---|---|
| Bare-skin Level | A sun-weathered face — sun-exposure marks, natural skin-tone unevenness, no makeup | A naturally sun-weathered face, genuine skin-tone unevenness, unmade-up skin, a face shaped by life itself |
| Everyday Level | "Just put on some cream before heading out" — an extremely light tinted moisturizer, natural lip color | Extremely light tinted moisturizer, an almost invisible base, natural lip color, a fresh-washed natural state |
| Occasion Level | Simple and presentable — a natural-toned lipstick, lightly groomed brows, a thin base | A natural-toned lipstick, a lightly groomed brow shape, a thin, unlayered base, plain but presentable |
| Gala Level | Dressed up but not affected — warm earth-toned eyeshadow, a brick-red/russet lip, a base that still shows skin texture | Warm earth-toned eye makeup, a brick-red/russet lip, a base retaining skin texture, dressed up without losing authenticity |

### Male Makeup

> The highest standard for men's makeup is that it "can't be detected."

| Intensity | Applicable Scene | Prompt |
|---|---|---|
| Bare-skin Level | The default state for all scenes | Genuinely unretouched male skin, natural oily sheen, clearly visible pores, real texture on a freshly shaved jaw |
| Everyday Level | Close-up shots/studio shoots/important dialogue | An extremely light, even skin tone (no visible powder feel), brows lightly groomed with clear brow gel, a natural lip color with a balm-like texture — overall makeup undetectable |
| Occasion Level | Wedding/gala/close-up shots | Even, clean skin (retaining pore texture), lightly brushed brow shape, a naturally moisturized lip color — noticeably well-groomed but no visible foundation |

---

## 4. Hairstyling — Real Hair in a Hairstylist's Hands (L2)

### Female Hairstyles

#### By Styling Method

| Styling Method | Type | Hairstyle Description | Matching Face Type |
|---|---|---|---|
| Natural Loose | Long, straight black hair | Naturally smooth, straight hair, ends slightly curved inward, a center or side part, loose strands naturally scattered on the forehead and behind the neck | Cool and Reserved/Gentle and Healing/Urban Sharp |
| Natural Loose | Loose, tousled curls | Wide, tousled curls, naturally voluminous roots, uneven curl pattern (not the uniform look of a curling iron), loose strands framing the face | Gentle and Healing/Youthful and Energetic |
| Natural Loose | Collarbone-length layered bob | Shoulder-length, layered ends with texturized cutting, one side tucked behind the ear revealing an earring, natural loose strands at the nape | Urban Sharp/Cool and Reserved |
| Natural Loose | Small, fluffy curls | Small-to-medium curls throughout, voluminous and airy, naturally lifted roots, hand-crafted rather than mechanically uniform curl pattern | Youthful and Energetic/Streetwise and Down-to-Earth |
| Tied Up | High ponytail | Tied high near the crown, naturally voluminous roots, the ponytail has a natural curve rather than falling straight, loose strands naturally scattered at the forehead and temples | Youthful and Energetic/Urban Sharp/athletic scenes |
| Tied Up | Low ponytail/low bun | Tied at the nape or behind the ear, loose but not undone, natural loose strands at the nape, a relaxed "just tied it up" feel | Gentle and Healing/Streetwise and Down-to-Earth/at-home scenes |
| Tied Up | Bun | Tied up at the crown or back of the head, loose rather than tight, loose strands framing the face and neck | At-home/everyday/athletic |
| Braided | Single side braid | A side braid, loose with a hand-crafted feel, natural loose strands woven in, a naturally frizzy braid tail | Gentle and Healing/Youthful and Energetic |
| Braided | Twin braids/pigtails | Symmetrical braids on both sides, moderate tightness, suited to a youthful look | Youthful and Energetic |
| Short | Ear-length bob | Above or below ear length, blunt or texturized ends, one side tucked behind the ear, a clean nape | Urban Sharp/Cool and Reserved |
| Short | Boyish tousled short hair | Layered, texturized short hair, a short-cropped nape, loose strands naturally scattered on the forehead | Cool and Reserved/Urban Sharp/androgynous style |

#### Hair's Real State in Front of the Camera (Shared by All Styles)

| State | Prompt |
|---|---|
| Loose Strands | Naturally scattered loose strands at the forehead, baby hairs at the temples, loose strands at the nape, a naturally uneven hairline |
| Roots | Naturally voluminous roots rather than lying flat against the scalp, scalp naturally visible at the part |
| Ends | Naturally frizzy/split ends, a natural curve at the tied-up hair's tail |
| Sheen | The natural reflective quality of healthy hair — neither greasy nor matte, a translucent, warm-toned rim on backlit hair |
| Strictly Prohibited | Wig-like uniform boundaries, CG hair with every strand distinct, no loose strands, stiff styling |

### Male Hairstyles

| Style | Description | Matching Face Type |
|---|---|---|
| Crisp Short Hair | Short on the sides, longer on top for styling, hair with a natural growth direction, forehead visible | Rugged and Mature/Urban Sharp (male face types) |
| Slightly Parted Fringe | Loose strands slightly covering the eyebrows, voluminous, layered on top, a natural transition on the sides | Sunny Youth/Warm and Reserved |
| Side-parted Short Hair | A side part, one side combed back, business-neat but not a stiff, slicked-back look | Cold and Reserved/Warm and Reserved |
| Buzz Cut/Crew Cut | Extremely short hair, scalp visible, a natural hairline, a clearly defined head shape | Rugged and Mature/Streetwise and Worldly |
| Mullet | Short in front, longer in back, longer hair left at the nape, crisp layering, a casual "didn't bother cutting it carefully" feel | Sunny Youth/Cold and Reserved |
| Medium-length Hair | Shoulder-length, worn loose or half-tied, a natural hair quality | Cold and Reserved/artistic temperament |
| Curly/Textured Hair | Naturally curly or lightly permed texture, voluminous and airy, not stiff | Sunny Youth/Warm and Reserved |

#### Hair's Real State in Front of the Camera (Shared, Male)

| State | Prompt |
|---|---|
| Short Hair Texture | Scalp visible in short-hair states, a natural hair-growth direction, a natural transition between sideburns and stubble |
| Everyday State | No stiff gel-shell feel, hair naturally voluminous or slightly flattened (consistent with everyday life), natural windblown disarray |
| Hairline | A natural hairline (allowing slight receding), possible slight thinning at the temples, not wig-like neatness |
| Strictly Prohibited | A reflective, gel-shell sheen, wig-like uniform boundaries, CG hair strands, an unnaturally perfect hairstyle |

---

## 5. Clothing — Genuine Outfits, Not Modeled Garments (L3+L4)

### The Live-Action Urban Clothing Logic

> 3D projects discuss "material rendering," "PBR physical properties," "multi-layer mesh assembly." Live-Action Urban discusses: where was this garment bought? How many times has it been worn? Why was it chosen today?

- **Layering comes from weather and occasion, not from "design layers"**: a shirt over a T-shirt because of a big morning-evening temperature swing, a trench coat because it's windy today, a knit cardigan because the office air-conditioning is too cold
- **Clothes show signs of wear**: a slightly deformed collar, friction marks at the cuffs, stretch texture at the knees of jeans, a white T-shirt slightly faded after washing
- **Fitted, not tight**: clothes hug the body without being tight, the shoulder line sits in a natural position (which may shift slightly with posture), pant length is just right or slightly pools over the shoes
- **Genuine contemporary Chinese urban outfits** — not Korean drama style, not Japanese street style, not Western street fashion

### Female Clothing Matrix

| Outfit Style | Core Items | Applicable Scene | Prompt |
|---|---|---|---|
| Work Commute | Blazer/shirt/cigarette pants/midi skirt/trench coat | Office, business meetings, daily commute | A work-commute outfit, a blazer + shirt + straight-leg dress pants, camel/navy/black tones, natural fabric drape, fitted but not tight |
| Casual Everyday | T-shirt/hoodie/jeans/wide-leg pants/knit cardigan | Weekend outings, grocery shopping, cafes, walking | A casual everyday outfit, a loose hoodie + straight-leg jeans, off-white/gray/khaki tones, a natural cotton texture |
| Gentle Date-night | Knit dress/floral skirt/cashmere cardigan/French-style shirt | Dates, friend gatherings, afternoon tea | A gentle date-night outfit, a knit dress + a short cardigan, cream/dusty-pink/pale-apricot tones, a soft fabric texture |
| Street Trendy | Oversized hoodie/cargo pants/denim jacket/baseball cap | Shopping, trendy hangouts, music festivals, nightlife | A street trendy outfit, an oversized hooded sweatshirt + wide-leg cargo pants, black/gray/army-green tones, casual with attitude |
| Sporty Outdoor | Yoga pants/sports bra/quick-dry T-shirt/windbreaker/sneakers | Gym, outdoor running, cycling, hiking | An athletic outfit, yoga pants + a sports bra + a loose quick-dry T-shirt, dark tones, a natural functional-fabric texture |
| Literary Academic | A knit vest over a shirt/pleated skirt/canvas shoes/wool short coat | Campus, bookstore, library, exhibitions | A literary academic outfit, a knit vest layered over a shirt + a pleated skirt, navy/burgundy/plaid, a bookish air |
| Cozy at Home | Loose cotton loungewear/knit robe/plush jacket | Everyday at home, mornings, late nights | A loungewear outfit, a loose long-sleeve top + lounge pants, off-white/light gray/pale blue, a soft, skin-friendly texture |

### Male Clothing Matrix

| Outfit Style | Core Items | Applicable Scene | Prompt |
|---|---|---|---|
| Business Formal | Suit/white shirt/tie/formal leather shoes | Business meetings, formal occasions, important meetings | A business-formal outfit, a dark-gray/navy suit + white shirt, a fitted cut, crisp, well-draping fabric |
| Business Casual | Casual blazer + crew-neck T-shirt/knitwear + casual trousers | Daily commute, semi-business occasions | A business-casual outfit, a casual blazer + a white crew-neck T-shirt + khaki casual trousers, no tie, relaxed yet composed |
| Everyday Casual | Solid-color T-shirt/Henley long sleeve/hoodie + straight-leg jeans | Weekends, everyday life, all informal occasions | An everyday casual outfit, a solid cotton T-shirt + straight-leg jeans, black/white/gray/navy, a naturally comfortable fabric |
| Street Trend | Printed hoodie/cargo pants/denim jacket/canvas shoes | Shopping, gatherings, nightlife | A street-trend outfit, a printed hoodie + cargo joggers, black/army-green/gray tones, relaxed with attitude |
| Athletic/Functional | Quick-dry T-shirt/athletic shorts/track pants/sneakers | Gym, running, basketball court | An athletic outfit, a quick-dry T-shirt + athletic shorts, black/dark gray, a functional fabric texture |
| Literary and Cool | Drop-shoulder shirt/loose knitwear/wide-leg dress pants/canvas shoes | Bookstore, exhibitions, cafes | A literary outfit, a drop-shoulder cotton shirt + loose dress pants, earth tones/off-white/navy, an understated texture |

---

## 6. Accessories — the Final Step of an Everyday Outfit (L5)

### Female Accessories

| Category | The Live-Action Urban Accessory Logic | Prompt |
|---|---|---|
| Earrings | Not "metal drop earrings" — but "the pair grabbed on the way out today." Mostly small and simple, matching the outfit style | Small silver stud earrings/thin metal hoop earrings/pearl studs/acrylic geometric drop earrings — paired with {outfit style} |
| Necklaces | A collarbone chain or medium-length necklace, following the neck's natural curve, neither floating nor digging into the skin | A delicate collarbone chain/thin metal pendant chain/short pearl necklace — naturally resting against the neck |
| Watch/Hand Jewelry | A daily-wear watch, a thin bracelet, or a ring, with signs of use (a naturally bent watch strap, slight metal wear) | A leather-strap watch/thin metal bracelet/simple ring — a daily-wear texture, with signs of use |
| Headwear | Baseball cap/beret/knit beanie — a naturally curved brim, signs of wear on the crown | A baseball cap (naturally curved brim)/a beret (worn at a slight tilt)/a knit beanie (soft texture) |
| Glasses | Optical glasses or sunglasses, a natural frame material, the lenses with slight reflection but the eyes still visible | Thin metal frames/acetate frame glasses, lenses with slight reflection but the eyes still visible |
| Bags | A genuine everyday commute/travel bag — leather with wear creases, canvas naturally faded | A leather shoulder bag (natural wear creases)/a canvas tote bag (slightly faded)/a small crossbody bag |

### Male Accessories

| Category | Prompt |
|---|---|
| Watch | A daily-wear watch — a naturally worn metal strap/bent leather strap marks/a simple dial |
| Glasses | Thin metal frames/acetate frame glasses, slight lens reflection, nose pads naturally fitted |
| Headwear | Baseball cap/knit beanie — a naturally worn state, a slightly curved brim, an everyday used feel |
| Backpack | A backpack/messenger bag — canvas or leather material, signs of use, naturally bent straps |

---

## 7. Styling Combination Quick Reference

| Scene | Makeup Intensity | Hairstyle | Outfit Style | Accessories |
|---|---|---|---|---|
| At Home, Just Woken Up | Bare-skin level | Naturally loose/casually tied up | Cozy at home | Minimal or none |
| Commuting to Work | Everyday level | Crisp loose hair/low ponytail/side-parted short hair | Work commute/business casual | Watch + simple bag |
| Weekend Outing | Everyday level | Loose tousled curls/slightly parted fringe/mullet | Casual everyday | Bag + hat + watch |
| Meeting for a Date | Occasion level | Gentle curls/collarbone-length bob/side part | Gentle date-night/literary academic | Earrings + necklace + bag |
| Cafe/Bookstore | Everyday level | Naturally loose/layered bob/medium-long hair | Literary academic/literary and cool | Glasses + canvas bag |
| Gym/Outdoors | Bare-skin level | High ponytail/bun/buzz cut | Sporty outdoor/athletic functional | Sports watch + headband |
| Evening Banquet/Gala | Gala level | Polished curls/updo/side-parted slicked hair | Formal wear (dress/suit) | Earrings + necklace + hand jewelry + a refined bag |
| Alone Late at Night | Bare-skin level | Casually loose/slightly messy | Cozy at home | None |
| Street Night Market | Occasion level | Small fluffy curls/boxer braids/mullet | Street trendy/street trend | Earrings + baseball cap |
| Hospital/Formal Occasion | Everyday level | Crisp tied-up hair/crisp short hair | A simple, plain-colored outfit | Minimal |

> **Rule for inferring uncovered scenes**: first determine whether the scene is private or public (private → bare-skin level, public → start at everyday level); then determine the formality level (formal occasion → occasion level/gala level); finally consider the mood (romantic/social → occasion level). Makeup is matched to face type (see Section 3), and the outfit is matched to the scene's temperature and atmosphere.

---

## 8. Character Portrait Series — Four-Angle Photography Specification

> After derivative styling is layered on, a four-angle studio series must still be output, ensuring the makeup, hairstyle, and outfit remain consistent and recognizable across all real-shot angles.

### Four-Angle Definitions

| Position | Angle | Shot Type | Photographic Requirement |
|---|---|---|---|
| Far Left | Front close-up | Top of head to upper collarbone | The face occupies 60%+, makeup detail clearly visible (foundation blending with skin, eyeliner precision, lip-color texture). Focal length 50-85mm |
| Second Left | Front 0° | Full body | The complete front view of the outfit, showing the fabric's drape, layering, and accessories in full. Fully shown from head to toe |
| Second Right | Right 90° | Full body | The side silhouette + the side layering of the outfit, the hairstyle's side profile. Fully shown from head to toe |
| Far Right | Rear 180° | Full body | The full back-of-head hairstyle, the back of the outfit, the back of the bag/headwear. Fully shown from head to toe |

### Frame Specification

| Item | Photographic Requirement |
|---|---|
| Layout | The four angles arranged side by side left to right in the same frame, evenly spaced. Presented as a "styling confirmation photo" layout |
| Background | Neutral gray seamless backdrop paper #B0B0B0, no light flares, no gradient, no cast shadow |
| Stance | Maintain the base model's stance — a natural, weight-shifted everyday stance, not at attention, not posed. **Changing the posture due to the outfit change is prohibited** |
| Facial Expression | A micro-expression matching the makeup intensity and scene mood — neutral and natural at bare-skin level, a faint hint of a smile at occasion level, calm confidence at gala level. **Facial micro-expression only, no body movement involved** |
| Lighting | Studio soft lighting — a front soft-box key light + dual side fill panels. Soft, directionally clear lighting, a lighting ratio of about 1:2 to 1:3, retaining facial dimensionality. The texture of clothing and accessory materials clearly visible |
| Consistency | The four angles are a continuous photographic record of the same person, from the same styling shoot. Face/makeup/hairstyle/outfit/accessories all present as the same shoot |
| Aspect Ratio | Recommend 4:1 or 16:4 widescreen |

---

## 9. Prompt Template

### Output Format Constraints

| Item | Constraint |
|---|---|
| Output Content | **Output only the prompt text** — no analysis process, option comparisons, quick-reference tables, or constraint explanations |
| Prohibited Content | Must not include any scene/environment/weather/background description |
| Prohibited Props | Must not include any handheld/interactive objects (props are a separate asset category) |
| Prohibited Pose Changes | Do not change the base model's stance; do not output any action/posture change |
| Format | Output the complete, usable prompt directly |

### Full Styling-Layer Prompt Template

```
Using the character's base image as the source, layer styling on top via img2img,
a Live-Action Urban character styling portrait series, live-action photography, studio soft lighting, seamless grey backdrop,
{gender} character portrait series, live-action photographic style, not 3D, not rendered, not CG,
character portrait series, live-action photography, studio soft lighting,
keep the base model's face unchanged, {overall temperament},
[L1 · Makeup] {makeup intensity — bare-skin level/everyday level/occasion level/gala level}, {makeup description}, makeup blended into real skin, foundation not mask-like, skin pore texture still visible,
[L2 · Hairstyle] {hairstyle description}, genuine hair texture, {description of loose strands/roots/ends real-life state}, not a wig, not CG hair strands,
[L3+L4 · Outfit] {outfit style}, {top description} + {bottom description}, {color}, {natural fabric texture}, natural garment drape, real wear creases, not a sample garment,
[L5 · Accessories] {accessory description}, a daily-wear texture, signs of use, naturally fitted to the body,
same frame arranged left to right: close-up + front full body + side full body + back full body,
a natural everyday stance (weight shifted), a neutral gray seamless backdrop #B0B0B0, even studio soft lighting, a soft lighting ratio,
the four angles are a continuous photographic record of the same styling shoot,
a clean frame with no text, no watermark, no signature, no border,
live-action realistic photography quality, 35mm full-frame photographic texture
```

### Negative Prompt

```
3D render, 3D modeling, CGI, Unreal Engine, Blender, PBR material, 8K modeling, game engine, cartoon, anime, 2D, illustration, hand drawn, painting,
plastic skin, wax face, silicone skin, airbrushed skin, perfect smooth skin, poreless, doll-like, mannequin,
symmetrical pose, mannequin pose, runway pose, model stance, military stance, exaggerated pose, action pose,
heavy makeup, dramatic makeup, makeup mask, foundation mask, fake lashes, colored contacts,
wig, fake hair, helmet hair, stiff hair, perfect hairline, CG hair strands,
brand new clothes, showroom clothes, stiff fabric, unrealistically clean, no wrinkles, mannequin clothes,
period costume, ancient style, hanfu, xianxia, wuxia, Republic era, cyberpunk, sci-fi, Western fantasy, medieval,
text, watermark, signature, logo, border, frame
```

---

## 10. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The face after layering must be consistent with the base model — styling serves the face, and does not obscure it |
| R2 | Makeup must blend into real skin — foundation not mask-like, pore texture still visible, not AI-smooth |
| R3 | The hairstyle must present genuine hair quality — loose strands, root volume, frizzy ends, not a wig, not CG hair strands |
| R4 | Clothing must show genuine wear marks — natural creases, fabric drape, not a sample garment, not fresh off the factory line |
| R5 | Accessories must have a daily-wear feel — fitted to the body, signs of use, not floating, not embedded in the skin |
| R6 | Must output a four-angle studio series (close-up + front + side + back full body) |
| R7 | Must specify "a neutral gray seamless backdrop paper #B0B0B0"; adding scene environment is prohibited |
| R8 | Must specify "the four angles are a continuous photographic record of the same styling shoot" |
| R9 | **Output only the prompt** — no analysis process, quick-reference tables, option comparisons, or any other non-prompt content |
| R10 | **No prop interaction** — no handheld items; props are a separate asset category |
| R11 | **Posture remains unchanged** — maintain the base model's stance; do not add any action/posture description |
| R12 | **No scene/environment description** — scenes are a separate asset category |
| R13 | L1 must be decided according to the scene → makeup intensity mapping: bare-skin level / everyday level / occasion level / gala level |
| R14 | All derivative assets require a styling plan — under normal circumstances, do not remain fully bare-faced/bare-clothed; at minimum reach everyday level |

### Strictly Prohibited

| No. | Prohibited |
|---|---|
| X1 | Strictly prohibit all CG terminology such as "3D rendering / 3D modeling / CG / PBR materials / 8K modeling / UE engine / Blender" |
| X2 | Strictly prohibit non-photographic media such as "2D hand-drawn / illustration / animation / anime" |
| X3 | Strictly prohibit "over-smoothed skin / silicone face / wax-figure mask / poreless / AI-smooth skin" — real skin must exist beneath the makeup |
| X4 | Strictly prohibit "wig / CG hair with every strand distinct / stiff, uniform hair / no loose strands" |
| X5 | Strictly prohibit "sample garments / brand-new, crease-free clothing / floating clothing / mannequin-like outfits" |
| X6 | Strictly prohibit "model-style symmetrical stances / runway poses / military at-attention / exaggerated actions" |
| X7 | Strictly prohibit "heavy makeup covering the base model's face to the point of unrecognizability" |
| X8 | Strictly prohibit non-contemporary-urban clothing such as "ancient style / hanfu / xianxia / wuxia / Republic-era / cyberpunk / sci-fi / Western fantasy" |
| X9 | Strictly prohibit "exposure / see-through clothing / vulgarity / borderline content / violence and gore" |
| X10 | Strictly prohibit "watermarks / text / logos / signatures / borders / traces of AI generation" |
