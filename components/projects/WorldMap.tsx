import worldMap from "@svg-maps/world";
import { exportCountries, exportCountryCodes } from "@/data/exportCountries";
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

/** Real world map (via @svg-maps/world) with FORJEN's exported-to countries highlighted. */
export function WorldMap({ region = "All Regions", className }: { region?: string; className?: string }) {
  const visibleLabels =
    region === "All Regions" ? exportCountries : exportCountries.filter((c) => regionToFilter[c.region] === region);

  return (
    <div className={cn("relative", className)}>
      <svg
        viewBox={worldMap.viewBox}
        className="h-full w-full"
        role="img"
        aria-label="World map highlighting countries FORJEN has exported equipment to"
      >
        {worldMap.locations.map((location) => {
          const highlighted = exportCountryCodes.has(location.id);
          return (
            <path
              key={location.id}
              d={location.path}
              data-id={location.id}
              data-name={location.name}
              className={cn(
                "transition-colors duration-300",
                highlighted
                  ? "fill-accent-light hover:brightness-125"
                  : "fill-ink-foreground/[0.06] hover:fill-ink-foreground/[0.1]",
              )}
              stroke="#0B0D0F"
              strokeWidth={0.5}
            />
          );
        })}

        {visibleLabels.map((country) => (
          <text
            key={country.code}
            x={country.labelX}
            y={country.labelY}
            textAnchor="middle"
            className="pointer-events-none select-none fill-ink-foreground font-mono"
            style={{ fontSize: 6.5, paintOrder: "stroke", stroke: "#0B0D0F", strokeWidth: 1.4, strokeLinejoin: "round" }}
          >
            {country.name}
          </text>
        ))}
      </svg>
    </div>
  );
}
