"use client"

import { useEffect, useState } from "react"
import { 
  Users, 
  CreditCard, 
  TrendingUp, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Plus, 
  Bell, 
  MoreHorizontal, 
  LayoutGrid, 
  Percent, 
  Calendar, 
  GraduationCap, 
  DollarSign,
  BookMarked
} from "lucide-react"
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts'
import { cn } from "@/lib/utils"
import Link from "next/link"

const CHART_DATA = [
  { name: 'Jan', revenue: 400000, students: 240 },
  { name: 'Feb', revenue: 300000, students: 138 },
  { name: 'Mar', revenue: 200000, students: 980 },
  { name: 'Apr', revenue: 278000, students: 390 },
  { name: 'May', revenue: 189000, students: 480 },
  { name: 'Jun', revenue: 239000, students: 380 },
]

const RECENT_ACTIVITY = [
  { id: "1", name: "Amavi Jayasinghe", action: "Enrolled in Physics Theory", time: "2m ago", type: "Student", color: "bg-indigo-50 text-indigo-600" },
  { id: "2", name: "Kamal Silva", action: "Marked attendance for Class L4", time: "15m ago", type: "Teacher", color: "bg-emerald-50 text-emerald-600" },
  { id: "3", name: "Sunil Perera", action: "Updated Poya Day schedule", time: "3h ago", type: "System", color: "bg-amber-50 text-amber-600" },
]

