import type { AdminRole, LoginInput } from '@aibaycan/shared';
import { createContext, use, useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { api, ApiClientError } from '@/lib/api';

export interface AdminUser {
  id: string;
  email: string;
  role: AdminRole;
}

interface AuthState {
  user: AdminUser | null;
  loading: boolean;
  login: (input: LoginInput) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Mount-da mövcud sessiyanı /me ilə yoxla
  useEffect(() => {
    let active = true;
    api
      .get<AdminUser>('/admin/auth/me')
      .then((u) => active && setUser(u))
      .catch(() => active && setUser(null))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  const login = useCallback(async (input: LoginInput) => {
    const u = await api.post<AdminUser>('/admin/auth/login', input);
    setUser(u);
  }, []);

  const logout = useCallback(async () => {
    await api.post('/admin/auth/logout').catch(() => {
      // logout həmişə lokal state-i təmizləməlidir
    });
    setUser(null);
  }, []);

  const value = useMemo<AuthState>(
    () => ({ user, loading, login, logout }),
    [user, loading, login, logout],
  );

  return <AuthContext value={value}>{children}</AuthContext>;
}

export function useAuth(): AuthState {
  const ctx = use(AuthContext);
  if (!ctx) {
    throw new Error('useAuth AuthProvider daxilində istifadə olunmalıdır');
  }
  return ctx;
}

export { ApiClientError };
