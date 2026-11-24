import Image from "next/image";
import { CompareSlider } from "@/components/site/compare-slider";
import { cn } from "@/lib/utils";

export type Shot = { src: string; alt: string };

type Props = {
  before: Shot;
  after: Shot;
  /** Names the comparison for screen readers, e.g. "Shappay Home". */
  label: string;
  /**
   * The visible crop, as a CSS aspect ratio of the screenshot's width to the height shown
   * (e.g. "1170 / 1100"), and which end of the screen to keep. Both shots share a width, so
   * a top crop lines them up even when the screens differ in height; bottom crops need the
   * two shots to be the same height.
   */
  crop: { aspect: string; position: "top" | "bottom" };
  /** Image sizes hint for next/image. */
  sizes?: string;
  className?: string;
};

/**
 * One screen before and after, on the shared compare slider. Home page only: case studies
 * show pairs side by side with callouts (components/case/screen-pair.tsx).
 */
export function BeforeAfter({ before, after, label, crop, sizes = "(min-width: 1024px) 420px, 80vw", className }: Props) {
  const objectPosition = crop.position === "top" ? "object-top" : "object-bottom";
  const layer = (shot: Shot) => <Image src={shot.src} alt={shot.alt} fill sizes={sizes} className={cn("object-cover", objectPosition)} />;

  return (
    <CompareSlider
      label={label}
      labels={["Before", "After"]}
      className={className}
      style={{ aspectRatio: crop.aspect }}
      first={<div className="relative overflow-hidden rounded-md" style={{ aspectRatio: crop.aspect }}>{layer(before)}</div>}
      second={<div className="absolute inset-0 overflow-hidden rounded-md">{layer(after)}</div>}
    />
  );
}
