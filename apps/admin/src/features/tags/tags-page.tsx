import { Badge, Button, DataTable, PaginationBar, type Column } from '@aibaycan/ui';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { tagHooks } from '@/features/hooks';
import type { Tag } from '@/features/types';
import { TagFormModal } from './tag-form-modal';

export function TagsPage() {
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Tag | null>(null);

  const { data, isLoading } = tagHooks.useList(page, 20);
  const remove = tagHooks.useRemove();

  const columns: Column<Tag>[] = [
    { key: 'name', header: 'Ad', cell: (t) => <span className="font-medium">{t.name}</span> },
    { key: 'slug', header: 'Slug', cell: (t) => <Badge variant="secondary">{t.slug}</Badge> },
    {
      key: 'actions',
      header: '',
      className: 'text-right',
      cell: (t) => (
        <div className="flex justify-end gap-1">
          <Button size="sm" variant="ghost" onClick={() => { setEditing(t); setModalOpen(true); }}>
            <Pencil size={16} />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              if (confirm(`"${t.name}" teqi silinsin?`)) void remove.mutateAsync(t.id);
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
        title="Teqlər"
        breadcrumb={['Admin', 'Teqlər']}
        action={
          <Button onClick={() => { setEditing(null); setModalOpen(true); }}>
            <Plus size={16} /> Yeni
          </Button>
        }
      />
      <DataTable
        columns={columns}
        rows={data?.items ?? []}
        rowKey={(t) => t.id}
        loading={isLoading}
        empty="Hələ teq yoxdur"
      />
      {data && (
        <PaginationBar page={data.page} pageSize={data.pageSize} total={data.total} onPageChange={setPage} />
      )}
      <TagFormModal open={modalOpen} onClose={() => setModalOpen(false)} editing={editing} />
    </div>
  );
}
