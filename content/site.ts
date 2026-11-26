// Dados que não mudam com o idioma: contatos, redes e tecnologias.

export const site = {
  name: "Vinicius Leite",
  url: "https://viniciusleite.dev.br",
  photo: "/people/vinicius.jpg",
  email: "viniciusleitedev@gmail.com",
  whatsapp: "5567993248936",
  social: {
    github: "https://github.com/vinicius1504",
    linkedin: "https://www.linkedin.com/in/vinicius-gabriel-benites-leite-51b3001b6/",
    discord: "https://discord.gg/underr",
  },
};

export type Skill = { name: string; icon: string };

export const skillRows: Skill[][] = [
  [
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Python", icon: "python" },
    { name: "PHP", icon: "php" },
    { name: "MySQL", icon: "mysql" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Angular", icon: "angular" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
  ],
  [
    { name: "Node.js", icon: "nodejs" },
    { name: "Fastify", icon: "fastify" },
    { name: "NestJS", icon: "nestjs" },
    { name: "Express", icon: "express" },
    { name: "Docker", icon: "docker" },
    { name: "Linux (VPS)", icon: "linux" },
    { name: "n8n", icon: "n8n" },
    { name: "Vite", icon: "vite" },
    { name: "Git", icon: "git" },
  ],
];
