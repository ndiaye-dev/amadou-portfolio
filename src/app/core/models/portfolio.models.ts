export interface PortfolioProfile {
  fullName: string;
  title: string;
  location: string;
  summary: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  x: string;
}

export interface ProjectItem {
  name: string;
  type: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
  description?: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

export interface NavItem {
  label: string;
  fragment: string;
}
