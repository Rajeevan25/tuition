"use client"

import { useState, useEffect } from "react"
import { 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Calendar, 
  School, 
  MoreVertical,
  ChevronRight,
  User,
  XCircle,
  AlertCircle
} from "lucide-react"
import { cn } from "@/lib/utils"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"

export default function AttendancePage() {
  const [selectedClass, setSelectedClass] = useState("A/L Combined Mathematics - Hall A")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const metrics = {
    rate: "94",
    trend: "+2.4%",
    remaining: 4
  }

  const todayClasses = [
    { name: "A/L Physics 2026", time: "08:00 - 09:30 AM", status: "Completed", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50" },
    { name: "Combined Mathematics", time: "10:00 - 11:30 AM", status: "In Progress", icon: Clock, color: "text-indigo-600", bg: "bg-indigo-50" },
    { name: "A/L ICT", time: "01:00 - 02:30 PM", status: "Upcoming", icon: Calendar, color: "text-slate-400", bg: "bg-slate-100" },
    { name: "O/L Sinhala", time: "03:00 - 04:30 PM", status: "Upcoming", icon: Calendar, color: "text-slate-400", bg: "bg-slate-100" },
  ]

  const students = [
    { id: "88291", name: "Dilshan Perera", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dilshan", status: "Present" },
    { id: "88302", name: "Amavi Jayasinghe", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=amavi", status: "Absent" },
    { id: "88415", name: "Senath Bandara", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=senath", status: "Late" },
    { id: "88122", name: "Tharindu Silva", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tharindu", status: "Pending" },
    { id: "88593", name: "Imesha Fernando", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=imesha", status: "Present" },
    { id: "88220", name: "Ravindu Perera", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ravindu", status: "Present" }
  ]

  return (
    <main className="pt-20 md:pt-8 p-6 md:p-10 min-h-screen space-y-10">
      <DashboardHeader 
        title="Attendance Tracking" 
        subtitle="Real-time monitoring and center-wide participation metrics." 
      />

      {/* Overview Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 bg-surface-container-lowest rounded-[3rem] p-10 shadow-sm flex flex-col justify-between overflow-hidden relative border border-slate-50 group hover:shadow-xl hover:shadow-indigo-100/30 transition-all duration-500">
           <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
           <div className="relative z-10">
              <p className="text-[10px] font-black tracking-widest text-outline uppercase mb-2">Today&apos;s Center Rate</p>
              <h3 className="text-7xl font-headline font-black text-on-surface tracking-tighter">
                {metrics.rate}<span className="text-primary text-3xl font-black">%</span>
              </h3>
           </div>
           <div className="mt-8 flex items-center gap-2 text-emerald-600 bg-emerald-50 w-fit px-4 py-1.5 rounded-full">
              <TrendingUp className="h-4 w-4" />
              <span className="text-xs font-black uppercase tracking-widest">{metrics.trend} vs last week</span>
           </div>
        </div>

        <div className="lg:col-span-8 bg-surface-container-low/50 rounded-[3rem] p-10 space-y-8 border border-white/50 backdrop-blur-sm">
           <div className="flex items-center justify-between">
              <h3 className="text-2xl font-black font-headline tracking-tight">Today&apos;s Classes</h3>
              <span className="text-[10px] font-black text-primary bg-primary-fixed px-4 py-2 rounded-full uppercase tracking-widest">
                {metrics.remaining} Classes Remaining
              </span>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {todayClasses.map((c, i) => (
                <div key={i} className="bg-surface-container-lowest p-5 rounded-3xl flex items-center gap-5 hover:shadow-lg hover:shadow-indigo-100/20 transition-all cursor-pointer group border border-transparent hover:border-indigo-100/50">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-inner", c.bg, c.color)}>
                    <c.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black text-on-surface group-hover:text-primary transition-colors">{c.name}</h4>
                    <p className="text-[10px] font-black text-outline uppercase tracking-widest mt-1">{c.time}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Mark Attendance Section */}
      <section className="space-y-8">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-surface-container-low px-8 py-6 rounded-[3rem] border border-white/50">
           <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
              <div className="bg-white px-6 py-3 rounded-2xl flex items-center gap-3 shadow-sm border border-slate-50 flex-1 lg:flex-none">
                 <Calendar className="h-5 w-5 text-primary" />
                 <span className="text-xs font-black uppercase tracking-widest">OCT 24, 2023</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-2xl flex items-center gap-3 shadow-sm border border-slate-50 flex-1 lg:flex-none">
                 <School className="h-5 w-5 text-primary" />
                 <select 
                   value={selectedClass} 
                   onChange={(e) => setSelectedClass(e.target.value)}
                   className="bg-transparent border-none p-0 text-xs font-black uppercase tracking-widest focus:ring-0 cursor-pointer"
                 >
                    <option>Linear Algebra - Section A</option>
                    <option>Linear Algebra - Section B</option>
                 </select>
              </div>
           </div>
           <button className="w-full lg:w-auto primary-gradient text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
              Save All Changes
           </button>
        </div>

        {/* Student Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {students.map((student) => (
             <div key={student.id} className="bg-surface-container-lowest rounded-[3rem] p-8 shadow-sm flex flex-col items-center text-center space-y-6 border border-slate-50 hover:shadow-xl hover:shadow-indigo-100/30 transition-all group">
                <div className="relative">
                   <img 
                    alt={student.name} 
                    className="w-24 h-24 rounded-[2rem] object-cover ring-8 ring-indigo-50/50 group-hover:scale-105 transition-transform duration-500" 
                    src={student.avatar} 
                   />
                   <div className={cn(
                     "absolute -bottom-2 -right-2 w-8 h-8 border-4 border-white rounded-full flex items-center justify-center shadow-md",
                     student.status === "Present" ? "bg-emerald-500" : student.status === "Absent" ? "bg-error" : student.status === "Late" ? "bg-amber-500" : "bg-slate-300"
                   )}>
                      {student.status === "Present" ? <CheckCircle2 className="h-4 w-4 text-white" /> : student.status === "Absent" ? <XCircle className="h-4 w-4 text-white" /> : <AlertCircle className="h-4 w-4 text-white" />}
                   </div>
                </div>
                <div>
                   <h4 className="text-xl font-black font-headline tracking-tight text-on-surface">{student.name}</h4>
                   <p className="text-[10px] font-black text-outline uppercase tracking-widest mt-1">Student ID: #{student.id}</p>
                </div>
                <div className="flex w-full gap-2">
                   {["Present", "Absent", "Late"].map((type) => (
                     <button 
                       key={type}
                       className={cn(
                         "flex-1 py-3 px-1 rounded-2xl text-[8px] font-black uppercase tracking-[0.15em] transition-all",
                         student.status === type 
                           ? (type === "Present" ? "bg-emerald-500 text-white shadow-lg shadow-emerald-200" : 
                              type === "Absent" ? "bg-error text-white shadow-lg shadow-error/20" : 
                              "bg-amber-500 text-white shadow-lg shadow-amber-200")
                           : "bg-surface text-outline hover:bg-white hover:shadow-md"
                       )}
                     >
                       {type}
                     </button>
                   ))}
                </div>
             </div>
           ))}
        </div>
      </section>
    </main>
  )
}
