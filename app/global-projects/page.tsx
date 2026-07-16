import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PageHero } from "@/components/layout/PageHero";
import { GlobalProjectsMap } from "@/components/projects/GlobalProjectsMap";

export const metadata: Metadata = {
  title: "Global Projects",
  description:
    "Explore FORJEN roll forming equipment and aerial work platform deployments across regions worldwide.",
};

export default function GlobalProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Projects"
        title={["Equipment Delivered", "Around the World."]}
        intro="Filter by region to explore where FORJEN equipment has been deployed, the divisions involved, and the outcomes for our customers."
      />

      <section className="bg-ink pb-28">
        <Container>
          <SectionLabel index="02" label="Project Map" className="mb-10" />
          <GlobalProjectsMap />
        </Container>
      </section>
    </>
  );
}
