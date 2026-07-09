import { adminUserCreateSchema, adminUserUpdateSchema, type AdminUserCreateInput } from '@aibaycan/shared';
import {
  Button,
  Field,
  Form,
  Input,
  Modal,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@aibaycan/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import type { z } from 'zod';
import { adminUserHooks } from '@/features/hooks';
import type { AdminUser } from '@/features/types';
import { FormRootError } from '@/components/form-root-error';
import { applyApiError } from '@/lib/apply-api-error';

type CreateInput = z.input<typeof adminUserCreateSchema>;

interface Props {
  open: boolean;
  onClose: () => void;
  editing?: AdminUser | null;
}

/** Admin istifadəçi create/edit — parol create-də məcburi, edit-də opsional */
export function AdminFormModal({ open, onClose, editing }: Props) {
  const create = adminUserHooks.useCreate();
  const update = adminUserHooks.useUpdate();
  const isEdit = Boolean(editing);

  const form = useForm<CreateInput, unknown, AdminUserCreateInput>({
    resolver: zodResolver(adminUserCreateSchema),
    defaultValues: { email: '', name: null, role: 'EDITOR', password: '' },
  });

  useEffect(() => {
    if (open) {
      form.reset(
        editing
          ? { email: editing.email, name: editing.name, role: editing.role, password: '' }
          : { email: '', name: null, role: 'EDITOR', password: '' },
      );
    }
  }, [open, editing, form]);

  async function onSubmit(values: AdminUserCreateInput) {
    try {
      if (isEdit && editing) {
        // Edit — parol boşdursa dəyişmə, active əlavə
        const updateData = adminUserUpdateSchema.parse({
          name: values.name,
          role: values.role,
          active: editing.active,
          ...(values.password ? { password: values.password } : {}),
        });
        await update.mutateAsync({ id: editing.id, data: updateData });
      } else {
        await create.mutateAsync(values);
      }
      onClose();
    } catch (err) {
      applyApiError(err, form.setError);
    }
  }

  return (
    <Modal open={open} onClose={onClose} title={isEdit ? 'Admini redaktə et' : 'Yeni admin'}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormRootError form={form} />
          <Field name="email" label="Email" required>
            <Input type="email" placeholder="admin@aibaycan.az" disabled={isEdit} />
          </Field>
          <Field name="name" label="Ad">
            <Input placeholder="Ad Soyad" />
          </Field>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Rol</label>
            <Controller
              control={form.control}
              name="role"
              render={({ field }) => (
                <Select value={field.value ?? 'EDITOR'} onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EDITOR">Redaktor</SelectItem>
                    <SelectItem value="ADMIN">Admin</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <Field name="password" label={isEdit ? 'Yeni parol (boş = dəyişmə)' : 'Parol'} required={!isEdit}>
            <Input type="password" placeholder="••••••••" autoComplete="new-password" />
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
