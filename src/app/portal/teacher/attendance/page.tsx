"use client"

import { useState } from "react"
import { 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Calendar, 
  Search,
  Users,
  XCircle,
  AlertCircle,
  ChevronRight,
  MoreVertical,
  ArrowRight,
  Filter
} from "lucide-react"
import { cn } from "@/lib/utils"

const TEACHER_CLASSES = [
  { id: "C1", name: "A/L Physics 2025 - Theory", time: "08:30 AM", branch: "Colombo 03", students: 152, rate: "94%" },
  { id: "C2", name: "A/L Physics 2026 - Basics", time: "01:00 PM", branch: "Online", students: 84, rate: "88%" },
  { id: "C3", name: "Revision Batch - Papers", time: "04:30 PM", branch: "Gampaha", students: 210 },
]

const MOCK_STUDENTS = [
  { id: "88291", name: "Dilshan Perera", avatar: "DP", status: "Present" },
  { id: "88302", name: "Amavi Jayasinghe", avatar: "AJ", status: "Absent" },
  { id: "88415", name: "Senath Bandara", avatar: "SB", status: "Late" },
  { id: "88122", name: "Tharindu Silva", avatar: "TS", status: "Pending" },
  { id: "88593", name: "Imesha Fernando", avatar: "IF", status: "Present" },
  { id: "88220", name: "Ravindu Perera", avatar: "RP", status: "Present" }
]

export default function TeacherAttendancePage() {
  const [selectedClass, setSelectedClass] = useState("C1")
  const [searchQuery, setSearchQuery] = useState("")

  const activeClass = TEACHER_CLASSES.find(c => c.id === selectedClass)

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface tracking-tight">Mark Attendance</h1>
          <p className="text-sm text-on-surface-variant font-medium">Record daily student participation for your assigned batches.</p>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="px-6 py-3 rounded-2xl bg-white border border-outline-variant/10 font-bold text-sm text-on-surface hover:bg-surface-container-low transition-all">
              History
           </button>
           <button className="bg-emerald-600 px-8 py-3 rounded-2xl text-white font-black text-sm shadow-xl shadow-emerald-600/20 hover:scale-105 transition-all">
              Submit Marks
           </button>
        </div>
      </div>

      {/* Class Selection Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-4">
           <h3 className="text-xs font-black uppercase tracking-widest text-on-surface-variant px-2">Your Sessions Today</h3>
           <div className="space-y-3">
              {TEACHER_CLASSES.map((c) => (
                <div 
                  key={c.id} 
                  onClick={() => setSelectedClass(c.id)}
                  className={cn(
                    "p-6 rounded-[2.5rem] border transition-all cursor-pointer group relative overflow-hidden",
                    selectedClass === c.id 
                      ? "bg-emerald-600 text-white border-emerald-600 shadow-xl shadow-emerald-600/20" 
                      : "bg-white border-outline-variant/5 hover:border-emerald-500/20"
                  )}
                >
                   <div className="flex items-center justify-between relative z-10">
                      <div className="space-y-1">
                         <div className="flex items-center gap-2">
                            <span className={cn(
                              "text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full",
                              selectedClass === c.id ? "bg-white/20 text-white" : "bg-emerald-50 text-emerald-600"
                            )}>{c.branch}</span>
                            <span className={cn("text-[10px] font-black uppercase tracking-widest opacity-60", selectedClass === c.id ? "text-white" : "text-on-surface-variant")}>{c.time}</span>
                         </div>
                         <h4 className="font-bold text-sm leading-tight">{c.name}</h4>
                      </div>
                      <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center",
                        selectedClass === c.id ? "bg-white/20" : "bg-surface-container-low text-emerald-600"
                      )}>
                         <Clock className="h-5 w-5" />
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="lg:col-span-8 bg-white rounded-[3rem] p-8 md:p-10 border border-outline-variant/5 shadow-ambient space-y-8">
           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                 <h2 className="text-2xl font-black text-on-surface">{activeClass?.name}</h2>
                 <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest opacity-40">Marking for {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              </div>
              <div className="flex items-center gap-4 bg-surface-container-low/50 p-2 rounded-2xl border border-outline-variant/5">
                 <div className="px-4 py-2 text-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">Students</p>
                    <p className="text-lg font-black text-on-surface">{activeClass?.students}</p>
                 </div>
                 <div className="w-px h-8 bg-outline-variant/20" />
                 <div className="px-4 py-2 text-center text-emerald-600">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Success Rate</p>
                    <p className="text-lg font-black">{activeClass?.rate || "--"}</p>
                 </div>
              </div>
           </div>

           <div className="flex gap-4">
              <div className="flex-1 relative group">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant group-focus-within:text-emerald-500 transition-colors" />
                 <input 
                   type="text" 
                   placeholder="Search student ID or name..."
                   className="w-full h-12 pl-12 pr-4 rounded-2xl bg-surface-container-low border-transparent focus:bg-white focus:border-emerald-500 shadow-inner outline-none text-sm font-medium transition-all"
                 />
              </div>
              <button className="p-3 rounded-2xl bg-surface-container-low border border-outline-variant/5 text-on-surface-variant hover:text-emerald-600 transition-all">
                 <Filter className="h-5 w-5" />
              </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MOCK_STUDENTS.map((student) => (
                <div key={student.id} className="p-5 bg-white rounded-[2rem] border border-outline-variant/10 flex items-center justify-between group hover:border-emerald-500/20 transition-all shadow-sm">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center font-black text-emerald-600 group-hover:scale-110 transition-transform">
                         {student.avatar}
                      </div>
                      <div>
                         <h4 className="font-bold text-sm text-on-surface leading-tight">{student.name}</h4>
                         <p className="text-[10px] font-black text-on-surface-variant opacity-40 uppercase tracking-widest">ID: #{student.id}</p>
                      </div>
                   </div>
                   <div className="flex gap-1.5 p-1 bg-surface-container-low rounded-xl border border-outline-variant/5">
                      {["P", "A", "L"].map((code) => {
                        const typeMap: Record<string, string> = { "P": "Present", "A": "Absent", "L": "Late" }
                        const isActive = student.status === typeMap[code]
                        return (
                          <button 
                            key={code}
                            className={cn(
                              "w-8 h-8 rounded-lg text-[10px] font-black transition-all",
                              isActive
                                ? (code === "P" ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20" : 
                                   code === "A" ? "bg-rose-500 text-white shadow-md shadow-rose-500/20" : 
                                   "bg-amber-500 text-white shadow-md shadow-amber-500/20")
                                : "text-on-surface-variant opacity-40 hover:opacity-100 hover:bg-white"
                            )}
                            title={typeMap[code]}
                          >
                            {code}
                          </button>
                        )
                      })}
                   </div>
                </div>
              ))}
           </div>
           
           <button className="w-full py-4 rounded-[1.5rem] bg-surface-container-low text-on-surface-variant font-black text-[10px] uppercase tracking-widest hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-dashed border-outline-variant/20">
              View All students (152)
           </button>
        </div>
      </div>
    </div>
  )
}
