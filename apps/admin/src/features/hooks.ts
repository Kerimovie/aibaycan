import type {
  AdminUserCreateInput,
  AdminUserUpdateInput,
  CaseStudyCreateInput,
  CaseStudyUpdateInput,
  CategoryCreateInput,
  CategoryUpdateInput,
  ClientCreateInput,
  ClientUpdateInput,
  LeadUpdateInput,
  MediaCreateInput,
  MediaUpdateInput,
  PostCreateInput,
  PostUpdateInput,
  ServiceCreateInput,
  ServiceUpdateInput,
  TagCreateInput,
  TagUpdateInput,
  TeamMemberCreateInput,
  TeamMemberUpdateInput,
  TestimonialCreateInput,
  TestimonialUpdateInput,
} from '@aibaycan/shared';
import { createCrudHooks } from '@/lib/crud-hooks';
import type {
  AdminUser,
  CaseStudy,
  Category,
  Client,
  Lead,
  MediaAsset,
  Post,
  Service,
  Tag,
  TeamMember,
  Testimonial,
} from './types';

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

export const mediaHooks = createCrudHooks<MediaAsset, MediaCreateInput, MediaUpdateInput>('media');

export const adminUserHooks = createCrudHooks<AdminUser, AdminUserCreateInput, AdminUserUpdateInput>(
  'admins',
);

export const testimonialHooks = createCrudHooks<
  Testimonial,
  TestimonialCreateInput,
  TestimonialUpdateInput
>('testimonials');

export const clientHooks = createCrudHooks<Client, ClientCreateInput, ClientUpdateInput>('clients');

export const teamHooks = createCrudHooks<TeamMember, TeamMemberCreateInput, TeamMemberUpdateInput>(
  'team',
);

export const postHooks = createCrudHooks<Post, PostCreateInput, PostUpdateInput>('posts');
