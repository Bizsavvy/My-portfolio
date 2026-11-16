import { ArrowUpRight } from "lucide-react";
import { LoopVideo } from "@/components/site/loop-video";
import { Lightbox } from "@/components/site/lightbox";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  line: string;
  src: string;
  poster: string;
  /** Describes the loop for screen readers. */
  label: string;
  link?: { href: string; text: string };
  /** CSS object-position for the video, e.g. "bottom" to keep a footer in frame. */
  focus?: string;
  className?: string;
};

/** A website or product clip with a caption: the shared loop player, then title, line and link. */
export function MotionTile({ title, line, src, poster, label, link, focus = "center", className }: Props) {
  return (
    <div className={cn("flex flex-col overflow-hidden rounded-lg bg-card text-card-foreground", className)}>
      <div className="relative">
        <LoopVideo src={src} poster={poster} label={label} focus={focus} className="aspect-video w-full" controlClassName="z-10" />
        <Lightbox label={title} className="rounded-none">
          <LoopVideo src={src} poster={poster} label={label} focus={focus} className="aspect-video w-[min(90vw,1400px,calc(82dvh*16/9))] overflow-hidden rounded-xl" />
        </Lightbox>
      </div>
      <div className="flex flex-col gap-g6 p-g17">
        <h3 className="text-title text-foreground">{title}</h3>
        <p className="text-body text-muted-foreground">{line}</p>
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-g10 inline-flex w-fit items-center gap-g4 rounded-sm text-button text-brand-text underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {link.text}
            <ArrowUpRight aria-hidden className="size-4" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>
    </div>
  );
}
