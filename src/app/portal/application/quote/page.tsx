"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { 
  CheckCircle2, 
  CreditCard, 
  ShieldCheck, 
  Zap, 
  Building2, 
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Wallet
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function QuoteReviewPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [selectedCycle, setSelectedCycle] = useState<"monthly" | "annual">("monthly")

  const handleActivation = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push("/portal/application/success")
    }, 2000)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-24">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-black tracking-tight text-on-surface">Review Your Quote</h1>
          <p className="text-on-surface-variant font-medium mt-1">Your institute application has been approved. Activate your portal below.</p>
        </div>
        <div className="flex bg-white p-1.5 rounded-2xl border border-outline-variant/10 shadow-sm">
           <button 
            onClick={() => setSelectedCycle("monthly")}
            className={cn(
              "px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
              selectedCycle === "monthly" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-on-surface-variant hover:text-primary"
            )}
           >
             Monthly
           </button>
           <button 
            onClick={() => setSelectedCycle("annual")}
            className={cn(
              "px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
              selectedCycle === "annual" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-on-surface-variant hover:text-primary"
            )}
           >
             Annual <span className="ml-1 text-[10px] opacity-70">(-20%)</span>
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Quote Details */}
        <div className="lg:col-span-8 space-y-8">
           <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-outline-variant/10 shadow-ambient space-y-10">
              <header className="flex justify-between items-start">
                 <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full text-primary text-[10px] font-black uppercase tracking-widest">
                       Selected Plan: Growth
                    </div>
                    <h3 className="text-4xl font-black text-on-surface">Rs. {selectedCycle === "monthly" ? "7,400" : "71,040"} 
                       <span className="text-sm font-bold text-on-surface-variant ml-2 opacity-60">/{selectedCycle === "monthly" ? "mo" : "year"}</span>
                    </h3>
                 </div>
                 <div className="text-right">
                    <div className="text-[10px] font-black uppercase text-on-surface-variant opacity-60">Institute</div>
                    <div className="font-bold text-sm">Bright Horizon Academy</div>
                 </div>
              </header>

              <section className="space-y-6">
                 <h4 className="font-bold text-sm flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" /> Included Features
                 </h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Up to 250 Active Students",
                      "Multi-branch Management",
                      "Full Fee & Payment Suite",
                      "Automated SMS/WhatsApp Alerts",
                      "Parent & Student Portals",
                      "Advanced Academic Reporting"
                    ].map(f => (
                      <div key={f} className="flex items-center gap-3 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/5">
                         <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                         <span className="text-xs font-bold text-on-surface">{f}</span>
                      </div>
                    ))}
                 </div>
              </section>

              <section className="pt-10 border-t border-outline-variant/10">
                 <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-sm">
                       <span className="font-medium text-on-surface-variant italic">Setup Fee (One-time)</span>
                       <span className="font-bold font-mono">Rs. 5,000</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="font-medium text-on-surface-variant italic">{selectedCycle === "monthly" ? "Growth Plan (Monthly)" : "Growth Plan (Annual)"}</span>
                       <span className="font-bold font-mono">Rs. {selectedCycle === "monthly" ? "7,400" : "71,040"}</span>
                    </div>
                    <div className="flex justify-between items-center pt-6 mt-4 border-t-2 border-dashed border-outline-variant/20">
                       <span className="text-xl font-black">Total to Pay</span>
                       <span className="text-3xl font-black text-primary">Rs. {selectedCycle === "monthly" ? "12,400" : "76,040"}</span>
                    </div>
                 </div>
              </section>
           </div>
        </div>

        {/* Payment Sidebar */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-white rounded-[2.5rem] p-8 border border-outline-variant/10 shadow-sm space-y-8">
              <div className="space-y-4">
                 <h4 className="font-black text-sm uppercase tracking-widest text-on-surface-variant opacity-60">Payment Method</h4>
                 <div className="flex flex-col gap-3">
                    <div className="p-4 rounded-2xl border-2 border-primary bg-primary/5 flex items-center justify-between group cursor-pointer transition-all hover:bg-primary/10">
                       <div className="flex items-center gap-3">
                          <img 
                            src="https://www.payhere.lk/downloads/images/payhere_logo_dark.png" 
                            alt="PayHere" 
                            className="h-6 object-contain" 
                          />
                          <span className="font-bold text-xs">Debit/Credit Card</span>
                       </div>
                       <div className="w-4 h-4 rounded-full border-4 border-primary bg-white"></div>
                    </div>
                    <div className="p-4 rounded-2xl border border-outline-variant/10 flex items-center justify-between opacity-50 cursor-not-allowed">
                       <div className="flex items-center gap-3 text-on-surface-variant">
                          <Building2 className="h-5 w-5" />
                          <span className="font-bold text-xs">Bank Transfer</span>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="space-y-4">
                 <button 
                  onClick={handleActivation}
                  disabled={loading}
                  className="w-full py-5 rounded-full primary-gradient font-black text-white shadow-xl shadow-primary/20 flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50 group"
                 >
                   {loading ? "Initializing..." : (
                     <>
                        Pay with PayHere <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                     </>
                   )}
                 </button>
                 <p className="text-[10px] text-center text-on-surface-variant font-medium leading-relaxed px-4">
                   Your portal will be activated immediately upon successful payment verification.
                 </p>
              </div>

              <div className="pt-6 border-t border-outline-variant/10 flex items-center gap-4">
                 <ShieldCheck className="h-10 w-10 text-emerald-500" />
                 <div>
                    <div className="text-[10px] font-black uppercase text-on-surface-variant opacity-60 leading-tight">Secure Payment</div>
                    <p className="text-[10px] font-medium leading-tight">Encryption provided by PayHere Sri Lanka.</p>
                 </div>
              </div>
           </div>

           <div className="bg-surface-container-low rounded-[2rem] p-6 space-y-4">
              <h4 className="font-bold text-xs grayscale">Preferred Subdomain</h4>
              <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-outline-variant/10">
                 <span className="font-bold text-xs text-primary">brighthorizon.app</span>
                 <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
