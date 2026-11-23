# Case Study Review: A cart that does the maths

**Project:** NawNaw, a sub-15-minute grocery delivery concept for Nigeria (solo, never launched)
**Source:** /work/nawnaw and /work/nawnaw/detailed, Haye's rewrite, exported as Docs/case-studies/nawnaw.md and nawnaw-detailed.md (2026-11-23)
**Target Level:** Mid
**Review Mode:** Online Portfolio (short page), with the detailed page read as its deep dive
**Overall Score:** 75/100 (75 of 100 applicable points)
**Evidence Coverage:** High
**Hiring Readiness:** Promising

**Update 2026-11-23:** The three P1 fixes and the P2 screens are applied to both pages. Not rescored.

**Could not inspect:** Nothing on the two pages. The economics model (spreadsheet) and the decision log are named but not linked, so a reader cannot check them.

**First impression:** In 30 seconds a hiring manager sees a fresh title, a money problem stated in naira, and a cart that shows the fee ladder in three screens. It reads like someone who understands unit economics. They keep reading.

## 1. Executive verdict

This is the strongest business thinking in the portfolio. The page ties every fee in the cart to a break-even model, shows a number the designer got wrong and fixed (D-020), and states the cost of each choice, including the new welcome offer. For a fintech audience, "economics made UI" is exactly the right angle. What holds it at Promising is evidence about people: it is an unlaunched concept, the customer profiles come from planning research, and nothing has been tested with a shopper, even informally. The short page also runs long, about 1,230 words, and its closing claim, "Nothing on the screen is there by accident", sits awkwardly next to a story about thresholds copied from mock-ups. At Mid level the thinking clears the bar comfortably; the fixes are about evidence and trim.

## 2. Scorecard

| Dimension | Score | Assessment |
|---|---|---|
| Problem Definition | 8/10 | A clear cost problem with real numbers and a named shopper; the shopper's pain is reasoned, not observed. |
| Business Context | 9/10 | Break-even, basket ladder, North Star and target customer all tied to the design; rare and memorable. |
| Research and Evidence | 6/10 | Strong economic analysis; customer profiles and the 65% impulse figure come from planning research, and no shopper has been tested. |
| Product Thinking | 13/15 | Decisions name the rejected option and the trade-off, and the D-020 correction shows judgment against your own work. |
| Interaction Design | 7/10 | Cart states, live switching and callouts are clear; checkout, sign-in, address and tracking are described but not shown. |
| Visual Design | 8/10 | Sharp, consistent screens and a fee ladder figure that makes the mistake visible at a glance. |
| Outcomes and Impact | 8/15 | Honest that nothing is measured, with a test plan; no target or signal for what success would look like. |
| Storytelling | 7/10 | One clear spine and a strong title; about 1,230 words on the short page, with some repetition between brief and problem. |
| Ownership | 5/5 | Solo, with design and build both clearly the designer's. |
| Reflection | 4/5 | A specific, earned lesson about targeting; the closing quote overstates against the page's own story. |
| **Total** | **75/100** | **Normalized 75/100** |

No dimension is N/A: every image and figure on both pages was inspected.

### Dimension notes

**Problem Definition (8/10)**
- Strength: "At a 20% margin, any basket under ₦3,000 cannot even cover its own delivery" makes the problem concrete and checkable.
- Weakness: The shopper's side, "a fee they do not understand ... is the fastest way to lose them", is reasoning, not something observed.
- Evidence: Problem
- Do this: Keep it. If you can, add one real observation from anyone who tried the prototype.

**Business Context (9/10)**
- Strength: "deciding who to serve is also a unit-economics decision" links strategy to design better than most senior portfolios.
- Weakness: The model itself is not linked, so the numbers rest on trust.
- Evidence: The economic spine (detailed page)
- Do this: Link or excerpt the break-even model, or show one small table of its inputs.

