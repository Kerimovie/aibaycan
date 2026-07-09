import { installZodLocale } from '@aibaycan/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';
import i18n from './i18n'; // i18next init (side-effect)
import './index.css';

// Zod default mesajları i18n ilə (schema-larda mesaj yazmağa ehtiyac yox)
installZodLocale((key, opts) => i18n.t(key, opts ?? {}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1, refetchOnWindowFocus: false },
  },
});

const rootEl = document.getElementById('root');
if (!rootEl) {
  throw new Error('#root elementi tapılmadı');
}

createRoot(rootEl).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
