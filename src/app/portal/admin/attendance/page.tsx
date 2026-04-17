"use client"

import { useState } from "react"
import { 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Calendar, 
  Building2, 
  MoreVertical,
  ChevronRight,
  Users,
  XCircle,
  AlertCircle,
  Search,
  Filter,
  ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const TODAY_CLASSES = [
  { id: "C1", name: "A/L Physics 2026", time: "08:00 - 09:30 AM", status: "Completed", students: 152, rate: "94%" },
  { id: "C2", name: "Combined Mathematics", time: "10:00 - 11:30 AM", status: "In Progress", students: 84, rate: "88%" },
  { id: "C3", name: "A/L ICT", time: "01:00 - 02:30 PM", status: "Upcoming", students: 92 },
  { id: "C4", name: "O/L Sinhala", time: "03:00 - 04:30 PM", status: "Upcoming", students: 45 },
]

const MOCK_STUDENTS = [
  { id: "88291", name: "Dilshan Perera", avatar: "DP", status: "Present" },
  { id: "88302", name: "Amavi Jayasinghe", avatar: "AJ", status: "Absent" },
  { id: "88415", name: "Senath Bandara", avatar: "SB", status: "Late" },
  { id: "88122", name: "Tharindu Silva", avatar: "TS", status: "Pending" },
  { id: "88593", name: "Imesha Fernando", avatar: "IF", status: "Present" },
  { id: "88220", name: "Ravindu Perera", avatar: "RP", status: "Present" }
]

export default function AdminAttendancePage() {
  const [selectedClass, setSelectedClass] = useState("C2")

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface tracking-tight">Attendance Center</h1>
          <p className="text-sm text-on-surface-variant font-medium">Real-time monitoring and institute-wide participation metrics.</p>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="px-6 py-3 rounded-2xl bg-white border border-outline-variant/10 font-bold text-sm text-on-surface hover:bg-surface-container-low transition-all">
              Export History
           </button>
           <button className="primary-gradient px-8 py-3 rounded-2xl text-white font-black text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all">
              Save Attendance
           </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group shadow-2xl shadow-slate-900/10">
           <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full -mr-10 -mt-10 group-hover:scale-125 transition-transform duration-700"></div>
           <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="space-y-1">
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Daily Center Rate</p>
                 <div className="text-7xl font-black italic tracking-tighter">94<span className="text-indigo-400 text-3xl font-black not-italic">%</span></div>
              </div>
              <div className="mt-8 flex items-center gap-2 text-emerald-400 bg-emerald-500/10 w-fit px-4 py-1.5 rounded-full border border-emerald-500/20">
                 <TrendingUp className="h-4 w-4" />
                 <span className="text-[10px] font-black uppercase tracking-widest">+2.4% vs last week</span>
              </div>
           </div>
        </div>

        <div className="lg:col-span-8 bg-white rounded-[3rem] p-10 border border-outline-variant/5 shadow-ambient space-y-8">
           <div className="flex items-center justify-between px-2">
              <h3 className="text-xl font-black text-on-surface">Classes Today</h3>
              <span className="text-[10px] font-black text-primary bg-primary/5 px-4 py-2 rounded-full uppercase tracking-widest border border-primary/10">
                4 Sessions Remaining
              </span>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {TODAY_CLASSES.map((c) => (
                <div 
                  key={c.id} 
                  onClick={() => setSelectedClass(c.id)}
                  className={cn(
                    "p-5 rounded-[2rem] flex items-center justify-between border transition-all cursor-pointer group",
                    selectedClass === c.id ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" : "bg-surface-container-low border-transparent hover:border-primary/20"
                  )}
                >
                   <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center font-black",
                        selectedClass === c.id ? "bg-white/20" : "bg-white text-primary shadow-sm"
                      )}>
                         {c.status === 'Completed' ? <CheckCircle2 className="h-6 w-6" /> : <Clock className="h-6 w-6" />}
                      </div>
                      <div className="space-y-0.5">
                         <h4 className="font-bold text-sm tracking-tight">{c.name}</h4>
                         <p className={cn("text-[10px] font-black uppercase tracking-widest", selectedClass === c.id ? "opacity-60" : "text-on-surface-variant opacity-40")}>{c.time}</p>
                      </div>
                   </div>
                   {c.rate && (
                     <div className={cn("text-xs font-black", selectedClass === c.id ? "text-white" : "text-emerald-600")}>{c.rate}</div>
                   )}
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Detailed Marking Grid */}
      <div className="space-y-6">
         <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-6 bg-white rounded-[2.5rem] border border-outline-variant/5 shadow-sm">
            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
               <div className="bg-surface-container-low px-6 py-3 rounded-2xl flex items-center gap-3 border border-outline-variant/5 flex-1 md:flex-none">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-on-surface">APR 16, 2026</span>
               </div>
               <div className="bg-surface-container-low px-6 py-3 rounded-2xl flex items-center gap-3 border border-outline-variant/5 flex-1 md:flex-none">
                  <Building2 className="h-4 w-4 text-primary" />
                  <select className="bg-transparent border-none p-0 text-[10px] font-black uppercase tracking-widest focus:ring-0 cursor-pointer outline-none text-on-surface">
                     <option>A/L Physics 2026 - Main Hall</option>
                     <option>Mathematics - Lab C</option>
                  </select>
               </div>
            </div>
            <div className="flex-1 w-full max-w-xs relative group hidden lg:block">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-on-surface-variant group-focus-within:text-primary transition-colors" />
               <input type="text" placeholder="Search student name or ID..." className="w-full h-10 pl-10 pr-4 rounded-xl bg-surface-container-low border-transparent focus:border-primary focus:bg-white outline-none text-xs font-bold transition-all shadow-inner" />
            </div>
         </div>

         {/* Student Marking Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_STUDENTS.map((student) => (
              <div key={student.id} className="bg-white rounded-[2.5rem] p-8 border border-outline-variant/5 shadow-ambient flex flex-col items-center text-center space-y-6 group hover:border-primary/20 transition-all">
                 <div className="relative">
                    <div className="w-24 h-24 rounded-[2.5rem] bg-surface-container-low flex items-center justify-center font-black text-2xl text-primary ring-8 ring-primary/5 group-hover:scale-105 transition-transform duration-500">
                       {student.avatar}
                    </div>
                    <div className={cn(
                      "absolute -bottom-2 -right-2 w-10 h-10 border-4 border-white rounded-2xl flex items-center justify-center shadow-lg transition-transform hover:scale-110",
                      student.status === "Present" ? "bg-emerald-500" : student.status === "Absent" ? "bg-error" : student.status === "Late" ? "bg-amber-500" : "bg-slate-300"
                    )}>
                       {student.status === "Present" ? <CheckCircle2 className="h-5 w-5 text-white" /> : student.status === "Absent" ? <XCircle className="h-5 w-5 text-white" /> : <AlertCircle className="h-5 w-5 text-white" />}
                    </div>
                 </div>
                 
                 <div>
                    <h4 className="text-xl font-black text-on-surface tracking-tight group-hover:text-primary transition-colors">{student.name}</h4>
                    <p className="text-[10px] font-black text-on-surface-variant opacity-40 uppercase tracking-[0.2em] mt-1">ID: #{student.id}</p>
                 </div>

                 <div className="flex w-full gap-2 p-1.5 bg-surface-container-low rounded-[1.5rem] border border-outline-variant/5 shadow-inner">
                    {["Present", "Absent", "Late"].map((type) => (
                      <button 
                        key={type}
                        className={cn(
                          "flex-1 py-3 px-1 rounded-xl text-[8px] font-black uppercase tracking-[0.15em] transition-all",
                          student.status === type 
                            ? (type === "Present" ? "bg-white text-emerald-600 shadow-md" : 
                               type === "Absent" ? "bg-white text-error shadow-md" : 
                               "bg-white text-amber-600 shadow-md")
                            : "text-on-surface-variant opacity-40 hover:opacity-100"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  )
}
