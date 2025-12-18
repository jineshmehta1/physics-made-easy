"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Trash2, Plus, Image as ImageIcon } from "lucide-react"

/* ---------------- CONFIG ---------------- */

const CLOUDINARY_CLOUD_NAME = "dx2o9yq2t"
const CLOUDINARY_UPLOAD_PRESET = "gallery"

const PAGES = [
  { id: "chess", label: "Chess" },
  { id: "robotics", label: "Robotics" },
  { id: "abacus", label: "Abacus" },
  { id: "coaching", label: "Coaching" },
  { id: "promaty", label: "Promaty School" },
]

const CATEGORIES = ["Tournaments", "Classes", "Events", "Camps"]

/* ---------------- COMPONENT ---------------- */

export default function GalleryAdmin() {
  const router = useRouter()

  const [pageKey, setPageKey] = useState("chess")
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploading, setUploading] = useState(false)

  const [formData, setFormData] = useState({
    pageKey: "chess",
    title: "",
    category: "Tournaments",
    location: "",
    src: "",
    type: "photo",
  })

  /* ---------------- FETCH ---------------- */

  const fetchGallery = async (key: string) => {
    setLoading(true)
    const res = await fetch(`/api/gallery?pageKey=${key}`, { cache: "no-store" })
    const data = await res.json()
    setItems(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchGallery(pageKey)
    setFormData(prev => ({ ...prev, pageKey }))
  }, [pageKey])

  /* ---------------- CLOUDINARY UPLOAD ---------------- */

  const uploadToCloudinary = async (file: File) => {
    const form = new FormData()
    form.append("file", file)
    form.append("upload_preset", CLOUDINARY_UPLOAD_PRESET)
    form.append("folder", "gallery")

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: "POST", body: form }
    )

    if (!res.ok) throw new Error("Upload failed")

    const data = await res.json()
    return data.secure_url as string
  }

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.src) {
      alert("Please upload an image")
      return
    }

    setIsSubmitting(true)

    await fetch("/api/gallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    await fetchGallery(pageKey)

    setFormData({
      pageKey,
      title: "",
      category: "Tournaments",
      location: "",
      src: "",
      type: "photo",
    })

    setIsSubmitting(false)
    router.refresh()
  }

  /* ---------------- DELETE ---------------- */

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this image?")) return
    await fetch(`/api/gallery/${id}`, { method: "DELETE" })
    setItems(prev => prev.filter(item => item.id !== id))
  }

  /* ---------------- UI ---------------- */

  return (
    <div className="space-y-8 pb-20">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-3xl font-bold text-slate-800">
          Gallery Manager
        </h2>

        <select
          value={pageKey}
          onChange={e => setPageKey(e.target.value)}
          className="p-2.5 border rounded-lg bg-white font-semibold"
        >
          {PAGES.map(p => (
            <option key={p.id} value={p.id}>{p.label}</option>
          ))}
        </select>
      </div>

      {/* Add Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Plus className="w-5 h-5 text-amber-500" />
          Add Image ({pageKey})
        </h3>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <input
              placeholder="Title"
              className="w-full p-3 border rounded-lg"
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <select
                className="p-3 border rounded-lg bg-white"
                value={formData.category}
                onChange={e =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                {CATEGORIES.map(c => (
                  <option key={c}>{c}</option>
                ))}
              </select>

              <input
                placeholder="Location"
                className="w-full p-3 border rounded-lg"
                value={formData.location}
                onChange={e =>
                  setFormData({ ...formData, location: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Upload */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Upload Image</label>

            <div className="border-2 border-dashed rounded-lg p-4 bg-slate-50 flex flex-col items-center">
              {formData.src ? (
                <img src={formData.src} className="h-32 rounded mb-2 object-cover" />
              ) : (
                <ImageIcon className="w-8 h-8 text-slate-400 mb-2" />
              )}

              <input
                type="file"
                accept="image/*"
                disabled={uploading}
                onChange={async e => {
                  const file = e.target.files?.[0]
                  if (!file) return

                  setUploading(true)
                  const url = await uploadToCloudinary(file)
                  setFormData(prev => ({ ...prev, src: url }))
                  setUploading(false)
                }}
              />

              {uploading && (
                <p className="text-xs text-slate-500 mt-2">Uploading...</p>
              )}
            </div>
          </div>

          <button
            disabled={isSubmitting}
            className="md:col-span-2 bg-amber-500 text-white font-bold py-3 rounded-lg hover:bg-amber-600 disabled:opacity-50"
          >
            {isSubmitting ? "Saving..." : "Add to Gallery"}
          </button>
        </form>
      </div>

      {/* Gallery List */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p>Loading...</p>
        ) : items.length === 0 ? (
          <p className="col-span-full text-center text-slate-400">
            No images for this page
          </p>
        ) : (
          items.map(item => (
            <div key={item.id} className="bg-white border rounded-xl overflow-hidden">
              <div className="aspect-square relative">
                <img src={item.src} className="w-full h-full object-cover" />
                <button
                  onClick={() => handleDelete(item.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="p-3">
                <p className="font-bold truncate">{item.title}</p>
                <p className="text-xs text-slate-500">{item.category}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
