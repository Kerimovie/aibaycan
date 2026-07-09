import { useTranslation } from 'react-i18next';

/**
 * Form label nişanları — məcburi (`<Req/>`) və istəyə bağlı (`<Opt/>`).
 *
 * Disabled submit düyməsi "niyə deaktiv?" sualını yaradır (user 2026-06-09);
 * label-da məcburi/istəyə-bağlı nişanı istifadəçiyə hansı sahənin lazım
 * olduğunu dərhal göstərir. Form label-ları arası vahid pattern (shared-first).
 *
 * @example
 *   <Label>Ad <Req /></Label>
 *   <Label>Email <Opt /></Label>
 */
export function Req() {
  const { t } = useTranslation();
  return (
    <span className="text-rose-500" aria-label={t('common.required')}>
      *
    </span>
  );
}

export function Opt() {
  const { t } = useTranslation();
  return <span className="text-xs font-normal text-slate-400">({t('common.optional')})</span>;
}
