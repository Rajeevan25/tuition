"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { 
  Building2, 
  MapPin, 
  Users, 
  GraduationCap, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  Image as ImageIcon,
  Palette,
  Users2,
  BookOpen,
  Check
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SaaSLogo } from "@/components/ui/SaaSLogo"

const SETUP_STEPS = [
  { id: "profile", title: "Institute Profile", icon: Building2 },
  { id: "branding", title: "Visual Identity", icon: Palette },
  { id: "staff", title: "Teaching Staff", icon: Users2 },
  { id: "academics", title: "Academic Scope", icon: BookOpen },
  { id: "launch", title: "Ready for Launch", icon: Rocket }
]

function Rocket({ className }: { className?: string }) {
  return <span className={cn("material-symbols-outlined", className)}>rocket_launch</span>
}

export default function TenantSetupWizard() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)

  const next = () => setCurrentStep(prev => Math.min(prev + 1, SETUP_STEPS.length - 1))
  const back = () => setCurrentStep(prev => Math.max(prev - 1, 0))

  return (
    <main className="bg-surface flex flex-col items-center min-h-screen">
      {/* Header */}
      <header className="w-full h-20 bg-white border-b border-outline-variant/10 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
         <SaaSLogo href="#" />
         <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
               <div className="text-sm font-bold text-on-surface">Setup Progress</div>
               <div className="text-[10px] font-black uppercase text-on-surface-variant opacity-60">Step {currentStep + 1} of {SETUP_STEPS.length}</div>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-primary/10 flex items-center justify-center relative">
               <svg className="w-full h-full -rotate-90">
                  <circle cx="24" cy="24" r="20" fill="transparent" stroke="currentColor" strokeWidth="4" className="text-surface-container-high" />
                  <circle cx="24" cy="24" r="20" fill="transparent" stroke="currentColor" strokeWidth="4" strokeDasharray="125.6" strokeDashoffset={125.6 * (1 - (currentStep + 1) / SETUP_STEPS.length)} className="text-primary transition-all duration-700" />
               </svg>
               <span className="absolute text-[10px] font-black">{Math.round(((currentStep + 1) / SETUP_STEPS.length) * 100)}%</span>
            </div>
         </div>
      </header>

      <div className="w-full max-w-7xl mx-auto p-6 md:p-12 flex flex-col lg:flex-row gap-12">
        {/* Progress Sidebar */}
        <aside className="w-full md:w-80 space-y-6">
           <div className="space-y-1">
              <h2 className="text-3xl font-black text-on-surface">Initial Setup</h2>
              <p className="text-sm text-on-surface-variant font-medium">Let&apos;s configure your academic environment.</p>
           </div>
           
           <nav className="space-y-2">
              {SETUP_STEPS.map((step, idx) => {
                const isActive = idx === currentStep
                const isCompleted = idx < currentStep
                const Icon = step.icon
                return (
                  <div key={step.id} className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl transition-all duration-300",
                    isActive ? "bg-white shadow-ambient scale-105" : "opacity-40"
                  )}>
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center",
                      isActive ? "bg-primary text-white" : isCompleted ? "bg-emerald-500 text-white" : "bg-surface-container-high"
                    )}>
                       {isCompleted ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                    </div>
                    <span className={cn("font-bold text-sm", isActive ? "text-primary" : "text-on-surface")}>{step.title}</span>
                  </div>
                )
              })}
           </nav>
        </aside>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-[3rem] p-10 md:p-16 border border-outline-variant/5 shadow-ambient flex flex-col">
           {currentStep === 0 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-8 flex-1">
                 <div className="space-y-2">
                    <h3 className="text-2xl font-black">Institute Profile</h3>
                    <p className="text-sm text-on-surface-variant font-medium">Confirm your public information.</p>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-on-surface-variant opacity-60">Institute Legal Name</label>
                       <input type="text" defaultValue="Bright Horizon Academy" className="w-full h-12 px-4 rounded-xl bg-surface-container-low outline-none border-2 border-transparent focus:border-primary transition-all font-bold text-sm" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase text-on-surface-variant opacity-60">Primary Branch Location</label>
                       <input type="text" defaultValue="Colombo 03" className="w-full h-12 px-4 rounded-xl bg-surface-container-low outline-none border-2 border-transparent focus:border-primary transition-all font-bold text-sm" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                       <label className="text-[10px] font-black uppercase text-on-surface-variant opacity-60">Address</label>
                       <textarea defaultValue="123 Galle Road, Colombo 03, Sri Lanka" className="w-full h-24 p-4 rounded-xl bg-surface-container-low outline-none border-2 border-transparent focus:border-primary transition-all font-bold text-sm" />
                    </div>
                 </div>
              </div>
           )}

           {currentStep === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-8 flex-1">
                 <div className="space-y-2">
                    <h3 className="text-2xl font-black">Visual Identity</h3>
                    <p className="text-sm text-on-surface-variant font-medium">How should your portal look to your students?</p>
                 </div>
                 <div className="space-y-6">
                    <div className="flex items-center gap-8">
                       <div className="w-32 h-32 rounded-[2rem] bg-surface-container-high border-2 border-dashed border-outline-variant/30 flex items-center justify-center text-on-surface-variant group hover:bg-white hover:border-primary transition-all cursor-pointer">
                          <ImageIcon className="h-8 w-8 group-hover:scale-110 transition-transform" />
                       </div>
                       <div className="space-y-1">
                          <h4 className="font-bold">Institute Logo</h4>
                          <p className="text-xs text-on-surface-variant">Recommended SVG or PNG with transparent background.</p>
                       </div>
                    </div>
                    
                    <div className="space-y-4">
                       <h4 className="font-bold flex items-center gap-2">
                          <Palette className="h-5 w-5 text-primary" /> Brand Primary Color
                       </h4>
                       <div className="flex gap-4">
                          {["#3525cd", "#0f172a", "#059669", "#dc2626", "#d97706"].map(color => (
                            <button 
                              key={color} 
                              className={cn(
                                "w-10 h-10 rounded-xl transition-all hover:scale-110",
                                color === "#3525cd" ? "ring-4 ring-primary/20 scale-110" : "opacity-60"
                              )} 
                              style={{ backgroundColor: color }} 
                            />
                          ))}
                          <div className="w-10 h-10 rounded-xl bg-surface-container-low border border-dashed border-outline-variant/30 flex items-center justify-center cursor-pointer">+</div>
                       </div>
                    </div>
                 </div>
              </div>
           )}

           {currentStep === 4 && (
              <div className="animate-in zoom-in-95 duration-700 space-y-8 flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto">
                 <div className="w-20 h-20 rounded-3xl bg-primary text-white flex items-center justify-center animate-pulse">
                    <Rocket className="h-10 w-10" />
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-3xl font-black">You are set!</h3>
                    <p className="text-sm text-on-surface-variant font-medium">Everything is configured. You can now start adding students and teachers.</p>
                 </div>
                 <div className="w-full p-6 rounded-3xl bg-surface-container-low border border-outline-variant/10 text-left space-y-4">
                    <div className="flex items-center justify-between">
                       <span className="text-xs font-bold opacity-60 uppercase">Primary URL</span>
                       <span className="text-xs font-black text-primary">brighthorizon.centerhub.lk</span>
                    </div>
                    <div className="flex items-center justify-between">
                       <span className="text-xs font-bold opacity-60 uppercase">Status</span>
                       <StatusBadge status="active" />
                    </div>
                 </div>
              </div>
           )}

           {/* Default states for middle steps */}
           {(currentStep === 2 || currentStep === 3) && (
             <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-8 flex-1">
                <div className="space-y-2">
                   <h3 className="text-2xl font-black">{SETUP_STEPS[currentStep].title}</h3>
                   <p className="text-sm text-on-surface-variant font-medium italic">Content for {SETUP_STEPS[currentStep].title} configuration goes here...</p>
                </div>
                <div className="w-full aspect-video rounded-3xl bg-surface-container-low border border-outline-variant/10 flex items-center justify-center opacity-30">
                   <IconComponent icon={SETUP_STEPS[currentStep].icon} />
                </div>
             </div>
           )}

           <div className="pt-10 flex border-t border-outline-variant/10 mt-10 justify-between items-center">
              <button 
                onClick={back}
                disabled={currentStep === 0}
                className="flex items-center gap-2 font-black text-on-surface-variant hover:text-primary transition-colors disabled:opacity-0"
              >
                <ChevronLeft className="h-5 w-5" /> Back
              </button>
              
              <button 
                onClick={currentStep === SETUP_STEPS.length - 1 ? () => router.push("/dashboard") : next}
                className="primary-gradient flex items-center gap-3 px-10 py-4 rounded-full font-black text-white shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all group"
              >
                 {currentStep === SETUP_STEPS.length - 1 ? "Launch Portal" : "Continue"}
                 {currentStep !== SETUP_STEPS.length - 1 && <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
              </button>
           </div>
        </div>
      </div>
    </main>
  )
}

function StatusBadge({ status }: { status: "active" }) {
  return (
    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
      {status}
    </span>
  )
}

function IconComponent({ icon: Icon }: { icon: React.ComponentType<{ className?: string }> }) {
  return <Icon className="h-16 w-16" />
}
