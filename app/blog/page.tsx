"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  BookOpen,
  Atom,
  Crown,
  BrainCircuit,
  ChevronRight,
  Loader2
} from "lucide-react";
import BlogBanner from "@/components/ui/blogBanner";
import { getBlogPosts } from "@/app/actions/adminActions";

const categories = ["All", "Physics", "Chess & Logic", "Study Tips", "Career Skills"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const featuredPost = posts.find(post => post.featured) || posts[0];
  const regularPosts = posts.filter(post => post.id !== featuredPost?.id);

  const filteredPosts = regularPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-slate-50 min-h-screen font-sans">
      {/* SEO: Ensure BlogBanner uses an <h1> tag internally. If not, add a hidden <h1> here */}
      <BlogBanner />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl -mt-10 relative z-20 pb-20">
        
        {loading ? (
          <div className="flex justify-center items-center py-20 min-h-[400px]" aria-live="polite">
            <Loader2 className="w-12 h-12 text-teal-600 animate-spin" />
            <span className="sr-only">Loading articles...</span>
          </div>
        ) : (
          <>
            {/* --- FEATURED POST (Semantic <section>) --- */}
            {featuredPost && (
              <section aria-labelledby="featured-post-title" className="mb-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-[2rem] p-6 md:p-8 shadow-2xl shadow-slate-900/10 border border-slate-100 flex flex-col lg:flex-row gap-8 items-center"
                >
                  <div className="w-full lg:w-1/2 relative h-64 lg:h-96 rounded-2xl overflow-hidden group bg-slate-100">
                     <img 
                       src={featuredPost.image} 
                       alt={`Featured Article: ${featuredPost.title}`} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                       loading="eager"
                     />
                     <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                       Featured
                     </div>
                  </div>

                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                     <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} /> 
                          <time dateTime={featuredPost.date}>{new Date(featuredPost.date).toLocaleDateString()}</time>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} /> {featuredPost.readTime} read
                        </span>
                     </div>
                     
                     <h2 id="featured-post-title" className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight group-hover:text-teal-600 transition-colors">
                        {featuredPost.title}
                     </h2>
                     
                     <p className="text-slate-600 text-lg mb-8 leading-relaxed line-clamp-3">
                        {featuredPost.excerpt}
                     </p>

                     <Link 
                        href={`/blog/${featuredPost.slug}`}
                        className="group inline-flex items-center gap-2 text-teal-600 font-bold text-lg hover:text-teal-800 transition-colors"
                        aria-label={`Read more about ${featuredPost.title}`}
                      >
                        Read Article
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                     </Link>
                  </div>
                </motion.div>
              </section>
            )}

            {/* --- CONTROLS (Semantic <nav>) --- */}
            <nav className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12" aria-label="Blog categories and search">
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={activeCategory === cat}
                    className={`
                      px-5 py-2 rounded-full text-sm font-bold transition-all
                      ${activeCategory === cat 
                        ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20" 
                        : "bg-white text-slate-600 border border-slate-200 hover:border-teal-400 hover:text-teal-600"}
                    `}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-64">
                 <label htmlFor="blog-search" className="sr-only">Search articles</label>
                 <input 
                   id="blog-search"
                   type="text" 
                   placeholder="Search articles..." 
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                   className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm font-medium focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder:text-slate-400"
                 />
                 <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-400" aria-hidden="true" />
              </div>
            </nav>

            {/* --- BLOG GRID (Semantic <section>) --- */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[300px]">
              <AnimatePresence mode="popLayout">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <motion.article
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={post.id}
                      className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                    >
                      <Link href={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden bg-slate-100">
                         <img 
                           src={post.image} 
                           alt={post.title} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           loading="lazy"
                         />
                         <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm">
                               {post.category.includes('Chess') ? <Crown size={12} className="text-amber-500"/> : 
                                post.category.includes('Physics') ? <Atom size={12} className="text-teal-500"/> : 
                                <BrainCircuit size={12} className="text-indigo-500"/>}
                               {post.category}
                            </span>
                         </div>
                      </Link>

                      <div className="p-6 flex flex-col flex-grow">
                         <div className="flex items-center gap-3 text-xs text-slate-400 font-bold uppercase tracking-wider mb-3">
                            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                            <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true"></span>
                            <span>{post.readTime} read</span>
                         </div>

                         <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                         </h3>
                         
                         <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                            {post.excerpt}
                         </p>

                         <Link 
                            href={`/blog/${post.slug}`} 
                            className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-teal-600 transition-colors"
                            aria-label={`Read full article: ${post.title}`}
                          >
                            Read More <ChevronRight size={16} aria-hidden="true" />
                         </Link>
                      </div>
                    </motion.article>
                  ))
                ) : (
                  <div className="col-span-full text-center py-20 text-slate-500 bg-white rounded-3xl border border-dashed border-slate-300">
                    <BookOpen className="w-12 h-12 mx-auto mb-4 text-slate-300" aria-hidden="true" />
                    <p className="text-lg font-medium">No articles found matching your criteria.</p>
                  </div>
                )}
              </AnimatePresence>
            </section>
          </>
        )}

        {/* --- NEWSLETTER (Semantic <section>) --- */}
        <section aria-labelledby="newsletter-title" className="mt-20 bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
             aria-hidden="true">
           </div>
           
           <div className="relative z-10 max-w-2xl mx-auto">
              <h2 id="newsletter-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
                 Get Study Tips Delivered
              </h2>
              <p className="text-slate-400 mb-8 text-lg">
                 Join 500+ students receiving our monthly digest on Physics hacks, Chess puzzles, and exam strategies.
              </p>

              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                 <label htmlFor="email-input" className="sr-only">Email Address</label>
                 <input 
                   id="email-input"
                   type="email" 
                   required
                   placeholder="Enter your email address" 
                   className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-500 focus:bg-white/5 transition-all"
                 />
                 <button type="submit" className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-teal-500/20">
                    Subscribe
                 </button>
              </form>
              <p className="text-slate-500 text-xs mt-4">
                 No spam. Unsubscribe anytime.
              </p>
           </div>
        </section>

      </div>
    </main>
  );
}