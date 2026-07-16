import Link from "next/link";
import { siteConfig, footerNav, businessDivisions, contactInfo, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { BackToTopButton } from "@/components/layout/BackToTopButton";

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink text-ink-foreground">
      <Container className="grid gap-16 py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-2xl font-black tracking-tight">{siteConfig.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/60">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="font-mono text-xs uppercase tracking-[0.15em] text-ink-foreground/50 hover:text-ink-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-4 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-foreground/40">Company</p>
            <ul className="mt-4 space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} data-cursor="link" className="text-sm text-ink-foreground/70 hover:text-ink-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-foreground/40">Connect</p>
            <ul className="mt-4 space-y-3">
              {footerNav.connect.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} data-cursor="link" className="text-sm text-ink-foreground/70 hover:text-ink-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-foreground/40">Business Divisions</p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href={businessDivisions.rollForming.href} data-cursor="link" className="text-sm text-ink-foreground/70 hover:text-ink-foreground">
                  {businessDivisions.rollForming.shortName}
                </Link>
              </li>
              <li>
                <Link href={businessDivisions.aerialWorkPlatforms.href} data-cursor="link" className="text-sm text-ink-foreground/70 hover:text-ink-foreground">
                  {businessDivisions.aerialWorkPlatforms.shortName}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-foreground/40">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-ink-foreground/70">
            <li>{contactInfo.generalEmail}</li>
            <li>WhatsApp: {contactInfo.whatsapp}</li>
            <li>{contactInfo.workingHours}</li>
          </ul>
          <div className="mt-6">
            <BackToTopButton />
          </div>
        </div>
      </Container>

      <div className="border-t border-line-dark">
        <Container className="flex flex-col gap-4 py-6 text-xs text-ink-foreground/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex gap-6">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} data-cursor="link" className="hover:text-ink-foreground/70">
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
