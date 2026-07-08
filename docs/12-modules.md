# 12 — Modul status

| Modul | Status | Owner | Notlar |
|---|---|---|---|
| Monorepo kök konfiqi | ✅ Hazır | — | pnpm workspace, tsconfig.base, prettier |
| `packages/db` (Prisma) | 🟡 Scaffold | — | Schema (4 entity) + client + seed hazır; DB hələ deploy olunmayıb |
| `packages/shared` | 🟡 Scaffold | — | Zod sxemləri (entity + auth) + API müqavilə tipləri + util-lər; testlər yaşıl |
| `apps/api` (Hono) | ⬜ Boş | — | Növbəti — shared + db-yə bağlı |
| `apps/web` (Next.js) | ⬜ Boş | — | — |
| `apps/admin` (Vite SPA) | ⬜ Boş | — | — |
| `packages/ui` | ⬜ Boş | — | — |
