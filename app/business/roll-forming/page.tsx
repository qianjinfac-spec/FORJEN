import type { Metadata } from "next";
import { Factory } from "lucide-react";
import { DivisionPageContent } from "@/components/business/DivisionPageContent";
import { businessDivisions } from "@/data/site";

export const metadata: Metadata = {
  title: "Roll Forming Equipment",
  description:
    "Advanced roll forming equipment from FORJEN — cold roll forming and roofing sheet forming machines for roofing, construction and custom metal profiles.",
};

export default function RollFormingPage() {
  return (
    <DivisionPageContent
      division={businessDivisions.rollForming}
      icon={Factory}
      title={["Roll Forming", "Equipment."]}
      intro="Advanced forming systems for roofing, construction and customized metal profiles — engineered and manufactured in-house."
    />
  );
}