**Research and Evidence (6/10)**
- Strength: The localisation of the benchmark ("split the problem in two") is real analysis, and the page is honest that the 65% figure "comes from secondary planning research".
- Weakness: No shopper has used the cart. Every design decision rests on principle and convention.
- Evidence: Who it is for
- Do this: Run a light test of the cart nudges with 5 people, even on the web build, and report what you saw. Do not add numbers you have not measured.

**Product Thinking (13/15)**
- Strength: "The alternative was a single static cart that only revealed fees at checkout, which I rejected" shows options and reasons.
- Weakness: The short page has three decisions plus the threshold story; it never says which mattered most.
- Evidence: Three decisions, and one number I got wrong
- Do this: Optional: one line on the decision you would defend hardest.

**Interaction Design (7/10)**
- Strength: The three cart states, the callouts on the small-cart screen and the live switching (D-012) make the interaction legible.
- Weakness: The detailed page describes the sign-in sheet, WhatsApp code, landmark field and tracker, but shows none of them.
- Evidence: Checkout and the one identity check; After the order
- Do this: Add two or three screens: the sign-in sheet at Place order, the landmark field, and the tracker.

**Visual Design (8/10)**
- Strength: The fee ladder figure, with the old ₦5,000 point marked below the floor, is the best single visual in the portfolio for a business reader.
- Weakness: Four tall phones two to a row make the detailed cart section long.
- Evidence: The cart: economics made UI (detailed page)
- Do this: No change needed.

**Outcomes and Impact (8/15)**
- Strength: "because NawNaw never launched, nothing has been measured with real shoppers" is stated plainly, and the test plan is specific.
- Weakness: There is no success signal: what number would show the cart works?
- Evidence: Impact; What I'd test next
- Do this: Name the success signal, for example the North Star you already have (contribution per active customer per month) and the share of baskets that clear ₦3,000, with [ADD: a target] if you have one.

**Storytelling (7/10)**
- Strength: "A cart that does the maths" is a fresh, specific title, and every section serves the economics spine.
- Weakness: The brief and the Problem cover the same ground, and "What's next" introduces a new decision (the welcome offer) at the end.
- Evidence: Brief; What's next
- Do this: Cut toward 900 words: trim the brief or the Problem's first paragraph, and either drop the welcome-offer paragraph from the short page or make it one sentence.

**Ownership (5/5)**: no change needed.

**Reflection (4/5)**
- Strength: The targeting lesson is specific and earned.
- Weakness: "Nothing on the screen is there by accident" contradicts the page's own best story, thresholds that came "straight from early Figma mock-ups".
- Evidence: What building it taught me
- Do this: Soften to what the story proves, for example that every number on the screen now traces back to the model.

## 3. What works

1. **Economics as the spine**: few designers can show a break-even model turning into interface rules; fintech hiring managers will notice.
2. **The number I got wrong**: owning a mistake, with the fix and its cost, is the most trustworthy section in the case study.
3. **Honest trade-offs throughout**: every decision names what it costs, including the welcome offer's ₦3,000 per new shopper.

## 4. What isn't working

### Severity: Medium: No evidence from people
- **Evidence:** "nothing has been measured with real shoppers"
- **Why it matters:** At Mid this is acceptable when honest, which it is, but it caps Research and Outcomes.
- **Fix:** A light test of the cart nudges with a handful of people, reported plainly.

### Severity: Medium: The closing claim contradicts the story
- **Evidence:** "Nothing on the screen is there by accident" against "My first fee thresholds came straight from early Figma mock-ups"
- **Why it matters:** An interviewer will spot it, and it weakens the honest tone the page builds.
- **Fix:** Reword the claim to what the page proves.

### Severity: Medium: The short page is long
- **Evidence:** about 1,230 words without images
- **Why it matters:** The best section, the threshold correction, sits several screens down.
- **Fix:** Cut toward 900 words, starting with the brief and Problem overlap and the welcome-offer paragraph.

