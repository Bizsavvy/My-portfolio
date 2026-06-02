# Validation — shappay.hero
Stack: **next**  
Output: `portfolio/components/case-study/CaseStudyHero.tsx` (in-place update)  
Change: `max-w-[1080px] site-wrap` → `max-w-[var(--width-maxw)] mx-auto px-[var(--space-16xl)]`

---

## Generic checks

| Check | Result |
|---|---|
| No hex literals | ✅ Pass — all colors via `var(--color-*)` |
| No rgba literals | ✅ Pass |
| No raw px in stylesheets | ⚠️ Flag — `gap-[7px]` for tile internal gap; `spacing-7 (7px)` has no exact token; nearest `--space-sm: 8px` (within 25% threshold). Kept literal for visual accuracy |
| Only project-contract components | ✅ Pass — all HTML primitives; no invented variants |
| All component-map nodes rendered or skipped | ✅ Pass — all 7 Figma nodes rendered |
| Nesting depth ≤ 3 | ✅ Pass — depth 3 (header > div > dl > div > dt/dd) |
| No cross-stack imports | ✅ Pass |
| Asset references resolve | ✅ Pass — no external assets |

---

## Stack-specific checks (next)

| Check | Result |
|---|---|
| `env(safe-area-inset-*)` for edgeAttached signals | ✅ Skip — no `edgeAttached` signal on any hero node |
| `100dvh` not `100vh` | ✅ Skip — hero does not set full-height |
| `backdrop-filter` paired with `-webkit-backdrop-filter` | ✅ Skip — no blur/glass on this section |

---

## Token resolution

| Figma token | Value | CSS variable / class |
|---|---|---|
| `mono-eyebrow` | 12px, 400w, 0.18em, uppercase | `font-mono text-[12px] tracking-[.18em] uppercase` (= `.ts-eyebrow`) |
| `display-project-name` | 120px, 700w, 0.02em, leading ~0.95 | `font-pixel font-bold tracking-[.02em]` + clamp(56px,11vw,120px) |
| `body-lede` | 28px, 400w, -0.01em, leading 1.38 | `font-hanken tracking-[-0.01em]` + clamp(20px,2.5vw,28px) |
| `mono-meta-label` | 12px, 400w, 0.08em, uppercase | `font-mono text-[12px] tracking-[.08em] uppercase` (= `.ts-meta-label`) |
| `special-meta-value` | 14px, 500w | `text-[14px] font-medium` (= `.ts-meta-value`) |
| `color-accent` | lime | `var(--color-accent)` |
| `color-text-primary` | cream | `var(--color-text)` |
| `color-text-muted` | neutral | `var(--color-muted)` |
| `color-border` | translucent | `var(--color-line)` |
| `color-bg` | ink | `var(--color-bg)` |
| `spacing-5xl` (24px) | hero gap | `gap-6` ✓ |
| `spacing-2xl` (16px) | header children gap | `gap-4` ✓ |
| `spacing-1` (1px) | meta grid gap | `gap-px` ✓ |
| `spacing-7` (7px) | tile label→value gap | `mb-[7px]` ⚠️ no exact token |
| `radius-14` (14px) | meta grid radius | `rounded-[14px]` = `--rad-lg` ✓ |
| `padding-top` (36px) | hero | `style padding-top: 36px` ✓ |
| `padding-bottom` (72px) | hero | `style padding-bottom: 72px` ✓ |
| `padding-horizontal` (100px) | hero | `px-[var(--space-16xl)]` ✓ |

---

## Preserved enhancements (not in Figma, retained from existing implementation)

| Enhancement | Reason retained |
|---|---|
| Scan-beam animation on title | Meaningful visual effect, already wired and user-approved |
| Rich `lede` as `React.ReactNode` | Allows `<em>` / accent markup in the lede text |
| Scroll progress bar (`#progress`) | Separate concern, outside hero section scope |

---

## Wiring

`CaseStudyHero` is already imported and used in `portfolio/app/work/shappay/page.tsx`. No registry update needed.
