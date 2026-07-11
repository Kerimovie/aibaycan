import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = {
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: 'Xidmətlər',
  description:
    'Veb platformalar, ERP/CRM, SaaS, e-commerce, AI, avtomatlaşdırma, data və rəqəmsal strategiya xidmətləri.',
};

const ORBIT = [
  { cls: 'node-web', n: '01', t: 'Web platforms' },
  { cls: 'node-erp', n: '02', t: 'ERP / CRM' },
  { cls: 'node-saas', n: '03', t: 'SaaS products' },
  { cls: 'node-ai', n: '05', t: 'AI solutions' },
  { cls: 'node-commerce', n: '04', t: 'E-commerce' },
  { cls: 'node-data', n: '08', t: 'Data & BI' },
];

const JUMP: Array<[string, string]> = [
  ['service-web', '01 · Veb platformalar'],
  ['service-erp', '02 · ERP / CRM'],
  ['service-saas', '03 · SaaS məhsulları'],
  ['service-commerce', '04 · E-commerce'],
  ['service-ai', '05 · AI həlləri'],
  ['service-media', '06 · AI media'],
  ['service-automation', '07 · Avtomatlaşdırma'],
  ['service-data', '08 · Data & BI'],
  ['service-strategy', '09 · Strategiya'],
];

const SERVICES = [
  {
    id: 'service-web',
    num: '01',
    title: 'Veb Platformalar & Web App',
    intro: 'Marketinq saytından mürəkkəb web tətbiqə qədər.',
    included: ['Korporativ sayt & landing', 'AZ / EN / RU', 'Web app / SPA / portal', 'İstifadəçi paneli & auth', 'CMS / headless', 'Core Web Vitals', 'Texniki SEO'],
    audience: 'Yeni brend saytı, sayt yenilənməsi və daxili portal ehtiyacı olan komandalar.',
  },
  {
    id: 'service-erp',
    num: '02',
    title: 'ERP / CRM Sistemləri',
    intro: 'Bütün əməliyyatı bir sistemə topla.',
    included: ['Əməliyyat idarəetməsi', 'Stok / inventar', 'Sifariş & satış axını', 'CRM & lead', 'Rol & icazə', 'Dashboard & hesabat', 'Ödəniş / mühasibat inteqrasiyası'],
    audience: 'Çoxşöbəli əməliyyat, logistika, restoran və pərakəndə bizneslər.',
  },
  {
    id: 'service-saas',
    num: '03',
    title: 'SaaS Məhsul İnkişafı',
    intro: 'İdeyadan bulud əsaslı məhsula.',
    included: ['Məhsul strategiyası & MVP', 'Multi-tenant arxitektura', 'Abunə & billing', 'Onboarding', 'Admin + istifadəçi panelləri', 'API', 'Monitorinq'],
    audience: 'SaaS ideyası olan və mövcud məhsulunu böyütmək istəyən komandalar.',
  },
  {
    id: 'service-commerce',
    num: '04',
    title: 'E-commerce Həlləri',
    intro: 'Satan və rahat idarə olunan mağaza.',
    included: ['Custom / platforma mağaza', 'Kataloq & filtr', 'Səbət & checkout', 'Ödəniş', 'Stok & sifariş', 'Çatdırılma', 'Kampaniya & endirim', 'Satış analitikası'],
    audience: 'Pərakəndə brendlər və premium məhsul satan bizneslər.',
  },
  {
    id: 'service-ai',
    num: '05',
    title: 'AI Həlləri & İnteqrasiya',
    intro: 'AI-nı real workflow-a inteqrasiya et.',
    included: ['AI chatbot & köməkçi', 'RAG', 'Sənəd / mətn analizi', 'Tövsiyə & personalizasiya', 'Semantik axtarış', 'Mövcud məhsula AI'],
    audience: 'Dəstəyi avtomatlaşdırmaq, bilik bazası və ağıllı funksiya qurmaq istəyənlər.',
  },
  {
    id: 'service-media',
    num: '06',
    title: 'AI Media & Kontent',
    intro: 'AI ilə mahnı, video və vizual kontent.',
    included: ['AI mahnı & musiqi', 'AI video & animasiya', 'AI şəkil & vizual', 'Sosial media kontenti', 'Kampaniya kreativi'],
    audience: 'Brendlər, sosial media komandaları və marketinq kampaniyaları.',
  },
  {
    id: 'service-automation',
    num: '07',
    title: 'Avtomatlaşdırma & İnteqrasiyalar',
    intro: 'Təkrar işi sistemə tapşır.',
    included: ['Workflow avtomatlaşdırma', 'API / webhook', 'Email / Telegram / WhatsApp', 'Ödəniş & faktura', 'Sənəd / hesabat avtomatlaşdırma', 'Telegram / Instagram bot'],
    audience: 'Təkrar əl işləri çox olan və proseslərini sürətləndirmək istəyən komandalar.',
  },
  {
    id: 'service-data',
    num: '08',
    title: 'Data Arxitekturası & Analitika (BI)',
    intro: 'Məlumatı qərara çevir.',
    included: ['Data arxitektura & warehouse', 'ETL / pipeline', 'Dashboard & vizualizasiya', 'BI & KPI', 'Data keyfiyyəti', 'Real vaxt & tarixi analitika'],
    audience: 'Data-driven qərar verən və məlumatlarını vahid sistemdə görmək istəyən bizneslər.',
  },
  {
    id: 'service-strategy',
    num: '09',
    title: 'Rəqəmsal Strategiya & Discovery',
    intro: 'Doğru sualla başla.',
    included: ['Discovery workshop', 'Tələb analizi', 'MVP prioritizasiyası', 'Texniki audit', 'Arxitektura & texnologiya seçimi', 'Yol xəritəsi & qiymətləndirmə'],
    audience: 'İdeya mərhələsində olan və mövcud sistemini yaxşılaşdırmaq istəyən komandalar.',
  },
];

