# aibaycan.az — Sayt dizayn brifi

> Bu sənəd ChatGPT-yə (və ya istənilən dizaynerə) verilmək üçündür. Məqsəd: aşağıdakı
> məzmun və strukturla **modern, orijinal** bir landing səhifəsi (HTML) dizayn etmək.
> Sonra hazır HTML layihənin Next.js + Tailwind strukturuna inteqrasiya olunacaq.

---

## 1. Şirkət / mövqe

**atlasbip** — AI-güclü, çoxsahəli **rəqəmsal məhsul studiyası**. Biz müştərilər üçün
məhsullar qururuq (veb, ERP/CRM, e-commerce) və öz SaaS məhsullarımız var. Fərqləndirici
gücümüz: **işləyən, canlı məhsul göstərə bilirik** — təkcə şəkil yox.

Sayt: **aibaycan.az** (portfolio + lead-generasiya).

## 2. Məqsəd

Görülmüş işləri **ən yüksək səviyyədə** göstərib potensial müştərini **əlaqəyə (lead)**
gətirmək. Kanallar: web + sosial media. Ölçü: konversiya (lead formu / "danışaq").

## 3. Xidmətlər (6 bacarıq sütunu)

| # | Xidmət | Qısa təsvir |
|---|--------|-------------|
| 1 | Veb saytlar & platformalar | Müasir, sürətli, SEO-dostu saytlar və platformalar |
| 2 | ERP / CRM sistemləri | Biznes əməliyyatları üçün fərdi ERP/CRM həlləri |
| 3 | AI həllər & media | AI ilə **mahnı, video, şəkil** generasiyası; ağıllı biznes həlləri |
| 4 | Biznes avtomatlaşdırma | Proseslərin avtomatlaşdırılması və inteqrasiyalar |
| 5 | Data arxitektura & analitika | Data arxitektura, data + biznes analitika |
| 6 | SaaS məhsul inkişafı | Sıfırdan bulud əsaslı SaaS məhsulları |

## 4. Portfolio / işlərimiz

| Layihə | Nədir | Kateqoriya | Canlı |
|--------|-------|-----------|-------|
| **Etehsil.az** | Onlayn təhsil platforması | Veb & Platformalar | etehsil.az |
| **Sahil Transport ERP** | Nəqliyyat əməliyyat idarəetmə sistemi | ERP / CRM | *(daxili — demo sorğu ilə)* |
| **Foodost** | Restoran POS & idarəetmə SaaS | SaaS / Veb | foodost.com |
| **Molecion.az** | Parfümeriya e-commerce | E-commerce | molecion.az |
| **Cavably** | Rəqəmsal məhsul | Veb & Platformalar | cavably.com |

> Qeyd: ictimai məhsullar (etehsil, foodost, molecion, cavably) "Canlı bax" linki ilə;
> daxili ERP (Sahil Transport) açıq göstərilmir — "demo istə" düyməsi ilə.

## 5. Sayt strukturu (bölmələr — bu sıra ilə)

1. **Header** — logo (aibaycan.az) + naviqasiya (İşlərimiz · Xidmətlər · Bloq · Haqqımızda · Əlaqə) + dil (AZ/EN/RU). Sticky + backdrop-blur.
2. **Hero** — 2 sütun: solda eyebrow + iri başlıq + alt-başlıq + 2 CTA ("İşlərimizə baxın", "Əlaqə saxla"); sağda **məhsul-preview vizualı** (brauzer pəncərəsi + üzən stat kartları). Arxa fon: incə violet **nöqtə-grid** + gradient.
3. **Niyə biz** — 3 dəyər kartı (Nəticə-yönlü · Uçdan-uca komanda · Şəffaf proses).
4. **Seçilmiş işlər** — şəkil-yönlü kart grid (yuxarıdakı 5 layihə), kateqoriya çipləri ilə.
5. **Xidmətlər** — 6 sütun (yuxarıda), ikon + başlıq + təsvir.
6. **Necə işləyirik** — 3 addım (01 Kəşf · 02 Dizayn & development · 03 Təhvil & böyümə).
7. **Rəqəmlərlə** — stat zolağı (məs. 50+ layihə · 30+ müştəri · 8+ il · 99% vaxtında). *(rəqəmlər dəqiqləşdiriləcək)*
8. **Rəylər** — müştəri rəyləri kartları *(məzmun sonra)*.
9. **FAQ** — açılan (accordion) 4-5 sual.
10. **Yekun CTA** — gradient blok: "Növbəti layihəni birlikdə quraq" + düymə.
11. **Footer** — brend + naviqasiya + copyright.

*(Opsional: tünd "AI & media" showcase bölməsi — mahnı/video/şəkil nümunələri.)*

## 6. Brend

- **Əsas rəng:** violet **#845adf** (aksent kimi, çox deyil).
- **Şrift:** Inter (başlıqlar tracking-tight, bold).
- **Tema:** yalnız **light** (dark mode yox).
- **Dillər:** AZ (əsas), EN, RU.
- **Ton:** peşəkar, modern, təmiz — həddindən artıq "AI şablonu" yox.

## 7. Dizayn istiqaməti

Modern **AI / SaaS studiya** estetikası: səxavətli whitespace, bold tipografiya, incə
gradientlər, nöqtə-grid arxa fon, yumşaq kölgə/ring-li kartlar, hover animasiyaları
(150–300ms, ease-out), `prefers-reduced-motion` nəzərə alınır. **Orijinal dizayn** —
hazır kommersiya şablonunun surəti yox.

## 8. Texniki qeydlər (dizaynere / ChatGPT-yə)

- **Tək responsive HTML** (mobile-first). Tailwind CSS (CDN) və ya vanilla CSS — Tailwind üstünlük.
- Semantik HTML (`<header> <section> <article> <footer>`), əlçatanlıq (kontrast 4.5:1, focus, alt).
- Şəkillər üçün placeholder qutular saxla (real ekran görüntüləri sonra əlavə olunacaq).
- Bölmələri yuxarıdakı sıra ilə, hər birini ayrıca `<section>` kimi ver.
- **Sonra:** bu HTML aibaycan-ın Next.js 16 + Tailwind 4 layihəsinə inteqrasiya olunacaq
  (komponentlərə bölünəcək, i18n AZ/EN/RU, data API-dən gələcək). Ona görə class-ları təmiz,
  təkrarlanan blokları eyni struktura saxla.

---

### İstifadə

Bu faylı ChatGPT-yə ver və de: *"Bu brif əsasında modern, orijinal, responsive landing
HTML dizayn et (Tailwind)."* Hazır HTML-i mənə (aibaycan layihəsinə) gətir — birlikdə
komponentlərə bölüb, i18n və backend-ə qoşarıq.
