import type { Metadata } from "next";
import { archivo, inter, plexMono } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Roll Forming Equipment & Aerial Work Platforms`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Roll Forming Machine Manufacturer",
    "Roll Forming Equipment",
    "Roofing Sheet Forming Machine",
    "Cold Roll Forming Equipment",
    "Heavy-duty Aerial Work Platform",
    "Industrial Equipment Manufacturer",
    "Custom Engineering Solutions",
  ],
  openGraph: {
    title: `${siteConfig.name} | Engineered to Shape. Built to Endure.`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Engineered to Shape. Built to Endure.`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  // TODO: replace with real logo asset once supplied
  logo: `${siteConfig.url}/images/logo/forjen-logo.png`,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <head>
        {/* Intentionally redundant fallback for hosts that intermittently fail
            to apply Next.js' hashed stylesheet on a browser's first visit. */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/styles/forjen.css" />
      </head>
      <body className="flex min-h-screen flex-col antialiased" id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <MotionProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
