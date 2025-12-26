"use client";

import { useState, useEffect } from "react";
import { getEnquiries, updateEnquiry, deleteEnquiry } from "@/app/actions/adminActions";
import { 
  Search, 
  Trash2, 
  X, 
  Loader2, 
  MessageSquare,
  Eye,
  CheckCircle,
  Clock,
  Archive
} from "lucide-react";

export default function EnquiriesAdmin() {
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setIsLoading(true);
    const data = await getEnquiries();
    setEnquiries(data);
    setIsLoading(false);
  }

  async function handleUpdate(formData: FormData) {
    if (selectedItem) {
      await updateEnquiry(selectedItem.id, formData);
      closeModal();
      loadData();
    }
  }

  async function handleDelete(id: number) {
    if (confirm("Delete this enquiry permanently?")) {
      await deleteEnquiry(id);
      loadData();
    }
  }

  function openModal(item: any) {
    setSelectedItem(item);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedItem(null);
  }

  // Helpers for Status Badges
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-700';
      case 'Contacted': return 'bg-amber-100 text-amber-700';
      case 'Closed': return 'bg-green-100 text-green-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const filteredData = enquiries.filter(item => 
    item.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pb-20">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
            <MessageSquare className="text-indigo-600" size={32} />
            Enquiries
          </h1>
          <p className="text-slate-500 mt-1">Manage student admissions and contact requests.</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 flex items-center gap-3">
        <Search className="text-slate-400" size={20} />
        <input 
          type="text" 
          placeholder="Search by name, email or subject..." 
          className="flex-1 outline-none text-slate-700 placeholder:text-slate-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {isLoading ? (
          <div className="p-12 flex justify-center items-center text-indigo-600">
            <Loader2 size={40} className="animate-spin" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Date</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Parent Name</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Subject</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase">Status</th>
                  <th className="p-4 text-xs font-bold text-slate-500 uppercase text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 text-sm text-slate-500">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-4 font-bold text-slate-800">
                      {item.parentName}
                      <div className="text-xs text-slate-400 font-normal">{item.email}</div>
                    </td>
                    <td className="p-4 text-sm text-slate-600">{item.subject}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => openModal(item)} className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg">
                          <Eye size={18} />
                        </button>
                        <button onClick={() => handleDelete(item.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail & Edit Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h2 className="text-xl font-bold text-slate-900">Enquiry Details</h2>
              <button onClick={closeModal} className="p-2 hover:bg-slate-200 rounded-full"><X size={20}/></button>
            </div>
            
            <div className="p-6 space-y-6 overflow-y-auto">
              
              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <label className="block text-slate-400 text-xs uppercase font-bold">Parent</label>
                  <p className="font-bold text-slate-800">{selectedItem.parentName}</p>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs uppercase font-bold">Student</label>
                  <p className="font-bold text-slate-800">{selectedItem.studentName || "N/A"}</p>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs uppercase font-bold">Phone</label>
                  <p className="font-medium text-slate-700">{selectedItem.phone}</p>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs uppercase font-bold">Email</label>
                  <p className="font-medium text-slate-700">{selectedItem.email}</p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <label className="block text-slate-400 text-xs uppercase font-bold mb-1">Message</label>
                <p className="text-slate-700 text-sm leading-relaxed">{selectedItem.message}</p>
              </div>

              {/* Edit Form */}
              <form action={handleUpdate} className="space-y-4 border-t border-slate-100 pt-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Update Status</label>
                  <div className="flex gap-2">
                    {['New', 'Contacted', 'Closed'].map((status) => (
                      <label key={status} className="cursor-pointer">
                        <input 
                          type="radio" 
                          name="status" 
                          value={status} 
                          defaultChecked={selectedItem.status === status}
                          className="peer sr-only"
                        />
                        <div className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 text-sm font-bold peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:border-indigo-600 transition-all">
                          {status}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Internal Notes</label>
                  <textarea 
                    name="notes" 
                    defaultValue={selectedItem.notes}
                    placeholder="Add notes about this conversation..."
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-colors text-sm"
                    rows={3}
                  />
                </div>

                <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}