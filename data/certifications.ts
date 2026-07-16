import type { Certification } from "./types";

/** TODO: replace with verified certificate/patent numbers and issuing bodies — do not publish unverified entries. */
export const certifications: Certification[] = [
  {
    id: "cert-iso-9001",
    title: "ISO 9001 — Quality Management System",
    category: "Certification",
    issuer: "TODO — certifying body",
    status: "TODO — certificate number / validity",
  },
  {
    id: "cert-ce",
    title: "CE Marking — Applicable Equipment Range",
    category: "Certification",
    issuer: "TODO — certifying body",
    status: "TODO — certificate number / validity",
  },
  {
    id: "patent-structural-design",
    title: "Structural Design Patent — TODO Title",
    category: "Patent",
    issuer: "TODO — issuing authority",
    status: "TODO — patent number",
  },
  {
    id: "patent-forming-process",
    title: "Forming Process Patent — TODO Title",
    category: "Patent",
    issuer: "TODO — issuing authority",
    status: "TODO — patent number",
  },
];
