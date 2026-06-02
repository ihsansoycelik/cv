# Figma ↔ Code 2-Way Workflow

## Figma File
**URL:** https://www.figma.com/design/SGAN7jzzXRtF00gA78I9L4/cv
**File Key:** `SGAN7jzzXRtF00gA78I9L4`

## Pages

| Page | Description |
|------|-------------|
| `Home — Light` | Ana CV sayfası (light mode) + hover state frame'leri |
| `Home — Dark` | Dark mode versiyonu |
| `Blog Post` | Blog yazısı layout + ScrollProgress |
| `Modal — Morphing Dialog` | MorphingDialog açık state |
| `_Design Tokens` | Figma variables (Zinc palette + Semantic tokens) |

## Design Tokens

### Colors (Figma Variables)
- **Collection:** `Nim / Colors` — Zinc palette (zinc-50 → zinc-950, white, black, gray)
- **Collection:** `Nim / Semantic` — 2 mod: Light / Dark
  - `bg/page`, `bg/card`, `bg/subtle`, `bg/muted`
  - `text/primary`, `text/secondary`, `text/muted`, `text/link`
  - `border/default`, `border/subtle`, `ring/inset`
  - `tag/bg`, `tag/text`, `tag/hover-bg`, `tag/hover-text`

### Typography
- Font: **Geist** (Regular 400, Medium 500)
- Font Mono: **Geist Mono** (Regular)
- Sizes: 11px, 12px, 14px, 16px (base), 18px (h3), 20px (h1)
- Line heights: 145%, 150%, 175%

### Spacing (Tailwind → px)
- `space-y-24` → 96px section gaps
- `mb-5` → 20px heading bottom margin
- `gap-6` → 24px grid gaps
- `p-4` → 16px card padding
- `px-2.5 py-1` → 10px/4px pill padding
- `pt-20` → 80px page top padding

### Border Radius
- `rounded-lg` → 8px
- `rounded-xl` → 12px
- `rounded-2xl` → 16px
- `rounded-full` → 999px

## Component Map (Motion-Primitives → Figma Frame)

| React Component | Figma Frame |
|----------------|-------------|
| `<AnimatedBackground>` | `Blog List` + `Blog Section — Hover State` |
| `<Magnetic>` | `Social Links / Github|Twitter...` pills |
| `<MorphingDialog>` | `Modal — Morphing Dialog` page |
| `<Spotlight>` | `Work Card — Spotlight Hover State` |
| `<TextEffect>` | `Header / Left / Role` (annotated) |
| `<TextLoop>` | `Footer / © 2024 Nim.` (annotated) |
| `<ScrollProgress>` | `Blog Post / Scroll Progress Bar` |

## 2-Way Workflow

### Figma → Code (Design'dan koda aktarma)
Figma'da değişiklik yaptığında:
1. Hangi frame/token değişti → notu buraya ekle
2. Bana söyle: "Figma'da [component] değişti, koda yansıt"
3. Ben `get_design_context` ile Figma'dan okuyup kodu güncellerim

### Code → Figma (Koddan design'a aktarma)
Kodda değişiklik yaptığında:
1. Bana söyle: "cv projesinde [dosya] değişti, Figma'yı güncelle"
2. Ben kodu okuyup `use_figma` ile Figma'daki frame'i güncellerim

## Quick Reference — Node IDs

| Frame | Figma Node ID |
|-------|--------------|
| Home / Light | `8:2` |
| Home / Dark | `17:2` |
| Blog Post / Light | `20:2` |
| Modal / MorphingDialog Open | `22:2` |
| Blog Hover Demo | `23:2` |
| Spotlight Hover Demo | `23:17` |
| Nim / Colors (variables) | `VariableCollectionId:6:2` |
| Nim / Semantic (variables) | `VariableCollectionId:7:2` |
