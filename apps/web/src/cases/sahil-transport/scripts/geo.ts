// Absheron peninsula geography for the Sahil Transport hero map. Port of Atlas `src/scripts/cases/sahil-transport/geo.ts`
// (only change: index access is guarded for `noUncheckedIndexedAccess`). Shared by the server-rendered SVG
// (HeroConsole.tsx) and the canvas that animates the trucks (fleet-map.ts), so both use one projection. Coordinates are [lat, lon];
// outlines and roads are simplified, zones are fictional customer sites.

export type LatLon = readonly [number, number];
export type Point = [number, number];

/** SVG viewBox of the map: 600 × 440 user units. */
export const MAP_W = 600;
export const MAP_H = 440;

const LAT_TOP = 41.15;
const LON_LEFT = 48.45;
/** User units per degree of latitude; longitude is scaled by cos(40.4°). */
const K_LAT = 314.3;
const K_LON = K_LAT * 0.762;

export function project([lat, lon]: LatLon): Point {
  return [Math.round((lon - LON_LEFT) * K_LON * 10) / 10, Math.round((LAT_TOP - lat) * K_LAT * 10) / 10];
}

/** Caspian Sea, closed off beyond the right edge of the map. */
export const sea: LatLon[] = [
  [41.35, 48.92], [41.08, 49.22], [40.93, 49.35], [40.78, 49.45], [40.66, 49.53], [40.6, 49.6], [40.56, 49.72],
  [40.53, 49.8], [40.58, 49.92], [40.57, 50.03], [40.53, 50.15], [40.48, 50.27], [40.43, 50.35], [40.36, 50.38],
  [40.31, 50.3], [40.36, 50.18], [40.37, 50.05], [40.35, 49.95], [40.37, 49.88], [40.33, 49.83], [40.27, 49.77],
  [40.2, 49.66], [40.1, 49.52], [40.0, 49.46], [39.93, 49.43], [39.8, 49.42], [39.65, 49.35], [39.45, 49.3],
  [39.45, 51.2], [41.35, 51.2],
];

export interface City {
  key: 'baku' | 'sumgayit' | 'alat' | 'shamakhi' | 'siyazan' | 'hajigabul';
  at: LatLon;
  major?: boolean;
  /** Label anchor relative to the dot. */
  side: 'e' | 'w' | 'n' | 's';
}

export const cities: City[] = [
  { key: 'baku', at: [40.41, 49.87], major: true, side: 'e' },
  { key: 'sumgayit', at: [40.585, 49.65], side: 'w' },
  { key: 'alat', at: [39.95, 49.38], side: 'w' },
  { key: 'shamakhi', at: [40.63, 48.64], side: 'n' },
  { key: 'siyazan', at: [41.08, 49.11], side: 'w' },
  { key: 'hajigabul', at: [40.04, 48.94], side: 's' },
];

export interface Road {
  points: LatLon[];
  /** Trucks moving along this road (canvas only). */
  trucks: number;
}

export const roads: Road[] = [
  // Baku – Sumgayit – Siyazan
  {
    trucks: 4,
    points: [[40.41, 49.87], [40.46, 49.77], [40.53, 49.7], [40.585, 49.65], [40.7, 49.46], [40.85, 49.33], [41.0, 49.2], [41.08, 49.11], [41.25, 48.96]],
  },
  // Baku – Shamakhi
  { trucks: 3, points: [[40.46, 49.77], [40.47, 49.55], [40.5, 49.3], [40.56, 49.05], [40.6, 48.85], [40.63, 48.64], [40.66, 48.4]] },
  // Baku – Alat – south
  { trucks: 4, points: [[40.41, 49.87], [40.35, 49.78], [40.3, 49.72], [40.2, 49.6], [40.1, 49.47], [39.95, 49.38], [39.85, 49.33], [39.6, 49.05]] },
  // Alat – Hajigabul
  { trucks: 2, points: [[39.95, 49.38], [40.0, 49.12], [40.04, 48.94], [40.1, 48.45]] },
  // Absheron
  { trucks: 2, points: [[40.41, 49.87], [40.45, 50.0], [40.47, 50.12], [40.43, 50.25]] },
];

export interface Zone {
  at: LatLon;
  /** Radius in map units. */
  r: number;
  /** A truck is waiting inside (pulsing accent ring). */
  waiting?: boolean;
}

export const zones: Zone[] = [
  { at: [40.5, 49.3], r: 17, waiting: true },
  { at: [39.87, 49.33], r: 15, waiting: true },
  { at: [40.55, 49.68], r: 13 },
  { at: [40.46, 50.2], r: 12, waiting: true },
];

export type TruckTone = 'moving' | 'waiting' | 'operational' | 'offline';

/** Parked trucks (not moving along roads). */
export const parked: { at: LatLon; tone: TruckTone }[] = [
  { at: [40.502, 49.296], tone: 'waiting' },
  { at: [40.494, 49.31], tone: 'waiting' },
  { at: [39.872, 49.336], tone: 'waiting' },
  { at: [40.462, 50.196], tone: 'waiting' },
  { at: [40.28, 49.7], tone: 'operational' },
  { at: [40.77, 49.41], tone: 'operational' },
  { at: [40.58, 48.96], tone: 'operational' },
  { at: [40.06, 48.86], tone: 'offline' },
  { at: [40.9, 49.26], tone: 'offline' },
];

/** Sea path "d" for the SVG, and the same for road polylines. */
export function pathOf(points: readonly LatLon[], close = false): string {
  const d = points.map((p, i) => `${i ? 'L' : 'M'}${project(p).join(' ')}`).join('');
  return close ? `${d}Z` : d;
}

export interface Track {
  segments: { a: Point; b: Point; length: number }[];
  total: number;
  trucks: number;
}

export function trackOf(road: Road): Track {
  const segments: Track['segments'] = [];
  let total = 0;
  for (let i = 0; i < road.points.length - 1; i++) {
    const from = road.points[i];
    const to = road.points[i + 1];
    if (!from || !to) continue;
    const a = project(from);
    const b = project(to);
    const length = Math.hypot(b[0] - a[0], b[1] - a[1]);
    segments.push({ a, b, length });
    total += length;
  }
  return { segments, total, trucks: road.trucks };
}

/** Point at `distance` along a track (wraps around). */
export function pointAt(track: Track, distance: number): Point {
  let d = ((distance % track.total) + track.total) % track.total;
  for (const s of track.segments) {
    if (d <= s.length) {
      const k = s.length ? d / s.length : 0;
      return [s.a[0] + (s.b[0] - s.a[0]) * k, s.a[1] + (s.b[1] - s.a[1]) * k];
    }
    d -= s.length;
  }
  return track.segments[track.segments.length - 1]?.b ?? [0, 0];
}

/** Distance of truck `i` on a track at time `t` (seconds); odd trucks drive back towards Baku. */
export function truckDistance(track: Track, roadIndex: number, i: number, t: number): number {
  const speed = 9 + ((roadIndex * 5 + i * 3) % 7);
  const offset = (track.total / track.trucks) * i + roadIndex * 29;
  return i % 2 ? offset - t * speed : offset + t * speed;
}
