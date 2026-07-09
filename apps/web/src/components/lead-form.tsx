'use client';

import { leadCreateSchema } from '@aibaycan/shared';
import { Button, Input, Label, Textarea } from '@aibaycan/ui';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import type { FormEvent } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

/**
 * İctimai lead formu — client komponent (RHF əvəzinə sadə controlled, çünki
 * web next-intl istifadə edir, ui-nin RHF+i18n konteksti admin-ə xasdır).
 * Native HTML input QADAĞAN → @aibaycan/ui komponentləri (docs/30).
 * Honeypot (website) + POST /api/leads.
 */
export function LeadForm() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interestedIn: '',
    message: '',
    website: '', // honeypot — gizli
  });

  function set(key: keyof typeof values, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErrors({});

    const parsed = leadCreateSchema.safeParse({
      ...values,
      phone: values.phone || undefined,
      company: values.company || undefined,
      interestedIn: values.interestedIn || undefined,
      pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
    });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === 'string' && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-success/10 px-4 py-6 text-center text-success-fg">
        {t('success')}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {status === 'error' && (
        <p className="rounded-md bg-danger/10 px-3 py-2 text-sm text-danger">{t('error')}</p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">{t('name')}</Label>
          <Input id="name" value={values.name} onChange={(e) => set('name', e.target.value)} />
          {errors.name && <p className="text-sm text-danger">{errors.name}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">{t('email')}</Label>
          <Input id="email" type="email" value={values.email} onChange={(e) => set('email', e.target.value)} />
          {errors.email && <p className="text-sm text-danger">{errors.email}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">{t('phone')}</Label>
          <Input id="phone" value={values.phone} onChange={(e) => set('phone', e.target.value)} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="company">{t('company')}</Label>
          <Input id="company" value={values.company} onChange={(e) => set('company', e.target.value)} />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="interestedIn">{t('interestedIn')}</Label>
        <Input
          id="interestedIn"
          value={values.interestedIn}
          onChange={(e) => set('interestedIn', e.target.value)}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">{t('message')}</Label>
        <Textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => set('message', e.target.value)}
        />
        {errors.message && <p className="text-sm text-danger">{errors.message}</p>}
      </div>

      {/* Honeypot — bot-lar doldurar, insanlar görməz */}
      <input
        type="text"
        name="website"
        value={values.website}
        onChange={(e) => set('website', e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <Button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? t('sending') : t('submit')}
      </Button>
    </form>
  );
}
