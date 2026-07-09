import { Badge, Button, DataTable, PaginationBar, type Column } from '@aibaycan/ui';
import { Pencil, Plus, Star, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { caseStudyHooks } from '@/features/hooks';
import type { CaseStudy } from '@/features/types';
import { CaseStudyFormModal } from './case-study-form-modal';

export function CaseStudiesPage() {
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<CaseStudy | null>(null);

  const { data, isLoading } = caseStudyHooks.useList(page, 20);
  const remove = caseStudyHooks.useRemove();

  const columns: Column<CaseStudy>[] = [
    {
      key: 'title',
      header: 'Başlıq',
      cell: (cs) => (
        <div className="flex items-center gap-2">
          {cs.featured && <Star size={14} className="text-warning" fill="currentColor" />}
          <span className="font-medium">{cs.title}</span>
        </div>
      ),
    },
    {
      key: 'categories',
      header: 'Kateqoriyalar',
      cell: (cs) => (
        <div className="flex flex-wrap gap-1">
          {cs.categories.map((c) => (
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
      cell: (cs) =>
        cs.published ? <Badge variant="default">Dərc</Badge> : <Badge variant="secondary">Qaralama</Badge>,
    },
    {
      key: 'actions',
      header: '',
      className: 'text-right',
      cell: (cs) => (
        <div className="flex justify-end gap-1">
          <Button size="sm" variant="ghost" onClick={() => { setEditing(cs); setModalOpen(true); }}>
            <Pencil size={16} />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              if (confirm(`"${cs.title}" silinsin?`)) void remove.mutateAsync(cs.id);
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
        title="İşlər"
        breadcrumb={['Admin', 'İşlər']}
        action={
          <Button onClick={() => { setEditing(null); setModalOpen(true); }}>
            <Plus size={16} /> Yeni
          </Button>
        }
      />
      <DataTable
        columns={columns}
        rows={data?.items ?? []}
        rowKey={(cs) => cs.id}
        loading={isLoading}
        empty="Hələ iş yoxdur"
      />
      {data && (
        <PaginationBar page={data.page} pageSize={data.pageSize} total={data.total} onPageChange={setPage} />
      )}
      <CaseStudyFormModal open={modalOpen} onClose={() => setModalOpen(false)} editing={editing} />
    </div>
  );
}
