import { tagCreateSchema, type TagCreateInput } from '@aibaycan/shared';
import { Button, Field, Form, Input, Modal } from '@aibaycan/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { tagHooks } from '@/features/hooks';
import type { Tag } from '@/features/types';
import { FormRootError } from '@/components/form-root-error';
import { applyApiError } from '@/lib/apply-api-error';

type FormInput = z.input<typeof tagCreateSchema>;

interface Props {
  open: boolean;
  onClose: () => void;
  editing?: Tag | null;
}

export function TagFormModal({ open, onClose, editing }: Props) {
  const create = tagHooks.useCreate();
  const update = tagHooks.useUpdate();
  const isEdit = Boolean(editing);

  const form = useForm<FormInput, unknown, TagCreateInput>({
    resolver: zodResolver(tagCreateSchema),
    defaultValues: { name: '' },
  });

  useEffect(() => {
    if (open) {
      form.reset(editing ? { name: editing.name } : { name: '' });
    }
  }, [open, editing, form]);

  async function onSubmit(values: TagCreateInput) {
    try {
      if (isEdit && editing) await update.mutateAsync({ id: editing.id, data: values });
      else await create.mutateAsync(values);
      onClose();
    } catch (err) {
      applyApiError(err, form.setError);
    }
  }

  return (
    <Modal open={open} onClose={onClose} title={isEdit ? 'Teqi redaktə et' : 'Yeni teq'}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormRootError form={form} />
          <Field name="name" label="Ad" required>
            <Input placeholder="Next.js" />
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
