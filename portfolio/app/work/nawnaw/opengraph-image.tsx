import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "NawNaw — case study by Haye";

export default function Image() {
  return renderOgImage({
    eyebrow: "Quick commerce · Concept",
    title: "NawNaw",
    subtitle: "Designing Nigeria's 15-minute essentials run.",
  });
}
