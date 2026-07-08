/**
 * API müqavilə tipləri — apps/api ilə frontend arasında paylaşılır.
 * Error format standartı: docs/06-api-design.md.
 */

/** Standart xəta kodları — genişlənə bilər */
export type ApiErrorCode =
  | 'VALIDATION_ERROR'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'CONFLICT'
  | 'RATE_LIMITED'
  | 'INTERNAL';

export interface ApiErrorBody {
  ok: false;
  error: {
    code: ApiErrorCode;
    message: string;
    /** Sahə-səviyyəli validation xətaları (Zod-dan) */
    details?: Record<string, string[]>;
  };
}

export interface ApiSuccessBody<T> {
  ok: true;
  data: T;
}

export type ApiResponse<T> = ApiSuccessBody<T> | ApiErrorBody;

/** Səhifələnmiş listing cavabı */
export interface Paginated<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}
