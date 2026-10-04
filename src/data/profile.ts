// Contenido del CV: bio, servicios, experiencia, stack e idiomas.
// Los proyectos van aparte, en src/content/projects/<idioma>/ (uno por archivo .md).
import type { Localized } from '../i18n/config';

export const about: Localized<string[]> = {
  es: [
    'Llevo más de dos años desarrollando backend con PHP, primero con CakePHP y ahora sobre todo con Laravel. Diseño bases de datos MySQL desde cero, las mantengo y, cuando van lentas, averiguo por qué. He trabajado en desarrollos nuevos y en aplicaciones que ya estaban en producción y no se podían parar.',
    'No me ato a un stack. Aprender tecnologías nuevas es lo que más disfruto de este oficio, y cuando un proyecto pide un lenguaje o una herramienta que no domino, me pongo con ella hasta sacarle partido. Así he acabado trabajando con Node, Python o React Native, y llevando a Android una aplicación de escritorio escrita en TypeScript y Rust.',
    'Me interesan la IA y la automatización, pero solo donde ahorran tiempo de verdad. No como moda.',
  ],
  gl: [
    'Levo máis de dous anos desenvolvendo backend con PHP, primeiro con CakePHP e agora sobre todo con Laravel. Deseño bases de datos MySQL dende cero, mantéñoas e, cando van lentas, descubro por que. Traballei en desenvolvementos novos e en aplicacións que xa estaban en produción e non se podían parar.',
    'Non me ato a un stack. Aprender tecnoloxías novas é o que máis gozo deste oficio, e cando un proxecto pide unha linguaxe ou unha ferramenta que non domino, póñome con ela ata sacarlle partido. Así acabei traballando con Node, Python ou React Native, e levando a Android unha aplicación de escritorio escrita en TypeScript e Rust.',
    'Interésanme a IA e a automatización, pero só onde aforran tempo de verdade. Non como moda.',
  ],
  en: [
    "I've spent over two years building backends in PHP, first with CakePHP and now mostly with Laravel. I design MySQL databases from scratch, maintain them and, when they get slow, find out why. I've worked on new builds and on applications that were already in production and couldn't be stopped.",
    "I don't tie myself to one stack. Learning new technologies is what I enjoy most about this job, and when a project calls for a language or tool I don't know well, I dig in until I can get real work out of it. That's how I ended up working with Node, Python and React Native, and porting a desktop app written in TypeScript and Rust to Android.",
    "I'm into AI and automation, but only where they genuinely save time. Not because it's trendy.",
  ],
  pt: [
    'Há mais de dois anos que desenvolvo backend com PHP, primeiro com CakePHP e agora sobretudo com Laravel. Desenho bases de dados MySQL de raiz, mantenho-as e, quando ficam lentas, descubro porquê. Trabalhei em desenvolvimentos novos e em aplicações que já estavam em produção e não podiam parar.',
    'Não me prendo a um stack. Aprender tecnologias novas é o que mais gosto neste ofício, e quando um projeto pede uma linguagem ou uma ferramenta que não domino, dedico-me a ela até lhe tirar partido. Foi assim que acabei a trabalhar com Node, Python ou React Native, e a levar para Android uma aplicação de desktop escrita em TypeScript e Rust.',
    'Interessam-me a IA e a automatização, mas só onde poupam tempo a sério. Não por moda.',
  ],
  ru: [
    'Больше двух лет занимаюсь бэкендом на PHP: сначала на CakePHP, сейчас в основном на Laravel. Проектирую базы данных MySQL с нуля, сопровождаю их и, когда они начинают тормозить, выясняю почему. Работал и над новыми проектами, и над приложениями, которые уже были в продакшене и не могли останавливаться.',
    'Я не привязан к одному стеку. Больше всего в этой профессии мне нравится осваивать новые технологии, и если проекту нужен язык или инструмент, которого я пока не знаю, я разбираюсь в нём, пока не начну применять его в деле. Так я поработал с Node, Python и React Native, а ещё перенёс на Android десктопное приложение на TypeScript и Rust.',
    'Мне интересны ИИ и автоматизация, но только там, где они действительно экономят время. А не ради моды.',
  ],
};

