import Image from "next/image";
import type { Shot } from "@/components/site/before-after";
import { cn } from "@/lib/utils";

export type ScreenCallout = {
  /** Marker centre, in percent of the visible (cropped) screen. Recheck if the crop changes. */
  x: number;
  y: number;
  text: string;
};

type Props = {
  shot: Shot;
  callouts: ScreenCallout[];
  /** Width-to-shown-height ratio of the visible crop, and which end of the screen to keep. */
  crop?: { aspect: string; position: "top" | "bottom" };
  /** Marker colour: dark on light screenshots (NawNaw), white on dark ones (Shappay). */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * One screen with numbered markers and the matching notes beside it, in the style of the
 * before and after pairs (components/case/screen-pair.tsx), for a decision shown on a single
 * screen.
 */
export function AnnotatedScreen({ shot, callouts, crop = { aspect: "1320 / 2868", position: "top" }, tone = "light", className }: Props) {
  return (
    <div className={cn("grid gap-g17 md:grid-cols-[minmax(0,280px)_minmax(0,1fr)] md:items-start md:gap-g44", className)}>
      <div className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-md" style={{ aspectRatio: crop.aspect }}>
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          sizes="(min-width: 768px) 560px, 90vw"
          quality={90}
          className={cn("object-cover", crop.position === "top" ? "object-top" : "object-bottom")}
        />
        {callouts.map((c, i) => (
          <span
            key={i}
            aria-hidden
            className={cn(
              "absolute flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full font-mono text-label leading-none shadow-float",
              tone === "light" ? "bg-zinc-950 text-white" : "bg-white text-zinc-950"
            )}
            style={{ left: `${c.x}%`, top: `${c.y}%` }}
          >
            {i + 1}
          </span>
        ))}
      </div>
      <ol className="flex flex-col gap-g10 md:pt-g17">
        {callouts.map((c, i) => (
          <li key={i} className="flex gap-g10">
            <span aria-hidden className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground font-mono text-label text-background">
              {i + 1}
            </span>
            <p className="text-body text-pretty text-foreground-secondary">{c.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
