/**
 * Canonical base URL for the site.
 *
 * Resolution order:
 *   1. NEXT_PUBLIC_SITE_URL          — set this to pin a custom domain.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — auto-provided by Vercel on prod builds.
 *   3. localhost                     — dev fallback.
 *
 * Used for metadataBase (canonical + absolute OG image URLs), sitemap, robots.
 */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000")
);

export const siteName = "Haye — Product Designer & Engineer";
