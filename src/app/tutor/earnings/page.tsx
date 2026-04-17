"use client"

import { 
  TrendingUp, 
  Wallet, 
  ArrowUpRight, 
  ArrowDownRight, 
  Calendar, 
  CreditCard, 
  FileText,
  PieChart,
  Users
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function TutorEarnings() {
  const currentMonthMetrics = [
    { label: "Gross Earnings", value: "Rs. 124,500", trend: "+12%", positive: true, icon: Wallet },
    { label: "Student Comm.", value: "Rs. 42,100", trend: "+8%", positive: true, icon: Users },
    { label: "Basic Retainer", value: "Rs. 80,000", trend: "Fixed", positive: true, icon: CreditCard },
    { label: "Avg per Student", value: "Rs. 364", trend: "-2%", positive: false, icon: PieChart },
  ]

  const batchBreakdown = [
    { name: "A/L Physics 2026", students: 124, perStudent: "Rs. 400", total: "Rs. 49,600" },
    { name: "Combined Maths Rev.", students: 86, perStudent: "Rs. 350", total: "Rs. 30,100" },
  ]

  const history = [
    { month: "September 2023", amount: "Rs. 118,200", status: "Paid", date: "Oct 05" },
    { month: "August 2023", amount: "Rs. 112,400", status: "Paid", date: "Sep 05" },
  ]

  return (
    <div className="space-y-12 pb-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tighter text-slate-900 font-headline">Financial Analytics</h1>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Track your monthly earnings and student commissions</p>
        </div>
        <div className="flex gap-4">
           <button className="bg-white px-8 py-3 rounded-2xl border border-slate-100 font-black text-xs uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-all flex items-center gap-2 shadow-sm">
             <Calendar className="h-4 w-4" /> October 2023
           </button>
           <button className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl flex items-center gap-2 hover:opacity-90 transition-all">
             <FileText className="h-4 w-4" /> Export Payslip
           </button>
        </div>
      </header>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentMonthMetrics.map((m, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-50 group hover:shadow-xl transition-all">
             <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl group-hover:scale-110 transition-transform">
                   <m.icon className="h-6 w-6" />
                </div>
                <div className={cn(
                  "flex items-center gap-1 text-[10px] font-black uppercase tracking-widest leading-none",
                  m.positive ? "text-emerald-500" : "text-rose-500"
                )}>
                  {m.positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {m.trend}
                </div>
             </div>
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{m.label}</p>
             <h3 className="text-2xl font-black font-headline text-slate-800">{m.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Batch Breakdown */}
        <div className="lg:col-span-12 space-y-6">
           <h3 className="text-xl font-black font-headline tracking-tighter">Earnings Breakdown by Batch</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {batchBreakdown.map((batch, i) => (
                <div key={i} className="bg-white p-10 rounded-[3.5rem] shadow-sm border border-slate-100 relative overflow-hidden group">
                   <div className="relative z-10 flex justify-between items-center">
                      <div>
                         <h4 className="text-2xl font-black text-slate-800 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{batch.name}</h4>
                         <div className="flex items-center gap-4 mt-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{batch.students} Students active</span>
                            <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500">{batch.perStudent} / Head</span>
                         </div>
                      </div>
                      <div className="text-right">
                         <div className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-1">Batch Yield</div>
                         <div className="text-2xl font-black text-slate-800 font-headline">{batch.total}</div>
                      </div>
                   </div>
                   <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-10 -mt-10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
           </div>
        </div>

        {/* Payment History */}
        <div className="lg:col-span-12 space-y-6">
           <h3 className="text-xl font-black font-headline tracking-tighter">Payment Reconciliation History</h3>
           <div className="bg-white rounded-[3rem] border border-slate-100 overflow-hidden">
              {history.map((row, i) => (
                <div key={i} className={cn(
                  "p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50 transition-colors",
                  i !== history.length -1 ? "border-b border-slate-50" : ""
                )}>
                   <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                         <TrendingUp className="h-5 w-5" />
                      </div>
                      <div>
                         <p className="font-bold text-slate-800">{row.month}</p>
                         <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">Disbursed on {row.date}</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-10">
                      <div className="text-right">
                         <p className="text-lg font-black text-slate-800">{row.amount}</p>
                         <p className="text-[9px] font-black uppercase tracking-widest text-emerald-500 flex items-center gap-1 justify-end">
                            <CreditCard className="h-3 w-3" /> {row.status}
                         </p>
                      </div>
                      <button className="p-3 bg-slate-100 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                         <ArrowDownRightIcon className="h-5 w-5" /> 
                         <span className="text-[10px] font-black uppercase tracking-widest">Detail</span>
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  )
}

function ArrowDownRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m19 19-7-7-7 7" />
      <path d="M19 8v11H8" />
    </svg>
  )
}
