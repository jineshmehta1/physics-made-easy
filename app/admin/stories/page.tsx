"use client"

import { useState, useEffect } from "react"
import { Trash2, Plus, UploadCloud, User, Video } from "lucide-react"

/* ---------------- CONFIG ---------------- */

const CLOUDINARY_CLOUD_NAME = "dx2o9yq2t"
const CLOUDINARY_UPLOAD_PRESET = "gallery" // Using same preset for simplicity

const PAGES = [
  { id: "chess", label: "Chess" },
  { id: "robotics", label: "Robotics" },
  { id: "abacus", label: "Abacus" },
  { id: "coaching", label: "Coaching" },
  { id: "promaty", label: "Promaty School" },
]

/* ---------------- COMPONENT ---------------- */

export default function StoriesAdmin() {
  // State
  const [pageKey, setPageKey] = useState("chess")
  const [stories, setStories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Uploading state tracks which specific field is uploading (image vs videoThumbnail)
  const [uploadingField, setUploadingField] = useState<string | null>(null)

  const initialForm = {
    name: "",
    role: "",
    quote: "",
    story: "",
    image: "",         // Profile Pic
    videoThumbnail: "", // Video Cover
    stat1Label: "Rating", stat1Value: "",
    stat2Label: "Wins", stat2Value: "",
    stat3Label: "Rank", stat3Value: "",
  }

  const [form, setForm] = useState(initialForm)

  /* ---------------- FETCH ---------------- */

  const fetchStories = async (key: string) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/stories?pageKey=${key}`, { cache: "no-store" })
      const data = await res.json()
      setStories(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStories(pageKey)
  }, [pageKey])

  /* ---------------- CLOUDINARY UPLOAD ---------------- */

  const uploadToCloudinary = async (file: File, fieldName: "image" | "videoThumbnail") => {
    setUploadingField(fieldName)

    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET)
    formData.append("folder", "stories")

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: "POST", body: formData }
      )

      if (!res.ok) throw new Error("Upload failed")

      const data = await res.json()
      setForm(prev => ({ ...prev, [fieldName]: data.secure_url }))
    } catch (error) {
      alert("Upload Error")
    } finally {
      setUploadingField(null)
    }
  }

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const payload = {
      pageKey, // Important: Save which page this belongs to
      name: form.name,
      role: form.role,
      quote: form.quote,
      story: form.story,
      image: form.image || "https://placehold.co/200", 
      videoThumbnail: form.videoThumbnail || "https://placehold.co/600x400",
      stats: [
        { label: form.stat1Label, value: form.stat1Value, icon: "TrendingUp" },
        { label: form.stat2Label, value: form.stat2Value, icon: "Trophy" },
        { label: form.stat3Label, value: form.stat3Value, icon: "Medal" },
      ],
    }

    await fetch("/api/stories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    await fetchStories(pageKey)
    setForm(initialForm)
    setIsSubmitting(false)
  }

  /* ---------------- DELETE ---------------- */

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this story?")) return
    await fetch(`/api/stories/${id}`, { method: "DELETE" })
    setStories(prev => prev.filter(s => s.id !== id))
  }

  /* ---------------- UI ---------------- */

  return (
    <div className="space-y-8 pb-20">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-3xl font-bold text-slate-800">Success Stories</h2>
        
        <select
          value={pageKey}
          onChange={e => setPageKey(e.target.value)}
          className="p-2.5 border rounded-lg bg-white font-semibold shadow-sm focus:ring-2 focus:ring-amber-500 outline-none"
        >
          {PAGES.map(p => (
            <option key={p.id} value={p.id}>{p.label}</option>
          ))}
        </select>
      </div>

      {/* Add Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Plus className="w-5 h-5 text-amber-500" />
          Add Story ({pageKey})
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Row 1: Name & Role */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="Student Name"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              placeholder="Title / Role (e.g. State Champion)"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
              value={form.role}
              onChange={e => setForm({ ...form, role: e.target.value })}
              required
            />
          </div>

          {/* Row 2: Images Upload */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Profile Image */}
            <div className="border border-dashed border-slate-300 p-4 rounded-lg bg-slate-50">
              <label className="text-xs font-bold uppercase block mb-2 text-slate-500 flex items-center gap-2">
                <User size={14}/> Profile Photo
              </label>
              <div className="flex items-center gap-4">
                {form.image ? (
                   <img src={form.image} className="w-16 h-16 rounded-full object-cover border" />
                ) : (
                   <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">?</div>
                )}
                <div className="flex-1">
                    <input
                        type="file"
                        accept="image/*"
                        className="text-sm w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
                        onChange={(e) => e.target.files && uploadToCloudinary(e.target.files[0], "image")}
                        disabled={!!uploadingField}
                    />
                    {uploadingField === "image" && <p className="text-xs text-amber-600 mt-1 font-bold">Uploading...</p>}
                </div>
              </div>
            </div>
{/* 
            Video Thumbnail
            <div className="border border-dashed border-slate-300 p-4 rounded-lg bg-slate-50">
              <label className="text-xs font-bold uppercase block mb-2 text-slate-500 flex items-center gap-2">
                <Video size={14}/> Video/Post Thumbnail
              </label>
              <div className="flex items-center gap-4">
                {form.videoThumbnail ? (
                   <img src={form.videoThumbnail} className="w-24 h-16 rounded object-cover border" />
                ) : (
                   <div className="w-24 h-16 rounded bg-slate-200 flex items-center justify-center text-slate-400">?</div>
                )}
                <div className="flex-1">
                    <input
                        type="file"
                        accept="image/*"
                        className="text-sm w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
                        onChange={(e) => e.target.files && uploadToCloudinary(e.target.files[0], "videoThumbnail")}
                        disabled={!!uploadingField}
                    />
                    {uploadingField === "videoThumbnail" && <p className="text-xs text-amber-600 mt-1 font-bold">Uploading...</p>}
                </div>
              </div>
            </div> */}
          </div>

          {/* Row 3: Text Areas */}
          <div className="space-y-4">
            <textarea
                placeholder="Quote (e.g. 'Chess taught me patience...')"
                className="w-full p-3 border rounded-lg h-20 focus:ring-2 focus:ring-amber-500 outline-none resize-none"
                value={form.quote}
                onChange={e => setForm({ ...form, quote: e.target.value })}
                required
            />
            <textarea
                placeholder="Full Story"
                className="w-full p-3 border rounded-lg h-28 focus:ring-2 focus:ring-amber-500 outline-none resize-none"
                value={form.story}
                onChange={e => setForm({ ...form, story: e.target.value })}
                required
            />
          </div>

          {/* Row 4: Stats */}
          <div className="grid grid-cols-3 gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
            {["1", "2", "3"].map(i => (
              <div key={i} className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-slate-400 block">Stat {i}</label>
                <input
                  placeholder="Label (e.g. Rating)"
                  className="p-2 border rounded text-xs w-full mb-1"
                  value={(form as any)[`stat${i}Label`]}
                  onChange={e => setForm({ ...form, [`stat${i}Label`]: e.target.value } as any)}
                />
                <input
                  placeholder="Value (e.g. +400)"
                  className="p-2 border rounded text-xs w-full font-bold"
                  value={(form as any)[`stat${i}Value`]}
                  onChange={e => setForm({ ...form, [`stat${i}Value`]: e.target.value } as any)}
                />
              </div>
            ))}
          </div>

          <button
            disabled={isSubmitting || !!uploadingField}
            className="bg-amber-500 text-white font-bold py-3 w-full rounded-lg hover:bg-amber-600 disabled:opacity-50 transition-colors shadow-sm"
          >
            {isSubmitting ? "Saving Story..." : "Add Success Story"}
          </button>
        </form>
      </div>

      {/* List View */}
      <div className="grid gap-4">
        {loading ? (
            <p className="text-center text-slate-500">Loading stories...</p>
        ) : stories.length === 0 ? (
            <p className="text-center text-slate-400 py-10 bg-slate-50 rounded-xl border border-dashed">No stories found for {pageKey}</p>
        ) : (
            stories.map(s => (
            <div
                key={s.id}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
                <div className="flex items-center gap-4">
                    <img src={s.image} className="w-14 h-14 rounded-full object-cover border-2 border-slate-100" />
                    <div>
                        <p className="font-bold text-lg text-slate-800">{s.name}</p>
                        <p className="text-sm text-amber-600 font-medium">{s.role}</p>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 mt-4 sm:mt-0 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="text-xs text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                        {s.pageKey}
                    </div>
                    <button
                        onClick={() => handleDelete(s.id)}
                        className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-all"
                        title="Delete Story"
                    >
                        <Trash2 size={20} />
                    </button>
                </div>
            </div>
            ))
        )}
      </div>
    </div>
  )
}