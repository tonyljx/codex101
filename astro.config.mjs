// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [react(), mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'zh-TW', 'ja', 'ko', 'ru', 'es', 'fr', 'de', 'pt', 'id', 'vi', 'tr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
