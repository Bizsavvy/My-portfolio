"use client";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "lazy" | "eager";
}

/**
 * A thumbnail image that opens a full-size, click-to-close lightbox overlay.
 * Drop-in replacement for a plain <img>: pass the same src/alt/className/style.
 */
export function LightboxImage({ src, alt, className, style, loading = "lazy" }: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={className}
        style={{ cursor: "zoom-in", ...style }}
        role="button"
        tabIndex={0}
        aria-label={`${alt} — click to enlarge`}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      />

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={close}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              background: "rgba(0,0,0,0.86)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(16px,4vw,64px)",
              cursor: "zoom-out",
              animation: "lbx-fade .18s ease",
            }}
          >
            <button
              onClick={close}
              aria-label="Close"
              style={{
                position: "fixed",
                top: 20,
                right: 24,
                width: 40,
                height: 40,
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(0,0,0,0.4)",
                color: "rgba(255,255,255,0.9)",
                fontSize: 22,
                lineHeight: 1,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                borderRadius: 12,
                boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
                cursor: "default",
              }}
            />

            <style>{`@keyframes lbx-fade{from{opacity:0}to{opacity:1}}`}</style>
          </div>,
          document.body
        )}
    </>
  );
}
