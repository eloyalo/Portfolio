// Textos fijos de la interfaz. El español marca las claves; el resto debe tenerlas todas.
import type { Lang } from './config';

const es = {
  'nav.about': 'Sobre mí',
  'nav.experience': 'Experiencia',
  'nav.projects': 'Proyectos',
  'nav.contact': 'Contacto',
  'nav.language': 'Idioma',
  'nav.skip': 'Saltar al contenido',

  'hero.contact': 'Hablemos',
  'hero.projects': 'Ver proyectos',

  'about.title': 'Sobre mí',
  'about.services': 'Qué puedo hacer por ti',

  'experience.title': 'Experiencia',
  'experience.present': 'Actualidad',

  'projects.title': 'Proyectos',
  'projects.more': 'Leer más',
  'projects.back': 'Volver a proyectos',
  'projects.year': 'Año',
  'projects.role': 'Rol',
  'projects.sector': 'Sector',
  'projects.stack': 'Stack',
  'projects.repo': 'Ver el código',
  'projects.demo': 'Demo',
  'projects.screenshots': 'Capturas',
  'projects.confidential': 'Confidencial',
  'projects.confidentialNote':
    'Proyecto hecho como empleado de una empresa. El código y las capturas pertenecen al cliente, así que por confidencialidad no puedo mostrarlos.',
  'projects.openSource': 'Código abierto',

  'skills.title': 'Stack e idiomas',
  'skills.stack': 'Tecnologías',
  'skills.languages': 'Idiomas',

  'contact.title': 'Contacto',
  'contact.text':
    '¿Tienes un proyecto por arrancar, algo que mantener o un proceso manual que automatizar? Hablamos.',
  'contact.email': 'Escríbeme',

  'footer.built': 'Hecho con Astro y servido desde un móvil reciclado.',

  'notFound.title': 'Página no encontrada',
  'notFound.text': 'Esta página no existe.',
  'notFound.back': 'Volver al inicio',
};

export type UiKey = keyof typeof es;

