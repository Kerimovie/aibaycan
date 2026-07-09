import type { Paginated } from '@aibaycan/shared';
import {
  useMutation,
  useQuery,
  useQueryClient,
  type UseMutationResult,
  type UseQueryResult,
} from '@tanstack/react-query';
import { api } from './api';

/**
 * Generik CRUD react-query hooks factory (CLAUDE.md #070 — mərkəzi, təkrar yox).
 * Hər entity `createCrudHooks('case-studies')` çağırır → list/get/create/update/delete.
 * Query key factory daxildir (invalidation üçün — inline string QADAĞAN).
 */
export function createCrudHooks<TItem, TCreate, TUpdate>(resource: string) {
  const basePath = `/admin/${resource}`;

  const keys = {
    all: [resource] as const,
    list: (page: number, pageSize: number) => [resource, 'list', page, pageSize] as const,
    detail: (id: string) => [resource, 'detail', id] as const,
  };

  function useList(page = 1, pageSize = 20): UseQueryResult<Paginated<TItem>> {
    return useQuery({
      queryKey: keys.list(page, pageSize),
      queryFn: () => api.get<Paginated<TItem>>(`${basePath}?page=${page}&pageSize=${pageSize}`),
    });
  }

  function useDetail(id: string | undefined): UseQueryResult<TItem> {
    return useQuery({
      queryKey: keys.detail(id ?? ''),
      queryFn: () => api.get<TItem>(`${basePath}/${id}`),
      enabled: Boolean(id),
    });
  }

  function useCreate(): UseMutationResult<TItem, Error, TCreate> {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: (data: TCreate) => api.post<TItem>(basePath, data),
      onSuccess: () => void qc.invalidateQueries({ queryKey: keys.all }),
    });
  }

  function useUpdate(): UseMutationResult<TItem, Error, { id: string; data: TUpdate }> {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: ({ id, data }) => api.patch<TItem>(`${basePath}/${id}`, data),
      onSuccess: () => void qc.invalidateQueries({ queryKey: keys.all }),
    });
  }

  function useRemove(): UseMutationResult<{ deleted: boolean }, Error, string> {
    const qc = useQueryClient();
    return useMutation({
      mutationFn: (id: string) => api.delete<{ deleted: boolean }>(`${basePath}/${id}`),
      onSuccess: () => void qc.invalidateQueries({ queryKey: keys.all }),
    });
  }

  return { keys, useList, useDetail, useCreate, useUpdate, useRemove };
}
