# aibaycan.az — "Haqqımızda" səhifəsi üçün dizayn brief-i

> Bu sənəd ChatGPT-yə verilmək üçündür. Məqsəd: mövcud saytla **eyni dizayn dilində**
> (premium, cinematic) tam standalone HTML "Haqqımızda" səhifəsi yaratmaq.
> Sonra bu HTML Next.js stack-ə 1:1 portlanacaq.

---

## 0. Dizayn sistemi (MÜTLƏQ əməl olunmalı — digər səhifələrlə eyni)

- **Rənglər: YALNIZ 2 rəng.** Tünd navy `#020824` (mətn/baza) və qırmızı `#EE1027` (vurğu/aksent).
  Boz mətn **QADAĞAN** — başlıqda vurğu sözü həmişə qırmızı olur, boz yox.
- **Şrift:** Inter (400–850). Böyük başlıqlar `font-weight: 850`, sıx letter-spacing (`-.05em`…`-.067em`), `line-height` ~.94.
- **Fon:** açıq `#FCFCFE`, incə qırmızı/navy radial glow-lar, nazik grid overlay, "noise" toxuması.
- **Header:** solid ağ üzən "ada" (border + kölgə + blur), **şəffaf deyil**. Nav: İşlərimiz · Xidmətlər · Proses · Haqqımızda · Əlaqə + "Danışaq" düyməsi (qırmızı).
- **Footer:** eyni (logo + tagline + naviqasiya + əlaqə).
- **Dil:** Azərbaycan.
- **Stil elementləri (digər səhifələrdən təkrar istifadə et):** `eyebrow` (nöqtəli kicker), `section-title` (2 sətir, ikincisi qırmızı vurğu), `fade-up` reveal, cinematic "console/reel" tipli tünd mockup kartlar, hover-də qalxan kartlar, nəhəng şəffaf fon rəqəmləri.
- **Genişlik:** `max-width: 1380px`, section padding ~7rem.
- **Bölmələr arası:** `premium-divider` (nazik qırmızı gradient xətt).

### VACİB məhdudiyyətlər
- **atlasbip QEYD OLUNMASIN.** aibaycan müstəqil brend kimi təqdim olunur. Heç bir yerdə "atlasbip" yazma (footer tagline-də də yox).
- **Komanda ad-soyadsız** — yalnız disiplinlər/rollar.
- **Rəqəmlər PLACEHOLDER** — real deyil, sonra dəyişiləcək (aşağıda `[◦]` ilə işarələnib).

---

## 1. HERO — mövqe cümləsi

- **Eyebrow:** `Haqqımızda · Rəqəmsal məhsul studiyası`
- **Başlıq (2 sətir):**
  > Rəqəmsal məhsullar qururuq —
  > <span qırmızı>vitrin üçün yox, işləməsi üçün.</span>
- **Lead:** aibaycan çoxsahəli, AI-güclü məhsul studiyasıdır. Veb platforma, ERP/CRM, SaaS, e-commerce və AI həllərini — strategiyadan launch-a qədər — bir komanda ilə çatdırırıq.
- **Proof sətri (2 nöqtəli):** `Strateqiyadan launch-a qədər tam dövr` · `AZ · EN · RU · remote-first`
- **Sağ tərəf (mockup):** cinematic tünd "studio" konsolu — İşlərimiz/Əlaqə səhifələrindəki `cinema-reel` / `contact-console` üslubunda. İçində: "STUDIO" statusu, kiçik "aktiv layihə" kartları, disiplin etiketləri (Strategy · Product · Engineering · AI · Data), altda 3 mini-fakt.

## 2. MANİFEST — nəyə inanırıq

- **Kicker:** `Manifest`
- **Başlıq:** İşləyən məhsul <span qırmızı>gözəl ekrandan vacibdir.</span>
- **Mətn:** Dizayn təqdimatla bitmir. Biz real istifadədə, real yükdə işləyən, ölçülə bilən və genişlənə bilən sistemlər qururuq. Hər layihəyə uzunmüddətli məhsul kimi baxırıq — bir dəfəlik iş kimi yox.
- **Format:** 3–4 "inanc" kartı: *Real məhsul, prototip yox* · *Ölçülə bilən nəticə* · *Təhlükəsiz və genişlənən arxitektura* · *Uzunmüddətli əməkdaşlıq*.

