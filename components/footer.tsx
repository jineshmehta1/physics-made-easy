"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Linkedin, Youtube, MapPin, Phone, Mail, ArrowRight, Atom, MessageCircle } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                WHATSAPP ICON                               */
/* -------------------------------------------------------------------------- */
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* -------------------------------------------------------------------------- */
/*                                DOODLE ICONS                                */
/* -------------------------------------------------------------------------- */

const ChessKnightDoodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19 22H5V20H19V22ZM17 18H7V16H17V18ZM15.5 14H8.5L7.5 8H9.5C9.5 8 10 9.5 11 9.5C12 9.5 13 8 13 8H16L15.5 14ZM12 2C10.5 2 9.5 3 9 4L8 6H13C14.5 6 15 5 15.5 4C16 3 14 2 12 2Z" />
    <path d="M12 4C14 4 15 5 15 6L14 12H10L9 6C10 5 11 4 12 4Z" opacity="0.5"/>
  </svg>
);

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
      
      {/* -------------------- WHATSAPP FLOATING BUTTON -------------------- */}
      <a
        href="https://wa.me/6597277419?text=Hello! I'm interested to find out more about your Physics/Chess programs."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] group flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing Background Rings */}
        <span className="absolute w-full h-full bg-[#25D366] rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></span>
        <span className="absolute w-16 h-16 bg-[#25D366] rounded-full animate-pulse opacity-10"></span>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-2xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
          Chat with Mr. Chew 👋
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
        </div>

        {/* The Button */}
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
          <WhatsAppIcon className="w-8 h-8 md:w-9 md:h-9" />
        </div>
      </a>

      {/* -------------------- BACKGROUND DOODLES -------------------- */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-10">
        <AtomDoodle className="absolute -top-10 -right-10 w-64 h-64 text-teal-500 animate-[spin_20s_linear_infinite]" />
        <ChessKnightDoodle className="absolute -bottom-10 -left-10 w-48 h-48 text-indigo-500 -rotate-12" />
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