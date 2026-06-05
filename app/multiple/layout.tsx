import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("/multiple");

export default function MultipleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
