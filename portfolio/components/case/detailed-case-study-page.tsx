import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/home/contact";
import { ScreenPair } from "@/components/case/screen-pair";
import { ZoomPhone } from "@/components/case/zoom-phone";
import { DataTable } from "@/components/case/data-table";
import { OnThisPage } from "@/components/case/on-this-page";
import { NqrDemo } from "@/components/case/nqr-demo";
import { LoopVideo } from "@/components/site/loop-video";
import { CaseFigureView } from "@/components/case/case-figure";
import Image from "next/image";
import { NextProject } from "@/components/case/case-study-page";
import { readingMinutes, type Block, type DetailedCaseStudy, type Lead } from "@/lib/detailed-case-studies";
import { cn } from "@/lib/utils";

const wrap = "mx-auto w-full max-w-[1280px] px-g17 md:px-g27 lg:px-g44";
/** The case study reading column (Docs/Design-System.md). Tables and figures run wider. */
const measure = "max-w-[640px]";

/**
 * The detailed case study template, for hiring managers who want the whole story: the
 * short page's "Read the detailed case study" button leads here. One reading column, with
 * the section list beside it on wide screens. Content is typed in lib/detailed-case-studies.ts.
 */
export function DetailedCaseStudyPage({ study }: { study: DetailedCaseStudy }) {
  const minutes = readingMinutes(study);
  const toc = study.sections.map((s) => ({ id: s.id, label: s.navLabel ?? s.heading }));

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteNav />
      <main>
        <header className={`${wrap} flex flex-col gap-g17 pt-g72 pb-g72 lg:pt-g116`}>
          <Link
            href={study.shortHref}
            className="inline-flex w-fit items-center gap-g6 rounded-sm text-button text-muted-foreground transition-colors duration-150 ease-standard hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ArrowLeft aria-hidden className="size-4" />
            {study.project} case study
          </Link>
          <p className="mt-g27 font-mono text-label text-muted-foreground uppercase">Detailed case study · {study.project}</p>
          <h1 className="max-w-[900px] text-heading text-balance sm:text-title-xl lg:text-display">{study.title}</h1>
          <p className="font-mono text-label text-muted-foreground uppercase">{minutes} min read</p>
        </header>

        <div className={`${wrap} pb-g116 lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-g72`}>
          <aside className="hidden lg:block">
            <div className="sticky top-[104px]">
              <OnThisPage items={toc} />
            </div>
          </aside>

          <article className="flex max-w-[880px] min-w-0 flex-col gap-g72">
            {study.sections.map((section) => (
              <section key={section.id} aria-labelledby={section.id} className="flex flex-col gap-g17">
                <h2 id={section.id} className={cn(measure, "scroll-mt-[104px] text-title text-balance sm:text-heading")}>
                  {section.heading}
                </h2>
                {section.blocks.map((block, i) => (
                  <BlockView key={i} block={block} />
                ))}
              </section>
            ))}
          </article>
        </div>

        <NextProject next={study.next} />
      </main>
      <SiteFooter />
    </div>
  );
}

