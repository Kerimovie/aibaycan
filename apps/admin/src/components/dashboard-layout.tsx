import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Sidebar } from './sidebar';

/**
 * Admin shell — Ynex layout (bax docs/29):
 * dark sidebar (240px) + light header (60px) + məzmun sahəsi.
 */
export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-canvas">
      <Sidebar />
      <div className="ml-60 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
