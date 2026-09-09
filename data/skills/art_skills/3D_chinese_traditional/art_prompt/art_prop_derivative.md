---
name: art_prop_derivative
description: Prop derivative state generation · Constraint manual
metaData: art_skills
---

# Prop Derivative State Generation · Constraint Manual

---

## 1. Derivative Principles

1. **Design Anchoring** — The prop's core design/silhouette must remain recognizable across all states
2. **Legible State** — State differences must be immediately obvious, so viewers can distinguish them at a glance
3. **Narrative Service** — Each state variant serves a specific story beat
4. **Progressive Degradation** — Damage/aging states must follow reasonable physical logic
5. **Pure Prop, Standalone Display** — Only the prop itself may appear in the frame; any person, hand, or limb is strictly prohibited; the prop must not be held/worn/gripped, and must be presented independently as a still-life display

---

## 2. State Types

### 2.1 Usage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Brand New | Flawless condition, sheen like new | All props | brand new, flawless condition, sheen like new |
| Everyday Use | Slight wear, natural patina | Weapons/objects/jewelry | signs of everyday use, natural patina |
| Aged | Clearly aged look, dulled tone | Objects/keepsakes/scrolls | aged and weathered, dulled tone |

### 2.2 Damage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Slightly Damaged | Small cracks/small chips/light wear | Porcelain/jade pendant/weapons | fine cracks, slight chipping |
| Broken | Visible cracks/fracture/shattering | Porcelain/jewelry/weapons | visible cracks, shattered, broken |
| Fragment | Only a partial piece/fragment remains | Porcelain/jade pendant/keepsakes | fragment, shard, only half remains |

### 2.3 Special States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Bloodstained | Blood marks attached | Weapons/clothing/keepsakes | mottled bloodstains, bloodstained |
| Soaked/Wet | Water marks, wet reflective surface | Scrolls/keepsakes/clothing | soaked, wet paper, ink bleeding |
| Burned/Charred | Blackened edges, fire marks | Scrolls/keepsakes/wooden items | charred edges, fire marks |
| Glowing/Activated | Inner energy, radiant glow | Keepsakes/ritual objects/jade | faintly glowing, inner radiance |
| Wrapped/Sealed | Wrapped in cloth or a box | Keepsakes/jewelry/secret items | wrapped in brocade cloth, sealed in a wooden box |

---

## 3. State Variant Composition Specification

### Single-State Image

| Item | Constraint |
|---|---|
| Background | Plain gray solid color #B8B8B8 (consistent with the reference sheet) |
| Lighting | Even lighting, no hard shadows |
| Angle | Consistent with the front view of the original reference sheet |
| Proportion | Prop occupies 70%+ of the frame |

### State Comparison Image

| Item | Constraint |
|---|---|
| Layout | 2-3 states shown side by side in the same frame |
| Labeling | State name labeled beneath each state |
| Consistency | Angle/lighting/background must be completely consistent — only the state differs |

---

## 4. Material State Change Rules

| Material | New → Everyday Use | Everyday Use → Aged | Damage Manifestation |
|---|---|---|---|
| Metal | Bright sheen → light patina | Patina → rust spots | Chips/curled edge/breakage |
| Jade | Translucent and warm → light wear | Wear → faint surface cracks | Cracks/shattering/chipped corner |
| Wood | Fresh grain → natural patina | Patina → dulled tone | Splitting/breakage/worm damage |
| Porcelain | Glossy glaze → light scratches | Scratches → dulled glaze | Cracks/shattering/chipping |
| Cloth/Paper | Brand-new and smooth → light creasing | Creasing → yellowed and brittle | Tearing/charring/ink bleeding |

---

## 5. Prompt Template

### Single-State Variant

Based on the {prop name} reference sheet, 3D rendering style, high-precision modeling, PBR materials, Chinese Traditional 3D, cinematic-grade lighting,
{prop type}, {material description},
current state: {state name}, {state visual description},
{material surface change description},
pure prop still-life display, prop shown independently, not held by anyone, not worn by anyone,
same frame, 2x2 grid: top-left front view + top-right side view + bottom-left back view + bottom-right detail closeup,
plain gray solid color background, even soft light, no hard shadows,
ultra-clear material texture, PBR material rendering, discernible state detail,
no text of any kind in the image,
no person, hand, finger, or limb may appear in the frame, the prop must not be held or worn

---

## 6. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The prop's core design/silhouette must remain recognizable across all states |
| R2 | State changes must follow physical logic |
| R3 | Must use a 2x2 grid layout: top-left front view + top-right side view + bottom-left back view + bottom-right detail closeup |
| R4 | Must specify "plain gray solid color background", even soft light, no hard shadows |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | The prop becoming unrecognizable after a state change |
| X2 | Damage that violates physical logic (e.g. jade rusting) |
| X3 | Excessively gory/horrifying depictions of damage |
| X4 | Any appearance of a person, including full body, half body, or partial (hand, finger, arm, or other limb) |
| X5 | The prop being held, gripped, worn, or in use |
| X6 | Any element hinting at a person's presence (e.g. handling marks, a wearing-perspective angle, a usage pose) |
