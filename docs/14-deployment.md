# 14 — Deployment

## Lokal development

### Postgres (Docker)

`docker-compose.yml` lokal Postgres 17 qaldırır.

```bash
docker compose up -d        # başlat
docker compose ps           # status (healthy olmalı)
docker compose down         # dayandır (data qalır — named volume)
docker compose down -v      # data ilə birlikdə sil
```

**Port qeydi:** Host portu **5434** (5432 deyil) — bu maşında 5432/5433 başqa proseslə (SSH tunnel) məşğuldur. Konteyner daxilində standart 5432. `DATABASE_URL` `localhost:5434`-ə işarə edir.

### Migrasiya + seed

```bash
# İlk dəfə / schema dəyişəndən sonra
pnpm --filter @aibaycan/db db:migrate        # migrasiya yarat + tətbiq et
pnpm --filter @aibaycan/db db:migrate:deploy # (production: yalnız tətbiq et)
pnpm --filter @aibaycan/db db:seed           # admin + nümunə data
```

Seed dev admin yaradır: `admin@aibaycan.az` / `admin12345` (dev default).
Production-da `SEED_ADMIN_EMAIL` + `SEED_ADMIN_PASSWORD` env ilə override et.

### Servisləri işə salmaq

```bash
pnpm --filter @aibaycan/api dev     # http://localhost:3001
pnpm --filter @aibaycan/web dev     # http://localhost:3000
pnpm --filter @aibaycan/admin dev   # http://localhost:5173
```

Və ya kökdən hamısı: `pnpm dev`.

## Env dəyişənləri

Hər paketdə `.env.example` var — `.env`-ə kopyala. `.env` gitignore-dadır.

| Dəyişən | Yer | Təsvir |
|---------|-----|--------|
| `DATABASE_URL` | db, api | Postgres bağlantısı |
| `JWT_SECRET` | api | JWT imza açarı (min 32 simvol) |
| `CORS_ORIGINS` | api | İcazəli origin-lər |
| `API_URL` | web | apps/api ünvanı (SSR fetch) |
| `SEED_ADMIN_*` | db | Seed admin (production) |
| `R2_*` | api | Cloudflare R2 media upload (opsional) |
| `RESEND_API_KEY`, `LEAD_NOTIFY_FROM/TO` | api | Lead email bildirişi (opsional) |
| `SITE_URL` | web | Sitemap/robots/JSON-LD/RSS üçün ictimai URL |
| `NEXT_PUBLIC_GA_ID` | web | GA4 (opsional; yalnız consent ilə yüklənir) |

Env-lər `dotenv/config` ilə yüklənir (api `env.ts`, db `prisma.config.ts` + `seed.ts`). API env-i Zod ilə validasiya edir — yanlış konfiqdə fail-fast.

## Production (TODO)

Scaffold mərhələsindədir. Production deploy detalları (host, reverse proxy, TLS,
managed Postgres vs self-host, migrasiya CI addımı, backup `pg_dump` cədvəli)
canlı deploy zamanı konkretləşdiriləcək. Bax [24](./24-incident-response.md), [27](./27-go-live-runbook.md).
