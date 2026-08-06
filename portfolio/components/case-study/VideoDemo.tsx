import { Kicker } from "@/components/ui/Kicker";
import Image from "next/image";

interface VideoDemoProps {
  kicker?: string;
  heading?: string;
  description?: string;
  /** Flow caption under the player, e.g. "Scan → Resolve → Confirmation" */
  flowCaption?: string;
  /** When provided, renders a real <video> player instead of the placeholder. */
  videoSrc?: string;
  /** When provided, renders a Vimeo iframe player instead of the placeholder. */
  vimeoSrc?: string;
  poster?: string;
  /** Live prototype link. Omit to render the CTA in a disabled "coming soon" state. */
  liveHref?: string;
  /** Expo Go / secondary link. Omit to disable. */
  secondaryHref?: string;
  secondaryLabel?: string;
  secondaryNote?: string;
  /** When true, renders the video/vimeo inside an iPhone frame instead of a landscape rectangle. */
  isMobile?: boolean;
}

export function VideoDemo({
  kicker = "Experience",
  heading = "See it in motion.",
  description = "A 60-second walkthrough of the core payment loop: scan, resolve, and settle. Running on the actual React Native build.",
  flowCaption = "Scan → Resolve → Wallet debit → Confirmation",
  videoSrc,
  vimeoSrc,
  poster,
  liveHref,
  secondaryHref,
  secondaryLabel = "Open in Expo Go",
  secondaryNote = "Scan the QR with Expo Go to run the real app on your phone",
  isMobile = false,
}: VideoDemoProps) {
  return (
    <section
      className="relative z-[5] border-t border-[var(--color-line)]"
      style={{ padding: "62px 0" }}
    >
      <div className="cs-wrap flex flex-col gap-6">
        <div className={`flex flex-col gap-6 reveal ${isMobile ? "items-center text-center mx-auto" : ""}`}>
          <Kicker>{kicker}</Kicker>
          <h2
            className="font-hanken font-bold tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1.08 }}
          >
            {heading}
          </h2>
        </div>

        <p 
          className={`font-hanken text-[16px] leading-[1.65] text-[var(--color-body)] reveal ${isMobile ? "text-center mx-auto" : ""}`}
          style={isMobile ? { maxWidth: "50ch" } : undefined}
        >
          {description}
        </p>

        {vimeoSrc && isMobile ? (
          <div className="reveal mx-auto relative w-full max-w-[320px] sm:max-w-[360px]" style={{ aspectRatio: "416.35 / 849.04" }}>
            <div
              style={{
                position: "absolute",
                left: "4.7544%",
                top: "1.9958%",
                width: "90.491%",
                height: "96.008%",
                borderRadius: "10%",
                overflow: "hidden",
                background: "#000",
                zIndex: 1,
              }}
            >
              <iframe
                src={vimeoSrc}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            {/* iPhone Image overlay */}
            <Image
              src="/assets/oshap/iPhone frame.webp"
              alt="iPhone frame"
              fill
              priority
              quality={100}
              style={{ pointerEvents: "none", zIndex: 10, objectFit: "contain" }}
            />
          </div>
        ) : vimeoSrc ? (
          <div className="relative w-full rounded-[var(--rad-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] overflow-hidden reveal" style={{ aspectRatio: "16 / 9" }}>
            <iframe
              src={vimeoSrc}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        ) : videoSrc && isMobile ? (
          <div className="reveal mx-auto relative w-full max-w-[320px] sm:max-w-[360px]" style={{ aspectRatio: "416.35 / 849.04" }}>
            <div
              style={{
                position: "absolute",
                left: "4.7544%",
                top: "1.9958%",
                width: "90.491%",
                height: "96.008%",
                borderRadius: "10%",
                overflow: "hidden",
                background: "#000",
                zIndex: 1,
              }}
            >
              <video
                controls
                controlsList="nodownload"
                playsInline
                preload="metadata"
                poster={poster}
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src={videoSrc} />
              </video>
            </div>
            {/* iPhone Image overlay */}
            <Image
              src="/assets/oshap/iPhone frame.webp"
              alt="iPhone frame"
              fill
              priority
              quality={100}
              style={{ pointerEvents: "none", zIndex: 10, objectFit: "contain" }}
            />
          </div>
        ) : videoSrc ? (
          <video
            controls
            controlsList="nodownload"
            playsInline
            preload="metadata"
            poster={poster}
            className="w-full rounded-[var(--rad-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] reveal"
            style={{ aspectRatio: "16 / 9", display: "block" }}
          >
            <source src={videoSrc} />
          </video>
        ) : (
          <div className="relative flex items-center justify-center rounded-[var(--rad-2xl)] border border-[var(--color-border-strong)] bg-[var(--color-surface)] h-[300px] md:h-[520px] reveal overflow-hidden">
            <div
              className="flex items-center justify-center w-[72px] h-[72px] rounded-full bg-[var(--color-accent)] opacity-70"
              aria-hidden="true"
            >
              <svg width="24" height="28" viewBox="0 0 24 28">
                <polygon points="2,0 24,14 2,28" fill="var(--color-on-accent)" />
              </svg>
            </div>
            <span className="absolute bottom-4 font-mono text-[10px] tracking-[.1em] uppercase text-[var(--color-muted)]">
              Walkthrough coming soon
            </span>
          </div>
        )}

        <p className={`font-mono text-[10px] tracking-[.05em] text-[var(--color-muted)] reveal ${isMobile ? "text-center" : ""}`}>
          {flowCaption}
        </p>

        <div className={`flex flex-col sm:flex-row sm:items-center gap-4 pt-[10px] reveal ${isMobile ? "justify-center" : ""}`}>
          {liveHref && (
            <a
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-[26px] py-[14px] rounded-full bg-[var(--color-accent)] font-mono font-medium text-[14px] tracking-[.04em] text-[var(--color-on-accent)] transition-all duration-[280ms] hover:-translate-y-0.5 whitespace-nowrap"
            >
              Try the live demo →
            </a>
          )}

          {secondaryHref && (
            <a
              href={secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-[26px] py-[14px] rounded-full border border-[var(--color-border-strong)] font-mono text-[12px] text-[var(--color-text)] transition-colors duration-[250ms] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] whitespace-nowrap"
            >
              {secondaryLabel}
            </a>
          )}

          {secondaryHref && (
            <span className="font-hanken text-[14px] leading-[1.6] text-[var(--color-muted)]">
              {secondaryNote}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
