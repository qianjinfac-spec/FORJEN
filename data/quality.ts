import type { QualityStage } from "./types";

export const qualityTimeline: QualityStage[] = [
  {
    index: "01",
    title: "Incoming Material Inspection",
    description: "Raw steel and critical components are inspected and verified against specification on arrival.",
  },
  {
    index: "02",
    title: "Machining Inspection",
    description: "Dimensional and tolerance checks are carried out throughout the machining process.",
  },
  {
    index: "03",
    title: "Assembly Inspection",
    description: "Mechanical, hydraulic and electrical assemblies are inspected at every stage of integration.",
  },
  {
    index: "04",
    title: "Trial Production",
    description: "Every unit undergoes trial production runs to validate performance under real operating conditions.",
  },
  {
    index: "05",
    title: "Continuous Running Test",
    description: "Extended running tests confirm reliability and stability across full operating cycles.",
  },
  {
    index: "06",
    title: "Video Acceptance",
    description: "Customers unable to travel can witness factory acceptance testing through live video inspection.",
  },
  {
    index: "07",
    title: "Final Delivery Inspection",
    description: "A final inspection confirms every unit is complete, tested and ready before it leaves the plant.",
  },
];

export const qualityStatement =
  "Quality is controlled at every stage, not inspected only at the end.";
