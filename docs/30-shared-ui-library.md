# 30 — Shared UI kitabxanası (`@aibaycan/ui`)

`packages/ui` — **etehsil-az** layihəsindən gətirilmiş tam UI kitabxanası
(bax qərar [09](./09-decisions-log.md) #014). Radix UI + CVA + react-hook-form +
Tailwind 4 əsaslı. Violet #845adf tema, dark-siz.

## Sərt qaydalar (etehsil-az-dan)

### ⛔ Native HTML form elementləri QADAĞAN

Heç bir halda `<input>`, `<select>`, `<textarea>`, `<button>` (native) **birbaşa**
istifadə olunmur. Həmişə `@aibaycan/ui` komponentləri:

| Lazım | İşlət (native YOX) |
|-------|--------------------|
| mətn girişi | `Input` |
| parol | `PasswordInput` (kilid + göz toggle) |
| çoxsətirli | `Textarea` |
| açılan siyahı | `Select` |
| axtarışlı select | `SearchableSelect` |
| checkbox | `Checkbox` |
| radio | `RadioGroup` |
| toggle | `Switch` |
| düymə | `Button` (variant-lı) |
| label | `Label` |

İşdən əvvəl `@aibaycan/ui` export-larını yoxla (`packages/ui/src/index.ts`).
Varsa işlət; yoxdursa əvvəl `packages/ui`-ə əlavə et, sonra işlət.

### ⛔ Slug əl ilə yazılmır

Slug heç bir admin formasında göstərilmir. Server başlıq/addan avtomatik yaradır
(`apps/api/src/lib/slug.ts` → `ensureUniqueSlug`), unikallığı suffikslə təmin edir
(`veb`, `veb-2`). **Update-də slug dəyişmir** — URL qorunur. Yeni slug-lı entity
əlavə edəndə `ensureUniqueSlug` istifadə et (bax qərar 09 #016).

### ⛔ Dark mode QADAĞAN

Heç bir `dark:` variant, `.dark` selector, dark token branch. Yalnız light.
(etehsil-az dark-ı dormant saxlayırdı; aibaycan.az tamamilə silib.)

### Form = react-hook-form + Zod

Hər form `<Form><Field>` + `zodResolver` (native `register`+inline error YOX).
Server validation xətaları `applyServerValidationErrors` ilə sahələrə map olunur.
Zod default mesajları i18n ilə (`installZodLocale`) — schema-da mesaj yazmağa
ehtiyac yox.

### Border = həmişə token

`border-border` (və ya rəngli token) — rəngsiz `border` Tailwind 4-də qara
(`currentColor`) çıxır. Bax `styles/index.css` base layer.

## Struktur

```
packages/ui/src/
├── styles/index.css        # tam tema (violet, dark-siz, ~830 sətir)
├── i18n.ts                 # i18next shim (@/i18n import-ı üçün)
├── index.ts                # barrel export
└── shared/
    ├── lib/                # cn, utils, modal-stack, zod-locale, variant-color...
    └── components/
        ├── ui/             # Button, Input, Select, Dialog, Modal, Tabs...
        └── form/           # Field, PasswordInput, SearchableSelect...
```

## Build

**tsup** ilə build olunur (`dist/index.js` + `.d.ts`). `@/` alias esbuild-də
həll olunur. App-lər `dist`-i import edir (source-first deyil).

```bash
pnpm --filter @aibaycan/ui build      # tsup
pnpm --filter @aibaycan/ui typecheck  # tsc
```

> ⚠️ **Operasional tələb:** Təmiz clone / ilk `pnpm install` sonrası app dev-dən əvvəl
> `pnpm --filter @aibaycan/ui build` (və ya `pnpm --recursive build`) çağırılmalıdır —
> əks halda `dist/` boş olur və web/admin `@aibaycan/ui`-ni həll edə bilmir.
> Aktiv işdə `pnpm --filter @aibaycan/ui dev` (tsup `--watch`) dəyişiklikləri izləyir.

## İmport nümunəsi

```tsx
import { Button, Input, Label, Select, PasswordInput } from '@aibaycan/ui';
import '@aibaycan/ui/styles.css'; // tema (bir dəfə, app CSS-də)
```

## Server vs Client (web qeydi)

`@aibaycan/ui` komponentləri **client komponentlərdir** (Radix, hooks). Next.js
**server komponentlərində** (RSC) birbaşa import olunmur — RSC xətası verir.

- **admin** (Vite SPA) — hamısı client, tam istifadə.
- **web** (Next.js) — server komponentlərində yalnız tema (CSS) paylaşılır;
  UI komponentləri lazım olsa client wrapper (`"use client"`) daxilində.

## Gətirilməyən (domen-spesifik / ağır)

etehsil-az-ın məktəb-domeninə xas komponentləri (StudentCard, TeacherCard,
GroupCard, auth/profile features) **gətirilmədi** (aibaycan-a aid deyil).
Ağır komponentlər (DataTablePro, TipTap rich editor, FullCalendar, dnd-kit)
lazım olduqca əlavə olunacaq.

## i18n

Komponentlər `react-i18next` istifadə edir (`common.aria.*`, `validation.*`).
Admin `apps/admin/src/i18n.ts`-də minimal AZ qurulumu var.
