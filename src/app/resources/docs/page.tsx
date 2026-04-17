"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { HelpCircle, ArrowLeft, Search, Book, Code, Shield, LifeBuoy, ChevronRight, X } from "lucide-react"
import { Footer } from "@/components/layout/Footer"

export default function DocumentationPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSection, setActiveSection] = useState("Getting Started")
  const sections = [
    {
      title: "Getting Started",
      icon: Book,
      color: "text-amber-600",
      bg: "bg-amber-50",
      items: ["Platform Overview", "Initial Setup", "Account Verification", "Managing Your Profile"]
    },
    {
      title: "Core Modules",
      icon: LifeBuoy,
      color: "text-blue-600",
      bg: "bg-blue-50",
      items: ["Class Management", "Student Information System", "Teacher Portals", "Attendance Tracking"]
    },
    {
      title: "Finance & Billing",
      icon: Shield,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      items: ["Invoicing", "Automated Payments", "Late Fee Management", "Tax Configuration"]
    },
    {
      title: "Developer Tools",
      icon: Code,
      color: "text-slate-600",
      bg: "bg-slate-50",
      items: ["Webhooks", "REST API Reference", "Custom Integrations", "Database Exports"]
    }
  ]

  const filteredSections = useMemo(() => {
    if (!searchQuery) return sections
    return sections.map(section => ({
      ...section,
      items: section.items.filter(item => 
        item.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(section => section.items.length > 0)
  }, [searchQuery, sections])

  return (
    <div className="bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden min-h-screen flex flex-col">
       {/* Navbar */}
       <nav className="fixed top-0 z-50 w-full border-b border-outline-variant/5 bg-white/70 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl justify-between items-center">
          <Link href="/" className="font-headline text-2xl font-black tracking-tighter text-indigo-600">CenterHub</Link>
          <div className="hidden items-center gap-x-8 font-headline font-semibold tracking-tight md:flex">
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/platform">Platform</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/solutions">Solutions</Link>
            <Link className="text-indigo-600" href="/resources">Resources</Link>
            <Link className="text-slate-600 hover:text-indigo-500 transition-colors" href="/pricing">Pricing</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden font-semibold text-slate-600 hover:text-indigo-600 transition-colors sm:block">Log In</Link>
            <Link href="/register" className="primary-gradient rounded-full px-6 py-2.5 font-bold text-white shadow-lg shadow-indigo-200 transition-all active:scale-95">Start Free</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 flex-grow">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Sidebar (Mobile Hidden / Tablet+ Visible) */}
            <aside className="hidden lg:block w-72 shrink-0 space-y-10 sticky top-32 h-fit">
              <Link href="/resources" className="inline-flex items-center gap-2 text-amber-600 font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all">
                <ArrowLeft className="h-4 w-4" /> Back
              </Link>
              
              <div className="space-y-6">
                 {sections.map((section, i) => (
                   <div key={i} className="space-y-3">
                      <div 
                        onClick={() => setActiveSection(section.title)}
                        className={`flex items-center gap-3 text-[10px] font-black uppercase tracking-widest cursor-pointer transition-colors ${activeSection === section.title ? 'text-amber-600' : 'text-on-surface-variant/60 hover:text-on-surface-variant'}`}
                      >
                         <section.icon className="h-3 w-3" />
                         {section.title}
                      </div>
                      <ul className={`space-y-2 border-l-2 ml-1.5 pl-4 transition-colors ${activeSection === section.title ? 'border-amber-600/30' : 'border-outline-variant/10'}`}>
                         {section.items.map((item, j) => (
                           <li key={j} className={`text-sm font-medium transition-colors cursor-pointer ${activeSection === section.title ? 'text-on-surface' : 'text-on-surface-variant'} hover:text-amber-600`}>
                              {item}
                           </li>
                         ))}
                      </ul>
                   </div>
                 ))}
              </div>

            </aside>

            {/* Content Area */}
            <div className="flex-grow">
              <header className="mb-16 space-y-8">
                <h1 className="font-headline text-5xl font-black tracking-tighter text-on-surface lg:text-7xl">
                  Product <span className="text-amber-600">Documentation</span>.
                </h1>
                
                {/* Search Bar */}
                <div className="relative max-w-2xl group">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface-variant/40 group-focus-within:text-amber-600 transition-colors" />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for articles, guides, or API endpoints..." 
                    className="w-full bg-surface-container-low border border-outline-variant/10 py-5 pl-16 pr-6 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500/30 transition-all text-on-surface"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-6 top-1/2 -translate-y-1/2 text-on-surface-variant/40 hover:text-amber-600 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]">
                {filteredSections.length > 0 ? (
                  filteredSections.map((section, i) => (
                    <div key={i} className="bg-surface-container-low/50 p-8 rounded-[3rem] border border-outline-variant/5 hover:bg-white hover:shadow-xl transition-all group animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                        <div className={`p-4 rounded-3xl w-fit mb-6 ${section.bg} ${section.color}`}>
                          <section.icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-black tracking-tight text-on-surface mb-6">{section.title}</h3>
                        <ul className="space-y-4">
                          {section.items.slice(0, 3).map((item, j) => (
                            <li key={j} className="flex justify-between items-center group/item cursor-pointer">
                                <span className="font-medium text-on-surface-variant group-hover/item:text-amber-600 transition-colors">{item}</span>
                                <ChevronRight className="h-4 w-4 text-outline-variant group-hover/item:text-amber-600 group-hover/item:translate-x-1 transition-all" />
                            </li>
                          ))}
                        </ul>
                        <button className="mt-8 text-amber-600 font-bold text-xs uppercase tracking-widest hover:underline px-0 transition-all">View All {section.items.length} Articles</button>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-20 flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                    <div className="p-6 bg-slate-50 rounded-full mb-4">
                      <Search className="h-10 w-10 text-slate-300" />
                    </div>
                    <h3 className="text-xl font-bold">No results found</h3>
                    <p>Try adjusting your search query or browsing the categories.</p>
                  </div>
                )}
              </div>


              {/* Help Banner */}
              <div className="mt-20 p-12 bg-surface-container-low rounded-[3.5rem] border border-outline-variant/5 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-2xl font-black tracking-tight">Can't find what you're looking for?</h3>
                    <p className="text-on-surface-variant font-medium">Our support team is available 24/7 to assist you with any questions.</p>
                 </div>
                 <button className="bg-amber-600 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-lg shadow-amber-200 hover:scale-105 active:scale-95 transition-all">Contact Support</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
