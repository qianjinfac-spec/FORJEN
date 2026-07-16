import type { Metadata } from "next";
import { Users, HardHat, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PageHero } from "@/components/layout/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { CareersApplicationForm } from "@/components/careers/CareersApplicationForm";
import { jobOpenings, careersFallbackMessage } from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the FORJEN team across engineering, manufacturing, quality and operations.",
};

const culture = [
  { icon: Users, title: "Team-first", description: "Cross-functional teams working closely across engineering and production." },
  { icon: HardHat, title: "Hands-on", description: "A culture built on the shop floor as much as the design office." },
  { icon: HeartHandshake, title: "Long-term", description: "We invest in people who grow with FORJEN over the long term." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={["Build Your Career", "at FORJEN."]}
        intro="We're a team of engineers, technicians and specialists building equipment that runs in demanding conditions worldwide."
      />

      <section className="bg-ink py-8 md:py-16">
        <Container className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="aspect-[4/3] overflow-hidden md:col-span-6">
            <PlaceholderMedia
              media={{ id: "careers-team", alt: "FORJEN team members on the manufacturing floor" }}
              icon={Users}
            />
          </div>
          <div className="grid gap-6 md:col-span-6">
            {culture.map(({ icon: Icon, title, description }) => (
              <RevealOnScroll key={title} className="flex items-start gap-4">
                <Icon className="mt-1 size-5 shrink-0 text-accent" aria-hidden strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-foreground">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-foreground/60">{description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 md:py-28">
        <Container>
          <SectionLabel index="02" label="Open Positions" className="mb-10" />
          {jobOpenings.length === 0 ? (
            <p className="max-w-md text-base leading-relaxed text-ink-foreground/60">{careersFallbackMessage}</p>
          ) : (
            <ul className="divide-y divide-line-dark border-y border-line-dark">
              {jobOpenings.map((job) => (
                <li key={job.id} className="flex flex-col justify-between gap-2 py-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-display text-lg font-semibold text-ink-foreground">{job.title}</p>
                    <p className="text-sm text-ink-foreground/50">{job.department} · {job.location}</p>
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-ink-foreground/40">{job.type}</span>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <section className="bg-ink pb-28">
        <Container>
          <SectionLabel index="03" label="Get in Touch" className="mb-10" />
          <div className="max-w-2xl">
            <CareersApplicationForm />
          </div>
        </Container>
      </section>
    </>
  );
}
