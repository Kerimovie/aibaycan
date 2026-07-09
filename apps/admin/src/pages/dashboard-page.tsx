import { Box, BoxBody } from '@aibaycan/ui';
import { Briefcase, Inbox, Wrench, Image } from 'lucide-react';
import { useAuth } from '@/auth/auth-context';
import { PageHeader } from '@/components/page-header';

const STATS = [
  { label: 'İşlər', value: '—', icon: Briefcase, tone: 'text-brand bg-brand-light' },
  { label: 'Xidmətlər', value: '—', icon: Wrench, tone: 'text-info bg-info/15' },
  { label: 'Sorğular', value: '—', icon: Inbox, tone: 'text-success bg-success/15' },
  { label: 'Media', value: '—', icon: Image, tone: 'text-warning bg-warning/15' },
];

export function DashboardPage() {
  const { user } = useAuth();

  return (
    <div>
      <PageHeader title="İcmal" breadcrumb={['Admin', 'İcmal']} />

      <p className="mb-6 text-admin-muted">
        Xoş gəldin, <span className="font-medium text-admin-text">{user?.email}</span>.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <Box key={stat.label}>
              <BoxBody className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.tone}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-sm text-admin-muted">{stat.label}</p>
                  <p className="text-2xl font-semibold text-admin-text">{stat.value}</p>
                </div>
              </BoxBody>
            </Box>
          );
        })}
      </div>

      <p className="mt-8 text-sm text-admin-muted">
        Statistika və kontent idarəetməsi Faza 1 CRUD tətbiqi ilə aktivləşəcək (bax docs/28).
      </p>
    </div>
  );
}

/** CRUD səhifələri üçün placeholder — Faza 1-də doldurulacaq */
export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div>
      <PageHeader title={title} breadcrumb={['Admin', title]} />
      <Box>
        <BoxBody>
          <p className="rounded-lg border border-dashed border-admin-border p-8 text-center text-sm text-admin-muted">
            Bu bölmə Faza 1 tətbiqi ilə hazırlanacaq.
          </p>
        </BoxBody>
      </Box>
    </div>
  );
}
