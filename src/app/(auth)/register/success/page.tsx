"use client"

import Link from "next/link"
import { CheckCircle2, ArrowRight, Clock, FileText, Smartphone } from "lucide-react"
import { SaaSLogo } from "@/components/ui/SaaSLogo"
import { StatusBadge } from "@/components/ui/StatusBadge"

export default function RegistrationSuccess() {
  return (
    <main className="min-h-screen bg-surface flex flex-col items-center p-6 md:p-12">
      <div className="w-full max-w-2xl space-y-12">
        <div className="flex justify-center">
          <SaaSLogo />
        </div>

        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-ambient border border-white/50 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 primary-gradient"></div>
          
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-[2rem] flex items-center justify-center animate-bounce-subtle">
              <CheckCircle2 className="h-12 w-12" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-black tracking-tight text-on-surface">Application Received!</h1>
            <p className="text-on-surface-variant font-medium text-lg max-w-md mx-auto leading-relaxed">
              Your tuition institute application is now being reviewed by the CenterHub team.
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <div className="px-4 py-2 bg-surface-container-low rounded-2xl border border-outline-variant/10 flex items-center gap-3">
              <span className="text-[10px] font-black uppercase text-on-surface-variant">Status</span>
              <StatusBadge status="pending" />
            </div>
            <div className="px-4 py-2 bg-surface-container-low rounded-2xl border border-outline-variant/10 flex items-center gap-3">
              <span className="text-[10px] font-black uppercase text-on-surface-variant">Ref ID</span>
              <span className="font-mono text-[10px] font-black">CH-7249-BZ</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-left">
            {[
              { title: "Verification", text: "Admin reviews your credentials.", icon: FileText },
              { title: "Review", text: "Features & student count check.", icon: Clock },
              { title: "Pricing", text: "Custom quote sent to email.", icon: Smartphone },
            ].map((step, idx) => (
              <div key={idx} className="space-y-3 p-6 rounded-3xl bg-surface-container-low/50 border border-outline-variant/5">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-bold text-sm">{step.title}</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/portal/application/status"
              className="primary-gradient px-8 py-4 rounded-full font-black text-white shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group hover:scale-[1.02] transition-all"
            >
              Track Status <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/"
              className="px-8 py-4 rounded-full font-black text-on-surface bg-surface-container-high hover:bg-surface-container-highest transition-all text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>

        <footer className="text-center">
          <p className="text-sm text-on-surface-variant font-medium">
            Need urgent assistance? <Link href="#" className="underline text-primary">Contact Support</Link>
          </p>
        </footer>
      </div>
    </main>
  )
}
