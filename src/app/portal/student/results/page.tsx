"use client"

import { 
  Award, 
  TrendingUp, 
  BookOpen, 
  ArrowUpRight, 
  Download, 
  ChevronRight,
  Target,
  FileText,
  Star,
  Search,
  Filter
} from "lucide-react"
import { cn } from "@/lib/utils"

const RECENT_EXAMS = [
  { id: "E1", subject: "Advanced Physics", title: "Monthly Mock #4", score: 88, max: 100, rank: "12 / 152", date: "Apr 05, 2026", grade: "A" },
  { id: "E2", subject: "Chemistry", title: "Organic Unit Test", score: 74, max: 100, rank: "45 / 84", date: "Mar 28, 2026", grade: "B" },
  { id: "E3", subject: "Combined Maths", title: "Integration Quiz", score: 92, max: 100, rank: "5 / 210", date: "Mar 15, 2026", grade: "A+" },
  { id: "E4", subject: "Advanced Physics", title: "Mechanics Final", score: 82, max: 100, rank: "24 / 152", date: "Mar 02, 2026", grade: "B+" },
]

export default function StudentResultsPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-700 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-on-surface tracking-tight">Academic Results</h1>
          <p className="text-sm text-on-surface-variant font-medium">Detailed breakdown of your exam scores, rankings, and performance history.</p>
        </div>
        
        <button className="primary-gradient px-8 py-3 rounded-2xl text-white font-black text-sm shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2">
           <Download className="h-4 w-4" /> Download Report Card
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 primary-gradient rounded-[3rem] p-10 text-white relative overflow-hidden group shadow-2xl shadow-primary/20 flex flex-col justify-between min-h-[320px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10">
               <div className="flex items-center gap-3 mb-6 bg-white/10 w-fit px-4 py-1.5 rounded-full border border-white/20">
                  <Star className="h-4 w-4 text-amber-300" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Top Performer - Maths</span>
               </div>
               <div className="space-y-2">
                  <h3 className="text-3xl font-black italic tracking-tight">Academic Excellence</h3>
                  <p className="max-w-md text-sm opacity-70 font-medium leading-relaxed">Your performance in Combined Mathematics has placed you in the Top 5% of the institute this month.</p>
               </div>
            </div>
            <div className="relative z-10 grid grid-cols-3 gap-10 mt-12">
               <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Avg. Grade</p>
                  <p className="text-4xl font-black italic">A</p>
               </div>
               <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Institute Rank</p>
                  <p className="text-4xl font-black italic">#14</p>
               </div>
               <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Exams Done</p>
                  <p className="text-4xl font-black italic">24</p>
               </div>
            </div>
         </div>

         <div className="bg-white rounded-[3rem] p-8 border border-outline-variant/10 shadow-ambient flex flex-col justify-between">
            <div className="space-y-6">
               <div className="flex items-center justify-between px-2">
                  <h3 className="text-lg font-black text-on-surface">Target Goal</h3>
                  <Target className="h-6 w-6 text-primary" />
               </div>
               <div className="space-y-4">
                  <div className="flex justify-between items-end">
                     <div>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Next Month Target</p>
                        <p className="text-xl font-black text-on-surface tracking-tight">Top 10 Rank</p>
                     </div>
                     <p className="text-sm font-black text-primary">75% Achieved</p>
                  </div>
                  <div className="w-full h-3 bg-surface-container-low rounded-full overflow-hidden border border-outline-variant/10">
                     <div className="h-full bg-primary" style={{ width: "75%" }}></div>
                  </div>
               </div>
            </div>
            <div className="p-6 bg-surface-container-low rounded-[2rem] border border-outline-variant/5">
               <p className="text-[10px] font-medium text-on-surface-variant leading-relaxed italic">"Consistent revision on organic chemistry will help improve your overall science average."</p>
               <p className="text-[10px] font-black uppercase tracking-widest text-primary mt-3">— Teacher Admin</p>
            </div>
         </div>
      </div>

      {/* Detailed Results Grid */}
      <div className="space-y-6">
         <div className="flex flex-col md:flex-row gap-4 items-center justify-between px-2">
            <h3 className="text-xl font-black text-on-surface">Recent Exam Results</h3>
            <div className="flex items-center gap-3 w-full md:w-auto">
               <div className="flex-1 relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-on-surface-variant group-focus-within:text-primary transition-colors" />
                  <input type="text" placeholder="Search exams..." className="w-full h-11 pl-11 pr-4 rounded-2xl bg-white border border-outline-variant/10 shadow-sm outline-none focus:ring-2 focus:ring-primary/20 text-sm font-medium" />
               </div>
               <button className="p-3 rounded-2xl bg-white border border-outline-variant/10 shadow-sm text-on-surface-variant hover:text-primary transition-all">
                  <Filter className="h-5 w-5" />
               </button>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RECENT_EXAMS.map((exam) => (
              <div key={exam.id} className="bg-white rounded-[2.5rem] p-8 border border-outline-variant/10 shadow-ambient group hover:border-primary/20 transition-all flex flex-col">
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                          <BookOpen className="h-6 w-6" />
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-primary">{exam.subject}</p>
                          <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{exam.title}</h4>
                       </div>
                    </div>
                    <div className="bg-slate-900 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg italic shadow-lg shadow-slate-900/10">
                       {exam.grade}
                    </div>
                 </div>

                 <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="space-y-1 text-center py-4 bg-surface-container-low/50 rounded-2xl">
                       <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Score</p>
                       <p className="text-lg font-black text-on-surface">{exam.score}<span className="text-xs opacity-40">/100</span></p>
                    </div>
                    <div className="space-y-1 text-center py-4 bg-surface-container-low/50 rounded-2xl">
                       <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Rank</p>
                       <p className="text-lg font-black text-on-surface">{exam.rank.split(' / ')[0]}</p>
                    </div>
                    <div className="space-y-1 text-center py-4 bg-surface-container-low/50 rounded-2xl">
                       <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Date</p>
                       <p className="text-xs font-black text-on-surface uppercase">{exam.date.split(',')[0]}</p>
                    </div>
                 </div>

                 <div className="mt-auto flex items-center justify-between pt-6 border-t border-outline-variant/5">
                    <button className="flex items-center gap-2 text-xs font-black text-primary hover:gap-3 transition-all">
                       <FileText className="h-4 w-4" /> View Detailed Paper Review <ChevronRight className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-xl hover:bg-surface-container-low transition-all text-on-surface-variant">
                       <Download className="h-4 w-4" />
                    </button>
                 </div>
              </div>
            ))}
         </div>
         
         <button className="w-full py-5 rounded-[2rem] bg-surface-container-low/50 border border-dashed border-outline-variant/20 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant hover:bg-white hover:text-primary transition-all">
            Load More Results
         </button>
      </div>
    </div>
  )
}
