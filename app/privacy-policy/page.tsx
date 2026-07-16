import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title={["Privacy", "Policy."]} />
      <section className="bg-ink pb-28">
        <Container className="max-w-2xl space-y-6 text-sm leading-relaxed text-ink-foreground/60">
          <p>
            TODO — replace this page with FORJEN&apos;s legal privacy policy, reviewed by counsel,
            covering what data is collected through this site (including enquiry and document
            request forms), how it is used and stored, and how visitors can exercise their data
            rights.
          </p>
          <p>Last updated: TODO.</p>
        </Container>
      </section>
    </>
  );
}
