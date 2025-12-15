"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  ArrowUp,
  MessageCircle,
  Trophy,
  MapPin,
  Star,
  Moon,
  Cloud
} from "lucide-react";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "Curriculum", href: "/curriculum" },
    { name: "About Us", href: "/about" },
  ];

  const companyLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "Achievements", href: "/achievements" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#1e1b4b] to-[#0f172a] text-white overflow-hidden font-sans border-t border-indigo-900/50">
      
      {/* =======================
          BACKGROUND DECORATION 
         ======================= */}
      
      {/* 1. The Wise Owl (Top Right) */}
      <div className="absolute top-0 right-10 md:right-20 z-0 pointer-events-none opacity-90 hidden sm:block">
        <div className="relative w-32 h-32 animate-float-slow">
           {/* Branch */}
           <div className="absolute bottom-0 right-[-20px] w-40 h-2 bg-[#4338ca] rounded-full rotate-[-10deg]"></div>
           {/* Owl Body */}
           <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
              <g transform="translate(50, 20)">
                {/* Body */}
                <ellipse cx="50" cy="70" rx="45" ry="55" fill="#6366f1" />
                {/* Belly */}
                <ellipse cx="50" cy="85" rx="30" ry="35" fill="#818cf8" />
                {/* Eyes */}
                <circle cx="35" cy="55" r="12" fill="white" />
                <circle cx="65" cy="55" r="12" fill="white" />
                <circle cx="35" cy="55" r="5" fill="#1e1b4b" className="animate-pulse" />
                <circle cx="65" cy="55" r="5" fill="#1e1b4b" className="animate-pulse" />
                {/* Beak */}
                <path d="M45,65 L55,65 L50,75 Z" fill="#fbbf24" />
                {/* Ears */}
                <path d="M10,30 L25,50 L40,30 Z" fill="#6366f1" />
                <path d="M60,30 L75,50 L90,30 Z" fill="#6366f1" />
                {/* Graduation Cap (The Sensei) */}
                <path d="M10,25 L50,5 L90,25 L50,45 Z" fill="#312e81" stroke="#fbbf24" strokeWidth="2" />
                <path d="M90,25 L90,35" stroke="#fbbf24" strokeWidth="2" />
                <circle cx="90" cy="38" r="3" fill="#fbbf24" />
              </g>
           </svg>
        </div>
      </div>

      {/* 2. Floating Chess Knight (Left Side) */}
      <div className="absolute top-20 left-10 opacity-10 z-0 rotate-12 animate-float">
         <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M19 22H5V20H19V22ZM17 18H7V16H17V18ZM13.5 2C13.5 2.82843 12.8284 3.5 12 3.5C11.1716 3.5 10.5 2.82843 10.5 2C10.5 1.17157 11.1716 0.5 12 0.5C12.8284 0.5 13.5 1.17157 13.5 2ZM11 5.5H13V8.5H11V5.5ZM7 8H9V14H7V8ZM15 8H17V14H15V8ZM12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z" fillOpacity="0.5"/>
            <path d="M16 4C16 4 17 6 17 8V12L15 14V8C15 8 14.5 6 14 6C13.5 6 13 6.5 13 7V10H11V7C11 6.5 10.5 6 10 6C9.5 6 9 8 9 8V12L7 14V8C7 6 8 4 8 4C8 4 9 2 12 2C15 2 16 4 16 4Z" />
         </svg>
      </div>

      {/* 3. Ambient Elements (Clouds & Stars) */}
      <div className="absolute top-10 right-1/3 opacity-20 animate-pulse-slow">
        <Cloud size={64} fill="white" />
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-10">
        <Cloud size={96} fill="white" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden pointer-events-none">
        <Star size={12} className="absolute top-10 left-10 text-yellow-300 animate-twinkle" fill="currentColor" />
        <Star size={8} className="absolute top-40 right-40 text-yellow-200 animate-twinkle delay-700" fill="currentColor" />
        <Star size={16} className="absolute bottom-20 left-20 text-yellow-400 animate-twinkle delay-300" fill="currentColor" />
        <Moon size={24} className="absolute top-8 right-8 text-yellow-100 opacity-40 rotate-12" fill="currentColor" />
      </div>

      {/* =======================
          MAIN CONTENT 
         ======================= */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <div className="relative group cursor-pointer">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative w-14 h-14 bg-indigo-950 rounded-full flex items-center justify-center border border-indigo-800">
                     <Trophy className="text-yellow-400 w-7 h-7" fill="currentColor" />
                  </div>
               </div>
               <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Checkmate Sensei</h3>
                  <p className="text-xs font-medium text-indigo-300 tracking-widest uppercase">Learn to be limitless</p>
               </div>
            </div>

            <p className="text-indigo-200 text-sm leading-relaxed max-w-xs">
              Empowering young minds through the strategic art of chess. Join us on a journey from beginner to Grandmaster.
            </p>

            <div className="space-y-4 pt-2">
               <a href="tel:+918130627389" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-indigo-900/50 flex items-center justify-center text-indigo-300 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                     <Phone size={16} />
                  </div>
                  <span className="text-indigo-200 text-sm font-medium group-hover:text-white transition-colors">+91 8130627389</span>
               </a>
               <a href="mailto:checkmatesensei@gmail.com" className="flex items-center gap-3 group">
                   <div className="w-9 h-9 rounded-lg bg-indigo-900/50 flex items-center justify-center text-indigo-300 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                     <Mail size={16} />
                  </div>
                  <span className="text-indigo-200 text-sm font-medium break-all group-hover:text-white transition-colors">checkmatesensei@gmail.com</span>
               </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-8">
             <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
               <span className="w-8 h-1 bg-yellow-400 rounded-full"></span>
               Quick Links
             </h4>
             <ul className="space-y-3">
                {usefulLinks.map(link => (
                   <li key={link.name}>
                      <a href={link.href} className="flex items-center gap-2 text-indigo-200 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm">
                         <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                         {link.name}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          {/* Column 3: Academy */}
          <div>
             <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
               <span className="w-8 h-1 bg-pink-500 rounded-full"></span>
               Academy
             </h4>
             <ul className="space-y-3">
                {companyLinks.map(link => (
                   <li key={link.name}>
                      <a href={link.href} className="flex items-center gap-2 text-indigo-200 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm">
                         <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                         {link.name}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
             <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
               <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
               Connect
             </h4>
             <div className="flex gap-3 mb-6">
                {[Facebook, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl bg-indigo-900/50 flex items-center justify-center text-indigo-300 hover:bg-white hover:text-indigo-900 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <Icon size={20} />
                  </a>
                ))}
             </div>
             
             {/* Mini Map Location Preview (Decorative) */}
             <div className="bg-indigo-900/30 p-3 rounded-xl border border-indigo-800/50 flex items-start gap-3">
                <MapPin className="text-red-400 shrink-0 mt-0.5" size={16} />
                <p className="text-xs text-indigo-200 leading-relaxed">
                  Available globally. <br/> Headquartered in India.
                </p>
             </div>
          </div>

        </div>
      </div>

      {/* =======================
          BOTTOM BAR 
         ======================= */}
      <div className="border-t border-indigo-900/50 bg-[#151238]">
        <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
              <p className="text-indigo-300 text-sm">
                 © {new Date().getFullYear()} <span className="text-white font-semibold">Checkmate Sensei</span>. All rights reserved.
              </p>
              <div className="flex gap-6 text-xs text-indigo-400 font-medium">
                 <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                 <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
        </div>
      </div>

      {/* =======================
          FLOATING BUTTONS 
         ======================= */}
      
      {/* WhatsApp Button */}
      <a
         href="https://wa.me/918130627389" // Updated link based on phone number
         target="_blank"
         rel="noopener noreferrer"
         className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white pl-3 pr-5 py-3 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
      >
         <MessageCircle size={22} fill="currentColor" className="text-white animate-bounce-short" />
         <span className="font-bold text-sm">Chat with Coach</span>
      </a>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-6 right-6 z-50 p-3 bg-white text-indigo-900 rounded-full shadow-lg 
          transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl
          ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        `}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </button>

      {/* Custom Styles for animations not in standard Tailwind */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes bounce-short {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-bounce-short {
          animation: bounce-short 2s ease-in-out infinite;
        }
        .delay-300 { animation-delay: 300ms; }
        .delay-700 { animation-delay: 700ms; }
      `}</style>
    </footer>
  );
}