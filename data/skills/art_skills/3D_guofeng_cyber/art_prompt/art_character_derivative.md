---
name: art_character_derivative
description: 3D Guofeng Cyber Character Derivative Asset Generation - Constraint Manual
metaData: art_skills
---

# 3D Guofeng Cyber Character Derivative Asset Generation - Constraint Manual
## (Dual-adaptation edition: Traditional Ancient-Style Scenes + Modern Urban Cyber Scenes)

---

## 1. Overlay Principles (Core Rules Shared by Both Scene Types)

1. **Face unchanged** — After overlay, facial features must exactly match the base model; face shift, deformation, or stylized alteration is forbidden
2. **Pose unchanged** — Keep the base model's natural standing pose; any change to pose/action/posture is forbidden
3. **Layer-by-layer control** — Each layer is described independently, with ancient-style and cyber elements layered separately, so layers can be swapped individually (change the outfit without changing the makeup, change cyber elements without changing the guofeng base)
4. **Unified style** — All costume/makeup elements must follow the same aesthetic system. **In ancient-style scenes, traditional Eastern aesthetics are the core with cyber elements as a light, optional fusion; in urban scenes, guofeng form is the base with cyber functionality as the core expression.** Never let guofeng and cyber elements appear disconnected or opposed
5. **No quality loss** — Texture quality after overlay must never fall below the base model; 3D PBR materials and cinematic lighting are the baseline across all scenes
6. **Costume/makeup scope only** — Only makeup/hairstyle/costume/accessories may be overlaid; introducing props, scenery, environment, or actions is forbidden
7. **One-click dual-scene adaptation** — With no explicit cyber/urban cues, default to pure ancient-style-compatible generation; with explicit cyber/urban cues, automatically match the guofeng cyber urban system, without needing to rebuild the underlying logic

---

## 2. Overlay Layers (Fully Dual-Scene-Compatible Layered Structure)

| Layer | Content | Dual-scene adaptation notes |
|---|---|---|
| L0 | Base model | Base figure; face, body type, and standing pose are fully locked, shared across ancient-style/urban scenes, no modification allowed |
| L1 | Makeup (decision layer) | First analyze user cues, then decide the strength and style of "base makeup / light makeup / formal makeup / cyber-functional makeup / urban commute makeup" — includes two systems: traditional ancient-style makeup and urban-cyber light-effect makeup |
| L2 | Hairstyle | Guofeng chignon/updo/braid + traditional hair accessories/cyber-functional hairpieces, includes two systems (traditional ancient-style styling, urban-cyber lightweight styling); high-precision hair strand standards apply across all scenes |
| L3 | Underlayer/inner garment | Replaces the white base underlayer; ancient-style scenes use traditional silk underlayers, urban scenes use guofeng-functional-fabric inner layers, may incorporate controlled circuit-pattern undertones and subtle neon light strips |
| L4 | Outer garment/main costume | Core dual-adaptation layer: ancient-style scenes use traditional Chinese formal/ceremonial/everyday hanfu; urban scenes use **cyber-functional wear centered on guofeng form** (must retain core Chinese structural elements such as stand collar/diagonal placket/frog buttons/ruqun), pure Western-style functional wear without a guofeng core is forbidden |
| L5 | Accessories | Traditional head/ear/neck/waist/hand ornaments + guofeng cyber-functional accessories/light-sensing components; ancient-style scenes favor traditional accessories with light cyber accents, urban scenes favor guofeng-cyber fusion accessories — purely Western cyber accessories are forbidden throughout |

> **Scope boundary**: Character derivative assets cover only layers L0-L5 (costume/makeup/hairstyle) and do not include props (hand-held items such as umbrellas/swords/fans/books/lanterns), scene environment (indoor/outdoor/weather, etc.), or pose/action (walking/looking back/raising a hand, etc.). Those belong to other asset types; cyber-functional elements are limited to the L1-L5 costume/makeup scope and must not modify the base model's body structure beyond this boundary.

---

## 3. Makeup Constraints (L1 - Ancient-Style + Urban Dual System)

### Base-model-to-derivative makeup strategy (key)

> The character base model is bare-faced, but derivative assets default to entering the makeup process. The system should analyze makeup needs from user cues, first matching the ancient-style/urban scene attribute, then deciding the intensity within that system. With no explicit scene cue, default to the ancient-style system; do not switch systems without cause.

### L1 Cue Analysis and Makeup Decision

| Step | Processing | Decision outcome |
|---|---|---|
| S1 | Extract user cues: facial-state words, emotion words, intensity words, style words, scene words (ancient-style/urban) | Form a two-dimensional "scene + makeup" requirement summary |
| S2 | Filter out non-makeup cues: prop/scene/action/pose words are not used as makeup grounds | Prevents misjudgment |
| S3 | First match the ancient-style/urban scene system, then match the makeup style matrix and assign an intensity tier | Ancient-style system: base makeup / light makeup / formal makeup; Urban system: commute makeup / business makeup / cyber-functional makeup |
| S4 | Generate the final L1 prompt | Output only the conclusion, not the analysis process |

### Cue-to-Makeup Mapping (Execution Guide - Dual-Scene Adapted)

