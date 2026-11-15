# Portfolio design system

Canonical design system for Haye's portfolio (`portfolio/`, Next.js 16, Tailwind v4, shadcn). Approved by Haye on 15 November 2026 from "Portfolio design foundation: review and proposal" (https://claude.ai/artifact/ECuBbTbLmxQ8EZQyE3LqPU), with the review fixes in `Docs/design/validation/design-audit.md` applied. Decisions are logged in `Docs/design/decisions/design-decisions.md`.

## Principles

1. **The work is the colour.** The interface stays neutral; screenshots, motion tiles and before and after pairs carry the eye. Lime marks the one primary action in a view, focus and selection.
2. **Type carries the hierarchy.** Size and weight do the work borders, boxes and glows used to.
3. **One scale for everything.** Spacing, radius and type come from the golden scales. No component invents a number.
4. **Surfaces, not outlines.** A tile is a lighter surface on the page. Only floating layers get a shadow.
5. **Motion shows the work or confirms an action.** Nothing moves to decorate, every loop can be paused, and reduced motion is respected.

## Colour

Dark is the default. The page starts with the `dark` class set; the theme toggle removes it and remembers the choice.

| Token | Dark | Light | Used for |
| --- | --- | --- | --- |
| `--background` | #09090b | #f4f4f5 | The page |
| `--surface` | #18181b | #fafafa | Tiles, outcome cards, code blocks |
| `--surface-raised` | #27272a | #ffffff | Sticky nav, toasts, tooltips, secondary buttons |
| `--text-primary` | #fafafa | #18181b | Headings, body |
| `--text-secondary` | #d4d4d8 | #3f3f46 | Lead lines, long reading text |
| `--text-muted` | #a1a1aa | #52525b | Captions, labels, metadata |
| `--accent` | #c7f94b | #c7f94b (fill only) | Primary button fill, selection, Measured tag |
| `--accent-text` | #c7f94b | #4d7c0f | Lime used as text or as a ring |
| `--on-accent` | #09090b | #18181b | Text on a lime fill |
| `--focus-ring` | #c7f94b | #4d7c0f | 2px focus ring with a 2px gap |
| `--divider` | rgb(255 255 255 / 8%) | rgb(0 0 0 / 8%) | Footer rule, section breaks |
| `--input-border` | rgb(255 255 255 / 14%) | rgb(0 0 0 / 14%) | Form fields only; must reach 3:1 if a field is added |
| `--error` | #f87171 | #dc2626 | Destructive or error states (none on the site yet) |

Measured contrast (WCAG AA needs 4.5:1 for text, 3:1 for focus indicators):

| Pair | Dark | Light |
| --- | --- | --- |
| text-primary on surface | 17.0:1 | 16.1:1 on background |
| text-secondary on surface | 12.0:1 | 9.5:1 on background |
| text-muted on surface | 6.9:1 | 7.0:1 on background |
| accent-text on background | 16.2:1 | 4.54:1 |
| focus-ring on background | 16.2:1 | 4.54:1 |
| on-accent on accent | 16.2:1 | 14.4:1 |

Rules:

- Lime appears once per view as a filled action. The nav email pill is secondary, so the hero keeps the only lime action.
- In light mode, light lime is never text or a ring (1.12:1 on the background); use `--accent-text`.
- No other hues in the interface. Colour comes from the work.

## Type

Hanken Grotesk for all reading text; JetBrains Mono for labels only. Pixelify Sans and Caveat are retired.

| Token | Size / line height | Weight | Used for |
| --- | --- | --- | --- |
| `display` | 53 / 56 | 500 | Hero name; case study title (desktop) |
| `title-xl` | 42 / 46 | 500 | Hero name and case study title (tablet); next project title |
| `heading` | 33 / 40 | 500 | Section headings |
| `title` | 26 / 32 | 500 | Tile titles, sub-headings |
| `lead` | 20 / 30 | 400 | Hero line, case study brief, intros |
| `body` | 16 / 26 | 400 | Reading text |
| `button` | 16 / 24 | 500 | Buttons, the email pill, tabs |
| `caption` | 13 / 20 | 400 | Tile and image captions, footer |
| `label` | 13 / 20, uppercase, 0.06em tracking | 500, mono | Role, Timeline, Measured, Projected, dates |

- Sizes follow 16 x 1.272^n. 68 is held in reserve for one oversized moment; 10 is never used for text.
- Phones: `display` becomes 33 and `title-xl` becomes 26. Sizes from `lead` down don't change.
- Tracking: -0.01em at 26 and 33, -0.02em at 42 and above.

## Spacing

