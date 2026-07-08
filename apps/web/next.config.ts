import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  // Monorepo paketlərini transpile et (@aibaycan/shared)
  transpilePackages: ['@aibaycan/shared'],
  images: {
    remotePatterns: [
      // Kontent şəkilləri sonra əlavə olunacaq (CDN/storage host)
    ],
  },
};

export default withNextIntl(nextConfig);
