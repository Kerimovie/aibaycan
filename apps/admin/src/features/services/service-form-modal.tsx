import { serviceCreateSchema, type ServiceCreateInput } from '@aibaycan/shared';
import { Button, Field, Form, Input, Modal, Switch, Textarea } from '@aibaycan/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import type { z } from 'zod';
import { serviceHooks } from '@/features/hooks';
import type { Service } from '@/features/types';
import { applyApiError } from '@/lib/apply-api-error';

type FormInput = z.input<typeof serviceCreateSchema>;

interface Props {
  open: boolean;
  onClose: () => void;
  editing?: Service | null;
}

export function ServiceFormModal({ open, onClose, editing }: Props) {
  const create = serviceHooks.useCreate();
  const update = serviceHooks.useUpdate();
  const isEdit = Boolean(editing);

  const form = useForm<FormInput, unknown, ServiceCreateInput>({
    resolver: zodResolver(serviceCreateSchema),
    defaultValues: { slug: '', title: '', description: '', icon: null, published: false, order: 0, caseStudyIds: [] },
  });

  useEffect(() => {
    if (open) {
      form.reset(
        editing
          ? {
              slug: editing.slug,
              title: editing.title,
              description: editing.description,
              icon: editing.icon,
              published: editing.published,
              order: editing.order,
              caseStudyIds: editing.caseStudies?.map((cs) => cs.id) ?? [],
            }
          : { slug: '', title: '', description: '', icon: null, published: false, order: 0, caseStudyIds: [] },
      );
    }
  }, [open, editing, form]);

  async function onSubmit(values: ServiceCreateInput) {
    try {
      if (isEdit && editing) await update.mutateAsync({ id: editing.id, data: values });
      else await create.mutateAsync(values);
      onClose();
    } catch (err) {
      applyApiError(err, form.setError);
    }
  }

  return (
    <Modal open={open} onClose={onClose} title={isEdit ? 'Xidməti redaktə et' : 'Yeni xidmət'} size="lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Field name="title" label="Başlıq" required>
            <Input placeholder="Veb Development" />
          </Field>
          <Field name="slug" label="Slug" required>
            <Input placeholder="web-development" />
          </Field>
          <Field name="description" label="Təsvir" required>
            <Textarea rows={3} placeholder="Xidmətin təsviri" />
          </Field>
          <Field name="order" label="Sıra">
            <Input type="number" />
          </Field>
          <div className="flex items-center gap-3">
            <Controller
              control={form.control}
              name="published"
              render={({ field }) => (
                <Switch checked={field.value ?? false} onCheckedChange={field.onChange} />
              )}
            />
            <span className="text-sm text-text-primary">Dərc olunub</span>
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
