# 01 — Layihə icmalı

## Nə həll edir

`aibaycan.az` — **lead-generasiya edən kontent platformasıdır**. Sadə portfolio deyil:
potensial müştərini görülmüş işlərlə (case-study) inandırıb əlaqəyə (lead) gətirmək
üçün qurulur.

## Kim üçün

- **Ziyarətçi (potensial müştəri)** — işlərə baxır, xidmətə uyğunlaşdırır, lead buraxır.
- **Komanda (admin)** — case-study, xidmət, kontent idarə edir; lead-ləri qəbul edib izləyir.

## Konversiya yolu

```
Ziyarətçi → case-study-lərə baxır → xidmətə uyğunlaşdırır → lead buraxır → komanda əlaqə saxlayır
```

## Miqyas

Böyük/platform — çox kontent, filtrlər, blog, tam CMS-ə yaxın. Fazalı qurulur
(bax [28 — modul xəritəsi](./28-module-map.md)): nüvə tez canlıya çıxır, sonra gücləndirilir.

## Texniki

Single-tenant (bax [03](./03-stack-decisions.md)). Next.js 16 (web) + Vite (admin) +
Hono (api) + Postgres/Prisma. Çoxdilli AZ/EN/RU ([18](./18-i18n.md)).
Media Cloudflare R2-də.

## Sənəd bələdçisi

- **[28](./28-module-map.md)** — modul xəritəsi + faza planı (əsas plan)
- **[03](./03-stack-decisions.md)** — stack qərarları
- **[09](./09-decisions-log.md)** — qərarlar jurnalı
- **[11](./11-backlog.md)** — backlog (fazalı)
- **[12](./12-modules.md)** — modul statusu
