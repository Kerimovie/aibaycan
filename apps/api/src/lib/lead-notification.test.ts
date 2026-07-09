import { beforeAll, describe, expect, it } from 'vitest';

beforeAll(() => {
  process.env.NODE_ENV = 'test';
  process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test';
  process.env.JWT_SECRET = 'test-secret-at-least-32-characters-long!!';
});

describe('notifyNewLead', () => {
  it('email konfiq olmayanda səssiz keçir (lead bloklanmır)', async () => {
    // RESEND_API_KEY yoxdur → isEmailConfigured() false
    const { notifyNewLead } = await import('./lead-notification.js');
    await expect(
      notifyNewLead({ name: 'Test', email: 'a@b.com', message: 'salam' }),
    ).resolves.toBeUndefined();
  });
});

describe('escapeHtml (HTML injection qorunması)', () => {
  it('script tag-i escape edir', async () => {
    const { escapeHtml } = await import('./lead-notification.js');
    expect(escapeHtml('<script>alert(1)</script>')).toBe(
      '&lt;script&gt;alert(1)&lt;/script&gt;',
    );
  });

  it('dırnaq və ampersand escape edir', async () => {
    const { escapeHtml } = await import('./lead-notification.js');
    expect(escapeHtml(`a & "b" 'c'`)).toBe('a &amp; &quot;b&quot; &#39;c&#39;');
  });
});
