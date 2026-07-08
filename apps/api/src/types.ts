import type { AuthUser } from './middleware/auth.js';

/** Hono context dəyişənlərinin tip təsviri */
export interface AppVariables {
  user?: AuthUser;
  'valid:json'?: unknown;
  'valid:query'?: unknown;
  'valid:param'?: unknown;
}

export interface AppEnv {
  Variables: AppVariables;
}
