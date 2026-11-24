# Case Study Review: Redesigning Shappay's ways to pay (built pages, rescored)

**Project:** Shappay, payment screens redesign (Shappay, Nigeria)
**Source:** the built portfolio pages /work/shappay and /work/shappay/detailed (text in shappay-site-source.md); content from portfolio/lib/case-studies.ts, detailed-case-studies.ts and shappay-screens.ts
**Target Level:** Mid
**Review Mode:** Online Portfolio
**Overall Score:** 83/100 (83 of 100 applicable points)
**Evidence Coverage:** High
**Hiring Readiness:** Strong

**Could not inspect:** Nothing material. Both pages were read in full at desktop width, every screenshot pair and phone frame was opened, the scan to pay loop was checked frame by frame, and the NQR demo was used. The onboarding loop and slider on the home page are outside this case study and were not scored.

**First impression:** In 30 seconds a hiring manager sees a tested redesign of a Nigerian payments app, a measured jump from 5/8 to 8/8 on paying by scan, who did what on a four-person team, and the app itself on three whole phones. They keep reading, and the first before and after pair tells them why.

## 1. Executive verdict

This is a strong Mid-level case study. It rests on something most portfolios lack: the same usability test run on two different groups of 8, before and after a redesign, with pass bars set in advance and one scoring rule. Every change traces to a finding, every before and after pair says what changed and why, and the failures sit beside the wins. Since the first pass of this review, the Home pair is clean, the preview phones show whole, the empty next-project box is gone, the stage and a 90% success target are stated, and "How it's built" no longer drifts into the testing tool's internals. What keeps it from exceptional is evidence the reasoning points at but does not show: the Home row options, the Monzo and Wise reference, and a clip of the unreadable-code flow.

## 2. Scorecard

| Dimension | Score | Assessment |
|---|---|---|
| Problem Definition | 8/10 | Specific failure per screen and per task; the user is still described in one generic line. |
| Business Context | 7/10 | States the stage (in development), the post-launch measure and a 90% target; why 90% is not said. |
| Research and Evidence | 8/10 | Two independent groups of 8, pass bars set in advance, one scoring rule, quotes tied to decisions. |
| Product Thinking | 12/15 | Decision log with options and reasons, a scoped redesign, and a trade-off the retest measured; options are listed, never shown. |
| Interaction Design | 8/10 | States shown before and after with callouts, plus a real scan to pay clip; the unreadable-code flow is stills only. |
| Visual Design | 9/10 | Clean, consistent dark captures in one real frame with status bars; numbered callouts carry each change; nothing unfinished on the page. |
| Outcomes and Impact | 12/15 | Measured before and after on the same tasks, failures reported, and a post-launch target; 8 testers a round with no word on confidence. |
| Storytelling | 9/10 | Leads with the change, each pair opens on a claim, the retest section is memorable, and every section now earns its place. |
| Ownership | 5/5 | Each teammate's part is stated, and "I" marks the design calls. |
| Reflection | 5/5 | Three specific lessons tied to what happened in this project. |
| **Total** | **83/100** | **Normalized 83/100** |

No dimension is N/A: the interface, the pairs and the clip were all inspected.

### Dimension notes

**Problem Definition (8/10)**
- Strength: each failure has a screen and a count, for example "testers opened bank transfer at least 10 times, and at least 3 wrong payments went through it".
- Weakness: the user is "8 people in Nigeria who send money from their phones"; payers and shop owners are not told apart.
- Evidence: "people with a QR code or a ShapID in front of them still went to bank transfer" (Short page, Problem)
- Do this: one line on how the testers usually pay a shop, since the story is about habit.

**Business Context (7/10)**
- Strength: "Shappay is still in development. After launch, the measure of success is the share of payments made by scan or ShapID instead of a typed account number, and the target is 90%."
- Weakness: the target has no reasoning behind it, and nothing links the share to revenue, cost or risk.
- Evidence: "and the target is 90%" (Short page, Results)
- Do this: be ready to say why 90%, and what the remaining share costs Shappay.

**Research and Evidence (8/10)**
- Strength: two independent groups of 8, pass bars set before testing, and one scoring rule applied to both designs.
- Weakness: 8 a round is small, and the page does not say how much the numbers can bear.
- Evidence: "each time with a different 8 people in Nigeria who send money from their phones" (How we tested)
- Do this: keep the method as it is and prepare the interview answer on sample size.

**Product Thinking (12/15)**
- Strength: "What we weighed" gives options, the choice and the reason for six decisions, and the Request move is reported with its cost.
- Weakness: the options are only words ("Pay; Payments"), and no visual shows the Home row alternatives that lost.
- Evidence: "Home has room for four actions, and paying comes first. The cost was one more tap, which the retest measured." (What we weighed)
- Do this: show two or three Home row options you explored, side by side, with why each lost.

