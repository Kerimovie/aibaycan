import { getConnInfo } from '@hono/node-server/conninfo';
import type { Context, MiddlewareHandler } from 'hono';
import { sendError } from './http.js';

/**
 * Sadə in-memory fixed-window rate-limiter (docs/16 — brute-force / spam qorunması).
 *
 * MİQYAS QEYDİ: yaddaşdaxili store TƏK-instansiya self-host üçündür (docs/03 YAGNI).
 * Çox-instansiyalı deploy-a keçəndə paylaşılan store (Redis) lazım olacaq — o vaxta
 * qədər bir Node prosesi kifayətdir. Store restart-da sıfırlanır (qəbul edilən tradeoff).
 */

interface RateLimitOptions {
  /** Bucket ad-məkanı (endpoint-lər ayrı sayılsın): məs. 'login', 'leads'. */
  name: string;
  /** Pəncərə müddəti (ms). */
  windowMs: number;
  /** Pəncərədə icazəli maksimum sorğu sayı. */
  limit: number;
}

interface Bucket {
  count: number;
  resetAt: number;
}

const store = new Map<string, Bucket>();

// Vaxtı keçmiş bucket-ları təmizlə (yaddaş sonsuz böyüməsin) — timer yox, opportunistik.
let lastSweep = Date.now();
const SWEEP_INTERVAL_MS = 60_000;

function sweep(now: number): void {
  if (now - lastSweep < SWEEP_INTERVAL_MS) return;
  lastSweep = now;
  for (const [key, bucket] of store) {
    if (bucket.resetAt <= now) store.delete(key);
  }
}

/**
 * Client IP-ni müəyyən et. Prod-da app reverse-proxy (nginx) arxasındadır —
 * əsl IP `x-forwarded-for`-dadır (docs/14). Birbaşa bağlantıda conninfo-ya düşürük.
 */
function clientIp(c: Context): string {
  const forwarded = c.req.header('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]!.trim();

  const realIp = c.req.header('x-real-ip');
  if (realIp) return realIp.trim();

  try {
    const address = getConnInfo(c).remote.address;
    if (address) return address;
  } catch {
    // conninfo yalnız node-server runtime-də mövcuddur (test app.request()-də yox).
    // Bu, IP həlli üçün fallback-dir — səssiz udulmuş domain xətası deyil.
  }

  return 'unknown';
}

/**
 * Endpoint üçün rate-limit middleware yaradır. Pəncərədə `limit` aşılsa 429 +
 * `Retry-After` qaytarır (RATE_LIMITED envelope). Hər cavaba `X-RateLimit-*` başlıqları.
 */
export function rateLimit(options: RateLimitOptions): MiddlewareHandler {
  const { name, windowMs, limit } = options;

  return async (c, next) => {
    // E2E/test escape-hatch: fixture hər test üçün yenidən login edir — limiter
    // axını süni sındırmasın deyə söndürülür. Default AKTİV (prod-da təyin olunmur).
    if (process.env.RATE_LIMIT_DISABLED === 'true') return next();

    const now = Date.now();
    sweep(now);

    const key = `${name}:${clientIp(c)}`;
    let bucket = store.get(key);
    if (!bucket || bucket.resetAt <= now) {
      bucket = { count: 0, resetAt: now + windowMs };
      store.set(key, bucket);
    }
    bucket.count += 1;

    c.header('X-RateLimit-Limit', String(limit));
    c.header('X-RateLimit-Remaining', String(Math.max(0, limit - bucket.count)));

    if (bucket.count > limit) {
      const retryAfterSec = Math.ceil((bucket.resetAt - now) / 1000);
      c.header('Retry-After', String(retryAfterSec));
      return sendError(c, 'RATE_LIMITED', 'Çox sayda cəhd — bir az sonra yenidən yoxlayın');
    }

    await next();
  };
}

/** Test üçün store-u sıfırlayır (yalnız test-lərdə istifadə olunur). */
export function __resetRateLimitStore(): void {
  store.clear();
  lastSweep = Date.now();
}
