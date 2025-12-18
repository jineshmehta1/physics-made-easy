"use client"

import { BookOpen, Microscope, MonitorPlay, Music, Palette, Bus, Star } from "lucide-react"

export default function FacilitiesSection() {
  
  const facilities = [
    { 
      icon: BookOpen, 
      label: "Smart Library", 
      desc: "Books & E-Learning",
      color: "text-amber-600", 
      bg: "bg-amber-100", 
      border: "group-hover:border-amber-400",
      shadow: "group-hover:shadow-amber-100"
    },
    { 
      icon: Microscope, 
      label: "Science Labs", 
      desc: "Discovery Zone",
      color: "text-blue-600", 
      bg: "bg-blue-100", 
      border: "group-hover:border-blue-400",
      shadow: "group-hover:shadow-blue-100"
    },
    { 
      icon: MonitorPlay, 
      label: "Computer Lab", 
      desc: "Coding & Tech",
      color: "text-purple-600", 
      bg: "bg-purple-100", 
      border: "group-hover:border-purple-400",
      shadow: "group-hover:shadow-purple-100"
    },
    { 
      icon: Music, 
      label: "Music Room", 
      desc: "Rhythm & Beats",
      color: "text-rose-600", 
      bg: "bg-rose-100", 
      border: "group-hover:border-rose-400",
      shadow: "group-hover:shadow-rose-100"
    },
    { 
      icon: Palette, 
      label: "Art Studio", 
      desc: "Creative Space",
      color: "text-pink-600", 
      bg: "bg-pink-100", 
      border: "group-hover:border-pink-400",
      shadow: "group-hover:shadow-pink-100"
    },
    { 
      icon: Bus, 
      label: "Transport", 
      desc: "Safe Travel",
      color: "text-green-600", 
      bg: "bg-green-100", 
      border: "group-hover:border-green-400",
      shadow: "group-hover:shadow-green-100"
    },
  ]

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-wider mb-4 shadow-sm">
            <Star size={12} className="text-amber-500 fill-amber-500" /> Campus Life
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Our Cool <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Facilities</span> 🏰
          </h2>
          <p className="text-slate-500 mt-4 text-lg font-medium">Everything your child needs to explore, create, and learn.</p>
        </div>
        
        {/* Colorful Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {facilities.map((fac, i) => (
            <div 
              key={i} 
              className={`
                group bg-white p-6 rounded-[2rem] border-2 border-transparent 
                shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2
                flex flex-col items-center gap-3 cursor-default
                ${fac.border} ${fac.shadow}
              `}
            >
              {/* Icon Bubble */}
              <div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6
                ${fac.bg} ${fac.color}
              `}>
                <fac.icon size={28} strokeWidth={2.5} />
              </div>
              
              {/* Text Info */}
              <div className="space-y-1">
                <span className="block font-bold text-slate-800 text-base">{fac.label}</span>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide group-hover:text-slate-500 transition-colors">
                  {fac.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}