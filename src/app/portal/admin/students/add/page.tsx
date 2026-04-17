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
  BookOpen
} from "lucide-react"
import { cn } from "@/lib/utils"

const STEPS = [
  { id: "personal", title: "Personal Info", icon: Users },
  { id: "academic", title: "Academic Profile", icon: GraduationCap },
  { id: "enrollment", title: "Enrollment & Fees", icon: CreditCard }
]

export default function AddStudentPage() {
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
            <ArrowLeft className="h-4 w-4" /> Back to Students
          </Link>
          <h1 className="text-3xl font-black text-on-surface">Add New Student</h1>
          <p className="text-sm text-on-surface-variant font-medium">Register a learner and assign them to classes.</p>
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
                <p className="text-[10px] font-bold text-on-surface-variant opacity-60 max-w-[12rem] text-center">JPG or PNG. Max 2MB.</p>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Full Name" icon={Users} placeholder="e.g. Dilshan Perera" />
                <InputGroup label="Student ID" icon={Building} placeholder="CH-STD-2025-001" />
                <InputGroup label="Email Address" icon={Mail} placeholder="dilshan@example.com" type="email" />
                <InputGroup label="Mobile Number" icon={Phone} placeholder="+94 77 123 4567" />
                <InputGroup label="Date of Birth" icon={Calendar} type="date" />
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase text-on-surface-variant px-1 opacity-60">Gender</label>
                   <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none text-sm font-bold transition-all">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                   </select>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-outline-variant/5">
              <h3 className="text-sm font-black uppercase tracking-widest text-on-surface-variant opacity-60 mb-6">Parent / Guardian Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Guardian Name" icon={Users} placeholder="e.g. Sunil Perera" />
                <InputGroup label="Guardian Phone" icon={Phone} placeholder="+94 77 123 4567" />
              </div>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-on-surface-variant px-1 opacity-60">Grade / Level</label>
                  <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none text-sm font-bold transition-all">
                     <option>A/L 2025</option>
                     <option>A/L 2026</option>
                     <option>Grade 11 (O/L)</option>
                     <option>Grade 10</option>
                  </select>
               </div>
               <InputGroup label="School" icon={Building} placeholder="Ananda College" />
               <div className="md:col-span-2 space-y-4">
                  <label className="text-[10px] font-black uppercase text-on-surface-variant px-1 opacity-60 block">Subjects Enrolled</label>
                  <div className="flex flex-wrap gap-3">
                     {["Physics", "Chemistry", "Combined Maths", "Biology", "English", "ICT"].map(subject => (
                        <button key={subject} className="px-4 py-2 rounded-xl bg-surface-container-low border border-outline-variant/10 text-xs font-bold hover:bg-primary/5 hover:border-primary hover:text-primary transition-all">
                           {subject}
                        </button>
                     ))}
                     <button className="px-4 py-2 rounded-xl border border-dashed border-outline-variant/30 text-xs font-bold text-on-surface-variant hover:border-primary transition-all flex items-center gap-2">
                        <Plus className="h-3 w-3" /> Add Topic
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
                  <label className="text-[10px] font-black uppercase text-on-surface-variant px-1 opacity-60">Institute Branch</label>
                  <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none text-sm font-bold transition-all">
                     <option>Colombo 03 (Main)</option>
                     <option>Gampaha</option>
                     <option>Kandy</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-on-surface-variant px-1 opacity-60">Class Type</label>
                  <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none text-sm font-bold transition-all">
                     <option>Physical (On-site)</option>
                     <option>Online Live</option>
                     <option>Hybrid</option>
                     <option>Recorded Sessions</option>
                  </select>
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-on-surface-variant px-1 opacity-60">Payment Plan</label>
                  <select className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none text-sm font-bold transition-all">
                     <option>Monthly (Full)</option>
                     <option>Monthly (Scholarship)</option>
                     <option>Course Bundle (Full)</option>
                     <option>Free Enrollment</option>
                  </select>
               </div>
               <InputGroup label="Admission Date" icon={Calendar} type="date" />
            </div>

            <div className="p-6 rounded-[2rem] bg-primary/5 border border-primary/10 space-y-4">
               <h4 className="text-sm font-black text-primary flex items-center gap-2 uppercase tracking-widest">
                  <Send className="h-4 w-4" /> Account Invitation
               </h4>
               <p className="text-xs text-on-surface-variant font-medium leading-relaxed">
                  Upon saving, the student will receive a secure invitation link to activate their personal portal. Choose the primary delivery method:
               </p>
               <div className="flex gap-4">
                  <label className="flex-1 p-4 rounded-2xl bg-white border-2 border-primary ring-4 ring-primary/5 flex items-center gap-3 cursor-pointer">
                     <input type="radio" name="invite" defaultChecked className="hidden" />
                     <Mail className="h-5 w-5 text-primary" />
                     <span className="text-xs font-bold text-on-surface">Email Invite</span>
                  </label>
                  <label className="flex-1 p-4 rounded-2xl bg-white border border-outline-variant/10 flex items-center gap-3 opacity-60 hover:opacity-100 transition-all cursor-pointer">
                     <input type="radio" name="invite" className="hidden" />
                     <Phone className="h-5 w-5 text-emerald-600" />
                     <span className="text-xs font-bold text-on-surface">SMS / WhatsApp</span>
                  </label>
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
              {currentStep === STEPS.length - 1 ? "Complete Registration" : "Next Step"}
           </button>
        </div>
      </div>
    </div>
  )
}

interface InputGroupProps {
  label: string;
  placeholder?: string;
  type?: string;
  icon?: any;
}

function InputGroup({ label, placeholder, type = "text", icon: Icon }: InputGroupProps) {
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
