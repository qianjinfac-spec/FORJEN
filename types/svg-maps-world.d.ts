declare module "@svg-maps/world" {
  interface SvgMapLocation {
    id: string;
    name: string;
    path: string;
  }

  interface SvgMap {
    viewBox: string;
    label: string;
    locations: SvgMapLocation[];
  }

  const world: SvgMap;
  export default world;
}
