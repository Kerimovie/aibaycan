import { Hono } from 'hono';
import { beforeEach, describe, expect, it } from 'vitest';
import { __resetRateLimitStore, rateLimit } from './rate-limit.js';

interface ErrorBody {
  ok: false;
  error: { code: string };
}

/** Verilmiş IP ilə test route-una sorğu atan mini-app. */
function makeApp(limit: number) {
  const app = new Hono();
  app.use('/x', rateLimit({ name: 'test', windowMs: 60_000, limit }));
  app.get('/x', (c) => c.text('ok'));
  return app;
}

function hit(app: Hono, ip: string) {
  return app.request('/x', { headers: { 'x-forwarded-for': ip } });
}

describe('rateLimit middleware', () => {
  beforeEach(() => __resetRateLimitStore());

  it('limitə qədər buraxır, aşanda 429 + RATE_LIMITED + Retry-After qaytarır', async () => {
    const limit = 3;
    const app = makeApp(limit);
    const ip = '203.0.113.10';

    for (let i = 0; i < limit; i++) {
      const res = await hit(app, ip);
      expect(res.status).toBe(200);
    }

    const blocked = await hit(app, ip);
    expect(blocked.status).toBe(429);
    const body = (await blocked.json()) as ErrorBody;
    expect(body.ok).toBe(false);
    expect(body.error.code).toBe('RATE_LIMITED');
    expect(blocked.headers.get('retry-after')).toBeTruthy();
  });

  it('X-RateLimit-Remaining azalır', async () => {
    const app = makeApp(5);
    const ip = '203.0.113.11';

    const first = await hit(app, ip);
    expect(first.headers.get('x-ratelimit-limit')).toBe('5');
    expect(first.headers.get('x-ratelimit-remaining')).toBe('4');

    const second = await hit(app, ip);
    expect(second.headers.get('x-ratelimit-remaining')).toBe('3');
  });

  it('fərqli IP-lər müstəqil sayılır', async () => {
    const limit = 2;
    const app = makeApp(limit);

    // IP A limitini bitir
    await hit(app, '10.0.0.1');
    await hit(app, '10.0.0.1');
    const blockedA = await hit(app, '10.0.0.1');
    expect(blockedA.status).toBe(429);

    // IP B hələ təzədir
    const freshB = await hit(app, '10.0.0.2');
    expect(freshB.status).toBe(200);
  });

  it('store reset-dən sonra sayğac sıfırlanır', async () => {
    const app = makeApp(1);
    const ip = '10.0.0.9';

    expect((await hit(app, ip)).status).toBe(200);
    expect((await hit(app, ip)).status).toBe(429);

    __resetRateLimitStore();
    expect((await hit(app, ip)).status).toBe(200);
  });
});
