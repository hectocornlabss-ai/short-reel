# Prop Image Generation · Constraint Manual

---

## 1. Prop Design Principles

1. **Function readable** — The prop's purpose is obvious at a glance; form serves function
2. **Extreme texture detail** — Material texture must be clearly distinguishable (metal/jade/wood/cloth/paper)
3. **Period consistency** — All props must fit the ancient-style worldview; modern elements are prohibited
4. **Clear scale** — Imply the prop's real-world size through reference objects or annotation
5. **Standalone prop display only** — Only the prop itself may appear in the frame; no characters, hands, or body parts of any kind are allowed; the prop must not be held/worn/gripped, and must be presented independently as a still-life display

---

## 2. Prop Categories and Aesthetic Constraints

### 2.1 Weapons

| Item | Constraint | Prompt |
|---|---|---|
| Type | Sword/saber/bow/spear/fan | {weapon type}, ancient-style weapon |
| Material | Fine steel/dark iron + gem inlay + silk sword tassel | icy cold sheen, fine forged steel |
| Decoration | Carved sheath/hilt, tassels, hidden patterns | fine carving, hanging tassels |
| Sheen | Cold metallic sheen, blade edge reflection | glinting cold light, metallic texture |
| Prompt | ancient-style {weapon}, fine forged steel, icy cold sheen, fine carving | — |

### 2.2 Jewelry

| Item | Constraint | Prompt |
|---|---|---|
| Type | Hairpin/hair clasp/beaded chain/jade pendant/bracelet/earrings | {jewelry type}, ancient-style jewelry |
| Material | Gold/silver/jade/pearl/gemstone | woven gold thread, translucent jade |
| Craftsmanship | Extremely fine, filigree/cloisonné/inlay | masterwork craftsmanship, intricately carved |
| Sheen | Pearl luster/jade smoothness/metallic sheen | lustrous pearls, metallic sheen |
| Prompt | ancient-style {jewelry}, {material}, masterwork craftsmanship, intricately carved | — |

### 2.3 Everyday Objects

| Item | Constraint | Prompt |
|---|---|---|
| Type | Tea set/wine vessel/incense burner/chessboard/scroll/lantern | {object type}, ancient-style object |
| Material | Ceramic/bronze/bamboo/wood/paper | warm smooth celadon, rustic antique bronze |
| Texture | Glaze/wood grain/bamboo joints clearly visible | glossy glaze, clear wood grain |
| Style | Elegant plain or lavish, depending on scene | elegant and rustic / lavish and refined |
| Prompt | ancient-style {object}, {material} texture, clear texture | — |

### 2.4 Keepsakes / Key Story Props

| Item | Constraint | Prompt |
|---|---|---|
| Type | Keepsake/token/scroll/potion bottle/jade seal | {prop type}, ancient-style prop |
| Distinctiveness | Must be recognizable, carry narrative symbolism | unique design, deep symbolic meaning |
| Aging | May add a sense of age as needed by the story | aged and weathered / brand new and refined |
| Prompt | ancient-style {prop}, {material}, {condition}, unique design | — |

---

## 3. Multi-Angle Turnaround Specification

### View Definitions

| Position | View | Angle | Requirement | Prompt |
|---|---|---|---|---|
| Top-left | Front view | Front 0° | Full frontal form of the prop | front view |
| Top-right | Side view | Side 90° | Thickness/silhouette/structure clearly shown | side view |
| Bottom-left | Back view | Back 180° | Back structure/decoration of the prop | back view |
| Bottom-right | Detail close-up | Local zoom | Material texture/craftsmanship detail | detail closeup |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | One image, 2×2 grid, four angles arranged top/bottom/left/right |
| Background | Clean neutral gray #E8E8E8 |
| Lighting | Even soft light, no hard shadows |
| Proportion | The prop fills 70%+ of its grid cell |
| Shadow | Subtle natural ground shadow is allowed |
| Aspect ratio | Recommended 1:1 |

---

## 4. Material Rendering Constraints

| Material | Rendering Requirement | Prompt |
|---|---|---|
| Metal | Reflections/highlights/cold sheen, faint visible scratches | metallic texture, cold sheen, clear reflections |
| Jade | Inner glow, warm smoothness, subtle translucency | translucent jade, warm as ointment |
| Wood | Clear wood grain, visible growth rings | clear wood grain, warm smooth texture |
| Ceramic | Glossy glaze, even color | glossy glaze, warm ceramic texture |
| Cloth/paper | Fiber texture, natural edges | fabric texture, rustic paper texture |
| Gemstone | Refraction/internal light, clear facets | dazzling gemstone, refracting light |

---

## 5. Prompt Template

```
ancient-style prop turnaround sheet, photorealistic photography style, photorealistic ancient-style documentary look, strong contrast, extreme detail,
{prop type}, {material description}, {craftsmanship/decoration description}, {condition description},
standalone prop still-life display, prop shown independently, not held by anyone, not worn by anyone,
one image, 2×2 grid: top-left front view + top-right side view + bottom-left back view + bottom-right detail close-up,
clean neutral gray background, even soft light, no hard shadows,
ultra-clear material texture, realistic texture, {material sheen description}
no text of any kind should appear in the image,
no people, hands, fingers, or body parts may appear in the frame; the prop must not be held or worn
```

---

## 6. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Must specify "clean neutral gray background" |
| R2 | Must clearly state the prop's material and craftsmanship |
| R3 | The prop's design must fit the ancient-style worldview |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Complex scene backgrounds |
| X2 | Prop and character in the same frame (this stage is a pure prop image) |
| X3 | Any human figure appearing, including full body, partial body, or isolated body parts (hands, fingers, arms, etc.) |
| X4 | The prop being held, gripped, worn, or in use |
| X5 | Any element implying a person's presence (e.g. holding marks, a worn-item perspective, a usage pose) |

