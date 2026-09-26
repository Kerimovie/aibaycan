import type { Locale } from '../../types';
import az from './az';
import en, { type EtehsilCopy } from './en';
import ru from './ru';

export type { EtehsilCopy };

/** eTəhsil copy per locale (Atlas TR dropped). */
export const etehsilCopy: Record<Locale, EtehsilCopy> = { az, en, ru };
