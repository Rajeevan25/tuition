"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { 
  ArrowLeft, 
  Building2, 
  MapPin, 
  Users, 
  GraduationCap, 
  CheckCircle2, 
  Mail, 
  Smartphone,
  Info,
  ExternalLink,
  Save,
  Check,
  X,
  Send
} from "lucide-react"
import { StatusBadge, StatusType } from "@/components/ui/StatusBadge"
import { cn } from "@/lib/utils"

export default function ApplicationDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")
  const [actionLoading, setActionLoading] = useState(false)
  
  // Mock data for the specific ID
  const appData = {
    id: params.id as string,
    instituteName: "Bright Horizon Academy",
    owner: "Nimal Perera",
    email: "nimal@brighthorizon.lk",
    phone: "+94 77 123 4567",
    district: "Colombo",
    address: "123 Galle Road, Colombo 03",
    students: "200-500",
    teachers: "12",
    branches: "2",
    requestedPlan: "Growth",
    subdomain: "brighthorizon.centerhub.lk",
    status: "under_review" as StatusType,
    submissionDate: "April 12, 2026",
    needs: [
      "Student Management",
      "Class Scheduling",
      "Attendance Tracking",
      "SMS Notifications"
    ]
  }

  const handleApprove = () => {
    setActionLoading(true)
    setTimeout(() => {
      setActionLoading(false)
      // In a real app, this would update DB and notify owner
      alert("Application Approved! Quote sent to owner.")
      router.push("/platform/admin/applications")
    }, 1500)
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Top Actions */}
      <div className="flex items-center justify-between">
         <Link 
          href="/platform/admin/applications"
          className="flex items-center gap-2 text-on-surface-variant font-bold hover:text-primary transition-colors group"
         >
           <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" /> Back to Applications
         </Link>
         
         <div className="flex items-center gap-3">
            <button className="px-6 py-2.5 rounded-xl bg-white border border-outline-variant/10 font-bold text-sm text-error hover:bg-error/5 transition-colors">
               Reject Application
            </button>
            <button 
              onClick={handleApprove}
              disabled={actionLoading}
              className="px-8 py-2.5 rounded-xl bg-primary font-black text-sm text-white shadow-xl shadow-primary/20 hover:scale-105 transition-all active:scale-95 disabled:opacity-50 flex items-center gap-2"
            >
              {actionLoading ? "Processing..." : (
                <>
                  <Send className="h-4 w-4" /> Approve & Send Quote
                </>
              )}
            </button>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Details */}
        <div className="lg:col-span-8 space-y-8">
           {/* Header Card */}
           <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-outline-variant/5 shadow-ambient flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary">
                 <Building2 className="h-12 w-12" />
              </div>
              <div className="flex-1 space-y-2">
                 <div className="flex items-center gap-3 uppercase tracking-widest text-[10px] font-black text-on-surface-variant opacity-60">
                    ID: {appData.id} • Submitted: {appData.submissionDate}
                 </div>
                 <h2 className="font-headline text-4xl font-black text-on-surface">{appData.instituteName}</h2>
                 <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-1.5 text-sm font-bold text-on-surface-variant">
                       <MapPin className="h-4 w-4 text-primary" /> {appData.district}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-on-surface-variant">
                       <Users className="h-4 w-4 text-primary" /> {appData.students} Students
                    </div>
                    <StatusBadge status={appData.status} />
                 </div>
              </div>
           </div>

           {/* Tabbed Content */}
           <div className="space-y-6">
              <div className="flex border-b border-outline-variant/10">
                 {["overview", "owner", "infrastructure", "branding"].map(tab => (
                   <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-6 py-4 font-black uppercase text-[10px] tracking-widest border-b-2 transition-all",
                      activeTab === tab ? "border-primary text-primary" : "border-transparent text-on-surface-variant opacity-60 hover:opacity-100"
                    )}
                   >
                     {tab}
                   </button>
                 ))}
              </div>

              <div className="bg-white rounded-[2.5rem] p-8 border border-outline-variant/5 shadow-sm">
                 {activeTab === "overview" && (
                    <div className="space-y-10 animate-in fade-in duration-500">
                       <section className="space-y-6">
                          <h4 className="font-bold flex items-center gap-2">
                             <Info className="h-4 w-4 text-primary" /> General Information
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                             <div className="space-y-1">
                                <div className="text-[10px] font-black uppercase text-on-surface-variant opacity-60">Full Address</div>
                                <div className="font-bold">{appData.address}</div>
                             </div>
                             <div className="space-y-1">
                                <div className="text-[10px] font-black uppercase text-on-surface-variant opacity-60">Institute Type</div>
                                <div className="font-bold">Language & Professional Center</div>
                             </div>
                             <div className="space-y-1">
                                <div className="text-[10px] font-black uppercase text-on-surface-variant opacity-60">Proposed URL</div>
                                <div className="font-bold text-primary flex items-center gap-1">
                                   {appData.subdomain} <ExternalLink className="h-3 w-3" />
                                </div>
                             </div>
                             <div className="space-y-1">
                                <div className="text-[10px] font-black uppercase text-on-surface-variant opacity-60">Registration No.</div>
                                <div className="font-bold">WP/CMS/2024/991</div>
                             </div>
                          </div>
                       </section>

                       <section className="space-y-6">
                          <h4 className="font-bold flex items-center gap-2">
                             <CheckCircle2 className="h-4 w-4 text-primary" /> Module Selection
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                             {appData.needs.map(need => (
                                <div key={need} className="flex items-center gap-3 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10">
                                   <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                                      <Check className="h-3 w-3" />
                                   </div>
                                   <span className="text-xs font-bold">{need}</span>
                                </div>
                             ))}
                          </div>
                       </section>
                    </div>
                 )}

                 {activeTab === "owner" && (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        <div className="flex items-center gap-6 p-6 rounded-3xl bg-surface-container-low/50">
                           <div className="w-20 h-20 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-black text-2xl">NP</div>
                           <div>
                              <h3 className="font-headline text-xl font-bold">{appData.owner}</h3>
                              <p className="text-sm text-on-surface-variant font-medium">Head Administrator & Owner</p>
                           </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 rounded-3xl border border-outline-variant/10 space-y-3">
                               <div className="flex justify-between items-center">
                                  <Mail className="h-4 w-4 text-primary" />
                                  <Link href="#" className="text-xs font-bold text-primary">Email Verified</Link>
                               </div>
                               <div className="text-[10px] font-black uppercase text-on-surface-variant opacity-60">Email Contact</div>
                               <div className="font-bold">{appData.email}</div>
                            </div>
                            <div className="p-6 rounded-3xl border border-outline-variant/10 space-y-3">
                               <div className="flex justify-between items-center">
                                  <Smartphone className="h-4 w-4 text-primary" />
                                  <Link href="#" className="text-xs font-bold text-primary">WhatsApp Linked</Link>
                               </div>
                               <div className="text-[10px] font-black uppercase text-on-surface-variant opacity-60">Mobile Number</div>
                               <div className="font-bold">{appData.phone}</div>
                            </div>
                        </div>
                    </div>
                 )}
              </div>
           </div>
        </div>

        {/* Right Column: Pricing & Tasks */}
        <div className="lg:col-span-4 space-y-8">
           {/* Plan Recommendation */}
           <div className="primary-gradient p-8 rounded-[2.5rem] text-white space-y-6 shadow-xl shadow-primary/20">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white/80">
                 Recommended Plan
              </div>
              <div>
                 <h3 className="text-3xl font-black">Growth Plan</h3>
                 <p className="opacity-70 text-sm mt-1">Ideal for centers with {appData.students} students.</p>
              </div>
              <ul className="space-y-4 pt-4 border-t border-white/10">
                 {[
                   "Multi-branch Support",
                   "Advanced Fee Automation",
                   "WhatsApp Notifications",
                   "Custom Domain Ready"
                 ].map(f => (
                   <li key={f} className="flex items-center gap-3 text-sm font-bold opacity-90">
                      <Check className="h-4 w-4 text-emerald-300" /> {f}
                   </li>
                 ))}
              </ul>
              <div className="pt-4 flex items-baseline gap-2">
                 <span className="text-4xl font-black">Rs. 7,400</span>
                 <span className="opacity-60 text-xs font-bold uppercase">/month</span>
              </div>
           </div>

           {/* Pricing Adjustment Card */}
           <div className="bg-white rounded-[2.5rem] p-8 border border-outline-variant/5 shadow-sm space-y-6">
              <h4 className="font-bold text-sm">Pricing Adjustment</h4>
              <div className="space-y-4">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-60">One-time Setup Fee</label>
                    <div className="flex items-center rounded-xl bg-surface-container-low px-4 border border-transparent focus-within:border-primary transition-all">
                       <span className="text-xs font-bold opacity-60 mr-2">Rs.</span>
                       <input type="text" defaultValue="5,000" className="flex-1 h-11 bg-transparent font-bold text-sm outline-none" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-60">Monthly Subscription</label>
                    <div className="flex items-center rounded-xl bg-surface-container-low px-4 border border-transparent focus-within:border-primary transition-all">
                       <span className="text-xs font-bold opacity-60 mr-2">Rs.</span>
                       <input type="text" defaultValue="7,400" className="flex-1 h-11 bg-transparent font-bold text-sm outline-none" />
                    </div>
                 </div>
              </div>
              <button className="w-full flex items-center justify-center gap-2 py-4 bg-on-surface text-white rounded-2xl font-black text-sm hover:bg-on-surface/90 transition-all">
                 <Save className="h-4 w-4" /> Update Pricing
              </button>
           </div>

           {/* Internal Notes */}
           <div className="bg-surface-container-low rounded-[2rem] p-6 space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-widest text-on-surface-variant opacity-60">Internal Notes</h4>
              <div className="text-xs text-on-surface font-medium leading-relaxed bg-white/50 p-4 rounded-xl italic">
                "Owner has a large physical presence in Colombo. High potential for Premium upgrade next year."
              </div>
              <textarea 
                placeholder="Add internal note..."
                className="w-full h-24 p-4 rounded-xl bg-white border border-outline-variant/10 text-xs outline-none focus:ring-1 focus:ring-primary transition-all"
              />
           </div>
        </div>
      </div>
    </div>
  )
}