const EXTRAS = [
  { icon: 'UX', t: 'UX/UI Dizayn', d: 'İnformasiya arxitekturası, user flow, prototip və komponent sistemi.' },
  { icon: 'TC', t: 'Texniki Konsultasiya', d: 'Audit, arxitektura qərarları, risklərin qiymətləndirilməsi və texnologiya seçimi.' },
  { icon: '24', t: 'Dəstək & Baxım', d: 'Monitorinq, bug fix, təhlükəsizlik yeniləməsi və davamlı optimizasiya.' },
  { icon: '↗', t: 'Miqrasiya & Modernləşdirmə', d: 'Köhnə sistemlərin yeni arxitekturaya, cloud-a və müasir texnologiyaya keçirilməsi.' },
];

const PROCESS = [
  { step: '01', k: '01 · DISCOVER', t: 'Problemi və məqsədi anlayırıq.', d: 'Discovery, tələb analizi, istifadəçi ssenariləri və məhsul prioritetləri.' },
  { step: '02', k: '02 · DESIGN', t: 'Axınları və sistemi dizayn edirik.', d: 'UX, UI, prototip, texniki arxitektura və delivery planı.' },
  { step: '03', k: '03 · DEVELOP', t: 'Production səviyyəsində qururuq.', d: 'Frontend, backend, inteqrasiya, test və təhlükəsizlik.' },
  { step: '04', k: '04 · GROW', t: 'Launch edir və böyüdürük.', d: 'Monitorinq, analitika, optimizasiya və növbəti məhsul mərhələləri.' },
];

const TECH = ['Next.js / React', 'Node / NestJS / Hono', 'Python', 'PostgreSQL', 'Prisma', 'Docker', 'AWS / GCP / Railway', 'Claude / OpenAI', 'Tailwind'];

const MODELS = [
  { i: '01 · PROJECT', t: 'Layihə əsaslı', d: 'Müəyyən scope, mərhələ və delivery planı olan layihələr üçün.' },
  { i: '02 · DEDICATED', t: 'Dedicated komanda', d: 'Məhsul üzərində davamlı işləyən çevik, ayrılmış komanda modeli.' },
  { i: '03 · RETAINER', t: 'Retainer / Dəstək', d: 'Launch-dan sonra davamlı inkişaf, baxım və optimizasiya.' },
  { i: '04 · ADVISORY', t: 'Konsultasiya', d: 'Strategiya, texniki audit və qərar dəstəyi üçün ekspert yanaşması.' },
];

const SECTORS = ['Təhsil', 'Restoran & HORECA', 'Pərakəndə & E-commerce', 'Nəqliyyat & Logistika', 'Parfümeriya & Beauty', 'Xidmət & Startap'];

