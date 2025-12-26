import { getCourses, getGalleryImages, getBlogPosts } from "@/app/actions/adminActions";
import { BookOpen, Image as ImageIcon, FileText, TrendingUp } from "lucide-react";

export default async function AdminDashboard() {
  // Fetch real counts from your DB
  const courses = await getCourses();
  const images = await getGalleryImages();
  const blogs = await getBlogPosts();

  const stats = [
    { label: "Total Courses", value: courses.length, icon: BookOpen, color: "bg-teal-500" },
    { label: "Gallery Images", value: images.length, icon: ImageIcon, color: "bg-indigo-500" },
    { label: "Blog Posts", value: blogs.length, icon: FileText, color: "bg-amber-500" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-black text-slate-900 mb-8">Dashboard Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg ${stat.color}`}>
              <stat.icon size={28} />
            </div>
            <div>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
              <p className="text-3xl font-black text-slate-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Status */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">System Status: Online 🟢</h2>
          <p className="text-slate-400">Database connected. Cloudinary active.</p>
        </div>
        <TrendingUp className="absolute right-8 bottom-[-20px] w-40 h-40 text-white opacity-5" />
      </div>
    </div>
  );
}