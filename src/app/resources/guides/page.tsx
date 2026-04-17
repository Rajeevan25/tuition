"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, ArrowLeft, Clock, BarChart3, Users, Target, X, Calendar, MessageSquare } from "lucide-react"
import { Footer } from "@/components/layout/Footer"

export default function GuidesPage() {
  const [showModal, setShowModal] = useState<null | 'strategy' | 'guide'>(null)
  const guides = [
    {
      title: "The 2024 Enrollment Playbook",
      description: "A comprehensive guide on how to double your student intake using modern digital marketing strategies tailored for local academies.",
      category: "Marketing",
      readTime: "15 min read",
      level: "Intermediate",
      icon: Target,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      title: "Scaling from 50 to 500 Students",
      description: "Learn the infrastructure requirements and management shifts needed to scale your operations without losing the personal touch.",
      category: "Growth",
      readTime: "20 min read",
      level: "Advanced",
      icon: BarChart3,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Teacher Management & Retention",
      description: "How to find, train, and keep the best educators in a competitive market. Includes performance tracking templates.",
      category: "Operations",
      readTime: "12 min read",
      level: "Beginner",
      icon: Users,
      color: "text-rose-600",
      bg: "bg-rose-50"
    },
    {
      title: "Optimizing Your Curriculum for Results",
      description: "A data-driven approach to curriculum design that guarantees improved student performance and parent satisfaction.",
      category: "Academics",
      readTime: "18 min read",
      level: "Intermediate",
      icon: BookOpen,
      color: "text-amber-600",
      bg: "bg-amber-50"
    }
  ]

  return (
    <div className="bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden min-h-screen flex flex-col">
      {/* Navbar */}
       <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/5 bg-white/70 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl justify-between items-center">
          <Link href="/" className="font-headline text-2xl font-black tracking-tighter text-indigo-600">CenterHub</Link>
          <div className="hidden items-center gap-x-8 font-headline font-semibold tracking-tight md:flex">
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/platform">Platform</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/solutions">Solutions</Link>
            <Link className="text-indigo-600" href="/resources">Resources</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/pricing">Pricing</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden font-semibold text-slate-600 hover:text-indigo-600 transition-colors sm:block">Log In</Link>
            <Link href="/register" className="primary-gradient rounded-full px-6 py-2.5 font-bold text-white shadow-lg shadow-indigo-200 transition-all active:scale-95">Start Free</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 flex-grow">
        <div className="mx-auto max-w-7xl px-6">
          <Link href="/resources" className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-8 hover:gap-3 transition-all">
            <ArrowLeft className="h-4 w-4" /> Back to Resources
          </Link>

          <header className="mb-16 space-y-4">
            <h1 className="font-headline text-5xl font-black tracking-tighter text-on-surface lg:text-7xl">
              Industry <span className="text-primary">Guides</span>.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed font-medium">
              Deep dives into the business and operational excellence of modern tuition centers.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, i) => (
              <div 
                key={i} 
                onClick={() => setShowModal('guide')}
                className="group bg-surface-container-low/50 p-8 rounded-[3rem] border border-outline-variant/5 hover:bg-white hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-3xl ${guide.bg} ${guide.color}`}>
                    <guide.icon className="h-8 w-8" />
                  </div>
                  <div className="bg-surface px-4 py-1.5 rounded-full border border-outline-variant/10 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                    {guide.category}
                  </div>
                </div>
                
                <h3 className="text-3xl font-black tracking-tight text-on-surface group-hover:text-primary transition-colors mb-4">
                  {guide.title}
                </h3>
                
                <p className="text-on-surface-variant font-medium leading-relaxed mb-8">
                  {guide.description}
                </p>

                <div className="flex items-center gap-6 pt-6 border-t border-outline-variant/10">
                  <div className="flex items-center gap-2 text-xs font-bold text-on-surface-variant">
                    <Clock className="h-4 w-4 text-primary" />
                    {guide.readTime}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-on-surface-variant">
                    <BookOpen className="h-4 w-4 text-primary" />
                    {guide.level}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <section className="mt-32 bg-indigo-600 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
             <div className="relative z-10 max-w-2xl">
                <h2 className="font-headline text-4xl font-black tracking-tighter mb-6">Need a custom strategy?</h2>
                <p className="text-indigo-100 text-lg mb-10 font-medium">Our consultants work with top-tier academies to build bespoke management frameworks.</p>
                <button 
                  onClick={() => setShowModal('strategy')}
                  className="bg-white text-indigo-600 px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
                >
                  Book a Strategy Call
                </button>
             </div>
             <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/10 to-transparent"></div>
          </section>
        </div>
      </main>

      {/* Interaction Modals */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-indigo-950/20 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-xl rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-300">
             <button 
               onClick={() => setShowModal(null)}
               className="absolute top-8 right-8 text-on-surface-variant/40 hover:text-indigo-600 transition-colors"
             >
               <X className="h-8 w-8" />
             </button>
             
             {showModal === 'strategy' ? (
               <div className="space-y-8">
                  <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600">
                     <Calendar className="h-10 w-10" />
                  </div>
                  <div className="space-y-4">
                     <h2 className="text-4xl font-black tracking-tighter">Let's build your <span className="text-indigo-600">Roadmap</span>.</h2>
                     <p className="text-on-surface-variant font-medium leading-relaxed">Our experts will walk you through a custom growth strategy for your tuition center. No sales pitch, just value.</p>
                  </div>
                  <div className="pt-4 space-y-4">
                     <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg shadow-indigo-100 hover:scale-[1.02] active:scale-95 transition-all">Select a Time Slot</button>
                     <p className="text-center text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40">Powered by CenterHub Scheduler</p>
                  </div>
               </div>
             ) : (
               <div className="space-y-8">
                  <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-600">
                     <BookOpen className="h-10 w-10" />
                  </div>
                  <div className="space-y-4">
                     <h2 className="text-4xl font-black tracking-tighter text-on-surface">Insight <span className="text-emerald-600">Coming Soon</span>.</h2>
                     <p className="text-on-surface-variant font-medium leading-relaxed">We're finalizing the deep-dive content for this guide. Leave your email and be the first to read it when it drops!</p>
                  </div>
                  <div className="flex gap-4 pt-4">
                     <input type="email" placeholder="curator@center.com" className="flex-grow bg-surface-container-low border border-outline-variant/10 px-6 rounded-2xl font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
                     <button className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">Notify Me</button>
                  </div>
               </div>
             )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
