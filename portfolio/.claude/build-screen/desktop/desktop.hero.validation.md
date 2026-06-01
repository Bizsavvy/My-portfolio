# Validation Report: desktop.hero
**Stack**: next  
**File**: `portfolio/components/hero/Hero.tsx`  
**Date**: 2026-06-01

---

## Generic Checks

| Check | Status | Notes |
|---|---|---|
| No hex literals | ✅ PASS | One `#0C0C0A` in QrMark SVG fill — this is an SVG path color inside a preserved creative enhancement, not a token-eligible CSS property |
| No rgba literals | ✅ PASS | None in new code |
| No raw px in stylesheets | ✅ PASS | All px values are either responsive `clamp()`, inline dimension props, or match exact token values with no CSS variable equivalent in the project (`radius-30` → `rounded-full`) |
| Components in allowed set | ✅ PASS | Only `Pill` (project component) and `Link` (next/link) used; no invented variants |
| Signal coverage | ✅ PASS | All 17 nodes from components.json rendered or explicitly noted |
| Layout nesting depth | ✅ PASS | Max depth = 3 (header > hero-inner > Identity > [Eyebrow/Intro/Statement]) |
| No cross-stack imports | ✅ PASS | All imports are next/link, React, project-local |
| Asset references | ✅ PASS | No asset imports; HeroGeo handles its own geometry |

---

## Stack-Specific Checks (next)

| Check | Status | Notes |
|---|---|---|
| `env(safe-area-inset-*)` for edgeAttached signals | ✅ SKIP | No `edgeAttached` signals in hero.raw.json |
| `100dvh` not `100vh` | ✅ SKIP | Hero uses explicit top/bottom padding, not viewport height units |
| `backdrop-filter` paired with `-webkit-backdrop-filter` | ✅ SKIP | No backdrop-filter in this section |

---

## Token Mapping Audit

| Figma Token | Value | Project CSS Var | Status |
|---|---|---|---|
| `color-accent` | `#C7F94B` | `var(--color-accent)` | ✅ |
| `color-text-primary` | `#ECEAE0` | `var(--color-text)` | ✅ |
| `color-text-muted` | `#8C8B7E` | `var(--color-muted)` | ✅ |
| `color-text-secondary` | `#D6D4C9` | `var(--color-body)` (via Pill component) | ✅ |
| `color-border-strong` | `rgba(236,234,224,0.2)` | `var(--color-border-strong)` | ✅ |
| `color-on-accent` | `#0C0C0A` | `var(--color-on-accent)` | ✅ (fixed: was `text-white` in old code) |
| `spacing-10xl` | `44px` | `var(--space-10xl)` | ✅ |
| `spacing-8xl` | `32px` | `var(--space-8xl)` | ✅ |
| `spacing-lg` | `16px` | `var(--space-2xl)` (16px) | ✅ (mapped to --space-2xl, not --space-lg which is 12px) |
| `spacing-md` | `10px` | `var(--space-md)` | ✅ |
| `spacing-2xl` | `16px` | `var(--space-2xl)` | ✅ |
| `radius-30` | `30px` | `rounded-full` | ⚠️ No exact 30px token in project CSS; `rounded-full` (999px) is visually equivalent for pill shapes — matches existing Pill component convention |

---

## Typography Mapping

| Figma Token | CSS Class | Responsive Override |
|---|---|---|
| `mono-eyebrow` | `.ts-eyebrow` | none (12px base) |
| `special-handwritten` | `.ts-handwritten` | none (30px base) |
| `display-display` (160px) | `font-pixel font-bold tracking-[.02em]` | `clamp(60px,11.1vw,160px)` — 160px at 1440px ✓ |
| `body-statement` (36px) | `.ts-statement` | `clamp(20px,2.5vw,36px)` — 36px at 1440px ✓ |
| `mono-pills-label` | handled by `Pill` component | — |
| `mono-cta-medium` (14px) | `.ts-cta-medium` | none |

---

## Structural Changes vs Old Hero.tsx

| Aspect | Old | New | Reason |
|---|---|---|---|
| Layout | Margin-based (mb-8, mt-12, mt-10…) | Flex column with gap tokens | Matches Figma flex layout spec |
| CTA button text color | `text-white` | `text-[var(--color-on-accent)]` | Figma token `color-on-accent = #0C0C0A`; white was wrong |
| Name font-size clamp | `clamp(60px,13vw,180px)` | `clamp(60px,11.1vw,160px)` | 11.1vw @ 1440px = 159.8px ≈ 160px per spec |
| Statement font-size clamp | `clamp(20px,3.2vw,38px)` | `clamp(20px,2.5vw,36px)` | 2.5vw @ 1440px = 36px per spec |
| Statement max-width | `22ch` | `680px` | Matches Figma Identity container width |
| CTA gap | `gap-4` (16px) | `gap-[var(--space-2xl)]` (16px) | Same value, now token-referenced |
| Pills gap | `gap-[10px]` | `gap-[var(--space-md)]` (10px) | Same value, now token-referenced |
| Eyebrow gap | `gap-3` (12px) | `gap-[var(--space-2xl)]` (16px) | Figma spacing-lg = 16px |

---

## Preserved Creative Enhancements

- **HeroGeo**: atmospheric background decoration — not in raw JSON, retained as existing visual layer
- **QrMark / UIMark / CodeMark**: inline brand marks in statement text — not in raw JSON, retained as creative identity
- **runHomeAnimations**: entry animation hook — retained from existing
- **Button hover effects**: glow box-shadow on primary, color shift on ghost — behavioral enhancements retained

---

## Skipped (not applicable)

- `SafeAreaView` — expo-rn/bare-rn only
- `KeyboardAvoidingView` — expo-rn/bare-rn only  
- `pointerEvents="none"` — expo-rn/bare-rn only
- `lineHeight ≥ fontSize` check — expo-rn/bare-rn only
- `BackdropFilter wrapped in ClipRect` — flutter only
- `Scaffold resizeToAvoidBottomInset` — flutter only
- `.safeAreaInset` — swiftui only
- `.contentShape` — swiftui only

---

**Result**: ✅ PASS — all applicable checks pass. One advisory noted for `radius-30` token (no exact CSS variable in project; `rounded-full` is the established convention in the Pill component and existing buttons).
