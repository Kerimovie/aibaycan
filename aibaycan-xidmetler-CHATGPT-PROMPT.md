# ChatGPT-yə yapışdırılacaq PROMPT — "Xidmətlər" səhifəsi

> İSTİFADƏ: Bu mətnin HAMISINI ChatGPT-yə yapışdır. **Əlavə olaraq** əvvəlki səhifələrdən birinin
> HTML faylını (məs. `aibaycan-haqqimizda-premium-cinematic-v2.html` və ya
> `aibaycan-islerimiz-cinematic-premium-v4.html`) referans kimi ChatGPT-yə yüklə — belə çıxış
> dizaynı 1:1 uyğun olacaq.

---

Sən yüksək səviyyəli web dizayner və front-end mühəndisisən.

**Tapşırıq:** Yüklədiyim referans HTML faylının **EYNİ dizayn dilində** aibaycan.az üçün tam,
standalone bir **"Xidmətlər" səhifəsi** (single HTML + inline `<style>`) yarat. Referansdakı
header, footer, tipografiya, rənglər, `eyebrow`, `section-title`, `soft-card`, `premium-divider`,
`fade-up`, cinematic tünd panellər, hover effektləri və animasiyalar **eyni** olmalıdır.

## Dizayn qaydaları (məcburi)
- **Rənglər: yalnız 2** — tünd navy `#020824` və qırmızı `#EE1027`. **Boz mətn işlətmə.** Başlıqda vurğu sözü həmişə qırmızı (`.accent`).
- **Şrift:** Inter (400–850). Böyük başlıqlar `font-weight:850`, sıx letter-spacing (`-.05em…-.067em`), `line-height ~.95`.
- **Fon:** açıq `#FCFCFE`, incə qırmızı/navy radial glow-lar, nazik grid overlay, "noise" toxuması.
- **Header:** solid ağ üzən "ada" (şəffaf yox), border + kölgə. Nav: İşlərimiz · Xidmətlər (aktiv) · Proses · Haqqımızda · Əlaqə + "Danışaq" qırmızı düymə. **Footer:** referansdakı ilə eyni.
- **Dil:** Azərbaycan. **"atlasbip" adını heç yerdə yazma** — aibaycan müstəqil brenddir.
- Reveal animasiyaları `.fade-up`, rəqəmlər `.count-up[data-count]`. Bölmələr arası `premium-divider`.
- Genişlik `max-width:1380px`, section padding ~7rem. Səhifə uzundur — tünd/açıq bölmə ritmi ilə oxunaqlı saxla.

## Səhifə strukturu və KONTENT (hamısını yerləşdir)

### 1) HERO
- Eyebrow: `Xidmətlər · Uçdan-uca rəqəmsal icra`
- Başlıq (2 sətir): **Bir ideyadan tam məhsula —** / <accent>**lazım olan hər xidmət bir yerdə.**</accent>
- Lead: “Strategiya, dizayn, development, AI və data — hamısı bir komandada. Veb platformadan ERP-ə, SaaS-dan AI mediyaya qədər rəqəmsal məhsulun bütün mərhələlərini uçdan-uca çatdırırıq.”
- Proof sətri: `9 əsas xidmət istiqaməti` · `Strategiya → Launch → İnkişaf` · `AZ · EN · RU`
- Sağda cinematic tünd “capabilities” mockup paneli: içində xidmət etiketləri (Web · ERP/CRM · SaaS · E-commerce · AI · Media · Automation · Data) + “1 komanda, uçdan-uca” faktı.
- Scroll cue: `Xidmətləri kəşf et`

### 2) YANAŞMA
- Kicker: `Yanaşma` · Başlıq: **Ayrı-ayrı işlər yox,** <accent>**vahid məhsul prosesi.**</accent>
- Mətn: “Biz xidmətləri qopuq mərhələ kimi yox, bir-birinə bağlı sistem kimi veririk. Strateqiya development-dən, dizayn datadan xəbərsiz qalmır. Nəticə: daha az boşluq, daha sürətli və etibarlı məhsul.”
- 3 sütun: **Bir komanda** (bütün disiplinlər birlikdə) · **Uçdan-uca** (kəşfdən dəstəyə) · **Məhsul düşüncəsi** (işləyən, ölçülə bilən nəticə).

### 3) ƏSAS XİDMƏTLƏR — 9 dərin blok
Hər blok: **başlıq · tagline · izah paraqrafı · “Nələr daxildir” siyahısı · “Kimlər üçün” sətri.** Vizual sold/sağda növbələşsin; ara-sıra tünd bölmə ritm üçün.

