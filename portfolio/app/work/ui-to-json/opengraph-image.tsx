import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "UI to JSON — case study by Haye";

export default function Image() {
  return renderOgImage({
    eyebrow: "Production tool · Figma plugin",
    title: "UI to JSON",
    subtitle:
      "A Figma plugin that compiles design files into AI-optimized semantic JSON. Live with 250+ users.",
  });
}
