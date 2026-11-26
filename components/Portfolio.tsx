import Image from "next/image";
import type { Content, Lang } from "@/content/types";
import { site, skillRows, type Skill } from "@/content/site";
import { Background } from "./Background";
import { Effects } from "./Effects";
import { Header } from "./Header";
import { ContactForm } from "./ContactForm";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  DiscordIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PinIcon,
  WhatsappIcon,
} from "./Icons";

const socials = [
  { label: "GitHub", href: site.social.github, Icon: GithubIcon },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
  { label: "WhatsApp", href: `https://wa.me/${site.whatsapp}`, Icon: WhatsappIcon },
  { label: "Discord", href: site.social.discord, Icon: DiscordIcon },
  { label: "E-mail", href: `mailto:${site.email}`, Icon: MailIcon },
];

function Socials() {
  return (
    <ul className="socials">
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-head" data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

function Marquee({ items, reverse }: { items: Skill[]; reverse?: boolean }) {
  // A lista é repetida para o loop ficar contínuo; as cópias ficam fora da leitura de tela.
  const copies = [0, 1, 2, 3];
  return (
    <div className={`marquee${reverse ? " reverse" : ""}`}>
      <div className="marquee-track">
        {copies.map((copy) => (
          <ul key={copy} aria-hidden={copy > 0}>
            {items.map((skill) => (
              <li key={skill.name} className="chip">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/icons/${skill.icon}.svg`} alt="" width={26} height={26} loading="lazy" />
                {skill.name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function Portfolio({ lang, content: c }: { lang: Lang; content: Content }) {
  const [firstName, ...rest] = site.name.split(" ");

  return (
    <>
      <Background />
      <Effects />
      <Header lang={lang} nav={c.nav} />

      <main>
        <section id="about" className="hero container">
          <div className="hero-text">
            <p className="hero-eyebrow">{c.hero.eyebrow}</p>
            <h1>
              {firstName} <span className="gradient-text">{rest.join(" ")}</span>
            </h1>
            <p className="hero-role">
              <span className="role-line" />
              {c.hero.role}
            </p>
            <p className="hero-description">{c.hero.description}</p>
            <p className="hero-location">
              <PinIcon />
              {c.hero.location}
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                {c.hero.ctaProjects}
                <ArrowDownIcon />
              </a>
              <a className="btn btn-ghost" href="#contact">
                {c.hero.ctaContact}
              </a>
            </div>
            <Socials />
          </div>

          <div className="hero-visual" aria-hidden>
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="portrait">
              <Image src={site.photo} alt="" width={420} height={420} priority />
            </div>
            <span className="float-tag tag-a">&lt;dev /&gt;</span>
            <span className="float-tag tag-b">{"{ web }"}</span>
          </div>

          <a className="scroll-hint" href="#skills">
            <span className="mouse" />
            {c.hero.scroll}
          </a>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <SectionHead eyebrow={c.skills.eyebrow} title={c.skills.title} />
          </div>
          <div className="marquees" data-reveal>
            <Marquee items={skillRows[0]} />
            <Marquee items={skillRows[1]} reverse />
          </div>
        </section>

        <section id="experience" className="section container">
          <SectionHead eyebrow={c.experience.eyebrow} title={c.experience.title} />
          <ol className="timeline">
            {c.experience.items.map((item) => (
              <li key={item.company + item.period} data-reveal>
                <span className={`dot${item.current ? " live" : ""}`} />
                <article className="card spot">
                  <header>
                    <div>
                      <h3>{item.position}</h3>
                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noreferrer" className="company">
                          {item.company}
                          <ArrowUpRightIcon size={14} />
                        </a>
                      ) : (
                        <span className="company">{item.company}</span>
                      )}
                    </div>
                    <div className="period">
                      {item.current && <span className="badge">{c.experience.current}</span>}
                      <time>{item.period}</time>
                    </div>
                  </header>
                  <p>{item.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section id="education" className="section container">
          <SectionHead eyebrow={c.education.eyebrow} title={c.education.title} />
          <div className="education">
            <div className="card spot edu-card" data-reveal>
              <h3>{c.education.degreesTitle}</h3>
              <ul className="degrees">
                {c.education.degrees.map((degree) => (
                  <li key={degree.title}>
                    <strong>{degree.title}</strong>
                    <span>
                      {degree.school} · {degree.status}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="languages">{c.education.languages}</p>
            </div>
            <div className="card spot edu-card" data-reveal>
              <h3>{c.education.coursesTitle}</h3>
              <ul className="courses">
                {c.education.courses.map((course) => (
                  <li key={course.title}>
                    <span>
                      <strong>{course.title}</strong>
                      <small>{course.school}</small>
                    </span>
                    <em>{course.hours}</em>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <SectionHead eyebrow={c.projects.eyebrow} title={c.projects.title} />
          <div className="projects">
            {c.projects.items.map((project) => (
              <article
                key={project.title}
                className={`card spot project${project.featured ? " featured" : ""}`}
                data-reveal
              >
                <a
                  className="project-media"
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={-1}
                  aria-hidden
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes={project.featured ? "(max-width: 900px) 100vw, 640px" : "(max-width: 900px) 100vw, 380px"}
                    />
                  ) : (
                    <span className="cover" style={{ "--accent": project.accent } as React.CSSProperties}>
                      <span className="cover-bar">
                        <i />
                        <i />
                        <i />
                      </span>
                      <span className="cover-title">{project.title}</span>
                    </span>
                  )}
                </a>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="tags">
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  {project.collaborators && project.collaborators.length > 1 && (
                    <div className="team">
                      <span>{c.projects.team}</span>
                      <ul>
                        {project.collaborators.map((person) => (
                          <li key={person.name} title={`${person.name} · ${person.role}`}>
                            <Image src={person.image} alt={`${person.name}, ${person.role}`} width={36} height={36} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <a className="project-link" href={project.link.href} target="_blank" rel="noreferrer">
                    {project.link.kind === "github" ? (
                      <>
                        <GithubIcon size={18} />
                        {c.projects.viewCode}
                      </>
                    ) : (
                      c.projects.viewSite
                    )}
                    <ArrowUpRightIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section container">
          <div className="contact card spot" data-reveal>
            <div className="contact-intro">
              <span className="eyebrow">{c.contact.eyebrow}</span>
              <h2>{c.contact.title}</h2>
              <p>{c.contact.subtitle}</p>
              <a className="contact-mail" href={`mailto:${site.email}`}>
                <MailIcon size={18} />
                {site.email}
              </a>
              <Socials />
            </div>
            <ContactForm labels={c.contact} />
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>
          © {c.footer.builtBy} <strong>{site.name}</strong> · {c.footer.madeIn}
        </span>
        <a href="#about">{c.footer.backToTop} ↑</a>
      </footer>
    </>
  );
}