function LeadText({ lead, text }: Lead) {
  return (
    <>
      {lead && <strong className="font-semibold text-foreground">{lead} </strong>}
      {text}
    </>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "p":
      return (
        <p className={cn(measure, "text-body text-pretty text-foreground-secondary")}>
          <LeadText lead={block.lead} text={block.text} />
        </p>
      );

    case "h3":
      return <h3 className={cn(measure, "mt-g27 text-lead font-medium text-foreground")}>{block.text}</h3>;

    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List
          className={cn(
            measure,
            "flex flex-col gap-g10 pl-g27 text-body text-foreground-secondary marker:text-muted-foreground",
            block.ordered ? "list-decimal" : "list-disc"
          )}
        >
          {block.items.map((item) => (
            <li key={item.text} className="pl-g4">
              <LeadText lead={item.lead} text={item.text} />
              {item.quotes && (
                <div className="mt-g10 flex flex-col gap-g10">
                  {item.quotes.map((q) => (
                    <blockquote key={q} className="border-l-2 border-border pl-g10 text-foreground">
                      &ldquo;{q}&rdquo;
                    </blockquote>
                  ))}
                </div>
              )}
            </li>
          ))}
        </List>
      );
    }

    case "table":
      return (
        <DataTable
          className={cn("my-g17", block.columns.length <= 3 && measure)}
          label={block.label}
          columns={block.columns}
          rows={block.rows}
          numeric={block.numeric}
          minWidth={block.columns.length > 3 ? 720 : 480}
        />
      );

    case "changes":
      return (
        <ol className="mt-g17 flex flex-col gap-g44">
          {block.items.map((item, n) => (
            <li key={item.lead} className="flex flex-col gap-g17">
              <div className={cn(measure, "flex flex-col gap-g6")}>
                <span aria-hidden className="font-mono text-label text-muted-foreground">
                  {String(n + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lead font-medium text-foreground">{item.lead?.replace(/\.$/, "")}</h3>
                <p className="text-body text-pretty text-foreground-secondary">{item.text}</p>
              </div>
              <div className={cn(measure, "flex flex-col gap-g44 rounded-lg bg-card p-g17 md:p-g27")}>
                {item.figures.map((f) => (
                  <ScreenPair key={f.label} figure={f} caption={item.figures.length > 1 ? f.label : undefined} />
                ))}
              </div>
            </li>
          ))}
        </ol>
      );

    case "phones":
      return (
        <figure className="my-g17 flex flex-col gap-g17">
          {/* Phones sit two to a row; tap one to see it at full size. */}
          <div
            className={cn(
              "rounded-lg bg-card px-g17 py-g27 md:px-g27",
              // Two to a row at most: four in a row shrank the app's text past reading (Haye, 2026-11-21).
              block.shots.length > 2 ? "grid grid-cols-2 justify-items-center gap-g17 md:gap-g27" : "flex justify-center gap-g17 md:gap-g44"
            )}
          >
            {block.shots.map((s) => (
              <ZoomPhone key={s.src} src={s.src} alt={s.alt} sizes="(min-width: 1024px) 640px, 90vw" className={block.shots.length > 2 ? "w-full max-w-[300px]" : "w-[45%] max-w-[260px]"} />
            ))}
          </div>
          <figcaption className={cn(measure, "text-caption text-muted-foreground")}>{block.caption}</figcaption>
        </figure>
      );

    case "images":
      return (
        <figure className="my-g17 flex flex-col gap-g17">
          <div className={cn("grid gap-g10 rounded-lg bg-card p-g17 md:p-g27", block.stack ? "gap-g17" : block.items.length > 1 && "md:grid-cols-2")}>
            {block.items.map((img) => (
              <div key={img.src} className="flex flex-col gap-g6">
                {img.label && <span className="font-mono text-label text-muted-foreground uppercase">{img.label}</span>}
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes={block.items.length > 1 && !block.stack ? "(min-width: 1024px) 420px, 90vw" : "(min-width: 1024px) 860px, 90vw"}
                  className="h-auto w-full rounded-md"
                />
              </div>
            ))}
          </div>
          <figcaption className={cn(measure, "text-caption text-muted-foreground")}>{block.caption}</figcaption>
        </figure>
      );

    case "figure":
      return (
        <figure className="my-g17 flex flex-col gap-g17">
          <div className="rounded-lg bg-card p-g17 md:p-g27">
            <CaseFigureView figure={block.figure} />
          </div>
          <figcaption className={cn(measure, "text-caption text-muted-foreground")}>{block.caption}</figcaption>
        </figure>
      );

    case "pending":
      // TODO(redesign): placeholder until the visual exists; see the block's `text`.
      return (
        <div className={cn(measure, "my-g17 flex aspect-video w-full flex-col items-center justify-center gap-g6 rounded-lg border border-dashed border-input bg-card p-g27 text-center")}>
          <span className="font-mono text-label text-muted-foreground uppercase">{block.label}</span>
          <span className="max-w-[420px] text-caption text-muted-foreground">{block.text}</span>
        </div>
      );

    case "video":
      return (
        <figure className="my-g17 flex flex-col gap-g10">
          <LoopVideo src={block.src} poster={block.poster} label={block.label} className="aspect-video w-full overflow-hidden rounded-lg bg-card" />
          <figcaption className={cn(measure, "text-caption text-muted-foreground")}>{block.caption}</figcaption>
        </figure>
      );

    case "nqr-demo":
      return (
        <div className="my-g17" data-md-figure="nqr-demo">
          <NqrDemo />
        </div>
      );
  }
}
