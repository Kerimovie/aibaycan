# 13 — Database

## Stack

- **PostgreSQL** (self-host) — bax [03](./03-stack-decisions.md)
- **Prisma 7** ORM — paket: [`packages/db`](../packages/db)
- **Driver adapter:** `@prisma/adapter-pg` (Prisma 7-də məcburidir)

## Struktur (`packages/db`)

```
packages/db/
├── prisma/
│   ├── schema.prisma      # entity-lər (mənbə həqiqəti — docs/07)
│   ├── seed.ts            # ilk admin + nümunə data
│   └── migrations/        # generasiya olunan SQL migrasiyalar (commit olunur)
├── prisma.config.ts       # Prisma 7 config — datasource URL burada (CLI üçün)
├── src/
│   ├── client.ts          # adapter ilə PrismaClient singleton
│   ├── index.ts           # paket export-u (prisma + tiplər)
│   └── generated/         # generasiya olunan client — GITIGNORE (commit olunmur)
└── .env.example           # DATABASE_URL nümunəsi
```

## Prisma 7 xüsusiyyətləri (mühüm)

Prisma 7 əvvəlki versiyalardan ciddi fərqlidir:

1. **`generator client`** provider = `prisma-client` (köhnə `prisma-client-js` deyil), `output` **məcburidir** → `src/generated/prisma`.
2. **`datasource` bloku URL saxlamır** — connection URL `prisma.config.ts`-dədir (CLI/migrate üçün) və runtime-da `@prisma/adapter-pg` adapter-ə verilir (`src/client.ts`).
3. **ESM** default (`type: module`).
4. Generasiya olunan client `node_modules`-da deyil, `src/generated/`-dədir — gitignore olunur, `db:generate` ilə yenidən yaradılır.

## Konfiqurasiya

Bağlantı `DATABASE_URL` env-dən oxunur:

```
DATABASE_URL="postgresql://user:pass@host:5432/aibaycan?schema=public"
```

`.env` faylı gitignore-dadır — `.env.example`-dan kopyala.

## Komandalar

`packages/db` daxilində (`pnpm --filter @aibaycan/db <script>`):

| Komanda | İş |
|---------|-----|
| `db:generate` | Prisma client-i schema-dan generasiya et (DB bağlantısı lazım deyil) |
| `db:migrate` | Dev migrasiya yarat + tətbiq et |
| `db:migrate:deploy` | Production-da migrasiyaları tətbiq et (yeni yaratmadan) |
| `db:studio` | Prisma Studio (vizual DB browser) |
| `db:seed` | Seed skriptini işə sal |

## Migrasiya axını

1. `schema.prisma`-nı dəyiş.
2. `pnpm --filter @aibaycan/db db:migrate --name <təsvir>` — SQL migrasiya yaradılır (`prisma/migrations/`, commit olunur).
3. Production: deploy zamanı `db:migrate:deploy`.

## RLS (Row-Level Security)

**Tətbiq olunmur.** Single-tenant olduğu üçün tenant izolasiyası lazım deyil (bax [03](./03-stack-decisions.md), [04](./04-multi-tenant-model.md)). Data qorunması tətbiq səviyyəsində admin auth ilə təmin olunur (bax [05](./05-auth-strategy.md)).

## Backup

Self-host olduğu üçün backup öz məsuliyyətimizdir — production runbook-da (bax [14](./14-deployment.md)) `pg_dump` cədvəli qurulmalıdır. (TODO: deploy zamanı konkretləşdir.)
