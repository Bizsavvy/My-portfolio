# Case Study Review: Redesigning Shappay's ways to pay

**Project:** Shappay, payment screens redesign (Shappay, Nigeria)
**Source:** Claude Doc https://claude.ai/artifact/4SFwAQCNn771veCdFdmXeT (tabs "Short page" and "Detailed version"); screenshots in portfolio/public/assets/shappay/redesign/
**Target Level:** Mid
**Review Mode:** Online Portfolio
**Overall Score:** 75/100 (75 of 100 applicable points)
**Evidence Coverage:** Medium
**Hiring Readiness:** Promising

**Could not inspect:** the flow videos (not recorded yet); the round 3 Home screenshot (being taken); screenshots 02, 03 before, 04 to 06 and 09 to 11 named in the detailed version (not opened). The short page's three before and after pairs and the redesigned Send screen were opened.

**First impression:** In 30 seconds a hiring manager learns that this is a tested redesign of a Nigerian payments app, that scan payments went from 5/8 to 8/8 testers, and that the designer leads product design. They keep reading, because the results table admits two failures next to the wins.

## 1. Executive verdict

This is a credible Mid-level case study built on something most portfolios lack: the same usability test run before and after a redesign, with pass bars set in advance and one scoring rule for both rounds. Every change traces to a finding, the decision log names the options, and the write-up reports what still failed and what the redesign broke. What holds it back is presentation evidence rather than thinking: the short page leans on before and after pairs, and two of the three pairs have test artifacts that a careful reader will catch. Business context is thin, and the team's roles beyond Haye's are unnamed. Fix the screenshots first; they are low effort and the page depends on them.

## 2. Scorecard

| Dimension | Score | Assessment |
|---|---|---|
| Problem Definition | 8/10 | Specific and evidenced: who failed which task, how often, and which screen caused it. |
| Business Context | 5/10 | Explains why typing account numbers hurts, but names no business goal, constraint or success measure beyond the test. |
| Research and Evidence | 8/10 | Two rounds, recordings, quotes and a pattern review, each tied to a decision; recruitment and sample not described. |
| Product Thinking | 12/15 | Clear decision log with options and reasons, a scoped redesign, and an honest trade-off that the retest measured. |
| Interaction Design | 7/10 | States are covered (unreadable code, pending, not found) and shown before and after; no flow sequence yet. |
| Visual Design | 7/10 | Clean hierarchy and a strong primary action on the unreadable-code card; test artifacts in the screenshots. |
| Outcomes and Impact | 11/15 | Measured baseline and after on the same tasks and rule; small sample and test conditions, not launch data. |
| Storytelling | 8/10 | Clear test, redesign, retest arc with headings that say something; the short page opens on the company, not the change. |
| Ownership | 4/5 | Role and team are explicit and "I" is used for the design calls; what the PM and engineers did is not said. |
| Reflection | 5/5 | Three specific lessons, each tied to something that happened in this project. |
| **Total** | **75/100** | **Normalized 75/100** |

No dimension is N/A: the interface was inspected through the screenshots the short page uses.

### Dimension notes

**Problem Definition (8/10)**
- Strength: names the failure and the cause per screen, not a general "users struggled".
- Weakness: the user is described only as "people in Nigeria who send money from their phones".
- Evidence: "people with a QR code or a ShapID in front of them still went to bank transfer" (Short page, Problem)
- Do this: add one line on who the testers were (merchants or payers, how they usually pay).

**Business Context (5/10)**
- Strength: "Why it matters" connects findability to the slow, error-prone step Shappay exists to remove.
- Weakness: no stated business goal (for example, share of payments made by scan or ShapID) and no constraint (pre-alpha, regulation, providers).
- Evidence: "the slow step Shappay exists to remove, and the one where mistakes happen" (Detailed, Why it matters)
- Do this: add one sentence on what the company needs from this flow before launch and how success will be measured after it.

**Research and Evidence (8/10)**
- Strength: research changed the design, and the retest checked it.
- Weakness: no word on how the 8 testers were found, whether the rounds used different people, or whether task wording changed between rounds.
- Evidence: "The same unmoderated test ran twice, each time with 8 people" (Detailed, How we tested)
- Do this: have a one-line answer ready on recruitment and on task wording; add it to the text if a reviewer would otherwise ask.

**Product Thinking (12/15)**
- Strength: the decision log gives options, the choice and the reason, and the Request decision is shown with its cost.
- Weakness: some options are token ("Pay; Payments"), and no visual shows the alternatives explored for the Home row.
- Evidence: "Home has room for four actions, and paying comes first. The cost was one more tap, which the retest measured." (What we weighed)
- Do this: show two or three Home row options you explored and why they lost.

**Interaction Design (7/10)**
- Strength: error and in-between states are designed and shown: unreadable code, pending, unknown ID.
- Weakness: every visual is a still; the core flows (scan to pay, unreadable code to bank) are described, not shown.
- Evidence: "Visual: before/after slider for each change" (Detailed, The redesign)
- Do this: add the planned flow clips for scan to pay and unreadable code to Send to bank.

