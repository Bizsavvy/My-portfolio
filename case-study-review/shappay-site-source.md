# Short page (/work/shappay)

CASE STUDY · SHAPPAY

Redesigning Shappay's ways to pay

A usability test showed that people couldn't find Shappay's ways to pay, so I redesigned the payment screens and ran the same test on the redesign. Shappay is building an interoperable QR for Nigeria: one code a customer of any bank can pay, and a scanner that reads any code made to the national standard. I lead product design, and ship my designs in code for the frontend engineer to review.

ROLE
Design engineer, leading product design
TIMELINE
2025 to now; tests in November 2026
TEAM
Me; a product manager, who agreed and approved the redesign's scope; a frontend engineer, who reviewed and merged it; and a backend engineer, who built the ShapID lookup
PROBLEM

Shappay's first design didn't make its two ways to pay easy to find. In testing, people with a QR code or a ShapID in front of them still went to bank transfer, and each task was finished by only 4/8 to 6/8 testers.

IMPACT
MEASURED

After the redesign, paying by scan rose from 5/8 to 8/8 testers, and getting past a code the app couldn't read from 4/8 to 8/8. Measured in usability tests on a web build with a simulated scan.

The redesign

Four ways to pay, named the way people say them. Scan comes first.

BEFORE
1
AFTER
2
3
4
1

Before:
“Send” read as “send to a bank account”.

2

After:
Scan to pay comes first, because the product is built on it.

3

After:
Send to ShapID and Send to bank say where the money goes.

4

After:
“Add money” matches the screen it opens.

Until the scanner reads every code, a code it can't read still gets paid. Send to bank leads, because the shop's sign shows an account number.

BEFORE
1
AFTER
2
3
1

Before:
Two equal options. Four testers tapped Send money, which pays a ShapID, when the sign showed a bank account number.

2

After:
The title stays: the code may be fine and simply belong to another provider.

3

After:
Send to bank is the main button, and Send to ShapID comes second.

'On its way' leaves no room to read it as paid.

BEFORE
1
2
AFTER
3
4
1

Before:
3/8 testers said the shop had been paid.

2

Before:
“Shows as sent” gave people the word they kept: “sent”.

3

After:
“Pending” became “On its way”.

4

After:
The sentence names the shop and says the money has left your balance.

useshappay.com
Visit site
(opens in a new tab)
Results
TASK	FIRST DESIGN	REDESIGN
Scan a shop's code and pay	5/8	8/8
Pay when the code can't be read	4/8	8/8
Tell whether a pending payment has arrived	5/8	7/8
Add money, then pay	6/8	7/8
Send to a friend's ShapID	4/8	5/8
Ask a friend for money	not tested	4/8

The same tasks, a different 8 testers each time, scored by the same rule: the right person paid by the right route. Paying a ShapID still misses the bar of 7/8. Request, which this redesign moved off Home, was found by only 4/8; the next build puts it back on Home, not yet tested. Shappay is still in development. After launch, the measure of success is the share of payments made by scan or ShapID instead of a typed account number, and the target is 90%.

Read the detailed case study

NEXT PROJECT

UI to JSON
A Figma plugin that turns a design into code-ready JSON. 300+ users.

# Detailed page (/work/shappay/detailed)

Shappay case study

DETAILED CASE STUDY · SHAPPAY

Redesigning Shappay's ways to pay

11 MIN READ

ON THIS PAGE

The product and the bet
How we tested
Testing the first design
The redesign
Testing the redesign
What's next
Why it matters
What I'd do differently
How it's built
The product and the bet

Sending money in Nigeria means typing a 10-digit account number, choosing the right bank from a long list, and hoping the name that comes back is the one you meant. Shops have no terminal, so they get paid the same way: by reading their number aloud or printing it on a sign.

Nigeria already has a national standard for payment QR codes, NIBSS NQR, built on the EMVCo specification used worldwide. What it lacks is an experience people reach for. Shappay is building that on top of the standard: a QR code a shop prints once and a customer of any bank can pay, and a scanner that reads any code made to the standard, whoever issued it. Every user also gets a ShapID, like tunde@shappay, so paying a friend works by typing an ID as well as by scanning.

Two more decisions shape how it works:

