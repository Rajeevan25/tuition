"use client"

import { Bell, Menu, Search, UserPlus, LogOut, User, Settings, ChevronDown } from "lucide-react"
import { useSidebar } from "@/context/SidebarContext"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"

export interface TopBarUser {
  name: string
  role: string
  initials: string
  email?: string
  avatar?: string
}

interface TopBarProps {
  user?: TopBarUser
  quickActionHref?: string
  searchPlaceholder?: string
}

const DEFAULT_USER: TopBarUser = {
  name: "David Sterling",
  role: "Admin",
  initials: "DS",
  email: "account-admin@centerhub.lk"
}

export function TopBar({ 
  user = DEFAULT_USER,
  quickActionHref = "/students/enroll",
  searchPlaceholder = "Search students, classes, or invoices..."
}: TopBarProps) {
  const { toggleSidebar } = useSidebar()
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-outline-variant/5 bg-white/70 backdrop-blur-xl px-6 md:px-10">
      {/* Left: Mobile Menu & Search */}
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={toggleSidebar}
          className="rounded-full p-2 text-on-surface-variant hover:bg-surface-container-high md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        
        <div className="hidden max-w-md flex-1 items-center gap-2 rounded-xl bg-surface-container-low px-4 py-2 border border-outline-variant/10 focus-within:border-primary/30 focus-within:bg-white transition-all md:flex">
          <Search className="h-4 w-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder={searchPlaceholder}
            className="w-full bg-transparent text-sm font-bold outline-none placeholder:text-on-surface-variant opacity-40"
          />
          <kbd className="hidden rounded bg-surface-container-high px-1.5 py-0.5 text-[10px] font-black text-on-surface-variant sm:inline-block">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right: Actions, Notifications, Profile */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Quick Enrollment Button */}
        <Link 
          href={quickActionHref}
          className="hidden items-center gap-2 primary-gradient rounded-xl px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-white shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all sm:flex"
        >
          <UserPlus className="h-3.5 w-3.5" />
          <span>Quick Action</span>
        </Link>

        {/* Mobile Enrollment Icon */}
        <Link 
          href={quickActionHref}
          className="flex items-center justify-center rounded-full p-2 text-primary hover:bg-primary/5 sm:hidden"
        >
          <UserPlus className="h-5 w-5" />
        </Link>

        {/* Notifications */}
        <button className="relative rounded-full p-2 text-on-surface-variant hover:text-primary transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-error"></span>
          </span>
        </button>

        {/* Vertical Divider */}
        <div className="mx-1 h-8 w-px bg-outline-variant/10 md:mx-2 hidden sm:block" />

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 p-1.5 pr-4 rounded-2xl bg-surface-container-low hover:bg-white hover:shadow-md transition-all group border border-transparent hover:border-outline-variant/10"
          >
            <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-black shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform overflow-hidden">
              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
              ) : (
                user.initials
              )}
            </div>
            <div className="hidden flex-col items-start leading-tight md:flex text-left">
              <span className="text-xs font-black text-on-surface">{user.name}</span>
              <span className="text-[9px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">{user.role}</span>
            </div>
            <ChevronDown className={cn("h-3.5 w-3.5 text-on-surface-variant transition-transform duration-200 ml-1 group-hover:text-primary", isProfileOpen && "rotate-180")} />
          </button>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-64 origin-top-right rounded-[2rem] border border-outline-variant/10 bg-white p-3 shadow-2xl animate-in fade-in zoom-in-95 duration-200 z-50">
              <div className="px-4 py-3 mb-2 bg-surface-container-low rounded-2xl">
                <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-60 mb-1">Signed in as</p>
                <p className="text-xs font-bold text-on-surface truncate">{user.email || "No email provided"}</p>
              </div>
              
              <div className="space-y-1">
                <Link 
                  href="/portal/profile/settings" 
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                >
                  <User className="h-4 w-4" /> Profile Details
                </Link>
                <Link 
                  href="/portal/profile/settings" 
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                >
                  <Settings className="h-4 w-4" /> Hub Settings
                </Link>
              </div>
              
              <div className="h-px bg-outline-variant/5 mx-2 my-3" />
              
              <Link 
                href="/portal/login" 
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-black text-error hover:bg-error/5 transition-colors"
              >
                <LogOut className="h-4 w-4" /> Sign Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
