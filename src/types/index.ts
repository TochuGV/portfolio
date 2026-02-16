export interface TechItem {
  name: string;
  icon: string;
}

export interface TechCategory {
  name: string;
  technologies: TechItem[];
}

export interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string;
}