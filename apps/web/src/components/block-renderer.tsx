import type { Blocks, ContentBlock } from '@aibaycan/shared';

/**
 * Case-study blocks render (server komponent — RSC-safe, docs/30).
 * Block tipləri: richText/image/gallery/video/quote/metrics/twoColumn.
 * richText HTML admin tərəfindən idarə olunur (sanitize backend/editor-də olmalıdır).
 */
function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'richText':
      return (
        <div
          className="prose max-w-none text-text-secondary"
          // eslint-disable-next-line react/no-danger -- kontent admin-idarəli rich text
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );

    case 'image':
      return (
        <figure>
          <img
            src={block.media.url}
            alt={block.media.alt ?? ''}
            className="w-full rounded-lg"
            loading="lazy"
          />
          {block.caption && (
            <figcaption className="mt-2 text-center text-sm text-text-tertiary">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'gallery':
      return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {block.items.map((item, i) => (
            <img
              key={i}
              src={item.url}
              alt={item.alt ?? ''}
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          ))}
        </div>
      );

    case 'video':
      return (
        <video src={block.media.url} poster={block.poster ?? undefined} controls className="w-full rounded-lg">
          <track kind="captions" />
        </video>
      );

    case 'quote':
      return (
        <blockquote className="border-l-4 border-primary pl-6 text-lg italic text-text-primary">
          <p>{block.text}</p>
          {block.author && (
            <footer className="mt-2 text-sm not-italic text-text-tertiary">
              — {block.author}
              {block.role && `, ${block.role}`}
            </footer>
          )}
        </blockquote>
      );

    case 'metrics':
      return (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {block.items.map((m, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-primary">{m.value}</p>
              <p className="mt-1 text-sm text-text-secondary">{m.label}</p>
            </div>
          ))}
        </div>
      );

    case 'twoColumn':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          <div
            className="prose max-w-none text-text-secondary"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: block.left }}
          />
          <div
            className="prose max-w-none text-text-secondary"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: block.right }}
          />
        </div>
      );

    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Blocks }) {
  return (
    <div className="space-y-8">
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </div>
  );
}
