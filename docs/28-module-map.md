# 28 — Modul xəritəsi + faza planı

Bu sənəd `aibaycan.az`-ın modul strukturunu, entity-lərini və mərhələli (fazalı)
tətbiq planını təsbit edir. Kod yazılmadan əvvəl razılaşdırılmış plandır (bax
müzakirə → qərarlar [09](./09-decisions-log.md) #009–#012).

## Biznes məqsədi

**Lead-generasiya edən kontent platforması** (sadə portfolio deyil):

- **Məqsəd:** potensial müştərini görülmüş işlərlə inandırıb əlaqəyə (lead) gətirmək.
- **Miqyas:** böyük/platform — çox kontent, filtrlər, blog, tam CMS-ə yaxın.
- **Konversiya yolu:** ziyarətçi → case-study-lərə baxır → xidmətə uyğunlaşdırır → lead buraxır.

## Faza planı (niyə fazalı)

"Hər şey bir anda" lead-gen saytlarının ən çox uğursuzluq səbəbidir — sayt gec
canlıya çıxır, dəyər gec gəlir. Dünya praktikası: nüvəni tez canlıya çıxar, sonra
gücləndir. Bütün modullar quruluр — yalnız **sıra** dəyişir.

| Faza | Fokus | Modullar |
|------|-------|----------|
| **1** | Lead-gen nüvəsi | Work, Services, Lead, Media |
| **2** | Konversiya gücləndirmə | Testimonials+Clients, Team/About, SEO qatı |
| **3** | Authority / trafik | Blog/Insights, Analytics |

---

## FAZA 1 — Lead-gen nüvəsi

### Work / Case-study

Lead-gen-in əsas aləti. Case-study "kart" deyil — **hekayədir**: Challenge → Approach → Result.

**Kontent modeli: flexible block-based** (qərar [09](./09-decisions-log.md) #010).
Böyük agentliklərin (Sanity/Contentful pattern) yanaşması — mətn/şəkil/sitat/video
block-ları JSON-da istənilən sırada.

Entity-lər:
- **`CaseStudy`** — slug, başlıq, tagline, müştəri adı, il, qapaq media, `blocks` (JSON), published, featured, order, SEO meta.
- **`Category`** — case-study kateqoriyaları (filtr üçün).
- **`Tag`** — sərbəst teqlər (filtr üçün).
- Əlaqələr: CaseStudy ↔ Category (many-to-many), CaseStudy ↔ Tag (many-to-many).

Block tipləri (JSON `blocks` daxilində, `type` diskriminatoru ilə):
`richText`, `image`, `gallery`, `video`, `quote`, `metrics`, `twoColumn`.

### Services

Entity: **`Service`** (mövcud — genişlənəcək) — slug, başlıq, təsvir, ikon, published, order.
Əlaqə: **Service ↔ CaseStudy (many-to-many)** — "bu xidmətə uyğun işlərimiz" cross-link.

### Lead

Zənginləşdirilmiş (mövcud `ContactMessage` bunu əvəz edir — çox primitivdir).

Entity: **`Lead`**
- Əlaqə: ad, email, telefon?, şirkət?
- Kontekst: maraqlandığı xidmət(lər), büdcə aralığı, layihə təsviri
- Mənbə: UTM/referrer (marketinq atributu)
- Status: `NEW → CONTACTED → QUALIFIED → WON → LOST` (mini-CRM)
- Qorunma: honeypot + rate-limit + (opsional) captcha
- Email bildiriş: yeni lead → komandaya

### Media

Entity: **`MediaAsset`** — R2 URL, tip (image/video), ölçü, alt mətn, en/hündürlük.
Storage: **Cloudflare R2** (qərar [09](./09-decisions-log.md) #011) — S3-uyğun, ucuz, egress pulsuz.
DB-də yalnız URL + metadata (fayl özü R2-də).

---

## FAZA 2 — Konversiya gücləndirmə

### Testimonials + Clients

- **`Testimonial`** — sitat, müəllif, rol, şirkət, foto; opsional CaseStudy bağlantısı.
- **`Client`** — ad, loqo (MediaAsset), sayt URL; loqo divarı üçün.

### Team / About

- **`TeamMember`** — ad, rol, foto, bio, sosial linklər, order.
- About kontenti — statik və ya block-based (case-study block sistemini təkrar).

### SEO qatı (infrastruktur — entity yox)

Hər səhifədə dinamik meta (Next.js `generateMetadata`): title/description/OG image.
`sitemap.xml`, `robots.txt`, JSON-LD structured data (Organization, Article, BreadcrumbList).

---

## FAZA 3 — Authority / trafik

### Blog / Insights

Entity: **`Post`** — slug, başlıq, qapaq, `blocks` (JSON — **case-study ilə eyni block sistemi**),
müəllif (TeamMember), Category/Tag (təkrar istifadə), published, SEO meta.
RSS feed. Faza 1-də block sistemi düzgün qurulsa, blog xeyli asan olur.

### Analytics (inteqrasiya — entity yox)

GA4 və ya Plausible (privacy-friendly). Event tracking: lead submit, case-study view.

---

## Entity xülasəsi

| Faza | Entity | Qeyd |
|------|--------|------|
| 1 | `CaseStudy` | block-based content |
| 1 | `Category` | CaseStudy + Post üçün ortaq |
| 1 | `Tag` | CaseStudy + Post üçün ortaq |
| 1 | `Service` | ↔ CaseStudy m2m (mövcud, genişlənir) |
| 1 | `Lead` | zəngin + status (ContactMessage-i əvəz edir) |
| 1 | `MediaAsset` | R2 URL + metadata |
| 2 | `Testimonial` | opsional ↔ CaseStudy |
| 2 | `Client` | loqo divarı |
| 2 | `TeamMember` | komanda |
| 3 | `Post` | blog, block content |

`AdminUser` (mövcud) bütün fazalarda auth üçün qalır.

## Schema-ya təsir

Mövcud minimal schema (`Project`, `Service`, `ContactMessage`) genişlənəcək:
- `Project` → `CaseStudy` (block content + kateqoriya/teq + SEO).
- `ContactMessage` → `Lead` (zəngin).
- `Service` genişlənir (↔ CaseStudy).
- Yeni: `Category`, `Tag`, `MediaAsset`, `Testimonial`, `Client`, `TeamMember`, `Post`.

Növbəti addım: **Faza 1 Prisma schema dizaynı** (bu spec əsasında).
