# 07 — Data model

Mənbə həqiqəti: [`packages/db/prisma/schema.prisma`](../packages/db/prisma/schema.prisma).
Bu sənəd entity-ləri yüksək səviyyədə izah edir; dəqiq sahələr üçün schema-ya bax.

## Əhatə

Single-tenant portfolio + admin (bax [03](./03-stack-decisions.md)). Tenant modeli yoxdur.

## Entity-lər

### Project (görülən işlər / case-study)

Portfolio-nun əsası. Hər layihə bir case-study.

| Sahə | Qeyd |
|------|------|
| `slug` | Unikal — URL üçün (`/projects/{slug}`) |
| `title`, `summary`, `description` | Mətn kontenti |
| `coverImage`, `images[]` | Şəkillər (URL massivi) |
| `techStack[]` | İstifadə olunan texnologiyalar |
| `liveUrl`, `repoUrl` | Xarici linklər (opsional) |
| `featured` | Ana səhifədə önə çıxarılsın |
| `published` | Yalnız `true` olanlar ictimai göstərilir |
| `order` | Manual sıralama |
| `completedAt` | Layihənin bitmə tarixi (opsional) |

**İndekslər:** `(published, featured)` — ictimai listing sorğuları; `(order)` — sıralama.

### Service (təklif olunan xidmətlər)

| Sahə | Qeyd |
|------|------|
| `slug` | Unikal |
| `title`, `description` | Mətn |
| `icon` | İkon adı/URL (opsional) |
| `published`, `order` | Project ilə eyni pattern |

**İndekslər:** `(published)`, `(order)`.

### ContactMessage (əlaqə formu)

Saytdakı əlaqə formundan gələn mesajlar.

| Sahə | Qeyd |
|------|------|
| `name`, `email`, `subject?`, `message` | Form məzmunu |
| `status` | `NEW` / `READ` / `ARCHIVED` (enum) |

**İndeks:** `(status, createdAt)` — admin panel inbox filtrləmə/sıralama.

### AdminUser (admin panel girişi)

| Sahə | Qeyd |
|------|------|
| `email` | Unikal — login identifikatoru |
| `passwordHash` | Argon2/bcrypt hash (bax [05](./05-auth-strategy.md)) — heç vaxt plaintext |
| `role` | `ADMIN` / `EDITOR` (enum) |
| `active` | Deaktiv edilmiş hesab login edə bilməz |
| `lastLoginAt` | Audit üçün |

**Qeyd:** `tenantId` YOXDUR — single-tenant (bax [03](./03-stack-decisions.md)).

## Relations

Hazırda entity-lər arasında birbaşa relation yoxdur — hər biri müstəqildir. Gələcəkdə lazım olsa (məs. Project ↔ Service kateqoriyası), schema genişləndiriləcək və burada qeyd olunacaq.

## Konvensiyalar

- **ID:** `cuid()` — sıralanabilən, URL-safe, kolliziyasız.
- **Timestamp:** `createdAt` (default now) + `updatedAt` (`@updatedAt`) hər mutable entity-də.
- **Soft visibility:** silmək əvəzinə `published` bayrağı (kontent entity-ləri üçün).
