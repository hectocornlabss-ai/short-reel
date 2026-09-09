# Prop Derivative State Generation · Constraint Manual

---

## 1. Derivative Principles

1. **Design anchoring** — The prop's core design/silhouette must remain recognizable across all states
2. **Readable state** — State differences must be obvious at a glance, so viewers can immediately tell them apart
3. **Narrative purpose** — Each state variant serves a specific story beat
4. **Progressive degradation** — Damage/aging states should follow sound physical logic
5. **Standalone prop display only** — Only the prop itself may appear in the frame; no characters, hands, or body parts of any kind are allowed; the prop must not be held/worn/gripped, and must be presented independently as a still-life display

---

## 2. State Types

### 2.1 Usage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Brand new | Flawless, sheen like new | All props | brand new, flawless, sheen like new |
| Everyday use | Slight wear, natural patina | Weapons/objects/jewelry | signs of daily use, natural patina |
| Aged | Clear sense of age, dull color | Objects/keepsakes/scrolls | aged and weathered, sense of age, dull tone |

### 2.2 Damage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Slightly damaged | Small cracks/small chips/light wear | Porcelain/jade pendant/weapon | fine cracks, slight chips |
| Broken | Visible cracks/fractures/shattering | Porcelain/jewelry/weapon | visible cracks, shattered, fractured |
| Fragment | Only a partial piece/shard remains | Porcelain/jade pendant/keepsake | fragment, shard, only half remaining |

### 2.3 Special States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Bloodstained | Blood attached | Weapon/clothing/keepsake | bloodstained, blood-soaked |
| Soaked/wet | Water stains, wet reflections | Scroll/keepsake/clothing | soaked, wet paper, ink bleeding |
| Burnt/scorched | Charred edges, fire-damage marks | Scroll/keepsake/wood item | charred edges, fire-damage marks |
| Glowing/activated | Inner energy, radiant glow | Keepsake/ritual object/jade | faintly glowing, inner radiance |
| Wrapped/sealed | Wrapped in cloth or a box | Keepsake/jewelry/hidden item | wrapped in brocade cloth, sealed in a wooden box |

---

## 3. State Variant Frame Specification

### Single-State Image

| Item | Constraint |
|---|---|
| Background | Clean neutral gray #E8E8E8 (matching the reference sheet) |
| Lighting | Even illumination, no hard shadows |
| Angle | Matches the front view of the original reference sheet |
| Proportion | The prop fills 70%+ of the frame |

### State Comparison Image

| Item | Constraint |
|---|---|
| Layout | 2-3 states shown side by side in the same frame |
| Labeling | State name labeled below each state |
| Consistency | Angle/lighting/background fully consistent, only the state differs |

---

## 4. Material State-Change Rules

| Material | Brand New → Everyday | Everyday → Aged | Damage Expression |
|---|---|---|---|
| Metal | Bright sheen → light patina | Patina → rust spots | Chips/nicked edge/fracture |
| Jade | Translucent and smooth → light wear | Wear → surface micro-cracks | Cracks/shattering/chipped corner |
| Wood | Fresh grain → natural patina | Patina → dull tone | Splitting/fracture/worm damage |
| Porcelain | Glossy glaze → light scratches | Scratches → dull glaze | Cracks/shattering/chips |
| Cloth/paper | Crisp and new → light creases | Creases → yellowed and brittle | Tearing/scorching/ink bleeding |

---

## 5. Prompt Template

### Single-State Variant

```
Based on the {prop name} reference sheet, photorealistic photography style, photorealistic ancient-style documentary look, strong contrast, extreme detail,
{prop type}, {material description},
current state: {state name}, {state visual description},
{material surface change description},
standalone prop still-life display, prop shown independently, not held by anyone, not worn by anyone,
one image, 2×2 grid: top-left front view + top-right side view + bottom-left back view + bottom-right detail close-up,
clean neutral gray background, even soft light, no hard shadows,
ultra-clear material texture, realistic texture, state detail clearly visible
no text of any kind should appear in the image,
no people, hands, fingers, or body parts may appear in the frame; the prop must not be held or worn
```

---

## 6. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The prop's core design/silhouette must remain recognizable across all states |
| R2 | State changes must follow sound physical logic |
| R3 | Must use a 2×2 grid layout: top-left front view + top-right side view + bottom-left back view + bottom-right detail close-up |
| R4 | Must specify "clean neutral gray background," even soft light, no hard shadows |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | The prop becomes unrecognizable after a state change |
| X2 | Damage that violates physical logic (e.g. jade rusting) |
| X3 | Excessively bloody/horrific damage depictions |
| X4 | Any human figure appearing, including full body, partial body, or isolated body parts (hands, fingers, arms, etc.) |
| X5 | The prop being held, gripped, worn, or in use |
| X6 | Any element implying a person's presence (e.g. holding marks, a worn-item perspective, a usage pose) |

