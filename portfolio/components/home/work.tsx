import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shadcn/tabs";
import { CaseStudyTile, type CaseStudyTileProps } from "@/components/home/case-study-tile";
import { MotionTile } from "@/components/home/motion-tile";
import { BeforeAfterTile } from "@/components/home/before-after-tile";

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
    cover: { kind: "phone", src: "/assets/shappay/redesign/final-01-home.png", alt: "Shappay home screen with Scan to pay, Send to ShapID, Send to bank and Add money" },
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
    line: "Scan-to-order and pay for restaurants, with no app and no login.",
    href: "/work/oshap",
    cover: { kind: "placeholder", note: "New cover coming" },
  },
  {
    title: "NawNaw",
    line: "A cart that does the maths, for sub-15-minute grocery delivery in Nigeria.",
    href: "/work/nawnaw",
    cover: { kind: "placeholder", note: "New cover coming" },
  },
];

const [shappay, uiToJson, oshap, nawnaw] = caseStudies;

/** Work comes straight after the hero (Figma notes): Everything shows range, Case studies only the four. */
export function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="mx-auto max-w-[1280px] scroll-mt-g72 px-g17 pb-g116 md:px-g27 lg:px-g44">
      <Tabs defaultValue="everything" className="gap-g27">
        <div className="flex flex-wrap items-end justify-between gap-g17">
          <h2 id="work-heading" className="text-heading text-foreground">
            Selected work
          </h2>
          <TabsList aria-label="Filter work">
            <TabsTrigger value="everything">Everything</TabsTrigger>
            <TabsTrigger value="case-studies">Case studies</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="everything">
          <div className="grid grid-flow-dense grid-cols-1 gap-g10 md:grid-cols-2 lg:grid-cols-4">
            <CaseStudyTile {...shappay} className="md:row-span-2 lg:col-span-2" />
            <MotionTile
              title="Shappay website"
              line="The footer's tiles drop into place, filmed from the live site's own code."
              src="/assets/shappay/motion/shappay-footer-loop_16x9_1920x1080.mp4"
              poster="/assets/shappay/motion/shappay-footer-loop_16x9_1920x1080_poster.webp"
              label="The Shappay website footer: coloured geometric tiles roll into a row along the bottom."
              link={{ href: "https://useshappay.com/", text: "Visit site" }}
              focus="bottom"
              className="lg:col-span-2"
            />
            <BeforeAfterTile
              title="Shappay Home, before and after"
              line="Four ways to pay, named the way people say them. Drag to compare."
              before={{ src: "/assets/shappay/redesign/before-01-home.png", alt: "Shappay home before the redesign: Fund, Send, Split and Request" }}
              after={{ src: "/assets/shappay/redesign/after-01-home.png", alt: "Shappay home after the redesign: Scan to pay, Send to ShapID, Send to bank and Add money" }}
              className="lg:col-span-2"
            />
            <CaseStudyTile {...uiToJson} className="lg:col-span-2" />
            <CaseStudyTile {...oshap} className="lg:col-span-2" />
            <CaseStudyTile {...nawnaw} className="lg:col-span-2" />
            {/* TODO(redesign): the usability widget clip from the motion videos session. */}
            <div className="flex flex-col overflow-hidden rounded-lg bg-card lg:col-span-2">
              <div className="flex flex-1 items-center justify-center p-g27">
                <div className="flex aspect-video w-full items-center justify-center rounded-md border border-dashed border-input">
                  <span className="font-mono text-label text-muted-foreground uppercase">Clip coming</span>
                </div>
              </div>
              <div className="flex flex-col gap-g6 p-g17">
                <h3 className="text-title text-foreground">Usability testing widget</h3>
                <p className="text-body text-muted-foreground">
                  The tool behind the Shappay tests: tasks, timing, recording and scoring in one script.
                </p>
              </div>
            </div>
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
