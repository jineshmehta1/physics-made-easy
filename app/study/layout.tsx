import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("/study");

export default function StudyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
