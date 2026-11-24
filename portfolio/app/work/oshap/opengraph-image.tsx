import { renderOgImage, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Oshap — case study by Haye";

export default function Image() {
  return renderOgImage({
    eyebrow: "Design system · Restaurant ordering",
    title: "Oshap",
    subtitle: "Foundations and colour for a multi-brand product.",
  });
}
