"use client";

import React, { useRef } from "react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Quote, 
  Star, 
  Sparkles
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=200&auto=format&fit=crop", 
    name: "Sarah Jenkins",
    role: "Mother of Leo (Age 8)",
    text: "We are immensely grateful to Checkmate Sensei Academy. It has been instrumental in shaping our children's development and providing them with valuable life skills.",
    rating: 5
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=200&auto=format&fit=crop", 
    name: "David Chen",
    role: "Father of Lavith (Age 7)",
    text: "After a trial class, Lavith was immediately drawn to the engaging teaching style. Since then, he has been a dedicated student, mastering chess rules with speed.",
    rating: 5
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=200&auto=format&fit=crop", 
    name: "Priya Patel",
    role: "Mother of Aryan (Age 10)",
    text: "Thank you Checkmate Sensei! This is exactly what I was looking for. He is really doing well. The interactive method of teaching helps him focus better.",
    rating: 5
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop", 
    name: "Michael Ross",
    role: "Father of Rushil (Age 9)",
    text: "In just three months, Rushil has grasped the fundamentals, strategic thinking, and tactical maneuvers. Teachers here are patient and make learning fun.",
    rating: 5
  },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 320; // Approx card width
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-white font-sans overflow-hidden">
      
      {/* Background Ambience (Light Theme) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Soft Indigo Gradient Blob */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-indigo-50/80 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
        {/* Soft Teal Gradient Blob */}
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-teal-50/80 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.4]" 
             style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="space-y-3 md:space-y-4 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs md:text-sm font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Wall of Love</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              Trusted by parents, <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Loved by kids
              </span>
            </h2>
          </div>
          
          {/* Navigation Buttons (Desktop Only) */}
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 shadow-sm transition-all duration-300"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 shadow-sm transition-all duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-8 md:pb-12 px-2 snap-x snap-mandatory -mx-4 md:mx-0"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollPaddingLeft: '1rem' 
            }}
        >
            {testimonials.map((item) => (
              <div 
                key={item.id} 
                className="relative flex-shrink-0 w-[85vw] sm:w-[320px] md:w-[400px] snap-center group pl-4 md:pl-0 first:pl-4 md:first:pl-0 last:pr-4 md:last:pr-0"
              >
                {/* Card Container */}
                <div className="h-full bg-white border border-slate-100 p-6 md:p-8 rounded-[2rem] shadow-xl shadow-slate-200/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/10 hover:border-indigo-100 flex flex-col">
                  
                  {/* Quote Icon */}
                  <div className="mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 text-indigo-600">
                      <Quote className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                    </div>
                  </div>

                  {/* Text */}
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed italic mb-6 md:mb-8 flex-grow font-medium line-clamp-4 md:line-clamp-none">
                    "{item.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-slate-100">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-indigo-200 transition-colors shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-slate-900 font-bold font-display text-sm md:text-base truncate">{item.name}</h4>
                      <p className="text-indigo-600 text-xs md:text-sm font-medium truncate">{item.role}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}