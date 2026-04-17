"use client"

import Link from "next/link"
import { Monitor, Group, CheckCircle2, ArrowRight, Zap, Layers, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/layout/Footer"

export default function PlatformPage() {
  return (
    <div className="bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden min-h-screen flex flex-col">
       {/* Global Navbar */}
       <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/5 bg-white/70 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl justify-between items-center">
          <Link href="/" className="font-headline text-2xl font-black tracking-tighter text-indigo-600">CenterHub</Link>
          <div className="hidden items-center gap-x-8 font-headline font-semibold tracking-tight md:flex">
            <Link className="text-indigo-600 border-b-2 border-indigo-600" href="/platform">Platform</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/solutions">Solutions</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/resources">Resources</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/pricing">Pricing</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden font-semibold text-slate-600 hover:text-indigo-600 transition-colors sm:block">Log In</Link>
            <Link href="/register" className="primary-gradient rounded-full px-6 py-2.5 font-bold text-white shadow-lg shadow-indigo-200 transition-all active:scale-95">Start Free</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 flex-1">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 max-w-3xl">
            <h1 className="font-headline text-5xl font-black tracking-tighter text-on-surface lg:text-7xl mb-6">
              The Engine of <span className="text-primary">Growth</span>.
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Explore the modular architecture that powers the world's most sophisticated tuition centers. Built for scale, security, and velocity.
            </p>
          </div>

          {/* Features Bento Grid (Migrated & Enhanced) */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12 mb-32">
            <div className="group relative overflow-hidden rounded-[3rem] bg-surface-container-lowest p-8 md:col-span-8 lg:p-12 border border-outline-variant/5">
              <div className="relative z-10 max-w-md space-y-4">
                <Group className="h-10 w-10 text-primary" />
                <h3 className="font-headline text-3xl font-black">Student Management</h3>
                <p className="leading-relaxed text-on-surface-variant">Centralize student profiles, academic history, and behavioral tracking in a single, beautiful interface.</p>
              </div>
              <div className="mt-12 overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-2xl transition-transform duration-500 group-hover:scale-105">
                 <img 
                  src="/images/platform-hero.png" 
                  alt="CenterHub Modular Platform Architecture" 
                  className="w-full h-auto object-cover"
                 />
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-[3rem] bg-primary p-8 text-white md:col-span-4 lg:p-12">
              <div>
                <Monitor className="h-10 w-10 text-white" />
                <h3 className="font-headline mb-4 mt-6 text-2xl font-black">Real-time Reporting</h3>
                <p className="leading-relaxed text-on-primary-container">Instant insights into attendance, billing cycles, and teacher performance metrics.</p>
              </div>
              <div className="pt-8 flex justify-center">
                 <div className="w-24 h-24 rounded-full border-4 border-white/20 flex items-center justify-center font-black text-2xl">94%</div>
              </div>
            </div>

            <div className="rounded-[3rem] bg-indigo-50 p-8 md:col-span-4 lg:p-12 border border-indigo-100/50">
               <Zap className="h-10 w-10 text-indigo-600" />
               <h3 className="font-headline mb-4 mt-6 text-2xl font-black text-indigo-900">Automation Engine</h3>
               <p className="text-indigo-800/70 text-sm leading-relaxed">Automate invoicing, attendance alerts, and grade reports with zero manual entry.</p>
            </div>

            <div className="rounded-[3rem] bg-surface-container-high p-8 md:col-span-8 lg:p-12 flex flex-col md:flex-row gap-8 items-center">
               <div className="flex-1 space-y-4">
                  <Layers className="h-10 w-10 text-on-surface" />
                  <h3 className="font-headline text-2xl font-black text-on-surface">Universal Compatibility</h3>
                  <p className="text-on-surface-variant text-sm">CenterHub integrates with your existing workflow, from Slack notifications to Zoom classrooms.</p>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center opacity-50">Z</div>
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center opacity-50 font-black text-xl text-indigo-600">S</div>
               </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
