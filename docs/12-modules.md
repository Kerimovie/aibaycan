# 12 — Modul status

| Modul | Status | Owner | Notlar |
|---|---|---|---|
| Monorepo kök konfiqi | ✅ Hazır | — | pnpm workspace, tsconfig.base, prettier |
| `packages/db` (Prisma) | 🟢 Faza 1 | — | Faza 1 schema: CaseStudy (block JSON), Category, Tag, Service (↔CS m2m), Lead (CRM), MediaAsset (R2), AdminUser. Migrate + seed (əlaqələrlə) test edildi. Project→CaseStudy, ContactMessage→Lead |
| `packages/shared` | 🟢 Faza 1 | — | Faza 1 Zod sxemləri: blocks (discriminated union), CaseStudy, Category/Tag, Media, Service (↔CS), Lead (honeypot). API müqavilə tipləri. 15 test yaşıl |
| `apps/api` (Hono) | 🟢 Faza 1 | — | Admin auth + **tam CRUD** (case-studies/services/categories/tags/leads/media, auth arxası, m2m, Prisma error→envelope); ictimai read + lead form (honeypot). Uçdan-uca test |
| `apps/admin` CRUD | 🟢 Faza 1 | — | **Tam CRUD UI**: Category/Tag/Service/CaseStudy (m2m)/Lead (status)/Media (R2 upload)/**Adminlər** (rol, parol hash, öz-hesab qorunması). Native form YOX. Uçdan-uca test |
| `apps/web` (Next.js) | 🟢 Faza 1+2 | — | İctimai sayt: ana səhifə (featured + xidmətlər + **rəylər** + **loqo divarı**) + /projects + /projects/[slug] (block render) + **/about** (komanda) + /contact (lead form, honeypot). i18n AZ/EN/RU. **SEO**: sitemap/robots/JSON-LD. Uçdan-uca test |
| `apps/admin` (Vite SPA) | 🟢 Dizayn | — | Ynex dizayn sistemi (docs/29) tətbiq: dark sidebar + header + PageHeader; login signin-cover pattern (gradient); dashboard + stat box-lar; naviqasiya modul xəritəsinə uyğun. Uçdan-uca test: real login → dashboard ✓ |
| `packages/ui` | 🟢 Dizayn | — | **etehsil-az əsaslı** tam UI kitabxanası (tsup build): 30+ komponent (Button/Input/Select/Checkbox/Radio/Switch/Form/Dialog/Modal/Tabs/Tooltip/Popover/Dropdown/Card/Badge/Avatar + form komponentləri). Radix+CVA+RHF. Violet #845adf tema. **Dark mode TAM silindi.** Native HTML form QADAĞAN. |

**Faza 1 + Faza 2 tamamlandı.**
- Faza 1: Work/Services/Lead/Media (schema→API→admin CRUD→web) ✅
- Faza 2: Testimonials/Clients/Team (CRUD) + SEO qatı (sitemap/robots/JSON-LD) ✅

Növbəti: Faza 3 (Blog + Analytics) və ya qalan kiçik işlər (lead email, web-də Faza 2 göstərmə).
