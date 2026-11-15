"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Shot = { src: string; alt: string };

type Props = {
  title: string;
  line: string;
  before: Shot;
  after: Shot;
  className?: string;
};

/**
 * Drag, or use the arrow keys, to compare two screens. A native range input sits over the
 * images, so keyboard and screen reader support come built in. Nothing moves on its own.
 * Both shots are cropped to the top of the screen at the same width, so they line up.
 */
export function BeforeAfterTile({ title, line, before, after, className }: Props) {
  const [split, setSplit] = useState(50);

  return (
    <div className={cn("flex flex-col overflow-hidden rounded-lg bg-card text-card-foreground", className)}>
      {/* Bottom padding leaves room for the labels, which hang below the image's edges. */}
      <div className="flex aspect-video items-center justify-center px-g17 pt-g17 pb-g44">
        <div className="relative h-full aspect-[1170/1100]">
          <div className="absolute inset-0 overflow-hidden rounded-md select-none">
            <Image src={before.src} alt={before.alt} fill sizes="(min-width: 1024px) 360px, 70vw" className="object-cover object-top" />
            <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${split}%)` }}>
              <Image src={after.src} alt={after.alt} fill sizes="(min-width: 1024px) 360px, 70vw" className="object-cover object-top" />
            </div>

            {/* Divider and handle, decorative; the range input below is the control. White in both
                themes, because the Shappay screenshots are dark either way. */}
            <div aria-hidden className="pointer-events-none absolute inset-y-0 w-0.5 bg-white" style={{ left: `calc(${split}% - 1px)` }}>
              <div className="absolute top-1/2 left-1/2 size-g27 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-float" />
            </div>

            <input
              type="range"
              min={0}
              max={100}
              value={split}
              onChange={(e) => setSplit(Number(e.target.value))}
              aria-label={`${title}: drag to compare before and after`}
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
      </div>
      <div className="flex flex-col gap-g6 p-g17">
        <h3 className="text-title text-foreground">{title}</h3>
        <p className="text-body text-muted-foreground">{line}</p>
      </div>
    </div>
  );
}
