"use client"

import { useState } from "react"
import Link from "next/link"
import { FileText, ArrowLeft, TrendingUp, Users, Zap, Globe, X, CheckCircle2 } from "lucide-react"
import { Footer } from "@/components/layout/Footer"

export default function CaseStudiesPage() {
  const [activeCase, setActiveCase] = useState<null | typeof cases[0]>(null)
  const cases = [
    {
      title: "How Stellar Academy Scaled to 15 Branches with CenterHub",
      company: "Stellar Academy",
      metric: "40% Revenue Growth",
      icon: TrendingUp,
      image: "/images/resources/case-stellar.png",
      summary: "Stellar Academy transitioned from manual spreadsheet-based management to CenterHub, allowing them to scale their operations across the state while reducing overhead by 30%."
    },
    {
      title: "Matrix Education: Revolutionizing the Student Experience",
      company: "Matrix Education",
      metric: "95% Retention Rate",
      icon: Users,
      image: "/images/resources/case-matrix.png",
      summary: "By implementing CenterHub's student portal and automated feedback systems, Matrix Education saw a record-breaking year-on-year retention rate."
    },
    {
      title: "Global Tutors: Managing 5,000 students across 3 continents",
      company: "Global Tutors",
      metric: "100% Automated Billing",
      icon: Globe,
      image: "/images/resources/case-global.png",
      summary: "Global Tutors eliminated billing errors entirely by leveraging our enterprise-grade currency and payment orchestration layers."
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
          <Link href="/resources" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-widest mb-8 hover:gap-3 transition-all">
            <ArrowLeft className="h-4 w-4" /> Back to Resources
          </Link>

          <header className="mb-20 space-y-4">
            <h1 className="font-headline text-5xl font-black tracking-tighter text-on-surface lg:text-7xl">
              Case <span className="text-emerald-600">Studies</span>.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed font-medium">
              Real stories from institutional curators who transformed their centers with CenterHub.
            </p>
          </header>

          <div className="space-y-20">
            {cases.map((cs, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center group`}>
                <div className="w-full lg:w-1/2 aspect-[16/10] rounded-[3.5rem] overflow-hidden relative shadow-2xl">
                   <img 
                    src={cs.image} 
                    alt={cs.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                   <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-xl p-6 rounded-[2rem] shadow-xl flex items-center gap-6 border border-white">
                      <div className="bg-emerald-100 p-4 rounded-2xl">
                        <cs.icon className="h-8 w-8 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1">Impact Result</div>
                        <div className="text-2xl font-black text-emerald-600">{cs.metric}</div>
                      </div>
                   </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-8">
                   <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100">
                      <Zap className="h-4 w-4 text-emerald-600" />
                      <span className="text-xs font-black uppercase tracking-widest text-emerald-700">{cs.company}</span>
                   </div>
                   <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-tight text-on-surface hover:text-emerald-600 transition-colors cursor-pointer">
                      {cs.title}
                   </h2>
                   <p className="text-xl text-on-surface-variant font-medium leading-relaxed">
                      {cs.summary}
                   </p>
                   <button 
                      onClick={() => setActiveCase(cs)}
                      className="inline-flex items-center gap-4 text-on-surface font-black text-sm uppercase tracking-widest group/btn border-b-2 border-emerald-600 pb-2 hover:gap-6 transition-all"
                   >
                      Read Full Story <ArrowLeft className="h-4 w-4 rotate-180" />
                   </button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Case Study Detail Modal */}
      {activeCase && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-emerald-950/20 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[3.5rem] shadow-2xl relative overflow-y-auto animate-in zoom-in-95 duration-300 scrollbar-hide">
             <button 
               onClick={() => setActiveCase(null)}
               className="absolute top-8 right-8 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-on-surface-variant/40 hover:text-emerald-600 transition-colors shadow-sm"
             >
               <X className="h-8 w-8" />
             </button>
             
             <div className="relative aspect-video w-full">
                <img src={activeCase.image} className="w-full h-full object-cover" alt={activeCase.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                   <div className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest w-fit mb-6 shadow-xl">{activeCase.metric}</div>
                   <h2 className="text-5xl font-black tracking-tighter text-on-surface">{activeCase.title}</h2>
                </div>
             </div>

             <div className="p-12 lg:p-20 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {[
                     { label: "Challenge", text: "Manual scaling was causing operational bottlenecks and data silos." },
                     { label: "Solution", text: "Centralized command center via CenterHub's Enterprise layer." },
                     { label: "Result", text: "30% decrease in operational costs within 6 months." }
                   ].map((point, i) => (
                     <div key={i} className="space-y-3">
                        <div className="text-[10px] font-black uppercase tracking-widest text-emerald-600">{point.label}</div>
                        <p className="font-medium text-on-surface-variant leading-relaxed">{point.text}</p>
                     </div>
                   ))}
                </div>

                <div className="space-y-8">
                   <h3 className="text-3xl font-black tracking-tight">The Implementation</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {["Automated Enrollment Flow", "Global Teacher Dashboard", "Real-time Revenue Analytics", "Multi-branch Payment Sync"].map((feat, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 bg-surface-container-low rounded-3xl border border-outline-variant/5">
                           <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                           <span className="font-bold">{feat}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="pt-12 border-t border-outline-variant/10 text-center">
                   <p className="text-on-surface-variant font-medium mb-8">Ready to achieve similar results for your academy?</p>
                   <button className="bg-emerald-600 text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl shadow-emerald-100 hover:scale-105 active:scale-95 transition-all">Schedule a Success Call</button>
                </div>
             </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
