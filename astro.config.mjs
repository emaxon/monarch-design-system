import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://emaxon.github.io',
  base: '/monarch-design-system',
  vite: {
    plugins: [tailwindcss()],
  },
});
