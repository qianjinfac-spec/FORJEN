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

/** Static world map with lightweight HTML labels that respond to the active region. */
export function WorldMap({ region = "All Regions", className }: { region?: string; className?: string }) {
  const visibleLabels =
    region === "All Regions" ? exportCountries : exportCountries.filter((c) => regionToFilter[c.region] === region);

  return (
    <div className={cn("relative", className)}>
      <Image
        src="/images/maps/forjen-export-map.svg"
        alt="World map highlighting countries FORJEN has exported equipment to"
        width={1010}
        height={666}
        unoptimized
        className="world-map-layer world-map-layer-all h-full w-full object-contain"
      />
      {[
        ["asia-pacific", "/images/maps/forjen-export-map-asia-pacific.svg"],
        ["middle-east-africa", "/images/maps/forjen-export-map-middle-east-africa.svg"],
        ["europe", "/images/maps/forjen-export-map-europe.svg"],
        ["americas", "/images/maps/forjen-export-map-americas.svg"],
      ].map(([mapRegion, src]) => (
        <Image
          key={mapRegion}
          src={src}
          alt=""
          width={1010}
          height={666}
          unoptimized
          aria-hidden
          className={`world-map-layer world-map-layer-${mapRegion} absolute inset-0 hidden h-full w-full object-contain`}
        />
      ))}
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
