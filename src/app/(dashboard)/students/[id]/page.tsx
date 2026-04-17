"use client"

import { useParams, useRouter } from "next/navigation"
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  GraduationCap, 
  Fingerprint, 
  CheckCircle2, 
  MessageSquare, 
  Edit3,
  Calendar,
  Wallet,
  TrendingUp,
  ChevronRight,
  BookOpen,
  FlaskConical,
  Languages,
  MoreVertical,
  User
} from "lucide-react"
import { cn } from "@/lib/utils"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"

export default function StudentProfilePage() {
  const params = useParams()
  const router = useRouter()
  
  // Mock data based on Stitch UI
  const student = {
    id: params.id,
    name: "Dilshan Perera",
    grade: "A/L 2025 (Physical Science)",
    regId: `CH-SL-${params.id || '8891'}`,
    status: "Active",
    attendanceRate: "94%",
    balance: "Rs. 12,400.00",
    gpa: "3.82",
    parentName: "Mr. Sunil Perera (Father)",
    parentPhone: "+94 77 123 4567",
    parentEmail: "sunil.p@email.lk",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dilshan"
  }

  return (
    <main className="min-h-screen pb-24 md:pb-12 bg-surface">
      {/* Header Section: Profile Summary */}
      <header className="bg-surface-container-low px-6 pt-20 md:pt-12 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center md:items-end md:flex-row gap-8">
          <button 
            onClick={() => router.back()}
            className="absolute top-24 left-6 md:static p-2 rounded-full bg-white shadow-sm hover:bg-slate-50 md:hidden"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="relative group">
            <img 
              alt={student.name} 
              className="w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] object-cover shadow-2xl shadow-indigo-100 ring-8 ring-white/50" 
              src={student.avatar} 
            />
            <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-10 h-10 rounded-full border-4 border-surface-container-low flex items-center justify-center shadow-lg">
              <CheckCircle2 className="text-white h-5 w-5" />
            </div>
          </div>

          <div className="text-center md:text-left flex-1 space-y-3">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <h1 className="text-4xl md:text-6xl font-black font-headline tracking-tight text-on-surface">
                {student.name}
              </h1>
              <span className="px-4 py-1.5 bg-primary-fixed text-on-primary-fixed rounded-full text-[10px] font-black uppercase tracking-widest">
                {student.status}
              </span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-2 text-on-surface-variant font-bold text-sm">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span>{student.grade}</span>
              </div>
              <div className="flex items-center gap-2">
                <Fingerprint className="h-5 w-5 text-primary" />
                <span>ID: {student.regId}</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex gap-4">
            <button className="bg-surface-container-lowest text-primary px-8 py-4 rounded-full font-bold shadow-sm hover:scale-[1.02] active:scale-95 transition-all">
              Message Parent
            </button>
            <button className="primary-gradient text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
              Edit Profile
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs (Static for UI Demo) */}
      <nav className="max-w-6xl mx-auto -mt-10 px-6 relative z-10">
        <div className="bg-white/80 backdrop-blur-2xl p-2 rounded-[2.5rem] shadow-xl shadow-indigo-100/50 flex items-center gap-1 overflow-x-auto no-scrollbar border border-white/50">
          <button className="flex-1 min-w-[140px] py-4 px-6 bg-primary text-white rounded-[2rem] font-bold text-sm tracking-tight shadow-lg shadow-primary/20">Overview</button>
          <button className="flex-1 min-w-[170px] py-4 px-6 text-on-surface-variant hover:text-primary font-bold text-sm transition-all rounded-full hover:bg-slate-50">Attendance History</button>
          <button className="flex-1 min-w-[170px] py-4 px-6 text-on-surface-variant hover:text-primary font-bold text-sm transition-all rounded-full hover:bg-slate-50">Payment History</button>
          <button className="flex-1 min-w-[160px] py-4 px-6 text-on-surface-variant hover:text-primary font-bold text-sm transition-all rounded-full hover:bg-slate-50">Performance</button>
        </div>
      </nav>

      {/* Content Grid (Bento Style) */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Summary Metrics */}
          <div className="md:col-span-4 space-y-8">
            <div className="bg-surface-container-lowest p-8 rounded-[3rem] shadow-sm relative overflow-hidden group border border-slate-50 hover:shadow-xl hover:shadow-indigo-100/30 transition-all duration-500">
              <div className="relative z-10">
                <p className="text-[10px] font-black text-outline uppercase tracking-[0.2em] mb-2">Attendance Rate</p>
                <h3 className="text-5xl font-black font-headline text-on-surface tracking-tighter">{student.attendanceRate}</h3>
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-emerald-600 font-black text-xs flex items-center bg-emerald-50 px-3 py-1 rounded-full uppercase">
                    <TrendingUp className="h-3 w-3 mr-1" /> +2.4%
                  </span>
                  <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest opacity-60">Term Change</span>
                </div>
              </div>
              <Calendar className="absolute -right-8 -bottom-8 h-40 w-40 text-primary/5 group-hover:scale-110 transition-transform duration-700" />
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-[3rem] shadow-sm relative overflow-hidden border border-slate-50 group transition-all hover:bg-white hover:shadow-xl">
              <div className="relative z-10">
                <p className="text-[10px] font-black text-outline uppercase tracking-[0.2em] mb-2">Total Balance</p>
                <h3 className="text-5xl font-black font-headline text-on-surface tracking-tighter">{student.balance}</h3>
                <div className="mt-6">
                  <span className="px-4 py-2 bg-error-container text-on-error-container rounded-full text-[10px] font-black uppercase tracking-widest">Due in 4 days</span>
                </div>
              </div>
              <Wallet className="absolute -right-8 -bottom-8 h-40 w-40 text-primary/5 group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>

          {/* Enrolled Classes */}
          <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-[3rem] shadow-sm border border-slate-50">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h4 className="text-2xl font-black font-headline tracking-tight">Enrolled Classes</h4>
                <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mt-1 opacity-60">Spring Semester 2024</p>
              </div>
              <button className="p-3 rounded-2xl bg-surface-container-low text-primary hover:bg-primary hover:text-white transition-all">
                <Calendar className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              {[
                { name: "A/L Combined Mathematics", time: "Mon, Wed, Fri • 04:30 PM", tutor: "Mr. Nimal Perera", room: "Auditorium", icon: BookOpen, color: "text-indigo-600", bg: "bg-indigo-50" },
                { name: "A/L Physics 2026", time: "Tue, Thu • 03:00 PM", tutor: "Mrs. Jayawardena", room: "Lab A", icon: FlaskConical, color: "text-emerald-600", bg: "bg-emerald-50" },
                { name: "O/L Sinhala Literature", time: "Sat • 08:00 AM", tutor: "Ms. Tharushi Silva", room: "Room 105", icon: Languages, color: "text-rose-600", bg: "bg-rose-50" },
              ].map((item, i) => (
                <div key={i} className="flex items-center p-6 bg-surface-container-low/50 rounded-3xl hover:bg-white hover:shadow-lg transition-all cursor-pointer group border border-transparent hover:border-indigo-100/50">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner", item.bg, item.color)}>
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div className="ml-6 flex-1">
                    <h5 className="text-lg font-black text-on-surface group-hover:text-primary transition-colors">{item.name}</h5>
                    <p className="text-sm font-bold text-on-surface-variant mt-0.5">{item.time}</p>
                  </div>
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-black text-on-surface">{item.tutor}</p>
                    <p className="text-[10px] text-outline font-black uppercase tracking-widest mt-1">{item.room}</p>
                  </div>
                  <ChevronRight className="ml-6 h-6 w-6 text-slate-300 group-hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Parental Contact */}
          <div className="md:col-span-12 lg:col-span-7 bg-surface-container-lowest p-10 rounded-[3rem] shadow-sm border border-slate-50">
            <h4 className="text-2xl font-black font-headline mb-10 tracking-tight">Parental Contact</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-[1.25rem] bg-surface-container-low flex-shrink-0 flex items-center justify-center text-primary shadow-inner">
                  <User className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-outline uppercase tracking-widest">Primary Contact</p>
                  <h5 className="text-lg font-black text-on-surface">{student.parentName}</h5>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-on-surface-variant flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary/40" /> {student.parentPhone}
                    </p>
                    <p className="text-sm font-bold text-primary flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary/40" /> {student.parentEmail}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-[1.25rem] bg-surface-container-low flex-shrink-0 flex items-center justify-center text-primary shadow-inner">
                  <MessageSquare className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-outline uppercase tracking-widest">Emergency Protocol</p>
                  <h5 className="text-lg font-black text-on-surface">Call Father first</h5>
                  <p className="text-sm font-bold text-on-surface-variant">+1 (555) 098-4423</p>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] rounded-lg font-black uppercase tracking-widest mt-2 ring-1 ring-emerald-100">
                    <CheckCircle2 className="h-3 w-3" /> Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Performance */}
          <div className="md:col-span-12 lg:col-span-5 primary-gradient p-10 rounded-[3.5rem] text-white shadow-2xl shadow-primary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-full h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-2xl font-black font-headline tracking-tight">Term GPA</h4>
                <TrendingUp className="h-8 w-8 opacity-40 group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-7xl font-black font-headline tracking-tighter">{student.gpa}</span>
                <span className="text-primary-fixed opacity-60 font-black text-xl">/ 4.0</span>
              </div>
              <p className="text-on-primary-container font-bold leading-relaxed mb-auto">
                Elena is performing in the top 5% of her cohort this semester.
              </p>
              
              <div className="mt-12 space-y-4">
                <div className="h-3 w-full bg-white/20 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-white rounded-full transition-all duration-1000" style={{ width: '82%' }}></div>
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
                  <span>Current Rank: 12th</span>
                  <span>Total Cohort: 248</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
