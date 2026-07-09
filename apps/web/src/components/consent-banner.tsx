'use client';

import { Button } from '@aibaycan/ui';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { CONSENT_KEY, getStoredConsent, storeConsent, type ConsentValue } from '@/lib/analytics';

/**
 * Cookie consent banner (GDPR) — GA4 yalnız 'granted' olduqda yüklənir.
 * Qərar verilməyibsə göstərilir; localStorage-də saxlanır.
 * Native button QADAĞAN → @aibaycan/ui Button (docs/30).
 */
export function ConsentBanner() {
  const t = useTranslations('consent');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getStoredConsent() === null);
  }, []);

  function decide(value: ConsentValue) {
    storeConsent(value);
    setVisible(false);
    // Analytics komponenti eyni tab-da dinləyir
    window.dispatchEvent(new Event(CONSENT_KEY));
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t('title')}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card p-4 shadow-lg"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-text-secondary">{t('message')}</p>
        <div className="flex shrink-0 gap-2">
          <Button variant="secondary" size="sm" onClick={() => decide('denied')}>
            {t('decline')}
          </Button>
          <Button size="sm" onClick={() => decide('granted')}>
            {t('accept')}
          </Button>
        </div>
      </div>
    </div>
  );
}
