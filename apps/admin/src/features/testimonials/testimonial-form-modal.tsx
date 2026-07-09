import { testimonialCreateSchema, type TestimonialCreateInput } from '@aibaycan/shared';
import { Button, Field, Form, Input, Modal, Switch, Textarea } from '@aibaycan/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import type { z } from 'zod';
import { testimonialHooks } from '@/features/hooks';
import type { Testimonial } from '@/features/types';
import { FormRootError } from '@/components/form-root-error';
import { applyApiError } from '@/lib/apply-api-error';

type FormInput = z.input<typeof testimonialCreateSchema>;

interface Props {
  open: boolean;
  onClose: () => void;
  editing?: Testimonial | null;
}

export function TestimonialFormModal({ open, onClose, editing }: Props) {
  const create = testimonialHooks.useCreate();
  const update = testimonialHooks.useUpdate();
  const isEdit = Boolean(editing);

  const form = useForm<FormInput, unknown, TestimonialCreateInput>({
    resolver: zodResolver(testimonialCreateSchema),
    defaultValues: { quote: '', author: '', role: null, company: null, published: false, order: 0 },
  });

  useEffect(() => {
    if (open) {
      form.reset(
        editing
          ? {
              quote: editing.quote,
              author: editing.author,
              role: editing.role,
              company: editing.company,
              published: editing.published,
              order: editing.order,
            }
          : { quote: '', author: '', role: null, company: null, published: false, order: 0 },
      );
    }
  }, [open, editing, form]);

  async function onSubmit(values: TestimonialCreateInput) {
    try {
      if (isEdit && editing) await update.mutateAsync({ id: editing.id, data: values });
      else await create.mutateAsync(values);
      onClose();
    } catch (err) {
      applyApiError(err, form.setError);
    }
  }

  return (
    <Modal open={open} onClose={onClose} title={isEdit ? 'Rəyi redaktə et' : 'Yeni rəy'} size="lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormRootError form={form} />
          <Field name="quote" label="Rəy" required>
            <Textarea rows={3} placeholder="Müştərinin rəyi" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field name="author" label="Müəllif" required>
              <Input placeholder="Ad Soyad" />
            </Field>
            <Field name="role" label="Vəzifə">
              <Input placeholder="CEO" />
            </Field>
          </div>
          <Field name="company" label="Şirkət">
            <Input placeholder="Şirkət adı" />
          </Field>
          <div className="flex items-center gap-3">
            <Controller
              control={form.control}
              name="published"
              render={({ field }) => (
                <Switch checked={field.value ?? false} onCheckedChange={field.onChange} />
              )}
            />
            <span className="text-sm">Dərc olunub</span>
          </div>
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
