"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* -------------------------------------------------------------------------- */
/*                               INTERNAL ICONS                               */
/* -------------------------------------------------------------------------- */
const ChevronDown = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2.5} 
    stroke="currentColor" 
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const AtomIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="1" />
    <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
    <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
  </svg>
);

/* -------------------------------------------------------------------------- */
/*                                MAIN COMPONENT                              */
/* -------------------------------------------------------------------------- */

interface SubMenuItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  subMenu?: SubMenuItem[];
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  
  // Using pathname to highlight active link if needed
  const pathname = usePathname(); 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { 
      name: "About", 
      href: "/about",
      
    },
    { name: "Courses", href: "/courses" }, // Single Page Now
    {
      name: "Methodology",
      href: "/methodology",
      hasDropdown: true,
      subMenu: [
        { name: "Multiple Intelligences", href: "/multiple" },
        { name: "Science Understanding", href: "/science" },
      ],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Study Material", href: "/study" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full relative z-50 font-sans">
      
      {/* Main Navbar */}
      <header
        className={`w-full transition-all duration-300 border-b border-gray-100 ${
          scrolled 
            ? "fixed top-0 bg-white/90 backdrop-blur-xl shadow-lg py-2" 
            : "relative bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
           <div className="">
  <img
    src="/logo.webp"
    alt="Logo"
    className="w-6 h-6 md:w-12 md:h-12 object-contain"
  />
</div>

            <div className="flex flex-col">
              <span className="font-black text-xl md:text-2xl text-slate-900 leading-none tracking-tight group-hover:text-indigo-700 transition-colors">
                PHYSICS
              </span>
              <span className="text-[10px] md:text-xs font-bold text-indigo-600 tracking-[0.2em] uppercase">
                MADE EASY
              </span>
            </div>
          </Link>


          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative group px-3 py-2">
                {item.hasDropdown ? (
                  <button className="flex items-center gap-1 text-[15px] font-bold text-slate-600 group-hover:text-indigo-600 transition-colors">
                    {item.name}
                    <ChevronDown className="w-3.5 h-3.5 mt-0.5 opacity-40 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[15px] font-bold text-slate-600 hover:text-indigo-600 transition-colors relative"
                  >
                    {item.name}
                    {/* Active Dot indicator could go here if needed */}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 pt-6 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden ring-1 ring-black/5">
                      <div className="h-1.5 w-full bg-indigo-600"></div> {/* Top Color Bar */}
                      {item.subMenu?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-6 py-3.5 text-sm font-semibold text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 transition-colors border-b border-slate-50 last:border-0"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section: Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center px-7 py-3 text-sm font-bold text-white transition-all duration-300 bg-indigo-600 rounded-full hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
            >
              Book a Trial
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
            >
              <MenuIcon className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
             isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Header */}
          <div className="p-6 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
            <span className="font-black text-slate-800 text-xl tracking-tight">Menu</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 bg-white border border-slate-200 rounded-full text-slate-500 hover:text-red-500 hover:border-red-200 transition-colors shadow-sm"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 overflow-y-auto p-5 space-y-2">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-slate-50 last:border-0 pb-2">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileSubMenuOpen(mobileSubMenuOpen === item.name ? null : item.name)}
                      className="flex items-center justify-between w-full p-3.5 text-left font-bold text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      {item.name}
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform duration-300 ${
                          mobileSubMenuOpen === item.name ? "rotate-180 text-indigo-600" : "text-slate-400"
                        }`} 
                      />
                    </button>
                    
                    {/* Mobile Submenu Animation */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileSubMenuOpen === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 pr-2 pb-2 space-y-1">
                        {item.subMenu?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block p-3 text-sm font-semibold text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-lg border-l-2 border-transparent hover:border-indigo-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block p-3.5 font-bold text-slate-700 rounded-xl hover:bg-slate-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Footer Action */}
          <div className="p-6 border-t border-slate-100 bg-slate-50/50">
            <Link
              href="/contact"
              className="flex items-center justify-center w-full py-4 text-center text-white bg-indigo-600 font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-[0.98] transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Free Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;