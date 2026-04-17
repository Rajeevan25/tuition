"use client"

import Link from "next/link"
import { CheckCircle2, HelpCircle, ShieldCheck, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/layout/Footer"

export default function PricingPage() {
  return (
    <div className="bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden min-h-screen flex flex-col">
       {/* Global Navbar */}
       <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/5 bg-white/70 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl justify-between items-center">
          <Link href="/" className="font-headline text-2xl font-black tracking-tighter text-indigo-600">CenterHub</Link>
          <div className="hidden items-center gap-x-8 font-headline font-semibold tracking-tight md:flex">
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/platform">Platform</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/solutions">Solutions</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/resources">Resources</Link>
            <Link className="text-indigo-600 border-b-2 border-indigo-600" href="/pricing">Pricing</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden font-semibold text-slate-600 hover:text-indigo-600 transition-colors sm:block">Log In</Link>
            <Link href="/register" className="primary-gradient rounded-full px-6 py-2.5 font-bold text-white shadow-lg shadow-indigo-200 transition-all active:scale-95">Start Free</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 flex-1 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center space-y-4">
            <h1 className="font-headline text-5xl font-black tracking-tighter text-on-surface lg:text-7xl">
              Simple. <span className="text-primary">Reliable</span>.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-medium">
              Choose the plan that fits your center's growth stage. All plans include our premium Architectural Curator design system.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-24">
            {[
              { name: "Starter", price: "Rs. 2,900", features: ["Up to 50 Students", "Core Management Tools", "Local SMS Alerts", "Standard Attendance"], active: false },
              { name: "Professional", price: "Rs. 7,400", features: ["Unlimited Students", "Advanced Analytics", "Local Payment Gateways", "Priority Support", "AI Insights"], active: true },
              { name: "Academic Elite", price: "Custom", features: ["Multi-branch Support", "White-label Option", "Dedicated Success Manager", "LXP Integration"], active: false },
            ].map((tier, i) => (
              <div key={i} className={cn(
                "flex flex-col rounded-[2.5rem] p-10 transition-all duration-300",
                tier.active 
                  ? "relative z-10 scale-105 border-4 border-primary bg-white shadow-2xl" 
                  : "border border-outline-variant/10 bg-surface-container-low/50 hover:bg-white hover:shadow-xl"
              )}>
                {tier.active && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-6 py-1.5 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-primary/30">Value Choice</div>
                )}
                <h4 className="mb-2 text-2xl font-black tracking-tight">{tier.name}</h4>
                <div className="mb-8 text-5xl font-black tracking-tighter">
                  {tier.price}
                  <span className="text-lg font-bold text-on-surface-variant ml-1">{tier.price !== "Custom" ? "/mo" : ""}</span>
                </div>
                <ul className="mb-12 flex-1 space-y-5">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-semibold text-on-surface-variant">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/register"
                  className={cn(
                    "w-full rounded-2xl py-5 font-black uppercase tracking-widest text-sm text-center transition-all",
                    tier.active ? "primary-gradient text-white shadow-xl shadow-primary/20 hover:scale-[1.02]" : "bg-on-surface text-white hover:bg-slate-800"
                  )}
                >
                  {tier.active ? "Start 14-Day Trial" : "Get Started"}
                </Link>
              </div>
            ))}
          </div>

          {/* Pricing FAQ or Security Highlights */}
          <section className="bg-surface-container-high rounded-[3rem] p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="space-y-8">
                <h2 className="font-headline text-4xl font-black tracking-tight">Enterprise-grade <span className="text-primary text-opacity-80">Security</span> as Standard.</h2>
                <div className="space-y-6">
                   <div className="flex gap-4">
                      <div className="p-3 bg-white rounded-2xl shadow-sm"><ShieldCheck className="h-6 w-6 text-primary" /></div>
                      <div>
                         <h4 className="font-bold text-on-surface">SOC2 Compliant</h4>
                         <p className="text-sm text-on-surface-variant">Your student data is encrypted at rest and in transit with bank-level security.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="p-3 bg-white rounded-2xl shadow-sm"><Zap className="h-6 w-6 text-amber-500" /></div>
                      <div>
                         <h4 className="font-bold text-on-surface">Auto-scaling Infrastructure</h4>
                         <p className="text-sm text-on-surface-variant">Zero downtime during peak enrollment seasons. We scale with you.</p>
                      </div>
                   </div>
                </div>
             </div>
             <div className="bg-white rounded-3xl p-10 shadow-ambient space-y-6">
                <h3 className="font-bold text-xl mb-4">Frequently Asked Questions</h3>
                {[
                  { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade your subscription at any time from your admin settings." },
                  { q: "Is there a long-term contract?", a: "No, all our standard plans are month-to-month. You can cancel at any time." },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                     <p className="font-black text-xs uppercase tracking-widest text-primary flex items-center gap-1.5">
                        <HelpCircle className="h-3 w-3" /> {item.q}
                     </p>
                     <p className="text-sm text-on-surface-variant leading-relaxed">{item.a}</p>
                  </div>
                ))}
             </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
