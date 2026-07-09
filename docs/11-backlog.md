# 11 — Backlog

Modul xəritəsi və faza planı: [28](./28-module-map.md). Aşağıdakı sıra faza əsaslıdır.

## İnfrastruktur (tamamlandı ✅)

- [x] Monorepo (pnpm workspace, tsconfig, prettier)
- [x] `packages/db` (Prisma 7), `packages/shared` (Zod), `packages/ui`
- [x] `apps/api` (Hono + auth), `apps/web` (Next 16 + i18n), `apps/admin` (Vite)
- [x] Docker Postgres + migrate + seed + uçdan-uca auth testi

## Faza 1 — Lead-gen nüvəsi (növbəti)

- [ ] **Schema dizaynı** — Faza 1 entity-ləri (CaseStudy+blocks, Category, Tag, Service↔CaseStudy, Lead, MediaAsset), migrate
- [ ] **Media (R2)** — MediaAsset entity, R2 upload, API + admin upload UI
- [ ] **Work CRUD** — API endpoint-ləri (CaseStudy block editor daxil), admin CRUD UI
- [ ] **Services** — genişləndir + CaseStudy cross-link
- [ ] **Lead** — zəngin form (web), spam qorunma, email bildiriş, admin inbox + status
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
