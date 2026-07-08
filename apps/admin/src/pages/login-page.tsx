import { loginSchema } from '@aibaycan/shared';
import { Button, Input } from '@aibaycan/ui';
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
      setError(
        err instanceof ApiClientError ? err.message : 'Giriş alınmadı, yenidən cəhd edin',
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm rounded-xl border border-neutral-200 bg-white p-8 shadow-sm"
      >
        <h1 className="mb-6 text-xl font-semibold">Admin girişi</h1>

        {error && (
          <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>
        )}

        <div className="mb-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
          />
        </div>

        <div className="mb-6">
          <Input
            label="Parol"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>

        <Button type="submit" disabled={submitting} size="md" className="w-full">
          {submitting ? 'Yoxlanılır…' : 'Daxil ol'}
        </Button>
      </form>
    </div>
  );
}
