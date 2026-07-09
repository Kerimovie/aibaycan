import type {
  CaseStudyCreateInput,
  CaseStudyUpdateInput,
  CategoryCreateInput,
  CategoryUpdateInput,
  LeadUpdateInput,
  MediaUpdateInput,
  ServiceCreateInput,
  ServiceUpdateInput,
  TagCreateInput,
  TagUpdateInput,
} from '@aibaycan/shared';
import { createCrudHooks } from '@/lib/crud-hooks';
import type { CaseStudy, Category, Lead, MediaAsset, Service, Tag } from './types';

/** Hər entity üçün CRUD hooks (mərkəzi factory, docs/30 pattern) */
export const caseStudyHooks = createCrudHooks<
  CaseStudy,
  CaseStudyCreateInput,
  CaseStudyUpdateInput
>('case-studies');

export const categoryHooks = createCrudHooks<Category, CategoryCreateInput, CategoryUpdateInput>(
  'categories',
);

export const tagHooks = createCrudHooks<Tag, TagCreateInput, TagUpdateInput>('tags');

export const serviceHooks = createCrudHooks<Service, ServiceCreateInput, ServiceUpdateInput>(
  'services',
);

// Lead — create yox (public form), update yalnız status
export const leadHooks = createCrudHooks<Lead, never, LeadUpdateInput>('leads');

export const mediaHooks = createCrudHooks<MediaAsset, never, MediaUpdateInput>('media');
