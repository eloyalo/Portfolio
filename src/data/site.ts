// Datos personales y enlaces. Lo que esté vacío ('') no se muestra en la web.
import type { Localized } from '../i18n/config';

export const site = {
  name: 'Eloy Alonso',
  location: 'Santiago de Compostela',
  available: true, // muestra el aviso de disponibilidad en la portada
  links: {
    email: 'contact@eloyalonso.dev',
    linkedin: 'https://www.linkedin.com/in/eloy-alonso-19374742b/',
    github: 'https://github.com/eloyalo',
    arc: 'https://arc.dev/@eloyalonso',
    malt: 'https://www.malt.es/profile/eloyalonso',
  },
};

export const siteText: {
  role: Localized;
  headline: Localized;
  tagline: Localized;
  description: Localized;
  availability: Localized;
  hours: Localized;
} = {
  role: {
    es: 'Full Stack Developer',
    gl: 'Full Stack Developer',
    en: 'Full Stack Developer',
    pt: 'Full Stack Developer',
    ru: 'Full Stack разработчик',
  },
  headline: {
    es: 'Backend con Laravel, PHP y APIs REST',
    gl: 'Backend con Laravel, PHP e APIs REST',
    en: 'Backend with Laravel, PHP and REST APIs',
    pt: 'Backend com Laravel, PHP e APIs REST',
    ru: 'Бэкенд на Laravel, PHP и REST API',
  },
  // Frase de la portada (TODO: cámbiala si tienes una mejor)
  tagline: {
    es: 'Construyo APIs y backends que conectan sistemas, y pongo orden en código heredado sin parar lo que ya funciona.',
    gl: 'Constrúo APIs e backends que conectan sistemas, e poño orde en código herdado sen parar o que xa funciona.',
    en: 'I build APIs and backends that connect systems, and I clean up legacy code without stopping what already works.',
    pt: 'Construo APIs e backends que ligam sistemas, e ponho ordem em código legado sem parar o que já funciona.',
    ru: 'Разрабатываю API и бэкенды, которые связывают системы, и навожу порядок в legacy-коде, не останавливая то, что уже работает.',
  },
  description: {
    es: 'Eloy Alonso, desarrollador Full Stack especializado en Laravel, PHP y APIs REST: integración de sistemas, bases de datos MySQL y mantenimiento de aplicaciones en producción.',
    gl: 'Eloy Alonso, desenvolvedor Full Stack especializado en Laravel, PHP e APIs REST: integración de sistemas, bases de datos MySQL e mantemento de aplicacións en produción.',
    en: 'Eloy Alonso, Full Stack developer focused on Laravel, PHP and REST APIs: system integration, MySQL databases and maintenance of production applications.',
    pt: 'Eloy Alonso, programador Full Stack especializado em Laravel, PHP e APIs REST: integração de sistemas, bases de dados MySQL e manutenção de aplicações em produção.',
    ru: 'Элой Алонсо, Full Stack разработчик: Laravel, PHP и REST API, интеграция систем, базы данных MySQL и сопровождение приложений в продакшене.',
  },
  availability: {
    es: 'Disponible para full-time o freelance, en remoto',
    gl: 'Dispoñible para full-time ou freelance, en remoto',
    en: 'Available for full-time or freelance work, remote',
    pt: 'Disponível para full-time ou freelance, em remoto',
    ru: 'Открыт к полной занятости и фрилансу, удалённо',
  },
  hours: {
    es: 'Horario de Madrid, de 9:00 a 17:00',
    gl: 'Horario de Madrid, de 9:00 a 17:00',
    en: 'Madrid time, 9:00 to 17:00',
    pt: 'Horário de Madrid, das 9:00 às 17:00',
    ru: 'По мадридскому времени, с 9:00 до 17:00',
  },
};
