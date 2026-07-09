import { describe, expect, it } from 'vitest';
import { blocksSchema, contentBlockSchema } from './blocks';

describe('contentBlockSchema (discriminated union)', () => {
  it('düzgün richText block qəbul edir', () => {
    const r = contentBlockSchema.safeParse({ type: 'richText', html: '<p>test</p>' });
    expect(r.success).toBe(true);
  });

  it('düzgün quote block qəbul edir', () => {
    const r = contentBlockSchema.safeParse({ type: 'quote', text: 'Salam', author: 'Emin' });
    expect(r.success).toBe(true);
  });

  it('naməlum block tipini rədd edir', () => {
    const r = contentBlockSchema.safeParse({ type: 'unknown', foo: 'bar' });
    expect(r.success).toBe(false);
  });

  it('image block-da media tələb edir', () => {
    const r = contentBlockSchema.safeParse({ type: 'image' });
    expect(r.success).toBe(false);
  });
});

describe('blocksSchema (massiv)', () => {
  it('qarışıq block massivini qəbul edir', () => {
    const r = blocksSchema.safeParse([
      { type: 'richText', html: '<p>a</p>' },
      { type: 'quote', text: 'b' },
      { type: 'metrics', items: [{ label: 'Trafik', value: '+40%' }] },
    ]);
    expect(r.success).toBe(true);
  });

  it('boş massivi qəbul edir', () => {
    expect(blocksSchema.safeParse([]).success).toBe(true);
  });
});
