/** Joins class names, skipping falsy values (Astro's `class:list` for the simple cases). */
export function cx(...names: (string | false | null | undefined)[]): string {
  return names.filter(Boolean).join(' ');
}
