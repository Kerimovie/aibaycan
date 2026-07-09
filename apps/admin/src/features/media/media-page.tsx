import { Badge, Button, DataTable, PaginationBar, type Column } from '@aibaycan/ui';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { mediaHooks } from '@/features/hooks';
import type { MediaAsset } from '@/features/types';

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function MediaPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = mediaHooks.useList(page, 20);
  const remove = mediaHooks.useRemove();

  const columns: Column<MediaAsset>[] = [
    {
      key: 'preview',
      header: '',
      cell: (m) =>
        m.type === 'IMAGE' ? (
          <img src={m.url} alt={m.alt ?? m.fileName} className="h-10 w-10 rounded object-cover" />
        ) : (
          <Badge variant="secondary">{m.type}</Badge>
        ),
    },
    { key: 'fileName', header: 'Fayl', cell: (m) => <span className="font-medium">{m.fileName}</span> },
    { key: 'alt', header: 'Alt mətn', cell: (m) => m.alt ?? '—' },
    { key: 'size', header: 'Ölçü', cell: (m) => formatBytes(m.sizeBytes) },
    {
      key: 'actions',
      header: '',
      className: 'text-right',
      cell: (m) => (
        <Button
          size="sm"
          variant="ghost"
          onClick={() => {
            if (confirm(`"${m.fileName}" silinsin?`)) void remove.mutateAsync(m.id);
          }}
        >
          <Trash2 size={16} className="text-danger" />
        </Button>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Media"
        breadcrumb={['Admin', 'Media']}
        action={<span className="text-sm text-text-tertiary">Yükləmə tezliklə (R2)</span>}
      />
      <DataTable
        columns={columns}
        rows={data?.items ?? []}
        rowKey={(m) => m.id}
        loading={isLoading}
        empty="Hələ media yoxdur"
      />
      {data && (
        <PaginationBar page={data.page} pageSize={data.pageSize} total={data.total} onPageChange={setPage} />
      )}
    </div>
  );
}
