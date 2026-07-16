import type { ProcessStep } from "./types";

export const manufacturingProcess: ProcessStep[] = [
  {
    index: "01",
    title: "Material Preparation",
    description:
      "Incoming coil and plate steel is inspected, staged and prepared to specification before entering the production line.",
    media: { id: "process-material-prep", alt: "Steel coil staged for production at a FORJEN manufacturing base" },
  },
  {
    index: "02",
    title: "Laser Cutting",
    description:
      "High-precision laser cutting produces components to tight tolerances, ready for forming and machining.",
    media: { id: "process-laser-cutting", alt: "CNC laser cutting steel plate on the shop floor" },
  },
  {
    index: "03",
    title: "Precision Machining",
    description:
      "CNC machining centers shape structural and mechanical components to exacting engineering tolerances.",
    media: { id: "process-precision-machining", alt: "CNC machining center shaping a structural component" },
  },
  {
    index: "04",
    title: "Robotic Welding",
    description:
      "Robotic welding cells deliver consistent, high-strength joints across structural frames and assemblies.",
    media: { id: "process-robotic-welding", alt: "Robotic arm welding a structural steel frame" },
  },
  {
    index: "05",
    title: "Surface Treatment",
    description:
      "Shot blasting and industrial coating protect every structure against corrosion in demanding environments.",
    media: { id: "process-surface-treatment", alt: "Industrial coating line applying protective finish" },
  },
  {
    index: "06",
    title: "Assembly",
    description:
      "Mechanical, hydraulic and electrical systems are integrated by trained technicians on dedicated assembly bays.",
    media: { id: "process-assembly", alt: "Technicians assembling equipment on the final assembly bay" },
  },
  {
    index: "07",
    title: "Commissioning",
    description:
      "Every unit is commissioned and run through its full operating cycle before it is cleared for acceptance testing.",
    media: { id: "process-commissioning", alt: "Equipment undergoing commissioning and functional testing" },
  },
  {
    index: "08",
    title: "Final Acceptance",
    description:
      "A final inspection against the acceptance checklist confirms every unit meets specification before delivery.",
    media: { id: "process-final-acceptance", alt: "Final acceptance inspection before equipment delivery" },
  },
];

export const manufacturingPlants = [
  {
    id: "plant-north",
    name: "North Manufacturing Base",
    focus: "Roll Forming Equipment",
    description:
      "TODO — plant overview, floor area, production lines and key capabilities for the North base.",
    media: { id: "plant-north-overview", alt: "Aerial view of the North Manufacturing Base" },
  },
  {
    id: "plant-south",
    name: "South Manufacturing Base",
    focus: "Heavy-duty Aerial Work Platforms",
    description:
      "TODO — plant overview, floor area, production lines and key capabilities for the South base.",
    media: { id: "plant-south-overview", alt: "Aerial view of the South Manufacturing Base" },
  },
];
