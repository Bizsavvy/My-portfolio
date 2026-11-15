"use client";

import { useState } from "react";
import Image from "next/image";
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
 * Home page only: case studies show pairs side by side with callouts (components/case/screen-pair.tsx).
 * Drag, or use the arrow keys, to compare two screens. A native range input sits over the
 * images, so keyboard and screen reader support come built in. Nothing moves on its own.
 * The labels hang below the image's edges so they never cover the screenshot; leave room
 * for them under the component.
 */
export function BeforeAfter({ before, after, label, crop, sizes = "(min-width: 1024px) 420px, 80vw", className }: Props) {
  const [split, setSplit] = useState(50);
  const objectPosition = crop.position === "top" ? "object-top" : "object-bottom";

  return (
    <div className={cn("relative", className)} style={{ aspectRatio: crop.aspect }}>
      <div className="absolute inset-0 overflow-hidden rounded-md select-none">
        <Image src={before.src} alt={before.alt} fill sizes={sizes} className={cn("object-cover", objectPosition)} />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${split}%)` }}>
          <Image src={after.src} alt={after.alt} fill sizes={sizes} className={cn("object-cover", objectPosition)} />
        </div>

        {/* Divider and handle, decorative; the range input below is the control. White in both
            themes, because the screenshots are dark either way. */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `calc(${split}% - 1px)` }}>
          <div className="absolute top-1/2 left-1/2 size-g27 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-float" />
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={split}
          onChange={(e) => setSplit(Number(e.target.value))}
          aria-label={`${label}: drag to compare before and after`}
          aria-valuetext={`${100 - split}% showing the redesign`}
          className="peer absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-md peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-inset" />
      </div>
      <div aria-hidden className="absolute top-full mt-g6 flex w-full justify-between font-mono text-label text-muted-foreground uppercase">
        <span>Before</span>
        <span>After</span>
      </div>
    </div>
  );
}
