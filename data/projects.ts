import type { GlobalProject } from "./types";

/**
 * TODO: sample structure only — replace with verified project records
 * (country, deliverables, testimonials) before launch.
 * x/y are percentages derived from each country's centroid on the real
 * @svg-maps/world path (see WorldMap.tsx), not hand-placed.
 */
export const globalProjects: GlobalProject[] = [
  {
    id: "proj-sa",
    country: "Saudi Arabia",
    region: "Middle East & Africa",
    x: 59.6,
    y: 58.9,
    category: "Roll Forming Equipment",
    title: "Roofing Panel Line for a Regional Contractor",
    summary:
      "TODO — project summary describing scope, timeline and outcome for this deployment.",
    deliverables: ["Roll forming line", "Tooling package", "Commissioning support"],
    testimonial: {
      quote: "TODO — client testimonial pending approval for publication.",
      attribution: "TODO — client name / title, Saudi Arabia",
    },
    media: { id: "project-sa", alt: "Roll forming equipment delivered to a project site in Saudi Arabia" },
  },
  {
    id: "proj-br",
    country: "Brazil",
    region: "Americas",
    x: 31.9,
    y: 75.9,
    category: "Aerial Work Platforms",
    title: "Fleet Deployment for Infrastructure Contractor",
    summary:
      "TODO — project summary describing scope, timeline and outcome for this deployment.",
    deliverables: ["Scissor lift fleet", "Operator training", "Spare parts package"],
    media: { id: "project-br", alt: "Aerial work platforms delivered to an infrastructure project in Brazil" },
  },
  {
    id: "proj-vn",
    country: "Vietnam",
    region: "Asia Pacific",
    x: 76.4,
    y: 62.7,
    category: "Roll Forming Equipment",
    title: "Custom Profile Line for Industrial Roofing",
    summary:
      "TODO — project summary describing scope, timeline and outcome for this deployment.",
    deliverables: ["Custom forming tooling", "Automated stacking", "Factory acceptance test"],
    media: { id: "project-vn", alt: "Custom roll forming line delivered for an industrial roofing project in Vietnam" },
  },
  {
    id: "proj-za",
    country: "South Africa",
    region: "Middle East & Africa",
    x: 54.6,
    y: 85.4,
    category: "Both Divisions",
    title: "Combined Equipment Package for Distributor Partner",
    summary:
      "TODO — project summary describing scope, timeline and outcome for this deployment.",
    deliverables: ["Roll forming equipment", "Aerial work platforms", "Distributor training program"],
    media: { id: "project-za", alt: "Combined equipment package delivered to a distributor partner in South Africa" },
  },
  {
    id: "proj-pl",
    country: "Poland",
    region: "Europe",
    x: 52.3,
    y: 43.9,
    category: "Aerial Work Platforms",
    title: "Heavy-duty Platforms for Construction Group",
    summary:
      "TODO — project summary describing scope, timeline and outcome for this deployment.",
    deliverables: ["Boom lift fleet", "Maintenance program", "On-site commissioning"],
    media: { id: "project-pl", alt: "Heavy-duty aerial work platforms delivered to a construction group in Poland" },
  },
  {
    id: "proj-au",
    country: "Australia",
    region: "Asia Pacific",
    x: 84.8,
    y: 85.4,
    category: "Roll Forming Equipment",
    title: "Roofing and Cladding Line for Distributor",
    summary:
      "TODO — project summary describing scope, timeline and outcome for this deployment.",
    deliverables: ["Roll forming line", "Tooling changeover kit", "Remote commissioning support"],
    media: { id: "project-au", alt: "Roofing and cladding roll forming line delivered to a distributor in Australia" },
  },
];

export const projectRegions = [
  "All Regions",
  "Asia Pacific",
  "Middle East & Africa",
  "Europe",
  "Americas",
] as const;
