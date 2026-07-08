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
