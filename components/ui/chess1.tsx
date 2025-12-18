"use client";

import { Brain, Target, Swords, Users, ArrowRight, Sparkles } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Brain,
      title: "IQ & Concentration",
      desc: "Chess stimulates dendrite growth, improving memory, problem-solving, and extending focus span.",
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "hover:border-purple-200",
      gradient: "from-purple-50 to-white",
    },
    {
      icon: Target,
      title: "Strategic Thinking",
      desc: "Teaches the art of planning, foresight, and understanding that every move has a consequence.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "hover:border-blue-200",
      gradient: "from-blue-50 to-white",
    },
    {
      icon: Swords,
      title: "Competitive Spirit",
      desc: "Builds resilience. Kids learn to handle wins with grace and losses as lessons for improvement.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "hover:border-amber-200",
      gradient: "from-amber-50 to-white",
    },
    {
      icon: Users,
      title: "Social Intelligence",
      desc: "Interacting with opponents and teammates builds sportsmanship, patience, and non-verbal communication.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "hover:border-emerald-200",
      gradient: "from-emerald-50 to-white",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background: Subtle Chess Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'repeating-linear-gradient(45deg, #0f172a 25%, transparent 25%, transparent 75%, #0f172a 75%, #0f172a), repeating-linear-gradient(45deg, #0f172a 25%, transparent 25%, transparent 75%, #0f172a 75%, #0f172a)', 
          backgroundPosition: '0 0, 10px 10px', 
          backgroundSize: '20px 20px' 
        }}
      ></div>

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles size={12} className="text-[#C9A227] fill-[#C9A227]" /> 
            Beyond the Board
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Developing Minds, <br/>
            <span className="text-[#C9A227]">One Move at a Time</span> 🧠
          </h2>
          <p className="text-slate-500 mt-4 text-lg max-w-2xl mx-auto font-medium">
            Chess is the gymnasium of the mind. Here’s how we shape future leaders through the game.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, i) => (
            <div 
              key={i} 
              className={`
                group relative bg-gradient-to-br ${item.gradient} 
                p-8 rounded-[2.5rem] border border-slate-100 ${item.border}
                shadow-sm hover:shadow-xl hover:shadow-slate-200/50 
                hover:-translate-y-2 transition-all duration-300
                flex flex-col h-full
              `}
            >
              {/* Icon */}
              <div className={`
                w-16 h-16 rounded-2xl ${item.bg} ${item.color} 
                flex items-center justify-center mb-6 
                group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300
                shadow-inner
              `}>
                <item.icon size={32} strokeWidth={2} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#C9A227] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center text-sm font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}