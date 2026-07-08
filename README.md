# aibaycan.az

Portfolio saytı — gördüyümüz işləri və təklif etdiyimiz xidmətləri nümayiş etdirir.

> **Status:** Erkən mərhələ (scaffold). Struktur və sənədlər hazırlanır; tətbiq kodu (`apps/`, `packages/`) hələ boşdur.

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

> ⚠️ Monorepo hələ tam quraşdırılmayıb — `package.json` və workspace konfiqurasiyası əlavə olunanda bu bölmə real komandalarla yenilənəcək.

Planlaşdırılan iş axını (monorepo qurulandan sonra):

```bash
pnpm install
pnpm dev
```

## Texnologiya

Single-tenant portfolio + admin panel. Tam əsaslandırma və tradeoff-lar üçün
[docs/03 — Stack qərarları](./docs/03-stack-decisions.md).

| Qat | Seçim |
|-----|-------|
| Public frontend (`apps/web`) | Next.js (App Router) |
| Admin panel (`apps/admin`) | Vite + React SPA |
| Backend API (`apps/api`) | Hono (TypeScript) |
| Database | PostgreSQL + Prisma (`packages/db`) |
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
| 12 | [Modul statusu](./docs/12-modules.md) |
| 14 | [Deployment](./docs/14-deployment.md) |

Tam siyahı üçün [docs/](./docs/) qovluğuna bax.
