"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  /** Sits in the flow and sets the size; shown left of the divider. */
  first: ReactNode;
  /** Laid over `first` at the same size; shown right of the divider. Must match its layout. */
  second: ReactNode;
  /** Names for the two sides, shown as pills in the top corners, e.g. ["Before", "After"]. */
  labels: [string, string];
  /** Names the comparison for screen readers, e.g. "Shappay Home". */
  label: string;
  className?: string;
  style?: CSSProperties;
};

/** Dark pill in both themes: it sits on screenshots, light or dark. */
const pill = "pointer-events-none absolute top-g10 rounded-full bg-black/60 px-g10 py-g4 text-label text-white backdrop-blur-md";

/**
 * Drag, or use the arrow keys, to compare two layers. A native range input sits over them,
 * so keyboard and screen reader support come built in. Nothing moves on its own. Home page
 * only: case studies show pairs side by side (components/case/screen-pair.tsx).
 */
export function CompareSlider({ first, second, labels, label, className, style }: Props) {
  const [split, setSplit] = useState(50);

  return (
    <div className={cn("relative select-none", className)} style={style}>
      {first}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${split}%)` }}>
        {second}
      </div>

      <span aria-hidden className={cn(pill, "left-g10")}>
        {labels[0]}
      </span>
      <span aria-hidden className={cn(pill, "right-g10")}>
        {labels[1]}
      </span>

      {/* Divider and handle, decorative; the range input below is the control. */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-float" style={{ left: `calc(${split}% - 1px)` }}>
        <div className="absolute top-1/2 left-1/2 flex size-g44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md">
          <ChevronsLeftRight className="size-5" />
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={split}
        onChange={(e) => setSplit(Number(e.target.value))}
        aria-label={`${label}: drag to compare ${labels[0].toLowerCase()} and ${labels[1].toLowerCase()}`}
        aria-valuetext={`${100 - split}% showing ${labels[1].toLowerCase()}`}
        className="peer absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-md peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-inset" />
    </div>
  );
}
