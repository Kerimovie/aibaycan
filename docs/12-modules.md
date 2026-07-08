# 12 — Modul status

| Modul | Status | Owner | Notlar |
|---|---|---|---|
| Monorepo kök konfiqi | ✅ Hazır | — | pnpm workspace, tsconfig.base, prettier |
| `packages/db` (Prisma) | 🟡 Scaffold | — | Schema (4 entity) + client + seed hazır; DB hələ deploy olunmayıb |
| `packages/shared` | 🟡 Scaffold | — | Zod sxemləri (entity + auth) + API müqavilə tipləri + util-lər; testlər yaşıl |
| `apps/api` (Hono) | 🟡 Scaffold | — | App skeleton + işləyən admin auth (argon2 + JWT cookie + RBAC); ictimai read stublar; 4 test yaşıl |
| `apps/web` (Next.js) | 🟡 Scaffold | — | Next 16 + Tailwind 4 + i18n (AZ/EN/RU); ana səhifə API-dən data çəkir; prod build yaşıl (3 locale SSG) |
| `apps/admin` (Vite SPA) | 🟡 Scaffold | — | Vite 8 + React 19 + Tailwind 4; işləyən login (cookie auth), auth guard, qorunan dashboard layout; CRUD stub; build yaşıl |
| `packages/ui` | ⬜ Boş | — | Növbəti (son modul) |
