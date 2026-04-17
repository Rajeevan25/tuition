"use client"

import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { CreditCard, DollarSign, TrendingUp, Clock, FileText, PlusCircle, Filter, Download, CheckCircle2, AlertCircle } from "lucide-react"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const transactions = [
  { id: 1, student: "Amara Okafor", amount: "$450.00", date: "Oct 24, 2024", method: "Credit Card", status: "Successful" },
  { id: 2, student: "Leo Vance", amount: "$380.00", date: "Oct 22, 2024", method: "Bank Transfer", status: "Pending" },
  { id: 3, student: "Sarah Chen", amount: "$450.00", date: "Oct 20, 2024", method: "Cash", status: "Successful" },
  { id: 4, student: "Marcus Thorne", amount: "$520.00", date: "Oct 18, 2024", method: "PayPal", status: "Failed" },
  { id: 5, student: "Jessica Smith", amount: "$380.00", date: "Oct 15, 2024", method: "Credit Card", status: "Successful" },
]

function StatCard({ label, value, trend, icon: Icon, colorClass }: { label: string, value: string, trend?: string, icon: LucideIcon, colorClass: string }) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm border border-slate-100/50">
      <div className="flex justify-between items-start mb-4">
        <div className={cn("p-3 rounded-2xl", colorClass)}>
          <Icon className="h-6 w-6" />
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-50 px-3 py-1 rounded-full">
            <TrendingUp className="h-3 w-3" /> {trend}
          </div>
        )}
      </div>
      <h4 className="text-on-surface-variant font-medium text-sm mb-1">{label}</h4>
      <div className="text-3xl font-black tracking-tighter text-on-surface">{value}</div>
    </div>
  )
}

export default function PaymentsPage() {
  return (
    <main className="pt-20 md:pt-8 p-6 md:p-10 min-h-screen space-y-10">
      <DashboardHeader 
        title="Payments & Invoicing" 
        subtitle="Manage center revenue, student invoices, and payout history."
      />

      {/* Financial Metrics */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          label="Total Revenue" 
          value="$42,850" 
          trend="12.5%" 
          icon={DollarSign} 
          colorClass="bg-indigo-50 text-indigo-600"
        />
        <StatCard 
          label="Outstanding Fees" 
          value="$3,105" 
          icon={Clock} 
          colorClass="bg-amber-50 text-amber-600"
        />
        <StatCard 
          label="Avg. Payment Time" 
          value="1.2 Days" 
          icon={TrendingUp} 
          colorClass="bg-emerald-50 text-emerald-600"
        />
      </section>

      {/* Action Bar */}
      <section className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 bg-surface-container-highest px-6 py-3 rounded-full text-on-surface font-black text-xs uppercase tracking-widest hover:brightness-95 transition-all">
            <Filter className="h-4 w-4" /> Filter
          </button>
          <button className="flex items-center gap-2 bg-white border-2 border-surface-container-high px-6 py-3 rounded-full text-on-surface-variant font-black text-xs uppercase tracking-widest hover:bg-surface-container-low transition-all">
            <Download className="h-4 w-4" /> Export
          </button>
        </div>
        <button className="primary-gradient text-white px-8 py-4 rounded-full font-black text-sm flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
          <PlusCircle className="h-5 w-5" /> Record Payment
        </button>
      </section>

      {/* Transaction History */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-black tracking-tight text-on-surface">Recent Transactions</h3>
          <button className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">View All History</button>
        </div>

        <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-ambient">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-container-low border-b border-surface-container-high">
                <tr>
                  <th className="px-8 py-5 text-[10px] font-bold text-outline-variant uppercase tracking-[0.2em]">Student</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-outline-variant uppercase tracking-[0.2em]">Amount</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-outline-variant uppercase tracking-[0.2em]">Date</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-outline-variant uppercase tracking-[0.2em]">Method</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-outline-variant uppercase tracking-[0.2em]">Status</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-outline-variant uppercase tracking-[0.2em] text-right">Invoice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-surface-container-low/30 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center font-bold text-primary">
                          {tx.student[0]}
                        </div>
                        <span className="font-bold text-on-surface">{tx.student}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-black text-on-surface">{tx.amount}</td>
                    <td className="px-8 py-6 text-sm text-on-surface-variant font-medium">{tx.date}</td>
                    <td className="px-8 py-6 text-sm text-on-surface-variant font-medium">{tx.method}</td>
                    <td className="px-8 py-6 text-sm">
                      <span className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                        tx.status === 'Successful' ? "bg-emerald-50 text-emerald-700" :
                        tx.status === 'Pending' ? "bg-amber-50 text-amber-700" : "bg-rose-50 text-rose-700"
                      )}>
                        {tx.status === 'Successful' ? <CheckCircle2 className="h-3 w-3" /> :
                         tx.status === 'Pending' ? <Clock className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                        <FileText className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Future Vision Banner */}
      <section className="bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
         <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl font-black mb-4">Automate your billing?</h3>
            <p className="opacity-80 leading-relaxed mb-8">Enable automatic credit card processing and monthly recurring invoices for all your students. Reduce manual entry by up to 90%.</p>
            <button className="bg-white text-primary px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-95">
              Explore Payments AI
            </button>
         </div>
         <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-700"></div>
         <div className="absolute -bottom-10 left-1/3 w-40 h-40 bg-indigo-400/20 rounded-full blur-[60px]"></div>
      </section>
    </main>
  )
}
