"use client"

import { 
  Users, 
  Calendar, 
  Clock, 
  TrendingUp, 
  ArrowUpRight, 
  Play, 
  CheckCircle2,
  MessageSquare,
  AlertCircle
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function TutorDashboard() {
  const stats = [
    { label: "Total Students", value: "342", trend: "+8%", icon: Users, color: "bg-indigo-50 text-indigo-600" },
    { label: "Active Batches", value: "6", trend: "Stable", icon: Calendar, color: "bg-emerald-50 text-emerald-600" },
    { label: "Avg. Attendance", value: "92%", trend: "+2.4%", icon: TrendingUp, color: "bg-amber-50 text-amber-600" },
    { label: "Next Payment", value: "Rs. 82,400", trend: "Oct 28", icon: TrendingUp, color: "bg-rose-50 text-rose-600" },
  ]

  const todayClasses = [
    { name: "A/L Physics 2026 (Batch A)", time: "04:30 PM", room: "Hall 02", status: "Upcoming", students: 124 },
    { name: "Combined Mathematics (Revision)", time: "06:30 PM", room: "Hall 04", status: "Upcoming", students: 86 },
  ]

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter text-slate-900 font-headline">Ayubowan, Dr. Sunil!</h1>
          <p className="text-slate-500 font-medium mt-1">Here is your schedule and performance for today, October 16.</p>
        </div>
        <div className="flex gap-3">
           <button className="bg-indigo-600 text-white px-8 py-4 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-xl shadow-indigo-200 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
             <MessageSquare className="h-4 w-4" /> Message All Classes
           </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 group hover:shadow-xl transition-all">
            <div className="flex justify-between items-start mb-6">
               <div className={cn("p-4 rounded-2xl transition-transform group-hover:scale-110", stat.color)}>
                  <stat.icon className="h-6 w-6" />
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-indigo-500 transition-colors">
                 {stat.trend}
               </span>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black font-headline text-slate-800">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Today's Schedule */}
        <div className="lg:col-span-8 space-y-6">
           <h2 className="text-xl font-black font-headline tracking-tighter flex items-center gap-3">
             <Calendar className="h-6 w-6 text-indigo-600" /> Today's Sessions
           </h2>
           <div className="space-y-4">
              {todayClasses.map((cls, i) => (
                <div key={i} className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-all border-l-8 border-l-indigo-600">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex flex-col items-center justify-center text-indigo-600">
                         <Clock className="h-5 w-5" />
                         <span className="text-[10px] font-black">{cls.time.split(' ')[0]}</span>
                      </div>
                      <div>
                        <h4 className="font-black text-slate-800 text-lg">{cls.name}</h4>
                        <div className="flex items-center gap-3 mt-1">
                           <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{cls.room}</span>
                           <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                           <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500">{cls.students} Enrolled</span>
                        </div>
                      </div>
                   </div>
                   <div className="flex gap-3">
                      <button className="px-6 py-3 bg-indigo-50 text-indigo-600 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-100 transition-colors">
                        Mark Attendance
                      </button>
                      <button className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-all">
                        <Play className="h-5 w-5 fill-current" />
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Urgent HR/Notice Sidebar */}
        <div className="lg:col-span-4 space-y-6">
           <h2 className="text-xl font-black font-headline tracking-tighter flex items-center gap-3">
             <AlertCircle className="h-6 w-6 text-rose-500" /> Urgent Notices
           </h2>
           <div className="bg-rose-50 border border-rose-100 rounded-[3rem] p-8 space-y-6">
              <div className="space-y-2">
                 <p className="text-xs font-black uppercase tracking-widest text-rose-600">Leave Response</p>
                 <p className="text-sm font-medium text-rose-900 leading-relaxed">Your coverage request for Oct 24 (Poya Day) has been **Approved** by the Admin.</p>
              </div>
              <button className="w-full bg-rose-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-rose-200 hover:opacity-90 transition-all">
                View Details
              </button>
           </div>
           
           <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 space-y-4">
              <div className="flex items-center gap-3">
                 <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                 <span className="text-xs font-black uppercase tracking-widest text-slate-400">Monthly Targets</span>
              </div>
              <p className="text-2xl font-black text-slate-800 font-headline">88% <span className="text-sm font-bold text-slate-400">Syllabus Complete</span></p>
              <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                 <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000" style={{ width: '88%' }}></div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
