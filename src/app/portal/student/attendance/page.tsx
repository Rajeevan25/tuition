"use client"

import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  TrendingUp, 
  Calendar, 
  ChevronRight,
  BookOpen,
  Filter,
  Search
} from "lucide-react"
import { cn } from "@/lib/utils"

const SUBJECT_ATTENDANCE = [
  { id: "S1", name: "Advanced Physics", total: 24, present: 22, percentage: "91.6%", color: "text-indigo-600 bg-indigo-50" },
  { id: "S2", name: "Chemistry Revision", total: 18, present: 18, percentage: "100%", color: "text-emerald-600 bg-emerald-50" },
  { id: "S3", name: "Combined Maths", total: 30, present: 26, percentage: "86.6%", color: "text-amber-600 bg-amber-50" },
]

const ATTENDANCE_LOGS = [
  { id: "L1", date: "Apr 15, 2026", subject: "Advanced Physics", time: "08:30 AM", status: "Present" },
  { id: "L2", date: "Apr 14, 2026", subject: "Chemistry Revision", time: "01:00 PM", status: "Present" },
  { id: "L3", date: "Apr 12, 2026", subject: "Combined Maths", time: "04:30 PM", status: "Absent", reason: "Medical" },
  { id: "L4", date: "Apr 10, 2026", subject: "Advanced Physics", time: "08:30 AM", status: "Present" },
  { id: "L5", date: "Apr 08, 2026", subject: "Chemistry Revision", time: "01:00 PM", status: "Present" },
]

export default function StudentAttendancePage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface tracking-tight">Attendance Record</h1>
          <p className="text-sm text-on-surface-variant font-medium">Monitor your participation across all subjects and batches.</p>
        </div>
        
        <div className="flex bg-white p-1.5 rounded-2xl border border-outline-variant/10 shadow-sm font-bold text-sm">
           <div className="px-6 py-2 text-primary font-black">Overall: 94.2%</div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         <div className="lg:col-span-8 bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group shadow-2xl shadow-slate-900/10 h-full min-h-[300px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10">
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                     <TrendingUp className="h-6 w-6 text-indigo-300" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Term Performance</span>
               </div>
               <div className="space-y-2">
                  <h3 className="text-xl font-bold opacity-80">Consistency is Key</h3>
                  <p className="max-w-md text-sm opacity-60 font-medium">You've maintained an excellent attendance rate this month. Keep it up to stay ahead of the syllabus!</p>
               </div>
            </div>
            <div className="relative z-10 flex items-end justify-between mt-12">
               <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                  <div className="space-y-1">
                     <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Total Sessions</p>
                     <p className="text-3xl font-black italic">72</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Attended</p>
                     <p className="text-3xl font-black italic text-indigo-400">68</p>
                  </div>
                  <div className="space-y-1 hidden md:block">
                     <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Leaves</p>
                     <p className="text-3xl font-black italic opacity-60">04</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="lg:col-span-4 bg-white rounded-[3rem] p-8 border border-outline-variant/10 shadow-ambient flex flex-col justify-between">
            <div className="space-y-6">
               <h3 className="text-lg font-black text-on-surface">Upcoming Check-in</h3>
               <div className="p-6 bg-indigo-50 rounded-[2rem] border border-indigo-100 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-indigo-600 shadow-sm font-black">
                     <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600/60">Tomorrow</p>
                     <h4 className="font-bold text-sm text-indigo-900 leading-tight">Advanced Physics Theory</h4>
                  </div>
               </div>
            </div>
            <button className="w-full py-4 rounded-2xl bg-surface-container-low text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:bg-white border border-outline-variant/5 transition-all mt-8">
               Manage Leave Requests
            </button>
         </div>
      </div>

      {/* Subject Breakdown */}
      <div className="space-y-6">
         <h3 className="text-xl font-black text-on-surface px-2">Subject-wise Analytics</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUBJECT_ATTENDANCE.map((sub) => (
              <div key={sub.id} className="bg-white p-8 rounded-[2.5rem] border border-outline-variant/10 shadow-ambient group hover:border-primary/20 transition-all">
                 <div className="flex items-center justify-between mb-8">
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center font-black", sub.color)}>
                       <BookOpen className="h-7 w-7" />
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Rate</p>
                       <p className="text-2xl font-black text-on-surface">{sub.percentage}</p>
                    </div>
                 </div>
                 <div className="space-y-4">
                    <h4 className="text-lg font-black text-on-surface group-hover:text-primary transition-colors">{sub.name}</h4>
                    <div className="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                       <div className="h-full bg-primary" style={{ width: sub.percentage }}></div>
                    </div>
                    <p className="text-[10px] font-black text-on-surface-variant opacity-60 uppercase tracking-widest">
                       {sub.present} of {sub.total} Sessions attended
                    </p>
                 </div>
              </div>
            ))}
         </div>
      </div>

      {/* Recent Logs Table */}
      <div className="space-y-6">
         <div className="flex items-center justify-between px-2">
            <h3 className="text-xl font-black text-on-surface">Recent Logs</h3>
            <div className="flex items-center gap-3">
               <div className="relative group hidden md:block">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                  <input type="text" placeholder="Search logs..." className="h-10 pl-10 pr-4 rounded-xl bg-surface-container-low border-transparent focus:bg-white focus:border-primary outline-none text-xs font-bold transition-all shadow-inner w-56" />
               </div>
               <button className="p-2.5 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-primary transition-all">
                  <Filter className="h-4 w-4" />
               </button>
            </div>
         </div>

         <div className="bg-white rounded-[3rem] border border-outline-variant/10 shadow-ambient overflow-hidden">
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="bg-surface-container-low/50">
                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">Date</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">Subject</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">Session Time</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40 text-right">Status</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/5">
                     {ATTENDANCE_LOGS.map((log) => (
                       <tr key={log.id} className="hover:bg-surface-container-low/30 transition-colors group">
                          <td className="px-8 py-6">
                             <p className="text-sm font-black text-on-surface">{log.date}</p>
                          </td>
                          <td className="px-8 py-6">
                             <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                   <Clock className="h-4 w-4" />
                                </div>
                                <span className="text-sm font-bold text-on-surface">{log.subject}</span>
                             </div>
                          </td>
                          <td className="px-8 py-6 text-sm font-medium text-on-surface-variant">{log.time}</td>
                          <td className="px-8 py-6 text-right">
                             <span className={cn(
                               "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest",
                               log.status === "Present" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                             )}>
                                {log.status === "Present" ? <CheckCircle2 className="h-3.5 w-3.5" /> : <XCircle className="h-3.5 w-3.5" />}
                                {log.status}
                             </span>
                          </td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            <button className="w-full py-5 bg-surface-container-low/30 text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:bg-surface-container-low transition-all">
               Load Full History
            </button>
         </div>
      </div>
    </div>
  )
}
