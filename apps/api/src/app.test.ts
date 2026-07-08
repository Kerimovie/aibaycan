import { beforeAll, describe, expect, it } from 'vitest';

interface ErrorBody {
  ok: false;
  error: { code: string; details?: Record<string, string[]> };
}

// Test env — app import olunmadan ƏVVƏL təyin olunmalıdır (env.ts fail-fast)
beforeAll(() => {
  process.env.NODE_ENV = 'test';
  process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test';
  process.env.JWT_SECRET = 'test-secret-at-least-32-characters-long!!';
});

describe('app', () => {
  it('health endpoint 200 + envelope qaytarır', async () => {
    const { createApp } = await import('./app.js');
    const app = createApp();
    const res = await app.request('/health');
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body).toEqual({ ok: true, data: { status: 'up' } });
  });

  it('naməlum route üçün 404 envelope qaytarır', async () => {
    const { createApp } = await import('./app.js');
    const app = createApp();
    const res = await app.request('/api/yoxdur');
    expect(res.status).toBe(404);
    const body = (await res.json()) as ErrorBody;
    expect(body.ok).toBe(false);
    expect(body.error.code).toBe('NOT_FOUND');
  });

  it('auth-suz /me 401 qaytarır', async () => {
    const { createApp } = await import('./app.js');
    const app = createApp();
    const res = await app.request('/api/admin/auth/me');
    expect(res.status).toBe(401);
    const body = (await res.json()) as ErrorBody;
    expect(body.error.code).toBe('UNAUTHORIZED');
  });

  it('yanlış login body üçün 400 VALIDATION_ERROR qaytarır', async () => {
    const { createApp } = await import('./app.js');
    const app = createApp();
    const res = await app.request('/api/admin/auth/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: 'not-email', password: '123' }),
    });
    expect(res.status).toBe(400);
    const body = (await res.json()) as ErrorBody;
    expect(body.error.code).toBe('VALIDATION_ERROR');
    expect(body.error.details).toBeDefined();
  });
});