**01 · Veb Platformalar & Web App** — *Marketinq saytından mürəkkəb web tətbiqə qədər.*
İzah: Korporativ saytlar, çoxdilli portallar, istifadəçi hesablı web app və dashboardlar. Sürətli, SEO-uyğun, responsiv, uzunmüddətli inkişafa hazır.
Nələr daxildir: Korporativ sayt & landing (AZ/EN/RU); Web app / SPA / daxili portal; İstifadəçi paneli, qeydiyyat, auth; CMS / headless CMS; Performans & Core Web Vitals; Texniki SEO (sitemap, schema, meta).
Kimlər üçün: Yeni brend saytı, köhnə saytın yenilənməsi, daxili portal/web tətbiq ehtiyacı.

**02 · ERP / CRM Sistemləri** — *Bütün əməliyyatı bir sistemə topla.*
İzah: Sifariş, stok, resurs, müştəri və hesabatları vahid daxili sistemdə birləşdirən fərdi ERP/CRM. Excel və dağınıq alətlərdən nəzarət olunan platformaya keçid.
Nələr daxildir: Əməliyyat & proses idarəetməsi; Stok, inventar, resurs uçotu; Sifariş & satış axını; CRM, lead & sövdələşmə; Rol & icazə sistemi; Real vaxt dashboard & hesabatlar; Ödəniş/mühasibat inteqrasiyası.
Kimlər üçün: Çoxşöbəli əməliyyatlar, logistika/nəqliyyat, restoran, pərakəndə, xidmət şirkətləri.

**03 · SaaS Məhsul İnkişafı** — *İdeyadan bulud əsaslı məhsula.*
İzah: Sıfırdan SaaS — multi-tenant arxitektura, abunə/billing, onboarding və böyüməyə hazır struktur. Yalnız kod yox, məhsul strategiyası da.
Nələr daxildir: Məhsul strategiyası, MVP, yol xəritəsi; Multi-tenant arxitektura; Abunə & ödəniş (billing); Onboarding & istifadəçi axınları; Admin + istifadəçi panelləri; Açıq API & inteqrasiyalar; Performans, təhlükəsizlik, monitorinq.
Kimlər üçün: SaaS ideyası olan sahibkarlar, mövcud məhsulu böyütmək istəyənlər.

**04 · E-commerce Həlləri** — *Sadəcə mağaza yox — satan, idarə olunan sistem.*
İzah: Kataloq, məhsul səhifələri, səbət, checkout, ödəniş və admin — premium görünüş və konversiyaya yönəlik təcrübə.
Nələr daxildir: Custom mağaza və ya platforma həlli; Kataloq, filtr, axtarış; Səbət, checkout, ödəniş inteqrasiyası; Stok, sifariş, çatdırılma; Kampaniya, endirim, kupon; Satış analitikası.
Kimlər üçün: Pərakəndə brendlər, premium məhsullar, çoxməhsullu mağazalar.

**05 · AI Həlləri & İnteqrasiya** — *Süni intellekti real workflow-a inteqrasiya.*
İzah: LLM əsaslı köməkçilər, avtomatik cavablar, sənəd analizi və tövsiyə sistemləri — nümayiş üçün yox, məhsulun içində işləyən AI.
Nələr daxildir: AI chatbot & virtual köməkçilər; RAG (öz məlumatınıza əsaslanan cavablar); Sənəd/mətn analizi & çıxarış; Tövsiyə & personalizasiya; Semantik (ağıllı) axtarış; Mövcud məhsula AI inteqrasiyası.
Kimlər üçün: Müştəri dəstəyini avtomatlaşdırmaq, daxili bilik bazası, məhsula ağıllı funksiya əlavə etmək istəyənlər.

**06 · AI Media & Kontent** — *Süni intellektlə mahnı, video və vizual.*
İzah: Sosial media və marketinq üçün AI ilə mahnı, video, şəkil və kreativ kontent istehsalı. Sürətli, brendə uyğun, miqyaslana bilən.
Nələr daxildir: AI mahnı & musiqi; AI video & animasiya; AI şəkil & vizual; Brend üçün sosial media kontenti; Kampaniya kreativi & konsept.
Kimlər üçün: Brendlər, sosial media hesabları, marketinq kampaniyaları, kontent komandaları.

**07 · Avtomatlaşdırma & İnteqrasiyalar** — *Təkrarlanan işi sistemə tapşır.*
İzah: CRM, ödəniş, bildiriş, sənəd və daxili proseslərin avtomatlaşdırılması; fərqli sistemlərin bir-biri ilə danışması.
Nələr daxildir: Workflow avtomatlaşdırma; Sistemlər arası inteqrasiya (API, webhook); Bildiriş & mesajlaşma (email, Telegram, WhatsApp); Ödəniş & fakturalaşdırma; Sənəd/hesabat avtomatlaşdırma; Telegram/Instagram bot-ları.
Kimlər üçün: Əl ilə görülən təkrar işləri olan, alətləri bir-birinə bağlamaq istəyən komandalar.

