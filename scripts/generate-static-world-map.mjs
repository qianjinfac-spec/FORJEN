import { mkdir, writeFile } from "node:fs/promises";
import worldMap from "@svg-maps/world";

const regionCodes = {
  "asia-pacific": ["au", "in", "ph", "id", "sg", "bd", "tw", "kz", "kh", "uz", "my", "th"],
  "middle-east-africa": ["eg", "za", "zw", "ci", "zm", "gh", "dz", "tn", "ke", "ly", "cm", "ug", "tr", "sa", "ae"],
  europe: ["ru", "de", "fr", "pl", "gr"],
  americas: ["us", "mx", "ca", "br", "cl", "co", "ar", "pe", "bo", "ve"],
};

const allExportCodes = new Set(Object.values(regionCodes).flat());

function createSvg(activeCodes) {
  const paths = worldMap.locations
    .map((location) => {
      const fill = activeCodes.has(location.id) ? "#5b82ff" : "#24282c";
      return `<path id="${location.id}" d="${location.path}" fill="${fill}" stroke="#0b0d0f" stroke-width="0.5"/>`;
    })
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${worldMap.viewBox}" role="img" aria-labelledby="title"><title id="title">World map highlighting countries FORJEN has exported equipment to</title>${paths}</svg>`;
}

await mkdir("public/images/maps", { recursive: true });
await writeFile("public/images/maps/forjen-export-map.svg", createSvg(allExportCodes), "utf8");

await Promise.all(
  Object.entries(regionCodes).map(([region, codes]) =>
    writeFile(`public/images/maps/forjen-export-map-${region}.svg`, createSvg(new Set(codes)), "utf8"),
  ),
);
