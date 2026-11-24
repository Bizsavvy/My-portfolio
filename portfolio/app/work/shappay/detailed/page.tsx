import type { Metadata } from "next";
import { DetailedCaseStudyPage } from "@/components/case/detailed-case-study-page";
import { shappayDetailed } from "@/lib/detailed-case-studies";

export const metadata: Metadata = {
  title: "Shappay, the detailed case study · Haye",
  description:
    "How two rounds of usability tests shaped the redesign of Shappay's ways to pay: what failed, what changed, and what the retest found.",
};

export default function ShappayDetailedPage() {
  return <DetailedCaseStudyPage study={shappayDetailed} />;
}
