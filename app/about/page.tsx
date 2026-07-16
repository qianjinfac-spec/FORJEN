import type { Metadata } from "next";
import { Factory, TowerControl, Target, Users, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { Button } from "@/components/ui/Button";
import { businessDivisions } from "@/data/site";
import { manufacturingPlants } from "@/data/manufacturing";

export const metadata: Metadata = {
  title: "About FORJEN",
  description:
    "FORJEN is an industrial manufacturer of roll forming equipment and heavy-duty aerial work platforms, built on precision manufacturing and long-term partnership.",
};

const values = [
  { icon: Target, title: "Precision", description: "Every unit is manufactured and inspected against a fixed engineering standard." },
  { icon: Users, title: "Partnership", description: "We build relationships with distributors and customers built to last beyond a single order." },
  { icon: Globe2, title: "Reliability", description: "Equipment engineered to perform in demanding conditions, wherever it is deployed." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About FORJEN"
        title={["An Industrial Group", "Built on Precision."]}
        intro="FORJEN designs and manufactures roll forming equipment and heavy-duty aerial work platforms — engineered in-house, tested rigorously, and delivered to customers worldwide."
      />

      <section className="bg-ink py-8 md:py-16">
        <Container className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <SectionLabel index="02" label="Our Story" className="mb-6" />
            <h2 className="text-balance font-display text-3xl font-bold leading-tight text-ink-foreground md:text-4xl">
              TODO — founding story and development milestones.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-ink-foreground/60 md:col-span-6 md:col-start-7">
            <p>
              TODO — replace with FORJEN&apos;s real founding story: when the company was
              established, the problem it set out to solve, and how the business has grown since.
            </p>
            <p>
              TODO — describe key milestones: expansion into a second manufacturing base, entry
              into new markets, and the development of the Heavy-duty Aerial Work Platforms
              division alongside Roll Forming Equipment.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 md:py-28">
        <Container>
          <SectionLabel index="03" label="Two Manufacturing Bases" className="mb-10" />
          <div className="grid gap-8 md:grid-cols-2">
            {manufacturingPlants.map((plant) => (
              <RevealOnScroll key={plant.id}>
                <div className="aspect-[4/3] overflow-hidden">
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

      <section className="bg-paper py-20 text-paper-foreground md:py-28">
        <Container>
          <SectionLabel index="04" label="Mission & Values" tone="light" className="mb-10" />
          <div className="grid gap-px overflow-hidden rounded-sm border border-line-light bg-line-light md:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <RevealOnScroll key={title} className="bg-paper p-8">
                <Icon className="size-6 text-accent" aria-hidden strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-foreground/60">{description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 md:py-28">
        <Container>
          <SectionLabel index="05" label="Leadership" className="mb-10" />
          <div className="max-w-2xl">
            <p className="text-base leading-relaxed text-ink-foreground/60">
              TODO — introduce the management and engineering leadership team once profiles and
              photography are approved for publication.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 md:py-28">
        <Container>
          <SectionLabel index="06" label="Business Divisions" className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { ...businessDivisions.rollForming, icon: Factory },
              { ...businessDivisions.aerialWorkPlatforms, icon: TowerControl },
            ].map(({ icon: Icon, ...division }) => (
              <RevealOnScroll key={division.href} className="rounded-sm border border-line-dark p-8">
                <Icon className="size-6 text-accent" aria-hidden strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl font-semibold text-ink-foreground">{division.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-foreground/60">{division.description}</p>
                <Button href={division.href} variant="ghost-dark" className="mt-6 px-0">
                  Explore Division
                </Button>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink pb-28">
        <Container>
          <SectionLabel index="07" label="Global Vision" className="mb-6" />
          <p className="max-w-2xl text-balance font-display text-2xl font-semibold leading-snug text-ink-foreground md:text-3xl">
            We&apos;re building FORJEN into a long-term engineering partner for customers,
            distributors and contractors across every region we serve.
          </p>
        </Container>
      </section>
    </>
  );
}
