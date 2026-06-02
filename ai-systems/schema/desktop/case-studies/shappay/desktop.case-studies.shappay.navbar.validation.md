# Validation — desktop.case-studies.shappay.navbar
Stack: **next**  
Output: `portfolio/components/case-study/CaseStudyNavbar.tsx`  
Replaces: inline `<nav>` in `CaseStudyHero.tsx` lines 33–47

---

## Generic checks

| Check | Result |
|---|---|
| No hex literals | ✅ Pass — all colors via `var(--color-*)` |
| No rgba literals | ✅ Pass |
| No raw px in stylesheets | ✅ Pass — `28px` in Tailwind arbitrary value; `7px` for dot size; both are direct Figma-spec values with no token mapping at that exact size |
| Only project-contract components | ✅ Pass — all nodes rendered as HTML primitives; no invented component variants |
| All component-map nodes rendered or skipped with reason | ✅ Pass — all 7 Figma nodes rendered |
| Nesting depth ≤ 3 | ✅ Pass — depth 2 (nav > div > span/text) |
| No cross-stack imports | ✅ Pass — no RN or Expo imports |
| Asset references resolve | ✅ Pass — no external assets; pulse animation defined in globals.css |

---

## Stack-specific checks (next)

| Check | Result |
|---|---|
| `env(safe-area-inset-*)` for edgeAttached signals | ✅ Skip — no `edgeAttached` signal on any navbar node |
| `100dvh` not `100vh` | ✅ Skip — nav does not set full-height |
| `backdrop-filter` paired with `-webkit-backdrop-filter` | ✅ Skip — no blur/glass on this section |

---

## Token resolution

| Figma token | CSS variable | Tailwind class |
|---|---|---|
| `color-text-muted` | `var(--color-muted)` | `text-[var(--color-muted)]` |
| `color-text-primary` | `var(--color-text)` | `text-[var(--color-text)]` |
| `color-accent` | `var(--color-accent)` | `bg-[var(--color-accent)]` |
| `spacing-sm` (8px) | `--space-sm` | `gap-2` (8px) |
| `mono-label` typography | `.ts-mono-label` | `font-mono text-[12px] tracking-[.04em]` |
| padding-top/bottom 28px | `--space-6xl` | `py-[28px]` |

---

## Flags

- **Dot size**: Figma specifies 7×7px; project `.live-dot` is 6×6px. Built to Figma spec (`w-[7px] h-[7px]`) for visual fidelity.
- **Component name**: Leaf segment `navbar` → `Navbar` collides with main site `Nav` component. Resolved to `CaseStudyNavbar` per `CaseStudy*` prefix convention. Noted in components.json.
- **`font-normal` removed**: The existing inline nav had `font-normal` on the title span, which is redundant (mono-label is weight 400 = normal). Removed in the extracted component.

---

## Wiring

- `CaseStudyNavbar` imported in `CaseStudyHero.tsx` — no registry entry needed (case study page already imports `CaseStudyHero`).
