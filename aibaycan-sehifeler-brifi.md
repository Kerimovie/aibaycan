# aibaycan.az — Qalan səhifələrin dizayn brifi

> **VACİB (ChatGPT-yə):** Hər səhifə **mövcud ana səhifə (homepage) ilə EYNİ dizayn
> sistemində** olmalıdır. Referans olaraq `aibaycan-homepage-modern-cinematic.html`
> faylını da ver. Eyni elementlər işlədilməlidir:
>
> - Rəng: violet **#845adf**, açıq lavanda gradient fon (`--page: #fbfaff`), Inter font
> - `section-kicker` (kiçik violet üst-etiket) + `section-title` (böyük başlıq)
> - `soft-card`, `button-primary` / `button-secondary`, `eyebrow` pill
> - `fade-up` scroll-reveal, cursor-glow, noise, ambient orb (cinematic hiss)
> - Konteyner: `max-w-[1380px]`, `px-5 sm:px-7 lg:px-10`
> - Sticky şüşəvari header + çoxsütunlu footer (onsuz da var)
> - Yalnız **light** tema, AZ (əsas), sonra EN/RU
>
> Hər səhifəni ayrıca `<main>` bloku kimi ver (header/footer təkrar lazım deyil).

---

## 1) Əlaqə — `/contact` 🔥
**Məqsəd:** ziyarətçini lead-ə çevirmək (ən vacib konversiya səhifəsi).
**Bölmələr:**
- Hero: section-kicker "Əlaqə" + böyük başlıq ("Layihəni birlikdə quraq") + qısa alt-mətn.
- 2 sütun: solda **lead formu**, sağda əlaqə məlumatları + gözləntilər.
- Form sahələri: Ad, Email, Telefon (ops.), Şirkət (ops.), Maraq (xidmət seçimi), Büdcə aralığı (ops.), Mesaj. Honeypot gizli sahə. Göndər düyməsi (button-primary).
- Sağ panel: hello@aibaycan.az, Bakı, iş saatları, "24 saat içində cavab", sosial linklər.
- Uğur/xəta vəziyyəti (mesaj göndəriləndən sonra).

## 2) İşlər (portfolio listing) — `/projects` 🔥
**Məqsəd:** bütün işləri kateqoriyaya görə göstərmək.
**Bölmələr:**
- Hero: section-kicker "Portfolio" + başlıq + alt-mətn.
- **Kateqoriya filtri** (çiplər): Hamısı · Veb & Platformalar · ERP/CRM · AI & Media · E-commerce · Data.
- İş kartları grid-i (homepage-dəki `project-card` + mesh art + screen-frame stilində): şəkil/mockup + kateqoriya çipi + başlıq + qısa təsvir + "Canlı bax"/"Demo istə".
- Boş vəziyyət mesajı.

## 3) İş detalı (case-study) — `/projects/[slug]` 🔥
**Məqsəd:** bir işi hekayə kimi göstərmək (Challenge → Approach → Result).
**Bölmələr:**
- Geri linki ("← İşlərə qayıt").
- Başlıq bloku: kateqoriya çipləri + böyük başlıq + tagline + meta (Müştəri, İl, Xidmət).
- Böyük cover şəkli/mockup (cinematic ring/shadow).
- Blok kontenti: mətn, şəkil, qalereya, sitat, **metrikalar** (nəticələr), 2-sütun.
- "Canlı bax" / "Demo istə" düymələri.
- Yekun CTA (Növbəti layihə).
- (Ops.) Növbəti/oxşar işlər.

## 4) Haqqımızda — `/about` 🟡
**Məqsəd:** komanda + şirkət etibarı.
**Bölmələr:**
- Hero: "Haqqımızda" + missiya cümləsi.
- Qısa hekayə (atlasbip, nə edirik, dəyərlər).
- **Komanda** grid (foto + ad + rol + qısa bio + sosial).
- Dəyərlər / iş prinsipləri (soft-card-lar).
- Stat zolağı (təcrübə, layihə) — homepage stilində.
- CTA (birlikdə işləyək).

## 5) Bloq (listing) — `/blog` 🟡
**Məqsəd:** authority / SEO trafiki.
**Bölmələr:**
- Hero: "Bloq / Insights" + alt-mətn.
- (Ops.) seçilmiş məqalə (böyük kart).
- Məqalə kartları grid-i: cover + kateqoriya + başlıq + excerpt + tarix + müəllif.
- Boş vəziyyət.

## 6) Bloq məqaləsi — `/blog/[slug]` 🟡
**Məqsəd:** oxunaqlı məqalə.
**Bölmələr:**
- Geri linki.
- Başlıq + meta (müəllif, tarix, kateqoriya) + cover.
- Blok kontenti (mətn, şəkil, sitat) — dar oxu genişliyi (`max-w-3xl`), rahat tipografiya.
- Paylaş düymələri.
- Sonda CTA + (ops.) oxşar məqalələr.

## 7) 404 + error səhifələri ⚙️
**Məqsəd:** itmiş/xətalı hallar da brendli olsun.
**Bölmələr:** böyük "404" / xəta mesajı (cinematic), qısa izah, "Ana səhifəyə qayıt" düyməsi, ambient orb/gradient fon.

## 8) Privacy / Cookie siyasəti — `/privacy` ⚙️
**Məqsəd:** GDPR (cookie banner buraya keçid verir).
**Bölmələr:** sadə oxu səhifəsi (`max-w-3xl`), başlıqlar + mətn: hansı data, cookie, GA4 razılığı, əlaqə. Sadə, təmiz tipografiya.

---

## Komponentlər (səhifələr daxilində, ChatGPT-yə qeyd)
- **Lead form** — native yox, cinematic input/select/textarea + button-primary.
- **Block renderer** — case-study/bloq kontenti: richText, image, gallery, video, quote, metrics, twoColumn (homepage tipografiyası ilə).
- **Filter çipləri** — `/projects` üçün.

## İstifadə
ChatGPT-yə hər səhifə üçün: *"`aibaycan-homepage-modern-cinematic.html` dizayn sistemi
ilə EYNİ stildə, bu spec əsasında `<main>` HTML dizayn et (Tailwind)."* Hazır HTML-i mənə
gətir — komponentlərə bölüb, i18n (AZ/EN/RU) və backend/data-ya qoşaram.