**08 · Data Arxitekturası & Analitika (BI)** — *Məlumatı qərara çevir.*
İzah: Etibarlı data infrastrukturu, dashboardlar, biznes analitikası və hesabatlar — dağınıq datanı vahid, etibarlı mənbəyə çevirmək.
Nələr daxildir: Data arxitekturası & warehouse; ETL / data pipeline; Dashboard & vizualizasiya; BI & KPI hesabatları; Data keyfiyyəti & idarəetmə; Real vaxt & tarixi analitika.
Kimlər üçün: Data-driven qərar vermək istəyən, çoxlu mənbədən data toplayan bizneslər.

**09 · Rəqəmsal Strategiya & Discovery** — *Doğru sualla başla, doğru məhsul qur.*
İzah: Layihəyə koddan əvvəl aydınlıq. Məqsəd, istifadəçi, sərhədlər və texniki yanaşma dəqiqləşir.
Nələr daxildir: Discovery workshop & tələb analizi; Məhsul strategiyası & MVP prioritizasiyası; Texniki audit; Arxitektura & texnologiya seçimi; Yol xəritəsi & qiymətləndirmə.
Kimlər üçün: İdeya mərhələsində olanlar, mövcud sistemi yaxşılaşdırmaq istəyənlər.

### 4) ƏLAVƏ / DƏSTƏK XİDMƏTLƏRİ (4 kiçik kart)
- **UX/UI Dizayn** — istifadəçi təcrübəsi, dizayn sistemi, prototip.
- **Texniki Konsultasiya** — arxitektura, kod review, texnologiya məsləhəti.
- **Dəstək & Baxım** — launch sonrası monitorinq, düzəlişlər, inkişaf.
- **Miqrasiya & Modernləşdirmə** — köhnə sistemdən yeni stack-ə keçid.

### 5) NECƏ İŞLƏYİRİK (4 addım)
`01 · DISCOVER` Problemi anlayırıq → `02 · DESIGN` Sistemi qururuq → `03 · DEVELOP` Məhsula çeviririk → `04 · GROW` İnkişaf etdiririk.

### 6) TEXNOLOGİYA (çip strip)
Next.js / React · Node / NestJS / Hono · Python (AI, data) · PostgreSQL · Prisma · Docker · Cloud (AWS / GCP / Railway) · LLM (Claude / OpenAI) · Tailwind.
Alt qeyd: “Texnologiyanı məqsədə görə seçirik — dəbə görə yox.”

### 7) ƏMƏKDAŞLIQ MODELLƏRİ (4 kart)
- **Layihə əsaslı** — aydın scope, sabit nəticə.
- **Dedicated komanda** — uzunmüddətli, məhsulun içində işləyən komanda.
- **Retainer / Dəstək** — davamlı inkişaf, baxım, optimizasiya.
- **Konsultasiya** — qısamüddətli ekspertiza, audit, istiqamət.

### 8) SAHƏLƏR (çip/kart)
Təhsil (EdTech) · Restoran & HORECA · Pərakəndə & E-commerce · Nəqliyyat & Logistika · Parfümeriya & Beauty · Xidmət & Startap-lar.
Qeyd: “Sahədən asılı olmayaraq prinsip eynidir — işləyən sistem.”

### 9) NİYƏ aibaycan (fərqləndirici blok)
- **Öz məhsullarımız var** — Etehsil.az, Foodost, Molecion.az, Cavably, Sahil Transport ERP. Nəzəriyyə yox, təcrübə.
- **Uçdan-uca komanda** — strategiya, dizayn, development, AI, data bir yerdə.
- **Məhsul sahibliyi düşüncəsi** — sizin biznes yükünüzü də düşünürük.
- **Launch son deyil** — sonrası da yanınızdayıq.

### 10) FAQ (details/summary akkordeon)
- Hansı texnologiyalarla işləyirsiniz?
- Bir layihə adətən nə qədər çəkir?
- Mövcud sistemi yeniləyə/miqrasiya edə bilərsiniz?
- Qiymət necə müəyyən olunur?
- Launch-dan sonra dəstək verirsiniz?
- Xarici müştərilərlə işləyirsiniz?
- NDA / məxfilik mümkündürmü?

### 11) CTA (böyük tünd panel)
- Başlıq: **Hansı xidmət lazımdırsa —** <accent>**gəlin danışaq.**</accent>
- Mətn: “Ehtiyacınızı paylaşın, uyğun xidmət və yanaşmanı birlikdə seçək.”
- Düymə: **Layihəni danışaq** → Əlaqə səhifəsi.

## Çıxış (output) tələbi
- Tək fayl: tam `<!doctype html>` + `<head>` + inline `<style>` + `<body>`. Xarici CSS yox (Tailwind CDN olar).
- Referansdakı header/footer/class adlarını təkrar işlət ki, sonra Next.js-ə asan portlana bilsin.
- Bütün mətn yuxarıdakı kontentlə, Azərbaycan dilində. Placeholder mətn əlavə etmə — verilən kontenti işlət.
