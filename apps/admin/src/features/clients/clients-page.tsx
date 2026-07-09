import { clientCreateSchema, type ClientCreateInput } from '@aibaycan/shared';
import {
  Badge,
  Button,
  DataTable,
  Field,
  Form,
  Input,
  Modal,
  PaginationBar,
  Switch,
  type Column,
} from '@aibaycan/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import type { z } from 'zod';
import { PageHeader } from '@/components/page-header';
import { clientHooks } from '@/features/hooks';
import type { Client } from '@/features/types';
import { FormRootError } from '@/components/form-root-error';
import { applyApiError } from '@/lib/apply-api-error';

type FormInput = z.input<typeof clientCreateSchema>;

function ClientFormModal({ open, onClose, editing }: { open: boolean; onClose: () => void; editing?: Client | null }) {
  const create = clientHooks.useCreate();
  const update = clientHooks.useUpdate();
  const isEdit = Boolean(editing);
  const form = useForm<FormInput, unknown, ClientCreateInput>({
    resolver: zodResolver(clientCreateSchema),
    defaultValues: { name: '', websiteUrl: null, published: false, order: 0 },
  });

  useEffect(() => {
    if (open) {
      form.reset(
        editing
          ? { name: editing.name, websiteUrl: editing.websiteUrl, published: editing.published, order: editing.order }
          : { name: '', websiteUrl: null, published: false, order: 0 },
      );
    }
  }, [open, editing, form]);

  async function onSubmit(values: ClientCreateInput) {
    try {
      if (isEdit && editing) await update.mutateAsync({ id: editing.id, data: values });
      else await create.mutateAsync(values);
      onClose();
    } catch (err) {
      applyApiError(err, form.setError);
    }
  }

  return (
    <Modal open={open} onClose={onClose} title={isEdit ? 'Müştərini redaktə et' : 'Yeni müştəri'}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormRootError form={form} />
          <Field name="name" label="Ad" required>
            <Input placeholder="Şirkət adı" />
          </Field>
          <Field name="websiteUrl" label="Sayt URL">
            <Input placeholder="https://…" />
          </Field>
          <div className="flex items-center gap-3">
            <Controller control={form.control} name="published" render={({ field }) => (
              <Switch checked={field.value ?? false} onCheckedChange={field.onChange} />
            )} />
            <span className="text-sm">Dərc olunub</span>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="secondary" onClick={onClose}>Ləğv et</Button>
            <Button type="submit" disabled={form.formState.isSubmitting}>{isEdit ? 'Yadda saxla' : 'Yarat'}</Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
}

export function ClientsPage() {
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Client | null>(null);
  const { data, isLoading } = clientHooks.useList(page, 20);
  const remove = clientHooks.useRemove();

  const columns: Column<Client>[] = [
    { key: 'name', header: 'Ad', cell: (c) => <span className="font-medium">{c.name}</span> },
    { key: 'url', header: 'Sayt', cell: (c) => c.websiteUrl ?? '—' },
    { key: 'published', header: 'Status', cell: (c) => (c.published ? <Badge variant="default">Dərc</Badge> : <Badge variant="secondary">Qaralama</Badge>) },
    {
      key: 'actions', header: '', className: 'text-right',
      cell: (c) => (
        <div className="flex justify-end gap-1">
          <Button size="sm" variant="ghost" onClick={() => { setEditing(c); setModalOpen(true); }}><Pencil size={16} /></Button>
          <Button size="sm" variant="ghost" onClick={() => { if (confirm('Silinsin?')) void remove.mutateAsync(c.id); }}><Trash2 size={16} className="text-danger" /></Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader title="Müştərilər" breadcrumb={['Admin', 'Müştərilər']}
        action={<Button onClick={() => { setEditing(null); setModalOpen(true); }}><Plus size={16} /> Yeni</Button>} />
      <DataTable columns={columns} rows={data?.items ?? []} rowKey={(c) => c.id} loading={isLoading} empty="Hələ müştəri yoxdur" />
      {data && <PaginationBar page={data.page} pageSize={data.pageSize} total={data.total} onPageChange={setPage} />}
      <ClientFormModal open={modalOpen} onClose={() => setModalOpen(false)} editing={editing} />
    </div>
  );
}