A static QR code first. The shop prints one code and the payer types the amount. It's the cheapest way to a working loop: print it once, get paid for good.
Wallet first. The first design sent every payment straight from the payer's bank. Checking it against the providers showed each payment would inherit the bank's uptime, delays and redirects. So we split adding money from paying: a bank is touched once to fill the wallet, and payments clear against the balance.

The scanner is being built in stages. Today it reads Shappay's own codes, and reading every NQR code is in progress. Until it reads everything, the card for a code it can't read is the way through, which is why the tests put weight on it.

Scanning and ShapIDs are the heart of the product, and the first design didn't make either easy to find. This is the story of its redesign: test the first design, redesign what failed, then run the same test on the redesign. Each round asked one question: when people need to pay, do they find the scan and the ID, or do they reach for the account number they know?

Paying by scan in the current app, from Home to sent, on sample data. The web build has no camera, so the scan is simulated.
How we tested

The same unmoderated test ran twice, each time with a different 8 people in Nigeria who send money from their phones, recruited from my friends and contacts: on the first design on 9 and 10 November 2026, and on the redesign from 12 to 14 November. Testers used their own phones and a single link.

Build: Shappay as a web build on sample data, with a simulated scan: testers tap a pictured QR code instead of pointing a camera.
Setup: a testing tool I built gave each task in turn, timed it (about 4 minutes each), recorded the screen with consent and typed input hidden, then asked how easy it was (1 to 10) and a follow-up question.
Pass bars, set before testing: 7/8 complete the scan, ShapID and unreadable-code tasks; 7/8 answer the pending question correctly; mean ease of 8.5/10 or more.
Scoring: a payment counts if the right person was paid by the right route. A wrong amount still counts, because that's a slip any user makes, not a wrong route. The first round was scored again by this rule, so both designs are judged alike.
TASK	WHAT IT ASKED
Scan and pay	Pay a bakery ₦2,500 using the QR code at its counter
Pay a ShapID	Send a friend ₦1,000, given his ShapID
Pending	Read a payment screen and say whether the shop has the money yet
Unreadable code	Pay a restaurant ₦500 from the code on its sign. The code fails to read, on purpose
Add money, then pay	Top up the wallet, then pay the bakery
Request (redesign only)	Ask a friend for the ₦2,000 he owes you
Testing the first design

No task reached its bar. Between 4/8 and 6/8 testers completed each one, and the failures came from a few causes, each tied to a screen.

Bank transfer is the habit. In tasks that needed a scan or a ShapID, testers opened bank transfer at least 10 times, and at least 3 wrong payments went through it. People read "send money" as "send to a bank account".
Scan was hard to find, but easy to use. On the first scan task, 5/8 didn't go straight to Scan: two found it after 21 and 37 seconds, three never opened it. Its button had an icon and no label. Everyone who did open Scan reached the amount screen without trouble.
A ShapID was hard to reach. The Send screen showed nothing until a full ID was typed. Two testers gave up on that task.
“I expected to find the user displayed without me first searching for the user.”
“Perhaps an error message when typing a wrong Shappay ID rather than staying blank.”
The card for an unreadable code only half worked. 4/8 recovered. Four tapped Send money first, which pays a ShapID, when the sign showed a bank account number.
“The QR code might not be for a Shappay user cos I couldn't pay Mama Cee.”
“It would be nice making the recommended option bolder.”
"Pending" read as "paid". 3/8 said the shop had been paid. The screen said the payment "shows as sent", and "sent" was the word people kept.

One more pattern shaped how I read the rest: five times, a tester rated a task 10/10 for ease after paying the wrong person or amount. From then on, completion was the number I trusted.

The redesign

Five changes, each answering one finding. I kept the scope to what the first test showed, so the retest could tell which change did what.

01
Home names every way to pay

The row of Fund, Send, Split and Request became Scan to pay, Send to ShapID, Send to bank and Add money. Scan leads because the product is built on it. "Add money" matches the screen it opens, which was already called that. Request and Split moved into the payments tab, one tap further away. I expected them to stay easy to find there, and added a request task to the retest to check.

BEFORE
1
AFTER
2
3
4
1

Before:
“Send” read as “send to a bank account”.

2

After:
Scan to pay comes first, because the product is built on it.

3

After:
Send to ShapID and Send to bank say where the money goes.

4

After:
“Add money” matches the screen it opens.

