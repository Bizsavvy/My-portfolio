import React from "react";

interface ImageCalloutsProps {
  /** One decision-pointing line per item. Wrap a phrase in <strong> to emphasise it. */
  items: React.ReactNode[];
}

/**
 * Annotation list that sits under a case-study screenshot. Instead of a plain
 * caption that labels the image, each line points at the design decision the
 * image is making, so the screenshot teaches rather than just proves.
 */
export function ImageCallouts({ items }: ImageCalloutsProps) {
  return (
    <div className="flex flex-col gap-2.5 mt-1">
      {items.map((item, i) => (
        <div
          key={i}
          className="border-l-2 border-[var(--color-accent)] pl-3 font-hanken text-[14px] leading-[1.6] text-[var(--color-body)]"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
