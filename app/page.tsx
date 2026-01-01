import  HeroSection  from "@/components/hero-section"
import  CoursesSection  from "@/components/events-preview"
import  DemoBookingCTA  from "@/components/demo-booking-cta"
import  TestimonialsSection  from "@/components/testimonials-section"
import  FaqSection  from "@/components/stats-section"
import  FeaturesSection  from "@/components/features-section"
import AchievementsSection from "@/components/ui/AchievementsSection"
import WhyChooseUsSection from "@/components/why-choose"
import LearningEnvironment from "@/components/ui/learning"
import PhilosophySection from "@/components/philoshophy"
import LeadInstructorSection from "@/components/lead"
import ResultsSection from "@/components/result"
import ResourcesSection from "@/components/material"
import GallerySection from "@/components/gallery"
import SuccessStories from "@/components/sucess"
import CareerGuidance from "@/components/carrier"
import CareerCompass from "@/components/carrierCompass"


export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <WhyChooseUsSection/>
        <LeadInstructorSection/>
        <CareerGuidance/>
        <CareerCompass/>
        <CoursesSection />
        <PhilosophySection/>
        <SuccessStories/>
        <ResultsSection/>
        <TestimonialsSection />
        <GallerySection/>
        <ResourcesSection/>
        <FaqSection />
        <DemoBookingCTA />
      </main>
    </div>
  )
}
