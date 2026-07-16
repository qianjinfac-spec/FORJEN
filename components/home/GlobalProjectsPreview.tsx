import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { GlobalProjectsMap } from "@/components/projects/GlobalProjectsMap";

export function GlobalProjectsPreview() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel index="07" label="Global Projects" className="mb-6" />
            <h2 className="max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-foreground md:text-5xl">
              Equipment delivered across a growing global footprint.
            </h2>
          </div>
          <Button href="/global-projects" variant="outline-dark" className="shrink-0">
            Explore Global Projects
          </Button>
        </div>

        <div className="mt-14">
          <GlobalProjectsMap limit={6} />
        </div>
      </Container>
    </section>
  );
}
