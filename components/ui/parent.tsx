"use client"

import { MapPin, MousePointer2, Heart, BookOpen, Shield, Users, Star, Sun, Cloud, Check } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Doodles for Kid-Friendly Vibe */}
      <div className="absolute top-10 left-10 text-amber-200 animate-bounce-slow"><Sun size={48} /></div>
      <div className="absolute bottom-10 right-10 text-blue-100"><Cloud size={64} fill="currentColor" /></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs uppercase tracking-wider mb-4 border border-amber-200">
             <Star size={12} fill="currentColor" /> The Difference
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900">
            Why Parents <span className="text-amber-500 underline decoration-wavy decoration-amber-200 underline-offset-4">Trust Us?</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
           
           {/* LEFT: Story & Process */}
           <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                "Every Child is a <span className="bg-amber-100 px-2 rounded-lg text-amber-700 inline-block transform -rotate-2">Star</span> in the Making"
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                We move beyond rote learning. Our campus is a playground of ideas where we blend values, confidence, and creativity to build a strong foundation.
              </p>
              
              {/* Contact Pills */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-sm font-bold text-slate-700">
                  <MapPin className="text-amber-500 w-4 h-4" /> Main Campus
                </div>
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-sm font-bold text-slate-700">
                  <MousePointer2 className="text-amber-500 w-4 h-4" /> www.primaryschool.com
                </div>
              </div>

              {/* Admission Process Box (Checklist Style) */}
              <div className="bg-amber-50 p-6 rounded-3xl border-2 border-amber-100 relative">
                <h4 className="font-black text-amber-900 mb-4 flex items-center gap-2 text-lg">
                  🚀 Simple Steps to Join
                </h4>
                <div className="space-y-3">
                  {[
                    "Visit Website / Campus",
                    "Fill Enquiry Form",
                    "Meet the Teachers",
                    "Welcome Aboard!",
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-amber-100 shadow-sm">
                      <div className="w-6 h-6 bg-amber-400 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                        {index + 1}
                      </div>
                      <span className="text-slate-700 font-bold text-sm">{step}</span>
                      <Check className="ml-auto w-4 h-4 text-green-500" />
                    </div>
                  ))}
                </div>
              </div>
           </div>

           {/* RIGHT: Colorful Feature Cards */}
           <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: Heart, title: "Emotional Growth", desc: "EQ > IQ Focus", color: "text-rose-500", bg: "bg-rose-50", border: "hover:border-rose-200" },
                { icon: BookOpen, title: "Curiosity First", desc: "Inquiry Learning", color: "text-blue-500", bg: "bg-blue-50", border: "hover:border-blue-200" },
                { icon: Shield, title: "100% Safe", desc: "Gated Campus", color: "text-green-600", bg: "bg-green-50", border: "hover:border-green-200" },
                { icon: Users, title: "20:1 Ratio", desc: "Personal Focus", color: "text-amber-600", bg: "bg-amber-50", border: "hover:border-amber-200" }
              ].map((item, i) => (
                <div key={i} className={`group p-6 rounded-[2rem] bg-white border-2 border-slate-50 shadow-sm hover:shadow-xl ${item.border} transition-all duration-300 hover:-translate-y-1 text-center cursor-default`}>
                  <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon size={28} />
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                </div>
              ))}
           </div>

        </div>
      </div>
    </section>
  )
}