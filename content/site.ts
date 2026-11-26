// Dados que não mudam com o idioma: contatos, redes e tecnologias.

export const site = {
  name: "Vinicius Leite",
  url: "https://viniciusleite.dev.br",
  photo: "/people/vinicius.jpg",
  email: "viniciusleitedev@gmail.com",
  whatsapp: "5567992236060",
  social: {
    github: "https://github.com/vinicius1504",
    linkedin: "https://www.linkedin.com/in/vinicius-gabriel-benites-leite-51b3001b6/",
    discord: "https://discord.gg/underr",
  },
};

export type Skill = { name: string; icon: string };

export const skillRows: Skill[][] = [
  [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Python", icon: "python" },
    { name: "PHP", icon: "php" },
    { name: "Java", icon: "java" },
  ],
  [
    { name: "Angular", icon: "angular" },
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Vite", icon: "vite" },
    { name: "Git", icon: "git" },
  ],
];
