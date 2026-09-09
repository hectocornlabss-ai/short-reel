# Anime Prop Derivative State Generation · Constraint Manual

---

## 1. Derivative Principles

1. **Silhouette anchoring** — the prop's core form/silhouette must remain recognizable across all states
2. **State must read clearly** — differences between states must be obvious at a glance, immediately distinguishable to the viewer
3. **Narrative service** — each state variant serves a specific story beat
4. **Progressive degradation** — damage/aging states must follow sound physical logic
5. **Pure prop, shown in isolation** — only the prop itself may appear in frame; any person, hand, or body part is strictly forbidden. The prop must not be held, worn, or gripped — it must be presented independently, as a still-life display

---

## 2. State Types

### 2.1 Usage States

| State | Description | Applicable props | Prompt |
|---|---|---|---|
| Brand new | Flawless, glossy as new | All props | brand new, flawless, glossy as new |
| Everyday use | Slight wear, natural patina | Office supplies/utensils/personal items | everyday wear marks, natural wear |
| Aged | Clear signs of age, dulled coloring | Everyday objects/personal items | aged and weathered, sense of age, dulled coloring |

### 2.2 Damage States

| State | Description | Applicable props | Prompt |
|---|---|---|---|
| Slightly damaged | Small cracks/small chips/light wear | Glass cup/phone screen/notebook | fine cracks, slight chipping |
| Broken | Visible cracks/breakage/shattering | Glass/ceramic/plastic | visible cracks, shattered, broken |
| Fragment | Only a partial piece/fragment remains | Glass/ceramic/keepsake | fragment, broken piece, only half remains |

### 2.3 Special States

| State | Description | Applicable props | Prompt |
|---|---|---|---|
| Stain | Stain residue/liquid residue | Cup/clothing/paper | stain residue, liquid trace |
| Fingerprint | Fingerprints, usage marks | Phone screen/glass cup/metal surface | clear fingerprints, usage marks |
| Wear | Worn corners, chipped paint | Electronics/furniture/accessories | worn corners, chipped paint marks |
| Folded | Scroll/paper fold marks | Book/paper/keepsake | fold marks, visible creases |
| Water marks | Water marks, damp reflection | Paper/clothing/fabric | water mark residue, damp reflection |

---

## 3. State Variant Frame Specifications

### Single-State Image

| Item | Constraint |
|---|---|
| Background | Pure neutral gray `#E8E8E8` (matching the reference sheet) |
| Lighting | Even lighting, no hard shadows |
| Angle | Matches the front view of the original reference sheet |
| Proportion | The prop occupies 70%+ of the frame |

### State Comparison Image

| Item | Constraint |
|---|---|
| Layout | 2-3 states shown side by side in one frame |
| Labels | The state name labeled below each state |
| Consistency | Angle/lighting/background fully consistent; only the state differs |

---

## 4. Material State Change Rules

| Material | New → Everyday | Everyday → Aged | Damage expression |
|---|---|---|---|
| Metal | Bright sheen → faint scratches | Scratches → oxidation spots | Chips/curled edges/breakage |
| Glass | Translucent and clear → faint scratches | Scratches → cracks/shattering | Cracks/shattering/chips |
| Wood | Fresh grain → natural patina | Patina → dulled coloring | Cracking/insect damage/wear |
| Plastic | Brand-new and smooth → faint scratches | Scratches → aging discoloration | Cracks/deformation/fading |
| Paper | Brand-new and flat → faint creases | Creases → yellowing and brittleness | Tearing/scorch damage/stains |
| Ceramic | Glazed sheen → faint scratches | Scratches → dulled glaze | Cracks/shattering/chips |

---

## 5. Prompt Template

### Single State Variant

Based on the {prop name} reference sheet,
anime style, cel shading, modern urban style,
cinematic composition, ultra detailed, 8K, high quality,
shallow depth of field, film grain, lens vignette,
cel-shaded anime style, modern urban style, dramatic low-key lighting,
prop derivative design sheet, item concept art, no people, no characters, no human figures,
{prop type}, {material description},
current state: {state name}, {state visual description},
{material surface change description},
pure prop still-life display, prop shown in isolation, not held by anyone, not worn by anyone,
four-panel grid (2x2) in one frame: top-left front view (front view) + top-right side view (side view) + bottom-left back view (back view) + bottom-right detail close-up (detail closeup),
pure neutral gray background, even soft light, no hard shadows,
ultra-clear material texture, cel-shaded texture, state detail clearly distinguishable
no text anywhere in the image,
no person, hand, finger, or body part may appear in the frame; the prop must not be held or worn

---

## 6. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The prop's core form/silhouette must remain recognizable across all states |
| R2 | State changes must follow sound physical logic |
| R3 | Must use a four-panel grid (2x2) layout: top-left front view + top-right side view + bottom-left back view + bottom-right detail close-up |
| R4 | Must specify a "pure neutral gray background," even soft light, no hard shadows |
| R5 | Must include an "anime style" keyword (anime style / cel shading) |
| R6 | Must include a depth-of-field trait (at least one of shallow depth of field / vignette), preserving the cel-shaded anime look |

### Strictly Prohibited

| No. | Prohibited |
|---|---|
| X1 | The prop becomes unrecognizable after a state change |
| X2 | Damage that violates physical logic (e.g. metal rusting in a way inconsistent with the material) |
| X3 | Excessively gory/horrifying depictions of damage |
| X4 | Any depiction of a person, whether full body, half body, or partial (hand, finger, arm, or other body part) |
| X5 | The prop being held, gripped, worn, or in use |
| X6 | Elements implying a person's presence (e.g. hold marks, a worn-viewpoint angle, a usage pose) |
| X7 | Use of photorealistic/photography/3D-render-related terms |
| X8 | High-saturation fluorescent colors/neon colors |
