import { Cog } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { Button } from "@/components/ui/Button";
import { manufacturingProcess } from "@/data/manufacturing";

export function ManufacturingPreview() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel index="04" label="Manufacturing Capability" className="mb-6" />
            <h2 className="max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-foreground md:text-5xl">
              Two plants. Eight controlled stages. One standard of precision.
            </h2>
          </div>
          <Button href="/manufacturing" variant="outline-dark" className="shrink-0">
            Explore Manufacturing
          </Button>
        </div>
      </Container>

      <div className="mt-14 overflow-x-auto pb-4">
        <div className="flex w-max gap-5 px-6 md:px-10 xl:px-16">
          {manufacturingProcess.map((step) => (
            <RevealOnScroll
              key={step.index}
              amount={0.2}
              className="w-[78vw] shrink-0 sm:w-[46vw] lg:w-[24vw]"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <PlaceholderMedia media={step.media} icon={Cog} index={step.index} />
              </div>
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-accent">{step.index}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/60">{step.description}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
