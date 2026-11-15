import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/shadcn/badge";
import { cn } from "@/lib/utils";

/** Where the screen sits inside the iPhone 16 Pro Max frame (measured from the PNG). */
// The screen's corner radius is about 187px on a 1320 x 2868 screen: 14.2% of its width, 6.5% of its height.
const SCREEN = { left: "5.102%", top: "2.2%", width: "89.796%", height: "95.6%", borderRadius: "14.2% / 6.5%" };

type Cover =
  | { kind: "phone"; src: string; alt: string }
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
export function PhoneShot({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn("relative aspect-[1470/3000]", className)}>
      <div className="absolute overflow-hidden" style={SCREEN}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 260px, 45vw"
          className="object-cover object-top transition-transform duration-150 ease-standard group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>
      <Image
        src="/assets/devices/iphone-16-pro-max-black.webp"
        alt=""
        fill
        sizes="(min-width: 1024px) 260px, 45vw"
        className="pointer-events-none"
      />
    </div>
  );
}

/** Case study tile: the largest tiles in the grid (handoff), each with a one-line problem and impact. */
export function CaseStudyTile({ title, line, href, outcome, cover, className }: CaseStudyTileProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg bg-card text-card-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <div className="flex min-h-[260px] flex-1 items-start justify-center overflow-hidden px-g27 pt-g44">
        {cover.kind === "phone" ? (
          <PhoneShot src={cover.src} alt={cover.alt} className="w-[min(62%,300px)] shrink-0" />
        ) : (
          <div className="mb-g27 flex aspect-video w-full items-center justify-center self-center rounded-md border border-dashed border-input">
            <span className="font-mono text-label text-muted-foreground uppercase">{cover.note}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-g6 p-g17">
        <h3 className="text-title text-foreground">{title}</h3>
        <p className="text-body text-muted-foreground">{line}</p>
        <div className="mt-g10 flex flex-wrap items-center gap-g10">
          {outcome && <Badge variant={outcome}>{outcome === "measured" ? "Measured" : "Projected"}</Badge>}
          <span className="inline-flex items-center gap-g4 text-button text-brand-text">
            Read case study
            <ArrowRight aria-hidden className="size-4 transition-transform duration-150 ease-standard group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
