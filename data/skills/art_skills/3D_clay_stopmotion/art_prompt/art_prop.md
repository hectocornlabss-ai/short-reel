# Claymation Stop-Motion Prop Image Generation · Constraint Handbook

---

## 1. Prop Design Principles

1. **Function must be legible** — The prop's purpose must be immediately obvious; form serves function
2. **Extreme clay texture** — Material texture must be clearly distinguishable (clay/wood/fabric/paper)
3. **Era consistency** — All props must fit the ancient-style/fantasy world setting; modern elements are prohibited
4. **Clear scale** — Imply the prop's true size through reference objects or visual cues
5. **Pure standalone prop display** — Only the prop itself may appear in the image; any person, hand, or limb is strictly prohibited

---

## 2. Prop Categories and Aesthetic Constraints

### 2.1 Weapons

| Item | Constraint | Prompt Fragment |
|---|---|---|
| Type | Sword/blade/bow/spear/fan | {weapon type}, ancient-style weapon |
| Material | Clay-sculpted + simple metal decoration + silk sword tassel | clay texture, refined metal decoration |
| Decoration | Sheath/hilt engraving, tassels, subtle patterns | refined engraving, draping tassels |
| Sheen | Matte clay texture, metal parts slightly reflective | matte clay, slight metallic sheen |
| Prompt Fragment | Ancient-style {weapon}, clay texture, refined engraving | — |

### 2.2 Jewelry/Accessories

| Item | Constraint | Prompt Fragment |
|---|---|---|
| Type | Hairpin/hair stick/tassel necklace/jade pendant/bracelet/earrings | {accessory type}, ancient-style jewelry |
| Material | Clay + simple metal/beaded strings/gemstones | clay material, simple metal decoration |
| Craftsmanship | Delicate and refined, clear patterns | refined craftsmanship, clear patterns |
| Sheen | Matte clay texture, slight metallic shimmer | matte clay, slight metallic sheen |
| Prompt Fragment | Ancient-style {accessory}, {material}, refined craftsmanship | — |

### 2.3 Everyday Objects

| Item | Constraint | Prompt Fragment |
|---|---|---|
| Type | Tea set/wine vessel/incense burner/chessboard/scroll/lantern | {object type}, ancient-style object |
| Material | Clay/wood/ceramic | clay texture, wood grain texture |
| Texture | Clear glaze/wood grain/bamboo joints | clear texture, smooth warm feel |
| Style | Switches between plain/elegant and warm/refined by scene | plain and rustic / warm and refined |
| Prompt Fragment | Ancient-style {object}, {material} texture, clear texture | — |

### 2.4 Keepsakes/Key Story Props

| Item | Constraint | Prompt Fragment |
|---|---|---|
| Type | Keepsake/token/scroll/medicine vial/jade seal | {prop type}, ancient-style prop |
| Distinctiveness | Must be recognizable, carry narrative/symbolic meaning | unique form, deeply symbolic |
| Aging | Aged look may be added as needed by the story | worn and weathered / brand new and refined |
| Prompt Fragment | Ancient-style {prop}, {material}, {condition}, unique form | — |

---

## 3. Multi-Angle Reference Sheet Specification

### View Definitions

| Position | View | Angle | Requirement | Prompt Fragment |
|---|---|---|---|---|
| Top left | Front view | Front 0° | Complete front-facing form of the prop | front view |
| Top right | Side view | Side 90° | Thickness/outline/structure clear | side view |
| Bottom left | Back view | Rear 180° | Back structure/decoration of the prop | back view |
| Bottom right | Detail closeup | Local zoom | Material texture/craftsmanship detail | detail closeup |

### Composition Specification

| Item | Constraint |
|---|---|
| Layout | Same image in a 2×2 grid, four angles top/bottom/left/right |
| Background | Clean neutral gray #E8E8E8 |
| Lighting | Warm soft light, no hard shadows |
| Proportion | Prop occupies 70%+ of the main subject area in each cell |
| Shadow | Natural subtle ground shadow allowed |
| Aspect ratio | Recommended 1:1 |

---

## 4. Material Rendering Constraints

| Material | Rendering Requirement | Prompt Fragment |
|---|---|---|
| Clay | Matte texture, fingerprint indentations slightly visible | matte clay texture, matte clay |
| Wood | Clear wood grain, visible growth rings | clear wood grain, smooth warm feel |
| Metal | Slight reflection, no overly strong highlights | slight metallic sheen, matte metal |
| Ceramic | Smooth warm glaze, soft coloring | smooth warm glaze, soft porcelain feel |
| Fabric/paper | Fiber texture, natural edges | fabric texture, rustic paper feel |
| Gemstone | Matte texture, internal light | matte gemstone, smooth warm texture |

---

## 5. Prompt Template

```
Claymation stop-motion ancient-style prop reference sheet, stop-motion animation style, 3D cartoon rendering, warm-toned lighting, extreme detail,
{prop type}, {material description}, {craftsmanship/decoration description}, {condition description},
pure prop still-life display, prop displayed independently, not held by anyone, not worn by anyone,
same image in a 2×2 grid: top-left front view + top-right side view + bottom-left back view + bottom-right detail closeup,
clean neutral gray background, warm soft light, no hard shadows,
ultra-clear material texture, matte clay texture, {material sheen description}
no text of any kind should appear in the image,
no person, hand, finger, or limb may appear in the image; the prop must not be in a held or worn state
```

---

## 6. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Must specify a "clean neutral gray background" |
| R2 | Must clearly specify the prop's material and craftsmanship |
| R3 | Prop form must fit the ancient-style/fantasy world setting |
| R4 | Must specify "matte clay texture" |
| R5 | Must specify "warm soft light" |

### Prohibited

| No. | Prohibited |
|---|---|
| X1 | Complex scene backgrounds |
| X2 | Prop and person appearing in the same image |
| X3 | Any person appearing |
| X4 | Prop being in a held/worn/in-use state |
| X5 | Elements implying a person's presence |
| X6 | Cold hard lighting/strong contrast |
| X7 | Excessive highlights/mirror-like reflections |
