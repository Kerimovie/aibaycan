import { teamMemberCreateSchema, type TeamMemberCreateInput } from '@aibaycan/shared';
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
  Textarea,
  type Column,
} from '@aibaycan/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import type { z } from 'zod';
import { PageHeader } from '@/components/page-header';
import { teamHooks } from '@/features/hooks';
import type { TeamMember } from '@/features/types';
import { FormRootError } from '@/components/form-root-error';
import { applyApiError } from '@/lib/apply-api-error';

type FormInput = z.input<typeof teamMemberCreateSchema>;

function TeamFormModal({ open, onClose, editing }: { open: boolean; onClose: () => void; editing?: TeamMember | null }) {
  const create = teamHooks.useCreate();
  const update = teamHooks.useUpdate();
  const isEdit = Boolean(editing);
  const form = useForm<FormInput, unknown, TeamMemberCreateInput>({
    resolver: zodResolver(teamMemberCreateSchema),
    defaultValues: { name: '', role: '', bio: null, socials: {}, published: false, order: 0 },
  });

  useEffect(() => {
    if (open) {
      form.reset(
        editing
          ? { name: editing.name, role: editing.role, bio: editing.bio, socials: editing.socials, published: editing.published, order: editing.order }
          : { name: '', role: '', bio: null, socials: {}, published: false, order: 0 },
      );
    }
  }, [open, editing, form]);

  async function onSubmit(values: TeamMemberCreateInput) {
    try {
      if (isEdit && editing) await update.mutateAsync({ id: editing.id, data: values });
      else await create.mutateAsync(values);
      onClose();
    } catch (err) {
      applyApiError(err, form.setError);
    }
  }

  return (
    <Modal open={open} onClose={onClose} title={isEdit ? 'Üzvü redaktə et' : 'Yeni üzv'} size="lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormRootError form={form} />
          <div className="grid grid-cols-2 gap-4">
            <Field name="name" label="Ad" required><Input placeholder="Ad Soyad" /></Field>
            <Field name="role" label="Vəzifə" required><Input placeholder="Developer" /></Field>
          </div>
          <Field name="bio" label="Bio"><Textarea rows={3} placeholder="Qısa bio" /></Field>
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

export function TeamPage() {
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<TeamMember | null>(null);
  const { data, isLoading } = teamHooks.useList(page, 20);
  const remove = teamHooks.useRemove();

  const columns: Column<TeamMember>[] = [
    { key: 'name', header: 'Ad', cell: (m) => <span className="font-medium">{m.name}</span> },
    { key: 'role', header: 'Vəzifə', cell: (m) => m.role },
    { key: 'published', header: 'Status', cell: (m) => (m.published ? <Badge variant="default">Dərc</Badge> : <Badge variant="secondary">Qaralama</Badge>) },
    {
      key: 'actions', header: '', className: 'text-right',
      cell: (m) => (
        <div className="flex justify-end gap-1">
          <Button size="sm" variant="ghost" onClick={() => { setEditing(m); setModalOpen(true); }}><Pencil size={16} /></Button>
          <Button size="sm" variant="ghost" onClick={() => { if (confirm('Silinsin?')) void remove.mutateAsync(m.id); }}><Trash2 size={16} className="text-danger" /></Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader title="Komanda" breadcrumb={['Admin', 'Komanda']}
        action={<Button onClick={() => { setEditing(null); setModalOpen(true); }}><Plus size={16} /> Yeni</Button>} />
      <DataTable columns={columns} rows={data?.items ?? []} rowKey={(m) => m.id} loading={isLoading} empty="Hələ üzv yoxdur" />
      {data && <PaginationBar page={data.page} pageSize={data.pageSize} total={data.total} onPageChange={setPage} />}
      <TeamFormModal open={modalOpen} onClose={() => setModalOpen(false)} editing={editing} />
    </div>
  );
}
