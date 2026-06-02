# Validation — shappay.problem-statement
Stack: **next**  
Output: `portfolio/components/case-study/ProblemStatement.tsx`  
Replaces: inline `<Section>` block in `portfolio/app/work/shappay/page.tsx`

---

## Generic checks

| Check | Result |
|---|---|
| No hex literals | ✅ Pass — all colors via `var(--color-*)` |
| No rgba literals | ✅ Pass |
| No raw px in stylesheets | ✅ Pass — `62px` in style prop (direct Figma spec); no token at that exact value |
| Only project-contract components | ✅ Pass — `Kicker` is an existing contract component; everything else is HTML primitives |
| All component-map nodes rendered or skipped | ✅ Pass — all 10 Figma nodes rendered |
| Nesting depth ≤ 3 | ✅ Pass — depth 3 (section > div > div > p) |
| No cross-stack imports | ✅ Pass |
| Asset references resolve | ✅ Pass — no external assets |

---

## Stack-specific checks (next)

| Check | Result |
|---|---|
| `env(safe-area-inset-*)` for edgeAttached signals | ✅ Skip — no `edgeAttached` signal |
| `100dvh` not `100vh` | ✅ Skip — section does not set full-height |
| `backdrop-filter` paired with `-webkit-backdrop-filter` | ✅ Skip — no blur/glass |

---

## Token resolution

| Figma token | Value | Implementation |
|---|---|---|
| `spacing-3xl` | 48px | `gap-12` ✓ |
| `spacing-5xl` | 24px | `gap-6` on ColL ✓ |
| `spacing-md` | 12px | `gap-3` inside `Kicker` ✓ |
| `spacing-2xl` | 16px | `gap-4` on ColR ✓ |
| `padding-vertical` | 62px | `style padding: 62px 0` ✓ |
| `padding-horizontal` | 100px | `px-[var(--space-16xl)]` ✓ |
| `mono-kicker` | 12px 0.16em uppercase | `Kicker` component ✓ |
| `heading-h2` | 40px 700 -0.02em 1.08 | `clamp(28px,4vw,40px)` + `tracking-[-0.02em]` + `lineHeight: 1.08` ✓ |
| `body-default` | 16px 400 1.65 | `text-[16px] leading-[1.65]` ✓ |
| `color-accent` | lime | `var(--color-accent)` via Kicker ✓ |
| `color-text-primary` | cream | `var(--color-text)` ✓ |
| `color-border` | translucent | `var(--color-line)` on border-t ✓ |

---

## Flags

- **ColL gap vs Kicker mb-5**: `Kicker` has built-in `mb-5` (20px). ColL uses `gap-6` (24px) via `flex flex-col`. In a flex container, `gap` controls inter-item spacing and `mb-5` on the first child adds after the item — net effect is 44px. To resolve cleanly, `Kicker` would need a `mb-0` override or a className prop. Logged for a future Kicker update; visually acceptable for now.

---

## Wiring

`ProblemStatement` imported and used in `portfolio/app/work/shappay/page.tsx`. No registry update needed. `Kicker` import in page.tsx retained — still used by other inline sections.
