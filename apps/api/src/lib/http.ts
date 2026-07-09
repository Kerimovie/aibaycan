import type { ApiErrorCode } from '@aibaycan/shared';
import { err } from '@aibaycan/shared';
import type { Context } from 'hono';
import type { ContentfulStatusCode } from 'hono/utils/http-status';

/** Xəta kodu → HTTP status xəritəsi (docs/06) */
const STATUS: Record<ApiErrorCode, ContentfulStatusCode> = {
  VALIDATION_ERROR: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  RATE_LIMITED: 429,
  INTERNAL: 500,
};

/** Standart xəta cavabı — envelope + düzgün status */
export function sendError(
  c: Context,
  code: ApiErrorCode,
  message: string,
  details?: Record<string, string[]>,
) {
  return c.json(err(code, message, details), STATUS[code]);
}

/**
 * Bilinən domain xətası — route-lardan atılır, mərkəzi handler tutur.
 * Bu, silent catch yox: struktur xəta + mərkəzdə loglanma (CLAUDE.md).
 */
export class HttpError extends Error {
  constructor(
    readonly code: ApiErrorCode,
    message: string,
    readonly details?: Record<string, string[]>,
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

/**
 * Prisma xətasını (known error code) HttpError-a çevirir — CRUD-da ümumi.
 * P2002 = unique pozuntu (slug təkrarı) → CONFLICT
 * P2025 = qeyd tapılmadı (update/delete) → NOT_FOUND
 * Digərləri → null (mərkəzi handler INTERNAL edir).
 */
export function toHttpError(error: unknown): HttpError | null {
  const code = (error as { code?: string }).code;
  if (code === 'P2002') {
    const target = (error as { meta?: { target?: string[] } }).meta?.target;
    const field = target?.[0] ?? 'dəyər';
    return new HttpError('CONFLICT', `Bu ${field} artıq mövcuddur`, {
      [field]: ['artıq istifadə olunub'],
    });
  }
  if (code === 'P2025') {
    return new HttpError('NOT_FOUND', 'Qeyd tapılmadı');
  }
  return null;
}