| Cue type | Typical cues | Scene match | L1 decision |
|---|---|---|---|
| No obvious scene/facial-emphasis cues | Only outfit/hairstyle change, no emphasis on emotion or state | Ancient-style default | Base makeup |
| Slight facial cues | Gentle, smiling, lashes trembling slightly, faint glow | Shared by ancient-style/urban | Light makeup (very subtle) |
| Clear ancient-style everyday cues | Daily life, boudoir, outing, casual, literati gathering | Ancient-style scene | Base makeup (natural and fresh) |
| Clear ancient-style formal/ceremonial cues | Wedding, ceremony, imperial court, important occasion | Ancient-style scene | Formal makeup (refined and luxurious) |
| Clear urban everyday cues | Commute, urban daily life, casual outing | Urban cyber scene | Urban commute makeup (fresh, natural + very subtle texture) |
| Clear urban formal cues | Business, holographic meeting, urban gala | Urban cyber scene | Urban business makeup (refined matte + cool-toned texture) |
| Clear cyber-functional cues | Cyber, functional, night operations, mission, neon, futuristic | Urban cyber scene | Cyber-functional makeup (controlled light effects, fused with guofeng) |

> Judgment principles:
> 1. All derivative assets require makeup; first match the system by scene cue, then decide intensity and style by facial cue — props, scenery, and pose changes must not independently raise makeup intensity
> 2. Cyber-functional cues may only trigger urban-cyber-system makeup; without a corresponding cue, cyber light-effect makeup must not be added
> 3. In ancient-style scenes with no explicit cyber cue, adding any cyber light-effect/functional makeup is forbidden, ensuring pure ancient-style scenes remain fully compliant

### Female Makeup Style Matrix (Full Dual-Scene Coverage)

| System | Style | Applicable scenes | Core prompt |
|---|---|---|---|
| Ancient-style system | Elegant plain makeup | Ancient-style daily life, first meeting, boudoir, literati gathering | elegant makeup, softly swept brows, plain fresh complexion |
| Ancient-style system | Courtly noble makeup | Ancient-style court, formal, power, gala | refined makeup, sharp brow shape, rosy lip color |
| Ancient-style system | Romantic peach-blossom makeup | Ancient-style date, heart-fluttering, sweet scenes | peach-blossom makeup, faintly reddened outer eye corners, dewy lip color |
| Ancient-style system | Grand wedding makeup | Ancient-style wedding, ceremony | bold gorgeous makeup, vermilion lips, phoenix eyes |
| Ancient-style system | Festival celebration makeup | Ancient-style festival, gathering | bright colors, pastel makeup |
| Urban-cyber system | Urban commute makeup | Urban daily life, commute, casual outing | fresh no-makeup look, natural brow shape, even base makeup, no exaggerated color |
| Urban-cyber system | Urban business makeup | Urban business, holographic meeting, formal occasion | matte cool-toned base, crisp brow shape, deep eye makeup, low-saturation lip color texture |
| Urban-cyber system | Cyber luminous makeup | Urban night operations, cyber scenes, functional leisure | subtle neon light effect at outer eye corners, skin-hugging circuit undertones, glittering lip color with subtle shimmer, fresh non-heavy makeup finish |
| Urban-cyber system | Functional cool-toned makeup | Urban mission, action, strong-presence scenes | matte cool-toned base, crisp brow shape, deep eye makeup, localized matte functional texture, no exaggerated light effects |

### Universal Base Skin (Shared by All Makeup Styles - Both Scenes)

| Item | Constraint | Prompt |
|---|---|---|
| Texture | PBR material rendering, naturally luminous, controlled texture — 3D texture standard unified across all scenes | PBR material, natural sheen, soft texture, fine skin texture |
| Fairness | Pink-white base tone, translucent without being pallid | pink-white base tone, fair and radiant |
| Inner glow | Soft light radiating from within | inner glow, translucent radiant skin |
| Cyber adaptation | Only the urban-cyber system may add skin-hugging circuit undertones and subtle neon light effects; must not override the base model's skin texture; forbidden in the ancient-style system | skin-hugging circuit undertones, controlled subtle neon light effect, naturally blended with skin |
| Forbidden | Matte/deathly pale/waxy/oily/overexposed look, large-area cyber paint covering the base model, glaring harsh light, adding cyber elements to ancient-style scenes without cause | — |

### Base Makeup Detail (Ancient-Style Default Tier - Shared Across Both Scenes)

| Item | Constraint | Prompt |
|---|---|---|
| Brows | Lightly groomed along the base model's brow shape, without changing the brow shape | natural groomed brows, clean brow shape |
| Eyes | Very subtle eye touch-up, emphasizing clarity and brightness | clear eyes, very subtle eyeshadow |
| Cheeks | Very subtle glow enhancement, pastel blush | natural cheek glow, pastel blush |
| Lips | Light pink or vermilion tint, kept restrained | natural moist lip color, light pink lips |
| Overall | Makeup is visible but very light | base makeup, natural makeup look, soft texture |

### Male Makeup (Dual-Scene Adapted)

| System | Item | Constraint | Prompt |
|---|---|---|---|
| Ancient-style general | Base skin | PBR material rendering, fair and radiant, fresh and natural | PBR material, fair and radiant, natural sheen |
| Ancient-style general | Core principle | "No-makeup" look — appears unmade-up but with excellent skin | no-makeup look, naturally flawless skin |
| Ancient-style general | Eyebrows | Naturally thick brows, without changing the base model's brow shape | natural sword brows, sharp brow shape |
| Ancient-style general | Lip color | Natural healthy tone, slightly dewy | natural lip color, healthy tone |
| Urban-cyber system | Cyber adaptation | Only localized matte functional texture and very faint circuit undertones may be added, no exaggerated light effects, forbidden without explicit cue | very faint skin-hugging circuit undertones, matte functional texture, no strong light |
| Urban-cyber system | Urban business makeup | Matte fresh base, crisp brow shape, no excessive makeup look | matte fresh base, crisp brow shape, no-makeup texture |

---

## 4. Hairstyle Constraints (L2 - Ancient-Style + Urban Dual System)

### Female Style Types (Full Dual-Scene Coverage)

