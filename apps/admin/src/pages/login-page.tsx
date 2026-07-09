import { loginSchema } from '@aibaycan/shared';
import { Button, Input, Label, PasswordInput } from '@aibaycan/ui';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiClientError, useAuth } from '@/auth/auth-context';

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
            <span className="text-2xl font-bold text-text-primary">
              aibaycan<span className="text-primary">.az</span>
            </span>
          </div>

          <h1 className="text-xl font-semibold text-text-primary">Admin girişi</h1>
          <p className="mb-6 mt-1 text-sm text-text-tertiary">Davam etmək üçün daxil olun.</p>

          {error && (
            <p className="mb-4 rounded-md bg-danger/10 px-3 py-2 text-sm text-danger">{error}</p>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                placeholder="admin@aibaycan.az"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password">Parol</Label>
              <PasswordInput
                id="password"
                value={password}
                onChange={setPassword}
                autoComplete="current-password"
              />
            </div>

            <Button type="submit" disabled={submitting} className="w-full">
              {submitting ? 'Yoxlanılır…' : 'Daxil ol'}
            </Button>
          </form>
        </div>
      </div>

      {/* Sağ panel — gradient placeholder (sonra öz şəkil/brand ilə əvəz oluna bilər) */}
      <div className="relative hidden items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-700 to-sidebar-bg lg:flex">
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
