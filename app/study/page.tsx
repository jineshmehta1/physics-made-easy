"use client";

import React, { useState, useEffect } from "react";
import { 
  Youtube, 
  FileText, 
  Download, 
  ExternalLink, 
  BookOpen, 
  Loader2, 
  Search,
  Video
} from "lucide-react";
import { getStudyMaterials } from "@/app/actions/adminActions"; // Import your Server Action
import PageBanner from "@/components/pageBanner"; // Ensure you have this component from previous steps

export default function StudyMaterialsPage() {
  const [materials, setMaterials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'Video' | 'PDF'>('Video');
  const [searchTerm, setSearchTerm] = useState("");

  // --- Fetch Data on Load ---
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getStudyMaterials();
        setMaterials(data);
      } catch (error) {
        console.error("Failed to load study materials", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // --- Filter Logic ---
  const filteredData = materials.filter(item => {
    const matchesTab = item.type === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // --- Helper: Extract YouTube ID ---
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <main className="bg-slate-50 min-h-screen font-sans">
      
      {/* Reusable Page Banner */}
      <PageBanner />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl -mt-10 relative z-20 pb-20">
        
        {/* --- Controls Container --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          {/* Tabs */}
          <div className="bg-white p-1.5 rounded-full shadow-lg border border-slate-100 flex order-2 md:order-1">
            <button 
              onClick={() => setActiveTab('Video')}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === 'Video' 
                  ? 'bg-red-500 text-white shadow-md' 
                  : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <Youtube size={18} /> Video Lectures
            </button>
            <button 
              onClick={() => setActiveTab('PDF')}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                activeTab === 'PDF' 
                  ? 'bg-teal-600 text-white shadow-md' 
                  : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              <FileText size={18} /> Notes & PDFs
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72 order-1 md:order-2">
             <input 
               type="text" 
               placeholder={`Search ${activeTab === 'Video' ? 'videos' : 'notes'}...`}
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-full text-sm font-medium focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder:text-slate-400 shadow-sm"
             />
             <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* --- Content Grid --- */}
        {loading ? (
          <div className="flex justify-center items-center py-20 min-h-[400px]">
            <Loader2 className="w-12 h-12 text-teal-600 animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                >
                  
                  {activeTab === 'Video' ? (
                    // === VIDEO CARD ===
                    <>
                      <div className="relative aspect-video bg-black">
                        {getYouTubeId(item.link) ? (
                          <iframe 
                            src={`https://www.youtube.com/embed/${getYouTubeId(item.link)}`}
                            className="w-full h-full"
                            allowFullScreen
                            title={item.title}
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full text-white/50 text-xs gap-2">
                            <Video size={24} />
                            Video Unavailable
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="mb-2">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded inline-block
                            ${item.category === 'Physics' ? 'bg-teal-50 text-teal-700' : 
                              item.category === 'Chess' ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-700'}
                          `}>
                            {item.category}
                          </span>
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg mb-2 line-clamp-2 leading-tight">
                          {item.title}
                        </h3>
                        <div className="mt-auto pt-4 border-t border-slate-50">
                          <a 
                            href={item.link} 
                            target="_blank" 
                            className="text-sm font-bold text-slate-500 hover:text-red-600 flex items-center gap-1 transition-colors"
                          >
                            Watch on YouTube <ExternalLink size={12} />
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    // === PDF CARD ===
                    <div className="p-8 flex flex-col h-full relative overflow-hidden">
                      {/* Decorative Background Icon */}
                      <FileText className="absolute -bottom-4 -right-4 w-32 h-32 text-slate-50 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                      
                      <div className="flex items-start justify-between mb-6 relative z-10">
                        <div className="w-14 h-14 bg-teal-50 border border-teal-100 rounded-2xl flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform shadow-sm">
                          <FileText size={28} />
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border
                          ${item.category === 'Physics' ? 'bg-teal-50 text-teal-700 border-teal-100' : 
                            item.category === 'Chess' ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-slate-50 text-slate-700 border-slate-100'}
                        `}>
                          {item.category}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-slate-900 text-xl mb-2 relative z-10 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 mb-8 flex-1 relative z-10">
                        High-quality study notes available for instant download.
                      </p>
                      
                      <a 
                        href={item.link} 
                        target="_blank" 
                        className="mt-auto w-full py-3.5 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-teal-600 transition-all shadow-lg hover:shadow-teal-500/20 relative z-10"
                      >
                        <Download size={18} /> Download PDF
                      </a>
                    </div>
                  )}

                </div>
              ))
            ) : (
              // === EMPTY STATE ===
              <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-slate-300">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">No materials found</h3>
                <p className="text-slate-500">
                  We couldn't find any {activeTab === 'Video' ? 'videos' : 'documents'} matching "{searchTerm}".
                </p>
                <button 
                  onClick={() => setSearchTerm("")} 
                  className="mt-4 text-teal-600 font-bold text-sm hover:underline"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </main>
  );
}