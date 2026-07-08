# CLAUDE.md — aibaycan.az

Bu fayl bu layihə üçün xüsusi instruksiyalardır. Hər söhbətdə avtomatik yüklənir.

## Layihə haqqında

Bu portfolio tipli saytdır. Burda bizim gördüyümüz işlər göstərdiyimiz xidmətlər olacaq

## Preset

SaaS Development — fullstack web + mobile + API + DB.

## Skill + agent

Project-scope skill və agent-lər `.claude/skills/` və `.claude/agents/` qovluqlarındadır.

## Strukrur

```
apps/
├── web/         # Frontend (React/Next/Vue/Svelte)
├── api/         # Backend (NestJS/Hono/FastAPI)
└── admin/       # Admin dashboard
packages/
├── ui/          # Shared design system
├── db/          # Shared DB (Prisma schema, migrations)
└── shared/      # Shared types, utils
docs/            # 28 numbered docs (00-27)
infra/           # IaC (Terraform/Pulumi)
scripts/         # Build, deploy, seed scripts
```

## Sərt qaydalar

1. **TypeScript strict** — `any` qadağa. Hər boundary-də Zod/class-validator.
2. **Multi-tenant** — hər DB sorğusunda `tenantId` filter. RLS Postgres-də mümkünsə.
3. **Auth** — JWT 15min + refresh rotating. Cookie HttpOnly + Secure + SameSite.
4. **Test piramida** — unit (vitest/jest), integration (testcontainers), E2E (Playwright).
5. **OWASP Top 10** — hər PR-da security-auditor agent.
6. **decisions-log** append-only — `docs/09-decisions-log.md`-ə hər mühüm qərar #NNN.
7. **Living docs** — kod dəyişdikdə `docs/12-modules.md` status yenilənir.
8. **No silent catch** — error-lar həmişə loglanır + struktur cavab.

## Custom rules (bu layihəyə xas)

<!-- Buraya layihəyə xas qaydalar yaz -->