export default function AdminDashboard() {
  const [isMounted, setIsMounted] = useState(false)
  
  const [stats] = useState([
    { label: "Total Students", value: "1,240", growth: "+12%", up: true, icon: Users, color: "text-indigo-600", bg: "bg-indigo-50" },
    { label: "Monthly Revenue", value: "Rs. 1.24M", growth: "+8.4%", up: true, icon: CreditCard, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Attendance Rate", value: "94.2%", growth: "+2%", up: true, icon: Percent, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Pending Fees", value: "Rs. 240K", growth: "-5%", up: false, icon: LayoutGrid, color: "text-rose-600", bg: "bg-rose-50" },
  ])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return <div className="min-h-screen bg-surface" />

  return (
    <div className="pt-2 pb-12 space-y-10 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
        <div>
           <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                 <Building2 className="h-6 w-6" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-on-surface font-headline">Bright Horizon Portal</h1>
           </div>
           <p className="text-sm text-on-surface-variant font-medium">Monday, April 16, 2026 • <span className="text-emerald-600 font-bold">Institute Active</span> (Premium Plan)</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
           <Link href="/portal/admin/subjects" className="px-4 py-3 rounded-xl bg-white border border-outline-variant/10 font-bold text-[10px] uppercase tracking-widest hover:bg-surface-container-low transition-all flex items-center gap-2">
              <BookMarked className="h-4 w-4 text-primary" /> Add Subject
           </Link>
           <Link href="/portal/admin/timetable" className="px-4 py-3 rounded-xl bg-white border border-outline-variant/10 font-bold text-[10px] uppercase tracking-widest hover:bg-surface-container-low transition-all flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" /> Timetable
           </Link>
           <Link href="/portal/admin/payments" className="px-4 py-3 rounded-xl bg-white border border-outline-variant/10 font-bold text-[10px] uppercase tracking-widest hover:bg-surface-container-low transition-all flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" /> Record Payment
           </Link>
           <div className="h-10 w-px bg-outline-variant/10 mx-2 hidden sm:block" />
           <Link href="/portal/admin/students/add" className="primary-gradient px-6 py-3 rounded-xl text-white font-black text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2">
              <Plus className="h-4 w-4" /> Quick Enrollment
           </Link>
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
        {/* Revenue Growth Chart */}
        <div className="lg:col-span-8 bg-white p-8 rounded-[2.5rem] border border-outline-variant/5 shadow-ambient">
           <div className="flex justify-between items-center mb-10">
              <div>
                 <h3 className="text-xl font-black text-on-surface tracking-tight">Revenue Growth</h3>
                 <p className="text-sm text-on-surface-variant font-medium opacity-60">Monthly breakdown of student enrollments vs revenue</p>
              </div>
              <div className="flex gap-2 bg-surface-container-low p-1.5 rounded-2xl">
                 <button className="px-5 py-2 bg-white shadow-md rounded-xl text-[10px] font-black uppercase tracking-widest text-primary">Monthly</button>
                 <button className="px-5 py-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity">Yearly</button>
              </div>
           </div>
           
           <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={CHART_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                       dataKey="name" 
                       axisLine={false} 
                       tickLine={false} 
                       tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }}
                       dy={10}
                    />
                    <YAxis 
                       axisLine={false} 
                       tickLine={false} 
                       tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }}
                    />
                    <Tooltip 
                       cursor={{ fill: '#f8fafc' }}
                       contentStyle={{ 
                          borderRadius: '24px', 
                          border: 'none', 
                          boxShadow: '0 20px 50px -12px rgba(15, 23, 42, 0.08)',
                          fontSize: '12px',
                          fontWeight: 'bold'
                       }}
                    />
                    <Bar dataKey="revenue" fill="#3525cd" radius={[8, 8, 0, 0]} barSize={40} />
                 </BarChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Financial Recap & Notices */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white space-y-8 relative overflow-hidden group shadow-2xl shadow-slate-900/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10 space-y-4">
                 <h4 className="text-[10px] font-black uppercase tracking-widest opacity-60">Monthly Revenue Goal</h4>
                 <div className="text-5xl font-black italic tracking-tight">82.4%</div>
                 <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[82.4%] shadow-[0_0_15px_rgba(16,185,129,0.4)]"></div>
                 </div>
                 <p className="text-xs font-medium opacity-60 leading-relaxed">Rs. 1.24M of Rs. 1.5M target reached. Growth trend remains positive.</p>
              </div>
              <button className="w-full py-4 bg-white/10 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all border border-white/5">
                 Financial Summary
              </button>
           </div>

           <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[2rem] border border-outline-variant/10 shadow-sm flex flex-col gap-1 items-center justify-center text-center group hover:border-primary/20 transition-all cursor-pointer">
                 <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">Attendance</span>
                 <span className="text-2xl font-black text-on-surface">94.2%</span>
              </div>
              <div className="bg-white p-6 rounded-[2rem] border border-outline-variant/10 shadow-sm flex flex-col gap-1 items-center justify-center text-center group hover:border-primary/20 transition-all cursor-pointer">
                 <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">System Hours</span>
                 <span className="text-2xl font-black text-on-surface">152h</span>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
        <div className="lg:col-span-2 space-y-6">
           <div className="flex items-center justify-between px-4">
              <h2 className="text-xl font-black text-on-surface flex items-center gap-2">
                 <Activity className="h-5 w-5 text-primary" /> Recent Activity
              </h2>
              <button className="text-[10px] font-black uppercase text-primary tracking-widest hover:underline">View All</button>
           </div>
           
           <div className="bg-white rounded-[2.5rem] border border-outline-variant/5 shadow-ambient overflow-hidden">
              <div className="divide-y divide-outline-variant/5">
                 {RECENT_ACTIVITY.map((item) => (
                   <div key={item.id} className="px-8 py-5 flex items-center justify-between group hover:bg-surface-container-low/30 transition-colors">
                      <div className="flex items-center gap-4">
                         <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center font-black text-[10px]", item.color)}>
                            {item.name[0]}
                         </div>
                         <div className="space-y-0.5">
                            <p className="text-sm font-bold text-on-surface tracking-tight"><span className="text-primary font-black">{item.name}</span> {item.action}</p>
                            <p className="text-[10px] font-medium text-on-surface-variant opacity-60 uppercase tracking-widest">{item.time}</p>
                         </div>
                      </div>
                      <button className="p-2 rounded-xl text-on-surface-variant hover:text-primary transition-all opacity-0 group-hover:opacity-100">
                         <MoreHorizontal className="h-5 w-5" />
                      </button>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-outline-variant/5 shadow-ambient space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-on-surface flex items-center gap-2">
                 <Bell className="h-5 w-5 text-primary" /> Alerts
              </h2>
           </div>
           <div className="space-y-6">
              {[
                { title: "Teacher Attendance Pending", desc: "3 teachers have not marked attendance for today.", urgent: true },
                { title: "Outstanding Fees", desc: "12% of April fees are still pending reminders.", urgent: false },
              ].map((notice, i) => (
                <div key={i} className="space-y-2 group cursor-pointer">
                   <div className="flex items-center justify-between">
                      <span className={cn("text-[10px] font-black uppercase tracking-widest", notice.urgent ? "text-error" : "text-primary")}>
                         {notice.urgent ? "Immediate Action" : "Notice"}
                      </span>
                   </div>
                   <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{notice.title}</h4>
                   <p className="text-xs text-on-surface-variant font-medium leading-relaxed opacity-80">{notice.desc}</p>
                </div>
              ))}
           </div>
           <button className="w-full py-4 bg-surface-container-low rounded-2xl font-black text-[10px] uppercase tracking-widest text-on-surface hover:bg-white border border-outline-variant/10 transition-all">
              System Notifications
           </button>
        </div>
      </div>
    </div>
  )
}

function Building2({ className }: { className?: string }) {
  return <span className={cn("material-symbols-outlined", className)}>domain</span>
}
