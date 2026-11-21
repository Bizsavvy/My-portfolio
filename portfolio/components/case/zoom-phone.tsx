import { PhoneShot } from "@/components/home/case-study-tile";
import { Lightbox } from "@/components/site/lightbox";
import { cn } from "@/lib/utils";

/**
 * A case study phone that opens at full size when tapped (Haye, 2026-11-21). Small phones in
 * a row shrink the app's text past reading, whatever the file's resolution; the lightbox shows
 * the screen about 470 px wide, sharp.
 */
export function ZoomPhone({ src, alt, sizes, className }: { src: string; alt: string; sizes: string; className?: string }) {
  // A short name for the lightbox: the alt text up to its first colon.
  const label = alt.split(":")[0].slice(0, 60);
  return (
    <div className={cn("relative", className)}>
      <PhoneShot src={src} alt={alt} sizes={sizes} sharp className="w-full" />
      <Lightbox label={label}>
        <PhoneShot src={src} alt={alt} sizes="(min-width: 768px) 470px, 84vw" sharp className="w-[min(84vw,calc(82dvh*1470/3000),470px)] shrink-0" />
      </Lightbox>
    </div>
  );
}
