interface HomeReelProps {
  /** When provided, renders the muted autoplay reel; otherwise a placeholder. */
  videoSrc?: string;
  poster?: string;
}

// A ~60s muted, text-overlay reel that shows the build → ship loop:
// real product → Figma → code → deployed link. Encountered muted on a laptop,
// so no narration. Drop in a videoSrc when the cut is ready.
export function HomeReel({ videoSrc, poster }: HomeReelProps) {
  return (
    <section id="reel" className="relative z-[5]" style={{ padding: "44px 0" }}>
      <div className="max-w-[var(--width-maxw)] site-wrap flex flex-col gap-6">
        <div className="reveal flex items-baseline justify-between flex-wrap gap-3">
          <h2 className="font-mono text-[12px] tracking-[.08em] uppercase text-[var(--color-accent)]">
            The loop, in 60 seconds
          </h2>
          <span className="font-mono text-[11px] tracking-[.04em] text-[var(--color-muted)]">
            Design → code → deployed · no narration
          </span>
        </div>

        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
            className="reveal w-full rounded-[var(--rad-2xl)] border border-[var(--color-line)] bg-[var(--color-surface)]"
            style={{ aspectRatio: "16 / 9", display: "block", objectFit: "cover" }}
          >
            <source src={videoSrc} />
          </video>
        ) : (
          <div
            className="reveal relative flex items-center justify-center rounded-[var(--rad-2xl)] border border-[var(--color-line)] bg-[var(--color-surface)] overflow-hidden"
            style={{ aspectRatio: "16 / 9" }}
          >
            <div
              className="flex items-center justify-center w-[68px] h-[68px] rounded-full bg-[var(--color-accent)] opacity-70"
              aria-hidden="true"
            >
              <svg width="22" height="26" viewBox="0 0 24 28">
                <polygon points="2,0 24,14 2,28" fill="var(--color-on-accent)" />
              </svg>
            </div>
            <span className="absolute bottom-5 font-mono text-[10px] tracking-[.1em] uppercase text-[var(--color-muted)]">
              60-second reel coming soon
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
