import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title={["Terms of", "Use."]} />
      <section className="bg-ink pb-28">
        <Container className="max-w-2xl space-y-6 text-sm leading-relaxed text-ink-foreground/60">
          <p>
            TODO — replace this page with FORJEN&apos;s legal terms of use, reviewed by counsel,
            covering acceptable use of this website and the limitations of liability associated
            with its content.
          </p>
          <p>Last updated: TODO.</p>
        </Container>
      </section>
    </>
  );
}
