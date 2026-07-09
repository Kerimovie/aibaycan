'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { CONSENT_KEY, getStoredConsent } from '@/lib/analytics';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * GA4 script — YALNIZ consent 'granted' olduqda yüklənir (GDPR).
 * Consent dəyişəndə (banner) storage event ilə yenidən qiymətləndirilir.
 */
export function Analytics() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    setConsent(getStoredConsent());

    // Banner consent verəndə eyni tab-da custom event atır
    function onConsentChange() {
      setConsent(getStoredConsent());
    }
    window.addEventListener(CONSENT_KEY, onConsentChange);
    return () => window.removeEventListener(CONSENT_KEY, onConsentChange);
  }, []);

  if (!GA_ID || consent !== 'granted') return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
