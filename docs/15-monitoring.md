# 15 — Monitoring + observability

Hazırkı real vəziyyət. Layihə lokal işləyir, prod deploy hələ olmayıb — buna görə observability minimaldır və qəsdən sadədir.

## Mövcud

### Structured request logging

- Hər HTTP sorğusu `hono/logger` ilə loglanır (metod, yol, status, müddət) (`apps/api/src/app.ts:15`).

### Mərkəzi error handler ("no silent catch")

- Bütün xətalar mərkəzi `app.onError` handler-dən keçir; gözlənilməz xətalar `console.error` ilə **həmişə loglanır** və struktur envelope (`INTERNAL`) qaytarılır — heç bir xəta səssiz udulmur (`app.ts:40-53`).
- Bilinən domain xətaları (`HttpError`) və Prisma xətaları (unique/not-found) uyğun status/envelope-a çevrilir (`app.ts:41-49`).
- Web tərəfdə də API fetch xətaları loglanır, səhifə çökmür (`apps/web/src/lib/api.ts:97-105`).

### Health-check

- `GET /health` auth-suz endpoint, `{ status: 'up' }` qaytarır — uptime/liveness probe üçün (`app.ts:25`).

## Hələ YOX — deploy-dan sonra planlaşdırılır

Aşağıdakılar hazırda **tətbiq olunmayıb** və canlı deploy zamanı əlavə ediləcək (fakt yanlışı deyil, planlaşdırılan iş):

- **Metrics** (Prometheus / OpenTelemetry) — request rate, error rate, latency histoqramları.
- **Distributed tracing** (OTel) — sorğu axınının izlənməsi.
- **APM / error tracking** (Sentry vəs.) — mərkəzləşdirilmiş exception aqreqasiyası + alerting.
- **SLO/SLI** tərifləri + dashboard-lar (uptime, p95 latency hədəfləri).
- Log aqreqasiyası/retention (hazırda log-lar yalnız stdout-a yazılır).

Bax: [24 — Incident Response](./24-incident-response.md), [27 — Go-live Runbook](./27-go-live-runbook.md).
