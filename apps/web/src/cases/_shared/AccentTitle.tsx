export interface AccentTitleProps {
  title: string;
  /** Exact substring of `title` to highlight with the accent colour. Falls back to a plain title. */
  accent?: string;
  /** `lang` of the accent span, e.g. `en` for an English product name, so az uppercase keeps an undotted I. */
  accentLang?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  id?: string;
  className?: string;
}

/** Port of Atlas `cinematic/AccentTitle.astro`. */
export function AccentTitle({ title, accent, accentLang, as: Tag = 'h2', id, className = 'cine-title' }: AccentTitleProps) {
  const at = accent ? title.indexOf(accent) : -1;
  const before = at >= 0 ? title.slice(0, at) : title;
  const after = at >= 0 && accent ? title.slice(at + accent.length) : '';
  return (
    <Tag id={id} className={className}>
      {before}
      {at >= 0 && (
        <span className="cine-accent" lang={accentLang}>
          {accent}
        </span>
      )}
      {after}
    </Tag>
  );
}
