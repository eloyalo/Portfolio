// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // URLs absolutas (canonical, hreflang, Open Graph)
  site: 'https://eloyalonso.dev',
  server: {
    host: true, // escucha en 0.0.0.0 para que el puerto sea accesible fuera del contenedor
    port: 4321,
  },
});