| System | Style | Description | Applicable scenes | Prompt |
|---|---|---|---|---|
| Ancient-style system | High chignon with cloud-like hair | High bun + traditional hair accessories | Ancient-style court, formal, gala | high chignon, elegant updo, traditional Chinese form |
| Ancient-style system | Double-ring buns | Symmetrical double rings, youthful | Ancient-style young character, everyday | double-ring buns, youthful style, traditional Chinese styling |
| Ancient-style system | Duoma (fallen-horse) bun | Low side bun, languid feel | Ancient-style everyday, casual, boudoir | duoma bun, languid side bun, traditional Chinese styling |
| Ancient-style system | Loose flowing hair | Fully loose long hair, falling naturally | Ancient-style boudoir, private, night | flowing loose hair, natural fall, traditional Chinese texture |
| Ancient-style system | High ponytail | Tied high, capable and crisp | Ancient-style martial arts, action scenes | high ponytail, capable and crisp, traditional Chinese tied hair |
| Ancient-style system | Half-up hairstyle | Half-tied at the crown + hair hanging behind | Ancient-style everyday, outing | half-up cloud bun, natural loose hair, traditional Chinese styling |
| Urban-cyber system | Guofeng half-up low ponytail | Chinese half-up style + low ponytail, crisp not sloppy | Urban commute, daily outing | guofeng half-up low ponytail, Chinese braid accents, crisp everyday look, high-precision hair strands |
| Urban-cyber system | Guofeng high functional bun | Chinese high bun + functional structural fixture, may embed subtle neon light strips | Urban formal, holographic gala, functional scenes | guofeng high functional bun, titanium hairpiece fixture, embedded controlled subtle neon light strip |
| Urban-cyber system | Guofeng semi-mechanical braid | Chinese three-strand braid + functional braided cord, faint-glow tassel accents | Urban casual, night operations, cyber scenes | guofeng semi-mechanical braid, Chinese braid base, functional braided cord, light-sensing tassel accents |
| Urban-cyber system | Guofeng high ponytail | Chinese tied-hair base + high ponytail, functional hair clip fixture | Urban functional, action, mission scenes | guofeng high ponytail, Chinese tied-hair base, functional hair clip fixture, crisp and capable |

### Female Hair Accessories (Dual-Scene Adapted)

| System | Constraint | Prompt |
|---|---|---|
| Ancient-style system | Ornate and refined, matching the outfit, purely traditional Chinese materials and craftsmanship, no cyber elements (forbidden without explicit cue) | ornate hair accessories, exquisite craftsmanship, gold and silver hairpins, jeweled hair full of pearls, fine carving |
| Urban-cyber system | Guofeng form as core, matching the outfit, fusion of traditional materials with cyber-functional materials, controllable light effects | guofeng cyber hair accessories, exquisite craftsmanship, gold-silver-jade ornaments + titanium functional pieces, controlled subtle neon light strip, holographic projection accents |

### Male Style Types (Full Dual-Scene Coverage)

| System | Style | Applicable scenes | Prompt |
|---|---|---|---|
| Ancient-style system | Half-crown tied hair | Ancient-style everyday, literati, gathering | half-crown tied hair, jade hairpin, traditional Chinese styling |
| Ancient-style system | Full crown high-tied hair | Ancient-style formal, court, gala | full crown high-tied hair, jade crown, traditional Chinese form |
| Ancient-style system | Loose hair over the shoulders | Ancient-style private, night scenes | loose hair over shoulders, ink-black flowing hair, traditional Chinese texture |
| Ancient-style system | High-tied ponytail | Ancient-style combat, martial arts scenes | high battle ponytail, crisp ponytail, traditional Chinese tied hair |
| Urban-cyber system | Guofeng functional half-crown tied hair | Urban daily life, commute, business scenes | guofeng functional half-crown tied hair, Chinese tied-hair base, matte titanium hairpiece, crisp and capable |
| Urban-cyber system | Guofeng low ponytail | Urban casual, daily outing | guofeng low ponytail, Chinese tied-hair base, minimalist functional hair clip, natural texture |
| Urban-cyber system | Guofeng high functional hair | Urban functional, mission, night scenes | guofeng high functional hair, Chinese tied-hair base, full-wrap functional hair crown, matte finish |

---

## 5. Costume Constraints (L3+L4 - Core Dual-Scene Adaptation Layer)

### Core Red Line (Shared Across Both Scenes - Non-Negotiable)
**All costumes must be absolutely anchored to traditional Chinese form.** Ancient-style scenes strictly follow Chinese garment cutting logic; urban cyber scenes must retain at least one core Chinese structural element (stand collar/diagonal placket/frog buttons/ruqun/parallel front/wide sleeves). Pure Western suits, pure functional windbreakers, or pure Western cyberpunk costumes without a guofeng core are forbidden — the guofeng base must never be lost in either ancient-style or urban scenes.

### Female Costume Matrix (Full Dual-Scene Coverage)

