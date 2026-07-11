import { useTranslations } from 'next-intl';
import { SectionHeading } from './section-heading';

/**
 * Ana səhifə üçün əlavə orijinal bölmələr — modern marketinq-landing strukturu
 * (why-us, how-it-works, stats, FAQ). Server komponentlər, öz dizayn sistemimiz.
 */

// ── Niyə biz ─────────────────────────────────────────────────
export function WhyUs() {
  const t = useTranslations('home.whyUs');
  const points = [
    { title: t('point1Title'), text: t('point1Text'), icon: <IconTarget /> },
    { title: t('point2Title'), text: t('point2Text'), icon: <IconUsers /> },
    { title: t('point3Title'), text: t('point3Text'), icon: <IconEye /> },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} align="center" />
      <ul className="mt-12 grid gap-6 sm:grid-cols-3">
        {points.map((p) => (
          <li key={p.title} className="rounded-2xl border border-border bg-card p-7 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary">
              {p.icon}
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-text-primary">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{p.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// ── Necə işləyirik ───────────────────────────────────────────
export function HowItWorks() {
  const t = useTranslations('home.howItWorks');
  const steps = [
    { n: '01', title: t('step1Title'), text: t('step1Text') },
    { n: '02', title: t('step2Title'), text: t('step2Text') },
    { n: '03', title: t('step3Title'), text: t('step3Text') },
  ];
  return (
    <section className="border-y border-border bg-surface-1">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow={t('eyebrow')} title={t('title')} align="center" />
        <ol className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <span className="text-5xl font-bold tracking-tight text-primary/20">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ── Stat zolağı (rəqəmlər PLACEHOLDER — real dəyərlərlə əvəz et) ─
export function StatsBand() {
  const t = useTranslations('home.stats');
  const stats = [
    { value: '50+', label: t('item1') },
    { value: '30+', label: t('item2') },
    { value: '8+', label: t('item3') },
    { value: '99%', label: t('item4') },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-8 rounded-3xl border border-border bg-card px-8 py-12 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm text-text-secondary">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── FAQ (native details — RSC-safe, JS-siz açılır) ──────────
export function Faq() {
  const t = useTranslations('faq');
  const items = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') },
  ];
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading eyebrow={t('eyebrow')} title={t('title')} align="center" />
      <div className="mt-10 divide-y divide-border border-y border-border">
        {items.map((item) => (
          <details key={item.q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-semibold text-text-primary [&::-webkit-details-marker]:hidden">
              {item.q}
              <ChevronDown className="shrink-0 text-text-tertiary transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="pb-5 text-text-secondary">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

// ── Hero vizualı (orijinal abstrakt "məhsul preview") ───────
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Əsas pəncərə */}
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-primary/10">
        <div className="flex items-center gap-1.5 border-b border-border bg-surface-1 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="space-y-4 p-5">
          <div className="h-28 rounded-xl bg-gradient-to-br from-primary-500 to-primary-800" />
          <div className="grid grid-cols-3 gap-3">
            <div className="h-16 rounded-lg bg-surface-2" />
            <div className="h-16 rounded-lg bg-surface-2" />
            <div className="h-16 rounded-lg bg-surface-2" />
          </div>
          <div className="space-y-2">
            <div className="h-3 w-3/4 rounded-full bg-surface-2" />
            <div className="h-3 w-1/2 rounded-full bg-surface-2" />
          </div>
        </div>
      </div>
      {/* Üzən stat kartı */}
      <div className="absolute -left-8 top-12 flex items-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl">
        <span className="text-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 17l6-6 4 4 8-8M21 7v6M15 7h6" />
          </svg>
        </span>
        <span className="text-lg font-bold text-text-primary">+35%</span>
      </div>
      {/* Üzən AI nişanı */}
      <div className="absolute -right-6 bottom-10 flex items-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-primary">✨</span>
        <span className="text-sm font-semibold text-text-primary">AI</span>
      </div>
    </div>
  );
}

// ── İkonlar ──────────────────────────────────────────────────
function IconTarget() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconEye() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
