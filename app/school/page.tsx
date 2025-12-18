"use client"

import { Button } from "@/components/ui/button"
import { 
  ArrowRight, BookOpen, Heart, Shield, Sun, 
  Users, Trophy, Clock, Utensils, Palette, 
  Music, Microscope, Bus, Smile, CheckCircle2,
  MapPin, MousePointer2
} from "lucide-react"
import { DynamicGallery } from "@/components/dynamicgallery"
import { DynamicReviews } from "@/components/dynamicreviews"
import { DynamicCourses } from "@/components/dynamiccourses"
import ColorfulFAQSection from "@/components/pagesfaq"
import PrimaryCTA from "@/components/schoolcta"
import PrimaryBanner from "@/components/ui/primaryBanner"
import FunStatsSection from "@/components/ui/primary-stat"
import AboutSection from "@/components/ui/parent"
import DayAtSchoolSection from "@/components/ui/dayatschool"
import FacilitiesSection from "@/components/ui/facility"
import WhyChooseUsSection from "@/components/ui/whyprimary"
import { SuccessStoriesSection } from "@/components/dynamicsucess"

export default function PrimarySchoolPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* -------------------------------------------------------------------------- */
      /*                               1. HERO SECTION                               */
      /* -------------------------------------------------------------------------- */}
      <section className="pt-14 pb-20 px-6 relative overflow-hidden bg-amber-50/50">
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-100/40 rounded-full blur-[80px] -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-amber-200/30 rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md text-amber-800 font-bold text-sm border border-amber-100">
              <Sun className="text-amber-500 w-4 h-4" /> 
              <span>Admissions Open for 2024-25</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1]">
              Sparking <span className="text-amber-500">Curiosity</span>,<br/>
              Building <span className="text-slate-700">Dreams</span>.
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              We don't just teach subjects; we nurture happy, confident, and creative children ready to take on the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="h-14 px-8 bg-amber-500 hover:bg-[#b08d21] text-white rounded-full font-bold text-lg shadow-lg shadow-amber-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                Book a School Tour
              </Button>
              <Button variant="outline" className="h-14 px-8 border-2 border-slate-900 text-slate-900 rounded-full font-bold text-lg hover:bg-slate-900 hover:text-white transition-all">
                Download Curriculum
              </Button>
            </div>
            
            {/* Mini Trust Indicators */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-sm font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-amber-500 w-5 h-5" /> CBSE Curriculum
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-amber-500 w-5 h-5" /> 20:1 Student Ratio
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-500 border-8 border-white">
              <img 
                src="/pic15.webp" 
                alt="Happy Primary School Kids" 
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce-slow border border-amber-100">
              <div className="bg-amber-100 p-3 rounded-full text-amber-500">
                <Trophy size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-lg">#1 Ranked</p>
                <p className="text-xs text-slate-500 font-bold uppercase">Primary School</p>
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -top-10 -right-10 grid grid-cols-4 gap-2 opacity-50">
               {[...Array(16)].map((_,i) => <div key={i} className="w-2 h-2 rounded-full bg-amber-500"></div>)}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUsSection/>

      {/* -------------------------------------------------------------------------- */
      /*                             2. STATS BAR                                    */
      /* -------------------------------------------------------------------------- */}
      <FunStatsSection/>

      {/* -------------------------------------------------------------------------- */
      /*                          3. ABOUT / WHY CHOOSE US                           */
      /* -------------------------------------------------------------------------- */}
      <AboutSection/>

      <div className="py-12">
        <SuccessStoriesSection 
            badge="Champions"
            title="Our Wall of"
            titleHighlight="Fame"
            subtitle="Meet the students who redefined their limits and achieved the impossible."
        />
      </div>

      {/* -------------------------------------------------------------------------- */
      /*                           4. ACADEMICS & PROGRAMS                           */
      /* -------------------------------------------------------------------------- */}
      <div className="bg-slate-50 py-12">
        <DynamicCourses category="primary" />
      </div>

      {/* -------------------------------------------------------------------------- */
      /*                          5. A DAY AT SCHOOL (Timeline)                      */
      /* -------------------------------------------------------------------------- */}
      <DayAtSchoolSection/>

      {/* -------------------------------------------------------------------------- */
      /*                          6. FACILITIES GRID                                 */
      /* -------------------------------------------------------------------------- */}
      
      <FacilitiesSection/>
      {/* -------------------------------------------------------------------------- */
      /*                      7. DYNAMIC CONTENT (Reviews & Gallery)                 */
      /* -------------------------------------------------------------------------- */}
      <DynamicGallery 
        category="primary" 
        title="Smiles & Success" 
        subtitle="Capturing moments of joy, learning, and friendship on campus."
      />
      
      <div className="bg-amber-50/50 py-12">
        <DynamicReviews category="primary" />
      </div>

      {/* -------------------------------------------------------------------------- */
      /*                          8. FAQ SECTION                                     */
      /* -------------------------------------------------------------------------- */}
      <ColorfulFAQSection/>

      {/* -------------------------------------------------------------------------- */
      /*                               9. CTA SECTION                                */
      /* -------------------------------------------------------------------------- */}
      <PrimaryCTA/>

    </div>
  )
}

// Helper icon component since MonitorPlay isn't standard in all lucide versions
function MonitorPlay(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  )
}