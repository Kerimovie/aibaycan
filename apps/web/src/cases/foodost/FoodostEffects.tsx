'use client';

import { useEffect } from 'react';
import { createCleanup } from '../_shared/scripts/motion';
import { initShiftClose } from './scripts/close';
import { initStockShelves, initTechCards } from './scripts/costing';
import { initKitchenDisplays } from './scripts/kds';
import { initPass } from './scripts/pass';
import { initPos } from './scripts/pos';
import { initWaiters } from './scripts/waiter';

/** Runs the case's client scripts (the Atlas `<script>` tags of the Foodost components). Renders nothing. */
export function FoodostEffects() {
  useEffect(() => {
    const cleanup = createCleanup();
    cleanup.add(initPass());
    cleanup.add(initPos());
    cleanup.add(initKitchenDisplays());
    cleanup.add(initWaiters());
    cleanup.add(initTechCards());
    cleanup.add(initStockShelves());
    cleanup.add(initShiftClose());
    return cleanup.run;
  }, []);
  return null;
}
