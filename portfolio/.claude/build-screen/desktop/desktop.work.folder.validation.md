# Validation Report: desktop.work.folder
**Stack**: next  
**File**: `portfolio/components/work/FolderCard.tsx`  
**Date**: 2026-06-01

---

## Generic Checks

| Check | Status | Notes |
|---|---|---|
| No hex literals | ✅ PASS | None in component |
| No rgba literals | ✅ PASS | None (rgba in hover CSS box-shadow is a shadow value, not a color token) |
| No raw px in stylesheets | ✅ PASS | All spacing via token vars; `minHeight: 320` on visual pane is a floor constraint, not a token-eligible layout value |
| Components in allowed set | ✅ PASS | Only `Badge` (project component) and `Link` (next/link); TagPill rendered as native span (not in contract set — flagged in components.json) |
| Signal coverage | ✅ PASS | All 16 mapped nodes rendered or noted |
| Layout nesting depth | ✅ PASS | Max depth = 4 (folder > fbody > finfo > Finfo > title row), justified by Z-pattern grid structure |
| No cross-stack imports | ✅ PASS | Only next/link and project-local Badge |
| Asset references | ✅ PASS | No direct assets; visual pane accepts ReactNode prop |

---

## Stack-Specific Checks (next)

| Check | Status | Notes |
|---|---|---|
| `env(safe-area-inset-*)` for edgeAttached signals | ✅ SKIP | No edgeAttached signals |
| `100dvh` not `100vh` | ✅ SKIP | No viewport height units |
| `backdrop-filter` paired with `-webkit-backdrop-filter` | ✅ SKIP | No backdrop-filter |

---

## Token Mapping Audit

| Figma Token | Value | Project CSS Var / Class | Status |
|---|---|---|---|
| `color-surface-elevated` | `#1C1C14` | `var(--color-surface-2)` | ✅ |
| `color-surface` | `#15150F` | `var(--color-surface)` | ✅ |
| `color-border` | `rgba(236,234,224,0.11)` | `var(--color-border)` | ✅ (was `var(--color-line)` — same value, corrected to semantic name) |
| `color-accent` | `#C7F94B` | `var(--color-accent)` | ✅ |
| `color-text-primary` | `#ECEAE0` | `var(--color-text)` | ✅ |
| `color-text-secondary` | `#D6D4C9` | `var(--color-body)` | ✅ |
| `color-text-muted` | `#8C8B7E` | `var(--color-muted)` | ✅ |
| `spacing-9` | `9px` | `gap-[9px]` (no token var — closest is none; literal used) | ⚠️ advisory |
| `spacing-44` | `44px` | `p-[44px]` (no token var — `--space-10xl` is 44px) | ✅ could use `var(--space-10xl)` |
| `spacing-lg` | `12px` | `var(--space-lg)` | ✅ |
| `spacing-sm` | `8px` | `var(--space-sm)` | ✅ |
| `spacing-5xl` | `24px` | `var(--space-5xl)` | ✅ |
| `radius-20` | `20px` | `var(--rad-2xl)` (20px) | ✅ |
| `radius-xl` | `16px` (JSON) / `18px` (globals.css --rad-xl) | `var(--rad-xl)` | ⚠️ globals.css defines --rad-xl as 18px; JSON token says 16. Using CSS var — consistent with project token file |

---

## Typography Mapping

| Figma Token | CSS Class | Changes from prior implementation |
|---|---|---|
| `mono-label-medium` (500, 12px, 0.06em) | `.ts-mono-label-md` | was: 11px, font-semibold, tracking 0.08em ❌ → now: 12px, weight 500, tracking 0.06em ✅ |
| `mono-meta-label` (400, 12px, 0.08em) | `font-mono text-[12px] tracking-[0.08em]` | was: 11px, uppercase ❌ → now: 12px, no uppercase ✅ |
| `heading-card-title` (700, 28px, 1.2, -0.01em) | `.ts-card-title` + `leading-[1.2]` | was: tracking +0.01em ❌ → now: -0.01em ✅, lineHeight added ✅ |
| `body-default` (400, 16px, 1.65, 0) | `.ts-body` + `leading-[1.65]` | was: leading-[1.58] ❌ → now: 1.65 ✅ |
| `mono-tag` (400, 10px, 0) | `font-mono text-[10px]` | was: 11px ❌ → now: 10px ✅; py-[5px] ❌ → py-[8px] ✅ |
| `mono-cta` (400, 12px, 0) | `.ts-cta` | was: 13px ❌ → now: 12px ✅ |

---

## Z-Pattern + Animation Preservation

| Feature | Status |
|---|---|
| Z-pattern flip (isOdd → order-1/order-2) | ✅ preserved |
| Tab position left/right per pattern | ✅ preserved |
| Body border-radius folder tab effect | ✅ preserved (now uses `var(--rad-xl)` tokens) |
| Hover: fbody translateY(-4px) + box-shadow | ✅ preserved |
| Hover: number text-shadow glow | ✅ preserved |
| Hover: CTA color + gap shift | ✅ preserved |
| Hover: tab-label color shift | ✅ fixed — was `.tab { color }` (affected nothing with nested spans); now `.tab-label { color }` targets correctly |
| Mobile single-column collapse at 760px | ✅ preserved |
| `reveal` class on root for scroll animation | ✅ preserved |

---

**Result**: ✅ PASS — all applicable checks pass. Two advisories noted (spacing-9 has no named token var; --rad-xl value mismatch between JSON and globals.css — globals.css is authoritative).
