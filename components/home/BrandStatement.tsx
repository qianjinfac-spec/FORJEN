import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function BrandStatement() {
  return (
    <section className="bg-ink py-28 md:py-36">
      <Container>
        <SectionLabel index="02" label="Our Philosophy" className="mb-10" />
        <RevealText
          as="h2"
          lines={["We don't just build machines.", "We build reliability."]}
          className="max-w-5xl font-display text-4xl font-black leading-[1.1] tracking-tight text-ink-foreground sm:text-6xl lg:text-7xl"
        />
        <RevealOnScroll delay={0.1} className="mt-10 grid gap-8 md:grid-cols-12">
          <p className="text-balance font-display text-xl font-medium leading-snug text-ink-foreground/80 md:col-span-5 md:text-2xl">
            Two manufacturing bases. One engineering standard.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-ink-foreground/60 md:col-span-6 md:col-start-7">
            FORJEN designs and manufactures roll forming equipment and heavy-duty aerial work
            platforms for engineering companies, government projects, distributors and contractors
            worldwide. Every unit is built on the same foundation — disciplined manufacturing,
            in-house engineering and quality control that runs through every stage of production,
            not just the final inspection. It&apos;s an approach built for long-term partnership, not a
            single transaction.
          </p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
