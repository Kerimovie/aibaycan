import * as React from 'react';
import { type FieldPath, type FieldValues, useFormContext } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { cn } from '../../lib/utils';

/**
 * `<Field>` — ən yığcam form sahəsi (RHF + shadcn Form birləşmiş).
 *
 * SƏRT QAYDA (CLAUDE.md): error mesajı input ALTINDA + input ÖZÜNDƏ aria-invalid
 * (qırmızı border) — hər ikisi AVTOMATIK (manual state/error YOX).
 *
 * İstifadə:
 *   <Field name="email" label="Email" required>
 *     <Input placeholder="ad@kurs.az" />
 *   </Field>
 *
 * Child input-a RHF `field` (value/onChange/onBlur/name/ref) avtomatik bağlanır
 * + `aria-invalid` FormControl-dan gəlir. FormMessage error mesajını özü göstərir.
 * Validation = forma zod schema-sında (resolver) — burada heç nə yox.
 */
type FieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
  label?: React.ReactNode;
  required?: boolean;
  /** Köməkçi mətn (error olmayanda altında). */
  description?: string;
  className?: string;
  /** Tək form control (Input/Select/PasswordInput...). */
  children: React.ReactElement;
};

export function Field<TFieldValues extends FieldValues = FieldValues>({
  name,
  label,
  required = false,
  description,
  className,
  children,
}: FieldProps<TFieldValues>): React.ReactElement {
  const { control } = useFormContext<TFieldValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        // ⛔ self-start (#070): Field grid/flex valideyndə yan-yana olanda, biri
        // `description` daşıyıb daha hündür olsa belə, hər Field YUXARIDAN hizalanır
        // (label+input eyni səviyyədə qalır — grid `stretch` inputu itələmir). Normal
        // blok valideyndə təsirsiz. Bir dəfə mərkəzdə həll → bütün form-lar düzgün.
        <FormItem className={cn('self-start', className)}>
          {label && (
            <FormLabel>
              {label}
              {required && <span className="ml-0.5 text-(--danger)">*</span>}
            </FormLabel>
          )}
          <FormControl>
            {React.cloneElement(children, {
              ...field,
              // PasswordInput value/onChange string qəbul edir — RHF field uyğun.
              ...(children.props as Record<string, unknown>),
            })}
          </FormControl>
          {description && <p className="text-text-tertiary text-xs">{description}</p>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
