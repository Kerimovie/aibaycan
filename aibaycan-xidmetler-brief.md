# aibaycan.az — "Xidmətlər" səhifəsi üçün tam dizayn + kontent brief-i

> ChatGPT-yə verilmək üçün. Məqsəd: mövcud saytla **eyni dizayn dilində** (premium, cinematic)
> tam standalone HTML "Xidmətlər" səhifəsi. Sonra Next.js-ə 1:1 portlanacaq.
> Bu ayrıca səhifədir (nav-dakı "Xidmətlər" buraya yönlənəcək).

---

## 0. Dizayn sistemi (MÜTLƏQ — digər səhifələrlə eyni)

- **Rənglər: YALNIZ 2.** Tünd navy `#020824` + qırmızı `#EE1027`. **Boz mətn QADAĞAN** — başlıqda vurğu həmişə qırmızı.
- **Şrift:** Inter (400–850). Böyük başlıq `font-weight:850`, sıx letter-spacing, `line-height ~.95`.
- **Fon:** açıq `#FCFCFE`, incə qırmızı/navy radial glow, nazik grid, "noise".
- **Header:** solid ağ üzən ada (şəffaf yox). **Footer:** eyni. **Dil:** Azərbaycan.
- **atlasbip QEYD OLUNMASIN** — aibaycan müstəqil brend.
- Təkrar istifadə: `eyebrow`, `section-title` (vurğu qırmızı), `fade-up`, `premium-divider`, cinematic tünd mockup/panel, hover-də qalxan kartlar, nəhəng şəffaf fon rəqəmləri, `count-up`.
- Genişlik `max-width:1380px`, section padding ~7rem.
- **Uzunluqdan qorxma** — bu, saytın ən dolğun səhifəsidir; hər xidmət ayrıca, dərin izahla.

---

## 1. HERO

- **Eyebrow:** `Xidmətlər · Uçdan-uca rəqəmsal icra`
- **Başlıq (2 sətir):**
  > Bir ideyadan tam məhsula —
  > <span qırmızı>lazım olan hər xidmət bir yerdə.</span>
- **Lead:** Strategiya, dizayn, development, AI və data — hamısı bir komandada. Veb platformadan ERP-ə, SaaS-dan AI mediyaya qədər rəqəmsal məhsulun bütün mərhələlərini uçdan-uca çatdırırıq.
- **Proof sətri:** `9 əsas xidmət istiqaməti` · `Strategiya → Launch → İnkişaf` · `AZ · EN · RU`
- **Sağ tərəf (mockup):** cinematic tünd "capabilities" paneli — içində fırlanan/siyahılanan xidmət etiketləri (Web · ERP/CRM · SaaS · E-commerce · AI · Media · Automation · Data), altda "1 komanda, uçdan-uca" faktı.
- **Scroll cue:** `Xidmətləri kəşf et`

## 2. YANAŞMA (qısa keçid bölməsi)

- **Kicker:** `Yanaşma`
- **Başlıq:** Ayrı-ayrı işlər yox, <span qırmızı>vahid məhsul prosesi.</span>
- **Mətn:** Biz xidmətləri bir-birindən qopuq mərhələ kimi yox, bir-birinə bağlı sistem kimi veririk. Strateqiya development-dən, dizayn datadan xəbərsiz qalmır. Nəticə: daha az boşluq, daha sürətli və etibarlı məhsul.
- **3 kiçik sütun:** *Bir komanda* (bütün disiplinlər birlikdə) · *Uçdan-uca* (kəşfdən dəstəyə) · *Məhsul düşüncəsi* (işləyən, ölçülə bilən nəticə).

---

## 3. ƏSAS XİDMƏTLƏR (hər biri ayrıca, dərin blok)

> Hər xidmət üçün: **Başlıq · qısa tagline · izah paraqrafı · "Nələr daxildir" siyahısı · "Kimlər üçün" sətri.**
> Vizual: sold/sağda növbələşən; tünd bölmələr ara-sıra ritm üçün.

### 01 · Veb Platformalar & Web App
**Tagline:** Marketinq saytından mürəkkəb web tətbiqə qədər.
**İzah:** Korporativ saytlar, çoxdilli portallar, istifadəçi hesabları olan web app və dashboardlar. Sürətli, SEO-uyğun, responsiv və uzunmüddətli inkişafa hazır.
**Nələr daxildir:**
- Korporativ sayt & landing (çoxdilli AZ/EN/RU)
- Web app / SPA / daxili portal
- İstifadəçi paneli, qeydiyyat və auth
- CMS inteqrasiyası və ya headless CMS
- Performans & Core Web Vitals optimizasiyası
- Texniki SEO bazası (sitemap, schema, meta)
**Kimlər üçün:** Yeni brend saytı, köhnə saytın yenilənməsi, daxili portal və ya web tətbiq ehtiyacı olanlar.

