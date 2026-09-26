// Port of Atlas `src/components/cases/molecion/data.ts` (unchanged).
// Geometry of the Molecion mockups: which sample line goes in which row, bar lengths, band counts and the
// number of states each scene animates through. Every word a reader sees — house, fragrance, size, status,
// label — comes from the dictionary (`cases.molecion.samples` and the chapter keys), so all four locales tell
// the same story with the same shapes.
//
// There is deliberately no cost, rate, coefficient, margin, price or percentage in this file. Those figures are
// the retailer's commercial data: the page prints `samples.masked` in their place, and the bar lengths below are
// drawn without values so the shape is all a reader takes away.

export type HouseKey = 'maison' | 'atelier' | 'noir';
export type FragranceKey = 'nuit' | 'vitrine' | 'absolu';
export type ConcentrationKey = 'edp' | 'edt' | 'parfum';
export type GenderKey = 'women' | 'men' | 'unisex';
export type SizeKey = 'ml30' | 'ml50' | 'ml75' | 'ml90' | 'ml100' | 'tester';
export type RowKey = 'nuitEdp90' | 'nuitEdp30' | 'nuitEdt90' | 'vitrineTester' | 'absolu' | 'bodyMist' | 'giftSet';
export type BucketId = 'up' | 'down' | 'newFragrance' | 'newSize' | 'missing' | 'unchanged' | 'skipped';
export type FlagKey = 'decision' | 'rounding' | 'manual' | 'similar' | 'linked' | 'ignored';
export type Move = 'up' | 'down';

/** A resolved catalogue variant: the four identity fields plus the size. */
export interface Variant {
  house: HouseKey;
  fragrance: FragranceKey;
  concentration: ConcentrationKey;
  gender: GenderKey;
  size: SizeKey;
}

/** `.mo-bar > i[data-w]` steps: 1 = 5% … 20 = 100%. */
export type BarStep = number;

/* ---------- Hero ---------- */

/**
 * States of the hero: 0 nothing read · 1–4 the fields peeled off the printed line (size, gender,
 * concentration, name) · 5 the identity card locks · 6 the cost→price chain fills and the price is stamped.
 * The static HTML renders state 6, so the whole story is there without JavaScript.
 */
export const heroStates = 7;
export const heroHold = 900;
export const heroPause = 2600;

/* ---------- The challenge: lines waiting to be matched ---------- */

export const sheetRows: { row: RowKey; move?: Move }[] = [
  { row: 'nuitEdp90', move: 'up' },
  { row: 'nuitEdt90' },
  { row: 'vitrineTester', move: 'down' },
  { row: 'absolu' },
  { row: 'giftSet' },
];

/* ---------- Reading the line ---------- */

/** One state per field peeled off the right of the line; the static HTML shows the last. */
export const parseHold = 1500;

/* ---------- Review ---------- */

/**
 * The change set of one list. `row` names the printed supplier line; the `missing` bucket has none, because a
 * fragrance can only be missing from a file that does not mention it.
 */
export interface ReviewRow extends Variant {
  row?: RowKey;
  bucket: BucketId;
  move?: Move;
  flags: FlagKey[];
  /** Ticked for this run. Lines that need a decision are never pre-ticked. */
  selected: boolean;
  /**
   * `false` for a line the importer matched to nothing — a gift set, a body mist. The screen then prints an
   * em dash in the identity, size and shelf-price cells instead of a fragrance, because inventing an identity
   * for a skipped line is exactly what this page says the system never does. The `house`/`fragrance`/… fields
   * stay on the row only to satisfy `Variant`; nothing renders them.
   */
  resolved?: false;
}

export const reviewRows: ReviewRow[] = [
  {
    row: 'nuitEdp90',
    house: 'maison',
    fragrance: 'nuit',
    concentration: 'edp',
    gender: 'women',
    size: 'ml90',
    bucket: 'up',
    move: 'up',
    flags: [],
    selected: true,
  },
  {
    row: 'nuitEdp30',
    house: 'maison',
    fragrance: 'nuit',
    concentration: 'edp',
    gender: 'women',
    size: 'ml30',
    bucket: 'newSize',
    flags: [],
    selected: true,
  },
  {
    row: 'nuitEdt90',
    house: 'maison',
    fragrance: 'nuit',
    concentration: 'edt',
    gender: 'women',
    size: 'ml90',
    bucket: 'newFragrance',
    flags: ['similar', 'decision'],
    selected: false,
  },
  {
    row: 'vitrineTester',
    house: 'atelier',
    fragrance: 'vitrine',
    concentration: 'edp',
    gender: 'women',
    size: 'tester',
    bucket: 'down',
    move: 'down',
    flags: ['manual'],
    selected: true,
  },
  {
    row: 'absolu',
    house: 'noir',
    fragrance: 'absolu',
    concentration: 'parfum',
    gender: 'unisex',
    size: 'ml75',
    bucket: 'unchanged',
    flags: ['rounding'],
    selected: false,
  },
  {
    house: 'atelier',
    fragrance: 'vitrine',
    concentration: 'edp',
    gender: 'women',
    size: 'ml50',
    bucket: 'missing',
    flags: [],
    selected: false,
  },
  {
    row: 'giftSet',
    house: 'maison',
    fragrance: 'nuit',
    concentration: 'edp',
    gender: 'women',
    size: 'ml90',
    bucket: 'skipped',
    flags: [],
    selected: false,
    resolved: false,
  },
  {
    row: 'bodyMist',
    house: 'maison',
    fragrance: 'nuit',
    concentration: 'edp',
    gender: 'women',
    size: 'ml100',
    bucket: 'skipped',
    flags: ['ignored'],
    selected: false,
    resolved: false,
  },
];

