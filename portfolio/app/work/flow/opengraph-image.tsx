import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Flow — brand identity by Haye";

export default function Image() {
  return renderOgImage({
    eyebrow: "Brand identity · Period care",
    title: "Flow",
    subtitle:
      "A complete brand identity system for a modern period-care brand.",
  });
}
