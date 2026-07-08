import type { ApiErrorBody, ApiErrorCode, ApiSuccessBody, Paginated } from '../types/api.js';

export function ok<T>(data: T): ApiSuccessBody<T> {
  return { ok: true, data };
}

export function err(
  code: ApiErrorCode,
  message: string,
  details?: Record<string, string[]>,
): ApiErrorBody {
  return { ok: false, error: { code, message, ...(details ? { details } : {}) } };
}

export function paginate<T>(
  items: T[],
  total: number,
  page: number,
  pageSize: number,
): Paginated<T> {
  return {
    items,
    page,
    pageSize,
    total,
    totalPages: Math.max(1, Math.ceil(total / pageSize)),
  };
}
