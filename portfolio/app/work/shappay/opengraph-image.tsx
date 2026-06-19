import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Shappay — case study by Haye";

export default function Image() {
  return renderOgImage({
    eyebrow: "Consumer fintech · QR payments",
    title: "Shappay",
    subtitle: "A wallet-first QR payments app on Nigeria's NIBSS NQR rails.",
  });
}