| System | Style | Core design | Applicable scenes | Prompt |
|---|---|---|---|---|
| Ancient-style system | Ancient-style everyday long dress | Chinese ruqun form, flowing hem, traditional embroidery | Ancient-style daily life, boudoir, gathering, outing | ancient-style ruqun long dress, flowing gown, silk texture, traditional Suzhou embroidery motifs, multi-layered wear |
| Ancient-style system | Court ceremonial dress | Chinese ceremonial form, wide-sleeved robe, layered hem, luxurious embroidery | Ancient-style court, formal, gala, power scenes | ancient-style court ceremonial dress, luxurious gown, Chinese wide-sleeved robe, gold-thread embroidery, layered hem |
| Ancient-style system | Light everyday wear | Chinese short jacket, stand collar with diagonal placket, fitted waist, crisp and unencumbered | Ancient-style action, martial arts, outing scenes | ancient-style light everyday wear, short jacket cut, stand collar diagonal placket, cotton/linen/silk texture, crisp and capable |
| Ancient-style system | Sleepwear | Sheer silk underlayer, plain-colored silk, loose and comfortable | Ancient-style indoor, night, private scenes | ancient-style sleepwear, loose and comfortable, sheer silk material, plain simple tone |
| Ancient-style system | Grand wedding attire | Phoenix crown and red cape form, layered red robes, traditional wedding motifs | Ancient-style wedding, grand ceremony | ancient-style wedding attire, phoenix crown and red cape, layered red robes, gold-thread embroidery, traditional Chinese wedding form |
| Urban-cyber system | Guofeng commute wear | Chinese stand-collar/diagonal-placket shirt, modified short ruqun, functional fabric paneling, understated everyday look | Urban daily life, commute, casual outing | guofeng cyber commute wear, Chinese stand collar diagonal placket, modified ruqun cut, silk and matte functional fabric paneling, minimalist embroidery, crisp everyday look |
| Urban-cyber system | Guofeng business formalwear | Chinese parallel-front suit form, modified Tang-suit structure, premium matte fabric, understated luxury | Urban business, holographic meeting, formal occasion | guofeng cyber business formalwear, Chinese parallel-front Tang-suit base, premium matte fabric, structured tailoring, minimalist Chinese motifs, understated luxury |
| Urban-cyber system | Light functional guofeng everyday wear | Chinese short jacket + functional vest, diagonal placket with frog buttons + magnetic clasps, fitted waist, light and crisp | Urban action, night operations, functional leisure scenes | light functional guofeng everyday wear, Chinese diagonal-placket short jacket, functional vest paneling, magnetic frog buttons, matte functional fabric, crisp and capable |
| Urban-cyber system | Guofeng cyber wedding/gala attire | Chinese phoenix-crown-and-cape/ceremonial form, titanium structural elements, layered hem, controlled subtle neon light strips | Urban wedding, holographic gala, important occasion | guofeng cyber gala attire, core Chinese ceremonial form, silk paired with 3D-printed structural panels, gold-thread embroidery fused with circuit undertones, controlled subtle neon light strip |
| Urban-cyber system | Guofeng functional sleepwear | Chinese diagonal-placket underlayer, sheer silk paired with functional lining, loose and comfortable, subtle sheen texture | Urban indoor, night, private scenes | guofeng functional sleepwear, Chinese diagonal-placket form, loose and comfortable, sheer silk and functional fabric paneling, subtle sheen texture |

### Female Costume General Constraints (Dual-Scene Adapted)

| Item | Constraint | Prompt |
|---|---|---|
| Primary color | Ancient-style scenes default to traditional Chinese color tones; urban scenes may pair with low-saturation cyber cool-tone contrasts and controlled neon accents — high-saturation glaring color schemes are forbidden | traditional Chinese color tone, guofeng cyber color scheme, low-saturation contrast, controlled neon color accents |
| Material | Ancient-style scenes default to silk + embroidery + pearlescent fabric; urban scenes may add matte functional fabric panels, high-gloss reflective strips, 3D-printed structural pieces — the guofeng core fabric base must be retained | silk texture, embroidery detail, purely traditional fabric in ancient-style scenes; traditional fabric paneled with functional fabric plus 3D-printed structural elements in urban scenes |
| Texture pattern | Ancient-style scenes default to traditional Chinese motifs; urban scenes may fuse traditional motifs with circuit textures and cyber undertones, ultra-clear texture rendering, pure cyber texture without a guofeng core is forbidden | clear garment texture, ultra-clear pattern detail, purely traditional Chinese motifs in ancient-style scenes; traditional motifs deeply fused with circuit texture in urban scenes |
| Shoulders | Ancient-style scenes default to guofeng cloud-collar cape/pibo shawl; urban scenes may pair with functional shoulder armor/structural decoration, must remain unified with the Chinese form | gorgeous cloud collar and flowing pibo shawl in ancient-style scenes; guofeng functional shoulder-armor accents in urban scenes, unified with the overall form |
| Layering | Multi-layered wear with clear layering, unified logic between guofeng inner and outer garments; urban functional structure must not disrupt the layering logic | multi-layered wear, clear layering, unified Chinese formal logic |
| Light effect | Only urban cyber scenes may add embedded subtle neon light strips, with controlled, non-glaring light effects that do not disrupt the costume texture, no overexposure; forbidden in ancient-style scenes without explicit cue | embedded subtle neon light strip in urban scenes, controlled light effect, no overexposure, naturally blended with the costume |

### Male Costume Matrix (Full Dual-Scene Coverage)

| System | Style | Applicable scenes | Prompt |
|---|---|---|---|
| Ancient-style system | Scholar's robe | Ancient-style daily life, study, gathering, outing | ancient-style scholar's robe, long-gown form, stand collar diagonal placket, silk/cotton/linen texture, traditional motif embroidery |
| Ancient-style system | General's battle wear | Ancient-style combat, martial-arts practice, action scenes | ancient-style general's battle wear, battle-robe form, stand collar with fitted waist, durable fabric, crisp and capable |
| Ancient-style system | Court ceremonial robe | Ancient-style court, ceremony, gala | ancient-style court robe, formal ceremonial form, wide-sleeved robe, luxurious fabric, traditional motifs |
| Ancient-style system | Everyday casual wear | Ancient-style casual, private, daily outing | ancient-style everyday casual wear, simple style, comfortable fabric, Chinese stand collar, loose and fitting |
| Ancient-style system | Grand ceremonial robe | Ancient-style formal, celebration, important occasion | ancient-style grand ceremonial robe, luxurious and refined, Chinese ceremonial form, premium fabric, gold-thread embroidery |
| Urban-cyber system | Guofeng business commute wear | Urban daily life, commute, business meeting | guofeng business commute wear, Chinese stand-collar Tang-suit base, modified suit tailoring, premium matte fabric, minimalist Chinese motifs, crisp and fitting |
| Urban-cyber system | Guofeng functional casual wear | Urban daily life, casual outing, light functional scenes | guofeng functional casual wear, Chinese diagonal-placket short jacket, functional fabric paneling, magnetic frog buttons, loose and comfortable, everyday versatile |
| Urban-cyber system | General's functional battle wear | Urban action, mission, night scenes | guofeng general's functional battle wear, Chinese battle-robe base, matte functional fabric, 3D protective structural elements, stand collar with fitted waist, crisp and capable |
| Urban-cyber system | Guofeng gala attire | Urban holographic gala, formal occasion, wedding | guofeng gala attire, core Chinese ceremonial form, luxurious fabric, titanium structural accents, traditional motifs fused with circuit undertones |

