export interface SubService {
  name: string;
  description: string;
  benefits: string[];
  process: string[];
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  iconName: string; // Used for dynamic Lucide icon rendering
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  process: string[];
  imageUrl: string;
  subServices: SubService[];
}

export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Industrial" | "Road Construction" | "Engineering" | "Architecture";
  client: string;
  location: string;
  year: string;
  size: string;
  value: string;
  imageUrl: string;
  summary: string;
  description: string;
  challenges: string[];
  solutions: string[];
  scope: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
  quote: string;
  projectAssociated: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  qualifications: string[];
  email: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface CoreValue {
  title: string;
  description: string;
  iconName: string;
}
