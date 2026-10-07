export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: string;
  field?: string;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'ai-fullstack' | 'web-app' | 'research';
  categoryLabel: string;
  period: string;
  location?: string;
  subtitle: string;
  description: string;
  features: string[];
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  description: string;
  credentialUrl?: string;
}
