// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // URLs absolutas (canonical, hreflang, Open Graph, sitemap)
  site: 'https://eloyalonso.dev',
  // /sitemap-index.xml con las alternativas de idioma de cada página
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', gl: 'gl', en: 'en', pt: 'pt', ru: 'ru' },
      },
    }),
  ],
  server: {
    host: true, // escucha en 0.0.0.0 para que el puerto sea accesible fuera del contenedor
    port: 4321,
  },
});
