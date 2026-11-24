import type { Metadata } from "next";
import { DetailedCaseStudyPage } from "@/components/case/detailed-case-study-page";
import { oshapDetailed } from "@/lib/detailed-case-studies";

export const metadata: Metadata = {
  title: "Oshap, the detailed case study · Haye",
  description:
    "How Oshap's design system makes any restaurant colour readable, and how its surfaces, spacing and colour meaning were rebuilt, including one decision reversed the same afternoon.",
};

export default function OshapDetailedPage() {
  return <DetailedCaseStudyPage study={oshapDetailed} />;
}
