import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { Button } from "@/components/ui/Button";
import type { businessDivisions } from "@/data/site";

export function DivisionPageContent({
  division,
  icon: Icon,
  title,
  intro,
}: {
  division: (typeof businessDivisions)[keyof typeof businessDivisions];
  icon: LucideIcon;
  title: string[];
  intro: string;
}) {
  return (
    <>
      <PageHero eyebrow="Business Division" title={title} intro={intro} />

      <section className="bg-ink py-8 md:py-16">
        <Container>
          <div className="overflow-hidden" style={{ aspectRatio: division.media.aspect ?? "1185/559" }}>
            <PlaceholderMedia media={division.media} icon={Icon} tone="accent" />
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionLabel index="02" label="Capability Overview" className="mb-6" />
            <p className="max-w-md text-base leading-relaxed text-ink-foreground/60">{division.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact?purpose=factory-visit" variant="primary">
                Book a Factory Tour
              </Button>
              <a
                href={division.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-foreground hover:text-accent"
              >
                Visit Dedicated Site
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <ul className="space-y-5">
              {division.highlights.map((point) => (
                <RevealOnScroll key={point} as="li" className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                  <span className="text-sm leading-relaxed text-ink-foreground/70">{point}</span>
                </RevealOnScroll>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-ink pb-28">
        <Container className="flex flex-col items-start gap-6 border-t border-line-dark pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-balance font-display text-2xl font-semibold text-ink-foreground">
            Talk to our team about {division.shortName.toLowerCase()} for your project.
          </p>
          <Button href="/contact" variant="outline-dark">
            Contact FORJEN
          </Button>
        </Container>
      </section>
    </>
  );
}
