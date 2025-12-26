"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Atom,           // Physics
  Crown,          // Chess
  Trophy,         // Awards
  Users,          // Activities
  ArrowRight,
  ImageIcon,
  ZoomIn,
  Loader2         // Added for loading state
} from "lucide-react";
import { getGalleryImages } from "@/app/actions/adminActions"; // Import your Server Action

const tabs = [
  { id: "All", label: "All Moments", icon: ImageIcon },
  { id: "Physics", label: "Physics", icon: Atom }, // Updated ID to match DB schema usually
  { id: "Chess", label: "Chess", icon: Crown },
  { id: "Awards", label: "Awards", icon: Trophy },
  { id: "Student Activities", label: "Activities", icon: Users },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("All");
  const [images, setImages] = useState<any[]>([]); // State for real data
  const [loading, setLoading] = useState(true);    // State for loading status

  // --- Fetch Data on Mount ---
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getGalleryImages();
        setImages(data);
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Filter Logic
  const filteredImages = activeTab === "All" 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <section className="relative py-20 lg:py-28 bg-slate-50 font-sans overflow-hidden" id="gallery">
      
      {/* --- Background Elements --- */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-12 translate-x-32 z-0"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-teal-100/50 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Capturing Moments of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">
              Learning & Joy.
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From the intensity of a chess match to the "aha!" moment in a physics class, see our students in action.
          </p>
        </div>

        {/* --- Tabs/Filter --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300
                ${activeTab === tab.id 
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105" 
                  : "bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-700 border border-slate-200"}
              `}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- Content Area --- */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 text-teal-600 animate-spin" />
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[300px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.length > 0 ? (
                filteredImages.map((image) => (
                  <motion.div
                    layout
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all border border-slate-100"
                  >
                    {/* Image */}
                    <img 
                      src={image.src} 
                      alt={image.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay (Hidden by default, visible on hover) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      
                      {/* Category Tag */}
                      <span className="inline-block px-2 py-1 bg-teal-500/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-md w-fit mb-2 backdrop-blur-sm">
                        {image.category}
                      </span>

                      {/* Text */}
                      <h3 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {image.title}
                      </h3>
                      <p className="text-slate-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 line-clamp-2">
                        {image.description}
                      </p>

                      {/* Zoom Icon */}
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white">
                        <ZoomIn size={20} />
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-10 text-slate-500 italic">
                  No images found for this category.
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* --- Footer CTA --- */}
        <div className="text-center mt-16">
          <Link href="/gallery">
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold hover:border-teal-500 hover:text-teal-700 transition-all duration-300">
              View Full Gallery
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}