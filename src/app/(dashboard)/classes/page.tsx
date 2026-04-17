"use client"

import Link from "next/link"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { Search, PlusCircle, Calendar, Users, Clock, MapPin, MoreVertical, Filter, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

const classes = [
  { id: 1, name: "A/L Physics 2026", teacher: "Mrs. Jayawardena", students: 24, time: "09:00 - 10:30", days: ["Mon", "Wed", "Fri"], room: "Lab A", color: "bg-indigo-50 text-indigo-600" },
  { id: 2, name: "Grade 11 Mathematics", teacher: "Mr. Nimal Perera", students: 18, time: "11:00 - 12:30", days: ["Tue", "Thu"], room: "Room 102", color: "bg-emerald-50 text-emerald-600" },
  { id: 3, name: "Combined Mathematics (Rev)", teacher: "Dr. Sunil Gamage", students: 32, time: "14:00 - 15:30", days: ["Mon", "Wed", "Fri"], room: "Auditorium", color: "bg-amber-50 text-amber-600" },
  { id: 4, name: "Grade 5 Scholarship", teacher: "Ms. Tharushi Silva", students: 12, time: "16:00 - 17:00", days: ["Sat"], room: "Studio 1", color: "bg-rose-50 text-rose-600" },
]

export default function ClassesPage() {
  return (
    <main className="pt-20 md:pt-8 p-6 md:p-10 min-h-screen space-y-8">
      <DashboardHeader 
        title="Class Management" 
        subtitle="Schedule and organize your learning sessions and curriculum."
      />

      {/* Control Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 bg-surface-container-highest px-6 py-3 rounded-full text-on-surface font-black text-xs uppercase tracking-widest hover:brightness-95 transition-all">
            <Filter className="h-4 w-4" /> Filter
          </button>
          <div className="flex items-center gap-2 bg-surface-container-low px-6 py-3 rounded-full text-on-surface-variant font-black text-xs uppercase tracking-widest">
            <span>Sort By:</span>
            <select className="bg-transparent border-none p-0 text-primary font-bold focus:ring-0 text-xs cursor-pointer outline-none uppercase tracking-widest">
              <option>Time</option>
              <option>Students</option>
              <option>Alphabetical</option>
            </select>
          </div>
        </div>
        <button className="primary-gradient text-white px-8 py-4 rounded-full font-black text-sm flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
          <PlusCircle className="h-5 w-5" /> Create New Class
        </button>
      </div>

      {/* Classes Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => (
          <div key={cls.id} className="bg-surface-container-lowest p-6 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group border border-transparent hover:border-primary/10">
            <div className="flex justify-between items-start mb-6">
              <div className={cn("p-4 rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner", cls.color)}>
                <BookOpen className="h-6 w-6" />
              </div>
              <button className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>

            <h3 className="text-xl font-black text-on-surface tracking-tight mb-2 underline decoration-primary/20 underline-offset-8 decoration-4">{cls.name}</h3>
            <p className="text-sm font-bold text-on-surface-variant flex items-center gap-2 mb-6">
              Taught by <span className="text-primary">{cls.teacher}</span>
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <div className="p-2 bg-surface-container-low rounded-lg">
                  <Clock className="h-4 w-4" />
                </div>
                <span className="font-semibold">{cls.time}</span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="font-bold opacity-60">{cls.days.join(', ')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <div className="p-2 bg-surface-container-low rounded-lg">
                  <Users className="h-4 w-4" />
                </div>
                <span className="font-semibold">{cls.students} Students Enrolled</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                <div className="p-2 bg-surface-container-low rounded-lg">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="font-semibold">{cls.room}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Link href={`/classes/${cls.id}`} className="flex-1 primary-gradient py-4 rounded-2xl text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-primary/20 transition-all hover:opacity-90 active:scale-95 text-center">
                Manage Class
              </Link>
              <button className="w-14 bg-surface-container-low rounded-2xl flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors">
                <Calendar className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Capacity Overview Banner */}
      <section className="bg-surface-container-lowest p-10 rounded-[3rem] shadow-ambient relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="max-w-md text-center md:text-left space-y-4">
            <h3 className="text-3xl font-black tracking-tighter text-on-surface">Optimize your resources.</h3>
            <p className="text-on-surface-variant font-medium leading-relaxed">Most of your classes are at <span className="text-emerald-600 font-bold">84% capacity</span>. Consider opening a new Saturday slot for Advanced Physics to accommodate the waitlist.</p>
            <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
               <button className="bg-on-surface text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl">Capacity Analytics</button>
               <button className="text-primary font-black text-xs uppercase tracking-widest hover:underline px-6">View Heatmap</button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-sm">
             <div className="h-64 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                <div className="text-slate-300 font-black text-6xl opacity-10 uppercase tracking-tighter -rotate-12">Preview</div>
                <Calendar className="h-20 w-20 text-slate-200" strokeWidth={1} />
             </div>
          </div>
        </div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </section>
    </main>
  )
}
