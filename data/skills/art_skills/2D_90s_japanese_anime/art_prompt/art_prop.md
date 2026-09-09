# 90s Retro Japanese Anime Style - Prop Image Generation · Constraint Handbook

---

## 1. Prop Design Principles

1. **Function Readable** — the prop's purpose should be obvious at a glance; form follows function
2. **Extreme Texture Detail** — material texture must be clearly distinguishable (metal/jade/wood/cloth/paper)
3. **Period Style** — all props must match the 90s worldview, with a unified style
4. **Clear Scale** — imply the prop's real-world size through reference objects or annotation
5. **Standalone Prop Display Only** — only the prop itself may appear in frame; no characters, hands, or body parts allowed; the prop must not be held/worn/gripped, and must be presented independently as a still-life display

---

## 2. Prop Categories & Aesthetic Constraints

### 2.1 Weapons

| Item | Constraint | Prompt |
|---|---|---|
| Type | sword/blade/bow/spear/scythe | {weapon type}, 90s weapon |
| Material | metal + gem decoration + ribbon | metallic sheen, gem decoration |
| Decoration | engraving, tassels, retro patterns | fine engraving, retro patterns |
| Sheen | metallic sheen, gem reflections | metallic sheen, dazzling gems |
| Prompt | 90s {weapon}, forged metal, gem decoration | — |

### 2.2 Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Type | hair ornament/necklace/bracelet/ring | {accessory type}, 90s jewelry |
| Material | metal/gem/ribbon/pearl | metallic sheen, translucent gem |
| Craftsmanship | hand-drawn texture, retro style | fine craftsmanship, 90s style |
| Sheen | gem sheen / metallic sheen | dazzling gem, metallic sheen |
| Prompt | 90s {accessory}, {material}, fine craftsmanship | — |

### 2.3 Everyday Objects

| Item | Constraint | Prompt |
|---|---|---|
| Type | teaware/book/instrument/stationery | {object type}, 90s object |
| Material | metal/wood/paper/ceramic | clear material texture |
| Texture | smooth lines, soft coloring | smooth lines, clear texture |
| Style | minimal/ornate depending on scene | refined minimal / refined ornate |
| Prompt | 90s {object}, {material} texture, smooth lines | — |

### 2.4 Keepsakes / Key Story Props

| Item | Constraint | Prompt |
|---|---|---|
| Type | keepsake/token/scroll/potion bottle/magic item | {prop type}, 90s prop |
| Distinctiveness | must be recognizable, carry narrative symbolism | unique design, symbolic meaning |
| Condition | can add wear based on story needs | aged / brand new |
| Prompt | 90s {prop}, {material}, {condition}, unique design | — |

---

## 3. Multi-Angle Turnaround Specification

### View Definitions

| Position | View | Angle | Requirement | Prompt |
|---|---|---|---|---|
| Top-left | Front view | Front 0° | full frontal form of the prop | front view |
| Top-right | Side view | Side 90° | clear thickness/silhouette/structure | side view |
| Bottom-left | Back view | Back 180° | back structure/decoration of the prop | back view |
| Bottom-right | Detail close-up | Local zoom | material texture/craftsmanship detail | detail closeup |

### Frame Specification

| Item | Constraint |
|---|---|
| Layout | one image, 2×2 grid, four angles (up/down/left/right) |
| Background | warm off-white #F8F4E8 |
| Lighting | soft cinematic light, even soft light, no hard shadows |
| Proportion | prop fills 70%+ of its grid cell |
| Shadow | subtle natural ground shadow is allowed |
| Aspect ratio | 1:1 recommended |

---

## 4. Material Rendering Constraints

| Material | Rendering Requirement | Prompt |
|---|---|---|
| Metal | clear sheen, sharp lines | metallic texture, clear sheen |
| Jade | translucency, warm smoothness | translucent jade, warm smoothness |
| Wood | clear grain, sharp lines | clear wood grain, natural texture |
| Ceramic | smooth surface, even sheen | ceramic sheen, smooth surface |
| Cloth/Paper | fiber texture, clean edges | fabric texture, clean paper texture |
| Gemstone | translucency, refraction | translucent gem, refractive |

---

## 5. Prompt Template
```
90s retro Japanese anime style prop turnaround sheet, hand-drawn flat coloring, soft warm tones, fine flowing linework, cinematic lighting,
{prop type}, {material description}, {craftsmanship/decoration description}, {condition description},
standalone prop still-life display, prop shown independently, not held by anyone, not worn by anyone,
one image, 2×2 grid: top-left front view + top-right side view + bottom-left back view + bottom-right detail close-up,
warm off-white background, soft cinematic light, even soft light, no hard shadows,
ultra-clear material texture, hand-drawn texture, {material sheen description}
no text of any kind in the image,
no people, hands, fingers, or body parts may appear in frame; the prop must not be held or worn
```

---

## 6. Constraint Rules

### Must Follow

| ID | Rule |
|---|---|
| R1 | must specify "warm off-white background #F8F4E8" |
| R2 | must clearly state the prop's material and craftsmanship |
| R3 | prop design must match the 90s worldview style |

### Strictly Forbidden

| ID | Forbidden |
|---|---|
| X1 | complex scene backgrounds |
| X2 | prop and characters in the same frame |
| X3 | any human figure appearing |
| X4 | prop being held, gripped, worn, or in use |
| X5 | any element implying a person's presence |
