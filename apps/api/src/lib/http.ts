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
 * P2002 (unique pozuntu) xətasından konflikt sahəsini çıxarır.
 *
 * Prisma 7 + driver adapter (@prisma/adapter-pg) `meta.target` DOLDURMUR;
 * sahə adı `meta.driverAdapterError.cause.constraint.fields`-dədir.
 * Köhnə format (`meta.target`) da dəstəklənir — hər ikisi yoxlanır.
 * Heç biri tapılmasa null (çağıran root xətası göstərir).
 */
function extractConflictField(error: unknown): string | null {
  const meta = (error as { meta?: unknown }).meta as
    | {
        target?: string[];
        driverAdapterError?: { cause?: { constraint?: { fields?: string[] } } };
      }
    | undefined;

  const adapterField = meta?.driverAdapterError?.cause?.constraint?.fields?.[0];
  if (adapterField) return adapterField;

  const legacyField = meta?.target?.[0];
  return legacyField ?? null;
}

/**
 * Prisma xətasını (known error code) HttpError-a çevirir — CRUD-da ümumi.
 * P2002 = unique pozuntu (slug təkrarı) → CONFLICT (sahə-səviyyəli, formada görünür)
 * P2025 = qeyd tapılmadı (update/delete) → NOT_FOUND
 * Digərləri → null (mərkəzi handler INTERNAL edir).
 */
export function toHttpError(error: unknown): HttpError | null {
  const code = (error as { code?: string }).code;

  if (code === 'P2002') {
    const field = extractConflictField(error);
    // Sahə tapılıbsa forma sahəsinə bağlanır; yoxsa yalnız ümumi mesaj
    // (details boş → applyApiError root xətası göstərir, mesaj itmir).
    return field
      ? new HttpError('CONFLICT', `Bu ${field} artıq istifadə olunub`, {
          [field]: ['artıq istifadə olunub'],
        })
      : new HttpError('CONFLICT', 'Bu dəyər artıq mövcuddur');
  }

  if (code === 'P2025') {
    return new HttpError('NOT_FOUND', 'Qeyd tapılmadı');
  }
  return null;
}
