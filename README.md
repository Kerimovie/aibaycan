# aibaycan.az

Portfolio saytı — gördüyümüz işləri və təklif etdiyimiz xidmətləri nümayiş etdirir.

> **Status:** Faza 1+2+3 tamamlandı, lokal işləyir. Work/Services/Lead/Media, Testimonials/Clients/Team, SEO qatı (sitemap/robots/JSON-LD), Blog + GA4 analytics hazırdır. Qalan: prod deploy (docs/14) və login rate-limit (docs/05). Konfiq: R2/Resend/GA credentials `.env`-ə əlavə olunmalı.

## Struktur

```
apps/
├── web/       # Frontend — portfolio + xidmətlər səhifələri
├── api/       # Backend API
└── admin/     # Admin dashboard (kontent idarəetməsi)
packages/
├── ui/        # Paylaşılan dizayn sistemi
├── db/        # Paylaşılan DB (schema, migrations)
└── shared/    # Paylaşılan tiplər və util-lər
docs/          # Nömrələnmiş living-docs (00–27)
infra/         # Infrastructure-as-Code
scripts/       # Build, deploy, seed skriptləri
```

## Quick start

```bash
pnpm install
docker compose up -d               # Postgres (host portu tutulubsa docker-compose.override.yml ilə dəyiş)
pnpm --filter @aibaycan/ui build   # UI kitabxanası dist (dev-dən əvvəl məcburi)
pnpm --filter @aibaycan/db exec prisma migrate deploy && pnpm --filter @aibaycan/db run db:seed
pnpm dev                           # web:7301  api:7302  admin:7303
```

## Texnologiya

Single-tenant portfolio + admin panel. Tam əsaslandırma və tradeoff-lar üçün
[docs/03 — Stack qərarları](./docs/03-stack-decisions.md).

| Qat | Seçim |
|-----|-------|
| Public frontend (`apps/web`) | Next.js 16 (App Router) + next-intl AZ/EN/RU |
| Admin panel (`apps/admin`) | Vite + React SPA |
| Backend API (`apps/api`) | Hono (TypeScript) |
| Database | PostgreSQL + Prisma (`packages/db`) |
| i18n | next-intl (AZ default, EN, RU) |
| Monorepo | pnpm workspaces |

Əsas qaydalar (bax [CLAUDE.md](./CLAUDE.md)):

- TypeScript strict — `any` qadağan, boundary-lərdə Zod
- Admin auth — sadə session/JWT (multi-tenant tətbiq olunmur, bax docs/03)
- Test piramidası — unit → integration → E2E
- OWASP əsasları — admin auth + form giriş nöqtələri üçün

## Sənədlər

Bütün sənədlər `docs/` qovluğunda nömrələnmiş şəkildədir (00–27). Living-docs — kod dəyişdikcə yenilənir.

| # | Sənəd |
|---|-------|
| 01 | [Layihə icmalı](./docs/01-overview.md) |
| 02 | [Arxitektura](./docs/02-architecture.md) |
| 03 | [Stack qərarları](./docs/03-stack-decisions.md) |
| 09 | [Decisions log](./docs/09-decisions-log.md) — append-only |
| 11 | [Backlog](./docs/11-backlog.md) |
| 12 | [Modul statusu](./docs/12-modules.md) |
| 14 | [Deployment](./docs/14-deployment.md) |
| 28 | [Modul xəritəsi + faza planı](./docs/28-module-map.md) — əsas plan |
| 29 | [Admin dizayn sistemi](./docs/29-admin-design-system.md) |
| 30 | [Shared UI kitabxanası](./docs/30-shared-ui-library.md) |

Tam siyahı üçün [docs/](./docs/) qovluğuna bax.
