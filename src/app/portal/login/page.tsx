"use client"

import Link from "next/link"
import { 
  Building2, 
  GraduationCap, 
  Users, 
  ChevronRight,
  ShieldCheck,
  ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SaaSLogo } from "@/components/ui/SaaSLogo"

const ROLES = [
  {
    id: "admin",
    title: "Institute Admin",
    description: "Manage students, teachers, classes, and institute settings.",
    icon: Building2,
    href: "/portal/admin/dashboard",
    color: "bg-indigo-50 text-indigo-600",
    accent: "hover:border-indigo-500 hover:ring-indigo-500/10"
  },
  {
    id: "teacher",
    title: "Teacher Portal",
    description: "Access your timetable, mark attendance, and manage class materials.",
    icon: GraduationCap,
    href: "/portal/teacher/dashboard",
    color: "bg-emerald-50 text-emerald-600",
    accent: "hover:border-emerald-500 hover:ring-emerald-500/10"
  },
  {
    id: "student",
    title: "Student Portal",
    description: "View your schedule, track payments, and access academic resources.",
    icon: Users,
    href: "/portal/student/dashboard",
    color: "bg-blue-50 text-blue-600",
    accent: "hover:border-blue-500 hover:ring-blue-500/10"
  }
]

export default function LoginSelectorPage() {
  return (
    <main className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 sm:p-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full animate-pulse transition-all duration-300"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full animate-pulse transition-all duration-300"></div>
      </div>

      <div className="w-full max-w-4xl space-y-12 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4">
          <SaaSLogo className="h-12 w-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-black text-on-surface tracking-tight">
            Welcome to <span className="text-primary">CenterHub</span>
          </h1>
          <p className="text-lg text-on-surface-variant font-medium max-w-xl mx-auto">
            Choose your portal to access your tuition institute's workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ROLES.map((role) => {
            const Icon = role.icon
            return (
              <Link 
                key={role.id}
                href={role.href}
                className={cn(
                  "group bg-white/70 backdrop-blur-xl p-8 rounded-[2.5rem] border border-outline-variant/5 shadow-ambient transition-all duration-500",
                  "flex flex-col items-center text-center space-y-6",
                  "hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5",
                  role.accent
                )}
              >
                <div className={cn(
                  "w-20 h-20 rounded-[2rem] flex items-center justify-center transition-transform duration-500 group-hover:scale-110",
                  role.color
                )}>
                  <Icon className="h-10 w-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-on-surface">{role.title}</h3>
                  <p className="text-sm text-on-surface-variant font-medium leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div className="pt-4 mt-auto">
                   <div className="flex items-center gap-2 text-primary font-black text-sm group/btn group-hover:gap-3 transition-all duration-300">
                      Enter Portal <ChevronRight className="h-4 w-4" />
                   </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="flex flex-col items-center space-y-6 pt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 font-bold text-xs uppercase tracking-widest border border-emerald-100">
            <ShieldCheck className="h-4 w-4" /> Secure multi-tenant workspace active
          </div>
          
          <div className="text-sm text-on-surface-variant font-medium">
            Not your institute? <Link href="/" className="text-primary font-bold hover:underline">Change Institute</Link>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <footer className="absolute bottom-8 left-0 w-full text-center text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant opacity-30">
        Powered by CenterHub Tuition SaaS Platform
      </footer>
    </main>
  )
}