**Interaction Design (8/10)**
- Strength: in-between states are designed and shown with numbered callouts, and the scan to pay clip shows the whole flow from Home to sent.
- Weakness: the unreadable code to Send to bank flow, the one the tests weigh most, is still stills only.
- Evidence: "Paying by scan in the current app, from Home to sent, on sample data." (The product and the bet, clip caption)
- Do this: add a short clip of a code that will not read, then Send to bank.

**Visual Design (9/10)**
- Strength: the pairs are cropped to what changed, the phones sit whole in one frame with a status bar, and every comparison is readable from its summary line and callouts.
- Weakness: the before and after pairs show a ₦5,000 balance while the clip and phones show ₦220,350.00; the builds differ and the page does not say so.
- Evidence: "₦5,000.00" (Home pair) against "₦220,350.00" (preview phones)
- Do this: nothing urgent; if asked, the pairs come from the test builds and the phones from the current app.

**Outcomes and Impact (12/15)**
- Strength: baseline and after on the same tasks and rule, median times and ease, failures beside wins, and a stated target for launch.
- Weakness: test results on a web build with a simulated scan; no line on confidence with 8 a round.
- Evidence: "After the redesign, paying by scan rose from 5/8 to 8/8 testers" (Short page, Impact)
- Do this: add "in testing" wherever a number could be read as production, which the Impact card already does.

**Storytelling (9/10)**
- Strength: the brief opens on the change, each pair leads with a one-line claim, and "Testing the redesign: what held, what still failed, what broke" is a heading people remember. "How it's built" now ends on the NQR demo.
- Weakness: the detailed page still runs 11 minutes, which is right for a deep read but long for a first visit.
- Evidence: "11 min read" (Detailed page, header)
- Do this: keep the short page as the entry point; it already does the job.

**Ownership (5/5)**
- Strength: "a product manager, who agreed and approved the redesign's scope; a frontend engineer, who reviewed and merged it; and a backend engineer, who built the ShapID lookup".
- Weakness: none that matters at this level.
- Evidence: Team line (Short page, hero)
- Do this: keep it.

