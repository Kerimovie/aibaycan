import type { AdminRole, LeadStatus, MediaType } from '@aibaycan/shared';

/**
 * Admin entity tipləri — API cavab formatı (Prisma-dan müstəqil, admin db-yə bağlı deyil).
 * Shared enum-lar yenidən istifadə olunur.
 */

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  order: number;
}

export interface Tag {
  id: string;
  slug: string;
  name: string;
}

export interface MediaAsset {
  id: string;
  url: string;
  key: string;
  type: MediaType;
  mimeType: string;
  fileName: string;
  alt: string | null;
  width: number | null;
  height: number | null;
  sizeBytes: number;
  createdAt: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string | null;
  published: boolean;
  order: number;
  caseStudies?: { id: string; title: string }[];
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  tagline: string | null;
  summary: string;
  clientName: string | null;
  projectYear: number | null;
  blocks: unknown[];
  coverImageId: string | null;
  coverImage: MediaAsset | null;
  liveUrl: string | null;
  repoUrl: string | null;
  featured: boolean;
  published: boolean;
  order: number;
  metaTitle: string | null;
  metaDescription: string | null;
  categories: Category[];
  tags: Tag[];
  services?: Service[];
  completedAt: string | null;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  interestedIn: string | null;
  budgetRange: string | null;
  message: string;
  source: string | null;
  pageUrl: string | null;
  status: LeadStatus;
  createdAt: string;
}

export interface AdminUser {
  id: string;
  email: string;
  name: string | null;
  role: AdminRole;
  active: boolean;
  lastLoginAt: string | null;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string | null;
  company: string | null;
  photoId: string | null;
  photo: MediaAsset | null;
  caseStudyId: string | null;
  caseStudy: { id: string; title: string } | null;
  published: boolean;
  order: number;
}

export interface Client {
  id: string;
  name: string;
  logoId: string | null;
  logo: MediaAsset | null;
  websiteUrl: string | null;
  published: boolean;
  order: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  photoId: string | null;
  photo: MediaAsset | null;
  socials: Record<string, string>;
  published: boolean;
  order: number;
}
