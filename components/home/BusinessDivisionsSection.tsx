import Link from "next/link";
import { ArrowUpRight, Factory, TowerControl } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { businessDivisions } from "@/data/site";

const panels = [
  { ...businessDivisions.rollForming, icon: Factory },
  { ...businessDivisions.aerialWorkPlatforms, icon: TowerControl },
];

export function BusinessDivisionsSection() {
  return (
    <section className="bg-ink">
      <Container className="pt-24 md:pt-32">
        <SectionLabel index="03" label="Business Divisions" className="mb-10" />
      </Container>

      <div className="flex flex-col gap-[30px] px-6 md:px-[60px]">
        {panels.map(({ icon: Icon, ...panel }, i) => (
          <Link
            key={panel.href}
            href={panel.href}
            data-cursor="link"
            className="group relative flex min-h-[320px] w-full items-end overflow-hidden rounded-sm"
            style={{ aspectRatio: "1920/650" }}
          >
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
              <PlaceholderMedia media={panel.media} icon={Icon} tone={i === 0 ? "accent" : "neutral"} className="h-full w-full" index={`0${i + 1}`} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" aria-hidden />

            <div className="relative z-10 w-full p-8 md:p-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                0{i + 1} — Division
              </span>
              <h3 className="mt-4 max-w-sm font-display text-3xl font-bold leading-tight text-ink-foreground md:text-4xl">
                {panel.name}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70 md:text-base">
                {panel.description}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 border-b border-ink-foreground/40 pb-1 text-sm font-medium text-ink-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                Explore Division
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
