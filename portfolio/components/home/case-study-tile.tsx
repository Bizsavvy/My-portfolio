import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/shadcn/badge";
import { LoopVideo } from "@/components/site/loop-video";
import { cn } from "@/lib/utils";

/** Where the screen sits inside the iPhone 16 Pro Max frame, desert titanium (measured from the PNG). */
// The screen's corner radius is about 187px on a 1320 x 2868 screen: 14.2% of its width, 6.5% of its height.
const SCREEN = { left: "5.102%", top: "2.2%", width: "89.796%", height: "95.6%", borderRadius: "14.2% / 6.5%" };

type Cover =
  | { kind: "phone"; src: string; alt: string }
  /** A 3:5 product loop from the motion session: the framed phone on the card colour. */
  | { kind: "video"; src: string; poster: string; label: string }
  // TODO(redesign): new screenshots for Oshap, NawNaw and UI to JSON. The old ones are
  // not reused (Haye, 2026-11-14), so these tiles show a marked placeholder until then.
  | { kind: "placeholder"; note: string };

export type CaseStudyTileProps = {
  title: string;
  /** One line: the problem and the impact. */
  line: string;
  href: string;
  outcome?: "measured" | "projected";
  cover: Cover;
  className?: string;
};

/** A dark phone screenshot inside the frame, clipped to the screen's rounded corners. */
export function PhoneShot({ src, alt, className, sizes = "(min-width: 1024px) 260px, 45vw" }: { src: string; alt: string; className?: string; sizes?: string }) {
  return (
    <div className={cn("relative aspect-[1470/3000]", className)}>
      <div className="absolute overflow-hidden" style={SCREEN}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
      <Image
        src="/assets/devices/iphone-16-pro-max-desert.webp"
        alt=""
        fill
        sizes={sizes}
        className="pointer-events-none"
      />
    </div>
  );
}

/**
 * Case study tile: the largest tiles in the grid (handoff), each with a one-line problem and
 * impact. The title link stretches over the whole card, so a video cover's pause button can
 * sit above it as its own control (a button can't live inside a link).
 */
export function CaseStudyTile({ title, line, href, outcome, cover, className }: CaseStudyTileProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg bg-card text-card-foreground has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring has-[a:focus-visible]:ring-offset-2 has-[a:focus-visible]:ring-offset-background",
        className
      )}
    >
      {cover.kind === "video" ? (
        // The loop leaves even space round the phone; trimming 75px off each end of the 1800
        // keeps the caption close below it (Haye, 2026-11-15), and the phone is never cut.
        <LoopVideo src={cover.src} poster={cover.poster} label={cover.label} className="aspect-[1080/1650] w-full" controlClassName="z-10" />
      ) : cover.kind === "phone" ? (
        // The whole phone shows, never cropped, and the caption follows close below (Haye, 2026-11-15).
        <div className="flex justify-center px-g17 pt-g44">
          <PhoneShot src={cover.src} alt={cover.alt} className="w-[62%] max-w-[260px] shrink-0" />
        </div>
      ) : (
        <div className="flex aspect-[5/4] p-g17">
          <div className="flex w-full items-center justify-center rounded-md border border-dashed border-input">
            <span className="font-mono text-label text-muted-foreground uppercase">{cover.note}</span>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-g6 p-g17">
        <h3 className="text-title text-foreground">
          <Link href={href} className="after:absolute after:inset-0 focus-visible:outline-none">
            {title}
          </Link>
        </h3>
        <p className="text-body text-muted-foreground">{line}</p>
        <div className="mt-g10 flex flex-wrap items-center gap-g10">
          {outcome && <Badge variant={outcome}>{outcome === "measured" ? "Measured" : "Projected"}</Badge>}
          <span className="inline-flex items-center gap-g4 text-button text-brand-text">
            Read case study
            <ArrowRight aria-hidden className="size-4 transition-transform duration-150 ease-standard group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </div>
  );
}
