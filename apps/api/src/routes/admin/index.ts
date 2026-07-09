import { Hono } from 'hono';
import { authMiddleware } from '../../middleware/auth.js';
import type { AppEnv } from '../../types.js';
import { adminCaseStudyRoutes } from './case-studies.js';
import { adminCategoryRoutes } from './categories.js';
import { adminLeadRoutes } from './leads.js';
import { adminMediaRoutes } from './media.js';
import { adminServiceRoutes } from './services.js';
import { adminTagRoutes } from './tags.js';

/**
 * Admin CRUD route-ları — hamısı authMiddleware arxasında.
 * Auth route-ları (login/logout/me) ayrıca (routes/auth.ts).
 */
export const adminRoutes = new Hono<AppEnv>();

adminRoutes.use('*', authMiddleware);

adminRoutes.route('/case-studies', adminCaseStudyRoutes);
adminRoutes.route('/categories', adminCategoryRoutes);
adminRoutes.route('/tags', adminTagRoutes);
adminRoutes.route('/services', adminServiceRoutes);
adminRoutes.route('/leads', adminLeadRoutes);
adminRoutes.route('/media', adminMediaRoutes);
