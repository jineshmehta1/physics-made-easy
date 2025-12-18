"use client"

import { Sun, BookOpen, Utensils, Palette, Clock, Sparkles } from "lucide-react"

export default function DayAtSchoolSection() {
  
  const routine = [
    { 
      time: "08:30 AM", 
      icon: Sun, 
      title: "Morning Assembly", 
      desc: "Yoga, prayers, and positive affirmations to start the day.", 
      color: "text-amber-600",
      bg: "bg-amber-100",
      border: "border-amber-200"
    },
    { 
      time: "09:30 AM", 
      icon: BookOpen, 
      title: "Core Academics", 
      desc: "Math, English, and Science with interactive smart tools.", 
      color: "text-blue-600",
      bg: "bg-blue-100",
      border: "border-blue-200"
    },
    { 
      time: "11:00 AM", 
      icon: Utensils, 
      title: "Healthy Snack Break", 
      desc: "Nutritious snacks to recharge energy levels.", 
      color: "text-green-600",
      bg: "bg-green-100",
      border: "border-green-200"
    },
    { 
      time: "12:30 PM", 
      icon: Palette, 
      title: "Creative & Sports", 
      desc: "Art, Robotics, Chess, or Outdoor Play activities.", 
      color: "text-purple-600",
      bg: "bg-purple-100",
      border: "border-purple-200"
    },
  ]

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#f59e0b 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content: Timeline */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-wider mb-4">
               <Clock size={14} /> Daily Routine
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              A Day in the Life of a <br/>
              <span className="text-amber-500 inline-block transform hover:-rotate-2 transition-transform duration-300 cursor-default">Little Learner</span> 🎒
            </h2>
            
            <p className="text-slate-600 text-lg mb-10 font-medium max-w-lg">
              Our routine is perfectly balanced to keep children energetic, focused, and happy from the morning bell to hometime.
            </p>
            
            <div className="space-y-6 pl-4">
              {routine.map((slot, i) => (
                <div key={i} className="flex gap-6 items-start relative group">
                  
                  {/* Connecting Line (Dashed) */}
                  {i !== routine.length - 1 && (
                    <div className="absolute left-[26px] top-14 bottom-[-24px] w-0.5 border-l-2 border-dashed border-slate-200 group-hover:border-amber-300 transition-colors"></div>
                  )}
                  
                  {/* Icon Circle */}
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center shrink-0 z-10 
                    border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110
                    ${slot.bg} ${slot.color}
                  `}>
                    <slot.icon size={24} strokeWidth={2.5} />
                  </div>

                  {/* Text Card */}
                  <div className={`
                    flex-1 p-5 rounded-2xl border bg-white shadow-sm transition-all duration-300
                    hover:shadow-md hover:-translate-y-1 ${slot.border}
                  `}>
                    <span className={`text-xs font-black uppercase tracking-wider ${slot.color} bg-white/50 px-2 py-1 rounded-md`}>
                      {slot.time}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 mt-1 mb-1 group-hover:text-amber-600 transition-colors">
                      {slot.title}
                    </h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                      {slot.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content: Image Grid */}
          <div className="relative">
            
            {/* Background Blob for Depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-amber-100/50 rounded-full blur-3xl -z-10"></div>
            
            {/* Floating Sparkle Icon */}
            <div className="absolute -top-6 -right-6 text-amber-400 animate-pulse">
                <Sparkles size={48} />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <img 
                src="/pic1.webp" 
                className="rounded-3xl shadow-lg mt-12 hover:scale-105 transition-transform border-4 border-white object-cover h-48 w-full" 
                alt="Classroom" 
              />
              <img 
                src="/pic4.webp" 
                className="rounded-3xl shadow-lg hover:scale-105 transition-transform border-4 border-white object-cover h-48 w-full" 
                alt="Playground" 
              />
              <img 
                src="/table.jpg" 
                className="rounded-3xl shadow-lg hover:scale-105 transition-transform border-4 border-white object-cover h-48 w-full" 
                alt="Art Class" 
              />
              <img 
                src="central.jpg" 
                className="rounded-3xl shadow-lg mt-[-3rem] hover:scale-105 transition-transform border-4 border-white object-cover h-48 w-full" 
                alt="Library" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}