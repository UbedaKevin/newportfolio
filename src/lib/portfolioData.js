export const developerInfo = {
  name: "Kevin Ubeda",
  role: "Développeur Full-Stack",
  tagline: "Je conçois des systèmes digitaux robustes et performants avec VueJS, Node.js et une logique type-safe.",
  status: "Disponible — CDI / Alternance / Freelance",
  email: "ysocomus59200@hotmail.com",
  linkedin: "https://www.linkedin.com/in/kevin-ubeda-400045292",
  github: "https://github.com/tOCHSka",
};

export const aboutData = {
  intro: "Développeur passionné avec une solide expertise en JavaScript moderne et ses écosystèmes. Je transforme des problèmes complexes en solutions élégantes, accessibles et performantes.",
  level: "Junior / Mid-Level",
  objective: "Je recherche activement un poste en CDI, alternance ou freelance pour contribuer à des projets ambitieux au sein d'une équipe technique exigeante.",
  highlights: [
    "2+ ans d'expérience en développement web",
    "Approche orientée performance et accessibilité",
    "Méthodologie Agile & versioning Git avancé",
    "Veille technologique constante",
  ],
};

export const projects = [
  {
    id: 1,
    title: "Revivo",
    category: "APP IA",
    problem: "Les images anciennes ou dégradées perdent en qualité, en couleurs et en détails, rendant leur exploitation difficile pour les utilisateurs.",
    solution: "Développement d'une application de restauration et colorisation d’images utilisant l’IA, permettant de reconstruire les détails, améliorer la netteté et recoloriser automatiquement les photos en quelques secondes.",
    stack: ["Vue 3", "Node.js", "Cloudinary", "Replicate AI", "PostgreSQL"],
    difficulty: "Gestion du traitement d’images via API IA (Replicate) avec optimisation des temps de réponse et gestion des fichiers volumineux via Cloudinary.",
    github: "https://github.com/tOCHSka/BackRevivo",
    demo: "https://revivoai.netlify.app/",
    metric: "IA image restoration",
  },
  {
    id: 2,
    title: "MackerProd",
    category: "Application web",
    problem: "Un monteur vidéo freelance avait besoin d’une présence en ligne professionnelle pour présenter ses travaux et attirer des clients, mais ne disposait pas de portfolio structuré ni de système de prise de contact efficace.",
    solution: "Développement d’une application web full-stack avec un frontend Nuxt en SSR et un backend Node.js, déployée sur un VPS avec un nom de domaine personnalisé, permettant la mise en avant des projets et la gestion des demandes clients.",
    stack: ["Nuxt.js", "Vue.js", "Node.js", "Express.js", "VPS (IONOS)", "Linux"],
    difficulty: "Mise en place et déploiement d’une application SSR en production avec intégration backend, configuration VPS, gestion de domaine et environnement serveur.",
    github: "https://github.com/tOCHSKa/mackerprodV2",
    backend: "https://github.com/tOCHSKa/mackerprodBackv2",
    demo: "https://www.mackerprod.com",
    metric: "Déploiement réél",
  },
  // {
  //   id: 3,
  //   title: "Aura Design System",
  //   category: "Front-End UI",
  //   problem: "L'absence de cohérence visuelle entre les produits internes ralentissait le développement et dégradait l'expérience utilisateur.",
  //   solution: "Création d'une bibliothèque de composants headless, accessible WCAG AA, avec système de thème dynamique et documentation interactive.",
  //   stack: ["React", "Storybook", "Tailwind CSS", "Radix UI", "TypeScript"],
  //   difficulty: "Garantir l'accessibilité WCAG AA sur chaque composant tout en conservant une flexibilité maximale de personnalisation.",
  //   github: "https://github.com/alexis-verdier/aura-design-system",
  //   demo: "https://aura-ds.demo.dev",
  //   metric: "40+ composants",
  // },
  // {
  //   id: 4,
  //   title: "FlowSync",
  //   category: "Outil / Automation",
  //   problem: "Les équipes perdaient 5h/semaine à synchroniser manuellement les données entre Notion, Google Sheets et Slack.",
  //   solution: "Outil d'automatisation avec interface no-code permettant de créer des workflows de synchronisation bidirectionnels en quelques clics.",
  //   stack: ["Next.js", "Prisma", "tRPC", "Tailwind CSS", "Cron Jobs"],
  //   difficulty: "Gestion des conflits de données lors de synchronisations bidirectionnelles avec résolution automatique basée sur des timestamps.",
  //   github: "https://github.com/alexis-verdier/flowsync",
  //   demo: "https://flowsync.demo.dev",
  //   metric: "5h/semaine économisées",
  // },
];

export const skills = {
  frontend: {
    label: "Interface Layer",
    items: ["Vue.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "Framer Motion", "D3.js", "Storybook"],
  },
  backend: {
    label: "Core Infrastructure",
    items: ["Node.js", "Express", "REST API", "GraphQL", "Prisma"],
  },
  databases: {
    label: "Data Layer",
    items: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
  tools: {
    label: "DevOps & Outils",
    items: ["Git / GitHub", "Docker", "Vercel", "Jest", "CI/CD", "Figma", "VS Code", "Linux"],
  },
};

export const navLinks = [
  { label: "Projets", href: "#projets" },
  { label: "À propos", href: "#apropos" },
  { label: "Compétences", href: "#competences" },
  { label: "Contact", href: "#contact" },
];