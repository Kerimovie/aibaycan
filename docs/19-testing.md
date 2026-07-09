# 19 — Testing

Test piramidası (CLAUDE.md): **unit (70%) → integration (20%) → E2E (10%)**.

## Unit (Vitest)

| Paket | Nə test olunur |
|-------|----------------|
| `packages/shared` | Zod sxemləri (blocks discriminated union, lead honeypot), util-lər (slugify) |
| `apps/api` | App skeleton (health/404/401/validation envelope), `escapeHtml` (HTML injection), email no-op |

Unit testi olan paketlər: **`@aibaycan/api`** və **`@aibaycan/shared`** (yalnız bu ikisində `test` skripti var). Kök `pnpm test` recursive-dir — test skripti olmayan paketləri ötür.

```bash
pnpm test                        # recursive (yalnız api + shared qaçır)
pnpm --filter @aibaycan/api test
pnpm --filter @aibaycan/shared test
```

## E2E (Playwright)

Yalnız **kritik axınlar** — hər səhifə yox. `e2e/` qovluğu.

### Qurulum

- **Ayrıca test DB** `aibaycan_test` — dev datası çirkləndirilmir. `global-setup.ts`
  bazanı sıfırdan yaradır, migrate edir, seed qurur.
- **Ayrıca portlar** (api 3101, web 3100, admin 3102) — dev serverlər işləyərkən də qaça bilir.
- `playwright.config.ts` `webServer` ilə 3 serveri özü qaldırır.

**Şərt:** Docker Postgres işləməlidir (`docker compose up -d`).

```bash
pnpm test:e2e                            # kökdən
pnpm --filter @aibaycan/e2e test:ui      # interaktiv
pnpm --filter @aibaycan/e2e test:headed  # brauzer görünür
```

### Əhatə olunan axınlar

| Fayl | Axın |
|------|------|
| `admin-auth.spec.ts` | Qorunan səhifə → login redirect; login → dashboard; yanlış parol → xəta |
| `admin-crud.spec.ts` | Kateqoriya yarat → listdə görün → sil; slug təkrarı → validation xətası |
| `web-lead-form.spec.ts` | Lead formu doldur → göndər → uğur; boş sahələr → validation |
| `web-content.spec.ts` | Case-study listing → detal (blocks render); i18n (EN); **GDPR consent** (banner, GA4 razılıqsız yüklənmir, imtina yadda qalır) |

## E2E-nin tutduğu real buglar (nümunə)

E2E dəyərini sübut edən iki bug (unit/curl testləri tutmamışdı):

1. **Web lead formu heç işləmirdi** — `fetch('/api/leads')` relativ URL web serverinə gedirdi,
   API-yə yox. Düzəliş: `next.config.ts` rewrite `/api/:path*` → API.
2. **CONFLICT xətası UI-də görünmürdü** — Prisma 7 + driver adapter `meta.target`
   doldurmur (sahə adı `meta.driverAdapterError.cause.constraint.fields`-dədir);
   həmçinin forma root xətası heç render olunmurdu. Düzəliş: sahə çıxarma + `FormRootError`.

## Konvensiyalar

- **Selector-lar:** rol/label əsaslı (`getByRole`, `getByLabel`). `PasswordInput`-un
  göz düyməsi `aria-label`-i "Parol" içərir → parol input-u `#password` ilə seçilir.
- **Dialoglar:** `confirm()` üçün `page.once('dialog', d => d.accept())`.
- **Paralel yox** (`workers: 1`) — testlər eyni DB-ni paylaşır.
