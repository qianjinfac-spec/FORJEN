"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Factory, TowerControl, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BusinessDivisionsMenu } from "@/components/layout/BusinessDivisionsMenu";
import { primaryNav, businessDivisions, socialLinks } from "@/data/site";
import { cn } from "@/lib/utils";

// Shortened labels for the compact desktop top bar only — the mobile menu and
// footer keep the full descriptive labels from primaryNav.
const topbarLabels: Record<string, string> = {
  "/about": "About",
  "/manufacturing": "Manufacturing",
  "/rd-patents": "R&D",
  "/quality-control": "Quality",
  "/global-projects": "Projects",
  "/news": "News",
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const [trackedPathname, setTrackedPathname] = useState(pathname);
  if (pathname !== trackedPathname) {
    setTrackedPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open ? "bg-ink/85 backdrop-blur-md border-b border-line-dark" : "bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between md:h-24">
        <Link href="/" data-cursor="link" className="shrink-0">
          <Image
            src="/images/logo/forjen-logo.png"
            alt="FORJEN"
            width={534}
            height={106}
            priority
            className="h-7 w-auto md:h-8"
          />
        </Link>

        <nav className="hidden items-center gap-4 xl:flex" aria-label="Primary">
          <BusinessDivisionsMenu tone="dark" />
          {primaryNav.slice(0, 6).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-cursor="link"
              className={cn(
                "shrink-0 whitespace-nowrap font-mono text-xs uppercase tracking-[0.12em] text-ink-foreground/70 transition-colors hover:text-ink-foreground",
                pathname === item.href && "text-accent",
              )}
            >
              {topbarLabels[item.href] ?? item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button href="/contact?purpose=factory-visit" variant="primary" className="text-xs">
            Book a Factory Tour
          </Button>
        </div>

        <button
          type="button"
          data-cursor="link"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-11 items-center justify-center text-ink-foreground xl:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-ink xl:hidden"
          >
            <Container className="flex h-full flex-col justify-between py-10">
              <nav aria-label="Mobile primary" className="flex flex-col gap-1">
                {primaryNav.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-cursor="link"
                    className="flex items-baseline gap-4 border-b border-line-dark py-4 font-display text-3xl font-semibold text-ink-foreground"
                  >
                    <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-10 space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-foreground/50">
                  Business Divisions
                </p>
                {[
                  { ...businessDivisions.rollForming, icon: Factory },
                  { ...businessDivisions.aerialWorkPlatforms, icon: TowerControl },
                ].map(({ icon: Icon, ...item }) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-cursor="link"
                    className="flex items-center justify-between rounded-xl border border-line-dark px-4 py-3.5 text-ink-foreground"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="size-4 text-accent" aria-hidden />
                      {item.shortName}
                    </span>
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-6">
                <Button href="/contact?purpose=factory-visit" variant="primary" className="w-full">
                  Book a Factory Tour
                </Button>
                <div className="flex gap-5">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="link"
                      className="font-mono text-xs uppercase tracking-[0.15em] text-ink-foreground/50"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