---

## 6. Accessory Constraints (L5 - Dual-Scene Adapted)

### Female Accessories (Dual Systems by Scene)

| System | Type | Constraint | Prompt |
|---|---|---|---|
| Ancient-style system | Headwear | Ornate and refined, not sparse, purely traditional Chinese materials, matching hairstyle and costume | ornate headwear, hair full of pearls and jade, gold and silver hairpins, jade step-shake ornament, fine carving |
| Ancient-style system | Earrings | Traditional dangling tassels/jade danggui earrings, unified with the overall style | tassel earrings, dangling jade danggui, jade earrings, gold-silver inlay |
| Ancient-style system | Necklace | Traditional yingluo necklace/collar, traditional Chinese form | gorgeous yingluo necklace, refined collar, gold-silver-jade inlay |
| Ancient-style system | Waist accessory | Traditional palace sash/jade pendant, traditional Chinese craftsmanship | flowing palace sash, waist jade pendant, jade "jinbu" ornament, refined weaving |
| Ancient-style system | Hand accessory | Traditional jade bangle/armlet, traditional Chinese form | translucent jade bangle, refined armlet, gold-silver-jade material |
| Urban-cyber system | Headwear | Guofeng form as core, fusion of traditional materials with cyber-functional materials, matching hairstyle and costume, controllable light effect | guofeng cyber headwear, pearl/jade + titanium functional pieces, controlled subtle neon light strip, holographic projection accents, exquisite craftsmanship |
| Urban-cyber system | Earrings | Fusion of traditional jade danggui with cyber-functional drop earrings, controlled non-exaggerated light-sensing tassel | guofeng functional drop earrings, jade inlay + titanium material, controlled subtle neon light-sensing tassel, refined and delicate |
| Urban-cyber system | Necklace | Fusion of traditional yingluo with functional collar, Chinese form as core | guofeng functional collar, yingluo structure + titanium material, embedded controlled subtle light, refined fit |
| Urban-cyber system | Waist accessory | Fusion of traditional palace sash/jade pendant with functional waist wrap, magnetic clasp, structured form | guofeng functional waist wrap, wide waist wrap paneled with palace sash, waist jade pendant, titanium magnetic clasp, distinct texture |
| Urban-cyber system | Hand accessory | Fusion of traditional jade bangle with functional wristband, Chinese form as core, no exaggerated design | guofeng functional wristband, translucent jade bangle + titanium material, controlled subtle light, refined fit |

### Male Accessories (Dual Systems by Scene)

| System | Type | Constraint | Prompt |
|---|---|---|---|
| Ancient-style system | Hair crown | Traditional jade crown/gold crown, refined craftsmanship, traditional Chinese form, matching hairstyle and costume | jade crown tied hair, gold crown tied hair, jade carving, exquisite craftsmanship |
| Ancient-style system | Waist wrap | Traditional wide waist wrap/leather belt, traditional Chinese form, distinct texture | wide waist wrap, leather belt, jade belt hook, distinct texture |
| Ancient-style system | Jade pendant | Traditional translucent warm jade pendant, traditional Chinese craftsmanship, worn at the waist | waist jade pendant, translucent and warm, Hetian jade material, refined carving |
| Ancient-style system | Waist accessories | Sword/fan/flute limited to fixed waist accessories only, **hand-held props forbidden**, traditional Chinese form | fixed sword accessory at the waist, folding fan hung at the waist, bamboo flute waist accessory, no hand interaction |
| Urban-cyber system | Hair crown | Traditional jade crown form fused with titanium functional material, matte craftsmanship, refined modeling, matching hairstyle and costume | guofeng functional hair crown, Chinese crown-ornament base, matte titanium material, jade inlay, exquisite craftsmanship |
| Urban-cyber system | Waist wrap | Traditional wide waist wrap form fused with functional structure, magnetic clasp, structured tailoring, distinct texture | guofeng functional waist wrap, Chinese waist-wrap base, matte functional fabric, titanium magnetic clasp, 3D structure |
| Urban-cyber system | Jade pendant | Traditional jade form fused with acrylic light-sensing material, translucent and warm, controllable subtle light, worn at the waist | guofeng light-sensing jade pendant, traditional form, acrylic + jade material, translucent and warm, controllable subtle light |
| Urban-cyber system | Waist accessories | Traditional form fused with functional material, limited to fixed waist accessories only, **hand-held props forbidden** | fixed functional sword accessory at the waist, titanium folding fan hung at the waist, no hand interaction |

---

## 7. Costume/Makeup Combination Quick Reference (Full Dual-Scene Coverage)

