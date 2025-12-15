"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Star, MessageCircle, ArrowUp } from "lucide-react";

// --- Course Data ---
const courses = [
  {
    title: "Beginner",
    stars: 1,
    topics: [
      "Chess Board, Pieces and Notation",
      "Opening principles",
      "Principle of developments",
      "Forks, Pins, Double Check, Skewer etc.",
      "Checks and threats",
      "King safety",
      "Strategy (basics)",
      "Stalemate",
      "Fools Mate and Scholars Mate",
    ],
  },
  {
    title: "Intermediate",
    stars: 2,
    topics: [
      "Imagination in chess",
      "Middlegame plans",
      "Zugzwang ideas!",
      "Opposition and Distant Opposition",
      "Bishop vs Knight (Open and closed positions)",
      "Learning from the mistake series",
      "Playing Sessions with Deep Analysis",
      "Smothered Mate, Boden’s Mate",
    ],
  },
  {
    title: "Advanced",
    stars: 3,
    topics: [
      "Prophylaxis Thinking",
      "Static and dynamic advantages and how to play with or against it!",
      "Playing Against Different Openings",
      "Opening Theory and Novelties",
      "Endgame studies!",
      "All sorts of pawn structure with modern theory!",
      "Initiative and critical points",
    ],
  },
];

export default function CoursesSection() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative bg-white py-8 lg:py-12 font-sans overflow-hidden">
      
      {/* --- Floating Decorative Dot (Purple) --- */}

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* --- Header --- */}
        <div className="mb-16">
          <div className="inline-block px-5 py-1.5 rounded-full bg-[#EBE9FE] mb-4">
            <span className="text-[#5C4EE5] font-semibold text-sm">Courses Fees</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0F172A]">
            Explore Courses
          </h2>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div 
              key={idx} 
              className="relative bg-white rounded-[20px] border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              
              {/* --- Floating Stars --- */}
              <div className="absolute -top-6 left-8 flex gap-1">
                {[...Array(course.stars)].map((_, i) => (
                  <div key={i} className="relative">
                     {/* SVG Star Shape matching the yellow icon style */}
                     <svg 
                       width="50" 
                       height="50" 
                       viewBox="0 0 50 50" 
                       fill="none" 
                       className={`drop-shadow-md transform ${i % 2 === 0 ? '-rotate-6' : 'rotate-12'}`}
                     >
                        <path 
                          d="M25 2 L32 17 L48 19 L36 30 L39 46 L25 38 L11 46 L14 30 L2 19 L18 17 Z" 
                          fill="#FFC107" 
                          stroke="none"
                        />
                     </svg>
                  </div>
                ))}
              </div>

              {/* --- Card Content --- */}
              <div className="mt-6 flex-grow">
                <h3 className="text-2xl text-gray-500 font-medium mb-8">
                  {course.title}
                </h3>

                <ul className="space-y-5">
                  {course.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-4">
                      {/* Yellow Circle Arrow Icon */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFC107] flex items-center justify-center mt-0.5 shadow-sm">
                        <ChevronRight className="w-4 h-4 text-[#0F172A] stroke-[3]" />
                      </div>
                      {/* Topic Text */}
                      <span className="text-[#505D6F] text-[15px] leading-relaxed font-normal">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* --- Action Button (Bottom) --- */}
              <div className="mt-10">
                <Link href="https://wa.me/+918130627389" target="_blank">
                    <button className="w-full bg-[#5C4EE5] cursor-pointer  hover:bg-[#4a3ec2] text-white font-bold py-3.5 px-6 rounded-lg transition-colors shadow-lg shadow-indigo-100">
                    Register Now
                    </button>
                </Link>
              </div>

            </div>
          ))}
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
        <ArrowUp className="w-5 h-5 text-white" strokeWidth={2.5} />
      </button>

    </section>
  );
}