"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  line: string;
  src: string;
  poster: string;
  /** Describes the loop for screen readers. */
  label: string;
  link?: { href: string; text: string };
  /** CSS object-position for the video, e.g. "bottom" to keep a footer in frame. */
  focus?: string;
  className?: string;
};

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// The server can't know; assume reduced so nothing autoplays before hydration.
const reducedOnServer = () => true;

/**
 * A silent looping clip (Docs/Design-System.md, Motion). It plays only while on screen,
 * every visitor can pause it (WCAG 2.2.2), and with reduced motion it shows the poster
 * and waits for a tap.
 */
export function MotionTile({ title, line, src, poster, label, link, focus = "center", className }: Props) {
  const video = useRef<HTMLVideoElement>(null);
  const reduced = useSyncExternalStore(subscribeReducedMotion, prefersReducedMotion, reducedOnServer);
  const [pausedByVisitor, setPausedByVisitor] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [playing, setPlaying] = useState(false);

  // Only spend battery and data on tiles in view.
  useEffect(() => {
    const el = video.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Autoplay only when visible, not paused by the visitor, and motion isn't reduced.
  // With reduced motion, playback starts only from the play button.
  useEffect(() => {
    const el = video.current;
    if (!el) return;
    if (onScreen && !pausedByVisitor && !reduced) {
      el.play().catch(() => {
        // Autoplay can be refused (data saver). The poster stays and the button offers play.
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
    <div className={cn("flex flex-col overflow-hidden rounded-lg bg-card text-card-foreground", className)}>
      <div className="relative">
        <video
          ref={video}
          className="aspect-video w-full object-cover"
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
          className="absolute right-g10 bottom-g10 bg-raised/80 backdrop-blur-md"
        >
          {playing ? <Pause aria-hidden /> : <Play aria-hidden />}
        </Button>
      </div>
      <div className="flex flex-col gap-g6 p-g17">
        <h3 className="text-title text-foreground">{title}</h3>
        <p className="text-body text-muted-foreground">{line}</p>
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-g10 inline-flex w-fit items-center gap-g4 rounded-sm text-button text-brand-text underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {link.text}
            <ArrowUpRight aria-hidden className="size-4" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>
    </div>
  );
}
