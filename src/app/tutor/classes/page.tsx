"use client"

import { useState } from "react"
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Circle, 
  Users, 
  Calendar,
  Layers,
  Search,
  Plus
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function TeacherClasses() {
  const [expandedClass, setExpandedClass] = useState<number | null>(1)

  const myClasses = [
    { 
      id: 1, 
      name: "A/L Physics 2026 (Batch A)", 
      schedule: "Mon/Wed 4:30 PM", 
      students: 124, 
      progress: 68,
      topics: [
        { name: "Unit 1: Measurement & Dimensions", status: "Completed" },
        { name: "Unit 2: Mechanics - Motion", status: "Completed" },
        { name: "Unit 3: Mechanics - Forces & Torque", status: "In Progress" },
        { name: "Unit 4: Thermal Physics", status: "Pending" },
        { name: "Unit 5: Oscillations & Waves", status: "Pending" },
      ]
    },
    { 
      id: 2, 
      name: "Combined Mathematics (Revision)", 
      schedule: "Sundays 8:00 AM", 
      students: 86, 
      progress: 42,
      topics: [
        { name: "Section A: Pure Mathematics - Algebra", status: "Completed" },
        { name: "Section B: Trigonometry", status: "Completed" },
        { name: "Section C: Calculus (Integration)", status: "In Progress" },
        { name: "Section D: Statistics", status: "Pending" },
      ]
    },
  ]

  const toggleExpand = (id: number) => {
    setExpandedClass(expandedClass === id ? null : id)
  }

  return (
    <div className="space-y-12">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black tracking-tighter text-slate-900 font-headline">Academic Roadmap</h1>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Syllabus Progress & Batches</p>
        </div>
        <div className="hidden md:flex items-center gap-4">
           <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
              <input type="text" placeholder="Search syllabus..." className="pl-12 pr-6 py-3 bg-white border border-slate-100 rounded-full text-xs font-bold outline-none focus:ring-4 focus:ring-indigo-100 transition-all" />
           </div>
        </div>
      </header>

      {/* Classes Syllabus Grid */}
      <div className="space-y-6">
        {myClasses.map((cls) => (
          <div key={cls.id} className="bg-white rounded-[3.5rem] shadow-sm border border-slate-50 overflow-hidden group hover:shadow-xl hover:shadow-indigo-100/20 transition-all">
             {/* Class Header */}
             <div 
               onClick={() => toggleExpand(cls.id)}
               className="p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer hover:bg-slate-50/50 transition-colors"
             >
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center text-white shadow-lg shadow-indigo-100">
                      <Layers className="h-8 w-8" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-black text-slate-800">{cls.name}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                           <Calendar className="h-3.5 w-3.5" /> {cls.schedule}
                        </div>
                        <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-500">
                           <Users className="h-3.5 w-3.5" /> {cls.students} Students
                        </div>
                      </div>
                   </div>
                </div>

                <div className="flex items-center gap-10">
                   <div className="text-right hidden sm:block">
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-300 mb-1">Total Completion</div>
                      <div className="flex items-center gap-3">
                         <span className="text-xl font-black text-slate-800">{cls.progress}%</span>
                         <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${cls.progress}%` }}></div>
                         </div>
                      </div>
                   </div>
                   {expandedClass === cls.id ? <ChevronUp className="h-6 w-6 text-slate-300" /> : <ChevronDown className="h-6 w-6 text-slate-300" />}
                </div>
             </div>

             {/* Expanded Syllabus Details */}
             {expandedClass === cls.id && (
               <div className="px-10 pb-10 pt-4 border-t border-slate-50 grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-12 space-y-6">
                    <div className="flex justify-between items-center">
                       <h4 className="text-sm font-black uppercase tracking-widest text-indigo-500">Curriculum Checklist</h4>
                       <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors">
                          <Plus className="h-4 w-4" /> Add Topic Note
                       </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {cls.topics.map((topic, i) => (
                         <div key={i} className={cn(
                           "p-6 rounded-[2rem] border transition-all flex items-center justify-between group/topic",
                           topic.status === "Completed" ? "bg-emerald-50 border-emerald-100" : topic.status === "In Progress" ? "bg-amber-50 border-amber-100" : "bg-white border-slate-100"
                         )}>
                            <div className="flex items-center gap-4">
                               {topic.status === "Completed" ? (
                                 <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                               ) : (
                                 <Circle className="h-6 w-6 text-slate-200 group-hover/topic:text-indigo-400 transition-colors cursor-pointer" />
                               )}
                               <div>
                                  <p className={cn(
                                    "font-bold text-sm",
                                    topic.status === "Completed" ? "text-emerald-900 line-through opacity-60" : "text-slate-800"
                                  )}>
                                    {topic.name}
                                  </p>
                                  <span className={cn(
                                    "text-[9px] font-black uppercase tracking-[0.15em]",
                                    topic.status === "Completed" ? "text-emerald-600" : topic.status === "In Progress" ? "text-amber-600" : "text-slate-300"
                                  )}>
                                    {topic.status}
                                  </span>
                               </div>
                            </div>
                            <button className="text-[10px] font-black uppercase tracking-widest text-indigo-600 opacity-0 group-hover/topic:opacity-100 transition-opacity">
                               Update Status
                            </button>
                         </div>
                       ))}
                    </div>
                  </div>
               </div>
             )}
          </div>
        ))}
      </div>

      {/* Syllabus Planning Suggestion */}
      <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl space-y-6">
               <h3 className="text-3xl font-black font-headline tracking-tighter">Stay Ahead of the Exams.</h3>
               <p className="text-slate-400 font-medium leading-relaxed italic">"Based on your current progress, we suggest completing Unit 4 (Thermal Physics) by November 12th to allow 4 weeks for full paper revision."</p>
            </div>
            <button className="bg-white text-slate-900 px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all">
               Generate Revision Plan
            </button>
         </div>
         <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 opacity-20 rounded-full blur-[80px]"></div>
      </div>
    </div>
  )
}
