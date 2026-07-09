import { caseStudyCreateSchema, type CaseStudyCreateInput } from '@aibaycan/shared';
import { Button, Field, Form, Input, Modal, Switch, Textarea } from '@aibaycan/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import type { z } from 'zod';
import { caseStudyHooks } from '@/features/hooks';
import type { CaseStudy } from '@/features/types';
import { FormRootError } from '@/components/form-root-error';
import { applyApiError } from '@/lib/apply-api-error';
import { MultiSelectField } from './multi-select-field';

type FormInput = z.input<typeof caseStudyCreateSchema>;

interface Props {
  open: boolean;
  onClose: () => void;
  editing?: CaseStudy | null;
}

const EMPTY: FormInput = {
  slug: '',
  title: '',
  summary: '',
  blocks: [],
  featured: false,
  published: false,
  order: 0,
  categoryIds: [],
  tagIds: [],
  serviceIds: [],
};

export function CaseStudyFormModal({ open, onClose, editing }: Props) {
  const create = caseStudyHooks.useCreate();
  const update = caseStudyHooks.useUpdate();
  const isEdit = Boolean(editing);

  const form = useForm<FormInput, unknown, CaseStudyCreateInput>({
    resolver: zodResolver(caseStudyCreateSchema),
    defaultValues: EMPTY,
  });

  useEffect(() => {
    if (open) {
      form.reset(
        editing
          ? {
              slug: editing.slug,
              title: editing.title,
              tagline: editing.tagline,
              summary: editing.summary,
              clientName: editing.clientName,
              projectYear: editing.projectYear,
              blocks: editing.blocks as FormInput['blocks'],
              liveUrl: editing.liveUrl,
              repoUrl: editing.repoUrl,
              featured: editing.featured,
              published: editing.published,
              order: editing.order,
              categoryIds: editing.categories.map((c) => c.id),
              tagIds: editing.tags.map((t) => t.id),
              serviceIds: editing.services?.map((s) => s.id) ?? [],
            }
          : EMPTY,
      );
    }
  }, [open, editing, form]);

  async function onSubmit(values: CaseStudyCreateInput) {
    try {
      if (isEdit && editing) await update.mutateAsync({ id: editing.id, data: values });
      else await create.mutateAsync(values);
      onClose();
    } catch (err) {
      applyApiError(err, form.setError);
    }
  }

  return (
    <Modal open={open} onClose={onClose} title={isEdit ? 'İşi redaktə et' : 'Yeni iş'} size="2xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormRootError form={form} />
          <div className="grid grid-cols-2 gap-4">
            <Field name="title" label="Başlıq" required>
              <Input placeholder="Layihə adı" />
            </Field>
            <Field name="slug" label="Slug" required>
              <Input placeholder="layihe-adi" />
            </Field>
          </div>
          <Field name="tagline" label="Tagline">
            <Input placeholder="Qısa alt-başlıq" />
          </Field>
          <Field name="summary" label="Xülasə" required>
            <Textarea rows={2} placeholder="Listing üçün qısa təsvir" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field name="clientName" label="Müştəri">
              <Input placeholder="Müştəri adı" />
            </Field>
            <Field name="projectYear" label="İl">
              <Input type="number" placeholder="2026" />
            </Field>
          </div>

          <Controller
            control={form.control}
            name="categoryIds"
            render={({ field }) => (
              <MultiSelectField
                label="Kateqoriyalar"
                resource="categories"
                value={field.value ?? []}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={form.control}
            name="tagIds"
            render={({ field }) => (
              <MultiSelectField
                label="Teqlər"
                resource="tags"
                value={field.value ?? []}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={form.control}
            name="serviceIds"
            render={({ field }) => (
              <MultiSelectField
                label="Xidmətlər"
                resource="services"
                labelKey="title"
                value={field.value ?? []}
                onChange={field.onChange}
              />
            )}
          />

          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 text-sm">
              <Controller
                control={form.control}
                name="published"
                render={({ field }) => (
                  <Switch checked={field.value ?? false} onCheckedChange={field.onChange} />
                )}
              />
              Dərc olunub
            </label>
            <label className="flex items-center gap-2 text-sm">
              <Controller
                control={form.control}
                name="featured"
                render={({ field }) => (
                  <Switch checked={field.value ?? false} onCheckedChange={field.onChange} />
                )}
              />
              Seçilmiş
            </label>
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
