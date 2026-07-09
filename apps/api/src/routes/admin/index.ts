import { Hono } from 'hono';
import { authMiddleware } from '../../middleware/auth.js';
import type { AppEnv } from '../../types.js';
import { adminUserRoutes } from './admins.js';
import { adminCaseStudyRoutes } from './case-studies.js';
import { adminCategoryRoutes } from './categories.js';
import { adminClientRoutes } from './clients.js';
import { adminLeadRoutes } from './leads.js';
import { adminMediaRoutes } from './media.js';
import { adminServiceRoutes } from './services.js';
import { adminTagRoutes } from './tags.js';
import { adminTeamRoutes } from './team.js';
import { adminTestimonialRoutes } from './testimonials.js';

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
adminRoutes.route('/testimonials', adminTestimonialRoutes);
adminRoutes.route('/clients', adminClientRoutes);
adminRoutes.route('/team', adminTeamRoutes);
adminRoutes.route('/admins', adminUserRoutes);
