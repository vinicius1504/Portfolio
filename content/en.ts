import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Vinicius Leite · Developer",
    description:
      "Portfolio of Vinicius Leite, a Full-Stack Developer based in Campo Grande, Brazil. TypeScript, Node.js, React, automations and WhatsApp integrations.",
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
    role: "Full-Stack Developer",
    location: "Campo Grande - Mato Grosso do Sul, Brazil",
    description:
      "Full-Stack Developer with experience in TypeScript, Node.js (Fastify) and React. I build new systems and handle the maintenance, optimization and modernization of existing applications, including legacy code migration.",
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
        company: "Dourado Cash",
        position: "Mid-level Full-Stack Developer (Contractor)",
        period: "February, 2026 - December, 2026",
        description:
          "Full-stack development with React, Vite and Fastify, focused on building new systems and on the maintenance, optimization and continuous evolution of the company's applications, ensuring quality, performance and scalability.",
      },
      {
        company: "Milliontech",
        position: "Junior Full-Stack Developer",
        period: "Freelance",
        description:
          "Full-stack development with React, Vite and Fastify. Implemented new features, handled internal company requests and migrated legacy code to up-to-date technologies.",
      },
      {
        company: "globoo.io",
        url: "https://globoo.io",
        position: "Junior Software Developer",
        period: "April, 2025 - December, 2025",
        description:
          "Project with Angular (front end), a microservices back end, automation in Python and systems maintenance.",
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
  education: {
    eyebrow: "Education",
    title: "Education and courses",
    degreesTitle: "Degrees",
    coursesTitle: "Courses",
    degrees: [
      {
        title: "Postgraduate degree in Machine Learning Engineering",
        school: "Anhanguera",
        status: "In progress",
      },
      {
        title: "Systems Analysis and Development",
        school: "Uniasselvi",
        status: "Completed",
      },
    ],
    courses: [
      { title: "Web Development – Front End", school: "SENAC", hours: "108 h" },
      { title: "Computer Maintenance and Electronics", school: "CEBRAC", hours: "108 h" },
      { title: "Web Programming", school: "ESCON", hours: "92 h" },
      { title: "Power BI Fundamentals", school: "Fundação Bradesco", hours: "37 h" },
      { title: "Introduction to Python", school: "Fundação Bradesco", hours: "37 h" },
    ],
    languages: "Languages: Portuguese (native), English (intermediate)",
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
        title: "DuckChat",
        description:
          "Multi-tenant SaaS for customer service, sales and scheduling over WhatsApp, with AI agents that reply instantly and hand off to a team member when the customer needs one.",
        technologies: ["Next.js", "Hono", "PostgreSQL", "Drizzle", "TypeScript"],
        accent: "#ffc42e",
        link: { href: "https://github.com/vinicius1504/duckzap", kind: "github" },
      },
      {
        title: "PlannerDuck",
        description:
          "Personal productivity platform with Kanban, a document editor, calendar and an AI-powered WhatsApp bot.",
        technologies: ["Next.js", "React", "PostgreSQL", "Prisma", "Tailwind CSS"],
        accent: "#8b5cf6",
        link: { href: "https://github.com/vinicius1504/PlannerDuck", kind: "github" },
      },
      {
        title: "Coup: Dev Edition",
        description:
          "A bluffing and deduction card game with a developer theme. You against 1 to 5 bots, right in the browser.",
        technologies: ["Next.js", "React", "TypeScript", "Three.js", "Vitest"],
        image: "/projects/coup-dev-edition.png",
        link: { href: "https://coup-dev-edition.vercel.app", kind: "site" },
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
