'use client';

import { useEffect } from 'react';
import { analytics } from '@/lib/analytics';

/**
 * Server komponentindən GA4 view event göndərmək üçün client köməkçi.
 * Consent yoxdursa gtag olmadığı üçün səssiz keçir.
 */
export function ViewTracker({ type, slug }: { type: 'caseStudy' | 'post'; slug: string }) {
  useEffect(() => {
    if (type === 'caseStudy') analytics.caseStudyView(slug);
    else analytics.postView(slug);
  }, [type, slug]);

  return null;
}
