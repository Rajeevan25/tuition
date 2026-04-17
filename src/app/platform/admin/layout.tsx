"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  BarChart3, 
  Users, 
  Building, 
  ShieldCheck, 
  Search, 
  Bell, 
  Settings,
  LayoutDashboard,
  FileText,
  CreditCard
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SaaSLogo } from "@/components/ui/SaaSLogo"

const ADMIN_LINKS = [
  { label: "Overview", icon: LayoutDashboard, href: "/platform/admin" },
  { label: "Applications", icon: FileText, href: "/platform/admin/applications", count: 12 },
  { label: "Institutes", icon: Building, href: "/platform/admin/institutes" },
  { label: "Financials", icon: CreditCard, href: "/platform/admin/financials" },
  { label: "System Status", icon: ShieldCheck, href: "/platform/admin/status" },
  { label: "Settings", icon: Settings, href: "/platform/admin/settings" },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-72 bg-white border-r border-outline-variant/10 flex flex-col z-50">
        <div className="p-8">
          <SaaSLogo />
          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Super Admin</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          {ADMIN_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/")
            const Icon = link.icon

            return (
              <Link 
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center justify-between p-4 rounded-2xl font-bold transition-all group",
                  isActive 
                    ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105" 
                    : "text-on-surface-variant hover:bg-surface-container-low"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className={cn("h-5 w-5", isActive ? "text-white" : "text-primary")} />
                  <span>{link.label}</span>
                </div>
                {link.count && (
                  <span className={cn(
                    "text-[10px] px-2 py-0.5 rounded-full font-black",
                    isActive ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                  )}>
                    {link.count}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        <div className="p-6 mt-auto border-t border-outline-variant/10">
           <div className="flex items-center gap-3 p-4 bg-surface-container-low rounded-2xl">
              <div className="w-10 h-10 rounded-full bg-primary-container text-white flex items-center justify-center font-black">AD</div>
              <div className="flex-1 overflow-hidden">
                 <div className="text-sm font-bold truncate">CenterHub Admin</div>
                 <div className="text-[10px] font-medium opacity-60 truncate">admin@centerhub.lk</div>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-72">
        <header className="sticky top-0 z-40 h-20 bg-white/70 backdrop-blur-xl border-b border-outline-variant/5 px-10 flex items-center justify-between">
           <div className="relative w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search applications, institutes, or invoices..." 
                className="w-full h-11 pl-12 pr-4 rounded-xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary outline-none text-sm transition-all"
              />
           </div>

           <div className="flex items-center gap-6">
              <button className="relative p-2 text-on-surface-variant hover:text-primary transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-error border-2 border-white"></span>
              </button>
              <div className="h-8 w-[1px] bg-outline-variant/20"></div>
              <div className="flex items-center gap-3">
                 <div className="text-right hidden sm:block">
                    <div className="text-xs font-black">Region: Sri Lanka</div>
                    <div className="text-[10px] font-bold text-emerald-600">All Systems Nominal</div>
                 </div>
                 <BarChart3 className="h-5 w-5 text-on-surface-variant" />
              </div>
           </div>
        </header>

        <main className="p-10">
          {children}
        </main>
      </div>
    </div>
  )
}