| Token | Value | Typical use |
| --- | --- | --- |
| `space-1` | 4 | Icon to label, label to value |
| `space-2` | 6 | Inside small controls, tag padding |
| `space-3` | 10 | Bento gap; media to caption; button padding top and bottom; between footer links |
| `space-4` | 17 | Tile padding; button padding left and right; page gutter on phones |
| `space-5` | 27 | Heading to content; page gutter on tablets |
| `space-6` | 44 | Page gutter on desktop; between related blocks |
| `space-7` | 72 | Between sections on phones |
| `space-8` | 116 | Between sections on desktop |

Derived sizes: a button is 10 + 24 + 10 = 44px tall (also the touch target); the nav is a 44px control row with 17 above and below, 78px.

## Radius

| Token | Value | Used for |
| --- | --- | --- |
| `radius-sm` | 6 | Tooltips, tab triggers, small badges, checkboxes |
| `radius-md` | 10 | Media inside tiles, inputs, code blocks |
| `radius-lg` | 17 | Bento tiles |
| `radius-xl` | 27 | Large outcome cards on case study pages |
| `radius-full` | 9999px | Buttons, the email pill, tags, the avatar |

Nested corners: an element inset 6px inside a 17px tile takes 10.

## Layout

- Content width 1280px, centred. Case study reading column 640px.
- Gutters: 17 on phones, 27 on tablets, 44 on desktop.
- Bento grid: 4 columns on desktop, 2 on tablets, 1 on phones; 10px gap. Each tile variant has its own aspect ratio rather than a square cell: motion tiles 16:9; case study, website and before and after tiles set per design. Case study tiles take the largest spans. The Shappay footer clip crops from the bottom (`object-position: bottom`) if its tile is shorter than 16:9.

## Surfaces and elevation

- Tiles: `--surface` on `--background`. No border, no shadow.
- Floating layers only (toasts, tooltips): `--surface-raised` plus one shadow, `0 10px 44px -10px` in black at 60% (dark) or zinc #18181b at 18% (light).
- The sticky nav is the page colour at 80% with a background blur, not the raised surface, so the raised email pill inside it is what stands out (refined while building the home page, 15 November 2026).
- Borders: form fields and dividers only. No glows.

## Motion

| What moves | Behaviour | Reduced motion |
| --- | --- | --- |
| Motion tiles | `<video autoplay muted loop playsinline preload="metadata" poster>`. Plays only while on screen. Every tile has a visible pause and play control with an accessible name | Poster still with a play control; nothing autoplays |
| Before and after slider (home page only) | Moves only when dragged or with the arrow keys | Unchanged |
| Tile hover (fine pointer only) | Media scales to 1.02 inside the tile; caption arrow shifts 4px | Arrow shift only |
| Copy email | Pill label changes to "Copied" for 2 seconds, announced by an `aria-live` region | Instant swap |
| Theme switch | Instant | Instant |

- Durations: 150ms for hover and press, 250ms for appearing content. Easing: cubic-bezier(0.2, 0.8, 0.2, 1).
- Not used: the custom cursor, scroll reveals, staggered entrances, and decorative loops (marquee, beam scan, stage pulse, glow pulse). GSAP goes unless a specific demo needs it.
- Video loops are made by Haye's motion videos session; this spec governs how the site plays them.

## shadcn theme mapping

Every variable is set from the tokens, per mode, so nothing renders in shadcn's stock look.

