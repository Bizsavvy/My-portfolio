import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Decision Log — Haye";

export default function Image() {
  return renderOgImage({
    eyebrow: "How I think · every project",
    title: "Decisions",
    subtitle:
      "The hard calls behind the products — the constraint, and what I chose.",
  });
}
