"use client"

import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { LifeBuoy, MessageCircle, Mail, Phone, Clock } from "lucide-react"

export default function SupportPage() {
  return (
    <main className="pt-20 md:pt-8 p-6 md:p-10 min-h-screen space-y-10">
      <DashboardHeader 
        title="Contact Support" 
        subtitle="Our team of architectural support specialists are ready to help."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
         <div className="bg-surface-container-low p-10 lg:p-16 rounded-[3rem] space-y-8">
            <h2 className="text-3xl font-black text-on-surface tracking-tighter">Facing an issue? <br/> <span className="text-primary italic">We're on it.</span></h2>
            <p className="text-on-surface-variant font-medium leading-relaxed">Most support requests are resolved within 2 hours during standard business hours.</p>
            
            <div className="space-y-4">
               {[
                 { icon: MessageCircle, label: "Live Chat", value: "Available 24/7" },
                 { icon: Mail, label: "Email Support", value: "ticket@centerhub.com" },
                 { icon: Clock, label: "Standard Response", value: "< 4 Hours" },
               ].map((c, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                    <div className="p-2 bg-primary/5 text-primary rounded-lg"><c.icon className="h-5 w-5" /></div>
                    <div>
                       <div className="text-[10px] font-bold uppercase tracking-widest text-outline-variant">{c.label}</div>
                       <div className="font-bold text-on-surface">{c.value}</div>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-ambient border border-slate-100 flex flex-col justify-center text-center space-y-8">
            <div className="mx-auto w-24 h-24 rounded-[2rem] bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-inner">
               <LifeBuoy className="h-12 w-12" />
            </div>
            <div className="space-y-4">
               <h3 className="text-2xl font-black text-on-surface tracking-tight">Need a customized solution?</h3>
               <p className="text-sm text-on-surface-variant max-w-xs mx-auto">Enterprise clients get a dedicated technical account manager for custom migrations.</p>
               <button className="primary-gradient text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all">Schedule Call</button>
            </div>
         </div>
      </div>
    </main>
  )
}
