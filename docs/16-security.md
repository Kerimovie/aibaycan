# 16 — Security

Bu sənəd hazırda tətbiq olunan real təhlükəsizlik nəzarətlərini və bir qayda-fərqini (JWT modeli) qeyd edir. Yalnız mövcud koda istinad edir; gələcək işlər TODO kimi işarələnib.

## Tətbiq olunan nəzarətlər

### Parol saxlanması

- **argon2id hash** — parollar açıq mətndə saxlanmır, argon2id ilə hash-lanır (`apps/api/src/lib/password.ts:1-5`). Doğrulama argon2 `verify` ilə; xəta halında `false` qaytarılır, throw yox (`password.ts:8-10`).

### Timing-attack / user-enumeration qorunması

- Login-də user tapılmasa belə **real formatlı dummy hash** ilə `fakeVerify` çağırılır ki, cavab müddəti mövcud və mövcud olmayan email üçün eyni qalsın — bu, email enumeration-un qarşısını alır (`password.ts:17-22`, `apps/api/src/routes/auth.ts:21-24`).
- Mövcud və mövcud olmayan email üçün eyni ümumi mesaj qaytarılır: "Email və ya parol yanlışdır" (`auth.ts:23,28`).

### Sessiya / JWT

- **JWT HS256**, cookie-də daşınır (`apps/api/src/lib/jwt.ts:21`, `auth.ts:31-38`).
- **Cookie flag-ları**: `HttpOnly` (JS oxuya bilməz), `SameSite=Strict` (CSRF-ə qarşı), `Secure` yalnız prod-da (lokal HTTP-də işləsin deyə) (`auth.ts:33-37`).
- Logout cookie-ni silir (`auth.ts:48-51`).

### Girişə nəzarət

- **Deaktiv hesab bloklaması** — token etibarlı olsa belə, hər sorğuda DB-dən `active` yenidən yoxlanır; deaktiv/silinmiş hesab 401 alır (`apps/api/src/middleware/auth.ts:30-36`).
- **RBAC** — `requireRole(...)` middleware admin əməliyyatlarını rola görə qoruyur; icazə yoxdursa 403 (`middleware/auth.ts:43-54`).

### Şəbəkə / boundary

- **CORS allowlist + credentials** — yalnız `CORS_ORIGINS` siyahısındakı origin-lər, cookie auth üçün `credentials: true` (`apps/api/src/app.ts:16-22`, `env.ts:39-41`).
- **Zod validasiya hər boundary-də** — hər JSON/query/param girişi Zod ilə parse edilir, yanlış giriş `VALIDATION_ERROR` ilə rədd olunur (`apps/api/src/lib/validate.ts`); env-lər də Zod ilə fail-fast validasiya olunur (`env.ts`).
- **JWT_SECRET min 32 simvol** — env səviyyəsində məcburidir, qısa açar server-i qaldırmır (`env.ts:13`).

### Anti-spam

- **Honeypot** — lead formunda gizli `website` sahəsi boş qalmalıdır (`max(0)`); bot doldursa Zod validasiyada rədd edilir (`packages/shared/src/schemas/lead.ts:26-27`, `apps/api/src/routes/public.ts:118-121`).

### Rate-limiting

- **IP üzrə fixed-window rate-limit** (`apps/api/src/lib/rate-limit.ts`) — brute-force / spam qorunması (decisions #019):
  - Admin login (`POST /api/admin/auth/login`): 10 cəhd / 15 dəq.
  - İctimai lead formu (`POST /api/leads`): 10 sorğu / 10 dəq (honeypot-a əlavə qat).
  - Aşılanda `429` + `Retry-After` + `X-RateLimit-*` başlıqları qaytarılır.
- **IP mənbəyi**: prod-da reverse-proxy (nginx) `x-forwarded-for` təyin edir (docs/14); birbaşa bağlantıda `getConnInfo` fallback. ⚠️ App birbaşa internetə açıq olsa `x-forwarded-for` saxtalaşdırıla bilər — prod-da mütləq **etibarlı proxy arxasında** olmalıdır.
- **Store**: yaddaşdaxili, **tək-instansiya** üçün (docs/03 YAGNI). Çox-instansiyalı deploy-da paylaşılan store (Redis) lazım olacaq; store restart-da sıfırlanır (qəbul edilən tradeoff).

### Error handling

- **No silent catch** — mərkəzi error handler bütün gözlənilməz xətaları loglayır və struktur envelope qaytarır; heç bir xəta səssiz udulmur (`app.ts:40-53`).

## ⚠️ Qeyd: JWT modeli qaydadan fərqlidir

CLAUDE.md #3 qaydası "JWT 15min + rotating refresh" deyir. **Real kod fərqlidir**: tək **7-günlük** access token, **refresh token YOXDUR** (`lib/jwt.ts:5,20,34`). Bu, single-tenant portfolio sayt üçün **şüurlu sadələşdirmədir** — bax [03 — Stack Decisions](./03-stack-decisions.md), [05 — Auth Strategy](./05-auth-strategy.md). Boşluq deyil, amma qaydadan sapma olduğu üçün açıq qeyd olunur.

## OWASP Top-10 checklist

| # | Kateqoriya | Vəziyyət | Qeyd |
|---|------------|----------|------|
| A01 | Broken Access Control | ✅ örtülüb | authMiddleware + requireRole RBAC; DB-də `active` re-check |
| A02 | Cryptographic Failures | ✅ örtülüb | argon2id hash; HttpOnly+Secure(prod)+SameSite=Strict cookie |
| A03 | Injection | ✅ örtülüb | Prisma parametrli sorğular; Zod hər boundary-də |
| A04 | Insecure Design | ✅ örtülüb | rate-limit (login + leads), honeypot, timing/enumeration qorunması |
| A05 | Security Misconfiguration | ✅ örtülüb | env Zod fail-fast; CORS allowlist; JWT_SECRET min 32 |
| A06 | Vulnerable Components | ➖ izlənir | dependency audit CI-da hələ avtomatlaşdırılmayıb (TODO) |
| A07 | Identification & Auth Failures | ✅ örtülüb | enumeration/timing qorunub; login rate-limit (10/15dəq) brute-force-a qarşı |
| A08 | Software & Data Integrity | ✅ örtülüb | pnpm lockfile; imzalı JWT |
| A09 | Logging & Monitoring | ⚠️ qismən | request log + error log var; APM/alerting deploy-dan sonra (bax [15](./15-monitoring.md)) |
| A10 | SSRF | ✅ aidiyyatı yoxdur | server user-controlled URL-ə sorğu atmır |

**Yekun**: əvvəlki yeganə prioritet boşluq (rate-limiting) **bağlandı** (decisions #019). Qalan nəzarətlər portfolio miqyası üçün adekvatdır; açıq elementlər yalnız deploy-mərhələsi işləridir (dependency audit CI, APM/alerting).
