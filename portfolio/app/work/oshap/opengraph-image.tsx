import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Oshap — case study by Haye";

export default function Image() {
  return renderOgImage({
    eyebrow: "QR ordering · Restaurants & bars",
    title: "Oshap",
    subtitle:
      "A QR-first ordering and payment platform for restaurants and bars — built end to end.",
  });
}
