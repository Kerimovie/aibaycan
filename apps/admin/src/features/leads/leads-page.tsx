import type { LeadStatus } from '@aibaycan/shared';
import {
  DataTable,
  PaginationBar,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  type Column,
} from '@aibaycan/ui';
import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { leadHooks } from '@/features/hooks';
import type { Lead } from '@/features/types';

const STATUS_LABELS: Record<LeadStatus, string> = {
  NEW: 'Yeni',
  CONTACTED: 'Əlaqə saxlanıb',
  QUALIFIED: 'Uyğun',
  WON: 'Qazanıldı',
  LOST: 'İtirildi',
};

export function LeadsPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = leadHooks.useList(page, 20);
  const update = leadHooks.useUpdate();

  function changeStatus(lead: Lead, status: LeadStatus) {
    void update.mutateAsync({ id: lead.id, data: { status } });
  }

  const columns: Column<Lead>[] = [
    {
      key: 'name',
      header: 'Ad',
      cell: (l) => (
        <div>
          <p className="font-medium">{l.name}</p>
          <p className="text-xs text-text-tertiary">{l.email}</p>
        </div>
      ),
    },
    { key: 'company', header: 'Şirkət', cell: (l) => l.company ?? '—' },
    { key: 'interestedIn', header: 'Maraq', cell: (l) => l.interestedIn ?? '—' },
    {
      key: 'status',
      header: 'Status',
      cell: (l) => (
        <Select value={l.status} onValueChange={(v) => changeStatus(l, v as LeadStatus)}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(STATUS_LABELS).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ),
    },
  ];

  return (
    <div>
      <PageHeader title="Sorğular" breadcrumb={['Admin', 'Sorğular']} />
      <DataTable
        columns={columns}
        rows={data?.items ?? []}
        rowKey={(l) => l.id}
        loading={isLoading}
        empty="Hələ sorğu yoxdur"
      />
      {data && (
        <PaginationBar page={data.page} pageSize={data.pageSize} total={data.total} onPageChange={setPage} />
      )}
    </div>
  );
}
