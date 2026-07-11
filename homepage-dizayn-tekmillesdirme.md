# Homepage — dizayn/sxem təkmilləşdirmələri (ChatGPT üçün)

> Bunlar **real data lazım olmayan**, yalnız dizayn/struktur düzəlişləridir. Placeholder-lar
> qalır; sxem yaxşılaşır. `aibaycan-homepage-modern-cinematic.html`-i ver və bu siyahını tətbiq etdir.
> Mövcud stil (violet #845adf, Inter, section-kicker/section-title, soft-card, cinematic effektlər)
> SAXLANILMALIDIR — yalnız aşağıdakılar təkmilləşdirilir.

## 1. Oxunaqlıq / kontrast (a11y)
- Çox açıq boz mətnləri bir ton tündləşdir: `text-black/45` → `text-black/60`, `text-black/40` → `text-black/55`.
- Dark bölmədə `text-white/42–48` → `text-white/60`-a qaldır (WCAG AA 4.5:1).
- Bütün link/düymə/summary-də görünən **focus halı** (`:focus-visible` outline) olsun.
- `<body>`-yə **"Əsas məzmuna keç" skip-link** əlavə et (əlçatanlıq).

## 2. Sticky header ofset
- Bölmələrə (`#work`, `#services`, `#process`, `#contact`) `scroll-margin-top: 90px` ver ki,
  anchor-a klikləyəndə başlıq sticky header-in altında qalmasın.

## 3. Hero
- CTA-nın altına **"aşağı sürüşdür" cue** (kiçik animasiyalı ok/xətt) əlavə et.
- CTA sətrinin altına **placeholder "trusted by" mini loqo zolağı** (5–6 boz loqo qutusu) — real loqo sonra.
- Mobil (<1024px): browser mockup-u mətnin ALTINDA saxla, float-kartları gizlət (indi belədir — təsdiqlə).

## 4. İşlər (work) bölməsi — sxem
- Hər kartda **real şəkil üçün hazır slot** olsun: sabit `aspect-ratio` (məs. 16/10) qutu,
  içində indiki mockup **placeholder** kimi qalır, sonra `<img>` ilə əvəzlənə bilsin.
- Kartların hamısında **eyni struktur**: [şəkil/mockup] + [kateqoriya çipi] + [başlıq] + [1 sətir təsvir] + [CTA].
- Bento ritmi: böyük kart + 2×2 kiçik — balanslı hündürlüklər (indiki min-height-ları uyğunlaşdır).

## 5. Sosial sübut struktur (placeholder)
- **Client logo zolağı**: mətn marquee-nin altına və ya əvəzinə **placeholder loqo qutuları** (grayscale) sırası.
- **Rəylərə**: avatar/loqo üçün **dairə slot** + ad + rol strukturu (indi anonimdir) + ops. 5-ulduz sətri.

## 6. Stats
- Reveal olunanda rəqəmlər **count-up** ilə saysın (0-dan hədəfə).
- Hər stat-a kiçik **trend ikonu** (↗) və ya ayırıcı ver.

## 7. Dark "AI & Media" bölməsi
- Yuxarı və aşağı kənarda açıq fona **yumşaq gradient blend** (indi kəskin kəsilir).
- Film-kartların altındakı gradient + scan effekti tutarlı olsun.

## 8. Kart / komponent tutarlılığı
- Bütün kartlarda **vahid radius və shadow şkalası** (soft-card / project-card / film-card fərqlidir → yaxınlaşdır).
- Button-lar (primary/secondary) və link CTA-ların hover/transition müddətləri eyni (150–250ms, ease).

## 9. Ritm / boşluq
- Bölmə boşluqlarını balanslaşdır: hero → geniş, work + dark → daha geniş nəfəs, stats → kompakt.
- Section başlıqları (section-title) ilə mətn arası boşluq hər yerdə eyni olsun.

## 10. Mikro-detallar
- Hero mockup-dakı dekorativ rəqəmlər (₼84.2K, +24, 84%) **neytral/placeholder** kimi qalsın (real sonra).
- Marquee seamless loop olsun (yarım-yarım təkrar — kəsilmə olmasın).
- `prefers-reduced-motion`-da bütün animasiyalar dayansın (var — təsdiqlə).

## 11. Meta / brend slotları
- `<head>`-də **favicon** üçün slot (`<link rel="icon">` placeholder).
- **OG/Twitter meta** teqləri üçün slot (şəkil URL-i sonra).

---

**Qeyd:** bunları tətbiq edəndən sonra HTML-i mənə gətir — Next.js-ə (bizim işləyən versiyaya)
yenidən inteqrasiya edim; i18n (AZ/EN/RU) və data bağlantısını mən əlavə edərəm.
