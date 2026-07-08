# 03 — Stack qərarları

Bu sənəd `aibaycan.az` üçün texnologiya seçimlərini və hər seçimin qəbul edilən tradeoff-unu qeyd edir. Hər mühüm qərar həm də [09 — Decisions log](./09-decisions-log.md)-a #NNN ilə əlavə olunur.

## Layihə profili

**Tip:** Portfolio saytı + admin panel (single-tenant).

- **İctimai sayt** — gördüyümüz işlər və təklif etdiyimiz xidmətlər. SEO və yükləmə sürəti kritikdir.
- **Admin panel** — kontenti (case-study, xidmət, layihə) idarə edən daxili alət. Yalnız komanda üçün, autentifikasiya arxasında.
- **Multi-tenant DEYİL.** Bir sahibkar (biz), bir kontent bazası. Ona görə `tenantId` izolasiyası, RLS-per-tenant, tenant onboarding kimi ağır SaaS mexanizmləri bu layihədə TƏTBIQ OLUNMUR — bu, `CLAUDE.md`-dəki universal SaaS qaydalarına qarşı şüurlu istisnadır (bax aşağı: "CLAUDE.md-dən kənarlaşma").

## Yekun seçimlər

| Qat | Seçim | Yer |
|-----|-------|-----|
| Public frontend | **Next.js (App Router)** | `apps/web` |
| Admin panel | **Vite + React SPA** | `apps/admin` |
| Backend API | **Hono (TypeScript)** | `apps/api` |
| Database | **PostgreSQL** | — |
| ORM / migrations | **Prisma** | `packages/db` |
| Dil | **TypeScript (strict)** | hər yer |
| Validation | **Zod** | boundary-lərdə |
| Paylaşılan UI | **React komponentləri + Tailwind** | `packages/ui` |
| Paket meneceri | **pnpm (workspaces)** | root |

---

## Qərarlar və əsaslandırma

### #1 — Public frontend: Next.js (App Router)

**Niyə:** Portfolio saytında əsas dəyər SEO və ilk-yükləmə sürətidir. Next.js SSG/SSR ilə statik səhifələr generasiya edir, `next/image` ilə şəkil optimallaşdırması, metadata API ilə asan SEO verir. İş case-study-ləri MDX və ya DB-dən gələ bilər — hər ikisi App Router-də təbii oturur.

**Tradeoff:** Vite SPA-dan daha çox "framework opinion" gətirir və build daha ağırdır. Amma SEO-nun kritikliyi bunu tam əvəz edir — sırf SPA-da portfolio Google-da zəif indekslənərdi.

### #2 — Admin panel: Vite + React SPA

**Niyə:** Admin panel autentifikasiya arxasındadır — SEO lazım deyil, SSR lazım deyil. Vite SPA ən sürətli dev-experience, ən sadə mental model verir. Portfolio-nun SSR yükünü admin-ə daşımırıq.

**Tradeoff:** İki ayrı frontend tətbiqi (Next.js + Vite) = iki build, potensial olaraq təkrarlanan komponentlər. Bunu `packages/ui`-də paylaşılan komponentlərlə azaldırıq. Alternativ — hər ikisini Next.js-də saxlamaq (bir tətbiq) idi; admin-in SSR-ə ehtiyacı olmadığı və SPA daha yüngül dev-loop verdiyi üçün ayırdıq.

### #3 — Backend: Hono (TypeScript)

**Niyə:** Portfolio + admin miqyasında API səthi kiçikdir (kontent CRUD, admin auth, əlaqə formu). Hono yüngül, TS-native, edge/Node hər yerdə işləyir, Zod ilə təbii inteqrasiya olunur. NestJS bu miqyas üçün həddən artıq strukturlu (boilerplate ağırlığı), FastAPI isə ayrı Python runtime gətirərdi — TS monorepo-nun vahidliyini pozardı.

**Tradeoff:** NestJS-in hazır DI/module ekosistemini itiririk. Layihə böyüyüb çoxlu domain modulu tələb edərsə, NestJS-ə keçid yenidən nəzərdən keçirilməlidir. Bu miqyasda YAGNI — Hono bəsdir.

### #4 — Database: PostgreSQL (self-host) + Prisma

**Niyə:** Postgres güclü, standart, vendor-lock-suz. Self-host tam nəzarət verir. Prisma type-safe sorğular, avtomatik migration, `packages/db`-də mərkəzləşdirilmiş schema verir — TypeScript strict qaydası ilə mükəmməl uyğun.

**Tradeoff:** Supabase kimi managed həll auth/storage-i də hazır verərdi və daha sürətli başlanğıc olardı; biz vendor asılılığını azaltmaq və tam nəzarət üçün self-host Postgres seçdik. Bunun əvəzi — auth, backup, hosting-i özümüz qurmalıyıq (bax [05](./05-auth-strategy.md), [14](./14-deployment.md)).

**Qeyd:** SQLite portfolio miqyası üçün kifayət edərdi, amma Postgres-ə keçid gələcəkdə migrasiya ağrısı yaradardı — başlanğıcdan Postgres seçmək uzunömürlü qərardır.

### #5 — Monorepo: pnpm workspaces

**Niyə:** `apps/*` + `packages/*` strukturu (CLAUDE.md-də təsbit olunub) paylaşılan tip və UI üçün monorepo tələb edir. pnpm sərt, sürətli, disk-səmərəli. Turborepo build-cache üçün sonradan əlavə oluna bilər.

**Tradeoff:** Tək-repo sadəliyini itiririk, amma paylaşılan `packages/ui` və `packages/shared` (tiplər) təkrarı aradan qaldırır — portfolio + admin arasında.

---

## CLAUDE.md-dən şüurlu kənarlaşma

`CLAUDE.md`-dəki sərt qaydalar universal SaaS preset üçündür. Bu layihə **single-tenant portfolio** olduğu üçün aşağıdakılar TƏTBIQ OLUNMUR (səbəbləri ilə):

| Qayda | Status | Səbəb |
|-------|--------|-------|
| Hər DB sorğusunda `tenantId` filter | ❌ Yox | Multi-tenant deyil — bir kontent bazası |
| RLS per-tenant | ❌ Yox | Tenant yoxdur; admin auth kifayətdir |
| JWT 15min + rotating refresh | ⚠️ Sadələşdirilir | Yalnız admin auth; sadə session/JWT bəsdir (bax [05](./05-auth-strategy.md)) |

Qüvvədə qalan qaydalar: **TypeScript strict + Zod boundary-lərdə**, **no silent catch**, **OWASP əsasları** (admin auth, əlaqə formu üçün), **living-docs**, **decisions-log**.

---

## Sonrakı addımlar

- [ ] pnpm workspace kök konfiqi (`package.json`, `pnpm-workspace.yaml`)
- [ ] `packages/db` — Prisma schema + ilk migration ([07](./07-data-model.md), [13](./13-database.md))
- [ ] `apps/api` — Hono skeleton + Zod ([06](./06-api-design.md))
- [ ] `apps/web` — Next.js skeleton
- [ ] `apps/admin` — Vite React skeleton + auth ([05](./05-auth-strategy.md))
- [ ] Bu qərarları [09 — Decisions log](./09-decisions-log.md)-a #001–#005 kimi köçür