| System | Scene | Makeup | Hairstyle | Costume | Accessories |
|---|---|---|---|---|---|
| Ancient-style system | Boudoir daily life | Elegant plain makeup | Loose hair/half-up hairstyle | Ancient-style everyday long dress | Moderate (traditional simple accessories) |
| Ancient-style system | First meeting/gathering | Elegant plain makeup | Half-up hairstyle/duoma bun | Ancient-style everyday long dress | Moderate-to-many (refined traditional accessories) |
| Ancient-style system | Romantic interaction | Romantic peach-blossom makeup | Half-up hairstyle/duoma bun | Ancient-style everyday long dress/light everyday wear | Moderate |
| Ancient-style system | Formal court gala appearance | Courtly noble makeup | High chignon with cloud-like hair | Court ceremonial dress | Very ornate (traditional luxurious accessories) |
| Ancient-style system | Private at night | Elegant/peach-blossom makeup | Loose hair/duoma bun | Sleepwear | Minimal (no extra accessories) |
| Ancient-style system | Grand wedding ceremony | Grand wedding makeup | High chignon with cloud-like hair | Grand wedding attire | Very ornate (full phoenix-crown-and-cape accessory set) |
| Ancient-style system | Martial arts/action | Plain makeup (very light) | High ponytail | Light everyday wear/general's battle wear | Simple (basic fixed accessories only) |
| Urban-cyber system | Urban commute daily life | Urban commute makeup | Guofeng half-up low ponytail | Guofeng commute wear | Low-to-moderate (minimalist guofeng functional accessories) |
| Urban-cyber system | Urban business formal occasion | Urban business makeup | Guofeng functional half-crown tied hair | Guofeng business formalwear | Moderate (understated luxurious guofeng functional accessories) |
| Urban-cyber system | Urban holographic gala appearance | Courtly noble makeup/cyber luminous makeup | Guofeng high functional bun | Guofeng cyber gala attire | Very ornate (guofeng + cyber fusion luxurious accessories) |
| Urban-cyber system | Urban night operations/functional mission | Functional cool-toned makeup | Guofeng high ponytail | Light functional guofeng everyday wear/general's functional battle wear | Simple (functional fixed accessories only) |
| Urban-cyber system | Urban casual date | Romantic peach-blossom makeup/cyber luminous makeup | Guofeng semi-mechanical braid | Guofeng commute wear/light functional everyday wear | Moderate (subtle-glow guofeng accessories) |
| Urban-cyber system | Private night scenes | Elegant plain makeup | Loose hair/low ponytail | Guofeng functional sleepwear | Minimal (no extra accessories) |
| Urban-cyber system | Urban wedding ceremony | Grand wedding makeup | Guofeng high functional bun | Guofeng cyber wedding attire | Very ornate (full guofeng + cyber fusion accessory set) |

---

> **Inference rules for uncovered scenes (shared across both scene types)**
>
> When the user-described scene/situation is not in the table above, infer based on the style's core traits — **first lock in the ancient-style/urban scene system, then match the corresponding dimension rules**:
>
> | Inference dimension | Ancient-style core traits | Urban-cyber core traits |
> |---|---|---|
> | Makeup intensity | Default elegant plain makeup; court/power/formal -> courtly noble makeup; heart-fluttering/sweet -> romantic peach-blossom makeup; wedding/ceremony -> grand wedding makeup; festival gathering -> festival celebration makeup | Default urban commute makeup; business/formal -> urban business makeup; heart-fluttering/sweet -> romantic peach-blossom makeup; gala/wedding -> courtly noble makeup; cyber/functional/night -> cyber luminous makeup/functional cool-toned makeup |
> | Hairstyle | Daily life/boudoir -> half-up hairstyle or duoma bun; court/formal/gala -> high chignon with cloud-like hair; private/night -> loose hair; martial arts/action -> high ponytail | Daily life/commute -> half-up low ponytail; business/formal -> functional half-crown tied hair; gala/wedding -> high functional bun; private/night -> loose hair/low ponytail; functional/action -> high ponytail |
> | Costume | Traditional Chinese form is absolutely core; emotional scenes -> flowing ruqun long dress; power/formal -> court ceremonial dress; action -> light everyday wear; PBR material always locked in; purely traditional Chinese motifs are the default | Core Chinese form is the absolute base; daily life/commute -> guofeng commute wear; business/formal -> guofeng business formalwear; action/functional -> light functional everyday wear; PBR material always locked in; traditional motifs fused with circuit texture is the default |
> | Accessory density | Daily life -> moderate; formal/court -> very ornate; private -> minimal; action -> simple; purely traditional Chinese accessories are core | Daily life -> low-to-moderate; business/gala -> very ornate; private -> minimal; action -> simple; guofeng + cyber fusion accessories are core, with controllable light effects |
> | Texture baseline | PBR material + cinematic soft light always locked in; volume and sheen take priority over flat decoration; no cyber light effects (forbidden without explicit cue) | PBR material + cinematic lighting always locked in; volume and sheen take priority over flat decoration; cyber light effect is embedded, controlled subtle neon — overexposure forbidden; guofeng and cyber elements deeply fused, with no sense of disconnect |

## 8. Four-View Reference Sheet Specification (Shared Across Both Scenes - Unified 3D Render Standard)

> After derivative costume/makeup overlay, a four-view reference sheet must still be produced, ensuring the costume/makeup, motifs, cyber light effects, and structural pieces are fully consistent from every angle, applicable to both ancient-style and urban scenes.

### View Definitions

