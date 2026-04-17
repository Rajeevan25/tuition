"use client"

import { useState } from "react"
import { 
  Search, 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  PlayCircle, 
  FileText, 
  ChevronDown, 
  ArrowRight,
  LifeBuoy
} from "lucide-react"
import { cn } from "@/lib/utils"

const FAQS = [
  { 
    id: "f1", 
    question: "How do I pay my monthly fees online?", 
    answer: "You can pay your fees by navigating to the 'Payments' section in your portal. Select the relevant month, click 'Pay Now', and choose your preferred payment method (Card or Bank Transfer)." 
  },
  { 
    id: "f2", 
    question: "I missed a class. Can I watch the recording?", 
    answer: "Yes, you can access recorded sessions from the 'Materials' section. Most live sessions are uploaded within 24 hours of the class ending." 
  },
  { 
    id: "f3", 
    question: "How do I update my profile information?", 
    answer: "Go to 'Settings' → 'Personal Information' to update your contact details, address, and profile picture." 
  },
  { 
    id: "f4", 
    question: "What should I do if my attendance is marked incorrectly?", 
    answer: "Please contact your subject teacher or use the 'Support Request' form below to inform the administration. We will verify with the class records." 
  },
]

const CATEGORIES = [
  { title: "Account & Login", icon: HelpCircle, count: 12, color: "text-blue-600 bg-blue-50" },
  { title: "Payments & Billing", icon: MessageSquare, count: 8, color: "text-emerald-600 bg-emerald-50" },
  { title: "Academic Resources", icon: FileText, count: 15, color: "text-amber-600 bg-amber-50" },
  { title: "Technical Support", icon: LifeBuoy, count: 5, color: "text-rose-600 bg-rose-50" },
]

export default function HelpCenterPage() {
  const [openFaq, setOpenFaq] = useState<string | null>("f1")

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20">
      {/* Search Hero */}
      <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden group shadow-2xl shadow-slate-900/20">
         <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full -mr-32 -mt-32 group-hover:scale-125 transition-transform duration-1000"></div>
         <div className="relative z-10 max-w-2xl space-y-8">
            <div className="space-y-2">
               <h1 className="text-4xl md:text-5xl font-black tracking-tight italic">How can we help you?</h1>
               <p className="text-sm md:text-lg opacity-60 font-medium leading-relaxed">Find answers to common questions about CenterHub, student management, and payments.</p>
            </div>
            
            <div className="relative group">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40 group-focus-within:text-primary transition-colors" />
               <input 
                 type="text" 
                 placeholder="Search for questions, tutorials, or topics..."
                 className="w-full h-16 pl-16 pr-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md focus:bg-white focus:text-slate-900 outline-none transition-all text-sm md:text-base font-bold shadow-2xl"
               />
            </div>
         </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {CATEGORIES.map((cat) => (
           <div key={cat.title} className="bg-white p-8 rounded-[2.5rem] border border-outline-variant/5 shadow-ambient group hover:border-primary/20 hover:-translate-y-1 transition-all cursor-pointer">
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner", cat.color)}>
                 <cat.icon className="h-7 w-7" />
              </div>
              <div className="space-y-1">
                 <h3 className="text-lg font-black text-on-surface tracking-tight group-hover:text-primary transition-colors">{cat.title}</h3>
                 <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">{cat.count} Articles Available</p>
              </div>
           </div>
         ))}
      </div>

      {/* FAQs Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
         <div className="lg:col-span-8 space-y-6">
            <h2 className="text-2xl font-black text-on-surface flex items-center gap-3">
               <HelpCircle className="h-7 w-7 text-primary" /> Frequently Asked Questions
            </h2>
            <div className="space-y-4">
               {FAQS.map((faq) => (
                 <div 
                   key={faq.id} 
                   className={cn(
                     "bg-white rounded-[2rem] border transition-all overflow-hidden",
                     openFaq === faq.id ? "border-primary/20 shadow-lg" : "border-outline-variant/10"
                   )}
                 >
                    <button 
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                      className="w-full p-6 text-left flex items-center justify-between"
                    >
                       <span className="font-bold text-on-surface text-sm md:text-base pr-8">{faq.question}</span>
                       <ChevronDown className={cn("h-5 w-5 text-primary transition-transform", openFaq === faq.id && "rotate-180")} />
                    </button>
                    {openFaq === faq.id && (
                      <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                         <div className="p-5 bg-surface-container-low/50 rounded-2xl text-sm text-on-surface-variant font-medium leading-relaxed">
                            {faq.answer}
                         </div>
                      </div>
                    )}
                 </div>
               ))}
            </div>
         </div>

         {/* Support Sidebar */}
         <div className="lg:col-span-4 space-y-8">
            <div className="bg-primary p-10 rounded-[3rem] text-white shadow-xl shadow-primary/20 space-y-8 relative overflow-hidden group">
               <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
               <div className="space-y-2">
                  <h3 className="text-2xl font-black italic tracking-tight">Need Support?</h3>
                  <p className="text-sm font-medium opacity-80 leading-relaxed">Our team is available 24/7 to assist you with any technical or academic issues.</p>
               </div>
               
               <div className="space-y-4">
                  <div className="flex items-center gap-4 group/item cursor-pointer">
                     <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <Phone className="h-5 w-5" />
                     </div>
                     <div>
                        <p className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">Hotline</p>
                        <p className="text-sm font-bold">+94 11 234 5678</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 group/item cursor-pointer">
                     <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                        <Mail className="h-5 w-5" />
                     </div>
                     <div>
                        <p className="text-[8px] font-black uppercase tracking-[0.2em] opacity-40">Email Support</p>
                        <p className="text-sm font-bold">help@centerhub.lk</p>
                     </div>
                  </div>
               </div>
               
               <button className="w-full py-4 bg-white text-primary rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg active:scale-95">
                  Submit a Ticket
               </button>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-outline-variant/10 flex items-center gap-5 group cursor-pointer hover:border-primary/20 transition-all">
               <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PlayCircle className="h-6 w-6" />
               </div>
               <div>
                  <h4 className="font-bold text-on-surface">Video Tutorials</h4>
                  <p className="text-[10px] font-black text-on-surface-variant opacity-40 uppercase tracking-widest flex items-center gap-1.5">
                     Watch and Learn <ArrowRight className="h-3 w-3" />
                  </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
