import type { DownloadItem } from "./types";

/** TODO: attach real files under /public/documents and wire up actual download URLs. */
export const downloadItems: DownloadItem[] = [
  {
    id: "company-profile",
    title: "Company Profile",
    description: "An overview of FORJEN, our manufacturing bases and business divisions.",
    fileType: "PDF",
    fileSize: "TODO",
    requiresForm: false,
  },
  {
    id: "factory-introduction",
    title: "Factory Introduction",
    description: "A detailed look at our production facilities, equipment and manufacturing process.",
    fileType: "PDF",
    fileSize: "TODO",
    requiresForm: false,
  },
  {
    id: "certificate-package",
    title: "Certificate Package",
    description: "Our current certifications, compiled for procurement and compliance review.",
    fileType: "ZIP",
    fileSize: "TODO",
    requiresForm: true,
  },
  {
    id: "quality-control-process",
    title: "Quality Control Process",
    description: "A step-by-step outline of our quality control system, from raw material to delivery.",
    fileType: "PDF",
    fileSize: "TODO",
    requiresForm: false,
  },
  {
    id: "corporate-video",
    title: "Corporate Video",
    description: "A short film introducing FORJEN's manufacturing capability and global reach.",
    fileType: "MP4",
    fileSize: "TODO",
    requiresForm: false,
  },
];
