"use client"

import { useState } from "react"
import Link from "next/link"
import { 
  Plus, 
  Search, 
  Filter, 
  BookOpen, 
  Users, 
  Calendar, 
  Clock,
  MoreVertical,
  ChevronRight,
  GraduationCap,
  MapPin,
  TrendingUp,
  ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const MOCK_BATCHES = [
  { 
    id: "B1", 
    name: "Grade 11 Physics - Weekend", 
    subject: "Physics", 
    teacher: "Kamal Silva", 
    students: 42, 
    capacity: 50, 
    schedule: "Sat, Sun 8:00 AM", 
    status: "Active",
    color: "from-indigo-600 to-primary"
  },
  { 
    id: "B2", 
    name: "Grade 10 Maths - Evening", 
    subject: "Mathematics", 
    teacher: "Sunil Perera", 
    students: 28, 
    capacity: 30, 
    schedule: "Mon, Wed 4:30 PM", 
    status: "Upcoming",
    color: "from-emerald-500 to-teal-600"
  },
  { 
    id: "B3", 
    name: "A/L 2026 Chemistry - Revision", 
    subject: "Chemistry", 
    teacher: "Nimali de Silva", 
    students: 120, 
    capacity: 150, 
    schedule: "Fridays 3:00 PM", 
    status: "Active",
    color: "from-rose-500 to-pink-600"
  },
]

export default function BatchManagementPage() {
  const [batches, setBatches] = useState(MOCK_BATCHES)

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface tracking-tight font-headline">Batch Management</h1>
          <p className="text-sm text-on-surface-variant font-medium uppercase tracking-widest opacity-60">Academic Operations & Class Control</p>
        </div>

        <Link 
          href="/portal/admin/batches/create"
          className="primary-gradient text-white px-8 py-4 rounded-[2rem] font-black text-sm flex items-center gap-3 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all group"
        >
          <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300" /> 
          <span>Create New Batch</span>
        </Link>
      </div>

      {/* Analytics Carousel or Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         {[
           { label: "Total Batches", value: "32", icon: BookOpen, color: "bg-primary/5 text-primary" },
           { label: "Avg. Attendance", value: "94%", icon: TrendingUp, color: "bg-emerald-50 text-emerald-600" },
           { label: "Total Enrollments", value: "1,420", icon: Users, color: "bg-indigo-50 text-indigo-600" },
           { label: "Teachers", value: "12", icon: GraduationCap, color: "bg-amber-50 text-amber-600" },
         ].map((stat, i) => (
           <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-outline-variant/5 shadow-sm space-y-4">
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", stat.color)}>
                 <stat.icon className="h-6 w-6" />
              </div>
              <div>
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-40">{stat.label}</p>
                 <p className="text-2xl font-black text-on-surface">{stat.value}</p>
              </div>
           </div>
         ))}
      </div>

      {/* Simple Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
         <div className="flex-1 w-full max-w-xl relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search batches by name, subject, or teacher..." 
              className="w-full h-14 pl-12 pr-6 rounded-[2rem] bg-white border border-outline-variant/5 shadow-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-sm"
            />
         </div>
         <div className="flex gap-3">
            <button className="h-14 w-14 rounded-2xl bg-white border border-outline-variant/10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-all">
               <Filter className="h-6 w-6" />
            </button>
         </div>
      </div>

      {/* Batch Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {batches.map((batch) => (
           <div key={batch.id} className="relative bg-white rounded-[3rem] border border-outline-variant/10 shadow-ambient overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
              {/* Card Header Background Decor */}
              <div className={cn("absolute top-0 right-0 w-32 h-32 -mr-12 -mt-12 rounded-full opacity-10 blur-2xl bg-gradient-to-br", batch.color)}></div>
              
              <div className="p-10 space-y-8 relative z-10">
                 <div className="flex justify-between items-start">
                    <div className={cn("p-4 rounded-3xl text-white shadow-lg bg-gradient-to-br", batch.color)}>
                       <BookOpen className="h-6 w-6" />
                    </div>
                    <span className={cn(
                      "text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full",
                      batch.status === "Active" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                    )}>
                      {batch.status}
                    </span>
                 </div>

                 <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{batch.subject}</p>
                    <h3 className="text-2xl font-black text-on-surface group-hover:text-primary transition-colors leading-tight">
                       {batch.name}
                    </h3>
                 </div>

                 <div className="space-y-4 pt-4 border-t border-outline-variant/5">
                    <div className="flex items-center gap-3 text-on-surface-variant">
                       <GraduationCap className="h-4 w-4 text-primary" />
                       <span className="text-xs font-bold">{batch.teacher}</span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant">
                       <Calendar className="h-4 w-4 text-primary" />
                       <span className="text-xs font-bold">{batch.schedule}</span>
                    </div>
                    <div className="space-y-2 pt-2">
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                          <span className="opacity-40">Capacity Usage</span>
                          <span className="text-on-surface">{batch.students}/{batch.capacity} Students</span>
                       </div>
                       <div className="h-2 w-full bg-surface-container-low rounded-full overflow-hidden">
                          <div className={cn("h-full rounded-full transition-all duration-1000 bg-gradient-to-r", batch.color)} style={{ width: `${(batch.students/batch.capacity)*100}%` }}></div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Quick Actions Footer */}
              <div className="bg-surface-container-low/30 p-6 flex gap-2 border-t border-outline-variant/5">
                 <Link 
                   href={`/portal/admin/batches/${batch.id}`}
                   className="flex-1 bg-white p-4 rounded-2xl text-xs font-black uppercase tracking-widest text-on-surface hover:text-primary flex items-center justify-center gap-2 shadow-sm border border-outline-variant/5 transition-all"
                 >
                    View Details <ArrowRight className="h-4 w-4" />
                 </Link>
                 <button className="p-4 rounded-2xl bg-white text-on-surface-variant hover:text-indigo-600 shadow-sm border border-outline-variant/5">
                    <MoreVertical className="h-5 w-5" />
                 </button>
              </div>
           </div>
         ))}

         {/* Add New Batch Quick Card */}
         <Link 
           href="/portal/admin/batches/create" 
           className="bg-surface-container-low/50 border-4 border-dashed border-outline-variant/20 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center space-y-6 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer group"
          >
            <div className="w-20 h-20 rounded-[2.5rem] bg-white text-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
               <Plus className="h-10 w-10" />
            </div>
            <div className="space-y-2">
               <h4 className="text-xl font-black text-on-surface">Start New Batch</h4>
               <p className="text-sm font-medium text-on-surface-variant opacity-60 leading-relaxed px-10">Configure schedules, assign teachers, and enroll students in minutes.</p>
            </div>
         </Link>
      </div>
    </div>
  )
}
