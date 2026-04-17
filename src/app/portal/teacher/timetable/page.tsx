"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Users, 
  Video,
  ClipboardCheck,
  FileUp,
  MoreVertical,
  X,
  AlertCircle
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const TIMES = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"]

const TEACHER_EVENTS = [
  { id: 1, subject: "Physics", batch: "Grade 11 - Theory", day: "Sunday", time: "08:00 AM", duration: 2, color: "bg-indigo-600", students: 42 },
  { id: 2, subject: "Physics", batch: "A/L 2025 - Revision", day: "Monday", time: "04:00 PM", duration: 2, color: "bg-rose-600", students: 28 },
  { id: 3, subject: "Physics", batch: "Grade 10 - Basics", day: "Wednesday", time: "05:00 PM", duration: 1.5, color: "bg-emerald-600", students: 15 },
]

export default function TeacherTimetablePage() {
  const [view, setView] = useState("week")
  const [selectedEvent, setSelectedEvent] = useState<any>(null)

  return (
    <div className="min-h-screen bg-slate-50/50 p-8 space-y-10">
      {/* Header */}
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-3xl font-black text-on-surface tracking-tight">Your Schedule</h1>
            <p className="text-sm font-medium text-on-surface-variant opacity-60">Welcome back, Mr. Kamal. You have 3 classes this week.</p>
         </div>
         <div className="flex gap-4">
            <button className="h-14 px-6 rounded-2xl bg-white border border-outline-variant/10 flex items-center gap-3 text-on-surface font-black text-xs uppercase tracking-widest shadow-sm hover:scale-105 transition-all">
               <FileUp className="h-5 w-5 text-primary" /> Upload Materials
            </button>
            <div className="flex bg-white p-1 rounded-2xl border border-outline-variant/10 shadow-sm">
               <button onClick={() => setView("day")} className={cn("px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all", view === "day" ? "bg-primary text-white" : "text-on-surface-variant")}>Day</button>
               <button onClick={() => setView("week")} className={cn("px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all", view === "week" ? "bg-primary text-white" : "text-on-surface-variant")}>Week</button>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Upcoming Alert Section */}
         <div className="lg:col-span-3 space-y-6">
            <div className="bg-primary rounded-[3rem] p-8 text-white space-y-8 shadow-xl shadow-primary/20">
               <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Next Class Starting In</p>
                  <h3 className="text-4xl font-black tabular-nums">14:20:05</h3>
               </div>
               <div className="p-6 bg-white/10 rounded-3xl space-y-4">
                  <div>
                     <p className="text-[10px] font-black uppercase opacity-40">Batch</p>
                     <p className="font-black">Grade 11 Physics</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold opacity-60">
                     <MapPin className="h-4 w-4" /> Main Hall A
                  </div>
                  <button className="w-full py-4 rounded-2xl bg-white text-primary font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all">
                     Join Session
                  </button>
               </div>
            </div>

            <div className="bg-white p-8 rounded-[3rem] border border-outline-variant/10 shadow-sm space-y-6">
               <h3 className="text-lg font-black text-on-surface tracking-tight">Recent Sessions</h3>
               <div className="space-y-4">
                  {[1, 2].map(i => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-surface-container-low/30 border border-outline-variant/5">
                       <div>
                          <p className="text-xs font-black text-on-surface">Sat, 14th March</p>
                          <p className="text-[10px] font-medium text-emerald-600">Attendance: 98%</p>
                       </div>
                       <button className="p-2 rounded-xl text-on-surface-variant hover:bg-white hover:text-primary transition-all">
                          <ChevronRight className="h-4 w-4" />
                       </button>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Timetable Grid */}
         <div className="lg:col-span-9 bg-white rounded-[4rem] border border-outline-variant/10 shadow-ambient overflow-hidden">
            <div className="p-8 border-b border-outline-variant/5 flex justify-between items-center bg-surface-container-low/20">
               <div className="flex items-center gap-4">
                  <button className="p-3 rounded-xl bg-white text-on-surface-variant hover:text-primary transition-all shadow-sm">
                     <ChevronLeft className="h-5 w-5" />
                  </button>
                  <h2 className="text-xl font-black text-on-surface tracking-tight">March 16 - March 22</h2>
                  <button className="p-3 rounded-xl bg-white text-on-surface-variant hover:text-primary transition-all shadow-sm">
                     <ChevronRight className="h-5 w-5" />
                  </button>
               </div>
            </div>

            <div className="overflow-auto no-scrollbar">
               <div className="min-w-[1000px]">
                  <div className="flex border-b border-outline-variant/5">
                     <div className="w-20 border-r border-outline-variant/5" />
                     {DAYS.map(day => (
                        <div key={day} className="flex-1 p-6 text-center border-r border-outline-variant/5">
                           <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{day.substring(0,3)}</p>
                           <p className="text-lg font-black text-on-surface mt-1">{16 + DAYS.indexOf(day)}</p>
                        </div>
                     ))}
                  </div>

                  <div className="flex relative">
                     <div className="w-20 border-r border-outline-variant/5">
                        {TIMES.map(time => (
                           <div key={time} className="h-24 p-2 text-right border-b border-outline-variant/5">
                              <span className="text-[8px] font-black uppercase tracking-widest text-on-surface-variant opacity-40">{time}</span>
                           </div>
                        ))}
                     </div>

                     <div className="flex-1 flex relative">
                        {DAYS.map(day => (
                           <div key={day} className="flex-1 border-r border-outline-variant/5 relative h-full">
                              {TIMES.map(t => <div key={t} className="h-24 border-b border-outline-variant/5 hover:bg-slate-50 transition-colors" />)}
                              
                              {TEACHER_EVENTS.filter(e => e.day === day).map(event => {
                                 const top = TIMES.indexOf(event.time) * 96
                                 const height = event.duration * 96
                                 return (
                                    <motion.div 
                                      key={event.id}
                                      onClick={() => setSelectedEvent(event)}
                                      className={cn(
                                        "absolute left-2 right-2 rounded-3xl p-5 text-white shadow-xl flex flex-col justify-between cursor-pointer border-2 border-transparent hover:scale-[1.02] transition-all",
                                        event.color
                                      )}
                                      style={{ top: top + 4, height: height - 8 }}
                                    >
                                       <div className="space-y-1">
                                          <div className="flex items-center gap-1 opacity-60">
                                             <Clock className="h-3 w-3" />
                                             <span className="text-[8px] font-black uppercase tracking-widest">{event.time}</span>
                                          </div>
                                          <h4 className="font-black text-xs leading-tight">{event.batch}</h4>
                                          <div className="flex items-center gap-1 opacity-60">
                                             <MapPin className="h-3 w-3" />
                                             <span className="text-[8px] font-black uppercase tracking-widest">Main Hall A</span>
                                          </div>
                                       </div>
                                       <div className="flex justify-between items-center">
                                          <div className="flex items-center gap-1.5 bg-white/20 px-2 py-1 rounded-lg">
                                             <Users className="h-3 w-3" />
                                             <span className="text-[9px] font-black">{event.students}</span>
                                          </div>
                                          <ClipboardCheck className="h-4 w-4 opacity-40" />
                                       </div>
                                    </motion.div>
                                 )
                              })}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Event Details Overlay */}
      <AnimatePresence>
        {selectedEvent && (
           <div className="fixed inset-0 z-[100] flex items-center justify-end p-8">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedEvent(null)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
              <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="relative w-full max-w-md h-full bg-white rounded-[4rem] p-12 space-y-10 shadow-2xl flex flex-col">
                 <div className="flex justify-between items-center">
                    <button onClick={() => setSelectedEvent(null)} className="p-3 rounded-2xl bg-surface-container-low text-on-surface-variant hover:text-error transition-all"><X className="h-6 w-6" /></button>
                    <div className="h-8 w-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center"><MoreVertical className="h-5 w-5" /></div>
                 </div>

                 <div className="space-y-6">
                    <div className={cn("w-20 h-20 rounded-[2.5rem] flex items-center justify-center text-white shadow-lg", selectedEvent.color)}>
                       <ClipboardCheck className="h-10 w-10" />
                    </div>
                    <div>
                       <h2 className="text-3xl font-black text-on-surface tracking-tight">{selectedEvent.batch}</h2>
                       <p className="text-sm font-black text-primary uppercase tracking-widest mt-1">{selectedEvent.subject} • Sunday, March 22</p>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-surface-container-low/50 p-6 rounded-3xl space-y-2">
                       <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Attendance Ratio</p>
                       <p className="text-2xl font-black text-on-surface">94.2%</p>
                    </div>
                    <div className="bg-surface-container-low/50 p-6 rounded-3xl space-y-2">
                       <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Class Duration</p>
                       <p className="text-2xl font-black text-on-surface">2.5h</p>
                    </div>
                 </div>

                 <div className="space-y-4 flex-1">
                    <h4 className="text-[10px] font-black uppercase tracking-widest opacity-40">Session Actions</h4>
                    <div className="space-y-3">
                       <button className="w-full p-6 rounded-3xl bg-indigo-600 text-white font-black text-sm uppercase tracking-widest flex justify-between items-center group">
                          Mark Attendance
                          <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                       </button>
                       <button className="w-full p-6 rounded-3xl bg-white border border-outline-variant/10 text-on-surface font-black text-sm uppercase tracking-widest flex justify-between items-center hover:border-primary/30 transition-all group">
                          Release Results
                          <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                       </button>
                       <button className="w-full p-6 rounded-3xl bg-white border border-outline-variant/10 text-on-surface font-black text-sm uppercase tracking-widest flex justify-between items-center hover:border-primary/30 transition-all group">
                          Class Forum
                          <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                       </button>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <button className="flex-1 py-4 rounded-2xl bg-error/10 text-error font-black text-xs uppercase tracking-widest">Postpone</button>
                    <button className="flex-1 py-4 rounded-2xl bg-amber-100 text-amber-700 font-black text-xs uppercase tracking-widest">Report Issue</button>
                 </div>
              </motion.div>
           </div>
        )}
      </AnimatePresence>
    </div>
  )
}
