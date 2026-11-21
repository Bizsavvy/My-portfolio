import type { Shot } from "@/components/site/before-after";
import type { ScreenPairFigure } from "@/components/case/screen-pair";
import { shappayScreens } from "@/lib/shappay-screens";

/**
 * Content for the case study template (components/case/case-study-page.tsx). One file
 * per case study keeps the copy reviewable in one place. Facts here must match the
 * approved case study doc for that project.
 */

/** Figures drawn in code from a product's own tokens (components/case/case-figure.tsx). */
export type CaseFigure = "oshap-greys" | "oshap-button-rule" | "oshap-surfaces" | "oshap-token-flow";

export type OutcomeSection =
  | {
      /** A row of phone screens: the same screen in several versions, for example brands. */
      kind: "phones";
      summary: string;
      body?: string;
      shots: Shot[];
      caption: string;
    }
  | {
      kind: "figure";
      summary: string;
      body?: string;
      figure: CaseFigure;
      caption: string;
    }
  | {
      /** Labelled images in a grid, two to a row: for example a before and after in light and dark. */
      kind: "images";
      summary: string;
      body?: string;
      items: { src: string; alt: string; width: number; height: number; label: string }[];
      caption: string;
    }
  | {
      /** A decision told in words only, with no visual. */
      kind: "text";
      summary: string;
      body: string;
    }
  | {
      kind: "screens";
      figure: ScreenPairFigure;
      /** What the change does and why: points at the design decision, not the image. */
      summary: string;
    }
  | {
      kind: "image";
      /** Optional heading and text above the image, as on the other section cards. */
      summary?: string;
      body?: string;
      src: string;
      alt: string;
      width: number;
      height: number;
      caption: string;
      link?: { href: string; text: string };
    };

export type CaseStudy = {
  slug: string;
  project: string;
  title: string;
  brief: string;
  meta: { label: string; value: string }[];
  /** One paragraph, or several. */
  problem: string | string[];
  /** Paragraphs, then an optional list (for example targets), then an optional closing line. */
  /** No `outcome` means no badge: for work with nothing measured with people yet (Haye, 2026-11-21). */
  impact: { outcome?: "measured" | "projected"; text: string | string[]; list?: string[]; after?: string };
  /** The case study in three short points, right under the problem and impact (Haye, 2026-11-21). */
  tldr: string[];
  /** Phone screenshots for the wide preview under the hero, left to right. */
  preview: Shot[];
  sectionsHeading: string;
  sections: OutcomeSection[];
  results?: { heading: string; columns: string[]; rows: string[][]; note: string };
  /** Short closing notes after the sections, for example how it ships and what's next. */
  closing?: { heading: string; text?: string; items?: { lead: string; text: string }[]; list?: string[]; after?: string }[];
  detailedHref: string;
  next: { project: string; line: string; href: string };
};

// Copy matches Haye's rewrite of Docs/case-studies/shappay.md (2026-11-21). The callouts here
// are the short page's own wording; the detailed page keeps lib/shappay-screens.ts until its rewrite.
const withCallouts = (figure: ScreenPairFigure, texts: string[]): ScreenPairFigure => ({
  ...figure,
  callouts: figure.callouts.map((c, i) => ({ ...c, text: texts[i] ?? c.text })),
});

