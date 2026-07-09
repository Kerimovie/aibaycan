import * as z from 'zod';

/**
 * CaseStudy (və gələcək Post) block-based content sxemləri.
 * DB-də `blocks` JSON kimi saxlanır; bu sxemlər boundary-də validasiya edir
 * (CLAUDE.md: hər boundary-də Zod). Bax docs/28, docs/09 #010.
 *
 * Hər block `type` diskriminatoru ilə fərqlənir (discriminated union).
 */

// Media referansı — block daxilində şəkil/video (MediaAsset id + snapshot url)
const blockMediaSchema = z.object({
  mediaId: z.string().min(1),
  url: z.url(),
  alt: z.string().nullish(),
});

export const richTextBlockSchema = z.object({
  type: z.literal('richText'),
  html: z.string(),
});

export const imageBlockSchema = z.object({
  type: z.literal('image'),
  media: blockMediaSchema,
  caption: z.string().nullish(),
});

export const galleryBlockSchema = z.object({
  type: z.literal('gallery'),
  items: z.array(blockMediaSchema).min(1),
});

export const videoBlockSchema = z.object({
  type: z.literal('video'),
  media: blockMediaSchema,
  poster: z.url().nullish(),
});

export const quoteBlockSchema = z.object({
  type: z.literal('quote'),
  text: z.string().min(1),
  author: z.string().nullish(),
  role: z.string().nullish(),
});

export const metricsBlockSchema = z.object({
  type: z.literal('metrics'),
  items: z
    .array(
      z.object({
        label: z.string().min(1),
        value: z.string().min(1),
      }),
    )
    .min(1),
});

export const twoColumnBlockSchema = z.object({
  type: z.literal('twoColumn'),
  left: z.string(), // rich html
  right: z.string(),
});

/** Bütün block tipləri — discriminated union (`type` üzrə) */
export const contentBlockSchema = z.discriminatedUnion('type', [
  richTextBlockSchema,
  imageBlockSchema,
  galleryBlockSchema,
  videoBlockSchema,
  quoteBlockSchema,
  metricsBlockSchema,
  twoColumnBlockSchema,
]);

export type ContentBlock = z.infer<typeof contentBlockSchema>;

/** Block massivi — CaseStudy.blocks / Post.blocks üçün */
export const blocksSchema = z.array(contentBlockSchema);
export type Blocks = z.infer<typeof blocksSchema>;
