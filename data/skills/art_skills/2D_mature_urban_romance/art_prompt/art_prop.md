# Anime Prop Image Generation · Constraint Manual

---

## 1. Prop Design Principles

1. **Function must read clearly** — the prop's purpose must be obvious at a glance, with form serving function
2. **Extreme texture fidelity** — material texture must be clearly distinguishable (metal/plastic/wood/glass/fabric)
3. **Unified style** — all props must fit the modern urban romance world setting, with no jarring elements
4. **Explicit scale** — reference objects or annotations should hint at the prop's real-world size
5. **Pure prop, shown in isolation** — only the prop itself may appear in frame; any person, hand, or body part is strictly forbidden. The prop must not be held, worn, or gripped — it must be presented independently, as a still-life display

---

## 2. Prop Categories and Aesthetic Constraints

### 2.1 Office Supplies

| Item | Constraint | Prompt |
|---|---|---|
| Type | Pen/notebook/folder/glasses | office {type}, modern office supplies |
| Material | Metal/plastic/leather/paper | metal pen clip, leather notebook |
| Decoration | Minimalist design, brand mark (optional) | minimalist design, refined brand mark |
| Sheen | Matte/subtle sheen/metallic reflection | matte texture, metallic reflection |
| Prompt | modern {prop}, minimalist design, clear texture | — |

### 2.2 Drinkware

| Item | Constraint | Prompt |
|---|---|---|
| Type | Coffee cup/glass/thermos | coffee cup, drinking glass, thermos |
| Material | Glass/ceramic/metal/plastic | transparent glass cup, ceramic coffee cup |
| Decoration | Brand mark/pattern (optional) | minimalist brand mark, no pattern |
| Sheen | Glass reflection, ceramic glaze sheen, metallic sheen | clear glass reflection, warm ceramic glaze |
| Prompt | modern {prop}, clear material, cel-shaded texture | — |

### 2.3 Personal Items

| Item | Constraint | Prompt |
|---|---|---|
| Type | Phone/watch/glasses/keys | modern {prop}, personal item |
| Material | Metal/glass/plastic/leather | glass screen, metal frame |
| Decoration | Minimalist design, brand mark (optional) | minimalist design, refined mark |
| Sheen | Glass reflection, metallic sheen | clear glass reflection, metallic texture |
| Prompt | modern {prop}, clear material, refined detail | — |

### 2.4 Everyday Objects

| Item | Constraint | Prompt |
|---|---|---|
| Type | Scroll/framed art/diffuser/table lamp | modern {prop}, everyday object |
| Material | Wood/glass/metal/fabric | wooden book cover, glass lampshade |
| Texture | Clear material texture, natural edges | clear wood grain, translucent glass |
| Style | Minimalist modern/cozy homey | minimalist modern, cozy homey |
| Prompt | modern {prop}, clear material, coherent atmosphere | — |

---

## 3. Multi-Angle Reference Sheet Specification

### View Definitions

| Position | View | Angle | Requirement | Prompt |
|---|---|---|---|---|
| Top left | Front view | Front 0° | Full frontal form of the prop | front view |
| Top right | Side view | Side 90° | Clear thickness/silhouette/structure | side view |
| Bottom left | Back view | Rear 180° | Back structure/decoration of the prop | back view |
| Bottom right | Detail close-up | Local zoom | Material texture/craftsmanship detail | detail closeup |

### Frame Specifications

| Item | Constraint |
|---|---|
| Layout | Four-panel grid (2x2) in one frame, four angles arranged top/bottom/left/right |
| Background | Pure neutral gray `#E8E8E8` |
| Lighting | Even soft light, no hard shadows |
| Proportion | The prop occupies 70%+ of each panel |
| Shadow | A natural, subtle ground shadow is allowed |
| Aspect ratio | 1:1 recommended |

---

## 4. Material Rendering Constraints

| Material | Rendering requirement | Prompt |
|---|---|---|
| Metal | Reflection/highlight/sheen, faint visible scratches | metallic texture, clear reflection, faint scratches visible |
| Glass | Translucent, reflective, refraction effect | translucent glass, clear reflection, natural refraction |
| Wood | Clear wood grain, visible growth rings | clear wood grain, natural texture |
| Ceramic | Glazed sheen, even coloring | smooth glaze, even coloring |
| Plastic | Matte/subtle sheen, clean edges | plastic texture, clean edges |
| Fabric | Fiber texture, natural edges | fabric texture, natural fibers |
| Leather | Clear grain, soft sheen | leather grain, natural sheen |

---

## 5. Prompt Template

anime prop reference sheet,
anime style, cel shading, modern urban style,
cinematic composition, ultra detailed, 8K, high quality,
shallow depth of field, film grain, lens vignette,
cel-shaded anime style, modern urban style, dramatic low-key lighting,
prop design sheet, item concept art, no people, no characters, no human figures,
{prop type}, {material description}, {craftsmanship/decoration description}, {state description},
pure prop still-life display, prop shown in isolation, not held by anyone, not worn by anyone,
four-panel grid (2x2) in one frame: top-left front view + top-right side view + bottom-left back view + bottom-right detail close-up,
pure neutral gray background, even soft light, no hard shadows,
ultra-clear material texture, cel-shaded texture, {material sheen description}
no text anywhere in the image,
no person, hand, finger, or body part may appear in the frame; the prop must not be held or worn

---

## 6. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Must specify a "pure neutral gray background" |
| R2 | Must clearly specify the prop's material and craftsmanship |
| R3 | The prop's design must fit the modern urban romance world setting |
| R4 | Must include an "anime style" keyword (anime style / cel shading) |
| R5 | Must include a depth-of-field trait (at least one of shallow depth of field / vignette), preserving the cel-shaded anime look |

### Strictly Prohibited

| No. | Prohibited |
|---|---|
| X1 | Complex scene backgrounds |
| X2 | Prop and person appearing in the same frame (this stage is pure prop imagery) |
| X3 | Any depiction of a person, whether full body, half body, or partial (hand, finger, arm, or other body part) |
| X4 | The prop being held, gripped, worn, or in use |
| X5 | Elements implying a person's presence (e.g. hold marks, a worn-viewpoint angle, a usage pose) |
| X6 | Use of photorealistic/photography/3D-render-related terms |
| X7 | High-saturation fluorescent colors/neon colors |
| X8 | Ancient/fantasy/sci-fi or other elements conflicting with the modern urban romance world setting |
