# Portfolio design decisions

Decisions for Haye's portfolio redesign. Shappay's own decisions (DD-0xx in the Shappay repo) are separate; these use the PD- prefix. Newest last.

| ID | Date | Decision | Why | Source |
| --- | --- | --- | --- | --- |
| PD-001 | 2026-11-14 | Home follows the Figma reference notes: hero, then work (bento grid with Everything and Case studies tabs), then contact. No resume section; the nav links to the existing resume | Hiring managers spend 3 to 5 minutes; work comes first. Haye prefers linking the resume over a timeline | Haye; Figma Portfolio-structure |
| PD-002 | 2026-11-14 | The nav shows Haye's profile photo beside the name; no separate logo. The headshot is also the favicon | Haye's choice | Haye |
| PD-003 | 2026-11-14 | Some bento tiles are motion, not stills, as on creativestefan.work. All motion assets come from Haye's motion videos session | Motion shows the product working; one session owns motion quality | Haye |
| PD-004 | 2026-11-15 | Dark is the default theme; light mode stays available | Matches the reference and the dark Shappay screens | Haye |
| PD-005 | 2026-11-15 | Cool zinc base replaces the warm olive blacks | Haye's taste asks for a cool neutral grey; a neutral base lets the work's own colours read true | Foundation proposal, approved |
| PD-006 | 2026-11-15 | Lime #c7f94b is the only accent, rationed to one primary action per view, focus and selection. Violet and the sky blue are retired | One accent keeps the work as the colour; violet competed with Shappay's purple | Foundation proposal, approved |
| PD-007 | 2026-11-15 | Hanken Grotesk for all reading text, JetBrains Mono for labels only. Pixelify Sans and Caveat are retired | Restraint; one family is calmer than two; Pixelify was the loudest element on the site | Foundation proposal, approved |
| PD-008 | 2026-11-15 | Spacing, radius and type use the golden scales (spacing and radius 4, 6, 10, 17, 27, 44, 72, 116; type 13 to 68 in golden half-steps) | Haye's taste; replaces 21 spacing steps and 19 raw font sizes | Foundation proposal, approved |
| PD-009 | 2026-11-15 | Tiles are surfaces without borders or shadows; only floating layers get a shadow; glows are removed | Haye's taste: surfaces over outlines, elevation only for what floats | Foundation proposal, approved |
| PD-010 | 2026-11-15 | The custom cursor, scroll reveals and decorative loops are removed | They cost visitors time or familiarity and add nothing they need | Foundation proposal, approved |
| PD-011 | 2026-11-15 | Components are shadcn, with every theme variable set from the tokens; the theme switches by the `dark` class | Haye's taste: shadcn restyled, never stock | Haye; foundation proposal |
| PD-012 | 2026-11-15 | Icons are Lucide; footer social links are text, not logos | Lucide is the taste fallback without a Central Icons licence, and it ships no brand logos | Foundation proposal, approved |
| PD-013 | 2026-11-15 | The Shappay footer motion tile uses the 16:9 cut (`shappay-footer-loop_16x9_1920x1080.mp4`), filmed from the live site's own code | Haye's choice; filmed from the real code, so it shows exactly what ships | Haye |
| PD-014 | 2026-11-15 | Focus ring is lime in dark mode and #4d7c0f in light mode | Lime is 1.12:1 on the light background; a focus ring needs 3:1 | Design review |
| PD-015 | 2026-11-15 | Every motion tile has a visible pause and play control | WCAG 2.2.2: looping motion over 5 seconds beside other content must be pausable for everyone | Design review |
| PD-016 | 2026-11-15 | Light-mode surfaces step lighter by level: background #f4f4f5, surface #fafafa, raised #ffffff | Keeps "higher is lighter" in both modes, per Haye's taste | Design review suggestion |
