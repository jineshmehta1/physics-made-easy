"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Image as ImageIcon, FileText, LogOut, Atom, Library } from "lucide-react";

import { MessageSquare } from "lucide-react"; 

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Courses", href: "/admin/courses", icon: BookOpen },
  { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
  { name: "Blog", href: "/admin/blog", icon: FileText },
   { name: "Study Materials", href: "/admin/materials", icon: Library },
  { name: "Enquiries", href: "/admin/enquiries", icon: MessageSquare }, // <--- Added this
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 flex flex-col border-r border-slate-800">
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white">
          <Atom size={24} className="animate-spin-slow" />
        </div>
        <div>
          <h1 className="font-black text-xl tracking-tight">ADMIN</h1>
          <p className="text-[10px] text-teal-400 font-bold uppercase tracking-widest">Physics Made Easy</p>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                isActive 
                  ? "bg-teal-600 text-white shadow-lg shadow-teal-900/50" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl w-full transition-colors">
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}