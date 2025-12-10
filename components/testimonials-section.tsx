"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { 
  ArrowLeft, 
  ArrowRight, 
  MessageCircle, 
  ChevronUp, 
  Star, 
  Quote 
} from "lucide-react";

// --- Data: Testimonials ---
const testimonials = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=200&auto=format&fit=crop", // Mother & Son
    text: "“We are immensely grateful to Cosmic Chess Academy for his exceptional coaching and for fostering such a positive learning environment. Cosmic Chess Academy has been instrumental in shaping our children's development and providing them with valuable life skills.”",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=200&auto=format&fit=crop", // Boy at board
    text: "“Lavith, a bright and enthusiastic 7-year-old, discovered his passion for chess at the age of 6. After a trial class with Cosmic Chess Academy, he was immediately drawn to engaging teaching style. Since then, Lavith has been a dedicated student, mastering chess rules and strategies.”",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=200&auto=format&fit=crop", // Girl
    text: "“Thank you Cosmic Chess! This is what exactly I was looking for my son to develop his knowledge. He is really doing well and enjoying his sessions. The interactive method of teaching really helps him focus better.”",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop", // Boy in suit
    text: "“In just three months, Rushil has grasped the fundamentals, strategic thinking, and tactical maneuvers of the game. Teachers are in here are patient and their engaging teaching style has made learning chess a fun and rewarding experience for my kid”",
  },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll Handler
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 350; // Card width + gap
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[700px] bg-white py-8 lg:py-8 font-sans overflow-hidden">
      
      {/* --- BACKGROUND DECORATION: Yellow Star (Top Left) --- */}
      <div className="absolute top-8 left-8 lg:left-24 z-0">
        <svg width="60" height="60" viewBox="0 0 50 50" fill="none">
          <path d="M25 2 L31 16 L48 18 L36 30 L39 46 L25 38 L11 46 L14 30 L2 18 L19 16 Z" stroke="#FFC107" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block px-6 py-1.5 rounded-full bg-[#EBE9FE] mb-4">
            <span className="text-[#5C4EE5] font-semibold text-sm">Our Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A] leading-tight">
            What Students Think And <br className="hidden md:block" />
            Say About Cosmic Chess
          </h2>
        </div>

        {/* --- CAROUSEL WRAPPER --- */}
        <div className="relative flex items-center">
          
          {/* Left Button */}
          <button 
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-4 lg:-left-12 z-20 w-12 h-12 bg-[#4338CA] hover:bg-[#3730a3] rounded-full items-center justify-center text-white shadow-lg transition-transform hover:scale-110"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-10 pt-4 px-2 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((item) => (
              <div 
                key={item.id} 
                className="relative flex-shrink-0 w-[300px] md:w-[350px] snap-center"
              >
                {/* Card */}
                <div className="bg-[#F8F9FE] p-8 rounded-[32px] h-full transition-transform duration-300 hover:shadow-md">
                  
                  {/* Card Header: Image + Stars + Quote */}
                  <div className="flex justify-between items-start mb-6">
                    {/* Profile Image */}
                    <div className="relative w-20 h-20 rounded-full border-[5px] border-white overflow-hidden shadow-sm">
                      <Image
                        src={item.image}
                        alt="Student"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Stars & Quote */}
                    <div className="flex flex-col items-end gap-1">
                      {/* Quote Icon Background */}
                      <div className="relative">
                         <Quote className="w-10 h-10 text-[#EBE9FE] fill-[#EBE9FE] transform scale-x-[-1]" />
                         {/* Stars Overlay */}
                         <div className="absolute top-2 right-0 flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-[#FFC107] fill-[#FFC107]" />
                            ))}
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <div className="relative">
                    <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                      {item.text}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button 
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-4 lg:-right-12 z-20 w-12 h-12 bg-[#4338CA] hover:bg-[#3730a3] rounded-full items-center justify-center text-white shadow-lg transition-transform hover:scale-110"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

        </div>
      </div>

      {/* --- FIXED FLOATING BUTTONS --- */}

      {/* WhatsApp Chat (Bottom Left) */}
      {/* <div className="fixed bottom-6 left-6 z-50">
        <a 
          href="https://wa.me/123456789" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20b858] text-white px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 font-semibold transition-transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span>Chat with us</span>
        </a>
      </div> */}

      {/* Scroll to Top (Bottom Right) */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-[#5C4EE5] hover:bg-[#4a3ec2] rounded-full flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1"
      >
        <ChevronUp className="w-5 h-5 text-white" strokeWidth={2.5} />
      </button>

    </section>
  );
}