# 20 — Performance

Qısa. Hazırkı real vəziyyət — rəsmi hədəflər prod deploy-dan sonra təyin ediləcək (aşağı prioritet).

## Mövcud

- **Next.js SSG/ISR** — ictimai səhifələr server-side fetch ilə statik generasiya olunur, `revalidate: 60` ilə ISR (60s-də bir yenilənir) (`apps/web/src/lib/api.ts:92-107`).
- **next/image optimizasiyası** — şəkillər `next/image` ilə (avtomatik format/ölçü optimizasiyası, lazy-load).
- **GA4 event tracking** (yalnız consent-lə) — `lead_submit`, `case_study_view`, `post_view` ölçülür (`apps/web/src/lib/analytics.ts:38-42`).

## Hələ YOX — deploy-dan sonra

- **Lighthouse hədəfləri** (performance/SEO/a11y skorları) təyin edilməyib.
- **p95 latency izləmə** — real-user/back-end latency ölçülmür (bax [15 — Monitoring](./15-monitoring.md)).
- Bundle-size büdcəsi, Core Web Vitals izləməsi — prod-dan sonra.

Aşağı prioritet: portfolio miqyasında hazırkı SSG/ISR + next/image kifayətdir; ölçmə/hədəflər canlı trafik olduqdan sonra əlavə ediləcək.