### Severity: Low: Described screens are not shown
- **Evidence:** Checkout and the one identity check; Location; After the order (detailed page)
- **Why it matters:** The detailed page asks the reader to imagine five decisions.
- **Fix:** Capture the sign-in sheet, the landmark field and the tracker.

### Severity: Low: No success signal
- **Evidence:** Impact
- **Why it matters:** A reader cannot tell what "working" would mean.
- **Fix:** Name the measure, from the model you already have.

## 5. Storytelling audit

- **Opening hook:** Strong title and brief.
- **Narrative structure:** Problem to decision to trade-off holds throughout; the outcome is honestly empty.
- **Clarity:** Plain and specific; jargon such as "dark stores" is explained.
- **Pacing:** Slow at the start (brief and Problem overlap) and at the end (a new decision under "What's next").
- **Decision rationale:** Strong.
- **Outcome presentation:** Honest; needs a success signal.

**Remove:** The welcome-offer paragraph from the short page, or reduce it to one sentence.
**Move:** Nothing.
**Condense:** The brief or the Problem's first paragraph.
**Expand:** A success signal, and the screens the detailed page describes.

## 6. Visual evidence audit

- **Supports the story:** The three cart states, the two annotated screens and the fee ladder figure.
- **Missing:** The sign-in sheet at Place order, the landmark field and the tracker (detailed page).
- **Needs annotation or redoing:** None.
- **Interactions to demonstrate:** The live switch between cart states; the homepage loop shows it, the case study does not.
- **Understandable from images and captions alone?** Yes for the cart; partly for the rest.

## 7. Evidence and credibility audit

| Claim | Class | Evidence needed |
|---|---|---|
| "any basket under ₦3,000 cannot even cover its own delivery" | Supported but incomplete | The model's inputs, if asked |
| "each dark store needs roughly 150 orders a day just to break even" | Supported but incomplete | The fixed-cost figure and its source |
| "roughly 65% of orders from the youngest group are unplanned" | Supported but incomplete | Already labelled as secondary planning research; name the source if possible |
| The threshold correction (D-020) | Verified in supplied materials | None; the figure and table show it |
| "Nothing on the screen is there by accident" | Contradicted | Reword to match the D-020 story |
| Role and solo build | Verified in supplied materials | None |

## 8. Priority fixes

| Priority | Change | Expected benefit | Effort |
|---|---|---|---|
| P1 | Reword the closing claim to what the page proves | Reflection and credibility | Low |
| P1 | Cut the short page toward 900 words | Storytelling; the threshold story moves up | Medium |
| P1 | Name a success signal from the existing model | Outcomes | Low |
| P2 | Add the sign-in sheet, landmark field and tracker screens to the detailed page | Interaction Design | Low |
| Later | A light test of the cart nudges with a few people | Research and Outcomes | Medium |

## 9. Before and after

### What building it taught me
**Original:** "Nothing on the screen is there by accident. Every decision traces back to a real person who is simply out of time, and to what it honestly takes to give some of it back."
**Problem:** The page itself shows thresholds that were there by accident until the model caught them.
**Improved:** "Every number on the screen now traces back to the model, and every decision to a real person who is simply out of time, and to what it honestly takes to give some of it back."
**Missing evidence:** None.

## 10. Hiring manager questions

1. Where do the ₦5.4M fixed cost and the 20% margin come from?
2. How would you know the small-cart fee does not scare off the premium shopper you are targeting?
3. Why five orders for the welcome offer, and how would you decide whether it pays back?
4. If you could test one thing with real shoppers tomorrow, what would it be?
5. What did building the app yourself change about the design?

## 11. Final recommendation

The three changes most likely to improve hiring readiness:

1. Reword the closing claim so it matches the page's own story.
2. Cut the short page toward 900 words.
3. Name the success signal you would measure, from the model you already have.

No rewrite this time: Haye asked for a score only.
