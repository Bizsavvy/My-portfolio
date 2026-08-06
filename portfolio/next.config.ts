import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* AVIF first — typically 20-30% below WebP on UI screenshots. */
    formats: ["image/avif", "image/webp"],
    /* Trimmed from the defaults: nothing here is served above 1920 CSS px. */
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [128, 210, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    /* Next 16 rejects any quality not listed here (default is [75] alone),
       which was returning 400 for every quality={90}/{100} call site. */
    qualities: [75, 90, 100],
    /* Required to serve .svg through the optimizer — the brand guideline
       slides and the Shappay mockups are SVG. These are all first-party files
       in /public, and the CSP below neuters scripting inside them. */
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
