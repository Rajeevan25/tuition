"use client"

import { SidebarProvider, useSidebar } from "@/context/SidebarContext"
import { TopBar } from "@/components/dashboard/TopBar"
import { Sidebar } from "@/components/dashboard/Sidebar"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { isSidebarOpen, closeSidebar } = useSidebar()

  return (
    <div className="flex min-h-screen bg-surface font-body">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-on-surface/20 backdrop-blur-sm md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar Container */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out md:translate-x-0 w-64",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <button 
          className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:bg-slate-100 md:hidden"
          onClick={closeSidebar}
        >
          <X className="h-5 w-5" />
        </button>
        <Sidebar className="h-full border-r border-slate-200/60" />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col md:pl-64 overflow-x-hidden min-h-screen">
        <TopBar />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <DashboardContent>{children}</DashboardContent>
    </SidebarProvider>
  )
}
