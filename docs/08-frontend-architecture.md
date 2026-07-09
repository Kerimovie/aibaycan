# 08 — Frontend arxitektura

Bu sənəd **ictimai portfolio** frontend-ini əhatə edir (`apps/web`). Admin panel (`apps/admin`, Vite SPA) ayrıca sənədləşəcək.

## Stack

- **Next.js 16** (App Router) — SSG/SSR, SEO (bax [03](./03-stack-decisions.md))
- **React 19**
- **Tailwind CSS 4** — CSS-first config (`@theme` `globals.css`-də, `tailwind.config.js` yoxdur)
- **next-intl 4** — çoxdilli (bax [18](./18-i18n.md))

## Struktur

```
apps/web/src/
├── app/
│   ├── layout.tsx            # root (children passthrough)
│   ├── robots.ts             # robots.txt (Faza 3)
│   ├── sitemap.ts            # sitemap.xml (Faza 3)
│   ├── rss.xml/route.ts      # blog RSS feed (Faza 3)
│   └── [locale]/
│       ├── layout.tsx        # əsl <html>, NextIntlClientProvider, header
│       ├── page.tsx          # ana səhifə (hero + featured + services + rəylər + loqo divarı)
│       ├── about/page.tsx    # haqqımızda (Faza 2)
│       ├── contact/page.tsx  # əlaqə + lead form (Faza 2)
│       ├── projects/page.tsx           # case-study listing (Faza 2)
│       ├── projects/[slug]/page.tsx    # case-study detalı, blocks render (Faza 2)
│       ├── blog/page.tsx               # blog listing (Faza 3)
│       └── blog/[slug]/page.tsx        # blog post, blocks render (Faza 3)
├── components/
│   ├── site-header.tsx       # naviqasiya (server)
│   ├── locale-switcher.tsx   # dil dəyişdirici (client)
│   ├── analytics.tsx         # GA4 loader (consent arxası) (Faza 3b)
│   ├── consent-banner.tsx    # GDPR razılıq banneri (Faza 3b)
│   ├── view-tracker.tsx      # səhifə görüntü izləmə (Faza 3b)
│   ├── block-renderer.tsx    # block-əsaslı kontent render (Faza 2/3)
│   ├── json-ld.tsx           # JSON-LD structured data (Faza 3)
│   └── lead-form.tsx         # RHF+Zod lead formu (Faza 2)
├── i18n/                     # routing, navigation, request (next-intl)
├── lib/
│   ├── api.ts                # apps/api-yə server-side fetch
│   └── analytics.ts          # GA4 event helper-ləri (Faza 3b)
├── messages/                 # az.json, en.json, ru.json
└── proxy.ts                  # locale middleware (Next 16: proxy.ts)
```

## Routing

App Router + `[locale]` dinamik segment. Bütün yollar locale-prefiksli (`/az/...`, `/en/...`, `/ru/...`). `proxy.ts` (Next 16-da `middleware.ts`-in yeni adı) locale-i həll edir və redirect edir.

Naviqasiya üçün `next-intl` wrapper-ləri (`@/i18n/navigation` → `Link`, `useRouter`, `usePathname`) — locale prefiksini avtomatik idarə edir.

## Data axını

Server komponentləri `lib/api.ts` vasitəsilə **apps/api-yə fetch** edir (Postgres kontenti).

- Fetch `next: { revalidate: 60 }` — ISR, kontent 60 saniyədə bir yenilənir.
- **Graceful degradation:** API əlçatan deyilsə, `apiGet` xətanı loglayır (CLAUDE.md: no silent catch) və `null` qaytarır — səhifə çökmür, boş state göstərir. Build zamanı API işləməsə belə SSG uğurla tamamlanır.

## State management

Hazırda ayrıca state kitabxanası yoxdur — server komponentləri + minimal client interaktivliyi (locale switcher). Portfolio miqyasında Redux/Zustand artıqdır (YAGNI). Lazım olsa əlavə olunacaq.

## Design tokens + paylaşılan UI

Paylaşılan dizayn sistemi: [`packages/ui`](../packages/ui).

- **Tokenlər** — `packages/ui/src/styles/index.css` (`@theme`: `--primary-500` (#845adf violet), `--color-primary-*`). `web` və `admin` hər ikisi `@import '@aibaycan/ui/styles.css'` edir (web: `apps/web/src/app/globals.css:4`) → tək mənbə, təkrar yoxdur.
- **Komponentlər** — ~30 komponent (bax [doc 30](./30-shared-ui-library.md) barrel export) + `cn` util. `packages/ui` **tsup ilə build olunur → `dist`-dən export** (`package.json` exports → `./dist/index.js`); `web` `transpilePackages`, `admin` birbaşa import.
- **Tailwind skan** — hər app `@source '../../.../packages/ui/src'` ilə ui class-larını skan edir (purge olunmasın).
- **Import qeydi** — `packages/ui` extensionless import istifadə edir (`./lib/cn`, `.js` yox) — Turbopack (web) və Vite (admin) hər ikisi ilə uyğun.

## Render strategiyası

- Ana səhifə: SSG + ISR (`generateStaticParams` hər locale üçün).
- Dinamik kontent (project detalı): fetch-based, revalidate ilə.
