# 07 — Data model

Mənbə həqiqəti: [`packages/db/prisma/schema.prisma`](../packages/db/prisma/schema.prisma).
Modul planı: [28](./28-module-map.md). Bu sənəd Faza 1 entity-lərini izah edir.

## Əhatə

Single-tenant lead-gen platforması (bax [03](./03-stack-decisions.md)). Tenant modeli yoxdur.

## Faza 1 entity-ləri

### CaseStudy (görülən işlər — block-based)

Lead-gen-in əsası. Kontent **block-based** (docs/09 #010).

| Sahə | Qeyd |
|------|------|
| `slug` | Unikal — URL |
| `title`, `tagline`, `summary` | Mətn (summary listing üçün) |
| `clientName`, `projectYear` | Müştəri konteksti |
| `blocks` | **JSON** — richText/image/gallery/video/quote/metrics/twoColumn. Struktur Zod-da (packages/shared) |
| `coverImageId` → `MediaAsset` | Qapaq (relation, SetNull) |
| `liveUrl`, `repoUrl` | Xarici linklər |
| `featured`, `published`, `order` | Görünürlük/sıralama |
| `metaTitle`, `metaDescription` | SEO |

**Əlaqələr (m2m):** `categories` (Category), `tags` (Tag), `services` (Service).
**İndekslər:** `(published, featured)`, `(order)`.

### Category + Tag (ortaq taksonomiya)

Həm CaseStudy, həm gələcək Post üçün (docs/09 #012).
- **Category** — slug, name, description, order.
- **Tag** — slug, name.

### Service (xidmətlər)

| Sahə | Qeyd |
|------|------|
| `slug`, `title`, `description`, `icon` | Kontent |
| `published`, `order` | Görünürlük |
| `caseStudies` (m2m) | "Bu xidmətə uyğun işlərimiz" cross-link |

### MediaAsset (media kitabxanası — R2)

Mərkəzi media (docs/09 #011). Fayl R2-də, DB-də URL + metadata.

| Sahə | Qeyd |
|------|------|
| `url` | R2 public URL |
| `key` | R2 obyekt açarı (unikal — silmə üçün) |
| `type` | IMAGE / VIDEO / DOCUMENT (enum) |
| `mimeType`, `fileName`, `sizeBytes` | Fayl metadata |
| `alt`, `width`, `height` | Əlçatanlıq/SEO/ölçü |

### Lead (müştəri sorğuları — mini-CRM)

Zəngin, `ContactMessage`-i əvəz edir.

| Sahə | Qeyd |
|------|------|
| `name`, `email`, `phone?`, `company?` | Əlaqə |
| `interestedIn`, `budgetRange`, `message` | Kontekst |
| `source`, `pageUrl` | Mənbə (UTM/referrer, marketinq) |
| `status` | NEW → CONTACTED → QUALIFIED → WON → LOST (enum) |

**İndekslər:** `(status, createdAt)`, `(email)`.

### AdminUser (admin girişi)

| Sahə | Qeyd |
|------|------|
| `email` | Unikal — login |
| `passwordHash` | argon2id (bax [05](./05-auth-strategy.md)) |
| `role` | ADMIN / EDITOR (enum) |
| `active`, `lastLoginAt` | Status/audit |

`tenantId` YOXDUR — single-tenant.

## Köhnə → yeni (Faza 1 miqrasiyası)

- `Project` → **`CaseStudy`** (block content + taksonomiya + media + SEO)
- `ContactMessage` → **`Lead`** (zəngin + CRM status + mənbə)
- `Service` genişləndi (↔ CaseStudy m2m)
- Yeni: `Category`, `Tag`, `MediaAsset`

## Konvensiyalar

- **ID:** `cuid()`.
- **Timestamp:** `createdAt` + `updatedAt` hər mutable entity-də.
- **Soft visibility:** `published` bayrağı (kontent entity-ləri).
- **m2m:** Prisma implicit join cədvəlləri (`_CaseStudyCategories` və s.).

## Faza 2 entity-ləri (əlavə olundu)

- **Testimonial** — quote, author, role?, company?, photo? (MediaAsset), caseStudy? (opsional bağlantı), published, order.
- **Client** — name, logo? (MediaAsset), websiteUrl?, published, order (loqo divarı).
- **TeamMember** — name, role, bio?, photo? (MediaAsset), socials (JSON), published, order.

MediaAsset-ə geri-əlaqələr: `photoForTestimonials`, `logoForClients`, `photoForTeam`.

## Faza 3 entity-ləri (əlavə olundu)

- **Post** — slug, title, excerpt, `blocks` (JSON — **CaseStudy ilə eyni block sistemi**),
  coverImage? (MediaAsset), author? (TeamMember), categories/tags (m2m — ortaq taksonomiya),
  published, publishedAt, SEO meta.

**İndeks:** `(published, publishedAt)`.
