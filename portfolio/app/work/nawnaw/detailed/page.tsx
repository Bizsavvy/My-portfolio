import type { Metadata } from "next";
import { DetailedCaseStudyPage } from "@/components/case/detailed-case-study-page";
import { nawnawDetailed } from "@/lib/detailed-case-studies";

export const metadata: Metadata = {
  title: "NawNaw, the detailed case study · Haye",
  description:
    "Every major decision in NawNaw's consumer app, from the cart's fee ladder to checkout and delivery, each traced to a business constraint or a user insight.",
};

export default function NawnawDetailedPage() {
  return <DetailedCaseStudyPage study={nawnawDetailed} />;
}
