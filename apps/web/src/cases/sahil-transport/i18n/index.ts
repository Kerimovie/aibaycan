import type { Locale } from '../../types';
import az from './az';
import en, { type SahilTransportCopy } from './en';
import ru from './ru';

export type { SahilTransportCopy };

/** Sahil Transport copy per locale (Atlas TR dropped). */
export const sahilTransportCopy: Record<Locale, SahilTransportCopy> = { az, en, ru };
