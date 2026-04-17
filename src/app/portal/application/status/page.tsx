"use client"

import Link from "next/link"
import { 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Mail, 
  MessageSquare,
  AlertCircle
} from "lucide-react"
import { StatusBadge } from "@/components/ui/StatusBadge"

export default function ApplicationStatusPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-24">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-black tracking-tight text-on-surface">Application Status</h1>
          <p className="text-on-surface-variant font-medium mt-1">Track your institute registration progress.</p>
        </div>
        <StatusBadge status="under_review" className="text-[12px] px-4 py-1" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Status Card */}
        <div className="lg:col-span-8 space-y-8">
           <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-outline-variant/10 shadow-ambient space-y-10">
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Clock className="h-8 w-8 animate-spin-slow" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold">Currently Under Review</h3>
                    <p className="text-sm text-on-surface-variant font-medium">Applied on April 12, 2026 • Ref: CH-7249-BZ</p>
                 </div>
              </div>

              {/* Progress Stepper */}
              <div className="space-y-6">
                 {[
                   { label: "Application Submitted", date: "April 12, 10:30 AM", status: "completed" },
                   { label: "Admin Verification", date: "April 12, 02:45 PM", status: "completed" },
                   { label: "Technical Review", date: "In Progress", status: "current" },
                   { label: "Pricing Analysis", date: "Pending", status: "pending" },
                   { label: "Final Approval", date: "Pending", status: "pending" },
                 ].map((step, idx) => (
                   <div key={idx} className="flex gap-4">
                      <div className="flex flex-col items-center">
                         <div className={cn(
                           "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black",
                           step.status === "completed" ? "bg-emerald-500 text-white" : step.status === "current" ? "bg-primary text-white" : "bg-outline-variant/20 text-on-surface-variant"
                         )}>
                            {step.status === "completed" ? <CheckCircle2 className="h-4 w-4" /> : idx + 1}
                         </div>
                         {idx !== 4 && <div className="w-0.5 h-10 bg-outline-variant/10 my-1" />}
                      </div>
                      <div className="flex-1 pb-4">
                         <div className={cn("text-sm font-bold", step.status === "pending" ? "text-on-surface-variant opacity-40" : "text-on-surface")}>
                            {step.label}
                         </div>
                         <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-60">
                            {step.date}
                         </div>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="p-6 rounded-3xl bg-surface-container-low border border-outline-variant/5">
                 <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary">
                       <MessageSquare className="h-5 w-5" />
                    </div>
                    <div className="flex-1 space-y-2">
                       <h4 className="text-sm font-bold">Message from Reviewer</h4>
                       <p className="text-xs text-on-surface-variant leading-relaxed">
                          "We are currently verifying the branch details provided for your Colombo location. No further action is required from your end at this moment."
                       </p>
                       <div className="text-[10px] font-black text-primary uppercase pt-2">2 hours ago</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Sidebar Cards */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-white rounded-[2.5rem] p-8 border border-outline-variant/10 shadow-sm space-y-6">
              <ShieldCheck className="h-8 w-8 text-emerald-500" />
              <h4 className="font-bold">Next Steps</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Once reviewed, you will receive a <strong>Pricing Quote</strong>. You can then select your plan and activate your portal.
              </p>
              <Link 
                href="/portal/application/quote"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-on-surface text-white font-black text-sm hover:scale-[1.02] transition-all"
              >
                View Mock Quote <ArrowRight className="h-4 w-4" />
              </Link>
           </div>

           <div className="rounded-[2.5rem] p-8 bg-surface-container-high border border-outline-variant/5 space-y-4">
              <div className="flex items-center gap-3">
                 <AlertCircle className="h-5 w-5 text-on-surface-variant" />
                 <h4 className="font-bold text-sm">Need Help?</h4>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed font-medium">
                Our support team is available from 9 AM to 6 PM (IST) to assist with your application.
              </p>
              <button className="text-xs font-black text-primary uppercase tracking-widest hover:underline underline-offset-4">
                Chat with Specialist
              </button>
           </div>
        </div>
      </div>
    </div>
  )
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
