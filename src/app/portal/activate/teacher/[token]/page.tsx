"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { 
  ShieldCheck, 
  Lock, 
  Camera, 
  CheckCircle2, 
  ArrowRight,
  Eye,
  EyeOff,
  User,
  GraduationCap,
  Building,
  CreditCard,
  Briefcase,
  FileSignature,
  Download
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SaaSLogo } from "@/components/ui/SaaSLogo"

export default function TeacherActivationPage() {
  const params = useParams()
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleActivate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      router.push("/portal/teacher/dashboard")
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 relative overflow-hidden font-body">
      {/* Branded background blur */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[15%] right-[10%] w-[35%] h-[35%] bg-emerald-500/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[15%] left-[10%] w-[35%] h-[35%] bg-indigo-500/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="w-full max-w-4xl bg-white rounded-[3rem] border border-outline-variant/10 shadow-ambient overflow-hidden flex flex-col md:flex-row relative z-10">
        {/* Left Panel: Educator Welcome */}
        <div className="w-full md:w-5/12 bg-slate-900 p-10 md:p-12 text-white flex flex-col justify-between items-start">
           <SaaSLogo className="h-8 w-auto brightness-0 invert" />
           
           <div className="space-y-6">
              <div className="w-20 h-20 rounded-[2rem] bg-emerald-500/20 backdrop-blur-md flex items-center justify-center border border-emerald-500/30">
                 <GraduationCap className="h-10 w-10 text-emerald-400" />
              </div>
              <div className="space-y-2">
                 <h2 className="text-3xl font-black leading-tight">Join the Faculty</h2>
                 <p className="text-sm font-medium opacity-60">You have been invited to join <strong>Bright Academy Horizon</strong> as a Senior Lecturer.</p>
              </div>

              <div className="space-y-4 pt-4">
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-bold opacity-80 underline underline-offset-4 decoration-emerald-500/30">Physics (Advanced Level)</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span className="text-xs font-bold opacity-80">Colombo Main Branch</span>
                 </div>
              </div>
           </div>

           <div className="p-5 rounded-3xl bg-white/5 border border-white/10 w-full backdrop-blur-sm">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-black">KS</div>
                 <div className="flex-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Educator ID</p>
                    <p className="text-base font-bold">Kamal Silva</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Panel: Form */}
        <div className="flex-1 p-10 md:p-12 space-y-10 overflow-y-auto max-h-[90vh]">
           <div className="space-y-2">
              <h1 className="text-3xl font-black text-on-surface tracking-tight">Onboarding</h1>
              <p className="text-sm text-on-surface-variant font-medium">Complete your professional profile to access the educator dashboard.</p>
           </div>

           <form onSubmit={handleActivate} className="space-y-8">
              {/* Security Section */}
              <div className="space-y-4">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-60">1. Security Credentials</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative group">
                       <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant group-focus-within:text-emerald-500 transition-colors" />
                       <input 
                         type={showPassword ? "text" : "password"} 
                         required
                         placeholder="Create Password"
                         className="w-full h-12 pl-12 pr-12 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-emerald-500 outline-none text-sm font-bold transition-all"
                       />
                       <button 
                         type="button"
                         onClick={() => setShowPassword(!showPassword)}
                         className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-emerald-500 transition-colors"
                       >
                         {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                       </button>
                    </div>
                    <div className="relative">
                       <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
                       <input 
                         type={showPassword ? "text" : "password"} 
                         required
                         placeholder="Confirm Password"
                         className="w-full h-12 pl-12 pr-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-emerald-500 outline-none text-sm font-bold transition-all"
                       />
                    </div>
                 </div>
              </div>

              {/* Payout Details */}
              <div className="space-y-4">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-60">2. Payout Information (Confidential)</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                       <Building className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
                       <input type="text" placeholder="Bank Name" className="w-full h-12 pl-12 pr-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-emerald-500 outline-none text-sm font-bold transition-all" />
                    </div>
                    <div className="relative">
                       <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
                       <input type="text" placeholder="Account Number" className="w-full h-12 pl-12 pr-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-emerald-500 outline-none text-sm font-bold transition-all" />
                    </div>
                 </div>
              </div>

              {/* Verification Section */}
              <div className="space-y-4">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-60">3. Verification & Documents</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-[2rem] border-2 border-dashed border-outline-variant/20 flex flex-col items-center justify-center text-center space-y-3 group hover:border-emerald-500 hover:bg-emerald-50/50 transition-all cursor-pointer">
                       <FileSignature className="h-6 w-6 text-on-surface-variant group-hover:text-emerald-600 transition-colors" />
                       <span className="text-[10px] font-black uppercase tracking-widest">Upload Signature</span>
                    </div>
                    <div className="p-6 rounded-[2rem] border-2 border-dashed border-outline-variant/20 flex flex-col items-center justify-center text-center space-y-3 group hover:border-emerald-500 hover:bg-emerald-50/50 transition-all cursor-pointer">
                       <Camera className="h-6 w-6 text-on-surface-variant group-hover:text-emerald-600 transition-colors" />
                       <span className="text-[10px] font-black uppercase tracking-widest">Profile Portrait</span>
                    </div>
                 </div>
              </div>

              <div className="pt-6">
                 <button 
                   type="submit"
                   disabled={isSubmitting}
                   className="w-full h-14 rounded-2xl bg-slate-900 text-white font-black flex items-center justify-center gap-3 shadow-xl shadow-slate-900/20 hover:bg-slate-800 active:scale-95 transition-all disabled:opacity-70 disabled:scale-100"
                 >
                    {isSubmitting ? "Processing Profile..." : "Complete Activation"}
                    {!isSubmitting && <ArrowRight className="h-5 w-5" />}
                 </button>
              </div>
           </form>
        </div>
      </div>
    </main>
  )
}
