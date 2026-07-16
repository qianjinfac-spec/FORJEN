/** TODO: replace every placeholder value below with real FORJEN corporate data before launch. */

import type { MediaSlot } from "./types";

export const siteConfig = {
  name: "FORJEN",
  legalName: "FORJEN Industrial Group", // TODO: confirm registered legal entity name
  tagline: "Engineered to Shape. Built to Endure.",
  description:
    "FORJEN designs and manufactures advanced roll forming equipment and heavy-duty aerial work platforms, engineered through precision manufacturing and rigorous quality control.",
  url: "https://www.forjen.com", // TODO: confirm production domain
  ogImage: "/images/og/forjen-og-default.jpg", // TODO: supply 1200x630 OG image
  locale: "en_US",
  founded: "TODO", // TODO: founding year
};

export const businessDivisions = {
  rollForming: {
    name: "Roll Forming Equipment",
    shortName: "Roll Forming",
    description:
      "Advanced forming systems for roofing, construction and customized metal profiles.",
    href: "/business/roll-forming",
    // TODO: link to the dedicated Roll Forming lead-generation site once live
    externalUrl: "https://roll-forming.forjen.com",
    media: {
      id: "division-roll-forming",
      alt: "Promotional banner showing a lineup of four roll forming machines, certification marks and the tagline High-Altitude Platforms, Roll Forming Experts",
      path: "/images/aerial-work-platforms/banner3.jpg",
      aspect: "1920/650",
    } as MediaSlot,
    highlights: [
      "TODO — standard profile range and forming widths",
      "TODO — automation and control system options",
      "TODO — tooling and changeover capability",
      "TODO — typical applications and industries served",
    ],
  },
  aerialWorkPlatforms: {
    name: "Heavy-duty Aerial Work Platforms",
    shortName: "Aerial Work Platforms",
    description:
      "Heavy-duty access solutions designed for demanding industrial and construction environments.",
    href: "/business/aerial-work-platforms",
    // TODO: link to the dedicated Aerial Work Platforms lead-generation site once live
    externalUrl: "https://awp.forjen.com",
    media: {
      id: "division-awp",
      alt: "Two crawler-mounted heavy-duty aerial work platforms with scissor and articulating masts inside a FORJEN warehouse",
      path: "/images/aerial-work-platforms/scissor-lift-warehouse-1.jpg",
    } as MediaSlot,
    highlights: [
      "TODO — platform range and maximum working heights",
      "TODO — load capacity and terrain specifications",
      "TODO — safety systems and certifications",
      "TODO — typical applications and industries served",
    ],
  },
};

export const contactInfo = {
  generalEmail: "info@forjen.com", // TODO
  salesEmail: "sales@forjen.com", // TODO
  whatsapp: "+00 000 0000 0000", // TODO
  workingHours: "Mon – Fri, 08:30 – 17:30 (GMT+8)", // TODO
  plants: [
    {
      id: "plant-north",
      name: "North Manufacturing Base",
      address: "TODO — street address, city, province, postal code, country",
      phone: "+00 000 0000 0000", // TODO
      email: "north.plant@forjen.com", // TODO
    },
    {
      id: "plant-south",
      name: "South Manufacturing Base",
      address: "TODO — street address, city, province, postal code, country",
      phone: "+00 000 0000 0000", // TODO
      email: "south.plant@forjen.com", // TODO
    },
  ],
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/forjen" }, // TODO
  { label: "YouTube", href: "https://youtube.com/@forjen" }, // TODO
  { label: "Facebook", href: "https://facebook.com/forjen" }, // TODO
];

export const primaryNav = [
  { label: "About FORJEN", href: "/about" },
  { label: "Manufacturing Capability", href: "/manufacturing" },
  { label: "R&D and Patents", href: "/rd-patents" },
  { label: "Quality Control", href: "/quality-control" },
  { label: "Global Projects", href: "/global-projects" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About FORJEN", href: "/about" },
    { label: "Manufacturing Capability", href: "/manufacturing" },
    { label: "R&D and Patents", href: "/rd-patents" },
    { label: "Quality Control", href: "/quality-control" },
  ],
  connect: [
    { label: "Global Projects", href: "/global-projects" },
    { label: "News", href: "/news" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
  ],
};

export const homepageStats = [
  { id: "stat-plants", value: 2, suffix: "", label: "Manufacturing Bases" }, // TODO verify
  { id: "stat-projects", value: 60, suffix: "+", label: "Countries Served" }, // TODO verify
  { id: "stat-experience", value: 20, suffix: "+", label: "Years of Engineering" }, // TODO verify founding year
  { id: "stat-area", value: 150000, suffix: " m²", label: "Manufacturing Floor Area" }, // TODO verify
];
