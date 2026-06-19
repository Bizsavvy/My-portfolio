import { ImageResponse } from "next/og";

// Brand tokens (dark theme), inlined because ImageResponse can't read CSS vars.
const INK = "#0c0c0a";
const LIME = "#c7f94b";
const TEXT = "#eceae0";
const MUTED = "#79786c";
const LINE = "#26261f";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Renders the shared social-share card. One layout, per-route copy.
 */
export function renderOgImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: INK,
          padding: "72px 80px",
          overflow: "hidden",
        }}
      >
        {/* faint corner accent — a solid block resvg renders reliably */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: LIME,
            opacity: 0.07,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: LIME,
            fontFamily: "monospace",
          }}
        >
          {eyebrow}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 16 ? 96 : 128,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -3,
              color: TEXT,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              lineHeight: 1.35,
              color: MUTED,
              maxWidth: 880,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${LINE}`,
            paddingTop: 28,
            fontSize: 26,
            fontFamily: "monospace",
            color: TEXT,
          }}
        >
          <span style={{ display: "flex" }}>Haye</span>
          <span style={{ display: "flex", color: MUTED }}>
            Product Designer &amp; Engineer
          </span>
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
