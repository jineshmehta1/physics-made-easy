"use client"
import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, CrownIcon, TrophyIcon, StarIcon } from './BannerIcon';

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
      const scrollAmount = 320; // Width of card + gap
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
    <section className="py-14 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
      
      {/* --- Floating Background Decor --- */}
      <div className="absolute top-20 left-10 animate-bounce-slow opacity-30">
        <TrophyIcon className="w-16 h-16 text-yellow-300" />
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse opacity-30">
        <StarIcon className="w-12 h-12 text-blue-300" />
      </div>
      
      {/* Confetti SVGs */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40">
         <svg className="absolute top-1/4 right-1/4 w-6 h-6 text-purple-400 animate-spin-slow" viewBox="0 0 20 20" fill="currentColor"><path d="M10 0l2.5 7.5L20 10l-7.5 2.5L10 20l-2.5-7.5L0 10l7.5-2.5z"/></svg>
         <svg className="absolute bottom-1/3 left-1/5 w-4 h-4 text-pink-400 animate-pulse" viewBox="0 0 20 20" fill="currentColor"><circle cx="10" cy="10" r="10"/></svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-bold text-yellow-700 bg-yellow-100 rounded-full border border-yellow-200 shadow-sm">
            <CrownIcon className="w-4 h-4" />
            Hall of Fame
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a4b] tracking-tight">
            Winners At <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Checkmate Sensei </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Celebrating the brilliance and dedication of our top-performing students in tournaments around the globe.
          </p>
        </div>

        {/* --- Carousel Wrapper --- */}
        <div className="relative group">
          
          {/* Nav Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-[#1a1a4b] hover:bg-[#1a1a4b] hover:text-white transition-all duration-300 disabled:opacity-50"
            aria-label="Scroll Left"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-[#1a1a4b] hover:bg-[#1a1a4b] hover:text-white transition-all duration-300"
            aria-label="Scroll Right"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {achievers.map((person) => (
              <div 
                key={person.id}
                className="snap-center shrink-0 w-[280px] md:w-[320px]"
              >
                <div className="relative h-[420px] rounded-[32px] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group/card transform hover:-translate-y-2">
                  
                  {/* Image */}
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a4b] via-transparent to-transparent opacity-60"></div>

                  {/* Top Badge (Winner) */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <TrophyIcon className="w-3 h-3" />
                    WINNER
                  </div>

                  {/* Top Right (Flag) */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-xl shadow-inner border border-white/30">
                    {person.flag}
                  </div>

                  {/* Bottom Info Card (Glassmorphism) */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl text-white">
                    <h3 className="text-2xl font-bold mb-1">{person.name}</h3>
                    <div className="flex items-center justify-between">
                       <p className="text-blue-200 text-sm font-medium">{person.country}</p>
                       <span className="text-[10px] font-bold tracking-wider uppercase bg-white/20 px-2 py-0.5 rounded text-white">{person.title}</span>
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