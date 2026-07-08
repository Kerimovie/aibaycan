import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './auth-context';

/**
 * Auth guard — sessiya yoxlanana qədər gözləyir,
 * user yoxdursa /login-ə yönləndirir.
 */
export function RequireAuth() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-neutral-500">
        Yüklənir…
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
