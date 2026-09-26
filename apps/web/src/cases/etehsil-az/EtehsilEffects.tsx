'use client';

import { useEffect } from 'react';
import { initEtehsilScenes } from './scenes';

/** Runs the case's client script (Atlas `<script>` at the end of cases/etehsil/Case.astro). Renders nothing. */
export function EtehsilEffects() {
  useEffect(() => initEtehsilScenes(), []);
  return null;
}
