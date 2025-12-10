
import AboutBanner from "@/components/ui/AboutBanner";
import AboutSection from "@/components/ui/AboutSection";
import FaqSection from "@/components/stats-section";
import CoachCtaSection from "@/components/ui/CoachCtaSection";
import TestimonialsSection from "@/components/testimonials-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-14">
      <AboutBanner />
       <AboutSection/>
       <CoachCtaSection/>
       <FaqSection/>
       <TestimonialsSection/>
    </div>
  );
}
