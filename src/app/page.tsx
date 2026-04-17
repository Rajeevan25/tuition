"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Group, Monitor, Calendar, Globe, Zap, Smartphone, Users, Share2, Mail, MapPin, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/layout/Footer"

export default function LandingPage() {
  return (
    <div className="bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/5 bg-white/70 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl justify-between items-center">
          <Link href="/" className="font-headline text-2xl font-black tracking-tighter text-indigo-600">CenterHub</Link>
          <div className="hidden items-center gap-x-8 font-headline font-semibold tracking-tight md:flex">
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/platform">Platform</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/solutions">Solutions</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/resources">Resources</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/pricing">Pricing</Link>
            <Link className="text-emerald-600 font-bold hover:text-emerald-500 transition-colors border-l pl-8 border-outline-variant/10" href="/platform/admin/applications">Admin Demo</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden font-semibold text-slate-600 hover:text-indigo-600 transition-colors sm:block">Log In</Link>
            <Link href="/register" className="primary-gradient rounded-full px-6 py-2.5 font-bold text-white shadow-lg shadow-indigo-200 transition-all active:scale-95">Start Free</Link>
          </div>
        </div>
      </nav>

      <main className="pt-16 space-y-32 pb-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pt-6 lg:pt-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="relative z-10 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-surface-container-high px-3 py-1 font-bold text-primary text-[10px] uppercase tracking-widest mx-auto lg:mx-0">
                <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                The Future of Learning Management
              </div>
              <h1 className="font-headline text-5xl font-black leading-[1.1] tracking-tighter text-on-surface lg:text-7xl">
                The Architectural <span className="text-primary">Curator</span> for Modern Education.
              </h1>
              <p className="max-w-xl font-body text-xl leading-relaxed text-on-surface-variant mx-auto lg:mx-0">
                Streamline student management, payments, and scheduling with one elegant platform built for tuition centers.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <Link href="/register" className="primary-gradient flex items-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white shadow-xl shadow-indigo-100 transition-all hover:shadow-indigo-200">
                  Join Private Beta <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="/platform" className="rounded-full bg-surface-container-high px-8 py-4 text-lg font-bold text-on-surface transition-all hover:bg-surface-container-highest">
                  Explore Platform
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary-fixed/30 blur-[120px]"></div>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white shadow-2xl">
                <div className="p-8">
                  <div className="mb-8 grid grid-cols-3 gap-6">
                    {[
                      { label: "Growth", value: "+24%", color: "text-primary" },
                      { label: "Students", value: "1.2k", color: "text-on-surface" },
                      { label: "Revenue", value: "Rs. 1.2M", color: "text-on-surface" },
                    ].map((m, i) => (
                      <div key={i} className="rounded-xl bg-surface-container-low p-4">
                        <div className="mb-1 text-xs font-bold uppercase text-outline-variant">{m.label}</div>
                        <div className={cn("text-2xl font-black", m.color)}>{m.value}</div>
                      </div>
                    ))}
                  </div>
                    <div className=" w-full bg-slate-50 rounded-lg flex items-center justify-center overflow-hidden">
                      <img 
                        src="/images/hero-dashboard.png" 
                        alt="Dashboard Preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Scale Section (NEW) */}
        <section className="bg-on-surface text-white px-6 py-28 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
           <div className="mx-auto max-w-7xl relative z-10 flex flex-col items-center text-center space-y-16">
              <div className="space-y-4">
                  <h2 className="font-headline text-4xl lg:text-6xl font-black tracking-tighter text-white">Powering Centers <span className="text-primary-fixed">Across Sri Lanka</span>.</h2>
                 <p className="max-w-2xl mx-auto opacity-70 text-lg uppercase tracking-widest font-bold">From Colombo to Kandy, the centerhub is active.</p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-full">
                 {[
                   { label: "Registered Centers", value: "520+" },
                   { label: "Districts Active", value: "25" },
                   { label: "Students Managed", value: "85k+" },
                   { label: "Invoices Processed", value: "Rs. 450M" }
                 ].map((stat, i) => (
                   <div key={i} className="space-y-2 group">
                      <div className="text-4xl lg:text-5xl font-black text-white group-hover:text-primary-fixed transition-colors">{stat.value}</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">{stat.label}</div>
                   </div>
                 ))}
              </div>
              
              <div className="w-full max-w-5xl aspect-video rounded-[4rem] bg-white/5 border border-white/10 relative group backdrop-blur-sm overflow-hidden shadow-2xl">
                 <img 
                  src="/images/network-bg.png" 
                  alt="Network Visualization" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-transparent to-transparent"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-6">
                       <Globe className="h-24 w-24 text-primary-fixed animate-pulse" />
                       <div className="text-xs font-black uppercase tracking-[0.5em] text-white/40">Live Network Visualization</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Smart Scheduling Section (NEW) */}
        <section className="px-6 relative">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-8 order-2 lg:order-1">
                 <div className="inline-flex p-3 rounded-2xl bg-emerald-50 text-emerald-600 shadow-inner">
                    <Calendar className="h-8 w-8" />
                 </div>
                 <h2 className="font-headline text-4xl lg:text-5xl font-black tracking-tighter text-on-surface">One Calendar to <br/> <span className="text-emerald-600">Rule your Sessions</span>.</h2>
                 <p className="text-lg text-on-surface-variant leading-relaxed">Most centers fail because of schedule fragmentation. CenterHub provides a unified, visual timeline of every class, teacher, and room in your organization.</p>
                 <ul className="space-y-4">
                    {["Conflict Resolution", "Tutor Availability Mapping", "Automated Rescheduling"].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 font-bold text-on-surface">
                         <CheckCircle2 className="h-6 w-6 text-emerald-500" /> {f}
                      </li>
                    ))}
                 </ul>
                 <div className="pt-6">
                    <div className="inline-flex items-center gap-6 p-6 bg-surface-container-low rounded-[2rem] border border-outline-variant/10 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-1000">
                       <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                          <Zap className="h-7 w-7 text-primary fill-primary/20" />
                       </div>
                       <div>
                          <div className="text-3xl font-black text-on-surface">99.9%</div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Uptime Rate Guaranteed</div>
                       </div>
                    </div>
                 </div>
              </div>
             <div className="order-1 lg:order-2">
                 <div className="aspect-square rounded-[4rem] bg-surface-container-high relative overflow-hidden shadow-ambient group">
                    <img 
                     src="/images/smart-calendar.png" 
                     alt="Smart Academic Calendar Illustration" 
                     className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                 </div>
             </div>
          </div>
        </section>

        {/* Ecosystem Section (NEW) */}
        <section className="bg-surface-container-low px-6 py-32 overflow-hidden">
           <div className="mx-auto max-w-7xl flex flex-col items-center">
              <div className="text-center space-y-4 mb-20">
                 <h2 className="font-headline text-4xl font-black tracking-tighter">Plugs into your <span className="text-primary">Ecosystem</span>.</h2>
                 <p className="opacity-60 font-medium">Native integrations with tools your team already uses.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full opacity-40">
                 {["Slack", "Zapier", "Zoom", "Stripe", "PayPal", "Mailchimp", "Discord", "Intercom", "Trello", "Loom", "Notion", "Linear"].map((tool, i) => (
                   <div key={i} className="h-24 rounded-3xl border-2 border-dashed border-on-surface/10 flex items-center justify-center font-black text-xs uppercase tracking-[0.2em] hover:opacity-100 hover:border-primary transition-all cursor-crosshair">
                      {tool}
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* CTA Section */}
        <section className="px-6">
          <div className="primary-gradient relative mx-auto max-w-5xl overflow-hidden rounded-[4rem] p-12 text-center text-white lg:p-24 shadow-2xl shadow-primary/20">
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[80px]"></div>
            <div className="relative z-10 mx-auto max-w-2xl space-y-10">
              <h2 className="font-headline text-4xl font-black leading-tight tracking-tighter lg:text-7xl">Ready to curate?</h2>
              <p className="text-xl opacity-80 leading-relaxed max-w-lg mx-auto">Join the private beta and experience the architectural difference in tuition management.</p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <Link href="/register" className="rounded-full bg-white px-12 py-6 text-xl font-extrabold text-primary shadow-2xl transition-all hover:scale-105 active:scale-95">Set up Center</Link>
                <Link href="/pricing" className="rounded-full border-2 border-white/30 bg-white/5 px-12 py-6 text-xl font-extrabold text-white backdrop-blur-md transition-all hover:bg-white/10">View Pricing</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
