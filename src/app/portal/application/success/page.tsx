"use client"

import Link from "next/link"
import { 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Rocket, 
  ShieldCheck,
  ChevronRight,
  PartyPopper
} from "lucide-react"
import { SaaSLogo } from "@/components/ui/SaaSLogo"

export default function ActivationSuccessPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="text-center space-y-6">
        <div className="flex justify-center">
           <div className="w-24 h-24 rounded-[2.5rem] bg-emerald-100 text-emerald-600 flex items-center justify-center animate-bounce-subtle">
              <PartyPopper className="h-12 w-12" />
           </div>
        </div>
        <div className="space-y-2">
           <h1 className="font-headline text-5xl font-black tracking-tight text-on-surface">Institute Activated!</h1>
           <p className="text-xl text-on-surface-variant font-medium">Your portal is ready. Welome to the CenterHub ecosystem.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Workspace Card */}
        <div className="bg-white rounded-[3rem] p-10 border border-outline-variant/10 shadow-ambient space-y-8 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
           <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                 <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black">Your Unique URL</h3>
              <p className="text-sm text-on-surface-variant font-medium leading-relaxed">This is your dedicated institute portal address. Bookmark it for quick access.</p>
           </div>
           
           <div className="p-6 rounded-2xl bg-surface-container-low border border-primary/20 flex items-center justify-between group-hover:ring-4 group-hover:ring-primary/10 transition-all">
              <span className="font-black text-primary text-sm md:text-lg">brighthorizon.centerhub.lk</span>
              <div className="p-2 bg-white rounded-lg shadow-sm">
                 <Rocket className="h-5 w-5 text-primary" />
              </div>
           </div>
           
           <Link 
            href="/portal/setup"
            className="flex items-center justify-center gap-3 w-full py-5 rounded-full primary-gradient font-black text-white shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all group"
           >
              Go to My Portal <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>

        {/* Next Steps Checklist */}
        <div className="bg-surface-container-low rounded-[3rem] p-10 space-y-8 border border-outline-variant/5">
           <h3 className="font-headline text-2xl font-black">Next Steps</h3>
           <div className="space-y-6">
              {[
                { title: "Complete Profile", desc: "Add your logo and social links." },
                { title: "Configure Branches", desc: "Setup your physical locations." },
                { title: "Invite Staff", desc: "Add teachers and administrators." },
                { title: "Define Subjects", desc: "Create your academic curriculum." },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer">
                   <div className="w-6 h-6 rounded-full border-2 border-primary/30 flex items-center justify-center text-[10px] font-black group-hover:bg-primary group-hover:text-white transition-all">
                      {idx + 1}
                   </div>
                   <div>
                      <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{step.title}</h4>
                      <p className="text-xs text-on-surface-variant font-medium">{step.desc}</p>
                   </div>
                   <ChevronRight className="h-4 w-4 ml-auto text-on-surface-variant opacity-20 group-hover:opacity-100 transition-all" />
                </div>
              ))}
           </div>

           <div className="pt-6 border-t border-outline-variant/10 flex items-center gap-4">
              <ShieldCheck className="h-10 w-10 text-emerald-500 opacity-50" />
              <div className="text-[10px] font-bold text-on-surface-variant leading-tight">
                 Portal security is managed by CenterHub Enterprise Guard.
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
