import argon2 from 'argon2';

/** argon2id ilə hash — docs/05 */
export function hashPassword(plain: string): Promise<string> {
  return argon2.hash(plain, { type: argon2.argon2id });
}

export function verifyPassword(hash: string, plain: string): Promise<boolean> {
  return argon2.verify(hash, plain).catch(() => false);
}

/**
 * User tapılmadıqda belə çağırılan "boş" hash müqayisəsi —
 * timing attack ilə user enumeration-un qarşısını alır (docs/05).
 * Sabit dəyər əvəzinə real formatda dummy hash saxlayırıq.
 */
const DUMMY_HASH =
  '$argon2id$v=19$m=65536,t=3,p=4$c29tZXNhbHRzb21lc2FsdA$3s8m2Yl4wYFhY0qJ8m0m6Q '.trim();

export async function fakeVerify(plain: string): Promise<void> {
  await argon2.verify(DUMMY_HASH, plain).catch(() => false);
}