02
"Pay" became "Payments"

A new user couldn't tell that requests, splits and withdrawals lived behind "Pay". Monzo and Wise use Payments for the same set, and the tiles inside now use the same names as Home.

BEFORE
1
AFTER
2
3
1

Before:
“Pay” didn't tell a new user that requests, splits and withdrawals live here.

2

After:
Monzo and Wise call the same set Payments.

3

After:
The tiles use the same names as Home.

03
The Send screen talks back

Recent people show before anything is typed. Typing a bare name like tunde also looks up tunde@shappay. An ID that doesn't exist now gets an answer: "No one on Shappay with that ID. Check the spelling, or send to a bank account."

The Send screen, before anything is typed
BEFORE
1
AFTER
2
1

Before:
Nothing showed until a full ID was typed.

2

After:
Recent people show before anything is typed.

The Send screen, for an ID that doesn't exist
BEFORE
1
AFTER
2
1

Before:
An ID that doesn't exist got no answer.

2

After:
Now it says so, and points to a bank account.

04
The unreadable-code card leads with the bank

Send to bank became the main button and Send to ShapID the second, under one line: "Pay with the account number on the shop's sign, or their Shappay ID." The title stayed "Can't read this code", because the code may be fine and simply belong to another provider.

BEFORE
1
AFTER
2
3
1

Before:
Two equal options. Four testers tapped Send money, which pays a ShapID, when the sign showed a bank account number.

2

After:
The title stays: the code may be fine and simply belong to another provider.

3

After:
Send to bank is the main button, and Send to ShapID comes second.

05
Pending says what it means

"Pending" became "On its way", with the name in the sentence: "Adaeze Bakery hasn't received this yet. ₦2,500 has left your balance, and History will show when it arrives."

BEFORE
1
2
AFTER
3
4
1

Before:
3/8 testers said the shop had been paid.

2

Before:
“Shows as sent” gave people the word they kept: “sent”.

3

After:
“Pending” became “On its way”.

4

After:
The sentence names the shop and says the money has left your balance.

What we weighed
DECISION	OPTIONS	CHOSE	WHY
Home actions	Keep Fund, Send, Split, Request; rename them; rebuild the row around ways to pay	Scan to pay, Send to ShapID, Send to bank, Add money	Most testers hunted for Scan. The row should name every way to pay, starting with the one Shappay is built on.
Where Request and Split go	Keep them on Home; a new hub; inside the payments tab	Inside the tab, as "Request or split"	Home has room for four actions, and paying comes first. The cost was one more tap, which the retest measured.
Tab name	Pay; Payments	Payments	"Pay" didn't say that requests, splits and withdrawals lived there. Monzo and Wise use Payments for the same set.
Code the app can't read	Equal options; lead with one	Lead with Send to bank	Shop signs in Nigeria show an account number. Half the testers chose Send money, which can't pay one.
Pending wording	"Pending" and "shows as sent"; "On its way" and "hasn't received this yet"	"On its way"	3/8 read pending as paid. "Sent" was the word they kept.
Send screen	Blank until a full ID is typed; show recent people, match bare names, say when no one matches	Show, match and say	Testers met a blank screen, typed names without @shappay, and got no answer for an ID that didn't exist.
Testing the redesign: what held, what still failed, what broke

Three of the four tasks with a bar now meet it, against none on the first design. The ShapID task improved but still misses, and the new request task did worst of all.

TASK	FIRST DESIGN	REDESIGN	MEDIAN TIME, REDESIGN	EASE OUT OF 10, REDESIGN
Scan and pay	5/8	8/8	39 s	9.4
Unreadable code	4/8	8/8	29 s	9.0
Pending	5/8	7/8	reading only	not asked
Add money, then pay	6/8	7/8	48 s	9.4
Pay a ShapID	4/8	5/8	48 s	9.5
Request	not tested	4/8	74 s	5.1

What held. Every tester found Scan, though some took their time: one waited 46 seconds on Home before tapping it. "Because it was a task it made me think hard while the answer was right in front of me." Every tester got past the unreadable code, and its ease rose from 5.5/10 to 9.0/10. One suggested the next step: "It would be great for users to be able to copy the account number and bank name directly (under the QR code)." 7/8 read the pending payment correctly. Keeping money in the wallet felt safe: 9.5/10, up from 8.0/10.

