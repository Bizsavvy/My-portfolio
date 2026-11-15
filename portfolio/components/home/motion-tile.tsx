import { ArrowUpRight } from "lucide-react";
import { LoopVideo } from "@/components/site/loop-video";
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
      <LoopVideo src={src} poster={poster} label={label} focus={focus} className="aspect-video w-full" />
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
