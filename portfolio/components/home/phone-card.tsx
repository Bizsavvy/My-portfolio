import type { ReactNode } from "react";
import Image from "next/image";
import type { Shot } from "@/components/site/before-after";
import { LoopVideo } from "@/components/site/loop-video";
import { Lightbox } from "@/components/site/lightbox";
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
      <Lightbox label={label}>
        <PhoneShot src={shot.src} alt={shot.alt} sizes="(min-width: 768px) 460px, 90vw" className="w-[min(84vw,calc(82dvh*1470/3000),470px)] shrink-0" />
      </Lightbox>
      <CardLabel>{label}</CardLabel>
    </figure>
  );
}

/**
 * A desktop screen on a small landscape card, like the dashboard cards in the reference:
 * the whole screen, inset on the card surface, with the label pill underneath.
 */
export function ScreenshotCard({ src, alt, label, width, height, className }: { src: string; alt: string; label: string; width: number; height: number; className?: string }) {
  return (
    <figure className={cn(card, "px-g17 pt-g17 pb-g44", className)}>
      <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1024px) 380px, 90vw" className="h-auto w-full rounded-md" />
      <Lightbox label={label}>
        <Image src={src} alt={alt} width={width} height={height} sizes="90vw" className="h-auto max-h-[82dvh] w-auto max-w-[min(90vw,1440px)] rounded-lg" />
      </Lightbox>
      <CardLabel>{label}</CardLabel>
    </figure>
  );
}

/**
 * A product loop on a tall card: the motion session renders the phone (desert frame, 85% of
 * the height) on the card colour, 3:5, so the video fills the card edge to edge.
 */
export function PhoneVideoCard({ src, poster, label, description, className }: { src: string; poster: string; label: string; description: string; className?: string }) {
  return (
    <figure className={cn(card, className)}>
      <LoopVideo src={src} poster={poster} label={description} className="aspect-[3/5] w-full" controlClassName="z-10" />
      <Lightbox label={label}>
        <LoopVideo src={src} poster={poster} label={description} className="aspect-[3/5] w-[min(84vw,calc(82dvh*3/5),576px)] shrink-0 overflow-hidden rounded-xl" />
      </Lightbox>
      <CardLabel>{label}</CardLabel>
    </figure>
  );
}

// The light/dark slider cards are client components: components/home/theme-cards.tsx.
