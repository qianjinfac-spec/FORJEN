import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PageHero } from "@/components/layout/PageHero";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { contactInfo } from "@/data/site";
import { purposeToCooperationType } from "@/lib/inquiry-schema";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact FORJEN",
  description:
    "Get in touch with FORJEN for general enquiries, factory visits, video inspections and distributor cooperation.",
};

const purposes = [
  { id: "general", label: "General Enquiry" },
  { id: "factory-visit", label: "Factory Visit" },
  { id: "video-inspection", label: "Video Inspection" },
  { id: "distributor", label: "Distributor Cooperation" },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ purpose?: string }>;
}) {
  const { purpose = "general" } = await searchParams;
  const defaultCooperationType = purposeToCooperationType[purpose];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={["Let's Start a", "Conversation."]}
        intro="Whether you're evaluating equipment, planning a factory visit, or exploring distributor cooperation, tell us what you need and the right team at FORJEN will follow up."
      />

      <section className="bg-ink pb-28">
        <Container className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="02" label="Reach Us" className="mb-8" />

            <nav aria-label="Enquiry purpose" className="mb-10 flex flex-wrap gap-2">
              {purposes.map((p) => (
                <Link
                  key={p.id}
                  href={p.id === "general" ? "/contact" : `/contact?purpose=${p.id}`}
                  data-cursor="link"
                  className={cn(
                    "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors",
                    purpose === p.id
                      ? "border-accent bg-accent text-white"
                      : "border-line-dark text-ink-foreground/60 hover:border-ink-foreground/40 hover:text-ink-foreground",
                  )}
                >
                  {p.label}
                </Link>
              ))}
            </nav>

            <ul className="space-y-6 text-sm text-ink-foreground/70">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <span>{contactInfo.generalEmail}</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <span>WhatsApp: {contactInfo.whatsapp}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <span>{contactInfo.workingHours}</span>
              </li>
            </ul>

            <div className="mt-10 space-y-6 border-t border-line-dark pt-8">
              {contactInfo.plants.map((plant) => (
                <div key={plant.id}>
                  <p className="flex items-center gap-2 font-display text-sm font-semibold text-ink-foreground">
                    <MapPin className="size-4 text-accent" aria-hidden />
                    {plant.name}
                  </p>
                  <p className="mt-1.5 pl-6 text-xs leading-relaxed text-ink-foreground/50">{plant.address}</p>
                  <p className="pl-6 text-xs text-ink-foreground/50">{plant.phone} · {plant.email}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <InquiryForm defaultCooperationType={defaultCooperationType} />
          </div>
        </Container>
      </section>
    </>
  );
}
