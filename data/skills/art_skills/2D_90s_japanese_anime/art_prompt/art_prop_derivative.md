# 90s Retro Japanese Anime Style - Prop Derivative State Generation · Constraint Handbook

---

## 1. Derivative Principles

1. **Design Anchoring** — the prop's core design/silhouette must remain recognizable across all states
2. **Readable State** — state differences must be obvious at a glance
3. **Narrative Purpose** — each state variant serves a specific story beat
4. **Progressive Degradation** — damage/aging states should follow sound physical logic
5. **Standalone Prop Display Only** — only the prop itself may appear in frame; no characters, hands, or body parts allowed

---

## 2. State Types

### 2.1 Usage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Brand new | flawless, sheen like new | all props | brand new, flawless |
| Everyday use | slight wear, natural patina | weapons/objects/accessories | signs of daily use, slight wear |
| Aged | clear sense of age, dull color | objects/keepsakes/scrolls | aged, sense of age |

### 2.2 Damage States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Slightly damaged | small cracks/small chips/light wear | porcelain/jade pendant/weapon | fine cracks, slight chips |
| Broken | visible cracks/fractures/shattering | porcelain/accessory/weapon | visible cracks, shattered |
| Fragment | only a partial piece/shard remains | porcelain/jade pendant/keepsake | fragment, shard |

### 2.3 Special States

| State | Description | Applicable Props | Prompt |
|---|---|---|---|
| Bloodstained | blood attached | weapon/keepsake | bloodstains, blood-soaked |
| Soaked/Wet | water stains, wet reflections | scroll/keepsake/clothing | soaked, wet |
| Burnt/Scorched | charred edges, fire-damage marks | scroll/keepsake/wood item | charred edges, fire-damage marks |
| Glowing/Activated | inner energy, radiant glow | keepsake/magic item/jade | faint glow, inner radiance |
| Wrapped/Sealed | wrapped in cloth or a box | keepsake/accessory/hidden item | wrapped, sealed |

---

## 3. State Variant Frame Specification

### Single-State Image

| Item | Constraint |
|---|---|
| Background | warm off-white #F8F4E8 (matching the turnaround sheet) |
| Lighting | soft cinematic light, even illumination, no hard shadows |
| Angle | matches the front view of the original turnaround sheet |
| Proportion | prop fills 70%+ of the frame |

### State Comparison Image

| Item | Constraint |
|---|---|
| Layout | 2-3 states shown side by side in one image |
| Labeling | state name labeled below each state |
| Consistency | angle/lighting/background fully consistent, only the state differs |

---

## 4. Material State-Change Rules

| Material | Brand New → Everyday | Everyday → Aged | Damage Expression |
|---|---|---|---|
| Metal | bright sheen → light patina | patina → rust spots | chips/nicked edge/fracture |
| Jade | translucent smooth → light wear | wear → surface micro-cracks | cracks/shattering/chipped corner |
| Wood | fresh grain → natural patina | patina → dull tone | splitting/fracture/worm damage |
| Porcelain | glossy glaze → light scratches | scratches → dull glaze | cracks/shattering/chips |
| Cloth/Paper | crisp and new → light creases | creases → yellowed and brittle | tearing/scorching |

---

## 5. Prompt Templates

### Single-State Variant

```
Based on the {prop name} turnaround sheet, 90s retro Japanese anime style, hand-drawn flat coloring, soft warm tones,
{prop type}, {material description},
current state: {state name}, {state visual description},
{material surface change description},
standalone prop still-life display, prop shown independently, not held by anyone, not worn by anyone,
one image, 2×2 grid: top-left front view + top-right side view + bottom-left back view + bottom-right detail close-up,
warm off-white background, soft cinematic light, even soft light, no hard shadows,
ultra-clear material texture, hand-drawn texture, state detail clearly visible
no text of any kind in the image,
no people, hands, fingers, or body parts may appear in frame; the prop must not be held or worn
```

---

## 6. Constraint Rules

### Must Follow

| ID | Rule |
|---|---|
| R1 | the prop's core design/silhouette must remain recognizable across all states |
| R2 | state changes must follow sound physical logic |
| R3 | must use a 2×2 grid layout |
| R4 | must specify "warm off-white background" and soft cinematic light |

### Strictly Forbidden

| ID | Forbidden |
|---|---|
| X1 | prop becoming unrecognizable after a state change |
| X2 | damage that violates physical logic |
| X3 | excessively bloody/horrific damage depictions |
| X4 | any human figure appearing |
| X5 | prop being held, gripped, worn, or in use |
| X6 | any element implying a person's presence |
