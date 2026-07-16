import Link from "next/link";
import { Building2, Video, FileText, Handshake, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealText } from "@/components/ui/RevealText";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";

const actions = [
  { label: "Book a Factory Tour", href: "/contact?purpose=factory-visit", icon: Building2 },
  { label: "Schedule a Video Inspection", href: "/contact?purpose=video-inspection", icon: Video },
  { label: "Request Company Documents", href: "/contact?purpose=documents", icon: FileText },
  { label: "Become a Distributor", href: "/contact?purpose=distributor", icon: Handshake },
];

export function FactoryVisitCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 md:py-36">
      <div className="absolute inset-0 opacity-50">
        <PlaceholderMedia
          media={{ id: "factory-visit-cta", alt: "Wide view of a FORJEN manufacturing base at dusk" }}
          className="h-full w-full"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" aria-hidden />

      <Container className="relative z-10">
        <SectionLabel index="08" label="Visit FORJEN" className="mb-8" />
        <RevealText
          as="h2"
          lines={["See how reliability", "is built."]}
          className="max-w-3xl font-display text-5xl font-black leading-[1.1] tracking-tight text-ink-foreground sm:text-6xl lg:text-7xl"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-4">
          {actions.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              data-cursor="link"
              className="group flex flex-col items-start gap-4 bg-ink px-6 py-8 text-left transition-colors hover:bg-ink-soft"
            >
              <Icon className="size-6 text-accent" aria-hidden strokeWidth={1.5} />
              <span className="font-display text-base font-semibold leading-snug text-ink-foreground">
                {label}
              </span>
              <ArrowUpRight
                className="size-4 text-ink-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
