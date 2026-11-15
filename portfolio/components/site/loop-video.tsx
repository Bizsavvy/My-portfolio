"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import { cn } from "@/lib/utils";

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// The server can't know; assume reduced so nothing autoplays before hydration.
const reducedOnServer = () => true;

type Props = {
  src: string;
  poster: string;
  /** Describes the loop for screen readers. */
  label: string;
  /** Classes for the wrapper, which the video fills; it sets the size. */
  className?: string;
  /** CSS object-position, e.g. "bottom" to keep a footer in frame. */
  focus?: string;
  /** Extra classes for the pause button, e.g. to lift it above a card's stretched link. */
  controlClassName?: string;
  style?: CSSProperties;
};

/**
 * A silent looping clip (Docs/Design-System.md, Motion). It plays only while on screen,
 * every visitor can pause it (WCAG 2.2.2), and with reduced motion it shows the poster and
 * waits for a tap.
 */
export function LoopVideo({ src, poster, label, className, focus = "center", controlClassName, style }: Props) {
  const video = useRef<HTMLVideoElement>(null);
  const reduced = useSyncExternalStore(subscribeReducedMotion, prefersReducedMotion, reducedOnServer);
  const [pausedByVisitor, setPausedByVisitor] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = video.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = video.current;
    if (!el) return;
    if (onScreen && !pausedByVisitor && !reduced) {
      el.play().catch(() => {
        // Autoplay can be refused (data saver, some browsers); the poster stays and the button still works.
      });
    } else if (!onScreen || pausedByVisitor) {
      el.pause();
    }
  }, [onScreen, pausedByVisitor, reduced]);

  const toggle = () => {
    const el = video.current;
    if (!el) return;
    if (playing) {
      setPausedByVisitor(true);
      el.pause();
    } else {
      setPausedByVisitor(false);
      el.play().catch(() => {});
    }
  };

  return (
    <div className={cn("relative", className)} style={style}>
      <video
        ref={video}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: focus }}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <Button
        type="button"
        variant="secondary"
        size="icon"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className={cn("absolute right-g10 bottom-g10 bg-raised/80 backdrop-blur-md", controlClassName)}
      >
        {playing ? <Pause aria-hidden /> : <Play aria-hidden />}
      </Button>
    </div>
  );
}
