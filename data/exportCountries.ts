/**
 * Countries FORJEN equipment has been exported to, grouped by region as supplied by the client.
 * Codes are lowercase ISO 3166-1 alpha-2, matching the `id` field in @svg-maps/world.
 *
 * labelX/labelY are label positions in the @svg-maps/world viewBox coordinate space
 * (0 0 1010 666), derived from each country path's bounding-box centroid — except "us",
 * whose automatic centroid is skewed northwest by the disconnected Alaska/Hawaii pieces
 * of that path, so it's manually corrected to sit over the continental US.
 */
export const exportCountries = [
  // North America
  { code: "us", name: "United States", region: "North America", labelX: 225, labelY: 255 },
  { code: "mx", name: "Mexico", region: "North America", labelX: 187.1, labelY: 394.1 },
  { code: "ca", name: "Canada", region: "North America", labelX: 203.1, labelY: 173.2 },
  // Europe
  { code: "ru", name: "Russia", region: "Europe", labelX: 769.4, labelY: 187.8 },
  { code: "de", name: "Germany", region: "Europe", labelX: 504.2, labelY: 295.3 },
  { code: "fr", name: "France", region: "Europe", labelX: 481.6, labelY: 316.1 },
  { code: "pl", name: "Poland", region: "Europe", labelX: 528.5, labelY: 292.2 },
  { code: "gr", name: "Greece", region: "Europe", labelX: 542.1, labelY: 346.6 },
  // Central & South America
  { code: "br", name: "Brazil", region: "Central & South America", labelX: 322.2, labelY: 505.6 },
  { code: "cl", name: "Chile", region: "Central & South America", labelX: 228.1, labelY: 582.3 },
  { code: "co", name: "Colombia", region: "Central & South America", labelX: 270.2, labelY: 451.4 },
  { code: "ar", name: "Argentina", region: "Central & South America", labelX: 296.3, labelY: 586.5 },
  { code: "pe", name: "Peru", region: "Central & South America", labelX: 264.4, labelY: 489 },
  { code: "bo", name: "Bolivia", region: "Central & South America", labelX: 296.5, labelY: 509.3 },
  { code: "ve", name: "Venezuela", region: "Central & South America", labelX: 288, labelY: 444.9 },
  // Oceania
  { code: "au", name: "Australia", region: "Oceania", labelX: 856.4, labelY: 568.8 },
  // Africa
  { code: "eg", name: "Egypt", region: "Africa", labelX: 561.3, labelY: 384.9 },
  { code: "za", name: "South Africa", region: "Africa", labelX: 551.1, labelY: 569 },
  { code: "zw", name: "Zimbabwe", region: "Africa", labelX: 556.6, labelY: 517.1 },
  { code: "ci", name: "Côte d'Ivoire", region: "Africa", labelX: 452, labelY: 432 },
  { code: "zm", name: "Zambia", region: "Africa", labelX: 553, labelY: 500 },
  { code: "gh", name: "Ghana", region: "Africa", labelX: 478, labelY: 450 },
  { code: "dz", name: "Algeria", region: "Africa", labelX: 479.5, labelY: 380.2 },
  { code: "tn", name: "Tunisia", region: "Africa", labelX: 501.6, labelY: 362.4 },
  { code: "ke", name: "Kenya", region: "Africa", labelX: 590, labelY: 468 },
  { code: "ly", name: "Libya", region: "Africa", labelX: 523.3, labelY: 386.1 },
  { code: "cm", name: "Cameroon", region: "Africa", labelX: 509.6, labelY: 442.2 },
  { code: "ug", name: "Uganda", region: "Africa", labelX: 557, labelY: 451 },
  // Middle East
  { code: "tr", name: "Turkey", region: "Middle East", labelX: 573.8, labelY: 344.4 },
  { code: "sa", name: "Saudi Arabia", region: "Middle East", labelX: 595, labelY: 401 },
  { code: "ae", name: "United Arab Emirates", region: "Middle East", labelX: 636, labelY: 384 },
  // Asia
  { code: "in", name: "India", region: "Asia", labelX: 707.1, labelY: 400.5 },
  { code: "ph", name: "Philippines", region: "Asia", labelX: 816.7, labelY: 426.1 },
  { code: "id", name: "Indonesia", region: "Asia", labelX: 806.3, labelY: 470 },
  { code: "sg", name: "Singapore", region: "Asia", labelX: 766.3, labelY: 459.1 },
  { code: "bd", name: "Bangladesh", region: "Asia", labelX: 728.4, labelY: 394.8 },
  { code: "tw", name: "Taiwan", region: "Asia", labelX: 812, labelY: 395.1 },
  { code: "kz", name: "Kazakhstan", region: "Asia", labelX: 662.8, labelY: 307.5 },
  { code: "kh", name: "Cambodia", region: "Asia", labelX: 777, labelY: 436 },
  { code: "uz", name: "Uzbekistan", region: "Asia", labelX: 656.1, labelY: 335.4 },
  { code: "my", name: "Malaysia", region: "Asia", labelX: 782.1, labelY: 451.4 },
  { code: "th", name: "Thailand", region: "Asia", labelX: 748, labelY: 418 },
] as const;

export const exportCountryCodes: Set<string> = new Set(exportCountries.map((c) => c.code));
