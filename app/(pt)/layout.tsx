import { RootShell, buildMetadata } from "@/components/RootShell";
import { pt } from "@/content/pt";

export { viewport } from "@/components/RootShell";
export const metadata = buildMetadata("pt", pt);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="pt">{children}</RootShell>;
}
