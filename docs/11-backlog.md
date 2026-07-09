# 11 — Backlog

Modul xəritəsi və faza planı: [28](./28-module-map.md). Aşağıdakı sıra faza əsaslıdır.

## İnfrastruktur (tamamlandı ✅)

- [x] Monorepo (pnpm workspace, tsconfig, prettier)
- [x] `packages/db` (Prisma 7), `packages/shared` (Zod), `packages/ui`
- [x] `apps/api` (Hono + auth), `apps/web` (Next 16 + i18n), `apps/admin` (Vite)
- [x] Docker Postgres + migrate + seed + uçdan-uca auth testi

## Faza 1 — Lead-gen nüvəsi (növbəti)

- [x] **Schema dizaynı** — Faza 1 entity-ləri (CaseStudy+blocks, Category, Tag, Service↔CaseStudy, Lead, MediaAsset), migrate ✅ (migrate + seed test edildi)
- [x] **Media** — MediaAsset entity + admin list/delete ✅ (R2 upload hələ qalıb)
- [x] **Work CRUD** — API + admin CRUD UI (m2m, switch, multi-select) ✅
- [x] **Services** — genişləndi + CaseStudy cross-link + admin CRUD ✅
- [x] **Lead** — admin inbox + status ✅; **web form** (honeypot) ✅; email bildiriş qalıb
- [x] **Web** — case-study listing + detal (block render) + lead formu ✅
- [x] **R2 upload** — presigned URL axını (env + client + upload-url API + admin upload UI) ✅ (kod hazır; real R2 credentials .env-də lazım)
- [x] **Adminlər səhifəsi** — admin CRUD (rol, argon2 parol, öz-hesab qorunması, ADMIN-only) ✅
- [x] **Lead email bildiriş** ✅ (Resend, best-effort — email uğursuz olsa da lead itmir; HTML escape)

## Faza 2 — Konversiya gücləndirmə

- [x] Testimonials + Clients ✅ (schema + API + admin CRUD + public read)
- [x] Team / About ✅ (TeamMember CRUD)
- [x] SEO qatı ✅ (sitemap.xml dinamik, robots.txt, JSON-LD Organization+CreativeWork)
- [x] **Web-də göstərmə** ✅ (ana səhifə: rəylər + loqo divarı; /about: komanda)

## Faza 3 — Authority / trafik

- [x] Blog / Insights ✅ (Post entity, block content, admin CRUD, /blog + /blog/[slug], RSS, sitemap, JSON-LD Article)
- [x] Analytics ✅ (GA4 consent-gated + GDPR cookie banner + event tracking: lead_submit/case_study_view/post_view)

## Texniki borc / sonra

- [ ] Login rate-limit (brute-force qorunma — docs/05 TODO)
- [ ] Production deploy (host, reverse proxy, TLS, backup — docs/14 TODO)
- [x] E2E testlər ✅ (Playwright, ayrıca test DB, 11 test: auth/CRUD/lead form/kontent/GDPR — 2 real bug tapdı)
