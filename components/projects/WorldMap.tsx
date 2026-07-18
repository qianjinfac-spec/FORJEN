import Image from "next/image";
import { exportCountries } from "@/data/exportCountries";
import { cn } from "@/lib/utils";

// Maps the finer-grained regions in /data/exportCountries.ts onto the four
// region-filter tabs used in GlobalProjectsMap, so label visibility can follow
// whichever tab is currently selected there.
const regionToFilter: Record<string, string> = {
  "North America": "Americas",
  "Central & South America": "Americas",
  Europe: "Europe",
  Oceania: "Asia Pacific",
  Asia: "Asia Pacific",
  Africa: "Middle East & Africa",
  "Middle East": "Middle East & Africa",
};

const regionMapSource: Record<string, string> = {
  "All Regions": "/images/maps/forjen-export-map.svg",
  "Asia Pacific": "/images/maps/forjen-export-map-asia-pacific.svg",
  "Middle East & Africa": "/images/maps/forjen-export-map-middle-east-africa.svg",
  Europe: "/images/maps/forjen-export-map-europe.svg",
  Americas: "/images/maps/forjen-export-map-americas.svg",
};

/** Static world map with lightweight HTML labels that respond to the active region. */
export function WorldMap({ region = "All Regions", className }: { region?: string; className?: string }) {
  const visibleLabels =
    region === "All Regions" ? exportCountries : exportCountries.filter((c) => regionToFilter[c.region] === region);

  return (
    <div className={cn("relative", className)}>
      <Image
        key={region}
        src={regionMapSource[region] ?? regionMapSource["All Regions"]}
        alt="World map highlighting countries FORJEN has exported equipment to"
        width={1010}
        height={666}
        unoptimized
        loading="lazy"
        className="h-full w-full object-contain"
      />
      {visibleLabels.map((country) => (
        <span
          key={country.code}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[clamp(5px,0.5vw,9px)] text-ink-foreground [text-shadow:0_0_2px_#0b0d0f,0_0_2px_#0b0d0f]"
          style={{ left: `${(country.labelX / 1010) * 100}%`, top: `${(country.labelY / 666) * 100}%` }}
        >
          {country.name}
        </span>
      ))}
    </div>
  );
}
