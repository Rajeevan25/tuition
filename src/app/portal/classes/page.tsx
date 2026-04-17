"use client"

import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ChevronRight, 
  FileText, 
  Plus, 
  Search,
  BookMarked
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function StudentClasses() {
  const enrolledClasses = [
    { 
      id: 1, 
      name: "A/L Physics 2026", 
      tutor: "Mrs. Jayawardena", 
      progress: 65, 
      nextSession: "Tomorrow at 4:30 PM",
      materials: 12,
      color: "from-indigo-500 to-primary"
    },
    { 
      id: 2, 
      name: "Combined Mathematics", 
      tutor: "Mr. Nimal Perera", 
      progress: 42, 
      nextSession: "Saturday at 6:30 PM",
      materials: 8,
      color: "from-emerald-500 to-teal-600"
    },
  ]

  const browseSessions = [
    { name: "ICT (Advanced Level)", teacher: "Dr. Gamage", schedule: "Tuesdays 4pm", capacity: "Full" },
    { name: "Chemistry Revision", teacher: "Mr. Bandara", schedule: "Sundays 8am", capacity: "Limited" },
    { name: "English Literature", teacher: "Ms. Fernando", schedule: "Fridays 3pm", capacity: "Open" },
  ]

  return (
    <div className="pt-28 pb-12 space-y-12">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black tracking-tighter text-on-surface font-headline">My Learning Path</h1>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Enrollments & Discovery</p>
        </div>
        <div className="flex -space-x-3">
          {[1, 2, 3].map(i => (
            <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=student${i}`} className="w-10 h-10 rounded-full border-4 border-white shadow-sm ring-1 ring-slate-100" alt="Student" />
          ))}
          <div className="w-10 h-10 rounded-full border-4 border-white bg-surface-container-high flex items-center justify-center text-[10px] font-black text-on-surface shadow-sm ring-1 ring-slate-100">+42</div>
        </div>
      </header>

      {/* Enrolled Classes Grid */}
      <section className="space-y-6">
        <h2 className="text-xl font-black font-headline tracking-tight flex items-center gap-3">
          <BookMarked className="h-6 w-6 text-primary" /> Active Enrollments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {enrolledClasses.map((cls) => (
            <div key={cls.id} className="bg-surface-container-lowest rounded-[3rem] p-8 shadow-sm border border-slate-50 flex flex-col justify-between group hover:shadow-2xl hover:shadow-primary/5 transition-all">
               <div className="flex justify-between items-start mb-8">
                  <div className={cn("inline-flex p-4 rounded-3xl text-white shadow-xl bg-gradient-to-br", cls.color)}>
                    <BookOpen className="h-7 w-7" />
                  </div>
                  <button className="h-12 w-12 bg-surface-container-low rounded-2xl flex items-center justify-center text-slate-300 hover:text-primary transition-all">
                    <ChevronRight className="h-6 w-6" />
                  </button>
               </div>
               
               <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-on-surface group-hover:text-primary transition-colors">{cls.name}</h3>
                    <p className="text-sm font-medium text-slate-400">Taught by {cls.tutor}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black tracking-widest uppercase text-slate-400">
                      <span>Curriculum Progress</span>
                      <span className="text-on-surface">{cls.progress}%</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-low rounded-full overflow-hidden">
                      <div className={cn("h-full rounded-full transition-all duration-1000 bg-gradient-to-r", cls.color)} style={{ width: `${cls.progress}%` }}></div>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-slate-50">
                    <div className="flex items-center gap-2">
                       <Clock className="h-4 w-4 text-primary" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{cls.nextSession}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <FileText className="h-4 w-4 text-emerald-500" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant font-headline">{cls.materials} Docs</span>
                    </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discovery Section (Browse More) */}
      <section className="bg-surface-container-low/50 rounded-[3.5rem] p-10 space-y-8 border border-white/50">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-black font-headline tracking-tight">Explore Other Subjects</h2>
          <div className="relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
            <input type="text" placeholder="Find teacher or class..." className="pl-12 pr-6 py-3 bg-white rounded-full text-xs font-bold outline-none focus:ring-4 focus:ring-primary/10 transition-all border-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {browseSessions.map((session, i) => (
            <div key={i} className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-50 flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer group">
               <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className={cn(
                      "text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-lg",
                      session.capacity === "Full" ? "bg-red-50 text-red-600" : session.capacity === "Limited" ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"
                    )}>
                      {session.capacity}
                    </span>
                    <Plus className="h-5 w-5 text-slate-200 group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="font-black text-on-surface text-lg leading-tight tracking-tight">{session.name}</h4>
                  <div className="flex items-center gap-2 text-slate-400">
                    <User className="h-3 w-3" />
                    <span className="text-xs font-bold">{session.teacher}</span>
                  </div>
               </div>
               <div className="pt-6 mt-6 border-t border-slate-50 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-slate-300" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{session.schedule}</span>
               </div>
            </div>
          ))}
        </div>
        
        <button className="w-full bg-on-surface text-white py-6 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-xl shadow-on-surface/10 hover:scale-[1.01] active:scale-95 transition-all">
          Request to Enroll in More Classes
        </button>
      </section>
    </div>
  )
}