| Position | View | Angle | Framing | Requirement | Prompt |
|---|---|---|---|---|---|
| Far left | Portrait close-up | Front, eye-level | Face to collarbone | Face occupies 60%+, facial features/makeup/makeup-effect detail 100% clear | portrait closeup, face detail, makeup detail |
| Second from left | Front view | Front 0° | Full-body standing figure | Facing camera, full frontal view of costume, structure/motifs/light-strip placement clear | front view, height mark, costume detail |
| Second from right | Side view | Right 90° | Full-body standing figure | Pure side silhouette, side layering of costume, side structural form clear | side view, profile, height mark, costume profile detail |
| Far right | Back view | Rear 180° | Full-body standing figure | Back-of-head hair accessories/back of costume/hair tips/back structure clear | back view, rear view, height mark, rear costume detail |

### Frame Specification (Shared Across Both Scenes - Non-Negotiable)

| Item | Constraint |
|---|---|
| Layout | Same frame, four views arranged left to right, shared layout across both scene types |
| Background | Plain solid gray #B8B8B8, **no scene/environment/weather elements of any kind**, shared across both scene types |
| Stance | Natural standing, feet parallel with a slight gap, arms naturally hanging or slightly extended (**no pose changes of any kind**), shared across both scene types |
| Expression | A micro-expression matching the makeup style, facial micro-expression only, no body language, shared across both scene types |
| Lighting | General standard: even soft light, front key light + dual-side fill light, no hard shadows; urban cyber scenes may add controllable self-luminous reflections without disrupting overall lighting consistency, no overexposure |
| Consistency | Face/makeup/hairstyle/hair accessories/costume/accessories/motifs/light effects/structural pieces must be perfectly consistent across all four views, no deviation |
| Frame ratio | Recommended 4:1 or 3:1, shared across both scene types |
| 3D standard | Unified high-precision modeling, PBR material, 8K ultra HD, cinematic rendering across all scenes, no texture-quality difference between ancient-style and urban scenes |

---

## 9. Prompt Template (One-Click Dual-Scene Adaptation - Dedicated to 3D Guofeng Cyber)

### Output Format Constraint (Shared Across Both Scenes - Ironclad Rule)

| Item | Constraint |
|---|---|
| Output content | **Output prompt text only**, no other content |
| Forbidden output | Quick-reference tables, layered construction plans, visual constraint tables, prohibition tables, derivative plans, output recommendations, key-element tables, or any other non-prompt content |
| Forbidden scene content | Character derivative assets **do not include scene/environment description** — no scene/environment/weather/background narrative content of any kind (scenes belong to the scene-asset category) |
| Forbidden props | **No prop interaction of any kind** — no hand-held or interactive items such as umbrellas/swords/fans/books/lanterns/wine cups (props belong to the prop-asset category) |
| Forbidden pose changes | **The base model's pose must not be changed** — no actions or posture changes such as walking/looking back/raising a hand/turning sideways/running; maintain a natural standing pose |
| Format | Output the usable prompt code block directly, no titles, tables, explanations, or plan comparisons needed |

### Full Costume/Makeup Overlay (Four-View - One-Click Dual-Scene Adaptation)

```
Using the character's base reference image, apply img2img costume/makeup overlay,
3D guofeng cyber style, {scene system: ancient-style/urban cyber}, high-precision modeling, PBR material, Chinese aesthetics as core, {light ancient-style fusion/urban functional fusion}, cinematic lighting,
guofeng cyber {gender} character four-view reference sheet, 3D render, high-precision modeling, 8K, ultra-realistic
character design sheet, character turnaround,
keep the base reference's face exactly consistent and the natural standing pose unchanged, {overall temperament},
[L1 - Makeup] Decided from user cues: {base makeup/light makeup/formal makeup/urban commute makeup/business makeup/cyber-functional makeup}; use {makeup style}, PBR material rendering, {brow makeup}, {eye makeup}, {lip makeup}, {controlled subtle neon light effect/skin-hugging circuit undertone (add as needed)},
[L2 - Hairstyle] {style type}, high-precision hair strands clearly rendered, {hair accessory description}, guofeng form as core,
[L3+L4 - Costume] {primary color}{style}, {material}, {decorative craftsmanship}, {traditional motifs/traditional motifs fused with circuit texture}, clear garment texture, PBR material rendering, {embedded controlled subtle neon light strip (add as needed)},
[L5 - Accessories] {headwear}, {earrings}, {necklace}, {waist accessory}, {hand accessory}, guofeng form as core, unified with the costume/makeup style,
same frame, arranged left to right: portrait close-up + front view + side view + back view,
natural standing pose, plain solid gray background, even soft light, no hard shadows, {controlled non-glaring cyber light effect (add as needed)},
face/makeup/hairstyle/costume/accessories/motifs/light effects fully consistent across the four views, clear 3D guofeng cyber modeling, clear high-precision modeling,
no text of any kind in the image
```

---

## 10. Constraint Rules (Shared Across Both Scenes - Mandatory + Strictly Forbidden)

### Mandatory Rules (100% enforced, no exceptions)

