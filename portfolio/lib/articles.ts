export type ArticleKind = "Case study" | "Design essay" | "Decision log";

export interface ArticleMeta {
  /** Route segment under /articles, or "" for entries that live elsewhere. */
  slug: string;
  title: string;
  kind: ArticleKind;
  /** Display date. Sorted by `order`, not parsed from this. */
  date: string;
  /** Two or three lines. What the piece argues, not what the product is. */
  abstract: string;
  /** Where the piece lives. */
  href: string;
  /** The project this write-up belongs to, when there is one. */
  projectHref?: string;
  projectLabel?: string;
  /** Higher sorts first. Keeps ordering explicit rather than date-parsed. */
  order: number;
}

/**
 * Every long-form written piece, newest first. The visual case studies live at
 * /work/[slug]; these are the full written versions for anyone who wants the
 * reasoning rather than the highlight reel.
 */
export const articles: ArticleMeta[] = [
  {
    slug: "nawnaw",
    title: "Designing a 15-minute grocery run",
    kind: "Case study",
    date: "June 2026",
    abstract:
      "A dark-store model for Nigerian tier-1 cities, and why the hard part was never the app. Two weeks from blank file to a working concept, including the guest-checkout argument.",
    href: "/articles/nawnaw",
    projectHref: "/work/nawnaw",
    projectLabel: "NawNaw",
    order: 60,
  },
  {
    slug: "flow",
    title: "Building a brand around a leaf and a droplet",
    kind: "Design essay",
    date: "April 2026",
    abstract:
      "A period-care identity that had to read as calm without reading as clinical. On Cheerful Violet, integrating a mark into a wordmark, and writing guidelines somebody will actually follow.",
    href: "/articles/flow",
    projectHref: "/work/flow",
    projectLabel: "Flow",
    order: 50,
  },
  {
    slug: "ui-to-json",
    title: "A plugin for designers who think in systems",
    kind: "Case study",
    date: "2026",
    abstract:
      "Converting Figma UI into code-ready JSON, and what 250+ users taught me about the gap between a design file and a build. Includes the schema decisions I got wrong first.",
    href: "/articles/ui-to-json",
    projectHref: "/work/ui-to-json",
    projectLabel: "UI to JSON",
    order: 40,
  },
  {
    slug: "shappay",
    title: "Paying by square: QR rails for Nigerian merchants",
    kind: "Case study",
    date: "2025 – present",
    abstract:
      "Why an interoperable QR is public infrastructure rather than another silo, the pivot into holding balances, and the compliance surface that came with it.",
    href: "/articles/shappay",
    projectHref: "/work/shappay",
    projectLabel: "Shappay",
    order: 30,
  },
  {
    slug: "oshap",
    title: "No app, no login, no waiter",
    kind: "Case study",
    date: "2025 – present",
    abstract:
      "Scan-to-order for restaurants, and the three-surface problem: a customer app, a kitchen view, and an admin dashboard that all had to agree about one order.",
    href: "/articles/oshap",
    projectHref: "/work/oshap",
    projectLabel: "Oshap",
    order: 20,
  },
  {
    slug: "",
    title: "Decision log",
    kind: "Decision log",
    date: "Living document",
    abstract:
      "The hard calls behind five products and this site, each in two lines: the constraint, and what I chose. Updated as decisions get made.",
    href: "/decisions",
    order: 10,
  },
];

export const sortedArticles = [...articles].sort((a, b) => b.order - a.order);

export function getArticle(slug: string): ArticleMeta | undefined {
  return articles.find((a) => a.slug === slug);
}
