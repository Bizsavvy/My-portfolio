import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case/case-study-page";
import { shappay } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Shappay: redesigning the ways to pay · Haye",
  description:
    "A usability test showed people couldn't find Shappay's ways to pay. The redesign took paying by scan from 5/8 to 8/8 testers.",
};

export default function ShappayPage() {
  return <CaseStudyPage study={shappay} />;
}
