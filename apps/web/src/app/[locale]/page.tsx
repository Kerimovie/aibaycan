import type { CSSProperties } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { JsonLd, organizationJsonLd } from '@/components/json-ld';

type Props = { params: Promise<{ locale: string }> };

function stagger(i: number): CSSProperties {
  return { ['--i']: i } as CSSProperties;
}

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ArrowUpRight = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd data={organizationJsonLd()} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="top" className="relative -mt-[76px] min-h-screen overflow-hidden pt-32 sm:pt-36">
        <div className="hero-cinema" aria-hidden>
          <span className="hero-beam b1" />
          <span className="hero-beam b2" />
          <span className="hero-beam b3" />
          <span className="hero-flare" />
        </div>
        <div className="grid-bg absolute inset-0 -z-20 opacity-75" aria-hidden />
        <div className="ambient-orb one" aria-hidden />
        <div className="ambient-orb two" aria-hidden />

        <div className="mx-auto grid max-w-[1380px] items-center gap-16 px-5 pb-20 sm:px-7 lg:grid-cols-[1.04fr_.96fr] lg:px-10 lg:pb-28">
          <div className="relative z-10 max-w-4xl lg:-translate-y-10">
            <div className="eyebrow mb-7">
              <span className="eyebrow-dot" />
              AI-güclü rəqəmsal məhsul studiyası
              <span className="premium-status hidden sm:inline-flex">Bakı · Global</span>
            </div>

            <h1 className="display-title">
              <span className="cinematic-line hero-title-line block">
                <span>
                  İdeyanı <span className="gradient-word">işləyən</span>
                </span>
              </span>
              <span className="cinematic-line hero-title-line block">
                <span>məhsula çeviririk.</span>
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-black/58 sm:text-[19px]">
              Veb platformalar, ERP/CRM, e-commerce, SaaS və AI həlləri qururuq. Sadəcə
              təqdimat yox — real istifadə olunan, ölçülə bilən məhsullar.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#work" className="button-primary focus-ring">
                İşlərimizə baxın
                <ArrowRight />
              </a>
              <a href="#contact" className="button-secondary focus-ring">
                Əlaqə saxla
                <ArrowUpRight />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-black/58">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Yeni layihələr qəbul olunur
              </span>
              <span className="hidden h-4 w-px bg-black/10 sm:block" />
              <span>Strategiya · Dizayn · Development</span>
            </div>

            <a href="#about" className="hero-scroll-cue focus-ring rounded-lg" aria-label="Növbəti bölməyə keç">
              <span className="hero-scroll-line" />
              Kəşf et
            </a>
          </div>

          <div className="browser-stage fade-up relative lg:translate-y-7" data-parallax="0.035">
            <div className="browser-shell">
              <div className="flex h-12 items-center justify-between border-b border-black/[.07] bg-white/76 px-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff7a73]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f5c45b]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#59c986]" />
                </div>
                <div className="flex h-7 w-[46%] items-center justify-center rounded-lg border border-black/[.06] bg-black/[.035] text-[10px] font-semibold text-black/35">
                  app.aibaycan.az
                </div>
                <div className="h-7 w-7 rounded-lg bg-black/[.035]" />
              </div>

              <div className="browser-inner relative min-h-[560px] p-5 sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[.14em] text-black/35">Control room</div>
                    <div className="mt-1 text-xl font-extrabold tracking-[-.04em]">Məhsul göstəriciləri</div>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/design/img-4.svg" alt="" className="h-10 w-10 rounded-xl object-cover shadow-lg" />
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/90 bg-white/75 p-4 shadow-sm">
                    <div className="text-[10px] font-bold uppercase tracking-[.12em] text-black/35">Gəlir</div>
                    <div className="mt-2 text-lg font-extrabold tracking-[-.04em]">₼84.2K</div>
                    <div className="mt-1 text-[10px] font-bold text-emerald-600">↗ 18.4%</div>
                  </div>
                  <div className="rounded-2xl border border-white/90 bg-white/75 p-4 shadow-sm">
                    <div className="text-[10px] font-bold uppercase tracking-[.12em] text-black/35">Aktiv</div>
                    <div className="mt-2 text-lg font-extrabold tracking-[-.04em]">12.8K</div>
                    <div className="mt-1 text-[10px] font-bold text-violet">↗ 9.7%</div>
                  </div>
                  <div className="rounded-2xl border border-white/90 bg-white/75 p-4 shadow-sm">
                    <div className="text-[10px] font-bold uppercase tracking-[.12em] text-black/35">Konversiya</div>
                    <div className="mt-2 text-lg font-extrabold tracking-[-.04em]">7.4%</div>
                    <div className="mt-1 text-[10px] font-bold text-sky-600">↗ 2.1%</div>
                  </div>
                </div>

                <div className="mt-4 rounded-[1.2rem] border border-white/90 bg-white/76 p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[.12em] text-black/35">Böyümə</div>
                      <div className="mt-1 text-sm font-bold">Son 12 ay</div>
                    </div>
                    <div className="rounded-lg bg-violet/10 px-2.5 py-1.5 text-[10px] font-bold text-violet">+38.6%</div>
                  </div>
                  <svg className="mini-chart mt-4 h-40 w-full" viewBox="0 0 500 180" fill="none" aria-label="Böyümə qrafiki">
                    <defs>
                      <linearGradient id="chartFill" x1="250" y1="10" x2="250" y2="180" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#EE1027" stopOpacity=".23" />
                        <stop offset="1" stopColor="#EE1027" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 148C50 151 72 137 104 130C145 121 164 143 204 112C244 81 254 97 293 79C330 62 353 86 390 58C429 29 455 42 500 19V180H0V148Z" fill="url(#chartFill)" />
                    <path d="M0 148C50 151 72 137 104 130C145 121 164 143 204 112C244 81 254 97 293 79C330 62 353 86 390 58C429 29 455 42 500 19" stroke="#EE1027" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="500" cy="19" r="6" fill="#EE1027" />
                    <circle cx="500" cy="19" r="12" fill="#EE1027" fillOpacity=".12" />
                  </svg>
                </div>

                <div className="mt-4 grid grid-cols-[1.1fr_.9fr] gap-4">
                  <div className="rounded-[1.2rem] border border-white/90 bg-[#020824] p-5 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-[.12em] text-white/45">AI insight</span>
                      <span className="h-2 w-2 rounded-full bg-violet shadow-[0_0_14px_rgba(160,120,255,.9)]" />
                    </div>
                    <div className="mt-7 text-lg font-extrabold leading-tight tracking-[-.04em]">Satış ehtimalı bu həftə yüksəlir.</div>
                    <div className="mt-3 text-xs leading-5 text-white/52">Data modeli son davranışları analiz etdi.</div>
                  </div>
                  <div className="rounded-[1.2rem] border border-white/90 bg-white/76 p-5 shadow-sm">
                    <div className="text-[10px] font-bold uppercase tracking-[.12em] text-black/35">Tapşırıqlar</div>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-violet" /><span className="h-2 flex-1 rounded-full bg-black/[.07]" /></div>
                      <div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-sky-400" /><span className="h-2 w-[76%] rounded-full bg-black/[.07]" /></div>
                      <div className="flex items-center gap-3"><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2 w-[88%] rounded-full bg-black/[.07]" /></div>
                    </div>
                    <div className="mt-6 text-2xl font-extrabold tracking-[-.05em]">84%</div>
                    <div className="text-[10px] font-semibold text-black/36">tamamlanıb</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="float-card a glass rounded-2xl p-4 shadow-violet">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <div>
                  <div className="text-xs font-extrabold">Deploy uğurludur</div>
                  <div className="mt-1 text-[10px] font-semibold text-black/54">Production · 12 saniyə əvvəl</div>
                </div>
              </div>
            </div>

            <div className="float-card b glass rounded-2xl p-4 shadow-soft">
              <div className="text-[10px] font-bold uppercase tracking-[.12em] text-black/35">Yeni lead</div>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-2xl font-extrabold tracking-[-.05em]">+24</span>
                <span className="mb-1 text-[10px] font-bold text-emerald-600">bu həftə</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1380px] px-5 pb-10 sm:px-7 lg:px-10">
          <div className="marquee border-y border-black/[.07] py-5">
            <div className="marquee-track gap-12 pr-12 text-sm font-bold uppercase tracking-[.16em] text-[#020824]">
              {[0, 1].map((r) => (
                <span key={r} className="flex items-center gap-12 pr-12">
                  {['Web platforms', 'ERP / CRM', 'SaaS products', 'AI media', 'Automation', 'Data analytics'].map((w) => (
                    <span key={w} className="flex items-center gap-12">
                      <span>{w}</span>
                      <span className="text-violet/60">•</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="premium-divider" aria-hidden />

      {/* ── NİYƏ BİZ ──────────────────────────────────────────── */}
      <section id="about" className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="fade-up max-w-3xl">
            <div className="section-kicker">Niyə biz</div>
            <h2 className="section-title mt-4">Gözəl görünən yox, <span className="text-violet">işləyən sistemlər.</span></h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-black/52 sm:text-lg">
              Texnologiyanı biznes məqsədinə bağlayır, ideyanı strategiyadan real istifadəyə qədər aparırıq.
            </p>
          </div>

          <div className="stagger mt-14 grid gap-5 md:grid-cols-3">
            {[
              { t: 'Nəticə-yönlü', d: 'Hər qərarı biznes nəticəsi, istifadəçi davranışı və ölçülə bilən göstəricilərlə əsaslandırırıq.', p: 'M4 19V9m6 10V5m6 14v-7m4 7H2' },
              { t: 'Uçdan-uca komanda', d: 'Strategiya, UX/UI, development, data və launch — hamısı bir komandada, bir istiqamətdə.', p: 'M7 8a4 4 0 1 0 0-8M17 8a4 4 0 1 0 0-8M1 23v-3a6 6 0 0 1 12 0v3M11 23v-3a6 6 0 0 1 12 0v3' },
              { t: 'Şəffaf proses', d: 'Aydın mərhələlər, real vaxt statusu və sürprizsiz kommunikasiya ilə prosesə tam görünürlük.', p: 'M3 12h18M12 3v18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4' },
            ].map((c, i) => (
              <article key={c.t} className="soft-card fade-up rounded-[1.4rem] p-7 sm:p-8" style={stagger(i)}>
                <div className="icon-wrap">
                  <svg width="23" height="23" viewBox="0 0 24 24" fill="none" aria-hidden><path d={c.p} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
                </div>
                <h3 className="mt-7 text-2xl font-extrabold tracking-[-.045em]">{c.t}</h3>
                <p className="mt-3 leading-7 text-black/50">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── İŞLƏR ─────────────────────────────────────────────── */}
      <section id="work" className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="fade-up flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="section-kicker">Seçilmiş işlər</div>
              <h2 className="section-title mt-4">Canlı məhsullar.<br /><span className="text-violet">Real nəticələr.</span></h2>
            </div>
            <p className="max-w-md text-base leading-7 text-black/50">
              Dizayn vitrinindən kənara çıxan, gündəlik istifadə olunan platforma və sistemlər.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Etehsil — böyük */}
            <article className="project-card fade-up lg:col-span-2 lg:min-h-[38rem]">
              <div className="project-art mesh-purple">
                <div className="screen-frame !left-[13%] !top-[10%] !h-[72%] !w-[74%]">
                  <div className="flex h-10 items-center gap-2 border-b border-black/[.07] bg-white px-4">
                    <div className="h-2 w-2 rounded-full bg-violet" />
                    <div className="h-2 w-24 rounded-full bg-black/[.06]" />
                    <div className="ml-auto h-6 w-16 rounded-lg bg-violet/10" />
                  </div>
                  <div className="grid h-[calc(100%-2.5rem)] grid-cols-[.28fr_.72fr]">
                    <div className="border-r border-black/[.06] bg-[#f7f4fd] p-4">
                      <div className="h-8 w-8 rounded-xl bg-[#020824]" />
                      <div className="mt-7 space-y-3">
                        <div className="h-2 w-[82%] rounded-full bg-black/[.08]" />
                        <div className="h-2 w-[65%] rounded-full bg-black/[.06]" />
                        <div className="h-2 w-[76%] rounded-full bg-black/[.06]" />
                        <div className="h-2 w-[58%] rounded-full bg-black/[.06]" />
                      </div>
                    </div>
                    <div className="bg-white p-5 sm:p-8">
                      <div className="text-[10px] font-bold uppercase tracking-[.12em] text-black/30">Təhsil paneli</div>
                      <div className="mt-2 h-5 w-36 rounded-md bg-[#020824]" />
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        <div className="h-20 rounded-xl bg-violet/10" />
                        <div className="h-20 rounded-xl bg-sky-100" />
                        <div className="h-20 rounded-xl bg-amber-100" />
                      </div>
                      <div className="mt-4 h-36 rounded-2xl bg-gradient-to-br from-[#f0e9ff] to-[#faf8ff] p-4">
                        <div className="flex h-full items-end gap-2">
                          {['40%', '68%', '54%', '82%', '72%', '95%'].map((h, i) => (
                            <div key={i} className="flex-1 rounded-t bg-violet/40" style={{ height: h }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-overlay flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="project-chip">Veb & platformalar</span>
                  <h3 className="mt-3 text-3xl font-extrabold tracking-[-.05em] text-white sm:text-5xl">Etehsil.az</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/66 sm:text-base">Onlayn təhsil, kontent və istifadəçi idarəetməsini birləşdirən rəqəmsal platforma.</p>
                </div>
                <a className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-extrabold text-black transition hover:-translate-y-1" href="https://etehsil.az" target="_blank" rel="noopener">
                  Canlı bax <ArrowUpRight />
                </a>
              </div>
            </article>

            {/* Foodost */}
            <article className="project-card fade-up">
              <div className="project-art mesh-cyan">
                <div className="screen-frame">
                  <div className="flex h-10 items-center border-b border-black/[.07] bg-white px-4">
                    <div className="h-2 w-20 rounded bg-black/[.1]" />
                    <div className="ml-auto h-6 w-6 rounded-lg bg-emerald-100" />
                  </div>
                  <div className="bg-[#f7fafb] p-5">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-2 h-24 rounded-xl bg-white p-4 shadow-sm">
                        <div className="h-2 w-20 rounded bg-black/[.08]" />
                        <div className="mt-4 h-6 w-28 rounded bg-[#18352e]" />
                      </div>
                      <div className="h-24 rounded-xl bg-[#18352e]" />
                    </div>
                    <div className="mt-3 h-32 rounded-xl bg-white p-4 shadow-sm">
                      <div className="grid h-full grid-cols-6 items-end gap-2">
                        {['55%', '75%', '48%', '92%', '64%', '78%'].map((h, i) => (
                          <div key={i} className="rounded-t bg-emerald-300" style={{ height: h }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-overlay">
                <span className="project-chip">SaaS / POS</span>
                <h3 className="mt-3 text-3xl font-extrabold tracking-[-.05em] text-white sm:text-4xl">Foodost</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/66">Restoran sifarişləri, POS və idarəetmə prosesləri üçün bulud əsaslı SaaS.</p>
                <a className="focus-ring mt-5 inline-flex items-center gap-2 rounded-lg text-sm font-extrabold text-white" href="https://foodost.com" target="_blank" rel="noopener">
                  Canlı bax <ArrowUpRight />
                </a>
              </div>
            </article>

            {/* Molecion */}
            <article className="project-card fade-up">
              <div className="project-art mesh-amber">
                <div className="screen-frame">
                  <div className="flex h-10 items-center justify-between border-b border-black/[.07] bg-white px-4">
                    <div className="text-[10px] font-black tracking-[.2em] text-black/70">MOLECION</div>
                    <div className="flex gap-2"><div className="h-2 w-2 rounded-full bg-black/20" /><div className="h-2 w-2 rounded-full bg-black/20" /></div>
                  </div>
                  <div className="relative h-full overflow-hidden bg-[#f5eee8]">
                    <div className="absolute left-5 top-5 text-[9px] font-bold uppercase tracking-[.12em] text-black/54">New collection</div>
                    <div className="absolute left-5 top-12 max-w-[55%] text-2xl font-black leading-none tracking-[-.06em] text-[#3d2226]">Scent that becomes memory.</div>
                    <div className="absolute bottom-6 right-5 h-[58%] w-[31%] rounded-t-[2rem] bg-gradient-to-b from-[#dcc7a4] to-[#7c4b2a] shadow-2xl" />
                    <div className="absolute bottom-10 left-5 h-8 w-24 rounded-lg bg-[#3d2226]" />
                  </div>
                </div>
              </div>
              <div className="project-overlay">
                <span className="project-chip">E-commerce</span>
                <h3 className="mt-3 text-3xl font-extrabold tracking-[-.05em] text-white sm:text-4xl">Molecion.az</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/66">Premium parfümeriya təcrübəsi üçün sürətli və vizual e-commerce platforması.</p>
                <a className="focus-ring mt-5 inline-flex items-center gap-2 rounded-lg text-sm font-extrabold text-white" href="https://molecion.az" target="_blank" rel="noopener">
                  Canlı bax <ArrowUpRight />
                </a>
              </div>
            </article>

            {/* Cavably */}
            <article className="project-card fade-up">
              <div className="project-art mesh-pink">
                <div className="screen-frame">
                  <div className="flex h-10 items-center gap-3 border-b border-black/[.07] bg-white px-4">
                    <div className="h-6 w-6 rounded-lg bg-pink-500" />
                    <div className="h-2 w-20 rounded bg-black/[.09]" />
                    <div className="ml-auto h-6 w-16 rounded-lg bg-pink-100" />
                  </div>
                  <div className="bg-white p-5">
                    <div className="rounded-2xl bg-gradient-to-br from-pink-100 to-violet-100 p-5">
                      <div className="h-3 w-24 rounded bg-black/70" />
                      <div className="mt-2 h-2 w-36 rounded bg-black/[.10]" />
                      <div className="mt-7 grid grid-cols-3 gap-3">
                        <div className="h-28 rounded-xl bg-white/75" />
                        <div className="h-28 rounded-xl bg-white/75" />
                        <div className="h-28 rounded-xl bg-white/75" />
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="h-20 rounded-xl border border-black/[.06]" />
                      <div className="h-20 rounded-xl border border-black/[.06]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-overlay">
                <span className="project-chip">Rəqəmsal məhsul</span>
                <h3 className="mt-3 text-3xl font-extrabold tracking-[-.05em] text-white sm:text-4xl">Cavably</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/66">Rəqəmsal məhsul ideyasının strateji dizayn və development ilə həyata keçirilməsi.</p>
                <a className="focus-ring mt-5 inline-flex items-center gap-2 rounded-lg text-sm font-extrabold text-white" href="https://cavably.com" target="_blank" rel="noopener">
                  Canlı bax <ArrowUpRight />
                </a>
              </div>
            </article>

            {/* Sahil Transport */}
            <article className="project-card fade-up">
              <div className="project-art mesh-green">
                <div className="screen-frame">
                  <div className="flex h-10 items-center border-b border-black/[.07] bg-white px-4">
                    <div className="h-2 w-28 rounded bg-black/[.1]" />
                    <div className="ml-auto h-6 w-6 rounded-lg bg-emerald-100" />
                  </div>
                  <div className="bg-[#f6faf8] p-5">
                    <div className="flex gap-3">
                      <div className="h-28 flex-1 rounded-xl bg-[#18352e]" />
                      <div className="h-28 flex-1 rounded-xl bg-white shadow-sm" />
                    </div>
                    <div className="mt-3 h-36 rounded-xl bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="h-2 w-20 rounded bg-black/[.08]" />
                        <div className="h-6 w-12 rounded-lg bg-emerald-100" />
                      </div>
                      <div className="mt-5 space-y-3">
                        <div className="flex items-center gap-3"><span className="h-7 w-7 rounded-lg bg-emerald-100" /><span className="h-2 flex-1 rounded bg-black/[.06]" /></div>
                        <div className="flex items-center gap-3"><span className="h-7 w-7 rounded-lg bg-amber-100" /><span className="h-2 w-[76%] rounded bg-black/[.06]" /></div>
                        <div className="flex items-center gap-3"><span className="h-7 w-7 rounded-lg bg-sky-100" /><span className="h-2 w-[88%] rounded bg-black/[.06]" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-overlay">
                <span className="project-chip">ERP / CRM</span>
                <h3 className="mt-3 text-3xl font-extrabold tracking-[-.05em] text-white sm:text-4xl">Sahil Transport ERP</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/66">Nəqliyyat əməliyyatları, resurslar və hesabatlar üçün fərdi idarəetmə sistemi.</p>
                <a className="focus-ring mt-5 inline-flex items-center gap-2 rounded-lg text-sm font-extrabold text-white" href="#contact">
                  Demo istə <ArrowRight />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="premium-divider" aria-hidden />

      {/* ── XİDMƏTLƏR ─────────────────────────────────────────── */}
      <section id="services" className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="fade-up max-w-4xl">
            <div className="section-kicker">Xidmətlər</div>
            <h2 className="section-title mt-4">Bir ideya üçün lazım olan <span className="text-violet">bütün bacarıqlar.</span></h2>
          </div>

          <div className="stagger mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { n: '01', t: 'Veb saytlar & platformalar', d: 'Müasir, sürətli, SEO-dostu saytlar və genişlənə bilən rəqəmsal platformalar.', p: <><rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.7" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></> },
              { n: '02', t: 'ERP / CRM sistemləri', d: 'Biznes əməliyyatlarını bir mərkəzdən idarə edən fərdi və çevik sistemlər.', p: <path d="M4 5h16v5H4zM4 14h7v5H4zM15 14h5v5h-5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /> },
              { n: '03', t: 'AI həllər & media', d: 'AI ilə şəkil, video, mahnı generasiyası və ağıllı biznes həlləri.', p: <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3ZM18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /> },
              { n: '04', t: 'Biznes avtomatlaşdırma', d: 'Təkrarlanan proseslər, inteqrasiyalar və əməliyyat axınlarının avtomatlaşdırılması.', p: <path d="M5 7h14M5 17h14M8 4v6M16 14v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /> },
              { n: '05', t: 'Data arxitektura & analitika', d: 'Etibarlı data infrastrukturu, dashboardlar və biznes analitikası.', p: <><ellipse cx="12" cy="5" rx="7" ry="3" stroke="currentColor" strokeWidth="1.7" /><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" stroke="currentColor" strokeWidth="1.7" /></> },
              { n: '06', t: 'SaaS məhsul inkişafı', d: 'Sıfırdan məhsul strategiyası, MVP və bulud əsaslı SaaS platformaları.', p: <><path d="M8 16c-3 0-5-1.8-5-4s2-4 4.5-4c.8-3 3.1-5 6.2-5 3.8 0 6.8 3 6.8 6.6 1.3.5 2.5 1.7 2.5 3.4 0 2-1.7 3-4 3H8Z" stroke="currentColor" strokeWidth="1.7" /><path d="M8 21h8M12 16v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></> },
            ].map((s, i) => (
              <article key={s.n} className="soft-card fade-up rounded-[1.25rem] p-6" style={stagger(i)}>
                <div className="flex items-start justify-between gap-4">
                  <div className="icon-wrap">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>{s.p}</svg>
                  </div>
                  <span className="text-xs font-extrabold text-black/20">{s.n}</span>
                </div>
                <h3 className="mt-8 text-xl font-extrabold tracking-[-.035em]">{s.t}</h3>
                <p className="mt-3 leading-7 text-black/50">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI & MEDIA (dark) ─────────────────────────────────── */}
      <section className="dark-showcase py-24 sm:py-32">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/design/img-5.svg" alt="" className="brand-watermark" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="fade-up flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-[.14em] text-[#FF7180]">AI &amp; Media Lab</div>
              <h2 className="section-title mt-4 text-white">Təsəvvürü <span className="text-violet">vizuala, səsə və hərəkətə</span> çeviririk.</h2>
            </div>
            <p className="max-w-md leading-7 text-white/60">
              Brend kampaniyaları, məhsul vizualları, generativ video və AI əsaslı media eksperimentləri.
            </p>
          </div>

          <div className="stagger mt-14 grid gap-5 md:grid-cols-3">
            <article className="film-card fade-up" style={stagger(0)}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(238,16,39,.58),transparent_25%),radial-gradient(circle_at_25%_65%,rgba(32,55,113,.62),transparent_32%),linear-gradient(145deg,#020617,#071642)]" />
              <div className="scan" />
              <div className="absolute left-[13%] top-[18%] h-44 w-44 rounded-full border border-white/15 shadow-[0_0_60px_rgba(161,107,255,.30)]" />
              <div className="absolute left-[28%] top-[34%] h-32 w-32 rounded-full bg-gradient-to-br from-white/30 to-transparent blur-sm" />
              <div className="absolute bottom-0 left-0 z-10 p-6">
                <div className="text-[10px] font-extrabold uppercase tracking-[.16em] text-white/60">Generative visual</div>
                <h3 className="mt-2 text-2xl font-extrabold tracking-[-.04em]">AI görüntü istehsalı</h3>
              </div>
            </article>

            <article className="film-card fade-up" style={stagger(1)}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(255,67,84,.60),transparent_23%),radial-gradient(circle_at_75%_70%,rgba(238,16,39,.42),transparent_32%),linear-gradient(145deg,#05091b,#330814)]" />
              <div className="scan" />
              <div className="absolute left-[14%] top-[18%] flex h-40 w-[72%] items-center justify-center gap-2">
                {['h-12', 'h-24', 'h-16', 'h-32', 'h-20', 'h-28', 'h-14', 'h-36', 'h-20', 'h-12'].map((h, i) => (
                  <span key={i} className={`${h} w-1 rounded-full bg-white/50`} />
                ))}
              </div>
              <div className="absolute bottom-0 left-0 z-10 p-6">
                <div className="text-[10px] font-extrabold uppercase tracking-[.16em] text-white/60">Sound intelligence</div>
                <h3 className="mt-2 text-2xl font-extrabold tracking-[-.04em]">AI musiqi &amp; səs</h3>
              </div>
            </article>

            <article className="film-card fade-up" style={stagger(2)}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_26%,rgba(66,95,168,.50),transparent_23%),radial-gradient(circle_at_28%_72%,rgba(238,16,39,.50),transparent_32%),linear-gradient(145deg,#020617,#071642)]" />
              <div className="scan" />
              <div className="absolute left-[14%] top-[17%] aspect-video w-[72%] overflow-hidden rounded-xl border border-white/15 bg-white/5">
                <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent,rgba(255,255,255,.14),transparent)]" />
                <div className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-black shadow-2xl">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="m9 7 8 5-8 5V7Z" /></svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 z-10 p-6">
                <div className="text-[10px] font-extrabold uppercase tracking-[.16em] text-white/60">Motion systems</div>
                <h3 className="mt-2 text-2xl font-extrabold tracking-[-.04em]">Generativ video</h3>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="premium-divider" aria-hidden />

      {/* ── PROSES ────────────────────────────────────────────── */}
      <section id="process" className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="fade-up max-w-3xl">
            <div className="section-kicker">Necə işləyirik</div>
            <h2 className="section-title mt-4">Aydın proses. <span className="text-violet">Sürətli irəliləyiş.</span></h2>
          </div>

          <div className="relative mt-16 grid gap-8 lg:grid-cols-3">
            <div className="process-line hidden lg:block" />
            {[
              { n: '01', t: 'Kəşf', d: 'Məqsədi, istifadəçini, bazarı və texniki reallığı birlikdə dəqiqləşdiririk.' },
              { n: '02', t: 'Dizayn & development', d: 'Prototipdən işlək məhsula qədər iterativ, test olunan və görünən inkişaf prosesi.' },
              { n: '03', t: 'Təhvil & böyümə', d: 'Launch, monitorinq, optimizasiya və məhsulun növbəti mərhələlərə hazırlanması.' },
            ].map((s) => (
              <article key={s.n} className="fade-up relative pt-2">
                <div className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-violet/20 bg-white text-lg font-extrabold text-violet shadow-soft">{s.n}</div>
                <h3 className="mt-8 text-2xl font-extrabold tracking-[-.04em]">{s.t}</h3>
                <p className="mt-3 max-w-sm leading-7 text-black/50">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS (count-up) ──────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="fade-up overflow-hidden rounded-[1.7rem] border border-black/[.07] bg-white/70 shadow-soft">
            <div className="grid divide-y divide-black/[.07] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              {[
                { c: 50, s: '+', l: 'Layihə' },
                { c: 30, s: '+', l: 'Müştəri' },
                { c: 8, s: '+', l: 'İl təcrübə' },
                { c: 99, s: '%', l: 'Vaxtında təhvil' },
              ].map((st) => (
                <div key={st.l} className="p-7 sm:p-9">
                  <div className="stat-number">
                    <span className="count-up" data-count={st.c}>0</span>
                    <span className="text-violet">{st.s}</span>
                  </div>
                  <div className="mt-2 text-sm font-semibold text-black/42">{st.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RƏYLƏR ────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="fade-up max-w-3xl">
            <div className="section-kicker">Rəylər</div>
            <h2 className="section-title mt-4">Məhsulu bizimlə quranların <span className="text-violet">təcrübəsi.</span></h2>
          </div>

          <div className="stagger mt-14 grid gap-5 lg:grid-cols-3">
            {[
              { q: 'Komanda biznes prosesini tez başa düşdü və həllin hər mərhələsini aydın göstərdi.', a: 'ERP layihəsi · placeholder' },
              { q: 'Sadəcə sayt deyil, satış və idarəetmə üçün işləyən tam məhsul əldə etdik.', a: 'E-commerce · placeholder' },
              { q: 'Dizayn, texnologiya və kommunikasiya bir-birini tamamladı. Proses sürətli və şəffaf idi.', a: 'SaaS məhsulu · placeholder' },
            ].map((r, i) => (
              <article key={i} className="soft-card fade-up rounded-[1.35rem] p-7" style={stagger(i)}>
                <div className="quote-mark">“</div>
                <p className="mt-4 text-lg font-semibold leading-8 tracking-[-.02em] text-black/72">{r.q}</p>
                <div className="mt-8 border-t border-black/[.07] pt-5">
                  <div className="font-extrabold">Müştəri rəyi</div>
                  <div className="mt-1 text-sm text-black/54">{r.a}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1380px] gap-12 px-5 sm:px-7 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
          <div className="fade-up">
            <div className="section-kicker">FAQ</div>
            <h2 className="section-title mt-4">Sualınız var?<br /><span className="text-violet">Başlayaq.</span></h2>
            <p className="mt-6 max-w-md leading-7 text-black/50">
              Layihənin mərhələsi fərq etmir — ideya, MVP və ya mövcud sistemin yenilənməsi.
            </p>
          </div>

          <div className="fade-up divide-y divide-black/[.08] border-y border-black/[.08]">
            {[
              { q: 'Layihənin qiyməti necə müəyyən olunur?', a: 'Əhatə dairəsi, texniki mürəkkəblik, inteqrasiyalar və mərhələlər əsasında şəffaf təklif hazırlanır.' },
              { q: 'MVP ilə başlamaq mümkündür?', a: 'Bəli. Ən vacib funksiyaları prioritetləşdirib sürətli MVP qurur, real istifadəçi rəyi ilə inkişaf etdiririk.' },
              { q: 'Dizayn və development birlikdə edilir?', a: 'Bəli. UX/UI, frontend, backend, data və launch eyni məhsul komandası daxilində koordinasiya olunur.' },
              { q: 'Mövcud sistemə inteqrasiya edə bilərsiniz?', a: 'API, ödəniş, CRM, ERP, analitika və digər sistemlərlə inteqrasiyalar layihənin əsas hissəsi ola bilər.' },
              { q: 'Təhvildən sonra dəstək verilir?', a: 'Bəli. Monitorinq, texniki dəstək, optimizasiya və yeni funksiyalar üçün davamlı əməkdaşlıq mümkündür.' },
            ].map((f) => (
              <details key={f.q} className="faq group py-2">
                <summary className="focus-ring flex items-center justify-between gap-6 rounded-xl py-5 text-left">
                  <span className="text-lg font-extrabold tracking-[-.025em]">{f.q}</span>
                  <span className="faq-plus grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/[.10] text-xl">+</span>
                </summary>
                <p className="max-w-2xl pb-6 pr-12 leading-7 text-black/50">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section id="contact" className="pb-24 pt-10 sm:pb-32">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="cta-panel fade-up rounded-[2rem] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/design/img-6.svg" alt="" className="cta-brand-mark" aria-hidden />
            <div className="relative z-10 max-w-4xl">
              <div className="text-xs font-extrabold uppercase tracking-[.15em] text-white/62">Növbəti addım</div>
              <h2 className="mt-5 text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold leading-[.96] tracking-[-.052em]">
                Növbəti layihəni<br />birlikdə quraq.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/66 sm:text-lg">
                İdeyanızı, mövcud probleminizi və ya inkişaf planınızı paylaşın. Sizə uyğun texniki istiqaməti birlikdə müəyyən edək.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="mailto:hello@aibaycan.az" className="focus-ring inline-flex min-h-[3.3rem] items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-extrabold text-[#020824] shadow-xl transition hover:-translate-y-1">
                  hello@aibaycan.az <ArrowRight />
                </a>
                <a href={`/${locale}/contact`} className="focus-ring inline-flex min-h-[3.3rem] items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white/15">
                  Əlaqə formu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
