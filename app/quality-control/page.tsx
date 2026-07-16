import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { qualityTimeline, qualityStatement } from "@/data/quality";

export const metadata: Metadata = {
  title: "Quality Control",
  description:
    "FORJEN's quality control system runs from incoming material inspection through to final delivery inspection — quality is controlled at every stage.",
};

export default function QualityControlPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality Control"
        title={["Controlled at Every", "Stage of Production."]}
        intro={qualityStatement}
      />

      <section className="bg-ink py-20 md:py-28">
        <Container>
          <SectionLabel index="02" label="Quality Control Timeline" className="mb-12" />
          <div className="relative border-l border-line-dark pl-8">
            {qualityTimeline.map((stage) => (
              <RevealOnScroll key={stage.index} amount={0.4} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[calc(2rem+5px)] top-1 size-2.5 rounded-full bg-accent" aria-hidden />
                <span className="font-mono text-xs text-accent">{stage.index}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink-foreground">{stage.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-foreground/60">{stage.description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink pb-28">
        <Container className="flex flex-col items-start gap-6 border-t border-line-dark pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-balance font-display text-2xl font-semibold text-ink-foreground">
            Request our quality documentation, or schedule a live video inspection.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact?purpose=documents" variant="primary">
              Request Quality Documents
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
