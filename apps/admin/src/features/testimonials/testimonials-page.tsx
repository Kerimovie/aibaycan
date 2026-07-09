import { Badge, Button, DataTable, PaginationBar, type Column } from '@aibaycan/ui';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { testimonialHooks } from '@/features/hooks';
import type { Testimonial } from '@/features/types';
import { TestimonialFormModal } from './testimonial-form-modal';

export function TestimonialsPage() {
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const { data, isLoading } = testimonialHooks.useList(page, 20);
  const remove = testimonialHooks.useRemove();

  const columns: Column<Testimonial>[] = [
    {
      key: 'author',
      header: 'Müəllif',
      cell: (t) => (
        <div>
          <p className="font-medium">{t.author}</p>
          {t.company && <p className="text-xs text-text-tertiary">{t.company}</p>}
        </div>
      ),
    },
    { key: 'quote', header: 'Rəy', cell: (t) => <span className="line-clamp-1 text-text-secondary">{t.quote}</span> },
    {
      key: 'published',
      header: 'Status',
      cell: (t) => (t.published ? <Badge variant="default">Dərc</Badge> : <Badge variant="secondary">Qaralama</Badge>),
    },
    {
      key: 'actions',
      header: '',
      className: 'text-right',
      cell: (t) => (
        <div className="flex justify-end gap-1">
          <Button size="sm" variant="ghost" onClick={() => { setEditing(t); setModalOpen(true); }}>
            <Pencil size={16} />
          </Button>
          <Button size="sm" variant="ghost" onClick={() => { if (confirm('Silinsin?')) void remove.mutateAsync(t.id); }}>
            <Trash2 size={16} className="text-danger" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Rəylər"
        breadcrumb={['Admin', 'Rəylər']}
        action={<Button onClick={() => { setEditing(null); setModalOpen(true); }}><Plus size={16} /> Yeni</Button>}
      />
      <DataTable columns={columns} rows={data?.items ?? []} rowKey={(t) => t.id} loading={isLoading} empty="Hələ rəy yoxdur" />
      {data && <PaginationBar page={data.page} pageSize={data.pageSize} total={data.total} onPageChange={setPage} />}
      <TestimonialFormModal open={modalOpen} onClose={() => setModalOpen(false)} editing={editing} />
    </div>
  );
}
