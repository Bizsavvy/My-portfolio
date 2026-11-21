import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case/case-study-page";
import { oshap } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Oshap: foundations and colour for a multi-brand product · Haye",
  description:
    "A design system for restaurant ordering that keeps any brand colour readable, then fixes the surfaces, spacing and colour meaning underneath.",
};

export default function OshapPage() {
  return <CaseStudyPage study={oshap} />;
}
