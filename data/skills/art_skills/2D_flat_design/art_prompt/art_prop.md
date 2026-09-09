# Prop Image Generation · Flat Style Constraint Manual

---

## 1. Prop Design Principles

1. **Function must read clearly** — the prop's purpose should be obvious at a glance; form serves function
2. **Color blocks kept minimal** — material texture must be differentiated purely through color blocks; complex detail is prohibited
3. **Period consistency** — all props must fit the ancient-style world setting; modern elements are prohibited
4. **Clear scale** — hint at the prop's real size through reference objects or annotation
5. **Pure prop, shown independently** — only the prop itself may appear in frame; no person, hand, or body part of any kind is allowed; the prop must not be shown held/worn/gripped, and must be presented independently as a still-life display

---

## 2. Prop Categories and Aesthetic Constraints

### 2.1 Weapons

| Item | Constraint | Prompt |
|---|---|---|
| Type | Sword/blade/bow/spear/fan | {weapon type}, flat ancient-style weapon |
| Material | Solid color blocks, outlined with lines | flat sword, lined weapon, solid color sword |
| Decoration | Line-drawn engraving, color block decoration | lined decoration, flat engraving |
| Sheen | No sheen, solid color fill | no gloss, flat weapon, matte sword |
| Prompt | Flat ancient-style {weapon}, solid-color weapon, lined decoration | — |

### 2.2 Jewelry/Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Type | Hairpin/hair fork/tassel ornament/jade pendant/bracelet/earrings | {accessory type}, flat ancient-style jewelry |
| Material | Solid color blocks, single-color fill | flat jewelry, color block jewelry, solid color jewelry |
| Craftsmanship | Clean lines, minimalist craftsmanship | flat craftsmanship, lined jewelry |
| Sheen | No sheen, no reflections | no gloss, flat jewelry, matte finish |
| Prompt | Flat ancient-style {accessory}, {material}, minimalist craftsmanship, lined jewelry | — |

### 2.3 Everyday Objects

| Item | Constraint | Prompt |
|---|---|---|
| Type | Tea set/wine vessel/incense burner/chessboard/scroll/lantern | {object type}, flat ancient-style object |
| Material | Solid color blocks, outlined with lines | flat object, color block object, solid color object |
| Texture | Color block differentiation, no texture | flat texture, no texture, flat texture |
| Style | Switch between plain/elegant and opulent depending on the scene | flat plain elegance / flat opulence |
| Prompt | Flat ancient-style {object}, {material} color block, clean lines | — |

### 2.4 Keepsakes/Key Props

| Item | Constraint | Prompt |
|---|---|---|
| Type | Keepsake/token/scroll/medicine bottle/jade seal | {prop type}, flat ancient-style prop |
| Special quality | Flattened form, simple and recognizable | flat form, simple prop |
| Condition | Flat aging effects may be added | flat aged object / flat new object |
| Prompt | Flat ancient-style {prop}, {material} color block, flat condition, simple form | — |

---

## 3. Multi-Angle Reference Sheet Specifications

### View definitions

| Position | View | Angle | Requirement | Prompt |
|---|---|---|---|---|
| Top left | Front view | Front 0° | Prop's full front form | front view |
| Top right | Side view | Side 90° | Thickness/silhouette/structure clear | side view |
| Bottom left | Back view | Rear 180° | Prop's back structure/decoration | back view |
| Bottom right | Detail closeup | Zoomed-in detail | Lines/color block detail | detail closeup |

### Frame specifications

| Item | Constraint |
|---|---|
| Layout | Same frame, 2x2 grid, four angles arranged top/bottom/left/right |
| Background | Clean neutral gray #E8E8E8 |
| Lighting | No lighting effects, purely flat-colored blocks |
| Proportion | The prop occupies 70%+ of each grid cell |
| Shadow | No cast shadow, purely flat |
| Aspect ratio | 1:1 recommended |

---

## 4. Material Rendering Constraints

| Material | Rendering requirement | Prompt |
|---|---|---|
| Metal | Solid color fill, no reflections | flat metal, solid-color metal, solid metal |
| Jade | Solid color fill, no translucency | flat jade, solid-color jade, solid jade |
| Wood | Solid color fill, no wood grain | flat wood, solid-color wood, solid wood |
| Porcelain | Solid color fill, no glaze sheen | flat porcelain, solid-color porcelain, solid porcelain |
| Fabric/paper | Solid color fill, no fiber texture | flat fabric, solid-color fabric, solid fabric |
| Gemstone | Solid color fill, no refraction | flat gem, solid-color gem, solid gem |

---

## 5. Prompt Template

```
flat ancient-style prop reference sheet,
2d flat design, vector art, flat illustration,
minimalist, clean lines, solid colors,
{prop type}, {material description}, {craftsmanship/decoration description}, {condition description},
pure prop still-life display, prop shown independently, not held by anyone, not worn by anyone,
same frame 2x2 grid: top left front view + top right side view + bottom left back view + bottom right detail closeup,
clean neutral gray background, no lighting effects, no gradients,
clean lines, distinct color blocks, {material sheen description}
no text of any kind in the image,
no person, hand, finger, or body part of any kind may appear in the frame, the prop must not be held or worn
```

---

## 6. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Must specify a "clean neutral gray background" |
| R2 | Must clearly state the prop's material and craftsmanship (in flat-style terms) |
| R3 | The prop's form must fit the ancient-style world setting |

### Strictly Prohibited

| No. | Prohibited |
|---|---|
| X1 | Complex scene backgrounds |
| X2 | Prop and character appearing in the same frame (this stage is pure prop imagery only) |
| X3 | Any human figure appearing, including full body, half body, or partial body parts (hand, fingers, arm, etc.) |
| X4 | The prop being held, gripped, worn, or in use |
| X5 | Any element implying a person's presence (e.g., handling marks, a wearer's viewpoint, a usage pose) |
| X6 | Adding gradient/shadow/highlight/3D effects |
| X7 | Material that is overly complex or color blocks that are not clearly differentiated |
| X8 | Modern elements, non-ancient-style design |
