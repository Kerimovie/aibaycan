# 12 — Modul status

| Modul | Status | Owner | Notlar |
|---|---|---|---|
| Monorepo kök konfiqi | ✅ Hazır | — | pnpm workspace, tsconfig.base, prettier |
| `packages/db` (Prisma) | 🟡 Scaffold | — | Schema (4 entity) + client + seed hazır; DB hələ deploy olunmayıb |
| `packages/shared` | 🟡 Scaffold | — | Zod sxemləri (entity + auth) + API müqavilə tipləri + util-lər; testlər yaşıl |
| `apps/api` (Hono) | 🟡 Scaffold | — | App skeleton + işləyən admin auth (argon2 + JWT cookie + RBAC); ictimai read stublar; 4 test yaşıl |
| `apps/web` (Next.js) | 🟡 Scaffold | — | Next 16 + Tailwind 4 + i18n (AZ/EN/RU); ana səhifə API-dən data çəkir; prod build yaşıl (3 locale SSG) |
| `apps/admin` (Vite SPA) | 🟢 Dizayn | — | Ynex dizayn sistemi (docs/29) tətbiq: dark sidebar + header + PageHeader; login signin-cover pattern (gradient); dashboard + stat box-lar; naviqasiya modul xəritəsinə uyğun. Uçdan-uca test: real login → dashboard ✓ |
| `packages/ui` | 🟢 Dizayn | — | **etehsil-az əsaslı** tam UI kitabxanası (tsup build): 30+ komponent (Button/Input/Select/Checkbox/Radio/Switch/Form/Dialog/Modal/Tabs/Tooltip/Popover/Dropdown/Card/Badge/Avatar + form komponentləri). Radix+CVA+RHF. Violet #845adf tema. **Dark mode TAM silindi.** Native HTML form QADAĞAN. |

**Admin panel dizaynı hazır** (Ynex əsaslı). Növbəti: Faza 1 CRUD (schema → API → admin UI). Sonra web tərəf.
