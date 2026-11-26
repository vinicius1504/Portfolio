import type { Content } from "./types";

export const pt: Content = {
  meta: {
    title: "Vinicius Leite · Desenvolvedor",
    description:
      "Portfólio de Vinicius Leite, Desenvolvedor Full-Stack em Campo Grande - MS. TypeScript, Node.js, React, automações e integrações com WhatsApp.",
  },
  nav: {
    about: "Sobre",
    skills: "Tecnologias",
    experience: "Experiência",
    projects: "Projetos",
    contact: "Contato",
  },
  hero: {
    eyebrow: "Olá, eu sou",
    role: "Desenvolvedor Full-Stack",
    location: "Campo Grande - Mato Grosso do Sul",
    description:
      "Desenvolvedor Full-Stack com experiência em TypeScript, Node.js (Fastify) e React. Crio novos sistemas e cuido da manutenção, otimização e modernização de aplicações existentes, incluindo a migração de código legado.",
    ctaProjects: "Ver projetos",
    ctaContact: "Fale comigo",
    scroll: "Role para ver mais",
  },
  skills: {
    eyebrow: "Tecnologias",
    title: "Com o que eu trabalho",
  },
  experience: {
    eyebrow: "Trajetória",
    title: "Experiência",
    current: "Atual",
    items: [
      {
        company: "Dourado Cash",
        position: "Desenvolvedor Full-Stack Pleno (PJ)",
        period: "Fevereiro, 2026 - Dezembro, 2026",
        description:
          "Desenvolvimento Full Stack com React, Vite e Fastify, com foco na criação de novos sistemas e na manutenção, otimização e evolução contínua das aplicações da empresa, garantindo qualidade, performance e escalabilidade.",
      },
      {
        company: "Milliontech",
        position: "Desenvolvedor Full-Stack Junior",
        period: "Freelance",
        description:
          "Desenvolvimento Full Stack com React, Vite e Fastify. Implementação de novas funcionalidades, atendimento a demandas internas da empresa e migração de código legado para tecnologias atualizadas.",
      },
      {
        company: "globoo.io",
        url: "https://globoo.io",
        position: "Desenvolvedor de Software Junior",
        period: "Abril, 2025 - Dezembro, 2025",
        description:
          "Projeto com Angular (front-end), back-end em microsserviços, automação em Python e manutenção de sistemas.",
      },
      {
        company: "Lima e Pegolo",
        url: "https://www.limaepegolo.com.br",
        position: "Auxiliar de Tecnologia",
        period: "Novembro, 2023 - Outubro, 2024",
        description:
          "Suporte de TI e atendimento a usuários: abertura/triagem de chamados, configuração de estações e pacotes Office, apoio a sistemas jurídicos, documentação e controle de SLA.",
      },
      {
        company: "Aceleração Jurídica",
        url: "https://www.aceleracaojuridica.com.br",
        position: "Desenvolvedor Back-end (PHP)",
        period: "Agosto, 2023 - Novembro, 2023",
        description:
          "Desenvolvimento back-end em PHP: criação de endpoints e integrações, manutenção corretiva e evolutiva, consultas SQL e versionamento com Git.",
      },
      {
        company: "Telemont",
        url: "https://www.telemont.com.br",
        position: "Auxiliar Técnico de Projetos II",
        period: "Maio, 2022 - Fevereiro, 2023",
        description:
          "Apoio à engenharia de projetos de telecom: atualização de cadastros e plantas, controle de documentação técnica, suporte às equipes de campo e interface com fornecedores.",
      },
    ],
  },
  education: {
    eyebrow: "Formação",
    title: "Formação e cursos",
    degreesTitle: "Formação acadêmica",
    coursesTitle: "Cursos",
    degrees: [
      {
        title: "Pós-graduação em Engenharia de Machine Learning",
        school: "Anhanguera",
        status: "Em andamento",
      },
      {
        title: "Análise e Desenvolvimento de Sistemas",
        school: "Uniasselvi",
        status: "Concluída",
      },
    ],
    courses: [
      { title: "Desenvolvimento Web – Front End", school: "SENAC", hours: "108 h" },
      { title: "Manutenção de Computadores e Eletrônica", school: "CEBRAC", hours: "108 h" },
      { title: "Programação Web", school: "ESCON", hours: "92 h" },
      { title: "Fundamentos Power BI", school: "Fundação Bradesco", hours: "37 h" },
      { title: "Introdução ao Python", school: "Fundação Bradesco", hours: "37 h" },
    ],
    languages: "Idiomas: Português (nativo), Inglês (intermediário)",
  },
  projects: {
    eyebrow: "Portfólio",
    title: "Meus projetos",
    viewSite: "Ver projeto",
    viewCode: "Ver código",
    team: "Equipe",
    items: [
      {
        title: "Globoo.io",
        description:
          "Sistema financeiro completo, com exchange, crowdfunding, tokenizadora, bank e community cycle.",
        technologies: ["Angular", "Node.js", "AWS", "C++"],
        image: "/projects/globoo.png",
        link: { href: "https://app.globoo.io", kind: "site" },
        featured: true,
        collaborators: [
          { name: "Vinicius Leite", role: "Desenvolvedor Front-end", image: "/people/vinicius.jpg" },
          { name: "Pedro Trotta", role: "Desenvolvedor Full-Stack", image: "/people/pedro.webp" },
          { name: "Cleverton", role: "Desenvolvedor", image: "/people/cleverton.jpg" },
          { name: "Douglas", role: "Desenvolvedor", image: "/people/douglas.jpg" },
          { name: "Isabela", role: "Designer", image: "/people/isabela.jpg" },
          { name: "José", role: "Desenvolvedor", image: "/people/jose.jpg" },
          { name: "Kevin", role: "Desenvolvedor", image: "/people/kevin.jpg" },
          { name: "Weverton", role: "Desenvolvedor", image: "/people/weverton.jpg" },
        ],
      },
      {
        title: "DuckChat",
        description:
          "SaaS multiempresa de atendimento, vendas e agendamento pelo WhatsApp, com agentes de IA que respondem na hora e chamam uma pessoa da equipe quando o cliente precisa.",
        technologies: ["Next.js", "Hono", "PostgreSQL", "Drizzle", "TypeScript"],
        accent: "#ffc42e",
        link: { href: "https://github.com/vinicius1504/duckzap", kind: "github" },
      },
      {
        title: "PlannerDuck",
        description:
          "Plataforma de produtividade pessoal com Kanban, editor de documentos, calendário e bot de WhatsApp com IA.",
        technologies: ["Next.js", "React", "PostgreSQL", "Prisma", "Tailwind CSS"],
        accent: "#8b5cf6",
        link: { href: "https://github.com/vinicius1504/PlannerDuck", kind: "github" },
      },
      {
        title: "Coup: Dev Edition",
        description:
          "Jogo de cartas de blefe e dedução com tema de desenvolvedores. Você contra 1 a 5 bots, direto no navegador.",
        technologies: ["Next.js", "React", "TypeScript", "Three.js", "Vitest"],
        image: "/projects/coup-dev-edition.png",
        link: { href: "https://coup-dev-edition.vercel.app", kind: "site" },
      },
      {
        title: "Sistema de Controle Financeiro",
        description:
          "Sistema completo para controle de finanças pessoais desenvolvido em PHP, com interface moderna e funcionalidades de relatórios.",
        technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        image: "/projects/controle-financeiro.png",
        link: {
          href: "https://github.com/vinicius1504/Sistema-de-controle-financeiro",
          kind: "github",
        },
      },
      {
        title: "E-commerce de Games",
        description:
          "Plataforma de e-commerce especializada em jogos, com sistema de carrinho, pagamentos e gerenciamento de produtos.",
        technologies: ["Node.js", "React", "MongoDB", "Express"],
        image: "/projects/ecommerce-games.jpg",
        link: { href: "https://github.com/vinicius1504/E-commerceGames", kind: "github" },
      },
      {
        title: "Sistema de Backup",
        description:
          "Ferramenta automatizada para backup de arquivos e bancos de dados, com agendamento e verificação de integridade.",
        technologies: ["Python", "Shell Script", "MySQL", "Cron"],
        image: "/projects/backup.png",
        link: { href: "https://github.com/vinicius1504/Sistema-de-backup", kind: "github" },
      },
    ],
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos trabalhar juntos",
    subtitle: "Entre em contato pelo WhatsApp ou por e-mail.",
    nameLabel: "Nome",
    namePlaceholder: "Digite seu nome",
    phoneLabel: "Telefone",
    phonePlaceholder: "(67) 9 9999-9999",
    messageLabel: "Mensagem",
    messagePlaceholder: "Digite sua mensagem...",
    whatsappButton: "Enviar via WhatsApp",
    emailButton: "Enviar por e-mail",
    fillRequired: "Preencha o nome e a mensagem para enviar.",
    whatsappPrefix: "Olá! Meu nome é",
    emailSubject: "Contato via Portfólio",
  },
  footer: {
    builtBy: "Desenvolvido por",
    madeIn: "Criado no Brasil",
    backToTop: "Voltar ao topo",
  },
};
