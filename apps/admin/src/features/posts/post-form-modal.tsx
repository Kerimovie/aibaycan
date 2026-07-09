import { postCreateSchema, type PostCreateInput } from '@aibaycan/shared';
import { Button, Field, Form, Input, Modal, Switch, Textarea } from '@aibaycan/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import type { z } from 'zod';
import { MultiSelectField } from '@/features/case-studies/multi-select-field';
import { postHooks } from '@/features/hooks';
import type { Post } from '@/features/types';
import { FormRootError } from '@/components/form-root-error';
import { applyApiError } from '@/lib/apply-api-error';

type FormInput = z.input<typeof postCreateSchema>;

interface Props {
  open: boolean;
  onClose: () => void;
  editing?: Post | null;
}

const EMPTY: FormInput = {
  title: '',
  excerpt: '',
  blocks: [],
  published: false,
  categoryIds: [],
  tagIds: [],
};

export function PostFormModal({ open, onClose, editing }: Props) {
  const create = postHooks.useCreate();
  const update = postHooks.useUpdate();
  const isEdit = Boolean(editing);

  const form = useForm<FormInput, unknown, PostCreateInput>({
    resolver: zodResolver(postCreateSchema),
    defaultValues: EMPTY,
  });

  useEffect(() => {
    if (open) {
      form.reset(
        editing
          ? {
              title: editing.title,
              excerpt: editing.excerpt,
              blocks: editing.blocks as FormInput['blocks'],
              published: editing.published,
              publishedAt: editing.publishedAt ? new Date(editing.publishedAt) : null,
              categoryIds: editing.categories.map((c) => c.id),
              tagIds: editing.tags.map((t) => t.id),
              metaTitle: editing.metaTitle,
              metaDescription: editing.metaDescription,
            }
          : EMPTY,
      );
    }
  }, [open, editing, form]);

  async function onSubmit(values: PostCreateInput) {
    try {
      // Dərc olunanda publishedAt avtomatik (yoxdursa)
      const data = {
        ...values,
        publishedAt: values.published ? (values.publishedAt ?? new Date()) : null,
      };
      if (isEdit && editing) await update.mutateAsync({ id: editing.id, data });
      else await create.mutateAsync(data);
      onClose();
    } catch (err) {
      applyApiError(err, form.setError);
    }
  }

  return (
    <Modal open={open} onClose={onClose} title={isEdit ? 'Məqaləni redaktə et' : 'Yeni məqalə'} size="2xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormRootError form={form} />
          <Field name="title" label="Başlıq" required>
            <Input placeholder="Məqalə başlığı" />
          </Field>
          <Field name="excerpt" label="Xülasə" required>
            <Textarea rows={2} placeholder="Listing üçün qısa təsvir" />
          </Field>

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
