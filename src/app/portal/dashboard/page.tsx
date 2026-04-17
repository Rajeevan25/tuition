"use client"

import { useState } from "react"
import { 
  Users, 
  GraduationCap, 
  Calendar, 
  TrendingUp, 
  DollarSign,
  Bell,
  MoreVertical,
  ChevronRight,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal
} from "lucide-react"
import { cn } from "@/lib/utils"
import { StatusBadge } from "@/components/ui/StatusBadge"

export default function InstituteOwnerDashboard() {
  const [stats] = useState([
    { label: "Active Students", value: "842", growth: "+12%", up: true, icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Total Teachers", value: "24", growth: "+2", up: true, icon: GraduationCap, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Total Revenue", value: "Rs. 1.2M", growth: "+8%", up: true, icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Fee Collection", value: "92%", growth: "-3%", up: false, icon: TrendingUp, color: "text-amber-600", bg: "bg-amber-50" },
  ])

  const upcomingClasses = [
    { time: "02:30 PM", name: "A/L Physics 2026", Room: "Hall A", teacher: "Indika Pathirana", students: "120", status: "Active" },
    { time: "04:00 PM", name: "O/L Mathematics", Room: "Room 102", teacher: "Susantha Perera", students: "45", status: "Pending" },
    { time: "05:30 PM", name: "English Literature", Room: "Hall C", teacher: "Nilushi Fonseka", students: "80", status: "Upcoming" },
  ]

  return (
    <div className="pt-6 pb-12 space-y-10 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                 <Building2 className="h-6 w-6" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-on-surface font-headline">Bright Horizon Academy</h1>
           </div>
           <p className="text-sm text-on-surface-variant font-medium">Monday, April 16, 2026 • <span className="text-emerald-600 font-bold">Institute Active</span></p>
        </div>
        <div className="flex items-center gap-3">
           <button className="px-6 py-3 rounded-xl bg-white border border-outline-variant/10 font-bold text-sm hover:bg-surface-container-low transition-all">
              Manage Staff
           </button>
           <button className="primary-gradient px-6 py-3 rounded-xl text-white font-black text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2">
              <Plus className="h-4 w-4" /> Add Class
           </button>
        </div>
      </div>

      {/* Stats Bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-[2.5rem] p-8 border border-outline-variant/5 shadow-sm space-y-4 group hover:shadow-xl transition-all">
            <div className="flex justify-between items-start">
               <div className={cn("p-3 rounded-2xl", stat.bg, stat.color)}>
                  <stat.icon className="h-6 w-6" />
               </div>
               <div className={cn(
                 "flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-full",
                 stat.up ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"
               )}>
                  {stat.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {stat.growth}
               </div>
            </div>
            <div>
               <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-60 mb-1">{stat.label}</p>
               <h4 className="text-4xl font-black text-on-surface tracking-tighter">{stat.value}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Class Schedule Table */}
        <div className="lg:col-span-8 space-y-6">
           <div className="flex justify-between items-center px-4">
              <h3 className="font-headline text-2xl font-black tracking-tight">Today's Sessions</h3>
              <button className="text-[10px] font-black uppercase text-primary tracking-widest hover:underline">Full Schedule</button>
           </div>
           <div className="bg-white rounded-[2.5rem] border border-outline-variant/5 shadow-ambient overflow-hidden text-left">
              <table className="w-full">
                 <thead className="bg-surface-container-lowest text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-60">
                    <tr>
                       <th className="px-8 py-5">Time / Class</th>
                       <th className="px-8 py-5">Teacher</th>
                       <th className="px-8 py-5">Attendance</th>
                       <th className="px-8 py-5 text-right">Action</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-outline-variant/5">
                    {upcomingClasses.map((item, i) => (
                      <tr key={i} className="group hover:bg-surface-container-low/50 transition-colors">
                         <td className="px-8 py-6">
                            <div className="font-bold text-sm text-on-surface">{item.time}</div>
                            <div className="text-xs text-on-surface-variant">{item.name} • {item.Room}</div>
                         </td>
                         <td className="px-8 py-6">
                            <div className="text-sm font-bold">{item.teacher}</div>
                         </td>
                         <td className="px-8 py-6">
                            <div className="flex items-center gap-2">
                               <div className="w-32 h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                                  <div className="h-full bg-primary" style={{ width: `${(parseInt(item.students)/150)*100}%` }}></div>
                               </div>
                               <span className="text-xs font-bold">{item.students}</span>
                            </div>
                         </td>
                         <td className="px-8 py-6 text-right">
                            <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-white rounded-xl transition-all">
                               <MoreHorizontal className="h-5 w-5" />
                            </button>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>

        {/* Financial Overview & Notices */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-on-surface rounded-[2.5rem] p-8 text-white space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10 space-y-4">
                 <h4 className="text-sm font-black uppercase tracking-widest opacity-60">Revenue Target</h4>
                 <div className="text-4xl font-black">82%</div>
                 <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[82%] shadow-[0_0_15px_rgba(53,37,205,0.8)]"></div>
                 </div>
                 <p className="text-xs font-medium opacity-60">Rs. 1.2M of Rs. 1.5M goal reached for April.</p>
              </div>
              <button className="w-full py-4 bg-white/10 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">
                 Financial Report
              </button>
           </div>

           <div className="bg-white rounded-[3rem] p-8 border border-outline-variant/10 shadow-sm space-y-6">
              <div className="flex justify-between items-center">
                 <h4 className="font-bold text-sm">Recent Notices</h4>
                 <Bell className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-4">
                 {[
                   { title: "Exam Result Day", date: "Today, 10:00 AM" },
                   { title: "Staff Meeting", date: "Tomorrow, 09:00 AM" },
                 ].map((n, i) => (
                   <div key={i} className="flex gap-4 group cursor-pointer">
                      <div className="w-1 h-10 bg-primary/20 rounded-full group-hover:bg-primary transition-all"></div>
                      <div>
                         <div className="text-xs font-bold">{n.title}</div>
                         <div className="text-[10px] text-on-surface-variant font-medium opacity-60">{n.date}</div>
                      </div>
                   </div>
                 ))}
                 <button className="w-full py-3 bg-surface-container-low rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-surface-container-high transition-all">
                    Send Broadcast
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

function Building2({ className }: { className?: string }) {
  return <span className={cn("material-symbols-outlined", className)}>domain</span>
}
