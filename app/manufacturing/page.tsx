import type { Metadata } from "next";
import { Factory } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { Button } from "@/components/ui/Button";
import { ProcessNarrative } from "@/components/manufacturing/ProcessNarrative";
import { manufacturingPlants } from "@/data/manufacturing";

export const metadata: Metadata = {
  title: "Manufacturing Capability",
  description:
    "Explore FORJEN's manufacturing capability across two plants — from material preparation and laser cutting to robotic welding, assembly and final acceptance.",
};

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing Capability"
        title={["Manufacturing Built", "for Consistency."]}
        intro="Two manufacturing bases, one engineering standard. Every FORJEN unit passes through the same eight controlled production stages before it reaches a customer."
      />

      <section className="bg-ink py-8 md:py-16">
        <Container>
          <SectionLabel index="02" label="Our Plants" className="mb-10" />
          <div className="grid gap-8 md:grid-cols-2">
            {manufacturingPlants.map((plant) => (
              <RevealOnScroll key={plant.id}>
                <div className="aspect-[16/10] overflow-hidden">
                  <PlaceholderMedia media={plant.media} icon={Factory} />
                </div>
                <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-accent">{plant.focus}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink-foreground">{plant.name}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-foreground/60">{plant.description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 md:py-28">
        <Container>
          <SectionLabel index="03" label="Production Process" className="mb-10" />
          <ProcessNarrative />
        </Container>
      </section>

      <section className="bg-ink pb-28">
        <Container className="flex flex-col items-start gap-6 border-t border-line-dark pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-balance font-display text-2xl font-semibold text-ink-foreground">
            See our manufacturing capability in person, or by live video.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact?purpose=factory-visit" variant="primary">
              Book a Factory Tour
            </Button>
            <Button href="/contact?purpose=video-inspection" variant="outline-dark">
              Schedule a Video Inspection
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