/** Lane tones: a rising cost is the bad news for a retailer, so up is red and down is green. */
export const bucketTone: Record<BucketId, 'up' | 'down' | 'accent' | 'mute'> = {
  up: 'up',
  down: 'down',
  newFragrance: 'accent',
  newSize: 'accent',
  missing: 'mute',
  unchanged: 'mute',
  skipped: 'mute',
};

/* ---------- The rules that remember ---------- */

/** The rule the owner is writing while the scene plays (index into `rules.panel.types`). */
export const newRuleIndex = 3;
export const rulesCountUp = 1200;

/* ---------- Cost becomes price ---------- */

export const chainHold = 700;

/**
 * Margin rules of falling specificity, all matching the same bottle. `true` = the rule fixes that condition,
 * `false` = it accepts anything. The first row wins because it fixes the most.
 */
export const marginRules: { house: boolean; size: boolean; band: boolean }[] = [
  { house: true, size: true, band: true },
  { house: true, size: false, band: true },
  { house: true, size: false, band: false },
  { house: false, size: false, band: false },
];

/** Cost bands drawn as a stack without edges or values; `active` is the band this bottle's cost lands in. */
export const bands: { w: BarStep }[] = [{ w: 7 }, { w: 10 }, { w: 13 }, { w: 16 }, { w: 20 }];
export const activeBand = 2;

/**
 * Live-preview rows: `rule` indexes `marginRules` (the last one is the catalogue-wide fallback). `move` is the
 * direction of the difference between the cost and the shelf price the preview would write — a direction only,
 * drawn as an arrow beside a masked figure, because the figure itself is the retailer's commercial data.
 */
export const previewRows: { fragrance: FragranceKey; house: HouseKey; size: SizeKey; rule: number; move: Move }[] = [
  { fragrance: 'nuit', house: 'maison', size: 'ml90', rule: 0, move: 'up' },
  { fragrance: 'nuit', house: 'maison', size: 'ml30', rule: 1, move: 'up' },
  { fragrance: 'vitrine', house: 'atelier', size: 'ml100', rule: 2, move: 'down' },
  { fragrance: 'vitrine', house: 'atelier', size: 'tester', rule: 2, move: 'down' },
  { fragrance: 'absolu', house: 'noir', size: 'ml75', rule: 3, move: 'up' },
];

/** History of one applied run. Days are sample dates in September; the figures themselves stay masked. */
export const logRows: { day: number; fragrance: FragranceKey; size: SizeKey; move: Move }[] = [
  { day: 12, fragrance: 'nuit', size: 'ml90', move: 'up' },
  { day: 12, fragrance: 'nuit', size: 'ml30', move: 'up' },
  { day: 11, fragrance: 'vitrine', size: 'ml100', move: 'down' },
  { day: 4, fragrance: 'absolu', size: 'ml75', move: 'up' },
];

/* ---------- The shop and the back office ---------- */

/** Bar lengths of one fragrance's profile, drawn without a single number beside them. */
export const profile = {
  accords: [18, 15, 12, 8, 5] as BarStep[],
  seasons: [18, 14, 9, 5] as BarStep[],
  times: [9, 17] as BarStep[],
};

/** Storefront cards of the phone mock: which invented bottle each one shows. */
export const shelf: { fragrance: FragranceKey; house: HouseKey; concentration: ConcentrationKey; size: SizeKey }[] = [
  { fragrance: 'nuit', house: 'maison', concentration: 'edp', size: 'ml90' },
  { fragrance: 'absolu', house: 'noir', concentration: 'parfum', size: 'ml75' },
  { fragrance: 'vitrine', house: 'atelier', concentration: 'edp', size: 'ml100' },
  { fragrance: 'nuit', house: 'maison', concentration: 'edt', size: 'ml50' },
];

/** Search suggestions of the phone mock: three letters of the first name are enough. */
export const searchQuery = 'nui';

/** The one back-office section an assistant account is granted (index into `product.admin.sections`). */
export const grantedSection = 0;
