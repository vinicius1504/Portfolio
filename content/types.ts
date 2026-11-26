export type Lang = "pt" | "en";

export type Experience = {
  company: string;
  url?: string;
  position: string;
  period: string;
  current?: boolean;
  description: string;
};

export type Collaborator = {
  name: string;
  role: string;
  image: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  /** Capa do projeto. Sem imagem, o card mostra uma capa gerada com o nome. */
  image?: string;
  /** Cor da capa gerada. */
  accent?: string;
  link: { href: string; kind: "site" | "github" };
  featured?: boolean;
  collaborators?: Collaborator[];
};

export type Education = {
  title: string;
  school: string;
  status: string;
};

export type Course = {
  title: string;
  school: string;
  hours: string;
};

export type Content = {
  meta: { title: string; description: string };
  nav: { about: string; skills: string; experience: string; projects: string; contact: string };
  hero: {
    eyebrow: string;
    role: string;
    location: string;
    description: string;
    ctaProjects: string;
    ctaContact: string;
    scroll: string;
  };
  skills: { eyebrow: string; title: string };
  experience: { eyebrow: string; title: string; current: string; items: Experience[] };
  education: {
    eyebrow: string;
    title: string;
    degreesTitle: string;
    coursesTitle: string;
    degrees: Education[];
    courses: Course[];
    languages: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    viewSite: string;
    viewCode: string;
    team: string;
    items: Project[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    whatsappButton: string;
    emailButton: string;
    fillRequired: string;
    whatsappPrefix: string;
    emailSubject: string;
  };
  footer: { builtBy: string; madeIn: string; backToTop: string };
};