export const services: { title: Localized; text: Localized }[] = [
  {
    title: {
      es: 'Backend y APIs REST',
      gl: 'Backend e APIs REST',
      en: 'Backend and REST APIs',
      pt: 'Backend e APIs REST',
      ru: 'Бэкенд и REST API',
    },
    text: {
      es: 'Laravel y PHP para integrar sistemas que tienen que hablar entre sí sin perder datos por el camino.',
      gl: 'Laravel e PHP para integrar sistemas que teñen que falar entre si sen perder datos polo camiño.',
      en: 'Laravel and PHP to integrate systems that need to talk to each other without losing data along the way.',
      pt: 'Laravel e PHP para integrar sistemas que têm de comunicar entre si sem perder dados pelo caminho.',
      ru: 'Laravel и PHP для интеграции систем, которые должны обмениваться данными без потерь.',
    },
  },
  {
    title: {
      es: 'Bases de datos MySQL',
      gl: 'Bases de datos MySQL',
      en: 'MySQL databases',
      pt: 'Bases de dados MySQL',
      ru: 'Базы данных MySQL',
    },
    text: {
      es: 'Diseño desde cero, mantenimiento y diagnóstico de consultas lentas.',
      gl: 'Deseño dende cero, mantemento e diagnóstico de consultas lentas.',
      en: 'Design from scratch, maintenance and diagnosing slow queries.',
      pt: 'Desenho de raiz, manutenção e diagnóstico de consultas lentas.',
      ru: 'Проектирование с нуля, сопровождение и поиск причин медленных запросов.',
    },
  },
  {
    title: {
      es: 'Código heredado',
      gl: 'Código herdado',
      en: 'Legacy code',
      pt: 'Código legado',
      ru: 'Legacy-код',
    },
    text: {
      es: 'Mantenimiento, optimización y refactorización de aplicaciones en producción, módulo a módulo y sin cortar el servicio.',
      gl: 'Mantemento, optimización e refactorización de aplicacións en produción, módulo a módulo e sen cortar o servizo.',
      en: 'Maintaining, optimising and refactoring production applications, one module at a time, with no downtime.',
      pt: 'Manutenção, otimização e refatoração de aplicações em produção, módulo a módulo e sem interromper o serviço.',
      ru: 'Сопровождение, оптимизация и рефакторинг приложений в продакшене — по одному модулю и без остановки сервиса.',
    },
  },
  {
    title: {
      es: 'CRMs, ERPs y webs a medida',
      gl: 'CRMs, ERPs e webs a medida',
      en: 'Custom CRMs, ERPs and websites',
      pt: 'CRMs, ERPs e sites à medida',
      ru: 'CRM, ERP и сайты под заказ',
    },
    text: {
      es: 'Herramientas adaptadas a cómo trabaja el cliente, no al revés.',
      gl: 'Ferramentas adaptadas a como traballa o cliente, non ao revés.',
      en: 'Tools shaped around how the client actually works, not the other way round.',
      pt: 'Ferramentas adaptadas à forma como o cliente trabalha, e não o contrário.',
      ru: 'Инструменты, которые подстраиваются под работу клиента, а не наоборот.',
    },
  },
  {
    title: {
      es: 'Automatización e IA',
      gl: 'Automatización e IA',
      en: 'Automation and AI',
      pt: 'Automatização e IA',
      ru: 'Автоматизация и ИИ',
    },
    text: {
      es: 'Para quitar procesos manuales repetitivos, cuando compensa.',
      gl: 'Para quitar procesos manuais repetitivos, cando compensa.',
      en: 'To get rid of repetitive manual processes, when it pays off.',
      pt: 'Para eliminar processos manuais repetitivos, quando compensa.',
      ru: 'Чтобы избавиться от рутинных ручных процессов — там, где это окупается.',
    },
  },
];

export interface Job {
  role: string;
  company: string;
  start: string; // 'AAAA-MM'
  end?: string; // 'AAAA-MM'; sin valor = actualidad
  location: string;
  summary: Localized;
  highlights?: Localized<string[]>;
  stack: string[];
}

