import { buildPageMetadata } from "@/lib/seo";
import AchievementsBanner from "@/components/ui/AchievementsBanner";
import AchievementsSection from "@/components/ui/AchievementsSection";

export const metadata = buildPageMetadata("/achievements");
export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-14">
      <AchievementsBanner />
      <AchievementsSection/>
    </div>
  );
}
