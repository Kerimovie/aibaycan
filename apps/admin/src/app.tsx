import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@/auth/auth-context';
import { RequireAuth } from '@/auth/require-auth';
import { DashboardLayout } from '@/components/dashboard-layout';
import { AdminsPage } from '@/features/admins/admins-page';
import { CaseStudiesPage } from '@/features/case-studies/case-studies-page';
import { CategoriesPage } from '@/features/categories/categories-page';
import { ClientsPage } from '@/features/clients/clients-page';
import { LeadsPage } from '@/features/leads/leads-page';
import { MediaPage } from '@/features/media/media-page';
import { ServicesPage } from '@/features/services/services-page';
import { TagsPage } from '@/features/tags/tags-page';
import { TeamPage } from '@/features/team/team-page';
import { TestimonialsPage } from '@/features/testimonials/testimonials-page';
import { DashboardPage } from '@/pages/dashboard-page';
import { LoginPage } from '@/pages/login-page';

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          {/* Qorunan sahə — route-lar sidebar naviqasiyasına uyğun (docs/28) */}
          <Route element={<RequireAuth />}>
            <Route element={<DashboardLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="case-studies" element={<CaseStudiesPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="categories" element={<CategoriesPage />} />
              <Route path="tags" element={<TagsPage />} />
              <Route path="media" element={<MediaPage />} />
              <Route path="testimonials" element={<TestimonialsPage />} />
              <Route path="clients" element={<ClientsPage />} />
              <Route path="team" element={<TeamPage />} />
              <Route path="leads" element={<LeadsPage />} />
              <Route path="admins" element={<AdminsPage />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
