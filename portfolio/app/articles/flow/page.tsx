import type { Metadata } from "next";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseStudyFooter } from "@/components/case-study/CaseStudyFooter";

export const metadata: Metadata = {
  title: "Building a brand around a leaf and a droplet · Haye",
  description:
    "The written version of the Flow identity: refusing both clinical blue and bubblegum pink, and writing guidelines somebody will actually follow.",
};

const ACCENT = "var(--color-accent)";
const P = "text-[var(--color-body)] text-[17px] leading-[1.65]";

/* A narrative section: eyebrow, title, and a two-column prose body. */
function Chapter({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[var(--color-line)]" style={{ padding: "72px 0" }}>
      <div className="cs-wrap">
        <div
          className="font-mono text-[11px] tracking-[.18em] uppercase mb-5 reveal"
          style={{ color: ACCENT }}
        >
          {eyebrow}
        </div>
        <h2
          className="font-hanken font-bold tracking-[-0.02em] mb-8 reveal"
          style={{ fontSize: "clamp(28px,4vw,44px)", lineHeight: 1.06, maxWidth: "20ch" }}
        >
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-10 reveal" style={{ maxWidth: 900 }}>
          {children}
        </div>
      </div>
    </section>
  );
}

export default function FlowArticlePage() {
  return (
    <div style={{ background: "var(--color-ink)" }}>
      <CaseStudyHero
        parentLabel="Articles"
        parentHref="/articles"
        eyebrow="Design essay · written version"
        title="Flow"
        status="April 2026"
        lede={
          <>
            Periods are universal. The brands haven&apos;t been. On building an identity
            that refuses{" "}
            <em className="italic" style={{ color: ACCENT }}>
              both defaults at once
            </em>
            .
          </>
        }
        meta={[
          { label: "Role", value: "Brand Identity Designer" },
          { label: "Read time", value: "~7 min" },
          { label: "See the system", value: "/work/flow" },
        ]}
      />

      <Chapter eyebrow="01: The Challenge" title="Periods are universal. The brands haven't been.">
        <p className={P}>
          Most period care brands default to one of two scripts: clinical blue that
          signals medical necessity, or bubblegum pink that signals something to be
          ashamed of. Flow needed neither.
        </p>
        <p className={P}>
          The brief: build a brand that treats the body with dignity and genuine joy,
          one that speaks directly, without medical euphemism or forced cuteness.
          Direct. Warm. Joyful. Bold.
        </p>
      </Chapter>

      <Chapter eyebrow="02: The Identity" title="A mark that speaks plainly.">
        <p className={P}>
          The wordmark had one job: to sound like a brand that talks to you, not down
          at you. No medical serif, no winking lowercase cuteness, just a confident,
          direct letterform that carries warmth without apology.
        </p>
        <p className={P}>
          The icon mark distils that into a single shape that survives being shrunk to
          an app tile or pressed onto a wrapper. It stays legible and recognisably Flow
          at any size, on any background.
        </p>
      </Chapter>

      <Chapter eyebrow="03: Colour & Type" title="Colour does the emotional work.">
        <p className={P}>
          This is where the brand refuses both defaults at once. Clinical blue signals
          illness; bubblegum pink signals shame. Flow&apos;s palette is built to signal
          neither: vivid and warm, dignified without being sterile, joyful without
          being juvenile.
        </p>
        <p className={P}>
          Type carries the voice the same way. A confident display presence pairs with
          a calm, readable body, so the brand can be bold on a pack and gentle in a
          paragraph without ever feeling like two different brands.
        </p>
      </Chapter>

      <Chapter eyebrow="04: Packaging" title="The most personal surface.">
        <p className={P}>
          Packaging is where a period care brand is actually held: carried in a bag,
          seen in a bathroom, reached for in a hurry. It is the most intimate, most
          physical moment of the whole system, and it had to feel like something you
          would not mind being seen with.
        </p>
        <p className={P}>
          The packaging system and the individual wrapper carry the identity down to
          the smallest unit, so the promise holds whether you are looking at a full box
          or a single product in your hand.
        </p>
      </Chapter>

      <Chapter eyebrow="05: The System in Use" title="A living system, not a logo.">
        <p className={P}>
          An identity is only as good as its weakest application. The UI components,
          patterns, and motion principles exist so Flow behaves consistently in the
          places a static logo never reaches: on screen, in motion, in the hands of
          whoever builds with it next.
        </p>
        <p className={P}>
          The do&apos;s and don&apos;ts close the system by drawing its edges. The
          clearest way to keep a brand intact is to be explicit about what would break
          it.
        </p>
      </Chapter>

      <CaseStudyFooter
        nextHref="/work/flow"
        nextLabel="See all 18 slides"
        stat="Written version · 5 chapters"
        colophonLeft="Flow: the written case study"
      />
    </div>
  );
}
