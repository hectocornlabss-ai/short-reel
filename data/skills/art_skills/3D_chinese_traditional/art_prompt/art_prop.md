---
name: art_prop
description: Prop image generation · Constraint manual
metaData: art_skills
---

# Prop Image Generation · Constraint Manual

---

## 1. Prop Design Principles

1. **Legible Function** — The prop's purpose must be instantly clear; form serves function
2. **Ultimate Texture** — Material texture must be clearly distinguishable (metal/jade/wood/cloth/paper)
3. **Era Consistency** — All props must fit the ancient-style world setting; modern elements are prohibited
4. **Clear Scale** — Hint at the prop's true size via reference objects or markers
5. **Pure Prop, Standalone Display** — Only the prop itself may appear in the frame; any person, hand, or limb is strictly prohibited; the prop must not be held/worn/gripped, and must be presented independently as a still-life display

---

## 2. Prop Categories and Aesthetic Constraints

### 2.1 Weapons

| Item | Constraint | Prompt |
|---|---|---|
| Type | Sword/blade/bow/spear/fan | {weapon type}, ancient-style weapon |
| Material | Refined steel/dark iron + gem inlay + silk sword tassel | forged refined steel, gem inlay |
| Decoration | Carved scabbard/hilt, tassels, subtle patterns | exquisite carving, hanging tassels |
| Sheen | Cold metallic sheen, reflective blade edge | cold sheen, metallic texture |
| Prompt | Ancient-style {weapon}, forged refined steel, exquisite carving | — |

### 2.2 Jewelry and Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Type | Hairpin/hair clasp/beaded pendant/jade pendant/bracelet/earrings | {accessory type}, ancient-style jewelry |
| Material | Gold/silver/jade/pearl/gemstone | gold filigree, translucent jade |
| Craftsmanship | Ultra-fine detail, filigree/wire inlay/gem setting | fine craftsmanship, intricate carving |
| Sheen | Pearlescent/jade luster/metallic sheen | lustrous pearl, metallic sheen |
| Prompt | Ancient-style {accessory}, {material}, fine craftsmanship, intricate carving | — |

### 2.3 Everyday Objects

| Item | Constraint | Prompt |
|---|---|---|
| Type | Tea set/wine vessel/incense burner/chessboard/scroll/lantern | {object type}, ancient-style object |
| Material | Porcelain/bronze/bamboo/wood/paper | warm celadon, rustic bronze |
| Texture | Clear glaze/wood grain/bamboo joints | glossy glaze, clear wood grain |
| Style | Plain and elegant / lavish and refined, switched by scene | plain and rustic / lavish and exquisite |
| Prompt | Ancient-style {object}, {material} texture, clear texture detail | — |

### 2.4 Keepsakes / Key Story Props

| Item | Constraint | Prompt |
|---|---|---|
| Type | Keepsake/token/scroll/medicine vial/jade seal | {prop type}, ancient-style prop |
| Specialness | Must be distinctive, carrying narrative symbolism | distinctive design, deep symbolic meaning |
| Aging | Aged appearance may be added as the story requires | aged and weathered / brand-new and exquisite |
| Prompt | Ancient-style {prop}, {material}, {condition}, distinctive design | — |

---

## 3. Multi-Angle Reference Sheet Specification

### View Definitions

| Position | View | Angle | Requirement | Prompt |
|---|---|---|---|---|
| Top-left | Front View | Front 0° | Complete front-facing form of the prop | front view |
| Top-right | Side View | Side 90° | Clear thickness/silhouette/structure | side view |
| Bottom-left | Back View | Rear 180° | Prop's back structure/decoration | back view |
| Bottom-right | Detail Closeup | Localized zoom | Material texture/craftsmanship detail | detail closeup |

### Composition Specification

| Item | Constraint |
|---|---|
| Layout | Same frame, 2x2 grid, four angles arranged top/bottom/left/right |
| Background | Plain gray solid color #B8B8B8 |
| Lighting | Even soft light, no hard shadows |
| Proportion | Prop occupies 70%+ of each grid cell |
| Shadow | A natural, subtle ground shadow is allowed |
| Aspect Ratio | 1:1 recommended |

---

## 4. Material Rendering Constraints

| Material | Rendering Requirement | Prompt |
|---|---|---|
| Metal | Reflection/highlight/cold sheen, faint scratches visible | metallic texture, cold sheen, clear reflection |
| Jade | Internal light transmission, warm, subtly translucent | translucent jade, warm and lustrous |
| Wood | Clear wood grain, visible growth rings | clear wood grain, warm texture |
| Porcelain | Glossy glaze, uniform tone | glossy glaze, warm porcelain texture |
| Cloth/Paper | Fiber texture, natural edges | fabric texture, rustic paper texture |
| Gemstone | Refraction/internal light, clear facets | brilliant gemstone, refracted light |

---

## 5. Prompt Template

Ancient-style prop reference sheet, 3D rendering style, high-precision modeling, PBR materials, Chinese Traditional 3D, cinematic-grade lighting,
{prop type}, {material description}, {craftsmanship/decoration description}, {condition description},
pure prop still-life display, prop shown independently, not held by anyone, not worn by anyone,
same frame, 2x2 grid: top-left front view + top-right side view + bottom-left back view + bottom-right detail closeup,
plain gray solid color background, even soft light, no hard shadows,
ultra-clear material texture, PBR material rendering, {material sheen description}
no text of any kind in the image,
no person, hand, finger, or limb may appear in the frame, the prop must not be held or worn

---

## 6. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Must specify "plain gray solid color background" |
| R2 | Must clearly specify the prop's material and craftsmanship |
| R3 | Prop design must fit the ancient-style world setting |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Complex scene backgrounds |
| X2 | A prop appearing together with a person in the same frame (this stage is pure prop imagery) |
| X3 | Any appearance of a person, including full body, half body, or partial (hand, finger, arm, or other limb) |
| X4 | The prop being held, gripped, worn, or in use |
| X5 | Any element hinting at a person's presence (e.g. handling marks, a wearing-perspective angle, a usage pose) |
