<!-- Haye's rewrite, live on /work/shappay/detailed since 2026-11-21. Image lines and callouts come from the page. -->

[Shappay case study](/work/shappay)

Detailed case study · Shappay

# Redesigning how people pay on Shappay

12 min read

## The product and the bet

Sending money in Nigeria usually means typing a 10-digit account number, picking the right bank from a long list, and hoping the account name that pops up is the right person. Most shops don't have a card terminal, so they get paid the same way: by reading their account number out loud or printing it on a sign.

Nigeria already has a national standard for payment QR codes, NIBSS NQR, which is built on the global EMVCo specification. What is missing is an app experience that people actually want to use. Shappay is building that experience on top of the standard: a single QR code a shop can print once and accept payments from any bank, paired with a scanner that reads any code built to the national standard, no matter who issued it. Every user also gets a ShapID, like tunde@shappay, so paying a friend is as easy as typing a handle or scanning a code.

Two other product decisions shaped how the app works:

1. **Static QR codes first.** A shop prints one code, and the customer enters the amount. It is the most affordable way to create a working payment loop: print the code once and get paid every time.
2. **Wallet first.** Our initial design pulled every payment directly from the user's bank account. When we tested this with payment providers, we realized every transaction would inherit bank downtime, delays, and extra redirects. We separated funding from paying: users connect to their bank once to top up their wallet, and payments clear instantly from their balance.

We are building the scanner in stages. Right now, it reads Shappay's own codes, while full NQR support is still in progress. Until the scanner can read every code, our fallback screen for unreadable codes is how users complete their payment. That is why we paid close attention to it during testing.

QR scanning and ShapIDs are the core of Shappay, yet our first design made both hard to find. This case study covers how I tested the first version, redesigned the parts that failed, and ran the same test again. Both rounds focused on one main question: when people go to pay, do they find Scan and ShapID, or do they fall back to typing a bank account number?

