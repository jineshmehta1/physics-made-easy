"use client"
import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  ArrowUp,
  MessageCircle,
  Trophy // Used for logo fallback
} from "lucide-react";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <footer className="relative bg-[#1e1b4b] text-white ">
      
      {/* 1. Top Wavy Divider */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[99%] z-10">
        <svg
          className="relative block w-full md:h-[40px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#1e1b4b]"
          ></path>
        </svg>
      </div> */}

      {/* 2. Background Decor Elements (Planet, Rocket, etc.) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Top Left Planet */}
        <div className="absolute top-[-20px] left-[2%] md:left-[5%] w-16 h-16 md:w-24 md:h-24 z-20">
           {/* Planet Body */}
           <div className="absolute inset-0 bg-orange-500 rounded-full shadow-[inset_-4px_-4px_10px_rgba(0,0,0,0.3)]"></div>
           {/* Ring */}
           <div className="absolute top-1/2 left-1/2 w-[140%] h-[20%] bg-yellow-300/80 rounded-[50%] -translate-x-1/2 -translate-y-1/2 -rotate-12 border border-yellow-200"></div>
           {/* Stars nearby */}
           <div className="absolute -top-4 -left-4 text-white text-xs animate-pulse">✦</div>
           <div className="absolute top-10 -right-8 text-white text-[10px] animate-pulse delay-700">✦</div>
        </div>

        {/* Top Right Clouds & Rocket */}
        <div className="absolute top-[-80px] right-[5%] z-20 hidden md:block">
           {/* Clouds */}
           <div className="absolute top-20 right-20 text-white/90">
              <svg width="60" height="30" viewBox="0 0 100 60" fill="currentColor">
                 <path d="M10,40 Q20,20 40,40 T70,40 T90,50 V60 H10 Z" />
                 <circle cx="30" cy="35" r="15" />
                 <circle cx="55" cy="30" r="20" />
                 <circle cx="80" cy="40" r="12" />
              </svg>
           </div>
           <div className="absolute top-40 right-40 text-white/50 transform scale-75">
              <svg width="60" height="30" viewBox="0 0 100 60" fill="currentColor">
                 <path d="M10,40 Q20,20 40,40 T70,40 T90,50 V60 H10 Z" />
                 <circle cx="30" cy="35" r="15" />
                 <circle cx="55" cy="30" r="20" />
              </svg>
           </div>

           {/* Rocket */}
           <div className="relative animate-float">
             <div className="transform -rotate-45">
                {/* Rocket Body SVG */}
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.5C12 2.5 15.5 6 16.5 10.5C17.5 15 15 18 15 18L12 22L9 18C9 18 6.5 15 7.5 10.5C8.5 6 12 2.5 12 2.5Z" fill="white" stroke="#1e1b4b" strokeWidth="1"/>
                  <path d="M12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8Z" fill="#ef4444"/>
                  {/* Fins */}
                  <path d="M7.5 16L5 20L8 19" fill="#f59e0b"/>
                  <path d="M16.5 16L19 20L16 19" fill="#f59e0b"/>
                  {/* Fire */}
                  <path d="M12 22L10 26L12 25L14 26L12 22Z" fill="#f59e0b" className="animate-pulse"/>
                </svg>
             </div>
             {/* Trail */}
             <div className="absolute top-1/2 left-1/2 w-[1px] h-[150px] border-l-2 border-dashed border-white/20 -translate-x-1/2 origin-top transform rotate-[135deg]"></div>
           </div>
        </div>

        {/* Bottom Center Dinosaur */}
        <div className="absolute bottom-[15%] left-[50%] transform -translate-x-1/2 z-0 opacity-80">
            <svg width="100" height="80" viewBox="0 0 100 80" fill="#22c55e" xmlns="http://www.w3.org/2000/svg">
               {/* Simple Dino Shape */}
               <path d="M80 20 C 90 20, 95 30, 90 40 C 85 50, 80 45, 75 45 L 75 60 C 75 70, 65 75, 55 70 L 45 70 C 45 75, 40 80, 30 75 L 35 65 L 20 65 L 15 70 C 5 70, 0 60, 5 55 L 10 50 C 5 45, 10 30, 30 35 L 50 35 C 50 25, 60 10, 70 15 Z" />
               {/* Spikes */}
               <path d="M40 35 L 45 25 L 50 35" fill="#15803d"/>
               <path d="M50 35 L 55 20 L 60 30" fill="#15803d"/>
               <path d="M60 30 L 65 20 L 70 25" fill="#15803d"/>
               {/* Eye */}
               <circle cx="82" cy="28" r="2" fill="white"/>
            </svg>
        </div>

        {/* Bottom Left Pink Scribble */}
        <div className="absolute bottom-[20%] left-[-2%] md:left-[2%] z-0 transform rotate-[-20deg]">
           <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="#db2777" strokeWidth="4" strokeLinecap="round">
              <path d="M10,80 C 30,80 30,20 60,50 C 70,60 50,90 90,90" />
           </svg>
        </div>

      </div>

      {/* 3. Main Footer Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 pt-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
               <div className="relative w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-blue-500 via-pink-500 to-yellow-500 rounded-full p-0.5">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                     {/* Chess Knight Icon Fallback */}
                     <Trophy className="text-[#1e1b4b] w-6 h-6" fill="currentColor" />
                  </div>
               </div>
               <div>
                  <h3 className="text-2xl font-serif text-white tracking-wide leading-none">Cosmic Chess</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-300 mt-1">Learn to be limitless</p>
               </div>
            </div>

            <div className="space-y-3 pt-2">
               <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-white transition-colors">
                     <Phone size={14} className="text-gray-300 group-hover:text-white" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">+91 00000000000</span>
               </div>
               <div className="flex items-start gap-3 group">
                   <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-white transition-colors flex-shrink-0">
                     <Mail size={14} className="text-gray-300 group-hover:text-white" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium break-all">support@cosmicchessacademy.com</span>
               </div>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
             <div className="mb-6">
                <h4 className="text-lg font-bold text-white">Useful Links</h4>
                <div className="h-1 w-8 bg-indigo-600 mt-2 rounded-full"></div>
             </div>
             <ul className="space-y-3">
                {usefulLinks.map(link => (
                   <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                         {link.name}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          {/* Column 3: Our Company */}
          <div>
             <div className="mb-6">
                <h4 className="text-lg font-bold text-white">Our Company</h4>
                <div className="h-1 w-8 bg-indigo-600 mt-2 rounded-full"></div>
             </div>
             <ul className="space-y-3">
                {companyLinks.map(link => (
                   <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                         {link.name}
                      </a>
                   </li>
                ))}
             </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
             <div className="mb-6">
                <h4 className="text-lg font-bold text-white">Get In Touch</h4>
                <div className="h-1 w-8 bg-indigo-600 mt-2 rounded-full"></div>
             </div>
             <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                   <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                   <Instagram size={20} />
                </a>
             </div>
          </div>

        </div>
      </div>

      {/* 4. Bottom Footer Bar */}
      <div className="container mx-auto px-6 pb-6 pt-12 relative z-30">
          <div className="flex flex-col md:flex-row items-center justify-center text-center">
             <p className="text-gray-400 text-sm">Cosmic Chess. All rights reserved.</p>
          </div>
      </div>

      {/* 5. Floating Buttons */}
      
      {/* WhatsApp / Chat Button (Bottom Left) */}
      <a
         href="https://wa.me/#"
         className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#22c55e] hover:bg-green-600 text-white pl-3 pr-5 py-2.5 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
      >
         <MessageCircle size={20} fill="currentColor" className="text-white" />
         <span className="font-semibold text-sm">Chat with us</span>
      </a>

      {/* Scroll To Top Button (Bottom Right) */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

    </footer>
  );
}