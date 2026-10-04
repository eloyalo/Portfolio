import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Proyectos: un .md por idioma en src/content/projects/<idioma>/<slug>.md.
// El mismo nombre de archivo en cada carpeta es el mismo proyecto traducido.
// Los archivos que empiezan por _ se ignoran (ver _plantilla.md).
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '*/[^_]*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      year: z.number(),
      role: z.string().optional(),
      sector: z.string().optional(),
      stack: z.array(z.string()),
      order: z.number().default(100), // menor = sale antes
      draft: z.boolean().default(false), // true = no se publica
      confidential: z.boolean().default(false), // hecho para una empresa: muestra el aviso de confidencialidad
      repo: z.string().optional(),
      demo: z.string().optional(),
      // Capturas: rutas relativas al .md (Astro las optimiza al compilar)
      screenshots: z.array(z.object({ src: image(), alt: z.string() })).default([]),
    }),
});

export const collections = { projects };
