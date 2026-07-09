import type { FieldValues, UseFormReturn } from 'react-hook-form';

/**
 * Forma səviyyəli (root) server xətası — sahəyə bağlana bilməyən xətalar
 * (məs. sahəsi bilinməyən CONFLICT, şəbəkə xətası).
 *
 * ⛔ Sahə-səviyyəli xətalar input ALTINDA göstərilir (Field/FormMessage);
 * bu, YALNIZ root üçündür — yoxsa istifadəçi heç nə görmür (docs/30).
 */
export function FormRootError<T extends FieldValues>({ form }: { form: UseFormReturn<T> }) {
  const message = form.formState.errors.root?.message;
  if (!message) return null;

  return (
    <p role="alert" className="rounded-md bg-danger/10 px-3 py-2 text-sm text-danger">
      {message}
    </p>
  );
}
