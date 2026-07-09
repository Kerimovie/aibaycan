import { Card, CardContent } from '@aibaycan/ui';
import { Briefcase, Inbox, Wrench, Image } from 'lucide-react';
import { useAuth } from '@/auth/auth-context';
import { PageHeader } from '@/components/page-header';

const STATS = [
  { label: 'İşlər', value: '—', icon: Briefcase, tone: 'text-primary bg-primary-50' },
  { label: 'Xidmətlər', value: '—', icon: Wrench, tone: 'text-info bg-info/15' },
  { label: 'Sorğular', value: '—', icon: Inbox, tone: 'text-success bg-success/15' },
  { label: 'Media', value: '—', icon: Image, tone: 'text-warning bg-warning/15' },
];

export function DashboardPage() {
  const { user } = useAuth();

  return (
    <div>
      <PageHeader title="İcmal" breadcrumb={['Admin', 'İcmal']} />

      <p className="mb-6 text-text-tertiary">
        Xoş gəldin, <span className="font-medium text-text-primary">{user?.email}</span>.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="flex items-center gap-4 p-5">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.tone}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-sm text-text-tertiary">{stat.label}</p>
                  <p className="text-2xl font-semibold text-text-primary">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <p className="mt-8 text-sm text-text-tertiary">
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
      <Card>
        <CardContent className="p-5">
          <p className="rounded-lg border border-dashed border-border p-8 text-center text-sm text-text-tertiary">
            Bu bölmə Faza 1 tətbiqi ilə hazırlanacaq.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
