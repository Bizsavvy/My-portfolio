import type { Shot } from "@/components/site/before-after";
import type { ScreenPairFigure } from "@/components/case/screen-pair";
import { oshapOwes, type CaseFigure } from "@/lib/case-studies";
import { shappayScreens } from "@/lib/shappay-screens";

/**
 * Content for the detailed case study template (components/case/detailed-case-study-page.tsx).
 * Copy must match the "Detailed version" tab of the approved case study doc for that project.
 * Text is plain; a block's bold opening words go in `lead`.
 */

export type Lead = { lead?: string; text: string };

export type Block =
  | ({ kind: "p" } & Lead)
  | { kind: "list"; ordered: boolean; items: (Lead & { quotes?: string[] })[] }
  | { kind: "h3"; text: string }
  | {
      kind: "table";
      label: string;
      columns: string[];
      rows: string[][];
      /** Columns (by index) holding numbers: right-aligned, tabular figures. */
      numeric?: number[];
    }
  /** An ordered run of changes, each followed by its before and after screens. */
  | { kind: "changes"; items: (Lead & { figures: ScreenPairFigure[] })[] }
  | { kind: "phones"; shots: Shot[]; caption: string }
  /**
   * One or more images under one caption: side by side, or stacked with `stack` (wide captures,
   * such as a dashboard before and after). A `label` names each image above it.
   */
  | { kind: "images"; items: { src: string; alt: string; width: number; height: number; label?: string }[]; caption: string; stack?: boolean }
  /** A figure drawn in code from the product's tokens (components/case/case-figure.tsx). */
  | { kind: "figure"; figure: CaseFigure; caption: string }
  /** A visual still to be made. Shows as a marked placeholder. */
  | { kind: "pending"; label: string; text: string }
  /** A muted product loop from the motion session (16:9), with the site's pause control. */
  | { kind: "video"; src: string; poster: string; label: string; caption: string }
  | { kind: "nqr-demo" };

export type DetailedSection = {
  id: string;
  heading: string;
  /** Shorter name for the "On this page" list, when the heading is long. */
  navLabel?: string;
  blocks: Block[];
};

export type DetailedCaseStudy = {
  slug: string;
  project: string;
  title: string;
  shortHref: string;
  sections: DetailedSection[];
  next: { project: string; line: string; href: string };
};


