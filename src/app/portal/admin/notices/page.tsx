"use client"

import { 
  Megaphone, 
  Plus, 
  Search, 
  Calendar, 
  Users, 
  Eye, 
  MoreVertical, 
  Send, 
  Filter, 
  BellRing,
  ArrowRight,
  TrendingUp,
  ChevronRight,
  Target
} from "lucide-react"
import { cn } from "@/lib/utils"

const ANNOUNCEMENTS = [
  { id: 1, title: "Mid-Term Examination Schedule", audience: "All Students", date: "Oct 25, 2024", priority: "High", views: 412 },
  { id: 2, title: "Public Holiday: Center Closed", audience: "All Faculty", date: "Oct 28, 2024", priority: "Normal", views: 28 },
  { id: 3, title: "New AI Learning Assistant Beta", audience: "Parents & Students", date: "Nov 01, 2024", priority: "Normal", views: 156 },
]

export default function AdminNoticesPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface tracking-tight">Communication Hub</h1>
          <p className="text-sm text-on-surface-variant font-medium">Broadcast important updates, schedules, and alerts to your center community.</p>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="px-6 py-3 rounded-2xl bg-white border border-outline-variant/10 font-bold text-sm text-on-surface hover:bg-surface-container-low transition-all">
              Notification Logs
           </button>
           <button className="primary-gradient px-8 py-3 rounded-2xl text-white font-black text-sm flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              <Send className="h-4 w-4" /> New Broadcast
           </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-[2rem] border border-outline-variant/5 shadow-ambient flex items-center gap-5">
           <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <BellRing className="h-6 w-6" />
           </div>
           <div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Active Notices</p>
              <p className="text-xl font-black text-on-surface">12</p>
           </div>
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-outline-variant/5 shadow-ambient flex items-center gap-5">
           <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Eye className="h-6 w-6" />
           </div>
           <div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Total Reads</p>
              <p className="text-xl font-black text-on-surface">3.4K</p>
           </div>
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-outline-variant/5 shadow-ambient flex items-center gap-5">
           <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Target className="h-6 w-6" />
           </div>
           <div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Reach Rate</p>
              <p className="text-xl font-black text-on-surface">92%</p>
           </div>
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-outline-variant/5 shadow-ambient flex items-center gap-5">
           <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <TrendingUp className="h-6 w-6" />
           </div>
           <div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Engagement</p>
              <p className="text-xl font-black text-on-surface">+18%</p>
           </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center p-6 bg-white rounded-[2.5rem] border border-outline-variant/5 shadow-sm">
         <div className="flex-1 w-full max-w-lg relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant group-focus-within:text-indigo-600 transition-colors" />
            <input type="text" placeholder="Search notices by title or content..." className="w-full h-11 pl-12 pr-4 rounded-xl bg-surface-container-low border-transparent focus:border-indigo-600 focus:bg-white outline-none text-sm font-black transition-all shadow-inner" />
         </div>
         <button className="flex items-center gap-2 bg-surface-container-low px-6 py-3 rounded-xl text-on-surface font-black text-[10px] uppercase tracking-widest border border-outline-variant/5 hover:bg-white hover:border-indigo-100 transition-all">
            <Filter className="h-4 w-4" /> Advanced Filter
         </button>
      </div>

      {/* Announcements List */}
      <div className="space-y-6">
         {ANNOUNCEMENTS.map((item) => (
           <div key={item.id} className="group bg-white rounded-[3rem] p-8 border border-outline-variant/5 shadow-ambient flex flex-col md:flex-row items-center gap-8 hover:border-indigo-600/20 hover:-translate-y-1 transition-all">
              <div className={cn(
                "w-20 h-20 rounded-[2rem] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110",
                item.priority === 'High' ? "bg-rose-50 text-rose-600 shadow-lg shadow-rose-100/50" : "bg-indigo-50 text-indigo-600 shadow-lg shadow-indigo-100/50"
              )}>
                <BellRing className="h-10 w-10" />
              </div>
              
              <div className="flex-1 space-y-4 text-center md:text-left">
                 <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <span className={cn(
                      "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest",
                      item.priority === 'High' ? "bg-rose-600 text-white animate-pulse" : "bg-surface-container-low text-on-surface-variant"
                    )}>{item.priority} Priority</span>
                    <span className="text-[10px] font-black text-on-surface-variant opacity-40 uppercase tracking-[0.2em] flex items-center gap-2">
                       <Calendar className="h-3.5 w-3.5" /> {item.date}
                    </span>
                 </div>
                 
                 <div className="space-y-1">
                    <h3 className="text-2xl font-black text-on-surface tracking-tight group-hover:text-indigo-600 transition-colors italic leading-tight">{item.title}</h3>
                    <div className="flex items-center justify-center md:justify-start gap-6 pt-2">
                       <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg">
                          <Users className="h-3.5 w-3.5" /> {item.audience}
                       </div>
                       <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40 px-3 py-1">
                          <Eye className="h-3.5 w-3.5" /> {item.views} Viewers
                       </div>
                    </div>
                 </div>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto">
                 <button className="flex-1 md:flex-none h-14 px-8 rounded-2xl bg-surface-container-low font-black text-xs uppercase tracking-widest text-on-surface hover:bg-white hover:shadow-sm border border-transparent hover:border-indigo-100 transition-all">
                    Edit Broadcast
                 </button>
                 <button className="h-14 w-14 rounded-2xl bg-surface-container-low text-on-surface-variant hover:text-indigo-600 transition-all flex items-center justify-center">
                    <MoreVertical className="h-5 w-5" />
                 </button>
              </div>
           </div>
         ))}
      </div>

      {/* Analytics Insight Card */}
      <section className="bg-slate-900 rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden group shadow-2xl shadow-indigo-900/10">
         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
               <h3 className="text-4xl lg:text-5xl font-black italic tracking-tighter leading-tight">Your Reach is <span className="text-indigo-400">Expanding</span>.</h3>
               <p className="text-sm opacity-60 leading-relaxed max-w-lg font-medium">
                  Your last announcement reached <span className="text-white font-black underline decoration-emerald-400 italic">92% of parents</span> within the first 4 hours. Push notifications are currently your most effective channel.
               </p>
               <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                 Detailed Analytics <ArrowRight className="h-4 w-4" />
               </button>
            </div>
            <div className="flex justify-center relative">
               <div className="w-80 h-80 bg-white/5 rounded-full border-2 border-white/10 p-12 flex flex-col items-center justify-center relative backdrop-blur-sm group-hover:scale-105 transition-transform duration-700">
                  <div className="text-7xl font-black italic tracking-tighter">412</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mt-2">Avg. Reach Rate</div>
                  <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-[60px] animate-pulse"></div>
               </div>
            </div>
         </div>
         <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[120px] -mr-40 -mt-40"></div>
      </section>
    </div>
  )
}