export const shappay: CaseStudy = {
  slug: "shappay",
  project: "Shappay",
  title: "Redesigning how people pay on Shappay",
  brief:
    "A usability test showed that people struggled to find Shappay's main payment options, so I redesigned the payment screens and ran the same test again. Shappay is building a universal QR payment system for Nigeria: one code that customers of any bank can pay, and one scanner that reads any code built to the national standard. I lead product design and build my designs directly in code for our frontend engineer to review.",
  meta: [
    { label: "Role", value: "Design engineer, leading product design" },
    { label: "Timeline", value: "2025 to present (usability tests in November 2026)" },
    {
      label: "Team",
      value:
        "Me, a product manager who approved the redesign scope, a frontend engineer who reviewed and merged my code, and a backend engineer who built the ShapID lookup",
    },
  ],
  problem:
    "Shappay's first design made its two core payment options hard to find. During testing, people who had a QR code or a ShapID right in front of them still defaulted to bank transfers. As a result, only 4/8 to 6/8 testers completed each task.",
  impact: {
    outcome: "measured",
    text: "After the redesign, successful payments by QR scan rose from 5/8 to 8/8 testers, and completing a payment when a code couldn't be read rose from 4/8 to 8/8. These results were measured in usability tests on a web build using a simulated scanner.",
  },
  tldr: [
    "In initial usability tests, people with a QR code or a ShapID right in front of them still defaulted to bank transfers.",
    "I renamed and reordered the payment options, made Send to bank the main fallback for unreadable codes, and rewrote pending payment messages to clearly show the money is still on its way. I then ran the exact same test on the redesign with 8 new testers.",
    "Paying by scan rose from 5/8 to 8/8, and paying when a code couldn't be read rose from 4/8 to 8/8. Paying a ShapID reached 5/8, which is still below our target of 7/8.",
  ],
  preview: [
    { src: "/assets/shappay/screens/shappay-cant-read.png", alt: "The card for a code the app can't read, leading with Send to bank" },
    { src: "/assets/shappay/screens/shappay-home.png", alt: "Shappay home with Scan to pay, Send to ShapID, Send to bank and Add money" },
    // Not the pending screen: in the preview its test transaction ID shows above the card's edge.
    { src: "/assets/shappay/screens/shappay-payments.png", alt: "The Payments tab, with the same names as Home and Request or split" },
  ],
  sectionsHeading: "The redesign",
  sections: [
    {
      kind: "screens",
      figure: withCallouts(shappayScreens.home, [
        "“Send” was too vague, so people assumed it meant sending to a bank account.",
        "“Scan to pay” now comes first because QR payments are the core of the product.",
        "“Send to ShapID” and “Send to bank” clearly tell users where their money is going.",
        "“Add money” matches the heading of the screen it opens.",
      ]),
      summary: "Four payment options named in plain language, with Scan first.",
    },
    {
      kind: "screens",
      figure: withCallouts(shappayScreens.cantRead, [
        "Previously, both buttons had equal emphasis. Four testers tapped “Send money” (which pays a ShapID) even when the shop sign showed a bank account number.",
        "The heading stays neutral because the QR code may work fine and simply belong to another provider.",
        "“Send to bank” is now the primary button, with “Send to ShapID” placed second.",
      ]),
      summary: "Helping users pay even when a code can't be scanned. Send to bank leads because shop signs show an account number.",
    },
    {
      kind: "screens",
      figure: withCallouts(shappayScreens.pending, [
        "In the first test, 3/8 testers thought the shop had already been paid.",
        "The phrase “shows as sent” caused confusion because people focused on the word “sent.”",
        "I changed the status label from “Pending” to “On its way.”",
        "The message now names the shop directly and clarifies that the money has left your balance, even though the shop hasn't received it yet.",
      ]),
      summary: "“On its way” makes it clear the payment hasn't arrived yet.",
    },
    {
      kind: "image",
      src: "/assets/shappay/site/useshappay-landing.webp",
      alt: "The useshappay.com landing page: Nigeria has too many QR codes. You only need one.",
      width: 2880,
      height: 1800,
      caption: "useshappay.com",
      link: { href: "https://useshappay.com/", text: "Visit site" },
    },
  ],
  results: {
    heading: "Results",
    columns: ["Task", "First design", "Redesign"],
    rows: [
      ["Scan a shop's QR code and pay", "5/8", "8/8"],
      ["Pay when the code can't be read", "4/8", "8/8"],
      ["Tell whether a pending payment has arrived", "5/8", "7/8"],
      ["Add money, then pay", "6/8", "7/8"],
      ["Send to a friend's ShapID", "4/8", "5/8"],
      ["Ask a friend for money", "Not tested", "4/8"],
    ],
    note: "Both rounds used the same tasks, 8 different testers, and the same passing rule: paying the right person through the right method. Paying a ShapID still falls short of our 7/8 target. Moving Request off the home screen also meant only 4/8 testers could find it, so the next build brings it back to Home (not yet tested). Shappay is still in development. After launch, we will measure success by the share of payments made through QR scan or ShapID instead of a typed account number, with a target of 90%.",
  },
  detailedHref: "/work/shappay/detailed",
  next: {
    project: "UI to JSON",
    line: "A Figma plugin that turns a design into code-ready JSON. 300+ users.",
    href: "/work/ui-to-json",
  },
};

const oshapShot = (name: string, alt: string): Shot => ({ src: `/assets/oshap/${name}`, alt });

const owes = (when: "before" | "after", mode: "light" | "dark", alt: string) => ({
  src: `/assets/oshap/ds/oshap-owes-${when}-${mode}.webp`,
  alt,
  width: when === "before" ? 1242 : 1308,
  height: 228,
  label: `${when === "before" ? "Before" : "After"} · ${mode === "light" ? "Light" : "Dark"}`,
});

