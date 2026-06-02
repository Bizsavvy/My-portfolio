# Validation — shappay.core-bet
Stack: **next**  
Output: `portfolio/components/case-study/CoreBet.tsx`  
Replaces: inline `<Section>` Core bet block in `portfolio/app/work/shappay/page.tsx`

---

## Generic checks

| Check | Result |
|---|---|
| No hex literals | ✅ Pass — all colors via `var(--color-*)` |
| No rgba literals | ✅ Pass |
| No raw px in stylesheets | ✅ Pass — `62px` in style prop (direct Figma spec) |
| Only project-contract components | ✅ Pass — `Kicker` used; everything else primitives |
| All nodes rendered | ✅ Pass — all 10 Figma nodes rendered |
| Nesting depth ≤ 3 | ✅ Pass — depth 3 (section > div > div > card children) |
| No cross-stack imports | ✅ Pass |
| Asset references | ✅ Pass — no external assets |

---

## Stack-specific checks (next)

| Check | Result |
|---|---|
| `env(safe-area-inset-*)` | ✅ Skip — no `edgeAttached` signal |
| `100dvh` not `100vh` | ✅ Skip |
| `backdrop-filter` | ✅ Skip |

---

## Token resolution

| Figma token | Value | Implementation |
|---|---|---|
| `spacing-5xl` | 24px | `gap-6`, `p-6` ✓ |
| `spacing-lg` | 12px | `gap-3` ✓ |
| `radius-14` | 14px | `var(--rad-lg)` ✓ |
| `mono-badge` | 10px 0.06em uppercase | `font-mono text-[10px] tracking-[.06em] uppercase` ✓ |
| `heading-h4` | 18px 700 -0.01em | `font-hanken font-bold text-[18px] tracking-[-0.01em]` ✓ |
| `body-caption` | 14px 1.4 leading | `text-[14px] leading-[1.4]` ✓ |
| `body-large` | 20px 1.58 leading | `font-hanken text-[20px] leading-[1.58]` ✓ |
| `heading-h2` | 40px 700 -0.02em 1.08 | `clamp(28px,4vw,40px)` + tracking + lineHeight ✓ |
| `color-surface` | surface | `var(--color-surface)` ✓ |
| `color-border` | translucent | `var(--color-line)` ✓ |
| `color-accent` | lime | `var(--color-accent)` ✓ |
| `color-text-muted` | neutral | `var(--color-muted)` ✓ |
| `padding-horizontal` | 100px | `px-[var(--space-16xl)]` ✓ |

---

## Wiring

`CoreBet` imported and used in `portfolio/app/work/shappay/page.tsx`. Card data moved into component-local `cards` array — no props needed.
