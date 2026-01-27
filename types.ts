
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  techStack: string[];
  features: string[];
  challenges: string;
  learned: string;
  liveUrl: string;
  githubUrl: string;
  category: 'Full-Stack' | 'Frontend' | 'Backend' | 'Web3';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  icon: string;
  color: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  icon?: string;
}
