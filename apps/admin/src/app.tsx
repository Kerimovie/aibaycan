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

          {/* Qorunan sahə */}
          <Route element={<RequireAuth />}>
            <Route element={<DashboardLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="projects" element={<PlaceholderPage title="İşlər" />} />
              <Route path="services" element={<PlaceholderPage title="Xidmətlər" />} />
              <Route path="messages" element={<PlaceholderPage title="Mesajlar" />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
