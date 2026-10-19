import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.elangprakoso.my.id',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        'react-dom/client': fileURLToPath(new URL('./src/lib/react-dom-client-shim.mjs', import.meta.url)),
      },
    },
  },
});
