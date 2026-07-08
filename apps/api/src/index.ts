import { serve } from '@hono/node-server';
import { createApp } from './app.js';
import { env } from './env.js';

const app = createApp();

serve({ fetch: app.fetch, port: env.PORT }, (info) => {
  console.log(`✓ API ${env.NODE_ENV} rejimində http://localhost:${info.port} ünvanında işləyir`);
});