// Copy matches Haye's rewrite of Docs/case-studies/shappay-detailed.md (2026-11-21).
export const shappayDetailed: DetailedCaseStudy = {
  slug: "shappay",
  project: "Shappay",
  title: "Redesigning how people pay on Shappay",
  shortHref: "/work/shappay",
  sections: [
    {
      id: "product",
      heading: "The product and the bet",
      blocks: [
        {
          kind: "p",
          text: "Sending money in Nigeria usually means typing a 10-digit account number, picking the right bank from a long list, and hoping the account name that pops up is the right person. Most shops don't have a card terminal, so they get paid the same way: by reading their account number out loud or printing it on a sign.",
        },
        {
          kind: "p",
          text: "Nigeria already has a national standard for payment QR codes, NIBSS NQR, which is built on the global EMVCo specification. What is missing is an app experience that people actually want to use. Shappay is building that experience on top of the standard: a single QR code a shop can print once and accept payments from any bank, paired with a scanner that reads any code built to the national standard, no matter who issued it. Every user also gets a ShapID, like tunde@shappay, so paying a friend is as easy as typing a handle or scanning a code.",
        },
        { kind: "p", text: "Two other product decisions shaped how the app works:" },
        {
          kind: "list",
          ordered: true,
          items: [
            {
              lead: "Static QR codes first.",
              text: "A shop prints one code, and the customer enters the amount. It is the most affordable way to create a working payment loop: print the code once and get paid every time.",
            },
            {
              lead: "Wallet first.",
              text: "Our initial design pulled every payment directly from the user's bank account. When we tested this with payment providers, we realized every transaction would inherit bank downtime, delays, and extra redirects. We separated funding from paying: users connect to their bank once to top up their wallet, and payments clear instantly from their balance.",
            },
          ],
        },
        {
          kind: "p",
          text: "We are building the scanner in stages. Right now, it reads Shappay's own codes, while full NQR support is still in progress. Until the scanner can read every code, our fallback screen for unreadable codes is how users complete their payment. That is why we paid close attention to it during testing.",
        },
        {
          kind: "p",
          text: "QR scanning and ShapIDs are the core of Shappay, yet our first design made both hard to find. This case study covers how I tested the first version, redesigned the parts that failed, and ran the same test again. Both rounds focused on one main question: when people go to pay, do they find Scan and ShapID, or do they fall back to typing a bank account number?",
        },
        {
          kind: "video",
          src: "/assets/shappay/motion/shappay-pay-by-scan_16x9_1920x1080.mp4",
          poster: "/assets/shappay/motion/shappay-pay-by-scan_16x9_1920x1080_poster.webp",
          label: "Paying by scan in Shappay: from Home, scan Adaeze Bakery's code, enter ₦2,500, review, enter the PIN, sent.",
          caption: "Paying by scan in the current app, from the home screen to confirmation, using sample data. Because the web build does not have camera access, the scan is simulated.",
        },
      ],
    },
    {
      id: "testing",
      heading: "How we tested",
      blocks: [
        {
          kind: "p",
          text: "We ran the exact same unmoderated test twice, each time with 8 different people in Nigeria who regularly send money from their phones, recruited from my friends and contacts. The first design was tested on 9 and 10 November 2026, and the redesign was tested from 12 to 14 November. Testers completed the session on their own phones using a single link.",
        },
        {
          kind: "list",
          ordered: false,
          items: [
            {
              lead: "Build:",
              text: "A web build of Shappay running on sample data with a simulated scanner, where testers tap an on-screen QR code instead of pointing a camera.",
            },
            {
              lead: "Setup:",
              text: "A custom testing tool I built that walked testers through each task, timed them (about 4 minutes per task), recorded their screens with consent while masking typed inputs, and asked for an ease rating (1 to 10) plus a quick follow-up question.",
            },
            {
              lead: "Pass targets (set before testing):",
              text: "At least 7/8 testers complete the scan, ShapID, and unreadable-code tasks; at least 7/8 answer the pending-status question correctly; and an average ease score of 8.5/10 or higher.",
            },
            {
              lead: "Scoring:",
              text: "A payment counted as a pass if the right person was paid using the right method. Typing the wrong amount still counted, since that is a normal slip rather than a navigation failure. I re-scored the first round using this exact rule so both designs were judged fairly.",
            },
          ],
        },
        {
          kind: "table",
          label: "The test tasks",
          columns: ["Task", "What it asked"],
          rows: [
            ["Scan and pay", "Pay a bakery ₦2,500 using the QR code at its counter"],
            ["Pay a ShapID", "Send a friend ₦1,000 using his ShapID"],
            ["Pending", "Read a payment screen and say whether the shop has received the money yet"],
            ["Unreadable code", "Pay a restaurant ₦500 using the code on its sign (the code fails to scan on purpose)"],
            ["Add money, then pay", "Top up the wallet, then pay the bakery"],
            ["Request (redesign only)", "Ask a friend for the ₦2,000 he owes you"],
          ],
        },
      ],
    },
    {
      id: "first-design",
      heading: "Testing the first design",
      blocks: [
        {
          kind: "p",
          text: "Not a single task met its pass target. Completion rates sat between 4/8 and 6/8, and the issues came down to a handful of clear problems tied to specific screens.",
        },
        {
          kind: "list",
          ordered: true,
          items: [
            {
              lead: "Bank transfers are a deeply ingrained habit.",
              text: 'On tasks that called for a QR scan or a ShapID, testers opened the bank transfer flow at least 10 times, and at least 3 payments went through the wrong route. People naturally assumed "Send money" meant sending to a bank account.',
            },
            {
              lead: "Scan was hard to find, though easy to use once found.",
              text: "On the first scan task, 5/8 testers did not go straight to Scan. Two found it after 21 and 37 seconds, while three never opened it at all. The button only showed an icon with no text label. Once people actually opened the scanner, everyone reached the amount screen smoothly.",
            },
            {
              lead: "ShapIDs felt hidden and unresponsive.",
              text: "The Send screen stayed completely blank until a full ID was typed in. Two testers gave up on the task entirely.",
              quotes: [
                "I expected to find the user displayed without me first searching for the user.",
                "Perhaps an error message when typing a wrong Shappay ID rather than staying blank.",
              ],
            },
            {
              lead: "The unreadable-code screen only worked half the time.",
              text: 'Only 4/8 testers recovered successfully. Four tapped "Send money" first, which only pays a ShapID, even though the shop\'s sign clearly displayed a bank account number.',
              quotes: [
                "The QR code might not be for a Shappay user cos I couldn't pay Mama Cee.",
                "It would be nice making the recommended option bolder.",
              ],
            },
            {
              lead: '"Pending" looked like "paid."',
              text: 'Three out of 8 testers believed the shop had already received the money. Because the screen read "shows as sent," people latched onto the word "sent."',
            },
          ],
        },
        {
          kind: "p",
          text: "One other pattern changed how I evaluated the results: five separate times, testers rated a task 10/10 for ease even after paying the wrong person or wrong amount. From that point on, I relied on actual task completion over self-reported ease.",
        },
      ],
    },
    {
      id: "redesign",
      heading: "The redesign",
      blocks: [
        {
          kind: "p",
          text: "I made five focused changes, each directly addressing a problem from the first round. Keeping the scope tight meant the retest would clearly show which fixes worked.",
        },
        {
          kind: "changes",
          items: [
            {
              lead: "Home clearly names every way to pay",
              text: 'I replaced the top row of Fund, Send, Split, and Request with Scan to pay, Send to ShapID, Send to bank, and Add money. Scan comes first because it is the foundation of the product. "Add money" now matches the title of the screen it opens. I moved Request and Split into the Payments tab, one tap deeper. I expected them to remain easy to find there, and I added a Request task to the retest to verify that assumption.',
              figures: [shappayScreens.home],
            },
            {
              lead: '"Pay" became "Payments"',
              text: 'New users had no idea that requests, bill splits, and withdrawals lived inside a tab called "Pay." Apps like Monzo and Wise use "Payments" for this broader set of actions, and the tiles inside now use the exact same labels as the home screen.',
              figures: [shappayScreens.payHub],
            },
            {
              lead: "The Send screen gives immediate feedback",
              text: 'Recent contacts now appear before the user types anything. Typing a plain name like "tunde" also searches for "tunde@shappay." If an ID does not exist, the screen responds clearly: "No one on Shappay with that ID. Check the spelling, or send to a bank account."',
              figures: [shappayScreens.sendEmpty, shappayScreens.sendUnknown],
            },
            {
              lead: "The unreadable-code screen leads with bank transfer",
              text: '"Send to bank" is now the primary button and "Send to ShapID" is secondary, paired with a single guiding line: "Pay with the account number on the shop\'s sign, or their Shappay ID." I kept the heading "Can\'t read this code" because the QR code might work fine and simply belong to another provider.',
              figures: [shappayScreens.cantRead],
            },
            {
              lead: "Pending status says what it actually means",
              text: '"Pending" became "On its way," and the message now names the shop directly: "Adaeze Bakery hasn\'t received this yet. ₦2,500 has left your balance, and History will show when it arrives."',
              figures: [shappayScreens.pending],
            },
          ],
        },
        { kind: "h3", text: "What we weighed" },
        {
          kind: "table",
          label: "Decisions weighed in the redesign",
          columns: ["Decision", "Options", "Chose", "Why"],
          rows: [
            [
              "Home actions",
              "Keep Fund, Send, Split, Request; rename them; rebuild the row around payment methods",
              "Scan to pay, Send to ShapID, Send to bank, Add money",
              "Most testers had to hunt for Scan. The main row needed to clearly name every way to pay, starting with Shappay's core feature.",
            ],
            [
              "Where Request and Split live",
              "Keep them on Home; create a new hub; place them inside the Payments tab",
              'Inside the Payments tab as "Request or split"',
              "Home only fits four main actions, and paying comes first. The trade-off was one extra tap, which we tested in round two.",
            ],
            [
              "Tab name",
              "Pay; Payments",
              "Payments",
              '"Pay" didn\'t tell users that requests, splits, and withdrawals lived there. Monzo and Wise use "Payments" for the same set.',
            ],
            [
              "Unreadable QR code",
              "Two equal buttons; highlight one primary option",
              "Lead with Send to bank",
              "Shop signs in Nigeria display a bank account number. Half of the testers had tapped Send money, which cannot pay a bank account.",
            ],
            [
              "Pending wording",
              '"Pending" and "shows as sent"; "On its way" and "hasn\'t received this yet"',
              '"On its way"',
              'Three out of 8 testers thought a pending payment had already arrived because they saw the word "sent."',
            ],
            [
              "Send screen",
              "Stay blank until a full ID is entered; show recent people, match plain names, and show an error for unknown IDs",
              "Show, match, and explain",
              'Testers ran into a blank screen, typed names without "@shappay," and received no feedback when an ID didn\'t exist.',
            ],
          ],
        },
      ],
    },
    {
      id: "retest",
      heading: "Testing the redesign: what held, what still failed, what broke",
      navLabel: "Testing the redesign",
      blocks: [
        {
          kind: "p",
          text: "Three of the four tasks with pass targets met them in the redesign, compared to none in the first version. Paying a ShapID improved slightly but still fell short, and the new Request task performed the worst.",
        },
        {
          kind: "table",
          label: "Results on the first design and the redesign",
          columns: ["Task", "First design", "Redesign", "Median time (redesign)", "Ease out of 10 (redesign)"],
          numeric: [1, 2, 3, 4],
          rows: [
            ["Scan and pay", "5/8", "8/8", "39 s", "9.4"],
            ["Unreadable code", "4/8", "8/8", "29 s", "9.0"],
            ["Pending", "5/8", "7/8", "Reading only", "Not asked"],
            ["Add money, then pay", "6/8", "7/8", "48 s", "9.4"],
            ["Pay a ShapID", "4/8", "5/8", "48 s", "9.5"],
            ["Request", "Not tested", "4/8", "74 s", "5.1"],
          ],
        },
        {
          kind: "p",
          lead: "What held.",
          text: 'Every single tester found Scan, though a few paused before tapping it. One person waited 46 seconds on the home screen before selecting it: "Because it was a task it made me think hard while the answer was right in front of me." Every tester successfully got past the unreadable code, and its ease rating jumped from 5.5/10 to 9.0/10. One tester also suggested a useful next step: "It would be great for users to be able to copy the account number and bank name directly (under the QR code)." Seven out of 8 understood the pending payment screen accurately, and confidence in keeping money in the wallet rose from 8.0/10 to 9.5/10.',
        },
        {
          kind: "p",
          lead: "What still failed.",
          text: "On the ShapID task, two testers opened Send to ShapID and within 3 to 7 seconds tapped Tsoji, the only name in the new Recent list, even though the task was to pay Tunde. A third tester scanned the bakery's QR code again, repeating the first task. Adding the Recent list fixed the blank screen, but having just one sample name made it too easy to tap the wrong person.",
        },
        {
          kind: "p",
          lead: "What broke.",
          text: "Moving Request off the home screen backfired: only 4/8 testers found it, with an average ease score of 5.1/10. Just one tester went straight to the Payments tab. People got stuck in two places:",
        },
        {
          kind: "list",
          ordered: false,
          items: [
            {
              text: 'Two testers never opened the Payments tab at all. They searched on Home, inside Profile, and inside Send to ShapID. "I was having a difficult time locating and figuring out how to message someone on the app."',
            },
            {
              text: 'Two testers reached the Requests screen and left without starting a request. One tapped through the Incoming, Sent, and Splits tabs instead. Because the screen opens with a "Requests" title and a row of filter tabs, it looks like a history log rather than a place to create a new request.',
            },
          ],
        },
        {
          kind: "p",
          text: 'One tester summed it up clearly: "The last part for requesting money should be in an area where it can be seen visibly without one selecting the wrong options."',
        },
      ],
    },
    {
      id: "next",
      heading: "After the redesign: what's next",
      navLabel: "What's next",
      blocks: [
        { kind: "p", text: "Two follow-up updates are already built and merged, though they haven't been tested yet." },
        {
          kind: "list",
          ordered: true,
          items: [
            {
              lead: "Request and Split are back on Home.",
              text: 'Two new tiles, "Request money" and "Split a bill," now sit beneath the balance, separate from the four main payment actions. They are immediately visible on the first screen without crowding the payment row that tested so well.',
            },
            {
              lead: 'The keypad\'s "000" button is now "00."',
              text: "Several testers accidentally typed an extra zero when entering amounts. A double-zero key makes it much less likely to overshoot an amount than a triple-zero key.",
            },
          ],
        },
        {
          kind: "phones",
          shots: [
            { src: "/assets/shappay/screens/shappay-home.png", alt: "Home with the new Request money and Split a bill tiles under the balance" },
            { src: "/assets/shappay/screens/shappay-keypad.png", alt: "The amount keypad, with a 00 key" },
          ],
          caption: "Home with the Request money and Split a bill tiles, and the updated 00 keypad button. Built and merged, not yet tested.",
        },
        {
          kind: "p",
          text: "A third round of testing will check whether these tiles fix the Request flow without hurting our scan and ShapID results.",
        },
      ],
    },
    {
      id: "why",
      heading: "Why it matters",
      blocks: [
        {
          kind: "p",
          text: "When users can't easily find QR scanning or ShapIDs, they default to Send to bank and type a 10-digit account number. That is the exact slow, error-prone habit Shappay was built to replace. In the first test, at least 3 wrong payments happened through bank transfer. Taking QR scan completion from 5/8 to 8/8 is not just UI polish; it is the core value of the product finally working as intended. Running the retest was just as valuable as the redesign itself: it validated three major fixes and caught one unintended regression before any real customer experienced it. Shappay is still in development. After launch, our key metric for success will be the percentage of payments completed by QR scan or ShapID instead of a typed account number, with a target of 90%.",
        },
      ],
    },
    {
      id: "differently",
      heading: "What I'd do differently",
      blocks: [
        {
          kind: "list",
          ordered: false,
          items: [
            {
              lead: "Test the impact of every relocation.",
              text: "Moving Request off Home was driven by screen space rather than user behavior. I assumed people would still find it easily, and a single test task proved me wrong. Going forward, any feature I move gets its own test task.",
            },
            {
              lead: "Make sample data feel realistic.",
              text: "The Recent list I added to fix the blank Send screen only contained one name. A real account has multiple recent contacts, and showing a single name invites accidental taps.",
            },
            {
              lead: "Trust task completion over ease ratings.",
              text: "Multiple testers gave a task 10/10 for ease even after paying the wrong person. Checking whether the right person actually got paid was the only reliable signal.",
            },
          ],
        },
      ],
    },
    {
      id: "built",
      heading: "How it's built",
      blocks: [
        {
          kind: "p",
          lead: "The app.",
          text: "Built with React Native and Expo from a single codebase for both mobile and web. The architecture runs in three layers: the first identifies who you want to pay (via QR code or ShapID), the second determines the right payment route, and the third moves the money. Sending to another Shappay wallet settles instantly on Shappay's internal ledger. Sending to a bank account deducts from the wallet balance and pushes a payout to the bank. If a code can't be read, the app routes users to bank transfer through the fallback card we tested above. Funding wallets through Mono and managing wallets and payouts through Anchor are planned next; for now, the app runs on sample data.",
        },
        {
          kind: "p",
          lead: "QR codes.",
          text: "Shappay's QR codes and scanner are being built on the NIBSS NQR standard so they work seamlessly across banks. Currently, the app reads Shappay's own payment links, with full cross-bank NQR scanning in progress. You can try a working demo of the NQR payload format right on this page.",
        },
        { kind: "nqr-demo" },
      ],
    },
  ],
  next: {
    project: "UI to JSON",
    line: "A Figma plugin that turns a design into code-ready JSON. 300+ users.",
    href: "/work/ui-to-json",
  },
};

