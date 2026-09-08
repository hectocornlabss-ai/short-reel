# Claymation Stop-Motion Prop Derivative States Generation · Constraint Handbook

---

## 1. Derivative Principles

1. **Form anchoring** — The prop's core form/silhouette must be recognizable across all states
2. **State legibility** — Differences between states must be immediately obvious
3. **Narrative service** — Each state variant serves a specific story beat
4. **Progressive degradation** — Damage/aging states should follow reasonable physical logic
5. **Pure standalone prop display** — Only the prop itself may appear in the image

---

## 2. State Types

### 2.1 Usage States

| State | Description | Applicable Props | Prompt Fragment |
|---|---|---|---|
| Brand new | Flawless, matte and smooth | All props | brand new, flawless, smooth warm texture |
| Everyday use | Slight wear, natural patina | Weapons/objects/jewelry | everyday wear marks, natural patina |
| Old | Clear signs of age, softened coloring | Objects/keepsakes/scrolls | worn and weathered, aged look, softened coloring |

### 2.2 Damage States

| State | Description | Applicable Props | Prompt Fragment |
|---|---|---|---|
| Slightly damaged | Small cracks/small chips/slight wear | Porcelain/jade/weapons | fine cracks, slight chips |
| Broken | Clear cracks/breakage/shattering | Porcelain/jewelry/weapons | clear cracks, shattered, broken |
| Fragment | Only a partial piece/fragment remains | Porcelain/jade/keepsakes | fragment, shard, only half remaining |

### 2.3 Special States

| State | Description | Applicable Props | Prompt Fragment |
|---|---|---|---|
| Bloodstained | Blood attached | Weapons/clothing/keepsakes | blood-mottled, bloodstained |
| Soaked/wet | Water stains, wet reflective sheen | Scrolls/keepsakes/clothing | soaked, wet paper, ink bleeding |
| Burned/charred | Charred edges, fire damage marks | Scrolls/keepsakes/wooden items | charred edges, fire damage marks |
| Glowing/activated | Inner energy, faint glow | Keepsakes/ritual objects/jade | faintly glowing, inner radiance |
| Wrapped/sealed | Wrapped in cloth/box | Keepsakes/jewelry/secret objects | wrapped in brocade cloth, sealed in a wooden box |

---

## 3. State Variant Composition Specification

### Single-State Image

| Item | Constraint |
|---|---|
| Background | Clean neutral gray #E8E8E8 (consistent with the reference sheet) |
| Lighting | Warm soft light, no hard shadows |
| Angle | Consistent with the front view of the original reference sheet |
| Proportion | Prop occupies 70%+ of the image's main subject area |

### State Comparison Image

| Item | Constraint |
|---|---|
| Layout | 2-3 states displayed side by side in the same image |
| Labeling | State name labeled below each state |
| Consistency | Angle/lighting/background fully consistent, only the state differs |

---

## 4. Material State Change Rules

| Material | New → Everyday Use | Everyday Use → Old | Damage Presentation |
|---|---|---|---|
| Clay | Matte and smooth → slight wear | Wear → softened, dull coloring | Chips/cracks/shattering |
| Wood | Fresh wood grain → natural patina | Patina → dull coloring | Splitting/breaking/worm damage |
| Ceramic | Smooth glaze → faint scratches | Scratches → dull glaze | Cracks/shattering/chips |
| Metal | Slight sheen → faint patina | Patina → oxidation marks | Chips/curled edge/breakage |
| Fabric/paper | Brand new and flat → slight creasing | Creasing → yellowed and brittle | Tearing/charring/ink bleeding |

---

## 5. Prompt Template

### Single-State Variant

```
Based on the {prop name} reference sheet, claymation stop-motion ancient-style prop derivative state, stop-motion animation style, 3D cartoon rendering, warm-toned lighting,
{prop type}, {material description},
current state: {state name}, {state visual description},
{material surface change description},
pure prop still-life display, prop displayed independently, not held by anyone, not worn by anyone,
same image in a 2×2 grid: top-left front view + top-right side view + bottom-left back view + bottom-right detail closeup,
clean neutral gray background, warm soft light, no hard shadows,
ultra-clear material texture, matte clay texture, state details distinguishable
no text of any kind should appear in the image,
no person, hand, finger, or limb may appear in the image; the prop must not be in a held or worn state
```

---

## 6. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | The prop's core form/silhouette must be recognizable across all states |
| R2 | State changes must follow physical logic |
| R3 | Must use a 2×2 grid layout |
| R4 | Must specify a "clean neutral gray background," warm soft light, no hard shadows |

### Prohibited

| No. | Prohibited |
|---|---|
| X1 | Prop becoming unrecognizable after a state change |
| X2 | Damage that violates physical logic |
| X3 | Excessively bloody/gory damage depictions |
| X4 | Any person appearing |
| X5 | Prop being in a held/worn/in-use state |
| X6 | Cold hard lighting/strong contrast |
