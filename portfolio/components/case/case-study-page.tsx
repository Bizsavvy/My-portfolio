import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/shadcn/badge";
import { Button } from "@/components/shadcn/button";
import { Separator } from "@/components/shadcn/separator";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/home/contact";
import { ScreenPair } from "@/components/case/screen-pair";
import { ZoomPhone } from "@/components/case/zoom-phone";
import { DataTable } from "@/components/case/data-table";
import { CaseFigureView } from "@/components/case/case-figure";
import type { CaseStudy, OutcomeSection } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

const wrap = "mx-auto w-full max-w-[1280px] px-g17 md:px-g27 lg:px-g44";

/**
 * The case study page template (Figma reference notes, Docs/Design-System.md):
 * a hero with title, brief, role, timeline and team; the problem and the impact; a TL;DR;
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
        <Tldr points={study.tldr} />
        <Preview study={study} />
        <Outcome study={study} />
        {study.results && <Results results={study.results} />}
        {study.closing && <Closing items={study.closing} />}
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
    <section aria-label="Problem and impact" className={`${wrap} grid gap-g10 pb-g10 md:grid-cols-2`}>
      <div className="flex flex-col gap-g10 rounded-lg bg-card p-g27">
        <h2 className="font-mono text-label text-muted-foreground uppercase">Problem</h2>
        {paragraphs(study.problem).map((t) => (
          <p key={t} className="text-body text-foreground">
            {t}
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-g10 rounded-lg bg-card p-g27">
        <div className="flex items-center gap-g10">
          <h2 className="font-mono text-label text-muted-foreground uppercase">Impact</h2>
          {study.impact.outcome && <Badge variant={study.impact.outcome}>{study.impact.outcome === "measured" ? "Measured" : "Projected"}</Badge>}
        </div>
        {paragraphs(study.impact.text).map((t) => (
          <p key={t} className="text-body text-foreground">
            {t}
          </p>
        ))}
        {study.impact.list && (
          <ul className="flex list-disc flex-col gap-g4 pl-g17 text-body text-foreground marker:text-muted-foreground">
            {study.impact.list.map((item) => (
              <li key={item} className="pl-g4">
                {item}
              </li>
            ))}
          </ul>
        )}
        {study.impact.after && <p className="text-body text-foreground-secondary">{study.impact.after}</p>}
      </div>
    </section>
  );
}

const paragraphs = (text: string | string[]) => (Array.isArray(text) ? text : [text]);

/** The whole case study in a few points, right under the problem and impact (Haye, 2026-11-21). */
function Tldr({ points }: { points: string[] }) {
  return (
    <section aria-labelledby="tldr-heading" className={`${wrap} pb-g44`}>
      <div className="flex flex-col gap-g10 rounded-lg bg-card p-g27">
        <h2 id="tldr-heading" className="font-mono text-label text-muted-foreground uppercase">
          TL;DR
        </h2>
        <ul className="flex max-w-[880px] list-disc flex-col gap-g6 pl-g17 text-body text-foreground marker:text-muted-foreground">
          {points.map((point) => (
            <li key={point} className="pl-g4">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/**
 * The sneak peek: the product's screens in a wide card. Every phone shows whole, never cropped,
 * and the middle one is larger (Haye, 2026-11-15). Phones show only the middle screen.
 */
function Preview({ study }: { study: CaseStudy }) {
  return (
    <section aria-label="Preview" className={`${wrap} pb-g116`}>
      <div className="flex items-center justify-center gap-g17 rounded-xl bg-card px-g27 py-g44 lg:gap-g44 lg:py-g72">
        {study.preview.map((shot, i) => (
          <ZoomPhone
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            sizes="(min-width: 1024px) 600px, 90vw"
            className={cn("shrink-0", i === 1 ? "w-[60%] max-w-[300px] sm:w-[34%]" : "w-[26%] max-w-[230px] max-sm:hidden")}
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

/** A section card's heading and optional text. */
function CardHead({ summary, body }: { summary: string; body?: string }) {
  return (
    <div className="flex max-w-[720px] flex-col gap-g10">
      <h3 className="text-title text-pretty text-foreground">{summary}</h3>
      {body && <p className="text-body text-pretty text-foreground-secondary">{body}</p>}
    </div>
  );
}

function OutcomeCard({ section }: { section: OutcomeSection }) {
  if (section.kind === "phones") {
    return (
      <figure className="flex flex-col gap-g27 rounded-xl bg-card p-g17 md:p-g27 lg:p-g44">
        <CardHead summary={section.summary} body={section.body} />
        <div className="grid grid-cols-2 gap-g17 md:grid-cols-4 lg:gap-g27">
          {section.shots.map((s) => (
            <ZoomPhone key={s.src} src={s.src} alt={s.alt} sizes="(min-width: 1024px) 520px, 90vw" className="w-full" />
          ))}
        </div>
        <figcaption className="max-w-[720px] text-caption text-muted-foreground">{section.caption}</figcaption>
      </figure>
    );
  }

  if (section.kind === "figure") {
    return (
      <figure className="flex flex-col gap-g27 rounded-xl bg-card p-g17 md:p-g27 lg:p-g44">
        <CardHead summary={section.summary} body={section.body} />
        <CaseFigureView figure={section.figure} />
        <figcaption className="max-w-[720px] text-caption text-muted-foreground">{section.caption}</figcaption>
      </figure>
    );
  }

  if (section.kind === "images") {
    return (
      <figure className="flex flex-col gap-g27 rounded-xl bg-card p-g17 md:p-g27 lg:p-g44">
        <CardHead summary={section.summary} body={section.body} />
        <div className="grid gap-g17 md:grid-cols-2">
          {section.items.map((img) => (
            <div key={img.src} className="flex flex-col gap-g6">
              <span className="font-mono text-label text-muted-foreground uppercase">{img.label}</span>
              <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(min-width: 1280px) 560px, 92vw" className="h-auto w-full rounded-md" />
            </div>
          ))}
        </div>
        <figcaption className="max-w-[720px] text-caption text-muted-foreground">{section.caption}</figcaption>
      </figure>
    );
  }

  if (section.kind === "text") {
    return (
      <div className="flex flex-col rounded-xl bg-card p-g17 md:p-g27 lg:p-g44">
        <CardHead summary={section.summary} body={section.body} />
      </div>
    );
  }

  if (section.kind === "image") {
    return (
      <figure className={cn("flex flex-col gap-g17 rounded-xl bg-card p-g17 md:p-g27", section.summary && "gap-g27 lg:p-g44")}>
        {section.summary && <CardHead summary={section.summary} body={section.body} />}
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
      <h3 className="max-w-[640px] text-title text-pretty text-foreground">{section.summary}</h3>
      <ScreenPair figure={section.figure} layout="side" />
    </div>
  );
}

function Closing({ items }: { items: NonNullable<CaseStudy["closing"]> }) {
  return (
    <section aria-label="How it holds, what's next and reflection" className={`${wrap} flex flex-col gap-g72 pb-g116`}>
      {items.map((item) => (
        <div key={item.heading} className="flex max-w-[720px] flex-col gap-g17">
          <h2 className="text-heading text-foreground">{item.heading}</h2>
          {item.text && <p className="text-body text-pretty text-foreground-secondary">{item.text}</p>}
          {item.list && (
            <ul className="flex list-disc flex-col gap-g6 pl-g27 text-body text-foreground-secondary marker:text-muted-foreground">
              {item.list.map((it) => (
                <li key={it} className="pl-g4">
                  {it}
                </li>
              ))}
            </ul>
          )}
          {item.after && <p className="text-body text-pretty text-foreground-secondary">{item.after}</p>}
          {item.items && (
            <ul className="flex list-disc flex-col gap-g10 pl-g27 text-body text-foreground-secondary marker:text-muted-foreground">
              {item.items.map((it) => (
                <li key={it.lead} className="pl-g4">
                  <strong className="font-semibold text-foreground">{it.lead}</strong> {it.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
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
        {/* TODO(redesign): add the next project's wide preview once its new screenshots exist.
            Hidden until then rather than shown as an empty box (Haye, 2026-11-15). */}
      </Link>
    </section>
  );
}
