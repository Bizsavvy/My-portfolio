import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "NawNaw: a cart that does the maths. A case study by Haye";

export default function Image() {
  return renderOgImage({
    eyebrow: "Quick commerce · Concept",
    title: "NawNaw",
    subtitle: "A cart that does the maths.",
  });
}
