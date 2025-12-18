"use client"

import React, { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Trophy, TrendingUp, Medal, ArrowRight, 
  Quote, Zap, Star, Target, Crown, Sparkles 
} from "lucide-react"
import { cn } from "@/lib/utils"

// --- Icon Mapping ---
const ICON_MAP: Record<string, React.ElementType> = {
  TrendingUp, Trophy, Medal, Zap, Star, Target, Crown, Sparkles,
  default: Trophy
}

// --- Types ---
export interface StoryStat {
  label: string
  value: string
  icon: string | React.ElementType
}

export interface SuccessStory {
  id: number
  name: string
  role: string
  image: string
  videoThumbnail?: string
  quote: string
  story: string
  stats: StoryStat[] | string
}

interface SuccessStoriesSectionProps {
  title?: string
  titleHighlight?: string
  subtitle?: string
  badge?: string
  className?: string
  stories?: SuccessStory[]
}

// --- Default Mock Data ---
const defaultStories: SuccessStory[] = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "State Champion '24",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=200",
    quote: "The strategic thinking I learned here didn't just help me win chess games; it helped me ace my college interviews.",
    story: "Alex started as a complete beginner at age 10. Through our 'Grandmaster Pathway', he quickly climbed the ranks.",
    stats: [
      { label: "Rating Gain", value: "+850", icon: "TrendingUp" },
      { label: "Tournaments Won", value: "12", icon: "Trophy" },
      { label: "State Rank", value: "#1", icon: "Medal" },
    ]
  }
]

export function SuccessStoriesSection({
  title = "Real Stories,",
  titleHighlight = "Real Results",
  subtitle = "From beginners to masters, discover how our academy shapes champions both on and off the board.",
  badge = "Hall of Fame",
  className,
  stories = defaultStories
}: SuccessStoriesSectionProps) {
  
  // Safe check for empty data
  const safeStories = stories && stories.length > 0 ? stories : defaultStories;
  
  const [activeId, setActiveId] = useState(safeStories[0]?.id)
  const [activeStory, setActiveStory] = useState(safeStories[0])

  // Update active story when selection changes or data loads
  useEffect(() => {
    const found = safeStories.find(s => s.id === activeId) || safeStories[0];
    setActiveStory(found);
  }, [activeId, safeStories]);

  // Safely parse stats
  const currentStats = useMemo(() => {
    if (!activeStory || !activeStory.stats) return [];
    if (Array.isArray(activeStory.stats)) return activeStory.stats;
    if (typeof activeStory.stats === 'string') {
      try { return JSON.parse(activeStory.stats); } 
      catch (e) { return []; }
    }
    return [];
  }, [activeStory]);

  if (!activeStory) return null;

  return (
    <section className={cn("py-24 bg-white overflow-hidden relative", className)}>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-xs font-bold tracking-widest uppercase"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">{titleHighlight}</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Navigation List */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {safeStories.map((story) => (
              <button
                key={story.id}
                onClick={() => setActiveId(story.id)}
                className={cn(
                  "group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left border relative overflow-hidden",
                  activeId === story.id
                    ? "bg-white border-amber-500 shadow-xl shadow-amber-500/10 scale-100 z-10 ring-1 ring-amber-500/20"
                    : "bg-slate-50/50 border-transparent hover:bg-white hover:border-amber-200 hover:shadow-lg hover:shadow-amber-500/5"
                )}
              >
                {/* Avatar */}
                <div className={cn(
                  "relative w-14 h-14 rounded-full overflow-hidden border-2 transition-all duration-300",
                  activeId === story.id ? "border-amber-500 scale-105" : "border-slate-200 group-hover:border-amber-300"
                )}>
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className={cn(
                    "font-bold text-lg leading-tight transition-colors truncate",
                    activeId === story.id ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"
                  )}>
                    {story.name}
                  </h4>
                  <p className={cn(
                    "text-sm font-medium transition-colors truncate",
                    activeId === story.id ? "text-amber-600" : "text-slate-400 group-hover:text-amber-600"
                  )}>
                    {story.role}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className={cn(
                  "w-5 h-5 transition-all duration-300",
                  activeId === story.id 
                    ? "text-amber-500 opacity-100 translate-x-0" 
                    : "text-slate-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                )} />
              </button>
            ))}
            
            {/* CTA Card */}
            <div className="mt-6 p-8 bg-slate-900 rounded-[2rem] text-white relative overflow-hidden group cursor-pointer shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/20 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/30 transition-all duration-500" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Start Your Story</h3>
                  <p className="text-slate-400 text-sm mb-6 font-medium">Join 500+ students achieving greatness.</p>
                  <span className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm group-hover:translate-x-1 transition-transform">
                      Apply Now <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
            </div>
          </div>

          {/* RIGHT: Active Content (Text Focused) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 sm:p-12 relative overflow-hidden"
              >
                {/* Decorative Background Icon */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                  <Quote size={200} />
                </div>

                <div className="relative z-10">
                  {/* Header: Name & Role */}
                  <div className="flex items-start justify-between mb-10 border-b border-slate-100 pb-8">
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">
                        {activeStory.name}
                      </h3>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-bold uppercase tracking-wide">
                        <Crown className="w-4 h-4" /> {activeStory.role}
                      </div>
                    </div>
                    {/* Big Quote Icon */}
                    <div className="hidden sm:flex w-14 h-14 bg-amber-500 text-white rounded-2xl items-center justify-center shadow-lg shadow-amber-500/30">
                      <Quote className="w-7 h-7 fill-current" />
                    </div>
                  </div>

                  <div className="flex flex-col xl:flex-row gap-12">
                    
                    {/* Story Text */}
                    <div className="flex-1 space-y-6">
                      <blockquote className="text-2xl font-bold text-slate-900 leading-normal font-serif italic">
                        "{activeStory.quote}"
                      </blockquote>
                      <p className="text-slate-600 leading-relaxed text-lg font-medium">
                        {activeStory.story}
                      </p>
                    </div>

                    {/* Stats Vertical Stack */}
                    <div className="w-full xl:w-64 flex flex-col gap-4">
                      {currentStats.map((stat: StoryStat, idx: number) => {
                        const IconComponent = typeof stat.icon === 'string' 
                          ? ICON_MAP[stat.icon] || ICON_MAP.default 
                          : stat.icon;

                        return (
                          <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx + 0.2 }}
                            className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-center gap-4 hover:bg-white hover:shadow-md transition-all duration-300 group"
                          >
                            <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform shadow-sm">
                              {IconComponent && <IconComponent className="w-6 h-6" />}
                            </div>
                            <div>
                              <p className="text-2xl font-black text-slate-900 leading-none mb-1">{stat.value}</p>
                              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>

                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}