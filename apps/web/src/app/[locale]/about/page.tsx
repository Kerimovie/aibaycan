import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return { title: t('title'), description: t('subtitle') };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="about-page -mt-[76px]">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="about-hero">
        <div className="grid-bg absolute inset-0 -z-20" aria-hidden />
        <span className="hero-beam one" aria-hidden />
        <span className="hero-beam two" aria-hidden />
        <span className="hero-beam three" aria-hidden />

        <div className="max-wrap">
          <div className="about-hero-grid">
            <div className="fade-up">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Haqqımızda · Rəqəmsal məhsul studiyası
              </div>

              <h1 className="about-hero-title">
                Rəqəmsal məhsullar qururuq —
                <span className="accent">vitrin üçün yox, işləməsi üçün.</span>
              </h1>

              <p className="about-hero-lead">
                aibaycan çoxsahəli, AI-güclü məhsul studiyasıdır. Veb platforma, ERP/CRM, SaaS, e-commerce və AI
                həllərini — strategiyadan launch-a qədər — bir komanda ilə çatdırırıq.
              </p>

              <div className="proof-row">
                <span>
                  <i /> Strategiyadan launch-a qədər tam dövr
                </span>
                <span>
                  <i /> AZ · EN · RU · remote-first
                </span>
              </div>

              <a className="works-scroll-cue" href="#who-we-are" aria-label="Biz kimik bölməsinə keç">
                <span className="works-scroll-track">
                  <span />
                </span>
                Studiyanı yaxından tanı
              </a>
            </div>

            <div className="about-collage-wrap fade-up" aria-hidden>
              <div className="about-collage">
                <div className="collage-note note-main">
                  <span className="pin" />
                  <div className="note-kicker">Studio note</div>
                  <h3>Biz yalnız ekran dizayn etmirik.</h3>
                  <p>
                    Biznesin içində işləyən, komandaların gündəlik istifadə etdiyi və zamanla böyüyən məhsullar
                    qururuq.
                  </p>
                </div>

                <div className="collage-note note-mission">
                  <div className="note-kicker">Mission</div>
                  <strong>Gözəl görünən yox, işləyən məhsul.</strong>
                </div>

                <div className="collage-note note-team">
                  <div className="note-kicker">Core disciplines</div>
                  <div className="identity-tags">
                    <span>Strategy</span>
                    <span>Product</span>
                    <span>Engineering</span>
                    <span>AI</span>
                    <span>Data</span>
                  </div>
                </div>

                <div className="collage-note note-map">
                  <div className="mini-map-grid" />
                  <div className="map-copy">
                    <span>Remote-first</span>
                    <strong>AZ · EN · RU</strong>
                  </div>
                </div>

                <div className="collage-note note-quote">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M8.3 7.2C6.2 8.4 5 10.4 5 13h3c0 2-1.3 3.6-3 4.3V20c3.8-.8 6.4-4 6.4-8V7.2H8.3Zm8 0C14.2 8.4 13 10.4 13 13h3c0 2-1.3 3.6-3 4.3V20c3.8-.8 6.4-4 6.4-8V7.2h-3.1Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>Haqqımızda deyilən ən doğru cümlə budur: biz məhsul kimi düşünür, komanda kimi icra edirik.</p>
                </div>

                <div className="collage-fact-strip">
                  <div>
                    <strong>8+</strong>
                    <span>il təcrübə</span>
                  </div>
                  <div>
                    <strong>70+</strong>
                    <span>layihə</span>
                  </div>
                  <div>
                    <strong>30+</strong>
                    <span>əməkdaşlıq</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="premium-divider" aria-hidden />

      {/* ── MANİFEST ─────────────────────────────────────────── */}
      <section id="manifest" className="manifest-section">
        <div className="max-wrap">
          <div className="fade-up">
            <div className="section-kicker">Manifest</div>
            <h2 className="section-title">
              İşləyən məhsul <span className="accent">gözəl ekrandan vacibdir.</span>
            </h2>
            <p className="section-lead">
              Dizayn təqdimatla bitmir. Biz real istifadədə, real yükdə işləyən, ölçülə bilən və genişlənə bilən
              sistemlər qururuq. Hər layihəyə uzunmüddətli məhsul kimi baxırıq — bir dəfəlik iş kimi yox.
            </p>
          </div>

          <div className="manifest-grid">
            <article className="soft-card belief-card fade-up">
              <div className="belief-index">01 · PRODUCT</div>
              <h3>Real məhsul, prototip yox.</h3>
              <p>İdeyanı sadəcə təqdim etmirik; istifadə olunan, idarə olunan və inkişaf edən sistemə çeviririk.</p>
            </article>
            <article className="soft-card belief-card fade-up">
              <div className="belief-index">02 · IMPACT</div>
              <h3>Ölçülə bilən nəticə.</h3>
              <p>Qərarları görünüşlə deyil, istifadəçi davranışı və biznes göstəriciləri ilə əsaslandırırıq.</p>
            </article>
            <article className="soft-card belief-card fade-up">
              <div className="belief-index">03 · SYSTEM</div>
              <h3>Təhlükəsiz və genişlənən arxitektura.</h3>
              <p>Məhsulun bugünkü ehtiyacını və sabahkı böyüməsini eyni sistem daxilində düşünürük.</p>
            </article>
            <article className="soft-card belief-card fade-up">
              <div className="belief-index">04 · PARTNERSHIP</div>
              <h3>Uzunmüddətli əməkdaşlıq.</h3>
              <p>Launch son nöqtə deyil; məhsulun inkişafı, optimizasiyası və dəstəyi davam edir.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      <section className="stats-section">
        <div className="max-wrap">
          <div className="stats-panel fade-up">
            <div className="stats-grid">
              {[
                { c: 8, l: 'İl məhsul inkişafı' },
                { c: 70, l: 'Layihə təcrübəsi' },
                { c: 30, l: 'Müştəri əməkdaşlığı' },
                { c: 5, l: 'Sahə / vertical' },
              ].map((st) => (
                <div className="stat-item" key={st.l}>
                  <div className="stat-number">
                    <span className="count-up" data-count={st.c}>
                      0
                    </span>
                    <span className="plus">+</span>
                  </div>
                  <div className="stat-label">{st.l}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="placeholder-note">Rəqəmlər müvəqqəti göstəricilərdir və real məlumatlarla əvəz olunacaq.</p>
        </div>
      </section>

      <div className="premium-divider" aria-hidden />

      {/* ── BİZ KİMİK ────────────────────────────────────────── */}
      <section id="who-we-are" className="identity-section">
        <div className="max-wrap">
          <div className="identity-grid">
            <div className="fade-up">
              <div className="section-kicker">Biz kimik</div>
              <h2 className="section-title">
                Xidmət siyahısından çox, <span className="accent">məhsul düşüncəsiyik.</span>
              </h2>
              <p className="section-lead">
                aibaycan-ı fərqləndirən əsas şey yalnız kod yazmaq və ya dizayn etmək deyil. Biz layihəyə “təslim
                ediləcək iş” kimi yox, “yaşayacaq məhsul” kimi yanaşırıq.
              </p>

              <div className="identity-story">
                <p>
                  Bu səbəbdən prosesimizdə strategiya, məhsul qərarları, istifadəçi təcrübəsi və texniki icra
                  ayrı-ayrı mərhələlər kimi yox, bir-birinə bağlı sistem kimi işləyir.
                </p>
                <p>
                  Komandamız müxtəlif sahələrdən gələn bilikləri birləşdirir: platforma quruculuğu, daxili biznes
                  sistemləri, e-commerce, AI workflow-ları və data düşüncəsi. Məqsədimiz sadəcə “hazır layihə” vermək
                  deyil, sahibinin rahat idarə edə bildiyi məhsul qurmaqdır.
                </p>
              </div>
            </div>

            <div className="identity-aside fade-up">
              <div className="soft-card identity-aside-card">
                <div className="aside-kicker">Bu bizi necə göstərir?</div>
                <div className="aside-rows">
                  <div className="aside-row">
                    <strong>Məhsul sahibliyi</strong>
                    <span>Qərar verərkən istifadəçi ilə yanaşı biznes yükünü də düşünürük.</span>
                  </div>
                  <div className="aside-row">
                    <strong>Texniki ayıqlıq</strong>
                    <span>Qısa yoldan çox, sabah böyüyə biləcək strukturu seçirik.</span>
                  </div>
                  <div className="aside-row">
                    <strong>Əməkdaşlıq ritmi</strong>
                    <span>Remote-first, çoxdilli və şəffaf kommunikasiya ilə işləyirik.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="identity-card-grid">
            <article className="soft-card identity-card fade-up">
              <div className="identity-card-index">01</div>
              <h3>Biznesi anlayan texniki komanda.</h3>
              <p>Həll təklif edərkən yalnız texnologiyanı yox, əməliyyat tərəfini və gələcək idarəetməni də düşünürük.</p>
            </article>
            <article className="soft-card identity-card fade-up">
              <div className="identity-card-index">02</div>
              <h3>Öz məhsullarımızdan gələn baxış.</h3>
              <p>Real məhsulları özümüz də idarə etdiyimiz üçün qərarların gündəlik işə təsirini içəridən bilirik.</p>
            </article>
            <article className="soft-card identity-card fade-up">
              <div className="identity-card-index">03</div>
              <h3>Uzunmüddətli münasibət modeli.</h3>
              <p>Launch-dan sonra da məhsulun yanında qalır, təkmilləşmə və inkişaf mərhələlərini birlikdə aparırıq.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── ÖZ MƏHSULLARIMIZ (dark) ──────────────────────────── */}
      <section className="products-section">
        <div className="max-wrap">
          <div className="products-head fade-up">
            <div className="section-kicker">Öz məhsullarımız</div>
            <h2 className="section-title">
              Qurduğumuz sistemləri <span className="accent">özümüz də işlədirik.</span>
            </h2>
            <p className="section-lead">
              Biz təkcə sifariş işləmirik — real bizneslər qururuq və idarə edirik. Bu, hər müştəri layihəsinə
              gətirdiyimiz təcrübənin mənbəyidir.
            </p>
          </div>

          <div className="product-grid">
            <article className="product-card fade-up">
              <div className="product-index">01 · EDTECH</div>
              <h3>Etehsil.az</h3>
              <p>Onlayn təhsil və kontent idarəetmə platforması.</p>
              <span className="product-tag">EdTech</span>
            </article>
            <article className="product-card fade-up">
              <div className="product-index">02 · SAAS</div>
              <h3>Foodost</h3>
              <p>Restoran POS və əməliyyat idarəetmə SaaS məhsulu.</p>
              <span className="product-tag">Restaurant SaaS</span>
            </article>
            <article className="product-card fade-up">
              <div className="product-index">03 · COMMERCE</div>
              <h3>Molecion.az</h3>
              <p>Premium parfümeriya üçün e-commerce platforması.</p>
              <span className="product-tag">E-commerce</span>
            </article>
            <article className="product-card fade-up">
              <div className="product-index">04 · PRODUCT</div>
              <h3>Cavably</h3>
              <p>Rəqəmsal məhsul və web tətbiq təcrübəsi.</p>
              <span className="product-tag">Digital product</span>
            </article>
            <article className="product-card fade-up">
              <div className="product-index">05 · ERP</div>
              <h3>Sahil Transport ERP</h3>
              <p>Nəqliyyat əməliyyatları üçün fərdi daxili sistem.</p>
              <span className="product-tag">ERP</span>
            </article>
          </div>

          <Link className="products-link fade-up" href="/projects">
            Seçilmiş işlərimizə bax →
          </Link>
        </div>
      </section>

      {/* ── BİZİMLƏ İŞLƏMƏK ──────────────────────────────────── */}
      <section className="partnership-section">
        <div className="max-wrap">
          <div className="fade-up">
            <div className="section-kicker">Bizimlə işləmək</div>
            <h2 className="section-title">
              Aydın ünsiyyət. <span className="accent">Sakit, etibarlı icra.</span>
            </h2>
            <p className="section-lead">
              Haqqımızda danışarkən ən vacib mövzulardan biri də əməkdaşlıq tərzimizdir. Prosesi qarışıqlaşdırmadan,
              amma dərinlikdən də ödün vermədən işləməyi sevirik.
            </p>
          </div>

          <div className="partnership-grid">
            <article className="soft-card partnership-card fade-up">
              <div className="partnership-tag">01 · MÜZAKİRƏ</div>
              <h3>Aydın brief, düzgün suallar.</h3>
              <p>Layihəyə başlamazdan əvvəl məqsədi, sərhədləri və real gözləntiləri dəqiqləşdiririk.</p>
            </article>
            <article className="soft-card partnership-card fade-up">
              <div className="partnership-tag">02 · SAHİBLİK</div>
              <h3>Təkcə icraçı yox, düşünən tərəfdaş.</h3>
              <p>Sadəcə tapşırıq yerinə yetirmirik; boşluqları görür, alternativlər təklif edirik.</p>
            </article>
            <article className="soft-card partnership-card fade-up">
              <div className="partnership-tag">03 · RİTM</div>
              <h3>Şəffaf yenilənmə və remote ritm.</h3>
              <p>Komanda məsafədən işləsə də proses görünən, izlənən və idarə olunan qalır.</p>
            </article>
            <article className="soft-card partnership-card fade-up">
              <div className="partnership-tag">04 · DAVAMLILIQ</div>
              <h3>Launch-dan sonra əlaqə qırılmır.</h3>
              <p>Məhsul istifadəyə çıxandan sonra da optimizasiya və inkişaf üçün yanında qalırıq.</p>
            </article>
          </div>
        </div>
      </section>

      <div className="premium-divider" aria-hidden />

      {/* ── KOMANDA ──────────────────────────────────────────── */}
      <section className="team-section">
        <div className="max-wrap">
          <div className="fade-up">
            <div className="section-kicker">Komanda</div>
            <h2 className="section-title">
              Bir məhsulu bir <span className="accent">komanda çatdırır.</span>
            </h2>
            <p className="section-lead">
              Fərqli disiplinləri bir prosesdə birləşdiririk ki, strategiya, dizayn və mühəndislik arasında boşluq
              qalmasın.
            </p>
          </div>

          <div className="team-grid">
            <article className="soft-card team-card fade-up">
              <div className="team-symbol">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
                  <path d="M4 19V9m6 10V5m6 14v-7m4 7H2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Strategiya</h3>
              <p>Biznes məqsədini məhsul prioritetlərinə və aydın yol xəritəsinə çevirir.</p>
            </article>
            <article className="soft-card team-card fade-up">
              <div className="team-symbol">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
                  <path d="M5 4h14v16H5zM8 8h8M8 12h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Product / UX</h3>
              <p>İstifadəçi ssenarilərini aydın axınlara, ekranlara və komponent sisteminə çevirir.</p>
            </article>
            <article className="soft-card team-card fade-up">
              <div className="team-symbol">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
                  <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Engineering</h3>
              <p>Etibarlı frontend, backend, inteqrasiya və production infrastrukturu qurur.</p>
            </article>
            <article className="soft-card team-card fade-up">
              <div className="team-symbol">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
                  <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </div>
              <h3>AI & Media</h3>
              <p>Generativ media və ağıllı funksiyaları məhsulun real workflow-larına inteqrasiya edir.</p>
            </article>
            <article className="soft-card team-card fade-up">
              <div className="team-symbol">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
                  <ellipse cx="12" cy="5" rx="7" ry="3" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </div>
              <h3>Data & Analitika</h3>
              <p>Məlumat arxitekturası, dashboard və ölçülə bilən məhsul göstəriciləri yaradır.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="max-wrap">
          <div className="cta-panel fade-up">
            <div className="cta-content">
              <div className="cta-kicker">Növbəti addım</div>
              <h2 className="cta-title">
                Növbəti məhsulu <span className="accent">birlikdə quraq.</span>
              </h2>
              <p className="cta-copy">
                İdeyanızı və ya mövcud sisteminizi paylaşın — uyğun yanaşmanı birlikdə müəyyən edək.
              </p>
              <Link className="cta-button" href="/contact">
                Layihəni danışaq
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
