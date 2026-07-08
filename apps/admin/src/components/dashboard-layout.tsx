import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '@/auth/auth-context';

const NAV = [
  { to: '/', label: 'İcmal', end: true },
  { to: '/projects', label: 'İşlər' },
  { to: '/services', label: 'Xidmətlər' },
  { to: '/messages', label: 'Mesajlar' },
];

export function DashboardLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <aside className="flex w-56 flex-col border-r border-neutral-200 bg-white">
        <div className="border-b border-neutral-200 px-5 py-4 font-semibold">aibaycan.az</div>
        <nav className="flex-1 space-y-1 p-3">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-sm ${
                  isActive
                    ? 'bg-brand text-white'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="border-t border-neutral-200 p-3 text-sm">
          <p className="mb-2 truncate text-neutral-500" title={user?.email}>
            {user?.email}
          </p>
          <button
            type="button"
            onClick={() => void logout()}
            className="w-full rounded-lg border border-neutral-300 py-1.5 text-neutral-700 hover:bg-neutral-100"
          >
            Çıxış
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
