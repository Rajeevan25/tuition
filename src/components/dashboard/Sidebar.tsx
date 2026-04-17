"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  Users, 
  UserSquare2, 
  BookOpen, 
  CalendarCheck, 
  CreditCard, 
  PieChart, 
  Megaphone, 
  Settings,
  HelpCircle,
  LifeBuoy,
  Plus,
  LucideIcon
} from "lucide-react"

export interface SidebarItem {
  icon: LucideIcon
  label: string
  href: string
}

const DEFAULT_MENU_ITEMS: SidebarItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Users, label: "Students", href: "/students" },
  { icon: UserSquare2, label: "Teachers", href: "/teachers" },
  { icon: BookOpen, label: "Classes", href: "/classes" },
  { icon: CalendarCheck, label: "Attendance", href: "/attendance" },
  { icon: CreditCard, label: "Payments", href: "/payments" },
  { icon: PieChart, label: "Reports", href: "/reports" },
  { icon: Megaphone, label: "Announcements", href: "/announcements" },
]

const DEFAULT_FOOTER_ITEMS: SidebarItem[] = [
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: HelpCircle, label: "Help", href: "/help" },
  { icon: LifeBuoy, label: "Support", href: "/support" },
]

interface SidebarProps {
  className?: string
  items?: SidebarItem[]
  footerItems?: SidebarItem[]
  quickActionLabel?: string
  quickActionHref?: string
  logoHref?: string
}

export function Sidebar({ 
  className, 
  items = DEFAULT_MENU_ITEMS, 
  footerItems = DEFAULT_FOOTER_ITEMS,
  quickActionLabel = "Quick Enrollment",
  quickActionHref = "/students/enroll",
  logoHref = "/dashboard"
}: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside className={cn("flex h-screen w-64 flex-col bg-slate-50 p-4 font-body overflow-y-auto custom-scrollbar", className)}>
      <Link href={logoHref} className="mb-8 flex items-center gap-3 px-2 group">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#3525cd] to-[#4f46e5] text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
          <span className="material-symbols-outlined text-2xl">hub</span>
        </div>
        <div>
          <div className="font-headline text-xl font-black tracking-tighter text-slate-900 leading-tight">CenterHub</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-primary opacity-80">Institute Management</div>
        </div>
      </Link>

      <nav className="flex-1 space-y-1">
        {items.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200",
                isActive 
                  ? "bg-white text-primary shadow-sm scale-[0.99]" 
                  : "text-slate-500 hover:bg-slate-200/50 hover:text-slate-900"
              )}
            >
              <item.icon className={cn("h-5 w-5", isActive && "text-primary")} strokeWidth={isActive ? 2.5 : 2} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto space-y-4 pt-6">
        <Link 
          href={quickActionHref}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#3525cd] to-[#4f46e5] py-4 font-black text-[10px] uppercase tracking-widest text-white shadow-lg shadow-primary/20 transition-all hover:opacity-90 active:scale-95"
        >
          <Plus className="h-4 w-4" />
          <span>{quickActionLabel}</span>
        </Link>

        <div className="space-y-1 border-t border-slate-200/60 pt-4">
          {footerItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-bold text-slate-500 transition-colors hover:text-primary"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}
