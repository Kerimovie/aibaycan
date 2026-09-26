'use client';

import { useEffect } from 'react';
import { createCleanup } from '../_shared/scripts/motion';
import { initFleetMaps } from './scripts/fleet-map';
import { initSequences } from './scripts/sequence';
import { initStopTimelines } from './scripts/stop-timeline';
import { initTickers } from './scripts/ticker';
import { initWaitingClocks } from './scripts/waiting-clock';

/**
 * Runs the case's client scripts (Atlas `<script>`s of HeroConsole, FleetDashboard, StopTimeline, WaitingClock and
 * InvoiceReader / ReconcileMatch / ReportWorkbook), in page order. Renders nothing.
 */
export function SahilTransportEffects() {
  useEffect(() => {
    const cleanup = createCleanup();
    cleanup.add(initFleetMaps());
    cleanup.add(initTickers());
    cleanup.add(initStopTimelines());
    cleanup.add(initWaitingClocks());
    cleanup.add(initSequences());
    return cleanup.run;
  }, []);
  return null;
}
