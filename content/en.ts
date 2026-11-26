import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Vinicius Leite · Developer",
    description:
      "Portfolio of Vinicius Leite, a developer based in Campo Grande, Brazil. Websites, systems and web automations.",
  },
  nav: {
    about: "About",
    skills: "Stack",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Hi, I'm",
    role: "Software developer",
    location: "Campo Grande - Mato Grosso do Sul, Brazil",
    description:
      "I'm a Junior Developer and I've been programming for more than 3 years. I build websites, systems and web automations.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    scroll: "Scroll to see more",
  },
  skills: {
    eyebrow: "Stack",
    title: "What I work with",
  },
  experience: {
    eyebrow: "Career",
    title: "Experience",
    current: "Current",
    items: [
      {
        company: "globoo.io",
        url: "https://globoo.io",
        position: "Junior Developer",
        period: "April, 2024 - Present",
        current: true,
        description:
          "Development and maintenance of web applications; implementation of APIs and integrations; participation in sprints, code reviews and documentation; support for deployments.",
      },
      {
        company: "Lima e Pegolo",
        url: "https://www.limaepegolo.com.br",
        position: "IT Assistant",
        period: "November, 2023 - October, 2024",
        description:
          "IT support and user assistance: ticket intake and triage, workstation and Office setup, support for legal systems, documentation and SLA tracking.",
      },
      {
        company: "Aceleração Jurídica",
        url: "https://www.aceleracaojuridica.com.br",
        position: "Back-end Developer (PHP)",
        period: "August, 2023 - November, 2023",
        description:
          "Back-end development in PHP: building endpoints and integrations, corrective and evolutionary maintenance, SQL queries and version control with Git.",
      },
      {
        company: "Telemont",
        url: "https://www.telemont.com.br",
        position: "Technical Project Assistant II",
        period: "May, 2022 - February, 2023",
        description:
          "Support for telecom project engineering: updating records and drawings, managing technical documentation, assisting field teams and liaising with suppliers.",
      },
    ],
  },
  projects: {
    eyebrow: "Portfolio",
    title: "My projects",
    viewSite: "View project",
    viewCode: "View code",
    team: "Team",
    items: [
      {
        title: "Globoo.io",
        description:
          "Complete financial system, with exchange, crowdfunding, tokenizer, bank and community cycle.",
        technologies: ["Angular", "Node.js", "AWS", "C++"],
        image: "/projects/globoo.png",
        link: { href: "https://app.globoo.io", kind: "site" },
        featured: true,
        collaborators: [
          { name: "Vinicius Leite", role: "Front-end Developer", image: "/people/vinicius.jpg" },
          { name: "Pedro Trotta", role: "Full-Stack Developer", image: "/people/pedro.webp" },
          { name: "Cleverton", role: "Developer", image: "/people/cleverton.jpg" },
          { name: "Douglas", role: "Developer", image: "/people/douglas.jpg" },
          { name: "Isabela", role: "Designer", image: "/people/isabela.jpg" },
          { name: "José", role: "Developer", image: "/people/jose.jpg" },
          { name: "Kevin", role: "Developer", image: "/people/kevin.jpg" },
          { name: "Weverton", role: "Developer", image: "/people/weverton.jpg" },
        ],
      },
      {
        title: "Financial Control System",
        description:
          "Complete personal finance system built in PHP, with a modern interface and reporting features.",
        technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        image: "/projects/controle-financeiro.png",
        link: {
          href: "https://github.com/vinicius1504/Sistema-de-controle-financeiro",
          kind: "github",
        },
      },
      {
        title: "Games E-commerce",
        description:
          "E-commerce platform specialized in games, with shopping cart, payments and product management.",
        technologies: ["Node.js", "React", "MongoDB", "Express"],
        image: "/projects/ecommerce-games.jpg",
        link: { href: "https://github.com/vinicius1504/E-commerceGames", kind: "github" },
      },
      {
        title: "Backup System",
        description:
          "Automated tool for file and database backups, with scheduling and integrity checks.",
        technologies: ["Python", "Shell Script", "MySQL", "Cron"],
        image: "/projects/backup.png",
        link: { href: "https://github.com/vinicius1504/Sistema-de-backup", kind: "github" },
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's work together",
    subtitle: "Reach me on WhatsApp or by email.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    phoneLabel: "Phone",
    phonePlaceholder: "+55 (67) 9 9999-9999",
    messageLabel: "Message",
    messagePlaceholder: "Write your message...",
    whatsappButton: "Send via WhatsApp",
    emailButton: "Send by email",
    fillRequired: "Fill in your name and message to send.",
    whatsappPrefix: "Hi! My name is",
    emailSubject: "Contact via Portfolio",
  },
  footer: {
    builtBy: "Built by",
    madeIn: "Made in Brazil",
    backToTop: "Back to top",
  },
};
