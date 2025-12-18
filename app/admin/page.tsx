export default function AdminDashboard() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Welcome Back, Admin</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-slate-500 text-sm font-bold uppercase tracking-wider">Quick Tip</h3>
          <p className="mt-2 text-slate-700">
            Use the sidebar to navigate between sections. Remember to optimize images before uploading!
          </p>
        </div>
        {/* You can add real stats here by fetching the counts from APIs */}
      </div>
    </div>
  )
}