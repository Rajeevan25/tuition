"use client"

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
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
  Filter,
  ArrowRight,
  Zap,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const CHART_DATA = [
  { name: 'Jan', enrollment: 400, revenue: 2400 },
  { name: 'Feb', enrollment: 300, revenue: 1398 },
  { name: 'Mar', enrollment: 200, revenue: 9800 },
  { name: 'Apr', enrollment: 278, revenue: 3908 },
  { name: 'May', enrollment: 189, revenue: 4800 },
  { name: 'Jun', enrollment: 239, revenue: 3800 },
]

export default function AdminReportsPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface tracking-tight">Intelligence & Analytics</h1>
          <p className="text-sm text-on-surface-variant font-medium">Advanced data modeling and center performance metrics.</p>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="px-6 py-3 rounded-2xl bg-white border border-outline-variant/10 font-bold text-sm text-on-surface hover:bg-surface-container-low transition-all">
              <Filter className="h-4 w-4 inline mr-2" /> Filter Data
           </button>
           <button className="primary-gradient px-8 py-3 rounded-2xl text-white font-black text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all">
              <Download className="h-4 w-4 inline mr-2" /> Export Insights
           </button>
        </div>
      </div>

      {/* Metric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ReportMetric label="Active Students" value="1,280" trend="+12.5%" trendUp icon={Users} color="bg-indigo-50 text-indigo-600" />
        <ReportMetric label="Total Revenue" value="Rs. 1.2M" trend="+8.2%" trendUp icon={DollarSign} color="bg-emerald-50 text-emerald-600" />
        <ReportMetric label="Attendance Avg" value="94.2%" trend="-0.5%" icon={Activity} color="bg-blue-50 text-blue-600" />
        <ReportMetric label="Pending Fees" value="Rs. 240K" trend="-4%" trendUp icon={ShieldCheck} color="bg-rose-50 text-rose-600" />
      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Revenue Area Chart */}
        <div className="lg:col-span-8 bg-white p-10 rounded-[3rem] border border-outline-variant/5 shadow-ambient">
           <div className="flex justify-between items-center mb-10">
              <div className="space-y-1">
                 <h4 className="text-2xl font-black text-on-surface tracking-tighter italic">Revenue Pulse</h4>
                 <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest opacity-40">Monthly performance analytics</p>
              </div>
              <div className="flex gap-2">
                 <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
                    <Calendar className="h-5 w-5" />
                 </div>
              </div>
           </div>
           
           <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={CHART_DATA}>
                    <defs>
                       <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3525cd" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#3525cd" stopOpacity={0}/>
                       </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                       dataKey="name" 
                       axisLine={false} 
                       tickLine={false} 
                       tick={{ fontSize: 10, fontWeight: 900, fill: '#64748b' }}
                       dy={10}
                    />
                    <YAxis 
                       axisLine={false} 
                       tickLine={false} 
                       tick={{ fontSize: 10, fontWeight: 900, fill: '#64748b' }}
                    />
                    <Tooltip 
                       contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 50px -12px rgba(15, 23, 42, 0.08)', fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#3525cd" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
                 </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Enrollment Stats Card */}
        <div className="lg:col-span-4 primary-gradient p-10 rounded-[3.5rem] text-white shadow-2xl shadow-primary/20 flex flex-col justify-between group overflow-hidden relative">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:scale-125 transition-transform duration-1000"></div>
           <div className="space-y-6 relative z-10">
              <h4 className="text-2xl font-black italic tracking-tighter">Student Distribution</h4>
              <p className="text-sm opacity-80 leading-relaxed font-medium">Enrollment has peaked this term with a <span className="text-white font-black underline decoration-white/30">34% increase</span> in A/L Physics batches.</p>
           </div>

           <div className="h-[250px] w-full mt-10 relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={CHART_DATA}>
                    <Bar dataKey="enrollment" fill="rgba(255,255,255,0.9)" radius={[12, 12, 12, 12]} />
                    <Tooltip cursor={{ fill: 'rgba(255,255,255,0.1)' }} content={() => null} />
                 </BarChart>
              </ResponsiveContainer>
           </div>

           <div className="mt-10 space-y-4 relative z-10">
              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                 <span className="opacity-60">Monthly Target</span>
                 <span className="bg-white/10 px-3 py-1 rounded-full">85% Achieved</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                 <div className="h-full bg-white rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
              </div>
           </div>
        </div>
      </div>

      {/* AI Intelligence Banner */}
      <section className="bg-slate-900 rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden group shadow-2xl shadow-slate-900/20">
         <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000"></div>
         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
               <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 backdrop-blur-md flex items-center justify-center border border-indigo-500/30">
                  <Zap className="h-8 w-8 text-indigo-400" />
               </div>
               <h2 className="text-5xl lg:text-7xl font-black tracking-tighter italic">Predictive <br /> <span className="text-indigo-400">Intelligence</span>.</h2>
               <p className="text-sm opacity-60 leading-relaxed max-w-lg font-medium">Our ML models suggest a potential enrollment spike in late 2026 based on historical exam revision performance.</p>
               <button className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-indigo-600/20 transition-all hover:scale-105 active:scale-95">Enable AI Insights</button>
            </div>
            <div className="bg-white/5 rounded-[3rem] border border-white/10 p-12 space-y-8 backdrop-blur-sm">
               {[
                 { label: "Growth Readiness", val: 82, color: "bg-indigo-400" },
                 { label: "Market Resonance", val: 94, color: "bg-emerald-400" },
                 { label: "System Health", val: 100, color: "bg-blue-400" }
               ].map((sys, i) => (
                 <div key={i} className="space-y-3">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                       <span>{sys.label}</span>
                       <span className="text-white">{sys.val}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className={cn("h-full transition-all duration-1000", sys.color)} style={{ width: `${sys.val}%` }}></div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  )
}

function ReportMetric({ label, value, trend, trendUp, icon: Icon, color }: any) {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-outline-variant/5 shadow-ambient group hover:border-primary/20 transition-all">
       <div className="flex justify-between items-start mb-6">
          <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", color)}>
             <Icon className="h-7 w-7" />
          </div>
          <div className={cn(
            "flex items-center gap-1 px-3 py-1 rounded-lg text-[10px] font-black border",
            trendUp ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-error/5 text-error border-error/10"
          )}>
            {trendUp ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
            {trend}
          </div>
       </div>
       <div className="space-y-1">
          <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest opacity-40">{label}</p>
          <h3 className="text-3xl font-black text-on-surface italic">{value}</h3>
       </div>
    </div>
  )
}