### 02 · ERP / CRM Sistemləri
**Tagline:** Bütün əməliyyatı bir sistemə topla.
**İzah:** Sifariş, stok, resurs, müştəri və hesabatları vahid daxili sistemə birləşdirən fərdi ERP/CRM. Excel və dağınıq alətlərdən nəzarət olunan platformaya keçid.
**Nələr daxildir:**
- Əməliyyat & proses idarəetməsi
- Stok, inventar və resurs uçotu
- Sifariş & satış axını
- Müştəri (CRM), lead və sövdələşmə idarəetməsi
- Rol və icazə sistemi (təhlükəsiz giriş)
- Real vaxt dashboard & hesabatlar
- Mövcud alətlərlə inteqrasiya (ödəniş, mühasibat və s.)
**Kimlər üçün:** Çoxşöbəli əməliyyatlar, logistika/nəqliyyat, restoran, pərakəndə, xidmət şirkətləri.

### 03 · SaaS Məhsul İnkişafı
**Tagline:** İdeyadan bulud əsaslı məhsula.
**İzah:** Sıfırdan SaaS məhsulu — multi-tenant arxitektura, abunə/billing, onboarding və böyüməyə hazır struktur. Yalnız kod yox, məhsul strategiyası da.
**Nələr daxildir:**
- Məhsul strategiyası, MVP tərifi və yol xəritəsi
- Multi-tenant arxitektura
- Abunə & ödəniş (billing) sistemi
- Onboarding və istifadəçi axınları
- Admin + istifadəçi panelləri
- Açıq API və inteqrasiyalar
- Performans, təhlükəsizlik və monitorinq
**Kimlər üçün:** SaaS ideyası olan sahibkarlar, mövcud məhsulu böyütmək istəyən komandalar.

### 04 · E-commerce Həlləri
**Tagline:** Sadəcə mağaza yox — satan, idarə olunan sistem.
**İzah:** Kataloq, məhsul səhifələri, səbət, checkout, ödəniş və admin — premium görünüş və konversiyaya yönəlik təcrübə.
**Nələr daxildir:**
- Custom onlayn mağaza və ya platforma əsaslı həll
- Məhsul kataloqu, filtr və axtarış
- Səbət, checkout və ödəniş inteqrasiyası
- Stok, sifariş və çatdırılma idarəetməsi
- Kampaniya, endirim və kupon sistemi
- Satış analitikası və hesabatlar
**Kimlər üçün:** Pərakəndə brendlər, premium məhsullar, çoxməhsullu mağazalar.

### 05 · AI Həlləri & İnteqrasiya
**Tagline:** Süni intellekti real workflow-a inteqrasiya.
**İzah:** LLM əsaslı köməkçilər, avtomatik cavablar, sənəd analizi və tövsiyə sistemləri — nümayiş üçün yox, məhsulun içində işləyən AI.
**Nələr daxildir:**
- AI chatbot & virtual köməkçilər
- RAG — öz məlumatınıza əsaslanan cavablar
- Sənəd/mətn analizi və məlumat çıxarışı
- Tövsiyə və personalizasiya sistemləri
- Ağıllı (semantik) axtarış
- Mövcud məhsula AI funksiyalarının inteqrasiyası
**Kimlər üçün:** Müştəri dəstəyini avtomatlaşdırmaq, daxili bilik bazası qurmaq, məhsula ağıllı funksiya əlavə etmək istəyənlər.

### 06 · AI Media & Kontent
**Tagline:** Süni intellektlə mahnı, video və vizual.
**İzah:** Sosial media və marketinq üçün AI ilə mahnı, video, şəkil və kreativ kontent istehsalı. Sürətli, brendə uyğun və miqyaslana bilən.
**Nələr daxildir:**
- AI mahnı & musiqi istehsalı
- AI video & animasiya
- AI şəkil & vizual kontent
- Brend üçün sosial media kontenti
- Kampaniya kreativi və konsept
**Kimlər üçün:** Brendlər, sosial media hesabları, marketinq kampaniyaları, kontent komandaları.

### 07 · Avtomatlaşdırma & İnteqrasiyalar
**Tagline:** Təkrarlanan işi sistemə tapşır.
**İzah:** CRM, ödəniş, bildiriş, sənəd və daxili proseslərin avtomatlaşdırılması; fərqli sistemlərin bir-biri ilə danışması.
**Nələr daxildir:**
- Workflow avtomatlaşdırma
- Sistemlər arası inteqrasiya (API, webhook)
- Bildiriş & mesajlaşma (email, Telegram, WhatsApp)
- Ödəniş və fakturalaşdırma axınları
- Sənəd və hesabat avtomatlaşdırma
- Telegram / Instagram bot-ları
**Kimlər üçün:** Əl ilə görülən təkrar işləri olan, alətləri bir-birinə bağlamaq istəyən komandalar.

### 08 · Data Arxitekturası & Analitika (BI)
**Tagline:** Məlumatı qərara çevir.
**İzah:** Etibarlı data infrastrukturu, dashboardlar, biznes analitikası və hesabatlar — dağınıq datanı vahid, etibarlı mənbəyə çevirmək.
**Nələr daxildir:**
- Data arxitekturası & warehouse dizaynı
- ETL / data pipeline qurulması
- Dashboard & vizualizasiya
- Biznes analitikası (BI) və KPI hesabatları
- Data keyfiyyəti və idarəetmə
- Real vaxt & tarixi analitika
**Kimlər üçün:** Data-driven qərar vermək istəyən, çoxlu mənbədən məlumat toplayan bizneslər.

