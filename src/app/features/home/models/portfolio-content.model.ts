export interface PortfolioProfile {
  name: string;
  initials: string;
  role: string;
  location: string;
  availability: string;
  headline: { firstLine: string; secondLine: string; accent: string };
  introduction: string;
  photoUrl: string;
  photoAlt: string;
  email: string;
  whatsappUrl: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  dates: string;
  title: string;
  organization: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}

export interface ProjectCaseStudy {
  id: string;
  category: 'production' | 'learning';
  title: string;
  role: string;
  industry: string;
  year: string;
  summary: string;
  outcome: string;
  technologies: string[];
  visualTheme: 'art-orange' | 'art-lilac' | 'art-mint';
  shapeOne: string;
  shapeTwo: string;
  featured: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  attribution: string;
}

export interface AboutStory {
  introduction: string;
  chapters: {
    label: string;
    text: string;
    photoGroups?: {
      label: string;
      illustrative?: boolean;
      photos: {
        id: string;
        src: string | null;
        alt: string;
        caption: string;
        attribution: string;
        attributionUrl: string;
      }[];
    }[];
  }[];
  offClock?: string;
  featuredPhoto: {
    src: string | null;
    alt: string;
    attribution: string;
    attributionUrl: string;
  };
  visualCaption: string;
}

export interface PortfolioContent {
  profile: PortfolioProfile;
  metrics: Metric[];
  experience: ExperienceItem[];
  skillGroups: SkillGroup[];
  projects: ProjectCaseStudy[];
  testimonial: Testimonial | null;
  about: AboutStory;
}
