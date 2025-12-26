"use client";

import { useState, useEffect } from "react";
import { addCourse, editCourse, deleteCourse, getCourses } from "@/app/actions/adminActions";
import ImageUpload from "@/components/admin/ImageUpload";
import { 
  Plus, 
  Pencil, 
  Trash2, 
  X, 
  Search, 
  BookOpen, 
  Loader2, 
  Check,
  Star
} from "lucide-react";

export default function CoursesAdmin() {
  const [courses, setCourses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [editingItem, setEditingItem] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Initial Data Fetch
  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setIsLoading(true);
    try {
      const data = await getCourses();
      setCourses(data);
    } catch (error) {
      console.error("Failed to load courses", error);
    } finally {
      setIsLoading(false);
    }
  }

  // Handle Create / Update
  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    
    // Ensure image is attached
    if (imageUrl) {
        formData.append("image", imageUrl); 
    }

    try {
      if (editingItem) {
        await editCourse(editingItem.id, formData);
      } else {
        if (!imageUrl) {
            alert("Please upload a course image.");
            setIsSubmitting(false);
            return;
        }
        await addCourse(formData);
      }
      
      closeModal();
      await loadData(); // Refresh list
    } catch (error) {
      console.error("Error saving course", error);
      alert("Failed to save course. Check console for details.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // Handle Delete
  async function handleDelete(id: number) {
    if (confirm("Are you sure you want to delete this course? This action cannot be undone.")) {
      await deleteCourse(id);
      loadData();
    }
  }

  // Modal Helpers
  function openAdd() {
    setEditingItem(null);
    setImageUrl("");
    setIsModalOpen(true);
  }

  function openEdit(course: any) {
    setEditingItem(course);
    setImageUrl(course.image);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setEditingItem(null);
    setImageUrl("");
  }

  // Filter Logic
  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pb-20">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            <BookOpen className="text-teal-600" size={32} />
            Manage Courses
          </h1>
          <p className="text-slate-500 mt-1">Add, edit, or remove academic programs.</p>
        </div>
        
        <button 
          onClick={openAdd} 
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-teal-200 transition-all hover:-translate-y-1"
        >
          <Plus size={20} /> Add New Course
        </button>
      </div>

      {/* --- SEARCH BAR --- */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 flex items-center gap-3">
        <Search className="text-slate-400" size={20} />
        <input 
          type="text" 
          placeholder="Search by course title or category..." 
          className="flex-1 outline-none text-slate-700 placeholder:text-slate-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* --- DATA TABLE --- */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {isLoading ? (
          <div className="p-12 flex justify-center items-center text-teal-600">
            <Loader2 size={40} className="animate-spin" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider w-24">Image</th>
                  <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Title</th>
                  <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Details</th>
                  <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                  <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredCourses.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-slate-500 italic">
                      No courses found. Add one to get started.
                    </td>
                  </tr>
                ) : (
                  filteredCourses.map((course) => (
                    <tr key={course.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="p-4">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 relative">
                          {course.image ? (
                            <img src={course.image} className="w-full h-full object-cover" alt={course.title} />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-300">
                              <BookOpen size={20} />
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 text-lg">{course.title}</div>
                        <div className="text-slate-500 text-sm truncate max-w-xs">{course.description}</div>
                        {/* Popular Badge Indicator */}
                        {course.popular && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded mt-1">
                            <Star size={10} fill="currentColor" /> POPULAR
                          </span>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="text-sm font-medium text-slate-700">
                          <span className="text-slate-400">Level:</span> {course.level}
                        </div>
                        <div className="text-sm font-bold text-teal-600 mt-1">
                          {course.price}
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                          course.category === 'Physics' ? 'bg-teal-50 text-teal-700 border-teal-100' :
                          course.category === 'Chess' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                          'bg-indigo-50 text-indigo-700 border-indigo-100'
                        }`}>
                          {course.category}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => openEdit(course)} 
                            className="p-2.5 bg-white border border-slate-200 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 rounded-xl transition-all"
                            title="Edit"
                          >
                            <Pencil size={18} />
                          </button>
                          <button 
                            onClick={() => handleDelete(course.id)} 
                            className="p-2.5 bg-white border border-slate-200 text-red-600 hover:bg-red-50 hover:border-red-200 rounded-xl transition-all"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* --- ADD / EDIT MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-20">
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  {editingItem ? "Edit Course" : "Add New Course"}
                </h2>
                <p className="text-slate-500 text-sm mt-1">Fill in the details below.</p>
              </div>
              <button 
                onClick={closeModal} 
                className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Modal Body */}
            <form action={handleSubmit} className="p-8 space-y-8">
              
              {/* Image Upload Section */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide">
                  Course Image <span className="text-red-500">*</span>
                </label>
                <ImageUpload value={imageUrl} onChange={setImageUrl} />
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Course Title</label>
                  <input 
                    name="title" 
                    defaultValue={editingItem?.title} 
                    placeholder="e.g. GCE O-Level Physics" 
                    required 
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all font-medium" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Category</label>
                  <select 
                    name="category" 
                    defaultValue={editingItem?.category || "Physics"} 
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none font-medium appearance-none"
                  >
                    <option value="Physics">Physics</option>
                    <option value="Chess">Chess</option>
                    <option value="Skills">Skills</option>
                  </select>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Level</label>
                  <input 
                    name="level" 
                    defaultValue={editingItem?.level} 
                    placeholder="e.g. Sec 3 / JC 1" 
                    required 
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all font-medium" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">Price</label>
                  <input 
                    name="price" 
                    defaultValue={editingItem?.price} 
                    placeholder="e.g. SG$90 / 2hrs" 
                    required 
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all font-medium" 
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-700">Description</label>
                <textarea 
                  name="description" 
                  defaultValue={editingItem?.description} 
                  rows={4} 
                  placeholder="Summarize the course offering..."
                  required
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all font-medium resize-none" 
                />
              </div>

              {/* Features & Popular */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700">
                    Key Features <span className="text-slate-400 font-normal ml-1">(Comma separated)</span>
                  </label>
                  <input 
                    name="features" 
                    defaultValue={editingItem?.features?.join(", ")} 
                    placeholder="e.g. Detailed Notes, Exam Drills, 1-on-1 Consult" 
                    className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all font-medium" 
                  />
                </div>

                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-100 rounded-xl">
                  <input 
                    type="checkbox" 
                    name="popular" 
                    id="popular"
                    defaultChecked={editingItem?.popular}
                    className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500 border-gray-300" 
                  />
                  <label htmlFor="popular" className="font-bold text-slate-700 select-none cursor-pointer flex items-center gap-2">
                    <Star size={16} className="text-amber-500 fill-amber-500" />
                    Mark as "Most Popular"
                  </label>
                </div>
              </div>

              {/* Submit Actions */}
              <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={closeModal}
                  className="px-6 py-3 font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-teal-200 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting && <Loader2 size={18} className="animate-spin" />}
                  {editingItem ? "Update Course" : "Create Course"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}