| shadcn variable | Value |
| --- | --- |
| `--background` / `--foreground` | background / text-primary |
| `--card` / `--card-foreground` | surface / text-primary |
| `--popover` / `--popover-foreground` | surface-raised / text-primary |
| `--primary` / `--primary-foreground` | accent / on-accent |
| `--secondary` / `--secondary-foreground` | surface-raised / text-primary |
| `--muted` / `--muted-foreground` | surface / text-muted |
| `--accent` / `--accent-foreground` (shadcn's hover tint, not lime) | surface-raised / text-primary |
| `--destructive` | error |
| `--border` / `--input` | divider / input-border |
| `--ring` | focus-ring (mode-specific) |
| `--radius` | 17px; sm, md, lg and xl set explicitly to 6, 10, 17, 27 |

Unused shadcn sets (chart, sidebar) are left out.

## Components

| Component | Built from | Notes |
| --- | --- | --- |
| Nav | Avatar, Button | Profile photo and name, two links, email pill (secondary), theme toggle. Sticky, floating |
| Email pill | Button | Copies the email; label confirms "Copied" |
| Work tabs | Tabs | Everything, Case studies. Selection shown by a capsule, not colour alone |
| Tile | Card | Variants: case study, website, motion, before and after |
| Motion tile | Card, video | Pause and play control in a corner, `aria-label` "Pause video" / "Play video" |
| Outcome tag | Badge | Measured or Projected, label style |
| Buttons | Button | Primary (lime pill), secondary (raised pill), link |
| Before and after slider | custom, on Slider | Home page tiles only. Drag or arrow keys; announced value, e.g. "Before and after, 50%" |
| Screen pair | custom | Case studies: before and after side by side, labelled, with numbered white markers on the screens and a matching numbered list (`components/case/screen-pair.tsx`). Static, no dragging, so it reads with the text. Markers are hidden from screen readers; the list says which screen each note is about. Shappay pairs live in `lib/shappay-screens.ts`, shared by both case study pages. |
| Case study hero, outcome card, next project | Card, Separator | Per the Figma reference notes |
| Detailed case study | Separator, Data table | The 640px reading column; tables of four or more columns and the payload demo run to 880px. On wide screens an "On this page" list sits beside it and marks the section being read with a rail and `aria-current` |
| Data table | custom | Row dividers, label-style headers, row headers in the first column, numbers right-aligned in tabular figures; scrolls sideways inside a focusable region on narrow screens |
| NQR payload demo | Button, native inputs | Builds an NQR payload as you type. The QR is dark on white in both themes so phones can scan it |

Icons: Lucide only (copy, check, arrow-right, arrow-up-right, arrow-left, sun, moon, play, pause). Arrow-left is only for the link from a detailed case study back to its short page. Footer social links are text: LinkedIn, X, GitHub, each target at least 24 x 24px.

## Content conventions

- Sentence case everywhere.
- Buttons start with a verb: Read case study, Visit site, Copy email, Get in touch.
- Arrows: right arrow for links that stay on the site, up-right arrow for links that leave it. Arrows are decorative (`aria-hidden`); external links say "opens in a new tab" in their accessible name.
- Counts as fractions (5/8 testers); ratings out of ten (9.0/10).
- Every outcome is labelled Measured or Projected.
- No emoji, no metric boxes, no manufactured one-liners. The voice is restrained and literary.

## Implementation

Set up on branch `redesign/design-system`, 15 November 2026.

- **Where the tokens live:** the "REDESIGN · DESIGN SYSTEM" block at the end of `portfolio/app/globals.css`: light values on `:root`, dark on `.dark`, Tailwind names in `@theme inline`.
- **Theme:** `<html class="dark">` by default. The saved choice (`localStorage.theme`) and the nav toggle set both the `dark` class and the legacy `data-theme` attribute.
- **Tailwind names:**
  - Colours: `bg-background`, `bg-card` (surface), `bg-raised`, `bg-primary` (lime), `text-foreground`, `text-foreground-secondary`, `text-muted-foreground`, `text-brand-text`, `border-border`, `ring-ring`.
  - Spacing: `g4`, `g6`, `g10`, `g17`, `g27`, `g44`, `g72`, `g116` (for example `p-g17`, `gap-g10`), the same naming as Shappay.
  - Type: `text-display`, `text-title-xl`, `text-heading`, `text-title`, `text-lead`, `text-body`, `text-button`, `text-caption`, `text-label` (with `font-mono uppercase`). Each sets size, line height, tracking and weight.
  - Radius: `rounded-sm` 6, `rounded-md` 10, `rounded-lg` 17, `rounded-xl` 27, `rounded-full`.
  - Elevation and motion: `shadow-float`, `ease-standard`, `duration-150`, `duration-250`.
- **Components:** shadcn (Radix base, Nova preset, Lucide) in `portfolio/components/shadcn/`: button, card, badge, tabs, avatar, tooltip, separator, slider. Button, badge, tabs, card, tooltip and slider are restyled to this spec (sizes measured: button 44px, tab control 44px, tag 28px). Add more with `npx shadcn@latest add <name>`; they land in the same folder and need the same restyle.
- **Class merging:** always import `cn` from `@/lib/utils`. It is configured with the custom type names and spacing steps; the plain `cn` package treats `text-button` as a colour and drops it.
- **Legacy layer:** the old tokens (warm base, `--color-legacy-accent`, `ts-*` text styles, Pixelify) remain above the new block so the current pages look exactly as before (checked by screenshot diff: only the live clock and a video's progress bar differed). Old components were moved off the four names shadcn owns (`accent`, `muted`, `secondary`, `border`) and off `body`, onto synonyms with the same values.
- **Still to do when the new pages replace the old:** delete the legacy layer and `components/ui/`, set the body background and text from the new tokens, drop Pixelify, Caveat, GSAP and the custom cursor, wrap the app in `TooltipProvider` once a tooltip is used, and regenerate `tokens/*.json` from this spec.

## Sources

- Tokens to replace: `tokens/*.json` and `portfolio/app/globals.css` (warm olive base, Pixelify Sans, 21-step spacing). The token JSON files are regenerated from this spec at implementation.
- Taste: Haye's design-taste skill (golden scales, cool neutral base, shadcn restyled, Lucide).
- Reference: creativestefan.work, measured 14 November 2026; Figma Portfolio-structure annotations.