### 09 · Rəqəmsal Strategiya & Discovery
**Tagline:** Doğru sualla başla, doğru məhsul qur.
**İzah:** Layihəyə koddan əvvəl aydınlıq. Məqsəd, istifadəçi, sərhədlər və texniki yanaşma dəqiqləşir.
**Nələr daxildir:**
- Discovery workshop & tələb analizi
- Məhsul strategiyası və MVP prioritizasiyası
- Texniki audit (mövcud sistem üçün)
- Arxitektura və texnologiya seçimi
- Yol xəritəsi və qiymətləndirmə
**Kimlər üçün:** İdeya mərhələsində olanlar, mövcud sistemi yaxşılaşdırmaq istəyənlər.

---

## 4. ƏLAVƏ / DƏSTƏK XİDMƏTLƏRİ (kiçik kart qrupu)

- **UX/UI Dizayn** — istifadəçi təcrübəsi, dizayn sistemi, prototip.
- **Texniki Konsultasiya** — arxitektura, kod review, texnologiya məsləhəti.
- **Dəstək & Baxım** — launch sonrası monitorinq, düzəlişlər, inkişaf.
- **Miqrasiya & Modernləşdirmə** — köhnə sistemdən yeni stack-ə keçid.

---

## 5. NECƏ İŞLƏYİRİK (proses — 4 addım)

`01 · DISCOVER` Problemi anlayırıq → `02 · DESIGN` Sistemi qururuq → `03 · DEVELOP` Məhsula çeviririk → `04 · GROW` İnkişaf etdiririk.
(Ana səhifə ilə eyni proses dili.)

## 6. TEXNOLOGİYA (stack strip)

Nümunə etiketlər (loqolar və ya mətn çip): **Next.js / React · Node / NestJS / Hono · Python (AI, data) · PostgreSQL · Prisma · Docker · Cloud (AWS / GCP / Railway) · LLM (Claude / OpenAI) · Tailwind.**
Alt qeyd: "Texnologiyanı məqsədə görə seçirik — dəbə görə yox."

## 7. ƏMƏKDAŞLIQ MODELLƏRİ (4 kart)

- **Layihə əsaslı** — aydın scope, sabit nəticə. Yeni məhsul və ya konkret iş üçün.
- **Dedicated komanda** — uzunmüddətli, məhsulun içində işləyən komanda.
- **Retainer / Dəstək** — davamlı inkişaf, baxım və optimizasiya.
- **Konsultasiya** — qısamüddətli ekspertiza, audit və istiqamət.

## 8. SAHƏLƏR (industries — çip və ya kiçik kartlar)

Təhsil (EdTech) · Restoran & HORECA · Pərakəndə & E-commerce · Nəqliyyat & Logistika · Parfümeriya & Beauty · Xidmət & Startap-lar.
Qeyd: "Sahədən asılı olmayaraq prinsip eynidir — işləyən sistem."

## 9. NİYƏ aibaycan (fərqləndirici blok)

- **Öz məhsullarımız var** — Etehsil.az, Foodost, Molecion.az, Cavably, Sahil Transport ERP. Nəzəriyyə yox, təcrübə.
- **Uçdan-uca komanda** — strategiya, dizayn, development, AI və data bir yerdə.
- **Məhsul sahibliyi düşüncəsi** — sizin biznes yükünüzü də düşünürük.
- **Launch son deyil** — sonrası da yanınızdayıq.

## 10. FAQ

- Hansı texnologiyalarla işləyirsiniz?
- Bir layihə adətən nə qədər çəkir?
- Mövcud sistemi yeniləyə/miqrasiya edə bilərsiniz?
- Qiymət necə müəyyən olunur?
- Launch-dan sonra dəstək verirsiniz?
- Xarici müştərilərlə işləyirsiniz?
- NDA / məxfilik mümkündürmü?

## 11. CTA

- **Başlıq:** Hansı xidmət lazımdırsa — <span qırmızı>gəlin danışaq.</span>
- **Mətn:** Ehtiyacınızı paylaşın, uyğun xidmət və yanaşmanı birlikdə seçək.
- **Düymə:** "Layihəni danışaq" → Əlaqə səhifəsi.

---

## Texniki qeyd (ChatGPT üçün)
- Tam standalone HTML + inline `<style>` (Tailwind CDN + custom CSS olar).
- Digər səhifələrlə **eyni** header/footer, eyni class adları (`eyebrow`, `section-title`, `fade-up`, `premium-divider`, `button-primary`, `works-scroll-cue`, `soft-card` və s.).
- Bütün mətn Azərbaycan dilində. Reveal `.fade-up`, rəqəmlər `.count-up[data-count]`.
- Səhifə uzundur — bölmələr arası `premium-divider` və tünd/açıq ritm ilə oxunaqlı saxla.
