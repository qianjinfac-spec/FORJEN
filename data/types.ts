/** Central content types shared across the /data config layer. */

export interface MediaSlot {
  /** Stable id used to key placeholder art until real photography is supplied. */
  id: string;
  /** Required alt text once a real asset replaces the placeholder. */
  alt: string;
  /** TODO: absolute path under /public/images once supplied by FORJEN, e.g. "/images/manufacturing/laser-cutting.jpg" */
  path?: string;
  /** CSS aspect-ratio value (e.g. "1920/650") matching the real asset's own proportions, so containers can adapt instead of cropping via object-cover. */
  aspect?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
  media: MediaSlot;
}

export interface QualityStage {
  index: string;
  title: string;
  description: string;
}

export interface GlobalProject {
  id: string;
  country: string;
  region: "Asia Pacific" | "Middle East & Africa" | "Europe" | "Americas";
  /** Country centroid as a percentage of the WorldMap's viewBox width/height. */
  x: number;
  y: number;
  category: "Roll Forming Equipment" | "Aerial Work Platforms" | "Both Divisions";
  title: string;
  summary: string;
  deliverables: string[];
  testimonial?: {
    quote: string;
    attribution: string;
  };
  media: MediaSlot;
}

export interface NewsPost {
  slug: string;
  category: "Company News" | "Manufacturing Updates" | "Global Projects";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: string[];
  media: MediaSlot;
}

export interface DownloadItem {
  id: string;
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  requiresForm: boolean;
}

export interface Certification {
  id: string;
  title: string;
  category: "Certification" | "Patent";
  issuer: string;
  status: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}
