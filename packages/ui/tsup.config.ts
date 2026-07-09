import { resolve } from 'node:path';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  // peer/app-shared deps bundle-dan kənar (app təmin edir)
  external: [
    'react',
    'react-dom',
    'react-router-dom',
    '@tanstack/react-query',
    'react-i18next',
    'i18next',
    'react-hook-form',
    'zod',
    'sonner',
  ],
  esbuildOptions(options) {
    options.alias = { '@': resolve(__dirname, 'src') };
  },
});
