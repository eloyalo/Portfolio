// Idiomas del sitio. El primero es el de por defecto y va sin prefijo en la URL (/);
// el resto cuelgan de /<código>/. Para añadir uno: código aquí, textos en ui.ts,
// traducciones en src/data/*.ts y carpeta en src/content/projects/.
export const locales = ['es', 'gl', 'en', 'pt', 'ru'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'es';

export const languageNames: Record<Lang, string> = {
  es: 'Español',
  gl: 'Galego',
  en: 'English',
  pt: 'Português',
  ru: 'Русский',
};

// Un texto en todos los idiomas: TypeScript avisa si falta alguno
export type Localized<T = string> = Record<Lang, T>;

export function isLang(value: string | undefined): value is Lang {
  return locales.includes(value as Lang);
}

// Idioma de la URL actual: /en/... -> 'en', /... -> 'es'
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return isLang(first) ? first : defaultLang;
}

// Ruta sin prefijo de idioma: /en/proyectos/x/ -> /proyectos/x/
export function stripLang(pathname: string): string {
  const [, first, ...rest] = pathname.split('/');
  return isLang(first) ? `/${rest.join('/')}` : pathname;
}

// Ruta con prefijo de idioma: ('en', '/proyectos/x/') -> /en/proyectos/x/
export function localizePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean}`;
}

// '2026-01' -> 'ene 2026', 'Jan 2026', 'xan. 2026'...
export function formatMonth(yearMonth: string, lang: Lang): string {
  const [year, month] = yearMonth.split('-').map(Number);
  return new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(year, month - 1)),
  );
}
