import {
  ContactItem,
  EducationItem,
  NavItem,
  PortfolioProfile,
  ProjectItem,
  SkillCategory
} from '../models/portfolio.models';

export const PROFILE: PortfolioProfile = {
  fullName: 'Amadou Ndiaye',
  title: 'Développeur Web & Mobile',
  location: 'Dakar, Sénégal',
  summary:
    'Je suis développeur Web & Mobile spécialisé en Angular, React, Spring Boot et Flutter. Je développe des applications modernes, responsives et orientées métier.',
  email: 'amadou.ndiaye.dev@gmail.com',
  phone: '+221 77 385 53 58',
  github: 'https://github.com/ndiaye-dev',
  linkedin: 'https://www.linkedin.com/in/amadou-ndiaye-1b3b86387/',
  x: 'https://x.com/Amadou__ndiaye_'
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', fragment: 'accueil' },
  { label: 'À propos', fragment: 'apropos' },
  { label: 'Projets', fragment: 'projets' },
  { label: 'Compétences', fragment: 'competences' },
  { label: 'Formation', fragment: 'formation' },
  { label: 'Contact', fragment: 'contact' }
];

export const PROJECTS: ProjectItem[] = [
  {
    name: 'SenClinic',
    type: 'Application Web de Gestion Médicale',
    description:
      'Application de gestion clinique pour les cliniques du Sénégal : patients, rendez-vous, consultations, médecins, utilisateurs, rôles et tableau de bord.',
    technologies: ['Angular', 'Spring Boot', 'MySQL'],
    demoUrl: 'https://senclinic.vercel.app',
    codeUrl: 'https://github.com/ndiaye-dev/senclinic'
  },
  {
    name: 'SenBusiness',
    type: 'Application Web de Gestion Commerciale',
    description:
      'Application de gestion commerciale pour PME/TPE : clients, fournisseurs, produits, stock, devis, factures, paiements, achats, dépenses et utilisateurs.',
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL'],
    demoUrl: 'https://senbusiness-app.vercel.app',
    codeUrl: 'https://github.com/ndiaye-dev/senbusiness-app'
  },
  {
    name: 'ShopSénégal',
    type: 'Application Mobile',
    description:
      'Application mobile e-commerce développée avec Flutter : navigation produits, panier, commandes et authentification.',
    technologies: ['Flutter', 'Dart', 'Firebase']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Langages',
    skills: ['JavaScript', 'Java', 'Dart', 'PHP']
  },
  {
    name: 'Frameworks',
    skills: ['Angular', 'React', 'Spring Boot', 'Flutter']
  },
  {
    name: 'Bases de données',
    skills: ['MySQL', 'PostgreSQL']
  },
  {
    name: 'UI/UX',
    skills: ['Figma']
  },
  {
    name: 'Outils',
    skills: ['Git', 'GitHub', 'Vercel', 'Postman', 'IntelliJ IDEA', 'Visual Studio Code']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Licence en Génie Logiciel',
    institution: 'Université Dakar-Bourguiba',
    location: 'Dakar, Sénégal',
    period: '2024 - 2025',
    description:
      'Spécialisation en développement logiciel, architecture applicative et gestion de projets informatiques.'
  },
  {
    degree: 'DUT en Génie Électrique et Informatique',
    institution: 'IUT Iba Der Thiam',
    location: 'Thiès, Sénégal',
    period: '2021 - 2024',
    description:
      'Formation technique en informatique, systèmes électriques, programmation et bases de l’informatique industrielle.'
  }
];

export const CONTACTS: ContactItem[] = [
  {
    label: 'Email',
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`
  },
  {
    label: 'Téléphone',
    value: PROFILE.phone,
    href: 'tel:+221773855358'
  },
  {
    label: 'Localisation',
    value: PROFILE.location
  },
  {
    label: 'GitHub',
    value: 'github.com/ndiaye-dev',
    href: PROFILE.github
  }
];