const FAQ = [
  { q: 'Hansı texnologiyalarla işləyirsiniz?', a: 'Next.js/React, Node/NestJS/Hono, Python, PostgreSQL, Prisma, Docker, cloud platformaları və LLM inteqrasiyalarından istifadə edirik. Stack layihənin məqsədinə görə seçilir.' },
  { q: 'Layihə nə qədər çəkir?', a: 'Müddət scope, inteqrasiyalar və komanda ölçüsündən asılıdır. Discovery-dən sonra mərhələli timeline təqdim olunur.' },
  { q: 'Mövcud sistemi yeniləyə bilərsiniz?', a: 'Bəli. Texniki audit, mərhələli modernləşdirmə, migration və yeni arxitekturaya keçid planı hazırlaya bilərik.' },
  { q: 'Qiymət necə müəyyən olunur?', a: 'Qiymət layihənin scope-u, texniki mürəkkəbliyi, müddəti və əməkdaşlıq modelinə görə müəyyən olunur.' },
  { q: 'Launch-dan sonra dəstək verirsiniz?', a: 'Bəli. Retainer və ya ayrıca dəstək modeli ilə monitorinq, optimizasiya, bug fix və yeni funksiyalar üzərində işləyirik.' },
  { q: 'Xarici müştərilərlə işləyirsiniz?', a: 'Bəli. Remote-first işləyirik və kommunikasiya AZ, EN və RU dillərində aparıla bilər.' },
  { q: 'NDA və məxfilik mümkündür?', a: 'Bəli. Layihə məlumatları, texniki detallar və biznes məlumatları NDA çərçivəsində qoruna bilər.' },
];

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="services-page -mt-[76px]">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="services-hero">
        <div className="grid-bg absolute inset-0 -z-20" aria-hidden />
        <span className="hero-beam one" aria-hidden />
        <span className="hero-beam two" aria-hidden />
        <span className="hero-beam three" aria-hidden />
        <div className="max-wrap">
          <div className="services-hero-grid">
            <div className="fade-up">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Xidmətlər · Uçdan-uca məhsul inkişafı
              </div>
              <h1 className="services-hero-title">
                Bir ideya üçün lazım olan <span className="accent">bütün xidmətlər.</span>
              </h1>
              <p className="services-hero-lead">
                Strategiyadan məhsul dizaynına, engineering-dən AI, data və launch-a qədər — fərqli disiplinləri bir
                komandada birləşdiririk.
              </p>
              <div className="services-proof-row">
                <span>
                  <i /> Discovery-dən production-a qədər
                </span>
                <span>
                  <i /> Web · ERP · SaaS · AI · Data
                </span>
              </div>
              <a className="works-scroll-cue" href="#services-list">
                <span className="works-scroll-track">
                  <span />
                </span>
                Xidmətləri kəşf et
              </a>
            </div>

            <div className="service-orbit-wrap fade-up" aria-hidden>
              <div className="service-orbit">
                <div className="orbit-axis" />
                <div className="orbit-center">
                  <div className="orbit-center-copy">
                    <span>One team</span>
                    <strong>
                      Strategy →<br />
                      Product → Launch
                    </strong>
                  </div>
                </div>
                {ORBIT.map((o) => (
                  <div className={`orbit-node ${o.cls}`} key={o.cls}>
                    <span className="orbit-node-icon">{o.n}</span>
                    <strong>{o.t}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="premium-divider" aria-hidden />

      {/* ── ƏSAS XİDMƏTLƏR ───────────────────────────────────── */}
      <section id="services-list" className="services-index-section">
        <div className="max-wrap">
          <div className="services-index-layout">
            <aside className="services-sticky fade-up">
              <div className="services-sticky-copy">
                <div className="section-kicker">Əsas xidmətlər</div>
                <h2 className="section-title">
                  Ehtiyaca uyğun <span className="accent">doğru sistem.</span>
                </h2>
                <p className="section-lead">
                  Hər xidmət ayrıca təklif oluna bilər, amma ən güclü nəticə strategiya, məhsul və engineering
                  birlikdə işləyəndə yaranır.
                </p>
              </div>
              <nav className="services-jump-list" aria-label="Xidmətlər siyahısı">
                {JUMP.map(([id, label]) => (
                  <a href={`#${id}`} key={id}>
                    {label}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="service-chapters">
              {SERVICES.map((s) => (
                <article id={s.id} className="service-chapter fade-up" data-index={s.num} key={s.id}>
                  <div className="service-chapter-head">
                    <div className="service-number">{s.num}</div>
                    <div>
                      <h3>{s.title}</h3>
                      <p className="service-chapter-intro">{s.intro}</p>
                    </div>
                  </div>
                  <div className="service-chapter-body">
                    <div>
                      <div className="included-label">Daxildir</div>
                      <div className="included-list">
                        {s.included.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </div>
                    <div className="audience-box">
                      <div className="audience-label">Kimlər üçün</div>
                      <p>{s.audience}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="premium-divider" aria-hidden />

      {/* ── ƏLAVƏ XİDMƏTLƏR ──────────────────────────────────── */}
      <section className="extras-section">
        <div className="max-wrap">
          <div className="fade-up">
            <div className="section-kicker">Əlavə xidmətlər</div>
            <h2 className="section-title">
              Məhsulun yanında lazım olan <span className="accent">əlavə ekspertiza.</span>
            </h2>
          </div>
          <div className="extras-grid">
            {EXTRAS.map((e) => (
              <article className="soft-card extra-card fade-up" key={e.t}>
                <div className="extra-icon">{e.icon}</div>
                <h3>{e.t}</h3>
                <p>{e.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROSES ───────────────────────────────────────────── */}
      <section className="service-process-section">
        <div className="max-wrap process-inner">
          <div className="fade-up">
            <div className="section-kicker">Necə işləyirik</div>
            <h2 className="section-title">
              Aydın mərhələlər. <span className="accent">Görünən irəliləyiş.</span>
            </h2>
            <p className="section-lead">Hər mərhələnin məqsədi, nəticəsi və növbəti qərarı əvvəlcədən aydın olur.</p>
          </div>
          <div className="service-process-grid">
            {PROCESS.map((p) => (
              <article className="service-process-card fade-up" data-step={p.step} key={p.step}>
                <div className="process-step-kicker">{p.k}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEXNOLOGİYA ──────────────────────────────────────── */}
      <section className="technology-section">
        <div className="max-wrap">
          <div className="fade-up">
            <div className="section-kicker">Texnologiya</div>
            <h2 className="section-title">
              Məqsədə uyğun stack. <span className="accent">Dəbə uyğun yox.</span>
            </h2>
          </div>
          <div className="tech-strip fade-up">
            {TECH.map((t) => (
              <span className="tech-chip" key={t}>
                {t}
              </span>
            ))}
          </div>
          <p className="tech-note fade-up">Texnologiyanı məqsədə görə seçirik — dəbə görə yox.</p>
        </div>
      </section>

      <div className="premium-divider" aria-hidden />

      {/* ── ƏMƏKDAŞLIQ MODELLƏRİ ─────────────────────────────── */}
      <section className="models-section">
        <div className="max-wrap">
          <div className="fade-up">
            <div className="section-kicker">Əməkdaşlıq modelləri</div>
            <h2 className="section-title">
              Layihənizə uyğun <span className="accent">iş modeli.</span>
            </h2>
          </div>
          <div className="models-grid">
            {MODELS.map((m) => (
              <article className="soft-card model-card fade-up" key={m.t}>
                <div className="model-index">{m.i}</div>
                <h3>{m.t}</h3>
                <p>{m.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAHƏLƏR ──────────────────────────────────────────── */}
      <section className="sectors-section">
        <div className="max-wrap">
          <div className="fade-up">
            <div className="section-kicker">Sahələr</div>
            <h2 className="section-title">
              Fərqli sahələr. <span className="accent">Eyni məhsul prinsipi.</span>
            </h2>
          </div>
          <div className="sector-band fade-up">
            {SECTORS.map((s) => (
              <span className="sector-pill" key={s}>
                {s}
              </span>
            ))}
          </div>
          <p className="sector-note fade-up">Sahədən asılı olmayaraq prinsip eynidir — işləyən sistem.</p>
        </div>
      </section>

      <div className="premium-divider" aria-hidden />

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="faq-section">
        <div className="max-wrap">
          <div className="faq-layout">
            <div className="fade-up">
              <div className="section-kicker">FAQ</div>
              <h2 className="section-title">
                Başlamazdan əvvəl <span className="accent">bilmək faydalıdır.</span>
              </h2>
              <p className="section-lead">Layihənin hələ ilkin mərhələdə olması müraciət etməyə mane deyil.</p>
            </div>
            <div className="faq-list fade-up">
              {FAQ.map((f) => (
                <details className="faq-item" key={f.q}>
                  <summary>
                    <span>{f.q}</span>
                    <span className="faq-toggle">+</span>
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
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
                Hansı xidmət lazımdırsa — <span className="accent">gəlin danışaq.</span>
              </h2>
              <p className="cta-copy">Ehtiyacınızı paylaşın, uyğun xidmət və yanaşmanı birlikdə seçək.</p>
              <Link className="cta-button" href="/contact">
                Layihəni danışaq →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