**Visual Design (7/10)**
- Strength: the redesigned unreadable-code card has one clear primary action and plain copy; the Home tiles keep equal heights with two-line labels.
- Weakness: the Home "before" shows an incoming-request card the "after" lacks; the pending "before" rendered with a fallback serif font in its details card; both pending shots show the test ID "txn_usability_pending".
- Evidence: before-01-home and after-01-home; before-08-pending and after-08-pending (opened)
- Do this: retake the two "before" shots with the same data and loaded fonts, and crop or hide the transaction ID.

**Outcomes and Impact (11/15)**
- Strength: baseline and after on the same tasks, the same scoring rule, dates, and failures reported beside wins.
- Weakness: 8 testers per round on a web build with a simulated scan; these are test results, not launch data, and the text does not say how confident to be in them.
- Evidence: "after the redesign, paying by scan rose from 5/8 to 8/8 testers" (Short page, Impact)
- Do this: keep the numbers as they are and prepare the interview answer on sample size; add "in testing" wherever a number could be read as production.

**Storytelling (8/10)**
- Strength: the arc is causal and the headings carry it ("Testing the redesign: what held, what still failed, what broke").
- Weakness: the short page's brief opens on what Shappay is building, and the change comes in the third sentence.
- Evidence: "Shappay is building an interoperable QR for Nigeria" (Short page, Brief)
- Do this: consider leading with the change and following with the product line.

**Ownership (4/5)**
- Strength: role and team are explicit; "I redesigned the payment screens" and "a testing tool I built" separate Haye's work.
- Weakness: the PM, frontend engineer and backend engineer have no stated part, and "we" in "Wallet first" is unattributed.
- Evidence: "Team: me, a product manager, a frontend engineer and a backend engineer" (Short page, Hero)
- Do this: one line on what each teammate contributed to this redesign.

