"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { 
  UserPlus, 
  ArrowLeft, 
  Camera, 
  Save, 
  Send, 
  Plus,
  Users,
  GraduationCap,
  Calendar,
  Building,
  CreditCard,
  Mail,
  Phone,
  BookOpen,
  Briefcase,
  FileText,
  CreditCardIcon,
  Award
} from "lucide-react"
import { cn } from "@/lib/utils"

const STEPS = [
  { id: "personal", title: "Personal Profile", icon: Users },
  { id: "professional", title: "Professional Details", icon: Briefcase },
  { id: "assignment", title: "Assignments & Pay", icon: CreditCardIcon }
]

export default function AddTeacherPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)

  const next = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1))
  const back = () => setCurrentStep(prev => Math.max(prev - 1, 0))

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <Link href="/portal/admin/management" className="inline-flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Teachers
          </Link>
          <h1 className="text-3xl font-black text-on-surface">Add New Teacher</h1>
          <p className="text-sm text-on-surface-variant font-medium">Onboard an educator and assign their academic responsibilities.</p>
        </div>

        <div className="flex items-center gap-3">
           <button className="px-6 py-3 rounded-2xl bg-white border border-outline-variant/10 font-bold text-sm text-on-surface hover:bg-surface-container-low transition-all">
              Save Draft
           </button>
           <button className="primary-gradient px-8 py-3 rounded-2xl text-white font-black text-sm flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              <Save className="h-4 w-4" /> Save & Invite
           </button>
        </div>
      </div>

      {/* Progress Stepper */}
      <div className="flex items-center justify-between max-w-2xl mx-auto w-full relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-surface-container-highest -translate-y-1/2 -z-10 rounded-full"></div>
        <div className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 -z-10 rounded-full transition-all duration-500" style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}></div>
        
        {STEPS.map((step, idx) => {
          const isActive = idx === currentStep
          const isCompleted = idx < currentStep
          const Icon = step.icon

          return (
            <div key={step.id} className="flex flex-col items-center gap-2">
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500",
                isActive ? "bg-primary text-white shadow-xl shadow-primary/20 scale-110" : isCompleted ? "bg-emerald-500 text-white" : "bg-white border border-outline-variant/10 text-on-surface-variant"
              )}>
                <Icon className="h-5 w-5" />
              </div>
              <span className={cn(
                "text-[10px] font-black uppercase tracking-widest",
                isActive ? "text-primary" : "text-on-surface-variant opacity-60"
              )}>{step.title}</span>
            </div>
          )
        })}
      </div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto w-full bg-white rounded-[2.5rem] border border-outline-variant/5 shadow-ambient p-8 md:p-12">
        {currentStep === 0 && (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-40 h-40 rounded-[2.5rem] bg-surface-container-low border-2 border-dashed border-outline-variant/20 flex flex-col items-center justify-center text-on-surface-variant group hover:border-primary hover:bg-white transition-all cursor-pointer">
                  <Camera className="h-8 w-8 mb-2 opacity-40 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black uppercase tracking-widest px-4 text-center">Upload Photo</span>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Full Name" icon={Users} placeholder="e.g. Kamal Silva" />
                <InputGroup label="Teacher ID" icon={Building} placeholder="CH-TCH-2025-042" />
                <InputGroup label="NIC / National ID" icon={FileText} placeholder="199012345678" />
                <InputGroup label="Email Address" icon={Mail} placeholder="kamal@centerhub.lk" type="email" />
                <InputGroup label="Phone Number" icon={Phone} placeholder="+94 71 123 4567" />
                <InputGroup label="Joining Date" icon={Calendar} type="date" />
              </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-on-surface-variant px-1 opacity-60">Main Subject</label>
                  <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none text-sm font-bold transition-all">
                     <option>Advanced Level Physics</option>
                     <option>Advanced Level Chemistry</option>
                     <option>Combined Mathematics</option>
                     <option>Biology</option>
                     <option>General English</option>
                  </select>
               </div>
               <InputGroup label="Academic Qualifications" icon={Award} placeholder="M.Sc. in Physics, B.Sc. (UoM)" />
               <InputGroup label="Experience (Years)" icon={Briefcase} placeholder="12 Years" />
               <div className="md:col-span-2 space-y-4">
                  <label className="text-[10px] font-black uppercase text-on-surface-variant px-1 opacity-60 block">Other Subjects Handled</label>
                  <div className="flex flex-wrap gap-3">
                     {["Applied Maths", "Theory Physics", "Paper Classes", "Revision"].map(tag => (
                        <button key={tag} className="px-4 py-2 rounded-xl bg-surface-container-low border border-outline-variant/10 text-xs font-bold hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-700 transition-all">
                           {tag}
                        </button>
                     ))}
                     <button className="px-4 py-2 rounded-xl border border-dashed border-outline-variant/30 text-xs font-bold text-on-surface-variant hover:border-primary transition-all flex items-center gap-2">
                        <Plus className="h-3 w-3" /> Add Subject
                     </button>
                  </div>
               </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-on-surface-variant px-1 opacity-60">Assigned Branch</label>
                  <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none text-sm font-bold transition-all">
                     <option>Colombo 03 (Main)</option>
                     <option>Gampaha</option>
                     <option>Kandy</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-on-surface-variant px-1 opacity-60">Salary Type</label>
                  <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none text-sm font-bold transition-all">
                     <option>Commission Based (60/40)</option>
                     <option>Fixed Monthly Salary</option>
                     <option>Hourly Rate</option>
                     <option>Contract Basis</option>
                  </select>
               </div>
            </div>

            <div className="p-6 rounded-[2rem] bg-indigo-50/50 border border-indigo-100 flex items-start gap-4">
               <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-600 flex-shrink-0">
                  <Send className="h-6 w-6" />
               </div>
               <div className="space-y-1">
                  <h4 className="text-sm font-black text-indigo-700 uppercase tracking-widest">Portal Invitation</h4>
                  <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                     The teacher will receive an onboarding package with credentials to the Teacher Portal, where they can manage their timetable and mark attendance.
                  </p>
               </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-12 pt-8 border-t border-outline-variant/5">
           <button 
             onClick={back} 
             disabled={currentStep === 0}
             className="px-6 py-3 rounded-2xl font-bold text-sm text-on-surface-variant hover:text-primary transition-colors disabled:opacity-0"
           >
              Back
           </button>
           <button 
             onClick={currentStep === STEPS.length - 1 ? undefined : next}
             className="primary-gradient px-10 py-3 rounded-2xl text-white font-black text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
           >
              {currentStep === STEPS.length - 1 ? "Complete Onboarding" : "Next Step"}
           </button>
        </div>
      </div>
    </div>
  )
}

function InputGroup({ label, placeholder, type = "text", icon: Icon }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase text-on-surface-variant px-1 opacity-60">{label}</label>
      <div className="relative group">
        {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />}
        <input 
          type={type} 
          placeholder={placeholder} 
          className={cn(
            "w-full h-12 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none text-sm px-4 font-bold transition-all",
            Icon ? "pl-12" : ""
          )}
        />
      </div>
    </div>
  )
}
