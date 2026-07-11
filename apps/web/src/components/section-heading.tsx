/**
 * Bölmə başlığı — eyebrow (kiçik üst-etiket) + başlıq + opsional təsvir.
 * İctimai səhifələrdə tutarlı tipografik ritm üçün.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  const box = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl';
  return (
    <div className={`${box} ${className}`}>
      {eyebrow && (
        <p className="mb-2.5 text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-lg text-text-secondary">{description}</p>}
    </div>
  );
}
