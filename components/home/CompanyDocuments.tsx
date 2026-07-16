import Link from "next/link";
import { FileText, Package, Video, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { DocumentRequestModal } from "@/components/forms/DocumentRequestModal";
import { downloadItems } from "@/data/downloads";

const fileIcons: Record<string, typeof FileText> = {
  PDF: FileText,
  ZIP: Package,
  MP4: Video,
};

export function CompanyDocuments() {
  return (
    <section className="bg-paper py-24 text-paper-foreground md:py-32">
      <Container>
        <SectionLabel index="09" label="Company Documents" tone="light" className="mb-6" />
        <h2 className="max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
          Documentation for procurement, compliance and due diligence.
        </h2>

        <div className="mt-14 divide-y divide-line-light border-y border-line-light">
          {downloadItems.map((item) => {
            const Icon = fileIcons[item.fileType] ?? FileText;
            return (
              <RevealOnScroll
                key={item.id}
                amount={0.4}
                className="flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center"
              >
                <div className="flex items-start gap-4">
                  <Icon className="mt-1 size-5 shrink-0 text-accent" aria-hidden strokeWidth={1.5} />
                  <div>
                    <p className="font-display text-lg font-semibold">{item.title}</p>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-paper-foreground/60">
                      {item.description}
                    </p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-paper-foreground/40">
                      {item.fileType} · {item.fileSize}
                    </p>
                  </div>
                </div>
                {item.requiresForm ? (
                  <DocumentRequestModal documentTitle={item.title} />
                ) : (
                  <Link
                    href={`/contact?purpose=documents&doc=${item.id}`}
                    data-cursor="link"
                    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-line-light px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                  >
                    Request Document
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                )}
              </RevealOnScroll>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
