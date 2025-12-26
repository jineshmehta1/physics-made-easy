"use client";

import React from "react";
import { 
  Star, 
  Quote, 
  Sparkles, 
  Atom, 
  Brain, 
  Zap, 
  Microscope 
} from "lucide-react";

// --- Real Data from your context ---
const testimonials = [
  {
    id: 1,
    name: "HCI Student",
    role: "A-Level Physics",
    text: "Mr. Chew is a dedicated and efficient Physics tutor. The comprehensive notes and didactic teaching style helped me internalize concepts. Under his guidance, I scored 85% for Prelims and an A for A Levels.",
    rating: 5,
    initials: "HC",
    icon: Atom, // Physics Icon
    gradient: "from-teal-100 to-emerald-200",
    iconColor: "text-teal-500"
  },
  {
    id: 2,
    name: "Ryan's Parent",
    role: "RI IP Physics Student",
    text: "Ryan will always be thankful for your guidance. Your passion helped motivate him when he found Physics tough. He is and will always be grateful for your help on the subject.",
    rating: 5,
    initials: "RP",
    icon: Zap, // Energy/Physics Icon
    gradient: "from-amber-100 to-orange-200",
    iconColor: "text-amber-500"
  },
  {
    id: 3,
    name: "Samuel's Mother",
    role: "Parent (Special Needs Support)",
    text: "He has improved both his confidence and grades after only a couple of months of lessons. Mr. Chew's patience with ADHD students is truly commendable.",
    rating: 5,
    initials: "SM",
    icon: Brain, // Cognitive/MI Icon
    gradient: "from-indigo-100 to-purple-200",
    iconColor: "text-indigo-500"
  },
  {
    id: 4,
    name: "EJC Student",
    role: "JC Physics",
    text: "A very professional teacher who provides excellent materials. Mr. Chew helps grasp key concepts quickly. The revision lessons were clearly presented and helped me score 90% for Paper 3.",
    rating: 5,
    initials: "EJ",
    icon: Microscope, // Science Icon
    gradient: "from-blue-100 to-cyan-200",
    iconColor: "text-blue-500"
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white font-sans overflow-hidden">
      
      {/* --- Background Pattern (Scientific Grid) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
           style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* --- Ambient Glows --- */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* --- Centered Title --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 shadow-sm text-slate-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
            <span>Student & Parent Reviews</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Real Results. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
              Transformative Learning.
            </span>
          </h2>
          <p className="text-slate-600 text-lg">
            Hear from students who moved from confusion to clarity, and parents who saw confidence soar.
          </p>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-teal-900/5 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              
              {/* Decorative Physics Icon Background (Watermark) */}
              <div className="absolute top-[-10px] right-[-10px] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rotate-12">
                <item.icon size={150} />
              </div>

              {/* Quote Icon */}
              <div className="mb-6 opacity-30">
                <Quote size={40} className="fill-slate-400 text-slate-400" />
              </div>

              {/* Review Text */}
              <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10 font-medium italic">
                "{item.text}"
              </p>

              {/* Divider */}
              <div className="h-px bg-slate-100 w-full mb-6"></div>

              {/* Author Section */}
              <div className="flex items-center gap-4 relative z-10">
                {/* Initials Avatar */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-slate-700 font-bold text-xl shadow-inner border border-white/50`}>
                  {item.initials}
                </div>
                
                <div>
                  <h4 className="text-slate-900 font-bold text-base flex items-center gap-2">
                    {item.name}
                    {/* Small Rating Stars next to name */}
                    <div className="flex gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <item.icon className={`w-3.5 h-3.5 ${item.iconColor}`} />
                    <p className="text-slate-500 text-sm font-medium">
                        {item.role}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* --- Bottom CTA --- */}
        <div className="text-center mt-12 flex flex-col items-center gap-2">
            <p className="text-slate-500 text-sm">
                Join our community of high achievers.
            </p>
            <div className="flex gap-1 text-amber-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
            </div>
            <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mt-1">
                5.0 Rated on Google Reviews
            </p>
        </div>

      </div>
    </section>
  );
}