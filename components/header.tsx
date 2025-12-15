"use client";
import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon, ArrowRightIcon } from "./ui/BannerIcon";

interface NavItem {
  name: string;
  href: string;
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Curriculum", href: "/curriculum" },
    { name: "Gallery", href: "/gallery" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] left-0 right-0 ${
          scrolled
            ? "top-4 mx-4 md:mx-auto max-w-6xl rounded-2xl bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60"
            : "top-0 bg-transparent"
        }`}
      >
        <div className={`px-4 md:px-6 ${scrolled ? "" : "max-w-7xl mx-auto"}`}>
          <div className="flex items-center justify-between">
            {/* --- Logo Section --- */}
            <a href="/" className="flex items-center gap-3 group shrink-0">
              <div
                className={`relative transition-all duration-500 ${
                  scrolled ? "w-30 h-30" : "w-32 h-32 md:w-34 md:h-34"
                }`}
              >
                <img
                  src="https://checkmatesensei.com/wp-content/uploads/2025/07/checkmate-logo.png"
                  alt="Cosmic Chess Academy"
                  className="relative w-full h-full object-contain drop-shadow-md transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Optional: Brand name next to logo (comment out if you want logo only) */}
              {/* <div className="flex flex-col">
                <span
                  className={`font-black tracking-tight leading-none ${
                    scrolled ? "text-lg" : "text-xl md:text-2xl"
                  } text-[#1a1a4b]`}
                >
                  Cosmic
                  <span className="ml-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    Chess
                  </span>
                </span>
              </div> */}
            </a>

            {/* --- Center Navigation Pill (Desktop) --- */}
            <nav className="hidden lg:flex items-center p-1 bg-gray-100/80 rounded-full border border-white/50 backdrop-blur-sm shadow-inner absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-5 py-2 text-sm font-semibold text-gray-600 rounded-full hover:bg-white hover:text-[#1a1a4b] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* --- Right Actions --- */}
            <div className="flex items-center gap-3">
              <a
                href="/bookdemo"
                className={`hidden md:flex items-center gap-2 bg-[#1a1a4b] hover:bg-purple-700 text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-purple-900/10 hover:-translate-y-0.5 ${
                  scrolled ? "px-5 py-2" : "px-6 py-3"
                }`}
              >
                Book Demo
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "bg-red-50 text-red-500 rotate-90"
                    : "bg-gray-100 text-[#1a1a4b] hover:bg-gray-200"
                }`}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <XIcon className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* --- Mobile Menu Dropdown --- */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-[calc(100%+8px)] mx-4 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-white/40 overflow-hidden transition-all duration-500 origin-top ${
            isMobileMenuOpen
              ? "max-h-[80vh] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="p-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-between p-4 rounded-2xl text-[#1a1a4b] font-bold hover:bg-purple-50 transition-colors group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-sm">
                  <ArrowRightIcon className="w-4 h-4 text-purple-600" />
                </div>
              </a>
            ))}
            <div className="p-2 pt-4">
              <a
                href="/contact"
                className="block w-full text-center py-4 rounded-xl bg-[#1a1a4b] text-white font-bold shadow-lg shadow-purple-900/20 active:scale-95 transition-transform"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;