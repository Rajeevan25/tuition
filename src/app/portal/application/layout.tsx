"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Bell, 
  HelpCircle, 
  LogOut,
  Settings,
  Mail,
  Home,
  FileText,
  CreditCard
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SaaSLogo } from "@/components/ui/SaaSLogo"

export default function PreActivationLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const navLinks = [
    { label: "Application Status", icon: FileText, href: "/portal/application/status" },
    { label: "Quote Review", icon: CreditCard, href: "/portal/application/quote" },
    { label: "Messages", icon: Mail, href: "/portal/application/messages" },
  ]

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Top Header */}
      <header className="h-20 bg-white border-b border-outline-variant/10 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
        <SaaSLogo />
        <div className="flex items-center gap-6">
           <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
              <Bell className="h-5 w-5" />
           </button>
           <div className="h-8 w-[1px] bg-outline-variant/10"></div>
           <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                 <div className="text-sm font-bold">Nimal Perera</div>
                 <div className="text-[10px] font-medium text-on-surface-variant">Center Owner</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary-container text-white flex items-center justify-center font-black">NP</div>
           </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row">
        {/* Mobile Nav */}
        <nav className="md:hidden flex border-b border-outline-variant/10 bg-white">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "flex-1 py-4 text-center text-xs font-bold",
                pathname === link.href ? "text-primary border-b-2 border-primary" : "text-on-surface-variant"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Sidebar (Tablet/Desktop) */}
        <aside className="hidden md:flex w-72 flex-col bg-surface border-r border-outline-variant/10 p-6 space-y-2">
           <h3 className="px-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-60 mb-2">Onboarding</h3>
           {navLinks.map(link => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-2xl font-bold transition-all",
                    isActive ? "bg-white shadow-ambient text-primary scale-[1.02]" : "text-on-surface-variant hover:bg-surface-container-low"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </Link>
              )
           })}
           
           <div className="pt-8 mt-auto space-y-2">
              <Link href="#" className="flex items-center gap-3 p-4 rounded-2xl font-bold text-on-surface-variant hover:bg-surface-container-low transition-all">
                <HelpCircle className="h-5 w-5" />
                <span>Help Center</span>
              </Link>
              <Link href="/logout" className="flex items-center gap-3 p-4 rounded-2xl font-bold text-error hover:bg-error/5 transition-all">
                <LogOut className="h-5 w-5" />
                <span>Log Out</span>
              </Link>
           </div>
        </aside>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-12 bg-surface">
          {children}
        </main>
      </div>
    </div>
  )
}
