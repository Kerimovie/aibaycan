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
│   └── [locale]/
│       ├── layout.tsx        # əsl <html>, NextIntlClientProvider, header
│       └── page.tsx          # ana səhifə (hero + featured + services)
├── components/
│   ├── site-header.tsx       # naviqasiya (server)
│   └── locale-switcher.tsx   # dil dəyişdirici (client)
├── i18n/                     # routing, navigation, request (next-intl)
├── lib/api.ts                # apps/api-yə server-side fetch
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

## Design tokens

Tailwind 4 `@theme` (`globals.css`): `--color-brand`, `--font-sans`. Paylaşılan dizayn sistemi (`packages/ui`) sonra qurulanda tokenlər ora köçə bilər.

## Render strategiyası

- Ana səhifə: SSG + ISR (`generateStaticParams` hər locale üçün).
- Dinamik kontent (project detalı): fetch-based, revalidate ilə.
