export { cn } from './shared/lib/utils';
export { withModalGuard } from './shared/lib/with-modal-guard';
export { installZodLocale } from './shared/lib/zod-locale';
export { applyServerValidationErrors } from './shared/lib/apply-server-validation-errors';
export { variantToAvatarBg, variantToSoftBg } from './shared/lib/variant-color';
export { enumVariantColor, type EnumVariant } from './shared/lib/enum-variant-color';

// Primitivlər
export * from './shared/components/ui/button';
export * from './shared/components/ui/label';
export * from './shared/components/ui/input';
export * from './shared/components/ui/textarea';
export * from './shared/components/ui/badge';
export * from './shared/components/ui/card';
export * from './shared/components/ui/separator';
export * from './shared/components/ui/field-mark';
export * from './shared/components/ui/avatar';

// Form primitivləri (native HTML QADAĞAN — hər zaman bunlar)
export * from './shared/components/ui/select';
export * from './shared/components/ui/checkbox';
export * from './shared/components/ui/radio-group';
export * from './shared/components/ui/switch';
export * from './shared/components/ui/form';

// Kompozit
export * from './shared/components/ui/dialog';
export * from './shared/components/ui/modal';
export * from './shared/components/ui/wide-modal';
export * from './shared/components/ui/tooltip';
export * from './shared/components/ui/popover';
export * from './shared/components/ui/dropdown-menu';
export * from './shared/components/ui/tabs';
export * from './shared/components/ui/segmented-tabs';
export * from './shared/components/ui/scroll-area';
export * from './shared/components/ui/collapsible';
export * from './shared/components/ui/data-table';

// Form komponentləri
export { Field } from './shared/components/form/field';
export { PasswordInput } from './shared/components/form/password-input';
export { PasswordStrengthMeter, scorePassword } from './shared/components/form/password-strength-meter';
export type { StrengthTier } from './shared/components/form/password-strength-meter';
export { SearchableSelect } from './shared/components/form/searchable-select';
