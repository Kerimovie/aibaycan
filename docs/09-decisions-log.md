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

## #007 — i18n: AZ + EN + RU (next-intl)
**Date**: 2026-07-09
**Context**: Portfolio saytı Azərbaycan bazarı üçündür; RU geniş istifadə olunur, EN beynəlxalq üçün.
**Decision**: Üç dil (az default, en, ru), next-intl 4 + App Router `[locale]` segment, locale-prefiksli routing. Next 16-da middleware `proxy.ts`-ə köçüb.
**Alternatives**: Tək dil (AZ), yalnız AZ+EN.
**Tradeoff**: Hər dil üçün tərcümə saxlanması + i18n qat mürəkkəbliyi — müqabilində daha geniş auditoriya. Kontent (DB) hələ tək dildə; multi-lang kontent lazım olsa schema genişlənəcək (YAGNI).
**Reversibility**: reversible (dil əlavə/çıxarmaq asandır)

## #008 — apps/web: Next.js 16 + Tailwind 4
**Date**: 2026-07-09
**Context**: `apps/web` scaffold edilərkən ən son Next 16.2 + Tailwind 4 idi.
**Decision**: Next.js 16 App Router + React 19 + Tailwind 4 (CSS-first config, `@theme`). Data apps/api-dən server-side fetch + ISR (revalidate 60s), graceful degradation.
**Alternatives**: Tailwind 3 (JS config), statik mock data.
**Tradeoff**: Tailwind 4 CSS-first yeni yanaşmadır (öyrənmə) — müqabilində sürətli, config-siz. API-dən data = admin panel kontenti idarə edə bilir.
**Reversibility**: one-way (framework), reversible (data mənbəyi)

## #009 — Biznes məqsədi: lead-gen platforması (fazalı)
**Date**: 2026-07-09
**Context**: Sayt sadə portfolio kimi başladı; müzakirədə əsl məqsəd aydınlaşdı.
**Decision**: Lead-generasiya edən böyük kontent platforması. 8 modul 3 fazaya bölünür (bax [28](./28-module-map.md)): Faza 1 nüvə (Work/Services/Lead/Media), Faza 2 konversiya (Testimonials/Team/SEO), Faza 3 authority (Blog/Analytics).
**Alternatives**: Bütün modulları bir anda qurmaq.
**Tradeoff**: Fazalı = nüvə tez canlıya çıxır, dəyər tez gəlir; hər şeyi bir anda = gec canlıya çıxış, lead gecikir. Modullar itmir, yalnız sıralanır.
**Reversibility**: reversible (faza sırası dəyişə bilər)

## #010 — Case-study: flexible block-based content
**Date**: 2026-07-09
**Context**: Böyük platform üçün case-study kontent modeli lazım.
**Decision**: Flexible block-based (JSON `blocks` — richText/image/gallery/video/quote/metrics/twoColumn). Blog `Post` eyni sistemi təkrar istifadə edəcək.
**Alternatives**: Sabit sahələr (challenge/approach/result), tək rich-text.
**Tradeoff**: Admin editoru daha mürəkkəb — müqabilində elastik, güclü kontent (Sanity/Contentful pattern). Sabit sahələrdən block-based-ə sonrakı miqrasiya ağrılı olardı.
**Reversibility**: one-way (kontent modeli köçürməsi bahalıdır)

## #011 — Media storage: Cloudflare R2
**Date**: 2026-07-09
**Context**: Case-study/blog ağır şəkil-video kontentə malikdir.
**Decision**: Cloudflare R2 (S3-uyğun). DB-də yalnız URL + metadata (`MediaAsset`), fayl R2-də.
**Alternatives**: Cloudinary (hazır optimizasiya, vendor-lock), AWS S3 (egress pullu), DB-də saxlama (anti-pattern).
**Tradeoff**: Image resize/optimizasiyanı özümüz qururuq — müqabilində ucuz (egress pulsuz), vendor-lock az. DB-də fayl saxlamaq heç vaxt.
**Reversibility**: reversible (URL-abstrakt qat, provider dəyişə bilər)

## #012 — Category/Tag ortaq (CaseStudy + Post)
**Date**: 2026-07-09
**Context**: Həm case-study, həm blog filtr/təsnifat tələb edir.
**Decision**: `Category` və `Tag` entity-ləri həm CaseStudy, həm Post arasında paylaşılır (təkrar etməmək üçün).
**Alternatives**: Hər tip üçün ayrı kateqoriya sistemi.
**Tradeoff**: Ortaq = az təkrar, vahid filtr; müqabilində iki fərqli kontent tipinin təsnifatı qarışa bilər (polymorphic əlaqə diqqət tələb edir).
**Reversibility**: reversible
