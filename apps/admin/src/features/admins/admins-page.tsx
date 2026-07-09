import { Badge, Button, DataTable, PaginationBar, type Column } from '@aibaycan/ui';
import { Pencil, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/auth/auth-context';
import { PageHeader } from '@/components/page-header';
import { adminUserHooks } from '@/features/hooks';
import type { AdminUser } from '@/features/types';
import { AdminFormModal } from './admin-form-modal';

export function AdminsPage() {
  const { user: current } = useAuth();
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<AdminUser | null>(null);

  const { data, isLoading } = adminUserHooks.useList(page, 20);
  const remove = adminUserHooks.useRemove();

  const columns: Column<AdminUser>[] = [
    {
      key: 'email',
      header: 'Email',
      cell: (u) => (
        <div>
          <p className="font-medium">{u.email}</p>
          {u.name && <p className="text-xs text-text-tertiary">{u.name}</p>}
        </div>
      ),
    },
    {
      key: 'role',
      header: 'Rol',
      cell: (u) => (
        <Badge variant={u.role === 'ADMIN' ? 'default' : 'secondary'}>
          {u.role === 'ADMIN' ? 'Admin' : 'Redaktor'}
        </Badge>
      ),
    },
    {
      key: 'active',
      header: 'Status',
      cell: (u) =>
        u.active ? <Badge variant="default">Aktiv</Badge> : <Badge variant="secondary">Deaktiv</Badge>,
    },
    {
      key: 'actions',
      header: '',
      className: 'text-right',
      cell: (u) => (
        <div className="flex justify-end gap-1">
          <Button size="sm" variant="ghost" onClick={() => { setEditing(u); setModalOpen(true); }}>
            <Pencil size={16} />
          </Button>
          {/* Öz hesabını silmə düyməsi göstərilmir */}
          {u.id !== current?.id && (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => {
                if (confirm(`"${u.email}" admini silinsin?`)) void remove.mutateAsync(u.id);
              }}
            >
              <Trash2 size={16} className="text-danger" />
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div>
      <PageHeader
        title="Adminlər"
        breadcrumb={['Admin', 'Adminlər']}
        action={
          <Button onClick={() => { setEditing(null); setModalOpen(true); }}>
            <Plus size={16} /> Yeni
          </Button>
        }
      />
      <DataTable
        columns={columns}
        rows={data?.items ?? []}
        rowKey={(u) => u.id}
        loading={isLoading}
        empty="Admin yoxdur"
      />
      {data && (
        <PaginationBar page={data.page} pageSize={data.pageSize} total={data.total} onPageChange={setPage} />
      )}
      <AdminFormModal open={modalOpen} onClose={() => setModalOpen(false)} editing={editing} />
    </div>
  );
}