[Video: Paying by scan in Shappay: from Home, scan Adaeze Bakery's code, enter ₦2,500, review, enter the PIN, sent.](/assets/shappay/motion/shappay-pay-by-scan_16x9_1920x1080.mp4)

*Paying by scan in the current app, from the home screen to confirmation, using sample data. Because the web build does not have camera access, the scan is simulated.*

## How we tested

We ran the exact same unmoderated test twice, each time with 8 different people in Nigeria who regularly send money from their phones, recruited from my friends and contacts. The first design was tested on 9 and 10 November 2026, and the redesign was tested from 12 to 14 November. Testers completed the session on their own phones using a single link.

- **Build:** A web build of Shappay running on sample data with a simulated scanner, where testers tap an on-screen QR code instead of pointing a camera.
- **Setup:** A custom testing tool I built that walked testers through each task, timed them (about 4 minutes per task), recorded their screens with consent while masking typed inputs, and asked for an ease rating (1 to 10) plus a quick follow-up question.
- **Pass targets (set before testing):** At least 7/8 testers complete the scan, ShapID, and unreadable-code tasks; at least 7/8 answer the pending-status question correctly; and an average ease score of 8.5/10 or higher.
- **Scoring:** A payment counted as a pass if the right person was paid using the right method. Typing the wrong amount still counted, since that is a normal slip rather than a navigation failure. I re-scored the first round using this exact rule so both designs were judged fairly.

| Task | What it asked |
| --- | --- |
| Scan and pay | Pay a bakery ₦2,500 using the QR code at its counter |
| Pay a ShapID | Send a friend ₦1,000 using his ShapID |
| Pending | Read a payment screen and say whether the shop has received the money yet |
| Unreadable code | Pay a restaurant ₦500 using the code on its sign (the code fails to scan on purpose) |
| Add money, then pay | Top up the wallet, then pay the bakery |
| Request (redesign only) | Ask a friend for the ₦2,000 he owes you |

## Testing the first design

Not a single task met its pass target. Completion rates sat between 4/8 and 6/8, and the issues came down to a handful of clear problems tied to specific screens.

1. **Bank transfers are a deeply ingrained habit.** On tasks that called for a QR scan or a ShapID, testers opened the bank transfer flow at least 10 times, and at least 3 payments went through the wrong route. People naturally assumed "Send money" meant sending to a bank account.
2. **Scan was hard to find, though easy to use once found.** On the first scan task, 5/8 testers did not go straight to Scan. Two found it after 21 and 37 seconds, while three never opened it at all. The button only showed an icon with no text label. Once people actually opened the scanner, everyone reached the amount screen smoothly.
3. **ShapIDs felt hidden and unresponsive.** The Send screen stayed completely blank until a full ID was typed in. Two testers gave up on the task entirely.
   > “I expected to find the user displayed without me first searching for the user.”
   > “Perhaps an error message when typing a wrong Shappay ID rather than staying blank.”
4. **The unreadable-code screen only worked half the time.** Only 4/8 testers recovered successfully. Four tapped "Send money" first, which only pays a ShapID, even though the shop's sign clearly displayed a bank account number.
   > “The QR code might not be for a Shappay user cos I couldn't pay Mama Cee.”
   > “It would be nice making the recommended option bolder.”
5. **"Pending" looked like "paid."** Three out of 8 testers believed the shop had already received the money. Because the screen read "shows as sent," people latched onto the word "sent."

One other pattern changed how I evaluated the results: five separate times, testers rated a task 10/10 for ease even after paying the wrong person or wrong amount. From that point on, I relied on actual task completion over self-reported ease.

## The redesign

I made five focused changes, each directly addressing a problem from the first round. Keeping the scope tight meant the retest would clearly show which fixes worked.

1. **Home clearly names every way to pay**

   I replaced the top row of Fund, Send, Split, and Request with Scan to pay, Send to ShapID, Send to bank, and Add money. Scan comes first because it is the foundation of the product. "Add money" now matches the title of the screen it opens. I moved Request and Split into the Payments tab, one tap deeper. I expected them to remain easy to find there, and I added a Request task to the retest to verify that assumption.

   Before

   ![Home before the redesign: Fund, Send, Split and Request](/assets/shappay/redesign/before-01-home.png)

   After

   ![Home after the redesign: Scan to pay, Send to ShapID, Send to bank and Add money](/assets/shappay/redesign/after-01-home.png)

   1. “Send” was too vague and made people think of bank accounts.
   2. “Scan to pay” comes first because QR payments are the core of the product.
   3. “Send to ShapID” and “Send to bank” spell out exactly where the money goes.
   4. “Add money” matches the screen it opens.

2. **"Pay" became "Payments"**

   New users had no idea that requests, bill splits, and withdrawals lived inside a tab called "Pay." Apps like Monzo and Wise use "Payments" for this broader set of actions, and the tiles inside now use the exact same labels as the home screen.

   Before

   ![The Pay tab before the redesign](/assets/shappay/redesign/before-02-pay-hub.png)

   After

   ![The Payments tab, with the same names as Home and Request or split](/assets/shappay/redesign/after-02-pay-hub.png)

   1. “Pay” didn't signal to new users that requests, splits, and withdrawals were inside.
   2. Monzo and Wise use “Payments” for the same group of actions.
   3. The tiles inside now match the exact labels on Home.

3. **The Send screen gives immediate feedback**

   Recent contacts now appear before the user types anything. Typing a plain name like "tunde" also searches for "tunde@shappay." If an ID does not exist, the screen responds clearly: "No one on Shappay with that ID. Check the spelling, or send to a bank account."

   *The Send screen, before anything is typed*

   Before

   ![Before: a blank Send screen](/assets/shappay/redesign/before-03-send-empty.png)

   After

   ![After: recent people listed before anything is typed](/assets/shappay/redesign/after-03-send-empty.png)

   1. Previously, nothing appeared until a full ID was entered.
   2. Recent contacts now show up right away.

   *The Send screen, for an ID that doesn't exist*

   Before

   ![Before: no answer for an ID that doesn't exist](/assets/shappay/redesign/before-05-send-unknown.png)

   After

   ![After: No one on Shappay with that ID. Check the spelling, or send to a bank account](/assets/shappay/redesign/after-05-send-unknown.png)

   1. Previously, typing an invalid ID gave no feedback at all.
   2. Now it tells the user no match was found and offers a direct path to bank transfer.

4. **The unreadable-code screen leads with bank transfer**

   "Send to bank" is now the primary button and "Send to ShapID" is secondary, paired with a single guiding line: "Pay with the account number on the shop's sign, or their Shappay ID." I kept the heading "Can't read this code" because the QR code might work fine and simply belong to another provider.

   Before

   ![Before: two equal options, Send to bank and Send money](/assets/shappay/redesign/before-07-cant-read.png)

   After

   ![After: Send to bank as the main button, Send to ShapID second](/assets/shappay/redesign/after-07-cant-read.png)

   1. Previously, both buttons had equal visual weight. Four testers tapped “Send money” (which pays a ShapID) even when the sign showed a bank account number.
   2. The heading stays neutral, since the code may be valid and just belong to another provider.
   3. “Send to bank” is now the primary button, with “Send to ShapID” placed second.

5. **Pending status says what it actually means**

   "Pending" became "On its way," and the message now names the shop directly: "Adaeze Bakery hasn't received this yet. ₦2,500 has left your balance, and History will show when it arrives."

   Before

   ![Before: Pending, with the line shows as sent in your balance](/assets/shappay/redesign/before-08-pending.png)

   After

   ![After: On its way, Adaeze Bakery hasn't received this yet](/assets/shappay/redesign/after-08-pending.png)

   1. In the first test, 3/8 testers thought the shop had already been paid.
   2. The phrase “shows as sent” caused confusion because people focused on the word “sent.”
   3. “Pending” was rewritten as “On its way.”
   4. The copy now names the shop and explains that the money has left your balance while still in transit.

### What we weighed

| Decision | Options | Chose | Why |
| --- | --- | --- | --- |
| Home actions | Keep Fund, Send, Split, Request; rename them; rebuild the row around payment methods | Scan to pay, Send to ShapID, Send to bank, Add money | Most testers had to hunt for Scan. The main row needed to clearly name every way to pay, starting with Shappay's core feature. |
| Where Request and Split live | Keep them on Home; create a new hub; place them inside the Payments tab | Inside the Payments tab as "Request or split" | Home only fits four main actions, and paying comes first. The trade-off was one extra tap, which we tested in round two. |
| Tab name | Pay; Payments | Payments | "Pay" didn't tell users that requests, splits, and withdrawals lived there. Monzo and Wise use "Payments" for the same set. |
| Unreadable QR code | Two equal buttons; highlight one primary option | Lead with Send to bank | Shop signs in Nigeria display a bank account number. Half of the testers had tapped Send money, which cannot pay a bank account. |
| Pending wording | "Pending" and "shows as sent"; "On its way" and "hasn't received this yet" | "On its way" | Three out of 8 testers thought a pending payment had already arrived because they saw the word "sent." |
| Send screen | Stay blank until a full ID is entered; show recent people, match plain names, and show an error for unknown IDs | Show, match, and explain | Testers ran into a blank screen, typed names without "@shappay," and received no feedback when an ID didn't exist. |

## Testing the redesign: what held, what still failed, what broke

Three of the four tasks with pass targets met them in the redesign, compared to none in the first version. Paying a ShapID improved slightly but still fell short, and the new Request task performed the worst.

| Task | First design | Redesign | Median time (redesign) | Ease out of 10 (redesign) |
| --- | --- | --- | --- | --- |
| Scan and pay | 5/8 | 8/8 | 39 s | 9.4 |
| Unreadable code | 4/8 | 8/8 | 29 s | 9.0 |
| Pending | 5/8 | 7/8 | Reading only | Not asked |
| Add money, then pay | 6/8 | 7/8 | 48 s | 9.4 |
| Pay a ShapID | 4/8 | 5/8 | 48 s | 9.5 |
| Request | Not tested | 4/8 | 74 s | 5.1 |

**What held.** Every single tester found Scan, though a few paused before tapping it. One person waited 46 seconds on the home screen before selecting it: "Because it was a task it made me think hard while the answer was right in front of me." Every tester successfully got past the unreadable code, and its ease rating jumped from 5.5/10 to 9.0/10. One tester also suggested a useful next step: "It would be great for users to be able to copy the account number and bank name directly (under the QR code)." Seven out of 8 understood the pending payment screen accurately, and confidence in keeping money in the wallet rose from 8.0/10 to 9.5/10.

**What still failed.** On the ShapID task, two testers opened Send to ShapID and within 3 to 7 seconds tapped Tsoji, the only name in the new Recent list, even though the task was to pay Tunde. A third tester scanned the bakery's QR code again, repeating the first task. Adding the Recent list fixed the blank screen, but having just one sample name made it too easy to tap the wrong person.

**What broke.** Moving Request off the home screen backfired: only 4/8 testers found it, with an average ease score of 5.1/10. Just one tester went straight to the Payments tab. People got stuck in two places:

- Two testers never opened the Payments tab at all. They searched on Home, inside Profile, and inside Send to ShapID. "I was having a difficult time locating and figuring out how to message someone on the app."
- Two testers reached the Requests screen and left without starting a request. One tapped through the Incoming, Sent, and Splits tabs instead. Because the screen opens with a "Requests" title and a row of filter tabs, it looks like a history log rather than a place to create a new request.

One tester summed it up clearly: "The last part for requesting money should be in an area where it can be seen visibly without one selecting the wrong options."

## After the redesign: what's next

Two follow-up updates are already built and merged, though they haven't been tested yet.

1. **Request and Split are back on Home.** Two new tiles, "Request money" and "Split a bill," now sit beneath the balance, separate from the four main payment actions. They are immediately visible on the first screen without crowding the payment row that tested so well.
2. **The keypad's "000" button is now "00."** Several testers accidentally typed an extra zero when entering amounts. A double-zero key makes it much less likely to overshoot an amount than a triple-zero key.

![Home with the new Request money and Split a bill tiles under the balance](/assets/shappay/screens/shappay-home.png)

![The amount keypad, with a 00 key](/assets/shappay/screens/shappay-keypad.png)

*Home with the Request money and Split a bill tiles, and the updated 00 keypad button. Built and merged, not yet tested.*

A third round of testing will check whether these tiles fix the Request flow without hurting our scan and ShapID results.

## Why it matters

When users can't easily find QR scanning or ShapIDs, they default to Send to bank and type a 10-digit account number. That is the exact slow, error-prone habit Shappay was built to replace. In the first test, at least 3 wrong payments happened through bank transfer. Taking QR scan completion from 5/8 to 8/8 is not just UI polish; it is the core value of the product finally working as intended. Running the retest was just as valuable as the redesign itself: it validated three major fixes and caught one unintended regression before any real customer experienced it. Shappay is still in development. After launch, our key metric for success will be the percentage of payments completed by QR scan or ShapID instead of a typed account number, with a target of 90%.

## What I'd do differently

- **Test the impact of every relocation.** Moving Request off Home was driven by screen space rather than user behavior. I assumed people would still find it easily, and a single test task proved me wrong. Going forward, any feature I move gets its own test task.
- **Make sample data feel realistic.** The Recent list I added to fix the blank Send screen only contained one name. A real account has multiple recent contacts, and showing a single name invites accidental taps.
- **Trust task completion over ease ratings.** Multiple testers gave a task 10/10 for ease even after paying the wrong person. Checking whether the right person actually got paid was the only reliable signal.

## How it's built

**The app.** Built with React Native and Expo from a single codebase for both mobile and web. The architecture runs in three layers: the first identifies who you want to pay (via QR code or ShapID), the second determines the right payment route, and the third moves the money. Sending to another Shappay wallet settles instantly on Shappay's internal ledger. Sending to a bank account deducts from the wallet balance and pushes a payout to the bank. If a code can't be read, the app routes users to bank transfer through the fallback card we tested above. Funding wallets through Mono and managing wallets and payouts through Anchor are planned next; for now, the app runs on sample data.

**QR codes.** Shappay's QR codes and scanner are being built on the NIBSS NQR standard so they work seamlessly across banks. Currently, the app reads Shappay's own payment links, with full cross-bank NQR scanning in progress. You can try a working demo of the NQR payload format right on this page.

[Figure drawn in code: nqr-demo]

Next project

[UI to JSONA Figma plugin that turns a design into code-ready JSON. 300+ users.](/work/ui-to-json)
