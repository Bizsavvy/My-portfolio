import Image from "next/image";
import type { Shot } from "@/components/site/before-after";
import { cn } from "@/lib/utils";

export type Callout = {
  on: "before" | "after";
  /** Marker centre, in percent of the visible (cropped) screen. Recheck if the crop changes. */
  x: number;
  y: number;
  text: string;
};

export type ScreenPairFigure = {
  /** Names the comparison, e.g. "Shappay Home". */
  label: string;
  before: Shot;
  after: Shot;
  /**
   * The visible crop, as a CSS aspect ratio of the screenshot's width to the height shown,
   * and which end of the screen to keep. Both shots share a width.
   */
  crop: { aspect: string; position: "top" | "bottom" };
  /** Numbered in this order; list the before screen's first, top to bottom. */
  callouts: Callout[];
};

type Props = {
  figure: ScreenPairFigure;
  /** Shown above the pair, for when a block holds more than one. */
  caption?: string;
  /** "side" puts the callout list beside the screens from md up. */
  layout?: "stacked" | "side";
  className?: string;
};

/**
 * Case study before and after: the two screens side by side, numbered markers on them, and
 * the matching notes below or beside. Static, so it reads like the page around it. The home
 * page keeps the drag slider (components/site/before-after.tsx).
 */
export function ScreenPair({ figure, caption, layout = "stacked", className }: Props) {
  const numbered = figure.callouts.map((c, i) => ({ ...c, n: i + 1 }));
  const objectPosition = figure.crop.position === "top" ? "object-top" : "object-bottom";

  return (
    <figure
      aria-label={figure.label}
      className={cn("grid gap-g17", layout === "side" && "md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start md:gap-g44", className)}
    >
      <div className="flex flex-col gap-g10">
        {caption && <figcaption className="text-caption text-muted-foreground">{caption}</figcaption>}
        <div className="grid grid-cols-2 gap-g10 sm:gap-g17">
          {(["before", "after"] as const).map((side) => (
            <div key={side} className="flex flex-col gap-g6">
              <span className="font-mono text-label text-muted-foreground uppercase">{side === "before" ? "Before" : "After"}</span>
              <div className="relative overflow-hidden rounded-md" style={{ aspectRatio: figure.crop.aspect }}>
                <Image
                  src={figure[side].src}
                  alt={figure[side].alt}
                  fill
                  sizes="(min-width: 768px) 300px, 45vw"
                  className={cn("object-cover", objectPosition)}
                />
                {numbered
                  .filter((c) => c.on === side)
                  .map((c) => (
                    // White in both themes: the screenshots are dark either way.
                    <span
                      key={c.n}
                      aria-hidden
                      className="absolute flex size-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white font-mono text-label leading-none text-zinc-950 shadow-float sm:size-6"
                      style={{ left: `${c.x}%`, top: `${c.y}%` }}
                    >
                      {c.n}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ol className={cn("flex flex-col gap-g10", layout === "side" && "md:pt-g27")}>
        {numbered.map((c) => (
          <li key={c.n} className="flex gap-g10">
            <span
              aria-hidden
              className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground font-mono text-label text-background"
            >
              {c.n}
            </span>
            <p className="text-body text-pretty text-foreground-secondary">
              <span className="sr-only">{c.on === "before" ? "Before: " : "After: "}</span>
              {c.text}
            </p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