export const ui: Record<Lang, Record<UiKey, string>> = {
  es,
  gl: {
    'nav.about': 'Sobre min',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proxectos',
    'nav.contact': 'Contacto',
    'nav.language': 'Idioma',
    'nav.skip': 'Saltar ao contido',

    'hero.contact': 'Falemos',
    'hero.projects': 'Ver proxectos',

    'about.title': 'Sobre min',
    'about.services': 'Que podo facer por ti',

    'experience.title': 'Experiencia',
    'experience.present': 'Actualidade',

    'projects.title': 'Proxectos',
    'projects.more': 'Ler máis',
    'projects.back': 'Volver aos proxectos',
    'projects.year': 'Ano',
    'projects.role': 'Rol',
    'projects.sector': 'Sector',
    'projects.stack': 'Stack',
    'projects.repo': 'Ver o código',
    'projects.demo': 'Demo',
    'projects.screenshots': 'Capturas',
    'projects.confidential': 'Confidencial',
    'projects.confidentialNote':
      'Proxecto feito como empregado dunha empresa. O código e as capturas pertencen ao cliente, así que por confidencialidade non podo mostralos.',
    'projects.openSource': 'Código aberto',

    'skills.title': 'Stack e idiomas',
    'skills.stack': 'Tecnoloxías',
    'skills.languages': 'Idiomas',

    'contact.title': 'Contacto',
    'contact.text':
      'Tes un proxecto por arrancar, algo que manter ou un proceso manual que automatizar? Falamos.',
    'contact.email': 'Escríbeme',

    'footer.built': 'Feito con Astro e servido dende un móbil reciclado.',

    'notFound.title': 'Páxina non atopada',
    'notFound.text': 'Esta páxina non existe.',
    'notFound.back': 'Volver ao inicio',
  },
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.language': 'Language',
    'nav.skip': 'Skip to content',

    'hero.contact': "Let's talk",
    'hero.projects': 'See projects',

    'about.title': 'About me',
    'about.services': 'What I can do for you',

    'experience.title': 'Experience',
    'experience.present': 'Present',

    'projects.title': 'Projects',
    'projects.more': 'Read more',
    'projects.back': 'Back to projects',
    'projects.year': 'Year',
    'projects.role': 'Role',
    'projects.sector': 'Sector',
    'projects.stack': 'Stack',
    'projects.repo': 'View the code',
    'projects.demo': 'Demo',
    'projects.screenshots': 'Screenshots',
    'projects.confidential': 'Confidential',
    'projects.confidentialNote':
      "Built as an employee of a company. The code and screenshots belong to the client, so I can't show them for confidentiality reasons.",
    'projects.openSource': 'Open source',

    'skills.title': 'Stack and languages',
    'skills.stack': 'Technologies',
    'skills.languages': 'Languages',

    'contact.title': 'Contact',
    'contact.text':
      'Got a project to kick off, something to maintain, or a manual process to automate? Get in touch.',
    'contact.email': 'Email me',

    'footer.built': 'Built with Astro and served from a recycled phone.',

    'notFound.title': 'Page not found',
    'notFound.text': "This page doesn't exist.",
    'notFound.back': 'Back to home',
  },
  pt: {
    'nav.about': 'Sobre mim',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contacto',
    'nav.language': 'Idioma',
    'nav.skip': 'Saltar para o conteúdo',

    'hero.contact': 'Vamos falar',
    'hero.projects': 'Ver projetos',

    'about.title': 'Sobre mim',
    'about.services': 'O que posso fazer por si',

    'experience.title': 'Experiência',
    'experience.present': 'Atualidade',

    'projects.title': 'Projetos',
    'projects.more': 'Ler mais',
    'projects.back': 'Voltar aos projetos',
    'projects.year': 'Ano',
    'projects.role': 'Função',
    'projects.sector': 'Setor',
    'projects.stack': 'Stack',
    'projects.repo': 'Ver o código',
    'projects.demo': 'Demo',
    'projects.screenshots': 'Capturas de ecrã',
    'projects.confidential': 'Confidencial',
    'projects.confidentialNote':
      'Projeto feito como funcionário de uma empresa. O código e as capturas pertencem ao cliente, por isso não os posso mostrar por motivos de confidencialidade.',
    'projects.openSource': 'Código aberto',

    'skills.title': 'Stack e idiomas',
    'skills.stack': 'Tecnologias',
    'skills.languages': 'Idiomas',

    'contact.title': 'Contacto',
    'contact.text':
      'Tem um projeto para arrancar, algo para manter ou um processo manual para automatizar? Falamos.',
    'contact.email': 'Escreva-me',

    'footer.built': 'Feito com Astro e servido a partir de um telemóvel reciclado.',

    'notFound.title': 'Página não encontrada',
    'notFound.text': 'Esta página não existe.',
    'notFound.back': 'Voltar ao início',
  },
  ru: {
    'nav.about': 'Обо мне',
    'nav.experience': 'Опыт',
    'nav.projects': 'Проекты',
    'nav.contact': 'Контакты',
    'nav.language': 'Язык',
    'nav.skip': 'Перейти к содержимому',

    'hero.contact': 'Связаться',
    'hero.projects': 'Смотреть проекты',

    'about.title': 'Обо мне',
    'about.services': 'Чем могу помочь',

    'experience.title': 'Опыт работы',
    'experience.present': 'по настоящее время',

    'projects.title': 'Проекты',
    'projects.more': 'Подробнее',
    'projects.back': 'Назад к проектам',
    'projects.year': 'Год',
    'projects.role': 'Роль',
    'projects.sector': 'Сфера',
    'projects.stack': 'Стек',
    'projects.repo': 'Исходный код',
    'projects.demo': 'Демо',
    'projects.screenshots': 'Скриншоты',
    'projects.confidential': 'Конфиденциально',
    'projects.confidentialNote':
      'Проект выполнен в качестве сотрудника компании. Код и скриншоты принадлежат клиенту, поэтому по соображениям конфиденциальности я не могу их показать.',
    'projects.openSource': 'Открытый код',

    'skills.title': 'Стек и языки',
    'skills.stack': 'Технологии',
    'skills.languages': 'Языки',

    'contact.title': 'Контакты',
    'contact.text':
      'Нужно запустить проект, поддерживать существующий или автоматизировать ручной процесс? Напишите мне.',
    'contact.email': 'Написать письмо',

    'footer.built': 'Сделано на Astro и работает на старом смартфоне.',

    'notFound.title': 'Страница не найдена',
    'notFound.text': 'Такой страницы не существует.',
    'notFound.back': 'На главную',
  },
};

export function useTranslations(lang: Lang) {
  return (key: UiKey) => ui[lang][key];
}
