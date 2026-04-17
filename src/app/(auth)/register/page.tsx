"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  User, 
  Building2, 
  Settings2, 
  Palette, 
  CreditCard, 
  Eye, 
  HelpCircle,
  Upload,
  CheckCircle2
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SaaSLogo } from "@/components/ui/SaaSLogo"
import { StatusBadge } from "@/components/ui/StatusBadge"

const STEPS = [
  { id: "owner", title: "Owner Info", icon: User },
  { id: "institute", title: "Institute", icon: Building2 },
  { id: "requirements", title: "Needs", icon: Settings2 },
  { id: "branding", title: "Branding", icon: Palette },
  { id: "plan", title: "Plan", icon: CreditCard },
  { id: "review", title: "Review", icon: Eye },
]

export default function RegisterWizard() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    // Step 1: Owner
    fullName: "",
    mobile: "",
    email: "",
    password: "",
    // Step 2: Institute
    instituteName: "",
    instituteType: "Tuition Center",
    branches: "1",
    district: "Colombo",
    studentCount: "0-50",
    // Step 3: Requirements
    needs: {
      studentManagement: true,
      scheduling: true,
      attendance: true,
      feeManagement: false,
      smsNotifications: false,
    },
    // Step 4: Branding
    preferredSubdomain: "",
    brandColor: "#3525cd",
    // Step 5: Plan
    selectedPlan: "Growth"
  })

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep < STEPS.length - 1) {
      nextStep()
    } else {
      // Mock submit
      router.push("/register/success")
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                <input 
                  type="text" 
                  className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none" 
                  placeholder="Nimal Perera"
                  value={formData.fullName}
                  onChange={e => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Mobile Number</label>
                  <input 
                    type="tel" 
                    className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none" 
                    placeholder="+94 77 XXX XXXX"
                    value={formData.mobile}
                    onChange={e => setFormData({...formData, mobile: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none" 
                    placeholder="nimal@example.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Password</label>
                <input 
                  type="password" 
                  className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none" 
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={e => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Institute Name</label>
                <input 
                  type="text" 
                  className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none" 
                  placeholder="Bright Horizon Academy"
                  value={formData.instituteName}
                  onChange={e => setFormData({...formData, instituteName: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Main District</label>
                  <select 
                    className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none cursor-pointer"
                    value={formData.district}
                    onChange={e => setFormData({...formData, district: e.target.value})}
                  >
                    <option>Colombo</option>
                    <option>Gampaha</option>
                    <option>Kandy</option>
                    <option>Galle</option>
                    <option>Matara</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Estimated Student Count</label>
                  <select 
                    className="w-full h-12 px-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none cursor-pointer"
                    value={formData.studentCount}
                    onChange={e => setFormData({...formData, studentCount: e.target.value})}
                  >
                    <option value="0-50">0 - 50</option>
                    <option value="51-200">51 - 200</option>
                    <option value="201-500">201 - 500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <p className="text-sm text-on-surface-variant">Tell us what tools you need to manage your academy efficiently.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { id: "studentManagement", label: "Student Management", icon: "person" },
                { id: "scheduling", label: "Class Scheduling", icon: "calendar_month" },
                { id: "attendance", label: "Attendance Tracking", icon: "fact_check" },
                { id: "feeManagement", label: "Fee & Payments", icon: "payments" },
                { id: "smsNotifications", label: "SMS/WhatsApp Alerts", icon: "chat" },
              ].map(item => (
                <label 
                  key={item.id} 
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-2xl border-2 transition-all cursor-pointer",
                    formData.needs[item.id as keyof typeof formData.needs] 
                      ? "border-primary bg-primary/5 text-primary" 
                      : "border-outline-variant/30 bg-surface-container-low text-on-surface hover:border-primary/50"
                  )}
                >
                  <input 
                    type="checkbox" 
                    className="hidden"
                    checked={formData.needs[item.id as keyof typeof formData.needs]}
                    onChange={e => setFormData({
                      ...formData, 
                      needs: { ...formData.needs, [item.id]: e.target.checked }
                    })}
                  />
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span className="font-bold text-sm">{item.label}</span>
                  {formData.needs[item.id as keyof typeof formData.needs] && <Check className="ml-auto h-4 w-4" />}
                </label>
              ))}
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Preferred Subdomain</label>
                <div className="flex items-center rounded-xl bg-surface-container-low px-4 focus-within:ring-2 focus-within:ring-primary transition-all">
                  <input 
                    type="text" 
                    className="flex-1 h-12 bg-transparent border-none outline-none text-on-surface" 
                    placeholder="brightacademy"
                    value={formData.preferredSubdomain}
                    onChange={e => setFormData({...formData, preferredSubdomain: e.target.value})}
                  />
                  <span className="text-on-surface-variant font-bold">.centerhub.lk</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Brand Color</label>
                 <div className="flex items-center gap-3">
                    <input 
                      type="color" 
                      className="h-12 w-12 rounded-xl border-none p-0 cursor-pointer overflow-hidden" 
                      value={formData.brandColor}
                      onChange={e => setFormData({...formData, brandColor: e.target.value})}
                    />
                    <span className="font-mono text-sm font-bold uppercase">{formData.brandColor}</span>
                 </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Institute Logo</label>
                  <div className="h-12 border-2 border-dashed border-outline-variant/50 rounded-xl flex items-center justify-center gap-2 text-on-surface-variant text-xs cursor-pointer hover:bg-surface-container-high transition-colors">
                    <Upload className="h-4 w-4" /> Upload SVG/PNG
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: "Starter", price: "2,900", desc: "Up to 50 students", icon: "rocket_launch" },
                { name: "Growth", price: "7,400", desc: "Up to 250 students", icon: "trending_up" },
                { name: "Premium", price: "12,900", desc: "Unlimited students", icon: "workspace_premium" },
              ].map(plan => (
                <label 
                  key={plan.name}
                  className={cn(
                    "flex items-center gap-5 p-5 rounded-3xl border-2 transition-all cursor-pointer",
                    formData.selectedPlan === plan.name 
                      ? "border-primary bg-primary/5 ring-4 ring-primary/10" 
                      : "border-outline-variant/30 bg-surface-container-low hover:border-primary/50"
                  )}
                >
                  <input 
                    type="radio" 
                    name="plan" 
                    className="hidden"
                    checked={formData.selectedPlan === plan.name}
                    onChange={() => setFormData({...formData, selectedPlan: plan.name})}
                  />
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center",
                    formData.selectedPlan === plan.name ? "bg-primary text-white" : "bg-surface-container-high text-on-surface-variant"
                  )}>
                    <span className="material-symbols-outlined">{plan.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-headline font-bold text-on-surface">{plan.name}</h4>
                    <p className="text-xs text-on-surface-variant font-medium">{plan.desc}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black text-on-surface space-x-1">
                      <span className="text-[10px] uppercase">Rs</span>
                      <span>{plan.price}</span>
                    </div>
                    <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">per month</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )
      case 5:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="rounded-3xl bg-surface-container-low p-6 space-y-4 border border-outline-variant/10">
              <div className="flex justify-between items-center pb-4 border-b border-outline-variant/10">
                 <h4 className="font-bold text-lg">Application Summary</h4>
                 <StatusBadge status="pending" />
              </div>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                <div>
                  <div className="text-[10px] font-black uppercase text-on-surface-variant mb-1">Owner</div>
                  <div className="font-bold text-on-surface">{formData.fullName || "—"}</div>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-on-surface-variant mb-1">Institute</div>
                  <div className="font-bold text-on-surface">{formData.instituteName || "—"}</div>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-on-surface-variant mb-1">Subdomain</div>
                  <div className="font-bold text-primary">{formData.preferredSubdomain || "pending"}.centerhub.lk</div>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-on-surface-variant mb-1">Selected Plan</div>
                  <div className="font-bold text-on-surface">{formData.selectedPlan}</div>
                </div>
              </div>
              <div className="pt-4 space-y-2">
                 <div className="text-[10px] font-black uppercase text-on-surface-variant">Modules Selected</div>
                 <div className="flex flex-wrap gap-2">
                    {Object.entries(formData.needs).filter(([_, v]) => v).map(([k]) => (
                      <span key={k} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">
                        {k.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    ))}
                 </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
               <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
               <p className="text-xs text-emerald-800 font-medium leading-relaxed">
                 By submitting, your data will be reviewed by our team. Approval usually takes 24-48 hours. No immediate payment is required.
               </p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen bg-surface flex flex-col items-center py-12 px-6 overflow-y-auto">
      <div className="w-full max-w-4xl space-y-12 mb-12">
        {/* Header */}
        <div className="flex justify-between items-center">
          <SaaSLogo />
          <div className="hidden md:flex items-center gap-4 text-sm font-bold text-on-surface-variant">
            <HelpCircle className="h-4 w-4" /> Need Help?
          </div>
        </div>

        {/* Wizard Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-1">
              <h2 className="font-headline text-3xl font-black tracking-tight text-on-surface">Register</h2>
              <p className="text-on-surface-variant font-medium">Join the next generation of academies in Sri Lanka.</p>
            </div>

            <nav className="space-y-1">
              {STEPS.map((step, idx) => {
                const isCompleted = idx < currentStep
                const isActive = idx === currentStep
                const Icon = step.icon

                return (
                  <div 
                    key={step.id}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-2xl transition-all",
                      isActive ? "bg-white shadow-xl shadow-primary/5 text-primary scale-105" : "text-on-surface-variant opacity-60"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                      isActive ? "bg-primary text-white" : isCompleted ? "bg-emerald-500 text-white" : "bg-surface-container-high"
                    )}>
                      {isCompleted ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">Step {idx + 1}</span>
                      <span className="font-bold text-sm">{step.title}</span>
                    </div>
                  </div>
                )
              })}
            </nav>
          </div>

          {/* Form Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-ambient border border-white/50 relative">
               {/* Progress bar */}
              <div className="absolute top-0 left-0 h-1.5 bg-primary/10 w-full rounded-t-[2.5rem] overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-500" 
                  style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                />
              </div>

              <header className="mb-10">
                <h3 className="font-headline text-2xl font-black text-on-surface">{STEPS[currentStep].title}</h3>
                <p className="text-on-surface-variant text-sm font-medium mt-1">Please provide accurate information for verification.</p>
              </header>

              <form onSubmit={handleSubmit}>
                <div className="min-h-[300px]">
                  {renderStep()}
                </div>

                <div className="pt-12 flex justify-between items-center border-t border-outline-variant/10 mt-12">
                   <button 
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="flex items-center gap-2 font-bold text-on-surface-variant hover:text-primary transition-colors disabled:opacity-0"
                   >
                     <ChevronLeft className="h-5 w-5" /> Back
                   </button>
                   <button 
                    type="submit"
                    className="primary-gradient flex items-center gap-2 rounded-full px-10 py-4 font-black text-white shadow-xl shadow-primary/20 transition-all active:scale-95 group"
                   >
                     {currentStep === STEPS.length - 1 ? "Submit Application" : "Continue"}
                     {currentStep !== STEPS.length - 1 && <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                   </button>
                </div>
              </form>
            </div>
            
            <p className="text-center mt-8 text-xs text-on-surface-variant font-medium">
              Already have an account? <Link href="/login" className="text-primary font-black ml-1 hover:underline">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
