// Shared data helpers of the Foodost mockups. Port of Atlas `src/components/cases/foodost/data.ts`.
import type { FoodostCopy } from './i18n';

/** The Foodost case dictionary (typed by the English file). */
export type Foodost = FoodostCopy;
export type Ticket = Foodost['service']['tickets'][number];
type Dishes = Foodost['service']['dishes'];
type Dish = Dishes[keyof Dishes];

const pick = <T extends object>(record: T, key: string): T[keyof T] | undefined =>
  Object.prototype.hasOwnProperty.call(record, key) ? record[key as keyof T] : undefined;

/** A dish of the sample menu by id (ids in the copy always exist; unknown ids fall back to a blank dish). */
export const dish = (t: Foodost, id: string): Dish => pick(t.service.dishes, id) ?? { name: id, price: 0 };

/** Channel label of a ticket (`hall`, `qr`, `kiosk`, `wolt`, `bolt`). */
export const channelLabel = (t: Foodost, channel: string): string => pick(t.service.channels, channel) ?? channel;

export const courseLabel = (t: Foodost, course: string): string => pick(t.service.courses, course) ?? course;

export const stationLabel = (t: Foodost, station: string): string => pick(t.service.stations, station) ?? station;

/**
 * A QR-like 21×21 pattern for sample receipts and table tents: three finder squares plus seeded noise.
 * It is deliberately not a real QR code (nothing to scan). Returns one SVG path in module units.
 */
export function pseudoQrPath(seed: number, size = 21): string {
  let state = seed >>> 0 || 1;
  const random = () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return ((state >>> 0) % 1000) / 1000;
  };
  const inFinder = (x: number, y: number) => (x < 8 && y < 8) || (x >= size - 8 && y < 8) || (x < 8 && y >= size - 8);
  const finderOn = (x: number, y: number) => {
    const fx = x >= size - 8 ? x - (size - 7) : x;
    const fy = y >= size - 8 ? y - (size - 7) : y;
    if (fx < 0 || fy < 0 || fx > 6 || fy > 6) return false;
    return fx === 0 || fy === 0 || fx === 6 || fy === 6 || (fx >= 2 && fx <= 4 && fy >= 2 && fy <= 4);
  };
  let d = '';
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const on = inFinder(x, y) ? finderOn(x, y) : random() > 0.52;
      if (on) d += `M${x} ${y}h1v1h-1z`;
    }
  }
  return d;
}
