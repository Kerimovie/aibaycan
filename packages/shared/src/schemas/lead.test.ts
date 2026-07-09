import { describe, expect, it } from 'vitest';
import { leadCreateSchema } from './lead';

describe('leadCreateSchema', () => {
  const valid = {
    name: 'Emin',
    email: 'emin@example.com',
    message: 'Layihə haqqında danışmaq istəyirəm.',
  };

  it('minimal düzgün lead qəbul edir', () => {
    expect(leadCreateSchema.safeParse(valid).success).toBe(true);
  });

  it('zəngin sahələrlə qəbul edir', () => {
    const r = leadCreateSchema.safeParse({
      ...valid,
      phone: '+994501234567',
      company: 'Acme',
      interestedIn: 'Veb Development',
      budgetRange: '5000-10000',
      source: 'google',
      pageUrl: 'https://aibaycan.az/services',
    });
    expect(r.success).toBe(true);
  });

  it('yanlış email-i rədd edir', () => {
    expect(leadCreateSchema.safeParse({ ...valid, email: 'not-email' }).success).toBe(false);
  });

  it('honeypot (website) dolubsa rədd edir — bot qorunması', () => {
    const r = leadCreateSchema.safeParse({ ...valid, website: 'http://spam.com' });
    expect(r.success).toBe(false);
  });

  it('honeypot boş olsa qəbul edir', () => {
    expect(leadCreateSchema.safeParse({ ...valid, website: '' }).success).toBe(true);
  });
});
