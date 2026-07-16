import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  intro,
  tone = "dark",
}: {
  eyebrow: string;
  title: string[];
  intro?: string;
  tone?: "dark" | "light";
}) {
  return (
    <section className={cn("pb-16 pt-40 md:pb-24 md:pt-48", tone === "dark" ? "bg-ink" : "bg-paper")}>
      <Container>
        <SectionLabel index="01" label={eyebrow} tone={tone} className="mb-8" />
        <RevealText
          as="h1"
          lines={title}
          className={cn(
            "max-w-4xl font-display text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl",
            tone === "dark" ? "text-ink-foreground" : "text-paper-foreground",
          )}
        />
        {intro && (
          <RevealOnScroll delay={0.2}>
            <p
              className={cn(
                "mt-8 max-w-xl text-balance text-base leading-relaxed md:text-lg",
                tone === "dark" ? "text-ink-foreground/70" : "text-paper-foreground/70",
              )}
            >
              {intro}
            </p>
          </RevealOnScroll>
        )}
      </Container>
    </section>
  );
}
