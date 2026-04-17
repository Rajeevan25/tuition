"use client"

import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  CreditCard, 
  TrendingUp, 
  Clock, 
  Download,
  AlertCircle,
  CheckCircle2
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function StudentProfile() {
  const billingHistory = [
    { id: "INV-8821", date: "Oct 01, 2023", amount: "Rs. 4,500.00", status: "Paid", subject: "A/L Physics" },
    { id: "INV-8790", date: "Sep 01, 2023", amount: "Rs. 4,500.00", status: "Paid", subject: "A/L Physics" },
    { id: "INV-8712", date: "Aug 01, 2023", amount: "Rs. 7,000.00", status: "Paid", subject: "Math + Physics Bundle" },
  ]

  return (
    <div className="pt-28 pb-12 space-y-10">
      {/* Profile Header */}
      <header className="flex flex-col md:flex-row gap-8 items-center bg-surface-container-low p-10 rounded-[3rem] border border-white/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative">
           <img 
            alt="Dilshan Perera" 
            className="w-32 h-32 rounded-[2.5rem] object-cover ring-8 ring-white shadow-xl" 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=dilshan" 
           />
           <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-500 border-4 border-white rounded-full flex items-center justify-center shadow-lg">
              <ShieldCheck className="h-5 w-5 text-white" />
           </div>
        </div>
        <div className="text-center md:text-left space-y-2 relative z-10">
          <h1 className="text-4xl font-black tracking-tighter text-on-surface font-headline">Dilshan Perera</h1>
          <p className="text-xs font-black text-primary uppercase tracking-[0.2em]">Student ID: #CH-2023-882</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <span className="px-4 py-1.5 bg-white rounded-xl text-[10px] font-black uppercase tracking-widest text-outline shadow-sm flex items-center gap-2">
              <MapPin className="h-3 w-3 text-primary" /> Colombo 04
            </span>
            <span className="px-4 py-1.5 bg-white rounded-xl text-[10px] font-black uppercase tracking-widest text-outline shadow-sm flex items-center gap-2">
              <TrendingUp className="h-3 w-3 text-emerald-500" /> A/L 2025 Batch
            </span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact & Emergency Section */}
        <div className="lg:col-span-4 space-y-10">
          <section className="bg-surface-container-lowest rounded-[2.5rem] p-8 shadow-sm border border-slate-50 space-y-8">
            <h3 className="text-lg font-black font-headline tracking-tight">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="text-sm font-bold text-on-surface">dilshan.p@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone</p>
                  <p className="text-sm font-bold text-on-surface">+94 77 123 4567</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-primary rounded-[2.5rem] p-8 shadow-2xl shadow-primary/20 text-white space-y-8 relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
            <h3 className="text-lg font-black font-headline tracking-tight relative z-10">Guardian Details</h3>
            <div className="space-y-6 relative z-10">
              <div>
                <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Parent Name</p>
                <p className="text-sm font-bold">Mrs. Sanduni Perera</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white/10 text-white flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Emergency Contact</p>
                  <p className="text-sm font-bold">+94 71 987 6543</p>
                </div>
              </div>
              <div className="pt-4 p-4 bg-white/10 rounded-2xl flex items-center gap-3">
                 <AlertCircle className="h-5 w-5 text-white/60" />
                 <p className="text-[10px] font-bold leading-tight">Guardian will be notified of all late attendance and payment alerts.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Billing & Stats Section */}
        <div className="lg:col-span-8 space-y-10">
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { label: "Attendance", val: "94%", detail: "Last 30 days" },
              { label: "Course Work", val: "12/15", detail: "Tasks completed" },
              { label: "Mock Avg", val: "78%", detail: "A/L Grade: B+" },
            ].map((stat, i) => (
              <div key={i} className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm border border-slate-50 text-center space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                <div className="text-2xl font-black font-headline text-primary tracking-tighter">{stat.val}</div>
                <p className="text-[8px] font-bold text-slate-300 uppercase tracking-widest leading-none">{stat.detail}</p>
              </div>
            ))}
          </div>

          {/* Billing Card */}
          <section className="bg-surface-container-lowest rounded-[3rem] p-10 shadow-sm border border-slate-50 space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-black font-headline tracking-tight">Billing History</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">LKR (Rs.) Transactions</p>
              </div>
              <button className="p-3 bg-surface-container-low rounded-xl hover:bg-primary/5 transition-colors">
                <CreditCard className="h-5 w-5 text-primary" />
              </button>
            </div>
            
            <div className="space-y-4">
              {billingHistory.map((invoice, i) => (
                <div key={i} className="flex items-center justify-between p-5 rounded-3xl bg-surface-container-low/50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-indigo-50/50 group">
                   <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-emerald-500">
                         <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div>
                         <h4 className="font-black text-on-surface flex items-center gap-2">
                           {invoice.amount} 
                           <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-lg uppercase tracking-widest">Paid</span>
                         </h4>
                         <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{invoice.subject} • {invoice.date}</p>
                      </div>
                   </div>
                   <button className="w-10 h-10 flex items-center justify-center text-slate-300 hover:text-primary group-hover:scale-110 transition-all">
                      <Download className="h-5 w-5" />
                   </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
