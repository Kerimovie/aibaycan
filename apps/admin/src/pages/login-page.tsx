import { loginSchema } from '@aibaycan/shared';
import { Button, Input } from '@aibaycan/ui';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiClientError, useAuth } from '@/auth/auth-context';

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    // Client-side validation (server-lə eyni shared sxem)
    const parsed = loginSchema.safeParse({ email, password });
    if (!parsed.success) {
      setError('Email və parolu düzgün daxil edin');
      return;
    }

    setSubmitting(true);
    try {
      await login(parsed.data);
      navigate('/', { replace: true });
    } catch (err) {
      setError(err instanceof ApiClientError ? err.message : 'Giriş alınmadı, yenidən cəhd edin');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Sol panel — login formu */}
      <div className="flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <span className="text-2xl font-bold text-admin-text">
              aibaycan<span className="text-brand">.az</span>
            </span>
          </div>

          <h1 className="text-xl font-semibold text-admin-text">Admin girişi</h1>
          <p className="mb-6 mt-1 text-sm text-admin-muted">Davam etmək üçün daxil olun.</p>

          {error && (
            <p className="mb-4 rounded-md bg-danger/10 px-3 py-2 text-sm text-danger">{error}</p>
          )}

          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                placeholder="admin@aibaycan.az"
              />
            </div>

            <div className="mb-6">
              <label className="mb-1.5 block text-sm font-medium text-admin-text">Parol</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full rounded-md border border-admin-border px-3.5 py-2 pr-10 text-sm outline-none transition-colors placeholder:text-admin-muted focus:border-brand"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-admin-muted hover:text-admin-text"
                  aria-label={showPassword ? 'Parolu gizlət' : 'Parolu göstər'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Button type="submit" disabled={submitting} className="w-full">
              {submitting ? 'Yoxlanılır…' : 'Daxil ol'}
            </Button>
          </form>
        </div>
      </div>

      {/* Sağ panel — gradient placeholder (sonra öz şəkil/brand ilə əvəz oluna bilər) */}
      <div className="relative hidden items-center justify-center overflow-hidden bg-gradient-to-br from-brand via-brand-dark to-admin-sidebar lg:flex">
        <div className="max-w-md px-12 text-center text-white">
          <h2 className="text-3xl font-bold">aibaycan.az</h2>
          <p className="mt-4 text-white/80">
            İşlərinizi və xidmətlərinizi idarə edin — case-study-lər, kontent və müştəri sorğuları
            bir yerdə.
          </p>
        </div>
      </div>
    </div>
  );
}
