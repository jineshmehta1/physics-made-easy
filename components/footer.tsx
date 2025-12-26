"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, Youtube, MapPin, Phone, Mail, ArrowRight, Atom } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                DOODLE ICONS                                */
/* -------------------------------------------------------------------------- */

// Chess Knight (Strategy)
const ChessKnightDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19 22H5V20H19V22ZM17 18H7V16H17V18ZM15.5 14H8.5L7.5 8H9.5C9.5 8 10 9.5 11 9.5C12 9.5 13 8 13 8H16L15.5 14ZM12 2C10.5 2 9.5 3 9 4L8 6H13C14.5 6 15 5 15.5 4C16 3 14 2 12 2Z" />
    <path d="M12 4C14 4 15 5 15 6L14 12H10L9 6C10 5 11 4 12 4Z" opacity="0.5"/>
  </svg>
);

// Atom Orbit (Physics)
const AtomDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    <path d="M12 2C7 2 2.5 5 2.5 12C2.5 19 7 22 12 22C17 22 21.5 19 21.5 12C21.5 5 17 2 12 2Z" />
    <path d="M12 2C15 2 19 4 19 12C19 20 15 22 12 22C9 22 5 20 5 12C5 4 9 2 12 2Z" transform="rotate(60 12 12)" />
    <path d="M12 2C15 2 19 4 19 12C19 20 15 22 12 22C9 22 5 20 5 12C5 4 9 2 12 2Z" transform="rotate(-60 12 12)" />
  </svg>
);

/* -------------------------------------------------------------------------- */
/*                               FOOTER COMPONENT                             */
/* -------------------------------------------------------------------------- */

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden pt-20 pb-10 font-sans">
      
      {/* -------------------- BACKGROUND DOODLES -------------------- */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-10">
        {/* Top Right Atom */}
        <AtomDoodle className="absolute -top-10 -right-10 w-64 h-64 text-teal-500 animate-[spin_20s_linear_infinite]" />
        
        {/* Bottom Left Knight */}
        <ChessKnightDoodle className="absolute -bottom-10 -left-10 w-48 h-48 text-indigo-500 -rotate-12" />
        
        {/* Decorative Particles */}
        <div className="absolute top-20 left-[20%] w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
        <div className="absolute bottom-32 right-[20%] w-3 h-3 rounded-full bg-indigo-400 opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* 1. BRAND INFO */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-teal-900/50">
                <Atom size={28} className="animate-spin-slow" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl text-white leading-none tracking-tight">
                  PHYSICS
                </span>
                <span className="text-[10px] font-bold text-teal-500 tracking-[0.2em] uppercase">
                  MADE EASY
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Bridging the gap between rote learning and true understanding. Led by Ex-MOE Scholar Mr. Chew, we master Physics through logic, strategy, and critical thinking.
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-teal-500 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Our Methodology", href: "/methodology" },
                { name: "Mr. Chew's Profile", href: "/about" },
                { name: "Success Stories", href: "/testimonials" },
                { name: "Gallery", href: "/gallery" },
                { name: "Free Resources", href: "/resources" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="flex items-center gap-2 text-sm hover:text-teal-400 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. PROGRAMS */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
              Programs
            </h3>
            <ul className="space-y-3">
              {[
                { name: "GCE O-Level Physics", href: "/courses/o-level" },
                { name: "IB HL/SL Physics", href: "/courses/ib-physics" },
                { name: "A-Level H2 Physics", href: "/courses/a-level" },
                { name: "Chess Coaching", href: "/courses/chess" },
                { name: "Career Skills", href: "/courses/skills" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="flex items-center gap-2 text-sm hover:text-indigo-400 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. CONTACT */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-teal-500 rounded-full"></span>
              Contact Us
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3 text-sm group">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-0.5 group-hover:animate-bounce" />
                <span className="text-slate-400 group-hover:text-white transition-colors">
                  186 Toa Payoh Central,<br />
                  Lobby H 02-430,<br />
                  Singapore 310186
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm group">
                <Phone className="w-5 h-5 text-teal-500 shrink-0" />
                <a href="tel:+6597277419" className="text-slate-400 group-hover:text-white transition-colors">
                  +65 9727 7419
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm group">
                <Mail className="w-5 h-5 text-teal-500 shrink-0" />
                <a href="mailto:chewkm2001@yahoo.com" className="text-slate-400 group-hover:text-white transition-colors">
                  chewkm2001@yahoo.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Physics Made Easy. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}