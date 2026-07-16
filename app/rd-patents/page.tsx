import type { Metadata } from "next";
import { FlaskConical, Ruler, GitBranch, Wrench, ShieldCheck, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = {
  title: "R&D and Patents",
  description:
    "FORJEN's engineering team develops, tests and customizes roll forming equipment and aerial work platforms — backed by a growing portfolio of patents and certifications.",
};

const process = [
  { icon: FlaskConical, title: "Requirement Review", description: "Engineers assess project requirements, site conditions and performance targets." },
  { icon: Ruler, title: "Structural Design", description: "Structural and mechanical design is modelled and validated against load cases." },
  { icon: GitBranch, title: "Prototyping & Testing", description: "Design changes are prototyped and tested before entering production." },
  { icon: Wrench, title: "Customized Engineering", description: "Configuration is finalized to the customer's specification and manufactured." },
];

export default function RdPatentsPage() {
  return (
    <>
      <PageHero
        eyebrow="R&D and Patents"
        title={["Engineering Behind", "Every Machine."]}
        intro="FORJEN's engineering team doesn't only manufacture to standard designs — we develop, test and customize equipment to meet the specific demands of each project."
      />

      <section className="bg-ink py-8 md:py-16">
        <Container className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-6">
            <SectionLabel index="02" label="Engineering Team" className="mb-6" />
            <p className="max-w-md text-base leading-relaxed text-ink-foreground/60">
              TODO — introduce the engineering team&apos;s structure and disciplines (mechanical,
              structural, hydraulic, electrical), and the scale of the team once confirmed.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden md:col-span-6">
            <PlaceholderMedia
              media={{ id: "rd-team-detail", alt: "FORJEN engineers reviewing a structural design on screen" }}
              icon={Ruler}
            />
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 md:py-28">
        <Container>
          <SectionLabel index="03" label="Design & Development Process" className="mb-10" />
          <div className="grid gap-px overflow-hidden rounded-sm border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ icon: Icon, title, description }, i) => (
              <RevealOnScroll key={title} delay={0.05 * i} className="bg-ink-soft p-7">
                <Icon className="size-6 text-accent" aria-hidden strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-foreground/60">{description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 text-paper-foreground md:py-28">
        <Container>
          <SectionLabel index="04" label="Patents and Certifications" tone="light" className="mb-10" />
          <p className="mb-10 max-w-2xl text-sm text-paper-foreground/60">
            TODO — every entry below is a placeholder. Publish only verified certificate and
            patent numbers supplied by FORJEN&apos;s legal and quality teams.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <RevealOnScroll
                key={cert.id}
                className="flex items-start gap-4 rounded-sm border border-line-light p-6"
              >
                {cert.category === "Patent" ? (
                  <Award className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                ) : (
                  <ShieldCheck className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                )}
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper-foreground/40">
                    {cert.category}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold">{cert.title}</h3>
                  <p className="mt-1 text-xs text-paper-foreground/50">{cert.issuer}</p>
                  <p className="text-xs text-paper-foreground/50">{cert.status}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