**Reflection (5/5)**
- Strength: each lesson is specific and earned ("Every feature I move now gets a task of its own").
- Weakness: none that matters at this level.
- Evidence: "Test the cost of every move." (Detailed, What I'd do differently)
- Do this: keep it.

## 3. What works

1. **A real before and after test**: the same tasks, the same rule and pass bars set in advance make the improvement believable, which few portfolio outcomes are.
2. **Failures in plain view**: reporting that ShapID still misses and that Request broke, with the reason, shows judgment and makes the wins credible.
3. **Decisions tied to findings**: each of the five changes answers a named finding, and the decision log shows the options.

## 4. What isn't working

### Severity: High: Before and after pairs carry test artifacts
- **Evidence:** before-01-home shows a "Samuel asked you for" card missing from after-01-home; before-08-pending renders its details card in a fallback serif font; both pending shots show "txn_usability_pending".
- **Why it matters:** the short page is mostly these pairs. A reader who spots a difference the redesign did not cause starts doubting the other comparisons.
- **Fix:** retake before-01 with the same sample data as the after, retake before-08 after fonts load, and crop or hide the transaction ID.

### Severity: Medium: No business goal or success measure
- **Evidence:** "the slow step Shappay exists to remove, and the one where mistakes happen" (Why it matters)
- **Why it matters:** fintech hiring managers look for a link to a business outcome; here the only measure is the test.
- **Fix:** add one sentence on the business goal and the metric you will watch after launch.

### Severity: Medium: Team contribution is unstated
- **Evidence:** "Team: me, a product manager, a frontend engineer and a backend engineer" (Hero)
- **Why it matters:** interviewers will ask who decided what; an answer only in the room is weaker than one on the page.
- **Fix:** add a line on what the PM and engineers did in this redesign.

### Severity: Low: Research setup leaves questions open
- **Evidence:** "each time with 8 people in Nigeria who send money from their phones" (How we tested)
- **Why it matters:** a reviewer may ask whether the rounds used the same people or the same task wording, which changes how to read the gain.
- **Fix:** prepare a one-line answer; add it to the text if you are comfortable doing so.

### Severity: Low: Pattern claim has no reference
- **Evidence:** "Monzo and Wise use Payments for the same set" (The redesign)
- **Why it matters:** it is the only external evidence for the tab name and is asserted, not shown.
- **Fix:** a small reference strip of the two tab bars, or drop the claim to a footnote.

## 5. Storytelling audit

- **Opening hook:** good but slow: the change arrives in the brief's third sentence.
- **Narrative structure:** problem, insight, decision, solution and outcome hold all the way through; Request shows the loop continuing.
- **Clarity:** plain words, counts as fractions, short sentences.
- **Pacing:** the detailed version spends about a sixth on product background, within range.
- **Decision rationale:** strong in the decision log; thinner on the short page, which relies on callouts.
- **Outcome presentation:** honest and measured, with failures beside wins.

**Remove:** nothing material.
**Move:** consider moving the change ahead of the product description in the brief.
**Condense:** "How it's built" in the detailed version could lose the testing tool's internals to a link.
**Expand:** one line on business goal and one on team roles.

## 6. Visual evidence audit

- **Supports the story:** the unreadable-code pair shows the decision clearly (equal tiles to one primary action); the pending pair shows the copy change; the Home pair shows the new row.
- **Missing:** flow clips for scan to pay and unreadable code to Send to bank; the round 3 Home; a reference for the Payments tab name; options explored for the Home row.
- **Needs annotation or redoing:** before-01-home (sample data differs), before-08-pending (fonts not loaded), both pending shots (test transaction ID).
- **Interactions to demonstrate:** scan to pay, unreadable code to Send to bank, Send to ShapID with a bare name.
- **Understandable from images and captions alone?** Partly: the callouts carry the decisions, but the artifacts muddy two pairs.

## 7. Evidence and credibility audit

| Claim | Class | Evidence needed |
|---|---|---|
| "paying by scan rose from 5/8 to 8/8 testers" | Supported but incomplete | Who the testers were in each round and whether task wording matched |
| "getting past a code the app couldn't read from 4/8 to 8/8" | Supported but incomplete | Same as above |
| "testers opened bank transfer at least 10 times, and at least 3 wrong payments went through it" | Supported but incomplete | Source is the recordings; one clip would make it Verified |
| "Monzo and Wise use Payments for the same set" | Asserted without evidence | Screenshots or a link to the references |
| "Checking it against the providers showed each payment would inherit the bank's uptime, delays and redirects" | Asserted without evidence | Which providers and what was checked |
| "reading every NQR code is in progress" | Supported but incomplete | Expect an interview question on status and timing |
| "I redesigned the payment screens" | Supported but incomplete | What the PM and engineers contributed |

Attribution reads as honest; the open point is the team's share.

## 8. Priority fixes

| Priority | Change | Expected benefit | Effort |
|---|---|---|---|
| P0 | Retake before-01 and before-08, hide the test transaction ID | The page's main evidence becomes clean comparisons | Low |
| P1 | Add one line on the business goal and post-launch measure | Links the work to what a fintech company cares about | Low |
| P1 | Add one line on what the PM and engineers did | Answers the ownership question before it is asked | Low |
| P1 | Add the scan to pay and unreadable code clips | Shows the flows, not only stills | Medium |
| P2 | Show Home row options explored and the Payments references | Moves Product Thinking from strong to exceptional | Medium |

## 9. Before and after

### Short page, Brief
**Original:** "Shappay is building an interoperable QR for Nigeria: one code a customer of any bank can pay, and a scanner that reads any code made to the national standard. I lead product design, and ship my designs in code for the frontend engineer to review. A usability test showed that people couldn't find those ways to pay, so I redesigned the payment screens and ran the same test on the redesign."
**Problem:** the change, the reason to read on, comes last.
**Improved:** "A usability test showed that people couldn't find Shappay's ways to pay, so I redesigned the payment screens and ran the same test on the redesign. Shappay is building an interoperable QR for Nigeria: one code a customer of any bank can pay, and a scanner that reads any code made to the national standard. I lead product design, and ship my designs in code for the frontend engineer to review."
**Missing evidence:** none.

### Detailed version, Why it matters
**Original:** "So moving scan from 5/8 to 8/8 isn't polish: it's the main thing the app does, starting to work."
**Problem:** strong line, but no business measure follows it.
**Improved:** "So moving scan from 5/8 to 8/8 isn't polish: it's the main thing the app does, starting to work. [ADD: the measure you will watch after launch, for example the share of payments made by scan or ShapID]"
**Missing evidence:** the business metric.

### Short page, Team
**Original:** "Team: me, a product manager, a frontend engineer and a backend engineer"
**Problem:** the team is named, their part is not.
**Improved:** "Team: me, a product manager, a frontend engineer and a backend engineer. [ADD: one line on what each did in this redesign]"
**Missing evidence:** team contributions.

## 10. Hiring manager questions

1. Were the testers in the redesign round different people from the first round, and how did you recruit them?
2. Were the tasks worded the same in both rounds?
3. With 8 testers a round, how sure are you that 5/8 to 8/8 is the redesign and not chance? What would you measure after launch?
4. What did the product manager and the engineers contribute, and who decided to move Request off Home?
5. Why not keep Request on Home as a fifth action from the start?
6. Two testers left the Requests screen without tapping Request. What would you change on that screen, beyond moving the entry point?
7. Where does NQR reading stand, and how does the unreadable-code card change once it works?
8. The Recent list showed one name and drew wrong taps. How would you design Recent for a new user with no history?

## 11. Final recommendation

The three changes most likely to improve hiring readiness:

1. Retake the two "before" screenshots and hide the test transaction ID.
2. Add one line each on the business goal and the team's contributions.
3. Add the two flow clips once recorded.

The rewritten case study is in `shappay-redesign-case-study.md`, with sky blue boxes marking 4 visuals to make.
