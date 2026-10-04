import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLang, type Lang } from '../i18n/config';

export type Project = CollectionEntry<'projects'> & { slug: string };

// Proyectos publicados en un idioma, ordenados. Si un proyecto no está traducido,
// se usa la versión del idioma por defecto.
export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  const bySlug = new Map<string, Project>();

  for (const entry of all) {
    const [entryLang, ...rest] = entry.id.split('/');
    const slug = rest.join('/');
    if (entryLang === lang || (entryLang === defaultLang && !bySlug.has(slug))) {
      bySlug.set(slug, { ...entry, slug });
    }
  }

  return [...bySlug.values()].sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}
