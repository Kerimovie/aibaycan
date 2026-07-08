import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/prisma/client.js';

/**
 * Prisma 7 üçün driver adapter (@prisma/adapter-pg) məcburidir.
 * `DATABASE_URL` env-dən oxunur — konfiqurasiya adapter səviyyəsində olur.
 *
 * Dev-də hot-reload zamanı çoxlu client yaranmasının qarşısını almaq üçün
 * global singleton pattern istifadə edirik.
 */
const createPrismaClient = (): PrismaClient => {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL təyin olunmayıb — packages/db client yaradıla bilməz');
  }
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
};

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma: PrismaClient = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
