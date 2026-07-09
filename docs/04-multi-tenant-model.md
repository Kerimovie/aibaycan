# 04 — Multi-tenant model

## Qərar: single-tenant — tenant modeli YOXDUR

Bu layihə **single-tenant**-dir: bir sahibkar (biz), bir kontent bazası. **Tenant modeli mövcud deyil** — heç bir DB modelində `tenantId` sahəsi yoxdur (`packages/db/prisma/schema.prisma`, `AdminUser` daxil, sətir 294–304).

## Nəticələr

- **`tenantId` filter yoxdur.** CLAUDE.md-dəki "hər DB sorğusunda `tenantId` filter" qaydası universal multi-tenant SaaS preset-indəndir və bu layihəyə aid deyil (şüurlu kənarlaşma — bax [03](./03-stack-decisions.md) "CLAUDE.md-dən kənarlaşma" cədvəli).
- **RLS tətbiq olunmur.** Row-Level Security lazım deyil, çünki tenant izolasiyası yoxdur (bax [13](./13-database.md)).
- **Data izolasiyası** tenant üzrə yox, görünürlük + auth səviyyəsindədir:
  - İctimai read yalnız `published` sahələri qaytarır (auth-suz).
  - Bütün mutasiya (CRUD) admin auth arxasındadır (bax [05](./05-auth-strategy.md)).

Bu sənədə istinad edən digər sənədlər: [05](./05-auth-strategy.md), [07](./07-data-model.md), [13](./13-database.md).
