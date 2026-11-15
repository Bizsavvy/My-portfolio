# Design Review Audit: Portfolio design foundation

Reviewed 15 November 2026. Source: "Portfolio design foundation: review and proposal" (https://claude.ai/artifact/ECuBbTbLmxQ8EZQyE3LqPU), approved by Haye with every recommendation accepted. Scope: tokens and rules only, before they are written to `Docs/Design-System.md` and used to theme shadcn. No screens exist yet, so screen-level states and layouts are out of scope.

## Status: PASS WITH FLAGS

### Executive Summary

The foundation is coherent and true to Haye's taste: one cool neutral base, one rationed accent, golden scales for type, spacing and radius, surfaces instead of borders, and motion limited to the work and to feedback. Text contrast passes AA everywhere it was measured. Two accessibility gaps must be closed in the written spec before implementation: the lime focus ring is invisible in light mode, and autoplaying motion tiles need a pause control. Neither changes an approved decision.

### Detailed Findings

#### Blockers (Must Fix)

- **[ACCESSIBILITY ISSUE]** The focus ring is lime in both modes. On the light background, lime (#c7f94b) measures 1.12:1 against #f4f4f5 and 1.23:1 against white, well under the 3:1 a focus indicator needs. Keyboard users would lose their place in light mode.
  - *Recommendation:* Make the ring mode-specific: lime in dark mode (14.4:1 on surface), #4d7c0f in light mode (4.54:1 on background, 4.99:1 on white). Map shadcn's `ring` per mode, not to a single accent value.

- **[ACCESSIBILITY ISSUE]** Motion tiles autoplay and loop for 8 seconds or more beside other content. WCAG 2.2.2 (Pause, Stop, Hide) requires a way to pause such motion for every visitor, not only those who set reduced motion. Pausing off-screen tiles saves battery but does not meet this.
  - *Recommendation:* Give each motion tile a visible pause and play control (an icon button with an accessible name such as "Pause video"), reachable by keyboard, and keep the reduced-motion behaviour (poster plus play) as specified.

#### Warnings & Flags

- **[DESIGN-SYSTEM VIOLATION]** Buttons are specified as 10 + 24 + 10 = 44px, but the type scale has no 24px line height: body is 16/26. The button height depends on a value the system doesn't define.
  - *Recommendation:* Add a `button` text style, 16/24 at weight 500, and use it for buttons, the email pill and tabs.

- **[DESIGN-SYSTEM VIOLATION]** The radius scale defines 10, 17, 27 and full, but several shadcn components (tooltip, tabs list and trigger, small badges, checkbox) need a small radius. Without one they will fall back to shadcn's derived values and drift from the scale.
  - *Recommendation:* Add `radius-sm` 6 for tooltips, tab triggers and other small controls, and set every shadcn radius explicitly.

- **[DESIGN-SYSTEM VIOLATION]** The shadcn mapping leaves out variables components actually read: `muted` (tabs list, skeleton), the `*-foreground` pairs for card, popover, secondary and accent, and `destructive`. Unmapped variables keep shadcn's stock values, which the taste rules forbid.
  - *Recommendation:* Map every shadcn variable: `muted` to surface, each foreground to text-primary (or on-accent for primary), and `destructive` to an error colour (dark #f87171, light #dc2626) even if no screen uses it yet. Drop or ignore the chart and sidebar sets if unused.

- **[DESIGN-SYSTEM VIOLATION]** Bento cells are described by spans (1x1, 2x1, 1x2, 2x2) of square-ish cells, while the chosen footer tile is a 16:9 video. A 16:9 clip in a 2x1 cell (about 2:1) loses roughly an eighth of its height, which on the footer clip would cut into the tile band.
  - *Recommendation:* Give each tile variant an explicit aspect ratio (for example 16:9 for motion tiles) and let the grid fit tiles to it, or crop with `object-position: bottom` for the footer so the tiles stay in frame.

- **[ACCESSIBILITY ISSUE]** (minor) The arrow conventions (right arrow for internal links, up-right arrow for external) will be read aloud as "rightwards arrow" or "north east arrow" by screen readers.
  - *Recommendation:* Render the arrows as decorative (`aria-hidden`) and state external links in the accessible name, for example "Visit site (opens in a new tab)".

- **[OPTIONAL IMPROVEMENT]** The hero CTA and the nav email pill can both end up lime, breaking "one primary action per view".
  - *Recommendation:* Keep the nav email pill secondary (raised surface) and reserve lime for the single hero action.

#### Non-Blocking Suggestions

- **[TASTE PREFERENCE]** In light mode, surface and surface-raised are both white, so "higher is lighter" holds only through the shadow.
  - *Recommendation:* Consider background #f4f4f5, surface #fafafa, raised #ffffff with the shadow, so each level is a step lighter as in dark mode. Check muted text (#52525b) still passes on #fafafa (it does at about 7.4:1).

- **[TASTE PREFERENCE]** Dark surface and raised surface differ by only 1.19:1, and surface and background by 1.12:1. That is intended softness, but the floating nav relies on its shadow and blur to separate.
  - *Recommendation:* Verify on a real low-end phone screen during the build; step surface to #1f1f23 if tiles disappear, as the proposal already allows.

- **[OPTIONAL IMPROVEMENT]** Footer text links to LinkedIn, X and GitHub sit close together.
  - *Recommendation:* Keep each link target at least 24x24px (WCAG 2.2 target size) with space-3 (10) between them.

### Recommended Action Items

1. Write mode-specific focus ring colours into the spec and the shadcn `ring` mapping.
2. Add a pause and play control to the motion tile spec.
3. Add the `button` text style (16/24, 500) and `radius-sm` (6).
4. Complete the shadcn variable mapping, including `muted`, all foregrounds and `destructive`.
5. Specify tile aspect ratios per variant, starting with 16:9 for motion tiles.
6. Make arrow glyphs decorative and put "opens in a new tab" in external link names.
