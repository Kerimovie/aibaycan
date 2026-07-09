import { Badge, Button, DataTable, PaginationBar, type Column } from '@aibaycan/ui';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { categoryHooks } from '@/features/hooks';
import type { Category } from '@/features/types';
import { CategoryFormModal } from './category-form-modal';

export function CategoriesPage() {
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Category | null>(null);

  const { data, isLoading } = categoryHooks.useList(page, 20);
  const remove = categoryHooks.useRemove();

  function openCreate() {
    setEditing(null);
    setModalOpen(true);
  }
  function openEdit(cat: Category) {
    setEditing(cat);
    setModalOpen(true);
  }
  async function onDelete(cat: Category) {
    if (confirm(`"${cat.name}" kateqoriyası silinsin?`)) {
      await remove.mutateAsync(cat.id);
    }
  }

  const columns: Column<Category>[] = [
    { key: 'name', header: 'Ad', cell: (c) => <span className="font-medium">{c.name}</span> },
    { key: 'slug', header: 'Slug', cell: (c) => <Badge variant="secondary">{c.slug}</Badge> },
    { key: 'order', header: 'Sıra', cell: (c) => c.order },
    {
      key: 'actions',
      header: '',
      className: 'text-right',
      cell: (c) => (
        <div className="flex justify-end gap-1">
          <Button size="sm" variant="ghost" onClick={() => openEdit(c)}>
            <Pencil size={16} />
          </Button>
          <Button size="sm" variant="ghost" onClick={() => onDelete(c)}>
            <Trash2 size={16} className="text-danger" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Kateqoriyalar"
        breadcrumb={['Admin', 'Kateqoriyalar']}
        action={
          <Button onClick={openCreate}>
            <Plus size={16} /> Yeni
          </Button>
        }
      />

      <DataTable
        columns={columns}
        rows={data?.items ?? []}
        rowKey={(c) => c.id}
        loading={isLoading}
        empty="Hələ kateqoriya yoxdur"
      />

      {data && (
        <PaginationBar
          page={data.page}
          pageSize={data.pageSize}
          total={data.total}
          onPageChange={setPage}
        />
      )}

      <CategoryFormModal open={modalOpen} onClose={() => setModalOpen(false)} editing={editing} />
    </div>
  );
}
