import type { ReactNode } from "react";
import type { Shot } from "@/components/site/before-after";
import { CompareSlider } from "@/components/site/compare-slider";
import { PhoneShot } from "@/components/home/case-study-tile";
import { cn } from "@/lib/utils";

/** Every bento card stands alone: one thing, on the card surface, no border. */
export const card = "relative overflow-hidden rounded-lg bg-card text-card-foreground";

/** Names what a picture-only card shows, in its bottom-left corner. */
export function CardLabel({ children }: { children: ReactNode }) {
  return (
    <figcaption className="pointer-events-none absolute bottom-g10 left-g10 z-10 rounded-full bg-background/70 px-g10 py-g4 font-mono text-label text-muted-foreground uppercase backdrop-blur-md">
      {children}
    </figcaption>
  );
}

const phoneArea = "flex aspect-[3/5] items-center justify-center pb-g17";
const phone = "w-[62%] max-w-[260px]";

/** One app screen in a phone frame, alone on a tall card. */
export function PhoneCard({ shot, label, className }: { shot: Shot; label: string; className?: string }) {
  return (
    <figure className={cn(card, className)}>
      <div className={phoneArea}>
        <PhoneShot src={shot.src} alt={shot.alt} className={phone} />
      </div>
      <CardLabel>{label}</CardLabel>
    </figure>
  );
}

/** One screen in light and dark, in one phone frame, with the compare slider across the card. */
export function ThemeCompareCard({ light, dark, label, className }: { light: Shot; dark: Shot; label: string; className?: string }) {
  return (
    <figure className={cn(card, className)}>
      <CompareSlider
        label={`${label}, light and dark`}
        labels={["Light", "Dark"]}
        first={
          <div className={phoneArea}>
            <PhoneShot src={light.src} alt={light.alt} className={phone} />
          </div>
        }
        second={
          <div className={cn(phoneArea, "absolute inset-0 bg-card")}>
            <PhoneShot src={dark.src} alt={dark.alt} className={phone} />
          </div>
        }
      />
      <CardLabel>{label}</CardLabel>
    </figure>
  );
}
