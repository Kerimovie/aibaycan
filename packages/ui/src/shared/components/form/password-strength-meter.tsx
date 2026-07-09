import { useTranslation } from 'react-i18next';

import { cn } from '@/shared/lib/utils';

/**
 * PasswordStrengthMeter — 4-segment bar + tier label.
 *
 * Spec: docs/design-system/components/password-strength-meter.md
 *
 * Tiers (auto-calculated unless `strength` overrides):
 *   0 — empty (segments slate-200, no label)
 *   1 — weak       (rose-400 bar / rose-700 label)    — "Zəif"
 *   2 — medium     (amber-400 / amber-700)            — "Orta"
 *   3 — strong     (primary-400 / primary-700)        — "Güclü"
 *   4 — very-strong (emerald-500 / emerald-700)       — "Çox güclü"
 *
 * aria-live polite + aria-valuetext localized per WCAG 4.1.3.
 *
 * Scoring is intentionally inline (no zxcvbn dep) — see `scorePassword`.
 * Swap to zxcvbn at the feature-wiring layer for entropy-aware scoring.
 */

type StrengthTier = 0 | 1 | 2 | 3 | 4;

type PasswordStrengthMeterProps = {
  password: string;
  /** Override auto-scored tier (0-4). */
  strength?: StrengthTier;
  /** Helper hint rendered after tier label. */
  helper?: string;
  className?: string;
};

/**
 * Lightweight heuristic scoring — counts character classes + length tiers.
 * Returns 0 (empty) to 4 (very-strong).
 */
// eslint-disable-next-line react-refresh/only-export-components -- pure helper colocated with component
export function scorePassword(password: string): StrengthTier {
  if (password.length === 0) return 0;

  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  const classes = [hasLower, hasUpper, hasNumber, hasSymbol].filter(Boolean).length;

  if (password.length < 8) return 1;
  if (password.length >= 12 && classes >= 4) return 4;
  if (password.length >= 10 && classes >= 3) return 3;
  if (password.length >= 8 && classes >= 2) return 2;
  return 1;
}

const TIER_META: Record<
  Exclude<StrengthTier, 0>,
  { labelKey: string; segmentClass: string; labelClass: string }
> = {
  1: {
    labelKey: 'common.passwordStrength.tier1',
    segmentClass: 'bg-rose-400',
    labelClass: 'text-rose-700',
  },
  2: {
    labelKey: 'common.passwordStrength.tier2',
    segmentClass: 'bg-amber-400',
    labelClass: 'text-amber-700',
  },
  3: {
    labelKey: 'common.passwordStrength.tier3',
    segmentClass: 'bg-(--primary-400)',
    labelClass: 'text-(--primary-700)',
  },
  4: {
    labelKey: 'common.passwordStrength.tier4',
    segmentClass: 'bg-emerald-500',
    labelClass: 'text-emerald-700',
  },
};

export function PasswordStrengthMeter({
  password,
  strength,
  helper,
  className,
}: PasswordStrengthMeterProps) {
  const { t } = useTranslation();
  const tier: StrengthTier = strength ?? scorePassword(password);
  const meta = tier === 0 ? undefined : TIER_META[tier];
  const tierLabel = meta ? t(meta.labelKey) : undefined;

  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={4}
      aria-valuenow={tier}
      aria-valuetext={tierLabel ?? t('common.passwordStrength.empty')}
      aria-live="polite"
      data-slot="password-strength-meter"
      data-tier={tier}
      className={cn('w-full', className)}
    >
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4].map((segment) => {
          const active = tier >= segment;
          return (
            <span
              key={segment}
              aria-hidden
              className={cn(
                'h-1.5 flex-1 rounded-sm transition-colors',
                active && meta !== undefined ? meta.segmentClass : 'bg-slate-200',
              )}
            />
          );
        })}
      </div>
      {meta !== undefined && (
        <div className="mt-2 flex items-center justify-between gap-3 text-[11px] font-semibold">
          <span className={meta.labelClass}>{tierLabel}</span>
          {helper !== undefined && (
            <span className="text-xs font-normal leading-[1.45] text-slate-500">{helper}</span>
          )}
        </div>
      )}
    </div>
  );
}

export type { StrengthTier };
