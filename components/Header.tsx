"use client";

import { useEffect, useState } from "react";
import type { Content, Lang } from "@/content/types";

const sections = ["about", "skills", "experience", "projects", "contact"] as const;

export function Header({ lang, nav }: { lang: Lang; nav: Content["nav"] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`header${open ? " open" : ""}`}>
      <div className="header-inner">
        <a className="logo" href="#about" onClick={() => setOpen(false)}>
          <span className="logo-mark">VL</span>
          <span className="logo-name">Vinicius Leite</span>
        </a>

        <nav id="main-nav" aria-label={lang === "pt" ? "Seções" : "Sections"}>
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : undefined}
              aria-current={active === id ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {nav[id]}
            </a>
          ))}
        </nav>

        <div className="lang" role="group" aria-label={lang === "pt" ? "Idioma" : "Language"}>
          {/* PT e EN têm layouts raiz diferentes, então a troca é uma navegação completa. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" hrefLang="pt-BR" className={lang === "pt" ? "active" : undefined} aria-current={lang === "pt" ? "true" : undefined}>
            PT
          </a>
          <a href="/en" hrefLang="en" className={lang === "en" ? "active" : undefined} aria-current={lang === "en" ? "true" : undefined}>
            EN
          </a>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
