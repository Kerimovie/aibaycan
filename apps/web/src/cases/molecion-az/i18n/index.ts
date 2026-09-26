import type { Locale } from '../../types';
import az from './az';
import en, { type MolecionCopy } from './en';
import ru from './ru';

export type { MolecionCopy };

/** Molecion copy per locale (Atlas TR dropped). */
export const molecionCopy: Record<Locale, MolecionCopy> = { az, en, ru };
