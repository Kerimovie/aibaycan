import { Badge, Button, DataTable, PaginationBar, type Column } from '@aibaycan/ui';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { postHooks } from '@/features/hooks';
import type { Post } from '@/features/types';
import { PostFormModal } from './post-form-modal';

export function PostsPage() {
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Post | null>(null);

  const { data, isLoading } = postHooks.useList(page, 20);
  const remove = postHooks.useRemove();

  const columns: Column<Post>[] = [
    {
      key: 'title',
      header: 'Başlıq',
      cell: (p) => (
        <div>
          <p className="font-medium">{p.title}</p>
          <p className="line-clamp-1 text-xs text-text-tertiary">{p.excerpt}</p>
        </div>
      ),
    },
    {
      key: 'categories',
      header: 'Kateqoriyalar',
      cell: (p) => (
        <div className="flex flex-wrap gap-1">
          {p.categories.map((c) => (
            <Badge key={c.id} variant="secondary">
              {c.name}
            </Badge>
          ))}
        </div>
      ),
    },
    {
      key: 'published',
      header: 'Status',
      cell: (p) =>
        p.published ? <Badge variant="default">Dərc</Badge> : <Badge variant="secondary">Qaralama</Badge>,
    },
    {
      key: 'actions',
      header: '',
      className: 'text-right',
      cell: (p) => (
        <div className="flex justify-end gap-1">
          <Button size="sm" variant="ghost" onClick={() => { setEditing(p); setModalOpen(true); }}>
            <Pencil size={16} />
          </Button>
          <Button size="sm" variant="ghost" onClick={() => { if (confirm(`"${p.title}" silinsin?`)) void remove.mutateAsync(p.id); }}>
            <Trash2 size={16} className="text-danger" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Bloq"
        breadcrumb={['Admin', 'Bloq']}
        action={<Button onClick={() => { setEditing(null); setModalOpen(true); }}><Plus size={16} /> Yeni</Button>}
      />
      <DataTable columns={columns} rows={data?.items ?? []} rowKey={(p) => p.id} loading={isLoading} empty="Hələ məqalə yoxdur" />
      {data && <PaginationBar page={data.page} pageSize={data.pageSize} total={data.total} onPageChange={setPage} />}
      <PostFormModal open={modalOpen} onClose={() => setModalOpen(false)} editing={editing} />
    </div>
  );
}
