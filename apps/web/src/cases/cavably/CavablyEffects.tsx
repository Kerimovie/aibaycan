'use client';

import { useEffect } from 'react';
import { createCleanup } from '../_shared/scripts/motion';
import { initAiStory } from './scripts/ai-story';
import { initBookingBoard } from './scripts/booking';
import { initFlowBuilder } from './scripts/flow';
import { initHeroInbox } from './scripts/hero';
import { initPipeline } from './scripts/pipeline';

/**
 * Runs the case's client scripts (Atlas `<script>` blocks of HeroInbox, AiStory, FlowBuilder, BookingBoard and
 * GrowthBoard, in page order). Renders nothing.
 */
export function CavablyEffects() {
  useEffect(() => {
    const cleanup = createCleanup();
    cleanup.add(initHeroInbox());
    cleanup.add(initAiStory());
    cleanup.add(initFlowBuilder());
    cleanup.add(initBookingBoard());
    cleanup.add(initPipeline());
    return cleanup.run;
  }, []);
  return null;
}
