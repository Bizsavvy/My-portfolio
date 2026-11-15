import type { Shot } from "@/components/site/before-after";

/**
 * Content for the case study template (components/case/case-study-page.tsx). One file
 * per case study keeps the copy reviewable in one place. Facts here must match the
 * approved case study doc for that project.
 */

export type OutcomeSection =
  | {
      kind: "before-after";
      before: Shot;
      after: Shot;
      /** Names the comparison for screen readers. */
      label: string;
      crop: { aspect: string; position: "top" | "bottom" };
      /** What the change does and why: points at the design decision, not the image. */
      callout: string;
    }
  | {
      kind: "image";
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
  problem: string;
  impact: { outcome: "measured" | "projected"; text: string };
  /** Phone screenshots for the wide preview under the hero, left to right. */
  preview: Shot[];
  sectionsHeading: string;
  sections: OutcomeSection[];
  results?: { heading: string; columns: string[]; rows: string[][]; note: string };
  detailedHref: string;
  next: { project: string; line: string; href: string };
};

export const shappay: CaseStudy = {
  slug: "shappay",
  project: "Shappay",
  title: "Redesigning Shappay's ways to pay",
  brief:
    "A usability test showed that people couldn't find Shappay's ways to pay, so I redesigned the payment screens and ran the same test on the redesign. Shappay is building an interoperable QR for Nigeria: one code a customer of any bank can pay, and a scanner that reads any code made to the national standard. I lead product design, and ship my designs in code for the frontend engineer to review.",
  meta: [
    { label: "Role", value: "Design engineer, leading product design" },
    { label: "Timeline", value: "2025 to now; tests in November 2026" },
    {
      label: "Team",
      value:
        "Me; a product manager, who agreed and approved the redesign's scope; a frontend engineer, who reviewed and merged it; and a backend engineer, who built the ShapID lookup",
    },
  ],
  problem:
    "Shappay's first design didn't make its two ways to pay easy to find. In testing, people with a QR code or a ShapID in front of them still went to bank transfer, and each task was finished by only 4/8 to 6/8 testers.",
  impact: {
    outcome: "measured",
    text: "After the redesign, paying by scan rose from 5/8 to 8/8 testers, and getting past a code the app couldn't read from 4/8 to 8/8. Measured in usability tests on a web build with a simulated scan.",
  },
  preview: [
    { src: "/assets/shappay/redesign/after-07-cant-read.png", alt: "The card for a code the app can't read, leading with Send to bank" },
    { src: "/assets/shappay/redesign/final-01-home.png", alt: "Shappay home with Scan to pay, Send to ShapID, Send to bank and Add money" },
    // Not the pending screen: in the preview its test transaction ID shows above the card's edge.
    { src: "/assets/shappay/redesign/after-02-pay-hub.png", alt: "The Payments tab, with the same names as Home and Request or split" },
  ],
  sectionsHeading: "The redesign",
  sections: [
    {
      kind: "before-after",
      label: "Shappay Home",
      before: { src: "/assets/shappay/redesign/before-01-home.png", alt: "Home before the redesign: Fund, Send, Split and Request" },
      after: { src: "/assets/shappay/redesign/after-01-home.png", alt: "Home after the redesign: Scan to pay, Send to ShapID, Send to bank and Add money" },
      crop: { aspect: "1170 / 1100", position: "top" },
      callout: "Four ways to pay, named the way people say them. Scan comes first.",
    },
    {
      kind: "before-after",
      label: "A code the app can't read",
      before: { src: "/assets/shappay/redesign/before-07-cant-read.png", alt: "Before: two equal options, Send to bank and Send money" },
      after: { src: "/assets/shappay/redesign/after-07-cant-read.png", alt: "After: Send to bank as the main button, Send to ShapID second" },
      crop: { aspect: "1170 / 1050", position: "bottom" },
      callout:
        "Until the scanner reads every code, a code it can't read still gets paid. Send to bank leads, because the shop's sign shows an account number.",
    },
    {
      kind: "before-after",
      label: "A pending payment",
      before: { src: "/assets/shappay/redesign/before-08-pending.png", alt: "Before: Pending, with the line shows as sent in your balance" },
      after: { src: "/assets/shappay/redesign/after-08-pending.png", alt: "After: On its way, Adaeze Bakery hasn't received this yet" },
      crop: { aspect: "1170 / 1600", position: "top" },
      callout: "'On its way' leaves no room to read it as paid.",
    },
    {
      kind: "image",
      src: "/assets/shappay/site/landing-desktop.webp",
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
      ["Scan a shop's code and pay", "5/8", "8/8"],
      ["Pay when the code can't be read", "4/8", "8/8"],
      ["Tell whether a pending payment has arrived", "5/8", "7/8"],
      ["Add money, then pay", "6/8", "7/8"],
      ["Send to a friend's ShapID", "4/8", "5/8"],
      ["Ask a friend for money", "not tested", "4/8"],
    ],
    note: "The same tasks, 8 testers each time, scored by the same rule: the right person paid by the right route. Paying a ShapID still misses the bar of 7/8. Request, which this redesign moved off Home, was found by only 4/8; the next build puts it back on Home, not yet tested. After launch, the measure of success is the share of payments made by scan or ShapID instead of a typed account number.",
  },
  detailedHref: "/articles/shappay",
  next: {
    project: "UI to JSON",
    line: "A Figma plugin that turns a design into code-ready JSON. 300+ users.",
    href: "/work/ui-to-json",
  },
};
