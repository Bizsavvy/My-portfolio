"use client";
import { useEffect, useRef } from "react";

export function usePrefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useGsap(fn: () => (() => void) | void, deps: unknown[] = []) {
  const ran = useRef(false);
  useEffect(() => {
    if (ran.current) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    ran.current = true;
    const cleanup = fn();
    return () => {
      if (cleanup) cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
