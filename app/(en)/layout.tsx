import { RootShell, buildMetadata } from "@/components/RootShell";
import { en } from "@/content/en";

export { viewport } from "@/components/RootShell";
export const metadata = buildMetadata("en", en);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
