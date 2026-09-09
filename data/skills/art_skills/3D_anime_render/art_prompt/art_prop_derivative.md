# 3D Animation Rendering Urban Prop Derivative State Generation · Constraint Manual

---

## 1. Derivative Principles

1. **Form anchored** — the prop's core form/silhouette must remain recognizable across all states
2. **State legible** — state differences must be obvious at a glance, immediately distinguishable to the viewer
3. **Serves narrative** — each state variant serves a specific story beat
4. **Progressive degradation** — damage/aging states must follow reasonable physical logic (cel-shaded presentation)
5. **Pure prop, standalone display** — only the prop itself may appear in the frame; any person, hand, or limb is strictly prohibited; the prop must not be in a held/worn/gripped state, and must be presented standalone as a still-life display

---

## 2. State Types

### 2.1 Usage States

| State | Description | Applicable props | Prompt |
|---|---|---|---|
| Brand new | Flawless, shiny like new | All props | brand new, flawless condition, shiny like new |
| Everyday use | Slight wear, natural usage marks (cel-shaded) | All props | everyday wear marks, slight wear |
| Aged | Visible wear, dull coloring (cel-shaded) | Items/accessories/electronics | usage marks, sense of age, dull coloring |

### 2.2 Damage States

| State | Description | Applicable props | Prompt |
|---|---|---|---|
| Slightly damaged | Small crack/small chip/slight wear (cel-shaded) | Glass/ceramic/electronic devices | fine cracks, slight chipping |
| Damaged | Visible crack/breakage/shattering (cel-shaded) | Glass/ceramic/electronic devices | visible cracks, shattered, broken |
| Fragmented | Only remnants/fragments remain (cel-shaded) | Glass/ceramic/electronic devices | fragments, shards, only half remaining |

### 2.3 Special States

| State | Description | Applicable props | Prompt |
|---|---|---|---|
| Charging/working | Screen lit up/indicator light (cel-shaded) | Electronic devices | screen lit up, working indicator light |
| Wet/soaked | Water marks, wet reflections (cel-shaded) | Electronic devices/paper | soaked, wet surface, reflective |
| Screen damaged | Cracked screen/display glitch | Electronic devices | cracked screen, display glitch |
| Battery depleted | Indicator light off/battery icon | Electronic devices | battery depleted, indicator light off |
| Stored/carried | Storage bag/storage case | Accessories/electronic devices | storage bag, storage case |

---

## 3. State Variant Frame Specifications

### Single-State Image

| Item | Constraint |
|---|---|
| Background | Clean neutral gray #E8E8E8 (consistent with the design sheet) |
| Lighting | Even lighting, no hard shadows |
| Angle | Consistent with the front view of the original design sheet |
| Proportion | The prop occupies 70%+ of the frame's main subject |

### State Comparison Image

| Item | Constraint |
|---|---|
| Layout | 2-3 states displayed side by side in the same frame |
| Labeling | Each state labeled with its state name below it |
| Consistency | Angle/lighting/background fully consistent, only the state differs |

---

## 4. Material State Change Rules

| Material | Brand new → Everyday | Everyday → Aged | Damage expression (cel-shaded) |
|---|---|---|---|
| Metal | shiny sheen → faint scratches | scratches → dull coloring | chipping/bent edge/breakage (cel-shaded treatment) |
| Glass | transparency → faint scratches | scratches → surface wear | cracks/shattering/chipped corners (cel-shaded treatment) |
| Plastic | smooth → slight scratches | scratches → dull coloring | cracking/breakage/wear (cel-shaded treatment) |
| Leather | smooth → natural creases | creases → dull coloring | wear/cracking/fading (cel-shaded treatment) |
| Paper | flat → slight wrinkles | wrinkles → yellowing | tearing/wear/ink bleed (cel-shaded treatment) |

---

## 5. Prompt Template

### Single State Variant

```
Based on the {prop name} design sheet, 3D animation rendering, cinema-grade lighting, vibrant cel-shaded texture, high-detail materials, joyful healing atmosphere, cartoon urban style, high-detail cartoon materials, moderate cartoon proportions, warm color palette, 8K ultra-high-definition, cinema-grade composition, soft lighting layers, bright cartoon rendering style, warm and healing,
anime style, cel-shaded, 3D animation render,
{prop type}, {material description},
current state: {state name}, {state visual description},
{material surface change description}, (cel-shaded treatment)
pure prop still-life display, prop standalone presentation, not held by anyone, not worn by anyone,
same-frame 2x2 grid: top-left front view + top-right side view (side view) + bottom-left back view (back view) + bottom-right detail closeup (detail closeup),
clean neutral gray background, even soft lighting, no hard shadows,
clear material texture, cel-shaded rendering, state details distinguishable, cel-shaded treatment,
8K ultra-high-definition, cinema-grade composition,
no text of any kind in the image,
no people, hands, fingers, or limbs of any kind may appear in the frame; the prop must not be held or worn
```

---

## 6. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The prop's core form/silhouette must remain recognizable across all states |
| R2 | State changes must follow physical logic (cel-shaded) |
| R3 | Must use a 2x2 grid layout: top-left front view + top-right side view + bottom-left back view + bottom-right detail closeup |
| R4 | Must specify a "clean neutral gray background," even soft lighting, no hard shadows |
| R5 | Must include 3D animation rendering keywords (cel-shaded, 3D animation render, anime style) |
| R6 | Must include 8K ultra-high-definition, cinema-grade composition keywords |

### Prohibited

| No. | Prohibited item |
|---|---|
| X1 | The prop becoming unrecognizable after a state change |
| X2 | Damage that violates physical logic (e.g. electronic products rusting) |
| X3 | Excessively gory/horrific damage depiction (must stay within cel-shaded limits) |
| X4 | Any human figure appearing, including full body, partial body, or any body part (hand, finger, arm, etc.) |
| X5 | The prop being held, gripped, worn, or in use |
| X6 | Elements implying a person's presence (such as grip marks, a worn-item viewpoint, or a usage pose) |
| X7 | Using photorealistic photography terms (such as real photography, photorealistic, RAW photo, etc.) |
| X8 | Overly photorealistic damage texture that breaks cel-shaded style consistency |
| X9 | Ancient/futuristic elements, non-modern urban style |