/** The "Owes" chip and "Take payment" button, before PR #152 (5a5ac02) and on master (081e218). */
export const oshapOwes = [
  owes("before", "light", "Before, light mode: the \"Take payment\" button is the same pale pink as the \"OWES\" chip beside it"),
  owes("before", "dark", "Before, dark mode: a brown-orange \"Take payment\" button beside a red \"OWES\" chip"),
  owes("after", "light", "After, light mode: a grey \"Take payment\" button, and the pink \"OWES\" chip is the only warm colour"),
  owes("after", "dark", "After, dark mode: a grey \"Take payment\" button, and the red \"OWES\" chip is the only warm colour"),
];

// Copy is Haye's rewrite of Docs/case-studies/oshap.md, cut toward 900 words with Haye's approval (2026-11-21).
// Screens: Oshap master on sample data (Aji's Kitchen).
export const oshap: CaseStudy = {
  slug: "oshap",
  project: "Oshap",
  title: "Any restaurant's colour, readable on every guest's phone",
  brief:
    "Oshap lets restaurant guests scan a table's QR code to order and pay, with no app download and no login. Every restaurant brings its own brand colour, and the guest app adopts it automatically. Using a fixed text colour fails for roughly half of all brands: on a yellow brand, white text measures 1.40:1, making the button that adds food to an order impossible to read. I built a design system that keeps any brand colour readable, then fixed the deeper visual issues that this work uncovered.",
  meta: [
    { label: "Role", value: "Design engineer (owned product design, frontend development, and the design system)" },
    { label: "Team", value: "Me, alongside a backend engineer who built the core logic behind the apps" },
    { label: "Timeline", value: "August to September 2026, then 16 to 21 November 2026" },
    { label: "Stage", value: "One pilot restaurant onboarded with its brand colour switched on (not open to guests yet)" },
    {
      label: "How I work",
      value:
        "I design in Figma and build directly in code using the Figma MCP with Claude, and I use Claude to test my design opinions against real-world evidence before changing code",
    },
  ],
  problem: [
    "Restaurants want their guests to feel on brand at every step, and per-restaurant colour was a feature a restaurant specifically asked for while we were building Oshap. It is only available on Oshap's highest subscription plan, so it also gives restaurants a reason to upgrade.",
    "No fixed text colour works across the board. White text on a brand yellow measures 1.40:1, making it nearly invisible. White text on a brand navy measures 13.24:1. A restaurant owner won't catch that problem during setup, but their guests will notice it at a table in bright daylight. So Oshap calculates the right text colour for each brand instead of assuming white.",
  ],
  impact: {
    text: [
      "What the system guarantees: any brand colour stays readable. Across a test sweep of 216 colours, contrast never drops below 4.39:1 against a 3:1 requirement. One token file powers four web apps, including the marketing site, in both light and dark modes.",
      "What is still unknown: nothing has been measured with guests or staff yet because the pilot restaurant has not opened.",
    ],
  },
  tldr: [
    "A restaurant's brand colour can make Oshap unreadable: white text on a yellow brand measures 1.40:1, and the merchant usually never sees it.",
    "I built a design system in Figma and code that turns any single colour into a full set of readable colours, with automated checks in code to enforce the rules.",
    "Any brand colour stays readable across a test sweep of 216 colours. Oshap's pilot restaurant has not opened yet, so real-world user metrics are still ahead.",
  ],
  preview: [
    oshapShot("screens/oshap-guest-menu-hd.png", "Oshap's guest menu in a phone browser, at Aji's Kitchen, table T1"),
    oshapShot("screens/oshap-guest-dish-hd.png", "A dish sheet: Chicken Shawarma with a spice level and an extra chosen, and Add · ₦3,000"),
    oshapShot("screens/oshap-guest-pay-transfer-hd.png", "Pay Bill: the restaurant's bank details and I've Sent the Money"),
  ],
  sectionsHeading: "Three decisions, and one I reversed",
  sections: [
    {
      kind: "phones",
      summary: "1. The text colour is calculated for each brand, not guessed",
      body: "My first idea was a rule that preferred white text whenever it passed contrast checks. It did nothing: a colour's contrast against white and against black always multiply to 21, so the stronger option wins anyway. Instead, the system adjusts only the lightness of each colour and checks every pair against contrast standards. A brand yellow deepens to #d7b513 and still looks yellow.",
      shots: [
        oshapShot("brands/oshap-brand-dish-orange-hd.png", "The dish sheet in Oshap orange, with white text on the Add button"),
        oshapShot("brands/oshap-brand-dish-yellow-hd.png", "The dish sheet in a yellow brand, with dark text on the Add button"),
        oshapShot("brands/oshap-brand-dish-navy-hd.png", "The dish sheet in a navy brand, with white text on the Add button"),
        oshapShot("brands/oshap-brand-dish-magenta-hd.png", "The dish sheet in a magenta brand, with white text on the Add button"),
      ],
      caption: "One screen across four brands, on sample data. On the yellow, the Add button switches to dark text.",
    },
    {
      kind: "figure",
      summary: "2. Keeping the brand on buttons, and writing down the trade-off",
      body: "White text on Oshap's own orange measures 3.11:1: enough for large text, not for sentences. An earlier version used a darker fill for every labelled button, which passed but dulled the brand. I kept the true brand colour and wrote down the trade-off instead: filled button labels are locked to 16px semibold in the Button component, and any sentence in brand colour uses a darker tone at 6.16:1.",
      figure: "oshap-button-rule",
      caption: "The filled button at three heights, and a sentence in the darker tone, from Oshap's tokens.",
    },
    {
      kind: "images",
      summary: "3. Colour means one thing, especially around money",
      body: "Status colours never follow the brand: a restaurant with a red brand must never get a red \"paid\" chip. The same principle caught a clash on the staff dashboard, where a \"Take payment\" button and an \"Owes\" chip shared the same pale pink. Secondary buttons are now grey, and the brand colour marks only the main action in a view.",
      items: oshapOwes,
      caption: "The staff dashboard on sample data, before PR #152 and on master, in light and dark. The button's fill (#FFDBCC) sat just ΔE 1.3 from the chip's (#FFDAD5).",
    },
    {
      kind: "figure",
      summary: "The call I reversed: surfaces",
      body: "Cards on cards were blending together, because each step of the light surface scale sat only 1.06:1 from the next. My first fix flipped the scale so higher surfaces got lighter. Mobbin research supported it (Square, Swiggy, and Mercury), and it matched my own taste. The same afternoon I reversed it: Material 3, Apple, and Radix all keep the page lightest and make nested containers darker. The problem was the size of each step, not the direction, so I kept the direction and widened the steps to between 1.09:1 and 1.20:1.",
      figure: "oshap-surfaces",
      caption: "One table card on each version of the light surface scale, from Oshap's tokens.",
    },
  ],
  closing: [
    {
      heading: "How the rules hold",
      items: [
        {
          lead: "One change rebrands the guest app.",
          text: "Swapping a single group of colour tokens rebrands every guest screen, without editing any individual page.",
        },
        {
          lead: "Tests catch silent failures.",
          text: "A test fails if the code uses a colour name that does not exist, and the branding tests sweep the colour wheel every 15 degrees.",
        },
        {
          lead: "Testing opinions before writing code.",
          text: "I thought Refresh on the waiter dashboard should be the main orange button, so I asked Claude to check Mobbin first. No product there fills Refresh with its brand colour: most use a quiet or outlined button, an icon, or an \"updated\" note. I followed the evidence, and Refresh shipped as an outlined button with an \"Updated just now\" note.",
        },
      ],
    },
    {
      heading: "What's next",
      text: "The pilot restaurant has not opened yet, so there is no live feedback. Once it opens, the pilot will test Oshap against these launch targets:",
      list: [
        "median time from scan to first order under 90 seconds;",
        "drop-off between scan and first order under 20%;",
        "median time to pay under 60 seconds;",
        "waiters notified of a guest's request within 15 seconds.",
      ],
      after: "None of these metrics measure colour or spacing on their own, so they won't prove by themselves whether the design system succeeded.",
    },
    {
      heading: "What I'd do differently",
      items: [
        {
          lead: "Define neutrals before generating any palette.",
          text: "Our greys changed three times in two days. Asking \"should the page carry the brand?\" first would have skipped two rewrites.",
        },
        { lead: "Check the math before adding a rule.", text: "The rule preferring white text did nothing, and the contrast arithmetic proved why." },
        {
          lead: "Check platform standards before changing a foundation.",
          text: "Reviewing Material 3, Apple UIKit, and Radix first would have saved the surface flip and its reversal.",
        },
      ],
    },
  ],
  detailedHref: "/work/oshap/detailed",
  next: {
    project: "NawNaw",
    line: "A cart that does the maths, for sub-15-minute grocery delivery in Nigeria.",
    href: "/work/nawnaw",
  },
};
