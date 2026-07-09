import type { ApiResponse, Blocks, Paginated } from '@aibaycan/shared';

const API_URL = process.env.API_URL ?? 'http://localhost:3001';

export interface PublicTaxonomy {
  id: string;
  slug: string;
  name: string;
}

/** İctimai case-study tipi — API cavab formatı (DB-dən müstəqil) */
export interface PublicCaseStudy {
  id: string;
  slug: string;
  title: string;
  tagline: string | null;
  summary: string;
  clientName: string | null;
  coverImage: { url: string; alt: string | null } | null;
  liveUrl: string | null;
  repoUrl: string | null;
  featured: boolean;
  completedAt: string | null;
  categories: PublicTaxonomy[];
  tags: PublicTaxonomy[];
}

/** Case-study detalı — əlavə olaraq blocks + services */
export interface PublicCaseStudyDetail extends PublicCaseStudy {
  blocks: Blocks;
  projectYear: number | null;
  services?: { id: string; slug: string; title: string }[];
}

export interface PublicService {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string | null;
}

/** Faza 3 — blog */
export interface PublicPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: { url: string; alt: string | null } | null;
  author: { id: string; name: string } | null;
  categories: PublicTaxonomy[];
  tags: PublicTaxonomy[];
  publishedAt: string | null;
}

export interface PublicPostDetail extends PublicPost {
  blocks: Blocks;
  metaTitle: string | null;
  metaDescription: string | null;
}

/** Faza 2 — sosial sübut + komanda */
export interface PublicTestimonial {
  id: string;
  quote: string;
  author: string;
  role: string | null;
  company: string | null;
  photo: { url: string; alt: string | null } | null;
}

export interface PublicClient {
  id: string;
  name: string;
  logo: { url: string; alt: string | null } | null;
  websiteUrl: string | null;
}

export interface PublicTeamMember {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  photo: { url: string; alt: string | null } | null;
  socials: Record<string, string>;
}

/**
 * apps/api-yə server-side fetch. Xəta baş verərsə null qaytarır
 * (səhifə çökmür — no silent crash, amma loglanır).
 */
async function apiGet<T>(path: string, revalidateSec = 60): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: revalidateSec },
    });
    if (!res.ok) {
      console.error(`[web] API ${path} → ${res.status}`);
      return null;
    }
    const body = (await res.json()) as ApiResponse<T>;
    return body.ok ? body.data : null;
  } catch (error) {
    console.error(`[web] API ${path} fetch xətası:`, error);
    return null;
  }
}

export function getCaseStudies(): Promise<Paginated<PublicCaseStudy> | null> {
  return apiGet<Paginated<PublicCaseStudy>>('/api/case-studies');
}

export function getCaseStudy(slug: string): Promise<PublicCaseStudyDetail | null> {
  return apiGet<PublicCaseStudyDetail>(`/api/case-studies/${slug}`);
}

export function getServices(): Promise<PublicService[] | null> {
  return apiGet<PublicService[]>('/api/services');
}

export function getPosts(): Promise<Paginated<PublicPost> | null> {
  return apiGet<Paginated<PublicPost>>('/api/posts');
}

export function getPost(slug: string): Promise<PublicPostDetail | null> {
  return apiGet<PublicPostDetail>(`/api/posts/${slug}`);
}

export function getTestimonials(): Promise<PublicTestimonial[] | null> {
  return apiGet<PublicTestimonial[]>('/api/testimonials');
}

export function getClients(): Promise<PublicClient[] | null> {
  return apiGet<PublicClient[]>('/api/clients');
}

export function getTeam(): Promise<PublicTeamMember[] | null> {
  return apiGet<PublicTeamMember[]>('/api/team');
}
