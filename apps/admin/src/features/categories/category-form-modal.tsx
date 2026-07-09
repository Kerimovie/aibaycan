import { categoryCreateSchema, type CategoryCreateInput } from '@aibaycan/shared';
import { Button, Field, Form, Input, Modal, Textarea } from '@aibaycan/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { categoryHooks } from '@/features/hooks';
import type { Category } from '@/features/types';
import { FormRootError } from '@/components/form-root-error';
import { applyApiError } from '@/lib/apply-api-error';

// Zod default sahələr input tipini optional edir → RHF üçün input tipi ayrıca
type FormInput = z.input<typeof categoryCreateSchema>;

interface Props {
  open: boolean;
  onClose: () => void;
  editing?: Category | null;
}

/** Category create/edit modal — RHF + shared Zod (native form QADAĞAN, docs/30) */
export function CategoryFormModal({ open, onClose, editing }: Props) {
  const create = categoryHooks.useCreate();
  const update = categoryHooks.useUpdate();
  const isEdit = Boolean(editing);

  const form = useForm<FormInput, unknown, CategoryCreateInput>({
    resolver: zodResolver(categoryCreateSchema),
    defaultValues: { slug: '', name: '', description: null, order: 0 },
  });

  useEffect(() => {
    if (open) {
      form.reset(
        editing
          ? {
              slug: editing.slug,
              name: editing.name,
              description: editing.description,
              order: editing.order,
            }
          : { slug: '', name: '', description: null, order: 0 },
      );
    }
  }, [open, editing, form]);

  async function onSubmit(values: CategoryCreateInput) {
    try {
      if (isEdit && editing) {
        await update.mutateAsync({ id: editing.id, data: values });
      } else {
        await create.mutateAsync(values);
      }
      onClose();
    } catch (err) {
      applyApiError(err, form.setError);
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={isEdit ? 'Kateqoriyanı redaktə et' : 'Yeni kateqoriya'}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormRootError form={form} />
          <Field name="name" label="Ad" required>
            <Input placeholder="Veb" />
          </Field>
          <Field name="slug" label="Slug" required>
            <Input placeholder="veb" />
          </Field>
          <Field name="description" label="Təsvir">
            <Textarea rows={3} placeholder="Qısa təsvir (opsional)" />
          </Field>
          <Field name="order" label="Sıra">
            <Input type="number" />
          </Field>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="secondary" onClick={onClose}>
              Ləğv et
            </Button>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {isEdit ? 'Yadda saxla' : 'Yarat'}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
}
