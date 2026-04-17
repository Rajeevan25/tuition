"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Video,
  ClipboardCheck,
  CreditCard,
  Download,
  X,
  Plus
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const TIMES = ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"]

const STUDENT_EVENTS = [
  { id: 1, subject: "Physics", teacher: "Mr. Kamal Silva", day: "Sunday", time: "08:00 AM", duration: 2, color: "bg-indigo-600", hall: "Main Hall A", status: "Paid" },
  { id: 2, subject: "Chemistry", teacher: "Ms. Nimali de Silva", day: "Tuesday", time: "04:00 PM", duration: 1.5, color: "bg-rose-600", hall: "Science Lab 01", status: "Pending" },
  { id: 3, subject: "Maths", teacher: "Mr. Sunil Perera", day: "Thursday", time: "05:00 PM", duration: 2, color: "bg-emerald-600", hall: "Basics 02", status: "Paid" },
]

export default function StudentTimetablePage() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null)

  return (
    <div className="min-h-screen bg-slate-50/50 p-8 space-y-10">
      {/* Header */}
      <div className="flex justify-between items-center">
         <div>
            <h1 className="text-3xl font-black text-on-surface tracking-tight">Your Weekly Schedule</h1>
            <p className="text-sm font-medium text-on-surface-variant opacity-60">Stay organized. You have 3 active classes this week.</p>
         </div>
         <div className="flex gap-4">
            <button className="h-14 px-8 rounded-2xl bg-white border border-outline-variant/10 flex items-center gap-3 text-on-surface font-black text-xs uppercase tracking-widest shadow-sm hover:scale-105 transition-all">
               <Download className="h-5 w-5 text-primary" /> Download PDF
            </button>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         {/* Left Side: Summary & Payment */}
         <div className="lg:col-span-3 space-y-6">
            <div className="bg-white p-8 rounded-[3rem] border border-outline-variant/10 shadow-sm space-y-8">
               <h3 className="text-lg font-black text-on-surface tracking-tight">Enrollment Summary</h3>
               <div className="space-y-6">
                  {STUDENT_EVENTS.map(e => (
                    <div key={e.id} className="flex items-center gap-4">
                       <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white", e.color)}>
                          <ClipboardCheck className="h-6 w-6" />
                       </div>
                       <div>
                          <p className="text-xs font-black text-on-surface">{e.subject}</p>
                          <p className="text-[10px] font-medium text-on-surface-variant opacity-60">{e.teacher}</p>
                       </div>
                    </div>
                  ))}
               </div>
               <div className="pt-6 border-t border-outline-variant/5">
                  <div className="flex justify-between items-center mb-4">
                     <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Payment Status</p>
                     <span className="text-[9px] font-black uppercase text-amber-600">Action Required</span>
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-2xl flex justify-between items-center transition-all hover:bg-slate-100 cursor-pointer">
                     <div className="flex items-center gap-3">
                        <CreditCard className="h-4 w-4 text-rose-500" />
                        <span className="text-xs font-bold">2 Months Pending</span>
                     </div>
                     <ChevronRight className="h-3 w-3 opacity-40" />
                  </div>
               </div>
            </div>

            <div className="bg-indigo-600 rounded-[3rem] p-8 text-white space-y-6 shadow-xl shadow-indigo-600/20">
               <div className="flex items-center gap-3">
                  <Video className="h-6 w-6" />
                  <h3 className="text-lg font-black tracking-tight">VOD Access</h3>
               </div>
               <p className="text-xs font-medium opacity-60 leading-relaxed">Missed a class? All recordings are available for 30 days after the live session.</p>
               <button className="w-full py-4 rounded-2xl bg-white text-indigo-600 font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all">
                  Browse Recordings
               </button>
            </div>
         </div>

         {/* Timetable Grid Area */}
         <div className="lg:col-span-9 bg-white rounded-[4rem] border border-outline-variant/10 shadow-ambient overflow-hidden">
            <div className="p-8 border-b border-outline-variant/5 flex justify-between items-center bg-surface-container-low/20">
               <div className="flex items-center gap-4">
                  <button className="p-3 rounded-xl bg-white text-on-surface-variant hover:text-primary transition-all shadow-sm">
                     <ChevronLeft className="h-5 w-5" />
                  </button>
                  <h2 className="text-xl font-black text-on-surface">March 16 - March 22, 2026</h2>
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
                              
                              {STUDENT_EVENTS.filter(e => e.day === day).map(event => {
                                 const top = TIMES.indexOf(event.time) * 96
                                 const height = event.duration * 96
                                 return (
                                    <motion.div 
                                      key={event.id}
                                      onClick={() => setSelectedEvent(event)}
                                      className={cn(
                                        "absolute left-2 right-2 rounded-3xl p-5 text-white shadow-xl flex flex-col justify-between cursor-pointer border-2 border-transparent hover:scale-[1.02] transition-all",
                                        event.color,
                                        event.status === "Pending" ? "border-amber-400" : "border-transparent"
                                      )}
                                      style={{ top: top + 4, height: height - 8 }}
                                    >
                                       <div className="space-y-1">
                                          <div className="flex items-center gap-1 opacity-60">
                                             <Clock className="h-3 w-3" />
                                             <span className="text-[8px] font-black uppercase tracking-widest">{event.time}</span>
                                          </div>
                                          <h4 className="font-black text-xs leading-tight">{event.subject}</h4>
                                          <p className="text-[9px] font-medium opacity-60">{event.teacher}</p>
                                       </div>
                                       
                                       <div className="flex justify-between items-end">
                                          <div className="flex items-center gap-1 opacity-60">
                                             <MapPin className="h-3 w-3" />
                                             <span className="text-[8px] font-black uppercase tracking-widest">{event.hall}</span>
                                          </div>
                                          {event.status === "Pending" && (
                                             <div className="h-2 w-2 rounded-full bg-amber-400 animate-pulse shadow-glow shadow-amber-400/50" />
                                          )}
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
                    <div className={cn(
                      "px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest",
                      selectedEvent.status === "Paid" ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                    )}>
                       {selectedEvent.status}
                    </div>
                 </div>

                 <div className="space-y-6">
                    <div className={cn("w-20 h-20 rounded-[2.5rem] flex items-center justify-center text-white shadow-lg", selectedEvent.color)}>
                       <Calendar className="h-10 w-10" />
                    </div>
                    <div>
                       <h2 className="text-3xl font-black text-on-surface tracking-tight">{selectedEvent.subject}</h2>
                       <p className="text-sm font-black text-primary uppercase tracking-widest mt-1">{selectedEvent.teacher}</p>
                    </div>
                 </div>

                 <div className="p-8 bg-surface-container-low/50 rounded-[2.5rem] space-y-4">
                    <div className="flex justify-between items-center">
                       <p className="text-[10px] font-black uppercase opacity-40">Date & Time</p>
                       <p className="text-xs font-black">{selectedEvent.day}, {selectedEvent.time}</p>
                    </div>
                    <div className="flex justify-between items-center">
                       <p className="text-[10px] font-black uppercase opacity-40">Location</p>
                       <p className="text-xs font-black">{selectedEvent.hall}</p>
                    </div>
                    <div className="flex justify-between items-center">
                       <p className="text-[10px] font-black uppercase opacity-40">Session Type</p>
                       <p className="text-xs font-black">Hybrid / Live</p>
                    </div>
                 </div>

                 <div className="space-y-4 flex-1">
                    <h4 className="text-[10px] font-black uppercase tracking-widest opacity-40">Learning Portal</h4>
                    <div className="space-y-3">
                       <button className="w-full p-6 rounded-3xl bg-indigo-600 text-white font-black text-sm uppercase tracking-widest flex justify-between items-center group">
                          Join Live Zoom
                          <Video className="h-5 w-5" />
                       </button>
                       <button className="w-full p-6 rounded-3xl bg-white border border-outline-variant/10 text-on-surface font-black text-sm uppercase tracking-widest flex justify-between items-center hover:border-primary/30 transition-all group">
                          View Study Materials
                          <Download className="h-5 w-5" />
                       </button>
                    </div>
                 </div>

                 <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                       <Plus className="h-5 w-5" />
                    </div>
                    <div>
                       <p className="text-xs font-black text-on-surface">Private Query?</p>
                       <p className="text-[10px] font-medium text-on-surface-variant opacity-60">Send a direct message to {selectedEvent.teacher.split(' ').pop()}</p>
                    </div>
                 </div>
              </motion.div>
           </div>
        )}
      </AnimatePresence>
    </div>
  )
}
