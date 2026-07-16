import type { Metadata } from "next";
import { TowerControl } from "lucide-react";
import { DivisionPageContent } from "@/components/business/DivisionPageContent";
import { businessDivisions } from "@/data/site";

export const metadata: Metadata = {
  title: "Heavy-duty Aerial Work Platforms",
  description:
    "Heavy-duty aerial work platforms from FORJEN — access solutions engineered for demanding industrial and construction environments.",
};

export default function AerialWorkPlatformsPage() {
  return (
    <DivisionPageContent
      division={businessDivisions.aerialWorkPlatforms}
      icon={TowerControl}
      title={["Heavy-duty Aerial", "Work Platforms."]}
      intro="Heavy-duty access solutions designed for demanding industrial and construction environments — built to the same standard as every FORJEN machine."
    />
  );
}
