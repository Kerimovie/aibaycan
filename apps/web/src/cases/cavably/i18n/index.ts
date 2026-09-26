import type { Locale } from '../../types';
import az from './az';
import en, { type CavablyCopy } from './en';
import ru from './ru';

export type { CavablyCopy };
export type { CavChannel, CavConversation, CavMessage, CavState } from './en';

/** Cavably copy per locale (Atlas TR dropped). */
export const cavablyCopy: Record<Locale, CavablyCopy> = { az, en, ru };
