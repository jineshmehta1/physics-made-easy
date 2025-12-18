"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Sparkles } from "lucide-react"

export default function PrimaryCTA() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 shadow-xl">
          
          {/* Professional Background Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }}></div>
          <div className="absolute -right-10 -top-10 text-white/10"><Sparkles size={100} /></div>

          <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            {/* Left: Text Content */}
            <div className="max-w-xl space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Ready to Spark Your <br/> Child's <span className="text-yellow-200">Genius?</span>
              </h2>
              <p className="text-amber-50 text-base md:text-lg font-medium">
                Admissions open for 2024-25. Join a community where learning is an adventure.
              </p>
              
              {/* Inline Trust Badges */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-bold text-white/90 uppercase tracking-wide pt-2">
                 <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                   ✓ CBSE Curriculum
                 </span>
                 <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                   ✓ No Donation
                 </span>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button className="h-12 px-8 bg-white text-orange-700 hover:bg-slate-50 font-bold text-base rounded-full shadow-md transition-all w-full sm:w-auto">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              
              <Button variant="outline" className="h-12 px-8 bg-transparent border-2 border-white text-white font-bold text-base rounded-full hover:bg-white/10 hover:text-white transition-all w-full sm:w-auto">
                <Calendar className="mr-2 w-4 h-4" />
                Visit Campus
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}