export interface TechItem {
  name: string;
  icon: string;
}

export interface TechCategory {
  name: string;
  technologies: TechItem[];
}

export interface Company {
  name: string;
  url?: string;
  logo?: string;
}

export interface Details {
  summary: string;
  achievements: string[];
}

export interface Experience { // Revisar si agregar 'mode' (Full-Time, Part-Time, Internship, etc.)
  id: number;
  position: string;
  period: string;
  company: Company;
  details: Details;
  technologies: string[];
}