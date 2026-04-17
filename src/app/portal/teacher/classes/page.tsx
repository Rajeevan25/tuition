"use client"

import { useState } from "react"
import { 
  BookOpen, 
  Users, 
  Calendar, 
  MapPin, 
  ClipboardCheck, 
  ArrowRight,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  MoreVertical,
  ChevronRight,
  TrendingUp,
  FileText
} from "lucide-react"
import { cn } from "@/lib/utils"

const MOCK_CLASSES = [
  { id: "C1", title: "A/L Physics 2025 - Theory", branch: "Colombo 03", students: "152", nextSession: "Today, 08:30 AM", attendanceAvg: "92%", color: "text-indigo-600 bg-indigo-50" },
  { id: "C2", title: "A/L Physics 2026 - Basics", branch: "Online Live", students: "84", nextSession: "Today, 01:00 PM", attendanceAvg: "95%", color: "text-emerald-600 bg-emerald-50" },
  { id: "C3", title: "Revision Batch - Papers", branch: "Gampaha", students: "210", nextSession: "Tomorrow, 04:30 PM", attendanceAvg: "88%", color: "text-amber-600 bg-amber-50" },
]

export default function TeacherClassesPage() {
  const [view, setView] = useState("list")

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface tracking-tight">Assigned Classes</h1>
          <p className="text-sm text-on-surface-variant font-medium">Manage your batches, view student lists, and mark attendance.</p>
        </div>
        
        <div className="flex bg-surface-container-low p-1.5 rounded-2xl border border-outline-variant/10">
           <button 
             onClick={() => setView("list")}
             className={cn(
               "px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
               view === "list" ? "bg-white text-primary shadow-sm" : "text-on-surface-variant opacity-60"
             )}
           >
              Active Batches
           </button>
           <button 
             onClick={() => setView("history")}
             className={cn(
               "px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
               view === "history" ? "bg-white text-primary shadow-sm" : "text-on-surface-variant opacity-60"
             )}
           >
              Past Classes
           </button>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
         <div className="flex-1 w-full max-w-md relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant group-focus-within:text-emerald-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Search by class name or branch..." 
              className="w-full h-12 pl-12 pr-4 rounded-2xl bg-white border border-outline-variant/5 shadow-sm outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm font-medium"
            />
         </div>
         <div className="flex gap-3">
            <button className="p-3 rounded-2xl bg-white border border-outline-variant/10 text-on-surface-variant hover:text-emerald-600 transition-all">
               <Filter className="h-5 w-5" />
            </button>
            <button className="px-6 py-3 rounded-2xl bg-emerald-600 text-white font-black text-sm flex items-center gap-2 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/20">
               <TrendingUp className="h-4 w-4" /> Attendance Reports
            </button>
         </div>
      </div>

      {/* Dynamic Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {MOCK_CLASSES.map((cls) => (
           <div key={cls.id} className="group bg-white rounded-[3rem] border border-outline-variant/5 shadow-ambient flex flex-col hover:border-emerald-500/20 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              {/* Card Top */}
              <div className="p-10 space-y-6 flex-1">
                 <div className="flex items-center justify-between">
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl", cls.color)}>
                       {cls.title.split(' ')[0][0]}{cls.title.split(' ')[1][0]}
                    </div>
                    <button className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-low transition-all">
                       <MoreVertical className="h-5 w-5" />
                    </button>
                 </div>

                 <div className="space-y-2">
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">{cls.branch}</span>
                       <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Section A</span>
                    </div>
                    <h3 className="text-xl font-black text-on-surface group-hover:text-emerald-700 transition-colors leading-tight">{cls.title}</h3>
                 </div>

                 <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="space-y-1">
                       <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40 flex items-center gap-1.5">
                          <Users className="h-3 w-3" /> Students
                       </p>
                       <p className="text-lg font-black text-on-surface">{cls.students}</p>
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40 flex items-center gap-1.5">
                          <TrendingUp className="h-3 w-3" /> Attendance
                       </p>
                       <p className="text-lg font-black text-emerald-600">{cls.attendanceAvg}</p>
                    </div>
                 </div>
              </div>

              {/* Card Footer Actions */}
              <div className="bg-surface-container-low/50 p-6 flex items-center justify-between border-t border-outline-variant/5">
                 <button className="flex items-center gap-2 text-xs font-black text-on-surface hover:text-emerald-600 transition-all group/btn">
                    <ClipboardCheck className="h-4 w-4 text-emerald-600" /> 
                    <span>Mark Attendance</span>
                    <ChevronRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                 </button>
                 <button className="p-2 rounded-xl bg-white text-on-surface-variant hover:text-indigo-600 transition-all shadow-sm">
                    <FileText className="h-4 w-4" />
                 </button>
              </div>
           </div>
         ))}

         {/* Add New Quick Entry */}
         <div className="bg-white rounded-[3rem] border-2 border-dashed border-outline-variant/20 p-10 flex flex-col items-center justify-center text-center space-y-4 hover:border-emerald-500/30 hover:bg-emerald-50/10 transition-all cursor-pointer group">
            <div className="w-16 h-16 rounded-[2rem] bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-all">
               <BookOpen className="h-8 w-8" />
            </div>
            <div className="space-y-1">
               <h4 className="font-bold text-on-surface">Assign New Class</h4>
               <p className="text-[10px] font-medium text-on-surface-variant opacity-60 px-6">Contact Admin to get assigned to more batches or subjects.</p>
            </div>
         </div>
      </div>
    </div>
  )
}
