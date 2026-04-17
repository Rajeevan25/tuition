"use client"

import { usePathname } from "next/navigation"
import { 
  Home, 
  BookOpen, 
  Mail, 
  User, 
  Bell, 
  HelpCircle,
  Settings,
  LayoutDashboard,
  GraduationCap,
  Calendar,
  FileText,
  MessageSquare,
  Users,
  CreditCard,
  ClipboardCheck,
  Award,
  TrendingUp,
  BookMarked,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SidebarProvider, useSidebar } from "@/context/SidebarContext"
import { Sidebar, SidebarItem } from "@/components/dashboard/Sidebar"
import { TopBar, TopBarUser } from "@/components/dashboard/TopBar"

function PortalContent({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const { isSidebarOpen, closeSidebar } = useSidebar()

  // Skip this shared dashboard layout for onboarding/application flows
  if (pathname.startsWith("/portal/application") || pathname.startsWith("/portal/setup")) {
    return <>{children}</>
  }

  // Determine role and navigation based on pathname
  const isAdmin = pathname.includes("/portal/admin")
  const isTeacher = pathname.includes("/portal/teacher")
  const isStudent = pathname.includes("/portal/student")

  let navLinks: SidebarItem[] = [
    { label: "Home", href: "/portal/dashboard", icon: Home },
    { label: "Classes", href: "/portal/classes", icon: BookOpen },
    { label: "Inbox", href: "/portal/inbox", icon: Mail },
    { label: "Profile", href: "/portal/profile", icon: User },
  ]

  if (isAdmin) {
    navLinks = [
      { label: "Overview", href: "/portal/admin/dashboard", icon: LayoutDashboard },
      { label: "Students", href: "/portal/admin/management?role=student", icon: Users },
      { label: "Teachers", href: "/portal/admin/management?role=teacher", icon: GraduationCap },
      { label: "Subjects", href: "/portal/admin/subjects", icon: BookMarked },
      { label: "Batches", href: "/portal/admin/batches", icon: BookOpen },
      { label: "Timetable", href: "/portal/admin/timetable", icon: Calendar },
      { label: "Attendance", href: "/portal/admin/attendance", icon: ClipboardCheck },
      { label: "Payments", href: "/portal/admin/payments", icon: CreditCard },
      { label: "Reports", href: "/portal/admin/reports", icon: TrendingUp },
      { label: "Notices", href: "/portal/admin/notices", icon: Bell },
    ]
  } else if (isTeacher) {
    navLinks = [
      { label: "Dashboard", href: "/portal/teacher/dashboard", icon: LayoutDashboard },
      { label: "My Classes", href: "/portal/teacher/classes", icon: BookOpen },
      { label: "Attendance", href: "/portal/teacher/attendance", icon: ClipboardCheck },
      { label: "Timetable", href: "/portal/teacher/timetable", icon: Calendar },
      { label: "Materials", href: "/portal/teacher/materials", icon: FileText },
      { label: "Salary", href: "/portal/teacher/salary", icon: CreditCard },
    ]
  } else if (isStudent) {
    navLinks = [
      { label: "Dashboard", href: "/portal/student/dashboard", icon: LayoutDashboard },
      { label: "My Timetable", href: "/portal/student/timetable", icon: Calendar },
      { label: "Payments", href: "/portal/student/payments", icon: CreditCard },
      { label: "Attendance", href: "/portal/student/attendance", icon: ClipboardCheck },
      { label: "Results", href: "/portal/student/results", icon: Award },
      { label: "Notices", href: "/portal/student/notices", icon: MessageSquare },
    ]
  }

  const footerLinks: SidebarItem[] = [
    { label: "Settings", href: isAdmin ? "/portal/admin/settings" : "/portal/profile/settings", icon: Settings },
    { label: "Help", href: "/portal/help", icon: HelpCircle },
  ]

  const userProfile: TopBarUser = {
    name: isAdmin ? "Nimal Perera" : isTeacher ? "Kamal Silva" : "Amavi Jayasinghe",
    role: isAdmin ? "Institute Owner" : isTeacher ? "Senior Teacher" : "Advanced Level Student",
    initials: isAdmin ? "NP" : isTeacher ? "KS" : "AJ",
    email: isAdmin ? "nimal@bright-horizon.lk" : isTeacher ? "kamal@bright-horizon.lk" : "amavi@centerhub.lk"
  }

  return (
    <div className="flex min-h-screen bg-surface font-body">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-on-surface/20 backdrop-blur-sm lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar Container */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 w-64",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <button 
          className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
          onClick={closeSidebar}
        >
          <X className="h-5 w-5" />
        </button>
        <Sidebar 
          items={navLinks} 
          footerItems={footerLinks}
          logoHref={isAdmin ? "/portal/admin/dashboard" : "/portal/dashboard"}
          quickActionLabel={isAdmin ? "Quick Enrollment" : "Quick Support"}
          quickActionHref={isAdmin ? "/portal/admin/management?action=add" : "/portal/help"}
          className="h-full border-r border-slate-200/60" 
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        <TopBar 
          user={userProfile} 
          quickActionHref={isAdmin ? "/portal/admin/management?action=add" : "/portal/help"}
          searchPlaceholder={isAdmin ? "Search students, classes, or payments..." : "Search classes or notices..."}
        />
        <main className="flex-1 p-6 md:p-10 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default function PortalClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <PortalContent>{children}</PortalContent>
    </SidebarProvider>
  )
}
