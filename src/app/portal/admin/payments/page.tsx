"use client"

import { useState } from "react"
import { 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  FileText, 
  Plus, 
  Filter, 
  Download, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  Zap,
  ArrowUpRight,
  History,
  ShieldCheck,
  Search,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const TRANSACTIONS = [
  { id: "TX-1029", student: "Amara Okafor", amount: "$450.00", date: "Oct 24, 2024", method: "Credit Card", status: "Successful", avatar: "AO" },
  { id: "TX-1028", student: "Leo Vance", amount: "$380.00", date: "Oct 22, 2024", method: "Bank Transfer", status: "Pending", avatar: "LV" },
  { id: "TX-1027", student: "Sarah Chen", amount: "$450.00", date: "Oct 20, 2024", method: "Cash", status: "Successful", avatar: "SC" },
  { id: "TX-1026", student: "Marcus Thorne", amount: "$520.00", date: "Oct 18, 2024", method: "PayPal", status: "Failed", avatar: "MT" },
  { id: "TX-1025", student: "Jessica Smith", amount: "$380.00", date: "Oct 15, 2024", method: "Credit Card", status: "Successful", avatar: "JS" },
]

export default function AdminPaymentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleRecordPayment = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      setIsModalOpen(false)
    }, 2000)
  }

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface tracking-tight">Financial Center</h1>
          <p className="text-sm text-on-surface-variant font-medium">Manage center revenue, student invoices, and transaction history.</p>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="px-6 py-3 rounded-2xl bg-white border border-outline-variant/10 font-bold text-sm text-on-surface hover:bg-surface-container-low transition-all">
              Financial Statement
           </button>
           <button 
             onClick={() => setIsModalOpen(true)}
             className="primary-gradient px-8 py-3 rounded-2xl text-white font-black text-sm flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
           >
              <Plus className="h-4 w-4" /> Record Payment
           </button>
        </div>
      </div>

      {/* Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total Revenue" value="$42,850" trend="+12.5%" trendUp icon={DollarSign} color="bg-indigo-50 text-indigo-600" />
        <StatCard label="Outstanding" value="$3,105" trend="-5.2%" icon={Clock} color="bg-amber-50 text-amber-600" />
        <StatCard label="Pending Approval" value="08" icon={AlertCircle} color="bg-rose-50 text-rose-600" alert />
        <StatCard label="Avg. Payout" value="1.2 Days" trend="-10%" trendUp icon={TrendingUp} color="bg-emerald-50 text-emerald-600" />
      </div>

      {/* Transaction Control Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center p-6 bg-white rounded-[2.5rem] border border-outline-variant/5 shadow-sm">
         <div className="flex-1 w-full max-w-lg relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
            <input type="text" placeholder="Search by student name, ID, or invoice #..." className="w-full h-11 pl-12 pr-4 rounded-xl bg-surface-container-low border-transparent focus:border-primary focus:bg-white outline-none text-sm font-black transition-all shadow-inner" />
         </div>

         <div className="flex gap-3">
            <button className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/5 text-on-surface-variant hover:text-primary transition-all shadow-sm">
               <Filter className="h-4 w-4" />
            </button>
            <button className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/5 text-on-surface-variant hover:text-primary transition-all shadow-sm">
               <Download className="h-4 w-4" />
            </button>
         </div>
      </div>

      {/* Transaction Table */}
      <div className="space-y-6">
         <div className="flex items-center justify-between px-2">
            <h3 className="text-xl font-black text-on-surface flex items-center gap-2">
               <History className="h-5 w-5 text-primary" /> Recent Transactions
            </h3>
            <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline italic">All Transactions &rarr;</button>
         </div>

         <div className="bg-white rounded-[2.5rem] border border-outline-variant/5 shadow-ambient overflow-hidden">
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                     <tr className="border-b border-outline-variant/5 bg-surface-container-low/30">
                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Student</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Amount</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Date</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Method</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Status</th>
                        <th className="px-8 py-5 text-right"></th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/5">
                     {TRANSACTIONS.map((tx) => (
                       <tr key={tx.id} className="group hover:bg-surface-container-low/50 transition-colors">
                          <td className="px-8 py-5">
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-surface-container-low text-primary flex items-center justify-center font-black text-xs">
                                   {tx.avatar}
                                </div>
                                <span className="font-black text-on-surface group-hover:text-primary transition-colors italic">{tx.student}</span>
                             </div>
                          </td>
                          <td className="px-8 py-5 text-sm font-black text-on-surface">{tx.amount}</td>
                          <td className="px-8 py-5 text-xs text-on-surface-variant font-bold opacity-60">{tx.date}</td>
                          <td className="px-8 py-5 text-xs text-on-surface-variant font-bold opacity-60">{tx.method}</td>
                          <td className="px-8 py-5">
                             <span className={cn(
                               "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
                               tx.status === 'Successful' ? "bg-emerald-50 text-emerald-700 border-emerald-100" :
                               tx.status === 'Pending' ? "bg-amber-50 text-amber-700 border-amber-100" : "bg-error/10 text-error border-error/20"
                             )}>
                                <span className={cn(
                                  "w-1 h-1 rounded-full",
                                  tx.status === 'Successful' ? "bg-emerald-500" : tx.status === 'Pending' ? "bg-amber-500" : "bg-error"
                                )} />
                                {tx.status}
                             </span>
                          </td>
                          <td className="px-8 py-5 text-right">
                             <button className="p-2.5 rounded-xl text-on-surface-variant hover:bg-white hover:shadow-sm hover:text-primary transition-all">
                                <FileText className="h-4.5 w-4.5" />
                             </button>
                          </td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>

      {/* Value Proposition Banner */}
      <section className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden group shadow-2xl shadow-indigo-900/10">
         <div className="relative z-10 max-w-2xl space-y-6">
            <div className="w-16 h-16 rounded-[2rem] bg-indigo-500/20 backdrop-blur-md flex items-center justify-center border border-indigo-500/30">
               <Zap className="h-8 w-8 text-indigo-400" />
            </div>
            <div className="space-y-2">
               <h3 className="text-4xl font-black italic tracking-tight">Automate your billing?</h3>
               <p className="text-sm opacity-60 leading-relaxed max-w-lg font-medium">
                 Enable automatic credit card processing and monthly recurring invoices for all your students. Reduce manual entry by up to 90% with our multi-tenant fintech suite.
               </p>
            </div>
            <button className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
              Explore Payments AI <ArrowRight className="h-4 w-4" />
            </button>
         </div>
         <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[120px] -mr-40 -mt-40 group-hover:scale-110 transition-transform duration-1000"></div>
         <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
      </section>

      {/* Security Info */}
      <div className="flex flex-col md:flex-row gap-6">
         <div className="flex-1 p-8 rounded-[2.5rem] bg-surface-container-low border border-outline-variant/10 flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-emerald-600 flex-shrink-0">
               <ShieldCheck className="h-8 w-8" />
            </div>
            <div className="space-y-1">
               <h4 className="font-bold text-on-surface">Secure Transactions</h4>
               <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  All center payments are processed through bank-grade encrypted payment gateways.
               </p>
            </div>
         </div>
      </div>

      {/* Record Payment Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              {isSuccess ? (
                <div className="p-20 flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-[2.5rem] bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-on-surface">Payment Recorded!</h3>
                    <p className="text-sm font-medium text-on-surface-variant opacity-60">The student&apos;s transaction has been successfully logged.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRecordPayment} className="p-10 space-y-8">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-black text-on-surface tracking-tight">Record New Payment</h2>
                      <p className="text-xs font-bold text-on-surface-variant opacity-40 uppercase tracking-widest">Financial Entry</p>
                    </div>
                    <button type="button" onClick={() => setIsModalOpen(false)} className="p-2 rounded-xl border border-outline-variant/10 text-on-surface-variant hover:text-error transition-all">
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Search Student</label>
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
                        <input 
                          required 
                          type="text" 
                          placeholder="ID or Name (e.g. CH2025-001)" 
                          className="w-full h-12 pl-12 pr-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none font-bold text-sm transition-all" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Amount</label>
                        <div className="relative">
                          <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-600" />
                          <input 
                            required 
                            type="number" 
                            placeholder="0.00" 
                            className="w-full h-12 pl-12 pr-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none font-bold text-sm transition-all" 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Method</label>
                        <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none font-bold text-sm">
                          <option>Cash</option>
                          <option>Credit Card</option>
                          <option>Bank Transfer</option>
                          <option>PayPal</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Reference / Notes</label>
                      <textarea 
                        placeholder="Invoice # or session details..." 
                        className="w-full h-24 p-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none font-bold text-sm transition-all" 
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex gap-4">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-4 rounded-2xl bg-surface-container-low text-xs font-black uppercase tracking-widest hover:bg-slate-200 transition-all font-bold">Cancel</button>
                    <button type="submit" className="flex-[2] primary-gradient text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                      <ShieldCheck className="h-4 w-4" /> Finalize Entry
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface StatCardProps {
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  icon: any;
  color: string;
  alert?: boolean;
}

function StatCard({ label, value, trend, trendUp, icon: Icon, color, alert }: StatCardProps) {
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-outline-variant/5 shadow-ambient group hover:border-primary/20 transition-all flex flex-col justify-between h-full relative overflow-hidden">
       {alert && <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-error animate-pulse"></div>}
       <div className="flex items-center justify-between mb-4">
          <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", color)}>
             <Icon className="h-6 w-6" />
          </div>
          {trend && (
            <div className={cn(
              "flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-black",
              trendUp ? "bg-emerald-50 text-emerald-600" : "bg-error/10 text-error"
            )}>
               {trendUp ? <ArrowUpRight className="h-3 w-3" /> : null}
               {trend}
            </div>
          )}
       </div>
       <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-60">{label}</p>
          <p className="text-3xl font-black text-on-surface italic">{value}</p>
       </div>
    </div>
  )
}
