import { useAuth } from '@/auth/auth-context';

export function DashboardPage() {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-2xl font-semibold">İcmal</h1>
      <p className="mt-2 text-neutral-600">
        Xoş gəldin, {user?.email}. Rol: <span className="font-medium">{user?.role}</span>
      </p>
      <p className="mt-6 text-sm text-neutral-500">
        Kontent idarəetmə səhifələri (İşlər, Xidmətlər, Mesajlar) növbəti addımda əlavə olunacaq.
      </p>
    </div>
  );
}

/** CRUD səhifələri üçün placeholder — növbəti addımda doldurulacaq */
export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="mt-4 rounded-lg border border-dashed border-neutral-300 p-6 text-sm text-neutral-500">
        Bu bölmə hələ hazırlanır.
      </p>
    </div>
  );
}
