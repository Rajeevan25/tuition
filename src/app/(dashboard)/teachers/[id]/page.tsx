"use client"

import { useParams, useRouter } from "next/navigation"
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Users, 
  Star, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Atom, 
  Pi, 
  BookOpen,
  Plus,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Award
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function TeacherProfilePage() {
  const params = useParams()
  const router = useRouter()
  
  // Mock data based on Stitch UI
  const teacher = {
    id: params.id,
    name: "Mrs. Dilini Jayawardena",
    role: "Senior A/L Physics Lead",
    classes: 12,
    studentCount: 280,
    rating: 4.9,
    email: "dilini.j@centerhub.lk",
    phone: "+94 11 234 5678",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dilini",
    bio: "Mrs. Jayawardena has over 15 years of experience in G.C.E. A/L Physics education. She specializes in Mechanics and Electronics and has helped thousands of students achieve 'A' grades in the national exam. She is committed to making complex concepts simple."
  }

  return (
    <main className="min-h-screen pb-24 md:pb-12 bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-12 space-y-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 md:pt-0">
          <div className="space-y-2">
            <button 
              onClick={() => router.back()}
              className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-4 hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Faculty
            </button>
            <h1 className="text-4xl md:text-5xl font-black font-headline tracking-tight text-on-surface">Teacher Profile</h1>
            <p className="text-on-surface-variant font-bold text-lg">Manage faculty details and academic scheduling</p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-surface-container-high text-on-surface font-bold rounded-full hover:bg-surface-container-highest transition-all shadow-sm">
              Export Data
            </button>
            <button className="primary-gradient text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Bento Layout Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-surface-container-lowest rounded-[3rem] p-10 shadow-sm border border-slate-50 transition-all hover:shadow-xl hover:shadow-indigo-100/30">
              <div className="flex flex-col items-center text-center">
                <div className="relative group">
                  <img 
                    className="w-36 h-36 md:w-44 md:h-44 rounded-[2.5rem] object-cover shadow-2xl shadow-indigo-100 ring-8 ring-white" 
                    src={teacher.avatar} 
                  />
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-emerald-500 border-4 border-white rounded-full flex items-center justify-center text-white shadow-lg">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                </div>
                <h2 className="mt-8 text-3xl font-black font-headline text-on-surface tracking-tight">{teacher.name}</h2>
                <p className="text-primary font-black text-[10px] tracking-[0.2em] mt-2 uppercase">{teacher.role}</p>
                
                <div className="mt-8 w-full flex justify-between border-t border-surface-container pt-8">
                  <div className="text-center flex-1 border-r border-surface-container">
                    <p className="text-2xl font-black text-on-surface">{teacher.classes}</p>
                    <p className="text-[10px] font-black text-outline uppercase tracking-widest mt-1">Classes</p>
                  </div>
                  <div className="text-center flex-1 border-r border-surface-container">
                    <p className="text-2xl font-black text-on-surface">{teacher.studentCount}</p>
                    <p className="text-[10px] font-black text-outline uppercase tracking-widest mt-1">Students</p>
                  </div>
                  <div className="text-center flex-1">
                    <p className="text-2xl font-black text-on-surface">{teacher.rating}</p>
                    <p className="text-[10px] font-black text-outline uppercase tracking-widest mt-1">Rating</p>
                  </div>
                </div>

                <div className="mt-10 w-full space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl transition-all hover:bg-white hover:shadow-md cursor-pointer group">
                    <Mail className="h-5 w-5 text-primary opacity-40 group-hover:opacity-100" />
                    <span className="text-sm font-bold text-on-surface-variant group-hover:text-on-surface transition-colors">{teacher.email}</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl transition-all hover:bg-white hover:shadow-md cursor-pointer group">
                    <Phone className="h-5 w-5 text-primary opacity-40 group-hover:opacity-100" />
                    <span className="text-sm font-bold text-on-surface-variant group-hover:text-on-surface transition-colors">{teacher.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-[2.5rem] p-10 shadow-sm border border-slate-50">
              <h3 className="text-xl font-black font-headline mb-6 flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                Professional Bio
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-sm font-medium">
                {teacher.bio}
              </p>
            </div>
          </div>

          {/* Right Column: Schedule & Classes */}
          <div className="lg:col-span-8 space-y-8">
            {/* Weekly Schedule Grid */}
            <div className="bg-surface-container-lowest rounded-[3rem] p-10 shadow-sm border border-slate-50 overflow-hidden group">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-black font-headline flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-primary" />
                  Weekly Schedule
                </h3>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-5 gap-4 min-w-[500px]">
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map(day => (
                  <div key={day} className="text-center p-3 text-[10px] font-black text-outline uppercase tracking-widest border-b border-surface-container-low mb-2">
                    {day}
                  </div>
                ))}
                
                <div className="h-28 bg-primary/5 border-l-4 border-primary p-4 rounded-2xl group/slot cursor-pointer hover:bg-primary hover:text-white transition-all">
                  <p className="text-[10px] font-black group-hover/slot:text-white transition-colors">04:30 - 06:30</p>
                  <p className="text-sm font-black mt-1">A/L Physics</p>
                </div>
                <div className="h-28 bg-surface-container-low rounded-2xl group/empty hover:bg-white hover:shadow-inner transition-all border-2 border-transparent hover:border-dashed hover:border-slate-200"></div>
                <div className="h-28 bg-primary/5 border-l-4 border-primary p-4 rounded-2xl">
                  <p className="text-[10px] font-black">04:30 - 06:30</p>
                  <p className="text-sm font-black mt-1">A/L Physics</p>
                </div>
                <div className="h-28 bg-surface-container-low rounded-2xl"></div>
                <div className="h-28 bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-2xl">
                  <p className="text-[10px] font-black text-emerald-600">08:00 - 12:00</p>
                  <p className="text-sm font-black mt-1 text-on-surface">Revision Session</p>
                </div>
              </div>
            </div>

            {/* Assigned Classes */}
            <div className="bg-surface-container-lowest rounded-[3rem] p-10 shadow-sm border border-slate-50">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-black font-headline flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Assigned Classes
                </h3>
                <span className="text-[10px] font-black text-primary bg-primary-fixed px-4 py-1.5 rounded-full uppercase tracking-widest leading-none">Term 1 • 2024</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "A/L Physics 2026", info: "Hall A • Main Branch", icon: Atom, color: "text-indigo-600", bg: "bg-indigo-50" },
                  { name: "Combined Maths", info: "Hall C • Nugegoda", icon: Pi, color: "text-emerald-600", bg: "bg-emerald-50" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-surface-container-low/50 rounded-3xl hover:bg-white hover:shadow-xl transition-all cursor-pointer group border border-transparent hover:border-indigo-100/50">
                    <div className="flex items-center gap-5">
                      <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner transition-transform group-hover:scale-105", item.bg, item.color)}>
                        <item.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <p className="text-lg font-black text-on-surface group-hover:text-primary transition-colors">{item.name}</p>
                        <p className="text-xs font-bold text-on-surface-variant opacity-60 mt-0.5">{item.info}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-6 w-6 text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Onboarding Form Placeholder Section */}
        <div className="mt-12 bg-surface-container-low/50 rounded-[4rem] p-12 md:p-20 border border-white/50 backdrop-blur-sm shadow-inner overflow-hidden relative group">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
           <div className="max-w-4xl mx-auto relative z-10">
              <div className="text-center mb-16 space-y-4">
                <span className="px-5 py-2 bg-indigo-600 text-white text-[10px] font-black tracking-[0.2em] uppercase rounded-full shadow-lg shadow-indigo-600/20">Onboarding</span>
                <h2 className="text-4xl lg:text-5xl font-black font-headline text-on-surface tracking-tighter">Add New Faculty Member</h2>
                <p className="text-on-surface-variant font-bold text-lg max-w-xl mx-auto opacity-70">Initialize access and academic credentials for new staff members.</p>
              </div>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-outline uppercase tracking-widest pl-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full h-16 px-6 bg-white border-none rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold text-on-surface" 
                      placeholder="e.g. Marcus Thorne" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-outline uppercase tracking-widest pl-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full h-16 px-6 bg-white border-none rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold text-on-surface" 
                      placeholder="m.thorne@centerhub.edu" 
                    />
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-outline uppercase tracking-widest pl-1">Specialization</label>
                    <div className="relative">
                      <select className="w-full h-16 px-6 bg-white border-none rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 transition-all outline-none font-bold text-on-surface appearance-none cursor-pointer">
                        <option>Theoretical Mathematics</option>
                        <option>Biological Sciences</option>
                        <option>History & Humanities</option>
                        <option>Computer Science</option>
                      </select>
                      <Plus className="absolute right-6 top-1/2 -translate-y-1/2 text-primary h-5 w-5 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-outline uppercase tracking-widest pl-1">Access Protocol</label>
                    <label className="flex items-center justify-between p-4 bg-white/40 rounded-2xl border border-white/60 cursor-pointer hover:bg-white transition-all group/toggle">
                      <div>
                        <span className="block text-sm font-bold text-on-surface">Teacher Portal Access</span>
                        <span className="text-[10px] font-bold text-slate-400">Auto-credentials generation</span>
                      </div>
                      <div className="w-12 h-6 bg-primary rounded-full relative flex items-center px-1 shadow-inner">
                        <div className="w-4 h-4 bg-white rounded-full translate-x-6"></div>
                      </div>
                    </label>
                  </div>
                </div>
                
                <div className="md:col-span-2 flex flex-col md:flex-row justify-end gap-6 mt-6">
                  <button type="button" className="px-10 py-5 text-on-surface-variant font-black uppercase text-xs tracking-widest hover:opacity-70 transition-opacity">Discard Changes</button>
                  <button type="submit" className="primary-gradient text-white px-12 py-5 rounded-2xl font-black shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all">
                    Create Faculty Member
                  </button>
                </div>
              </form>
           </div>
        </div>
      </div>
    </main>
  )
}
