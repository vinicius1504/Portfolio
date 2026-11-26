"use client";

import { useEffect } from "react";

// Efeitos globais sem estado: revelar ao rolar, brilho que segue o cursor nos cards
// e o estado "rolado" do cabeçalho.
export function Effects() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    // O que já está na tela fica visível de imediato, sem piscar após a hidratação.
    for (const el of targets) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in");
    }
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    for (const el of targets) if (!el.classList.contains("in")) observer.observe(el);

    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>(".spot");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });

    const onScroll = () => root.classList.toggle("scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      document.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