const oshapAsset = (name: string, alt: string): Shot => ({ src: `/assets/oshap/${name}`, alt });

// Copy matches Haye's rewrite of Docs/case-studies/oshap-detailed.md (2026-11-21). The token-flow
// figure under "How the rules hold" is Haye's request of the same day.
export const oshapDetailed: DetailedCaseStudy = {
  slug: "oshap",
  project: "Oshap",
  title: "Any restaurant's colour, readable on every guest's phone",
  shortHref: "/work/oshap",
  sections: [
    {
      id: "overview",
      heading: "Overview",
      blocks: [
        {
          kind: "p",
          text: "Oshap lets restaurant guests scan a table's QR code to order and pay, with no app download and no login. Because every restaurant brings its own brand colour, the design system has to hold up for colours I will never see. This is the story of how I made any brand colour readable, and how those same rules later fixed the surfaces, spacing, and colour meanings underneath, including one decision I reversed the very same afternoon.",
        },
        {
          kind: "table",
          label: "The project at a glance",
          columns: ["", ""],
          rows: [
            ["Role", "Design engineer (owned product design, frontend development, and the design system)"],
            ["Team", "Me, alongside a backend engineer who built the core logic behind the apps"],
            [
              "Timeline",
              "August to September 2026: branding from 20 August; v2 on 1 September, v3 on 2 September, fixed neutrals on 3 September, full adoption through 16 September. Then 16 to 21 November 2026",
            ],
            ["Scope", "4 web apps (guest, staff, operator, and marketing site), light and dark modes"],
            ["Tools", "Figma library; Tailwind CSS v4 tokens in tokens.css; React components in a shared package"],
            ["Stage", "One pilot restaurant onboarded with its brand colour switched on (not open to guests yet)"],
            [
              "How I work",
              "I design in Figma and build directly in code using the Figma MCP with Claude, and I use Claude to test my design opinions against real-world evidence before changing code",
            ],
          ],
        },
        {
          kind: "phones",
          shots: [
            oshapAsset("screens/oshap-guest-menu-hd.png", "Oshap's guest menu in a phone browser, at Aji's Kitchen, table T1"),
            oshapAsset("screens/oshap-guest-dish-hd.png", "A dish sheet: Chicken Shawarma with a spice level and an extra chosen, and Add · ₦3,000"),
            oshapAsset("screens/oshap-guest-cart-hd.png", "The cart sheet: two items, the total and Place Order"),
            oshapAsset("screens/oshap-guest-pay-transfer-hd.png", "Pay Bill: the restaurant's bank details and I've Sent the Money"),
          ],
          caption: "A guest's order in a mobile browser, running on Oshap's main branch with sample data: the menu, a dish with options, the cart, and paying by bank transfer.",
        },
      ],
    },
    {
      id: "why",
      heading: "Why one colour is hard",
      blocks: [
        {
          kind: "p",
          text: "A restaurant gives Oshap a single hex code, and the guest app has to adopt it automatically. From that one input, the system has to generate the main colour, the text on top of it, a tinted container, and the text inside that container, while making sure every pair stays readable on a phone screen in bright daylight.",
        },
        {
          kind: "p",
          text: "Restaurants want the guest experience to stay on brand everywhere. Per-restaurant colour was a feature a restaurant specifically asked for while we were building Oshap.",
        },
        {
          kind: "p",
          text: "No fixed text colour works across the board. White text on a brand yellow measures 1.40:1, making it nearly invisible. White text on a brand navy measures 13.24:1. Because the right answer flips across the colour wheel, any hard-coded choice fails for roughly half of all brands. A restaurant owner won't catch that during setup, but their guests will notice it immediately at a table in daylight. That is why Oshap calculates the right text colour for each brand instead of assuming white.",
        },
        {
          kind: "p",
          text: "Oshap's own orange had the same problem on a smaller scale. White text on #F56500 measures 3.11:1: readable for large text and icons, yet too low for a full sentence.",
        },
        { kind: "p", text: "Version 1 had no colour system built to support more than one restaurant." },
      ],
    },
    {
      id: "decisions",
      heading: "The decisions, and what I tried first",
      navLabel: "The decisions",
      blocks: [
        {
          kind: "p",
          text: "Four core decisions hold the system together, and three of them started with the wrong answer. Every failure was measured, and the measurement pointed directly to the fix. Two quick terms help here: contrast is how far apart two colours are visually, from 1:1 (identical) to 21:1 (black on white), and the seed is the restaurant's own brand colour.",
        },
        {
          kind: "table",
          label: "The four decisions: what I tried first, why it failed and what shipped",
          columns: ["Decision", "Tried first", "Why it failed", "What shipped"],
          rows: [
            [
              "Text on any brand colour",
              "A rule that preferred white text whenever it passed",
              "A colour's contrast against white and against black always multiply to 21, so the stronger option wins automatically; the extra rule did nothing",
              "Adjust only the lightness of each colour (in the OKLCH colour space) and verify every pair against WCAG contrast; a brand yellow deepens to #d7b513 while staying unmistakably yellow",
            ],
            [
              "Brand colour on buttons (v2 to v3)",
              "v2 generated a darker fill, #C24E00 at 4.79:1, for every labelled button",
              "It found passing values by stepping through a list until one worked, which was hard to trace or reproduce, and it dulled the brand colour",
              "v3 keeps the seed colour and states the trade-off clearly: filled button labels are locked to 16px semibold at every size inside the Button component, while body-size brand text uses a darker tone at 6.16:1",
            ],
            [
              "How far the seed reaches",
              "v3 generated the greys from the seed too, with a slight tint of colour",
              "A restaurant seeded near blue ended up with blue-grey pages, not just blue buttons; two restaurants side by side looked like completely different products",
              "Fixed neutral greys shared across every restaurant, keeping the seed strictly on accents",
            ],
            [
              "What \"neutral\" means",
              "A borrowed grey scale",
              "It wasn't truly neutral: its dark shades leaned navy and blue-grey, causing warm brand tints to clash with it",
              "True greys built from black and white with zero colour (R = G = B). Outline contrast rose from 3.11:1 back up to 4.5:1",
            ],
          ],
        },
        {
          kind: "phones",
          shots: [
            oshapAsset("brands/oshap-brand-dish-orange-hd.png", "The dish sheet in Oshap orange, with white text on the Add button"),
            oshapAsset("brands/oshap-brand-dish-yellow-hd.png", "The dish sheet in a yellow brand, with dark text on the Add button"),
            oshapAsset("brands/oshap-brand-dish-navy-hd.png", "The dish sheet in a navy brand, with white text on the Add button"),
            oshapAsset("brands/oshap-brand-dish-magenta-hd.png", "The dish sheet in a magenta brand, with white text on the Add button"),
          ],
          caption: "One screen across four brands: the dish sheet styled automatically by the app's branding engine on sample data. On the yellow theme, the Add button automatically switches to dark text.",
        },
        {
          kind: "figure",
          figure: "oshap-button-rule",
          caption: "The 16px rule, generated from Oshap's tokens: the filled button across its three heights, paired with a sentence in the darker text tone.",
        },
        {
          kind: "figure",
          figure: "oshap-greys",
          caption: "Three grey scales: the same brand colours placed on the seed-tinted grey, the borrowed grey, and the true neutral, drawn from each version's tokens.",
        },
        { kind: "p", text: "Three more rules complete the system:" },
        {
          kind: "list",
          ordered: false,
          items: [
            {
              lead: "Status colours never follow the brand.",
              text: "A restaurant with a red brand must never get a red \"paid\" chip, so error, success, and warning states keep fixed colours.",
            },
            {
              lead: "The staff app stays Oshap orange.",
              text: "Staff look at it all shift, and group owners switch branches from the top bar. If the app changed colour with each branch, the whole workspace would shift mid-shift.",
            },
            { lead: "Elevation comes from tone, not shadows.", text: "Drop shadows are reserved strictly for elements that genuinely float above the page." },
          ],
        },
      ],
    },
    {
      id: "underneath",
      heading: "The same rules, applied underneath",
      navLabel: "Applied underneath",
      blocks: [
        {
          kind: "p",
          text: "In November, I audited the interface and uncovered two deeper problems sitting underneath the colour work. First, cards on cards and buttons on cards blended together because each step of the light surface scale sat only 1.06:1 apart from the next. Second, colour was sending mixed signals: on the staff dashboard, an \"Owes\" chip and a \"Take payment\" button looked like the exact same pink. The secondary button's light brand tint (#FFDBCC) sat just ΔE 1.3 away from the error container (#FFDAD5), a gap too small for the eye to tell apart.",
        },
        { kind: "h3", text: "Surfaces: I fixed the wrong thing first" },
        {
          kind: "p",
          text: "My first fix flipped light mode to a \"lighter is higher\" layout: a light grey page (#F2F2F2) underneath white cards. Mobbin research supported this pattern (Square, Swiggy, and Mercury all use it), and it matched my own taste.",
        },
        {
          kind: "p",
          text: "That same afternoon, I reversed it. Products I trust, including Apple, Calendly, Kuda, and Grey, keep the page lightest and step nested containers slightly darker. Platform guidelines agree: Material 3's light containers step down from tone 98 to 90, Apple layers #F2F2F7 on white, and Radix Colors follows the same direction. The flaw was the size of each contrast step, not the direction. I kept the original direction and widened the steps.",
        },
        {
          kind: "table",
          label: "The shipped light surface scale",
          columns: ["Light mode", "Tone", "Step"],
          rows: [
            ["Page", "White", ""],
            ["Card", "#F2F2F2", "1.12:1 darker than the page"],
            ["Field or well", "#E8E8E8", "1.09:1 darker than a card"],
            ["Control on a card", "#DEDEDE", "1.20:1 darker than a card"],
          ],
        },
        {
          kind: "figure",
          figure: "oshap-surfaces",
          caption: "A single table card shown on each version of the light surface scale, generated from Oshap's tokens at each stage. The numbered callouts explain each stage, and the steps measure contrast between neighbouring layers: card on page, block on card, and button on card.",
        },
        {
          kind: "p",
          text: "Material 3 gives you the tone scale, yet it sets no nesting rule of its own. \"Nesting steps away from the page\" is Oshap's rule built on top of that scale. Wherever Oshap departs from Material 3, the colour guide now explains what changed and why, checked directly against Google's own component tokens.",
        },
        { kind: "h3", text: "Colour that carries meaning" },
        {
          kind: "p",
          text: "The pink colour clash had a clear root cause. Material 3 generates secondary and tertiary palettes from the seed colour, and for Oshap's orange, the secondary palette's tone 90 turned out byte-identical to the primary palette's tone 90. As a workaround, tonal buttons had been moved onto the primary container without anyone deciding what that colour should actually signal.",
        },
        {
          kind: "list",
          ordered: false,
          items: [
            {
              lead: "Secondary buttons became neutral.",
              text: "They now use a grey fill with near-black text, reserving the brand colour for the single main action in a view. The button hierarchy now runs clearly from filled, to neutral, to outlined or text, and finally destructive.",
            },
            {
              lead: "Secondary and tertiary palettes were removed.",
              text: "Nothing in the product relied on them intentionally; they only served four plan tags, two chart series, and two unused component options. Accents now use the primary brand colour only.",
            },
            {
              lead: "Warning received its own seed.",
              text: "#F5A524 now runs through the same colour solver as the other palettes. In light mode, the warning fill (#835400) holds white text at 6.50:1 contrast.",
            },
          ],
        },
        {
          kind: "images",
          items: oshapOwes,
          caption: "The staff dashboard on sample data, before PR #152 and on master, in light and dark modes. Previously, the button's fill (#FFDBCC) sat just ΔE 1.3 away from the chip (#FFDAD5). Secondary buttons are now grey.",
        },
        {
          kind: "p",
          text: "The dashboard followed the same rule: use colour only when action is needed. Stat cards used to fill completely with amber or red, stayed lit even at zero (Low stock showed red when nothing was low), and spent the brand colour on \"Active tables.\" Now every card stays neutral, and a tinted row names the task only when something needs attention: \"Review payments ›\" or \"Restock 2 items ›\". Table cards dropped their amber fill, \"Dining\" became neutral, and red now means only \"Owes.\" Neutral cards are standard in Snowflake, Asana, Zendesk, and 7shifts, while Deel, Vapi, and Stripe apply colour only to a small marker or an action row.",
        },
        { kind: "h3", text: "Spacing: fewer choices" },
        {
          kind: "p",
          text: "I replaced the 4pt grid because its fifteen steps gave too many choices, and too many options caused screens to look inconsistent. The new scale uses eight steps based on the golden ratio: 4, 6, 10, 17, 27, 44, 72, and 116. Because the token names stayed the same while the underlying values changed, a single codemod pass updated 76 files, and an automated test now fails on any off-scale padding, margin, or gap. Figma was updated to match: roughly 1,500 spacing bindings were updated across 34 pages, and 17 old variables were deleted.",
        },
      ],
    },
    {
      id: "how-it-holds",
      heading: "How the rules hold",
      blocks: [
        {
          kind: "p",
          text: "The design system lives in two places that must stay in sync: a Figma library and the codebase. I made the code the single source of truth and added automated checks to keep everything aligned.",
        },
        {
          kind: "list",
          ordered: false,
          items: [
            {
              lead: "Rebranding takes one override.",
              text: "Tokens run in three tiers, from Tailwind utility classes to semantic roles to raw colour values. Swapping the primary group on a single wrapper rebrands the entire guest app without touching individual screens.",
            },
            {
              lead: "Catching silent failures.",
              text: "The branding code was still referencing two token names retired in v2. Because CSS fails silently on missing variables, every restaurant would have quietly fallen back to Oshap orange. An automated test now reads the token file directly and fails if the code writes any name that isn't declared there.",
            },
            {
              lead: "Testing the whole colour wheel.",
              text: "Automated branding tests sweep the hue wheel every 15 degrees across three chroma levels and three lightness levels in both modes, because the colours you think to test by hand are rarely the ones that break.",
            },
            {
              lead: "Keeping code aligned with Figma.",
              text: "One dedicated pass closed five gaps where the rules and the Figma library agreed but the code had drifted: 12 dialogs moved to 28px corners, hover shadows switched to tone steps, and interactive borders moved off decorative border tones.",
            },
            {
              lead: "Accessibility built into rules, not manual reviews.",
              text: "Six spots placed 11px or 14px text on the orange fill, and each got a targeted fix. Destructive confirmations, such as rejecting a guest's payment claim, now use the error colour instead of the brand colour. Field error states also start with an alert icon so users never have to rely on seeing red alone.",
            },
            {
              lead: "Testing opinions before writing code.",
              text: "I thought Refresh on the waiter dashboard should be the main filled orange button, so I asked Claude to check real examples on Mobbin first. No product there fills Refresh with its brand colour: Attio, Browserbase, and Gumloop use a quiet or outlined button, Cloudflare and Supabase use only an icon, and Mixpanel and ClickUp show an \"updated\" note. I followed the evidence, and Refresh shipped as a neutral outlined button with an \"Updated just now\" note beside it.",
            },
          ],
        },
        {
          kind: "figure",
          figure: "oshap-token-flow",
          caption: "How one restaurant colour becomes the guest app's colours, from Oshap's branding code and tokens. The staff app and the status colours stay fixed.",
        },
      ],
    },
    {
      id: "result",
      heading: "Result",
      blocks: [
        { kind: "p", text: "What the system guarantees, verified by its own tests:" },
        {
          kind: "list",
          ordered: false,
          items: [
            {
              lead: "Any brand colour stays readable.",
              text: "Across a sweep of 216 colours, contrast never drops below 4.39:1 against a 3:1 requirement, meaning the brand-colour generator has never needed to trigger its fallback.",
            },
            {
              lead: "One system across four apps.",
              text: "The guest, staff, operator, and marketing web apps share a single token file in light and dark modes, and the three product apps share one component library.",
            },
            {
              lead: "Rules enforced automatically in code.",
              text: "The 16px button label rule lives inside the Button component, the token-name test protects branding, a spacing test blocks off-scale values, and the test suite passed 688 of 688 tests after the latest change.",
            },
          ],
        },
        {
          kind: "p",
          text: "What is still unknown: nothing has been measured with guests or staff yet. Oshap has one pilot restaurant onboarded with its brand colour switched on, though the restaurant has not started operations yet, so there is no live feedback. Once it opens, the pilot will test the brand colour system against these targets:",
        },
        {
          kind: "list",
          ordered: false,
          items: [
            { text: "median time from scan to first order under 90 seconds;" },
            { text: "drop-off between scan and first order under 20%;" },
            { text: "median time to pay under 60 seconds;" },
            { text: "waiters notified of a guest's request within 15 seconds." },
          ],
        },
        {
          kind: "p",
          text: "None of these metrics measure colour or spacing on their own, so they won't prove by themselves whether the design system worked.",
        },
      ],
    },
    {
      id: "reflection",
      heading: "What I'd do differently",
      navLabel: "Reflection",
      blocks: [
        {
          kind: "list",
          ordered: false,
          items: [
            {
              lead: "Define neutrals before generating any palette.",
              text: "Our greys changed three times in two days: first tinted by the seed, then a borrowed scale that leaned navy, and finally a true neutral. Asking \"should the page carry the brand?\" upfront would have skipped two full rewrites.",
            },
            {
              lead: "Check the math before adding a rule.",
              text: "The rule preferring white text did nothing, and the contrast arithmetic proved why. Because the colours anyone thinks to test manually are rarely the ones that break, sweeping the entire colour wheel is essential.",
            },
            {
              lead: "Check platform standards before changing a foundation.",
              text: "Reviewing Material 3, Apple UIKit, and Radix first would have saved me from flipping the surface scale and reversing it the same afternoon.",
            },
          ],
        },
      ],
    },
  ],
  next: {
    project: "NawNaw",
    line: "A cart that does the maths, for sub-15-minute grocery delivery in Nigeria.",
    href: "/work/nawnaw",
  },
};

/** Minutes to read the body text, at 220 words a minute. */
export function readingMinutes(study: DetailedCaseStudy): number {
  const words = study.sections
    .flatMap((s) => [s.heading, ...s.blocks.flatMap(blockText)])
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function blockText(b: Block): string[] {
  switch (b.kind) {
    case "p":
      return [b.lead ?? "", b.text];
    case "list":
      return b.items.flatMap((i) => [i.lead ?? "", i.text, ...(i.quotes ?? [])]);
    case "changes":
      return b.items.flatMap((i) => [i.lead ?? "", i.text]);
    case "table":
      return [...b.columns, ...b.rows.flat()];
    case "h3":
      return [b.text];
    case "phones":
      return [b.caption];
    default:
      return [];
  }
}
