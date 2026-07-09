import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@/auth/auth-context';
import { RequireAuth } from '@/auth/require-auth';
import { DashboardLayout } from '@/components/dashboard-layout';
import { DashboardPage, PlaceholderPage } from '@/pages/dashboard-page';
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
              <Route path="case-studies" element={<PlaceholderPage title="İşlər" />} />
              <Route path="services" element={<PlaceholderPage title="Xidmətlər" />} />
              <Route path="categories" element={<PlaceholderPage title="Kateqoriyalar" />} />
              <Route path="media" element={<PlaceholderPage title="Media" />} />
              <Route path="leads" element={<PlaceholderPage title="Sorğular" />} />
              <Route path="admins" element={<PlaceholderPage title="Adminlər" />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
