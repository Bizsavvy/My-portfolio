/**
 * Single source of truth for outbound personal links.
 *
 * Anything left as an empty string is skipped by the UI rather than rendered as
 * a dead link. `x` holds the bare handle; the URL is built in `socialLinks`.
 */
export const links: Record<
  "email" | "linkedin" | "github" | "x" | "resume",
  string
> = {
  email: "binjobiz@gmail.com",
  linkedin: "https://www.linkedin.com/in/haye-binjo",
  github: "https://github.com/Bizsavvy",
  x: "savvy_haye",
  resume:
    "https://docs.google.com/document/d/1S0Aeao4v1IIJ6ssy5Mt5nDQFr8238cZhUj65FYg6tN0/view?usp=sharing",
};

export interface SocialLink {
  label: string;
  href: string;
}

/** Ordered social links, with the unset ones dropped. */
export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: links.linkedin },
  { label: "X", href: links.x ? `https://x.com/${links.x.replace(/^@/, "")}` : "" },
  { label: "GitHub", href: links.github },
  { label: "Email", href: links.email ? `mailto:${links.email}` : "" },
].filter((l) => l.href !== "");
