# 3D Animation Rendering Urban Prop Image Generation · Constraint Manual

---

## 1. Prop Design Principles

1. **Function is legible** — the prop's purpose must be obvious at a glance, with the form serving the function
2. **Texture is paramount** — material texture must be clearly distinguishable (metal/glass/plastic/wood/fabric), though cel-shaded rendering simplifies it moderately
3. **Era consistency** — all props must fit the modern urban world setting; ancient/futuristic elements are prohibited
4. **Clear scale** — the prop's real-world size should be implied through reference objects or annotation
5. **Pure prop, standalone display** — only the prop itself may appear in the frame; any person, hand, or limb is strictly prohibited; the prop must not be in a held/worn/gripped state, and must be presented standalone as a still-life display

---

## 2. Prop Categories and Aesthetic Constraints

### 2.1 Office Supplies

| Item | Constraint | Prompt |
|---|---|---|
| Type | notebook/pen/folder/calculator | {prop type}, urban office supply |
| Material | plastic/metal/paper | modern material, urban texture |
| Decoration | minimalist design, brand markings | minimalist design, urban style |
| Sheen | moderate sheen, clear reflections | moderate sheen, clear reflections |
| Prompt | 3D animation rendering urban {prop}, modern material, minimalist design | — |

### 2.2 Everyday Items

| Item | Constraint | Prompt |
|---|---|---|
| Type | coffee cup/water glass/tableware/lamp | {item type}, urban everyday item |
| Material | glass/ceramic/metal/plastic | glass texture, modern design |
| Texture | smooth surface, clear material | smooth surface, clear material |
| Style | minimalist/modern depending on scene | minimalist modern / urban style |
| Prompt | 3D animation rendering urban {item}, {material} texture, clear texture | — |

### 2.3 Electronic Devices

| Item | Constraint | Prompt |
|---|---|---|
| Type | phone/tablet/headphones/camera | {device type}, urban electronic device |
| Material | metal/glass/plastic | modern device material, smooth texture |
| Craftsmanship | refined craftsmanship, branded design | refined craftsmanship, branded design |
| Sheen | moderate reflections, glowing screen effect | moderate reflections, glowing screen |
| Prompt | 3D animation rendering urban {device}, modern material, glowing screen effect | — |

### 2.4 Clothing Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Type | glasses/watch/bag/keychain | {accessory type}, urban clothing accessory |
| Material | metal/leather/fabric/glass | leather texture, metal texture |
| Craftsmanship | branded craftsmanship, refined design | branded craftsmanship, refined design |
| Sheen | moderate sheen, clear brand markings | moderate sheen, clear brand markings |
| Prompt | 3D animation rendering urban {accessory}, {material}, branded design | — |

---

## 3. Multi-Angle Design Sheet Specification

### View Definitions

| Position | View | Angle | Requirement | Prompt |
|---|---|---|---|---|
| Top-left | Front view | Front 0° | Complete front form of the prop | front view |
| Top-right | Side view | Side 90° | Thickness/silhouette/structure clear | side view |
| Bottom-left | Back view | Rear 180° | Rear structure/decoration of the prop | back view |
| Bottom-right | Detail closeup | Local magnification | Material texture/craftsmanship detail | detail closeup |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Same-frame 2x2 grid, four quadrants |
| Background | Clean neutral gray #E8E8E8 |
| Lighting | Even soft lighting, no hard shadows |
| Proportion | The prop occupies 70%+ of each cell's main subject |
| Shadow | A natural, faint ground shadow is allowed (cel-shaded treatment) |
| Frame ratio | Recommended 1:1 |

---

## 4. Material Rendering Constraints

| Material | Rendering requirement | Prompt |
|---|---|---|
| Metal | reflection/highlight/cool sheen (cel-shaded treatment), faint visible scratches | metal texture, cel-shaded sheen, clear reflections |
| Glass | transparency/refraction/glow (cel-shaded simplification) | glass texture, clear transparency |
| Plastic | smooth surface/slight sheen | plastic texture, smooth surface |
| Leather | clear texture/natural creases | leather texture, natural texture |
| Paper | surface texture/slight creases | paper texture, surface texture |
| Fabric | fiber texture/natural creases | fabric texture, natural texture |

---

## 5. Prompt Template

```
3D animation rendering, cinema-grade lighting, vibrant cel-shaded texture, high-detail materials, joyful healing atmosphere, cartoon urban style, high-detail cartoon materials, moderate cartoon proportions, warm color palette, 8K ultra-high-definition, cinema-grade composition, soft lighting layers, bright cartoon rendering style, warm and healing, prop design sheet,
anime style, cel-shaded, 3D animation render,
{prop type}, {material description}, {craftsmanship/decoration description}, {state description},
pure prop still-life display, prop standalone presentation, not held by anyone, not worn by anyone,
same-frame 2x2 grid: top-left front view + top-right side view + bottom-left back view + bottom-right detail closeup,
clean neutral gray background, even soft lighting, no hard shadows,
clear material texture, cel-shaded rendering, {material sheen description}, modern cartoon urban style,
8K ultra-high-definition, cinema-grade composition,
no text of any kind in the image,
no people, hands, fingers, or limbs of any kind may appear in the frame; the prop must not be held or worn
```

---

## 6. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Must specify a "clean neutral gray background" |
| R2 | Must clearly state the prop's material and craftsmanship |
| R3 | The prop's design must fit the modern urban world setting |
| R4 | Must include 3D animation rendering keywords (cel-shaded, 3D animation render, anime style) |
| R5 | Must include 8K ultra-high-definition, cinema-grade composition keywords |

### Prohibited

| No. | Prohibited item |
|---|---|
| X1 | Complex scene backgrounds |
| X2 | Prop and person appearing in the same frame (this stage is pure prop imagery) |
| X3 | Any human figure appearing, including full body, partial body, or any body part (hand, finger, arm, etc.) |
| X4 | The prop being held, gripped, worn, or in use |
| X5 | Elements implying a person's presence (such as grip marks, a worn-item viewpoint, or a usage pose) |
| X6 | Using photorealistic photography terms (such as real photography, photorealistic, RAW photo, etc.) |
| X7 | Overly photorealistic material texture that breaks cel-shaded style consistency |
| X8 | Ancient/futuristic elements, non-modern urban style |
