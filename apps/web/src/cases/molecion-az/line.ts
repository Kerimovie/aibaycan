// Port of Atlas `src/components/cases/molecion/line.ts` (unchanged).
// Splitting a printed supplier line the way the importer reads it: from the right.
// The tokens come from the dictionary (`parse.steps[].token`, in peel order: size, gender, concentration, name)
// and are identical in all four locales, so every locale peels the same line into the same pieces.

export interface LineSegment {
  text: string;
  /** Peel order: 1 is taken off the right first, and the house is whatever is left standing last. */
  step: number;
}

export function peelLine(line: string, steps: { token: string }[]): { segments: LineSegment[]; house: string } {
  let rest = line;
  const tail: string[] = [];
  for (const { token } of steps) {
    if (!rest.endsWith(token)) break;
    tail.push(token);
    rest = rest.slice(0, -token.length).trimEnd();
  }
  const house = rest;
  const segments: LineSegment[] = [
    { text: house, step: tail.length + 1 },
    ...tail.map((text, i) => ({ text, step: i + 1 })).reverse(),
  ];
  return { segments, house };
}
