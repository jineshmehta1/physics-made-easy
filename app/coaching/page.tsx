"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  BookOpen, GraduationCap, PenTool, Calculator, 
  Microscope, Globe, Award, TrendingUp, 
  CheckCircle2, Clock, HelpCircle, Plus, Minus,
  FileText, BrainCircuit, Target, Sparkles
} from "lucide-react"
import { DynamicGallery } from "@/components/dynamicgallery"
import { DynamicReviews } from "@/components/dynamicreviews"
import { DynamicCourses } from "@/components/dynamiccourses"
import WhyChooseCoachingSection from "@/components/ui/whycoaching"
import CBSEFAQSection from "@/components/ui/coachingfaq"
import { SuccessStoriesSection } from "@/components/dynamicsucess"

export default function CBSECoachingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">

      {/* -------------------------------------------------------------------------- */
      /*                               1. HERO SECTION                               */
      /* -------------------------------------------------------------------------- */}
      <section className="pt-14 pb-20 relative overflow-hidden bg-gradient-to-b from-amber-50 to-white">
        
        {/* Background: Geometric Formulas Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230f172a' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }}></div>
        
        {/* Soft Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-200/30 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-amber-200 shadow-sm text-amber-700 font-bold text-sm uppercase tracking-wider">
              <Award size={18} className="text-amber-500" /> Excellence in Education
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] text-slate-900">
              Master Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Syllabus</span> 📚
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              Comprehensive coaching for Grades 6 to 10. We focus on concept clarity, regular practice, and building exam confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="h-14 px-8 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-black text-lg shadow-[0_10px_20px_rgba(245,158,11,0.3)] hover:-translate-y-1 transition-all">
                Book Free Trial
              </Button>
              <Button variant="outline" className="h-14 px-8 bg-white border-2 border-slate-900 text-slate-900 rounded-full font-bold text-lg hover:bg-slate-900 hover:text-white transition-all">
                Download Brochure
              </Button>
            </div>
          </div>
          
          {/* Right Image Composition */}
          <div className="relative group perspective-1000">
             {/* Decorative Border */}
             <div className="absolute inset-0 bg-amber-200 rounded-[2.5rem] rotate-3 scale-105 opacity-60 -z-10 group-hover:rotate-0 transition-all duration-500"></div>
             
             <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl bg-white">
               <img 
                 src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" 
                 alt="Student Studying" 
                 className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
               />
               
               {/* Floating Badge 1 */}
               <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 animate-bounce-slow">
                 <CheckCircle2 size={20} className="text-green-500" />
                 <span className="text-xs font-bold text-slate-700 uppercase">100% Pass Rate</span>
               </div>

               {/* Floating Stats Card (Bottom) */}
               <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4">
                 <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                   <TrendingUp size={24} />
                 </div>
                 <div>
                   <p className="text-xs text-slate-400 uppercase font-bold">Average Score</p>
                   <p className="text-xl font-black text-slate-900">92% +</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */
      /*                             2. ACADEMIC STATS                               */
      /* -------------------------------------------------------------------------- */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around items-center gap-8 text-center">
          {[
            { label: "Students Enrolled", val: "1,500+", icon: GraduationCap },
            { label: "Expert Faculty", val: "25+", icon: PenTool },
            { label: "Toppers Produced", val: "500+", icon: Award },
            { label: "Practice Tests", val: "10k+", icon: FileText },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group cursor-default p-4 rounded-xl hover:bg-amber-50/50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 group-hover:bg-amber-500 border border-amber-100 flex items-center justify-center text-amber-600 group-hover:text-white transition-colors duration-300">
                <item.icon size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-black text-slate-900">{item.val}</h3>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-wide">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseCoachingSection/>

      {/* -------------------------------------------------------------------------- */
      /*                        3. WHY CHOOSE US (Academic Theme)                    */
      /* -------------------------------------------------------------------------- */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              The Aacharya Edge
            </span>
            <h2 className="text-4xl font-black text-slate-900 mt-4">Why Toppers Choose Us? 🏆</h2>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto font-medium">
              We bridge the gap between rote learning and true understanding, ensuring long-term academic success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: BrainCircuit, title: "Concept Clarity", desc: "We focus on 'Why' and 'How', not just memorizing formulas.", color: "text-blue-600", bg: "bg-blue-50" },
               { icon: Target, title: "Exam Strategy", desc: "Learn time management and answering techniques for boards.", color: "text-amber-600", bg: "bg-amber-50" },
               { icon: FileText, title: "Regular Testing", desc: "Weekly chapter-wise tests and full-length mock exams.", color: "text-purple-600", bg: "bg-purple-50" },
               { icon: Clock, title: "Doubt Solving", desc: "Dedicated doubt clearing sessions after every chapter.", color: "text-rose-600", bg: "bg-rose-50" }
             ].map((item, i) => (
               <div key={i} className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-200 hover:-translate-y-2 transition-all duration-300">
                 <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                   <item.icon size={30} strokeWidth={2} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                 <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */
      /*                       4. CURRICULUM (Dynamic Courses)                       */
      /* -------------------------------------------------------------------------- */}
      <div className="bg-white py-16">
        <div className="text-center mb-10">
           <span className="text-slate-400 font-bold uppercase tracking-widest text-sm">Our Batches</span>
           <h2 className="text-4xl font-black text-slate-900 mt-2">Classes We Coach</h2>
        </div>
        <DynamicCourses category="coaching" />
      </div>

      {/* -------------------------------------------------------------------------- */
      /*                       5. THE METHODOLOGY (Roadmap)                          */
      /* -------------------------------------------------------------------------- */}
      <section className="py-24 bg-amber-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             
             {/* Left: Text & Process */}
             <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                  The 4-Step <br/>
                  <span className="text-amber-500">Success Cycle</span> 🔄
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  Our proven methodology ensures that students not only complete the syllabus but master it.
                </p>
                
                <div className="space-y-4">
                  {[
                    { step: "Learn", desc: "Interactive lectures & real-life examples." },
                    { step: "Practice", desc: "Daily worksheets & NCERT solutions." },
                    { step: "Assess", desc: "Weekly quizzes & performance analysis." },
                    { step: "Refine", desc: "Doubt clearing & remedial classes." },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-6 bg-white p-4 rounded-2xl border border-amber-100 shadow-sm transition-transform hover:translate-x-2">
                      <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">{item.step}</h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>

             {/* Right: Image */}
             <div className="relative">
                <div className="absolute inset-0 bg-slate-200 rounded-[2.5rem] rotate-6 opacity-30 transform translate-x-4"></div>
                <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl bg-white">
                  <img 
                    src="/sucess.jpg" 
                    className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700"
                    alt="Classroom Coaching"
                  />
                </div>
                {/* Floating Note */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs">
                   <div className="flex gap-2 mb-2">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                   </div>
                   <p className="text-xs font-bold text-slate-500">Goal</p>
                   <p className="text-lg font-black text-slate-900">Score 95% +</p>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */
      /*                       6. SUBJECTS STACK (Grid)                              */
      /* -------------------------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-12">Subjects We Master 📖</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: Calculator, label: "Mathematics", desc: "Logic & Practice", color: "text-amber-600", bg: "bg-amber-100" },
              { icon: Microscope, label: "Science", desc: "Bio, Chem, Physics", color: "text-blue-600", bg: "bg-blue-100" },
              { icon: Globe, label: "Social Science", desc: "History & Civics", color: "text-rose-600", bg: "bg-rose-100" },
              { icon: PenTool, label: "English", desc: "Grammar & Lit", color: "text-green-600", bg: "bg-green-100" },
              { icon: BrainCircuit, label: "Hindi / Lang", desc: "Core Basics", color: "text-purple-600", bg: "bg-purple-100" },
            ].map((tool, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-amber-400 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-center gap-3 group cursor-default">
                <div className={`w-14 h-14 ${tool.bg} ${tool.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <tool.icon size={28} />
                </div>
                <div>
                  <span className="block font-bold text-slate-900 text-lg">{tool.label}</span>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide">{tool.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-12">
        <SuccessStoriesSection 
            badge="Champions"
            title="Our Wall of"
            titleHighlight="Fame"
            subtitle="Meet the students who redefined their limits and achieved the impossible."
        />
      </div>

      {/* -------------------------------------------------------------------------- */
      /*                      7. GALLERY & REVIEWS                                   */
      /* -------------------------------------------------------------------------- */}
      <div className="py-12 bg-white">
        <DynamicGallery 
            category="coaching" 
            title="Classroom Vibes" 
            subtitle="Serious learning, serious fun."
        />
      </div>

      <div className="bg-slate-50 py-12 border-y border-slate-100">
         <DynamicReviews category="coaching" />
      </div>

      {/* -------------------------------------------------------------------------- */
      /*                          8. FAQ (Coaching Specific)                         */
      /* -------------------------------------------------------------------------- */}
      <CBSEFAQSection/>

      {/* -------------------------------------------------------------------------- */
      /*                               9. CTA SECTION                                */
      /* -------------------------------------------------------------------------- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-amber-500 to-orange-600 shadow-xl shadow-orange-200">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="relative z-10 p-10 md:p-16 text-center">
               <Sparkles className="w-16 h-16 text-white mx-auto mb-6 animate-pulse" />
               <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                 Start Your Success Story
               </h2>
               <p className="text-amber-50 text-xl font-medium mb-10 max-w-2xl mx-auto">
                 Don't wait for exams to get closer. Build a strong foundation today.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button className="h-14 px-10 bg-white text-amber-600 hover:bg-slate-50 font-black text-lg rounded-full shadow-lg transition-all">
                   Enroll Now
                 </Button>
                 <Button variant="outline" className="h-14 px-10 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-amber-600 transition-all">
                   Talk to Teacher
                 </Button>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}