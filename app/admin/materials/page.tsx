"use client";

import { useState, useEffect } from "react";
import { 
  addStudyMaterial, 
  deleteStudyMaterial, 
  getStudyMaterials 
} from "@/app/actions/adminActions";
import { UploadButton } from "@/lib/uploadthing"; // Using your UploadThing helper
import { 
  Plus, Trash2, Video, FileText, Link as LinkIcon, Search, CheckCircle, X 
} from "lucide-react";

export default function MaterialsAdmin() {
  const [materials, setMaterials] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Form States
  const [type, setType] = useState("Video");
  const [pdfLink, setPdfLink] = useState(""); // Stores the UploadThing URL

  useEffect(() => { loadData() }, []);

  async function loadData() {
    const data = await getStudyMaterials();
    setMaterials(data);
  }

  // Submit Logic
  async function handleSubmit(formData: FormData) {
    // If PDF, inject the UploadThing URL into the 'link' field
    if (type === 'PDF') {
        if (!pdfLink) return alert("Please upload a PDF first");
        formData.set('link', pdfLink);
    }

    await addStudyMaterial(formData);
    
    // Reset & Close
    setIsModalOpen(false);
    setPdfLink("");
    loadData();
  }

  async function handleDelete(id: number) {
    if (confirm("Delete this material?")) {
      await deleteStudyMaterial(id);
      loadData();
    }
  }

  const filtered = materials.filter(m => m.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen pb-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black text-slate-900">Study Materials</h1>
        <button onClick={() => setIsModalOpen(true)} className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg">
          <Plus size={20} /> Add Material
        </button>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-6 flex gap-3">
        <Search className="text-slate-400" />
        <input 
          placeholder="Search materials..." 
          className="flex-1 outline-none" 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col relative group">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${item.type === 'Video' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                {item.type === 'Video' ? <Video size={24} /> : <FileText size={24} />}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-1 rounded">
                {item.category}
              </span>
            </div>
            
            <h3 className="font-bold text-slate-900 text-lg mb-2 truncate">{item.title}</h3>
            <a href={item.link} target="_blank" className="text-sm text-teal-600 hover:underline flex items-center gap-1 mb-6 truncate block">
              <LinkIcon size={12} /> View Resource
            </a>

            <button onClick={() => handleDelete(item.id)} className="mt-auto w-full py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 font-bold text-sm">
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Add New Material</h2>
                <button onClick={() => setIsModalOpen(false)}><X className="text-slate-400 hover:text-slate-600"/></button>
            </div>
            
            <form action={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Title</label>
                <input name="title" required className="w-full p-3 border rounded-xl" placeholder="e.g. Newton's Laws Notes" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Type</label>
                  <select name="type" className="w-full p-3 border rounded-xl" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="Video">YouTube Video</option>
                    <option value="PDF">PDF Document</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Category</label>
                  <select name="category" className="w-full p-3 border rounded-xl">
                    <option value="Physics">Physics</option>
                    <option value="Chess">Chess</option>
                    <option value="Maths">Maths</option>
                  </select>
                </div>
              </div>

              {/* Conditional Input */}
              <div className="pt-2">
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                    {type === 'Video' ? 'YouTube URL' : 'Upload PDF'}
                </label>
                
                {type === 'Video' ? (
                    <input name="link" required className="w-full p-3 border rounded-xl" placeholder="https://youtube.com/..." />
                ) : (
                    // === UPLOADTHING BUTTON ===
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 bg-slate-50 flex flex-col items-center justify-center">
                        {!pdfLink ? (
                            <UploadButton
                                endpoint="pdfUploader"
                                onClientUploadComplete={(res) => {
                                    setPdfLink(res[0].url);
                                }}
                                onUploadError={(error: Error) => {
                                    alert(`Upload failed: ${error.message}`);
                                }}
                                appearance={{
                                    button: "bg-teal-600 hover:bg-teal-700 text-sm px-4 py-2 rounded-lg",
                                    allowedContent: "text-slate-400 text-xs"
                                }}
                            />
                        ) : (
                            <div className="flex flex-col items-center gap-2 text-green-600">
                                <CheckCircle size={32} />
                                <p className="font-bold text-sm">PDF Ready!</p>
                                <button 
                                    type="button" 
                                    onClick={() => setPdfLink("")}
                                    className="text-xs text-red-500 underline mt-2"
                                >
                                    Remove & Upload Different File
                                </button>
                            </div>
                        )}
                    </div>
                )}
              </div>

              <div className="flex gap-3 mt-6 pt-4 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3 border rounded-xl font-bold hover:bg-slate-50">Cancel</button>
                <button 
                    type="submit" 
                    disabled={type === 'PDF' && !pdfLink}
                    className="flex-1 py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Save Material
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}