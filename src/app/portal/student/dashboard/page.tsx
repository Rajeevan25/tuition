"use client"

import { 
  Calendar, 
  Clock, 
  CreditCard, 
  Bell, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  PlayCircle,
  FileText,
  User
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function StudentDashboard() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-black text-on-surface tracking-tight">Ayubowan, <span className="text-primary border-b-4 border-primary/10">Amavi</span>!</h1>
          <p className="text-sm text-on-surface-variant font-medium">You have 2 classes today. Your attendance is tracking well at 94%.</p>
        </div>
        
        <div className="flex items-center gap-4 p-4 bg-white rounded-3xl border border-outline-variant/10 shadow-sm">
           <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center font-black">AJ</div>
           <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Science Stream</p>
              <p className="text-sm font-black text-on-surface">A/L 2025 - Group A</p>
           </div>
        </div>
      </div>

      {/* Primary Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatWidget label="Classes Today" value="02" icon={Calendar} color="bg-indigo-50 text-indigo-600" />
        <StatWidget label="Pending Fees" value="Rs. 4,500" icon={CreditCard} color="bg-amber-50 text-amber-600" alert />
        <StatWidget label="Attendance" value="94.2%" icon={CheckCircle2} color="bg-emerald-50 text-emerald-600" />
        <StatWidget label="Avg. Rank" value="#12" icon={Award} color="bg-primary/5 text-primary" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Today's Schedule */}
        <div className="lg:col-span-2 space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-on-surface flex items-center gap-2">
                 <Clock className="h-5 w-5 text-primary" /> Today's Schedule
              </h2>
              <button className="text-xs font-black text-primary uppercase tracking-widest hover:underline">View Full Timetable</button>
           </div>

           <div className="space-y-4">
              <ScheduleItem 
                time="08:30 AM - 10:30 AM"
                title="Advanced Physics - Theory"
                teacher="Kamal Silva"
                type="Online Live"
                active
              />
              <ScheduleItem 
                time="01:00 PM - 03:00 PM"
                title="Chemistry Batch B - Revision"
                teacher="Nimali de Silva"
                type="Physical - Hall A"
              />
           </div>

           {/* Quick Actions / Resources */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="group bg-slate-900 p-6 rounded-[2.5rem] text-white flex flex-col justify-between h-48 hover:scale-[1.02] transition-all cursor-pointer">
                 <PlayCircle className="h-8 w-8 text-indigo-400" />
                 <div className="space-y-1">
                    <h3 className="font-bold">Recorded Sessions</h3>
                    <p className="text-[10px] opacity-60 uppercase tracking-widest">Access past lectures</p>
                 </div>
              </div>
              <div className="group bg-indigo-50 p-6 rounded-[2.5rem] text-indigo-900 flex flex-col justify-between h-48 border border-indigo-100/50 hover:bg-white transition-all cursor-pointer">
                 <FileText className="h-8 w-8 text-indigo-600" />
                 <div className="space-y-1">
                    <h3 className="font-bold">Class Materials</h3>
                    <p className="text-[10px] opacity-60 uppercase tracking-widest font-black">Download PDFs & Notes</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Notices & Sidebar Widgets */}
        <div className="space-y-8">
           <div className="bg-white p-8 rounded-[2.5rem] border border-outline-variant/5 shadow-ambient space-y-6">
              <h2 className="text-lg font-black text-on-surface flex items-center gap-2">
                 <Bell className="h-5 w-5 text-primary" /> Latest Notices
              </h2>
              <div className="space-y-6">
                 <NoticeItem 
                   title="Avurudu Holiday Notice"
                   date="12 Apr 2026"
                   desc="All classes will be suspended from 13th to 16th April..."
                   urgent
                 />
                 <NoticeItem 
                   title="Mock Exam - Units 1-4"
                   date="10 Apr 2026"
                   desc="Chemistry Unit Exam will be held next Sunday at 8 AM."
                 />
                 <NoticeItem 
                   title="New Payment Portal"
                   date="08 Apr 2026"
                   desc="You can now pay 100% online via cards or bank apps."
                 />
              </div>
              <button className="w-full h-12 rounded-2xl bg-surface-container-low text-xs font-black uppercase tracking-widest text-on-surface hover:bg-white border border-outline-variant/10 transition-all">
                 See All Announcements
              </button>
           </div>

           {/* Payment Quick Link */}
           <div className="primary-gradient p-8 rounded-[2.5rem] text-white space-y-4 shadow-xl shadow-primary/20">
              <div className="flex items-center justify-between">
                 <CreditCard className="h-6 w-6" />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Next Due: 28 Apr</span>
              </div>
              <div className="space-y-1">
                 <p className="text-sm font-medium opacity-80">Outstanding Balance</p>
                 <h3 className="text-3xl font-black italic">Rs. 4,500.00</h3>
              </div>
              <button className="w-full h-12 bg-white text-primary rounded-xl font-black text-sm hover:scale-105 transition-all">
                 Pay Now
              </button>
           </div>
        </div>
      </div>
    </div>
  )
}

function StatWidget({ label, value, icon: Icon, color, alert }: any) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-outline-variant/5 shadow-ambient group hover:border-primary/20 transition-all">
       <div className="flex items-center justify-between mb-4">
          <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", color)}>
             <Icon className="h-5 w-5" />
          </div>
          {alert && <div className="h-2 w-2 rounded-full bg-error animate-pulse"></div>}
       </div>
       <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-60">{label}</p>
          <p className="text-2xl font-black text-on-surface">{value}</p>
       </div>
    </div>
  )
}

function ScheduleItem({ time, title, teacher, type, active }: any) {
  return (
    <div className={cn(
      "p-6 rounded-[2rem] border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer",
      active ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" : "bg-white border-outline-variant/5 hover:border-primary/20"
    )}>
       <div className="flex items-start gap-5">
          <div className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center font-black flex-shrink-0",
            active ? "bg-white/20 text-white" : "bg-surface-container-low text-primary"
          )}>
             <BookOpen className="h-6 w-6" />
          </div>
          <div className="space-y-0.5">
             <h4 className="font-bold text-lg">{title}</h4>
             <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs opacity-80 font-medium">
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {time}</span>
                <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {teacher}</span>
             </div>
          </div>
       </div>
       <div className="flex items-center gap-4">
          <div className={cn(
            "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest",
            active ? "bg-white text-primary" : "bg-surface-container-low text-on-surface-variant"
          )}>
             {type}
          </div>
          <ArrowRight className={cn("h-5 w-5 transition-transform group-hover:translate-x-1", active ? "text-white" : "text-primary/40")} />
       </div>
    </div>
  )
}

function NoticeItem({ title, date, desc, urgent }: any) {
  return (
    <div className="space-y-2 group cursor-pointer">
       <div className="flex items-center justify-between">
          <span className={cn("text-[10px] font-black uppercase tracking-widest", urgent ? "text-error" : "text-primary")}>
             {urgent ? "Urgent Update" : "General Notice"}
          </span>
          <span className="text-[10px] font-medium text-on-surface-variant opacity-60">{date}</span>
       </div>
       <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{title}</h4>
       <p className="text-xs text-on-surface-variant font-medium line-clamp-2 leading-relaxed opacity-80">{desc}</p>
    </div>
  )
}
