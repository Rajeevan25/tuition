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
  Mail,
  Smartphone,
  School,
  BookOpen
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SaaSLogo } from "@/components/ui/SaaSLogo"

export default function StudentActivationPage() {
  const params = useParams()
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleActivate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      router.push("/portal/student/dashboard")
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 relative overflow-hidden font-body">
      {/* Branded background blur */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-indigo-500/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="w-full max-w-2xl bg-white rounded-[3rem] border border-outline-variant/10 shadow-ambient overflow-hidden flex flex-col md:flex-row relative z-10">
        {/* Left Panel: Welcome */}
        <div className="w-full md:w-5/12 primary-gradient p-10 md:p-12 text-white flex flex-col justify-between items-start">
           <SaaSLogo className="h-8 w-auto brightness-0 invert" />
           
           <div className="space-y-6">
              <div className="w-16 h-16 rounded-[1.5rem] bg-white/20 backdrop-blur-md flex items-center justify-center">
                 <School className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                 <h2 className="text-2xl font-black leading-tight">Bright Academy Horizon</h2>
                 <p className="text-sm font-medium opacity-80">Welcome to your student workspace. Let's get you started.</p>
              </div>
           </div>

           <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 w-full">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center font-black text-xs">AJ</div>
                 <div className="flex-1">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Verified Student</p>
                    <p className="text-sm font-bold">Amavi Jayasinghe</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Right Panel: Form */}
        <div className="flex-1 p-10 md:p-12 space-y-8">
           <div className="space-y-1">
              <h1 className="text-2xl font-black text-on-surface tracking-tight">Activate Account</h1>
              <p className="text-xs text-on-surface-variant font-medium">Create a secure password to access your portal.</p>
           </div>

           <form onSubmit={handleActivate} className="space-y-6">
              <div className="space-y-4">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-on-surface-variant px-1 opacity-60">Personal Password</label>
                    <div className="relative group">
                       <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                       <input 
                         type={showPassword ? "text" : "password"} 
                         required
                         placeholder="Min. 8 characters"
                         className="w-full h-12 pl-12 pr-12 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none text-sm font-bold transition-all"
                       />
                       <button 
                         type="button"
                         onClick={() => setShowPassword(!showPassword)}
                         className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                       >
                         {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                       </button>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-on-surface-variant px-1 opacity-60">Confirm Password</label>
                    <div className="relative">
                       <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant" />
                       <input 
                         type={showPassword ? "text" : "password"} 
                         required
                         placeholder="Repeat password"
                         className="w-full h-12 pl-12 pr-4 rounded-xl bg-surface-container-low border-2 border-transparent focus:border-primary outline-none text-sm font-bold transition-all"
                       />
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10 text-center space-y-1">
                    <p className="text-[10px] font-black uppercase opacity-40">Grade</p>
                    <p className="text-sm font-bold text-on-surface">A/L 2025</p>
                 </div>
                 <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/10 text-center space-y-1">
                    <p className="text-[10px] font-black uppercase opacity-40">Section</p>
                    <p className="text-sm font-bold text-on-surface">Science</p>
                 </div>
              </div>

              <div className="pt-4">
                 <button 
                   type="submit"
                   disabled={isSubmitting}
                   className="w-full primary-gradient h-14 rounded-2xl text-white font-black flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-70 disabled:scale-100"
                 >
                    {isSubmitting ? "Activating Account..." : "Activate Student Account"}
                    {!isSubmitting && <ArrowRight className="h-5 w-5" />}
                 </button>
              </div>
           </form>

           <p className="text-[10px] text-center text-on-surface-variant font-medium max-w-[200px] mx-auto opacity-60">
             By activating, you agree to CenterHub's Terms of Service and Privacy Policy.
           </p>
        </div>
      </div>
      
      <footer className="mt-8 text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-30">
        Branded Tuition Instance: {params.token ? 'BH-2025-ACT' : 'DEMO-INSTANCE'}
      </footer>
    </main>
  )
}
