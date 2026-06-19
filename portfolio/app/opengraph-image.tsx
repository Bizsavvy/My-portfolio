import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Haye — Product Designer & Engineer";

export default function Image() {
  return renderOgImage({
    eyebrow: "Portfolio",
    title: "Haye",
    subtitle:
      "Designs and builds consumer & fintech products — from interface to infrastructure.",
  });
}