## 3. RƏQƏMLƏR *(placeholder)*

Böyük count-up rəqəmlər (navy, "+" işarəli):
- `[◦] 8+` İl məhsul inkişafı
- `[◦] 70+` Layihə təcrübəsi
- `[◦] 30+` Müştəri əməkdaşlığı
- `[◦] 5+` Sahə / vertical

> Qeyd: rəqəmlər müvəqqətidir, real dəyərlərlə əvəz olunacaq.

## 4. NƏ EDİRİK — ixtisaslar

- **Kicker:** `İxtisaslar`
- **Başlıq:** Bir ideya üçün lazım olan <span qırmızı>bütün bacarıqlar.</span>
- **7 kart:** Web platforms · ERP / CRM · SaaS məhsulları · E-commerce · AI & media · Avtomatlaşdırma · Data arxitekturası və analitika. (Hər kartda 1 cümlə izah.)
- Altda kiçik link: → Xidmətlər səhifəsi.

## 5. ÖZ MƏHSULLARIMIZ — ən güclü sübut

- **Kicker:** `Öz məhsullarımız`
- **Başlıq:** Qurduğumuz sistemləri <span qırmızı>özümüz də işlədirik.</span>
- **Mətn:** Biz təkcə sifariş işləmirik — real bizneslər qururuq və idarə edirik. Bu, hər müştəri layihəsinə gətirdiyimiz təcrübənin mənbəyidir.
- **5 məhsul çipi/kartı:** Etehsil.az (EdTech) · Foodost (Restaurant SaaS) · Molecion.az (E-commerce) · Cavably (Digital product) · Sahil Transport ERP (ERP). → İşlərimiz səhifəsinə link.

## 6. NECƏ İŞLƏYİRİK — prinsiplər

- **Kicker:** `Prinsiplər`
- **Başlıq:** Aydın yanaşma. <span qırmızı>Etibarlı icra.</span>
- **6 prinsip kartı:**
  1. Discovery ilə başlayırıq — problem əvvəl, həll sonra.
  2. MVP-first — əvvəl işləyən nüvə, sonra genişlənmə.
  3. Production səviyyəsində kod — test, təhlükəsizlik, monitorinq.
  4. Təhlükəsizlik default — auth, multi-tenant, data qorunması.
  5. Remote-first, çoxdilli — AZ · EN · RU.
  6. Launch-dan sonra da yanınızda — inkişaf və dəstək.

## 7. KOMANDA — disiplin əsaslı *(ad-soyadsız)*

- **Kicker:** `Komanda`
- **Başlıq:** Bir məhsulu bir <span qırmızı>komanda çatdırır.</span>
- **Mətn:** Fərqli disiplinləri bir prosesdə birləşdiririk ki, strategiya, dizayn və mühəndislik arasında boşluq qalmasın.
- **5 disiplin kartı (ad yox, rol):** Strategiya · Product / UX · Engineering · AI & Media · Data & Analitika. Hər birində 1 cümlə: bu disiplin məhsula nə qatır.

## 8. CTA

- **Başlıq:** Növbəti məhsulu <span qırmızı>birlikdə quraq.</span>
- **Mətn:** İdeyanızı və ya mövcud sisteminizi paylaşın — uyğun yanaşmanı birlikdə müəyyən edək.
- **Düymə:** "Layihəni danışaq" → Əlaqə səhifəsi.

---

## Texniki qeyd (ChatGPT üçün)
- Tam standalone HTML + inline `<style>` ver (Tailwind CDN + custom CSS olar).
- Digər səhifələrlə **eyni** header/footer, eyni class adları (`eyebrow`, `section-title`, `fade-up`, `premium-divider`, `button-primary`, `works-scroll-cue` və s.) — port zamanı təkrar istifadə üçün.
- Bütün mətn Azərbaycan dilində.
- Reveal animasiyaları `.fade-up` ilə, count-up rəqəmləri `.count-up[data-count]` ilə.
