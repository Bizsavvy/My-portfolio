"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // quickTo for high performance, spring-like tracking
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[100] transition-opacity duration-300 hidden md:block ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative" style={{ left: "-4px", top: "-4px" }}>
        {/* The dot exactly centered on the cursor */}
        <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]" />
        
        {/* The 'You' pill positioned below the dot */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 ts-tag bg-[var(--color-surface-elevated)] text-[var(--color-text-primary)] border border-[var(--color-accent)] rounded-[20px] px-2 py-[2px] whitespace-nowrap shadow-lg">
          You
        </div>
      </div>
    </div>
  );
}
