'use client';

import { leadCreateSchema } from '@aibaycan/shared';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { analytics } from '@/lib/analytics';

type Status = 'idle' | 'sending' | 'success' | 'error';

const PROJECT_TYPES = [
  { id: 'typeWeb', value: 'Veb platforma', title: 'Veb platforma', desc: 'Sayt, portal və web app' },
  { id: 'typeErp', value: 'ERP / CRM', title: 'ERP / CRM', desc: 'Daxili biznes sistemi' },
  { id: 'typeSaas', value: 'SaaS məhsulu', title: 'SaaS məhsulu', desc: 'Bulud əsaslı məhsul' },
  { id: 'typeCommerce', value: 'E-commerce', title: 'E-commerce', desc: 'Onlayn satış platforması' },
  { id: 'typeAI', value: 'AI həlli', title: 'AI həlli', desc: 'AI, media və avtomatlaşdırma' },
  { id: 'typeOther', value: 'Digər', title: 'Digər', desc: 'Fərqli rəqəmsal ehtiyac' },
] as const;

const BUDGETS = ['₼5,000-dək', '₼5,000–₼15,000', '₼15,000–₼30,000', '₼30,000+', 'Hələ müəyyən edilməyib'];
const TIMELINES = ['Dərhal', '1 ay ərzində', '1–3 ay ərzində', '3 aydan sonra', 'Hələ planlaşdırılır'];

const EMPTY = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
  website: '', // honeypot — gizli
};

/**
 * Əlaqə formu — dizayn 1:1, real /api/leads endpoint-inə bağlı.
 * Sahələr leadCreateSchema-ya map olunur; budget → budgetRange, timeline message-ə əlavə olunur.
 * Honeypot (website) + Zod validasiyası + analytics.
 */
export function ContactForm() {
  const [values, setValues] = useState({ ...EMPTY });
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});

  function set(key: keyof typeof EMPTY, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (invalid[key]) setInvalid((s) => ({ ...s, [key]: false }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    // Tələb olunan sahələr (dizaynla eyni: ad, email, layihə növü, mesaj)
    const nextInvalid: Record<string, boolean> = {};
    if (!values.fullName.trim()) nextInvalid.fullName = true;
    if (!values.email.trim()) nextInvalid.email = true;
    if (!values.message.trim()) nextInvalid.message = true;
    const noType = !values.projectType;

    if (Object.keys(nextInvalid).length || noType) {
      setInvalid(nextInvalid);
      setMessage({
        type: 'error',
        text: 'Zəhmət olmasa ulduzla işarələnmiş sahələri doldurun və layihə növünü seçin.',
      });
      return;
    }

    const composedMessage = values.timeline
      ? `${values.message}\n\nBaşlama vaxtı: ${values.timeline}`
      : values.message;

    const parsed = leadCreateSchema.safeParse({
      name: values.fullName,
      email: values.email,
      phone: values.phone || undefined,
      company: values.company || undefined,
      interestedIn: values.projectType || undefined,
      budgetRange: values.budget || undefined,
      message: composedMessage,
      website: values.website,
      pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
    });

    if (!parsed.success) {
      setMessage({ type: 'error', text: 'Məlumatlarda xəta var. Zəhmət olmasa yoxlayın.' });
      return;
    }

    setStatus('sending');
    setMessage(null);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });
      if (res.ok) {
        analytics.leadSubmit(values.projectType || undefined);
        setStatus('success');
        setMessage({
          type: 'success',
          text: 'Təşəkkürlər! Sorğunuz göndərildi — 1 iş günü ərzində sizinlə əlaqə saxlayacağıq.',
        });
        setValues({ ...EMPTY });
        setInvalid({});
      } else {
        setStatus('error');
        setMessage({ type: 'error', text: 'Sorğu göndərilmədi. Bir azdan yenidən cəhd edin.' });
      }
    } catch {
      setStatus('error');
      setMessage({ type: 'error', text: 'Şəbəkə xətası. Bir azdan yenidən cəhd edin.' });
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        <div className="form-field">
          <label className="form-label" htmlFor="fullName">
            Ad və soyad <span>*</span>
          </label>
          <input
            className="form-control"
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Adınızı daxil edin"
            value={values.fullName}
            aria-invalid={invalid.fullName ? 'true' : 'false'}
            onChange={(e) => set('fullName', e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="company">
            Şirkət / brend
          </label>
          <input
            className="form-control"
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Şirkətin adı"
            value={values.company}
            onChange={(e) => set('company', e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="email">
            E-mail <span>*</span>
          </label>
          <input
            className="form-control"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            value={values.email}
            aria-invalid={invalid.email ? 'true' : 'false'}
            onChange={(e) => set('email', e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="phone">
            Telefon
          </label>
          <input
            className="form-control"
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+994 ..."
            value={values.phone}
            onChange={(e) => set('phone', e.target.value)}
          />
        </div>

        <fieldset className="form-field full">
          <legend className="form-label">
            Layihənin növü <span>*</span>
          </legend>
          <div className="project-type-group">
            {PROJECT_TYPES.map((t) => (
              <div className="type-option" key={t.id}>
                <input
                  id={t.id}
                  name="projectType"
                  type="radio"
                  value={t.value}
                  checked={values.projectType === t.value}
                  onChange={(e) => set('projectType', e.target.value)}
                />
                <label htmlFor={t.id}>
                  <strong>{t.title}</strong>
                  <span>{t.desc}</span>
                </label>
              </div>
            ))}
          </div>
        </fieldset>

        <div className="form-field">
          <label className="form-label" htmlFor="budget">
            Təxmini büdcə
          </label>
          <select
            className="form-control"
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(e) => set('budget', e.target.value)}
          >
            <option value="">Seçin</option>
            {BUDGETS.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="timeline">
            Başlama vaxtı
          </label>
          <select
            className="form-control"
            id="timeline"
            name="timeline"
            value={values.timeline}
            onChange={(e) => set('timeline', e.target.value)}
          >
            <option value="">Seçin</option>
            {TIMELINES.map((tl) => (
              <option key={tl}>{tl}</option>
            ))}
          </select>
        </div>

        <div className="form-field full">
          <label className="form-label" htmlFor="message">
            Layihə haqqında <span>*</span>
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            placeholder="Məqsədi, əsas funksiyaları və hazırkı mərhələni qısa təsvir edin..."
            value={values.message}
            aria-invalid={invalid.message ? 'true' : 'false'}
            onChange={(e) => set('message', e.target.value)}
            required
          />
        </div>
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

      <div className="form-actions">
        <p className="form-privacy">
          Göndərməklə məlumatlarınızın yalnız layihə sorğusuna cavab vermək üçün istifadə edilməsinə razılıq
          verirsiniz.
        </p>
        <button className="form-submit focus-ring" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Göndərilir' : 'Sorğunu göndər'}
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        className={`form-message ${message ? `${message.type} show` : ''}`}
        role="status"
        aria-live="polite"
      >
        {message?.text}
      </div>
    </form>
  );
}
