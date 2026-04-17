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
  ArrowRight,
  LayoutGrid,
  Percent
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

export default function DashboardPage() {
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  if (!isMounted) return <div className="min-h-screen bg-surface p-6 md:p-10" />

  return (
    <div className="p-6 md:p-10 space-y-10 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-black text-on-surface tracking-tight">System Overview</h1>
          <p className="text-sm text-on-surface-variant font-medium">Monday, April 16, 2026 • Institute System Active (Premium Plan)</p>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="px-6 py-3 rounded-2xl bg-white border border-outline-variant/10 font-bold text-sm text-on-surface hover:bg-surface-container-low transition-all">
              Download Report
           </button>
           <Link href="/portal/admin/students/add" className="primary-gradient px-8 py-3 rounded-2xl text-white font-black text-sm flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              <Plus className="h-4 w-4" /> Quick Enrollment
           </Link>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Total Students" 
          value="1,240" 
          trend="+12%" 
          trendUp 
          icon={Users} 
          color="bg-indigo-50 text-indigo-600" 
          progress={75}
        />
        <StatCard 
          label="Monthly Revenue" 
          value="Rs. 1.24M" 
          trend="+8.4%" 
          trendUp 
          icon={CreditCard} 
          color="bg-emerald-50 text-emerald-600" 
          target="Rs. 1.5M"
        />
        <StatCard 
          label="Attendance Rate" 
          value="94.2%" 
          trend="+2%" 
          trendUp
          icon={Percent} 
          color="bg-blue-50 text-blue-600" 
        />
        <StatCard 
          label="Pending Fees" 
          value="Rs. 240K" 
          trend="-5%" 
          icon={LayoutGrid} 
          color="bg-rose-50 text-rose-600" 
          progress={25}
        />
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

        {/* Dynamic Highlight Card */}
        <div className="lg:col-span-4 flex flex-col gap-8">
           <div className="flex-1 bg-slate-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden group shadow-2xl shadow-slate-900/20">
              <div className="relative z-10 space-y-6">
                 <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Center Pulse</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">Excellent</span>
                 </div>
                 <div className="space-y-1">
                    <h3 className="text-sm font-bold opacity-60">Attendance Rate</h3>
                    <div className="text-5xl font-black italic tracking-tight">94.2%</div>
                 </div>
                 <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[94.2%] rounded-full shadow-lg shadow-emerald-500/20"></div>
                 </div>
                 <p className="text-xs opacity-60 leading-relaxed font-medium">Consistent +2% vs last month. All tutors active and sessions verified for current branch.</p>
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-700"></div>
           </div>

           {/* Quick Stats Grid */}
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[2rem] border border-outline-variant/10 shadow-ambient flex flex-col gap-1 items-center justify-center text-center">
                 <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">System Hours</span>
                 <span className="text-2xl font-black text-on-surface">152h</span>
              </div>
              <div className="bg-white p-6 rounded-[2rem] border border-outline-variant/10 shadow-ambient flex flex-col gap-1 items-center justify-center text-center">
                 <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">Satisfaction</span>
                 <span className="text-2xl font-black text-on-surface">4.9</span>
              </div>
           </div>
        </div>
      </div>

      {/* Activity & Alerts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
        <div className="lg:col-span-2 space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-on-surface flex items-center gap-2">
                 <Activity className="h-5 w-5 text-primary" /> Recent Activity
              </h2>
           </div>
           
           <div className="bg-white rounded-[2.5rem] border border-outline-variant/5 shadow-ambient overflow-hidden">
              <div className="divide-y divide-outline-variant/5">
                 {RECENT_ACTIVITY.map((item) => (
                   <div key={item.id} className="px-8 py-5 flex items-center justify-between group hover:bg-surface-container-low/30 transition-colors">
                      <div className="flex items-center gap-4">
                         <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xs", item.color)}>
                            {item.name[0]}
                         </div>
                         <div className="space-y-0.5">
                            <p className="text-sm font-bold text-on-surface tracking-tight"><span className="text-primary font-black">{item.name}</span> {item.action}</p>
                            <p className="text-[10px] font-medium text-on-surface-variant opacity-60 uppercase tracking-widest">{item.time}</p>
                         </div>
                      </div>
                      <button className="p-2 rounded-xl text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                         <ArrowRight className="h-4 w-4" />
                      </button>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] border border-outline-variant/5 shadow-ambient space-y-6">
           <h2 className="text-lg font-black text-on-surface flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" /> Management Alerts
           </h2>
           <div className="space-y-6">
              <ManagementNotice 
                title="Teacher Attendance Pending"
                desc="3 teachers have not marked attendance for today's morning sessions."
                urgent
              />
              <ManagementNotice 
                title="Outstanding Fees"
                desc="12% of April fees are still pending. Payment reminders scheduled for tomorrow."
              />
           </div>
           <button className="w-full h-12 rounded-2xl bg-surface-container-low text-xs font-black uppercase tracking-widest text-on-surface hover:bg-white border border-outline-variant/10 transition-all">
              System Notifications
           </button>
        </div>
      </div>
    </div>
  )
}

interface StatCardProps {
  label: string;
  value: string;
  trend: string;
  trendUp?: boolean;
  icon: any; // Lucide icon type is complex, leaving as any with disable if needed, but here we can use React.ComponentType
  color: string;
  progress?: number;
  target?: string;
}

function StatCard({ label, value, trend, trendUp, icon: Icon, color, progress, target }: StatCardProps) {
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-outline-variant/5 shadow-ambient group hover:border-primary/20 transition-all flex flex-col h-full bg-white relative overflow-hidden">
       <div className="flex items-center justify-between mb-4 relative z-10">
          <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", color)}>
             <Icon className="h-6 w-6" />
          </div>
          <div className={cn(
            "flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-black",
            trendUp ? "bg-emerald-50 text-emerald-600" : "bg-error/10 text-error"
          )}>
             {trendUp ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
             {trend}
          </div>
       </div>
       <div className="space-y-1 relative z-10 flex-1">
          <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-60">{label}</p>
          <p className="text-3xl font-black text-on-surface">{value}</p>
       </div>
       {progress !== undefined && (
         <div className="mt-6 h-1 w-full bg-surface-container-low rounded-full overflow-hidden relative z-10">
            <div className={cn("h-full", color.split(' ')[1].replace('text-', 'bg-'))} style={{ width: `${progress}%` }}></div>
         </div>
       )}
       {target && (
         <div className="mt-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40 relative z-10">Target: {target}</div>
       )}
    </div>
  )
}

interface ManagementNoticeProps {
  title: string;
  desc: string;
  urgent?: boolean;
}

function ManagementNotice({ title, desc, urgent }: ManagementNoticeProps) {
  return (
    <div className="space-y-2 group cursor-pointer">
       <div className="flex items-center justify-between">
          <span className={cn("text-[10px] font-black uppercase tracking-widest", urgent ? "text-error" : "text-primary")}>
             {urgent ? "Immediate Action" : "Notice"}
          </span>
       </div>
       <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{title}</h4>
       <p className="text-xs text-on-surface-variant font-medium leading-relaxed opacity-80">{desc}</p>
    </div>
  )
}
