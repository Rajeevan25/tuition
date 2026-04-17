"use client"

import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { Megaphone, PlusCircle, Search, Calendar, Users, Eye, MoreVertical, Send, Filter, BellRing } from "lucide-react"
import { cn } from "@/lib/utils"

const announcements = [
  { id: 1, title: "Mid-Term Examination Schedule", audience: "All Students", date: "Oct 25, 2024", priority: "High", views: 412 },
  { id: 2, title: "Public Holiday: Center Closed", audience: "All Faculty", date: "Oct 28, 2024", priority: "Normal", views: 28 },
  { id: 3, title: "New AI Learning Assistant Beta", audience: "Parents & Students", date: "Nov 01, 2024", priority: "Normal", views: 156 },
]

export default function AnnouncementsPage() {
  return (
    <main className="pt-20 md:pt-8 p-6 md:p-10 min-h-screen space-y-10">
      <DashboardHeader 
        title="Announcements" 
        subtitle="Broadcast important updates, schedules, and alerts to your center community."
      />

      {/* Control Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 bg-surface-container-highest px-6 py-3 rounded-full text-on-surface font-black text-xs uppercase tracking-widest hover:brightness-95 transition-all">
            <Filter className="h-4 w-4" /> Filter
          </button>
        </div>
        <button className="primary-gradient text-white px-8 py-4 rounded-full font-black text-sm flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
          <Send className="h-5 w-5" /> New Broadcast
        </button>
      </div>

      {/* Active Announcements List */}
      <section className="space-y-6">
        {announcements.map((item) => (
          <div key={item.id} className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm border border-transparent hover:border-primary/10 transition-all flex flex-col md:flex-row items-center gap-6">
            <div className={cn(
              "w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0",
              item.priority === 'High' ? "bg-rose-50 text-rose-500" : "bg-indigo-50 text-indigo-500"
            )}>
              <BellRing className="h-8 w-8" />
            </div>
            
            <div className="flex-1 space-y-2 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <span className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                  item.priority === 'High' ? "bg-rose-500 text-white" : "bg-surface-container-high text-on-surface-variant"
                )}>{item.priority} Priority</span>
                <span className="text-[10px] font-bold text-outline-variant uppercase tracking-widest flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {item.date}
                </span>
              </div>
              <h3 className="text-xl font-black text-on-surface tracking-tight">{item.title}</h3>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <span className="text-xs font-bold text-primary flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" /> For: {item.audience}
                </span>
                <span className="text-xs font-bold text-on-surface-variant flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5" /> {item.views} Views
                </span>
              </div>
            </div>

            <div className="flex gap-2 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-surface-container-low font-bold text-xs uppercase tracking-widest text-on-surface hover:bg-surface-container-high transition-colors">
                Edit
              </button>
              <button className="p-3 rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Analytics Preview Card */}
      <section className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-[3rem] p-10 text-white relative overflow-hidden">
         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <h3 className="text-3xl font-black tracking-tighter">Reach Analytics</h3>
               <p className="opacity-80 leading-relaxed text-lg">Your last announcement reached <span className="text-white font-black underline decoration-emerald-400">92% of parents</span> within the first 4 hours. Push notifications are currently your most effective channel.</p>
               <button className="bg-white text-indigo-700 px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl">Detailed Stats</button>
            </div>
            <div className="hidden lg:flex justify-center">
               <div className="w-64 h-64 bg-white/10 rounded-full border-4 border-white/20 flex flex-col items-center justify-center">
                  <div className="text-4xl font-black">412</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Avg. Reach</div>
               </div>
            </div>
         </div>
      </section>
    </main>
  )
}
