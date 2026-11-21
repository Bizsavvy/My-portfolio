"use client";

import { useRef, useState, type CSSProperties, type DragEvent, type PointerEvent, type ReactNode } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Side = 0 | 1;

type Props = {
  /** Sits in the flow and sets the size; shown left of the divider. */
  first: ReactNode;
  /** Laid over `first` at the same size; shown right of the divider. Must match its layout. */
  second: ReactNode;
  /** Names for the two sides, shown as pills in the top corners, e.g. ["Before", "After"]. */
  labels: [string, string];
  /** Names the comparison for screen readers, e.g. "Shappay Home". */
  label: string;
  /**
   * Optional: a tap (not a drag) on a side opens that side, e.g. larger in a lightbox. Without
   * it, a tap moves the divider to where you tapped.
   */
  onOpen?: (side: Side) => void;
  className?: string;
  style?: CSSProperties;
};

/** Dark pill in both themes: it sits on screenshots, light or dark. */
const pill = "pointer-events-none absolute top-g10 rounded-full bg-black/60 px-g10 py-g4 text-label text-white backdrop-blur-md";

/** How far a pointer moves before a press counts as a drag rather than a tap. */
const DRAG_SLOP = 4;

/**
 * Drag, or use the arrow keys, to compare two layers. A native range input carries the value,
 * so keyboard and screen reader support come built in. Nothing moves on its own. Home page
 * only: case studies show pairs side by side (components/case/screen-pair.tsx).
 *
 * Each layer is clipped to its own side, so the one underneath never shows through at the
 * edges where the corners are anti-aliased.
 */
export function CompareSlider({ first, second, labels, label, onOpen, className, style }: Props) {
  const [split, setSplit] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const press = useRef<{ id: number; x: number; dragging: boolean } | null>(null);

  const splitAt = (clientX: number) => {
    const r = box.current?.getBoundingClientRect();
    if (!r) return split;
    return Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100));
  };

  // With onOpen, the container takes the pointer: drag to move the divider, tap to open a side.
  const pointer = onOpen
    ? {
        onPointerDown: (e: PointerEvent<HTMLDivElement>) => {
          if (e.button !== 0) return;
          press.current = { id: e.pointerId, x: e.clientX, dragging: false };
          e.currentTarget.setPointerCapture(e.pointerId);
        },
        onPointerMove: (e: PointerEvent<HTMLDivElement>) => {
          const p = press.current;
          if (!p || p.id !== e.pointerId) return;
          if (!p.dragging && Math.abs(e.clientX - p.x) < DRAG_SLOP) return;
          p.dragging = true;
          setSplit(splitAt(e.clientX));
        },
        onPointerUp: (e: PointerEvent<HTMLDivElement>) => {
          const p = press.current;
          press.current = null;
          if (!p || p.id !== e.pointerId || p.dragging) return;
          onOpen(splitAt(e.clientX) < split ? 0 : 1);
        },
        onPointerCancel: () => {
          press.current = null;
        },
        // Images inside are draggable by default; the browser's own image drag would cancel the pointer.
        onDragStart: (e: DragEvent<HTMLDivElement>) => e.preventDefault(),
      }
    : {};

  return (
    <div
      ref={box}
      className={cn("relative select-none", onOpen && "cursor-zoom-in touch-pan-y", className)}
      style={style}
      {...pointer}
    >
      <div style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}>{first}</div>
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
        <div className="absolute top-1/2 left-1/2 flex size-g44 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md">
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
        aria-valuetext={`${Math.round(100 - split)}% showing ${labels[1].toLowerCase()}`}
        className={cn("peer absolute inset-0 h-full w-full cursor-ew-resize opacity-0", onOpen && "pointer-events-none")}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-md peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-inset" />

      {/* Keyboard route to opening each side: invisible until focused, never in the pointer's way. */}
      {onOpen &&
        labels.map((name, i) => (
          <button
            key={name}
            type="button"
            onClick={() => onOpen(i as Side)}
            className={cn(
              "pointer-events-none absolute inset-y-0 w-1/2 rounded-md opacity-0 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
              i === 0 ? "left-0" : "right-0"
            )}
          >
            <span className="sr-only">
              Open {name.toLowerCase()} {label} larger
            </span>
          </button>
        ))}
    </div>
  );
}
