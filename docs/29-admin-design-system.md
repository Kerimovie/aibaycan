# 29 — Admin panel dizayn sistemi

> **YENİLƏNDİ (#014):** Dizayn mənbəyi **Ynex → etehsil-az** UI kitabxanasına
> keçdi. İstifadəçi qərarı: etehsil-az-ın bütün generik shared komponentləri +
> sərt qaydaları gətirildi. Aşağıdakı Ynex tokenləri (violet #845adf, dark
> sidebar) SAXLANILDI, amma komponentlər indi etehsil əsaslıdır (Radix+CVA+RHF).
>
> **İki sərt qayda (etehsil-dən):**
> - **Native HTML form elementləri QADAĞAN** — həmişə `@aibaycan/ui` komponentləri
>   (Input, Select, Checkbox, RadioGroup, Switch, PasswordInput...).
> - **Dark mode TAM silindi** — heç bir `dark:` variant, `.dark` selector yox.
>
> Detal: [30 — shared UI kitabxanası](./30-shared-ui-library.md).

## Tarixçə (Ynex referansı)

İlkin admin dizaynı **Ynex** template-indən (Spruko) götürülmüşdü. Rəng/font/
layout tokenləri oradan gəlir və qalır. Mənbə: https://laravelui.spruko.com/tailwind/ynex/

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
│  Sidebar     │  axtarış · avatar+ad+rol · logout       │
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
- Sol: axtarış (Search ikon + `search` input placeholder). *(sidebar toggle hələ yoxdur.)*
- Sağ: avatar (email baş hərfi) + ad (email) + rol · logout düyməsi (LogOut ikon).
- Real koda uyğun (`apps/admin/src/components/header.tsx`): yalnız axtarış + istifadəçi + logout.
- **Planlaşdırılan (hələ yoxdur):** dil dəyişdirici · notification badge. **Dark-mode toggle YOX** (dark mode tam silindi — bax #014 / [doc 30](./30-shared-ui-library.md)).

### Səhifə başlığı zolağı
- Sol: səhifə başlığı (böyük, qalın).
- Sağ: breadcrumb (`Bölmə » Cari səhifə`).

## Komponentlər (packages/ui-də — tamamlandı ✅)

> Bu komponentlər `packages/ui`-də **artıq mövcuddur** (etehsil əsaslı, ~30 komponent — bax [doc 30](./30-shared-ui-library.md) barrel export). Aşağıdakı cədvəl admin stil referansıdır.

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

**Silindi.** Admin yalnız light-dır — heç bir `dark:` variant / `.dark` selector yoxdur. Bax #014 / [doc 30 → Dark mode QADAĞAN](./30-shared-ui-library.md).

## İkonlar

Ynex `ti-` (Tabler-bənzər) icon font istifadə edir. Biz vendor icon-font gətirmək
əvəzinə **lucide-react** (React 19 uyğun, tree-shakeable, oxşar xətt-stili) istifadə
edəcəyik — eyni vizual dil, təmiz React inteqrasiyası.

## Tətbiq planı (admin panel — web-dən ƏVVƏL) — tamamlandı ✅

Faza 1+2+3 bitib; addımların hamısı icra olundu:

1. ✅ `packages/ui` — dizayn tokenləri (violet tema) + Box, Button variant-ları, Input, Badge, Table (~30 komponent).
2. ✅ `apps/admin` shell — Ynex layout (dark sidebar + light header + başlıq zolağı).
3. ✅ Login səhifəsi signin-cover pattern-ə uyğunlaşdırıldı.
4. ✅ Dashboard/list/form səhifələri Ynex komponent stilində quruldu (Faza 1 CRUD).
