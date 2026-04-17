"use client"

import { useState } from "react"
import { 
  CreditCard, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Calendar, 
  Users, 
  ChevronRight,
  MoreVertical,
  Download,
  AlertCircle,
  Clock,
  CheckCircle2,
  DollarSign
} from "lucide-react"
import { cn } from "@/lib/utils"

const PAYOUT_HISTORY = [
  { id: "P1", month: "March 2026", amount: "LKR 85,250", status: "Paid", date: "Apr 05, 2026", method: "Bank Transfer" },
  { id: "P2", month: "February 2026", amount: "LKR 78,400", status: "Paid", date: "Mar 07, 2026", method: "Bank Transfer" },
  { id: "P3", month: "January 2026", amount: "LKR 92,100", status: "Paid", date: "Feb 04, 2026", method: "Bank Transfer" },
]

const BATCH_EARNINGS = [
  { id: "B1", name: "A/L Physics 2025 Theory", students: 152, rate: "LKR 450", total: "LKR 68,400" },
  { id: "B2", name: "A/L Physics 2026 Basics", students: 84, rate: "LKR 450", total: "LKR 37,800" },
  { id: "B3", name: "Revision Batch", students: 210, rate: "LKR 300", total: "LKR 63,000" },
]

export default function TeacherSalaryPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface tracking-tight">Earnings & Payouts</h1>
          <p className="text-sm text-on-surface-variant font-medium">Track your commissions, view batch performance, and payment history.</p>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="px-6 py-3 rounded-2xl bg-white border border-outline-variant/10 font-bold text-sm text-on-surface hover:bg-surface-container-low transition-all flex items-center gap-2">
              <Download className="h-4 w-4" /> Download Statement
           </button>
           <button className="bg-indigo-600 px-8 py-3 rounded-2xl text-white font-black text-sm shadow-xl shadow-indigo-600/20 hover:scale-105 transition-all">
              Withdraw Funds
           </button>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Main Earning Card */}
         <div className="lg:col-span-8 primary-gradient rounded-[3rem] p-10 text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
               <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-white/10 w-fit px-4 py-1.5 rounded-full border border-white/20">
                     <span className="text-[10px] font-black uppercase tracking-widest text-white/80 italic">Current Month</span>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Total Estimated Earnings</p>
                     <div className="text-7xl font-black tracking-tighter flex items-center">
                        <span className="text-3xl opacity-40 font-bold mr-2">LKR</span> 169,200
                     </div>
                  </div>
               </div>

               <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div className="space-y-1">
                     <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Active Students</p>
                     <p className="text-2xl font-black">446</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Avg Commission</p>
                     <p className="text-2xl font-black">LKR 400</p>
                  </div>
                  <div className="space-y-1 hidden md:block">
                     <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Payout Date</p>
                     <p className="text-2xl font-black italic">May 05</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Small Stat Cards */}
         <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-emerald-600 rounded-[2.5rem] p-8 text-white flex-1 flex flex-col justify-between shadow-xl shadow-emerald-500/10">
               <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center font-black">
                     <TrendingUp className="h-6 w-6" />
                  </div>
                  <div className="bg-white/10 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">+12%</div>
               </div>
               <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Earnings Growth</p>
                  <p className="text-3xl font-black">LKR 22k</p>
               </div>
            </div>
            
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white flex-1 flex flex-col justify-between shadow-xl shadow-slate-900/10">
               <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center font-black">
                     <Users className="h-6 w-6" />
                  </div>
               </div>
               <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">New Enrollments</p>
                  <p className="text-3xl font-black">+52</p>
               </div>
            </div>
         </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         {/* Batch Breakdown */}
         <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
               <h3 className="text-xl font-black text-on-surface">Batch Breakdown</h3>
               <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">View Reports</button>
            </div>
            <div className="space-y-4">
               {BATCH_EARNINGS.map((batch) => (
                 <div key={batch.id} className="p-6 bg-white rounded-[2rem] border border-outline-variant/10 shadow-sm flex items-center justify-between group hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-5">
                       <div className="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center font-black text-primary">
                          <DollarSign className="h-6 w-6" />
                       </div>
                       <div>
                          <h4 className="font-bold text-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">{batch.name}</h4>
                          <p className="text-[10px] font-black text-on-surface-variant opacity-40 uppercase tracking-widest">{batch.students} Students @ {batch.rate}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-lg font-black text-on-surface">{batch.total}</p>
                       <p className="text-[8px] font-black uppercase tracking-widest text-emerald-600 italic">Pre-tax</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Payout History */}
         <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
               <h3 className="text-xl font-black text-on-surface">Payout History</h3>
               <button className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">Showing Last 3</button>
            </div>
            <div className="bg-white rounded-[3rem] border border-outline-variant/10 shadow-sm overflow-hidden">
               {PAYOUT_HISTORY.map((payout, idx) => (
                 <div key={payout.id} className={cn(
                   "p-8 flex items-center justify-between transition-all hover:bg-surface-container-low/50 group",
                   idx !== PAYOUT_HISTORY.length - 1 && "border-bottom-split"
                 )}>
                    <div className="flex items-center gap-6">
                       <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                          <CreditCard className="h-6 w-6" />
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-on-surface-variant opacity-40 uppercase tracking-widest">{payout.date}</p>
                          <h4 className="font-black text-on-surface text-lg leading-none">{payout.month}</h4>
                          <p className="text-[10px] font-medium text-on-surface-variant mt-1.5">{payout.method}</p>
                       </div>
                    </div>
                    <div className="text-right space-y-2">
                       <p className="text-xl font-black text-on-surface">{payout.amount}</p>
                       <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[8px] font-black uppercase tracking-widest">
                          <CheckCircle2 className="h-3 w-3" /> {payout.status}
                       </span>
                    </div>
                 </div>
               ))}
               <button className="w-full py-6 bg-surface-container-low/30 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant hover:bg-surface-container-low transition-all">
                  Load Full Payment History
               </button>
            </div>
         </div>
      </div>
    </div>
  )
}
