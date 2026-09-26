'use client';

import { useEffect } from 'react';
import { createCleanup } from '../_shared/scripts/motion';
import { initHero } from './scripts/hero';
import { initParse } from './scripts/parse';
import { initChain } from './scripts/pricing';
import { initRules } from './scripts/rules';

/**
 * Runs the case's client scripts (Atlas `<script>`s of HeroVisual, ParseScene, RulesScene and PricingScene).
 * Order = Atlas document order. Renders nothing.
 */
export function MolecionEffects() {
  useEffect(() => {
    const cleanup = createCleanup();
    cleanup.add(initHero());
    cleanup.add(initParse());
    cleanup.add(initRules());
    cleanup.add(initChain());
    return cleanup.run;
  }, []);
  return null;
}
