"use client"

import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Calendar,
  CreditCard,
  MessageSquare,
  ArrowRight,
  TrendingUp,
  FileText,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function TeacherDashboard() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-black text-on-surface tracking-tight">Good Morning, <span className="text-emerald-600 border-b-4 border-emerald-500/10">Kamal</span>!</h1>
          <p className="text-sm text-on-surface-variant font-medium">You have 3 classes scheduled for today across 2 branches.</p>
        </div>
        
        <div className="flex items-center gap-4 p-4 bg-white rounded-3xl border border-outline-variant/10 shadow-sm">
           <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">KS</div>
           <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Faculty Status</p>
              <p className="text-sm font-black text-emerald-700">Senior Lecturer - Active</p>
           </div>
        </div>
      </div>

      {/* Teacher Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatWidget label="Total Students" value="842" icon={Users} color="bg-emerald-50 text-emerald-600" />
        <StatWidget label="Assigned Classes" value="12" icon={BookOpen} color="bg-indigo-50 text-indigo-600" />
        <StatWidget label="Avg. Attendance" value="88%" icon={TrendingUp} color="bg-blue-50 text-blue-600" />
        <StatWidget label="Pending Reports" value="03" icon={AlertCircle} color="bg-amber-50 text-amber-600" alert />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Classes Today */}
        <div className="lg:col-span-2 space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-on-surface flex items-center gap-2">
                 <Calendar className="h-5 w-5 text-emerald-600" /> Schedule for Today
              </h2>
           </div>

           <div className="space-y-4">
              <TeacherClassItem 
                time="08:30 AM"
                title="A/L Physics 2025 - Theory"
                branch="Colombo 03"
                students="152"
                status="Mark Attendance"
                urgent
              />
              <TeacherClassItem 
                time="01:00 PM"
                title="A/L Physics 2026 - Basics"
                branch="Online Live"
                students="84"
                status="Upcoming"
              />
              <TeacherClassItem 
                time="04:30 PM"
                title="Revision Batch - Papers"
                branch="Gampaha"
                students="210"
                status="Next Session"
              />
           </div>

           {/* Quick Actions */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <ActionCard title="Upload Materials" icon={FileText} desc="PDFs, Notes, Papers" />
              <ActionCard title="Mark Results" icon={CheckCircle2} desc="Exam & Quiz Scores" />
              <ActionCard title="Post Notice" icon={MessageSquare} desc="To assigned batches" />
           </div>
        </div>

        {/* Faculty Sidebar */}
        <div className="space-y-8">
           {/* Payout Summary */}
           <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white space-y-6 shadow-xl shadow-emerald-900/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full -mr-10 -mt-10"></div>
              <div className="flex items-center justify-between relative z-10">
                 <CreditCard className="h-6 w-6 text-emerald-400" />
                 <span className="text-[10px] font-black uppercase tracking-widest opacity-60">April Earnings</span>
              </div>
              <div className="space-y-1 relative z-10">
                 <p className="text-xs font-medium opacity-60">Projected Payout</p>
                 <h3 className="text-3xl font-black italic tracking-tight">Rs. 185,400.00</h3>
              </div>
              <button className="w-full h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
                 View Breakdown
              </button>
           </div>

           {/* Pending Tasks */}
           <div className="bg-white p-8 rounded-[2.5rem] border border-outline-variant/5 shadow-ambient space-y-6">
              <h2 className="text-lg font-black text-on-surface">Compliance Tasks</h2>
              <div className="space-y-4">
                 <TaskItem title="Upload Syllabus Progress" due="Today" urgent />
                 <TaskItem title="Attendance for 12 Apr" due="2 days ago" urgent />
                 <TaskItem title="Submit MCQ Answers (L5)" due="Tomorrow" />
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

function StatWidget({ label, value, icon: Icon, color, alert }: any) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-outline-variant/5 shadow-ambient group hover:border-emerald-500/20 transition-all">
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

function TeacherClassItem({ time, title, branch, students, status, urgent }: any) {
  return (
    <div className="p-6 rounded-[2.5rem] bg-white border border-outline-variant/5 hover:border-emerald-500/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer shadow-sm hover:shadow-md">
       <div className="flex items-start gap-6">
          <div className="w-14 h-14 rounded-2xl bg-surface-container-low text-emerald-600 flex flex-col items-center justify-center">
             <span className="text-xs font-black uppercase tracking-tighter opacity-60">START</span>
             <span className="text-sm font-black italic">{time.split(' ')[0]}</span>
          </div>
          <div className="space-y-1">
             <h4 className="font-bold text-lg text-on-surface group-hover:text-emerald-700 transition-colors">{title}</h4>
             <div className="flex items-center gap-4 text-xs font-medium text-on-surface-variant opacity-60">
                <span className="flex items-center gap-1.5"><Building className="h-3.5 w-3.5" /> {branch}</span>
                <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> {students} Enrolled</span>
             </div>
          </div>
       </div>
       <div className="flex items-center gap-4">
          <div className={cn(
            "px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest",
            urgent ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 animate-pulse" : "bg-surface-container-low text-on-surface-variant"
          )}>
             {status}
          </div>
          <ChevronRight className="h-5 w-5 text-on-surface-variant opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
       </div>
    </div>
  )
}

function ActionCard({ title, icon: Icon, desc }: any) {
  return (
    <div className="p-6 rounded-[2rem] bg-white border border-outline-variant/10 hover:border-emerald-500/30 hover:bg-emerald-50/50 transition-all cursor-pointer group text-center space-y-3">
       <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
          <Icon className="h-6 w-6" />
       </div>
       <div className="space-y-0.5">
          <h4 className="text-xs font-black text-on-surface">{title}</h4>
          <p className="text-[10px] font-medium text-on-surface-variant opacity-60">{desc}</p>
       </div>
    </div>
  )
}

function TaskItem({ title, due, urgent }: any) {
  return (
    <div className="flex items-start gap-3 group cursor-pointer border-b border-outline-variant/5 pb-4 last:border-0 last:pb-0">
       <div className={cn("mt-1 flex-shrink-0 w-2 h-2 rounded-full", urgent ? "bg-error" : "bg-emerald-500")}></div>
       <div className="flex-1 space-y-0.5">
          <p className="text-sm font-bold text-on-surface group-hover:text-emerald-600 transition-colors">{title}</p>
          <p className="text-[10px] font-medium text-on-surface-variant opacity-60">Due: {due}</p>
       </div>
    </div>
  )
}

function Building({ className }: { className?: string }) {
  return <span className={cn("material-symbols-outlined text-[18px]", className)}>apartment</span>
}
