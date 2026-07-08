import type { AdminRole } from '@aibaycan/shared';
import { sign, verify } from 'hono/jwt';
import { env } from '../env.js';

const SEVEN_DAYS_SEC = 7 * 24 * 60 * 60;

export interface AuthTokenPayload {
  sub: string; // AdminUser id
  email: string;
  role: AdminRole;
  exp: number;
  [key: string]: unknown; // hono/jwt JWTPayload uyğunluğu üçün
}

export async function signAuthToken(input: {
  sub: string;
  email: string;
  role: AdminRole;
}): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + SEVEN_DAYS_SEC;
  return sign({ ...input, exp }, env.JWT_SECRET, 'HS256');
}

export async function verifyAuthToken(token: string): Promise<AuthTokenPayload | null> {
  try {
    const payload = await verify(token, env.JWT_SECRET, 'HS256');
    return payload as AuthTokenPayload;
  } catch {
    return null;
  }
}

export const AUTH_COOKIE = 'aibaycan_admin';
export const AUTH_COOKIE_MAX_AGE = SEVEN_DAYS_SEC;
