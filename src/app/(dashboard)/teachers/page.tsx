"use client"

import Link from "next/link"
import { Search, PlusCircle, MoreVertical, Mail, Phone, BookOpen, Clock, Star, MapPin, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"

const teachers = [
  { id: 1, name: "Mrs. Dilini Jayawardena", subject: "A/L Physics", classes: 8, rating: 4.9, status: "Active", avatar: "DJ" },
  { id: 2, name: "Mr. Nimal Perera", subject: "A/L Combined Mathematics", classes: 5, rating: 4.8, status: "Active", avatar: "NP" },
  { id: 3, name: "Dr. Sunil Gamage", subject: "O/L Science", classes: 12, rating: 5.0, status: "On Leave", avatar: "SG" },
  { id: 4, name: "Ms. Tharushi Silva", subject: "Grade 5 Scholarship", classes: 6, rating: 4.7, status: "Active", avatar: "TS" },
]

export default function TeachersPage() {
  return (
    <main className="pt-20 md:pt-8 p-6 md:p-10 min-h-screen space-y-8">
      <DashboardHeader 
        title="Faculty Management" 
        subtitle="Manage your team of educators, schedules, and performance metrics."
      />

      {/* Control Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-outline" />
          <input 
            type="text" 
            placeholder="Search teachers by name or subject..." 
            className="w-full h-12 pl-12 pr-4 rounded-2xl bg-surface-container-low border-none text-on-surface placeholder:text-outline-variant focus:ring-4 focus:ring-primary/10 transition-all outline-none"
          />
        </div>
        <button className="primary-gradient text-white px-8 py-4 rounded-full font-black text-sm flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
          <PlusCircle className="h-5 w-5" /> Add Faculty Member
        </button>
      </div>

      {/* Teachers Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="bg-surface-container-lowest p-6 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
            
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center font-black text-2xl text-primary shadow-inner">
                {teacher.avatar}
              </div>
              <button className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-1 mb-6">
              <h3 className="text-xl font-black text-on-surface tracking-tight">{teacher.name}</h3>
              <p className="text-sm font-bold text-primary flex items-center gap-2">
                <GraduationCap className="h-4 w-4" /> {teacher.subject}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-surface-container-low p-3 rounded-2xl">
                <div className="text-[10px] font-bold text-outline-variant uppercase tracking-widest mb-1">Classes</div>
                <div className="text-lg font-black text-on-surface">{teacher.classes}</div>
              </div>
              <div className="bg-surface-container-low p-3 rounded-2xl">
                <div className="text-[10px] font-bold text-outline-variant uppercase tracking-widest mb-1">Rating</div>
                <div className="flex items-center gap-1.5 text-lg font-black text-on-surface">
                  <Star className="h-4 w-4 text-amber-500 fill-amber-500" /> {teacher.rating}
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Link href={`/teachers/${teacher.id}`} className="flex-1 bg-surface-container-high py-3 rounded-xl text-xs font-black uppercase tracking-widest text-on-surface hover:bg-primary hover:text-white transition-all text-center">
                Profile
              </Link>
              <button className="w-12 bg-surface-container-high rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Schedule Teaser */}
      <section className="bg-surface-container-low p-8 rounded-[2.5rem] border border-white/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black tracking-tight text-on-surface">Teacher Availability</h3>
            <p className="text-on-surface-variant font-medium">Check real-time schedules and assign substitute teachers for missing slots.</p>
          </div>
          <button className="bg-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest text-primary shadow-xl shadow-primary/5 hover:scale-105 transition-all">
            View Dynamic Schedule
          </button>
        </div>
      </section>
    </main>
  )
}