**Reflection (5/5)**
- Strength: each lesson is specific and earned: "Every feature I move now gets a task of its own."
- Weakness: none that matters at this level.
- Evidence: "Test the cost of every move." (What I'd do differently)
- Do this: keep it.

## 3. What works

1. **A real before and after test**: two independent groups, the same tasks, one scoring rule and pass bars set in advance make 5/8 to 8/8 believable.
2. **Callouts instead of a slider**: every pair names what changed and why, so a reader learns the decision without dragging anything.
3. **Failures in plain view**: the ShapID miss and the Request breakage are reported with their causes, which makes the wins credible.

## 4. What isn't working

### Severity: Low: The Home row options are named, not shown
- **Evidence:** "Keep Fund, Send, Split, Request; rename them; rebuild the row around ways to pay" (What we weighed)
- **Why it matters:** it is the biggest decision on the page, and the only one whose alternatives a reader cannot see.
- **Fix:** a small visual of the three options, with one line on why each lost or won.

### Severity: Low: The Payments name rests on an unshown reference
- **Evidence:** "Monzo and Wise use Payments for the same set" (The redesign, 02)
- **Why it matters:** it is the only external evidence for a decision, and it is asserted.
- **Fix:** a small strip of the two apps' tab bars next to Shappay's.

### Severity: Low: The unreadable-code flow is stills only
- **Evidence:** "Pay when the code can't be read: 4/8 to 8/8" (Results)
- **Why it matters:** the biggest gain on the page has no clip, while scan to pay does.
- **Fix:** a loop of a code that will not read, then Send to bank, matching the scan to pay clip.

### Severity: Low: Sample size is left to the interview
- **Evidence:** "a different 8 testers each time" (Results)
- **Why it matters:** a fintech hiring manager will ask how much 8 a round can prove.
- **Fix:** prepare the answer: the pass bars were set first, and completion, not ease, is the number trusted.

## 5. Storytelling audit

- **Opening hook:** strong: "A usability test showed that people couldn't find Shappay's ways to pay, so I redesigned the payment screens and ran the same test on the redesign."
- **Narrative structure:** problem, insight, decision, solution and outcome hold on both pages; "What's next" keeps the loop going honestly.
- **Clarity:** plain words, counts as fractions, short sentences; callouts carry the screen-level detail.
- **Pacing:** the short page is under 600 words and reads in a minute; the detailed page gives about a sixth to product background and build notes.
- **Decision rationale:** strong in "What we weighed" and in each change's paragraph.
- **Outcome presentation:** honest and measured, with failures beside wins and a target for launch.

**Remove:** nothing.
**Move:** nothing.
**Condense:** nothing material.
**Expand:** the Home row options and the Monzo and Wise reference, as visuals.

## 6. Visual evidence audit

- **Supports the story:** every before and after pair, cropped to the change, with numbered callouts; the scan to pay clip; the three whole phones in the preview; the useshappay.com screenshot.
- **Missing:** the unreadable code to Send to bank flow as a clip; the Home row options; the Monzo and Wise reference.
- **Needs annotation or redoing:** nothing.
- **Interactions to demonstrate:** unreadable code to Send to bank; Send to ShapID with a bare name.
- **Understandable from images and captions alone?** Yes: each pair's summary line and callouts make the change readable without the body text.

## 7. Evidence and credibility audit

| Claim | Class | Evidence needed |
|---|---|---|
| "paying by scan rose from 5/8 to 8/8 testers" | Supported but incomplete | A line or answer on what 8 a round can prove |
| "getting past a code the app couldn't read from 4/8 to 8/8" | Supported but incomplete | Same as above |
| "testers opened bank transfer at least 10 times, and at least 3 wrong payments went through it" | Supported but incomplete | Source is the recordings; one clip would make it Verified |
| "Monzo and Wise use Payments for the same set" | Asserted without evidence | Screenshots or links to the two apps' tab bars |
| "Checking it against the providers showed each payment would inherit the bank's uptime, delays and redirects" | Asserted without evidence | Which providers were checked and what was found |
| "the target is 90%" | Supported but incomplete | Why 90% |
| Team roles; two different groups of testers | Verified in supplied materials | None |

Attribution reads as honest: "I" for the design calls, named parts for each teammate.

## 8. Priority fixes

| Priority | Change | Expected benefit | Effort |
|---|---|---|---|
| P1 | Show the Home row options explored | Product Thinking moves toward exceptional | Medium |
| P1 | Add an unreadable code to Send to bank clip | The page's biggest gain gets a moving proof | Medium |
| P2 | Add the Monzo and Wise tab bar reference | The one asserted reference becomes evidence | Low |
| P2 | Prepare answers on sample size and on why 90% | Covers the two likeliest interview questions | Low |

## 9. Before and after

### Detailed page, The redesign, 02
**Original:** "A new user couldn't tell that requests, splits and withdrawals lived behind "Pay". Monzo and Wise use Payments for the same set, and the tiles inside now use the same names as Home."
**Problem:** the reference is stated, not shown.
**Improved:** "A new user couldn't tell that requests, splits and withdrawals lived behind "Pay". Monzo and Wise use Payments for the same set [ADD: a small strip of their tab bars], and the tiles inside now use the same names as Home."
**Missing evidence:** the reference visual.

### Short page, Results note
**Original:** "Shappay is still in development. After launch, the measure of success is the share of payments made by scan or ShapID instead of a typed account number, and the target is 90%."
**Problem:** strong as written; only the reasoning for 90% is missing.
**Improved:** "Shappay is still in development. After launch, the measure of success is the share of payments made by scan or ShapID instead of a typed account number, and the target is 90% [ADD: why 90%, if you want it on the page]."
**Missing evidence:** the basis for the target.

## 10. Hiring manager questions

1. With 8 testers a round, how sure are you that 5/8 to 8/8 is the redesign and not chance?
2. Why is 90% the target, and what does the remaining share cost Shappay?
3. Which Home row options did you explore before Scan to pay, Send to ShapID, Send to bank and Add money?
4. Why move Request off Home in the first place, when the row had room for a fifth action?
5. Two testers tapped Tsoji in the Recent list on a task about Tunde. How would you design Recent for a new user?
6. Where does reading every NQR code stand, and how does the unreadable-code card change once it works?
7. What did the product manager push back on when approving the scope?

## 11. Final recommendation

The three changes most likely to improve hiring readiness:

1. Show the Home row options you explored.
2. Add a clip of the unreadable-code flow, matching the scan to pay one.
3. Add the Monzo and Wise reference, and prepare the sample size and 90% answers.

Movement: the doc scored 75/100; the built pages scored 79/100 on first pass and 83/100 after the fixes. Since the first pass: Business Context (+1, stage and target), Visual Design (+1, clean Home pair, whole phones, no empty box), Outcomes (+1, independent groups and a target), Storytelling (+1, "How it's built" condensed).

The rewritten case study is in `shappay-site-case-study.md`, with sky blue boxes marking 3 visuals to make.
