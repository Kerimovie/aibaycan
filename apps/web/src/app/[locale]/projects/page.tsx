import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { CaseStudyEffects } from '@/components/case-study-effects';
import { Link } from '@/i18n/navigation';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'projects' });
  return { title: t('title') };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <CaseStudyEffects />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="case-hero -mt-[76px]">
        <div className="grid-bg absolute inset-0 -z-20 opacity-60" aria-hidden />
        <div className="hero-cinema" aria-hidden>
          <span className="hero-beam b1" />
          <span className="hero-beam b2" />
          <span className="hero-flare" />
        </div>

        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="case-hero-shell">
            <div className="case-hero-copy fade-up">
              <div className="eyebrow mb-7">
                <span className="eyebrow-dot" />
                Portfolio · seçilmiş layihələr
              </div>

              <h1 className="case-hero-title">
                Qurduğumuz sistemlər.
                <br />
                <span className="accent">Yaratdığımız nəticələr.</span>
              </h1>

              <p className="case-hero-lead mt-8">
                İllər ərzində müxtəlif sahələr üçün qurduğumuz rəqəmsal məhsullardan seçilmiş nümunələr. Hər layihəni
                vizual görünüşdən daha dərindən — məhsul məntiqi, sistem arxitekturası və yaratdığı biznes dəyəri ilə
                təqdim edirik.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-semibold text-black/55">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-red)]" />
                  Uzunmüddətli məhsul təcrübəsi
                </span>
                <span className="hidden h-4 w-px bg-black/10 sm:block" />
                <span>Strategiya · UX/UI · Development · Launch</span>
              </div>

              <a className="works-scroll-cue focus-ring" href="#etehsil" aria-label="Layihələrə keç">
                <span className="works-scroll-track">
                  <span />
                </span>
                Seçilmiş işləri kəşf et
              </a>
            </div>

            <div className="hero-mini-stage fade-up" aria-hidden>
              <div className="cinema-reel">
                <div className="cinema-reel-head">
                  <div className="cinema-reel-brand">
                    <span className="cinema-live-dot" />
                    Portfolio reel
                  </div>
                  <div className="cinema-timecode">00:01:12</div>
                </div>

                <div className="cinema-reel-screen">
                  <div className="cinema-reel-grid" />
                  <div className="cinema-scanline" />
                  <div className="cinema-frame frame-a">
                    <div className="cinema-frame-top">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="cinema-frame-body">
                      <div className="cinema-frame-kicker">EDTECH PLATFORM</div>
                      <div className="cinema-frame-title">Etehsil.az</div>
                      <div className="cinema-bars">
                        <i style={{ height: '35%' }} />
                        <i style={{ height: '62%' }} />
                        <i style={{ height: '48%' }} />
                        <i style={{ height: '82%' }} />
                        <i style={{ height: '68%' }} />
                        <i style={{ height: '92%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="cinema-frame frame-b">
                    <div className="cinema-frame-top">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="cinema-frame-body">
                      <div className="cinema-frame-kicker">SAAS / POS</div>
                      <div className="cinema-frame-title">Foodost</div>
                      <div className="cinema-metric-row">
                        <b>84%</b>
                        <em>+18.4%</em>
                      </div>
                    </div>
                  </div>

                  <div className="cinema-frame frame-c">
                    <div className="cinema-frame-body">
                      <div className="cinema-frame-kicker">ERP SYSTEM</div>
                      <div className="cinema-frame-title">Operations</div>
                      <div className="cinema-lines">
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>

                  <div className="cinema-reel-caption">
                    <div>
                      <span className="cinema-caption-label">Selected work</span>
                      <strong>Strategy → Product → Growth</strong>
                    </div>
                    <span className="cinema-play">▶</span>
                  </div>
                </div>

                <div className="cinema-reel-footer">
                  <div className="cinema-reel-stat">
                    <b>70+</b>
                    <span>Layihə təcrübəsi</span>
                  </div>
                  <div className="cinema-reel-stat">
                    <b>8+</b>
                    <span>İl məhsul inkişafı</span>
                  </div>
                  <div className="cinema-reel-stat">
                    <b>30+</b>
                    <span>Müştəri əməkdaşlığı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="premium-divider" aria-hidden />

      {/* ── STICKY JUMPBAR ───────────────────────────────────── */}
      <section id="projects" className="relative z-20 pt-8">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <nav className="project-jumpbar fade-up" aria-label="Layihələr">
            <a href="#etehsil">
              <span className="dot" />
              Etehsil.az
            </a>
            <a href="#foodost">
              <span className="dot" />
              Foodost
            </a>
            <a href="#molecion">
              <span className="dot" />
              Molecion.az
            </a>
            <a href="#cavably">
              <span className="dot" />
              Cavably
            </a>
            <a href="#sahil">
              <span className="dot" />
              Sahil Transport ERP
            </a>
          </nav>
        </div>
      </section>

      {/* ── ETEHSIL ──────────────────────────────────────────── */}
      <section id="etehsil" className="case-study" data-chapter="01" data-project="Etehsil.az">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="case-study-grid">
            <div className="case-visual fade-up">
              <div className="case-visual-frame mesh-purple">
                <div className="screen-frame !left-[9%] !top-[10%] !h-[74%] !w-[82%]">
                  <div className="flex h-11 items-center border-b border-black/[.07] bg-white px-4">
                    <div className="h-7 w-7 rounded-lg bg-[var(--brand-red)]" />
                    <div className="ml-3 h-2 w-24 rounded-full bg-black/[.08]" />
                    <div className="ml-auto flex gap-2">
                      <div className="h-7 w-16 rounded-lg bg-black/[.035]" />
                      <div className="h-7 w-7 rounded-lg bg-black/[.05]" />
                    </div>
                  </div>
                  <div className="grid h-[calc(100%-2.75rem)] grid-cols-[.25fr_.75fr]">
                    <div className="border-r border-black/[.06] bg-[#f7f6fb] p-5">
                      <div className="text-[9px] font-black uppercase tracking-[.15em] text-black/28">Learning</div>
                      <div className="mt-6 space-y-4">
                        <div className="h-2 w-[80%] rounded bg-[var(--brand-red)]/25" />
                        <div className="h-2 w-[64%] rounded bg-black/[.06]" />
                        <div className="h-2 w-[74%] rounded bg-black/[.06]" />
                        <div className="h-2 w-[58%] rounded bg-black/[.06]" />
                      </div>
                    </div>
                    <div className="bg-white p-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-[9px] font-black uppercase tracking-[.13em] text-black/28">Dashboard</div>
                          <div className="mt-2 h-5 w-40 rounded-md bg-[var(--brand-navy)]" />
                        </div>
                        <div className="h-8 w-20 rounded-lg bg-[var(--brand-red)]/10" />
                      </div>
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        <div className="h-24 rounded-xl bg-red-50" />
                        <div className="h-24 rounded-xl bg-sky-50" />
                        <div className="h-24 rounded-xl bg-amber-50" />
                      </div>
                      <div className="mt-4 h-44 rounded-2xl bg-[#f8f7fc] p-5">
                        <svg className="h-full w-full" viewBox="0 0 500 170" fill="none">
                          <path
                            d="M0 142C52 151 77 126 118 128C159 130 173 99 220 105C270 111 277 74 325 77C374 80 402 47 500 28"
                            stroke="#EE1027"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-copy fade-up">
              <div className="case-index">01 · EdTech platform</div>
              <h2 className="case-title">Etehsil.az</h2>
              <p className="case-subtitle">
                Onlayn təhsil, kontent idarəetməsi və istifadəçi təcrübəsini bir sistemdə birləşdirən platforma.
              </p>

              <div className="case-meta-row">
                <span className="case-pill primary">Canlı məhsul</span>
                <span className="case-pill">Veb platforma</span>
                <span className="case-pill">Dashboard</span>
                <span className="case-pill">Content system</span>
              </div>

              <div className="case-story">
                <article className="story-card">
                  <div className="story-label">Problem</div>
                  <h3>Kontent, istifadəçi və tədris axını ayrı-ayrı idarə olunurdu.</h3>
                  <p>Məqsəd bütün təhsil təcrübəsini vahid və genişlənə bilən sistemə toplamaq idi.</p>
                </article>
                <article className="story-card">
                  <div className="story-label">Həll</div>
                  <h3>Rol əsaslı platforma və idarəetmə paneli.</h3>
                  <p>Tələbə, müəllim və administrator üçün fərqli ssenarilər eyni məhsul arxitekturasında birləşdirildi.</p>
                </article>
              </div>

              <div className="case-modules">
                <div className="case-modules-title">Qurduğumuz əsas hissələr</div>
                <div className="module-grid">
                  <div className="module-item">
                    <span className="module-icon">01</span>Kurs və kontent idarəetməsi
                  </div>
                  <div className="module-item">
                    <span className="module-icon">02</span>Şəxsi istifadəçi paneli
                  </div>
                  <div className="module-item">
                    <span className="module-icon">03</span>Rol və icazə sistemi
                  </div>
                  <div className="module-item">
                    <span className="module-icon">04</span>Analitika və hesabatlar
                  </div>
                </div>
              </div>

              <div className="case-action-row">
                <Link className="case-link-primary focus-ring" href="/projects/etehsil-az">
                  Keysi oxu →
                </Link>
                <a className="case-link-secondary focus-ring" href="https://etehsil.az" target="_blank" rel="noopener">
                  Canlı məhsula bax ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOODOST ──────────────────────────────────────────── */}
      <section id="foodost" className="case-study reverse" data-chapter="02" data-project="Foodost">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="case-study-grid">
            <div className="case-visual fade-up">
              <div className="case-visual-frame mesh-cyan">
                <div className="screen-frame">
                  <div className="flex h-10 items-center border-b border-black/[.07] bg-white px-4">
                    <div className="h-2 w-20 rounded bg-black/[.09]" />
                    <div className="ml-auto h-6 w-6 rounded-lg bg-emerald-100" />
                  </div>
                  <div className="bg-[#f6faf9] p-5">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-2 h-24 rounded-xl bg-white p-4 shadow-sm">
                        <div className="h-2 w-16 rounded bg-black/[.08]" />
                        <div className="mt-4 text-2xl font-black tracking-[-.05em] text-[#18352e]">₼4,860</div>
                      </div>
                      <div className="h-24 rounded-xl bg-[#18352e] p-4">
                        <div className="h-2 w-10 rounded bg-white/25" />
                        <div className="mt-4 text-xl font-black text-white">84%</div>
                      </div>
                    </div>
                    <div className="mt-3 h-32 rounded-xl bg-white p-4 shadow-sm">
                      <div className="grid h-full grid-cols-7 items-end gap-2">
                        <span className="h-[38%] rounded-t bg-emerald-200" />
                        <span className="h-[68%] rounded-t bg-emerald-300" />
                        <span className="h-[52%] rounded-t bg-emerald-200" />
                        <span className="h-[86%] rounded-t bg-emerald-500" />
                        <span className="h-[71%] rounded-t bg-emerald-300" />
                        <span className="h-[91%] rounded-t bg-emerald-600" />
                        <span className="h-[64%] rounded-t bg-emerald-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-copy fade-up">
              <div className="case-index">02 · Restaurant SaaS</div>
              <h2 className="case-title">Foodost</h2>
              <p className="case-subtitle">
                Restoran sifarişləri, POS, stok və gündəlik əməliyyatları bir mərkəzdən idarə edən SaaS məhsulu.
              </p>

              <div className="case-meta-row">
                <span className="case-pill primary">Canlı məhsul</span>
                <span className="case-pill">SaaS</span>
                <span className="case-pill">POS</span>
                <span className="case-pill">Operations</span>
              </div>

              <div className="case-story">
                <article className="story-card">
                  <div className="story-label">Problem</div>
                  <h3>Restoran əməliyyatları çoxsaylı alətlər arasında bölünürdü.</h3>
                  <p>Sifariş, stok, menyu və hesabatların eyni platformada işləməsi lazım idi.</p>
                </article>
                <article className="story-card">
                  <div className="story-label">Həll</div>
                  <h3>Modul POS və əməliyyat idarəetmə sistemi.</h3>
                  <p>Gündəlik axınlar sadələşdirildi, məlumatlar vahid dashboard-da toplandı.</p>
                </article>
              </div>

              <div className="case-modules">
                <div className="case-modules-title">Qurduğumuz əsas hissələr</div>
                <div className="module-grid">
                  <div className="module-item">
                    <span className="module-icon">01</span>POS və sifariş axını
                  </div>
                  <div className="module-item">
                    <span className="module-icon">02</span>Menyu idarəetməsi
                  </div>
                  <div className="module-item">
                    <span className="module-icon">03</span>Stok və inventar
                  </div>
                  <div className="module-item">
                    <span className="module-icon">04</span>Satış analitikası
                  </div>
                </div>
              </div>

              <div className="case-action-row">
                <Link className="case-link-primary focus-ring" href="/projects/foodost">
                  Keysi oxu →
                </Link>
                <a className="case-link-secondary focus-ring" href="https://foodost.com" target="_blank" rel="noopener">
                  Canlı məhsula bax ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOLECION ─────────────────────────────────────────── */}
      <section id="molecion" className="case-study" data-chapter="03" data-project="Molecion.az">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="case-study-grid">
            <div className="case-visual fade-up">
              <div className="case-visual-frame mesh-amber">
                <div className="screen-frame">
                  <div className="flex h-10 items-center justify-between border-b border-black/[.07] bg-white px-4">
                    <div className="text-[10px] font-black tracking-[.2em] text-black/70">MOLECION</div>
                    <div className="flex gap-2">
                      <span className="h-2 w-2 rounded-full bg-black/20" />
                      <span className="h-2 w-2 rounded-full bg-black/20" />
                    </div>
                  </div>
                  <div className="relative h-full overflow-hidden bg-[#f5eee8]">
                    <div className="absolute left-5 top-5 text-[9px] font-bold uppercase tracking-[.12em] text-black/40">
                      New collection
                    </div>
                    <div className="absolute left-5 top-12 max-w-[57%] text-2xl font-black leading-none tracking-[-.06em] text-[#3d2226]">
                      Scent that becomes memory.
                    </div>
                    <div className="absolute bottom-6 right-5 h-[58%] w-[31%] rounded-t-[2rem] bg-gradient-to-b from-[#dcc7a4] to-[#7c4b2a] shadow-2xl" />
                    <div className="absolute bottom-10 left-5 h-8 w-24 rounded-lg bg-[#3d2226]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="case-copy fade-up">
              <div className="case-index">03 · E-commerce experience</div>
              <h2 className="case-title">Molecion.az</h2>
              <p className="case-subtitle">
                Premium parfümeriya brendi üçün vizual məhsul kəşfi və satış təcrübəsini birləşdirən e-commerce
                platforması.
              </p>

              <div className="case-meta-row">
                <span className="case-pill primary">Canlı məhsul</span>
                <span className="case-pill">E-commerce</span>
                <span className="case-pill">Catalog UX</span>
                <span className="case-pill">Brand system</span>
              </div>

              <div className="case-story">
                <article className="story-card">
                  <div className="story-label">Problem</div>
                  <h3>Premium məhsul hissi klassik mağaza interfeysində itirdi.</h3>
                  <p>İstifadəçi həm məhsulu rahat tapmalı, həm də brend atmosferini hiss etməli idi.</p>
                </article>
                <article className="story-card">
                  <div className="story-label">Həll</div>
                  <h3>Vizual kəşf və satış axınını birləşdirən mağaza.</h3>
                  <p>Kataloq, məhsul səhifələri və checkout vahid premium vizual dilə salındı.</p>
                </article>
              </div>

              <div className="case-modules">
                <div className="case-modules-title">Qurduğumuz əsas hissələr</div>
                <div className="module-grid">
                  <div className="module-item">
                    <span className="module-icon">01</span>Məhsul kataloqu və filtrlər
                  </div>
                  <div className="module-item">
                    <span className="module-icon">02</span>Premium məhsul səhifəsi
                  </div>
                  <div className="module-item">
                    <span className="module-icon">03</span>Səbət və checkout
                  </div>
                  <div className="module-item">
                    <span className="module-icon">04</span>Admin və stok idarəetməsi
                  </div>
                </div>
              </div>

              <div className="case-action-row">
                <Link className="case-link-primary focus-ring" href="/projects/molecion-az">
                  Keysi oxu →
                </Link>
                <a className="case-link-secondary focus-ring" href="https://molecion.az" target="_blank" rel="noopener">
                  Canlı məhsula bax ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAVABLY ──────────────────────────────────────────── */}
      <section id="cavably" className="case-study reverse" data-chapter="04" data-project="Cavably">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="case-study-grid">
            <div className="case-visual fade-up">
              <div className="case-visual-frame mesh-pink">
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
                  </div>
                </div>
              </div>
            </div>

            <div className="case-copy fade-up">
              <div className="case-index">04 · Digital product</div>
              <h2 className="case-title">Cavably</h2>
              <p className="case-subtitle">
                Məhsul strategiyası, onboarding və əsas istifadəçi axınlarını birləşdirən rəqəmsal platforma.
              </p>

              <div className="case-meta-row">
                <span className="case-pill primary">Canlı məhsul</span>
                <span className="case-pill">Product UX</span>
                <span className="case-pill">Web app</span>
                <span className="case-pill">Onboarding</span>
              </div>

              <div className="case-story">
                <article className="story-card">
                  <div className="story-label">Problem</div>
                  <h3>İdeya var idi, amma məhsul axını və prioritetlər aydın deyildi.</h3>
                  <p>İlk versiyada istifadəçi üçün ən vacib ssenariləri seçmək lazım idi.</p>
                </article>
                <article className="story-card">
                  <div className="story-label">Həll</div>
                  <h3>Strategiyadan işlək məhsul skeletinə keçid.</h3>
                  <p>Onboarding, əsas workflow və şəxsi panel vahid məhsul məntiqində quruldu.</p>
                </article>
              </div>

              <div className="case-modules">
                <div className="case-modules-title">Qurduğumuz əsas hissələr</div>
                <div className="module-grid">
                  <div className="module-item">
                    <span className="module-icon">01</span>Məhsul onboarding-i
                  </div>
                  <div className="module-item">
                    <span className="module-icon">02</span>Əsas istifadəçi workflow-u
                  </div>
                  <div className="module-item">
                    <span className="module-icon">03</span>Şəxsi hesab və profil
                  </div>
                  <div className="module-item">
                    <span className="module-icon">04</span>Responsive web app
                  </div>
                </div>
              </div>

              <div className="case-action-row">
                <Link className="case-link-primary focus-ring" href="/projects/cavably">
                  Keysi oxu →
                </Link>
                <a className="case-link-secondary focus-ring" href="https://cavably.com" target="_blank" rel="noopener">
                  Canlı məhsula bax ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAHIL ────────────────────────────────────────────── */}
      <section id="sahil" className="case-study" data-chapter="05" data-project="Sahil Transport ERP">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="case-study-grid">
            <div className="case-visual fade-up">
              <div className="case-visual-frame mesh-green">
                <div className="screen-frame">
                  <div className="flex h-10 items-center border-b border-black/[.07] bg-white px-4">
                    <div className="h-2 w-28 rounded bg-black/[.1]" />
                    <div className="ml-auto h-6 w-6 rounded-lg bg-emerald-100" />
                  </div>
                  <div className="bg-[#f6faf8] p-5">
                    <div className="flex gap-3">
                      <div className="h-28 flex-1 rounded-xl bg-[#18352e] p-4">
                        <div className="h-2 w-14 rounded bg-white/20" />
                        <div className="mt-5 text-2xl font-black text-white">126</div>
                      </div>
                      <div className="h-28 flex-1 rounded-xl bg-white p-4 shadow-sm">
                        <div className="h-2 w-14 rounded bg-black/[.07]" />
                        <div className="mt-5 text-2xl font-black text-[#18352e]">42</div>
                      </div>
                    </div>
                    <div className="mt-3 h-36 rounded-xl bg-white p-4 shadow-sm">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="h-7 w-7 rounded-lg bg-emerald-100" />
                          <span className="h-2 flex-1 rounded bg-black/[.06]" />
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="h-7 w-7 rounded-lg bg-amber-100" />
                          <span className="h-2 w-[76%] rounded bg-black/[.06]" />
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="h-7 w-7 rounded-lg bg-sky-100" />
                          <span className="h-2 w-[88%] rounded bg-black/[.06]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-copy fade-up">
              <div className="case-index">05 · Private ERP system</div>
              <h2 className="case-title">Sahil Transport ERP</h2>
              <p className="case-subtitle">
                Nəqliyyat əməliyyatları, resurslar və hesabatları birləşdirən fərdi daxili idarəetmə sistemi.
              </p>

              <div className="case-meta-row">
                <span className="case-pill primary">Demo ilə</span>
                <span className="case-pill">ERP / CRM</span>
                <span className="case-pill">Operations</span>
                <span className="case-pill">Private system</span>
              </div>

              <div className="case-story">
                <article className="story-card">
                  <div className="story-label">Problem</div>
                  <h3>Əməliyyat məlumatları müxtəlif fayl və kanallarda saxlanılırdı.</h3>
                  <p>İdarəetmə üçün vahid məlumat mənbəyi və real vaxt görünürlüğü lazım idi.</p>
                </article>
                <article className="story-card">
                  <div className="story-label">Həll</div>
                  <h3>Fərdi ERP və əməliyyat dashboard-u.</h3>
                  <p>Gündəlik proseslər, resurslar və hesabatlar bir platformada toplandı.</p>
                </article>
              </div>

              <div className="case-modules">
                <div className="case-modules-title">Qurduğumuz əsas hissələr</div>
                <div className="module-grid">
                  <div className="module-item">
                    <span className="module-icon">01</span>Əməliyyat idarəetməsi
                  </div>
                  <div className="module-item">
                    <span className="module-icon">02</span>Resurs və nəqliyyat uçotu
                  </div>
                  <div className="module-item">
                    <span className="module-icon">03</span>Rol və icazə sistemi
                  </div>
                  <div className="module-item">
                    <span className="module-icon">04</span>Hesabat və analitika
                  </div>
                </div>
              </div>

              <div className="case-action-row">
                <Link className="case-link-primary focus-ring" href="/projects/sahil-transport">
                  Keysi oxu →
                </Link>
                <a className="case-link-secondary focus-ring" href="#contact">
                  Demo istə →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LAYİHƏLƏRİN İÇİNDƏ ────────────────────────────────── */}
      <section className="inside-products py-24 sm:py-32">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="relative z-10 max-w-4xl fade-up">
            <div className="text-xs font-extrabold uppercase tracking-[.15em] text-white/58">Layihələrin içində</div>
            <h2 className="section-title mt-4 text-white">
              Bir məhsulun görünməyən
              <br />
              <span className="text-violet">amma vacib qatları.</span>
            </h2>
            <p className="mt-6 max-w-2xl leading-7 text-white/60">
              Portfolio yalnız vizual ekranlardan ibarət deyil. Hər layihənin arxasında bu sistem qatları dayanır.
            </p>
          </div>

          <div className="inside-grid mt-14">
            <article className="inside-card fade-up">
              <div className="inside-card-index">01 · PRODUCT</div>
              <h3>Məhsul strategiyası</h3>
              <p>Prioritetlər, istifadəçi ssenariləri və MVP xəritəsi.</p>
            </article>
            <article className="inside-card fade-up">
              <div className="inside-card-index">02 · UX</div>
              <h3>İnformasiya arxitekturası</h3>
              <p>Mürəkkəb prosesləri aydın ekran və axınlara çevirmək.</p>
            </article>
            <article className="inside-card fade-up">
              <div className="inside-card-index">03 · SYSTEM</div>
              <h3>Rol və icazələr</h3>
              <p>Fərqli istifadəçi tipləri üçün təhlükəsiz giriş sistemi.</p>
            </article>
            <article className="inside-card fade-up">
              <div className="inside-card-index">04 · DATA</div>
              <h3>Dashboard və analitika</h3>
              <p>Əməliyyat və biznes məlumatlarını görünən etmək.</p>
            </article>
            <article className="inside-card fade-up">
              <div className="inside-card-index">05 · AUTOMATION</div>
              <h3>İnteqrasiya və avtomatlaşdırma</h3>
              <p>Ödəniş, bildiriş, CRM və daxili sistem bağlantıları.</p>
            </article>
            <article className="inside-card fade-up">
              <div className="inside-card-index">06 · SCALE</div>
              <h3>Performans və böyümə</h3>
              <p>Production launch, monitorinq və növbəti mərhələlər.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── PROSES ───────────────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="max-w-3xl fade-up">
            <div className="section-kicker">Hər case study-də eyni prinsip</div>
            <h2 className="section-title mt-4">
              Dizayn ekranla bitmir.
              <br />
              <span className="text-violet">Məhsul işləməlidir.</span>
            </h2>
          </div>

          <div className="process-strip mt-14">
            <article className="process-step-card fade-up">
              <span>01 · DISCOVER</span>
              <h3>Problemi anlayırıq</h3>
              <p>Biznes məqsədi və istifadəçi ehtiyacını dəqiqləşdiririk.</p>
            </article>
            <article className="process-step-card fade-up">
              <span>02 · DESIGN</span>
              <h3>Sistemi qururuq</h3>
              <p>Axınlar, ekranlar və komponent sistemi hazırlanır.</p>
            </article>
            <article className="process-step-card fade-up">
              <span>03 · DEVELOP</span>
              <h3>Məhsula çeviririk</h3>
              <p>Frontend, backend və inteqrasiyalar production səviyyəsində qurulur.</p>
            </article>
            <article className="process-step-card fade-up">
              <span>04 · GROW</span>
              <h3>İnkişaf etdiririk</h3>
              <p>Real istifadə və data əsasında növbəti versiyalar hazırlanır.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section id="contact" className="pb-24 pt-6 sm:pb-32">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="cta-panel fade-up rounded-[2rem] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="relative z-10 max-w-4xl">
              <div className="text-xs font-extrabold uppercase tracking-[.15em] text-white/62">Növbəti case study</div>
              <h2 className="mt-5 text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold leading-[.96] tracking-[-.052em]">
                Sizin məhsulunuzun
                <br />
                hekayəsini quraq.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/66 sm:text-lg">
                İdeyanızı və ya mövcud sisteminizi paylaşın. Uyğun məhsul arxitekturasını birlikdə müəyyən edək.
              </p>
              <div className="mt-9">
                <a
                  href="mailto:hello@aibaycan.az"
                  className="focus-ring inline-flex min-h-[3.3rem] items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-extrabold text-[var(--brand-navy)] shadow-xl transition hover:-translate-y-1"
                >
                  Layihəni müzakirə et →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
