"use client"

import { Bell, Menu, Share2 } from "lucide-react"
import { useSidebar } from "@/context/SidebarContext"

interface HeaderProps {
  title?: string
  subtitle?: string
}

export function DashboardHeader({ title, subtitle }: HeaderProps) {
  return (
    <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface md:text-4xl">
          {title || "Admin Dashboard"}
        </h1>
        <p className="font-body font-medium text-on-surface-variant max-w-2xl">
          {subtitle || "Welcome back, here's what's happening today at the hub."}
        </p>
      </div>

      <div className="hidden items-center gap-1 -space-x-2 sm:flex">
        {[1, 2, 3].map((i) => (
          <img
            key={i}
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=member${i}`}
            alt="Team Member"
            className="h-10 w-10 rounded-full border-2 border-white"
          />
        ))}
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-indigo-50 text-[10px] font-bold text-primary">
          +8
        </div>
      </div>
    </header>
  )
}
