"use client";

import React, { useState, useEffect } from 'react';
import {
  Camera,
  Trophy,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Atom, 
  Crown, 
  Filter,
  Users,
  Loader2 // Added for loading state
} from 'lucide-react';
// Import your server action
import { getGalleryImages } from "@/app/actions/adminActions";

const categories = [
  { id: "All", label: "All Moments", icon: Camera },
  { id: "Physics Classes", label: "Physics Class", icon: Atom }, // Updated to match your Select options
  { id: "Chess Lessons", label: "Chess Arena", icon: Crown },   // Updated to match your Select options
  { id: "Awards", label: "Hall of Fame", icon: Trophy },
  { id: "Student Activities", label: "Student Life", icon: Users },
];

export default function GallerySection() {
  const [images, setImages] = useState<any[]>([]); // Dynamic data state
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<any | null>(null);

  // --- 1. FETCH DYNAMIC DATA ---
  useEffect(() => {
    async function loadImages() {
      try {
        const data = await getGalleryImages();
        setImages(data);
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadImages();
  }, []);

  // --- 2. FILTER LOGIC ---
  const filteredImages = activeCategory === "All"
    ? images
    : images.filter(img => img.category === activeCategory);

  // Lightbox Navigation
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setLightboxImage(filteredImages[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxImage(filteredImages[prevIndex]);
  };

  return (
    <section className="relative py-20 bg-slate-50 min-h-screen font-sans" id="gallery">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white border border-slate-200 shadow-sm">
            <Filter className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Gallery</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Our Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">Moments</span>
          </h1>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border
                ${activeCategory === cat.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-teal-400 hover:text-teal-600'
                }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* --- GRID LOGIC --- */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 text-teal-600">
            <Loader2 className="w-10 h-10 animate-spin mb-4" />
            <p className="font-medium text-slate-500">Loading gallery...</p>
          </div>
        ) : (
          <>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative break-inside-avoid rounded-[1.5rem] overflow-hidden cursor-zoom-in bg-slate-200 shadow-md hover:shadow-xl transition-all duration-500"
                  onClick={() => setLightboxImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    // We remove fixed aspect ratios from demo and use natural masonry height
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="inline-block px-2 py-1 bg-teal-500 text-white text-[10px] font-bold uppercase rounded-md mb-2 w-fit">
                      {image.category}
                    </span>
                    <h3 className="text-white text-lg font-bold leading-tight mb-1">{image.title}</h3>
                    <p className="text-slate-300 text-sm opacity-90 line-clamp-2">{image.description}</p>
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full text-white">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                <Camera className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500 font-medium">No photos found in this category.</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button className="absolute top-6 right-6 p-3 bg-white/10 text-white rounded-full z-50">
            <X className="w-6 h-6" />
          </button>
          
          {/* Navigation */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hidden md:block" onClick={handlePrev}>
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white hidden md:block" onClick={handleNext}>
            <ChevronRight className="w-10 h-10" />
          </button>

          <div
            className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full md:w-3/4 bg-black flex items-center justify-center">
               <img src={lightboxImage.src} alt={lightboxImage.title} className="max-w-full max-h-[50vh] md:max-h-[90vh] object-contain" />
            </div>
            <div className="w-full md:w-1/4 p-8 bg-white flex flex-col justify-center border-l border-slate-100">
                <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 border border-teal-100 rounded-full text-xs font-bold uppercase mb-4 w-fit">
                  {lightboxImage.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{lightboxImage.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{lightboxImage.description}</p>
                <div className="pt-6 border-t border-slate-100 mt-6">
                   <p className="text-xs text-slate-400 uppercase font-bold mb-1">Captured At</p>
                   <p className="text-sm font-semibold text-slate-700">Physics Made Easy Center</p>
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}