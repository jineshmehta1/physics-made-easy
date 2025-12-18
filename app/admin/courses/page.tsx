"use client"

import { useState, useEffect } from "react"
import { Trash2, Edit2, Plus, X } from "lucide-react"

// Define your pages here to use in all dropdowns
const PAGES = [
  { id: "chess", label: "Chess Page" },
  { id: "robotics", label: "Robotics Page" },
  { id: "abacus", label: "Abacus Page" },
  { id: "coaching", label: "Coaching Page" },
  { id: "promaty", label: "Promaty School" },
]

export default function CoursesAdmin() {
  const [courses, setCourses] = useState<any[]>([])
  const [editingId, setEditingId] = useState<number | null>(null) // 👈 Tracks Edit Mode

  // Initial Form State
  const initialForm = {
    pageKey: "", // 👈 Required now
    title: "", category: "primary", age: "", description: "", 
    themeKey: "beginner", popular: false, featuresText: ""
  }
  const [form, setForm] = useState(initialForm)

  // 1. Fetch All Data
  const fetchCourses = async () => {
    const res = await fetch("/api/courses");
    setCourses(await res.json());
  }

  useEffect(() => { fetchCourses() }, [])

  // 2. Handle Submit (Create OR Update)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!form.pageKey) return alert("Please select a Page!");

    const featuresArray = form.featuresText.split("\n").filter(line => line.trim() !== "")
    const payload = { ...form, features: featuresArray }

    if (editingId) {
      // --- UPDATE MODE ---
      await fetch(`/api/courses/${editingId}`, {
        method: "PUT",
        body: JSON.stringify(payload)
      })
    } else {
      // --- CREATE MODE ---
      await fetch("/api/courses", {
        method: "POST",
        body: JSON.stringify(payload)
      })
    }
    
    // Reset & Refresh
    setForm(initialForm)
    setEditingId(null)
    fetchCourses()
  }

  // 3. Handle Edit Click
  const handleEdit = (c: any) => {
    setEditingId(c.id)
    // Populate form with existing data
    setForm({
      pageKey: c.pageKey || "",
      title: c.title,
      category: c.category,
      age: c.age,
      description: c.description,
      themeKey: c.themeKey,
      popular: c.popular,
      featuresText: c.features.join("\n") // Convert array back to text for editing
    })
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // 4. Handle Delete
  const handleDelete = async (id: number) => {
    if(!confirm("Delete course?")) return;
    await fetch(`/api/courses/${id}`, { method: "DELETE" })
    setCourses(courses.filter(c => c.id !== id))
  }

  return (
    <div className="space-y-8 pb-20">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-slate-800">Courses Manager</h2>
        {editingId && (
            <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-bold">
                Editing Mode
            </span>
        )}
      </div>

      {/* --- FORM SECTION --- */}
      <div className={`p-6 rounded-2xl border transition-all ${editingId ? 'bg-amber-50 border-amber-200 shadow-md' : 'bg-white border-slate-200'}`}>
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
                {editingId ? <Edit2 size={18} /> : <Plus size={18} />}
                {editingId ? "Edit Course" : "Add New Course"}
            </h3>
            {editingId && (
                <button onClick={() => { setEditingId(null); setForm(initialForm)}} className="text-sm text-slate-500 hover:text-red-500 flex items-center gap-1">
                    <X size={16} /> Cancel
                </button>
            )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* PAGE SELECTOR (CRITICAL) */}
            <div className="bg-slate-100 p-4 rounded-lg border border-slate-200">
                <label className="text-sm font-bold text-slate-700 block mb-2">Where should this appear?</label>
                <select 
                    className="w-full p-3 border rounded-lg bg-white font-bold text-slate-800"
                    value={form.pageKey}
                    onChange={e => setForm({ ...form, pageKey: e.target.value })}
                    required
                >
                    <option value="">-- Select a Page --</option>
                    {PAGES.map(page => (
                        <option key={page.id} value={page.id}>{page.label}</option>
                    ))}
                </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <input placeholder="Course Title" className="p-3 border rounded-lg" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
                <input placeholder="Age Group" className="p-3 border rounded-lg" value={form.age} onChange={e => setForm({...form, age: e.target.value})} required />
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
                 <select className="p-3 border rounded-lg bg-white" value={form.themeKey} onChange={e => setForm({...form, themeKey: e.target.value})}>
                    <option value="beginner">Orange (Beginner)</option>
                    <option value="intermediate">Teal (Intermediate)</option>
                    <option value="advanced">Purple (Advanced)</option>
                 </select>
                 <select className="p-3 border rounded-lg bg-white" value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
                    <option value="primary">General</option>
                    <option value="camp">Camp</option>
                 </select>
                 <label className="flex items-center gap-2 border p-3 rounded-lg cursor-pointer bg-white hover:bg-slate-50">
                    <input type="checkbox" checked={form.popular} onChange={e => setForm({...form, popular: e.target.checked})} />
                    <span className="font-bold text-slate-700">Mark as Popular</span>
                 </label>
            </div>

            <textarea placeholder="Description" className="w-full p-3 border rounded-lg h-20" value={form.description} onChange={e => setForm({...form, description: e.target.value})} required />
            
            <div>
                <label className="text-sm font-bold text-slate-600 mb-1 block">Features (One per line)</label>
                <textarea 
                    placeholder="Fun Activities&#10;Logic Puzzles" 
                    className="w-full p-3 border rounded-lg h-32" 
                    value={form.featuresText} 
                    onChange={e => setForm({...form, featuresText: e.target.value})} 
                    required 
                />
            </div>

            <button className={`text-white font-bold py-3 w-full rounded-lg transition-colors ${editingId ? 'bg-amber-600 hover:bg-amber-700' : 'bg-slate-900 hover:bg-slate-800'}`}>
                {editingId ? "Update Course" : "Create Course"}
            </button>
        </form>
      </div>

      {/* --- LIST SECTION --- */}
      <div className="grid md:grid-cols-2 gap-4">
        {courses.map(c => (
             <div key={c.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative group transition-all hover:border-amber-300 hover:shadow-md">
                
                {/* Badge showing which page this belongs to */}
                <div className="absolute top-0 right-0 bg-slate-100 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                    {c.pageKey}
                </div>

                <div className="flex justify-between items-start mt-2">
                    <div>
                        <h4 className="font-bold text-lg text-slate-800">{c.title}</h4>
                        <p className="text-sm text-slate-500">{c.age}</p>
                    </div>
                    
                    <div className="flex gap-2">
                        {/* Edit Button */}
                        <button onClick={() => handleEdit(c)} className="p-2 text-slate-400 hover:text-amber-500 hover:bg-amber-50 rounded-lg transition-colors">
                            <Edit2 size={18} />
                        </button>
                        {/* Delete Button */}
                        <button onClick={() => handleDelete(c.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 size={18} />
                        </button>
                    </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400">
                    Features: {c.features.length} • Theme: {c.themeKey}
                </div>
             </div>
        ))}
      </div>
    </div>
  )
}