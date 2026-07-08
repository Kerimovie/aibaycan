# 12 — Modul status

| Modul | Status | Owner | Notlar |
|---|---|---|---|
| Monorepo kök konfiqi | ✅ Hazır | — | pnpm workspace, tsconfig.base, prettier |
| `packages/db` (Prisma) | 🟡 Scaffold | — | Schema (4 entity) + client + seed hazır; DB hələ deploy olunmayıb |
| `packages/shared` | 🟡 Scaffold | — | Zod sxemləri (entity + auth) + API müqavilə tipləri + util-lər; testlər yaşıl |
| `apps/api` (Hono) | 🟡 Scaffold | — | App skeleton + işləyən admin auth (argon2 + JWT cookie + RBAC); ictimai read stublar; 4 test yaşıl |
| `apps/web` (Next.js) | ⬜ Boş | — | Növbəti |
| `apps/admin` (Vite SPA) | ⬜ Boş | — | — |
| `packages/ui` | ⬜ Boş | — | — |
