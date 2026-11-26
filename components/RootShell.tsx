import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Content, Lang } from "@/content/types";
import { site } from "@/content/site";
import "@/app/globals.css";

export const viewport: Viewport = {
  themeColor: "#06070d",
  colorScheme: "dark",
};

export function buildMetadata(lang: Lang, content: Content): Metadata {
  const path = lang === "pt" ? "/" : "/en";
  return {
    metadataBase: new URL(site.url),
    title: content.meta.title,
    description: content.meta.description,
    authors: [{ name: site.name, url: site.url }],
    alternates: {
      canonical: path,
      languages: { "pt-BR": "/", en: "/en" },
    },
    openGraph: {
      type: "website",
      url: path,
      title: content.meta.title,
      description: content.meta.description,
      siteName: site.name,
      locale: lang === "pt" ? "pt_BR" : "en_US",
    },
  };
}

export function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang === "pt" ? "pt-BR" : "en"} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
