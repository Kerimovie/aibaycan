# 05 — Auth strategiyası

## Kontekst

Single-tenant portfolio + admin (bax [03](./03-stack-decisions.md)). Auth **yalnız admin panel** üçündür — ictimai sayt auth-suzdur (yalnız `published` kontent oxunur). Tenant yoxdur.

## Qərar: JWT (HttpOnly cookie)

- **Mexanizm:** JWT, `HttpOnly + Secure + SameSite=Strict` cookie-də saxlanır.
- **Niyə cookie (localStorage yox):** HttpOnly cookie JS-dən oxunmur → XSS token oğurluğuna qarşı qoruma. SameSite=Strict → CSRF qorunması.
- **İmza:** HS256, `JWT_SECRET` env-dən.
- **Müddət:** Sadə tək-token, ~7 gün. **Rotating refresh token TƏTBIQ OLUNMUR** — CLAUDE.md-dəki 15min+refresh multi-tenant SaaS üçündür; single-admin panel üçün bu mürəkkəblik artıqdır (bax [03](./03-stack-decisions.md) kənarlaşma cədvəli). Lazım olsa sonra əlavə oluna bilər.

## Parol

- **Hash:** `argon2id` (argon2 paketi). Plaintext heç vaxt saxlanılmır/loglanmır.
- **Qayda:** login-də min 8, yeni admin/dəyişmə-də min 10 simvol (bax `packages/shared` auth sxemləri).
- **Timing:** login-də istifadəçi tapılmasa belə hash müqayisəsi edilir (user-enumeration timing attack-a qarşı).

## Avtorizasiya: RBAC (sadə)

İki rol (Prisma `AdminRole`): `ADMIN`, `EDITOR`.

- `EDITOR` — kontent CRUD (Project, Service, ContactMessage).
- `ADMIN` — yuxarıdakılar + admin istifadəçi idarəsi.

ABAC (attribute-based) artıqdır — iki sadə rol kifayətdir.

## Middleware axını

1. `authMiddleware` — cookie-dən JWT oxu, doğrula, `AdminUser`-i konteksdə qoy. Yoxdursa → `401 UNAUTHORIZED`.
2. `requireRole('ADMIN')` — rol kifayət deyilsə → `403 FORBIDDEN`.
3. Deaktiv (`active=false`) istifadəçi → `401` (token etibarlı olsa belə).

## Endpoint-lər (auth)

| Metod | Yol | Təsvir |
|-------|-----|--------|
| `POST` | `/api/admin/auth/login` | Email+parol → cookie qoy |
| `POST` | `/api/admin/auth/logout` | Cookie sil |
| `GET`  | `/api/admin/auth/me` | Cari admin (auth arxası) |

## Təhlükəsizlik qeydləri (OWASP)

- Login endpoint-ə **rate-limit** (brute-force qarşı) — TODO deploy-da (reverse proxy və ya middleware).
- Cookie: `Secure` yalnız production-da (lokal HTTP-də işləsin deyə `NODE_ENV` şərti).
- Xətalar həmişə loglanır (CLAUDE.md: no silent catch), amma login xətası istifadəçiyə generik ("email və ya parol yanlış") qaytarılır — enumeration qarşısı.
