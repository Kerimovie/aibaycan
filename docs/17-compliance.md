# 17 — Compliance

GDPR + AZ data-mühafizəsi baxımından hazırkı real vəziyyət. Yalnız mövcud koda istinad edir.

## Cookie consent axını (GDPR)

### Banner (accept/decline)

- Cookie consent banner accept/decline dialoqu göstərir; `role="dialog"` ilə əlçatandır (`apps/web/src/components/consent-banner.tsx:13-49`).
- Qərar `localStorage`-də saxlanır (`aibaycan_analytics_consent`). Qərar hələ verilməyibsə (`null`) banner göstərilir; verilibsə göstərilmir (`apps/web/src/lib/analytics.ts:7-20`, `consent-banner.tsx:17-19`).

### GA4 yalnız consent ilə

- GA4 script **YALNIZ consent `granted` olduqda** yüklənir — decline (`denied`) və ya qərarsız halda heç bir tracking script DOM-a əlavə olunmur (`apps/web/src/components/analytics.tsx:27,31-40`).
- Consent dəyişəndə banner custom event atır, Analytics komponenti eyni tab-da dinləyib yenidən qiymətləndirir (`consent-banner.tsx:24-25`, `analytics.tsx:19-25`).
- `NEXT_PUBLIC_GA_ID` boşdursa GA4 **heç yüklənmir** — consent-dən asılı olmayaraq (`analytics.tsx:7,27`, `apps/web/.env.example:7-9`).
- **anonymize_ip: true** — IP anonimləşdirilir (`analytics.tsx:38`, qərar: [09 — Decisions](./09-decisions-log.md) #015).

Nəticədə: default vəziyyət tracking-siz; istifadəçi aktiv razılıq verməyincə heç bir analitika cookie-si/script-i işə düşmür (opt-in model).

## Şəxsi məlumatın toplanması

- Yeganə birbaşa PII toplama nöqtəsi — **lead formu** (`name`, `email`, opsional `phone`, `company`, `message` və s.), Zod ilə validasiya olunur (`packages/shared/src/schemas/lead.ts:12-28`).
- Form cavabında **məlumat sızması yoxdur** — yaradılan lead qeydi geri qaytarılmır, yalnız `{ received: true }` (`apps/api/src/routes/public.ts:128-129`).
- Lead bildirişi (email) best-effort-dur və opsionaldır; PII yalnız DB-də və (konfiqurasiya olunubsa) daxili bildiriş email-ində qalır (`routes/public.ts:125-126`).

## Data retention + AZ/GDPR qeydləri

- **Retention siyasəti hələ rəsmiləşdirilməyib** — lead qeydləri müddətsiz saxlanır; avtomatik silmə/anonimləşdirmə cədvəli yoxdur (TODO, prod-dan əvvəl təyin edilməli).
- **Data subject hüquqları** (access/erasure) hazırda **manual** prosesdir — proqram-təminatlı export/delete endpoint-i yoxdur (TODO).
- AZ "Şəxsi məlumatlar haqqında" qanunu + GDPR uyğunluğu üçün prod-dan əvvəl lazım olanlar: məxfilik siyasəti səhifəsi, retention müddəti, DPA (əgər üçüncü tərəf prosessorlar əlavə olunarsa). Bunlar canlı deploy mərhələsində konkretləşdiriləcək.

**Yekun**: consent-gated analitika (opt-in, anonymize_ip, decline-ə hörmət) real və işləkdir; formal retention/DSAR proseduru hələ sənədləşdirilməyib.
