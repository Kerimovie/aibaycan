# 09 — Decisions log

Append-only. Hər mühüm qərar #NNN ilə qeyd olunur.

Tam əsaslandırma üçün bax [03 — Stack qərarları](./03-stack-decisions.md).

## #001 — Layihə profili: single-tenant portfolio + admin
**Date**: 2026-07-09
**Context**: CLAUDE.md universal SaaS preset-i multi-tenant fərz edir; bu layihə isə portfolio saytıdır.
**Decision**: Layihə single-tenant portfolio + daxili admin panel kimi müəyyən olundu. `tenantId` filter, RLS-per-tenant, tenant onboarding tətbiq olunmur.
**Alternatives**: Tam multi-tenant SaaS.
**Tradeoff**: Universal SaaS qaydalarından şüurlu kənarlaşma — sadəlik müqabilində gələcəkdə multi-tenant lazım olarsa yenidən işləmə.
**Reversibility**: reversible (miqyas dəyişsə profil yenidən nəzərdən keçirilə bilər)

## #002 — Public frontend: Next.js (App Router)
**Date**: 2026-07-09
**Context**: Portfolio saytında SEO və ilk-yükləmə sürəti kritikdir.
**Decision**: `apps/web` üçün Next.js App Router (SSG/SSR + `next/image` + metadata API).
**Alternatives**: Vite React SPA, Astro + React.
**Tradeoff**: SPA-dan ağır build, amma SEO qazancı bunu əvəz edir.
**Reversibility**: one-way (frontend framework dəyişikliyi bahalıdır)

## #003 — Admin panel: Vite + React SPA
**Date**: 2026-07-09
**Context**: Admin panel auth arxasındadır — SEO/SSR lazım deyil.
**Decision**: `apps/admin` üçün Vite + React SPA; Next.js-dən ayrı tətbiq.
**Alternatives**: Admin-i Next.js içində saxlamaq (tək tətbiq).
**Tradeoff**: İki frontend build; təkrar `packages/ui` ilə azaldılır.
**Reversibility**: reversible

## #004 — Backend: Hono (TypeScript)
**Date**: 2026-07-09
**Context**: API səthi kiçikdir (kontent CRUD, admin auth, əlaqə formu).
**Decision**: `apps/api` üçün Hono — yüngül, TS-native, Zod inteqrasiyalı.
**Alternatives**: NestJS (ağır struktur), FastAPI (ayrı Python runtime).
**Tradeoff**: NestJS DI/module ekosistemini itiririk; miqyas artarsa yenidən nəzərdən keçirilə bilər.
**Reversibility**: reversible

## #005 — Database: PostgreSQL (self-host) + Prisma
**Date**: 2026-07-09
**Context**: Type-safe, vendor-lock-suz, tam nəzarətli data qatı lazımdır.
**Decision**: PostgreSQL self-host + Prisma ORM (`packages/db`-də mərkəzləşmiş schema).
**Alternatives**: Supabase (managed Postgres + auth), SQLite + Prisma.
**Tradeoff**: Auth/backup/hosting-i özümüz qururuq; müqabilində vendor asılılığı yoxdur. SQLite-dan Postgres-ə sonrakı migrasiya ağrısından qaçırıq.
**Reversibility**: one-way (DB engine köçürməsi bahalıdır)

## #006 — Prisma 7 (major) + driver adapter
**Date**: 2026-07-09
**Context**: `packages/db` scaffold edilərkən ən son Prisma 7.8.0 idi. Prisma 7 breaking dəyişikliklərlə gəlir.
**Decision**: Ən son Prisma 7 istifadə olunur — `generator = prisma-client` (məcburi `output`), datasource URL `prisma.config.ts`-də, runtime-da `@prisma/adapter-pg` adapter. Generasiya olunan client gitignore.
**Alternatives**: Prisma 6-da qalmaq (köhnə, amma sadə sintaksis).
**Tradeoff**: Yeni sintaksis öyrənmə, adapter əlavə qurulum — müqabilində ən son, dəstəklənən major versiya (uzunömürlü). Köhnə versiyada qalmaq gələcəkdə upgrade borcu yaradardı.
**Reversibility**: reversible (amma geriyə downgrade YAGNI)
