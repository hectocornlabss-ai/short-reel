# Prop Derivative State Generation · Constraint Manual (Live-Action Urban Edition)

---

## 1. Derivative Principles

1. **Form anchoring** — The prop's core form/silhouette must be recognizable across all states
2. **State legibility** — State differences must be immediately obvious; the viewer can distinguish them at a glance
3. **Serves the narrative** — Each state variant serves a specific story beat
4. **Progressive degradation** — Damage/aging states must follow reasonable physical logic

---

## 2. State Types

### 2.1 Usage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Brand new | Flawless, glossy as new | All props | brand new, flawless, glossy as new |
| Everyday use | Slightly worn, natural marks | Electronics/everyday items | everyday wear marks, natural wear |
| Aged | Visible usage marks, aging | Leather goods/fabrics | usage marks, natural aging |

### 2.2 Damage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Slight damage | Small scratches/small cracks | Phones/laptops | fine scratches, slight cracks |
| Broken | Visible cracks/fracture | Electronics/glass items | visible cracks, shattered |
| Fragments | Only partial remains/fragments | Glass/ceramic items | fragments, shards |

### 2.3 Special States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Stains | Stain buildup | All props | stains, dirty marks |
| Water marks | Water marks, damp reflections | Paper items/fabrics | water marks, damp traces |
| Scratches | Visible scratches | Metal/glass | visible scratches, scrape marks |
| Wear | Surface wear | Leather/fabric | wear marks, aging |
| Cracked screen | Shattered screen | Electronics | shattered screen, crack lines |

---

## 3. State Variant Frame Specifications

### Single-State Image

| Item | Constraint |
|---|---|
| Background | Clean neutral gray #E8E8E8 (consistent with the reference sheet) |
| Lighting | Even illumination, no hard shadows |
| Angle | Consistent with the front view of the original reference sheet |
| Scale | The prop occupies 70%+ of the frame's subject area |

### State Comparison Image

| Item | Constraint |
|---|---|
| Layout | Same frame displaying 2-3 states side by side |
| Labeling | State name labeled below each state |
| Consistency | Angle/lighting/background fully consistent, only the state differs |

---

## 4. Material State Change Rules

| Material | Brand New → Everyday | Everyday → Aged | Damage Presentation |
|---|---|---|---|
| Metal | Glossy sheen → fine scratches | Scratches → oxidation spots | Dents/bending/fracture |
| Glass | Transparent → fine scratches | Scratches → visible cracks | Shattering/chipping |
| Plastic | New sheen → slight wear | Wear → fading | Cracking/deformation |
| Leather | Smooth → slight creasing | Creasing → cracking | Tearing/wear |
| Fabric | Brand new → slight creasing | Creasing → fading | Tearing/stains |

---

## 5. Prompt Template

### Single State Variant

```

Based on the {prop name} reference sheet, live-action realistic photography style, natural lighting, extreme detail,
{prop type}, {material description},
current state: {state name}, {state visual description},
{material surface change description},
same frame four-panel grid (2×2): top-left front view + top-right side view + bottom-left back view + bottom-right detail closeup,
clean neutral gray background, even soft light, no harsh shadows,
ultra-clear material texture, realistic texture, state detail distinguishable

```


---

## 6. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The prop's core form/silhouette must be recognizable across all states |
| R2 | State changes must follow physical logic |
| R3 | Must use a four-panel grid (2×2) layout |
| R4 | Must specify "clean neutral gray background," even soft light, no hard shadows |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | The prop becoming unrecognizable after a state change |
| X2 | Damage that violates physical logic (e.g., metal rusting where it shouldn't) |
| X3 | Excessive damage rendering the prop unrecognizable |
