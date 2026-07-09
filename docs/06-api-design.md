# 06 — API dizayn

## Üslub

**REST** (JSON). GraphQL bu miqyas üçün artıqdır — API səthi kiçikdir (kontent CRUD + auth + əlaqə formu). Bax [03](./03-stack-decisions.md).

Backend: **Hono** (`apps/api`). Paylaşılan müqavilə tipləri və Zod sxemləri: [`packages/shared`](../packages/shared).

## Cavab zərfi (envelope)

Bütün cavablar vahid zərfə bükülür (`packages/shared` → `ApiResponse<T>`):

**Uğur:**

```json
{ "ok": true, "data": { ... } }
```

**Xəta:**

```json
{
  "ok": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "İnsan-oxunaqlı təsvir",
    "details": { "email": ["yanlış email formatı"] }
  }
}
```

`details` yalnız sahə-səviyyəli validation xətalarında olur (Zod `flatten` çıxışından).

## Xəta kodları

`ApiErrorCode` (`packages/shared/src/types/api.ts`):

| Kod | HTTP | Nə vaxt |
|-----|------|---------|
| `VALIDATION_ERROR` | 400 | Zod parse uğursuz |
| `UNAUTHORIZED` | 401 | Auth yoxdur/etibarsız |
| `FORBIDDEN` | 403 | Auth var, icazə yox |
| `NOT_FOUND` | 404 | Resurs tapılmadı |
| `CONFLICT` | 409 | Unikal pozuntu (məs. slug təkrarı) |
| `RATE_LIMITED` | 429 | Çox sorğu (əlaqə formu) |
| `INTERNAL` | 500 | Gözlənilməz — həmişə loglanır (CLAUDE.md: no silent catch) |

## Validation

Hər boundary-də **Zod** (CLAUDE.md sərt qaydası). Sxemlər `packages/shared/src/schemas`-də — həm API, həm frontend eyni sxemi istifadə edir. Create/update inputları entity başına ayrıca sxem (`projectCreateSchema`, `projectUpdateSchema` və s.).

## Slug

Slug client-dən GÖNDƏRİLMİR — server `title`/`name`-dən avtomatik yaradır
(`ensureUniqueSlug`, unikal suffiks). Create sxemlərində `slug` sahəsi yoxdur.
Update slug-a toxunmur (URL sabit qalır). Bax qərar [09](./09-decisions-log.md) #016.

## Səhifələmə

Query: `?page=1&pageSize=20` (`paginationQuerySchema`, default 1/20, max pageSize 100).
Cavab: `Paginated<T>` — `{ items, page, pageSize, total, totalPages }`.

## Naming

- Resurs yolları cəm, kiçik hərf.
- İctimai read-only route-lar auth-suz (yalnız `published` kontent) — `apps/api/src/routes/public.ts`:
  `/case-studies`, `/services`, `/posts`, `/testimonials`, `/clients`, `/team` (hamısı `GET`),
  `/leads` (`POST` — əlaqə formu).
- Admin route-ları `/admin/*` altında, auth arxasında — `apps/api/src/routes/admin/index.ts`:
  `/case-studies`, `/services`, `/posts`, `/testimonials`, `/clients`, `/team`, `/leads` üstünə
  `/categories`, `/tags`, `/media`, `/admins` də (hamısı CRUD).

> **Health:** `GET /health` (auth-suz, `/api` prefiksindən kənar, `apps/api/src/app.ts:25`).

## Versiyalama

Hazırda versiyasız (`/api/...`). Breaking dəyişiklik lazım olsa `/api/v2` prefiksi əlavə olunacaq — YAGNI, indilik tək versiya.
