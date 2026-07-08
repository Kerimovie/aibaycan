/**
 * Mətndən URL-safe slug yaradır.
 * Azərbaycan hərfləri ASCII qarşılıqlarına çevrilir.
 */
const AZ_MAP: Record<string, string> = {
  ə: 'e',
  ğ: 'g',
  ı: 'i',
  ç: 'c',
  ş: 's',
  ö: 'o',
  ü: 'u',
};

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[əğıçşöü]/g, (ch) => AZ_MAP[ch] ?? ch)
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '') // diakritikləri sil
    .replace(/[^a-z0-9]+/g, '-') // qeyri-alfanumerik → tire
    .replace(/^-+|-+$/g, '') // baş/son tireləri sil
    .slice(0, 120);
}
