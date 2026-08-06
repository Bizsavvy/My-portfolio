"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Kicker } from "@/components/ui/Kicker";

export interface GlanceItem {
  /** Short feature name, e.g. "Scan to pay". */
  label: string;
  /** One line on what it does. Keep it to a single clause. */
  blurb: string;
  /** Looping MP4. Takes precedence over `img` when both are given. */
  video?: string;
  /** Poster for the video, or a still image when there is no video. */
  img?: string;
  /** Intrinsic size of `img`. Ignored for video. */
  width?: number;
  height?: number;
}

interface SolutionAtAGlanceProps {
  kicker?: string;
  heading?: string;
  description?: string;
  items: GlanceItem[];
  /**
   * A single wide composite shown instead of per-item media. When set, `items`
   * render as text-only annotations beneath it — use this when one mockup shows
   * the product better than four cropped screenshots.
   */
  hero?: { src: string; alt: string; width: number; height: number };
}

/**
 * The working solution, up front. Sits directly under CaseHeader so a visitor
 * sees what was actually built before any process narrative.
 *
 * Media items stack full-width at their own aspect ratio rather than sharing a
 * fixed frame, since a run of screens usually mixes wide composites with single
 * portrait shots. Pass `hero` instead when one composite says it all.
 *
 * Videos are muted, loop, and carry `preload="none"` — an IntersectionObserver
 * starts playback only once a clip is on screen and pauses it on exit, so a
 * page with several costs nothing until it is looked at.
 */
export function SolutionAtAGlance({
  kicker = "Solution at a glance",
  heading = "What it actually does.",
  description,
  items,
  hero,
}: SolutionAtAGlanceProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const videos = Array.from(root.querySelectorAll("video"));
    if (!videos.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const v = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            if (v.preload !== "auto") v.preload = "auto";
            v.play().catch(() => {
              /* autoplay refused — poster stays, no action needed */
            });
          } else {
            v.pause();
          }
        }
      },
      { rootMargin: "200px 0px", threshold: 0.15 }
    );

    videos.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  const cols = items.length >= 4 ? "md:grid-cols-4" : items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <section
      className="relative z-[5] border-t border-[var(--color-line)]"
      style={{ padding: "62px 0" }}
    >
      <div className="cs-wrap flex flex-col gap-6">
        <div className="flex flex-col gap-6 reveal">
          <Kicker>{kicker}</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            {heading}
          </h2>
        </div>

        {description && (
          <p className="font-hanken text-[16px] leading-[1.65] text-[var(--color-body)] reveal max-w-[62ch]">
            {description}
          </p>
        )}

        {hero && (
          <div className="reveal w-full overflow-hidden">
            <Image
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              sizes="(max-width: 900px) 100vw, 900px"
              className="w-full h-auto"
              style={{ display: "block" }}
            />
          </div>
        )}

        {/* With a hero composite the annotations stand alone; without one each
            item carries its own media. */}
        {hero ? (
          <div className={`reveal grid grid-cols-2 ${cols} gap-4`}>
            {items.map((item) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] tracking-[.1em] uppercase text-[var(--color-accent)]">
                  {item.label}
                </span>
                <span className="font-hanken text-[13px] leading-[1.5] text-[var(--color-body)]">
                  {item.blurb}
                </span>
              </div>
            ))}
          </div>
        ) : (
          /* Stacked, not gridded: these shots mix wide multi-phone composites
             with single portrait screens, so no shared frame fits any of them.
             Each renders at its own aspect, height-capped so a tall portrait
             cannot run away down the page. */
          <div ref={containerRef} className="flex flex-col gap-[var(--space-14xl)]">
            {items.map((item, i) => (
              <figure key={item.label} className="reveal flex flex-col gap-4">
                <div className="flex justify-center">
                  {item.video ? (
                    <video
                      muted
                      loop
                      playsInline
                      preload="none"
                      poster={item.img}
                      aria-label={`${item.label} demo`}
                      className="max-w-full max-h-[80vh] w-auto"
                      style={{ display: "block" }}
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  ) : item.img ? (
                    <Image
                      src={item.img}
                      alt={item.label}
                      width={item.width ?? 983}
                      height={item.height ?? 2000}
                      sizes="(max-width: 900px) 100vw, 900px"
                      priority={i === 0}
                      /* No frame: these mockups carry their own background, so
                         a border reads as a stray outline around the artwork. */
                      className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
                      style={{ display: "block" }}
                    />
                  ) : (
                    <div
                      className="flex items-center justify-center w-full rounded-[var(--rad-xl)] border border-dashed border-[var(--color-line-strong)] bg-[var(--color-surface)]"
                      style={{ aspectRatio: "16 / 10" }}
                    >
                      <span className="font-mono text-[10px] tracking-[.1em] uppercase text-[var(--color-muted)]">
                        {item.label}
                      </span>
                    </div>
                  )}
                </div>

                <figcaption className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] tracking-[.1em] uppercase text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")} · {item.label}
                  </span>
                  <span className="font-hanken text-[15px] leading-[1.6] text-[var(--color-body)] max-w-[68ch]">
                    {item.blurb}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