export const experience: Job[] = [
  {
    role: 'Full Stack Developer',
    company: 'Invbit, Diseño y Desarrollo Web',
    start: '2026-01',
    end: '2026-08',
    location: 'Santiago de Compostela',
    summary: {
      es: 'CRMs y ERPs construidos desde cero, y backend y APIs REST para varias empresas.',
      gl: 'CRMs e ERPs construídos dende cero, e backend e APIs REST para varias empresas.',
      en: 'CRMs and ERPs built from scratch, plus backends and REST APIs for several companies.',
      pt: 'CRMs e ERPs construídos de raiz, e backend e APIs REST para várias empresas.',
      ru: 'CRM и ERP-системы с нуля, а также бэкенд и REST API для нескольких компаний.',
    },
    highlights: {
      es: [
        'Nuevos desarrollos y optimización sobre el backend y las APIs de un operador de telecomunicaciones de gran volumen: ventas, activaciones de línea y gestión de productos.',
      ],
      gl: [
        'Novos desenvolvementos e optimización sobre o backend e as APIs dun operador de telecomunicacións de gran volume: vendas, activacións de liña e xestión de produtos.',
      ],
      en: [
        'New features and optimisation work on the backend and APIs of a high-volume telecom operator: sales, line activations and product management.',
      ],
      pt: [
        'Novos desenvolvimentos e otimização no backend e nas APIs de um operador de telecomunicações de grande volume: vendas, ativações de linha e gestão de produtos.',
      ],
      ru: [
        'Новая функциональность и оптимизация бэкенда и API крупного телеком-оператора: продажи, активация линий и управление продуктами.',
      ],
    },
    stack: ['PHP', 'Laravel', 'APIs REST', 'Docker', 'CRM'],
  },
  {
    role: 'Developer',
    company: 'Sixtema',
    start: '2024-07',
    end: '2026-01',
    location: 'Santiago de Compostela',
    summary: {
      es: 'Mi primera empresa. Desarrollo, gestión de proyectos y resolución de tickets e incidencias en varias áreas.',
      gl: 'A miña primeira empresa. Desenvolvemento, xestión de proxectos e resolución de tickets e incidencias en varias áreas.',
      en: 'My first company. Development, project management and handling tickets and incidents across several areas.',
      pt: 'A minha primeira empresa. Desenvolvimento, gestão de projetos e resolução de tickets e incidências em várias áreas.',
      ru: 'Моя первая компания. Разработка, ведение проектов и работа с тикетами и инцидентами в разных направлениях.',
    },
    // TODO: logros concretos, tamaño de equipo, metodología
    stack: ['PHP', 'CakePHP', 'MySQL', 'Python', 'JavaScript', 'Docker'],
  },
];

export const skills: { group: Localized; items: string[] }[] = [
  {
    group: { es: 'Backend', gl: 'Backend', en: 'Backend', pt: 'Backend', ru: 'Бэкенд' },
    items: ['PHP', 'Laravel', 'CakePHP', 'Node.js', 'Python', 'APIs REST'],
  },
  {
    group: { es: 'Frontend', gl: 'Frontend', en: 'Frontend', pt: 'Frontend', ru: 'Фронтенд' },
    items: ['JavaScript', 'TypeScript', 'React', 'HTML/CSS'],
  },
  {
    group: {
      es: 'Móvil y escritorio',
      gl: 'Móbil e escritorio',
      en: 'Mobile and desktop',
      pt: 'Mobile e desktop',
      ru: 'Мобильные и десктопные приложения',
    },
    items: ['React Native', 'Android', 'Tauri', 'Rust'],
  },
  {
    group: { es: 'Datos', gl: 'Datos', en: 'Data', pt: 'Dados', ru: 'Данные' },
    items: ['MySQL'],
  },
  {
    group: {
      es: 'Infraestructura',
      gl: 'Infraestrutura',
      en: 'Infrastructure',
      pt: 'Infraestrutura',
      ru: 'Инфраструктура',
    },
    items: ['Docker', 'Linux'],
  },
  {
    group: { es: 'Otros', gl: 'Outros', en: 'Other', pt: 'Outros', ru: 'Другое' },
    items: ['IA', 'IoT'],
  },
];

// TODO: revisar niveles (Arc y Malt no coinciden en inglés y portugués)
export const languages: { name: Localized; level: Localized }[] = [
  {
    name: { es: 'Español', gl: 'Castelán', en: 'Spanish', pt: 'Espanhol', ru: 'Испанский' },
    level: { es: 'Nativo', gl: 'Nativo', en: 'Native', pt: 'Nativo', ru: 'Родной' },
  },
  {
    name: { es: 'Gallego', gl: 'Galego', en: 'Galician', pt: 'Galego', ru: 'Галисийский' },
    level: { es: 'Nativo', gl: 'Nativo', en: 'Native', pt: 'Nativo', ru: 'Родной' },
  },
  {
    name: { es: 'Inglés', gl: 'Inglés', en: 'English', pt: 'Inglês', ru: 'Английский' },
    level: { es: 'Bilingüe', gl: 'Bilingüe', en: 'Bilingual', pt: 'Bilíngue', ru: 'Свободный' },
  },
  {
    name: { es: 'Portugués', gl: 'Portugués', en: 'Portuguese', pt: 'Português', ru: 'Португальский' },
    level: { es: 'Profesional', gl: 'Profesional', en: 'Professional', pt: 'Profissional', ru: 'Рабочий' },
  },
  {
    name: { es: 'Ruso', gl: 'Ruso', en: 'Russian', pt: 'Russo', ru: 'Русский' },
    level: { es: 'Básico', gl: 'Básico', en: 'Basic', pt: 'Básico', ru: 'Базовый' },
  },
];
