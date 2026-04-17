"use client"

import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { Smartphone, BrainCircuit, Globe, Layers, Zap, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"

const ShowcaseCard = ({ icon: Icon, title, description, color, imageLabel }: { icon: any, title: string, description: string, color: string, imageLabel: string }) => (
  <div className="bg-surface-container-lowest rounded-[3rem] overflow-hidden shadow-ambient border border-transparent hover:border-primary/10 transition-all group">
    <div className="p-10 space-y-4">
      <div className={cn("inline-flex p-3 rounded-2xl mb-2", color)}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-2xl font-black tracking-tighter text-on-surface">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed font-medium">{description}</p>
    </div>
    <div className="px-10 pb-10">
      <div className="bg-surface-container-low rounded-2xl h-64 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-primary/5 transition-colors">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
         <div className="text-primary/10 font-black text-7xl uppercase tracking-tighter scale-150 rotate-12 select-none absolute">Luxe UI</div>
         <div className="relative z-10 flex flex-col items-center gap-4">
            <span className="text-[10px] items-center gap-2 px-3 py-1 bg-white rounded-full font-black uppercase tracking-widest text-primary shadow-sm flex">
               <Zap className="h-3 w-3 fill-primary" /> {imageLabel}
            </span>
            <div className="h-32 w-48 bg-white rounded-xl shadow-2xl border border-slate-100 flex flex-col p-3 gap-2">
               <div className="h-2 w-1/3 bg-slate-100 rounded-full"></div>
               <div className="h-2 w-2/3 bg-slate-50 rounded-full"></div>
               <div className="mt-auto h-8 w-full bg-primary/10 rounded-lg"></div>
            </div>
         </div>
      </div>
    </div>
  </div>
)

export default function ShowcasePage() {
  return (
    <main className="pt-20 md:pt-8 p-6 md:p-10 min-h-screen space-y-12">
      <DashboardHeader 
        title="Future Platform Vision" 
        subtitle="Explore upcoming modules and expansion capabilities of the CenterHub architecture."
      />

      {/* Vision Header */}
      <section className="bg-on-surface text-white p-12 md:p-20 rounded-[4rem] relative overflow-hidden">
         <div className="relative z-10 max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-xs font-black uppercase tracking-widest backdrop-blur-md text-primary-fixed">
              <Rocket className="h-4 w-4" /> Next Horizon
            </div>
            <h2 className="font-headline text-4xl md:text-6xl font-black leading-tight tracking-tighter">Beyond Tuition <br/> <span className="text-primary-fixed">Scale Infinity</span>.</h2>
            <p className="text-lg opacity-70 leading-relaxed font-medium">CenterHub is designed as a multi-sector architectural curator. From fitness academies to language institutes, the platform adapts to your industry with precision-engineered modules.</p>
         </div>
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent opacity-50"></div>
         <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-40 animate-pulse"></div>
      </section>

      {/* Feature Showcases */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ShowcaseCard 
          icon={Smartphone}
          title="Parent/Student Portal"
          description="A dedicated, native-feeling mobile experience for guardians to track progress, download invoices, and receive broadcasts in real-time."
          color="bg-emerald-50 text-emerald-600"
          imageLabel="Mobile Experience"
        />
        <ShowcaseCard 
          icon={BrainCircuit}
          title="AI Insights Engine"
          description="Predictive analytics that forecast enrollment trends, identify struggling students early, and optimize teacher allocation using neural logic."
          color="bg-indigo-50 text-indigo-600"
          imageLabel="Predictive AI"
        />
        <ShowcaseCard 
          icon={Globe}
          title="Multi-Branch Cluster"
          description="Manage multiple locations with global analytics while maintaining isolated data security for each center. Seamless switching for enterprise owners."
          color="bg-amber-50 text-amber-600"
          imageLabel="Global Scale"
        />
        <ShowcaseCard 
          icon={Layers}
          title="White-label Extension"
          description="Host CenterHub on your own custom domain with full primary branding, including custom email SMTP and localized portal themes."
          color="bg-rose-50 text-rose-600"
          imageLabel="Brand Sovereignty"
        />
      </section>

      {/* CTA Section */}
      <section className="text-center py-20 space-y-8">
         <div className="flex justify-center -space-x-4 mb-8">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-xl bg-surface-container-high">
                 <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} alt="User" />
              </div>
            ))}
         </div>
         <h3 className="text-3xl font-black tracking-tighter text-on-surface">Join the Evolution.</h3>
         <p className="max-w-xl mx-auto text-on-surface-variant font-medium">Be the first to get access to these modules. Join our private beta for enterprise centers.</p>
         <button className="primary-gradient text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95">
           Request Beta Access
         </button>
      </section>
    </main>
  )
}
