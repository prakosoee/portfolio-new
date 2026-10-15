export type ProjectCategory = 'All' | 'Full-Stack' | 'Backend' | 'Data/AI';

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface TechnicalChallenge {
  challenge: string;
  solution: string;
  tradeOff: string;
}

export interface TechnicalImplementation {
  architecture?: string;
  backend?: string;
  frontend?: string;
  database?: string;
  deployment?: string;
  pipeline?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: 'Full-Stack' | 'Backend' | 'Data/AI';
  role: string;
  period: string;
  featured: boolean;
  status: string;
  problem: string;
  goals: string[];
  contributions: string[];
  features: ProjectFeature[];
  technicalImplementation: TechnicalImplementation;
  challenges: TechnicalChallenge[];
  results: string[];
  technologies: string[];
  demoUrl?: string;
  repositoryUrl?: string;
  documentationUrl?: string;
  isPublicRepo: boolean;
  isPublicDemo: boolean;
  accessNote?: string;
}

export interface SkillItem {
  name: string;
  context?: string;
}

export interface SkillGroup {
  category: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  organization: string;
  role: string;
  period: string;
  summary: string;
  contributions: string[];
  technologies: string[];
  publicUrl?: string;
}

export interface EducationItem {
  institution: string;
  qualification: string;
  fieldOfStudy: string;
  period: string;
  achievements?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}