What still failed. On the ShapID task, two testers opened Send to ShapID and, within 3 to 7 seconds, tapped Tsoji: the only name in the new Recent list, on a task about Tunde. A third scanned the bakery's code instead, repeating the first task. The Recent list fixed the blank screen and opened a new way to pick the wrong person.

What broke. Request, moved off Home in this redesign, was found by 4/8, with a mean ease of 5.1/10. Only one tester went straight to Payments. The failures happened in two places:

Two testers never opened Payments. They looked on Home, in Profile and inside Send to ShapID. "I was having a difficult time locating and figuring out how to message someone on the app."
Two reached the Requests screen and left without tapping Request. One tapped the Incoming, Sent and Splits tabs instead. The screen opens on a "Requests" heading and a row of tabs, so it reads as a list of past requests, not a place to start one.

One tester put it plainly: "The last part for requesting money should be in an area where it can be seen visibly without one selecting the wrong options."

After the redesign: what's next

Two changes are built and merged. None has been tested yet.

Request and Split come back to Home. Two tiles, Request money and Split a bill, now sit under the balance, outside the four ways to pay. They're visible on the first screen without crowding the row the retest proved works.
The amount keypad's 000 key became 00. Testers added a stray zero more than once. A key that adds two zeros overshoots less often than one that adds three.
Home with the Request money and Split a bill tiles, and the keypad's 00 key. Built and merged, not yet tested.

A third round would test whether the tiles fix Request without costing the scan and ShapID results.

Why it matters

When people can't find the scan or the ShapID, they fall back to Send to bank and type a 10-digit account number: the slow step Shappay exists to remove, and the one where mistakes happen. In the first test, at least 3 wrong payments went that way. So moving scan from 5/8 to 8/8 isn't polish: it's the main thing the app does, starting to work. The retest mattered as much as the redesign: it confirmed three fixes and caught the one change that broke something else, before any real user met it. Shappay is still in development. After launch, the number that shows whether this works is the share of payments made by scan or ShapID instead of a typed account number, and the target is 90%.

What I'd do differently
Test the cost of every move. Moving Request off Home was a decision about space, not about people. I expected it to stay easy to find, and one test task proved me wrong. Every feature I move now gets a task of its own.
Make sample data look like a real phone. The Recent list I added to fix the blank Send screen held one name. Real recents hold several, and a lone name invites a wrong tap.
Trust completion over ease. Testers rated tasks 10/10 after paying the wrong person. Whether the right person got paid is the number that held up.
How it's built

The app. React Native with Expo, one codebase for phone and web. It's designed in three layers. The first knows who you mean: a QR code or a ShapID. The second decides how to pay them. The third moves the money. A payment to another Shappay wallet is an instant transfer on Shappay's own ledger. A payment to a bank account takes the wallet balance and sends it out to the bank afterwards. A code the app can't read leads to bank transfer, through the card tested above. Adding money through Mono and running the wallet and payouts through Anchor are planned and not yet connected, so today the app runs on sample data.

QR codes. Shappay's codes and scanner are being built on NIBSS NQR, so they work across banks. Today the app reads Shappay's own payment links, and reading every NQR code is in progress. A working demo of the NQR payload format runs on this site.

NQR PAYLOAD DEMO
EMVCO MPM · CRC-16/CCITT
MERCHANT NAME
MERCHANT CITY
QR TYPE
Static
Dynamic

A static code carries no amount; the payer types it when they scan.

Scannable. Currency 566 (naira), country NG.

TAG	FIELD	VALUE
00	Payload Format Indicator	01
01	Point of Initiation Method	11
26	Merchant Account Info (NIBSS)	NG.COM.NIBSS-PLC.QR · 0011000012
52	Merchant Category Code	0000
53	Transaction Currency	566
58	Country Code	NG
59	Merchant Name	ADAEZE BAKERY
60	Merchant City	LAGOS
63	CRC Checksum	53DA
RAW PAYLOAD
Copy payload

00020101021126370019NG.COM.NIBSS-PLC.QR011000110000125204000053035665802NG5913ADAEZE BAKERY6005LAGOS630453DA

NEXT PROJECT

UI to JSON
A Figma plugin that turns a design into code-ready JSON. 300+ users.
