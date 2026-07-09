import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const API_URL = process.env.API_URL ?? 'http://localhost:3001';

const nextConfig: NextConfig = {
  // Monorepo paketlərini transpile et (@aibaycan/shared)
  transpilePackages: ['@aibaycan/shared', '@aibaycan/ui'],
  images: {
    remotePatterns: [
      // Kontent şəkilləri sonra əlavə olunacaq (CDN/storage host)
    ],
  },
  // Client-dən gələn /api sorğuları (lead formu) apps/api-yə yönləndirilir —
  // same-origin olduğu üçün CORS lazım deyil. Server komponentləri birbaşa fetch edir.
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${API_URL}/api/:path*`,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
