"use client"

import { useState } from "react"
import { 
  FileText, 
  Calendar, 
  UserSquare2, 
  Plus, 
  CheckCircle2, 
  XCircle, 
  Clock,
  HeartPulse,
  Info
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function FacultyHR() {
  const [requestType, setRequestType] = useState<"leave" | "coverage">("leave")

  const activeRequests = [
    { id: 1, type: "Leave", date: "Oct 24, 2023", reason: "Poya Day (Religious holiday)", status: "Approved", notes: "Coverage found: Mr. Bandara" },
    { id: 2, type: "Coverage", date: "Oct 19, 2023", reason: "Emergency medical checkup", status: "Pending", notes: "Waiting for tutor confirmation" },
  ]

  const coverageOptions = [
    { name: "Mr. Bandara", subject: "Physics", available: true },
    { name: "Ms. Tharushi", subject: "Combined Maths", available: true },
    { name: "Dr. Gamage", subject: "ICT", available: false },
  ]

  return (
    <div className="space-y-12 pb-12">
      <header>
        <h1 className="text-3xl font-black tracking-tighter text-slate-900 font-headline">Faculty HR & Coverage</h1>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Manage your leave and find class coverage</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Form Composer */}
        <div className="lg:col-span-12">
           <div className="bg-white rounded-[3.5rem] p-10 shadow-sm border border-slate-50 space-y-10">
              <div className="flex p-1.5 bg-slate-50 rounded-[2rem] w-fit border border-slate-100">
                <button 
                  onClick={() => setRequestType("leave")}
                  className={cn(
                    "px-10 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all",
                    requestType === "leave" ? "bg-indigo-600 text-white shadow-lg" : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  Request Leave
                </button>
                <button 
                  onClick={() => setRequestType("coverage")}
                  className={cn(
                    "px-10 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all",
                    requestType === "coverage" ? "bg-indigo-600 text-white shadow-lg" : "text-slate-400 hover:text-slate-600"
                  )}
                >
                  Request Coverage
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div className="space-y-6">
                    <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 flex items-center gap-2">
                          <Calendar className="h-4 w-4" /> Selected Date(s)
                       </label>
                       <input type="date" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold outline-none focus:ring-4 focus:ring-indigo-50 transition-all font-body uppercase" />
                    </div>
                    
                    <div className="space-y-4">
                       <label className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 flex items-center gap-2">
                          <FileText className="h-4 w-4" /> Reason / Notes
                       </label>
                       <textarea 
                        rows={4}
                        placeholder="Please provide a brief reason for the request..."
                        className="w-full p-6 bg-slate-50 border border-slate-100 rounded-[2rem] text-sm font-medium outline-none focus:ring-4 focus:ring-indigo-50 transition-all resize-none"
                       />
                    </div>
                 </div>

                 <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500 flex items-center gap-2">
                       <UserSquare2 className="h-4 w-4" /> Suggested Substitute (Optional)
                    </label>
                    <div className="grid grid-cols-1 gap-3 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                       {coverageOptions.map((tutor, i) => (
                         <div key={i} className={cn(
                           "p-5 rounded-2xl border transition-all flex items-center justify-between",
                           tutor.available ? "bg-white border-slate-100 hover:border-indigo-100 cursor-pointer" : "bg-slate-50 border-transparent opacity-40 grayscale pointer-events-none"
                         )}>
                            <div className="flex items-center gap-4">
                               <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-indigo-600">
                                  <UserSquare2 className="h-5 w-5" />
                               </div>
                               <div>
                                  <p className="text-sm font-bold text-slate-800">{tutor.name}</p>
                                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{tutor.subject} Faculty</p>
                               </div>
                            </div>
                            {tutor.available ? <Plus className="h-4 w-4 text-slate-300" /> : <XCircle className="h-4 w-4 text-rose-300" />}
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="pt-8 border-t border-slate-50 flex items-center justify-between gap-6">
                 <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-2xl border border-amber-100 max-w-sm">
                    <Info className="h-5 w-5 text-amber-500 flex-shrink-0" />
                    <p className="text-[10px] font-bold text-amber-700 leading-relaxed italic">Center admin will review this request. You will receive a notification in your portal upon approval.</p>
                 </div>
                 <button className="bg-slate-900 text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl hover:scale-105 active:scale-95 transition-all">
                    Submit Faculty Request
                 </button>
              </div>
           </div>
        </div>

        {/* Request History */}
        <div className="lg:col-span-12 space-y-6 mt-6">
           <h3 className="text-xl font-black font-headline tracking-tighter">My Application History</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeRequests.map((req) => (
                <div key={req.id} className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-50 space-y-6 relative overflow-hidden group hover:shadow-xl transition-all">
                   <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                         <div className={cn(
                           "p-3 rounded-xl",
                           req.status === "Approved" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                         )}>
                            <HeartPulse className="h-5 w-5" />
                         </div>
                         <div>
                            <p className="font-black text-[10px] uppercase tracking-widest text-slate-400">Request ID: #{req.id}921</p>
                            <h4 className="font-black text-slate-800">{req.type} on {req.date}</h4>
                         </div>
                      </div>
                      <span className={cn(
                        "text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg",
                        req.status === "Approved" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                      )}>
                        {req.status}
                      </span>
                   </div>
                   
                   <p className="text-sm font-medium text-slate-500 italic">" {req.reason} "</p>
                   
                   <div className="pt-4 border-t border-slate-50 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300">
                      <CheckCircle2 className="h-4 w-4" /> {req.notes}
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  )
}