| No. | Rule |
|---|---|
| R1 | After overlay, the face must exactly match the base model — any facial-feature shift, deformation, or stylized alteration is forbidden |
| R2 | Costumes must use "clear garment texture + PBR material rendering" — cyber elements must not disrupt the base costume texture or the guofeng core form |
| R3 | All scenes must be absolutely anchored to traditional Chinese guofeng form; ancient-style scenes stay purely traditional guofeng, urban scenes must not lose the guofeng base — pure Western designs without a guofeng core are forbidden |
| R4 | Makeup/hairstyle/costume/accessory/cyber-element style must be fully unified — guofeng and cyber elements must never appear disconnected or opposed |
| R5 | A four-view reference sheet must be output (portrait close-up + front view + side view + back view), shared across ancient-style and urban scenes |
| R6 | A "plain solid gray background" must be specified — no scene/environment/weather elements of any kind, shared across ancient-style and urban scenes |
| R7 | "Four-view consistency" must be specified — all costume/makeup, motifs, cyber light effects, and structural pieces must be fully unified across the four views |
| R8 | **Output prompts only** — quick-reference tables/layered plans/visual constraints/prohibition lists/derivative plans/output recommendations, or any other non-prompt content are forbidden |
| R9 | **No scene description allowed** — character derivative assets do not involve scene/environment/weather/background narrative; scenes are an independent asset type |
| R10 | **No prop interaction allowed** — no hand-held or interactive items (umbrella/sword/fan/book, etc.); props are an independent asset type, except for fixed waist accessories |
| R11 | **Pose must remain unchanged** — the base model's natural standing pose must be preserved; any action/posture/stance change is forbidden |
| R12 | **L1 must analyze before deciding** — first parse the user's scene cues, facial cues, and style cues, then match the corresponding system to determine the makeup tier |
| R13 | **All derivative assets require makeup** — bare-faced is not the normal state; at minimum use base makeup |
| R14 | **Makeup intensity is controlled** — even when applying makeup, restraint is required; no modern heavy makeup, exaggerated cosmetics, or overexposed cyber light effects |
| R15 | **Props/scene/action must not raise makeup intensity** — props, environment, and action information alone must not elevate base makeup to a stronger tier |
| R16 | **Dual-scene adaptation rule** — with no explicit cyber/urban cue, default to pure ancient-style-compatible generation; with explicit cues, match the urban-cyber system — do not switch systems without cause |
| R17 | **Cyber elements are strictly controlled** — only the urban-cyber system may use cyber light effects/functional elements; forbidden in ancient-style scenes without explicit cue; all cyber elements must be deeply fused with guofeng, never disconnected |
| R18 | **Cyber elements are limited to the costume/makeup scope** — functional structural pieces and light-effect elements are limited to the costume/accessory layer and must not alter the base model's facial features, limb structure, or basic posture |
| R19 | **3D texture quality is unified across all scenes** — ancient-style and urban scenes must maintain the same standard of high-precision modeling, PBR material, and cinematic lighting, with no texture-quality downgrade |

### Strictly Forbidden Rules (100% forbidden, no exceptions)

| No. | Strictly forbidden |
|---|---|
| X1 | Face shift or facial-feature deformation after overlay that no longer matches the base model |
| X2 | Costume that loses the guofeng core form, resulting in pure Western suits, pure functional wear, or pure Western cyberpunk designs without a Chinese core |
| X3 | Makeup/costume/cyber elements conflicting in style or appearing disconnected, guofeng and cyber elements opposed to each other |
| X4 | Complex scene background (must be a solid color) — no environment/scene/weather elements of any kind |
| X5 | Inconsistent costume/makeup, motifs, cyber light effects, or structural pieces between the four views |
| X6 | Output of anything other than the prompt itself (tables/plans/recommendations/explanations/variants, etc.) |
| X7 | Adding scene description to character derivative assets (street scenes/rain scenes/interior/street/weather or other environmental elements) |
| X8 | Output of sections such as "core element quick reference," "layered construction plan," "visual constraints," "prohibitions," or "derivative plans" |
| X9 | Adding any prop interaction (holding an umbrella/sword/fan/book/lantern/wine cup, etc.) |
| X10 | Changing the base model's pose (descriptions of actions such as walking/looking back/raising a hand/turning sideways/running/lowering the head/looking up) |
| X11 | Adding descriptions that link expression with pose (such as narrative descriptions like "turning 45 degrees while walking with a slight smile") |
| X12 | Applying a fixed makeup/cyber element without analyzing user cues, or switching the ancient-style/urban system without cause |
| X13 | Incorrectly keeping a bare face, leaving the derivative asset without the makeup it should have |
| X14 | Mistakenly upgrading makeup intensity based solely on props/scene/action words, causing an incorrect makeup-intensity decision |
| X15 | Adding cyber light effects/functional elements to an ancient-style scene without explicit cue, breaking the ancient-style atmosphere |
| X16 | Overexposed, glaring, or overly extensive neon light effects that damage the image texture, the character's face, or costume/makeup detail |
| X17 | Modifying the base model's limb structure or facial features without cause, adding cybernetic body modifications or body paint outside the costume/makeup scope |
| X18 | An urban scene losing its guofeng base, resulting in a pure Western cyberpunk style detached from the Chinese-form core |
| X19 | Vulgar, exaggerated Western punk designs inconsistent with Eastern aesthetics, violating the core of guofeng aesthetics |

---

## Validation Completion Notes
1. **100% dual-scene adaptation**: Both the "traditional ancient-style system" and the "urban-cyber system" are fully built as parallel rule sets; with no explicit cyber cue, purely ancient-style content can be generated flawlessly, and with urban cues, guofeng cyber content can be generated precisely, with no conflict between the two
2. **Zero drift from the guofeng base**: The manual holds the "Chinese form as absolute core" red line throughout — in urban cyber scenes, all costumes, hairstyles, and accessories retain the guofeng core, preventing drift into pure Western cyber
3. **Controllable cyber fusion**: Cyber elements are divided into "optional lightweight" and "urban-enhanced" tiers with clear boundaries, avoiding over-cyberization in ancient-style scenes or loss of the guofeng base in urban scenes
4. **Fully unified 3D standard**: Ancient-style and urban scenes share one high-precision 3D rendering standard, with no difference in PBR material, lighting, or modeling precision, ensuring stable generation results
5. **No gaps in core constraints**: The original manual's core rules — "face unchanged, pose unchanged, layer-by-layer control, costume/makeup scope only" — are fully preserved, and the optimization does not break the manual's underlying logic
6. **Full-scene, no-blind-spot coverage**: Costume/makeup combinations, inference rules, and prompt templates for the full range of ancient-style and urban sub-scenes have been completed, ready for direct use without further adjustment
