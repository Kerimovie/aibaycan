'use client';

import { useEffect } from 'react';
import { createCleanup, initInView, initOffscreenPause } from './scripts/motion';
import { initChapterRail } from './scripts/rail';

/** Runs the kit's page-level scripts (Atlas CinematicPage `<script>`): entrance reveals, off-screen pause, rail. */
export function CinematicEffects() {
  useEffect(() => {
    const cleanup = createCleanup();
    cleanup.add(initInView());
    cleanup.add(initOffscreenPause());
    cleanup.add(initChapterRail());
    return cleanup.run;
  }, []);
  return null;
}
