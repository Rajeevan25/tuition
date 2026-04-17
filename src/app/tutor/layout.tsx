"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Home, 
  BookOpen, 
  Users, 
  CalendarCheck, 
  MessageSquare, 
  Wallet, 
  LifeBuoy, 
  LogOut,
  Bell,
  Menu,
  FileSpreadsheet
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function TutorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Dashboard", href: "/tutor", icon: Home },
    { name: "My Classes", href: "/tutor/classes", icon: BookOpen },
    { name: "Attendance", href: "/tutor/attendance", icon: CalendarCheck },
    { name: "Broadcast", href: "/tutor/broadcast", icon: MessageSquare },
    { name: "Faculty HR", href: "/tutor/hr", icon: FileSpreadsheet },
    { name: "Earnings", href: "/tutor/earnings", icon: Wallet },
  ]

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col md:flex-row font-body">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-72 bg-white border-r border-slate-200 fixed h-screen z-50">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
               <span className="font-headline font-black text-xl">T</span>
            </div>
            <div>
              <span className="text-2xl font-black tracking-tighter text-slate-800 font-headline">CenterHub</span>
              <p className="text-[10px] font-black uppercase tracking-widest text-indigo-500 -mt-1">Faculty Portal</p>
            </div>
          </div>

          <nav className="space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={cn(
                    "flex items-center gap-4 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200",
                    isActive 
                      ? "bg-indigo-50 text-indigo-600 shadow-sm" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <link.icon className={cn("h-5 w-5", isActive ? "text-indigo-600" : "text-slate-400")} />
                  {link.name}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="mt-auto p-8 border-t border-slate-100">
           <div className="bg-indigo-600 rounded-3xl p-6 text-white relative overflow-hidden group mb-6">
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Today's Goal</p>
                <p className="text-sm font-bold mt-1 leading-snug">94% Attendance Target</p>
              </div>
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
           </div>
           
           <button className="flex items-center gap-3 px-4 py-2 text-sm font-bold text-slate-400 hover:text-red-500 transition-colors">
             <LogOut className="h-4 w-4" /> Sign Out
           </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <nav className="md:hidden flex justify-between items-center p-6 bg-white border-b border-slate-200 fixed top-0 w-full z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
             <span className="font-black text-sm">T</span>
          </div>
          <span className="text-lg font-black tracking-tighter">CenterHub</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 bg-slate-100 rounded-xl">
          <Menu className="h-6 w-6 text-slate-600" />
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 md:ml-72 p-6 md:p-12 pt-28 md:pt-12">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
           <div className="absolute right-0 top-0 h-full w-64 bg-white p-8 animate-in slide-in-from-right duration-300" onClick={e => e.stopPropagation()}>
              <div className="space-y-6">
                 {navLinks.map(link => (
                    <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                       <link.icon className="h-5 w-5" /> {link.name}
                    </Link>
                 ))}
              </div>
           </div>
        </div>
      )}
    </div>
  )
}
