import { Badge, Button, DataTable, PaginationBar, type Column } from '@aibaycan/ui';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { serviceHooks } from '@/features/hooks';
import type { Service } from '@/features/types';
import { ServiceFormModal } from './service-form-modal';

export function ServicesPage() {
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Service | null>(null);

  const { data, isLoading } = serviceHooks.useList(page, 20);
  const remove = serviceHooks.useRemove();

  const columns: Column<Service>[] = [
    { key: 'title', header: 'Başlıq', cell: (s) => <span className="font-medium">{s.title}</span> },
    { key: 'slug', header: 'Slug', cell: (s) => <Badge variant="secondary">{s.slug}</Badge> },
    {
      key: 'published',
      header: 'Status',
      cell: (s) =>
        s.published ? <Badge variant="default">Dərc</Badge> : <Badge variant="secondary">Qaralama</Badge>,
    },
    {
      key: 'actions',
      header: '',
      className: 'text-right',
      cell: (s) => (
        <div className="flex justify-end gap-1">
          <Button size="sm" variant="ghost" onClick={() => { setEditing(s); setModalOpen(true); }}>
            <Pencil size={16} />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              if (confirm(`"${s.title}" xidməti silinsin?`)) void remove.mutateAsync(s.id);
            }}
          >
            <Trash2 size={16} className="text-danger" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Xidmətlər"
        breadcrumb={['Admin', 'Xidmətlər']}
        action={
          <Button onClick={() => { setEditing(null); setModalOpen(true); }}>
            <Plus size={16} /> Yeni
          </Button>
        }
      />
      <DataTable
        columns={columns}
        rows={data?.items ?? []}
        rowKey={(s) => s.id}
        loading={isLoading}
        empty="Hələ xidmət yoxdur"
      />
      {data && (
        <PaginationBar page={data.page} pageSize={data.pageSize} total={data.total} onPageChange={setPage} />
      )}
      <ServiceFormModal open={modalOpen} onClose={() => setModalOpen(false)} editing={editing} />
    </div>
  );
}
