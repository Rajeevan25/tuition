"use client"

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  AreaChart, 
  Area 
} from 'recharts'
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight,
  ShieldCheck,
  Calendar,
  Download,
  Filter
} from "lucide-react"
import { cn } from "@/lib/utils"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"

export default function ReportsPage() {
  const data = [
    { name: 'Jan', enrollment: 400, revenue: 2400 },
    { name: 'Feb', enrollment: 300, revenue: 1398 },
    { name: 'Mar', enrollment: 200, revenue: 9800 },
    { name: 'Apr', enrollment: 278, revenue: 3908 },
    { name: 'May', enrollment: 189, revenue: 4800 },
    { name: 'Jun', enrollment: 239, revenue: 3800 },
  ]

  const metrics = [
    { label: "Active Students", value: "1,280", trend: "+12.5%", positive: true, icon: Users },
    { label: "Total Revenue", value: "Rs. 1.2M", trend: "+8.2%", positive: true, icon: DollarSign },
    { label: "Attendance Avg", value: "94.2%", trend: "-0.5%", positive: false, icon: Activity },
    { label: "Pending Fees", value: "Rs. 240K", trend: "-4", positive: true, icon: ShieldCheck },
  ]

  return (
    <main className="pt-20 md:pt-8 p-6 md:p-10 min-h-screen space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
        <DashboardHeader 
          title="Reports & Insights" 
          subtitle="Advanced data modeling and center performance metrics." 
        />
        <div className="flex gap-4">
           <button className="px-6 py-3 bg-white rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center gap-2 border border-slate-50 hover:bg-slate-50 transition-all shadow-sm">
             <Filter className="h-4 w-4" /> Filter
           </button>
           <button className="primary-gradient text-white px-8 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-primary/20 flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all">
             <Download className="h-4 w-4" /> Export Report
           </button>
        </div>
      </div>

      {/* Metric Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className="bg-surface-container-lowest p-8 rounded-[3rem] shadow-sm border border-slate-50 group hover:shadow-xl hover:shadow-indigo-100/30 transition-all">
            <div className="flex justify-between items-start mb-6">
               <div className="p-4 bg-indigo-50 text-primary rounded-2xl transition-transform group-hover:scale-110">
                  <m.icon className="h-6 w-6" />
               </div>
               <div className={cn(
                 "flex items-center gap-1 text-[10px] font-black uppercase tracking-widest",
                 m.positive ? "text-emerald-600" : "text-error"
               )}>
                 {m.positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                 {m.trend}
               </div>
            </div>
            <p className="text-[10px] font-black text-outline uppercase tracking-widest mb-1">{m.label}</p>
            <h3 className="text-3xl font-black font-headline text-on-surface tracking-tighter">{m.value}</h3>
          </div>
        ))}
      </section>

      {/* Main Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Revenue Area Chart */}
        <div className="lg:col-span-8 bg-surface-container-lowest p-10 rounded-[4rem] shadow-sm border border-slate-50">
           <div className="flex justify-between items-center mb-10">
              <div>
                 <h4 className="text-2xl font-black font-headline tracking-tight">Revenue Pulse</h4>
                 <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mt-1 opacity-60">Last 6 Months Projection</p>
              </div>
              <div className="p-3 bg-surface-container-low rounded-xl">
                 <Calendar className="h-5 w-5 text-primary" />
              </div>
           </div>
           
           <div className="h-[400px] w-full relative">
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                 <AreaChart data={data}>
                    <defs>
                       <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3525cd" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#3525cd" stopOpacity={0}/>
                       </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis 
                       dataKey="name" 
                       axisLine={false} 
                       tickLine={false} 
                       tick={{ fontSize: 10, fontWeight: 900, fill: '#777587' }}
                       dy={10}
                    />
                    <YAxis 
                       axisLine={false} 
                       tickLine={false} 
                       tick={{ fontSize: 10, fontWeight: 900, fill: '#777587' }}
                    />
                    <Tooltip 
                       contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 50px -12px rgba(11, 28, 48, 0.08)' }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#3525cd" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
                 </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Enrollment Bar Chart */}
        <div className="lg:col-span-4 primary-gradient p-10 rounded-[4rem] text-white shadow-2xl shadow-primary/20 flex flex-col justify-between group h-full">
           <div className="space-y-6">
              <h4 className="text-2xl font-black font-headline tracking-tighter">Student Distribution</h4>
              <p className="text-on-primary-container font-bold opacity-80 leading-relaxed italic">"Enrollment has peaked this term with a 34% increase in A/L Physics batches."</p>
           </div>

           <div className="h-[250px] w-full mt-10 relative">
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                 <BarChart data={data}>
                    <Bar dataKey="enrollment" fill="#ffffff" radius={[10, 10, 10, 10]} />
                    <Tooltip cursor={{ fill: 'transparent' }} content={() => null} />
                 </BarChart>
              </ResponsiveContainer>
           </div>

           <div className="mt-10 flex flex-col gap-4">
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                 <span className="opacity-40">Monthly Target</span>
                 <span>85% Achieved</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                 <div className="h-full bg-white rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
              </div>
           </div>
        </div>
      </section>

      {/* Advanced Analysis Banner */}
      <section className="bg-on-surface rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-full h-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
               <h2 className="font-headline text-4xl lg:text-6xl font-black tracking-tighter">Predictive <br /> <span className="text-primary-fixed">Intelligence</span>.</h2>
               <p className="text-lg opacity-70 leading-relaxed max-w-lg">Our ML models suggest a potential enrollment spike in late 2024 based on historical exam revision performance.</p>
               <button className="bg-primary text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl transition-all hover:scale-105 active:scale-95">Enable AI Insights</button>
            </div>
            <div className="aspect-video bg-white/5 rounded-[3rem] border border-white/10 p-10 flex flex-col justify-center">
               <div className="space-y-6">
                  {[
                    { label: "Deployment Readiness", val: 82 },
                    { label: "Market Resonance", val: 94 },
                    { label: "System Health", val: 100 }
                  ].map((sys, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                          <span>{sys.label}</span>
                          <span>{sys.val}%</span>
                       </div>
                       <div className="h-1 w-full bg-white/5 rounded-full">
                          <div className={cn("h-full bg-primary-fixed transition-all duration-500", i === 1 ? "bg-emerald-400" : "")} style={{ width: `${sys.val}%` }}></div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </main>
  )
}
