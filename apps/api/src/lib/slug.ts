import { slugify } from '@aibaycan/shared';

/** Prisma delegate-in slug axtarışı üçün minimal interfeysi */
interface SlugFindable {
  findFirst: (args: { where: { slug: string; NOT?: { id: string } } }) => Promise<unknown>;
}

/** Prisma model delegate-ini slug interfeysinə uyğunlaşdırır (tip körpüsü) */
export function asSlugModel(model: { findFirst: (...args: never[]) => unknown }): SlugFindable {
  return model as unknown as SlugFindable;
}

/**
 * Mənbə mətndən UNİKAL slug yaradır (CLAUDE.md #070 — mərkəzi, hər entity-də təkrar yox).
 *
 * Slug admin panelində GİZLİDİR (başlıqdan avtomatik) — ona görə konflikt
 * istifadəçiyə göstərilə bilməz. Bunun əvəzinə suffiks əlavə olunur:
 *   "Veb" → veb ; təkrar → veb-2 ; yenə → veb-3 …
 *
 * `excludeId` — update zamanı entity-nin öz sətri istisna olunur.
 */
export async function ensureUniqueSlug(
  model: SlugFindable,
  source: string,
  excludeId?: string,
): Promise<string> {
  const base = slugify(source) || 'element'; // yalnız simvoldan ibarət başlıq üçün fallback

  // Praktikada bir neçə cəhddə tapılır; limit sonsuz döngəyə qarşı qorunmadır.
  const MAX_ATTEMPTS = 100;
  for (let suffix = 1; suffix <= MAX_ATTEMPTS; suffix++) {
    const candidate = suffix === 1 ? base : `${base}-${suffix}`;
    const existing = await model.findFirst({
      where: { slug: candidate, ...(excludeId ? { NOT: { id: excludeId } } : {}) },
    });
    if (!existing) return candidate;
  }

  // Son çarə — vaxt möhürü ilə zəmanətli unikal
  return `${base}-${Date.now()}`;
}
