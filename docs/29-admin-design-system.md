# 29 — Admin panel dizayn sistemi (Ynex əsaslı)

Admin panel (`apps/admin`) dizaynı **Ynex** template-indən (Spruko, Tailwind CSS
admin) götürülür. Yanaşma: dizayndan ilhamlanmaq — rənglər/font/spacing/layout/
komponent stili birebir, amma **öz Tailwind 4 + React 19 komponentlərimizlə**
(Preline/jQuery vendor asılılığı YOX). Bax qərar [09](./09-decisions-log.md) #013.

Mənbə: https://laravelui.spruko.com/tailwind/ynex/

## Dizayn tokenləri (dəqiq)

```
Font:        Inter, sans-serif

Primary:     #845adf   (violet — button, active, aksent)
Secondary:   #23b7e5
Info:        #49b6f5
Success:     #26bf94
Warning:     #f5b849
Danger:      #e6533c

Body bg:     #f0f1f7   (açıq boz məzmun fonu)
Sidebar:     #111c43   (dark navy)
Card/box:    #ffffff
Text:        #333335   (default)
Text muted:  #8c9097
Border:      #f3f3f3   (default), input #e9edf6
```

**Radius:** box/card 8px · button 4px · input ~6px
**Kölgə:** kartlarda çox yüngül / demək olar yox — border ilə ayrılır

## Layout

```
┌──────────────┬────────────────────────────────────────┐
│              │  Header (60px, ağ)                      │
│  Sidebar     │  axtarış · dil · dark-mode · avatar     │
│  (240px,     ├────────────────────────────────────────┤
│   #111c43)   │  Səhifə başlığı ····· breadcrumb (sağ)  │
│              │                                         │
│  qruplar:    │  Box-lar (ağ, 8px radius, incə border)  │
│  MAIN/PAGES  │                                         │
│  badge-lər   │                                         │
└──────────────┴────────────────────────────────────────┘
```

### Sidebar
- Dark navy `#111c43`, 240px, sabit sol.
- Qruplaşmış menu: bölmə başlıqları (kiçik, boz, uppercase — "MAIN", "PAGES").
- Menu item: ikon + mətn (sol), chevron (sağ, genişlənən qrupda).
- **Aktiv item:** ağ mətn + `rgba(255,255,255,0.05)` fon + 8px radius + dolu dairə marker (●).
- **Passiv item:** boz-mavi mətn (~`#8ca0c4`) + boş dairə marker (○).
- Genişlənən alt-menular (collapse).

### Header (60px, ağ)
- Sol: sidebar toggle (hamburger).
- Sağ: axtarış ikonu · dil · dark-mode toggle · notification (badge) · avatar+ad+rol.

### Səhifə başlığı zolağı
- Sol: səhifə başlığı (böyük, qalın).
- Sağ: breadcrumb (`Bölmə » Cari səhifə`).

## Komponentlər (packages/ui-də qurulacaq / genişlənəcək)

| Komponent | Stil |
|-----------|------|
| **Box/Card** | Ağ, 8px radius, incə border `#f3f3f3`, başlıq violet aksent xətti ilə |
| **Button** | Primary violet `#845adf`, 4px radius, padding 8px 12px, variant-lar (primary/secondary/light/danger) |
| **Input** | Border `#e9edf6`, ~6px radius, padding 8px 14px, hündürlük ~40px, label üstdə |
| **Data table** | Başlıq sıralama oxları ilə, zebra sətrlər, hover, pagination (Showing X-Y of N + First/Prev/N/Next/Last) |
| **Badge** | Kiçik, rəngli (rol/status üçün) |
| **Checkbox/Radio** | Violet aksent |

## Login səhifəsi (signin-cover pattern)

İki-panelli:
- **Sol:** loqo + "Sign In" başlıq + xoşgəldin mesajı + email/parol input (parol göz ikonu ilə) + "Şifrəni unutdun?" + violet Sign In button.
- **Sağ:** cover şəkil / brand paneli (kölgə overlay).
- **Bizdə fərq:** sosial login YOX (yalnız email/parol — bax [05](./05-auth-strategy.md)). Sol panel sadələşdirilir.

## Dark mode

Ynex `html.light` / `html.dark` ilə tema dəyişir. Bizim admin də dark mode dəstəkləyəcək
(Tailwind 4 `dark:` variant + `data-theme`). MVP-də light kifayətdir, dark sonra.

## İkonlar

Ynex `ti-` (Tabler-bənzər) icon font istifadə edir. Biz vendor icon-font gətirmək
əvəzinə **lucide-react** (React 19 uyğun, tree-shakeable, oxşar xətt-stili) istifadə
edəcəyik — eyni vizual dil, təmiz React inteqrasiyası.

## Tətbiq planı (admin panel — web-dən ƏVVƏL)

1. `packages/ui` genişlət — dizayn tokenləri (violet tema) + Box, Button variant-ları, Input, Badge, Table.
2. `apps/admin` shell — Ynex layout (dark sidebar + header + başlıq zolağı).
3. Login səhifəsini signin-cover pattern-ə uyğunlaşdır.
4. Dashboard/list/form səhifələrini Ynex komponent stilində qur (Faza 1 CRUD gələndə).

Web tərəf admin bitəndən SONRA (istifadəçi qərarı).
