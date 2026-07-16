import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { qualityTimeline, qualityStatement } from "@/data/quality";

export function QualityPreview() {
  return (
    <section className="bg-paper py-24 text-paper-foreground md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel index="06" label="Quality Control" tone="light" className="mb-6" />
            <h2 className="max-w-3xl text-balance font-display text-3xl font-bold leading-[1.15] tracking-tight md:text-5xl">
              &ldquo;{qualityStatement}&rdquo;
            </h2>
          </div>
          <div className="flex shrink-0 flex-wrap gap-4">
            <Button href="/quality-control" variant="outline-light">
              View Quality Process
            </Button>
            <Button href="/contact?purpose=documents" variant="ghost-light" showArrow={false}>
              Request Quality Documents
            </Button>
          </div>
        </div>

        <div className="mt-16 overflow-x-auto">
          <div className="relative flex w-max min-w-full gap-0 border-t border-line-light pt-8">
            {qualityTimeline.map((stage) => (
              <RevealOnScroll key={stage.index} amount={0.4} className="w-[64vw] shrink-0 border-r border-line-light px-6 first:pl-0 last:border-r-0 sm:w-[38vw] lg:w-[16.5%] lg:px-6">
                <span className="block font-mono text-xs text-accent">{stage.index}</span>
                <h3 className="mt-3 font-display text-base font-semibold leading-snug">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-foreground/60">{stage.description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
