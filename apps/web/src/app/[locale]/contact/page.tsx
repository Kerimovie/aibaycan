import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ContactForm } from '@/components/contact-form';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return { title: t('title'), description: t('subtitle') };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="contact-hero -mt-[76px]">
        <div className="grid-bg absolute inset-0 -z-20 opacity-60" aria-hidden />
        <div className="hero-cinema" aria-hidden>
          <span className="hero-beam b1" />
          <span className="hero-beam b2" />
          <span className="hero-flare" />
        </div>

        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="contact-hero-grid">
            <div className="fade-up">
              <div className="eyebrow mb-7">
                <span className="eyebrow-dot" />
                Yeni layihə · İlk addım
              </div>

              <h1 className="contact-hero-title">
                İdeyanızı danışın.
                <br />
                <span className="accent">Biz məhsula çevirək.</span>
              </h1>

              <p className="contact-hero-lead mt-8">
                Veb platforma, ERP/CRM, SaaS, e-commerce və ya AI həlli planlaşdırırsınızsa, layihənin məqsədini
                paylaşın. Düzgün istiqaməti, texniki yanaşmanı və növbəti addımları birlikdə müəyyən edək.
              </p>

              <div className="contact-proof-row">
                <span>
                  <i /> 1 iş günü ərzində ilkin cavab
                </span>
                <span>
                  <i /> Məxfi və öhdəliksiz ilkin müzakirə
                </span>
              </div>

              <a className="works-scroll-cue focus-ring" href="#contact-form" aria-label="Əlaqə formasına keç">
                <span className="works-scroll-track">
                  <span />
                </span>
                Layihə brief-i göndər
              </a>
            </div>

            <div className="contact-console-wrap fade-up" aria-hidden>
              <div className="contact-console contact-desk-console">
                <div className="console-head">
                  <div className="console-status">Contact desk</div>
                  <div className="console-time">Available</div>
                </div>

                <div className="console-body contact-desk-body">
                  <div className="console-scan" />
                  <div className="console-eyebrow">New project intake</div>
                  <div className="console-title">Sorğunuz aydın layihə brief-inə çevrilir.</div>

                  <div className="contact-message-card">
                    <div className="contact-message-top">
                      <div className="contact-avatar-mark">A</div>
                      <div className="contact-message-meta">
                        <strong>Yeni inquiry</strong>
                        <span>Web platform · Discovery request</span>
                      </div>
                      <div className="contact-message-status">new</div>
                    </div>
                    <div className="contact-message-bubble">
                      Salam, SaaS məhsulu üçün platforma qurmaq istəyirik. İlk mərhələdə scope və roadmap barədə
                      danışmaq istəyirik.
                    </div>
                  </div>

                  <div className="contact-mini-grid">
                    <div className="contact-mini-card">
                      <div className="contact-mini-label">Response SLA</div>
                      <div className="contact-mini-value">≤ 1 iş günü</div>
                    </div>
                    <div className="contact-mini-card">
                      <div className="contact-mini-label">Format</div>
                      <div className="contact-mini-value">Call / Email</div>
                    </div>
                  </div>

                  <div className="contact-timeline-card">
                    <div className="contact-timeline-head">
                      <span>Next steps</span>
                      <strong>Discovery flow</strong>
                    </div>

                    <div className="contact-timeline-steps">
                      <div className="contact-timeline-step">
                        <span className="timeline-step-dot" />
                        <div>
                          <strong>Brief review</strong>
                          <small>Sorğu və məqsədin ilkin baxışı</small>
                        </div>
                      </div>
                      <div className="contact-timeline-step">
                        <span className="timeline-step-dot" />
                        <div>
                          <strong>Meeting slot</strong>
                          <small>Uyğun görüş vaxtının təyin olunması</small>
                        </div>
                      </div>
                      <div className="contact-timeline-step">
                        <span className="timeline-step-dot" />
                        <div>
                          <strong>Proposal</strong>
                          <small>Scope, mərhələ və ilkin təklif</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="contact-calendar-strip">
                    <div className="calendar-pill active">Mon</div>
                    <div className="calendar-pill">Tue</div>
                    <div className="calendar-pill">Wed</div>
                    <div className="calendar-pill">Thu</div>
                    <div className="calendar-pill">Fri</div>
                  </div>
                </div>

                <div className="console-footer contact-console-footer">
                  <div className="console-footer-item">
                    <strong>AZ / EN / RU</strong>
                    <span>Çoxdilli ünsiyyət</span>
                  </div>
                  <div className="console-footer-item">
                    <strong>Remote-first</strong>
                    <span>Online discovery & əməkdaşlıq</span>
                  </div>
                  <div className="console-footer-item">
                    <strong>Confidential</strong>
                    <span>Məxfi ilkin müzakirə</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="premium-divider" aria-hidden />

      {/* ── FORM ─────────────────────────────────────────────── */}
      <section id="contact-form" className="contact-section">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="contact-layout">
            <aside className="contact-sidebar fade-up">
              <div className="contact-sidebar-card">
                <div className="contact-side-title">Birbaşa əlaqə</div>

                <div className="contact-channel-list">
                  <a className="contact-channel focus-ring" href="mailto:hello@aibaycan.az">
                    <span className="channel-icon">
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                        <path d="m5 7 7 6 7-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="channel-copy">
                      <strong>hello@aibaycan.az</strong>
                      <span>Layihə və əməkdaşlıq sorğuları</span>
                    </span>
                  </a>

                  <div className="contact-channel">
                    <span className="channel-icon">
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M12 21s7-4.7 7-11a7 7 0 1 0-14 0c0 6.3 7 11 7 11Z" stroke="currentColor" strokeWidth="1.7" />
                        <circle cx="12" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.7" />
                      </svg>
                    </span>
                    <span className="channel-copy">
                      <strong>Bakı, Azərbaycan</strong>
                      <span>Uzaqdan və beynəlxalq əməkdaşlıq</span>
                    </span>
                  </div>

                  <div className="contact-channel">
                    <span className="channel-icon">
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
                        <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="channel-copy">
                      <strong>1 iş günü</strong>
                      <span>Orta ilkin cavab müddəti</span>
                    </span>
                  </div>
                </div>

                <div className="availability-card">
                  <div className="availability-card-inner">
                    <div className="availability-label">Yeni layihələr qəbul olunur</div>
                    <h3>İlkin müzakirə öhdəlik yaratmır.</h3>
                    <p>Məqsədi və ehtiyacı anlamaq üçün qısa discovery görüşü planlaşdırırıq.</p>
                  </div>
                </div>
              </div>
            </aside>

            <div className="contact-form-card fade-up">
              <div className="form-head">
                <div>
                  <div className="section-kicker">Layihə brief-i</div>
                  <h2>Layihəniz haqqında danışın.</h2>
                </div>
                <span className="form-step">01 · İlkin məlumat</span>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── SORĞUDAN SONRA ───────────────────────────────────── */}
      <section className="contact-process">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="max-w-3xl fade-up">
            <div className="section-kicker">Sorğudan sonra</div>
            <h2 className="section-title mt-4">
              Aydın və sürətli
              <br />
              <span className="text-violet">başlanğıc prosesi.</span>
            </h2>
          </div>

          <div className="contact-process-grid mt-14">
            <article className="contact-process-card fade-up" data-step="01">
              <div className="process-kicker">01 · Baxış</div>
              <h3>Brief-i nəzərdən keçiririk.</h3>
              <p>Məqsədi, ehtiyacları və layihənin hazırkı mərhələsini ilkin olaraq dəyərləndiririk.</p>
            </article>
            <article className="contact-process-card fade-up" data-step="02">
              <div className="process-kicker">02 · Discovery</div>
              <h3>Qısa görüş planlaşdırırıq.</h3>
              <p>Vacib sualları, istifadəçi ssenarilərini və texniki məhdudiyyətləri dəqiqləşdiririk.</p>
            </article>
            <article className="contact-process-card fade-up" data-step="03">
              <div className="process-kicker">03 · Təklif</div>
              <h3>Yol xəritəsi təqdim edirik.</h3>
              <p>Əhatə dairəsi, mərhələlər, təxmini vaxt və əməkdaşlıq modelini təqdim edirik.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="contact-faq">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
          <div className="contact-faq-grid">
            <div className="fade-up">
              <div className="section-kicker">Əlaqə FAQ</div>
              <h2 className="section-title mt-4">
                Başlamazdan əvvəl
                <br />
                <span className="text-violet">bilmək faydalıdır.</span>
              </h2>
              <p className="mt-6 max-w-md leading-7 text-black/55">
                Layihə hələ ideya mərhələsində olsa belə, ilkin istiqaməti müəyyən etmək mümkündür.
              </p>
            </div>

            <div className="divide-y divide-black/[.08] border-y border-black/[.08] fade-up">
              {[
                {
                  q: 'Brief tam hazır deyilsə, müraciət edə bilərəm?',
                  a: 'Bəli. Məqsədi və əsas problemi qısa yazmaq kifayətdir. Digər detalları discovery görüşündə birlikdə dəqiqləşdiririk.',
                },
                {
                  q: 'İlkin görüş ödənişlidirmi?',
                  a: 'İlkin tanışlıq və uyğunluq görüşü öhdəliksizdir. Dərin audit və ayrıca konsultasiya lazım olduqda bu əvvəlcədən bildirilir.',
                },
                {
                  q: 'Layihə qiyməti nə zaman məlum olur?',
                  a: 'Əhatə dairəsi və texniki tələblər dəqiqləşəndən sonra mərhələlər və qiymətləndirmə ilə birlikdə təklif göndərilir.',
                },
                {
                  q: 'Xarici müştərilərlə işləyirsiniz?',
                  a: 'Bəli. Layihələr uzaqdan AZ, EN və RU dillərində idarə oluna bilər.',
                },
              ].map((item) => (
                <details className="group py-2" key={item.q}>
                  <summary className="focus-ring flex items-center justify-between gap-6 rounded-xl py-5 text-left">
                    <span className="text-lg font-extrabold tracking-[-.025em]">{item.q}</span>
                    <span className="faq-plus grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/[.10] text-xl">
                      +
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-6 pr-12 leading-7 text-black/55">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
