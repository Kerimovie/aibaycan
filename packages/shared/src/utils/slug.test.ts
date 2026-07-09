import { describe, expect, it } from 'vitest';
import { slugify } from './slug';

describe('slugify', () => {
  it('sadə mətni slug-a çevirir', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('Azərbaycan hərflərini ASCII-yə çevirir', () => {
    expect(slugify('Şəhər Öğrənçi')).toBe('seher-ogrenci');
  });

  it('baş/son tireləri və artıq boşluqları təmizləyir', () => {
    expect(slugify('  --Salam!!  Dünya--  ')).toBe('salam-dunya');
  });

  it('yalnız qeyri-alfanumerik olan mətn üçün boş qaytarır', () => {
    expect(slugify('!!!')).toBe('');
  });
});
