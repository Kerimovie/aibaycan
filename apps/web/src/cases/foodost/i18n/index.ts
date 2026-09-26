import type { Locale } from '../../types';
import az from './az';
import en, { type FoodostCopy } from './en';
import ru from './ru';

export type { FoodostCopy };

/** Foodost copy per locale (Atlas TR dropped). */
export const foodostCopy: Record<Locale, FoodostCopy> = { az, en, ru };
