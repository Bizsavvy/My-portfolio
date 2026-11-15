import { BeforeAfter, type Shot } from "@/components/site/before-after";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  line: string;
  before: Shot;
  after: Shot;
  className?: string;
};

/** Bento tile around the shared before and after slider, cropped to the top of the screen. */
export function BeforeAfterTile({ title, line, before, after, className }: Props) {
  return (
    <div className={cn("flex flex-col overflow-hidden rounded-lg bg-card text-card-foreground", className)}>
      {/* Bottom padding leaves room for the labels, which hang below the image's edges. */}
      <div className="flex aspect-video items-center justify-center px-g17 pt-g17 pb-g44">
        <BeforeAfter
          before={before}
          after={after}
          label={title}
          crop={{ aspect: "1170 / 1100", position: "top" }}
          sizes="(min-width: 1024px) 360px, 70vw"
          className="h-full"
        />
      </div>
      <div className="flex flex-col gap-g6 p-g17">
        <h3 className="text-title text-foreground">{title}</h3>
        <p className="text-body text-muted-foreground">{line}</p>
      </div>
    </div>
  );
}
