"use client"

import { useState } from "react"
import { 
  Users, 
  Search, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Save,
  Filter,
  ChevronDown,
  Play
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function TutorAttendance() {
  const [selectedBatch, setSelectedBatch] = useState("A/L Physics 2026")
  
  const studentList = [
    { id: "S101", name: "Amavi Jayasinghe", status: "present", time: "04:25 PM" },
    { id: "S102", name: "Dilshan Perera", status: "late", time: "04:42 PM" },
    { id: "S103", name: "Kasun Kalhara", status: "absent", time: "-" },
    { id: "S104", name: "Malki Silva", status: "present", time: "04:28 PM" },
    { id: "S105", name: "Nimesh Fernando", status: "present", time: "04:30 PM" },
  ]

  return (
    <div className="space-y-12 pb-12">
       <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black tracking-tighter text-slate-900 font-headline">Session Attendance</h1>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Mark attendance for today's active sessions</p>
        </div>
        <div className="flex gap-4">
           <div className="bg-white px-6 py-3 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm cursor-pointer hover:bg-slate-50 transition-all">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Batch:</span>
              <span className="text-xs font-bold text-indigo-600 flex items-center gap-2">
                {selectedBatch} <ChevronDown className="h-4 w-4" />
              </span>
           </div>
        </div>
      </header>

      <div className="bg-white rounded-[3.5rem] p-10 shadow-sm border border-slate-50 space-y-10">
         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 bg-indigo-50 border border-indigo-100 px-6 py-4 rounded-2xl">
               <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                  <Play className="h-5 w-5 fill-current" />
               </div>
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-indigo-500">Live Session</p>
                  <p className="text-sm font-bold text-indigo-900">A/L Physics 2026 • Started 15m ago</p>
               </div>
            </div>
            
            <div className="relative w-full md:w-80">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
               <input type="text" placeholder="Search student name or ID..." className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold outline-none focus:ring-4 focus:ring-indigo-50 transition-all" />
            </div>
         </div>

         {/* Attendance Table */}
         <div className="overflow-x-auto">
            <table className="w-full">
               <thead>
                  <tr className="border-b border-slate-50">
                     <th className="pb-6 text-left text-[10px] font-black uppercase tracking-widest text-slate-300">Student Detail</th>
                     <th className="pb-6 text-center text-[10px] font-black uppercase tracking-widest text-slate-300">Check-in Time</th>
                     <th className="pb-6 text-right text-[10px] font-black uppercase tracking-widest text-slate-300">Status Selection</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-slate-50">
                  {studentList.map((st) => (
                    <tr key={st.id} className="group hover:bg-slate-50/50 transition-colors">
                       <td className="py-6">
                          <div className="flex items-center gap-4">
                             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${st.id}`} className="w-10 h-10 rounded-xl ring-2 ring-white shadow-sm" alt="Avatar" />
                             <div>
                                <p className="font-bold text-slate-800">{st.name}</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{st.id}</p>
                             </div>
                          </div>
                       </td>
                       <td className="py-6 text-center">
                          <span className={cn(
                            "text-xs font-bold font-mono",
                            st.status === "present" ? "text-emerald-600" : st.status === "late" ? "text-amber-600" : "text-slate-300"
                          )}>
                             {st.time}
                          </span>
                       </td>
                       <td className="py-6">
                          <div className="flex justify-end gap-2">
                             <button className={cn(
                               "px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                               st.status === "present" ? "bg-emerald-500 text-white shadow-lg shadow-emerald-200" : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                             )}>
                               Present
                             </button>
                             <button className={cn(
                               "px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                               st.status === "late" ? "bg-amber-500 text-white shadow-lg shadow-amber-200" : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                             )}>
                               Late
                             </button>
                             <button className={cn(
                               "px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                               st.status === "absent" ? "bg-rose-500 text-white shadow-lg shadow-rose-200" : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                             )}>
                               Absent
                             </button>
                          </div>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>

         <div className="flex items-center justify-between pt-10 border-t border-slate-50 gap-6">
            <div className="flex items-center gap-3">
               <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-indigo-50 flex items-center justify-center text-[8px] font-black text-indigo-600">JS</div>)}
               </div>
               <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase">124 Students remaining to be marked</p>
            </div>
            <button className="bg-indigo-600 text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all">
               Finalize Attendance Sheet <Save className="h-4 w-4" />
            </button>
         </div>
      </div>
    </div>
  )
}
