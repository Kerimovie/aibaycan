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
- [~] **Lead** — admin inbox + status ✅; web form + email bildiriş qalıb
- [ ] **R2 upload** — media faylların real yüklənməsi (presigned URL)
- [ ] **Web** — case-study listing (filtr) + detal səhifə, xidmət səhifələri, lead formu

## Faza 2 — Konversiya gücləndirmə

- [ ] Testimonials + Clients (loqo divarı)
- [ ] Team / About
- [ ] SEO qatı — generateMetadata, sitemap, robots, JSON-LD

## Faza 3 — Authority / trafik

- [ ] Blog / Insights (block content — case-study sistemini təkrar)
- [ ] Analytics (GA4/Plausible + event tracking)

## Texniki borc / sonra

- [ ] Login rate-limit (brute-force qorunma — docs/05 TODO)
- [ ] Production deploy (host, reverse proxy, TLS, backup — docs/14 TODO)
- [ ] E2E testlər (Playwright — kritik axınlar)
