"use client";

import { useRef } from "react";
import Image from "next/image";
import type { Shot } from "@/components/site/before-after";
import { CompareSlider } from "@/components/site/compare-slider";
import { Lightbox, type LightboxHandle } from "@/components/site/lightbox";
import { PhoneShot } from "@/components/home/case-study-tile";
import { CardLabel, card } from "@/components/home/phone-card";
import { cn } from "@/lib/utils";

/**
 * One screen in light and dark, split by the compare slider. Drag to move the divider; tap a
 * side to open that mode larger (Haye, 2026-11-21). Each mode has its own lightbox.
 */
function useSides() {
  const light = useRef<LightboxHandle>(null);
  const dark = useRef<LightboxHandle>(null);
  const open = (side: 0 | 1) => (side === 0 ? light : dark).current?.show();
  return { light, dark, open };
}

const phoneArea = "flex aspect-[3/5] items-center justify-center pb-g17";
const phone = "w-[62%] max-w-[260px]";
const phoneLarge = "w-[min(84vw,calc(82dvh*1470/3000),470px)] shrink-0";

/** A phone screen in light and dark, in one phone frame. */
export function ThemeCompareCard({ light, dark, label, className }: { light: Shot; dark: Shot; label: string; className?: string }) {
  const sides = useSides();
  return (
    <figure className={cn(card, className)}>
      <CompareSlider
        label={`${label}, light and dark`}
        labels={["Light", "Dark"]}
        onOpen={sides.open}
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
      <Lightbox label={`${label} · Light`} trigger={false} handle={sides.light}>
        <PhoneShot src={light.src} alt={light.alt} sizes="(min-width: 768px) 460px, 90vw" className={phoneLarge} />
      </Lightbox>
      <Lightbox label={`${label} · Dark`} trigger={false} handle={sides.dark}>
        <PhoneShot src={dark.src} alt={dark.alt} sizes="(min-width: 768px) 460px, 90vw" className={phoneLarge} />
      </Lightbox>
      <CardLabel>{label}</CardLabel>
    </figure>
  );
}

/** A desktop screen in light and dark on a landscape card. Both captures share one size. */
export function ScreenshotThemeCard({ light, dark, label, width, height, className }: { light: Shot; dark: Shot; label: string; width: number; height: number; className?: string }) {
  const sides = useSides();
  const sizes = "(min-width: 1024px) 380px, 90vw";
  const large = (shot: Shot) => (
    <Image src={shot.src} alt={shot.alt} width={width} height={height} sizes="90vw" className="h-auto max-h-[82dvh] w-auto max-w-[min(90vw,1440px)] rounded-lg" />
  );
  return (
    <figure className={cn(card, "px-g17 pt-g17 pb-g44", className)}>
      <CompareSlider
        className="overflow-hidden rounded-md"
        label={`${label}, light and dark`}
        labels={["Light", "Dark"]}
        onOpen={sides.open}
        first={<Image src={light.src} alt={light.alt} width={width} height={height} sizes={sizes} className="h-auto w-full" />}
        second={<Image src={dark.src} alt={dark.alt} width={width} height={height} sizes={sizes} className="h-auto w-full" />}
      />
      <Lightbox label={`${label} · Light`} trigger={false} handle={sides.light}>
        {large(light)}
      </Lightbox>
      <Lightbox label={`${label} · Dark`} trigger={false} handle={sides.dark}>
        {large(dark)}
      </Lightbox>
      <CardLabel>{label}</CardLabel>
    </figure>
  );
}
