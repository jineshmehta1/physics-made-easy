"use client"

import { useState, useEffect } from "react"
import { Trash2, Star, User, MessageSquare } from "lucide-react"

// --- Config: Pages ---
const PAGES = [
  { id: "chess", label: "Chess Page" },
  { id: "robotics", label: "Robotics Page" },
  { id: "abacus", label: "Abacus Page" },
  { id: "coaching", label: "Coaching Page" },
  { id: "promaty", label: "Promaty School" },
]

type Review = {
  id: number
  pageKey: string
  name: string
  role: string
  content: string
  rating: number
}

export default function ReviewsAdmin() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(false)

  const initialForm = {
    pageKey: "",
    name: "",
    role: "Parent",
    content: "",
    rating: 5,
  }

  const [form, setForm] = useState(initialForm)

  // Fetch reviews
  const loadReviews = async () => {
    const res = await fetch("/api/review", { cache: "no-store" })
    setReviews(await res.json())
  }

  useEffect(() => {
    loadReviews()
  }, [])

  // Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.pageKey) return alert("Please select a Target Page!")

    setLoading(true)

    await fetch("/api/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    await loadReviews()
    setForm(initialForm)
    setLoading(false)
  }

  // Delete
  const handleDelete = async (id: number) => {
    if (!confirm("Delete this review?")) return

    await fetch(`/api/review/${id}`, { method: "DELETE" })
    setReviews((prev) => prev.filter((r) => r.id !== id))
  }

  return (
    <div className="space-y-8 pb-20">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-3 bg-amber-100 rounded-lg text-amber-600">
          <MessageSquare size={24} />
        </div>
        <h2 className="text-3xl font-bold text-slate-800">Reviews Manager</h2>
      </div>

      {/* Add Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold mb-4 text-slate-700">Add New Review</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Page */}
          <select
            className="w-full p-3 border rounded-lg font-bold"
            value={form.pageKey}
            onChange={(e) => setForm({ ...form, pageKey: e.target.value })}
            required
          >
            <option value="">-- Select Target Page --</option>
            {PAGES.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>

          {/* Inputs */}
          <div className="grid md:grid-cols-3 gap-4">
            <input
              placeholder="Name"
              className="p-3 border rounded-lg"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />

            <input
              placeholder="Role"
              className="p-3 border rounded-lg"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              required
            />

            <select
              className="p-3 border rounded-lg"
              value={form.rating}
              onChange={(e) =>
                setForm({ ...form, rating: Number(e.target.value) })
              }
            >
              <option value={5}>⭐⭐⭐⭐⭐</option>
              <option value={4}>⭐⭐⭐⭐</option>
              <option value={3}>⭐⭐⭐</option>
            </select>
          </div>

          <textarea
            placeholder="Write the review..."
            className="w-full p-3 border rounded-lg h-24 resize-none"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            required
          />

          <button
            disabled={loading}
            className="w-full bg-amber-500 text-white font-bold py-3 rounded-lg hover:bg-amber-600 disabled:opacity-50"
          >
            {loading ? "Publishing..." : "Publish Review"}
          </button>
        </form>
      </div>

      {/* List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-white p-6 rounded-xl border shadow-sm relative"
          >
            <span className="absolute top-0 right-0 text-xs bg-slate-100 px-3 py-1 rounded-bl-xl uppercase font-bold">
              {r.pageKey}
            </span>

            <button
              onClick={() => handleDelete(r.id)}
              className="absolute bottom-4 right-4 text-slate-300 hover:text-red-500"
            >
              <Trash2 size={18} />
            </button>

            <div className="flex text-amber-400 mb-2">
              {[...Array(r.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>

            <p className="text-sm italic text-slate-600 mb-4">
              "{r.content}"
            </p>

            <div className="flex items-center gap-3 pt-3 border-t">
              <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
                <User size={16} />
              </div>
              <div>
                <p className="font-bold text-sm">{r.name}</p>
                <p className="text-xs text-amber-600">{r.role}</p>
              </div>
            </div>
          </div>
        ))}

        {reviews.length === 0 && (
          <div className="col-span-full text-center py-10 text-slate-400">
            No reviews found.
          </div>
        )}
      </div>
    </div>
  )
}
