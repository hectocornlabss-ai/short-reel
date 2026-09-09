---
name: art_prop
description: Prop image generation · Constraint manual
metaData: art_skills
---

# Prop Image Generation · Constraint Manual

---

## 1. Prop Design Principles

1. **Readable function** — The prop's purpose must be obvious at a glance; form follows function
2. **Extreme texture fidelity** — Material texture must be clearly distinguishable (metal/jade/wood/fabric/paper/porcelain)
3. **Period consistency** — All props must fit the classical-fantasy world setting; modern elements are forbidden
4. **Explicit scale** — Imply the prop's real size via a reference object or annotation
5. **Pure prop, standalone display** — Only the prop itself may appear in the frame; no person, hand, or limb of any kind is allowed. The prop must not be held/worn/gripped — it must be presented independently as a still-life display

---

## 2. Prop Categories and Aesthetic Constraints

### 2.1 Weapons

| Item | Constraint | Prompt |
|---|---|---|
| Type | Sword/blade/bow/spear/fan | {weapon type}, guofeng weapon |
| Material | Fine steel/dark iron + gem inlay + silk sword tassel | forged fine steel, gem inlay |
| Decoration | Carved scabbard/hilt, tassels, hidden patterns | exquisite carving, hanging tassels |
| Sheen | Cold metallic sheen, reflective blade edge | cold sheen, metallic texture |
| Style | Guofeng anime | new Chinese-chic style, anime rendering |

### 2.2 Accessories

| Item | Constraint | Prompt |
|---|---|---|
| Type | Hairpin/hair clasp/beaded pendant/jade pendant/bracelet/earrings | {accessory type}, guofeng jewelry |
| Material | Gold/silver/jade/pearl/gemstone | woven gold thread, translucent jade |
| Craftsmanship | Extremely fine, filigree/wire inlay/gem-setting | fine craftsmanship, meticulous carving |
| Sheen | Pearlescent/jade luster/metallic sheen | lustrous pearl sheen, metallic sheen |
| Style | Guofeng anime | exquisite and lavish, new Chinese-chic |

### 2.3 Everyday Objects

| Item | Constraint | Prompt |
|---|---|---|
| Type | Tea set/wine vessel/incense burner/chessboard/scroll/lantern | {object type}, guofeng object |
| Material | Porcelain/bronze/bamboo/wood/paper | warm celadon, rustic red bronze |
| Texture | Clear glaze/wood grain/bamboo joints | glossy glaze, clear wood grain |
| Style | New Chinese-chic | understated elegance / lavish refinement |
| Rendering | Cel-shaded flat color | anime texture, delicate brushwork |

### 2.4 Tokens/Key Story Props

| Item | Constraint | Prompt |
|---|---|---|
| Type | Token/tally/scroll/vial/jade seal | {prop type}, guofeng prop |
| Distinctiveness | Must be recognizable, with narrative symbolism | unique design, deep symbolic meaning |
| Weathering | Aged look may be added as the story requires | worn and weathered / brand-new and exquisite |
| Style | Guofeng anime | new Chinese-chic style, anime feel |

### 2.5 Scholar's Four Treasures (New)

| Item | Constraint | Prompt |
|---|---|---|
| Type | Brush/ink/paper/inkstone | {stationery type}, scholar's four treasures |
| Material | Bamboo/wood/jade/ceramic | bamboo brush handle, ceramic inkstone |
| Texture | Clear wood grain/glaze/brush bristles | fine brush bristles, warm smooth inkstone |
| Style | Literati elegance | classical guofeng charm, delicate brushwork |

### 2.6 Festival Props (New)

| Item | Constraint | Prompt |
|---|---|---|
| Type | Lantern/fireworks/spring couplets/fu character | {festival type}, festival prop |
| Material | Paper/fabric/bamboo/silk | silk lantern, paper spring couplet |
| Texture | Clear paper/fabric texture | clear texture, delicate feel |
| Style | Festive and lively | bright colors, lively atmosphere |

---

## 3. Multi-Angle Reference Sheet Specification

### View Definitions

| Position | View | Angle | Requirement | Prompt |
|---|---|---|---|---|
| Top left | Front view | Front 0° | Full front form of the prop | front view |
| Top right | Side view | Side 90° | Thickness/silhouette/structure clearly shown | side view |
| Bottom left | Back view | Rear 180° | Back structure/decoration of the prop | back view |
| Bottom right | Detail closeup | Local zoom | Material texture/craftsmanship detail | detail closeup |

### Composition Specification

| Item | Constraint |
|---|---|
| Layout | Same-frame 2x2 grid, four angles top/bottom/left/right |
| Background | Plain moon-white color #E8EAF5 |
| Lighting | Even soft light, no hard shadows |
| Proportion | The prop occupies 70%+ of its cell |
| Shadow | A natural subtle ground shadow is allowed |
| Aspect ratio | 1:1 recommended |

---

## 4. Material Rendering Constraints

| Material | Rendering Requirement | Prompt |
|---|---|---|
| Metal | Reflections/highlights/cold sheen, faint visible scratches | metallic texture, cold sheen, clear reflections |
| Jade | Internal glow, warm and smooth, slightly translucent | translucent jade, warm and smooth as fat |
| Wood | Clear wood grain, visible growth rings | clear wood grain, warm smooth texture |
| Porcelain | Glossy glaze, uniform color | glossy glaze, warm porcelain texture |
| Fabric/paper | Fiber texture, natural edges | fabric texture, rustic paper texture |
| Gemstone | Refraction/internal light, clear facets | brilliant gemstone, refracted light |
| Cel-shaded texture | Uniform flat color, clean lines | cel-shaded flat color, delicate brushwork |

---

## 5. Prompt Template

Guofeng anime prop reference sheet,
guofeng anime, new Chinese-chic aesthetics, Japanese-style anime rendering, cel-shaded flat color, delicate brushwork, cinematic texture,
{prop type}, {material description}, {craftsmanship/decoration description}, {condition description},
pure prop still-life display, prop shown independently, not held by anyone, not worn by anyone,
same-frame 2x2 grid: top-left front view + top-right side view + bottom-left back view + bottom-right detail closeup,
plain moon-white background, even soft light, no hard shadows,
ultra-clear material texture, delicate feel, {material sheen description}
guofeng anime HD rendering, high detail, delicate lines, cel-shaded flat-color feel,
no subtitles, no watermark, no overlaid title text in the image,
no person, hand, finger, or limb of any kind may appear in the image; the prop must not be held or worn

---

## 6. Constraint Rules

### Mandatory

| No. | Rule |
|---|---|
| R1 | Must specify a "plain moon-white background" |
| R2 | Must clearly state the prop's material and craftsmanship |
| R3 | The prop's design must fit the classical-fantasy world setting |
| R4 | Must use a "2x2 grid" layout: front + side + back + closeup |
| R5 | Must include the "guofeng anime + cel-shaded flat color" keywords |

### Strictly Prohibited

| No. | Prohibition |
|---|---|
| X1 | Complex scene backgrounds |
| X2 | The prop appearing together with a person in the same frame (this stage is pure prop imagery) |
| X3 | Any human figure appearing, whether full body, partial body, or a body part (hand, finger, arm, etc.) |
| X4 | The prop being held, gripped, worn, or in use |
| X5 | Any element implying a person's presence (e.g. handling marks, a worn-from-POV angle, a usage pose) |
| X6 | Modern elements appearing in a classical-fantasy prop |
