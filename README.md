# Portfólio · Vinicius Leite

Portfólio pessoal em Next.js (App Router), com versão em português (`/`) e em inglês (`/en`).

## Rodando localmente

```bash
npm install
```

```bash
npm run dev
```

O site abre em `http://localhost:3000`.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Textos, experiências e projetos (PT) | `content/pt.ts` |
| Textos, experiências e projetos (EN) | `content/en.ts` |
| E-mail, WhatsApp, redes e tecnologias | `content/site.ts` |
| Cores, espaçamentos e animações | `app/globals.css` |
| Seções da página | `components/Portfolio.tsx` |

Imagens ficam em `public/`: `projects/` (capas dos projetos), `people/` (fotos) e `icons/` (tecnologias).

## Deploy

O projeto está ligado à Vercel: cada push na `main` publica em produção.
