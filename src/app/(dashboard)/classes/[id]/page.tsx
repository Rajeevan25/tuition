"use client"

import { useParams, useRouter } from "next/navigation"
import { 
  ArrowLeft, 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  CheckCircle2, 
  ChevronRight, 
  MoreVertical,
  BookOpen,
  PieChart,
  Target,
  Plus
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function ClassDetailsPage() {
  const params = useParams()
  const router = useRouter()
  
  // Mock data based on Stitch UI
  const classData = {
    id: params.id,
    name: "A/L Physics 2026",
    code: "AL-PHY-26",
    tutor: "Mrs. Jayawardena",
    room: "Lab Hall A",
    students: 24,
    maxCapacity: 40,
    progress: 68,
    status: "In Progress",
    nextSession: "Today, 04:30 PM"
  }

  return (
    <main className="min-h-screen pb-24 md:pb-12 bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-12 space-y-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 md:pt-0">
          <div className="space-y-2">
             <button 
              onClick={() => router.back()}
              className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest mb-4 hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="h-4 w-4" /> All Classes
            </button>
            <div className="flex items-center gap-4 flex-wrap">
              <h1 className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-on-surface">{classData.name}</h1>
              <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest ring-1 ring-indigo-100">
                {classData.status}
              </span>
            </div>
            <p className="text-on-surface-variant font-bold text-lg opacity-70">Course Code: {classData.code} • {classData.tutor}</p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-surface-container-high text-on-surface font-black text-xs uppercase tracking-widest rounded-full hover:bg-surface-container-highest transition-all shadow-sm">
              Session Log
            </button>
            <button className="primary-gradient text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
              <Plus className="h-4 w-4" /> Manage Class
            </button>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Enrolled", value: `${classData.students}/${classData.maxCapacity}`, icon: Users, color: "text-indigo-600", bg: "bg-indigo-50" },
            { label: "Next Session", value: classData.nextSession, icon: Clock, color: "text-emerald-600", bg: "bg-emerald-50" },
            { label: "Location", value: classData.room, icon: MapPin, color: "text-rose-600", bg: "bg-rose-50" },
            { label: "Completion", value: `${classData.progress}%`, icon: PieChart, color: "text-amber-600", bg: "bg-amber-50" }
          ].map((stat, i) => (stat &&
            <div key={i} className="bg-surface-container-lowest p-6 rounded-[2.5rem] shadow-sm border border-slate-50 group hover:shadow-xl hover:shadow-indigo-100/30 transition-all">
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110", stat.bg, stat.color)}>
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="text-[10px] font-black text-outline uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-xl font-black text-on-surface">{stat.value}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Column: Sessions & Content */}
          <div className="lg:col-span-8 space-y-8">
             {/* Curriculum Timeline */}
             <div className="bg-surface-container-lowest rounded-[3rem] p-10 shadow-sm border border-slate-50">
                <div className="flex justify-between items-center mb-10">
                   <h3 className="text-2xl font-black font-headline tracking-tight">Curriculum Roadmap</h3>
                   <button className="text-primary font-black text-[10px] uppercase tracking-[0.2em] hover:underline">Full Syllabus</button>
                </div>
                
                <div className="space-y-8 relative">
                   <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-surface-container-high"></div>
                   
                   {[
                     { title: "Units & Measurements", desc: "Basics of SI units and measurements.", status: "Completed", date: "Jan 12" },
                     { title: "Mechanics: Kinematics", desc: "Linear motion, Projectiles, and Circular motion.", status: "In Progress", date: "Feb 04" },
                     { title: "Thermal Physics", desc: "Heat transfer and thermodynamics basics.", status: "Upcoming", date: "Mar 28" }
                   ].map((step, i) => (
                     <div key={i} className="flex gap-8 relative group">
                        <div className={cn(
                          "w-14 h-14 rounded-full flex items-center justify-center relative z-10 border-4 border-white shadow-sm transition-transform group-hover:scale-110",
                          step.status === "Completed" ? "bg-emerald-500 text-white" : 
                          step.status === "In Progress" ? "bg-primary text-white" : "bg-surface-container-high text-outline"
                        )}>
                           {step.status === "Completed" ? <CheckCircle2 className="h-6 w-6" /> : <div className="text-[10px] font-black">{i+1}</div>}
                        </div>
                        <div className="flex-1 pb-4">
                           <div className="flex justify-between items-start mb-1">
                              <h4 className="text-lg font-black text-on-surface group-hover:text-primary transition-colors">{step.title}</h4>
                              <span className="text-[10px] font-black text-outline uppercase tracking-widest">{step.date}</span>
                           </div>
                           <p className="text-sm font-medium text-on-surface-variant leading-relaxed">{step.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             {/* Student Enrollment List */}
             <div className="bg-surface-container-lowest rounded-[3rem] p-10 shadow-sm border border-slate-50">
                <div className="flex justify-between items-center mb-10">
                   <h3 className="text-2xl font-black font-headline tracking-tight">Enrolled Students</h3>
                   <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search roster..." 
                        className="bg-surface-container-low px-6 py-3 rounded-full text-xs font-bold outline-none ring-2 ring-transparent focus:ring-primary/10 transition-all" 
                      />
                   </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {[
                     { name: "Dilshan Perera", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dilshan", att: "98%" },
                     { name: "Amavi Jayasinghe", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=amavi", att: "92%" },
                     { name: "Senath Bandara", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=senath", att: "100%" },
                     { name: "Tharindu Silva", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tharindu", att: "85%" },
                   ].map((s, i) => (
                     <div key={i} className="flex items-center gap-4 p-4 bg-surface-container-low/50 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-indigo-100/50 cursor-pointer group">
                        <img src={s.avatar} alt={s.name} className="w-12 h-12 rounded-xl object-cover" />
                        <div className="flex-1">
                           <h5 className="text-sm font-black text-on-surface group-hover:text-primary transition-colors">{s.name}</h5>
                           <p className="text-[10px] font-black text-outline uppercase tracking-widest mt-0.5">Attendance: {s.att}</p>
                        </div>
                        <MoreVertical className="h-4 w-4 text-outline opacity-40 group-hover:opacity-100" />
                     </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Right Column: Key Metrics & Instructor */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-surface-container-lowest rounded-[3rem] p-10 shadow-sm border border-slate-50 text-center">
                <div className="relative mx-auto w-32 h-32 mb-6">
                   <div className="absolute inset-0 border-4 border-surface-container-low rounded-full"></div>
                   <div className="absolute inset-0 border-4 border-primary rounded-full" style={{ clipPath: 'polygon(50% 50%, -50% -50%, 150% -50%, 150% 150%, 50% 50%)' }}></div>
                   <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-black font-headline tracking-tighter">74%</span>
                      <span className="text-[10px] font-black text-outline uppercase tracking-[0.22em] mt-1 pr-1.5">Avg Score</span>
                   </div>
                </div>
                <h4 className="text-xl font-black font-headline tracking-tight mb-2">Academic Pulse</h4>
                <p className="text-sm font-medium text-on-surface-variant opacity-70">Average quiz score across all 24 enrolled students this term.</p>
                
                <div className="mt-8 pt-8 border-t border-surface-container-low grid grid-cols-2 gap-4">
                   <div className="p-4 bg-surface-container-low rounded-2xl">
                      <div className="text-xl font-black text-on-surface">8</div>
                      <div className="text-[8px] font-black text-outline uppercase tracking-widest">Quizzes Done</div>
                   </div>
                   <div className="p-4 bg-surface-container-low rounded-2xl">
                      <div className="text-xl font-black text-on-surface">14</div>
                      <div className="text-[8px] font-black text-outline uppercase tracking-widest">Tasks Pending</div>
                   </div>
                </div>
             </div>

             <div className="bg-on-surface rounded-[3rem] p-10 text-white relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                   <div className="w-24 h-24 rounded-3xl overflow-hidden ring-4 ring-white/10 p-1">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLwHUmBmT3_asQ6AVJgGvSAOxGAfz3eOQ4Rg2krdYJ9hI-k4zUjyV_aIqwSgVKR-5tdVaFC2pav_4SJ6Sk1Tn84vVoxn46EWX3mzQNmdwx47k_vthGA-8zPketAhEmu16hPTEej-6S--pWevraiA3h_fsgJcloj_Ztq0Kou5_l877FSt9CxE4rS790qvkAJ6SEcPQvOqukTYVS81VxbEf56Xn4XO5N_C3wU7QX3mPi_mDqWz1HIy9D7aYGMEosYN9bXCxZgbXkjBAK" alt={classData.tutor} className="w-full h-full object-cover rounded-2xl" />
                   </div>
                   <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Primary Lead</span>
                      <h5 className="text-2xl font-black font-headline tracking-tight mt-1">{classData.tutor}</h5>
                      <span className="text-sm font-bold text-primary-fixed mt-2 block">10+ Years Experience</span>
                   </div>
                   <button className="w-full py-4 bg-white/10 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/5">View Full Profile</button>
                </div>
                <Users className="absolute -bottom-10 -right-10 h-40 w-40 text-white/5 group-hover:scale-110 transition-transform duration-700" />
             </div>
          </div>
        </div>
      </div>
    </main>
  )
}
