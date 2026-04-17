"use client"

import { 
  CreditCard, 
  Download, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  Zap,
  History
} from "lucide-react"
import { cn } from "@/lib/utils"

const PAYMENT_HISTORY = [
  { id: "RCP-10293", month: "March 2026", amount: "Rs. 4,500.00", date: "02 Mar 2026", status: "Paid", method: "Visa / Card" },
  { id: "RCP-10182", month: "February 2026", amount: "Rs. 4,500.00", date: "01 Feb 2026", status: "Paid", method: "Online Transfer" },
  { id: "RCP-09923", month: "January 2026", amount: "Rs. 4,500.00", date: "05 Jan 2026", status: "Paid", method: "Visa / Card" },
]

export default function StudentPaymentsPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface tracking-tight">Fee Management</h1>
          <p className="text-sm text-on-surface-variant font-medium">Track your course payments, monthly dues, and download receipts.</p>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="px-6 py-3 rounded-2xl bg-white border border-outline-variant/10 font-bold text-sm text-on-surface hover:bg-surface-container-low transition-all">
              Statement
           </button>
           <button className="primary-gradient px-8 py-3 rounded-2xl text-white font-black text-sm flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              <Zap className="h-4 w-4" /> Quick Pay
           </button>
        </div>
      </div>

      {/* Main Payment Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Billing Card */}
        <div className="lg:col-span-2 space-y-6">
           <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-indigo-500/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -mr-20 -mt-20"></div>
              
              <div className="relative z-10 space-y-10">
                 <div className="flex items-center justify-between">
                    <div className="space-y-1">
                       <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Current billing month</p>
                       <h2 className="text-2xl font-black">April 2026</h2>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-2">
                       <AlertCircle className="h-4 w-4 text-amber-400" />
                       <span className="text-xs font-bold text-amber-400">Payment Overdue</span>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/10 pt-10">
                    <div className="space-y-2">
                       <p className="text-sm font-medium opacity-60">Amount to Pay</p>
                       <p className="text-5xl font-black italic tracking-tight">Rs. 4,500.00</p>
                       <div className="flex items-center gap-2 pt-2 text-emerald-400">
                          <CheckCircle2 className="h-4 w-4" />
                          <span className="text-[10px] font-black uppercase tracking-widest">Scholarship Discount Applied</span>
                       </div>
                    </div>
                    <div className="flex flex-col justify-end space-y-4">
                       <div className="flex items-center justify-between text-sm border-b border-white/5 pb-2">
                          <span className="opacity-60">Due Date</span>
                          <span className="font-bold">10 April 2026</span>
                       </div>
                       <div className="flex items-center justify-between text-sm">
                          <span className="opacity-60">Late Fee</span>
                          <span className="font-bold text-error">Rs. 250.00</span>
                       </div>
                    </div>
                 </div>

                 <div className="pt-4">
                    <button className="w-full h-16 bg-white text-slate-900 rounded-3xl font-black text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-all">
                       Pay via Card <ChevronRight className="h-5 w-5" />
                    </button>
                 </div>

                 <div className="flex items-center justify-center gap-6 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                    <span className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-3 py-1 rounded-lg">Visa</span>
                    <span className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-3 py-1 rounded-lg">MasterCard</span>
                    <span className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-3 py-1 rounded-lg">KOKO</span>
                 </div>
              </div>
           </div>

           {/* Break Down */}
           <div className="bg-white rounded-[2.5rem] border border-outline-variant/5 border-t-4 border-t-primary p-8 space-y-6">
              <h3 className="text-lg font-black text-on-surface">Payment Breakdown</h3>
              <div className="space-y-4">
                 <BreakdownRow label="Monthly Tuition Fee (Grade 12)" amount="Rs. 6,000.00" />
                 <BreakdownRow label="Active Scholarship (-25%)" amount="- Rs. 1,500.00" negative />
                 <BreakdownRow label="Learning Material Access" amount="Free" success />
                 <div className="border-t border-outline-variant/10 pt-4 flex items-center justify-between font-black">
                    <span className="text-on-surface">Total Balance</span>
                    <span className="text-primary text-xl">Rs. 4,500.00</span>
                 </div>
              </div>
           </div>
        </div>

        {/* History Sidebar */}
        <div className="space-y-8">
           <div className="bg-white rounded-[2.5rem] border border-outline-variant/5 shadow-ambient p-8 space-y-6">
              <div className="flex items-center justify-between">
                 <h2 className="text-lg font-black text-on-surface flex items-center gap-2">
                    <History className="h-5 w-5 text-primary" /> Recent Payments
                 </h2>
              </div>

              <div className="space-y-6">
                 {PAYMENT_HISTORY.map((item) => (
                   <div key={item.id} className="group cursor-pointer">
                      <div className="flex items-center justify-between mb-1">
                         <span className="text-sm font-black text-on-surface">{item.month}</span>
                         <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest leading-none">Paid</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-medium text-on-surface-variant opacity-60">
                         <span>{item.date} • {item.method}</span>
                         <span className="group-hover:text-primary transition-colors flex items-center gap-1">Receipt <Download className="h-3 w-3" /></span>
                      </div>
                   </div>
                 ))}
              </div>

              <button className="w-full h-12 rounded-2xl bg-surface-container-low text-[10px] font-black uppercase tracking-widest text-on-surface hover:bg-primary/5 hover:text-primary border border-outline-variant/10 transition-all">
                 View All Transactions
              </button>
           </div>

           {/* Security Verification */}
           <div className="p-8 rounded-[2.5rem] bg-surface-container-low border border-outline-variant/10 space-y-4">
              <ShieldCheck className="h-8 w-8 text-emerald-600" />
              <div className="space-y-1">
                 <h4 className="font-bold text-on-surface">Secure Transactions</h4>
                 <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                    All payments are processed through bank-grade encrypted payment gateways. CenterHub never stores your full card details.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

function BreakdownRow({ label, amount, negative, success }: any) {
  return (
    <div className="flex items-center justify-between">
       <span className="text-sm font-medium text-on-surface-variant">{label}</span>
       <span className={cn(
         "text-sm font-bold",
         negative ? "text-error" : success ? "text-emerald-600" : "text-on-surface"
       )}>{amount}</span>
    </div>
  )
}
