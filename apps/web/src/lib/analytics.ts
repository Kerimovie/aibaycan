/**
 * GA4 analytics — YALNIZ consent verildikdə yüklənir (GDPR).
 * Consent `localStorage` açarında saxlanır; banner idarə edir.
 * Event tracking: lead_submit, case_study_view, post_view (docs/28).
 */

export const CONSENT_KEY = 'aibaycan_analytics_consent';

export type ConsentValue = 'granted' | 'denied';

/** Saxlanmış consent (yoxdursa null — banner göstərilir) */
export function getStoredConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === 'granted' || value === 'denied' ? value : null;
}

export function storeConsent(value: ConsentValue): void {
  window.localStorage.setItem(CONSENT_KEY, value);
}

type GtagArgs = [string, ...unknown[]];

declare global {
  interface Window {
    dataLayer?: GtagArgs[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** GA4 event göndər (gtag yüklənməyibsə səssiz keçir — consent yoxdur) */
export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params ?? {});
}

/** Konkret event-lər (docs/28 — lead-gen ölçmə) */
export const analytics = {
  leadSubmit: (service?: string) => trackEvent('lead_submit', { service }),
  caseStudyView: (slug: string) => trackEvent('case_study_view', { slug }),
  postView: (slug: string) => trackEvent('post_view', { slug }),
};
