import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/case/case-study-page";
import { nawnaw } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "NawNaw: a cart that does the maths · Haye",
  description:
    "A sub-15-minute grocery delivery concept for Nigeria, where every fee rule in the cart traces to the business's break-even model.",
};

export default function NawnawPage() {
  return <CaseStudyPage study={nawnaw} />;
}
