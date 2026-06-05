import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata("/courses");

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
