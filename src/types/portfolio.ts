export type ProjectStatus = 'In Development' | 'Prototype' | 'Completed' | 'Awaiting Verification';

export interface ProjectMilestone {
  label: string;
  isCompleted: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category?: string;
  status: ProjectStatus;
  problemStatement: string;
  solution: string;
  technologies: string[];
  githubUrl?: string;
  githubUrlPending?: boolean;
  image?: string;
  completedScope: string[];
  inProgressScope: string[];
  disclaimer?: string;
  isFeatured?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  coreSkills: string[];
  learningSkills: string[];
}

export interface CertificationActivity {
  id: string;
  title: string;
  organization: string;
  type: 'Hackathon' | 'Program' | 'Leadership Summit' | 'Developer Sprint';
  verifiedStatus: string;
  description: string;
  dateOrYear?: string;
  linkText?: string;
}

export interface EducationInfo {
  degree: string;
  field: string;
  institution: string;
  expectedGraduation: string;
  cgpa: string;
  cgpaNote: string;
  focusAreas: string[];
}
