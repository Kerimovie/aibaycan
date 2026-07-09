# 02 — Arxitektura

Yüksək səviyyə komponent axını və data axını. Kod istinadları real fayllara aiddir.

## Komponentlər

| Komponent | Yer | Rol |
|-----------|-----|-----|
| Public frontend | `apps/web` | Next.js 16 (SSR/ISR), next-intl (AZ default, EN, RU) — portfolio, blog, lead formu |
| Admin panel | `apps/admin` | Vite + React SPA — kontent CRUD, cookie-JWT auth arxasında |
| Backend API | `apps/api` | Hono (`apps/api/src/app.ts`) — public read + admin CRUD + auth |
| Persistensiya | `packages/db` | Prisma → PostgreSQL (4 migration: init + phase1/2/3) |
| Media storage | Cloudflare R2 | `apps/api/src/lib/r2.ts` — presigned PUT, client birbaşa yükləyir |
| Paylaşılan sxem/tip | `packages/shared` | Zod sxemləri + tiplər, birbaşa `src`-dən import |
| Paylaşılan UI | `packages/ui` | tsup → `dist` komponentlər (dev-dən əvvəl build məcburi) |

## Komponent diaqramı

```
  ziyarətçi                           komanda (admin)
     │                                     │
     ▼                                     ▼
┌──────────┐                        ┌────────────┐
│ apps/web │  Next 16, next-intl    │ apps/admin │  Vite React SPA
└────┬─────┘                        └─────┬──────┘
     │  fetch /api/*                       │  fetch /api/admin/* (cookie-JWT)
     └──────────────┬──────────────────────┘
                    ▼
             ┌─────────────┐
             │  apps/api   │  Hono (src/app.ts)
             │  CORS allow │  web + admin (app.ts:16-22)
             └──────┬──────┘
                    │ Prisma
                    ▼
             ┌─────────────┐        ┌──────────────┐
             │ PostgreSQL  │        │ Cloudflare R2│ (media, lib/r2.ts)
             └─────────────┘        └──────────────┘
```

## Data axını

- **Ziyarətçi → web → api → db:** public read endpoint-ləri (case-study, xidmət, blog, testimonial, komanda) `apps/web` SSR/ISR-də `apps/api`-dən çəkilir.
- **Admin → api → db:** admin SPA cookie-JWT ilə autentifikasiya olunur, `apps/api` CRUD icra edir.
- **Lead axını:** web formu (honeypot) → `apps/api` lead-i DB-yə yazır → email bildiriş **Resend** ilə best-effort göndərilir (email uğursuz olsa da lead itmir).
- **Media axını:** admin presigned PUT URL alır (`lib/r2.ts`) → client birbaşa R2-yə yükləyir (fayl serverdən keçmir).

## Auth

- HttpOnly cookie-JWT (`apps/api/src/lib/jwt.ts`), cookie adı **`aibaycan_admin`**, HS256, 7 gün.
- CORS allowlist yalnız web + admin origin-lərinə (`apps/api/src/app.ts:16-22`, mənbə `CORS_ORIGINS` env → `src/env.ts`), `credentials: true` cookie üçün.

Ətraflı: [03 — Stack qərarları](./03-stack-decisions.md), [05 — Auth strategiyası](./05-auth-strategy.md), [28 — Modul xəritəsi](./28-module-map.md).
