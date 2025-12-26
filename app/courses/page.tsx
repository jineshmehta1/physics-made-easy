"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Search, 
  ArrowRight, 
  BookOpen,
  Atom,
  Crown,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Clock,
  Users,
  Loader2
} from "lucide-react";
import CoursesBanner from "@/components/ui/chessBanner"; // Ensure this path is correct
import { getCourses } from "@/app/actions/adminActions";

const categories = ["All", "Physics", "Chess", "Skills"];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // --- Fetch Data on Mount ---
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // --- Filter Logic ---
  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-slate-50 min-h-screen font-sans">
      
      {/* --- Page Banner --- */}
      <CoursesBanner/>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl -mt-10 relative z-20 pb-20">
        
        {/* --- Controls: Search & Filter --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white/50 backdrop-blur-md p-4 rounded-3xl border border-white shadow-sm">
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-6 py-2.5 rounded-full text-sm font-bold transition-all
                  ${activeCategory === cat 
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20" 
                    : "bg-white text-slate-600 border border-slate-200 hover:border-teal-400 hover:text-teal-600"}
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
             <input 
               type="text" 
               placeholder="Find a course..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-full text-sm font-medium focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder:text-slate-400 shadow-sm"
             />
             <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* --- Courses Grid --- */}
        {loading ? (
          <div className="flex justify-center items-center py-20 min-h-[400px]">
            <Loader2 className="w-12 h-12 text-teal-600 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={course.id}
                    className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative"
                  >
                    {/* Popular Badge */}
                    {course.popular && (
                      <div className="absolute top-4 right-4 z-10 bg-amber-400 text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
                        Popular
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-slate-100">
                      {course.image ? (
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-300">
                          <BookOpen size={48} />
                        </div>
                      )}
                      
                      <div className="absolute top-4 left-4">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm
                            ${course.category === 'Physics' ? 'bg-teal-600/90' : 
                              course.category === 'Chess' ? 'bg-amber-600/90' : 'bg-indigo-600/90'}
                          `}>
                            {course.category === 'Chess' ? <Crown size={12} /> : 
                              course.category === 'Physics' ? <Atom size={12} /> : 
                              <Briefcase size={12} />}
                            {course.category}
                          </span>
                      </div>
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      {/* Meta Header */}
                      <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                            <Users size={12} />
                            {course.level}
                          </div>
                          <div className="flex items-center gap-1 text-xs font-bold text-teal-600">
                            {course.price}
                          </div>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                          {course.title}
                      </h3>
                      
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                          {course.description}
                      </p>

                      {/* Features List */}
                      {course.features && course.features.length > 0 && (
                        <div className="space-y-3 mb-8 flex-grow">
                          {course.features.slice(0, 3).map((feature: string, i: number) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                              <CheckCircle2 size={16} className="text-teal-500 shrink-0 mt-0.5" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* CTA Button */}
                      <Link href={`https://wa.me/6597277419?text=I'm interested in ${course.title}`} className="mt-auto" target="_blank">
                        <button className="w-full py-3.5 rounded-xl font-bold text-sm bg-slate-50 text-slate-900 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all flex items-center justify-center gap-2">
                            Book a Slot
                            <ArrowRight size={16} />
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-20 text-slate-500 bg-white rounded-3xl border border-dashed border-slate-300">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-slate-300" />
                  <p className="text-lg font-medium">No courses found matching your criteria.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* --- Trial Class CTA --- */}
        <div className="mt-20 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
           {/* Background Decorations */}
           <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
           </div>
           
           <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                 Not sure which level is right?
              </h2>
              <p className="text-slate-400 text-lg">
                 Book a paid trial lesson to experience Mr. Chew's teaching style firsthand before committing to a term package.
              </p>
           </div>

           <div className="relative z-10 w-full md:w-auto">
             <Link href="/contact">
               <button className="w-full md:w-auto px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-teal-500/20 flex items-center justify-center gap-2">
                  <Clock size={18} />
                  Schedule Trial
               </button>
             </Link>
           </div>
        </div>

      </div>
    </main>
  );
}