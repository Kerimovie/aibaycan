import { LogOut, Search } from 'lucide-react';
import { useAuth } from '@/auth/auth-context';

/**
 * Ynex-stili light header (60px). Sol: axtarış (placeholder).
 * Sağ: istifadəçi + logout (bax docs/29).
 */
export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-20 flex h-[60px] items-center justify-between border-b border-admin-border bg-white px-6">
      <div className="flex items-center gap-2 text-admin-muted">
        <Search size={18} />
        <input
          type="search"
          placeholder="Axtar…"
          className="w-48 bg-transparent text-sm outline-none placeholder:text-admin-muted"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-medium text-admin-text">{user?.email}</p>
          <p className="text-xs text-admin-muted">{user?.role}</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-light text-sm font-semibold text-brand">
          {user?.email?.[0]?.toUpperCase() ?? 'A'}
        </div>
        <button
          type="button"
          onClick={() => void logout()}
          title="Çıxış"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-admin-muted transition-colors hover:bg-neutral-100 hover:text-danger"
        >
          <LogOut size={18} />
        </button>
      </div>
    </header>
  );
}
