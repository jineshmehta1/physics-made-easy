"use client";
import { useState } from "react";
import { ChevronDown, Phone, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string }[];
  isExternal?: boolean; // Added to identify external links
}

export function Header() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  const navItems: NavItem[] = [
    {
      name: "Online Coaching",
      href: "https://coaching.telanganachessacademy.com/",
      isExternal: true,
    },
    { 
      name: "Events", 
      href: "https://rzp.io/rzp/FbNCr8DK",
      isExternal: true 
    },
    // { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      hasDropdown: true,
      dropdownItems: [
        { name: "Our Story", href: "/about/#story" },
        { name: "Our Mission", href: "/about/#mission" },
        { name: "Achievements", href: "/about/#achievements" },
      ],
    },
    { name: "Courses", href: "/courses" },
    { name: "Our Coaches", href: "/coaches" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 fixed w-full z-50 shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white  py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center space-x-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9864646481</span>
            </div>
            <div className="w-px h-4 bg-white/30"></div>
            <div className="flex items-center space-x-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>telanganachessschool@gmail.com</span>
            </div>
          </div>
          <div className="text-xs opacity-90">
            🏆 Premier Chess Training in Telangana
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            onMouseEnter={() => setActiveNav("")}
          >
            <div className="relative w-12 h-12  rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 ">
              <Image
                src="/logo.ico"
                alt="Telangana Chess School Logo"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Telangana Chess School
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Strategic Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onMouseEnter={() => {
                        setIsAboutOpen(true);
                        setActiveNav(item.name);
                      }}
                      onMouseLeave={() => setIsAboutOpen(false)}
                      className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg hover:bg-blue-50 group"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200" />
                    </button>

                    <div className="absolute top-full left-0 mt-1 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-30">
                      <div className="p-2">
                        {item.dropdownItems?.map((dropItem, index) => (
                          <Link
                            key={dropItem.name}
                            href={dropItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                            style={{ transitionDelay: `${index * 50}ms` }}
                            onClick={() => setIsAboutOpen(false)}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg hover:bg-blue-50 flex items-center space-x-1 group"
                  >
                    <span>{item.name}</span>
                    <span className="text-blue-500 transform group-hover:translate-x-0.5 transition-transform duration-200">
                      ↗
                    </span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 rounded-lg hover:bg-blue-50 relative"
                    onMouseEnter={() => setActiveNav(item.name)}
                  >
                    {item.name}
                    {activeNav === item.name && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-t border-gray-100 shadow-xl rounded-b-2xl mx-4 mb-4 overflow-hidden">
            <div className="p-4 space-y-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsAboutOpen(!isAboutOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transform transition-transform duration-200 ${
                            isAboutOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isAboutOpen && (
                        <div className="ml-4 mt-1 space-y-1 bg-blue-50/50 rounded-lg p-2">
                          {item.dropdownItems?.map((dropItem) => (
                            <Link
                              key={dropItem.name}
                              href={dropItem.href}
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg transition-colors duration-200"
                              onClick={() => {
                                setIsAboutOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{item.name}</span>
                      <span className="text-blue-500">↗</span>
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Contact Info */}
            <div className="bg-gradient-to-r from-blue-50 to-red-50 p-4 border-t border-gray-100">
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>+91 9864646481</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>telanganachessschool@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}