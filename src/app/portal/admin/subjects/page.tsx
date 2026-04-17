"use client"

import { useState } from "react"
import { 
  Search, 
  Plus, 
  MoreVertical, 
  FileEdit, 
  Trash2, 
  BookMarked,
  Filter,
  ArrowUpDown,
  BookOpen,
  ChevronRight,
  X,
  CheckCircle2,
  Clock
} from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const MOCK_SUBJECTS = [
  { id: "S1", name: "Physics", code: "PHY10", grade: "Grade 10", stream: "Science", duration: "1.5h", color: "bg-indigo-500", students: 124 },
  { id: "S2", name: "Mathematics", code: "MAT11", grade: "Grade 11", stream: "Commerce", duration: "2h", color: "bg-emerald-500", students: 89 },
  { id: "S3", name: "Chemistry", code: "CHE12", grade: "A/L 2026", stream: "Science", duration: "2.5h", color: "bg-rose-500", students: 156 },
  { id: "S4", name: "Economics", code: "ECO11", grade: "Grade 11", stream: "Arts", duration: "1.5h", color: "bg-amber-500", students: 45 },
]

export default function SubjectManagementPage() {
  const [subjects, setSubjects] = useState(MOCK_SUBJECTS)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStream, setFilterStream] = useState("All")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const filteredSubjects = subjects.filter(sub => {
    const matchesSearch = sub.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          sub.code.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStream = filterStream === "All" || sub.stream === filterStream
    return matchesSearch && matchesStream
  })

  const handleAddSubject = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      setIsModalOpen(false)
    }, 2000)
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface tracking-tight">Subject Management</h1>
          <p className="text-sm text-on-surface-variant font-medium">Define and organize academic subjects across different grades and streams.</p>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="primary-gradient text-white px-8 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
        >
          <Plus className="h-5 w-5" /> Add New Subject
        </button>
      </div>

      {/* Stats Quick View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Subjects", value: subjects.length.toString(), icon: BookMarked, color: "text-primary bg-primary/5" },
          { label: "Active Batches", value: "86", icon: BookOpen, color: "text-emerald-600 bg-emerald-50" },
          { label: "Total Students", value: "1.2k", icon: Search, color: "text-indigo-600 bg-indigo-50" },
          { label: "Streams", value: "4", icon: Filter, color: "text-amber-600 bg-amber-50" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-outline-variant/10 shadow-sm flex items-center gap-4">
            <div className={cn("p-4 rounded-2xl", stat.color)}>
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">{stat.label}</p>
              <p className="text-xl font-black text-on-surface">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Action Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="flex-1 w-full max-w-lg relative group">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
           <input 
             type="text" 
             placeholder="Search by subject name or code..." 
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             className="w-full h-12 pl-12 pr-4 rounded-2xl bg-white border border-outline-variant/5 shadow-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm font-medium"
           />
        </div>

        <div className="flex gap-3">
           <select 
             value={filterStream}
             onChange={(e) => setFilterStream(e.target.value)}
             className="px-4 py-3 rounded-2xl bg-white border border-outline-variant/10 shadow-sm text-sm font-bold text-on-surface-variant outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
           >
              <option value="All">All Streams</option>
              <option value="Science">Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Arts">Arts</option>
           </select>
           <button className="p-3 rounded-2xl bg-white border border-outline-variant/10 shadow-sm text-on-surface-variant hover:text-primary transition-colors">
              <Filter className="h-5 w-5" />
           </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-[2.5rem] border border-outline-variant/5 shadow-ambient overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-outline-variant/5">
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">
                  <div className="flex items-center gap-2">Subject & Code <ArrowUpDown className="h-3 w-3" /></div>
                </th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Grade / Stream</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Duration</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Total Students</th>
                <th className="px-8 py-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {filteredSubjects.length > 0 ? filteredSubjects.map((sub: any) => (
                <tr key={sub.id} className="group hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xs shadow-md", sub.color)}>
                        {sub.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-black text-on-surface group-hover:text-primary transition-colors">{sub.name}</div>
                        <div className="text-[10px] font-medium text-on-surface-variant opacity-60 uppercase tracking-widest">{sub.code}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-on-surface-variant">{sub.grade}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-primary/60">{sub.stream}</div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-sm font-bold text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-full">{sub.duration}</span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                       <div className="h-1.5 w-16 bg-surface-container-low rounded-full overflow-hidden">
                          <div className={cn("h-full rounded-full transition-all duration-1000", sub.color)} style={{ width: `${(sub.students/200)*100}%` }}></div>
                       </div>
                       <span className="text-sm font-black text-on-surface">{sub.students}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2.5 rounded-xl text-on-surface-variant hover:bg-white hover:shadow-sm hover:text-indigo-600 transition-all">
                        <FileEdit className="h-4.5 w-4.5" />
                      </button>
                      <button className="p-2.5 rounded-xl text-on-surface-variant hover:bg-white hover:shadow-sm hover:text-error transition-all">
                        <Trash2 className="h-4.5 w-4.5" />
                      </button>
                      <button className="p-2.5 rounded-xl text-on-surface-variant hover:bg-white hover:shadow-sm hover:text-primary transition-all">
                        <MoreVertical className="h-4.5 w-4.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} className="px-8 py-20 text-center">
                    <div className="flex flex-col items-center gap-4 opacity-40">
                       <BookMarked className="h-12 w-12" />
                       <p className="font-black text-sm uppercase tracking-widest">No subjects found matching your criteria</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Subject Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              {isSuccess ? (
                <div className="p-20 flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-[2.5rem] bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-on-surface">Subject Created!</h3>
                    <p className="text-sm font-medium text-on-surface-variant opacity-60">The new subject has been successfully added to the curriculum.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleAddSubject} className="p-10 space-y-8">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-black text-on-surface tracking-tight">Add New Subject</h2>
                      <p className="text-xs font-bold text-on-surface-variant opacity-40 uppercase tracking-widest">Global Academic Setup</p>
                    </div>
                    <button type="button" onClick={() => setIsModalOpen(false)} className="p-2 rounded-xl border border-outline-variant/10 text-on-surface-variant hover:text-error transition-all">
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Subject Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="e.g. Advanced Physics Revision" 
                        className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none font-bold text-sm transition-all" 
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Subject Code</label>
                        <input 
                          required 
                          type="text" 
                          placeholder="PHY-AL" 
                          className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none font-bold text-sm transition-all" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Grade / Level</label>
                        <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none font-bold text-sm">
                          <option>Grade 10</option>
                          <option>Grade 11</option>
                          <option>A/L 2025</option>
                          <option>A/L 2026</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Default Duration</label>
                        <div className="relative">
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                          <select className="w-full h-12 pl-12 pr-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none font-bold text-sm">
                            <option>1.5 Hours</option>
                            <option>2 Hours</option>
                            <option>3 Hours</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Color Theme</label>
                        <div className="flex gap-2">
                          {["bg-indigo-500", "bg-emerald-500", "bg-rose-500", "bg-amber-500", "bg-sky-500"].map(c => (
                            <button key={c} type="button" className={cn("w-8 h-8 rounded-lg", c)} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex gap-4">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-4 rounded-2xl bg-surface-container-low text-xs font-black uppercase tracking-widest hover:bg-slate-200 transition-all font-bold">Cancel</button>
                    <button type="submit" className="flex-[2] primary-gradient text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">Create Subject</button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
