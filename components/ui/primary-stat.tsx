"use client"

import { useEffect, useState, useRef } from "react"
import { Sparkles, Users, ShieldCheck, GraduationCap, Star, Heart } from "lucide-react"

// --- 1. Counter Component (Handles the number animation) ---
const Counter = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (countRef.current) observer.observe(countRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return <span ref={countRef}>{count}</span>
}

// --- 2. Main Component ---
export default function FunStatsSection() {
  const stats = [
    { 
      num: 15, 
      suffix: "+", 
      label: "Years of Fun", 
      icon: Sparkles, 
      color: "text-yellow-400", 
      bg: "bg-yellow-400/20",
      border: "border-yellow-400"
    },
    { 
      num: 2500, 
      suffix: "+", 
      label: "Happy Kids", 
      icon: Users, 
      color: "text-blue-400", 
      bg: "bg-blue-400/20",
      border: "border-blue-400"
    },
    { 
      num: 100, 
      suffix: "%", 
      label: "Safe Campus", 
      icon: ShieldCheck, 
      color: "text-green-400", 
      bg: "bg-green-400/20",
      border: "border-green-400"
    },
    { 
      num: 50, 
      suffix: "+", 
      label: "Super Teachers", 
      icon: GraduationCap, 
      color: "text-rose-400", 
      bg: "bg-rose-400/20",
      border: "border-rose-400"
    },
  ]

  return (
    <section className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      
      {/* Background Decor (Stars & Dots) */}
      <div className="absolute top-10 left-10 text-slate-800 animate-pulse"><Star size={40} /></div>
      <div className="absolute bottom-10 right-10 text-slate-800 animate-pulse delay-75"><Heart size={40} /></div>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`
                group bg-slate-800/50 backdrop-blur-sm 
                rounded-3xl p-6 md:p-8 
                border-b-4 ${stat.border}
                hover:-translate-y-2 transition-all duration-300
                flex flex-col items-center justify-center text-center
                shadow-lg hover:shadow-2xl hover:shadow-${stat.color.split('-')[1]}-500/20
              `}
            >
              {/* Icon Bubble */}
              <div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center mb-4 
                ${stat.bg} ${stat.color} 
                group-hover:scale-110 group-hover:rotate-6 transition-transform
              `}>
                <stat.icon size={32} strokeWidth={2.5} />
              </div>

              {/* Number Counter */}
              <h3 className={`text-4xl md:text-5xl font-black text-white mb-2 flex items-baseline gap-1`}>
                <Counter end={stat.num} />
                <span className={stat.color}>{stat.suffix}</span>
              </h3>

              {/* Label */}
              <p className="text-slate-400 font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}