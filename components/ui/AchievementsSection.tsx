"use client";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Crown, Trophy, Star, MapPin } from 'lucide-react';

interface Achiever {
  id: number;
  name: string;
  country: string;
  flag: string;
  image: string;
  title: string;
}

const achievers: Achiever[] = [
  {
    id: 1,
    name: "Suhana",
    country: "USA",
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "National Champion",
  },
  {
    id: 2,
    name: "Ashleen",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Regional Winner",
  },
  {
    id: 3,
    name: "Hari",
    country: "Oman",
    flag: "🇴🇲",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Chess Master",
  },
  {
    id: 4,
    name: "Vikas",
    country: "USA",
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Grand Prix Winner",
  },
  {
    id: 5,
    name: "Rahul",
    country: "India",
    flag: "🇮🇳",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "State Champion",
  }
];

const AchievementsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // Card width + gap
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount 
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative py-16 lg:py-24 bg-slate-50 overflow-hidden font-sans">
      
      {/* --- Background Elements (Matching Hero Theme) --- */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>
      
      {/* Abstract Blobs */}
      <div className="absolute top-20 left-0 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-200/40 rounded-full blur-3xl filter opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 translate-x-1/2 w-[300px] h-[300px] bg-violet-200/40 rounded-full blur-3xl filter opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-bold text-indigo-700 bg-indigo-50 rounded-full border border-indigo-100 uppercase tracking-wider shadow-sm">
            <Trophy className="w-3 h-3" />
            Hall of Fame
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Winners At <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Checkmate Sensei</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Celebrating the brilliance and dedication of our top-performing students in tournaments around the globe.
          </p>
        </div>

        {/* --- Carousel Wrapper --- */}
        <div className="relative group">
          
          {/* Navigation Buttons (Hidden on Mobile, Visible on Desktop) */}
          <button 
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-xl shadow-indigo-900/10 border border-slate-100 items-center justify-center text-slate-700 hover:text-indigo-600 hover:scale-110 transition-all duration-300"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-xl shadow-indigo-900/10 border border-slate-100 items-center justify-center text-slate-700 hover:text-indigo-600 hover:scale-110 transition-all duration-300"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-4 -mx-4 md:mx-0 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {achievers.map((person) => (
              <div 
                key={person.id}
                className="snap-center shrink-0 w-[85vw] sm:w-[300px] md:w-[320px]"
              >
                <div className="relative h-[400px] md:h-[450px] rounded-[2rem] overflow-hidden bg-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-900/20 transition-all duration-500 group/card transform hover:-translate-y-2 border border-slate-100">
                  
                  {/* Image */}
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80"></div>

                  {/* Top Badge (Winner) */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-indigo-900 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wide">
                    <Crown className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    Winner
                  </div>

                  {/* Top Right (Flag) */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-xl shadow-inner border border-white/30" title={person.country}>
                    {person.flag}
                  </div>

                  {/* Bottom Info Card */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500">
                    
                    {/* Floating Title (Moves up on hover) */}
                    <div className="bg-indigo-600/90 backdrop-blur-md inline-block px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider mb-2 shadow-lg">
                      {person.title}
                    </div>

                    <h3 className="text-2xl font-bold mb-1 leading-tight">{person.name}</h3>
                    
                    <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                       <MapPin className="w-3.5 h-3.5" />
                       {person.country}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;