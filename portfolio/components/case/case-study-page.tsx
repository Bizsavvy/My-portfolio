import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/shadcn/badge";
import { Button } from "@/components/shadcn/button";
import { Separator } from "@/components/shadcn/separator";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/home/contact";
import { ScreenPair } from "@/components/case/screen-pair";
import { PhoneShot } from "@/components/home/case-study-tile";
import { DataTable } from "@/components/case/data-table";
import type { CaseStudy, OutcomeSection } from "@/lib/case-studies";

const wrap = "mx-auto w-full max-w-[1280px] px-g17 md:px-g27 lg:px-g44";

/**
 * The case study page template (Figma reference notes, Docs/Design-System.md):
 * a hero with title, brief, role, timeline and team; the problem and the impact;
 * a wide preview; the outcome in large cards; results; the detailed case study; next project.
 * The nav stays sticky with the email in view throughout.
 */
export function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteNav />
      <main>
        <Hero study={study} />
        <ProblemAndImpact study={study} />
        <Preview study={study} />
        <Outcome study={study} />
        {study.results && <Results results={study.results} />}
        <Detailed href={study.detailedHref} />
        <NextProject next={study.next} />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero({ study }: { study: CaseStudy }) {
  return (
    <header className={`${wrap} grid gap-g27 pt-g72 pb-g44 lg:grid-cols-2 lg:gap-g44 lg:pt-g116`}>
      <div className="flex flex-col gap-g17">
        <p className="font-mono text-label text-muted-foreground uppercase">Case study · {study.project}</p>
        <h1 className="text-heading text-balance sm:text-title-xl lg:text-display">{study.title}</h1>
      </div>
      <div className="flex flex-col gap-g27">
        <p className="text-lead text-pretty text-foreground-secondary">{study.brief}</p>
        <dl className="grid grid-cols-2 gap-x-g27 gap-y-g17">
          {study.meta.map((m) => (
            <div key={m.label} className={m.value.length > 60 ? "col-span-2" : undefined}>
              <dt className="font-mono text-label text-muted-foreground uppercase">{m.label}</dt>
              <dd className="mt-g4 text-body text-foreground">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}

/** Haye's addition to the reference hero: the problem and the impact, side by side. */
function ProblemAndImpact({ study }: { study: CaseStudy }) {
  return (
    <section aria-label="Problem and impact" className={`${wrap} grid gap-g10 pb-g44 md:grid-cols-2`}>
      <div className="flex flex-col gap-g10 rounded-lg bg-card p-g27">
        <h2 className="font-mono text-label text-muted-foreground uppercase">Problem</h2>
        <p className="text-body text-foreground">{study.problem}</p>
      </div>
      <div className="flex flex-col gap-g10 rounded-lg bg-card p-g27">
        <div className="flex items-center gap-g10">
          <h2 className="font-mono text-label text-muted-foreground uppercase">Impact</h2>
          <Badge variant={study.impact.outcome}>{study.impact.outcome === "measured" ? "Measured" : "Projected"}</Badge>
        </div>
        <p className="text-body text-foreground">{study.impact.text}</p>
      </div>
    </section>
  );
}

/** The sneak peek: the product's screens in a wide card, cropped by the card's bottom edge. */
function Preview({ study }: { study: CaseStudy }) {
  return (
    <section aria-label="Preview" className={`${wrap} pb-g116`}>
      <div className="flex h-[360px] items-start justify-center gap-g17 overflow-hidden rounded-xl bg-card px-g27 pt-g44 sm:h-[480px] lg:h-[600px] lg:gap-g44">
        {study.preview.map((shot, i) => (
          <PhoneShot
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            className={`w-[44%] max-w-[300px] shrink-0 sm:w-[30%] ${i === 1 ? "" : "max-sm:hidden lg:mt-g72"}`}
          />
        ))}
      </div>
    </section>
  );
}

function Outcome({ study }: { study: CaseStudy }) {
  return (
    <section aria-labelledby="outcome-heading" className={`${wrap} flex flex-col gap-g27 pb-g116`}>
      <h2 id="outcome-heading" className="text-heading">
        {study.sectionsHeading}
      </h2>
      <div className="flex flex-col gap-g10">
        {study.sections.map((section, i) => (
          <OutcomeCard key={i} section={section} />
        ))}
      </div>
    </section>
  );
}

function OutcomeCard({ section }: { section: OutcomeSection }) {
  if (section.kind === "image") {
    return (
      <figure className="flex flex-col gap-g17 rounded-xl bg-card p-g17 md:p-g27">
        <Image
          src={section.src}
          alt={section.alt}
          width={section.width}
          height={section.height}
          sizes="(min-width: 1280px) 1150px, 92vw"
          className="h-auto w-full rounded-md"
        />
        <figcaption className="flex flex-wrap items-center justify-between gap-g10">
          <span className="text-body text-muted-foreground">{section.caption}</span>
          {section.link && (
            <a
              href={section.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-g4 rounded-sm text-button text-brand-text underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {section.link.text}
              <ArrowUpRight aria-hidden className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
        </figcaption>
      </figure>
    );
  }

  return (
    <div className="flex flex-col gap-g27 rounded-xl bg-card p-g17 md:p-g27 lg:p-g44">
      <p className="max-w-[640px] text-title text-pretty text-foreground">{section.summary}</p>
      <ScreenPair figure={section.figure} layout="side" />
    </div>
  );
}

function Results({ results }: { results: NonNullable<CaseStudy["results"]> }) {
  return (
    <section aria-labelledby="results-heading" className={`${wrap} flex flex-col gap-g27 pb-g116`}>
      <h2 id="results-heading" className="text-heading">
        {results.heading}
      </h2>
      <DataTable columns={results.columns} rows={results.rows} numeric={results.columns.slice(1).map((_, i) => i + 1)} emphasis={results.columns.length - 1} />
      <p className="max-w-[640px] text-body text-foreground-secondary">{results.note}</p>
    </section>
  );
}

/** For hiring managers who want the full story (Figma notes). */
function Detailed({ href }: { href: string }) {
  return (
    <section aria-label="Detailed case study" className={`${wrap} flex justify-center pb-g116`}>
      <Button asChild>
        <Link href={href}>
          Read the detailed case study
          <ArrowRight aria-hidden />
        </Link>
      </Button>
    </section>
  );
}

export function NextProject({ next }: { next: CaseStudy["next"] }) {
  return (
    <section aria-labelledby="next-heading" className={`${wrap} pb-g116`}>
      <Separator className="mb-g44" />
      <p id="next-heading" className="font-mono text-label text-muted-foreground uppercase">
        Next project
      </p>
      <Link
        href={next.href}
        className="group mt-g17 flex flex-col gap-g17 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <span className="inline-flex items-center gap-g10 text-heading sm:text-title-xl">
          {next.project}
          <ArrowRight aria-hidden className="size-7 transition-transform duration-150 ease-standard group-hover:translate-x-1" />
        </span>
        <span className="max-w-[640px] text-lead text-foreground-secondary">{next.line}</span>
        {/* TODO(redesign): the next project's wide preview, once its new screenshots exist. */}
        <span className="flex aspect-[16/7] w-full items-center justify-center rounded-xl border border-dashed border-input bg-card">
          <span className="font-mono text-label text-muted-foreground uppercase">Preview coming</span>
        </span>
      </Link>
    </section>
  );
}
