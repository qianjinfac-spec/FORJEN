import { Hero } from "@/components/home/Hero";
import { BrandStatement } from "@/components/home/BrandStatement";
import { BusinessDivisionsSection } from "@/components/home/BusinessDivisionsSection";
import { ManufacturingPreview } from "@/components/home/ManufacturingPreview";
import { RnDPreview } from "@/components/home/RnDPreview";
import { QualityPreview } from "@/components/home/QualityPreview";
import { GlobalProjectsPreview } from "@/components/home/GlobalProjectsPreview";
import { FactoryVisitCTA } from "@/components/home/FactoryVisitCTA";
import { CompanyDocuments } from "@/components/home/CompanyDocuments";
import { NewsPreview } from "@/components/home/NewsPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <BusinessDivisionsSection />
      <ManufacturingPreview />
      <RnDPreview />
      <QualityPreview />
      <GlobalProjectsPreview />
      <FactoryVisitCTA />
      <CompanyDocuments />
      <NewsPreview />
    </>
  );
}
