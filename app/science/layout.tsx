import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("/science");

export default function ScienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
