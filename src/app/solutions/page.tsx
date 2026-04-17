"use client"

import Link from "next/link"
import { GraduationCap, Dumbbell, Palette, CheckCircle2, ArrowRight, ShieldCheck, Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { Footer } from "@/components/layout/Footer"

export default function SolutionsPage() {
  return (
    <div className="bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden min-h-screen flex flex-col">
       {/* Global Navbar */}
       <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/5 bg-white/70 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl justify-between items-center">
          <Link href="/" className="font-headline text-2xl font-black tracking-tighter text-indigo-600">CenterHub</Link>
          <div className="hidden items-center gap-x-8 font-headline font-semibold tracking-tight md:flex">
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/platform">Platform</Link>
            <Link className="text-indigo-600 border-b-2 border-indigo-600" href="/solutions">Solutions</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/resources">Resources</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/pricing">Pricing</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden font-semibold text-slate-600 hover:text-indigo-600 transition-colors sm:block">Log In</Link>
            <Link href="/register" className="primary-gradient rounded-full px-6 py-2.5 font-bold text-white shadow-lg shadow-indigo-200 transition-all active:scale-95">Start Free</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6">
           <div className="mb-20 max-w-4xl space-y-6">
              <h1 className="font-headline text-5xl font-black tracking-tighter text-on-surface lg:text-7xl">
                 One Curator. <br/> <span className="text-primary">Infinite Solutions</span>.
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed font-medium">
                 CenterHub is built on a universal academic logic that adapts to the specific needs of your institution. Whether you teach Combined Maths, Physics, or Languages&mdash;the curator has you covered.
              </p>
           </div>

           {/* Solution Sectors */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
               {[
                { 
                  icon: GraduationCap, 
                  title: "A/L & O/L Institutes", 
                  desc: "Built for high-volume national exam centers. Focus on mass-enrollment, ID card generation, and student performance analytics across 25 districts.",
                  color: "bg-indigo-50 text-indigo-600",
                  features: ["Grade Progress Matrix", "Parent Portal Access", "Exam Scheduling"],
                  image: "/images/solutions/al-institute.png"
                },
                { 
                  icon: ShieldCheck, 
                  title: "Professional Studies", 
                  desc: "Designed for AAT, ACCA, and CIMA training hubs. Manage professional memberships, mock exams, and complex seminar billing.",
                  color: "bg-emerald-50 text-emerald-600",
                  features: ["Seminar Ticket Gen", "Mock Exam Grading", "Professional Accreditation"],
                  image: "/images/solutions/pro-studies.png"
                },
                { 
                  icon: Palette, 
                  title: "Primary Support", 
                  desc: "Ideal for Grade 5 Scholarship classes and foundation subjects. Handle parent communication, group sessions, and primary materials.",
                  color: "bg-rose-50 text-rose-600",
                  features: ["Material Distribution", "Attendance SMS", "Multi-room Timeline"],
                  image: "/images/solutions/primary-support.png"
                }
              ].map((solution, i) => (
                <div key={i} className="group bg-surface-container-low/50 rounded-[3rem] border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
                    <div className="h-56 overflow-hidden relative">
                       <img src={solution.image} alt={solution.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className={cn("absolute bottom-4 left-6 p-3 rounded-2xl shadow-xl group-hover:scale-110 transition-transform", solution.color)}>
                          <solution.icon className="h-6 w-6" />
                       </div>
                    </div>
                   <div className="p-10 pt-6 flex-1 flex flex-col">
                      <h3 className="text-3xl font-black tracking-tight text-on-surface mb-4">{solution.title}</h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed mb-8">{solution.desc}</p>
                   <ul className="space-y-4 mb-10">
                      {solution.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-3 text-xs font-bold text-on-surface uppercase tracking-widest">
                           <CheckCircle2 className="h-4 w-4 text-primary opacity-40" /> {f}
                        </li>
                      ))}
                   </ul>
                   <Link href="/register" className="flex items-center justify-between w-full p-4 bg-white rounded-2xl border border-outline-variant/10 font-bold group-hover:bg-primary group-hover:text-white transition-all mt-auto">
                      Deploy Solution <ArrowRight className="h-5 w-5" />
                   </Link>
                </div>
              </div>
            ))}
         </div>

           {/* Trust Section */}
           <section className="bg-on-surface rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div className="space-y-8">
                    <h2 className="font-headline text-4xl lg:text-6xl font-black tracking-tighter">Your Industry, <br /> <span className="text-primary-fixed">Our Priority</span>.</h2>
                    <p className="text-lg opacity-70 leading-relaxed">CenterHub doesn&apos;t just manage; it curates. Every module you see is the result of thousands of hours of industry-specific research.</p>
                    <div className="flex flex-wrap gap-4">
                       <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold">
                          <ShieldCheck className="h-4 w-4 text-primary-fixed" /> Syllabus Compliant
                       </div>
                       <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold">
                          <Heart className="h-4 w-4 text-rose-400" /> Multi-Branch Sync
                       </div>
                    </div>
                 </div>
                 <div className="aspect-square bg-white/5 rounded-[3rem] border border-white/10 p-12 flex flex-col justify-center gap-8">
                    <div className="space-y-2">
                       <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full bg-primary-fixed w-[85%]"></div>
                       </div>
                       <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest opacity-40">
                          <span>Deployment Readiness</span>
                          <span>85% Optimized</span>
                       </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                       <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                          <div className="text-3xl font-black">9.8/10</div>
                          <div className="text-[8px] font-bold uppercase tracking-widest opacity-40">User Satisfaction</div>
                       </div>
                       <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                          <div className="text-3xl font-black">100+</div>
                          <div className="text-[8px] font-bold uppercase tracking-widest opacity-40">Plugin Modules</div>
                       </div>
                    </div>
                 </div>
              </div>
           </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
