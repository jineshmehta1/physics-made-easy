import DemoBookingCTA from "@/components/demo-booking-cta";
import CoursesSection from "@/components/events-preview";
import TestimonialsSection from "@/components/testimonials-section";
import Curriculum from "@/components/ui/CarriclulamBanner";
import SkillOutcomesSection from "@/components/ui/skills";
import TeachingMethodologySection from "@/components/ui/teaching";
export default function CarriculamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-14">
      <Curriculum />
      <CoursesSection />
      <TeachingMethodologySection />
      <SkillOutcomesSection />
      <TestimonialsSection />
      <DemoBookingCTA />
    </div>
  );
}
