import { describe, expect, it } from 'vitest';
import { contactMessageCreateSchema } from './contact.js';

describe('contactMessageCreateSchema', () => {
  it('düzgün mesajı qəbul edir', () => {
    const result = contactMessageCreateSchema.safeParse({
      name: 'Emin',
      email: 'emin@example.com',
      message: 'Salam, layihə haqqında danışmaq istəyirəm.',
    });
    expect(result.success).toBe(true);
  });

  it('yanlış email-i rədd edir', () => {
    const result = contactMessageCreateSchema.safeParse({
      name: 'Emin',
      email: 'not-an-email',
      message: 'test',
    });
    expect(result.success).toBe(false);
  });

  it('boş adı rədd edir', () => {
    const result = contactMessageCreateSchema.safeParse({
      name: '   ',
      email: 'emin@example.com',
      message: 'test',
    });
    expect(result.success).toBe(false);
  });
});
