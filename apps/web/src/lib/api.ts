import type { ApiResponse, Paginated } from '@aibaycan/shared';

const API_URL = process.env.API_URL ?? 'http://localhost:3001';

/** İctimai portfolio tipləri — API cavab formatı (DB-dən müstəqil) */
export interface PublicProject {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  coverImage: string | null;
  images: string[];
  techStack: string[];
  liveUrl: string | null;
  repoUrl: string | null;
  featured: boolean;
  completedAt: string | null;
}

export interface PublicService {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string | null;
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

export function getProjects(): Promise<Paginated<PublicProject> | null> {
  return apiGet<Paginated<PublicProject>>('/api/projects');
}

export function getServices(): Promise<PublicService[] | null> {
  return apiGet<PublicService[]>('/api/services');
}
