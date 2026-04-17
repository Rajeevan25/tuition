"use client"

import { useState } from "react"
import { 
  Bell, 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  ArrowRight, 
  AlertCircle,
  Megaphone,
  BookOpen,
  CreditCard,
  ChevronRight,
  Bookmark
} from "lucide-react"
import { cn } from "@/lib/utils"

const NOTICES = [
  { 
    id: "N1", 
    title: "Avurudu Holiday Notice 2026", 
    category: "Administrative", 
    date: "Apr 12, 2026", 
    time: "10:30 AM",
    urgent: true,
    content: "All classes will be suspended from 13th to 16th April for the Sinhala & Tamil New Year holidays. Regular sessions will resume on April 17th.",
    icon: Calendar,
    color: "text-rose-600 bg-rose-50"
  },
  { 
    id: "N2", 
    title: "Mock Exam - Physics Unit 4", 
    category: "Academic", 
    date: "Apr 10, 2026", 
    time: "02:20 PM",
    urgent: false,
    content: "The monthly physics mock exam for unit 4 will be held this Sunday at the Main Hall. Please bring your student ID and calculators.",
    icon: BookOpen,
    color: "text-indigo-600 bg-indigo-50"
  },
  { 
    id: "N3", 
    title: "New Online Payment System", 
    category: "General", 
    date: "Apr 08, 2026", 
    time: "09:00 AM",
    urgent: false,
    content: "You can now settle your monthly fees directly through the student portal using any Credit/Debit card. Instant receipt will be generated.",
    icon: CreditCard,
    color: "text-emerald-600 bg-emerald-50"
  },
  { 
    id: "N4", 
    title: "Scholarship Applications Open", 
    category: "Events", 
    date: "Apr 05, 2026", 
    time: "11:15 AM",
    urgent: false,
    content: "Applications for the 2026 Academic Excellence Scholarships are now open. Visit the office for more information on eligibility.",
    icon: Megaphone,
    color: "text-amber-600 bg-amber-50"
  },
]

export default function StudentNoticesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Academic", "Administrative", "General", "Events"]

  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface tracking-tight italic flex items-center gap-3">
             <Bell className="h-8 w-8 text-primary" /> Notice Center
          </h1>
          <p className="text-sm text-on-surface-variant font-medium">Stay updated with the latest institutional announcements and academic alerts.</p>
        </div>
        
        <div className="flex items-center gap-2 bg-surface-container-low p-1.5 rounded-2xl border border-outline-variant/10">
           <button className="px-6 py-2 bg-white text-primary rounded-xl text-xs font-black uppercase tracking-widest shadow-sm">Active</button>
           <button className="px-6 py-2 text-on-surface-variant opacity-60 text-xs font-black uppercase tracking-widest hover:opacity-100 transition-opacity">Archived</button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
         <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap",
                  selectedCategory === cat 
                    ? "bg-slate-900 text-white shadow-lg" 
                    : "bg-white text-on-surface-variant border border-outline-variant/10 shadow-sm hover:bg-surface-container-low"
                )}
              >
                {cat}
              </button>
            ))}
         </div>
         <div className="flex-1 w-full max-w-sm relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search announcements..."
              className="w-full h-11 pl-12 pr-4 rounded-2xl bg-white border border-outline-variant/10 shadow-sm outline-none focus:ring-2 focus:ring-primary/20 text-sm font-medium"
            />
         </div>
      </div>

      {/* Notice Feed */}
      <div className="space-y-6">
         {NOTICES.map((notice) => (
           <div key={notice.id} className="group bg-white rounded-[2.5rem] p-8 border border-outline-variant/10 shadow-ambient flex flex-col md:flex-row gap-8 hover:border-primary/20 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
              {notice.urgent && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
              )}
              
              <div className={cn(
                "w-16 h-16 rounded-[2rem] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500",
                notice.color
              )}>
                 <notice.icon className="h-8 w-8" />
              </div>

              <div className="flex-1 space-y-4">
                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                       <p className={cn(
                         "text-[10px] font-black uppercase tracking-widest",
                         notice.urgent ? "text-rose-600" : "text-primary"
                       )}>
                          {notice.urgent ? "Urgent Update" : notice.category}
                       </p>
                       <h3 className="text-xl font-black text-on-surface tracking-tight group-hover:text-primary transition-colors italic">{notice.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">
                       <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {notice.date}
                       </div>
                       <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {notice.time}
                       </div>
                    </div>
                 </div>

                 <p className="text-sm text-on-surface-variant font-medium leading-relaxed opacity-80 max-w-3xl">
                    {notice.content}
                 </p>

                 <div className="pt-4 flex items-center gap-6">
                    <button className="flex items-center gap-2 text-xs font-black text-primary hover:gap-3 transition-all">
                       Read Full Announcement <ArrowRight className="h-4 w-4" />
                    </button>
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-40 hover:opacity-100 transition-all">
                       <Bookmark className="h-3.5 w-3.5" /> Save Notice
                    </button>
                 </div>
              </div>
           </div>
         ))}
      </div>

      {/* Quick Links Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-outline-variant/10">
         <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white flex items-center justify-between group cursor-pointer hover:bg-slate-800 transition-colors">
            <div className="flex items-center gap-5">
               <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-indigo-400" />
               </div>
               <div>
                  <h4 className="font-bold text-lg">Contact Support</h4>
                  <p className="text-xs opacity-60">Need help with an announcement?</p>
               </div>
            </div>
            <ChevronRight className="h-6 w-6 opacity-40 group-hover:translate-x-1 transition-transform" />
         </div>
         
         <div className="bg-primary/5 rounded-[2.5rem] p-8 border border-primary/10 flex items-center justify-between group cursor-pointer hover:bg-white transition-colors shadow-sm">
            <div className="flex items-center gap-5">
               <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Megaphone className="h-6 w-6" />
               </div>
               <div>
                  <h4 className="font-black text-lg text-on-surface">Feedback Hub</h4>
                  <p className="text-xs text-on-surface-variant opacity-60">Suggestions for the institute</p>
               </div>
            </div>
            <ChevronRight className="h-6 w-6 text-primary opacity-40 group-hover:translate-x-1 transition-transform" />
         </div>
      </div>
    </div>
  )
}
