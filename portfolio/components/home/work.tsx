import type { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shadcn/tabs";
import { CaseStudyTile, type CaseStudyTileProps } from "@/components/home/case-study-tile";
import { MotionTile } from "@/components/home/motion-tile";
import { BeforeAfterTile } from "@/components/home/before-after-tile";
import { PhoneCard, PhoneVideoCard } from "@/components/home/phone-card";
import { ScreenshotThemeCard, ThemeCompareCard } from "@/components/home/theme-cards";
import type { Shot } from "@/components/site/before-after";

/**
 * The four case studies. One line each: the problem and the impact, marked Measured or
 * Projected where there is an outcome (handoff). Oshap and NawNaw have no outcome on the
 * page until their tests run, so they carry no tag.
 */
const caseStudies: CaseStudyTileProps[] = [
  {
    title: "Shappay",
    line: "Redesigned the ways to pay. Paying by scan rose from 5/8 to 8/8 testers.",
    href: "/work/shappay",
    outcome: "measured",
    cover: {
      kind: "video",
      src: "/assets/shappay/motion/shappay-pay-by-scan_3x5_1080x1800.mp4",
      poster: "/assets/shappay/motion/shappay-pay-by-scan_3x5_1080x1800_poster.webp",
      label: "Paying by scan in Shappay: from Home, scan Adaeze Bakery's code, enter ₦2,500, review, enter the PIN, sent.",
    },
  },
  {
    title: "UI to JSON",
    line: "A Figma plugin that turns a design into code-ready JSON. 300+ users.",
    href: "/work/ui-to-json",
    outcome: "measured",
    cover: { kind: "placeholder", note: "New cover coming" },
  },
  {
    title: "Oshap",
    line: "A design system that turns one restaurant colour into readable tokens across three apps.",
    href: "/work/oshap",
    cover: {
      kind: "video",
      src: "/assets/oshap/motion/oshap-order-flow_3x5_1080x1800.mp4",
      poster: "/assets/oshap/motion/oshap-order-flow_3x5_1080x1800_poster.webp",
      label: "Ordering in Oshap in a phone browser: a dish with choices, a drink, the cart, confirm, then paying by bank transfer and claiming the payment.",
    },
  },
  {
    title: "NawNaw",
    line: "A cart that does the maths, for sub-15-minute grocery delivery in Nigeria.",
    href: "/work/nawnaw",
    cover: { kind: "placeholder", note: "New cover coming" },
  },
];

const [shappay, uiToJson, oshap, nawnaw] = caseStudies;

// Captured from the Shappay web build with sample data at its full 430 width, scaled to the
// iPhone 16 Pro Max screen (1320 x 2868),
// with the iPhone safe area and a status bar, so they sit in the frame like the real app.
const screen = (name: string, alt: string): Shot => ({ src: `/assets/shappay/screens/${name}.png`, alt });

// Oshap, captured from master on sample data (Aji's Kitchen): guest screens at ec423b6
// (2026-11-17; unchanged at 081e218), staff screens in light and dark at 081e218 (2026-11-21).
// Guest screens in mobile Safari at 440 x 956 @3x, staff screens at 1440 x 900 @2x.
const oshapScreen = (name: string) => `/assets/oshap/screens/${name}`;

/**
 * Three masonry columns, after the Stephen Jude reference: every card stands alone, small
 * cards are landscape and tall cards hold one phone. Below lg the columns dissolve and the
 * cards flow into two columns, then one, in the order written here.
 */
/** The usability widget, until its clip exists. */
// TODO(redesign): the usability widget clip from the motion videos session.
const WIDGET_TILE = (
    <div key="widget" className="flex flex-col overflow-hidden rounded-lg bg-card">
      <div className="flex aspect-[5/4] p-g17">
        <div className="flex w-full items-center justify-center rounded-md border border-dashed border-input">
          <span className="font-mono text-label text-muted-foreground uppercase">Clip coming</span>
        </div>
      </div>
      <div className="flex flex-col gap-g6 p-g17">
        <h3 className="text-title text-foreground">Usability testing widget</h3>
        <p className="text-body text-muted-foreground">The tool behind the Shappay tests: tasks, timing, recording and scoring in one script.</p>
      </div>
    </div>
);

const columns: ReactNode[][] = [
  [
    <CaseStudyTile key="shappay" {...shappay} />,
    <ThemeCompareCard
      key="amount"
      label="Shappay · Send money"
      light={screen("shappay-send-amount-light", "Light mode: Send money, ₦5,000 to Tsoji Adeyemi, with the amount keypad")}
      dark={screen("shappay-send-amount", "Dark mode: Send money, ₦5,000 to Tsoji Adeyemi, with the amount keypad")}
    />,
    <ScreenshotThemeCard
      key="oshap-tables"
      label="Oshap · Tables"
      light={{ src: oshapScreen("oshap-staff-waiter-light.webp"), alt: "Light mode: Oshap's staff dashboard. Stat and table cards stay neutral; Review payments and Restock 2 items rows appear where action is due. T1 waits for staff to verify a transfer, T2 and T3 still owe, and ten free tables sit in a row below" }}
      dark={{ src: oshapScreen("oshap-staff-waiter-dark.webp"), alt: "Dark mode: the same staff dashboard" }}
      width={2880}
      height={1800}
    />,
    <CaseStudyTile key="ui-to-json" {...uiToJson} />,
    WIDGET_TILE,
  ],
  [
    <MotionTile
      key="website"
      title="Shappay website"
      line="The footer's tiles drop into place, filmed from the live site's own code."
      src="/assets/shappay/motion/shappay-footer-loop_16x9_1920x1080.mp4"
      poster="/assets/shappay/motion/shappay-footer-loop_16x9_1920x1080_poster.webp"
      label="The Shappay website footer: coloured geometric tiles roll into a row along the bottom."
      link={{ href: "https://useshappay.com/", text: "Visit site" }}
      focus="bottom"
    />,
    <BeforeAfterTile
      key="home"
      label="Shappay · Home"
      before={{ src: "/assets/shappay/redesign/before-01-home.png", alt: "Shappay home before the redesign: Fund, Send, Split and Request" }}
      after={{ src: "/assets/shappay/redesign/after-01-home.png", alt: "Shappay home after the redesign: Scan to pay, Send to ShapID, Send to bank and Add money" }}
    />,
    <PhoneCard
      key="cant-read"
      label="Shappay · Scan"
      shot={screen("shappay-cant-read", "Scan: Can't read this code, with Send to bank first and Send to ShapID second, over a shop's sign")}
    />,
    <CaseStudyTile key="oshap" {...oshap} />,
    <CaseStudyTile key="nawnaw" {...nawnaw} />,
  ],
  [
    <PhoneVideoCard
      key="onboarding"
      label="Shappay · Onboarding"
      src="/assets/shappay/motion/shappay-onboarding_3x5_1080x1800.mp4"
      poster="/assets/shappay/motion/shappay-onboarding_3x5_1080x1800_poster.webp"
      description="Signing up to Shappay: phone number, code, BVN, selfie check, ShapID, PIN and Face ID, then Home."
    />,
    <PhoneCard
      key="review"
      label="Shappay · Review and send"
      shot={screen("shappay-send-review", "Review and send: ₦5,000 to Tsoji Adeyemi, the fee and the balance after")}
    />,
    <PhoneCard
      key="oshap-pay"
      label="Oshap · Pay by transfer"
      shot={{ src: oshapScreen("oshap-guest-pay-transfer-hd.png"), alt: "Oshap's Pay Bill in a phone browser: the restaurant's bank details, a reference to copy, and I've Sent the Money" }}
    />,
    <ScreenshotThemeCard
      key="oshap-kitchen"
      label="Oshap · Kitchen"
      light={{ src: oshapScreen("oshap-staff-kitchen-light.webp"), alt: "Light mode: Oshap's kitchen display, with new orders from tables T2 and T3, each with its choices and a Start button" }}
      dark={{ src: oshapScreen("oshap-staff-kitchen-dark.webp"), alt: "Dark mode: the same kitchen display" }}
      width={2880}
      height={1800}
    />,
  ],
];

/** Work comes straight after the hero (Figma notes): Everything shows range, Case studies only the four. */
export function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="mx-auto max-w-[1280px] scroll-mt-g72 px-g17 pb-g116 md:px-g27 lg:px-g44">
      <Tabs defaultValue="everything" className="gap-g17">
        <div className="flex flex-wrap items-center justify-between gap-g17">
          <h2 id="work-heading" className="text-title text-foreground">
            Selected work
          </h2>
          <TabsList aria-label="Filter work">
            <TabsTrigger value="everything">Everything</TabsTrigger>
            <TabsTrigger value="case-studies">Case studies</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="everything">
          <div className="gap-g10 md:columns-2 lg:flex lg:items-start">
            {columns.map((column, i) => (
              <div key={i} className="contents lg:flex lg:min-w-0 lg:flex-1 lg:flex-col lg:gap-g10">
                {column.map((cardNode, j) => (
                  <div key={j} className="mb-g10 break-inside-avoid lg:mb-0">
                    {cardNode}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="case-studies">
          <div className="grid grid-cols-1 gap-g10 md:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyTile key={study.title} {...study} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
