import { paginate, type Paginated, type PaginationQuery } from '@aibaycan/shared';

/**
 * Prisma delegate-i üçün minimal struktur.
 * Prisma-nın generik findMany/count imzaları hər model üçün fərqli və çox dardır
 * (unknown qəbul etmir). Burada strukturca uyğun minimal interfeys — çağıran
 * tərəf delegate-i bura ötürəndə `asDelegate` ilə uyğunlaşdırır.
 */
export interface PrismaListDelegate {
  findMany: (args: Record<string, unknown>) => Promise<unknown[]>;
  count: (args: Record<string, unknown>) => Promise<number>;
}

/** Prisma model delegate-ini list interfeysinə uyğunlaşdırır (tip körpüsü). */
export function asDelegate(model: {
  findMany: (...args: never[]) => unknown;
  count: (...args: never[]) => unknown;
}): PrismaListDelegate {
  return model as unknown as PrismaListDelegate;
}

/**
 * Səhifələnmiş list — findMany + count paralel, Paginated<T> qaytarır.
 * `where`/`orderBy`/`include` çağıran tərəfindən verilir.
 */
export async function listPaginated<T>(
  model: PrismaListDelegate,
  { page, pageSize }: PaginationQuery,
  opts: { where?: unknown; orderBy?: unknown; include?: unknown } = {},
): Promise<Paginated<T>> {
  const [items, total] = await Promise.all([
    model.findMany({
      where: opts.where,
      orderBy: opts.orderBy,
      include: opts.include,
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    model.count({ where: opts.where }),
  ]);
  return paginate(items as T[], total, page, pageSize);
}
